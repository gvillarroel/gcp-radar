---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.100Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Campaign time zone management"
feature_slug: "campaign-time-zone-management"
latest_feature_date: "2023-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "campaign"
  - "time"
  - "zone"
  - "management"
  - "administrators"
  - "can"
  - "define"
  - "schemas"
---

# Campaign time zone management

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Administrators can define time zone schemas and apply a specific schema to each campaign.

## Extended Definition

Administrators can define time zone schemas and apply a specific schema to each campaign.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Standard Reports: Campaign Data Sets \_|\_ Google Cloud Contact Center as\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is calculated as BCW +Talk Time + Hold time + Wrap-up time / All handled interactions Predictive Dialer Disposition Report The Predictive Dialer Disposition Report provides details on the statuses of the dispositioned calls within the selected campaigns.
- This is calculated as BCW +Talk Time + Hold time + Wrap-up time / All handled interactions BCW will only appear in the calculation when a campaign is active (in play).
- It is a metric captured exclusively for Dialer Campaigns, and each campaign type may have a slightly different definition of the start and end times for BCW.
- It is a metric captured exclusively for Dialer Campaigns, and each campaign type may have a slightly different definition of the start and end times for BCW.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Note: If your company has requested a time zone override for all its users, then the requested time zone will be displayed instead Metric definitions Service Level SL / 30min Service Level within the past 30min SL / day Service Level for the current day SL Target Service Level Target set for the queue Live CIQ Consumers in Queue LCW / Sec Longest Call Waiting AQD / Sec Average Queue Duration (Waiting for an Agent) Live Number of calls currently in progress with an agent Productive Agents Number of agents with a productive status Live Agent Status Available Count of all available agents On-hold (Calls only)Count of agents who have placed a consumer on-hold Wrap-up Count of all agents in the wrap-up status Custom Count of all agents in custom statuses that are configured as productive Productive Agents Count of all agents in a productive status as configured in Settings > Queue Groups Today ABN % Abandon rate Volume Total offered interactions including failed/abandoned sessions.
- Today : the current date based on your locally configured time zone Last 24 hours This quarter : Starts at the first day of the current calendar quarter until the current day Global metrics The left-hand tile contains call-specific data, while the right-hand tile contains chat data.
- Repeat Contacts: Number of callers who had multiple incoming sessions that finished in the same queue within the configured repeat contact timeframe set in Settings > Operation Management Target Metrics .
- Real-Time email notifications for call and agent metrics Overview To help support your Real-Time Management operation, you can actively track metrics and send you and your team email notifications.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Note: Configure the callback fulfillment hours in the same timezone as the operating hours of the queue that they're assigned to.
- Fill out the following information: Name Time zone Days and hours of operation Holidays to observe Click Save .
- Session types for reporting For reporting, calls to or from direct phone numbers generate the following session types: Voice Inbound (Direct) : an inbound call to a direct phone number Voice Outbound (Direct) : an outbound call from a direct phone number Voice Internal : an internal call to or from a direct phone number Estimated wait time announcement for calls Estimated Wait Time (EWT) Announcements use a calculation to predict the wait time until a caller is connected with an agent.
- Overcapacity deflection message (if enabled) Estimated wait time announcement (if enabled) Connecting Message Record a Call Message (if enabled) Pre-Call Notification of CSAT survey (if enabled) Any other messages (if applicable) Wait Time SMS consent voice readout (if enabled and "keep waiting" is selected) Configure call settings This section explains configuration options in CCAI Platform.

