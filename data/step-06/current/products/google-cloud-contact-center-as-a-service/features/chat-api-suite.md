---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.106Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Chat API suite"
feature_slug: "chat-api-suite"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
keywords:
  - "chat"
  - "suite"
  - "now"
  - "provides"
  - "apis"
  - "webhooks"
  - "create"
  - "chats"
---

# Chat API suite

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Chat API suite now provides APIs and webhooks to create chats, exchange text and media messages, and end chats with agents or virtual agents.

## Extended Definition

The Chat API suite now provides APIs and webhooks to create chats, exchange text and media messages, and end chats with agents or virtual agents.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)

## Supporting Pages

### "Chat platform API Guide \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When creating a new chat with the POST or chats endpoint, include a custom context payload that includes some context on the created chat that the virtual agent can use to determine which queue the chat should be routed to.
- Create chats To create chats using the chat platform API, follow these steps: Handling new chat payloads: The chat initialization process happens asynchronously from the POST /chats request.
- Create end-users Chats require a valid end-user ID when they are created, which means an end-user must exist in the Contact Center AI Platform system before a chat is created.
- Because of this, the chat created event may be received before or after the API response from the POST /chats creation endpoint.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- Auto Answer behavior combined with other features Deltacast Deltacast for Cascade / % Allocation Multicast Transferred chats Monitoring and reporting Monitoring Auto Answer can be monitored on the chat page, where admins see in real-time which chats are: Auto Answered Manually picked up Reporting The following reports identify which chats were Auto Answered and which chats were manually picked up: Agent Performance Report Agent Timeline Report Agent Summary Report Individual Chat History Report Please see Report Builder for more information about pulling reports.
- Real-time and Standard Reporting Real-time reports Dismissed chats are moved from Chats > Ongoing to Chats Previous The status for dismissed chats on the Previous Chats page is Dismissed - Inactive End user If that chat is restarted by the consumer sending a response, the chat is placed back in queue and will show in Chats > Future When an agent picks up a restarted chat, that chat will be moved to the Ongoing chat page Reporting The chat duration timer stops as soon as a chat has been placed into dismissed status.
- Example of how to select Agent Activity reports in Reports > Users & Teams: Available in Agent Activity Summary report ( Reports > Users & Teams > Agent Activity - Summary Report) as "Agent exceeded target chat response time." Available in Agent Timeline report ( Reports > Users & Teams > Agent Activity - Timeline Report) as "Agent exceeded target chat response time." When chats are dismissed, chat status will show as Dismissed - inactive end-user .

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Viewing live chat UI Agent : Name of Agent as entered on the Users and Teams page End User : Consumer name or unique ID if available Issue : Queue menu path View Case / Ticket : If your CRM is integrated with Contact Center AI Platform (CCAI Platform), click the link to view the CRM record associated with the chat session After Hour Deflection for Calls and Chats Overview Customize your consumer's experience by configuring specific deflection paths for when consumers try to contact you outside of your Hours of Operation are first configured, then deflection is enabled and configured at the global level in the Call Settings and Chat Settings pages.
- Available Monitoring Pages to end a Call or Chat: Call Monitoring Page ( Calls > Connected , Calls > Queued ) Chat Monitoring Page ( Chats > Connected , Chat > Queued ) Go to call or chat row that you want to end and click on the dots under the Actions column.
- Monitoring Live Calls and Chats Overview Supervisors and Agents in training benefit from listening in on live calls and viewing live chats, without joining the session or interrupting the consumer and Agent on the call or chat.
- Using SmartActions for Web SDK Chats While the same flow of prompting the consumer to take an action like send a photo or video is not available for Web SDK chat, consumers can still add image attachments.

