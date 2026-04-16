---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.012Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "END_USER_NUMBER text-to-speech variable"
feature_slug: "end-user-number-text-to-speech-variable"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-sms"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "end"
  - "user"
  - "number"
  - "text"
  - "speech"
  - "variable"
  - "can"
  - "read"
---

# END_USER_NUMBER text-to-speech variable

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The @{END_USER_NUMBER} variable can read out the end user's phone number in voicemail and callback prompts.

## Extended Definition

The @{END_USER_NUMBER} variable can read out the end user's phone number in voicemail and callback prompts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-sms](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-sms)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### SMS endpoints | Google Cloud Contact Center as a Service | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-sms](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-sms)
- Source ID: `feature-recovery-direct-http`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- Outbound SMS Parameter Required Data Type Definition chat_type TRUE String Chat type to create. "Messaging (API)", "SMS" (deprecated) are available for now Messaging (API) end_user_number TRUE String Number the text message is to be sent to `{end_user_number}` outbound_number TRUE String Outbound phone number to be used for sending the SMS message `{outbound_number}` message TRUE String SMS message to be sent to consumer `{message}` ticket_id FALSE String CRM ticket ID that will be associated with session `{ticket_id}` Endpoint: Method: POST Type: RAW URL: https:// { ​ { subdomain } ​ } . { ​ { domain } ​ } /apps/api/v1/sms Headers: Key Value Description Content-Type application/json Body: { "chat_type" : "Messaging (SMS)" , "end_user_number" : "+1 415-555-0100" , "outbound_number" : "+1 628-555-0199" , "message" : "lorem ipsum" , "ticket_id" : "5006x00000XXxxxXXX" } Example requests and responses The following sections provide example requests to the endpoint.
- Request Headers: Key Value Description Content-Type application/json Body: { "chat_type" : "Messaging (SMS)" , "end_user_number" : "+1 415-555-0100" , "outbound_number" : "+1 628-555-0199" , "message" : "lorem ipsum" , "agentId" : 1 } Response: Create an outbound SMS chat and assign it to an agent using agentId { "id" : 114 , "lang" : "en" , "chat_type" : "Messaging (SMS)" , "status" : "assigned" , "created_at" : "2021-10-04T17:20:51.000Z" , "queued_at" : null , "assigned_at" : "2021-10-04T17:20:53.000Z" , "ends_at" : null , "wait_duration" : 0 , "chat_duration" : 0 , "rating" : null , "has_feedback" : false , "out_ticket_id" : null , "out_ticket_url" : null , "verified" : false , "disconnected_by" : "disconnected_by_unknown" , "fail_reason" : null , "selected_menu" : null , "menu_path" : null , "agent_info" : { "id" : 1 , "agent_number" : 9 , "email" : "john.doe@foo.com" , "name" : "John Doe" , "first_name" : "John" , "last_name" : "Doe" , "avatar_url" : "https://foobar.com/johndoe" }, "end_user" : { "id" : 87 , "identifier" : null , "out_contact_id" : null }, "photos" : [], "videos" : [], "transfers" : [], "participants" : [ { "id" : 205 , "type" : "end_user" , "status" : "connected" , "chat_id" : 114 , "user_id" : null , "end_user_id" : 87 , "chat_duration" : null , "connected_at" : "2021-10-04T17:20:51.000Z" , "ended_at" : null , "fail_reason" : "nothing" }, { "id" : 206 , "type" : "agent" , "status" : "connected" , "chat_id" : 114 , "user_id" : 1 , "end_user_id" : null , "chat_duration" : null , "connected_at" : "2021-10-04T17:20:53.000Z" , "ended_at" : null , "fail_reason" : "nothing" } ], "offer_type" : null , "offer_events" : [], "answer_type" : "manual" , "outbound_number" : "+16285550199" } Status Code: 200 Create an outbound SMS chat and assign it to an agent email This example demonstrates how to create an outbound SMS chat session and associate it with an agent based on providing the agent email address.
- Request Headers: Key Value Description Content-Type application/json Body: { "chat_type" : "Messaging (SMS)" , "end_user_number" : "+1 415-555-0100" , "outbound_number" : "+1 628-555-0199" , "message" : "lorem ipsum" , "agentEmail" : "john.doe@foo.com" } Response: Create an outbound SMS chat and assign it to an agent using agentId { "id" : 114 , "lang" : "en" , "chat_type" : "Messaging (SMS)" , "status" : "assigned" , "created_at" : "2021-10-04T17:20:51.000Z" , "queued_at" : null , "assigned_at" : "2021-10-04T17:20:53.000Z" , "ends_at" : null , "wait_duration" : 0 , "chat_duration" : 0 , "rating" : null , "has_feedback" : false , "out_ticket_id" : null , "out_ticket_url" : null , "verified" : false , "disconnected_by" : "disconnected_by_unknown" , "fail_reason" : null , "selected_menu" : null , "menu_path" : null , "agent_info" : null , "end_user" : { "id" : 87 , "identifier" : null , "out_contact_id" : null }, "photos" : [], "videos" : [], "transfers" : [], "participants" : [ { "id" : 205 , "type" : "end_user" , "status" : "connected" , "chat_id" : 114 , "user_id" : null , "end_user_id" : 87 , "chat_duration" : null , "connected_at" : "2021-10-04T17:20:51.000Z" , "ended_at" : null , "fail_reason" : "nothing" }, { "id" : 206 , "type" : "agent" , "status" : "connected" , "chat_id" : 114 , "user_id" : 1 , "end_user_id" : null , "chat_duration" : null , "connected_at" : "2021-10-04T17:20:53.000Z" , "ended_at" : null , "fail_reason" : "nothing" } ], "offer_type" : null , "offer_events" : [], "answer_type" : "manual" , "outbound_number" : "+16285550199" } Status Code: 200 Create an outbound SMS chat without ticket ID This example demonstrates how to create an outbound SMS without associating it to a ticket ID.
- Request Headers: Key Value Description Content-Type application/json Body: { "chat_type" : "Messaging (SMS)" , "end_user_number" : "+1 415-555-0100" , "outbound_number" : "+1 628-555-0199" , "message" : "lorem ipsum" , "ticket_id" : "5006x00000XXxxxXXX" } Response: Create an outbound SMS chat with ticket_id { "id" : 114 , "lang" : "en" , "chat_type" : "Messaging (SMS)" , "status" : "selecting" , "created_at" : "2021-10-04T17:20:51.000Z" , "queued_at" : null , "assigned_at" : null , "ends_at" : null , "wait_duration" : 0 , "chat_duration" : 0 , "rating" : null , "has_feedback" : false , "out_ticket_id" : null , "out_ticket_url" : null , "verified" : false , "disconnected_by" : "disconnected_by_unknown" , "fail_reason" : null , "selected_menu" : null , "menu_path" : null , "agent_info" : null , "end_user" : { "id" : 87 , "identifier" : null , "out_contact_id" : null }, "photos" : [], "videos" : [], "transfers" : [], "participants" : [ { "id" : 205 , "type" : "end_user" , "status" : "connected" , "chat_id" : 114 , "user_id" : null , "end_user_id" : 87 , "chat_duration" : null , "connected_at" : "2021-10-04T17:20:51.000Z" , "ended_at" : null , "fail_reason" : "nothing" } ], "offer_type" : null , "offer_events" : [], "answer_type" : "manual" , "outbound_number" : "+16285550199" } Status Code: 200 Create an outbound SMS chat and assign it to an agent using agent ID This example demonstrates how to create an outbound SMS that is assigned to an agent based on the provided agent ID.

