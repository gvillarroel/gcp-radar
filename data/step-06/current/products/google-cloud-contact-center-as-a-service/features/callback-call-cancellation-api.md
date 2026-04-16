---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.037Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Callback call cancellation API"
feature_slug: "callback-call-cancellation-api"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "callback"
  - "call"
  - "cancellation"
  - "calls"
  - "can"
  - "cancel"
  - "scheduled"
  - "list"
---

# Callback call cancellation API

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The callback calls API can cancel a scheduled callback call or a list of scheduled calls.

## Extended Definition

The callback calls API can cancel a scheduled callback call or a list of scheduled calls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- The original call ID will have the fail reason "End User No Answer." Because of the unique call type that scheduled calls present, if the Agent clicks 'Hang up and Callback', this will create a new Inbound call.
- Automatic cancellation : Rolled-over callbacks are cancelled if the queue is deleted, human agents are no longer assigned to the queue on the next business day, or the fulfillment hours are deleted.
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .
- Call experience flows Call Flow experience for different call types Overcapacity Deflection IVR Mobile Afterhours Deflection IVR Mobile Recording Per Queue Option Temporary Redirect per IVR Queue Credit Card Over IVR Scheduled calls Rather than waiting in queue for an agent, give consumers the option to select a time that works for them to receive a call from an agent.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Settings recommendations Use a longer ringtone and/or more frequent notification if: Agents are often multitasking and not always waiting to take a call In an open office or louder environment Agents might listen to music from their computer Use a shorter ringtone if: Agents are always alert and waiting for calls Higher call frequency Call whisper: Use this when the queue selection and type of call highly impact the first communication from the agent Increase speed of whisper for decreased wait time impact For very low second count SLAs: Only use whisper and countdown if necessary as the duration of these messages contributes to the wait time for calls Send reserved data properties With reserved data properties, you can send information about an end-user to CCAI Platform when a chat or call session begins, or even after a session has begun.
- Deflect to Queue: deflects the consumer to another queue OR Deflection Options (select one or more): Scheduled Call : When scheduled calls are enabled in the Channel Settings for this queue, you can select this option to present consumers with timeslots for a scheduled call during operating hours.
- Monitoring Live Calls and Chats Overview Supervisors and Agents in training benefit from listening in on live calls and viewing live chats, without joining the session or interrupting the consumer and Agent on the call or chat.
- Shows as "Leave a callback message." Voicemails will be delivered to agents assigned to the selected queue for calls.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- EWT for calls For calls, EWT is calculated based on the following formula: EWT = ((average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued calls - available agents)) + {EWT for callbacks, campaign calls, and scheduled calls} EWT for chats For chats, EWT is calculated based on the following formula: EWT = (average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued chats - available agents) Note: In chat channels, the value for active agents includes a multiplier based on the chat concurrency if the chat concurrency is >1.
- Record callback outbound calls When the Callback overcapacity option is enabled, this setting will enable Callback and scheduled call recordings.
- Play Ask Permission to Record Message before Call Recording Message Play Call Recording Message before Ask Permission to Record Message Note: Recording message and Ask Permission to Record messages are played in the configured order for: Callback outbound calls - if the queue is configured for asking to record.
- Configuration iOS/Android Developer : With Multiple Mobile Apps in use, the threshold for PSTN Callback calls will be configured from within the Admin Portal in Settings > Developer Settings > Edit Mobile App > Fallback phone number/threshold .

