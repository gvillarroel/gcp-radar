---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.075Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Agent statuses endpoint"
feature_slug: "agent-statuses-endpoint"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call"
keywords:
  - "agent"
  - "statuses"
  - "endpoint"
  - "now"
  - "returns"
  - "ip"
  - "address"
---

# Agent statuses endpoint

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The agent statuses API endpoint now returns an agent's IP address.

## Extended Definition

The agent statuses API endpoint now returns an agent's IP address.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Chat timeout timer restarts when: Chat is assigned to an agent After each message sent by the consumer If a reply isn't made to the chat within the set time frame, the chat will time out and end with one of the following chat statuses: Timeout Agent No Message Timeout End User No Message Timeout Agent Stopped End User Stopped Click Set Chat Details to save.
- All default and custom statuses other than "Available" are considered unavailable, allowing the agent to self-select when they are ready to take chats by changing their status to Available.
- The setting is found in Settings > Operation Management > Agent Statuses .
- For more information, see Agent Statuses .

### "Standard Reports Agent and Teams Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Date and Timestamp Agent Status Summary and Timeline Report Agent statuses, also known as Aux codes, are used to track time spent on different tasks, make agents available for calls or chats, and are used extensively for workforce management.
- Attribute Email Address The email address of the Agent.
- Attribute Email Address The email address of the Agent.
- Occupancy : [Total time Agent status = In-Call or In-Chat or Wrap-up] / [Total time agent status = Available] Volume per Hour : Average volume of interactions per hour (per hour referenced as 24 hours in a day, regardless of hours of operation) Handle Time: Calls: average (call duration + hold time + default wrap-up status associated with a Call ID) Chats: average chat duration only (no wrap-up status applied) Longest Handle Time : Longest call/chat duration Calls: max(call duration + average default wrap-up status associated with an interaction ID) Chats: max chat duration only (no wrap-up status applied) Hold Time : Average duration (in seconds) that a consumer was placed on hold by an Agent.

### "Call endpoints \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- Source ID: `site-docs-reference-required-7`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- The following are the call API endpoints: Outbound call - end user number Outbound call - ticket id Incoming call Scheduled call Update reserved data attributes during a call Get reserved data attributes during a call Pass data parameters to virtual agents mid-session Call object The following is an example of the call object: [ { "id" : 0 , "parent id" : 0 , "lang" : "en" , "call type" : "Voice Scheduled (API)" , "status" : "scheduled" , "created at" : "2018-06-07T19:49:52.896Z" , "queued at" : "2018-06-07T19:49:52.896Z" , "assigned at" : "2018-06-07T19:49:52.896Z" , "connected at" : "2018-06-07T19:49:52.896Z" , "ends at" : "2018-06-07T19:49:52.896Z" , "scheduled at" : "2018-06-07T19:49:52.896Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : 0 , "has feedback" : true , "voip provider" : "voip provider twilio" , "out ticket id" : "string" , "out ticket url" : "string" , "verified" : true , "recording url" : "string" , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail details" : "string" , "fail reason" : "nothing" , "support number" : "string" , "selected menu" : { "id" : 0 , "name" : "string" , "parent id" : 0 , "position" : 0 , "deleted" : true , "hidden" : "string" , "menu type" : "ivr menu" , "output msg" : "string" }, "menu path" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "agent info" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "end user" : { "id" : 0 , "identifier" : "string" , "out contact id" : "string" }, "photos" : [ { "id" : 0 , "photo type" : "photo" , "url" : "string" } ], "videos" : [ { "id" : 0 , "url" : "string" } ], "transfers" : [ { "id" : 0 , "status" : "transferring" , "fail reason" : "nothing" , "created at" : "2018-06-07T19:49:52.896Z" , "from menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "to menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "from agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "to agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" } } ], "participants" : [ { "id" : 0 , "type" : "end user" , "status" : "waiting" , "call id" : 0 , "user id" : 0 , "end user id" : 0 , "call duration" : 0 , "hold duration" : 0 , "connected at" : "2018-06-07T19:49:52.896Z" , "ended at" : "2018-06-07T19:49:52.896Z" , "fail reason" : "nothing" } ] } ] Call status definitions The status field can be in any of the following states: Call Status Description Selecting State that occurs when an end user has called into the contact center, but is still navigating the menu options prior to being placed in a leaf menu.
- Common API response codes The following are the most common API Responses: Response Code Meaning 201 The API request has been successful and will create a call 202 The API request has been successful, but manual intervention is required inside of the widget to complete the action 400 invalid call type - ensure call type is supported 400 Agent is not available to take this call 400 Missing parameter - check to ensure that the required parameters have been added 404 Resource not found - Please check your subdomain Outbound call - end user number Parameter Required Data Type Definition call tye TRUE String Call tye to create. "Voice Outbound (API)", "OutboundCall" (deprecated) are available for now agent email TRUE String Email address for the agent who will be assigned to the outbound call. ticket id FALSE String CRM ticket ID and it will dial to the end user who is tied to the ticket. end user number FALSE String End user phone number which will be dialing. ticket id has a higher priority than end user number. outbound number FALSE String Well-formed outbound number which is managed from Settings > Phone Numbers > Phone Number Management.
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Outbound (API)" , "agent email" : "allen@somedomain.com" , "end user number" : "+1 205-123-4567" , "lang" : "en" } Status Code: 202 Outbound Call - ticket id Parameter Required Data Type Definition call type TRUE String Call type to create. "Voice Outbound (API)", "OutboundCall" (deprecated) are available for now agent email TRUE String Email address for the agent who will be assigned to the outbound call. ticket id FALSE String CRM ticket ID and it will dial to the end user who is tied to the ticket. end user number FALSE String End user phone number which will be dialing. ticket id has a higher priority than end user number. outbound number FALSE String Well-formed outbound number which is managed from Settings > Phone Numbers > Phone Number Management.
- Request URL variables Key Value Description id integer (Required) Response { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customer" : "boolean" } Status code 0 Update reserved data attributes during a call Endpoint Method: PATCH Type: RAW URL: https:// { subdomain } . { domain } /apps/api/v1/calls/:id/customer flag URL variables Key Value Description id integer (Required) Body { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customers" : "boolean" } Pass data parameters to virtual agents mid-session To use the apps API to pass data parameters to virtual agents in the middle of a call session, see Pass data parameters to virtual agents mid-session .

