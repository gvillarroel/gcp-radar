---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.449Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini 1.5 Flash remote models in BigQuery ML"
feature_slug: "gemini-1-5-flash-remote-models-in-bigquery-ml"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
keywords:
  - "gemini"
  - "flash"
  - "remote"
  - "models"
  - "bigquery"
  - "ml"
  - "supports"
  - "creating"
---

# Gemini 1.5 Flash remote models in BigQuery ML

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports creating remote models based on the Vertex AI gemini-1.5-flash foundation model.

## Extended Definition

BigQuery ML supports creating remote models based on the Vertex AI gemini-1.5-flash foundation model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)

## Supporting Pages

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- This tutorial shows you how to create a remote model that's based on the gemini-2.5-flash model , and how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis.
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial.gemini model REMOTE WITH CONNECTION LOCATION .
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" ], }, ) Create a text generation model Create a BigQuery ML remote model that represents a Vertex AI Gemini model: Run the following to create the remote model: SQL CREATE OR REPLACE MODEL cymbal pets.gemini REMOTE WITH CONNECTION us.cymbal conn OPTIONS ( ENDPOINT = 'gemini-2.0-flash' ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . gemini model = bbq . ml . create model ( "cymbal pets.gemini" , replace = True , connection name = "us.cymbal conn" , options = { "endpoint" : "gemini-2.5-flash" }, ) Create an embedding generation model Create a BigQuery ML remote model that represents a Vertex AI multimodal embedding model: Run the following to create the remote model: SQL CREATE OR REPLACE MODEL cymbal pets.embedding model REMOTE WITH CONNECTION us.cymbal conn OPTIONS ( ENDPOINT = 'multimodalembedding@001' ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . result = bbq . ai . generate table ( gemini model , df manuals agg [ "prompt" ], output schema = { "page1 summary" : "STRING" , "page2 summary" : "STRING" , "page3 summary" : "STRING" , }, )[[ "page1 summary" , "page2 summary" , "page3 summary" ]] result The results look similar to the following: +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ page1 summary page2 summary page3 summary +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ This manual provides an overview of the This section explains how to program This page covers connecting the feeder to Wi-Fi CritterCuisine Pro 5000 automatic pet feeder, the feeder's clock, set feeding using the CritterCuisine Connect app, remote including its features, safety precautions, schedules, copy and delete meal settings, feeding, managing feeding schedules, viewing assembly instructions, and initial setup. manually feed your pet, record feeding logs, receiving low food alerts, a voice message, and understand updating firmware, creating multiple pet profiles, the low food level indicator. sharing access with other users, and cleaning and maintaining the feeder. +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- For more information, see Set up ADC for a local development environment . df manuals agg The results look similar to the following: +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ manual.uri manual.version manual.authorizer manual.details chunks.uri chunks.version chunks.authorizer chunks.details +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ gs://cloud-samples-data/bigquery/ 1742492785900455 myproject.region.myconnection {"gcs metadata":{"content type":"application/pef", gs://cloud-samples-data/bigquery/ 1745875761227129 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"c9032b037693d15a33210d638c763d0e", tutorials/cymbal-pets/documents/ "md5 hash":"5a1116cce4978ec1b094d8e8b49a1d7c", crittercuisine 5000 user manual.pdf "size":566105,"updated":1742492785941000}} crittercuisine 5000 user manual page1.pdf "size":504583,"updated":1745875761266000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ crittercuisine 5000 user manual page1.pdf 1745875760613874 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"94d03ec65d28b173bc87eac7e587b325", crittercuisine 5000 user manual page2.pdf "size":94622,"updated":1745875760649000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ ... ... ... ... +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ Run the following to generate a single response from a Gemini model based on the analysis of an array of ObjectRef values: SQL WITH manuals AS ( SELECT OBJ .

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- You can use remote models when a model is too large to import into BigQuery.
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- In a BigQuery multi-region ( US , EU ) dataset, you can only create a remote model that connects to an endpoint deployed in a region within the same multi-region location ( US , EU ).

