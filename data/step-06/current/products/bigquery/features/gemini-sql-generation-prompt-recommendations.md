---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.296Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini SQL generation prompt recommendations"
feature_slug: "gemini-sql-generation-prompt-recommendations"
latest_feature_date: "2025-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
keywords:
  - "gemini"
  - "sql"
  - "generation"
  - "prompt"
  - "recommendations"
  - "recommends"
  - "natural"
  - "language"
---

# Gemini SQL generation prompt recommendations

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Gemini recommends natural-language prompts in the BigQuery SQL generation tool.

## Extended Definition

Gemini recommends natural-language prompts in the BigQuery SQL generation tool.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

## Supporting Pages

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- You can use natural language with Gemini in BigQuery, to find, join, and query table assets, visualize results, and seamlessly collaborate with others throughout the entire process.
- You can describe changes to the SQL translation output using natural language prompts or specify SQL patterns to find and replace.

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the Gemini CLI to interact with BigQuery data in your terminal by using natural language prompts.
- You can use natural language prompts to generate data pipelines from various data sources or adapt existing data pipelines to suit your data engineering needs.
- These functions help you use Cloud AI APIs for tasks such as the following: Natural language processing Machine translation Document processing Audio transcription Computer vision For more information, see Task-specific solutions overview .
- Generate natural language questions about your data, along with the SQL queries to answer those questions.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE EMBEDDING ( MODEL bqml tutorial.embedding model , ( SELECT 'improving password security' AS content ) ) ), top k => 5 , options => '{"fraction lists to search": 0.01}' ) ), STRUCT ( 600 AS max output tokens )); The output is similar to the following: +------------------------------------------------+------------------------------------------------------------+ generated prompt +------------------------------------------------+------------------------------------------------------------+ These patents suggest several project ideas to Propose some project ideas to improve user password improve user password security.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model for text embedding generation Create a remote model that represents a hosted Vertex AI text embedding generation model: In the Google Cloud console, go to the BigQuery page.
- GENERATE TEXT ( MODEL bqml tutorial.text model , ( SELECT CONCAT ( 'Propose some project ideas to improve user password security using the context below: ' , STRING AGG ( FORMAT ( "patent title: %s, patent abstract: %s" , base . title , base . abstract ), ', \n ' ) ) AS prompt , FROM VECTOR SEARCH ( TABLE bqml tutorial.embeddings , 'embedding' , ( SELECT embedding , content AS query FROM AI .
- Methods for improving security in data... +-----------------------------+--------------------+-------------------------------------------------+-------------------------------------------------+ Create the remote model for text generation Create a remote model that represents a hosted Vertex AI text generation model: In the Google Cloud console, go to the BigQuery page.

