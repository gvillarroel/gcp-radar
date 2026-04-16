---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.033Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Agent Assist conversation profiles"
feature_slug: "agent-assist-conversation-profiles"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights"
keywords:
  - "agent"
  - "assist"
  - "conversation"
  - "profiles"
  - "dialogflow"
  - "cx"
  - "virtual"
  - "agents"
---

# Agent Assist conversation profiles

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Conversation profiles for Dialogflow CX virtual agents can now be created in europe-west4 and europe-west6; This feature lets administrators onboard, edit, remove, and monitor Agent Assist conversation profiles.

## Extended Definition

Conversation profiles for Dialogflow CX virtual agents can now be created in europe-west4 and europe-west6; This feature lets administrators onboard, edit, remove, and monitor Agent Assist conversation profiles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights](https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights)

## Supporting Pages

### "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition, you must grant the following IAM roles to your service account: Dialogflow Agent Assist Client Note: Failure to grant the correct IAM role prevents Agent Assist from working correctly.
- Service account requirements To use Agent Assist, you need to create a Google Cloud Service Account and key in the project where you created your Agent Assist conversation profile .
- Knowledge Assist This feature follows a conversation between a human agent and an end-user and provides the human agent with relevant document suggestions.
- Knowledge assist This feature follows a conversation between a live agent and a end-user and provides the live agent with relevant document suggestions.

### "Interactive Virtual Assistant (IVA) guide \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Virtual agent escalation using SIP integration This section explains how to create a Dialogflow CX custom payload for virtual agent escalations when you have the following requirements: The virtual agent needs to escalate to human agents on your own contact center using SIP.
- You get access to Dialogflow for natural language understanding, Customer Experience Insights for real-time interaction analysis, and Agent Assist summarization for generating summaries of conversations.
- This option is only used by Dialogflow CX virtual agents.
- Virtual agent escalation using call forwarding When a Dialogflow CX virtual agent needs to escalate to a human agent, the telephony platform uses a fixed configuration of the instance's IVR voice channel.

### "Customer Experience Insights and Quality AI \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights](https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The provided labels are imported: Metadata key Calls Chats Description hold duration ✔ Duration that the end-user was put on hold for in seconds. customer phone number ✔ The phone number of the end-user. outbound number ✔ The phone number that the outbound call was placed from (outbound calls only). transfers ✔ ✔ The number of times the call was transferred. has feedback ✔ ✔ Whether the conversation had a feedback response. fail reason ✔ ✔ The reason for the failure of the conversation. out ticket id ✔ ✔ The ticket ID of the conversation. agent assist conversation id X ✔ ✔ The Agent Assist conversation ID of the conversation. dialogflow conversation id X ✔ ✔ The Dialogflow CX conversation ID of the conversation. queue priority level ✔ ✔ The priority level of the conversation. answer type ✔ ✔ The type of the answer. session type v2 ✔ ✔ The type of the session. menu ✔ ✔ The menu of the conversation.
- Quality AI builds on CX Insights to enable comprehensive contact center quality evaluations, including individual conversations, live agents, and virtual agents.
- CX Insights seamlessly integrates with other products, allowing you to import conversations from Dialogflow CX and Agent Assist.
- Note: X is a number based on the leg of the conversation where multiple Agent Assist or Dialogflow CX sessions existed.

