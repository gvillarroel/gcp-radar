---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.091Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Queue-level Deltacast and Multicast configuration"
feature_slug: "queue-level-deltacast-and-multicast-configuration"
latest_feature_date: "2024-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "queue"
  - "level"
  - "deltacast"
  - "multicast"
  - "configuration"
  - "admins"
  - "can"
  - "configure"
---

# Queue-level Deltacast and Multicast configuration

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Admins can configure Multicast or Deltacast at the queue level and set the Deltacast attempt count.

## Extended Definition

Admins can configure Multicast or Deltacast at the queue level and set the Deltacast attempt count.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Multicast and deltacast \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)
- Source ID: `site-docs-reference-required-8`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following configuration settings appear: Deltacast Attempt Count : The number of times deltacast should offer an incoming chat to a single, eligible agent before switching to Multicast.
- Turn on deltacast for calls at the queue level Deltacast settings for queues are automatically inherited from the global settings unless you change them for individual queues.
- Turn on deltacast for chat at the queue level Deltacast settings for queues are automatically inherited from the global settings unless you change them for individual queues.
- If the deltacast attempt count has run out, the call is routed using multicast to the rest of the agents assigned to that queue menu option.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- Auto Answer behavior combined with other features Deltacast Deltacast for Cascade / % Allocation Multicast Transferred chats Monitoring and reporting Monitoring Auto Answer can be monitored on the chat page, where admins see in real-time which chats are: Auto Answered Manually picked up Reporting The following reports identify which chats were Auto Answered and which chats were manually picked up: Agent Performance Report Agent Timeline Report Agent Summary Report Individual Chat History Report Please see Report Builder for more information about pulling reports.
- See step 5 of Configure chat check-in at the global level and step 7 of Configure chat check in at the queue level to edit the Check In modal appears once consumer reaches queue position field.
- Configure automatic redaction settings at the queue level To configure automatic redaction settings at the queue level, follow these steps: In the CCAI Platform portal, click Settings > Queue .

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Note: If your company has requested a time zone override for all its users, then the requested time zone will be displayed instead Metric definitions Service Level SL / 30min Service Level within the past 30min SL / day Service Level for the current day SL Target Service Level Target set for the queue Live CIQ Consumers in Queue LCW / Sec Longest Call Waiting AQD / Sec Average Queue Duration (Waiting for an Agent) Live Number of calls currently in progress with an agent Productive Agents Number of agents with a productive status Live Agent Status Available Count of all available agents On-hold (Calls only)Count of agents who have placed a consumer on-hold Wrap-up Count of all agents in the wrap-up status Custom Count of all agents in custom statuses that are configured as productive Productive Agents Count of all agents in a productive status as configured in Settings > Queue Groups Today ABN % Abandon rate Volume Total offered interactions including failed/abandoned sessions.
- Queues monitoring page Overview The Queues page gives CCAI Platform Admins and Managers an overview of queue configurations, a live view of the queue activity, as well as data calculated for the past 24 hours.
- Filter options Select one or more of the following filter options to see specific Agents: Option Description Team Agents assigned to the team via sub-team or top-level Team Status Shows current Agents in the selected status/es Queue Group Select from available queue groups.
- There are three pre-configured thresholds displayed by default: SLA >= 80 60 > SLA < 80 SLA <= 60 The metrics displayed are defined as follows: Queues See Data Dictionary Total SLA See Data Dictionary Volume Total interactions which qualify for SLA calculation.

