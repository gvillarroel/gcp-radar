---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.006Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Queue Performance - Calls dashboard"
feature_slug: "queue-performance-calls-dashboard"
latest_feature_date: "2026-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets"
keywords:
  - "queue"
  - "performance"
  - "calls"
  - "dashboard"
  - "provides"
  - "level"
  - "metrics"
  - "call"
---

# Queue Performance - Calls dashboard

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Queue Performance - Calls dashboard provides queue-level performance metrics for call sessions.

## Extended Definition

The Queue Performance - Calls dashboard provides queue-level performance metrics for call sessions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Calculation: (Total Sentiment Score of all call sessions / Total no of Virtual Agent messages) Performance metrics dashboard Overview The Performance Metrics dashboard gives you a high level overview of your support center for both calls and chats.
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Note: If your company has requested a time zone override for all its users, then the requested time zone will be displayed instead Metric definitions Service Level SL / 30min Service Level within the past 30min SL / day Service Level for the current day SL Target Service Level Target set for the queue Live CIQ Consumers in Queue LCW / Sec Longest Call Waiting AQD / Sec Average Queue Duration (Waiting for an Agent) Live Number of calls currently in progress with an agent Productive Agents Number of agents with a productive status Live Agent Status Available Count of all available agents On-hold (Calls only)Count of agents who have placed a consumer on-hold Wrap-up Count of all agents in the wrap-up status Custom Count of all agents in custom statuses that are configured as productive Productive Agents Count of all agents in a productive status as configured in Settings > Queue Groups Today ABN % Abandon rate Volume Total offered interactions including failed/abandoned sessions.
- See Virtual Agent Platform statuses in Virtual Agent configuration Inactive: Virtual Agent is turned off Explorable metrics in real-time call and chat dashboards Overview Drill-down on explorable metrics in the Call and Chat Real time Dashboards to obtain additional insight into performance and details about the metric.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Priority order = Sub-queue Target > Top-level Queue Target > Global Target Examples: Targets Set Resulting Targets Global Target = 70% , Top-level Queue 1 = None , Queue 1a = None, Queue 1b = None, Queue 2a = None, Queue 2b = None, Top-level Queue 2 = None Global Target = 70% , Top-level Queue 1 = 70% (inherited from global) , Queue 1a = 70% (inherited from global), Queue 1b = 70% (inherited from global), Queue 2a = 70% (inherited from global), Queue 2b = 70% (inherited from global), Top-level Queue 2 = 70% (inherited from global) Global Target = 70% , Top-level Queue 1 = 65% , Queue 1a = None, Queue 1b = 75%, Queue 2a = 65%, Queue 2b = None, Top-level Queue 2 = None Global Target = 70% , Top-level Queue 1 = 65% , Queue 1a = 65% (inherited from Top-level), Queue 1b = 75%, Queue 2a = 65%, Queue 2b = 70% (inherited from global), Top-level Queue 2 = None Global Target = None , Top-level Queue 1 = 65% , Queue 1a = None, Queue 1b = None, Queue 2a = 60%, Queue 2b = 40%, Top-level Queue 2 = None Global Target = None , Top-level Queue 1 = 65% , Queue 1a = 65% (inherited from Top-level), Queue 1b = 65% (inherited from Top-level), Top-level Queue 2 = None , Queue 2a = 60%, Queue 2b = 40% Utilize set targets Call and chat dashboards When viewing the default view of the Call or Chat dashboard, the target displayed will be the globally configured target metric When viewing multiple queues (or a queue group), no target will be displayed Queue reports dashboard Available for interaction-based data model enabled environments The SL Target and Concurrency Target column will display each queue's target If a queue group consists of multiple queues with varying targets, then no value will be displayed in the Totals row Performance metrics dashboard Available for interaction-based data model enabled environments The SL Target column will display each queue's service level target.
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.
- EWT for calls For calls, EWT is calculated based on the following formula: EWT = ((average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued calls - available agents)) + {EWT for callbacks, campaign calls, and scheduled calls} EWT for chats For chats, EWT is calculated based on the following formula: EWT = (average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued chats - available agents) Note: In chat channels, the value for active agents includes a multiplier based on the chat concurrency if the chat concurrency is >1.
- Feature details Only agents assigned to calls from or to queues that have been specifically enabled will see the option to redact calls Calls initiated from an enabled queue that are transferred to a queue without call redaction enabled will not have the call redaction feature available Agents need to manually initiate and end the redaction Agents will still be able to hear during the redacted section of the call while on the live call Admin portal configuration Enable call redaction for inbound calls Go to Settings > Queue .

### "Standard Reports: Queue Data Sets \_|\_ Google Cloud Contact Center as a\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Calculation: Count of calls In SLA / (Count of calls In SLA + count of calls Out SLA) Count In SLA = Count of calls where queued time is less than the SLA threshold Count Out SLA = count of calls where queued time is equal to or greater than the SLA threshold Handled The sum of interactions that were handled.
- Calculation: Count of calls In SLA / (Count of calls In SLA + count of calls Out SLA) Count In SLA = Count of calls where queued time is less than the SLA threshold Count Out SLA = count of calls where queued time is equal to or greater than the SLA threshold Handled The sum of interactions that were handled.
- All Queued Interactions Report All Queued Interactions Report Overview The All Queued Interactions report provides detailed metrics of all interactions that queued.
- Queue Abandons The total number of calls that were disconnected by the caller without being accepted by an agent.

