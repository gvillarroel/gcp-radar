---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.009Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Add third party to call endpoint"
feature_slug: "add-third-party-to-call-endpoint"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
keywords:
  - "add"
  - "third"
  - "party"
  - "call"
  - "endpoint"
  - "apps"
  - "provides"
  - "ongoing"
---

# Add third party to call endpoint

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Apps API provides an endpoint to add a third party to an ongoing call by dialing their phone number.

## Extended Definition

The Apps API provides an endpoint to add a third party to an ongoing call by dialing their phone number.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)

## Supporting Pages

### "Call endpoints \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- Source ID: `site-docs-reference-required-7`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Request URL variables Key Value Description id integer (Required) Response { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customer" : "boolean" } Status code 0 Update reserved data attributes during a call Endpoint Method: PATCH Type: RAW URL: https:// { subdomain } . { domain } /apps/api/v1/calls/:id/customer flag URL variables Key Value Description id integer (Required) Body { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customers" : "boolean" } Pass data parameters to virtual agents mid-session To use the apps API to pass data parameters to virtual agents in the middle of a call session, see Pass data parameters to virtual agents mid-session .
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Scheduled (API)" , "lang" : "en" , "menu id" : 9 , "end user number" : "+1 859-657-9625" , "recording permission" : "recording permission granted" } Response: Error : scheduled at is required { "message" : "scheduled at is required" } Status Code: 400 Get reserved data attributes during a call Endpoint Method: GET Type: RAW URL: https:// { subdomain } . { domain } /apps/api/v1/calls/:id/customer flag Example request and responses This section contains an example request and response for the endpoint.
- Endpoint: Method: POST Type: RAW URL: https:// { ​ { subdomain } ​ } . { ​ { domain } ​ } /apps/api/v1/calls Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Scheduled (API)" , "lang" : "en" , "menu id" : 9 , "ticket id" : "76517" , "end user number" : "+1 859-657-9625" , "scheduled at" : "2019-09-15T00:19:14.421Z" , "recording permission" : "recording permission granted" } Example request and responses The following sections provide example requests to the endpoint.
- Endpoint: Method: POST Type: RAW URL: https:// { ​ { subdomain } ​ } . { ​ { domain } ​ } /apps/api/v1/calls Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Inbound (API)" , "lang" : "en" , "menu id" : 9 , "ticket id" : "76517" , "end user number" : "+1 859-657-9625" , "recording permission" : "recording permission granted" } Example request and responses The following sections provide example requests to the endpoint.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Salesforce: CCAI Platform session object technical details The CCAI Platform Custom Session Object provides a convenient, optimized, custom CCAI Platform Session object, in which all call or chat session data will be stored.
- Salesforce provides APEX REST class to fetch their data which CCAI Platform can use to direct callers using that API for Direct Access Points (DAP).
- Flexible outbound dialing Flexible outbound call handling provides flexibility and granularity for managing outbound calls.
- Agent transferred from: agent initiating the session transfer Agent transferred to: agent receiving the session transfer Created at: time transfer was created Fail reason: reason for failure of session transfer Menu transferred from: the originating queue menu from which transfer was initiated Menu transferred to: queue menu the session was transferred to Session: CCAI Platform session ID Status: status of transfer Transfer from materialized path: the materialized path transfer was originated from Transfer to materialized path: the materialized path the session was transferred to CCAI Platform agent experience in Salesforce Lightning Provide expected CCAI Platform behaviour in Salesforce Lightning to Admins and Agents, specifically when connecting to the Activity object rather than the CCAI Platform Session object.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Please be aware that some third-party integrations require the creation of API credentials.
- Real-time and Standard Reporting Real-time reports Dismissed chats are moved from Chats > Ongoing to Chats Previous The status for dismissed chats on the Previous Chats page is Dismissed - Inactive End user If that chat is restarted by the consumer sending a response, the chat is placed back in queue and will show in Chats > Future When an agent picks up a restarted chat, that chat will be moved to the Ongoing chat page Reporting The chat duration timer stops as soon as a chat has been placed into dismissed status.
- Feature benefits For Managers and Admins Automatically remind agents to respond promptly to conversations For Agents Visually shows which chat needs their attention first For end-users Less waiting time and quicker resolution time Feature details The response timer starts when the agent is assigned and the consumer has sent a message and applies even if an agent has not yet sent a message If the agent responds, the counter will not begin again until the consumer replies.
- For a custom CRM with a generic API, the chat transcript can be added as a file attachment if the Upload a file endpoint is configured, or posted as a comment if the Comment endpoint has been configured.

