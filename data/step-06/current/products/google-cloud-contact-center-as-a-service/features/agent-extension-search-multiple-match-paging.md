---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:46.999Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Agent extension search multiple-match paging"
feature_slug: "agent-extension-search-multiple-match-paging"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist"
keywords:
  - "agent"
  - "extension"
  - "search"
  - "multiple"
  - "match"
  - "paging"
  - "improves"
  - "directory"
---

# Agent extension search multiple-match paging

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Improves extension directory searches by reading multiple matching agent results in groups of eight and adding guidance messages.

## Extended Definition

Improves extension directory searches by reading multiple matching agent results in groups of eight and adding guidance messages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)

## Supporting Pages

### "Agent extensions guide \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search the extension directory Click in the search field and begin typing a name in order to search for an agent extension.
- Dial pad and extension directory If you are an agent with an extension assigned, you are able to dial extensions.
- You can use the search field to search for an agent by name or extension.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Agent extensions guide Stay organized with collections Save and categorize content based on your preferences.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Multiple agents found : a message played when the end-user inputs an agent extension number and there are multiple agent matches.
- No more matched agents : a message played when there are no additional matches in the extension directory.
- Depending on how you configure your instance, an end-user can directly call an agent in one of two ways: enter the agent's extension number at the beginning of a call, or call the agent from the agent directory.
- End-user experience An end-user can directly call an agent in one of two ways: enter the agent's extension number at the beginning of a call, or call the agent from the agent directory.

### "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- This lets you use Agent Assist with the following session types: Calls to direct phone numbers Calls to agent extension numbers Outbound calls where no queue is selected Chats transferred directly to another agent Note: When a chat is transferred, the originating agent sees Agent Assist as it's configured for the originating team or queue, and the receiving agent sees Agent Assist as it's configured for the receiving team or queue.
- Searching for articles : Agents can manually search for specific knowledge articles by entering keywords into the Knowledge base search field Search results appear as tiles, similar to automatic suggestions, and can be clicked to view the article Note: If a chat is transferred to another agent, the knowledge articles remain accessible to the new agent until the session ends or the transferring agent exits.
- Searching for articles : If agents need to search for a specific topic, they can manually enter keywords in the Knowledge base search field within the same panel.
- If there were multiple human agents in the session, the session is divided into segments, one for each human agent that participated.

