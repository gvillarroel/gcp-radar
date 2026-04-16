---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:46.998Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Virtual agent SIP endpoint ringing timeout"
feature_slug: "virtual-agent-sip-endpoint-ringing-timeout"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide"
keywords:
  - "virtual"
  - "agent"
  - "sip"
  - "endpoint"
  - "ringing"
  - "timeout"
  - "agents"
  - "can"
---

# Virtual agent SIP endpoint ringing timeout

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Virtual agents can be configured with a custom ringing timeout for outbound calls transferred to SIP endpoints.

## Extended Definition

Virtual agents can be configured with a custom ringing timeout for outbound calls transferred to SIP endpoints.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- If After Hour Deflection is disabled, mark the checkbox Allow transfers to queues outside of operation for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter All queues within operating hours All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are after hours with after hour deflection enabled All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Enable over capacity deflection : Specify the estimated wait time threshold for the consumer to be deflected to the options set below.
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.
- Overcapacity gives alternative contact options in times of high volume, chat dismissal and timeout settings help fine-tune how chats are handled by the system, and shortcuts help agents access quick responses.
- To complete your configuration, do the following: Select the Include transfer by virtual agent in total transfer count checkbox if you want transfers by virtual agents to be counted.

### "Call endpoints \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- Source ID: `site-docs-reference-required-7`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The following are the call API endpoints: Outbound call - end user number Outbound call - ticket id Incoming call Scheduled call Update reserved data attributes during a call Get reserved data attributes during a call Pass data parameters to virtual agents mid-session Call object The following is an example of the call object: [ { "id" : 0 , "parent id" : 0 , "lang" : "en" , "call type" : "Voice Scheduled (API)" , "status" : "scheduled" , "created at" : "2018-06-07T19:49:52.896Z" , "queued at" : "2018-06-07T19:49:52.896Z" , "assigned at" : "2018-06-07T19:49:52.896Z" , "connected at" : "2018-06-07T19:49:52.896Z" , "ends at" : "2018-06-07T19:49:52.896Z" , "scheduled at" : "2018-06-07T19:49:52.896Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : 0 , "has feedback" : true , "voip provider" : "voip provider twilio" , "out ticket id" : "string" , "out ticket url" : "string" , "verified" : true , "recording url" : "string" , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail details" : "string" , "fail reason" : "nothing" , "support number" : "string" , "selected menu" : { "id" : 0 , "name" : "string" , "parent id" : 0 , "position" : 0 , "deleted" : true , "hidden" : "string" , "menu type" : "ivr menu" , "output msg" : "string" }, "menu path" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "agent info" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "end user" : { "id" : 0 , "identifier" : "string" , "out contact id" : "string" }, "photos" : [ { "id" : 0 , "photo type" : "photo" , "url" : "string" } ], "videos" : [ { "id" : 0 , "url" : "string" } ], "transfers" : [ { "id" : 0 , "status" : "transferring" , "fail reason" : "nothing" , "created at" : "2018-06-07T19:49:52.896Z" , "from menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "to menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "from agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "to agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" } } ], "participants" : [ { "id" : 0 , "type" : "end user" , "status" : "waiting" , "call id" : 0 , "user id" : 0 , "end user id" : 0 , "call duration" : 0 , "hold duration" : 0 , "connected at" : "2018-06-07T19:49:52.896Z" , "ended at" : "2018-06-07T19:49:52.896Z" , "fail reason" : "nothing" } ] } ] Call status definitions The status field can be in any of the following states: Call Status Description Selecting State that occurs when an end user has called into the contact center, but is still navigating the menu options prior to being placed in a leaf menu.
- Request URL variables Key Value Description id integer (Required) Response { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customer" : "boolean" } Status code 0 Update reserved data attributes during a call Endpoint Method: PATCH Type: RAW URL: https:// { subdomain } . { domain } /apps/api/v1/calls/:id/customer flag URL variables Key Value Description id integer (Required) Body { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customers" : "boolean" } Pass data parameters to virtual agents mid-session To use the apps API to pass data parameters to virtual agents in the middle of a call session, see Pass data parameters to virtual agents mid-session .
- Uses ISO 639-1 codes. (Default: "en") Endpoint: Method: POST Type: RAW URL: https:// { subdomain } .​ { domain } ​/apps/api/v1/calls Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Outbound (API)" , "agent email" : "agent@somedomain.com" , "outbound number" : "+1 760-867-5309" , "end user number" : "123123" , "lang" : "en" } Example request and responses The following sections provide example requests to the endpoint.
- Uses ISO 639-1 codes. (Default: "en") Endpoint: Method: POST Type: RAW URL: https:// { subdomain } . { domain } ​/apps/api/v1/calls Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Outbound (API)" , "agent email" : "allen@somedomain.com" , "outbound number" : "+1 760-867-5309" , "ticket id" : "123123" , "lang" : "en" } Example request and responses The following sections provide example requests to the endpoint.

### "Interactive Virtual Assistant (IVA) guide \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Virtual agent escalation using SIP integration This section explains how to create a Dialogflow CX custom payload for virtual agent escalations when you have the following requirements: The virtual agent needs to escalate to human agents on your own contact center using SIP.
- AI-powered virtual agent can handle a wide range of customer inquiries, freeing up human agents for more complex issues.
- This option is only used by Dialogflow CX virtual agents.
- This will set up an automatic redirection for transferring to an existing third party telephony platform. { "ujet" : { "type" : "action" , "action" : "escalation" , "escalation reason" : "by virtual agent" , "menu id" : 100 , "language" : "ko" } } The menu id is the value that you saved for the automatic redirection queue node in step 1.

