# Retrieval Test

Here are six questions a customer would realistically ask an AI assistant: 

| Question | Answer | Location | Pass/Fail | 
| --- | --- | --- | --- |
| Which event types should I subscribe to, and how do I enable them? | The question _Which event types should I subscribe to?_ is not currently answered in the docs, but is notes in the [Gap List](gap-list) as a place to expand. The original source listing the event types was removed due to it not being validated in the provided resources. <br /><br />_How do I enable event types?_ In the Nametag Console, go to **Settings → Developers → Webhooks** and add a new endpoint. You will then be able to select the events to enable. | _How do I enable event types?_ See [Configuring an Endpoint](webhooks-v2#configuring-a-webhook-endpoint) | <i class="fa-solid fa-circle" style={{color:'darkred'}}></i> Fail | 
| How many times will Nametag retry a failed webhook delivery? | Eight attempts over 24 hours | See [Retrying failed webhook deliveries](webhooks-v2#retrying-failed-webhook-deliveries) | <i class="fa-solid fa-circle" style={{color:'green'}}></i> Pass |
| Why does my webhook signature verification fail? | Possible causes: Incorrect headers, HMAC-SHA256 security, lost or incorrect signing secret, deviant timestamps | See [Troubleshooting](webhooks-v2#troubleshooting) & [Verifying webhook signatures](webhooks-v2#verifying-webhook-signatures) | <i class="fa-solid fa-circle" style={{color:'green'}}></i> Pass |
| Does my subscription include the Webhooks API? | All plans supported | [Top of page](webhooks-v2#user-content-fnref-1) | <i class="fa-solid fa-circle" style={{color:'green'}}></i> Pass |
| What changed in webhook API v2, and how do I migrate from v1? | Signature headers, payload format, retry behavior | Release notes that are not currently published with the docs | <i class="fa-solid fa-circle" style={{color:'darkred'}}></i> Fail | 
| How do I stop webhook deliveries when my endpoint is decommissioned? | Delete your endpoint and use **HTTP 410 Gone** to stop retries and disable the endpoint. | See [Troubleshooting](webhooks-v2#troubleshooting) & [Retrying Failed webhook deliveries](webhooks-v2#retrying-failed-webhook-deliveries) | <i class="fa-solid fa-circle" style={{color:'green'}}></i> Pass |

