---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.094Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Call Adapter blended SMS tab"
feature_slug: "call-adapter-blended-sms-tab"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide"
keywords:
  - "call"
  - "adapter"
  - "blended"
  - "sms"
  - "tab"
  - "gives"
  - "dedicated"
  - "more"
---

# Call Adapter blended SMS tab

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Call Adapter gives Blended SMS a dedicated tab and a more chat-like interface.

## Extended Definition

The Call Adapter gives Blended SMS a dedicated tab and a more chat-like interface.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .
- Flexible inbound call handling The flexible inbound call handling feature gives Agents the flexibility to manage inbound call sessions using the Agent Adapter.
- See the Agent Call Adapter user guide for more information about the agent experience.
- For more information, see the Agent Call Adapter user guide .

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Settings recommendations Use a longer ringtone and/or more frequent notification if: Agents are often multitasking and not always waiting to take a call In an open office or louder environment Agents might listen to music from their computer Use a shorter ringtone if: Agents are always alert and waiting for calls Higher call frequency Call whisper: Use this when the queue selection and type of call highly impact the first communication from the agent Increase speed of whisper for decreased wait time impact For very low second count SLAs: Only use whisper and countdown if necessary as the duration of these messages contributes to the wait time for calls Send reserved data properties With reserved data properties, you can send information about an end-user to CCAI Platform when a chat or call session begins, or even after a session has begun.
- Mark the checkbox Allow transfers to queues outside of operation hours for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter: All queues within operating hours All queues that are outside of operation hours with after hour deflection enabled All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Select Mobile and Web SDK call deflection options When selected, visual options will be displayed when outside of hours of operation.
- Deflect to Queue: deflects the consumer to another queue OR Deflection Options (select one or more): Scheduled Call : When scheduled calls are enabled in the Channel Settings for this queue, you can select this option to present consumers with timeslots for a scheduled call during operating hours.
- User profile flags When reserved data properties are sent to CCAI Platform during a call or chat session, this information is displayed in the agent adapter in the form of user profile flags.

### "Receive and make calls \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide)
- Source ID: `site-docs-reference-required-8`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- If auto-answer is enabled, an Incoming call screen appears in the call adapter and the target pick-up time a After you answer the call, the following sequence begins in the call adapter: A new screen appears that displays caller information, queue information, and the support phone number that the caller used.
- If you have a Salesforce or Zendesk customer relationship management (CRM) app, click the phone number that you want to dial, paste a phone number into the call adapter, or dial the number.
- To make an outbound call without outbound calling improvements, follow these steps: In the call adapter, click Start call .
- To make an outbound call using flexible outbound dialing, follow these steps: In the call adapter, click Start call .