### Call settings | Google Cloud Contact Center as a Service | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `feature-recovery-direct-http`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- For Voicemail Option - Request Phone Number Message or Callback Option - Request Phone Number Message , include the @{END_USER_NUMBER} variable in the text-to-speech field.
- For Voicemail - Request Phone Number or Callback - Request Phone Number , include the @{END_USER_NUMBER} variable in the text-to-speech field.
- Read out a phone number in a voicemail or callback message You can use the @{END_USER_NUMBER} variable to read out the end-user's phone number in a message to leave a voicemail or request a callback.
- Here's an example: "I see you're calling from @{END_USER_NUMBER}.

### "Customer Experience Insights and Quality AI \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights](https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The provided labels are imported: Metadata key Calls Chats Description hold duration ✔ Duration that the end-user was put on hold for in seconds. customer phone number ✔ The phone number of the end-user. outbound number ✔ The phone number that the outbound call was placed from (outbound calls only). transfers ✔ ✔ The number of times the call was transferred. has feedback ✔ ✔ Whether the conversation had a feedback response. fail reason ✔ ✔ The reason for the failure of the conversation. out ticket id ✔ ✔ The ticket ID of the conversation. agent assist conversation id X ✔ ✔ The Agent Assist conversation ID of the conversation. dialogflow conversation id X ✔ ✔ The Dialogflow CX conversation ID of the conversation. queue priority level ✔ ✔ The priority level of the conversation. answer type ✔ ✔ The type of the answer. session type v2 ✔ ✔ The type of the session. menu ✔ ✔ The menu of the conversation.
- In addition, you need to grant the following IAM roles to your service account: Storage Admin Contact Center AI Insights editor Cloud Speech-to-Text Service Agent For more information on granting roles to a service account see the Google IAM Manage Access documentation .
- As a part of the process you must also enable the following APIs: Speech-to-Text : to be able to generate transcripts from the call audio recordings.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Customer Experience Insights and Quality AI Stay organized with collections Save and categorize content based on your preferences.

