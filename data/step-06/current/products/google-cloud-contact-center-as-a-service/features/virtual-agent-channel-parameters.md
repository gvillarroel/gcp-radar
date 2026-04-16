---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.102Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Virtual Agent channel parameters"
feature_slug: "virtual-agent-channel-parameters"
latest_feature_date: "2023-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call"
keywords:
  - "virtual"
  - "agent"
  - "channel"
  - "parameters"
  - "agents"
  - "can"
  - "pass"
  - "specific"
---

# Virtual Agent channel parameters

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Virtual Agents can pass channel-specific parameters to CCAI Platform when invoking a Dialogflow agent.

## Extended Definition

Virtual Agents can pass channel-specific parameters to CCAI Platform when invoking a Dialogflow agent.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)

## Supporting Pages

### "Interactive Virtual Assistant (IVA) guide \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Virtual agent escalation using SIP integration This section explains how to create a Dialogflow CX custom payload for virtual agent escalations when you have the following requirements: The virtual agent needs to escalate to human agents on your own contact center using SIP.
- Virtual agent escalation using call forwarding When a Dialogflow CX virtual agent needs to escalate to a human agent, the telephony platform uses a fixed configuration of the instance's IVR voice channel.
- Note: If you need to send dynamic session parameters from the virtual agent interaction, consider using virtual agent deflection to external telephony.
- AI-powered virtual agent can handle a wide range of customer inquiries, freeing up human agents for more complex issues.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Here is an example reserved data properties in a SIP header: se tt i n g : { redirec t io n : { op t io n : "sip" , sip : { uri : "Destination SIP URI" , da ta parame ters e na bled : true false , da ta parame ters : [ { f ield : "verified customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "bad actor" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "repeat customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" } ], da ta records : { i n me ta da ta : true false , i n crm record : true false } } } } Support for virtual agents If you have a virtual agent (a support agent or a virtual task assistant) that performs end-user verification, the virtual agent can pass the end-user verification information to CCAI Platform.
- If After Hour Deflection is disabled, mark the checkbox Allow transfers to queues outside of operation when After Hours Deflection is disabled for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter: All queues within operating hours All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with after hour deflection enabled All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation After hour deflection options : Select Email to deflect an end-user to email if chatting in after hours.
- Mark the checkbox Allow transfers to queues outside of operation hours for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter: All queues within operating hours All queues that are outside of operation hours with after hour deflection enabled All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Select Mobile and Web SDK call deflection options When selected, visual options will be displayed when outside of hours of operation.
- Configure a virtual task assistant to pass the Verified Customer parameter To configure a virtual task assistant to pass the Verified Customer parameter, follow these steps: In the CCAI Platform portal, click Settings > Virtual Agent .

### "Call endpoints \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- Source ID: `site-docs-reference-required-7`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The following are the call API endpoints: Outbound call - end user number Outbound call - ticket id Incoming call Scheduled call Update reserved data attributes during a call Get reserved data attributes during a call Pass data parameters to virtual agents mid-session Call object The following is an example of the call object: [ { "id" : 0 , "parent id" : 0 , "lang" : "en" , "call type" : "Voice Scheduled (API)" , "status" : "scheduled" , "created at" : "2018-06-07T19:49:52.896Z" , "queued at" : "2018-06-07T19:49:52.896Z" , "assigned at" : "2018-06-07T19:49:52.896Z" , "connected at" : "2018-06-07T19:49:52.896Z" , "ends at" : "2018-06-07T19:49:52.896Z" , "scheduled at" : "2018-06-07T19:49:52.896Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : 0 , "has feedback" : true , "voip provider" : "voip provider twilio" , "out ticket id" : "string" , "out ticket url" : "string" , "verified" : true , "recording url" : "string" , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail details" : "string" , "fail reason" : "nothing" , "support number" : "string" , "selected menu" : { "id" : 0 , "name" : "string" , "parent id" : 0 , "position" : 0 , "deleted" : true , "hidden" : "string" , "menu type" : "ivr menu" , "output msg" : "string" }, "menu path" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "agent info" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "end user" : { "id" : 0 , "identifier" : "string" , "out contact id" : "string" }, "photos" : [ { "id" : 0 , "photo type" : "photo" , "url" : "string" } ], "videos" : [ { "id" : 0 , "url" : "string" } ], "transfers" : [ { "id" : 0 , "status" : "transferring" , "fail reason" : "nothing" , "created at" : "2018-06-07T19:49:52.896Z" , "from menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "to menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "from agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "to agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" } } ], "participants" : [ { "id" : 0 , "type" : "end user" , "status" : "waiting" , "call id" : 0 , "user id" : 0 , "end user id" : 0 , "call duration" : 0 , "hold duration" : 0 , "connected at" : "2018-06-07T19:49:52.896Z" , "ended at" : "2018-06-07T19:49:52.896Z" , "fail reason" : "nothing" } ] } ] Call status definitions The status field can be in any of the following states: Call Status Description Selecting State that occurs when an end user has called into the contact center, but is still navigating the menu options prior to being placed in a leaf menu.
- Request URL variables Key Value Description id integer (Required) Response { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customer" : "boolean" } Status code 0 Update reserved data attributes during a call Endpoint Method: PATCH Type: RAW URL: https:// { subdomain } . { domain } /apps/api/v1/calls/:id/customer flag URL variables Key Value Description id integer (Required) Body { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customers" : "boolean" } Pass data parameters to virtual agents mid-session To use the apps API to pass data parameters to virtual agents in the middle of a call session, see Pass data parameters to virtual agents mid-session .
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Outbound (API)" , "agent email" : "admin@somedomain.com" , "end user number" : "+1 859-657-9625" , "outbound number" : "+1 339-219-5276" , "lang" : "en" } Response: Create an outbound call with end user number { "id" : 397 , "lang" : "en" , "call type" : "Voice Outbound (API)" , "status" : "assigned" , "created at" : "2019-06-07T01:27:30.406Z" , "queued at" : null , "assigned at" : "2019-06-07T01:27:30.441Z" , "connected at" : null , "ends at" : null , "scheduled at" : null , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "voip provider" : "voip provider twilio" , "out ticket id" : null , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : null , "menu path" : null , "agent info" : { "id" : 1 , "agent number" : null , "name" : "Admin UJET" , "last name" : "UJET" , "first name" : "Admin" , "avatar url" : "https://somedomain.com/avatar.jpg" }, "end user" : null , "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 610 , "type" : "agent" , "status" : "waiting" , "call id" : 397 , "user id" : 1 , "end user id" : null , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" }, { "id" : 611 , "type" : "end user" , "status" : "waiting" , "call id" : 397 , "user id" : null , "end user id" : null , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : null , "offer events" : [], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Create an outbound call with ticket ID This example demonstrates the creation of an outbound call with a specific ticket ID.
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Scheduled (API)" , "lang" : "en" , "menu id" : 9 , "end user number" : "+82-10-6861-2345" , "scheduled at" : "2019-09-15T00:19:14.421Z" , "recording permission" : "recording permission granted" } Response: Create an scheduled call with menu ID { "id" : 515 , "lang" : "en" , "call type" : "Voice Inbound (API)" , "status" : "queued" , "created at" : "2019-09-10T00:19:14.000Z" , "queued at" : null , "assigned at" : null , "connected at" : null , "ends at" : null , "scheduled at" : "2019-09-15T00:19:14.421Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "out ticket id" : null , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : { "id" : 9 , "name" : "Lock Star" , "parent id" : null , "position" : 0 , "deleted" : false , "menu type" : "ivr menu" , "output msg" : "You selected Lock Star." , "hidden" : false }, "menu path" : { "items count" : 1 , "name" : "Lock Star" , "materialized path" : "9" }, "agent info" : null , "end user" : { "id" : 75 , "identifier" : null , "out contact id" : "389391400633" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 820 , "type" : "end user" , "status" : "waiting" , "call id" : 515 , "user id" : null , "end user id" : 75 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : "cascade" , "offer events" : [ { "casting time" : "2019-09-10T00:19:14.000Z" , "group" : "Group 1" } ], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Create a scheduled call with call ID This example demonstrates how to create a scheduled call with a specific call ID.

