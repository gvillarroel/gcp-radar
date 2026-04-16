---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.045Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Email subject line removal during interaction data deletion"
feature_slug: "email-subject-line-removal-during-interaction-data-deletion"
latest_feature_date: "2025-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "email"
  - "subject"
  - "line"
  - "removal"
  - "during"
  - "interaction"
  - "deletion"
  - "removes"
---

# Email subject line removal during interaction data deletion

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Removes email subject lines when end-user interaction data is deleted from the instance.

## Extended Definition

Removes email subject lines when end-user interaction data is deleted from the instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Standard Reports: Interactions Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Agent Name The identity of the individual that handled the interaction Agent ID The Contact Center AI Platform (CCAI Platform) unique ID of the individual that handled the interaction Agent Email The email address of the individual that handled the interaction.
- Possible values include: 1- Unusable 2 - Poor 3 - Average 4 - Good 5 - Excellent Interaction Summary by Agent Report The Interaction Summary by Agent report displays the interaction statistics for an agent during the specified period.
- All Handled Interactions Report The All Handled Interactions report displays details about interactions for one or more agents during a specific date and time range.
- Interaction Detail by Agent Report The Interaction Details by Agent report displays the interaction statistics for an agent during the specified period.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- The customer will be presented with the email address set in Settings > Support Center Details from within the body of the chat interaction.
- App version and iOS/Android version are automatically inserted into the email body and the subject is "Support for [selected menu path]".
- Auto Answer behavior combined with other features Deltacast Deltacast for Cascade / % Allocation Multicast Transferred chats Monitoring and reporting Monitoring Auto Answer can be monitored on the chat page, where admins see in real-time which chats are: Auto Answered Manually picked up Reporting The following reports identify which chats were Auto Answered and which chats were manually picked up: Agent Performance Report Agent Timeline Report Agent Summary Report Individual Chat History Report Please see Report Builder for more information about pulling reports.
- To differentiate between a Message Preview and a message that was previously sent by the consumer, the Message Preview is displayed with the following changes while the consumer is typing: The background of the chat bubble is white/transparent The chat bubble has a dashed-line border The chat font is italicized The chat displays Message Preview below the bubble instead of the timestamp Once the consumer sends their message, the Message Preview is updated to display as a typical message with the colored background, standard font, and timestamp.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Note: If your company has requested a time zone override for all its users, then the requested time zone will be displayed instead Metric definitions Service Level SL / 30min Service Level within the past 30min SL / day Service Level for the current day SL Target Service Level Target set for the queue Live CIQ Consumers in Queue LCW / Sec Longest Call Waiting AQD / Sec Average Queue Duration (Waiting for an Agent) Live Number of calls currently in progress with an agent Productive Agents Number of agents with a productive status Live Agent Status Available Count of all available agents On-hold (Calls only)Count of agents who have placed a consumer on-hold Wrap-up Count of all agents in the wrap-up status Custom Count of all agents in custom statuses that are configured as productive Productive Agents Count of all agents in a productive status as configured in Settings > Queue Groups Today ABN % Abandon rate Volume Total offered interactions including failed/abandoned sessions.
- Performance Resolved by Virtual Agent : The total number of chat sessions handled by a Virtual Agent to the end of the relevant programmed discussion points Planned Transfer : The total number of chat sessions handled by a Virtual Agent that are then transferred to another agent (human) due to configuration/standard operating procedure Escalated : The total number of chat sessions that are handled by a Virtual Agent but do not reach the end of the relevant programmed discussion points (due to consumer clicking on the "escalation" button, typing an escalation message, or in rare cases, technical failure on the part of the Virtual Agent - such as going offline) Consumer Ended : The total number of chat sessions that are handled by a Virtual Agent but do not reach the end of the relevant programmed discussion points (due to the consumer leaving the chat) Avg.
- Total Calls (Calls) Count of the number of completed inbound and outbound calls the agent has taken in the Today timeframe Call count on the Agent monitoring page counts sessions not interactions Call sessions are attributed to the last agent who handled the session Outbound and inbound calls are included Due to some date/time matching differences, this column should only be used as a guide - use downloadable reports for specific call interaction counts per agent Total Chats (Chats) Completed chat sessions handled today Last End Time The end time of the last completed session Last time offered Shows the last time the agent was offered a call/chat notification.

