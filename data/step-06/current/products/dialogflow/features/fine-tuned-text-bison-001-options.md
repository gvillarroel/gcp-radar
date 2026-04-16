---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.348Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Fine-tuned text-bison@001 options"
feature_slug: "fine-tuned-text-bison-001-options"
latest_feature_date: "2024-06-07"
deprecation_date: "2024-07-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient"
keywords:
  - "fine"
  - "tuned"
  - "text"
  - "bison"
  - "001"
  - "options"
  - "dialogflow"
  - "generative"
---

# Fine-tuned text-bison@001 options

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow generative features supported fine-tuned text-bison@001 model options; Dialogflow generative features supported fine-tuned text-bison@001 model options; deprecated on 2024-07-06.

## Extended Definition

Dialogflow generative features supported fine-tuned text-bison@001 model options; Dialogflow generative features supported fine-tuned text-bison@001 model options; deprecated on 2024-07-06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient)

## Supporting Pages

### Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The placeholders are as follows: $original-query : The user's query text. $rewritten-query : Dialogflow uses a rewriter module to rewrite the original user query into a more accurate format. $sources : Dialogflow uses Enterprise Search to search for sources based on the user's query.
- Data store tool search configuration You can configure dynamic search parameters to fine-tune your results based on context from an ongoing conversation.
- The prompt is a text template that may contain predefined placeholders.
- The prompt is a text template that may contain predefined placeholders.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Input Text Config Defines the language used in the input text. com. google. cloud. dialogflow. v2.
- Builder Defines the language used in the input text. com. google. cloud. dialogflow. v2.
- Project Location Environment User Session Context Builder Builder for projects/{project}/locations/{location}/agent/environments/{environment}/users/{user}/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.
- Project Environment User Session Context Builder Builder for projects/{project}/agent/environments/{environment}/users/{user}/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.

### "Class ContextsAsyncClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.ContextsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample delete all contexts(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample create context(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample delete context(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample update context(): Create a client client = dialogflow v2.

