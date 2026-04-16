---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.457Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini 1.5 Pro remote models in BigQuery ML"
feature_slug: "gemini-1-5-pro-remote-models-in-bigquery-ml"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/ai-application-overview"
keywords:
  - "gemini"
  - "pro"
  - "remote"
  - "models"
  - "bigquery"
  - "ml"
  - "supports"
  - "creating"
---

# Gemini 1.5 Pro remote models in BigQuery ML

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports creating remote models based on the Vertex AI gemini-1.5-pro foundation model.

## Extended Definition

BigQuery ML supports creating remote models based on the Vertex AI gemini-1.5-pro foundation model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/ai-application-overview](https://docs.cloud.google.com/bigquery/docs/ai-application-overview)

## Supporting Pages

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial.gemini model REMOTE WITH CONNECTION LOCATION .
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- AlreadyExists : print ( f "Connection with ID ' { connection id } ' already exists." ) print ( "Please use a different connection ID." ) except Exception as e : print ( f "An unexpected error occurred while creating the connection: { e } " ) Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- You can use remote models when a model is too large to import into BigQuery.
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- In a BigQuery multi-region ( US , EU ) dataset, you can only create a remote model that connects to an endpoint deployed in a region within the same multi-region location ( US , EU ).

### Task-specific solutions overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-application-overview](https://docs.cloud.google.com/bigquery/docs/ai-application-overview)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported tasks include the following: Natural language processing Machine translation Audio transcription Document processing Computer vision You access a Cloud AI API to perform one of these functions by creating a remote model in BigQuery ML that represents the API endpoint.
- Workflow You can use remote models over Vertex AI models and remote models over Cloud AI services together with BigQuery ML functions in order to accomplish complex data analysis and generative AI tasks.
- To perform document processing tasks, you can create a reference to the Document AI API by creating a remote model, specifying CLOUD AI DOCUMENT V1 for the REMOTE SERVICE TYPE value, and specifying a processor to use to process the document content.
- To perform natural language tasks, you can create a reference to the Cloud Natural Language API by creating a remote model and specifying CLOUD AI NATURAL LANGUAGE V1 for the REMOTE SERVICE TYPE value.

