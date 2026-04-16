---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.127Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Agent Assist Session Summarization"
feature_slug: "agent-assist-session-summarization"
latest_feature_date: "2023-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-use-agent-desktop"
keywords:
  - "agent"
  - "assist"
  - "session"
  - "summarization"
  - "automatically"
  - "generates"
  - "summary"
  - "chat"
---

# Agent Assist Session Summarization

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Agent Assist Session Summarization automatically generates a summary of a chat or phone call transcript at the end of the session.

## Extended Definition

Agent Assist Session Summarization automatically generates a summary of a chat or phone call transcript at the end of the session.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-use-agent-desktop](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-use-agent-desktop)

## Supporting Pages

### "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Agent Assist pane, select the Gen AI session Summarization and Chat details view checkboxes.
- This lets you use Agent Assist with the following session types: Calls to direct phone numbers Calls to agent extension numbers Outbound calls where no queue is selected Chats transferred directly to another agent Note: When a chat is transferred, the originating agent sees Agent Assist as it's configured for the originating team or queue, and the receiving agent sees Agent Assist as it's configured for the receiving team or queue.
- Generative AI session summarization : displays a generated summary of the conversation when the chat session enters wrap-up.
- Generative AI session summarization : displays a generated summary in the agent adapter when the call enters wrap-up.

### "Use the agent desktop \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-use-agent-desktop](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-use-agent-desktop)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the capabilities in the panels of the agent adapter to assist you in handling the chat.
- Handle an incoming chat When an incoming chat arrives, the agent desktop displays the New Chat button.
- Use the capabilities in the panels of the agent desktop to assist you in handling the call.
- Use the capabilities in the panels of the agent adapter to assist you in handling the call.

### "Session data feed \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Captured VA session variables Chat ID: 3070 Menu: In-App Support (QUEUE qca02)/Support/PN/PN 1 Chatbot Platform: Virtual Agent PN Chatbot Workflow: Post Session Transfer - Chat Virtual Agent: Virtual Agent PN - Chat Intent: Captured At: July 5, 2024 at 3:08:39 PM GMT+7 Captured Variables agentHelpfulness: 4 issueResolution: yes agentComprehension: 5 openFeedback: nothing Co-browse session started Screen Share session was started by Agent Time of start: July 5, 2024 at 3:16:54 PM GMT+7 Co-browse session ended Screen Share session was ended by Agent Time of end: July 5, 2024 at 3:19:31 PM GMT+7 Co-browse remote control requested Screen Share remote control was requested Co-browse remote control accepted Screen Share remote control was accepted Co-browse remote control rejected Screen Share remote control was rejected Co-browse full device control requested Screen Share full device control was requested Co-browse full device control accepted Screen Share full device control was accepted Co-browse full device control rejected Screen Share full device control was rejected Session sentiment score Average sentiment score for the segment: 52 Customer email collected Customer email: 222larabrown@gmail.com Realtime Transcript Call ID: 6800 July 5, 2024 at 4:23:03 PM GMT+7 00:25 ---------------------------------------- [July 5, 2024 at 4:23:05 PM GMT+7 Virtual Agent PN - Voice] Hello, I am CX Agent Number 1.
- How can I help you? ---------------------------------------- [July 5, 2024 at 4:23:10 PM GMT+7 Consumer] human agent ---------------------------------------- Live Translation was used Spanish (Spain) and English (US) were used for translation Data parameters passed to Virtual Agent Data parameters passed to Virtual Agent PN - Chat Data parameters passed: order: yes product: books queueId: 502 queueLanguage: en Pre-session SMS deflection Pre-session SMS deflection was offered in ORDERS RETURNS/PN/PN 1 Pre-session SMS deflection was accepted Dispositions Code: test001 Custom Code ID: 123 UJET Code ID: 3 Note: Okee List: Custom Custom List ID: 2222 UJET List ID: 3 Agent: Alex B CCAI Insight chat history uploaded GCS URL: gs://example-insights/oem/...
- Agent Assist auto-generated Summary Summary: The customer wants to know where San Francisco is.
- Call started Voice Outbound Contact Center AI Call ID: 6679 Language: English (US) Time: July 2, 2024 at 7:06:15 PM PDT Outbound number: +1 234 567 8910 Chat started Messaging Inbound (Web Chat) Contact Center AI Chat ID: 3034 Language: English (US) Menu: Orders/Returns Time: July 4, 2024 at 2:23:16 PM GMT+7 Device: Browser Call ended Contact Center AI Call ID: 6722 Disconnected By Agent Time of call: July 4, 2024 at 2:41:02 PM GMT+7 Length of call: 00:21 Chat ended Contact Center AI Chat ID: 3036 Disconnected by End User Time of chat: July 4, 2024 at 2:35:34 PM GMT+7 Custom data from the customer has arrived membershipNumber: 21754 model: 1234 purchaseDate: Invalid DateTime temperature: 70.5 osVersion: 17.3.1 lastTransactionId: FEBA4C32-1DD5-4C0A-985C-78FB7A61A166 dashboardUrl: http://internal.dashboard.com/1234 location: Location not available bluetooth: Bluetooth state unknown Callback number Incoming phone number: +1 800 555 0175 Callback number: +1 800 555 0100 Text attachment uploaded Virtual agent transcript CRM link: https://example.com/attachments/token/...

