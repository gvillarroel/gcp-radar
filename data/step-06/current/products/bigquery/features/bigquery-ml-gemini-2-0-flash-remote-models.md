---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.395Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML Gemini 2.0 Flash remote models"
feature_slug: "bigquery-ml-gemini-2-0-flash-remote-models"
latest_feature_date: "2024-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
keywords:
  - "bigquery"
  - "ml"
  - "gemini"
  - "flash"
  - "remote"
  - "models"
  - "supports"
  - "based"
---

# BigQuery ML Gemini 2.0 Flash remote models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports remote models based on Vertex AI gemini-2.0-flash-exp for text and multimodal generative tasks.

## Extended Definition

BigQuery ML supports remote models based on Vertex AI gemini-2.0-flash-exp for text and multimodal generative tasks.

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
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- This tutorial shows you how to create a remote model that's based on the gemini-2.5-flash model , and how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis.
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial.gemini model REMOTE WITH CONNECTION LOCATION .

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" ], }, ) Create a text generation model Create a BigQuery ML remote model that represents a Vertex AI Gemini model: Run the following to create the remote model: SQL CREATE OR REPLACE MODEL cymbal pets.gemini REMOTE WITH CONNECTION us.cymbal conn OPTIONS ( ENDPOINT = 'gemini-2.0-flash' ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . gemini model = bbq . ml . create model ( "cymbal pets.gemini" , replace = True , connection name = "us.cymbal conn" , options = { "endpoint" : "gemini-2.5-flash" }, ) Create an embedding generation model Create a BigQuery ML remote model that represents a Vertex AI multimodal embedding model: Run the following to create the remote model: SQL CREATE OR REPLACE MODEL cymbal pets.embedding model REMOTE WITH CONNECTION us.cymbal conn OPTIONS ( ENDPOINT = 'multimodalembedding@001' ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . df manuals agg The results look similar to the following: +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ manual.uri manual.version manual.authorizer manual.details chunks.uri chunks.version chunks.authorizer chunks.details +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ gs://cloud-samples-data/bigquery/ 1742492785900455 myproject.region.myconnection {"gcs metadata":{"content type":"application/pef", gs://cloud-samples-data/bigquery/ 1745875761227129 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"c9032b037693d15a33210d638c763d0e", tutorials/cymbal-pets/documents/ "md5 hash":"5a1116cce4978ec1b094d8e8b49a1d7c", crittercuisine 5000 user manual.pdf "size":566105,"updated":1742492785941000}} crittercuisine 5000 user manual page1.pdf "size":504583,"updated":1745875761266000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ crittercuisine 5000 user manual page1.pdf 1745875760613874 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"94d03ec65d28b173bc87eac7e587b325", crittercuisine 5000 user manual page2.pdf "size":94622,"updated":1745875760649000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ ... ... ... ... +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ Run the following to generate a single response from a Gemini model based on the analysis of an array of ObjectRef values: SQL WITH manuals AS ( SELECT OBJ .
- For more information, see Set up ADC for a local development environment . df products mm [[ "product name" , "image" ]] The results look similar to the following: +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ product name image.uri image.version image.authorizer image.details +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ AquaClear Aquarium Background gs://cloud-samples-data/bigquery/ 1234567891011 myproject.region.myconnection {"gcs metadata":{"content type":"image/png", tutorials/cymbal-pets/images/ "md5 hash":"494f63b9b137975ff3e7a11b060edb1d", aquaclear-aquarium-background.png "size":1282805,"updated":1742492680017000}} +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ AquaClear Aquarium gs://cloud-samples-data/bigquery/ 2345678910112 myproject.region.myconnection {"gcs metadata":{"content type":"image/png", Gravel Vacuum tutorials/cymbal-pets/images/ "md5 hash":"b7bfc2e2641a77a402a1937bcf0003fd", aquaclear-aquarium-gravel-vacuum.png "size":820254,"updated":1742492682411000}} +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ ... ... ... ... +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ Generate product information by using a Gemini model Use a Gemini model to generate the following data for the pet store products: Add an image description column to the products mm table.

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- You can use remote models when a model is too large to import into BigQuery.
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- Costs In this document, you use the following billable components of Google Cloud: BigQuery BigQuery ML Vertex AI To generate a cost estimate based on your projected usage, use the pricing calculator .

