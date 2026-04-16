---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.115Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Session Data report access management"
feature_slug: "session-data-report-access-management"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "session"
  - "report"
  - "access"
  - "management"
  - "admins"
  - "can"
  - "now"
  - "manage"
---

# Session Data report access management

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Admins can now manage who has access to the Session Data report.

## Extended Definition

Admins can now manage who has access to the Session Data report.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Repeat Contacts: Number of callers who had multiple incoming sessions that finished in the same queue within the configured repeat contact timeframe set in Settings > Operation Management Target Metrics .
- Repeat Contacts: # of callers who had multiple incoming sessions that finished in the same. queue within the configured repeat contact timeframe set in Settings> Operation Management .
- Historical report data generally includes short-abandoned calls, whereas the dashboard may not include this data based on settings in Settings > Operation Management .
- Total Calls (Calls) Count of the number of completed inbound and outbound calls the agent has taken in the Today timeframe Call count on the Agent monitoring page counts sessions not interactions Call sessions are attributed to the last agent who handled the session Outbound and inbound calls are included Due to some date/time matching differences, this column should only be used as a guide - use downloadable reports for specific call interaction counts per agent Total Chats (Chats) Completed chat sessions handled today Last End Time The end time of the last completed session Last time offered Shows the last time the agent was offered a call/chat notification.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Auto Answer behavior combined with other features Deltacast Deltacast for Cascade / % Allocation Multicast Transferred chats Monitoring and reporting Monitoring Auto Answer can be monitored on the chat page, where admins see in real-time which chats are: Auto Answered Manually picked up Reporting The following reports identify which chats were Auto Answered and which chats were manually picked up: Agent Performance Report Agent Timeline Report Agent Summary Report Individual Chat History Report Please see Report Builder for more information about pulling reports.
- Feature benefits For Managers and Admins Automatically remind agents to respond promptly to conversations For Agents Visually shows which chat needs their attention first For end-users Less waiting time and quicker resolution time Feature details The response timer starts when the agent is assigned and the consumer has sent a message and applies even if an agent has not yet sent a message If the agent responds, the counter will not begin again until the consumer replies.
- Be sure to store this in a secure location. ::: The API Credential Management Settings allow you to: add new API credentials disable / enable credentials regenerate the secret token or edit the name of an existing credential Add an API credential Go to Settings > Developer Settings > API Credential management .
- Developer Settings API Credential Management ::: warning ::: title Deprecation Notice for API Company Key and Secret Value ::: API Credential Management The Company Key and Secret Value is being deprecated as of September 30, 2022.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Session types for reporting For reporting, calls to or from direct phone numbers generate the following session types: Voice Inbound (Direct) : an inbound call to a direct phone number Voice Outbound (Direct) : an outbound call from a direct phone number Voice Internal : an internal call to or from a direct phone number Estimated wait time announcement for calls Estimated Wait Time (EWT) Announcements use a calculation to predict the wait time until a caller is connected with an agent.
- Restrict outbound calling for locations (new number) To restrict outbound calling for locations, follow these steps Go to Settings > Call > Phone Number Management > Add/Edit Number and configure the number as a special service number.
- To assign multiple direct phone numbers to an agent, follow the instructions in Bulk user management: Upload new or updated users while following these guidelines: Stay within the limitations for assigning direct phone numbers.
- Restrict outbound calling for agents (new number) To restrict outbound calling for agents, follow these steps: Go to Settings > Call > Phone Number Management > Add Number and configure the number as a special service number.

