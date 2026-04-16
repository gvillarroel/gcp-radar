---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.122Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Hold music during call connection"
feature_slug: "hold-music-during-call-connection"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
keywords:
  - "hold"
  - "music"
  - "during"
  - "call"
  - "connection"
  - "handling"
  - "now"
  - "keeps"
---

# Hold music during call connection

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Call handling now keeps music playing until an agent joins the call and plays a distinct sound for the agent when the end-user joins.

## Extended Definition

Call handling now keeps music playing until an agent joins the call and plays a distinct sound for the agent when the end-user joins.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Optional: Select the Apply unresponsive thresholds when agent is in anactive call session checkbox to apply the unresponsive threshold count to agents that become unresponsive during an active session.
- Optional: Select the Apply unresponsive thresholds when agent is in anactive call session checkbox to apply the unresponsive threshold count to agents that become unresponsive during an active session.
- Available session types This flexible inbound call handling UI will show when the call session is one of the following types: Voice Inbound (IVR), Voice Callback (Web), Voice Scheduled (Web), Voice Inbound (Mobile), Voice Inbound (IVR using Mobile), Voice Scheduled (Mobile), & Voice Inbound (API).
- Select mobile and web SDK call deflection options When selected, visual options will be displayed when either outside of operating hours or when the estimated wait time is higher than the set Overcapacity threshold.

