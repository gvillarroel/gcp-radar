---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.649Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX generators"
feature_slug: "dialogflow-cx-generators"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient"
keywords:
  - "generators"
  - "gemini"
  - "flash"
  - "model"
---

# Dialogflow CX generators

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Generators now support the gemini-2.0-flash-001 model in multiple regions as a generally available feature; Dialogflow CX generators provide generative content capabilities within agents.

## Extended Definition

Generators now support the gemini-2.0-flash-001 model in multiple regions as a generally available feature; Dialogflow CX generators provide generative content capabilities within agents.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient)

## Supporting Pages

### Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- It is optimized for both voice and text with optimized latency gemini-2.5-flash GA Gemini 2.5 flash gemini-2.5-flash-lite GA Gemini 2.5 flash lite gemini-2.0-flash-001 GA Gemini 2.0 flash gemini-2.0-flash-lite-001 GA Gemini 2.0 flash lite All listed models are available in all supported languages and supported regions .
- It is specifically optimized for voice interactions with optimized latency. gemini-2.5-flash GA Gemini 2.5 flash gemini-2.5-flash-lite GA Gemini 2.5 flash lite gemini-2.0-flash-001 GA Gemini 2.0 flash gemini-2.0-flash-lite-001 GA Gemini 2.0 flash lite gemini-2.0-flash-lite-001-voice-mode GA Gemini 2.0 flash lite optimized for voice.
- Sources: $sources $end-user-metadata $conversation Human: $original-query AI: Select rewriter model Note: Providing a custom prompt might influence the quality of answers either positively or negatively.
- The following table contains the available options: Model Name Launch Stage Model Spec Default GA This is the recommended configuration and is subject to change over time.

### "Class ConversationModelsAsyncClient (2.47.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. conversation dataset path conversation dataset path ( project : str , location : str , conversation dataset : str ) - > str Returns a fully-qualified conversation dataset string. conversation model evaluation path conversation model evaluation path ( project : str , conversation model : str , evaluation : str ) - > str Returns a fully-qualified conversation model evaluation string. conversation model path conversation model path ( project : str , location : str , conversation model : str ) - > str Returns a fully-qualified conversation model string. create conversation model create conversation model ( request : typing .
- CreateConversationModelEvaluationRequest ( parent="parent value", ) Make the request operation = client. create conversation model evaluation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.CreateConversationModelEvaluationRequest , dict]] The request object.
- CreateConversationModelRequest ( conversation model=conversation model, ) Make the request operation = client. create conversation model (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.CreateConversationModelRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample create conversation model evaluation(): Create a client client = dialogflow v2.

### "Class ConversationModelsClient (2.47.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsClient)
- Source ID: `site-python-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. conversation dataset path conversation dataset path ( project : str , location : str , conversation dataset : str ) - > str Returns a fully-qualified conversation dataset string. conversation model evaluation path conversation model evaluation path ( project : str , conversation model : str , evaluation : str ) - > str Returns a fully-qualified conversation model evaluation string. conversation model path conversation model path ( project : str , location : str , conversation model : str ) - > str Returns a fully-qualified conversation model string. create conversation model create conversation model ( request : typing .
- CreateConversationModelEvaluationRequest ( parent="parent value", ) Make the request operation = client. create conversation model evaluation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dialogflow v2.types.CreateConversationModelEvaluationRequest , dict] The request object.
- 2.47.0 (latest) 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.2 2.40.0 2.39.1 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.30.2 2.29.0 2.28.3 2.27.0 2.26.0 2.25.0 2.24.1 2.23.3 2.22.0 2.21.0 2.20.0 2.19.1 2.18.0 2.17.0 2.16.1 2.15.2 2.14.1 2.13.0 2.12.0 2.11.0 2.10.0 2.9.1 2.8.1 2.7.1 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.2 2.0.0 1.1.3 1.0.0 0.8.0 0.7.2 ConversationModelsClient ( , credentials : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample create conversation model evaluation(): Create a client client = dialogflow v2.

