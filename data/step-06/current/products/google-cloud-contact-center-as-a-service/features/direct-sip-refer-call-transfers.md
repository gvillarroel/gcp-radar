---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.061Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Direct SIP REFER call transfers"
feature_slug: "direct-sip-refer-call-transfers"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "direct"
  - "sip"
  - "refer"
  - "call"
  - "transfers"
  - "virtual"
  - "assistant"
  - "can"
---

# Direct SIP REFER call transfers

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Virtual assistant call transfers can now use the direct SIP REFER method and pass transfer context such as caller intent and account information.

## Extended Definition

Virtual assistant call transfers can now use the direct SIP REFER method and pass transfer context such as caller intent and account information.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Interactive Virtual Assistant (IVA) guide \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Interactive Virtual Assistant (IVA) guide Stay organized with collections Save and categorize content based on your preferences.
- When the call is escalated by the virtual agent it is routed back to the existing telephony using SIP REFER.
- The following is an sample custom payload: { "ujet" : { "type" : "action" , "action" : "deflection" , "deflection type" : "sip" "sip uri" : "sip:1-999-123-4567@voip-provider.example.net:5060" "sip refer" : true "sip parameters" : { "x-header" : "value" , "x-header" : "value" } } } In the example, "sip refer": true indicates that the call is transferred using the SIP REFER method.
- This will set up an automatic redirection for transferring to an existing third party telephony platform. { "ujet" : { "type" : "action" , "action" : "escalation" , "escalation reason" : "by virtual agent" , "menu id" : 100 , "language" : "ko" } } The menu id is the value that you saved for the automatic redirection queue node in step 1.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Mark the checkbox Allow transfers to queues outside of operation hours for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter: All queues within operating hours All queues that are outside of operation hours with after hour deflection enabled All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Select Mobile and Web SDK call deflection options When selected, visual options will be displayed when outside of hours of operation.
- This should be a virtual agent with a Call label and an Assistant label.
- Here is an example reserved data properties in a SIP header: se tt i n g : { redirec t io n : { op t io n : "sip" , sip : { uri : "Destination SIP URI" , da ta parame ters e na bled : true false , da ta parame ters : [ { f ield : "verified customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "bad actor" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "repeat customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" } ], da ta records : { i n me ta da ta : true false , i n crm record : true false } } } } Support for virtual agents If you have a virtual agent (a support agent or a virtual task assistant) that performs end-user verification, the virtual agent can pass the end-user verification information to CCAI Platform.
- If After Hour Deflection is disabled, mark the checkbox Allow transfers to queues outside of operation when After Hours Deflection is disabled for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter: All queues within operating hours All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with after hour deflection enabled All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation After hour deflection options : Select Email to deflect an end-user to email if chatting in after hours.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .
- Notes : This option must be enabled if over capacity or Automatic redirection is to be followed for call transfers.
- Session types for reporting For reporting, calls to or from direct phone numbers generate the following session types: Voice Inbound (Direct) : an inbound call to a direct phone number Voice Outbound (Direct) : an outbound call from a direct phone number Voice Internal : an internal call to or from a direct phone number Estimated wait time announcement for calls Estimated Wait Time (EWT) Announcements use a calculation to predict the wait time until a caller is connected with an agent.

