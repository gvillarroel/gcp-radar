---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.100Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Cloud Bigtable online serving"
feature_slug: "cloud-bigtable-online-serving"
latest_feature_date: "2023-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/online-serving-types"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview"
keywords:
  - "bigtable"
  - "online"
  - "serving"
  - "provides"
  - "feature"
  - "one"
  - "more"
  - "bigquery"
---

# Cloud Bigtable online serving

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Cloud Bigtable online serving provides online feature serving from one or more BigQuery sources via online store instances and feature views.

## Extended Definition

Cloud Bigtable online serving provides online feature serving from one or more BigQuery sources via online store instances and feature views.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/online-serving-types](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/online-serving-types)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)

## Supporting Pages

### Online serving types \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/online-serving-types](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/online-serving-types)
- Source ID: `site-docs-reference-3`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to use continuous data sync to sync data from the BigQuery data source to your feature views in near real-time, use Bigtable online serving.
- Vertex AI Feature Store offers the following types of online serving that you can use to serve features for online predictions: Bigtable online serving Optimized online serving ( Deprecated ), where you can choose one of the following configurations: Optimized online serving with public endpoint Optimized online serving with Private Service Connect endpoint Bigtable online serving Bigtable online serving is suitable for large data volumes (in the order of terabytes of data) with high data durability.
- Bigtable online serving supports both scheduled and continuous data sync for its feature views.
- Fetch feature values using Bigtable online serving.

### Create an online store instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore)
- Source ID: `site-docs-reference-3`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores?feature online store id= FEATUREONLINESTORE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureOnlineStoreOperationMetadata", "genericMetadata": { "createTime": "2023-09-18T17:49:23.847496Z", "updateTime": "2023-09-18T17:49:23.847496Z" } } } Create an online store that uses a CMEK Use the following steps to create an online store instance for Bigtable online serving that's encrypted with a CMEK.
- For more information, see the Python API reference documentation . from google.cloud import aiplatform from vertexai.resources.preview import feature store def create bigtable feature online store sample ( project : str , location : str , feature online store id : str , ): aiplatform . init ( project = project , location = location ) fos = feature store .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores?feature online store id= FEATUREONLINESTORE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureOnlineStoreOperationMetadata", "genericMetadata": { "createTime": "2023-09-18T17:49:23.847496Z", "updateTime": "2023-09-18T17:49:23.847496Z" } } } Create an online store for Optimized online serving with a Private Service Connect endpoint Use the following samples to create an online store for Optimized online serving with Private Service Connect .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores?feature online store id= FEATUREONLINESTORE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureOnlineStoreOperationMetadata", "genericMetadata": { "createTime": "2023-09-18T17:49:23.847496Z", "updateTime": "2023-09-18T17:49:23.847496Z" } } } Create an online store for Optimized online serving Vertex AI Feature Store Optimized online serving is deprecated .

### About Vertex AI Feature Store \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- Source ID: `site-docs-reference-3`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Online feature serving and fetching of BigQuery data with Vertex AI Feature Store Bigtable online serving In this tutorial, you learn how to use Bigtable online serving in Vertex AI Feature Store for online serving and fetching of feature values in BigQuery.
- Online serving Vertex AI Feature Store provides the following types of online serving for real-time online predictions: Bigtable online serving is useful for serving large data volumes (terabytes of data).
- Before you set up Feature Registry or online serving resources, you must store your feature data in one or more BigQuery tables or views.
- Vertex AI Feature Store data model and resources This section explains the data models and resources associated with the following aspects of Vertex AI Feature Store: Data source preparation in BigQuery Feature Registry setup Online serving setup Online serving Data source preparation in BigQuery During online serving, Vertex AI Feature Store uses feature data from BigQuery data sources.

