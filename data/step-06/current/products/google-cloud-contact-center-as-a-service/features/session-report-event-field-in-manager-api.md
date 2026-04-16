---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.083Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Session report event field in Manager API"
feature_slug: "session-report-event-field-in-manager-api"
latest_feature_date: "2024-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "session"
  - "report"
  - "event"
  - "field"
  - "manager"
  - "reports"
  - "now"
  - "include"
---

# Session report event field in Manager API

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Session reports from the Manager API now include an event field that indicates how a session ends.

## Extended Definition

Session reports from the Manager API now include an event field that indicates how a session ends.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Standard Reports Agent and Teams Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select the type of session for which agent and team reports should be generated.
- Select the type of session for which agent and team reports should be generated.
- Select the type of session for which agent and team reports should be generated.
- Choose the reports you want to download and the data columns to include.

### "Standard reports \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Agent Activity - Timeline Report (includes calls and chats when enabled): Detailed timeline of every event, either performed by an Agent to performed by the system to an Agent's account.
- Get session data reports Session data reports provide session data for chat or call sessions that you specify.
- Call and chat types You can select the call or chat types that you want to include in your reports.
- Calls and Chats Go to Reports > Calls & Chats Select the Session Type For Calls or Chats.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Total Calls (Calls) Count of the number of completed inbound and outbound calls the agent has taken in the Today timeframe Call count on the Agent monitoring page counts sessions not interactions Call sessions are attributed to the last agent who handled the session Outbound and inbound calls are included Due to some date/time matching differences, this column should only be used as a guide - use downloadable reports for specific call interaction counts per agent Total Chats (Chats) Completed chat sessions handled today Last End Time The end time of the last completed session Last time offered Shows the last time the agent was offered a call/chat notification.
- Exception for short-abandoned call data if you download a historical report with aggregates of SLA, the short-abandons will not be included in the calculations; however, if you download a raw report of interactions, it will be there.
- Historical report data generally includes short-abandoned calls, whereas the dashboard may not include this data based on settings in Settings > Operation Management .
- Call: Includes hold and wrap-up time Chat: includes chat duration Average Wrap-up (Calls) Average duration agent is in wrap-up status after call sessions.

