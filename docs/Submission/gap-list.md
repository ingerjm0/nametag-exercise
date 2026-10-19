# Gap List 

The following table lists questions that came up during the assignment.

| Question | Description | 
| --- | --- |
| Plan availability | What are the available plans? Rather than listing 'All Plans', I recommend listing the available plans (i.e., Free, Plus, Premium).  | 
| Event Reference | What event types are available? What fields are available for each event type? What triggers each event? <br /><br />Note: I see the three new ones added in v2 in the release notes, but I'm not sure whether others existed in v1 or whether any existing ones were deprecated. |
| Payload | What is the v2 payload schema? Ticket NT-1047 confirms the structure changed but doesn't provide the schema. | 
| Signature Implementation/Verification | Can you provide a Python implementation for a valid v2 request? (Alternatively, if I know the product, I would create one and have it validated by the engineer) |
| Event ordering | Are events delivered in order? Ticket NT-1038 is unanswered | 
| Delivery Logs | Are failed deliveries retained for 7 days and replayable? Ticket NT-1055 suggests this is correct, as does the internal runbook; however, the runbook might be outdated. | 
| v2 Event Payloads | I would like to include a JSON example, but need to verify with an engineer. |
| AI Assistant | What resources does the AI Assistant have available? Does it access both public docs and internal runbooks? How is it trained to retrieve information? | 
| Release Notes | The release notes need to be updated with payload, signature verification, and other changes in V2. Whose responsibility is this? For the sake of the assignment, I'll assume there's an automated process to create them from code submissions, and that the engineering team is responsible for keeping them up to date. However, I do have experience managing them as a technical writer. | 
| FAQ / Troubleshooting | Ideally, I'd like to expand the FAQ with possible causes for each issue. However, I didn't have time to do that as part of this assignment. | 
