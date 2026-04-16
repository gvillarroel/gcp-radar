---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.234Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner emulator ML prediction support"
feature_slug: "spanner-emulator-ml-prediction-support"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
keywords:
  - "generating"
  - "prediction"
  - "emulator"
  - "machine"
  - "supports"
---

# Spanner emulator ML prediction support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner emulator now supports generating machine-learning predictions when using GoogleSQL and PostgreSQL.

## Extended Definition

Spanner emulator now supports generating machine-learning predictions when using GoogleSQL and PostgreSQL.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)

## Supporting Pages

### Generate ML predictions using SQL \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Generate predictions Depending on the type of your selected model, the steps to generating your predictions will differ.
- This page shows how to generate machine learning (ML) predictions from a Spanner database.
- SELECT spanner . ml predict row ( 'projects/ PROJECT ID /locations/ REGION ID /endpoints/ ENDPOINT ID ' :: text , '{ "instances": [ INSTANCES ], "parameters": { PARAMETERS } }' :: jsonb ); `` Replace the following : PROJECT ID : the ID of the Google Cloud project that the model is located in REGION ID : the ID of the Google Cloud region the model is located in—for example, us-central1 ENDPOINT ID : the ID of the model endpoint INSTANCES : the inputs to the prediction call, in JSON format PARAMETERS : optional parameters to the prediction call, in JSON format This query produces a JSON response.
- Examples for using ML functions to generate predictions Preview — Gemini in Spanner This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### Get Vertex AI text embeddings \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , $ 1 , 'task type' , 'RETRIEVAL QUERY' ) ), 'parameters' , JSONB BUILD OBJECT ( 'outputDimensionality' , 768 ) ) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ) ) AS distance FROM Products p ORDER BY distance LIMIT 5 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Store text embeddings After generating the embeddings in a read-only transaction, store them in Spanner so they can be managed with your operational data.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description )))) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' FROM Products ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model To specify task type and output dimensions : UPDATE Products p SET description embedding = spanner . float64 array ( spanner .
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , @ Description ))) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' )); Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update text embeddings To update your embeddings or to ingest data in realtime, use the UPDATE ( GoogleSQL and PostgreSQL ) statement.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , $ 1 ))) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ) WHERE id = $ 2 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model What's next Learn how to use Vertex AI Vector Search to search for semantically similar items.

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

