---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.078Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Queue-level whisper settings for calls"
feature_slug: "queue-level-whisper-settings-for-calls"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "queue"
  - "level"
  - "whisper"
  - "settings"
  - "calls"
  - "call"
  - "can"
  - "now"
---

# Queue-level whisper settings for calls

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Call whisper settings can now be configured per queue, including custom messages and countdown behavior.

## Extended Definition

Call whisper settings can now be configured per queue, including custom messages and countdown behavior.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Settings recommendations Use a longer ringtone and/or more frequent notification if: Agents are often multitasking and not always waiting to take a call In an open office or louder environment Agents might listen to music from their computer Use a shorter ringtone if: Agents are always alert and waiting for calls Higher call frequency Call whisper: Use this when the queue selection and type of call highly impact the first communication from the agent Increase speed of whisper for decreased wait time impact For very low second count SLAs: Only use whisper and countdown if necessary as the duration of these messages contributes to the wait time for calls Send reserved data properties With reserved data properties, you can send information about an end-user to CCAI Platform when a chat or call session begins, or even after a session has begun.
- Viewing live chat UI Agent : Name of Agent as entered on the Users and Teams page End User : Consumer name or unique ID if available Issue : Queue menu path View Case / Ticket : If your CRM is integrated with Contact Center AI Platform (CCAI Platform), click the link to view the CRM record associated with the chat session After Hour Deflection for Calls and Chats Overview Customize your consumer's experience by configuring specific deflection paths for when consumers try to contact you outside of your Hours of Operation are first configured, then deflection is enabled and configured at the global level in the Call Settings and Chat Settings pages.
- Under General , configure the following settings: Use whisper for calls : Once a call is assigned to the Agent, they will hear an audible message stating the call type and queue: "{Call Type} from {Queue Name}." Whisper read speed : Increase or decrease the speed at which the whisper message is read.
- Deflect to Queue: deflects the consumer to another queue OR Deflection Options (select one or more): Scheduled Call : When scheduled calls are enabled in the Channel Settings for this queue, you can select this option to present consumers with timeslots for a scheduled call during operating hours.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- When scheduled calls are enabled for queues with Cascade groups : If available, an agent from the highest level group will be assigned the calls first, then the next group in the standard routing order.
- To enable fulfillment hours at the queue level, follow these steps: Go to Settings > Queue > IVR > [select queue] > Callback Settings .
- Prerequisites In order to enable the Pre-session Deflection, you must have the following: A valid CCAI Platform account with Admin role assigned A valid Legacy, Pro, Enterprise, or Digital License Package A valid subscription for CCAI Platform IVR Support with IVR enabled A valid subscription for CCAI Platform SMS Support enabled with a valid queue structure The SMS must be functional (agent assigned) Basic configuration Do the following procedures, in order: Enable pre-session SMS deflection Enable and save the pre-session SMS deflection offer and opted-in messages Enable and save the pre-session SMS deflection greeting message Configure pre-session SMS deflection for a specific queue Enable pre-session SMS deflection Go Settings > Call.
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Global Chat Settings New chats while on a call : If an agent is assigned to both call and chat queues, enabling this setting will allow the agent to be assigned new chats when they are on a call.
- Configure automatic redaction settings at the queue level To configure automatic redaction settings at the queue level, follow these steps: In the CCAI Platform portal, click Settings > Queue .
- New calls while on a chat : If an agent is assigned to both call and chat queues, enabling this setting will allow the agent to be assigned new calls when they are on a chat.
- Configure chat check-in at the queue level To configure chat check-in at the queue level, follow these steps: In the CCAI Platform portal, click Settings > Queue .

