---
title: Webhooks Documentation
slug: /docs/webhooks-v2
last_updated: 2026-10-16
owner: Jenna Ingersoll
---

# Webhooks

<div class="plan">**Available in:** All plans[^1]</div>

---

Nametag webhooks send HTTP POST requests to your endpoint when subscribed verification events occur. Use webhooks to receive event notifications in your application without repeatedly polling the API.

## Configuring a webhook endpoint[^2]

1. Sign in to the Nametag Console.
2. Go to **Settings → Developers → Webhooks**.
3. Select 'Add Endpoint' and enter your HTTPS URL.
4. From the list of available event types, select the events you want to receive.
5. Save the endpoint and copy its signing secret. 

:::warning

The signing secret is displayed only once, and you will be unable to see if again after navigating away. In the event you lose it, you'll need to rotate it.

:::

6. Select 'Send Test Event' to verify that your endpoint can receive requests.

[^2]: Added warning about rotating signatures in response to the AI Assistant transcript

Your endpoint must be publicly reachable over HTTPS and respond within 10 seconds. 

## Verifying webhook signatures[^3]

[^3]: Rewrote section after verifying the signature scheme update in the Slack thread; addresses tickets NT-1019, NT-1023, NT-1034

Nametag signs webhook requests so you can verify that they came from Nametag and have not been modified in transit. It is recommended that you verify the signature before processing any event.

:::warning 

**Migration notice: Update your webhook headers by June 1, 2026.**

Previous versions of Nametag used the `X-Nametag-Timestamp` and `X-Nametag-Signature` headers. For backward compatibility, Nametag will continue to support these legacy headers for a limited time. All integrations must migrate to Nametag-Timestamp and Nametag-Signature by June 1, 2026. After this date, the legacy headers will no longer be supported, and integrations that rely on them may fail to verify webhook requests.

:::

Nametag uses **HMAC-SHA256** to sign the timestamp and raw request body. Each request includes these headers:

| Header | Description |
| --- | --- |
| `Nametag-Signature` | Hex-encoded HMAC-SHA256 signature. | 
| `Nametag-Timestamp` | Unix timestamp in seconds, indicating when the request was signed. | 

**Verify the signature**

To verify the signation, ensure you read the raw request body as bytes. Do not parse and re-serialize the JSON, as changes to whitespace or key order will cause signature verification to fail.

1. Read the Nametag-Timestamp header.
2. Construct the signed message by concatenating the timestamp, a period (.), and the raw request body bytes.
3. Compute the HMAC-SHA256 digest of the signed message using your webhook signing secret.
4. Hex-encode the digest and compare it with the value in Nametag-Signature using a constant-time comparison.
5. Reject the request if the signature is missing or invalid.

**Validate the timestamp**

To protect against replay attacks, reject requests where the `Nametag-Timestamp` differs from your server's current Unix timestamp by more than 5 minutes. Perform this check in addition to signature verification.

In addition, keep your server clock synchronized so legitimate requests are not rejected due to deviations in the clock mechanics.

Example (Python):[^4]

[^4]: I'd love to keep a code sample, but would need to verify with the engineers before adding it. Its better to remove it then add one that doesn't work correctly.

## Handling webhook events[^5]

[^5]: Replaces Payload Format section in previous draft; addresses Ticket NT-1047

Nametag v2 event payloads use a `type` field to identify the event and a `data` object containing event details. 

## Retrying failed webhook deliveries[^6]

[^6]: Replace the old three-retry policy with eight attempts over 24 hours, as explained in Slack thread; addresses ticket NT-1031

Nametag retries failed webhook deliveries using exponential backoff. The current delivery schedule consists of eight attempts over 24 hours:

| Attempt | Approximate timing |
| --- | --- |
| 1 | Immediately |
| 2 | 30 seconds later |
| 3 | 2 minutes later |
| 4 | 10 minutes later |
| 5 | 45 minutes later | 
| 6 | 3 hours later |
| 7 | 8 hours later |
| 8 | 12 hours later |

A delivery is retried if the endpoint times out or returns a non-2xx response, except for 410 Gone. Returning 410 Gone tells Nametag to stop retrying and disable the endpoint.[^7]

[^7]: Addresses ticket NT-1044

If a delivery fails, inspect the endpoint's delivery log in the Console. Failed events are retained for seven days and can be replayed from the delivery log.[^8]

[^8]: Came from runbook - accuracy is unknown and needs to be confirmed with engineer.

## Testing your integration

Use **Send Test Event** in the Nametag Console to send a sample webhook request to your endpoint.

Confirm that your endpoint:

- Receives the request.
- Validates the signature and timestamp.
- Parses the payload.
- Returns the expected successful HTTP response.
- Test events and live events use the same delivery path. If test events arrive but live events do not, check that you've subscribed to the relevant event types.

## Troubleshooting

<details>
  <summary>Signature verification fails</summary>

- Confirm you're using Nametag-Signature and Nametag-Timestamp.
- Verify that you're using HMAC-SHA256 with the timestamp, a period, and the raw request body.
- Confirm you're using the signing secret for the correct endpoint.
- Make sure your framework hasn't consumed or modified the request body before verification.
- Check that the timestamp is within five minutes of your server's clock.

</details>


<details>
  <summary>No live events arrive</summary>

- Confirm that you've selected the event types you need.
- Check the endpoint's delivery log for failed requests.
- Confirm that your endpoint is publicly reachable over HTTPS and responds within 10 seconds.
- Requests return 403
- Check whether a WAF or authentication proxy is blocking Nametag's requests. If your network requires IP allowlisting, consult Nametag's current published egress IP ranges.

</details>

<details>
  <summary>You receive duplicate events</summary>

- Use `event_id` to detect events your application has already processed. 
- Make event handling idempotent so that retrying a delivery does not repeat the same  operation.

</details>

<details>
  <summary>You need to stop receiving events</summary>

- Return 410 Gone to stop retries and disable the endpoint. Confirm the endpoint's status in the Console.

</details>

---

## Footnotes 

[^1]: Surfaced the plan(s) where the webhooks feature is available