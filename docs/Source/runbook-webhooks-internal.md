# RUNBOOK: Webhooks (Internal)

**Last edited:** 2026-01-22
**Editor:** support-eng
**Audience:** Support, TCE, Solutions Engineering
**Status:** ...current? Someone please check this before the next on-call rotation.

---

## What this covers

How webhook delivery works, how to help a customer configure it, and what to do when deliveries fail. Some of this overlaps the public docs page. The public page is thinner.

---

## Customer Setup (walk them through this)

1. Console → **Settings → Developers → Webhooks**
2. **Add Endpoint**, HTTPS URL only
3. Pick event types
4. Copy the signing secret — **shown once**, we cannot recover it, they will have to rotate if they lose it
5. **Send Test Event** to confirm

Endpoint must respond within 10 seconds or we count it as a failure and queue a retry.

> Note: we get a lot of tickets where the customer put the endpoint behind a WAF or an auth proxy and it 403s us. Always check that first.

---

## Signature Verification

We HMAC the request body with the customer's signing secret and send the digest in the `X-Nametag-Signature` header.

The digest is **SHA-256**, hex-encoded.

Common causes of mismatch:

- Customer parsed the JSON and re-serialized it before hashing. Key order and whitespace change, hash changes. Tell them to hash raw bytes.
- Customer is using the wrong secret (they have multiple endpoints, each has its own secret).
- Customer's framework is consuming the body stream before they can read it raw. Very common in Express and Flask.
- Customer rotated the secret and didn't redeploy.

If they insist their implementation is correct, ask for the raw header value and the raw body and we can check it against the digest ourselves.

---

## Retry Behavior

Non-2xx or timeout → we retry.

**5 attempts, exponential backoff, spread over roughly 1 hour.** After that the event is dead-lettered.

Dead-lettered events are visible in the Console under the endpoint's delivery log for 7 days. Customers can replay individual events from there.

---

## IP Allowlisting

Customers on locked-down networks will ask for source IPs. We deliver from a fixed egress range:

```
34.82.112.0/22
35.199.64.0/22
```

These are published on the trust page. If a customer allowlists, remind them to watch that page — we've changed the range once before with 30 days' notice.

---

## Escalation

- Delivery failures affecting a single customer → TCE, normal queue
- Delivery failures across multiple customers → page platform on-call in `#eng-platform`
- Signing secret exposed / needs emergency rotation → security on-call, treat as an incident

---

## Known Sharp Edges

- The delivery log in the Console shows the response status we received but truncates the response body at 512 bytes. Engineering has the full body for 24 hours.
- Test events and live events go through the same delivery path, so a customer who can receive a test event but not live events almost always has an event-type selection problem, not a networking problem.
