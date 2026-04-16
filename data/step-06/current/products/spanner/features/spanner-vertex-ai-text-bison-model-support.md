---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.264Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Vertex AI text-bison model support"
feature_slug: "spanner-vertex-ai-text-bison-model-support"
latest_feature_date: "2023-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial-generative-ai"
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
keywords:
  - "bison"
  - "vertex"
  - "model"
  - "text"
  - "added"
---

# Spanner Vertex AI text-bison model support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for the Vertex AI text-bison model via its Vertex AI integration.

## Extended Definition

Spanner added support for the Vertex AI text-bison model via its Vertex AI integration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)
- [https://docs.cloud.google.com/spanner/docs/ml-tutorial-generative-ai](https://docs.cloud.google.com/spanner/docs/ml-tutorial-generative-ai)
- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)

## Supporting Pages

### Get Vertex AI text embeddings \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , $ 1 , 'task type' , 'RETRIEVAL QUERY' ) ), 'parameters' , JSONB BUILD OBJECT ( 'outputDimensionality' , 768 ) ) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ) ) AS distance FROM Products p ORDER BY distance LIMIT 5 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Store text embeddings After generating the embeddings in a read-only transaction, store them in Spanner so they can be managed with your operational data.
- To register the Vertex AI text embedding model in a Spanner database, execute the following DDL statement : CREATE MODEL MODEL NAME INPUT ( content STRING ( MAX ), -- Optional: For models that support specifying task type. task type STRING ( MAX ), ) OUTPUT ( embeddings STRUCT < statistics STRUCT<truncated BOOL , token count FLOAT64 > , values ARRAY<FLOAT64> > ) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' ); Replace the following: MODEL NAME : the name of the Vertex AI text embedding model PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint Spanner grants appropriate permissions automatically.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description )))) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' FROM Products ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model To specify task type and output dimensions : UPDATE Products p SET description embedding = spanner . float64 array ( spanner .
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , @ Description ))) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' )); Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update text embeddings To update your embeddings or to ingest data in realtime, use the UPDATE ( GoogleSQL and PostgreSQL ) statement.

### "Use Generative AI to get personalized recommendations in an ecommerce application\

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial-generative-ai](https://docs.cloud.google.com/spanner/docs/ml-tutorial-generative-ai)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To register this model in a Spanner database, execute the following DDL statement : CREATE MODEL TextBison INPUT ( prompt STRING ( MAX )) OUTPUT ( content STRING ( MAX )) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/text-bison' ); Replace the following: PROJECT : the project ID LOCATION : the region where you are using Vertex AI Schema discovery and validation isn't available for Generative AI models.
- Safe for infants." , 1 ), ( 2 , "Bike" , "Bike for teenagers." , 1 ), ( 3 , "Drill" , "Cordless." , 2 ); INSERT INTO Users ( id , age , likes ) VALUES ( 1 , 30 , "DIY" ), ( 2 , 14 , "Toys" ); Register a Generative AI model in a Spanner schema In this tutorial, we use the Vertex AI text-bison model to provide personalized product recommendations to end customers.
- The Vertex AI text-bison model doesn't support batching, so you must use the @{remote udf max rows per rpc=1} parameter to set the batch size to 1.
- You can find the full schema of the text-bison model on the Vertex AI Model API reference page.

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description )))) FROM Products LIMIT 10 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update the source table to include additional columns to store the embeddings Next, update the source table schema to include an additional column of the data type ARRAY<FLOAT32> to store the generated embeddings: GoogleSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME ARRAY<FLOAT32> ; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings PostgreSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME real []; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings For example, using the products table example, run: GoogleSQL ALTER TABLE Products ADD COLUMN desc embed ARRAY<FLOAT32> ; PostgreSQL ALTER TABLE Products ADD COLUMN desc embed real []; You can add another column to manage the version of the embedding model.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , DATA COLUMN NAME ))) ) / @ remote udf max rows per rpc= MAX ROWS / - > 'predictions' - > 0 - > 'embeddings' - > 'values' ), EMBEDDING VERSION COLUMN = MODEL VERSION WHERE FILTER CONDITION ; Replace the following: TABLE NAME : the name of the table with the textual data EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings DATA COLUMN NAME : the name of the column with the textual data PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI embedding model MODEL VERSION : the version of the Vertex AI embedding model MAX ROWS : the maximum number of rows per RPC EMBEDDING VERSION COLUMN : the column that manages the version of the text embedding model used to backfill your embeddings FILTER CONDITION : a partitionable filter condition that you want to apply An example backfill query for the products table: GoogleSQL UPDATE products SET products . desc embed = ( SELECT embeddings . values FROM SAFE .
- EMBEDDING VERSION COLUMN = MODEL VERSION WHERE FILTER CONDITION ; Replace the following: TABLE NAME : the name of the table with the textual data EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings DATA COLUMN NAME : the name of the column with the textual data MODEL NAME : the name of the Vertex AI embedding model MAX ROWS : the maximum number of rows per RPC EMBEDDING VERSION COLUMN : the column that manages the version of the embedding model used to backfill your embeddings MODEL VERSION : the version of the text embedding model FILTER CONDITION : a partitionable filter condition that you want to apply Using SAFE.ML.PREDICT returns NULL for failed requests.
- Register an embedding model GoogleSQL Register a text embedding model with the Vertex AI model endpoint in your Spanner database: CREATE MODEL MODEL NAME INPUT ( content STRING ( MAX ) ) OUTPUT ( embeddings STRUCT<values ARRAY<FLOAT32> > ) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , default batch size = 5 ) Replace the following: MODEL NAME : the name of the Vertex AI text embedding model PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint PostgreSQL In the PostgreSQL dialect, there is no need to register the model.

