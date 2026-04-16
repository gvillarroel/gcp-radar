---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.007Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Raw data export call_participants data type"
feature_slug: "raw-data-export-call-participants-data-type"
latest_feature_date: "2026-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
keywords:
  - "raw"
  - "export"
  - "call"
  - "participants"
  - "type"
  - "includes"
  - "wait"
  - "time"
---

# Raw data export call_participants data type

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Raw data export includes a call_participants data type for wait-time virtual agent escalation details.

## Extended Definition

Raw data export includes a call_participants data type for wait-time virtual agent escalation details.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)

## Supporting Pages

### "Call endpoints \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- Source ID: `site-docs-reference-required-7`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Scheduled (API)" , "lang" : "en" , "call id" : 514 , "end user number" : "+82-10-6861-2345" , "scheduled at" : "2019-09-15T00:19:14.421Z" , "recording permission" : "recording permission granted" } Response: Create an scheduled call with call ID { "id" : 515 , "lang" : "en" , "call type" : "Voice Inbound (API)" , "status" : "queued" , "created at" : "2019-09-10T00:19:14.000Z" , "queued at" : null , "assigned at" : null , "connected at" : null , "ends at" : null , "scheduled at" : "2019-09-15T00:19:14.421Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "out ticket id" : null , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : { "id" : 9 , "name" : "Lock Star" , "parent id" : null , "position" : 0 , "deleted" : false , "menu type" : "ivr menu" , "output msg" : "You selected Lock Star." , "hidden" : false }, "menu path" : { "items count" : 1 , "name" : "Lock Star" , "materialized path" : "9" }, "agent info" : null , "end user" : { "id" : 75 , "identifier" : null , "out contact id" : "389391400633" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 820 , "type" : "end user" , "status" : "waiting" , "call id" : 515 , "user id" : null , "end user id" : 75 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : "cascade" , "offer events" : [ { "casting time" : "2019-09-10T00:19:14.000Z" , "group" : "Group 1" } ], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Error : Menu is in 'after hours' state, can't accept incoming calls In this example we show the failure scenario where a scheduled call is created but that the provided menu is out of hours and as such cannot receive incoming calls.
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Scheduled (API)" , "lang" : "en" , "menu id" : 9 , "end user number" : "+82-10-6861-2345" , "scheduled at" : "2019-09-15T00:19:14.421Z" , "recording permission" : "recording permission granted" } Response: Create an scheduled call with menu ID { "id" : 515 , "lang" : "en" , "call type" : "Voice Inbound (API)" , "status" : "queued" , "created at" : "2019-09-10T00:19:14.000Z" , "queued at" : null , "assigned at" : null , "connected at" : null , "ends at" : null , "scheduled at" : "2019-09-15T00:19:14.421Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "out ticket id" : null , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : { "id" : 9 , "name" : "Lock Star" , "parent id" : null , "position" : 0 , "deleted" : false , "menu type" : "ivr menu" , "output msg" : "You selected Lock Star." , "hidden" : false }, "menu path" : { "items count" : 1 , "name" : "Lock Star" , "materialized path" : "9" }, "agent info" : null , "end user" : { "id" : 75 , "identifier" : null , "out contact id" : "389391400633" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 820 , "type" : "end user" , "status" : "waiting" , "call id" : 515 , "user id" : null , "end user id" : 75 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : "cascade" , "offer events" : [ { "casting time" : "2019-09-10T00:19:14.000Z" , "group" : "Group 1" } ], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Create a scheduled call with call ID This example demonstrates how to create a scheduled call with a specific call ID.
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Inbound (API)" , "lang" : "en" , "menu id" : 9 , "end user number" : "+82-10-6861-2345" , "recording permission" : "recording permission granted" } Response: Create an incoming call with end user number { "id" : 515 , "lang" : "en" , "call type" : "Voice Inbound (API)" , "status" : "queued" , "created at" : "2019-09-10T00:19:14.000Z" , "queued at" : "2019-09-10T00:19:14.421Z" , "assigned at" : null , "connected at" : null , "ends at" : null , "scheduled at" : null , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "out ticket id" : null , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : { "id" : 9 , "name" : "Lock Star" , "parent id" : null , "position" : 0 , "deleted" : false , "menu type" : "ivr menu" , "output msg" : "You selected Lock Star." , "hidden" : false }, "menu path" : { "items count" : 1 , "name" : "Lock Star" , "materialized path" : "9" }, "agent info" : null , "end user" : { "id" : 75 , "identifier" : null , "out contact id" : "389391400633" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 820 , "type" : "end user" , "status" : "waiting" , "call id" : 515 , "user id" : null , "end user id" : 75 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : "cascade" , "offer events" : [ { "casting time" : "2019-09-10T00:19:14.000Z" , "group" : "Group 1" } ], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Error : Menu is in 'after hours' state, can't accept incoming calls This example demonstrates the failure when the provided menu ID is in after hours state.
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Inbound (API)" , "lang" : "en" , "menu id" : 9 , "ticket id" : "76517" , "end user number" : "+1 859-657-9625" , "recording permission" : "recording permission granted" } Response: Create an incoming call with ticket id { "id" : 519 , "lang" : "en" , "call type" : "Voice Inbound (API)" , "status" : "queued" , "created at" : "2019-09-10T05:12:26.000Z" , "queued at" : "2019-09-10T05:12:26.295Z" , "assigned at" : null , "connected at" : null , "ends at" : null , "scheduled at" : null , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "out ticket id" : "76517" , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : { "id" : 9 , "name" : "Lock Star" , "parent id" : null , "position" : 0 , "deleted" : false , "menu type" : "ivr menu" , "output msg" : "You selected Lock Star." , "hidden" : false }, "menu path" : { "items count" : 1 , "name" : "Lock Star" , "materialized path" : "9" }, "agent info" : null , "end user" : { "id" : 75 , "identifier" : null , "out contact id" : "389391400633" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 826 , "type" : "end user" , "status" : "waiting" , "call id" : 519 , "user id" : null , "end user id" : 75 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : "cascade" , "offer events" : [ { "casting time" : "2019-09-10T05:12:26.000Z" , "group" : "Group 1" } ], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Error : Language is not found This example demonstrates the failure when the provided language is not found.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Note: If your company has requested a time zone override for all its users, then the requested time zone will be displayed instead Metric definitions Service Level SL / 30min Service Level within the past 30min SL / day Service Level for the current day SL Target Service Level Target set for the queue Live CIQ Consumers in Queue LCW / Sec Longest Call Waiting AQD / Sec Average Queue Duration (Waiting for an Agent) Live Number of calls currently in progress with an agent Productive Agents Number of agents with a productive status Live Agent Status Available Count of all available agents On-hold (Calls only)Count of agents who have placed a consumer on-hold Wrap-up Count of all agents in the wrap-up status Custom Count of all agents in custom statuses that are configured as productive Productive Agents Count of all agents in a productive status as configured in Settings > Queue Groups Today ABN % Abandon rate Volume Total offered interactions including failed/abandoned sessions.
- Options vary based on the target metric to watch: Agent Average CSAT Available Time Unavailable Time Break Time Meal Time Special Task Time Team Average CSAT Average Call Duration Queue Average CSAT Average Call Duration Average Wait Time Choose the Operator (>, <, =<, or =>), and Value (time frame or CSAT stars) to monitor.
- Call: Includes hold and wrap-up time Chat: includes chat duration Average Wrap-up (Calls) Average duration agent is in wrap-up status after call sessions.

### "Standard Reports Agent and Teams Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Total Preset SMS Sent: Total number of preset SMS sent by Agents using SMS Blending features like In Call and Wait Time SMS.
- Average(Connected [to agent] DateTime - Call Queued DateTime) Longest Wait Time : Max time a consumer spends in the queue.
- For calls, this includes hold time.
- Occupancy : [Total time Agent status = In-Call or In-Chat or Wrap-up] / [Total time agent status = Available] Volume per Hour : Average volume of interactions per hour (per hour referenced as 24 hours in a day, regardless of hours of operation) Handle Time: Calls: average (call duration + hold time + default wrap-up status associated with a Call ID) Chats: average chat duration only (no wrap-up status applied) Longest Handle Time : Longest call/chat duration Calls: max(call duration + average default wrap-up status associated with an interaction ID) Chats: max chat duration only (no wrap-up status applied) Hold Time : Average duration (in seconds) that a consumer was placed on hold by an Agent.

