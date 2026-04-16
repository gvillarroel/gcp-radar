---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.191Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Approximate nearest neighbor (ANN) distance functions in GoogleSQL"
feature_slug: "approximate-nearest-neighbor-ann-distance-functions-in-googlesql"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function"
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
keywords:
  - "approximate"
  - "neighbor"
  - "nearest"
  - "distance"
  - "functions"
  - "googlesql"
---

# Approximate nearest neighbor (ANN) distance functions in GoogleSQL

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner GA support for ANN distance functions in GoogleSQL was introduced for similarity and nearest-neighbor workloads.

## Extended Definition

Spanner GA support for ANN distance functions in GoogleSQL was introduced for similarity and nearest-neighbor workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- [https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function](https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function)
- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)

## Supporting Pages

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cymbal Phoenix See and be seen 87 0.525101413779242 Lights with the Phoenix bike lights... ------------------+--------------------+----------------+-------------------- / Scale vector search to use approximate nearest neighbors The previous vector search example uses exact, K-nearest neighbors (KNN) vector search .
- To scale and use ANN vector search in Spanner, do the following: Create a vector index Modify your query to use an ANN distance function Create a vector index Spanner accelerates ANN vector searches by using a specialized vector index that leverages Google Research's Scalable Nearest Neighbor (ScaNN) .
- Approximate nearest neighbors (ANN) vector search becomes useful in these situations.
- Learn more about Spanner's approximate nearest neighbor (ANN) feature .

### "Choose among vector distance functions to measure vector embeddings similarity\

- URL: [https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function](https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Learn more about the GoogleSQL COSINE DISTANCE() , EUCLIDEAN DISTANCE() , and DOT PRODUCT() functions.
- Home Documentation Databases Spanner Guides Send feedback Choose among vector distance functions to measure vector embeddings similarity Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to choose among the vector distance functions provided in Spanner to measure similarity between vector embeddings.
- After you've generated embeddings from your Spanner data, you can perform a similarity search using vector distance functions.

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Custom tuned text embedding models aren't supported with the GoogleSQL ML.PREDICT and PostgreSQL spanner.ML PREDICT ROW functions.
- What's next Learn how to perform a similarity vector search by finding the K-nearest neighbors .
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description )))) FROM Products LIMIT 10 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update the source table to include additional columns to store the embeddings Next, update the source table schema to include an additional column of the data type ARRAY<FLOAT32> to store the generated embeddings: GoogleSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME ARRAY<FLOAT32> ; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings PostgreSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME real []; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings For example, using the products table example, run: GoogleSQL ALTER TABLE Products ADD COLUMN desc embed ARRAY<FLOAT32> ; PostgreSQL ALTER TABLE Products ADD COLUMN desc embed real []; You can add another column to manage the version of the embedding model.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , DATA COLUMN NAME ))) ) / @ remote udf max rows per rpc= MAX ROWS / - > 'predictions' - > 0 - > 'embeddings' - > 'values' ), EMBEDDING VERSION COLUMN = MODEL VERSION WHERE FILTER CONDITION ; Replace the following: TABLE NAME : the name of the table with the textual data EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings DATA COLUMN NAME : the name of the column with the textual data PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI embedding model MODEL VERSION : the version of the Vertex AI embedding model MAX ROWS : the maximum number of rows per RPC EMBEDDING VERSION COLUMN : the column that manages the version of the text embedding model used to backfill your embeddings FILTER CONDITION : a partitionable filter condition that you want to apply An example backfill query for the products table: GoogleSQL UPDATE products SET products . desc embed = ( SELECT embeddings . values FROM SAFE .

