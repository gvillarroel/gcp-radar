---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.273Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Vertex AI integration"
feature_slug: "spanner-vertex-ai-integration"
latest_feature_date: "2023-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial-generative-ai"
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings"
keywords:
  - "possible"
  - "makes"
  - "vertex"
  - "integration"
  - "googlesql"
---

# Spanner Vertex AI integration

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Vertex AI integration makes it possible to use Vertex AI with GoogleSQL to add machine learning capabilities to Spanner applications; Spanner Vertex AI integration enables Spanner applications to use machine learning capabilities through Google Standard SQL.

## Extended Definition

Spanner Vertex AI integration makes it possible to use Vertex AI with GoogleSQL to add machine learning capabilities to Spanner applications; Spanner Vertex AI integration enables Spanner applications to use machine learning capabilities through Google Standard SQL.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- [https://docs.cloud.google.com/spanner/docs/ml-tutorial-generative-ai](https://docs.cloud.google.com/spanner/docs/ml-tutorial-generative-ai)
- [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)

## Supporting Pages

### Generate ML predictions using SQL \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spanner Vertex AI integration gives you the ability to generate predictions using your SQL code by calling the ML.PREDICT function for GoogleSQL or the spanner.ML PREDICT ROW function for PostgreSQL.
- GoogleSQL Register the gemini-pro model CREATE MODEL GeminiPro INPUT ( prompt STRING ( MAX )) OUTPUT ( content STRING ( MAX )) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/gemini-pro' , default batch size = 1 ); Replace the following: PROJECT : the project ID LOCATION : the region where you are using Vertex AI Run the model SELECT content FROM ML .
- Configure access for Spanner Vertex AI integration to Vertex AI endpoints Spanner creates the service agent and grants the necessary permissions automatically when Spanner executes the first MODEL DDL statement.
- Use a Vertex AI model endpoint To use a trained or downloaded model with Spanner Vertex AI integration, you need to deploy the model to Vertex AI.

### "Use Generative AI to get personalized recommendations in an ecommerce application\

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial-generative-ai](https://docs.cloud.google.com/spanner/docs/ml-tutorial-generative-ai)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spanner Vertex AI integration helps you assemble complex prompts containing live data and use them to build AI-enabled applications.
- PostgreSQL interface note: Spanner Vertex AI integration is not supported in PostgreSQL-dialect databases.
- To register this model in a Spanner database, execute the following DDL statement : CREATE MODEL TextBison INPUT ( prompt STRING ( MAX )) OUTPUT ( content STRING ( MAX )) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/text-bison' ); Replace the following: PROJECT : the project ID LOCATION : the region where you are using Vertex AI Schema discovery and validation isn't available for Generative AI models.
- Safe for infants." , 1 ), ( 2 , "Bike" , "Bike for teenagers." , 1 ), ( 3 , "Drill" , "Cordless." , 2 ); INSERT INTO Users ( id , age , likes ) VALUES ( 1 , 30 , "DIY" ), ( 2 , 14 , "Toys" ); Register a Generative AI model in a Spanner schema In this tutorial, we use the Vertex AI text-bison model to provide personalized product recommendations to end customers.

### Get Vertex AI text embeddings \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , @ Description ))) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' )); Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update text embeddings To update your embeddings or to ingest data in realtime, use the UPDATE ( GoogleSQL and PostgreSQL ) statement.
- This page describes how to use the Vertex AI text embedding API to generate, store, and update text embeddings for data stored in Spanner for GoogleSQL-dialect databases and PostgreSQL-dialect databases.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , $ 1 , 'task type' , 'RETRIEVAL QUERY' ) ), 'parameters' , JSONB BUILD OBJECT ( 'outputDimensionality' , 768 ) ) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ) ) AS distance FROM Products p ORDER BY distance LIMIT 5 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Store text embeddings After generating the embeddings in a read-only transaction, store them in Spanner so they can be managed with your operational data.
- To register the Vertex AI text embedding model in a Spanner database, execute the following DDL statement : CREATE MODEL MODEL NAME INPUT ( content STRING ( MAX ), -- Optional: For models that support specifying task type. task type STRING ( MAX ), ) OUTPUT ( embeddings STRUCT < statistics STRUCT<truncated BOOL , token count FLOAT64 > , values ARRAY<FLOAT64> > ) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' ); Replace the following: MODEL NAME : the name of the Vertex AI text embedding model PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint Spanner grants appropriate permissions automatically.

