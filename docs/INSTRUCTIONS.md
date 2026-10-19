---
slug: /
---

# Mission: 'Documentation Rescue'

**Estimated effort:** 3–4 hours
**Due:** 5 business days from receipt
**Follow-up:** 45-minute debrief call

---

## The Situation

You've just joined Nametag. Your first assignment is our **webhooks documentation**.

Webhooks are the number one source of customer support tickets this quarter. The public docs page hasn't been meaningfully updated since before our v2 release. There's an internal runbook that overlaps it and disagrees with it. There's an engineering Slack thread where the actual current behavior was explained months ago and never made it into anything.

And recently, a customer asked an AI assistant how to verify webhook signatures. The assistant gave a confident, wrong answer — sourced from our own documentation.

Your job is to fix the surface, not just the prose.

---

## Materials in This Packet

| File | What it is |
| --- | --- |
| `docs-webhooks.md` | The current public documentation page |
| `runbook-webhooks-internal.md` | Internal engineering runbook |
| `slack-thread-webhooks.txt` | Engineering thread from #eng-platform |
| `release-notes-v2.md` | Release notes for the Webhooks v2 change |
| `support-tickets.csv` | 12 recent support tickets tagged `webhooks` |
| `assistant-transcript.md` | An AI assistant answering a customer incorrectly |

---

## What to Submit

**1. One canonical webhooks page**

Replaces everything above. Structured so that a person scanning it and an AI assistant retrieving from it both land on the right answer.

**2. A disposition list**

Every source file: keep, merge, rewrite, redirect, or retire. One line of reasoning each. If you retire something, say what happens to anyone holding the old link.

**3. A retrieval test**

Six questions a customer would realistically ask an assistant — drawn from the support tickets, not from your own headings. For each: the correct answer, the section of your page that carries it, and whether your page passes.

**4. A gap list**

Anything you could not answer from these materials, plus the exact question you'd take to engineering. Be specific. "Clarify retry behavior" is not a question.

**5. A one-page memo**

How you'd keep this from happening again. Taxonomy, ownership, review cadence, and where documentation should sit relative to the code.

---

## Ground Rules

- Use any tools you want, including AI. Tell us where you used them and what you verified by hand.
- We care more about what you decided to cut than what you wrote.
- If two sources disagree, pick one and say why. Documenting both is the failure mode we're hiring against.
- Treat the assistant transcript as a bug report, not background color.
- If something genuinely cannot be answered from these materials, say so. Do not fill the gap.

---

## Format

Markdown, plain text, or a shared doc link. No specific template required. Send it back however you'd actually hand work to a team.
