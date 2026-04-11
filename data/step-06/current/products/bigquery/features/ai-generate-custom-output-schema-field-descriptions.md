---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.342Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "AI.GENERATE custom output schema field descriptions"
feature_slug: "ai-generate-custom-output-schema-field-descriptions"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "field description"
  - "schema field descriptions"
  - "AI.GENERATE_TABLE function"
  - "output schema metadata"
  - "custom output schema"
  - "AI.GENERATE function"
  - "AI.GENERATE_TABLE"
  - "output schema"
---

# AI.GENERATE custom output schema field descriptions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

AI.GENERATE and AI.GENERATE_TABLE now support descriptive metadata for fields in a custom output schema.

## Extended Definition

BigQuery’s AI.GENERATE and AI.GENERATE TABLE functions support a custom output schema for structured responses, and the field metadata in that schema can include descriptions. In this feature, when defining output fields (for example as STRING fields in AI.GENERATE TABLE examples), users can attach descriptive text to those custom schema fields to document or clarify expected output structure.

## Evidence Summary

The release notes explicitly state that AI.GENERATE and AI.GENERATE TABLE now support field descriptions in custom output schemas, while the tutorial demonstrates how AI.GENERATE TABLE uses output schema mappings to shape model outputs.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now provide descriptions for the fields in your custom output schema when you use the AI.GENERATE and AI.GENERATE TABLE functions.
- You can use the AI.GENERATE TABLE function's output schema argument to more easily format the model's response.
- Feature You can now generate structured data by using BigQuery ML's AI.GENERATE TABLE function with Gemini 1.5 Pro, Gemini 1.5 Flash, and Gemini 2.0 Flash models.
- Try this feature with the Generate structured data by using the AI.GENERATE TABLE function tutorial.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Generate text based on image data from a standard table by using the AI.GENERATE TABLE function .
- For more information, see Set up ADC for a local development environment . result = bbq . ai . generate table ( gemini model , df manuals agg [ "prompt" ], output schema = { "page1 summary" : "STRING" , "page2 summary" : "STRING" , "page3 summary" : "STRING" , }, )[[ "page1 summary" , "page2 summary" , "page3 summary" ]] result The results look similar to the following: +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ page1 summary page2 summary page3 summary +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ This manual provides an overview of the This section explains how to program This page covers connecting the feeder to Wi-Fi CritterCuisine Pro 5000 automatic pet feeder, the feeder's clock, set feeding using the CritterCuisine Connect app, remote including its features, safety precautions, schedules, copy and delete meal settings, feeding, managing feeding schedules, viewing assembly instructions, and initial setup. manually feed your pet, record feeding logs, receiving low food alerts, a voice message, and understand updating firmware, creating multiple pet profiles, the low food level indicator. sharing access with other users, and cleaning and maintaining the feeder. +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- Return the description only. " df agg [ "prompt" ] = bbq . struct ( df prompt [[ "prompt0" , "image" , "description" , "category" , "subcategory" ]] ) df agg = df agg . reset index () df agg = bbq . ai . generate table ( gemini model , df agg , output schema = { "brand description" : "STRING" } ) df agg [[ "brand" , "brand description" , "cnt" ]] The results look similar to the following: +--------------+-------------------------------------+-----+ brand brand.description cnt +--------------+-------------------------------------+-----+ AquaClear AquaClear is a brand of aquarium 33 and pond care products that offer a wide range of solutions for... +--------------+-------------------------------------+-----+ Ocean Ocean Bites is a brand of cat food 28 Bites that offers a variety of recipes and formulas to meet the specific.. +--------------+-------------------------------------+-----+ ... ... ... +--------------+-------------------------------------+-----+ Create a Python UDF to transform product images Create a Python UDF to convert product images to grayscale.
- For more information, see Set up ADC for a local development environment . df products mm [ "url" ] = bbq . obj . get access url ( df products mm [ "image" ], "R" ) . to frame () df products mm [ "prompt0" ] = "Can you describe the following image?" df products mm [ "prompt" ] = bbq . struct ( df products mm [[ "prompt0" , "url" ]]) df products mm = bbq . ai . generate table ( gemini model , df products mm , output schema = { "image description" : "STRING" } ) df products mm = df products mm [ [ "product id" , "product name" , "brand" , "category" , "subcategory" , "animal type" , "search keywords" , "price" , "description" , "inventory level" , "supplier id" , "average rating" , "image" , "image description" , ] ] Run the following to update the animal type , search keywords , and subcategory columns with generated data: SQL UPDATE cymbal pets . products mm p SET p . animal type = s . animal type , p . search keywords = s . search keywords , p . subcategory = s . subcategory FROM ( SELECT animal type , search keywords , subcategory , uri FROM AI .

