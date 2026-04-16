---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.038Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Email search in the agent adapter"
feature_slug: "email-search-in-the-agent-adapter"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide"
keywords:
  - "email"
  - "search"
  - "agent"
  - "adapter"
  - "agents"
  - "can"
  - "emails"
  - "keyword"
---

# Email search in the agent adapter

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Agents can search for emails in the agent adapter by keyword, session ID, or subject.

## Extended Definition

Agents can search for emails in the agent adapter by keyword, session ID, or subject.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide)

## Supporting Pages

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Queue menus can be set to route to a specific group of agents, deflect to messages, other queues, phone numbers, or voicemail, and many features can be applied at the queue level for specific customization.
- Queues can be configured to enable specific channels (email, call, chat), the assignment of Agents and Teams to each channel, and many features can be applied at the queue level for specific customization.
- Queues can be configured to enable specific channels (email, call, chat), the assignment of Agents and Teams to each channel, and many features can be applied at the queue level for specific customization.
- Apply the email channel to a queue Please see Setting up and Assigning Agents to Channels and Queue Menus: IVR, Mobile, Web for steps in both the Web and App SDK sections.

### "Standard Reports Agent and Teams Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Waiting : Voicemails received in the last week that have not be listened to via the Agent Adapter.
- Voicemail Read : Voicemails an Agent has listened to via the Agent Adapter.
- Date and Timestamp Agent Status Summary and Timeline Report Agent statuses, also known as Aux codes, are used to track time spent on different tasks, make agents available for calls or chats, and are used extensively for workforce management.
- Total Preset SMS Sent: Total number of preset SMS sent by Agents using SMS Blending features like In Call and Wait Time SMS.

### "Agent extensions guide \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If no agents meet the search criteria, a message will appear indicating that there are no available agents to contact.
- A list will appear showing all agents that meet the search criteria along with their availability.
- Search the extension directory Click in the search field and begin typing a name in order to search for an agent extension.
- Agent extensions allow agents to be assigned a phone number extension for agent to agent and end-user to agent calling.

