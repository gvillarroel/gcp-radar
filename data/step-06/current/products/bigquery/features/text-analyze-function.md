---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.582Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TEXT_ANALYZE function"
feature_slug: "text-analyze-function"
latest_feature_date: "2024-03-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "textalyze"
  - "TEXT_ANALYZE function reference"
  - "TEXT_ANALYZE output"
  - "TEXT_ANALYZE function"
  - "TEXT_ANALYZE SQL"
  - "TEXT_ANALYZE()"
  - "TEXT_ANALYZE"
  - "TEXT ANALYZE"
---

# TEXT_ANALYZE function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The TEXT_ANALYZE function is now generally available in BigQuery.

## Extended Definition

The provided BigQuery SQL DDL reference shows that BigQuery supports search index creation with text analyzer settings, including the supported analyzers LOG ANALYZER, NO OP ANALYZER, and PATTERN ANALYZER, which control token generation for search indexing. The excerpts do not explicitly document a function named TEXT_ANALYZE() itself.

## Evidence Summary

The cited page provides evidence for BigQuery search index analyzer configuration in DDL but does not directly confirm the TEXT_ANALYZE function.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TABLE dataset . my table ( a STRING , b INT64 ); CREATE SEARCH INDEX my index ON dataset . my table ( ALL COLUMNS ); The following example creates a search index on columns a , my struct.string field , and b that uses the NO OP ANALYZER text analyzer.
- For examples of JSON-formatted strings with different text analyzers, see Work with text analyzers . data types ARRAY<STRING> Example: data types=['STRING', 'INT64', 'TIMESTAMP'] An array of data types to set when creating a search index.
- The supported values are 'LOG ANALYZER' , 'NO OP ANALYZER' , and 'PATTERN ANALYZER' . analyzer options JSON-formatted STRING The text analyzer configurations to set when creating a search index.
- The following options are supported: NAME VALUE Details analyzer STRING Example: analyzer='LOG ANALYZER' The text analyzer to use to generate tokens for the search index.

