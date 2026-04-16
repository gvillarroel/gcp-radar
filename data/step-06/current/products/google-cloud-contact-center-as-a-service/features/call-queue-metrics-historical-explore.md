---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.037Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Call Queue Metrics (Historical) Explore"
feature_slug: "call-queue-metrics-historical-explore"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports"
keywords:
  - "call"
  - "queue"
  - "metrics"
  - "historical"
  - "explore"
  - "now"
  - "includes"
  - "csl"
---

# Call Queue Metrics (Historical) Explore

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The explore now includes CSL % and Total Queued Answered metrics.

## Extended Definition

The explore now includes CSL % and Total Queued Answered metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Repeat Contacts: Number of callers who had multiple incoming sessions that finished in the same queue within the configured repeat contact timeframe set in Settings > Operation Management Target Metrics .
- Historical report data generally includes short-abandoned calls, whereas the dashboard may not include this data based on settings in Settings > Operation Management .
- The data includes all activity for Call and/or Chat Queues that have been set up for the Account.

### "Standard Reports: Queue Data Sets \_|\_ Google Cloud Contact Center as a\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Calculation: Count of calls In SLA / (Count of calls In SLA + count of calls Out SLA) Count In SLA = Count of calls where queued time is less than the SLA threshold Count Out SLA = count of calls where queued time is equal to or greater than the SLA threshold Handled The sum of interactions that were handled.
- Calculation: Count of calls In SLA / (Count of calls In SLA + count of calls Out SLA) Count In SLA = Count of calls where queued time is less than the SLA threshold Count Out SLA = count of calls where queued time is equal to or greater than the SLA threshold Handled The sum of interactions that were handled.
- Avg Queue Abandon Time The average time from when an interaction enters a queue but disconnects by the caller before the interaction is accepted by an agent Queue Abandon Rate % The total queue abandons as a percentage of the total queue entries for the given period.
- Queue Abandon Time The average time from when an interaction enters a queue but disconnects by the caller before the interaction is accepted by an agent Queue Abandon Rate % The total queue abandons as a percentage of the total queue entries for the given period.

### "Standard reports \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Disposition Report (includes calls and chats when enabled): Lists all selected disposition codes for all agents/queues within the selected timeframe.
- Here are the available call types: Voice Inbound (IVR) : standard PSTN calls Voice Inbound (IVR via Mobile) : fallback PSTN calls made using the mobile SDKs Voice Inbound (Mobile) : calls placed by end-users using the mobile SDKs Voice Callback (Web) : calls initiated from the web SDK Voice Inbound (API) : calls initiated using an API Voice Scheduled (Mobile) : calls scheduled using the mobile SDKs Voice Scheduled (Web) : calls scheduled using the web SDK Voice Outbound : calls placed by agents dialing a number Voice Outbound (API) : calls initiated using an API Voice Scheduled (API) : calls initiated by an outbound dialer campaign Voice Internal : agent-to-agent calls Voice Inbound (Direct) : calls initiated by end-users using agents' direct numbers Voice Outbound (Direct) calls initiated by agents using their direct numbers Voice Outbound (UCaaS) : outbound, unified communications as a service (UCaaS) calls Voice Inbound (Extension) : inbound end-user to agent calls Here are the available chat types: Messaging Inbound (Mobile Chat) : chats initiated by end-users using the mobile SDKs Messaging Inbound (Web Chat) : chats initiated by end-users using the web SDK Messaging Inbound (SMS) : SMS chats initiated by end-users Messaging Outbound (SMS) : SMS chats initiated by agents Messaging Outbound (SMS via API) : SMS chats initiated by an API Messaging Inbound (SMS Direct) : SMS chats initiated by end-users using agents' direct numbers Messaging Outbound (SMS Direct) : SMS chats initiated by agents using their direct numbers Messaging Outbound (SMS Direct via API) : SMS chats initiated by an API using agents' direct numbers Messaging (WhatsApp) : chats initiated using WhatsApp Queues From the CCAI Platform portal, go to Reports > Queues .
- Agent Activity - Timeline Report (includes calls and chats when enabled): Detailed timeline of every event, either performed by an Agent to performed by the system to an Agent's account.
- Report data includes short-abandoned calls, whereas the dashboard may not include this data based on settings in Settings > Operation Management > Customer Abandoned Details .

