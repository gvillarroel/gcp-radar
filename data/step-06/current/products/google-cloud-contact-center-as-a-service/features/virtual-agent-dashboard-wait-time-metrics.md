---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.006Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Virtual agent dashboard wait-time metrics"
feature_slug: "virtual-agent-dashboard-wait-time-metrics"
latest_feature_date: "2026-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "virtual"
  - "agent"
  - "dashboard"
  - "wait"
  - "time"
  - "metrics"
  - "adds"
  - "tiles"
---

# Virtual agent dashboard wait-time metrics

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Virtual agent dashboard adds wait-time virtual agent tiles for in-queue interactions, in-queue time, and average in-queue time.

## Extended Definition

The Virtual agent dashboard adds wait-time virtual agent tiles for in-queue interactions, in-queue time, and average in-queue time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See Virtual Agent Platform statuses in Virtual Agent configuration Inactive: Virtual Agent is turned off Explorable metrics in real-time call and chat dashboards Overview Drill-down on explorable metrics in the Call and Chat Real time Dashboards to obtain additional insight into performance and details about the metric.
- Calculation: (Total Sentiment Score of all call sessions / Total no of Virtual Agent messages) Performance metrics dashboard Overview The Performance Metrics dashboard gives you a high level overview of your support center for both calls and chats.
- Voice virtual agent dashboard Overview The dashboard displays metrics such as sentiment ratings, resolution rates, CSAT, and other performance data for virtual agents.
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.

### "Standard Reports: Virtual Agent Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Fallback Response Count Count This counts how many times the virtual agent did not understand and routed to default message.
- Response Time - Chat Average of Time The average Virtual Agent Response Time.
- Response Time - Chat Max of Time The maximum Virtual Agent Response Time.
- Response Time - Chat SUM of Time The total Virtual Agent Response Time.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Priority order = Sub-queue Target > Top-level Queue Target > Global Target Examples: Targets Set Resulting Targets Global Target = 70% , Top-level Queue 1 = None , Queue 1a = None, Queue 1b = None, Queue 2a = None, Queue 2b = None, Top-level Queue 2 = None Global Target = 70% , Top-level Queue 1 = 70% (inherited from global) , Queue 1a = 70% (inherited from global), Queue 1b = 70% (inherited from global), Queue 2a = 70% (inherited from global), Queue 2b = 70% (inherited from global), Top-level Queue 2 = 70% (inherited from global) Global Target = 70% , Top-level Queue 1 = 65% , Queue 1a = None, Queue 1b = 75%, Queue 2a = 65%, Queue 2b = None, Top-level Queue 2 = None Global Target = 70% , Top-level Queue 1 = 65% , Queue 1a = 65% (inherited from Top-level), Queue 1b = 75%, Queue 2a = 65%, Queue 2b = 70% (inherited from global), Top-level Queue 2 = None Global Target = None , Top-level Queue 1 = 65% , Queue 1a = None, Queue 1b = None, Queue 2a = 60%, Queue 2b = 40%, Top-level Queue 2 = None Global Target = None , Top-level Queue 1 = 65% , Queue 1a = 65% (inherited from Top-level), Queue 1b = 65% (inherited from Top-level), Top-level Queue 2 = None , Queue 2a = 60%, Queue 2b = 40% Utilize set targets Call and chat dashboards When viewing the default view of the Call or Chat dashboard, the target displayed will be the globally configured target metric When viewing multiple queues (or a queue group), no target will be displayed Queue reports dashboard Available for interaction-based data model enabled environments The SL Target and Concurrency Target column will display each queue's target If a queue group consists of multiple queues with varying targets, then no value will be displayed in the Totals row Performance metrics dashboard Available for interaction-based data model enabled environments The SL Target column will display each queue's service level target.
- Overcapacity deflection per-queue Overview Overcapacity deflection is triggered when a session is initiated, but the estimated wait time is larger than the set threshold in Settings Call or Settings > Chat .
- Wrap-up settings Wrap-up exceeded This setting allows you to transition agents into a Wrap-up Exceeded status after they have gone beyond a wrap-up threshold time and have cleared all ongoing sessions.
- Estimated wait time prediction calculation Estimated wait time (EWT) is used in determining when to launch overcapacity deflection and for In-Web and In-App UIs, which show wait time to end-users.

