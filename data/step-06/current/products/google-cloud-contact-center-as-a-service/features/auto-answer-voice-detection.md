---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.066Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Auto answer voice detection"
feature_slug: "auto-answer-voice-detection"
latest_feature_date: "2024-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "auto"
  - "answer"
  - "voice"
  - "detection"
  - "can"
  - "listen"
  - "agent"
  - "after"
---

# Auto answer voice detection

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Auto-answer can listen for an agent's voice after a call connects and mark the call missed if no voice is detected within the configured time.

## Extended Definition

Auto-answer can listen for an agent's voice after a call connects and mark the call missed if no voice is detected within the configured time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Feature name Description Voicemail Timeout A specified time value time out the voicemail for the agent after they've listened to it.
- Configure deflections at the agent level For agent to agent , end-user to agent or direct inbound call types, you can configure the following deflection types at the agent level: after hours, overcapacity, and automatic redirection.
- Voicemail: Once the agent has listened to the voicemail, they will be given the option to call the consumer back, and the entered custom callback number will be used What happens when a consumer hangs up before completing the flow?
- Mobile SDK: Automatic call recovery If the agent's connection is interrupted or unexpectedly ended from their voice provider, CCAI Platform will wait for the agent to be reconnected for up to one minute.

### "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Searching for articles : Agents can manually search for specific knowledge articles by entering keywords into the Knowledge base search field Search results appear as tiles, similar to automatic suggestions, and can be clicked to view the article Note: If a chat is transferred to another agent, the knowledge articles remain accessible to the new agent until the session ends or the transferring agent exits.
- If you select the Spelling and Grammar Check checkbox, then the following two checkboxes appear: Allow agents to turn on/off automatic checks : Select this checkbox to let agents turn on and off spelling and grammar check in the chat adapter.
- View knowledge suggestions : The system listens to the ongoing conversation and generates knowledge suggestions based on both the agent's and end-user's dialogue.
- Real-time call transcription : transcribes calls in real time for agents to reference during the call or for analysis after the call.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Only voicemails listened via the Agent Adapter will be marked as read and not counted in this metric.
- Waiting : voicemails received in the last week that have not be listened to via the Agent Adapter.
- Read : Voicemails an Agent has listened to via the Agent Adapter.

