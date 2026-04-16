---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.231Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Gemini model integration with Spanner machine learning prediction functions"
feature_slug: "gemini-model-integration-with-spanner-machine-learning-prediction-functions"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings"
keywords:
  - "prediction"
  - "learning"
  - "machine"
  - "integration"
  - "model"
  - "gemini"
  - "functions"
---

# Gemini model integration with Spanner machine learning prediction functions

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for using Gemini models with GoogleSQL and PostgreSQL machine learning prediction functions.

## Extended Definition

Spanner added support for using Gemini models with GoogleSQL and PostgreSQL machine learning prediction functions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)

## Supporting Pages

### Generate ML predictions using SQL \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples for using ML functions to generate predictions Preview — Gemini in Spanner This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- This page shows how to generate machine learning (ML) predictions from a Spanner database.
- PREDICT ( MODEL GeminiPro , ( SELECT "Is 7 a prime number?" AS prompt ), STRUCT ( 256 AS maxOutputTokens , 0.2 AS temperature , 40 as topK , 0.95 AS topP ) ); Expected output The expected out is as follows: + --------------------+ content + --------------------+ "Yes" + --------------------+ PostgreSQL Run the model select spanner . ml predict row ( '{ "endpoint": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-pro", "default batch size": 1 }' :: jsonb , '{ "instances":[{"prompt": "Is 7 a prime number?"}], "parameters":{"maxOutputTokens":256, "topK": 40, "topP":0.96, "temperature":0.2} }' ); Expected output The expected out is the following: +--------------------+ content +--------------------+ "Yes" +--------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following is an example schema from Classification and regression Overview CREATE MODEL MyClassificationModel INPUT ( length FLOAT64 , material STRING ( MAX ), tag array ARRAY<STRING ( MAX ) > ) OUTPUT ( scores ARRAY<FLOAT64> , classes ARRAY<STRING ( MAX ) > ) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /endpoints/ ENDPOINT ID ' ) Replace the following: PROJECT ID : the ID of your Google Cloud project LOCATION : the ID of the Google Cloud region that the model is located in—for example, us-central1 ENDPOINT ID : the ID of the ML model you want to use—for example, gemini-pro For more information about models, see Model API reference for Generative AI .

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , DATA COLUMN NAME ))) ) / @ remote udf max rows per rpc= MAX ROWS / - > 'predictions' - > 0 - > 'embeddings' - > 'values' ), EMBEDDING VERSION COLUMN = MODEL VERSION WHERE FILTER CONDITION ; Replace the following: TABLE NAME : the name of the table with the textual data EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings DATA COLUMN NAME : the name of the column with the textual data PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI embedding model MODEL VERSION : the version of the Vertex AI embedding model MAX ROWS : the maximum number of rows per RPC EMBEDDING VERSION COLUMN : the column that manages the version of the text embedding model used to backfill your embeddings FILTER CONDITION : a partitionable filter condition that you want to apply An example backfill query for the products table: GoogleSQL UPDATE products SET products . desc embed = ( SELECT embeddings . values FROM SAFE .
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description ))) ) / @ remote udf max rows per rpc=200 / - > 'predictions' - > 0 - > 'embeddings' - > 'values' ), desc embed model version = 3 WHERE desc embed IS NULL ; For best practices, consider the following: The default gRPC timeout for the Spanner API is one hour.
- Test the end-to-end integration of the embeddings model You can execute a query to test that the embedding model is configured successfully, and embeddings are retrieved.
- Custom tuned text embedding models aren't supported with the GoogleSQL ML.PREDICT and PostgreSQL spanner.ML PREDICT ROW functions.

### Get Vertex AI text embeddings \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , $ 1 , 'task type' , 'RETRIEVAL QUERY' ) ), 'parameters' , JSONB BUILD OBJECT ( 'outputDimensionality' , 768 ) ) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ) ) AS distance FROM Products p ORDER BY distance LIMIT 5 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Store text embeddings After generating the embeddings in a read-only transaction, store them in Spanner so they can be managed with your operational data.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description )))) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' FROM Products ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model To specify task type and output dimensions : UPDATE Products p SET description embedding = spanner . float64 array ( spanner .
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , @ Description ))) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' )); Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update text embeddings To update your embeddings or to ingest data in realtime, use the UPDATE ( GoogleSQL and PostgreSQL ) statement.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , $ 1 ))) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ) WHERE id = $ 2 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model What's next Learn how to use Vertex AI Vector Search to search for semantically similar items.

