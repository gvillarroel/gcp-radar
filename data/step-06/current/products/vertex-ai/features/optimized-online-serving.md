---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.103Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Optimized online serving"
feature_slug: "optimized-online-serving"
latest_feature_date: "2023-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/online-serving-types"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore"
keywords:
  - "optimized"
  - "online"
  - "serving"
  - "enables"
  - "feature"
  - "ultra"
  - "low"
  - "latency"
---

# Optimized online serving

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Optimized online serving enables feature serving with ultra-low latency.

## Extended Definition

Optimized online serving enables feature serving with ultra-low latency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/online-serving-types](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/online-serving-types)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore)

## Supporting Pages

### Online serving types \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/online-serving-types](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/online-serving-types)
- Source ID: `site-docs-reference-3`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertex AI Feature Store offers the following types of online serving that you can use to serve features for online predictions: Bigtable online serving Optimized online serving ( Deprecated ), where you can choose one of the following configurations: Optimized online serving with public endpoint Optimized online serving with Private Service Connect endpoint Bigtable online serving Bigtable online serving is suitable for large data volumes (in the order of terabytes of data) with high data durability.
- Optimized online serving with public endpoint By default, an online store created for Optimized online serving lets you serve features with a public endpoint.
- With Optimized online serving, you can serve feature values from either a public endpoint or a Private Service Connect endpoint.
- Optimized online serving supports scheduled data sync, but doesn't support continuous data sync for feature views.

### About Vertex AI Feature Store \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- Source ID: `site-docs-reference-3`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optimized online serving ( Deprecated ) lets you online serve features at ultra-low latencies.
- Embedding management and vector retrieval Vertex AI Feature Store Optimized online serving is deprecated .
- Optimized online serving in Vertex AI Feature Store supports embedding management.
- Vertex AI Feature Store data model and resources This section explains the data models and resources associated with the following aspects of Vertex AI Feature Store: Data source preparation in BigQuery Feature Registry setup Online serving setup Online serving Data source preparation in BigQuery During online serving, Vertex AI Feature Store uses feature data from BigQuery data sources.

### Create an online store instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore)
- Source ID: `site-docs-reference-3`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores?feature online store id= FEATUREONLINESTORE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureOnlineStoreOperationMetadata", "genericMetadata": { "createTime": "2023-09-18T17:49:23.847496Z", "updateTime": "2023-09-18T17:49:23.847496Z" } } } Create an online store for Optimized online serving with a Private Service Connect endpoint Use the following samples to create an online store for Optimized online serving with Private Service Connect .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores?feature online store id= FEATUREONLINESTORE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureOnlineStoreOperationMetadata", "genericMetadata": { "createTime": "2023-09-18T17:49:23.847496Z", "updateTime": "2023-09-18T17:49:23.847496Z" } } } Create an online store for Optimized online serving Vertex AI Feature Store Optimized online serving is deprecated .
- HTTP method and URL: POST https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores?feature online store id= FEATUREONLINESTORE NAME Request JSON body: { "optimized": {}, "dedicated serving endpoint": { "private service connect config": { "enable private service connect": true, "project allowlist": [" PROJECT NAMES "] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- When you use Optimized online serving, you can configure the online store to serve features from either a public endpoint or a dedicated Private Service Connect endpoint.

