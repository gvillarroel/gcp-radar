---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.103Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Feature view synchronization"
feature_slug: "feature-view-synchronization"
latest_feature_date: "2023-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/delete-feature-values"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview"
keywords:
  - "feature"
  - "view"
  - "synchronization"
  - "enables"
  - "syncing"
  - "into"
  - "within"
  - "online"
---

# Feature view synchronization

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Feature view synchronization enables syncing data into a feature view within an online store.

## Extended Definition

Feature view synchronization enables syncing data into a feature view within an online store.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/delete-feature-values](https://docs.cloud.google.com/vertex-ai/docs/featurestore/delete-feature-values)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)

## Supporting Pages

### Create a feature view instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- Source ID: `site-docs-reference-3`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews?feature view id= FEATUREVIEW NAME Request JSON body: { "feature registry source": { "feature groups": [ { "feature group id": " FEATUREGROUP NAME A ", "feature ids": [ " FEATURE ID A1 ", " FEATURE ID A2 " ] }, { "feature group id": " FEATUREGROUP NAME B ", "feature ids": [ " FEATURE ID B1 ", " FEATURE ID B2 " ] } ] }, "sync config": { SYNC CONFIG }, "service agent type": " SERVICE AGENT TYPE ", } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews?feature view id= FEATUREVIEW NAME Request JSON body: { "feature registry source": { "feature groups": [ { "feature group id": " FEATUREGROUP NAME A ", "feature ids": [ " FEATURE ID A1 ", " FEATURE ID A2 " ] }, { "feature group id": " FEATUREGROUP NAME B ", "feature ids": [ " FEATURE ID B1 ", " FEATURE ID B2 " ] } ] }, "sync config": { SYNC CONFIG } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- If a feature view is configured to have a dedicated service account, you can view the service account email address in either of the following ways: Retrieve a list of all feature views within the online store instance by using the featureViews.list method.
- You can configure vector retrieval for a feature view within an online store created for Optimized online serving by using the FeatureView.index config parameter.

### Delete feature values \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/delete-feature-values](https://docs.cloud.google.com/vertex-ai/docs/featurestore/delete-feature-values)
- Source ID: `site-docs-reference-3`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE :deleteFeatureValues Request JSON body: { "selectTimeRangeAndFeature": { "timeRange": { "startTime": " START TIME ", "endTime": " END TIME " }, "featureSelector": { "idMatcher": { "ids": [ " FEATURE ID ", ...] } }, "skipOnlineStorageDelete": SKIP ONLINE STORAGE DELETE } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- To learn more, run the "Example Feature Store workflow with sample data" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub You can delete feature values from an entity type in the following ways: Delete feature values from specified entities Delete feature values from specified features within a time range Delete feature values from specified entities You can delete feature values from multiple entities within an entity type.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE :deleteFeatureValues" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/571445526053/locations/us-central1/operations/7688824614775947264", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeleteFeatureValuesOperationMetadata", "genericMetadata": { "createTime": "2022-05-09T16:59:38.128375Z", "updateTime": "2022-05-09T16:59:38.128375Z", "state": "RUNNING", "worksOn": [ "projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE ID " ] } } } View request status To check the status of the POST request, send the following GET request.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE :deleteFeatureValues" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/571445526053/locations/us-central1/operations/7688824614775947264", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeleteFeatureValuesOperationMetadata", "genericMetadata": { "createTime": "2022-05-09T16:59:38.128375Z", "updateTime": "2022-05-09T16:59:38.128375Z", "state": "RUNNING", "worksOn": [ "projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE ID " ] } } } View request status To check the status of the POST request, send the following GET request.

### About Vertex AI Feature Store \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- Source ID: `site-docs-reference-3`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- For information about how to create feature view instances within an online store, see Create a feature view .
- An offline store also contains the latest feature values, which you can serve for online inferences. online store In feature management, an online store is a storage facility for the latest feature values to be served for online inferences. feature view A feature view is a logical collection of features materialized from a BigQuery data source to an online store instance.
- Open in Colab Open in Colab Enterprise View on GitHub Online feature serving and vector retrieval of BigQuery data with Vertex AI Feature Store In this tutorial, you learn how to use Vertex AI Feature Store for online serving and vector retrieval of feature values in BigQuery.
- Open in Colab Open in Colab Enterprise View on GitHub Configure IAM Policy in Vertex AI Feature Store In this tutorial, you learn how to configure an IAM policy to control access to resources and data stored within Vertex AI Feature Store.

