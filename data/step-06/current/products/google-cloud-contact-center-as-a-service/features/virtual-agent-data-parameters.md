---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.104Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Virtual Agent data parameters"
feature_slug: "virtual-agent-data-parameters"
latest_feature_date: "2023-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
keywords:
  - "virtual"
  - "agent"
  - "parameters"
  - "agents"
  - "can"
  - "receive"
  - "session"
  - "based"
---

# Virtual Agent data parameters

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Virtual Agents can receive session-based contextual data, including dynamic routing and sentiment parameters, plus static or dynamic metadata at the mobile queue level.

## Extended Definition

Virtual Agents can receive session-based contextual data, including dynamic routing and sentiment parameters, plus static or dynamic metadata at the mobile queue level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)

## Supporting Pages

### "Session data feed \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How can I help you? ---------------------------------------- [July 5, 2024 at 4:23:10 PM GMT+7 Consumer] human agent ---------------------------------------- Live Translation was used Spanish (Spain) and English (US) were used for translation Data parameters passed to Virtual Agent Data parameters passed to Virtual Agent PN - Chat Data parameters passed: order: yes product: books queueId: 502 queueLanguage: en Pre-session SMS deflection Pre-session SMS deflection was offered in ORDERS RETURNS/PN/PN 1 Pre-session SMS deflection was accepted Dispositions Code: test001 Custom Code ID: 123 UJET Code ID: 3 Note: Okee List: Custom Custom List ID: 2222 UJET List ID: 3 Agent: Alex B CCAI Insight chat history uploaded GCS URL: gs://example-insights/oem/...
- Captured VA session variables Chat ID: 3070 Menu: In-App Support (QUEUE qca02)/Support/PN/PN 1 Chatbot Platform: Virtual Agent PN Chatbot Workflow: Post Session Transfer - Chat Virtual Agent: Virtual Agent PN - Chat Intent: Captured At: July 5, 2024 at 3:08:39 PM GMT+7 Captured Variables agentHelpfulness: 4 issueResolution: yes agentComprehension: 5 openFeedback: nothing Co-browse session started Screen Share session was started by Agent Time of start: July 5, 2024 at 3:16:54 PM GMT+7 Co-browse session ended Screen Share session was ended by Agent Time of end: July 5, 2024 at 3:19:31 PM GMT+7 Co-browse remote control requested Screen Share remote control was requested Co-browse remote control accepted Screen Share remote control was accepted Co-browse remote control rejected Screen Share remote control was rejected Co-browse full device control requested Screen Share full device control was requested Co-browse full device control accepted Screen Share full device control was accepted Co-browse full device control rejected Screen Share full device control was rejected Session sentiment score Average sentiment score for the segment: 52 Customer email collected Customer email: 222larabrown@gmail.com Realtime Transcript Call ID: 6800 July 5, 2024 at 4:23:03 PM GMT+7 00:25 ---------------------------------------- [July 5, 2024 at 4:23:05 PM GMT+7 Virtual Agent PN - Voice] Hello, I am CX Agent Number 1.
- API DAP Response (Loanne: True) API Response key value list key: zulu priority: 1 user type: shopper API Response Json { "key": "zulu", "priority: 1, "user type": "shopper" } Request parameters passed to API DAP Request parameters passed: { "fixed parameter": "abcxyz", "abc": 1 } Verified Verified by Alex B Payment Data Product Name: sample product name Amount Charged: 10.00 USD Payment Status: Success Transaction ID: ch 3PYlfT Agent: Alex B Timestamp: July 4, 2024 at 4:09:32 PM GMT+7 Customer rating received Customer rating feedback received: 5 Customer text feedback received: very good Call Redacted Start: July 5, 2024 at 11:28:48 AM GMT+7 End: July 5, 2024 at 11:35:33 AM GMT+7 Duration: 06:45 Chat transcript uploaded Chat message history CRM link: https://example.com/attachments/token/...
- Content Card button was selected End User selected the button Primary with reply 1 from the Title 1 card Call transfer redirected to external SIP SIP destination: sip:returns@returns.onsip.com Data parameters passed: userName: Alex B Virtual Agent call recording Virtual Agent call recording is not available for consumer privacy reasons Virtual Agent transcript Virtual Agent call transcript is not available for consumer privacy reasons VA URL Links URL Links from Virtual Agent Returnsbot https://example.com/returns/...

### "Call endpoints \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- Source ID: `site-docs-reference-required-7`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are the call API endpoints: Outbound call - end user number Outbound call - ticket id Incoming call Scheduled call Update reserved data attributes during a call Get reserved data attributes during a call Pass data parameters to virtual agents mid-session Call object The following is an example of the call object: [ { "id" : 0 , "parent id" : 0 , "lang" : "en" , "call type" : "Voice Scheduled (API)" , "status" : "scheduled" , "created at" : "2018-06-07T19:49:52.896Z" , "queued at" : "2018-06-07T19:49:52.896Z" , "assigned at" : "2018-06-07T19:49:52.896Z" , "connected at" : "2018-06-07T19:49:52.896Z" , "ends at" : "2018-06-07T19:49:52.896Z" , "scheduled at" : "2018-06-07T19:49:52.896Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : 0 , "has feedback" : true , "voip provider" : "voip provider twilio" , "out ticket id" : "string" , "out ticket url" : "string" , "verified" : true , "recording url" : "string" , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail details" : "string" , "fail reason" : "nothing" , "support number" : "string" , "selected menu" : { "id" : 0 , "name" : "string" , "parent id" : 0 , "position" : 0 , "deleted" : true , "hidden" : "string" , "menu type" : "ivr menu" , "output msg" : "string" }, "menu path" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "agent info" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "end user" : { "id" : 0 , "identifier" : "string" , "out contact id" : "string" }, "photos" : [ { "id" : 0 , "photo type" : "photo" , "url" : "string" } ], "videos" : [ { "id" : 0 , "url" : "string" } ], "transfers" : [ { "id" : 0 , "status" : "transferring" , "fail reason" : "nothing" , "created at" : "2018-06-07T19:49:52.896Z" , "from menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "to menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "from agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "to agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" } } ], "participants" : [ { "id" : 0 , "type" : "end user" , "status" : "waiting" , "call id" : 0 , "user id" : 0 , "end user id" : 0 , "call duration" : 0 , "hold duration" : 0 , "connected at" : "2018-06-07T19:49:52.896Z" , "ended at" : "2018-06-07T19:49:52.896Z" , "fail reason" : "nothing" } ] } ] Call status definitions The status field can be in any of the following states: Call Status Description Selecting State that occurs when an end user has called into the contact center, but is still navigating the menu options prior to being placed in a leaf menu.
- Request URL variables Key Value Description id integer (Required) Response { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customer" : "boolean" } Status code 0 Update reserved data attributes during a call Endpoint Method: PATCH Type: RAW URL: https:// { subdomain } . { domain } /apps/api/v1/calls/:id/customer flag URL variables Key Value Description id integer (Required) Body { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customers" : "boolean" } Pass data parameters to virtual agents mid-session To use the apps API to pass data parameters to virtual agents in the middle of a call session, see Pass data parameters to virtual agents mid-session .
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Scheduled (API)" , "lang" : "en" , "call id" : 514 , "end user number" : "+82-10-6861-2345" , "scheduled at" : "2019-09-15T00:19:14.421Z" , "recording permission" : "recording permission granted" } Response: Create an scheduled call with call ID { "id" : 515 , "lang" : "en" , "call type" : "Voice Inbound (API)" , "status" : "queued" , "created at" : "2019-09-10T00:19:14.000Z" , "queued at" : null , "assigned at" : null , "connected at" : null , "ends at" : null , "scheduled at" : "2019-09-15T00:19:14.421Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "out ticket id" : null , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : { "id" : 9 , "name" : "Lock Star" , "parent id" : null , "position" : 0 , "deleted" : false , "menu type" : "ivr menu" , "output msg" : "You selected Lock Star." , "hidden" : false }, "menu path" : { "items count" : 1 , "name" : "Lock Star" , "materialized path" : "9" }, "agent info" : null , "end user" : { "id" : 75 , "identifier" : null , "out contact id" : "389391400633" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 820 , "type" : "end user" , "status" : "waiting" , "call id" : 515 , "user id" : null , "end user id" : 75 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : "cascade" , "offer events" : [ { "casting time" : "2019-09-10T00:19:14.000Z" , "group" : "Group 1" } ], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Error : Menu is in 'after hours' state, can't accept incoming calls In this example we show the failure scenario where a scheduled call is created but that the provided menu is out of hours and as such cannot receive incoming calls.
- Common API response codes The following are the most common API Responses: Response Code Meaning 201 The API request has been successful and will create a call 202 The API request has been successful, but manual intervention is required inside of the widget to complete the action 400 invalid call type - ensure call type is supported 400 Agent is not available to take this call 400 Missing parameter - check to ensure that the required parameters have been added 404 Resource not found - Please check your subdomain Outbound call - end user number Parameter Required Data Type Definition call tye TRUE String Call tye to create. "Voice Outbound (API)", "OutboundCall" (deprecated) are available for now agent email TRUE String Email address for the agent who will be assigned to the outbound call. ticket id FALSE String CRM ticket ID and it will dial to the end user who is tied to the ticket. end user number FALSE String End user phone number which will be dialing. ticket id has a higher priority than end user number. outbound number FALSE String Well-formed outbound number which is managed from Settings > Phone Numbers > Phone Number Management.

### "Standard Reports Agent and Teams Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Date and Timestamp Agent Status Summary and Timeline Report Agent statuses, also known as Aux codes, are used to track time spent on different tasks, make agents available for calls or chats, and are used extensively for workforce management.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Standard Reports Agent and Teams Data Sets Stay organized with collections Save and categorize content based on your preferences.
- Total Preset SMS Sent: Total number of preset SMS sent by Agents using SMS Blending features like In Call and Wait Time SMS.
- Total Auto Answered Calls: Total number of interactions that were assigned to Agents via auto answer.

