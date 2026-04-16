---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.092Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Dialogflow CX Chat and Voice legacy onboarding flow"
feature_slug: "dialogflow-cx-chat-and-voice-legacy-onboarding-flow"
latest_feature_date: "2024-01-09"
deprecation_date: "2024-01-09"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "dialogflow"
  - "cx"
  - "chat"
  - "voice"
  - "legacy"
  - "onboarding"
  - "flow"
  - "deprecated"
---

# Dialogflow CX Chat and Voice legacy onboarding flow

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The legacy Dialogflow CX Chat and Voice onboarding flow is deprecated in favor of the new onboarding flow; deprecated on 2024-01-09.

## Extended Definition

The legacy Dialogflow CX Chat and Voice onboarding flow is deprecated in favor of the new onboarding flow; deprecated on 2024-01-09.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights](https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Using SmartActions for Web SDK Chats While the same flow of prompting the consumer to take an action like send a photo or video is not available for Web SDK chat, consumers can still add image attachments.
- In the Destination Field , enter a field name that your CRM will recognize, and that Dialogflow CX will use as a parameter.
- In the Destination Field , enter a field name that your CRM will recognize, and that Dialogflow CX will use as a parameter.
- Settings recommendations Use a longer ringtone and/or more frequent notification if: Agents are often multitasking and not always waiting to take a call In an open office or louder environment Agents might listen to music from their computer Use a shorter ringtone if: Agents are always alert and waiting for calls Higher call frequency Call whisper: Use this when the queue selection and type of call highly impact the first communication from the agent Increase speed of whisper for decreased wait time impact For very low second count SLAs: Only use whisper and countdown if necessary as the duration of these messages contributes to the wait time for calls Send reserved data properties With reserved data properties, you can send information about an end-user to CCAI Platform when a chat or call session begins, or even after a session has begun.

### "Customer Experience Insights and Quality AI \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights](https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The provided labels are imported: Metadata key Calls Chats Description hold duration ✔ Duration that the end-user was put on hold for in seconds. customer phone number ✔ The phone number of the end-user. outbound number ✔ The phone number that the outbound call was placed from (outbound calls only). transfers ✔ ✔ The number of times the call was transferred. has feedback ✔ ✔ Whether the conversation had a feedback response. fail reason ✔ ✔ The reason for the failure of the conversation. out ticket id ✔ ✔ The ticket ID of the conversation. agent assist conversation id X ✔ ✔ The Agent Assist conversation ID of the conversation. dialogflow conversation id X ✔ ✔ The Dialogflow CX conversation ID of the conversation. queue priority level ✔ ✔ The priority level of the conversation. answer type ✔ ✔ The type of the answer. session type v2 ✔ ✔ The type of the session. menu ✔ ✔ The menu of the conversation.
- CX Insights seamlessly integrates with other products, allowing you to import conversations from Dialogflow CX and Agent Assist.
- Note: X is a number based on the leg of the conversation where multiple Agent Assist or Dialogflow CX sessions existed.
- File destinations : Voice and chat preview file paths will be generated based on your folder path entered.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Voicemail: Once the agent has listened to the voicemail, they will be given the option to call the consumer back, and the entered custom callback number will be used What happens when a consumer hangs up before completing the flow?
- Prerequisites In order to enable the Pre-session Deflection, you must have the following: A valid CCAI Platform account with Admin role assigned A valid Legacy, Pro, Enterprise, or Digital License Package A valid subscription for CCAI Platform IVR Support with IVR enabled A valid subscription for CCAI Platform SMS Support enabled with a valid queue structure The SMS must be functional (agent assigned) Basic configuration Do the following procedures, in order: Enable pre-session SMS deflection Enable and save the pre-session SMS deflection offer and opted-in messages Enable and save the pre-session SMS deflection greeting message Configure pre-session SMS deflection for a specific queue Enable pre-session SMS deflection Go Settings > Call.
- Session types for reporting For reporting, calls to or from direct phone numbers generate the following session types: Voice Inbound (Direct) : an inbound call to a direct phone number Voice Outbound (Direct) : an outbound call from a direct phone number Voice Internal : an internal call to or from a direct phone number Estimated wait time announcement for calls Estimated Wait Time (EWT) Announcements use a calculation to predict the wait time until a caller is connected with an agent.
- When enabled, configure the TSS or upload a custom greeting in Settings Languages & Messages Deflection to Voicemail option - Request Already Placed Message. - Limit consumer to 1 voicemail per queue: a consumer could leave a separate voicemail request on a separate queue. - Limit consumer to 1 voicemail request across all queues: voicemail option not available if an unattended voicemail is already left form the phone number.

