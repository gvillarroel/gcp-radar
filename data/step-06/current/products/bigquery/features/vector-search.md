---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.515Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Vector search"
feature_slug: "vector-search"
latest_feature_date: "2024-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
keywords:
  - "vector"
  - "search"
  - "bigquery"
  - "supports"
  - "semantic"
  - "similarity"
  - "over"
  - "embeddings"
---

# Vector search

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports semantic similarity search over embeddings by using the VECTOR_SEARCH function.

## Extended Definition

BigQuery supports semantic similarity search over embeddings by using the VECTOR_SEARCH function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)

## Supporting Pages

### Authenticate to Google and Google Cloud MCP servers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp)
- Source ID: `site-docs-reference-required-13`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Use the bq tool \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-bq](https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-bq)
- Source ID: `site-docs-reference-2`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to create a dataset, create a table, load data, and query data, ask your administrator to grant you the following IAM roles on the project: Run load jobs and query jobs: BigQuery Job User ( roles/bigquery.jobUser ) Create a dataset, create a table, load data into a table, and query a table: BigQuery Data Editor ( roles/bigquery.dataEditor ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Use the bq tool In this tutorial, you learn how to use bq , the Python-based command-line interface (CLI) tool for BigQuery to create a dataset, load sample data, and query tables.
- Delete the project If you used the BigQuery sandbox to query the public dataset, then billing is not enabled for your project, and you don't need to delete the project.
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Introduction to embeddings and vector search This document provides an overview of embeddings and vector search in BigQuery.
- For a notebook that illustrates this scenario, see Log Anomaly Detection & Investigation with Text Embeddings + BigQuery Vector Search .
- Generate and search multimodal embeddings Perform semantic search and retrieval-augmented generation Autonomous embedding generation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Some possible use cases are as follows: Retrieval-augmented generation (RAG) : Parse documents, perform vector search on content, and generate summarized answers to natural language questions using Gemini models, all within BigQuery.

