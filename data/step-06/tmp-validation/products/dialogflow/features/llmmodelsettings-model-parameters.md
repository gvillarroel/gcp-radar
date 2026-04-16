---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.626Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "LlmModelSettings model parameters"
feature_slug: "llmmodelsettings-model-parameters"
latest_feature_date: "2025-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient"
keywords:
  - "llmmodelsettings"
  - "temperature"
  - "v3beta1"
  - "exposes"
  - "parameters"
  - "input"
  - "model"
---

# LlmModelSettings model parameters

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

The v3beta1 API now exposes temperature, input_token_limit, and output_token_limit in LlmModelSettings so you can tune the model per playbook.

## Extended Definition

The v3beta1 API now exposes temperature, input_token_limit, and output_token_limit in LlmModelSettings so you can tune the model per playbook.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging , by default the session parameter is true .
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging .
- Based on this data, it builds a model for making decisions about which intent should be matched to an end-user input.
- Based on this data, it builds a model for making decisions about which intent should be matched to an end-user input.

### "Class ConversationModelsAsyncClient (2.47.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CreateConversationModelEvaluationRequest ( parent="parent value", ) Make the request operation = client. create conversation model evaluation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.CreateConversationModelEvaluationRequest , dict]] The request object.
- CreateConversationModelRequest ( conversation model=conversation model, ) Make the request operation = client. create conversation model (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.CreateConversationModelRequest , dict]] The request object.
- UndeployConversationModelRequest ( name="name value", ) Make the request operation = client. undeploy conversation model (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.UndeployConversationModelRequest , dict]] The request object.
- DeleteConversationModelRequest ( name="name value", ) Make the request operation = client. delete conversation model (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.DeleteConversationModelRequest , dict]] The request object.

### "Class ConversationModelsClient (2.47.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient)
- Source ID: `site-python-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CreateConversationModelEvaluationRequest ( parent="parent value", ) Make the request operation = client. create conversation model evaluation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.CreateConversationModelEvaluationRequest , dict] The request object.
- CreateConversationModelRequest ( conversation model=conversation model, ) Make the request operation = client. create conversation model (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.CreateConversationModelRequest , dict] The request object.
- UndeployConversationModelRequest ( name="name value", ) Make the request operation = client. undeploy conversation model (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.UndeployConversationModelRequest , dict] The request object.
- DeleteConversationModelRequest ( name="name value", ) Make the request operation = client. delete conversation model (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.DeleteConversationModelRequest , dict] The request object.

