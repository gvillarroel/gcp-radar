---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.331Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Context token limits"
feature_slug: "context-token-limits"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient"
keywords:
  - "context"
  - "token"
  - "limits"
  - "dialogflow"
  - "cx"
  - "can"
  - "reserve"
  - "configurable"
---

# Context token limits

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX can reserve a configurable percentage of the token budget for conversation history in generative AI settings.

## Extended Definition

Dialogflow CX can reserve a configurable percentage of the token budget for conversation history in generative AI settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Playbook context truncation lets you set a percentage of the token budget to be reserved for conversation history, as a maximum.
- Context truncation lets you set a percentage of the token budget to be reserved for conversation history, as a maximum.
- Context token limits link Note: This feature is restricted access.
- Token limits Input token limit link Select the input token limit for the generative model .

### Conversation history \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history](https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Conversation history Stay organized with collections Save and categorize content based on your preferences.
- Browsing the conversation history To use the conversation history tool: Open the Dialogflow CX console .
- Permissions required Using this tool requires the dialogflow.conversations permission.
- It is also available in the Admin role , as well as other Dialogflow CX roles .

### "Class ContextsAsyncClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample delete all contexts(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample create context(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample delete context(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample update context(): Create a client client = dialogflow v2.

