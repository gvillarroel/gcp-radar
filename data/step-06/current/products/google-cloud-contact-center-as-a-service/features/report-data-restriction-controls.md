---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.123Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Report data restriction controls"
feature_slug: "report-data-restriction-controls"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "report"
  - "restriction"
  - "controls"
  - "administrators"
  - "can"
  - "restrict"
  - "editing"
  - "limit"
---

# Report data restriction controls

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Administrators can restrict editing and limit downloadable report data to assigned teams or assigned queues.

## Extended Definition

Administrators can restrict editing and limit downloadable report data to assigned teams or assigned queues.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Queue selection is limited by the following restrictions: Agents can only select queues that they are assigned to.
- Restrict outbound calling for special service numbers Admins can configure dedicated restrictions for special service phone numbers so that only agents, teams, or locations allowed for the special service number can make calls to that number.
- Regardless of whether the restrictions are set at the agent, team, or location level, if the agent is included in any level of restriction, they will be unable to dial these numbers.
- Select Add to add the new restriction, or Cancel to cancel the restriction configuration.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Configuration inheritance When you configure transfer restrictions for a queue, all subordinate queues inherit the configuration.
- To configure team transfer restrictions, follow these steps: In the CCAI Platform portal, click Settings > Users and Teams .
- Configure queue transfer restrictions You can configure transfer restrictions based on the queues that agents belong to.
- Configure team transfer restrictions You can configure transfer restrictions based on the teams that agents belong to.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Actions View agent details and log an agent out There are restrictions and limitations with the Log out agent action.
- Change an agent's status There are restrictions and limitations to changing an agent's status.
- Total Calls (Calls) Count of the number of completed inbound and outbound calls the agent has taken in the Today timeframe Call count on the Agent monitoring page counts sessions not interactions Call sessions are attributed to the last agent who handled the session Outbound and inbound calls are included Due to some date/time matching differences, this column should only be used as a guide - use downloadable reports for specific call interaction counts per agent Total Chats (Chats) Completed chat sessions handled today Last End Time The end time of the last completed session Last time offered Shows the last time the agent was offered a call/chat notification.
- Exception for short-abandoned call data if you download a historical report with aggregates of SLA, the short-abandons will not be included in the calculations; however, if you download a raw report of interactions, it will be there.

