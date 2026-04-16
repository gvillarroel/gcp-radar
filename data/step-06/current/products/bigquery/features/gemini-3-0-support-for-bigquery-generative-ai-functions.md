---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.246Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini 3.0 support for BigQuery generative AI functions"
feature_slug: "gemini-3-0-support-for-bigquery-generative-ai-functions"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data"
keywords:
  - "gemini"
  - "bigquery"
  - "generative"
  - "ai"
  - "functions"
  - "such"
  - "generate"
  - "can"
---

# Gemini 3.0 support for BigQuery generative AI functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery generative AI functions such as AI.GENERATE can now use the Gemini 3.0 model through the global Vertex AI endpoint.

## Extended Definition

BigQuery generative AI functions such as AI.GENERATE can now use the Gemini 3.0 model through the global Vertex AI endpoint.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data](https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data)

## Supporting Pages

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- This tutorial shows you how to create a remote model that's based on the gemini-2.5-flash model , and how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up ADC for a local development environment . df prompt = bbq . obj . get access url ( df products mm [ "image" ], "R" ) . to frame () df prompt [ "prompt0" ] = "For the image of a pet product, concisely generate the following metadata: 1) animal type and 2) 5 SEO search keywords, and 3) product subcategory." df products mm [ "prompt" ] = bbq . struct ( df prompt [[ "prompt0" , "image" ]]) df products mm = df products mm . drop ( columns = [ "animal type" , "search keywords" , "subcategory" ] ) df products mm = bbq . ai . generate table ( gemini model , df products mm , output schema = "animal type STRING, search keywords ARRAY<STRING>, subcategory STRING" , ) Run the following to view the generated data: SQL SELECT product name , image description , animal type , search keywords , subcategory , FROM cymbal pets . products mm ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- DataFrame ( { "uri" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/images/cozy-naps-cat-scratching-post-with-condo.png" ] } ) . cache () df image [ "image" ] = bbq . obj . make ref ( df image [ "uri" ], "us.cymbal conn" ) df search = bbq . ai . generate embedding ( embedding model , bbq . obj . get access url ( bbq . obj . fetch metadata ( df image [ "image" ]), "R" ), ) search result = bbq . vector search ( "cymbal pets.products embedding" , "embedding" , df search [ "embedding" ] ) search result The results look similar to the following: +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ query.embedding base.product id base.embedding base.image.uri base.image.version base.image.authorizer base.image.details distance +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ -0.0112330541 181 -0.0112330541 gs://cloud-samples-data/bigquery/ 12345678910 myproject.region.myconnection {"gcs metadata":{"content type": 0.0 0.0142525584 0.0142525584 tutorials/cymbal-pets/images/ "image/png","md5 hash":"21234567hst16555w60j", 0.0135886827 0.0135886827 cozy-naps-cat-scratching-post-with-condo.png "size":828318,"updated":1742492688982000}} 0.0149955815 0.0149955815 ... ... +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ -0.0112330541 187 -0.0190353896 gs://cloud-samples-data/bigquery/ 23456789101 myproject.region.myconnection {"gcs metadata":{"content type": 0.4216330832..
- For more information, see Set up ADC for a local development environment . result = bbq . ai . generate table ( gemini model , df manuals agg [ "prompt" ], output schema = { "page1 summary" : "STRING" , "page2 summary" : "STRING" , "page3 summary" : "STRING" , }, )[[ "page1 summary" , "page2 summary" , "page3 summary" ]] result The results look similar to the following: +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ page1 summary page2 summary page3 summary +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ This manual provides an overview of the This section explains how to program This page covers connecting the feeder to Wi-Fi CritterCuisine Pro 5000 automatic pet feeder, the feeder's clock, set feeding using the CritterCuisine Connect app, remote including its features, safety precautions, schedules, copy and delete meal settings, feeding, managing feeding schedules, viewing assembly instructions, and initial setup. manually feed your pet, record feeding logs, receiving low food alerts, a voice message, and understand updating firmware, creating multiple pet profiles, the low food level indicator. sharing access with other users, and cleaning and maintaining the feeder. +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- Return the description only. " df agg [ "prompt" ] = bbq . struct ( df prompt [[ "prompt0" , "image" , "description" , "category" , "subcategory" ]] ) df agg = df agg . reset index () df agg = bbq . ai . generate table ( gemini model , df agg , output schema = { "brand description" : "STRING" } ) df agg [[ "brand" , "brand description" , "cnt" ]] The results look similar to the following: +--------------+-------------------------------------+-----+ brand brand.description cnt +--------------+-------------------------------------+-----+ AquaClear AquaClear is a brand of aquarium 33 and pond care products that offer a wide range of solutions for... +--------------+-------------------------------------+-----+ Ocean Ocean Bites is a brand of cat food 28 Bites that offers a variety of recipes and formulas to meet the specific.. +--------------+-------------------------------------+-----+ ... ... ... +--------------+-------------------------------------+-----+ Create a Python UDF to transform product images Create a Python UDF to convert product images to grayscale.

### Analyze multimodal data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data](https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data)
- Source ID: `site-docs-reference-5`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generative AI functions Generate text, embeddings, and scalar values based on ObjectRef or ObjectRefRuntime input by using the following generative AI functions with Gemini models: AI.GENERATE AI.GENERATE TEXT AI.GENERATE TABLE AI.GENERATE BOOL AI.GENERATE DOUBLE AI.GENERATE INT AI.GENERATE EMBEDDING AI.EMBED AI.SIMILARITY AI.CLASSIFY AI.IF AI.SCORE Work with multimodal data in Python You can analyze multimodal data in Python by using BigQuery DataFrames classes and methods.
- Generate annotations, embeddings, and scalar values from multimodal data by using BigQuery ML generative AI functions with Gemini models.
- Generative AI methods Use the following methods to perform generative AI tasks on multimodal data: predict method of the GeminiTextGenerator class : generate text based on multimodal data. predict method of the MultimodalEmbeddingGenerator class : generate embeddings based on multimodal data.
- Generate annotations, embeddings, and scalar values from multimodal data by creating multimodal DataFrames in BigQuery DataFrames and using Python libraries.

