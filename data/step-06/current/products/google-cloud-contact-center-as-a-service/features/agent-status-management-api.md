---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.105Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Agent status management API"
feature_slug: "agent-status-management-api"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api"
keywords:
  - "agent"
  - "status"
  - "management"
  - "two"
  - "apps"
  - "endpoints"
  - "let"
  - "you"
---

# Agent status management API

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Two Apps API endpoints let you retrieve and update agent statuses, including bulk status updates for teams or selected agents.

## Extended Definition

Two Apps API endpoints let you retrieve and update agent statuses, including bulk status updates for teams or selected agents.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api)

## Supporting Pages

### "Call endpoints \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- Source ID: `site-docs-reference-required-7`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- The following are the call API endpoints: Outbound call - end user number Outbound call - ticket id Incoming call Scheduled call Update reserved data attributes during a call Get reserved data attributes during a call Pass data parameters to virtual agents mid-session Call object The following is an example of the call object: [ { "id" : 0 , "parent id" : 0 , "lang" : "en" , "call type" : "Voice Scheduled (API)" , "status" : "scheduled" , "created at" : "2018-06-07T19:49:52.896Z" , "queued at" : "2018-06-07T19:49:52.896Z" , "assigned at" : "2018-06-07T19:49:52.896Z" , "connected at" : "2018-06-07T19:49:52.896Z" , "ends at" : "2018-06-07T19:49:52.896Z" , "scheduled at" : "2018-06-07T19:49:52.896Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : 0 , "has feedback" : true , "voip provider" : "voip provider twilio" , "out ticket id" : "string" , "out ticket url" : "string" , "verified" : true , "recording url" : "string" , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail details" : "string" , "fail reason" : "nothing" , "support number" : "string" , "selected menu" : { "id" : 0 , "name" : "string" , "parent id" : 0 , "position" : 0 , "deleted" : true , "hidden" : "string" , "menu type" : "ivr menu" , "output msg" : "string" }, "menu path" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "agent info" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "end user" : { "id" : 0 , "identifier" : "string" , "out contact id" : "string" }, "photos" : [ { "id" : 0 , "photo type" : "photo" , "url" : "string" } ], "videos" : [ { "id" : 0 , "url" : "string" } ], "transfers" : [ { "id" : 0 , "status" : "transferring" , "fail reason" : "nothing" , "created at" : "2018-06-07T19:49:52.896Z" , "from menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "to menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "from agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "to agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" } } ], "participants" : [ { "id" : 0 , "type" : "end user" , "status" : "waiting" , "call id" : 0 , "user id" : 0 , "end user id" : 0 , "call duration" : 0 , "hold duration" : 0 , "connected at" : "2018-06-07T19:49:52.896Z" , "ended at" : "2018-06-07T19:49:52.896Z" , "fail reason" : "nothing" } ] } ] Call status definitions The status field can be in any of the following states: Call Status Description Selecting State that occurs when an end user has called into the contact center, but is still navigating the menu options prior to being placed in a leaf menu.
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Outbound (API)" , "agent email" : "allen@somedomain.com" , "end user number" : "+1 205-123-4567" , "lang" : "en" } Status Code: 202 Outbound Call - ticket id Parameter Required Data Type Definition call type TRUE String Call type to create. "Voice Outbound (API)", "OutboundCall" (deprecated) are available for now agent email TRUE String Email address for the agent who will be assigned to the outbound call. ticket id FALSE String CRM ticket ID and it will dial to the end user who is tied to the ticket. end user number FALSE String End user phone number which will be dialing. ticket id has a higher priority than end user number. outbound number FALSE String Well-formed outbound number which is managed from Settings > Phone Numbers > Phone Number Management.
- Request URL variables Key Value Description id integer (Required) Response { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customer" : "boolean" } Status code 0 Update reserved data attributes during a call Endpoint Method: PATCH Type: RAW URL: https:// { subdomain } . { domain } /apps/api/v1/calls/:id/customer flag URL variables Key Value Description id integer (Required) Body { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customers" : "boolean" } Pass data parameters to virtual agents mid-session To use the apps API to pass data parameters to virtual agents in the middle of a call session, see Pass data parameters to virtual agents mid-session .
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Outbound (API)" , "agent email" : "admin@somedomain.com" , "ticket id" : "71450" , "outbound number" : "+1 339-219-5276" , "lang" : "en" } Response: Create an outbound call with ticket id { "id" : 398 , "lang" : "en" , "call type" : "Voice Outbound (API)" , "status" : "assigned" , "created at" : "2019-06-07T01:28:47.955Z" , "queued at" : null , "assigned at" : "2019-06-07T01:28:47.971Z" , "connected at" : null , "ends at" : null , "scheduled at" : null , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "voip provider" : "voip provider twilio" , "out ticket id" : "71450" , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : null , "menu path" : null , "agent info" : { "id" : 1 , "agent number" : null , "name" : "Admin UJET" , "last name" : "UJET" , "first name" : "Admin" , "avatar url" : "https://somedomain.com/default-profile.png" }, "end user" : { "id" : 67 , "identifier" : null , "out contact id" : "381630957514" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 612 , "type" : "agent" , "status" : "waiting" , "call id" : 398 , "user id" : 1 , "end user id" : null , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" }, { "id" : 613 , "type" : "end user" , "status" : "waiting" , "call id" : 398 , "user id" : null , "end user id" : 67 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : null , "offer events" : [], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Accepted : Need to choose an outbound number In this example we show the scenario where an outbound call request is created with the need to choose an outbound number and then is accepted.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Create an APEX REST class Although your code will be different, please see the below example: @RestResource ( urlmapping = '/searchVIP' ) global class UjetVIPSearch { @httpPOST global static void searchVIP () { RestRequest req = RestContext . request ; RestResponse res = RestContext . response ; responsewrapper response = new responsewrapper (); try { requestWrapper jsonBody ; jsonBody = ( requestWrapper ) JSON . deserialize ( req . requestBody . toString (), requestWrapper . class ); String aninumber = jsonBody . phone ; // CCAI Platform will send phone parameter in format % 222 % 333 % 4444 if ( string . isNotBlank ( aninumber )) { integer cnt = [ SELECT count() from Contact where Contact.Phone like :aninumber AND VIP c = true ] ; response . is vip = ( cnt > 0 ); res . responseBody = blob . valueof ( JSON . serialize ( response )); } else { res . statuscode = 404 ; res . responseBody = blob . valueof ( 'No Contact found' ); } } catch ( exception e ) { res . statuscode = 500 ; res . responseBody = blob . valueof ( e . getmessage ()); } } public class responsewrapper { public boolean is vip ; } public class requestWrapper { public string phone ; } } Modify security Since the Apex REST class will be accessed by the agent's OAuth token, you will need to add all applicable agent profiles into the "Enabled Profiles" column.
- Agent transferred from: agent initiating the session transfer Agent transferred to: agent receiving the session transfer Created at: time transfer was created Fail reason: reason for failure of session transfer Menu transferred from: the originating queue menu from which transfer was initiated Menu transferred to: queue menu the session was transferred to Session: CCAI Platform session ID Status: status of transfer Transfer from materialized path: the materialized path transfer was originated from Transfer to materialized path: the materialized path the session was transferred to CCAI Platform agent experience in Salesforce Lightning Provide expected CCAI Platform behaviour in Salesforce Lightning to Admins and Agents, specifically when connecting to the Activity object rather than the CCAI Platform Session object.
- CRM sends agent status update When Agent is not Offline in CCAI Platform, CRM status changes will be made in CCAI Platform based on status mapping When Agent is in Offline in CCAI Platform, CRM status changes will be ignored When the CRM status changes while on an active session/call CCAI Platform treats this status change the same as the agent Next Status feature and when the session is complete, after Wrap-up, the next status is governed by the new CRM status If the agent has defined their Next Status and a CRM status change request is also received, the agent's next status will be set to the latest received status Salesforce Configuration Configure omni-channel If your org has already configured Omni-Channel, skip this section.
- Feedback: when enabled, shows customer feedback collected during session on record Case: case the session object is attached to Initial menu selected: initial queue menu selected Materialized menu path: the selected path leading to connection with the agent Language: the language used or selected for the session Outbound phone number -- applicable outbound phone number Status: status of the session Total transfers: number of total transfers during the session Files All media files associated with the session object are attached as files to the session object.

### "Apps API \_|\_ Google Cloud Contact Center as a Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api)
- Source ID: `site-docs-reference-required-4`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The endpoints are grouped into the following categories: Agent status Bulk user management Calls Campaigns Chats Co-browse Company Do Not Call list Contact data End users Force agent logout SMS Wait times Basic authentication Requests use basic authentication.
- Base URL The API uses the following base URL for all of its API requests https://{subdomain}.{domain​}/apps/api/v1 where a mention to /calls means https://{subdomain​}.​{domain​}/apps/api/v1/calls Rate Limits The system limits requests to a rate of 10 request per second per customer.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Apps API Stay organized with collections Save and categorize content based on your preferences.
- The Contact Center AI Platform (CCAI Platform) provides API endpoints to support integration with the platform.

