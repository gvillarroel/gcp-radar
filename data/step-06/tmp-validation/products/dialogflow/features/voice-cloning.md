---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.642Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Voice cloning"
feature_slug: "voice-cloning"
latest_feature_date: "2025-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient"
keywords:
  - "personalized"
  - "cloning"
  - "create"
  - "voice"
  - "models"
---

# Voice cloning

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

You can create personalized voice models with voice cloning.

## Extended Definition

You can create personalized voice models with voice cloning.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- The custom voice name must follow the following pattern: projects/ PROJECT ID /locations/ LOCATION /models/ MODEL NAME .
- The custom voice name must follow the following pattern: projects/ PROJECT ID /locations/ LOCATION /models/ MODEL NAME .
- You can also use voice cloning .
- Previous arrow back Zip code collection Next Speech models arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Create Conversation Model Evaluation Operation Metadata Metadata for a ConversationModels.CreateConversationModelEvaluation operation. com. google. cloud. dialogflow. v2.
- Create Conversation Model Evaluation Request The request message for ConversationModels.CreateConversationModelEvaluation com. google. cloud. dialogflow. v2.
- Create Conversation Model Operation Metadata Metadata for a ConversationModels.CreateConversationModel operation. com. google. cloud. dialogflow. v2.
- Create Conversation Model Request The request message for ConversationModels.CreateConversationModel com. google. cloud. dialogflow. v2.

### "Class ConversationModelsAsyncClient (2.47.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.ConversationModelsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample list conversation models(): Create a client client = dialogflow v2.
- Returns Type Description ConversationModelsAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description ConversationModelsAsyncClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.
- The request message for ConversationModels.CreateConversationModelEvaluation parent str Required.

