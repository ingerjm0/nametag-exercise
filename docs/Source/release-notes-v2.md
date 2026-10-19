# Release Notes — Webhooks v2

**Released:** 2026-02-11
**Applies to:** All accounts

---

## Summary

Webhooks v2 changes the payload structure, adds event identifiers, and improves delivery durability. Existing v1 endpoints continue to receive the v1 payload shape until the deprecation date below.

---

## Payload Structure

The payload is now nested. Metadata about the delivery lives at the top level; the event content lives under `data`.

**Before (v1):**

```json
{
  "event": "verification.completed",
  "verification_id": "ver_8k2m4p",
  "subject_id": "usr_44921",
  "status": "approved",
  "timestamp": 1730700000
}
```

**After (v2):**

```json
{
  "event_id": "evt_01HQ9X7ZK4",
  "type": "verification.completed",
  "occurred_at": "2026-02-11T14:22:03Z",
  "api_version": "2026-02-11",
  "data": {
    "verification_id": "ver_8k2m4p",
    "subject_id": "usr_44921",
    "status": "approved"
  }
}
```

Notable changes:

- `event` is now `type`
- `timestamp` (Unix integer) is now `occurred_at` (ISO 8601, UTC)
- Added `event_id` — stable and unique per event. Use it for idempotency.
- Added `api_version` so you can branch on payload shape during migration.
- Event-specific fields moved under `data`.

### Idempotency

Because we retry on failure, your endpoint may receive the same event more than once. Deduplicate on `event_id`. This is now the recommended pattern and replaces any ad-hoc deduplication you may have built on `verification_id`.

---

## Delivery Durability

Delivery attempts have been increased. We now attempt delivery **8 times over 24 hours** before dead-lettering the event.

Dead-lettered events remain replayable from the Console delivery log.

---

## New Event Types

| Event | Fires when |
| --- | --- |
| `verification.started` | A user opens a verification link |
| `verification.review_required` | A verification is routed for manual review |
| `verification.review_completed` | A manual review reaches a decision |

---

## Deprecation

The v1 payload shape is deprecated as of this release. Endpoints created before 2026-02-11 will continue to receive v1 payloads until **2026-08-01**, after which all endpoints receive v2.

To migrate early, open the endpoint in the Console and set **Payload version** to `2026-02-11`.

---

## Upgrade Checklist

1. Update your handler to read `type` instead of `event`
2. Update your handler to read fields from `data`
3. Parse `occurred_at` as ISO 8601 rather than a Unix integer
4. Add deduplication on `event_id`
5. Flip **Payload version** in the Console
6. Confirm with **Send Test Event**
