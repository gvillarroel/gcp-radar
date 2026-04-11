---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.355Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML AI.GENERATE function"
feature_slug: "bigquery-ml-ai-generate-function"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "multimodal generation"
  - "unstructured output"
  - "AI generation function"
  - "structured output"
  - "AI.GENERATE function"
  - "GENERATE function"
  - "text analysis"
  - "Gemini model"
---

# BigQuery ML AI.GENERATE function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery ML supports the AI.GENERATE function for generating structured or unstructured outputs from text, images, audio, video, and documents; BigQuery ML adds the AI.GENERATE function for text analysis using a Vertex AI Gemini model.

## Extended Definition

BigQuery ML exposes AI.GENERATE functions to run generative queries in SQL against Vertex AI Gemini models, including AI.GENERATE TEXT for text generation and analysis use cases. It also supports table-valued generation via AI.GENERATE TABLE, which returns structured output from unstructured inputs such as text, images, audio, and video using a provided output schema. In practice, these functions are invoked through a BigQuery remote model/connection to a Gemini endpoint (for example, gemini-2.5-flash) and can produce one-row text outputs or multi-column structured results.

## Evidence Summary

The release notes define the feature scope (AI.GENERATE/ML.GENERATE TEXT support for Gemini, and AI.GENERATE TABLE for structured outputs from unstructured text/images/audio/video), while the tutorials provide concrete usage patterns with a Gemini endpoint and example SQL/DataFrame calls.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-root-2`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: The document mentions AI.GENERATE_TEXT specifically, not the broader AI.GENERATE function with multiple media modalities.

Evidence snippets:
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial.gemini model REMOTE WITH CONNECTION LOCATION .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Feature For supported Gemini models , you can now use Vertex AI Provisioned Throughput with the ML.GENERATE TEXT and AI.GENERATE functions to provide consistent high throughput for requests.
- BigQuery ML now supports the following table-valued generative AI functions: AI.GENERATE TABLE : generate a table of structured output from unstructured data including text, images, audio, and video.
- April 04, 2025 Feature BigQuery ML now supports the following generative AI functions , which let you analyze text using a Vertex AI Gemini model.
- By creating structured output, you can more easily convert the function output into a BigQuery table.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . df manuals agg The results look similar to the following: +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ manual.uri manual.version manual.authorizer manual.details chunks.uri chunks.version chunks.authorizer chunks.details +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ gs://cloud-samples-data/bigquery/ 1742492785900455 myproject.region.myconnection {"gcs metadata":{"content type":"application/pef", gs://cloud-samples-data/bigquery/ 1745875761227129 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"c9032b037693d15a33210d638c763d0e", tutorials/cymbal-pets/documents/ "md5 hash":"5a1116cce4978ec1b094d8e8b49a1d7c", crittercuisine 5000 user manual.pdf "size":566105,"updated":1742492785941000}} crittercuisine 5000 user manual page1.pdf "size":504583,"updated":1745875761266000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ crittercuisine 5000 user manual page1.pdf 1745875760613874 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"94d03ec65d28b173bc87eac7e587b325", crittercuisine 5000 user manual page2.pdf "size":94622,"updated":1745875760649000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ ... ... ... ... +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ Run the following to generate a single response from a Gemini model based on the analysis of an array of ObjectRef values: SQL WITH manuals AS ( SELECT OBJ .
- For more information, see Set up ADC for a local development environment . df products mm [[ "product name" , "image" ]] The results look similar to the following: +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ product name image.uri image.version image.authorizer image.details +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ AquaClear Aquarium Background gs://cloud-samples-data/bigquery/ 1234567891011 myproject.region.myconnection {"gcs metadata":{"content type":"image/png", tutorials/cymbal-pets/images/ "md5 hash":"494f63b9b137975ff3e7a11b060edb1d", aquaclear-aquarium-background.png "size":1282805,"updated":1742492680017000}} +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ AquaClear Aquarium gs://cloud-samples-data/bigquery/ 2345678910112 myproject.region.myconnection {"gcs metadata":{"content type":"image/png", Gravel Vacuum tutorials/cymbal-pets/images/ "md5 hash":"b7bfc2e2641a77a402a1937bcf0003fd", aquaclear-aquarium-gravel-vacuum.png "size":820254,"updated":1742492682411000}} +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ ... ... ... ... +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ Generate product information by using a Gemini model Use a Gemini model to generate the following data for the pet store products: Add an image description column to the products mm table.
- For more information, see Set up ADC for a local development environment . result = bbq . ai . generate table ( gemini model , df manuals agg [ "prompt" ], output schema = { "page1 summary" : "STRING" , "page2 summary" : "STRING" , "page3 summary" : "STRING" , }, )[[ "page1 summary" , "page2 summary" , "page3 summary" ]] result The results look similar to the following: +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ page1 summary page2 summary page3 summary +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ This manual provides an overview of the This section explains how to program This page covers connecting the feeder to Wi-Fi CritterCuisine Pro 5000 automatic pet feeder, the feeder's clock, set feeding using the CritterCuisine Connect app, remote including its features, safety precautions, schedules, copy and delete meal settings, feeding, managing feeding schedules, viewing assembly instructions, and initial setup. manually feed your pet, record feeding logs, receiving low food alerts, a voice message, and understand updating firmware, creating multiple pet profiles, the low food level indicator. sharing access with other users, and cleaning and maintaining the feeder. +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- Return the description only. " df agg [ "prompt" ] = bbq . struct ( df prompt [[ "prompt0" , "image" , "description" , "category" , "subcategory" ]] ) df agg = df agg . reset index () df agg = bbq . ai . generate table ( gemini model , df agg , output schema = { "brand description" : "STRING" } ) df agg [[ "brand" , "brand description" , "cnt" ]] The results look similar to the following: +--------------+-------------------------------------+-----+ brand brand.description cnt +--------------+-------------------------------------+-----+ AquaClear AquaClear is a brand of aquarium 33 and pond care products that offer a wide range of solutions for... +--------------+-------------------------------------+-----+ Ocean Ocean Bites is a brand of cat food 28 Bites that offers a variety of recipes and formulas to meet the specific.. +--------------+-------------------------------------+-----+ ... ... ... +--------------+-------------------------------------+-----+ Create a Python UDF to transform product images Create a Python UDF to convert product images to grayscale.

