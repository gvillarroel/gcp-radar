---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.027Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Campaigns dashboard"
feature_slug: "campaigns-dashboard"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
keywords:
  - "campaigns"
  - "dashboard"
  - "shows"
  - "real"
  - "time"
  - "historical"
  - "call"
  - "campaign"
---

# Campaigns dashboard

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Campaigns dashboard shows real-time and historical call campaign metrics, including outcomes, volumes, and agent performance.

## Extended Definition

The Campaigns dashboard shows real-time and historical call campaign metrics, including outcomes, volumes, and agent performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overview The Call dashboard shows both real-time and aggregated data related to your contact center calls.
- See Virtual Agent Platform statuses in Virtual Agent configuration Inactive: Virtual Agent is turned off Explorable metrics in real-time call and chat dashboards Overview Drill-down on explorable metrics in the Call and Chat Real time Dashboards to obtain additional insight into performance and details about the metric.
- Chat dashboard Overview The chat dashboard shows both real-time and aggregated data.
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.

### "Standard Reports: Campaign Data Sets \_|\_ Google Cloud Contact Center as\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is calculated as BCW +Talk Time + Hold time + Wrap-up time / All handled interactions Predictive Dialer Disposition Report The Predictive Dialer Disposition Report provides details on the statuses of the dispositioned calls within the selected campaigns.
- Preview Dialer Disposition Report The Preview Dialer Disposition Report provides details on the statuses of the dispositioned calls within the selected campaigns.
- It is a metric captured exclusively for Dialer Campaigns, and each campaign type may have a slightly different definition of the start and end times for BCW.
- It is a metric captured exclusively for Dialer Campaigns, and each campaign type may have a slightly different definition of the start and end times for BCW.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Scheduled Call : Shows a set of available times within the hours of operation for the queue to request a call.
- Settings recommendations Use a longer ringtone and/or more frequent notification if: Agents are often multitasking and not always waiting to take a call In an open office or louder environment Agents might listen to music from their computer Use a shorter ringtone if: Agents are always alert and waiting for calls Higher call frequency Call whisper: Use this when the queue selection and type of call highly impact the first communication from the agent Increase speed of whisper for decreased wait time impact For very low second count SLAs: Only use whisper and countdown if necessary as the duration of these messages contributes to the wait time for calls Send reserved data properties With reserved data properties, you can send information about an end-user to CCAI Platform when a chat or call session begins, or even after a session has begun.
- Deflect to Queue: deflects the consumer to another queue OR Deflection Options (select one or more): Scheduled Call : When scheduled calls are enabled in the Channel Settings for this queue, you can select this option to present consumers with timeslots for a scheduled call during operating hours.
- Call notification frequency : Choose for the agent to only hear the notification tone one time, or repeated after a specified number of seconds have passed.

