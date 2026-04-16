---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.108Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Historical report access for assigned teams only"
feature_slug: "historical-report-access-for-assigned-teams-only"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "historical"
  - "report"
  - "access"
  - "assigned"
  - "teams"
  - "only"
  - "reports"
  - "can"
---

# Historical report access for assigned teams only

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Historical reports can now be limited so that only data for assigned teams is downloaded.

## Extended Definition

Historical reports can now be limited so that only data for assigned teams is downloaded.

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
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Standard Reports Agent and Teams Data Sets Stay organized with collections Save and categorize content based on your preferences.
- To create a report: Go to Reports > Agents and Teams Step 1: Select Agents and Team.
- To create a report: Go to Reports > Agents and Teams Step 1: Select Agents and Team.
- Performance Metrics Report Overview From the Reports tab, one of the report options is the Performance Metrics report .

### "Standard reports \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By selecting Assigned Teams Only , only the assigned team has access to the session data report.
- 2,300,000 lines will be broken up into 3 files, two that are 1 million in length and one 300k in length Sample Reports There are different report types available, depending on the data set you are accessing.
- Creating Standard Reports Agents & Teams From the CCAI Platform portal, go to Reports > Agent & Teams .
- You can set user level permissions to limit access to session data reports.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Users with the Manager role will have restricted access to only agents on their assigned teams.
- Total Calls (Calls) Count of the number of completed inbound and outbound calls the agent has taken in the Today timeframe Call count on the Agent monitoring page counts sessions not interactions Call sessions are attributed to the last agent who handled the session Outbound and inbound calls are included Due to some date/time matching differences, this column should only be used as a guide - use downloadable reports for specific call interaction counts per agent Total Chats (Chats) Completed chat sessions handled today Last End Time The end time of the last completed session Last time offered Shows the last time the agent was offered a call/chat notification.
- Call or chat view only Overview You can now display a chat only or a voice only view of the Queue Reports dashboard.
- Exception for short-abandoned call data if you download a historical report with aggregates of SLA, the short-abandons will not be included in the calculations; however, if you download a raw report of interactions, it will be there.

