---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.258Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner integration with Vertex AI Vector Search"
feature_slug: "spanner-integration-with-vertex-ai-vector-search"
latest_feature_date: "2023-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
keywords:
  - "vertex"
  - "integration"
  - "vector"
  - "supports"
  - "search"
---

# Spanner integration with Vertex AI Vector Search

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports an integration workflow with Vertex AI Vector Search to enable vector similarity search on data stored in Spanner.

## Extended Definition

Spanner now supports an integration workflow with Vertex AI Vector Search to enable vector similarity search on data stored in Spanner.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function](https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function)
- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)

## Supporting Pages

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL CREATE TABLE Products ( product id INT64 NOT NULL , name STRING ( MAX ), description STRING ( MAX ) ) PRIMARY KEY ( product id ); PostgreSQL CREATE TABLE Products ( product id INT8 NOT NULL , name TEXT , description TEXT , PRIMARY KEY ( product id ) ); Your goal is to generate vector embeddings for the description column in this table to find similar items to recommend to customers to improve their shopping experience using vector search .
- This document explains how to generate and backfill vector embeddings in bulk for textual data ( STRING or JSON ) that is stored in Spanner using SQL and the Vertex AI text embedding models .
- What's next Learn how to perform a similarity vector search by finding the K-nearest neighbors .
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description )))) FROM Products LIMIT 10 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update the source table to include additional columns to store the embeddings Next, update the source table schema to include an additional column of the data type ARRAY<FLOAT32> to store the generated embeddings: GoogleSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME ARRAY<FLOAT32> ; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings PostgreSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME real []; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings For example, using the products table example, run: GoogleSQL ALTER TABLE Products ADD COLUMN desc embed ARRAY<FLOAT32> ; PostgreSQL ALTER TABLE Products ADD COLUMN desc embed real []; You can add another column to manage the version of the embedding model.

### "Choose among vector distance functions to measure vector embeddings similarity\

- URL: [https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function](https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Learn how to export embeddings to Vertex AI Vector Search .
- Normalized data If you have a dataset where all vector embeddings are normalized, then all three functions provide the same semantic search results.
- After you've generated embeddings from your Spanner data, you can perform a similarity search using vector distance functions.
- What's next Learn more about how to perform a vector search by finding the k-nearest neighbor .

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- The following topics help you learn how to: Create an Google Cloud project Create a Spanner instance Create a database Create an embedding model Load data into Spanner Generate embeddings for data Perform KNN vector similarity search Scale vector search with a vector index Clean up resources To learn about Spanner pricing details, see Spanner pricing .
- Cymbal Phoenix See and be seen 87 0.525101413779242 Lights with the Phoenix bike lights... ------------------+--------------------+----------------+-------------------- / Scale vector search to use approximate nearest neighbors The previous vector search example uses exact, K-nearest neighbors (KNN) vector search .
- To scale and use ANN vector search in Spanner, do the following: Create a vector index Modify your query to use an ANN distance function Create a vector index Spanner accelerates ANN vector searches by using a specialized vector index that leverages Google Research's Scalable Nearest Neighbor (ScaNN) .
- In a new tab in Spanner Studio , copy and paste the following query to generate the prompt embedding and perform vector search: -- Generate the prompt embedding WITH embedding AS ( SELECT embeddings . values FROM ML .

