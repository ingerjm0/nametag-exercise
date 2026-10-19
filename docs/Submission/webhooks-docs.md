---
title: Webhooks
slug: /docs/webhooks-v2
last_updated: 2026-10-16
owner: Jenna Ingersoll
---

# Webhooks

<div class="plan">**Available in:** All plans</div>

---

Nametag can send HTTP callbacks to your systems when verification events occur. This page explains how to set up an endpoint, understand the payload, and verify that requests genuinely came from Nametag.

When a user completes (or abandons) a verification, Nametag sends a POST request to the endpoint you configure. Your endpoint should respond quickly with a 200 and do any heavy processing asynchronously.

## Setting Up an Endpoint

1. Sign in to the Nametag Console.
2. Go to **Settings → Developers → Webhooks**.
3. Click **Add Endpoint** and enter your HTTPS URL. HTTP endpoints are not supported.
4. Select the event types you want to receive.
5. Copy the **signing secret** shown after you save. This is only displayed once.
6. Click **Send Test Event** to confirm your endpoint responds.

Your endpoint must be publicly reachable and must respond within 10 seconds.

## Payload Format

Every webhook is a JSON POST with a flat structure:

```json
{
  "event": "verification.completed",
  "verification_id": "ver_8k2m4p",
  "subject_id": "usr_44921",
  "status": "approved",
  "timestamp": 1730700000
}
```

The `timestamp` field is a Unix epoch integer in seconds.

## Verifying Signatures

Every request includes a signature header so you can confirm it came from Nametag.

Nametag computes an **HMAC-SHA1** hash of the raw request body using your signing secret, and sends it in the `X-Nametag-Signature` header.

To verify:

1. Read the raw request body as bytes. Do not parse and re-serialize the JSON — whitespace and key order will change and the signature will not match.
2. Compute `HMAC-SHA1(signing_secret, raw_body)`.
3. Hex-encode the result.
4. Compare it to the value in `X-Nametag-Signature` using a constant-time comparison.

Example (Python):

```python
import hmac, hashlib

def verify(raw_body: bytes, header_value: str, secret: str) -> bool:
    expected = hmac.new(secret.encode(), raw_body, hashlib.sha1).hexdigest()
    return hmac.compare_digest(expected, header_value)
```

If the signature does not match, reject the request with a 401.

## Retries

If your endpoint does not return a 2xx response, Nametag will retry the delivery.

We retry up to **3 times over 15 minutes**. After the third failed attempt, the event is dropped and will not be redelivered.

## Event Types

| Event | Fires when |
| --- | --- |
| `verification.completed` | A verification finishes and a decision is available |
| `verification.failed` | A verification could not be completed |
| `verification.expired` | A verification link expired before use |

## Testing

Use **Send Test Event** in the Console to fire a sample payload at your endpoint. Test events use the same signature scheme as live events.

## Troubleshooting

**I'm getting signature mismatches.** Make sure you are hashing the raw body, not a re-serialized version of the parsed JSON.

**I'm not receiving events.** Confirm the endpoint is HTTPS, publicly reachable, and that you selected the relevant event types.