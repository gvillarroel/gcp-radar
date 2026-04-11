---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.549Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML.GENERATE_TEXT with Vertex AI Gemini 1.5 Pro"
feature_slug: "bigquery-ml-generate-text-with-vertex-ai-gemini-1-5-pro"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
keywords:
  - "Vertex AI Gemini 1.5 Pro"
  - "multimodal content"
  - "Vertex Gemini 1.5 Pro"
  - "GENERATE_TEXT Pro"
  - "Gemini 1.5 Pro"
  - "ML.GENERATE_TEXT"
  - "object-table"
  - "remote model"
---

# BigQuery ML.GENERATE_TEXT with Vertex AI Gemini 1.5 Pro

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML.GENERATE_TEXT can use remote Gemini 1.5 Pro models for generative AI tasks, including text, image, video, audio, PDF, and object-table content.

## Extended Definition

BigQuery ML supports remote-model generative text inference through functions documented as `ML.GENERATE TEXT`/`AI.GENERATE_TEXT`, which can be used to perform generative natural-language tasks on text stored in BigQuery tables. Users create a remote model in BigQuery that points to a Vertex AI model endpoint (for example a hosted Gemini model) and then call the generate-text function to run tasks such as sentiment analysis or keyword extraction. The provided excerpts confirm this workflow, but they do not explicitly document Gemini 1.5 Pro specifically or multimodal input types, so those specific claims remain only weakly evidenced here.

## Evidence Summary

The release notes confirm BigQuery ML generative text support with remote models, while the remote-model and Gemini tutorials show how to define a Vertex AI-backed remote model in BigQuery and use it with AI.GENERATE TEXT for text-generation tasks.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Use the ML.GENERATE TEXT function with these remote models to perform generative natural language tasks for text stored in BigQuery tables.
- Use the ML.GENERATE TEXT function with these remote models to perform generative natural language tasks for text stored in BigQuery tables.
- Using the ML.GENERATE TEXT function with this remote model to perform a broad range of generative AI tasks.
- Change BigQuery ML has improved throughput by more than 100x for the following generative AI functions: ML.GENERATE TEXT AI.GENERATE TABLE AI.GENERATE AI.GENERATE BOOL AI.GENERATE DOUBLE AI.GENERATE INT Actual performance varies based on the number of input and output tokens in the request, but a typical 6-hour job can now process millions of rows.

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- If you select the new model in the Resources panel, information about the model appears below the Query editor . bq Create the remote model by entering the following CREATE MODEL statement: bq query -- use legacy sql = false \ " CREATE OR REPLACE MODEL PROJECT ID . bqml tutorial . bert sentiment INPUT ( text STRING ) OUTPUT ( scores ARRAY<FLOAT64 > ) REMOTE WITH CONNECTION PROJECT ID . us . bqml tutorial OPTIONS ( ENDPOINT = 'https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/endpoints/ ENDPOINT ID ' ) " Replace the following: PROJECT ID : your project name.
- After you create the model, verify that the model appears in the dataset: bq ls -m bqml tutorial The output is similar to the following: Id Model Type Labels Creation Time ---------------- ------------ -------- ----------------- bert sentiment 28 Jan 17 :39:43 Get predictions using ML.PREDICT You use the ML.PREDICT function to get sentiment predictions from the remote model.
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- This tutorial shows you how to create a remote model that's based on the gemini-2.5-flash model , and how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Create the remote model Use the CREATE MODEL statement to create a remote model that represents a hosted Vertex AI model: In the Google Cloud console, go to the BigQuery page.

