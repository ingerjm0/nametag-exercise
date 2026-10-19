# Gap List 

The following table contains a list of questions that came up during the assignment.

| Question | Description | 
| --- | --- |
| Plan availability | What are the available plans? Rather than listing 'All Plans', I recommend listing out the available plans (i.e., Free, Plus, Premium).  | 
| Event Reference | What are the available event types? What are the fields available for each event type? What triggers each event? <br /><br />Note: I see the three new ones that were added in v2 from the release notes, but not sure if others existed in v1 or if any existing ones were deprecated. |
| Payload | What is the v2 payload schema? Ticket NT-1047 confirms that the structure changed, but does not provide the actual schema. | 
| Signature Implementation/Verification | Can you provide a Python implementation for a valid v2 request? (Alternatively, if I know the product, I would create one and have it validated by the engineer) |
| Event ordering | Are events delivered in order? Ticket NT-1038 is unanswered | 
| Delivery Logs | Are failed deliveries retained for 7 days and replayable? Ticket NT-1055 suggests this is correct, as does the internal runbook, however, the runbook might be outdated. | 
| v2 Event Payloads | I would like to include a JSON example, but need to verify with engineer. |
| AI Assistant | What resources does the AI Assistant have available? Does it access both public docs and internal runbooks? How is it trained to retrieve information? | 
| Release Notes | The release notes need to be updated with payload, signature verification, and other changes in V2. Who's responsibility is this? For the sake of the assignment, I'm going to assume there's an automated process to create them from code submits, and that it is the responsibility of the engineering team to keep them up-to-date. However, I do have experience managing them as a technical writer. | 
| FAQ / Troubleshooting | Ideally, I'd like to expand the FAQ with possible causes for each issue. However, I did not have time as part of this assignment. | 