---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.230Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner vector embedding generation from text via partitioned DML"
feature_slug: "cloud-spanner-vector-embedding-generation-from-text-via-partitioned-dml"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function"
keywords:
  - "embedding"
  - "generation"
  - "partitioned"
  - "vector"
  - "text"
---

# Cloud Spanner vector embedding generation from text via partitioned DML

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner can generate and backfill vector embeddings for STRING or JSON textual data in bulk using GoogleSQL partitioned DML with the Vertex AI textembedding-gecko model.

## Extended Definition

Cloud Spanner can generate and backfill vector embeddings for STRING or JSON textual data in bulk using GoogleSQL partitioned DML with the Vertex AI textembedding-gecko model.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)
- [https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function](https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function)

## Supporting Pages

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases Spanner Guides Send feedback Generate vector embeddings for textual data in bulk using partitioned DML Stay organized with collections Save and categorize content based on your preferences.
- GoogleSQL CREATE TABLE Products ( product id INT64 NOT NULL , name STRING ( MAX ), description STRING ( MAX ) ) PRIMARY KEY ( product id ); PostgreSQL CREATE TABLE Products ( product id INT8 NOT NULL , name TEXT , description TEXT , PRIMARY KEY ( product id ) ); Your goal is to generate vector embeddings for the description column in this table to find similar items to recommend to customers to improve their shopping experience using vector search .
- This is because the embedding vectors generated for the same piece of text might differ depending on the version of the model that you use; which is why you want to avoid using different model versions to generate embeddings in the same dataset.
- This document explains how to generate and backfill vector embeddings in bulk for textual data ( STRING or JSON ) that is stored in Spanner using SQL and the Vertex AI text embedding models .

### Get Vertex AI text embeddings \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , $ 1 ))) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ) WHERE id = $ 2 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model What's next Learn how to use Vertex AI Vector Search to search for semantically similar items.
- When you create text embeddings, you get vector representations of natural text as arrays of floating point numbers.
- A text embedding is a vector representation of text data, and they are used in many ways to find similar items.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , $ 1 , 'task type' , 'RETRIEVAL QUERY' ) ), 'parameters' , JSONB BUILD OBJECT ( 'outputDimensionality' , 768 ) ) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ) ) AS distance FROM Products p ORDER BY distance LIMIT 5 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Store text embeddings After generating the embeddings in a read-only transaction, store them in Spanner so they can be managed with your operational data.

### "Choose among vector distance functions to measure vector embeddings similarity\

- URL: [https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function](https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 1 - \(\frac{a^T b}{ a \cdot b }\) Decreases Euclidean distance Measures the straight line distance between two vectors. \(\sqrt{(a 1-b 1)^2+(a 2-b 2)^2+...+(a N-b N)^2}\) Decreases Choose a similarity measure Depending on whether or not all your vector embeddings are normalized, you can determine which similarity measure to use to find similarity.
- Non-normalized data If you have a dataset where vector embeddings aren't normalized, then it's not mathematically correct to use DOT PRODUCT() as a distance function because dot product as a function doesn't measure distance.
- Home Documentation Databases Spanner Guides Send feedback Choose among vector distance functions to measure vector embeddings similarity Stay organized with collections Save and categorize content based on your preferences.
- In addition, if you know which distance function your model was trained with, use that distance function to measure similarity between your vector embeddings.

