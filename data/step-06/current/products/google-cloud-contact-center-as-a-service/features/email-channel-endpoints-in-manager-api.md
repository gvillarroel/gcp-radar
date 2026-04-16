---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.082Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Email channel endpoints in Manager API"
feature_slug: "email-channel-endpoints-in-manager-api"
latest_feature_date: "2024-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "email"
  - "channel"
  - "endpoints"
  - "manager"
  - "now"
  - "includes"
  - "management"
  - "analysis"
---

# Email channel endpoints in Manager API

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Manager API now includes endpoints for email data management and analysis.

## Extended Definition

The Manager API now includes endpoints for email data management and analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Session details The available dataset for sessions includes the following fields: Call/Chat ID: CCAI Platform call or chat ID Created at: when the call, chat was created Ended at: when the call, chat was ended Channel: call or chat type (for example, Mobile, Web).
- CRM sends agent status update When Agent is not Offline in CCAI Platform, CRM status changes will be made in CCAI Platform based on status mapping When Agent is in Offline in CCAI Platform, CRM status changes will be ignored When the CRM status changes while on an active session/call CCAI Platform treats this status change the same as the agent Next Status feature and when the session is complete, after Wrap-up, the next status is governed by the new CRM status If the agent has defined their Next Status and a CRM status change request is also received, the agent's next status will be set to the latest received status Salesforce Configuration Configure omni-channel If your org has already configured Omni-Channel, skip this section.
- Case owner and assignment After the default administrator is enabled, the default administrator is used as the owner for the following: Ticket/case and contact creation when a new chat is initiated before an agent is assigned to the chat Voicemail tickets/cases before receiving a callback call Call ticket/cases for abandoned calls (if enabled) Note: If the default user is not configured, CCAI Platform uses a random Agent When a call/chat is transferred: CCAI Platform assigns the case to the agent who the call is transferred to.
- Salesforce account with administrative access Assigned Omni-channel access Your profile will need to be assigned to the CCAI Platform Call Center that has been set up in order to see the CCAI Platform agent adapter in Salesforce Your organization's CCAI Platform environment URL and tenant or environment name will be used throughout the process and can be found in your CCAI Platform administrator portal link.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Myself : sends an email to the email associated with the currently logged in account Specific : Enter the specific Manager/Admin names, or team names All Managers and Admins : All users with the manager and Admin roles Click Apply Rules to save.
- Real-Time email notifications for call and agent metrics Overview To help support your Real-Time Management operation, you can actively track metrics and send you and your team email notifications.
- Historical report data generally includes short-abandoned calls, whereas the dashboard may not include this data based on settings in Settings > Operation Management .
- Report data excludes voicemails whereas the call dashboard data includes voicemails.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Emails will have the end-user's entered email address in the Reply-to Header field All emails will use this subject format: {Queue Name} [from: {email} ] Your CRM team should set up a rule that identifies the email address in the subject or body of the email and use the email address to identify the contact for the best experience Once enabled, the email form with the custom email per-queue shows at all times for the email channel, including: during operation hours, after operation hours, and for email deflection options CCAI Platform portal sends to the email address specified and then inbound emails are handled by your email provider.
- EWT for calls For calls, EWT is calculated based on the following formula: EWT = ((average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued calls - available agents)) + {EWT for callbacks, campaign calls, and scheduled calls} EWT for chats For chats, EWT is calculated based on the following formula: EWT = (average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued chats - available agents) Note: In chat channels, the value for active agents includes a multiplier based on the chat concurrency if the chat concurrency is >1.
- Queues can be configured to enable specific channels (email, call, chat), the assignment of Agents and Teams to each channel, and many features can be applied at the queue level for specific customization.
- Queues can be configured to enable specific channels (email, call, chat), the assignment of Agents and Teams to each channel, and many features can be applied at the queue level for specific customization.

