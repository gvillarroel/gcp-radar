---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.377Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini Cloud Assist chat for SQL and Python generation"
feature_slug: "gemini-cloud-assist-chat-for-sql-and-python-generation"
latest_feature_date: "2025-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
keywords:
  - "gemini"
  - "assist"
  - "chat"
  - "sql"
  - "python"
  - "generation"
  - "can"
  - "generate"
---

# Gemini Cloud Assist chat for SQL and Python generation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Gemini Cloud Assist chat can generate SQL queries and Python code in BigQuery.

## Extended Definition

Gemini Cloud Assist chat can generate SQL queries and Python code in BigQuery.

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
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- You can use Gemini in BigQuery to generate or suggest code in either SQL or Python, and to explain an existing SQL query.
- To use natural language to generate SQL queries or Python code , use comments in code or the SQL generation tool .

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.
- This tutorial shows you how to create a remote model that's based on the gemini-2.5-flash model , and how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis.
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Extract a list of only 3 key words from this review.

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assistive AI features AI-powered assistance features in BigQuery, collectively referred to as Gemini in BigQuery , help you discover, prepare, query, and visualize your data.
- Generate, complete, and explain Python code, including PySpark and BigQuery DataFrames.
- For more information about assistive AI features, see Gemini in BigQuery .
- These functions help you perform tasks such as content generation, analysis, summarization, structured data extraction, classification, embedding generation, and data enrichment.

