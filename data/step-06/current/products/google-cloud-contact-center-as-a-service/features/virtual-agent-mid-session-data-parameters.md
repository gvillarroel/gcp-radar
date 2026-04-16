---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.055Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Virtual agent mid-session data parameters"
feature_slug: "virtual-agent-mid-session-data-parameters"
latest_feature_date: "2025-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
keywords:
  - "virtual"
  - "agent"
  - "mid"
  - "session"
  - "parameters"
  - "can"
  - "passed"
  - "while"
---

# Virtual agent mid-session data parameters

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Data parameters can be passed to a virtual agent while a session is in progress.

## Extended Definition

Data parameters can be passed to a virtual agent while a session is in progress.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)

## Supporting Pages

### "Session data feed \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How can I help you? ---------------------------------------- [July 5, 2024 at 4:23:10 PM GMT+7 Consumer] human agent ---------------------------------------- Live Translation was used Spanish (Spain) and English (US) were used for translation Data parameters passed to Virtual Agent Data parameters passed to Virtual Agent PN - Chat Data parameters passed: order: yes product: books queueId: 502 queueLanguage: en Pre-session SMS deflection Pre-session SMS deflection was offered in ORDERS RETURNS/PN/PN 1 Pre-session SMS deflection was accepted Dispositions Code: test001 Custom Code ID: 123 UJET Code ID: 3 Note: Okee List: Custom Custom List ID: 2222 UJET List ID: 3 Agent: Alex B CCAI Insight chat history uploaded GCS URL: gs://example-insights/oem/...
- Content Card button was selected End User selected the button Primary with reply 1 from the Title 1 card Call transfer redirected to external SIP SIP destination: sip:returns@returns.onsip.com Data parameters passed: userName: Alex B Virtual Agent call recording Virtual Agent call recording is not available for consumer privacy reasons Virtual Agent transcript Virtual Agent call transcript is not available for consumer privacy reasons VA URL Links URL Links from Virtual Agent Returnsbot https://example.com/returns/...
- Captured VA session variables Chat ID: 3070 Menu: In-App Support (QUEUE qca02)/Support/PN/PN 1 Chatbot Platform: Virtual Agent PN Chatbot Workflow: Post Session Transfer - Chat Virtual Agent: Virtual Agent PN - Chat Intent: Captured At: July 5, 2024 at 3:08:39 PM GMT+7 Captured Variables agentHelpfulness: 4 issueResolution: yes agentComprehension: 5 openFeedback: nothing Co-browse session started Screen Share session was started by Agent Time of start: July 5, 2024 at 3:16:54 PM GMT+7 Co-browse session ended Screen Share session was ended by Agent Time of end: July 5, 2024 at 3:19:31 PM GMT+7 Co-browse remote control requested Screen Share remote control was requested Co-browse remote control accepted Screen Share remote control was accepted Co-browse remote control rejected Screen Share remote control was rejected Co-browse full device control requested Screen Share full device control was requested Co-browse full device control accepted Screen Share full device control was accepted Co-browse full device control rejected Screen Share full device control was rejected Session sentiment score Average sentiment score for the segment: 52 Customer email collected Customer email: 222larabrown@gmail.com Realtime Transcript Call ID: 6800 July 5, 2024 at 4:23:03 PM GMT+7 00:25 ---------------------------------------- [July 5, 2024 at 4:23:05 PM GMT+7 Virtual Agent PN - Voice] Hello, I am CX Agent Number 1.
- API DAP Response (Loanne: True) API Response key value list key: zulu priority: 1 user type: shopper API Response Json { "key": "zulu", "priority: 1, "user type": "shopper" } Request parameters passed to API DAP Request parameters passed: { "fixed parameter": "abcxyz", "abc": 1 } Verified Verified by Alex B Payment Data Product Name: sample product name Amount Charged: 10.00 USD Payment Status: Success Transaction ID: ch 3PYlfT Agent: Alex B Timestamp: July 4, 2024 at 4:09:32 PM GMT+7 Customer rating received Customer rating feedback received: 5 Customer text feedback received: very good Call Redacted Start: July 5, 2024 at 11:28:48 AM GMT+7 End: July 5, 2024 at 11:35:33 AM GMT+7 Duration: 06:45 Chat transcript uploaded Chat message history CRM link: https://example.com/attachments/token/...

### "Interactive Virtual Assistant (IVA) guide \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you need to send dynamic session parameters from the virtual agent interaction, consider using virtual agent deflection to external telephony.
- The virtual agent needs to dynamically pass custom session headers.
- This will set up an automatic redirection for transferring to an existing third party telephony platform. { "ujet" : { "type" : "action" , "action" : "escalation" , "escalation reason" : "by virtual agent" , "menu id" : 100 , "language" : "ko" } } The menu id is the value that you saved for the automatic redirection queue node in step 1.
- Virtual agent escalation using SIP integration This section explains how to create a Dialogflow CX custom payload for virtual agent escalations when you have the following requirements: The virtual agent needs to escalate to human agents on your own contact center using SIP.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Here is an example reserved data properties in a SIP header: se tt i n g : { redirec t io n : { op t io n : "sip" , sip : { uri : "Destination SIP URI" , da ta parame ters e na bled : true false , da ta parame ters : [ { f ield : "verified customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "bad actor" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "repeat customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" } ], da ta records : { i n me ta da ta : true false , i n crm record : true false } } } } Support for virtual agents If you have a virtual agent (a support agent or a virtual task assistant) that performs end-user verification, the virtual agent can pass the end-user verification information to CCAI Platform.
- Settings recommendations Use a longer ringtone and/or more frequent notification if: Agents are often multitasking and not always waiting to take a call In an open office or louder environment Agents might listen to music from their computer Use a shorter ringtone if: Agents are always alert and waiting for calls Higher call frequency Call whisper: Use this when the queue selection and type of call highly impact the first communication from the agent Increase speed of whisper for decreased wait time impact For very low second count SLAs: Only use whisper and countdown if necessary as the duration of these messages contributes to the wait time for calls Send reserved data properties With reserved data properties, you can send information about an end-user to CCAI Platform when a chat or call session begins, or even after a session has begun.
- If After Hour Deflection is disabled, mark the checkbox Allow transfers to queues outside of operation when After Hours Deflection is disabled for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter: All queues within operating hours All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with after hour deflection enabled All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation After hour deflection options : Select Email to deflect an end-user to email if chatting in after hours.
- Mark the checkbox Allow transfers to queues outside of operation hours for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter: All queues within operating hours All queues that are outside of operation hours with after hour deflection enabled All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Select Mobile and Web SDK call deflection options When selected, visual options will be displayed when outside of hours of operation.

