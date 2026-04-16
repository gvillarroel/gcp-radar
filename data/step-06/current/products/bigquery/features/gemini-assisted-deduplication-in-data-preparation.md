---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.256Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini-assisted deduplication in data preparation"
feature_slug: "gemini-assisted-deduplication-in-data-preparation"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
keywords:
  - "gemini"
  - "assisted"
  - "deduplication"
  - "preparation"
  - "assistance"
  - "bigquery"
  - "can"
  - "deduplicate"
---

# Gemini-assisted deduplication in data preparation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Gemini assistance in BigQuery data preparation can deduplicate table data.

## Extended Definition

Gemini assistance in BigQuery data preparation can deduplicate table data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)

## Supporting Pages

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- Gemini in BigQuery overview This document describes how Gemini in BigQuery, which is part of the Gemini for Google Cloud product suite, provides AI-powered assistance to help you work with your data.
- AI assistance with Gemini in BigQuery Gemini in BigQuery provides AI assistance to help you do the following: Explore and understand your data with data insights .
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial.gemini model REMOTE WITH CONNECTION LOCATION .

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-reference-2`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Assistive AI features AI-powered assistance features in BigQuery, collectively referred to as Gemini in BigQuery , help you discover, prepare, query, and visualize your data.
- These functions access Gemini and partner LLM models available from Vertex AI, Cloud AI APIs, or built-in BigQuery models to perform these tasks.
- Use the Gemini CLI to interact with BigQuery data in your terminal by using natural language prompts.
- For more information about assistive AI features, see Gemini in BigQuery .

