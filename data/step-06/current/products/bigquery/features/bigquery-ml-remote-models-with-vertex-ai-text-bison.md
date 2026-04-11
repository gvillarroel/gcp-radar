---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.628Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML remote models with Vertex AI text-bison"
feature_slug: "bigquery-ml-remote-models-with-vertex-ai-text-bison"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
keywords:
  - "BigQuery ML Vertex AI text model"
  - "text-bison remote model"
  - "ML.GENERATE_TEXT with remote"
  - "MODEL_TYPE='VERTEX_AI'"
  - "VERTEX_AI remote model"
  - "bison model"
  - "text-bison"
  - "remote model"
---

# BigQuery ML remote models with Vertex AI text-bison

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML supports creating remote models backed by the Vertex AI large language model text-bison.

## Extended Definition

BigQuery ML supports creating a remote model in BigQuery that routes inference to a Vertex AI endpoint via a Cloud Resource connection, defined with a `CREATE MODEL` statement. The remote model can then be queried from BigQuery SQL using functions such as `ML.PREDICT` for predictions and `AI.GENERATE_TEXT` for text-generation workflows. The provided excerpts do not explicitly name the `text-bison` model, so evidence for that exact model is indirect rather than explicit.

## Evidence Summary

The cited pages confirm that BigQuery ML remote models can connect to Vertex AI endpoints, specify required permissions, and be used with `ML.PREDICT` or `AI.GENERATE_TEXT`, but do not explicitly document `text-bison` in the shown excerpts.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- In the Connection type list, select Vertex AI remote models, remote functions and BigLake (Cloud Resource) .
- If you select the new model in the Resources panel, information about the model appears below the Query editor . bq Create the remote model by entering the following CREATE MODEL statement: bq query -- use legacy sql = false \ " CREATE OR REPLACE MODEL PROJECT ID . bqml tutorial . bert sentiment INPUT ( text STRING ) OUTPUT ( scores ARRAY<FLOAT64 > ) REMOTE WITH CONNECTION PROJECT ID . us . bqml tutorial OPTIONS ( ENDPOINT = 'https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/endpoints/ ENDPOINT ID ' ) " Replace the following: PROJECT ID : your project name.
- After you create the model, verify that the model appears in the dataset: bq ls -m bqml tutorial The output is similar to the following: Id Model Type Labels Creation Time ---------------- ------------ -------- ----------------- bert sentiment 28 Jan 17 :39:43 Get predictions using ML.PREDICT You use the ML.PREDICT function to get sentiment predictions from the remote model.
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Remote models over Google models in Vertex AI Remote models over hosted models in Vertex AI Remote models over open models HUGGING FACE MODEL ID Specifies the model ID for a supported Hugging Face model.
- See XGBoost INPUT OUTPUT clause for more details. field type Remote models support the following BigQuery data types for INPUT and OUTPUT clauses: Simple type: BOOL , INT64 , FLOAT64 , NUMERIC , BIGNUMERIC , STRING ARRAY <Simple type> XGBoost models only support numeric types for the INPUT field type and FLOAT64 for the OUTPUT field type. connection name BigQuery uses a CLOUD RESOURCE connection to interact with your Vertex AI endpoint.
- To create a model, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.connections.delegate (for remote models) The following predefined IAM roles grant these permissions: BigQuery Studio Admin BigQuery Admin For more information about IAM roles and permissions in BigQuery, see Introduction to IAM .
- Remote models over Cloud AI services SPEECH RECOGNIZER Identifies the speech recognizer to use when the REMOTE SERVICE TYPE option value is CLOUD AI SPEECH TO TEXT V2 Remote models over Cloud AI services KMS KEY NAME Specifies the Cloud Key Management Service customer-managed encryption key (CMEK) to use to encrypt the model.

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-root-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- For Connection type , choose Vertex AI remote models, remote functions, BigLake and Spanner (Cloud Resource) .
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- This tutorial shows you how to create a remote model that's based on the gemini-2.5-flash model , and how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

