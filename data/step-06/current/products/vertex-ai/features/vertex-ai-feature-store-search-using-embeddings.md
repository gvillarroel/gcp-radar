---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.080Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Feature Store search using embeddings"
feature_slug: "vertex-ai-feature-store-search-using-embeddings"
latest_feature_date: "2024-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview"
keywords:
  - "vertex"
  - "ai"
  - "feature"
  - "store"
  - "search"
  - "embeddings"
  - "supports"
  - "real"
---

# Vertex AI Feature Store search using embeddings

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Feature Store supports real-time vector-similarity search using embeddings to retrieve semantically related features.

## Extended Definition

Vertex AI Feature Store supports real-time vector-similarity search using embeddings to retrieve semantically related features.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)

## Supporting Pages

### Search using embeddings \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search)
- Source ID: `site-docs-reference-3`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search nearest neighbor matches using a public endpoint If you've configured your online store instance to serve feature values using Optimized online serving from a public endpoint, you must do the following to retrieve approximate nearest neighbor matches: Retrieve the public endpoint domain name for the online store Retrieve nearest neighbor matches of an embedding or entity Retrieve the public endpoint domain name for the online store When you create an online store instance for Optimized online serving, Vertex AI Feature Store generates a public endpoint domain name for the online store.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// PUBLIC ENDPOINT DOMAIN NAME /v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews/ FEATUREVIEW NAME :searchNearestEntities" Select-Object -Expand Content You should receive a JSON response similar to the following: { "nearestNeighbors": { "neighbors": [ { "entityId": "305281", "distance": -41.115459442138672 }, { "entityId": "80280", "distance": -38.703567504882812 }, { "entityId": "80280", "distance":-38.703567504882812 }, { "entityId": "903779", "distance": -38.214759826660156 }, { "entityId": "1008145", "distance": -36.271354675292969 }, { "entityId": "606431", "distance": -34.791431427001953 } ] } } Search nearest neighbor matches using a Private Service Connect endpoint If you've configured your online store instance to serve feature values using Optimized online serving from a Private Service Connect endpoint, then you must do the following to retrieve approximate nearest neighbor matches: Retrieve the service attachment string for the online store.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// PUBLIC ENDPOINT DOMAIN NAME /v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews/ FEATUREVIEW NAME :searchNearestEntities" Select-Object -Expand Content You should receive a JSON response similar to the following: { "nearestNeighbors": { "neighbors": [ { "entityId": "305281", "distance": -41.115459442138672 }, { "entityId": "80280", "distance": -38.703567504882812 }, { "entityId": "80280", "distance":-38.703567504882812 }, { "entityId": "903779", "distance": -38.214759826660156 }, { "entityId": "1008145", "distance": -36.271354675292969 }, { "entityId": "606431", "distance": -34.791431427001953 } ] } } Retrieve approximate nearest neighbors of an entity Use the following sample to search for semantically related entities by specifying an entity ID while using a public endpoint.
- HTTP method and URL: POST https:// PUBLIC ENDPOINT DOMAIN NAME /v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews/ FEATUREVIEW NAME :searchNearestEntities Request JSON body: { "query": { "embedding": { "value": EMBEDDING }, "neighbor count": NEIGHBOR COUNT }, "return full entity": RETURN FULL ENTITY } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### About Vertex AI Feature Store \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- Source ID: `site-docs-reference-3`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open in Colab Open in Colab Enterprise View on GitHub Build a GenAI RAG application with Vertex AI Feature Store and BigQuery In this tutorial, you learn how to build a low-latency vector search system for your Gen AI application using BigQuery vector search and Vertex AI Feature Store.
- Using the embedding management capabilities of Vertex AI Feature Store, you can perform vector similarity searches to retrieve entities that are approximate nearest neighbors for a specified entity or embedding value.
- Online serving Vertex AI Feature Store provides the following types of online serving for real-time online predictions: Bigtable online serving is useful for serving large data volumes (terabytes of data).
- To use embedding management in Vertex AI Feature Store, you need to do the following: Set up the BigQuery data source to support embeddings by including the embedding column.

### Create a feature view instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- Source ID: `site-docs-reference-3`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about how to search for approximate nearest neighbors using embeddings in Vertex AI Feature Store, see Search using embeddings .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews?feature view id= FEATUREVIEW NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews/ FEATUREVIEW NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureViewOperationMetadata", "genericMetadata": { "createTime": "2023-09-15T02:11:29.458820Z", "updateTime": "2023-09-15T02:11:29.458820Z" } } } Create a feature view that uses the default service account and supports embeddings Use the following samples to create a feature view with embedding support by directly associating a BigQuery data source and with the default service account configuration.
- Vertex AI Feature Store supports the following types of data sync: Scheduled data sync : You can specify the schedule or frequency for the data sync.
- For more information, see the Python API reference documentation . from google.cloud import aiplatform from vertexai.resources.preview import feature store from typing import List def create feature view from bq source with embedding management ( project : str , location : str , existing feature online store id : str , feature view id : str , bq table uri : str , entity id columns : List [ str ], embedding column : str , embedding dimensions : int , ): aiplatform . init ( project = project , location = location ) fos = feature store .

