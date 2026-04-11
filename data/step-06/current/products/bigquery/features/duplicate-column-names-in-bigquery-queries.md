---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.812Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Duplicate column names in BigQuery queries"
feature_slug: "duplicate-column-names-in-bigquery-queries"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "duplicate column aliases"
  - "query duplicate column labels"
  - "SELECT duplicate names"
  - "duplicate output columns"
  - "duplicate column names"
  - "duplicate columns"
  - "same column name in result"
---

# Duplicate column names in BigQuery queries

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now allows queries to return duplicate column names.

## Extended Definition

BigQuery now allows queries to return duplicate column names.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- When a top-level SELECT list contains duplicate column names and no destination table is specified, all duplicate columns, except for the first one, are automatically renamed to make them unique.
- Example: SELECT 1 AS a , 2 AS a ; / ---+-----+ a a 1 +---+-----+ 1 2 +---+----- / Duplicate column names in a table or view definition aren't supported.
- These statements with queries that contain duplicate column names will fail: -- This query fails.
- In the case where the UNPIVOT result has duplicate column names: SELECT is allowed.

