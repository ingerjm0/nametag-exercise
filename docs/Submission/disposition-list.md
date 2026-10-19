# Disposition List

This is a record of files in our repository and their current status.

:::note

If any document is retired or archived, one of the following must be in place:

- A forwarding address lands at an alternative page, as available in this order: Replacement article, Release notes/Deprecation notice, Documentation home page
- A versioned copy of the documentation is maintained for backward compatibility. The old version will be tagged as outdated, with a link to the updated document.

:::

---

| File | Location | Status | Comment |
| --- | --- | --- | --- | 
| `docs-webhooks.md` | Public docs | Update/Rewrite | I recommend tagging each documentation release that aligns with a GitHub release to preserve past versions of our documentation. We won't tag hot fixes (or minor documentation changes), and we'll track content updates in the GitHub commit history. For example, the tags in this exercise might be 'webhooks-v1' and 'webhooks-v2'. | 
| `assistant-transcript.md` | Internal database | Keep | All incoming customer support data should be retained for a specific duration (1 year, 20 years, forever). |
| `release-notes-v2` | Public docs | Update | As part of the docs, it will be updated as omitted entries are added, inaccurate info is corrected, or other fixes are added. It will be tagged alongside `docs-webhooks-md` in the newly published documentation build. | 
| `runbook-webhooks-internal.md` | Internal wiki | Archive or update | Based on the level of revision, either update the outdated sections or archive the entire document and start from scratch.  |
| `slack-thread-webhooks.txt` | Slack archives | Archive | I recommend opening a channel to align with each new feature or development activity. When the feature is released and closed, archive the channel to maintain a record of the feature's history. | 
| `support-tickets.csv` | Bug Tracking Software | Archive | As customer support tickets are resolved, the ticket can be closed/archived to track the issue if it comes up again, and to track related issues with specific customers, features, or releases | 
