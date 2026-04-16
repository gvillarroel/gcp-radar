---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.075Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Auto answer settings relocation"
feature_slug: "auto-answer-settings-relocation"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "auto"
  - "answer"
  - "settings"
  - "relocation"
  - "calls"
  - "chats"
  - "have"
  - "been"
---

# Auto answer settings relocation

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Auto answer settings for calls and chats have been moved to new routing configuration locations.

## Extended Definition

Auto answer settings for calls and chats have been moved to new routing configuration locations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- Agent status and availability To prevent agents from receiving Auto Answer chats before they're ready, Admins can set an unavailable default status for agents who have just logged in.
- Auto Answer behavior combined with other features Deltacast Deltacast for Cascade / % Allocation Multicast Transferred chats Monitoring and reporting Monitoring Auto Answer can be monitored on the chat page, where admins see in real-time which chats are: Auto Answered Manually picked up Reporting The following reports identify which chats were Auto Answered and which chats were manually picked up: Agent Performance Report Agent Timeline Report Agent Summary Report Individual Chat History Report Please see Report Builder for more information about pulling reports.
- Chat Routing - Auto Answer Overview Auto Answer connects chats automatically to agents, decreasing wait time and maximizing agent productivity.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Session type: call or chat Call duration: duration of session from start to end Queued at: time session entered the queue Assigned at: time session was assigned to agent Wait: total wait duration in queue before being assigned to an agent for the session Hold Duration: length of hold time does not include wait time (calls only) Answer Type: indicates whether session was auto (0) or manually (1) answered Fail reason: reason why a session "failed" and details.
- When making or receiving calls or chats, the CCAI Platform integration will automatically pop the Salesforce case.
- When making or receiving calls or chats, the CCAI Platform integration will automatically pop the Salesforce case.
- Settings dependencies like settings for appending calls or chats to existing cases impact this feature.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- The original call ID will have the fail reason "End User No Answer." Because of the unique call type that scheduled calls present, if the Agent clicks 'Hang up and Callback', this will create a new Inbound call.
- For information about configuring auto-answer and declining calls, see Turn on and configure end-user (consumer) to agent calling .
- Auto-answer doesn't connect calls to agents that are on active calls.
- Auto-answer doesn't connect calls to agents that are on active calls.

