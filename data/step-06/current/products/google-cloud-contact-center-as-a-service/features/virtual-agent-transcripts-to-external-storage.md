---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.132Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Virtual Agent transcripts to external storage"
feature_slug: "virtual-agent-transcripts-to-external-storage"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights"
keywords:
  - "virtual"
  - "agent"
  - "transcripts"
  - "external"
  - "storage"
  - "custom"
  - "crm"
  - "can"
---

# Virtual Agent transcripts to external storage

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Custom CRM can send Virtual Agent transcripts to external storage for review and compliance.

## Extended Definition

Custom CRM can send Virtual Agent transcripts to external storage for review and compliance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights](https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- The transcripts displayed are from completed chats, and are stored and retrieved from your configured external storage.
- Note: If your company has requested a time zone override for all its users, then the requested time zone will be displayed instead Metric definitions Service Level SL / 30min Service Level within the past 30min SL / day Service Level for the current day SL Target Service Level Target set for the queue Live CIQ Consumers in Queue LCW / Sec Longest Call Waiting AQD / Sec Average Queue Duration (Waiting for an Agent) Live Number of calls currently in progress with an agent Productive Agents Number of agents with a productive status Live Agent Status Available Count of all available agents On-hold (Calls only)Count of agents who have placed a consumer on-hold Wrap-up Count of all agents in the wrap-up status Custom Count of all agents in custom statuses that are configured as productive Productive Agents Count of all agents in a productive status as configured in Settings > Queue Groups Today ABN % Abandon rate Volume Total offered interactions including failed/abandoned sessions.
- Performance Resolved by Virtual Agent : The total number of chat sessions handled by a Virtual Agent to the end of the relevant programmed discussion points Planned Transfer : The total number of chat sessions handled by a Virtual Agent that are then transferred to another agent (human) due to configuration/standard operating procedure Escalated : The total number of chat sessions that are handled by a Virtual Agent but do not reach the end of the relevant programmed discussion points (due to consumer clicking on the "escalation" button, typing an escalation message, or in rare cases, technical failure on the part of the Virtual Agent - such as going offline) Consumer Ended : The total number of chat sessions that are handled by a Virtual Agent but do not reach the end of the relevant programmed discussion points (due to the consumer leaving the chat) Avg.
- Users Repeating/Returning: Total number of consumers who returned to interact with the same Virtual Agent within 24 hours of a previous session "Did not Understand" Rate: The % of Virtual Agent chat messages sent where a Virtual Agent states that they did not understand the consumer (No. of default fallback responses / Total no. of VA responses) 100 Current status Top queues : Top 5 chat queues in order of the highest to lowest total Virtual Agent sessions Top Virtual Agents: Top 5 Virtual Agents in order of the highest success rates Virtual Agent status Online: Enabled and functioning Virtual Agents Offline: Enabled but unreachable.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Transcript upload locations in a CRM or external storage After the chat is complete, transcripts are uploaded to the CRM or external storage as a TXT file.
- Chat transcripts and chat history You can configure CCAI Platform to upload a chat transcript to your CRM or external storage after the chat has ended.
- For a completely custom CRM, the chat transcript is stored in external storage, if configured.
- For integrated CRMs, chat transcripts are sent to external storage using SFTP.

### "Customer Experience Insights and Quality AI \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights](https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The provided labels are imported: Metadata key Calls Chats Description hold duration ✔ Duration that the end-user was put on hold for in seconds. customer phone number ✔ The phone number of the end-user. outbound number ✔ The phone number that the outbound call was placed from (outbound calls only). transfers ✔ ✔ The number of times the call was transferred. has feedback ✔ ✔ Whether the conversation had a feedback response. fail reason ✔ ✔ The reason for the failure of the conversation. out ticket id ✔ ✔ The ticket ID of the conversation. agent assist conversation id X ✔ ✔ The Agent Assist conversation ID of the conversation. dialogflow conversation id X ✔ ✔ The Dialogflow CX conversation ID of the conversation. queue priority level ✔ ✔ The priority level of the conversation. answer type ✔ ✔ The type of the answer. session type v2 ✔ ✔ The type of the session. menu ✔ ✔ The menu of the conversation.
- Other metadata values that are used within CX Insights include the following: Metadata key Calls Chats Description id ✔ ✔ The call or chat ID of the session used for the conversation ID. agent name ✔ ✔ The name of the human agent that handled the conversation. agent id ✔ ✔ The internal CCaaS ID that identified the human agent. virtual agent id ✔ ✔ The internal CCaaS ID that identified the virtual agent.
- In addition, you need to grant the following IAM roles to your service account: Storage Admin Contact Center AI Insights editor Cloud Speech-to-Text Service Agent For more information on granting roles to a service account see the Google IAM Manage Access documentation .
- Quality AI builds on CX Insights to enable comprehensive contact center quality evaluations, including individual conversations, live agents, and virtual agents.

