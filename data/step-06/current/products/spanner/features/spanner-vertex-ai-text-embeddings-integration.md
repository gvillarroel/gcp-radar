---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.264Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Vertex AI text embeddings integration"
feature_slug: "spanner-vertex-ai-text-embeddings-integration"
latest_feature_date: "2023-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
keywords:
  - "embeddings"
  - "generating"
  - "vertex"
  - "integration"
  - "text"
  - "added"
---

# Spanner Vertex AI text embeddings integration

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for generating text embeddings using Vertex AI Generative AI through its Vertex AI integration.

## Extended Definition

Spanner added support for generating text embeddings using Vertex AI Generative AI through its Vertex AI integration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)
- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)

## Supporting Pages

### Get Vertex AI text embeddings \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , $ 1 , 'task type' , 'RETRIEVAL QUERY' ) ), 'parameters' , JSONB BUILD OBJECT ( 'outputDimensionality' , 768 ) ) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ) ) AS distance FROM Products p ORDER BY distance LIMIT 5 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Store text embeddings After generating the embeddings in a read-only transaction, store them in Spanner so they can be managed with your operational data.
- To register the Vertex AI text embedding model in a Spanner database, execute the following DDL statement : CREATE MODEL MODEL NAME INPUT ( content STRING ( MAX ), -- Optional: For models that support specifying task type. task type STRING ( MAX ), ) OUTPUT ( embeddings STRUCT < statistics STRUCT<truncated BOOL , token count FLOAT64 > , values ARRAY<FLOAT64> > ) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' ); Replace the following: MODEL NAME : the name of the Vertex AI text embedding model PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint Spanner grants appropriate permissions automatically.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description )))) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' FROM Products ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model To specify task type and output dimensions : UPDATE Products p SET description embedding = spanner . float64 array ( spanner .
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , @ Description ))) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' )); Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update text embeddings To update your embeddings or to ingest data in realtime, use the UPDATE ( GoogleSQL and PostgreSQL ) statement.

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description )))) FROM Products LIMIT 10 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update the source table to include additional columns to store the embeddings Next, update the source table schema to include an additional column of the data type ARRAY<FLOAT32> to store the generated embeddings: GoogleSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME ARRAY<FLOAT32> ; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings PostgreSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME real []; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings For example, using the products table example, run: GoogleSQL ALTER TABLE Products ADD COLUMN desc embed ARRAY<FLOAT32> ; PostgreSQL ALTER TABLE Products ADD COLUMN desc embed real []; You can add another column to manage the version of the embedding model.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , DATA COLUMN NAME ))) ) / @ remote udf max rows per rpc= MAX ROWS / - > 'predictions' - > 0 - > 'embeddings' - > 'values' ), EMBEDDING VERSION COLUMN = MODEL VERSION WHERE FILTER CONDITION ; Replace the following: TABLE NAME : the name of the table with the textual data EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings DATA COLUMN NAME : the name of the column with the textual data PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI embedding model MODEL VERSION : the version of the Vertex AI embedding model MAX ROWS : the maximum number of rows per RPC EMBEDDING VERSION COLUMN : the column that manages the version of the text embedding model used to backfill your embeddings FILTER CONDITION : a partitionable filter condition that you want to apply An example backfill query for the products table: GoogleSQL UPDATE products SET products . desc embed = ( SELECT embeddings . values FROM SAFE .
- EMBEDDING VERSION COLUMN = MODEL VERSION WHERE FILTER CONDITION ; Replace the following: TABLE NAME : the name of the table with the textual data EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings DATA COLUMN NAME : the name of the column with the textual data MODEL NAME : the name of the Vertex AI embedding model MAX ROWS : the maximum number of rows per RPC EMBEDDING VERSION COLUMN : the column that manages the version of the embedding model used to backfill your embeddings MODEL VERSION : the version of the text embedding model FILTER CONDITION : a partitionable filter condition that you want to apply Using SAFE.ML.PREDICT returns NULL for failed requests.
- Register an embedding model GoogleSQL Register a text embedding model with the Vertex AI model endpoint in your Spanner database: CREATE MODEL MODEL NAME INPUT ( content STRING ( MAX ) ) OUTPUT ( embeddings STRUCT<values ARRAY<FLOAT32> > ) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , default batch size = 5 ) Replace the following: MODEL NAME : the name of the Vertex AI text embedding model PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint PostgreSQL In the PostgreSQL dialect, there is no need to register the model.

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Enter: CREATE MODEL EmbeddingsModel INPUT ( content STRING ( MAX ), ) OUTPUT ( embeddings STRUCT<values ARRAY<FLOAT32> > , ) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT ID /locations/us-central1/publishers/google/models/ TEXT EMBEDDING MODEL ' ); Replace the following: PROJECT ID : a permanent identifier that is unique for your Google Cloud project.
- PREDICT ( MODEL EmbeddingsModel , ( SELECT "I'd like to buy a starter bike for my 3 year old child" AS content )) )) AS distance FROM products WHERE inventoryCount > 0 ORDER BY distance LIMIT 5 ; Click Run to return the products that best match your search text.
- The following example demonstrates how to register a Vertex AI text embedding model , which is then used to perform similarity search to find similar products in a database.
- In this step, you'll populate the productDescriptionEmbedding column by generating embeddings from the productDescription column using ML.PREDICT .

