---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.036Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Agent Preference table"
feature_slug: "agent-preference-table"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "agent"
  - "preference"
  - "table"
  - "availability"
  - "dashboard"
  - "now"
  - "includes"
  - "assigning"
---

# Agent Preference table

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Agent Availability dashboard now includes an Agent Preference table for assigning skilled agents and spotting improper availability filter changes.

## Extended Definition

The Agent Availability dashboard now includes an Agent Preference table for assigning skilled agents and spotting improper availability filter changes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Metrics This table describes each metric available in the Voice Virtual Agent Dashboard Metric Description Total Sessions The number of VA call sessions.
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Dashboard tiles and definitions Virtual agent sessions Consumer Initiated : The total chat sessions initiated by the consumers and handled by Virtual Agents Transferred from Human Agent : The total of chat sessions that are answered by a human agent and then transferred to a Virtual Agent Total Messages Exchanged : The total number of individual messages exchanged between a Virtual Agent and a consumer during a chat session Avg.
- See Virtual Agent Platform statuses in Virtual Agent configuration Inactive: Virtual Agent is turned off Explorable metrics in real-time call and chat dashboards Overview Drill-down on explorable metrics in the Call and Chat Real time Dashboards to obtain additional insight into performance and details about the metric.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Mobile SDK All Mobile SDK functionality is the same as the Web SDK with these notable exceptions: Mobile SDK supports Picture and Video attachments up to 18MB Mobile SDK allows for multiple file types to be uploaded to the same message Mobile SDK supports uploading all file types (Text, Picture, Video) No rich text editor functionality Does not support reCAPTCHA Setting up and assigning agents to channels and queues: IVR, mobile, web Overview Channels are configurable and should be enabled and set up individually.
- EWT for calls For calls, EWT is calculated based on the following formula: EWT = ((average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued calls - available agents)) + {EWT for callbacks, campaign calls, and scheduled calls} EWT for chats For chats, EWT is calculated based on the following formula: EWT = (average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued chats - available agents) Note: In chat channels, the value for active agents includes a multiplier based on the chat concurrency if the chat concurrency is >1.
- Apply the email channel to a queue Please see Setting up and Assigning Agents to Channels and Queue Menus: IVR, Mobile, Web for steps in both the Web and App SDK sections.
- Once you complete the below steps, move forward to Enabling and Assigning Agents to Channels: IVR, Mobile, Web .

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- If After Hour Deflection is disabled, mark the checkbox Allow transfers to queues outside of operation for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter All queues within operating hours All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are after hours with after hour deflection enabled All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Enable over capacity deflection : Specify the estimated wait time threshold for the consumer to be deflected to the options set below.
- Image Video Audio Document JPEG, JPG, PNG, GIF, WebP MP4, MOV, AVI, WMV, WebM MP3, WAV, M4A, WEBA PDF, DOC, XLS, PPT, CSV, TXT File size limits The following table shows size limits for files that agents can attach to messages in the chat adapter.
- Chat Shortcuts Overview When chatting with consumers and prospects, agents need to get to the resolution as quickly as possible, and chat shortcuts can be used to add repeatable phrases, steps, and solutions to chat conversations.
- Agent status and availability To prevent agents from receiving Auto Answer chats before they're ready, Admins can set an unavailable default status for agents who have just logged in.

