---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.285Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Custom voice"
feature_slug: "custom-voice"
latest_feature_date: "2025-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesClient"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "custom"
  - "voice"
  - "conversation"
  - "profiles"
  - "now"
  - "let"
  - "you"
  - "specify"
---

# Custom voice

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Conversation profiles now let you specify a custom voice in the console.

## Extended Definition

Conversation profiles now let you specify a custom voice in the console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesClient)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### "Class ConversationProfilesAsyncClient (2.47.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesAsyncClient)
- Source ID: `site-python-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample list conversation profiles(): Create a client client = dialogflow v2.
- 2.47.0 (latest) 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.2 2.40.0 2.39.1 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.30.2 2.29.0 2.28.3 2.27.0 2.26.0 2.25.0 2.24.1 2.23.3 2.22.0 2.21.0 2.20.0 2.19.1 2.18.0 2.17.0 2.16.1 2.15.2 2.14.1 2.13.0 2.12.0 2.11.0 2.10.0 2.9.1 2.8.1 2.7.1 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.2 2.0.0 1.1.3 1.0.0 0.8.0 0.7.2 ConversationProfilesAsyncClient ( , credentials : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample create conversation profile(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample delete conversation profile(): Create a client client = dialogflow v2.

### "Class ConversationProfilesClient (2.47.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesClient)
- Source ID: `site-python-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample list conversation profiles(): Create a client client = dialogflow v2.
- 2.47.0 (latest) 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.2 2.40.0 2.39.1 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.30.2 2.29.0 2.28.3 2.27.0 2.26.0 2.25.0 2.24.1 2.23.3 2.22.0 2.21.0 2.20.0 2.19.1 2.18.0 2.17.0 2.16.1 2.15.2 2.14.1 2.13.0 2.12.0 2.11.0 2.10.0 2.9.1 2.8.1 2.7.1 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.2 2.0.0 1.1.3 1.0.0 0.8.0 0.7.2 ConversationProfilesClient ( , credentials : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample create conversation profile(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample delete conversation profile(): Create a client client = dialogflow v2.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Specify a Cloud Storage URI to store and playback voice conversations When conversation history is enabled, you can provide a Cloud Storage URI, and conversation audio will be saved in this location.
- You may enable Custom voice for your agent by selecting the custom voice option from the voice selection dropbox and specifying the custom voice name in the corresponding field.
- You may enable Custom voice for your agent by selecting the custom voice option from the voice name dropbox and specifying the custom voice name in the corresponding field.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.

