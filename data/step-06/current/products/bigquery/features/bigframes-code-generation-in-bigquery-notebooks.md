---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.363Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigFrames code generation in BigQuery Notebooks"
feature_slug: "bigframes-code-generation-in-bigquery-notebooks"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation"
keywords:
  - "bigframes"
  - "code"
  - "generation"
  - "bigquery"
  - "notebooks"
  - "can"
  - "now"
  - "generate"
---

# BigFrames code generation in BigQuery Notebooks

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Notebooks can now generate DataFrames code that uses BigFrames libraries from prompts.

## Extended Definition

BigQuery Notebooks can now generate DataFrames code that uses BigFrames libraries from prompts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation](https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation)

## Supporting Pages

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Generate, complete, and explain Python code, including PySpark and BigQuery DataFrames.
- AI functions BigQuery offers various SQL functions that you can use for AI tasks such as text generation, text or unstructured data analysis, and translation.
- You can work with BigQuery ML capabilities through the Google Cloud console, the bq command-line tool, the REST API, or in Colab Enterprise notebooks .
- You can generate multimodal embeddings by using models provided by or hosted on Vertex AI, or by using models imported and run in BigQuery.

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...
- CONNECTION ID Replace the following: PROJECT ID : your Google Cloud project ID REGION : the connection region CONNECTION ID : the connection ID What's next Choose a text generation function Tune a model using your data Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.

### Autonomous embedding generation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation](https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation)
- Source ID: `site-docs-reference-5`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to enable autonomous embedding generation, ask your administrator to grant you the following IAM roles: To use a connection resource: BigQuery Connections User ( roles/bigquery.connectionUser ) on the connection To create or alter a table: BigQuery Data Editor ( roles/bigquery.dataEditor ) on the table Grant the connection's service account the following role so that it can access models hosted in Vertex AI endpoints: Vertex AI User ( roles/aiplatform.user ) on the project that has the connection For more information about granting roles, see Manage access to projects, folders, and organizations .
- For example, you can use queries similar to the following to create a table with autonomous embedding generation enabled, insert data, and then perform semantic search: CREATE TABLE mydataset . products ( name STRING , description STRING , description embedding STRUCT<result ARRAY<FLOAT64> , status STRING > GENERATED ALWAYS AS ( AI .
- To track the progress of the embedding generation, you can use a query similar to the following: SELECT COUNT ( ) AS total num rows , COUNTIF ( description embedding IS NOT NULL AND description embedding . status = '' ) AS total num generated embeddings FROM PROJECT ID .
- Note: To give feedback or request support for this feature, contact bq-vector-search@google.com This document describes how to use autonomous embedding generation for your data, which lets BigQuery maintain a column of embeddings on a table based on a source column.

