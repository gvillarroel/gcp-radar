---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.056Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Cascade conditions"
feature_slug: "cascade-conditions"
latest_feature_date: "2025-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "cascade"
  - "conditions"
  - "group"
  - "logic"
  - "can"
  - "include"
  - "sla"
  - "agent"
---

# Cascade conditions

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Cascade group logic can include SLA, agent availability, and queue length conditions.

## Extended Definition

Cascade group logic can include SLA, agent availability, and queue length conditions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Auto Answer behavior combined with other features Deltacast Deltacast for Cascade / % Allocation Multicast Transferred chats Monitoring and reporting Monitoring Auto Answer can be monitored on the chat page, where admins see in real-time which chats are: Auto Answered Manually picked up Reporting The following reports identify which chats were Auto Answered and which chats were manually picked up: Agent Performance Report Agent Timeline Report Agent Summary Report Individual Chat History Report Please see Report Builder for more information about pulling reports.
- Please see Chat Routing: Multicast and Deltacast for all routing logic details Agent experience When the chat is assigned to an agent, and is approximately three seconds from being connected, the agent receives a browser notification, New Chat Picked Up.
- To set the trigger conditions, follow these steps: To set the first trigger condition, do the following: In the first field, select whether the keyword is or isn't included in the URL for the page.
- To complete your configuration, do the following: Select the Include transfer by virtual agent in total transfer count checkbox if you want transfers by virtual agents to be counted.

### "Multicast and deltacast \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)
- Source ID: `site-docs-reference-required-8`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- It applies to all chat types and the following chat flows: Transfers Chats routed through Direct Access Points (DAPs) Queues with cascade groups enabled Queues with percent allocation groups enabled Eligible agents To receive a deltacast call, an agent must fulfill one of following requirements: Status is set to Available.
- Deltacast for calls If enabled, deltacast extends to the following: Transfers Scheduled calls Calls routed using Direct Access Points (DAPs) Queues with cascade groups enabled Queues with percent allocation groups This section outlines deltacast routing logic and describes how to enable this feature.
- If cascade groups are also being used If a deltacast call is routed to an agent and the agent does not answer within the time set in the deltacast timeout setting: When deltacast attempt counts remain for the call, it's routed to an available agent with the next longest duration.
- If the deltacast attempt count has run out, then the chat is offered using multicast to all agents in Cascade Group A, both in Available and In-chat statuses, including the original agent routed the chat (if they did not reach the Missed Chat threshold).

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- When scheduled calls are enabled for queues with Cascade groups : If available, an agent from the highest level group will be assigned the calls first, then the next group in the standard routing order.
- If no agents are available to be assigned, the call will wait in queue and the first available agent from any cascade group will be assigned.
- Requesting new phone numbers Contact Support and include the following information about your preferences: Number type: Toll-free, National, Mobile, Local Location of number Number preference details about number structure or patterns Set up emergency and special services calling (US and Canada only) With CCAI Platform, agents in the US and Canada can make calls to emergency and special services using phone numbers that you dedicate to these types of calls.
- Schedule call timeslot logic The scheduling model is static and calculates how many calls can be scheduled for a specified period of time, using the following logic: Agent availability calculation.

