---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.425Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini in BigQuery SQL generation"
feature_slug: "gemini-in-bigquery-sql-generation"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
keywords:
  - "gemini"
  - "bigquery"
  - "sql"
  - "generation"
  - "can"
  - "generate"
  - "queries"
  - "prompts"
---

# Gemini in BigQuery SQL generation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Gemini in BigQuery can generate SQL queries from prompts.

## Extended Definition

Gemini in BigQuery can generate SQL queries from prompts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)

## Supporting Pages

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- Where to interact with Gemini in BigQuery After you set up Gemini in BigQuery , you can use Gemini in BigQuery to do the following in BigQuery Studio: To generate data insights , go to the Insights tab for a table entry, where you can identify patterns, assess quality, and run statistical analysis across your BigQuery data.
- You can use Gemini in BigQuery to generate or suggest code in either SQL or Python, and to explain an existing SQL query.

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Use the Gemini CLI to interact with BigQuery data in your terminal by using natural language prompts.
- Assistive AI features AI-powered assistance features in BigQuery, collectively referred to as Gemini in BigQuery , help you discover, prepare, query, and visualize your data.
- You can improve search performance by creating a search index , which lets BigQuery optimize queries that use the SEARCH function, as well as other functions and operators.
- You can use natural language prompts to generate data pipelines from various data sources or adapt existing data pipelines to suit your data engineering needs.

