---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.366Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX generators model support"
feature_slug: "dialogflow-cx-generators-model-support"
latest_feature_date: "2024-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient"
keywords:
  - "dialogflow"
  - "cx"
  - "generators"
  - "model"
  - "text"
  - "bison"
  - "002"
  - "gemini"
---

# Dialogflow CX generators model support

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX generators support the text-bison@002 and gemini-pro models.

## Extended Definition

Dialogflow CX generators support the text-bison@002 and gemini-pro models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient)

## Supporting Pages

### "Class ConversationModelsClient (2.47.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient)
- Source ID: `site-python-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateConversationModelEvaluationRequest ( parent="parent value", ) Make the request operation = client. create conversation model evaluation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.CreateConversationModelEvaluationRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample create conversation model evaluation(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample list conversation model evaluations(): Create a client client = dialogflow v2.
- CreateConversationModelRequest ( conversation model=conversation model, ) Make the request operation = client. create conversation model (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.CreateConversationModelRequest , dict] The request object.

### Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- It is optimized for both voice and text with optimized latency gemini-2.5-flash GA Gemini 2.5 flash gemini-2.5-flash-lite GA Gemini 2.5 flash lite gemini-2.0-flash-001 GA Gemini 2.0 flash gemini-2.0-flash-lite-001 GA Gemini 2.0 flash lite All listed models are available in all supported languages and supported regions .
- The placeholders are as follows: $original-query : The user's query text. $rewritten-query : Dialogflow uses a rewriter module to rewrite the original user query into a more accurate format. $sources : Dialogflow uses Enterprise Search to search for sources based on the user's query.
- The placeholders and required text are as follows: $original-query : The user's query text. $conversation : The conversation history is rendered in the following format: Human: user's first query AGENT: answer to user's first query Human: user's second query AGENT: answer to user's second query ${conversation USER:"<user prefix>" AGENT:"<agent prefix>" TURNS:<turn count>} : A parameterized version of the $conversation placeholder.
- It is specifically optimized for voice interactions with optimized latency. gemini-2.5-flash GA Gemini 2.5 flash gemini-2.5-flash-lite GA Gemini 2.5 flash lite gemini-2.0-flash-001 GA Gemini 2.0 flash gemini-2.0-flash-lite-001 GA Gemini 2.0 flash lite gemini-2.0-flash-lite-001-voice-mode GA Gemini 2.0 flash lite optimized for voice.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Project Location Environment User Session Context Builder Builder for projects/{project}/locations/{location}/agent/environments/{environment}/users/{user}/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.
- Project Location Conversation Model Evaluation Builder Builder for projects/{project}/locations/{location}/conversationModels/{conversation model}/evaluations/{evaluation}. com. google. cloud. dialogflow. v2.
- Project Environment User Session Context Builder Builder for projects/{project}/agent/environments/{environment}/users/{user}/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.
- Project Location Session Context Builder Builder for projects/{project}/locations/{location}/agent/sessions/{session}/contexts/{context}. com. google. cloud. dialogflow. v2.

