---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.092Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Dialogflow API Analyze Content support for chat virtual agent sessions"
feature_slug: "dialogflow-api-analyze-content-support-for-chat-virtual-agent-sessions"
latest_feature_date: "2024-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets"
keywords:
  - "dialogflow"
  - "analyze"
  - "content"
  - "chat"
  - "virtual"
  - "agent"
  - "sessions"
  - "can"
---

# Dialogflow API Analyze Content support for chat virtual agent sessions

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Chat virtual agent sessions can use Analyze Content in the Dialogflow API.

## Extended Definition

Chat virtual agent sessions can use Analyze Content in the Dialogflow API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets)

## Supporting Pages

### "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- View knowledge suggestions : As the chat continues, the system analyzes both end-user and agent messages and displays relevant article suggestions as Clickable tiles .
- Interaction history Interaction history lets your agents view the end-user's interactions from previous call and chat sessions.
- This lets you use Agent Assist with the following session types: Calls to direct phone numbers Calls to agent extension numbers Outbound calls where no queue is selected Chats transferred directly to another agent Note: When a chat is transferred, the originating agent sees Agent Assist as it's configured for the originating team or queue, and the receiving agent sees Agent Assist as it's configured for the receiving team or queue.
- Searching for articles : Agents can manually search for specific knowledge articles by entering keywords into the Knowledge base search field Search results appear as tiles, similar to automatic suggestions, and can be clicked to view the article Note: If a chat is transferred to another agent, the knowledge articles remain accessible to the new agent until the session ends or the transferring agent exits.

### "Chat platform API Guide \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The queue selection virtual agent To streamline menu selection for API consumers, the chat platform API is designed to be used in conjunction with a Dialogflow virtual agent to aid in queue placement for new chats.
- When an end user selects this option, after the email is sent, The customer will need to mark the chat as deflected and ended by using the PATCH /chats/:id endpoint with the following params in the request body: "status": "finished" , "escalation id": &lt;id of escalation> , and "deflection channel": "email" Continue with virtual agent : This is technically a valid deflection option, however it doesn't make sense for using the queue selection VA as the VA would just try to escalate the chat again.
- When creating a new chat with the POST or chats endpoint, include a custom context payload that includes some context on the created chat that the virtual agent can use to determine which queue the chat should be routed to.
- Using the data contained in the context field, the virtual agent (based on how the customer has configured it) escalates the chat to the selected queue.

### "Standard Reports: Virtual Agent Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Standard Reports: Virtual Agent Data Sets Stay organized with collections Save and categorize content based on your preferences.
- Response Time - Chat Average of Time The average Virtual Agent Response Time.
- Response Time - Chat Max of Time The maximum Virtual Agent Response Time.
- Response Time - Chat SUM of Time The total Virtual Agent Response Time.

