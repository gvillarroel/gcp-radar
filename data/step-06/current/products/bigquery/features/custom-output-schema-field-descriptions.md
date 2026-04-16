---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.216Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Custom output schema field descriptions"
feature_slug: "custom-output-schema-field-descriptions"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma"
keywords:
  - "custom"
  - "output"
  - "schema"
  - "field"
  - "descriptions"
  - "ai"
  - "generate"
  - "table"
---

# Custom output schema field descriptions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

AI.GENERATE and AI.GENERATE_TABLE support descriptions for fields in custom output schemas.

## Extended Definition

AI.GENERATE and AI.GENERATE_TABLE support descriptions for fields in custom output schemas.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)

## Supporting Pages

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up ADC for a local development environment . result = bbq . ai . generate table ( gemini model , df manuals agg [ "prompt" ], output schema = { "page1 summary" : "STRING" , "page2 summary" : "STRING" , "page3 summary" : "STRING" , }, )[[ "page1 summary" , "page2 summary" , "page3 summary" ]] result The results look similar to the following: +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ page1 summary page2 summary page3 summary +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ This manual provides an overview of the This section explains how to program This page covers connecting the feeder to Wi-Fi CritterCuisine Pro 5000 automatic pet feeder, the feeder's clock, set feeding using the CritterCuisine Connect app, remote including its features, safety precautions, schedules, copy and delete meal settings, feeding, managing feeding schedules, viewing assembly instructions, and initial setup. manually feed your pet, record feeding logs, receiving low food alerts, a voice message, and understand updating firmware, creating multiple pet profiles, the low food level indicator. sharing access with other users, and cleaning and maintaining the feeder. +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- Return the description only. " df agg [ "prompt" ] = bbq . struct ( df prompt [[ "prompt0" , "image" , "description" , "category" , "subcategory" ]] ) df agg = df agg . reset index () df agg = bbq . ai . generate table ( gemini model , df agg , output schema = { "brand description" : "STRING" } ) df agg [[ "brand" , "brand description" , "cnt" ]] The results look similar to the following: +--------------+-------------------------------------+-----+ brand brand.description cnt +--------------+-------------------------------------+-----+ AquaClear AquaClear is a brand of aquarium 33 and pond care products that offer a wide range of solutions for... +--------------+-------------------------------------+-----+ Ocean Ocean Bites is a brand of cat food 28 Bites that offers a variety of recipes and formulas to meet the specific.. +--------------+-------------------------------------+-----+ ... ... ... +--------------+-------------------------------------+-----+ Create a Python UDF to transform product images Create a Python UDF to convert product images to grayscale.
- For more information, see Set up ADC for a local development environment . df products mm [ "url" ] = bbq . obj . get access url ( df products mm [ "image" ], "R" ) . to frame () df products mm [ "prompt0" ] = "Can you describe the following image?" df products mm [ "prompt" ] = bbq . struct ( df products mm [[ "prompt0" , "url" ]]) df products mm = bbq . ai . generate table ( gemini model , df products mm , output schema = { "image description" : "STRING" } ) df products mm = df products mm [ [ "product id" , "product name" , "brand" , "category" , "subcategory" , "animal type" , "search keywords" , "price" , "description" , "inventory level" , "supplier id" , "average rating" , "image" , "image description" , ] ] Run the following to update the animal type , search keywords , and subcategory columns with generated data: SQL UPDATE cymbal pets . products mm p SET p . animal type = s . animal type , p . search keywords = s . search keywords , p . subcategory = s . subcategory FROM ( SELECT animal type , search keywords , subcategory , uri FROM AI .
- For more information, see Set up ADC for a local development environment . df prompt = bbq . obj . get access url ( df products mm [ "image" ], "R" ) . to frame () df prompt [ "prompt0" ] = "For the image of a pet product, concisely generate the following metadata: 1) animal type and 2) 5 SEO search keywords, and 3) product subcategory." df products mm [ "prompt" ] = bbq . struct ( df prompt [[ "prompt0" , "image" ]]) df products mm = df products mm . drop ( columns = [ "animal type" , "search keywords" , "subcategory" ] ) df products mm = bbq . ai . generate table ( gemini model , df products mm , output schema = "animal type STRING, search keywords ARRAY<STRING>, subcategory STRING" , ) Run the following to view the generated data: SQL SELECT product name , image description , animal type , search keywords , subcategory , FROM cymbal pets . products mm ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.
- This tutorial shows you how to create a remote model that's based on the gemini-2.5-flash model , and how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

### "Generate text by using a Gemma open model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generate text by using a Gemma open model and the AI.GENERATE TEXT function This tutorial shows you how to create a remote model that's based on the Gemma model , and then how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis on movie reviews from the bigquery-public-data.imdb.reviews public table.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- 2 AS temperature , 100 AS max output tokens )); The output is similar to the following, with non-generated columns omitted for clarity: +----------------------------------------------+-------------------------+-----------------------------+-----+ result status prompt ... +----------------------------------------------+-------------------------+-----------------------------+-----+ Here are some key words from the Extract the key words from movie review: Romance: the movie review below: "romantic tryst," "elope" Comedy: Linda Arvidson (as Jennie) "Contrived Comedy" Burglary: and Harry Solter (as Frank) "burglar," "rob," "booty" Chase: are enjoying a romantic "chases," "escape" Director: "D.W. tryst, when in walks her...

