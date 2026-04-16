---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.522Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Expanded region support for Vertex AI text-bison models"
feature_slug: "expanded-region-support-for-vertex-ai-text-bison-models"
latest_feature_date: "2023-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
keywords:
  - "expanded"
  - "region"
  - "vertex"
  - "ai"
  - "text"
  - "bison"
  - "models"
  - "bigquery"
---

# Expanded region support for Vertex AI text-bison models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML expands region availability for Vertex AI text-bison large language models.

## Extended Definition

BigQuery ML expands region availability for Vertex AI text-bison large language models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- Click the Vertex AI Models: BigQuery Federation solution card.
- PREDICT ( MODEL PROJECT ID .bqml tutorial.bert sentiment , ( SELECT review as text FROM bigquery-public-data.imdb.reviews LIMIT 10000 ) ) The query results should look similar to the following: bq Enter this command to run the query that uses ML.PREDICT . bq query --use legacy sql=false \ 'SELECT FROM ML.PREDICT ( MODEL PROJECT ID .bqml tutorial.bert sentiment , ( SELECT review as text FROM bigquery-public-data.imdb.reviews LIMIT 10000 ) )' Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create a BigQuery Cloud resource connection You must have a Cloud resource connection to connect to a Vertex AI endpoint.

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create a connection Create a Cloud resource connection in the US multiregion, where you created the dataset.
- CONNECTION ID Replace the following: PROJECT ID : your Google Cloud project ID REGION : the connection region CONNECTION ID : the connection ID What's next Choose a text generation function Tune a model using your data Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

### "Generate text by using a Gemma open model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Set service account permissions: resourcemanager.projects.getIamPolicy and resourcemanager.projects.setIamPolicy Deploy and undeploy a Vertex AI model: aiplatform.endpoints.deploy aiplatform.endpoints.undeploy Create a model and run inference: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.models.updateMetadata You might also be able to get these permissions with custom roles or other predefined roles .
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model Create a remote model that represents a hosted Vertex AI model: In the Google Cloud console, go to the BigQuery page.
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial . gemma model REMOTE WITH CONNECTION DEFAULT OPTIONS ( MODEL GARDEN MODEL NAME = 'publishers/google/models/gemma3@gemma-3-270m-it' , MACHINE TYPE = 'g2-standard-12' ); The query takes up to 20 minutes to complete, after which the gemma model model appears in the bqml tutorial dataset in the Explorer pane.
- Generate text by using a Gemma open model and the AI.GENERATE TEXT function This tutorial shows you how to create a remote model that's based on the Gemma model , and then how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis on movie reviews from the bigquery-public-data.imdb.reviews public table.

