---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.085Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Calls waiting indicator"
feature_slug: "calls-waiting-indicator"
latest_feature_date: "2024-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "calls"
  - "waiting"
  - "indicator"
  - "call"
  - "adapter"
  - "shows"
  - "number"
  - "queued"
---

# Calls waiting indicator

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The call adapter shows the number of queued calls waiting to be answered.

## Extended Definition

The call adapter shows the number of queued calls waiting to be answered.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.
- Session types for reporting For reporting, calls to or from direct phone numbers generate the following session types: Voice Inbound (Direct) : an inbound call to a direct phone number Voice Outbound (Direct) : an outbound call from a direct phone number Voice Internal : an internal call to or from a direct phone number Estimated wait time announcement for calls Estimated Wait Time (EWT) Announcements use a calculation to predict the wait time until a caller is connected with an agent.
- Requesting new phone numbers Contact Support and include the following information about your preferences: Number type: Toll-free, National, Mobile, Local Location of number Number preference details about number structure or patterns Set up emergency and special services calling (US and Canada only) With CCAI Platform, agents in the US and Canada can make calls to emergency and special services using phone numbers that you dedicate to these types of calls.
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .

### "Call endpoints \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- Source ID: `site-docs-reference-required-7`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Scheduled (API)" , "lang" : "en" , "call id" : 514 , "end user number" : "+82-10-6861-2345" , "scheduled at" : "2019-09-15T00:19:14.421Z" , "recording permission" : "recording permission granted" } Response: Create an scheduled call with call ID { "id" : 515 , "lang" : "en" , "call type" : "Voice Inbound (API)" , "status" : "queued" , "created at" : "2019-09-10T00:19:14.000Z" , "queued at" : null , "assigned at" : null , "connected at" : null , "ends at" : null , "scheduled at" : "2019-09-15T00:19:14.421Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "out ticket id" : null , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : { "id" : 9 , "name" : "Lock Star" , "parent id" : null , "position" : 0 , "deleted" : false , "menu type" : "ivr menu" , "output msg" : "You selected Lock Star." , "hidden" : false }, "menu path" : { "items count" : 1 , "name" : "Lock Star" , "materialized path" : "9" }, "agent info" : null , "end user" : { "id" : 75 , "identifier" : null , "out contact id" : "389391400633" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 820 , "type" : "end user" , "status" : "waiting" , "call id" : 515 , "user id" : null , "end user id" : 75 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : "cascade" , "offer events" : [ { "casting time" : "2019-09-10T00:19:14.000Z" , "group" : "Group 1" } ], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Error : Menu is in 'after hours' state, can't accept incoming calls In this example we show the failure scenario where a scheduled call is created but that the provided menu is out of hours and as such cannot receive incoming calls.
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Inbound (API)" , "lang" : "en" , "menu id" : 9 , "end user number" : "+82-10-6861-2345" , "recording permission" : "recording permission granted" } Response: Create an incoming call with end user number { "id" : 515 , "lang" : "en" , "call type" : "Voice Inbound (API)" , "status" : "queued" , "created at" : "2019-09-10T00:19:14.000Z" , "queued at" : "2019-09-10T00:19:14.421Z" , "assigned at" : null , "connected at" : null , "ends at" : null , "scheduled at" : null , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "out ticket id" : null , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : { "id" : 9 , "name" : "Lock Star" , "parent id" : null , "position" : 0 , "deleted" : false , "menu type" : "ivr menu" , "output msg" : "You selected Lock Star." , "hidden" : false }, "menu path" : { "items count" : 1 , "name" : "Lock Star" , "materialized path" : "9" }, "agent info" : null , "end user" : { "id" : 75 , "identifier" : null , "out contact id" : "389391400633" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 820 , "type" : "end user" , "status" : "waiting" , "call id" : 515 , "user id" : null , "end user id" : 75 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : "cascade" , "offer events" : [ { "casting time" : "2019-09-10T00:19:14.000Z" , "group" : "Group 1" } ], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Error : Menu is in 'after hours' state, can't accept incoming calls This example demonstrates the failure when the provided menu ID is in after hours state.
- The following are the call API endpoints: Outbound call - end user number Outbound call - ticket id Incoming call Scheduled call Update reserved data attributes during a call Get reserved data attributes during a call Pass data parameters to virtual agents mid-session Call object The following is an example of the call object: [ { "id" : 0 , "parent id" : 0 , "lang" : "en" , "call type" : "Voice Scheduled (API)" , "status" : "scheduled" , "created at" : "2018-06-07T19:49:52.896Z" , "queued at" : "2018-06-07T19:49:52.896Z" , "assigned at" : "2018-06-07T19:49:52.896Z" , "connected at" : "2018-06-07T19:49:52.896Z" , "ends at" : "2018-06-07T19:49:52.896Z" , "scheduled at" : "2018-06-07T19:49:52.896Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : 0 , "has feedback" : true , "voip provider" : "voip provider twilio" , "out ticket id" : "string" , "out ticket url" : "string" , "verified" : true , "recording url" : "string" , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail details" : "string" , "fail reason" : "nothing" , "support number" : "string" , "selected menu" : { "id" : 0 , "name" : "string" , "parent id" : 0 , "position" : 0 , "deleted" : true , "hidden" : "string" , "menu type" : "ivr menu" , "output msg" : "string" }, "menu path" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "agent info" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "end user" : { "id" : 0 , "identifier" : "string" , "out contact id" : "string" }, "photos" : [ { "id" : 0 , "photo type" : "photo" , "url" : "string" } ], "videos" : [ { "id" : 0 , "url" : "string" } ], "transfers" : [ { "id" : 0 , "status" : "transferring" , "fail reason" : "nothing" , "created at" : "2018-06-07T19:49:52.896Z" , "from menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "to menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "from agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "to agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" } } ], "participants" : [ { "id" : 0 , "type" : "end user" , "status" : "waiting" , "call id" : 0 , "user id" : 0 , "end user id" : 0 , "call duration" : 0 , "hold duration" : 0 , "connected at" : "2018-06-07T19:49:52.896Z" , "ended at" : "2018-06-07T19:49:52.896Z" , "fail reason" : "nothing" } ] } ] Call status definitions The status field can be in any of the following states: Call Status Description Selecting State that occurs when an end user has called into the contact center, but is still navigating the menu options prior to being placed in a leaf menu.
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Outbound (API)" , "agent email" : "admin@somedomain.com" , "ticket id" : "71450" , "outbound number" : "+1 339-219-5276" , "lang" : "en" } Response: Create an outbound call with ticket id { "id" : 398 , "lang" : "en" , "call type" : "Voice Outbound (API)" , "status" : "assigned" , "created at" : "2019-06-07T01:28:47.955Z" , "queued at" : null , "assigned at" : "2019-06-07T01:28:47.971Z" , "connected at" : null , "ends at" : null , "scheduled at" : null , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "voip provider" : "voip provider twilio" , "out ticket id" : "71450" , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : null , "menu path" : null , "agent info" : { "id" : 1 , "agent number" : null , "name" : "Admin UJET" , "last name" : "UJET" , "first name" : "Admin" , "avatar url" : "https://somedomain.com/default-profile.png" }, "end user" : { "id" : 67 , "identifier" : null , "out contact id" : "381630957514" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 612 , "type" : "agent" , "status" : "waiting" , "call id" : 398 , "user id" : 1 , "end user id" : null , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" }, { "id" : 613 , "type" : "end user" , "status" : "waiting" , "call id" : 398 , "user id" : null , "end user id" : 67 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : null , "offer events" : [], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Accepted : Need to choose an outbound number In this example we show the scenario where an outbound call request is created with the need to choose an outbound number and then is accepted.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Note: If your company has requested a time zone override for all its users, then the requested time zone will be displayed instead Metric definitions Service Level SL / 30min Service Level within the past 30min SL / day Service Level for the current day SL Target Service Level Target set for the queue Live CIQ Consumers in Queue LCW / Sec Longest Call Waiting AQD / Sec Average Queue Duration (Waiting for an Agent) Live Number of calls currently in progress with an agent Productive Agents Number of agents with a productive status Live Agent Status Available Count of all available agents On-hold (Calls only)Count of agents who have placed a consumer on-hold Wrap-up Count of all agents in the wrap-up status Custom Count of all agents in custom statuses that are configured as productive Productive Agents Count of all agents in a productive status as configured in Settings > Queue Groups Today ABN % Abandon rate Volume Total offered interactions including failed/abandoned sessions.
- Total Calls (Calls) Count of the number of completed inbound and outbound calls the agent has taken in the Today timeframe Call count on the Agent monitoring page counts sessions not interactions Call sessions are attributed to the last agent who handled the session Outbound and inbound calls are included Due to some date/time matching differences, this column should only be used as a guide - use downloadable reports for specific call interaction counts per agent Total Chats (Chats) Completed chat sessions handled today Last End Time The end time of the last completed session Last time offered Shows the last time the agent was offered a call/chat notification.
- Landing page metrics Total : Cases: Shows number of calls and chats based on the drop-down filter.

