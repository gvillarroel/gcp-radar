---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.255Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini-assisted aggregation in data preparation"
feature_slug: "gemini-assisted-aggregation-in-data-preparation"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "gemini"
  - "assisted"
  - "aggregation"
  - "preparation"
  - "assistance"
  - "bigquery"
  - "can"
  - "aggregate"
---

# Gemini-assisted aggregation in data preparation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Gemini assistance in BigQuery data preparation can aggregate table data.

## Extended Definition

Gemini assistance in BigQuery data preparation can aggregate table data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

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

### Approximate aggregate functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback Approximate aggregate functions Stay organized with collections Save and categorize content based on your preferences.
- GoogleSQL for BigQuery supports approximate aggregate functions.
- This makes approximate aggregation appropriate for large data streams for which linear memory usage is impractical, as well as for data that is already approximate.
- These functions typically require less memory than exact aggregation functions like COUNT(DISTINCT ...) , but also introduce statistical uncertainty.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Syntax: export function aggregate ( state , aggregateParam [, ...][, nonAggregateParam ]){...} Parameters: state : The aggregate state, which is initialState on the first invocation, and then the return value of the previous call to aggregate thereafter. aggregateParam : The name of an aggregation parameter in the JavaScript UDAF.
- Example: export function finalize ( finalState , initialSum ) Serialization functions for a JavaScript UDAF If you want to work with non-serializable aggregation states, the JavaScript UDAF must provide the serialize and deserialize functions: serialize function: Converts an aggregation state into a BigQuery-serializable object.
- Syntax: export function merge ( state , partialState [, nonAggregateParam ]){...} Parameters: state : The state into which partialState is merged. partialState : The second aggregation state to merge. nonAggregateParam : Replace with a NOT AGGREGATE function parameter name.
- Syntax: export function deserialize ( serializedState [, nonAggregateParam ]){...} Arguments: serializedState : The serialized state to convert into the aggregation state. nonAggregateParam : Replace with a NOT AGGREGATE function parameter name.

