---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.066Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Segment summarization"
feature_slug: "segment-summarization"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports"
keywords:
  - "segment"
  - "summarization"
  - "generative"
  - "session"
  - "now"
  - "includes"
  - "summaries"
  - "individual"
---

# Segment summarization

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Generative session summarization now includes summaries for individual conversation segments within a session.

## Extended Definition

Generative session summarization now includes summaries for individual conversation segments within a session.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports)

## Supporting Pages

### "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Generated session summarization If configured , you can add a generated summarization to your wrap-up notes for the segment of the chat session that you handled.
- Generated session summarization If configured , you can add a generated summarization to your wrap-up notes for the segment of the call that you handled.
- Generative AI session summarization : displays a generated summary of the conversation when the chat session enters wrap-up.
- To add a generated segment session summarization to your wrap-up notes, follow these steps: End a chat in the chat adapter.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Dashboard tiles and definitions Virtual agent sessions Consumer Initiated : The total chat sessions initiated by the consumers and handled by Virtual Agents Transferred from Human Agent : The total of chat sessions that are answered by a human agent and then transferred to a Virtual Agent Total Messages Exchanged : The total number of individual messages exchanged between a Virtual Agent and a consumer during a chat session Avg.
- Call: Includes hold and wrap-up time Chat: includes chat duration Average Wrap-up (Calls) Average duration agent is in wrap-up status after call sessions.
- Note: If your company has requested a time zone override for all its users, then the requested time zone will be displayed instead Metric definitions Service Level SL / 30min Service Level within the past 30min SL / day Service Level for the current day SL Target Service Level Target set for the queue Live CIQ Consumers in Queue LCW / Sec Longest Call Waiting AQD / Sec Average Queue Duration (Waiting for an Agent) Live Number of calls currently in progress with an agent Productive Agents Number of agents with a productive status Live Agent Status Available Count of all available agents On-hold (Calls only)Count of agents who have placed a consumer on-hold Wrap-up Count of all agents in the wrap-up status Custom Count of all agents in custom statuses that are configured as productive Productive Agents Count of all agents in a productive status as configured in Settings > Queue Groups Today ABN % Abandon rate Volume Total offered interactions including failed/abandoned sessions.

### "Standard reports \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Select the individual or group of Agents and/or Teams for which you need to download data: All Agents : Includes all agents within your CCAI Platform environment Select Agents and Teams : Multi-select agents and/or entire teams by starting to type the Agent or Team name and selecting the option when it appears.
- Select the individual or group of Agents and/or Teams for which you need to download data: All Queues : Includes all queues within your CCAI Platform environment.
- Individual Call History Report : Individual session interaction history for the session type selected.
- Individual Call History Report Disposition Report Select the Timeframe : Adjust period of time the report will cover: Today: The current date based on your locally configured time zone Past 24 hours This week: Starts on Monday at 12:00 am This quarter: Starts at the first day of the current calendar quarter until the current day Custom: Sliding 90-day range Select the time zone the reports should be generated to reflect.