### "Call endpoints \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- Source ID: `site-docs-reference-required-7`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The following are the call API endpoints: Outbound call - end user number Outbound call - ticket id Incoming call Scheduled call Update reserved data attributes during a call Get reserved data attributes during a call Pass data parameters to virtual agents mid-session Call object The following is an example of the call object: [ { "id" : 0 , "parent id" : 0 , "lang" : "en" , "call type" : "Voice Scheduled (API)" , "status" : "scheduled" , "created at" : "2018-06-07T19:49:52.896Z" , "queued at" : "2018-06-07T19:49:52.896Z" , "assigned at" : "2018-06-07T19:49:52.896Z" , "connected at" : "2018-06-07T19:49:52.896Z" , "ends at" : "2018-06-07T19:49:52.896Z" , "scheduled at" : "2018-06-07T19:49:52.896Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : 0 , "has feedback" : true , "voip provider" : "voip provider twilio" , "out ticket id" : "string" , "out ticket url" : "string" , "verified" : true , "recording url" : "string" , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail details" : "string" , "fail reason" : "nothing" , "support number" : "string" , "selected menu" : { "id" : 0 , "name" : "string" , "parent id" : 0 , "position" : 0 , "deleted" : true , "hidden" : "string" , "menu type" : "ivr menu" , "output msg" : "string" }, "menu path" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "agent info" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "end user" : { "id" : 0 , "identifier" : "string" , "out contact id" : "string" }, "photos" : [ { "id" : 0 , "photo type" : "photo" , "url" : "string" } ], "videos" : [ { "id" : 0 , "url" : "string" } ], "transfers" : [ { "id" : 0 , "status" : "transferring" , "fail reason" : "nothing" , "created at" : "2018-06-07T19:49:52.896Z" , "from menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "to menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "from agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "to agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" } } ], "participants" : [ { "id" : 0 , "type" : "end user" , "status" : "waiting" , "call id" : 0 , "user id" : 0 , "end user id" : 0 , "call duration" : 0 , "hold duration" : 0 , "connected at" : "2018-06-07T19:49:52.896Z" , "ended at" : "2018-06-07T19:49:52.896Z" , "fail reason" : "nothing" } ] } ] Call status definitions The status field can be in any of the following states: Call Status Description Selecting State that occurs when an end user has called into the contact center, but is still navigating the menu options prior to being placed in a leaf menu.
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Outbound (API)" , "agent email" : "admin@somedomain.com" , "ticket id" : "71450" , "outbound number" : "+1 339-219-5276" , "lang" : "en" } Response: Create an outbound call with ticket id { "id" : 398 , "lang" : "en" , "call type" : "Voice Outbound (API)" , "status" : "assigned" , "created at" : "2019-06-07T01:28:47.955Z" , "queued at" : null , "assigned at" : "2019-06-07T01:28:47.971Z" , "connected at" : null , "ends at" : null , "scheduled at" : null , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "voip provider" : "voip provider twilio" , "out ticket id" : "71450" , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : null , "menu path" : null , "agent info" : { "id" : 1 , "agent number" : null , "name" : "Admin UJET" , "last name" : "UJET" , "first name" : "Admin" , "avatar url" : "https://somedomain.com/default-profile.png" }, "end user" : { "id" : 67 , "identifier" : null , "out contact id" : "381630957514" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 612 , "type" : "agent" , "status" : "waiting" , "call id" : 398 , "user id" : 1 , "end user id" : null , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" }, { "id" : 613 , "type" : "end user" , "status" : "waiting" , "call id" : 398 , "user id" : null , "end user id" : 67 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : null , "offer events" : [], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Accepted : Need to choose an outbound number In this example we show the scenario where an outbound call request is created with the need to choose an outbound number and then is accepted.
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Scheduled (API)" , "lang" : "en" , "call id" : 514 , "end user number" : "+82-10-6861-2345" , "scheduled at" : "2019-09-15T00:19:14.421Z" , "recording permission" : "recording permission granted" } Response: Create an scheduled call with call ID { "id" : 515 , "lang" : "en" , "call type" : "Voice Inbound (API)" , "status" : "queued" , "created at" : "2019-09-10T00:19:14.000Z" , "queued at" : null , "assigned at" : null , "connected at" : null , "ends at" : null , "scheduled at" : "2019-09-15T00:19:14.421Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "out ticket id" : null , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : { "id" : 9 , "name" : "Lock Star" , "parent id" : null , "position" : 0 , "deleted" : false , "menu type" : "ivr menu" , "output msg" : "You selected Lock Star." , "hidden" : false }, "menu path" : { "items count" : 1 , "name" : "Lock Star" , "materialized path" : "9" }, "agent info" : null , "end user" : { "id" : 75 , "identifier" : null , "out contact id" : "389391400633" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 820 , "type" : "end user" , "status" : "waiting" , "call id" : 515 , "user id" : null , "end user id" : 75 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : "cascade" , "offer events" : [ { "casting time" : "2019-09-10T00:19:14.000Z" , "group" : "Group 1" } ], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Error : Menu is in 'after hours' state, can't accept incoming calls In this example we show the failure scenario where a scheduled call is created but that the provided menu is out of hours and as such cannot receive incoming calls.
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Outbound (API)" , "agent email" : "agent@somedomain.com" , "ticket id" : "71450" , "outbound number" : "+1 339-219-5276" , "lang" : "en" } Response: Create an outbound call with ticket id { "id" : 398 , "lang" : "en" , "call type" : "Voice Outbound (API)" , "status" : "assigned" , "created at" : "2019-06-07T01:28:47.955Z" , "queued at" : null , "assigned at" : "2019-06-07T01:28:47.971Z" , "connected at" : null , "ends at" : null , "scheduled at" : null , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "voip provider" : "voip provider twilio" , "out ticket id" : "71450" , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : null , "menu path" : null , "agent info" : { "id" : 1 , "agent number" : null , "name" : "Admin UJET" , "last name" : "UJET" , "first name" : "Admin" , "avatar url" : "https://somedomain.com/avatar.png" }, "end user" : { "id" : 67 , "identifier" : null , "out contact id" : "381630957514" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 612 , "type" : "agent" , "status" : "waiting" , "call id" : 398 , "user id" : 1 , "end user id" : null , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" }, { "id" : 613 , "type" : "end user" , "status" : "waiting" , "call id" : 398 , "user id" : null , "end user id" : 67 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : null , "offer events" : [], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Error : ticket ID or end-user number required This example demonstrates the failure case where the ticket ID or end-user number are required but not provided.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Configure settings for handling chats Enable chat, create proactive web triggers, establish chat channel settings like chat threshold for agents and timeout settings at Settings > Chat Create chat shortcuts for agents to use.
- Scheduled calls: Allow users to schedule a time to talk with your support team; AI-powered algorithms predict and provide 15-minute time slots based on agent availability, ensuring your users never have to wait on hold.
- Scheduled calls: Allow users to schedule a time to talk with your support team; AI-powered algorithms predict and provide 15-minute time slots based on agent availability, ensuring your users never have to wait on hold.
- PSTN Fallback calls : When the end-user doesn't have a strong enough data connection for a VoIP call, CCAI Platform will fallback to a PSTN call while still sending the important custom data packet to your CRM record.

