---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.130Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Campaign Management Unique ID column"
feature_slug: "campaign-management-unique-id-column"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "campaign"
  - "management"
  - "unique"
  - "id"
  - "column"
  - "csv"
  - "uploads"
  - "can"
---

# Campaign Management Unique ID column

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Campaign management CSV uploads can include a unique ID column to associate CRM data with each dialer call.

## Extended Definition

Campaign management CSV uploads can include a unique ID column to associate CRM data with each dialer call.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Standard Reports: Campaign Data Sets \_|\_ Google Cloud Contact Center as\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is calculated as BCW +Talk Time + Hold time + Wrap-up time / All handled interactions Predictive Dialer Disposition Report The Predictive Dialer Disposition Report provides details on the statuses of the dispositioned calls within the selected campaigns.
- Total Volume The total volume of calls presented from the Campaign Handled Calls The interactions that were handled by an agent Abandoned by Contact The interaction was answered by the consumer and then the consumer decides to disconnect from the call.
- Invalid Number The total number of calls where the number from CSV (as uploaded in the Campaign Manager settings) is in an unsupported format, isn't the right number of digits, duplicate within a campaign, and/or missing a name.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Standard Reports: Campaign Data Sets Stay organized with collections Save and categorize content based on your preferences.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- The Assigned Queues / Agents column only displays queues or agents for the following types of numbers: IVR (outbound) SMS (inbound) SMS (outbound) WhatsApp Assigned queue (only for direct numbers) Assigned agent (only for direct numbers) Click Add Number .
- Restrict outbound calling for locations (new number) To restrict outbound calling for locations, follow these steps Go to Settings > Call > Phone Number Management > Add/Edit Number and configure the number as a special service number.
- To assign multiple direct phone numbers to an agent, follow the instructions in Bulk user management: Upload new or updated users while following these guidelines: Stay within the limitations for assigning direct phone numbers.
- Restrict outbound calling for agents (new number) To restrict outbound calling for agents, follow these steps: Go to Settings > Call > Phone Number Management > Add Number and configure the number as a special service number.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Total Calls (Calls) Count of the number of completed inbound and outbound calls the agent has taken in the Today timeframe Call count on the Agent monitoring page counts sessions not interactions Call sessions are attributed to the last agent who handled the session Outbound and inbound calls are included Due to some date/time matching differences, this column should only be used as a guide - use downloadable reports for specific call interaction counts per agent Total Chats (Chats) Completed chat sessions handled today Last End Time The end time of the last completed session Last time offered Shows the last time the agent was offered a call/chat notification.
- Chat queues breakdown The Chat columns are the same as the Call columns however there are no "Avg/Longest Hold Times" as these two columns have been replaced with "Average/Longest Response Time." Average Response Time: shows the average amount of time that it takes for an agent to respond.
- Data details Data is categorized into three sections: Service Level: Metrics displayed in this section are tied to service level (as set in Settings > Operation Management or the Queue Level Target Metrics.
- Repeat Contacts: Number of callers who had multiple incoming sessions that finished in the same queue within the configured repeat contact timeframe set in Settings > Operation Management Target Metrics .

