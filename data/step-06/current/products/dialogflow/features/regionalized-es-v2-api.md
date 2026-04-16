---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.454Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Regionalized ES V2 API"
feature_slug: "regionalized-es-v2-api"
latest_feature_date: "2021-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/CreateVersionOperationMetadata"
  - "https://docs.cloud.google.com/dialogflow/es/docs/best-practices"
keywords:
  - "regionalized"
  - "es"
  - "v2"
  - "dialogflow"
  - "supports"
  - "operation"
---

# Regionalized ES V2 API

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow ES V2 API supports regionalized operation.

## Extended Definition

Dialogflow ES V2 API supports regionalized operation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/CreateVersionOperationMetadata](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/CreateVersionOperationMetadata)
- [https://docs.cloud.google.com/dialogflow/es/docs/best-practices](https://docs.cloud.google.com/dialogflow/es/docs/best-practices)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Create Conversation Model Evaluation Operation Metadata Metadata for a ConversationModels.CreateConversationModelEvaluation operation. com. google. cloud. dialogflow. v2.
- Import Conversation Data Operation Response Response used for ConversationDatasets.ImportConversationData long running operation. com. google. cloud. dialogflow. v2.
- Clear Suggestion Feature Config Operation Metadata Metadata for a ConversationProfiles.ClearSuggestionFeatureConfig operation. com. google. cloud. dialogflow. v2.
- Set Suggestion Feature Config Operation Metadata Metadata for a ConversationProfiles.SetSuggestionFeatureConfig operation. com. google. cloud. dialogflow. v2.

### CreateVersionOperationMetadata \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/CreateVersionOperationMetadata](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/CreateVersionOperationMetadata)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback CreateVersionOperationMetadata Stay organized with collections Save and categorize content based on your preferences.
- JSON representation Metadata associated with the long running operation for Versions.CreateVersion .

### Service use best practices \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/best-practices](https://docs.cloud.google.com/dialogflow/es/docs/best-practices)
- Source ID: `site-iam-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Performance per operation The following table provides information about the typical performance of Dialogflow operations: Action Notes Intent detection (text) Fast operation Parameter detection (text) Fast operation Speech recognition (streaming) Data is processed and responses are returned as soon as possible.
- Performance This section outlines performance information for various operations within Dialogflow.
- Productionization Before running your agent in production, be sure to implement the following best practices: Use agent versions Reuse session clients Implement error handling with retries Enable audit logs Enable Data Access audit logs for Dialogflow API in your project.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Service use best practices Stay organized with collections Save and categorize content based on your preferences.

