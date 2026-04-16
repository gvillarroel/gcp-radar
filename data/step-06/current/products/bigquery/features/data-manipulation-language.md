---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.910Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Data Manipulation Language"
feature_slug: "data-manipulation-language"
latest_feature_date: "2016-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/graph-iso-standards"
keywords:
  - "manipulation"
  - "language"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
  - "inserting"
  - "updating"
---

# Data Manipulation Language

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL supports Data Manipulation Language for inserting, updating, and deleting data.

## Extended Definition

BigQuery Standard SQL supports Data Manipulation Language for inserting, updating, and deleting data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)

## Supporting Pages

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transform data with data manipulation language (DML) The BigQuery data manipulation language (DML) lets you update, insert, and delete data from your BigQuery tables.
- Rows that were recently written using the tabledata.insertall streaming method can't be modified with data manipulation language (DML), such as UPDATE , DELETE , MERGE , or TRUNCATE statements.
- For more information, see Use data manipulation language (DML) with recently streamed data .
- Projects that perform fine-grained DML operations by using on-demand pricing , or without a BACKGROUND assignment, process offloaded garbage collection tasks using internal BigQuery resources and are charged at on-demand pricing rates.

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On-demand query size calculation If you use on-demand billing, BigQuery charges for data manipulation language (DML) statements based on the number of bytes processed by the statement.
- Data manipulation language (DML) statements in GoogleSQL The BigQuery data manipulation language (DML) enables you to update, insert, and delete data from your BigQuery tables.
- For information about how to use DML statements, see Transform data with data manipulation language and Update partitioned table data using DML .
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

### BigQuery Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)
- Source ID: `site-api-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how BigQuery Graph supports these standards.
- BigQuery Graph and ISO standards The document describes how BigQuery Graph supports the ISO international standard query language for graph databases.
- Standard SQL/PGQ GQL BigQuery Graph Query Graph pattern matching capabilities Shares the core Graph Pattern Matching Language (GPML) functionalities with GQL.
- BigQuery Graph supports additional features in the ISO standards.

