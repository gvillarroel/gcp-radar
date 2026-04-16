---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.027Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "All Interactions dashboards"
feature_slug: "all-interactions-dashboards"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
keywords:
  - "all"
  - "interactions"
  - "dashboards"
  - "calls"
  - "chats"
  - "were"
  - "updated"
  - "renamed"
---

# All Interactions dashboards

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The All Interactions calls and chats dashboards were updated with renamed detail tables and improved table formatting.

## Extended Definition

The All Interactions calls and chats dashboards were updated with renamed detail tables and improved table formatting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Total Calls (Calls) Count of the number of completed inbound and outbound calls the agent has taken in the Today timeframe Call count on the Agent monitoring page counts sessions not interactions Call sessions are attributed to the last agent who handled the session Outbound and inbound calls are included Due to some date/time matching differences, this column should only be used as a guide - use downloadable reports for specific call interaction counts per agent Total Chats (Chats) Completed chat sessions handled today Last End Time The end time of the last completed session Last time offered Shows the last time the agent was offered a call/chat notification.
- Note: If your company has requested a time zone override for all its users, then the requested time zone will be displayed instead Metric definitions Service Level SL / 30min Service Level within the past 30min SL / day Service Level for the current day SL Target Service Level Target set for the queue Live CIQ Consumers in Queue LCW / Sec Longest Call Waiting AQD / Sec Average Queue Duration (Waiting for an Agent) Live Number of calls currently in progress with an agent Productive Agents Number of agents with a productive status Live Agent Status Available Count of all available agents On-hold (Calls only)Count of agents who have placed a consumer on-hold Wrap-up Count of all agents in the wrap-up status Custom Count of all agents in custom statuses that are configured as productive Productive Agents Count of all agents in a productive status as configured in Settings > Queue Groups Today ABN % Abandon rate Volume Total offered interactions including failed/abandoned sessions.
- Because outbound calls are not associated with a queue, they are not included on this dashboard Queue selection must be completed to show in the dashboard In-menu abandons are not represented in Dashboards currently Views From the top-left of the Queue Groups Dashboard page, you can toggle between two different views.

### "Standard Reports: Interactions Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Handled Missed Calls/ Chats The total number of interactions that the agent has missed.
- The report includes the following information: Any interaction associated with the agent Date, time, and duration of the interaction Event status of the interaction If the interaction was barged Amount of time in seconds that the interaction remained in a queue Interactions that have associated scheduled calls The All Handled Interactions report can be found at Reports > Queues .
- Missed Calls due to Network Quality Displays the total number of calls that were offered to the agent but were missed while the agent's network quality was poor or unusable.
- Agent Response Time (Chats Only) The average time across all chat interactions for the time it took for the agent to respond to the work item.

### "Standard Reports Agent and Teams Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Occupancy : [Total time Agent status = In-Call or In-Chat or Wrap-up] / [Total time agent status = Available] Volume per Hour : Average volume of interactions per hour (per hour referenced as 24 hours in a day, regardless of hours of operation) Handle Time: Calls: average (call duration + hold time + default wrap-up status associated with a Call ID) Chats: average chat duration only (no wrap-up status applied) Longest Handle Time : Longest call/chat duration Calls: max(call duration + average default wrap-up status associated with an interaction ID) Chats: max chat duration only (no wrap-up status applied) Hold Time : Average duration (in seconds) that a consumer was placed on hold by an Agent.
- Total Auto Answered Calls: Total number of interactions that were assigned to Agents via auto answer.
- Date and Timestamp Agent Status Summary and Timeline Report Agent statuses, also known as Aux codes, are used to track time spent on different tasks, make agents available for calls or chats, and are used extensively for workforce management.
- Summary Metrics Service Level : Count of interactions that were answered by an Agent before the service level target has been reached / Count of offered interactions that are eligible for service level.

