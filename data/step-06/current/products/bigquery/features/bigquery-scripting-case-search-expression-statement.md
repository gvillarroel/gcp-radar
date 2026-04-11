---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.758Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery scripting CASE search_expression statement"
feature_slug: "bigquery-scripting-case-search-expression-statement"
latest_feature_date: "2021-11-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language"
keywords:
  - "searched CASE statement"
  - "searched CASE"
  - "CASE with search_expression"
  - "CASE search_expression"
  - "search_expression CASE"
  - "BigQuery scripting CASE"
  - "WHEN expression"
---

# BigQuery scripting CASE search_expression statement

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The CASE search_expression variant was added to Google Standard SQL scripting to execute statements when a search expression matches a WHEN expression.

## Extended Definition

The CASE search_expression variant was added to Google Standard SQL scripting to execute statements when a search expression matches a WHEN expression.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)

## Supporting Pages

### Procedural language \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: The page is a procedural language statement reference, so it may include CASE-related syntax, but the provided excerpt only highlights IF/WHILE and DECLARE.

Evidence snippets:
- DECLARE target product id INT64 DEFAULT 103 ; CASE WHEN EXISTS ( SELECT 1 FROM schema . products a WHERE product id = target product id ) THEN SELECT 'found product in products a table' ; WHEN EXISTS ( SELECT 1 FROM schema . products b WHERE product id = target product id ) THEN SELECT 'found product in products b table' ; ELSE SELECT 'did not find product' ; END CASE ; CASE search expression Syntax CASE search expression WHEN expression THEN sql statement list [...] [ ELSE sql statement list ] END CASE ; Description Executes the first sql statement list where the search expression is matches a WHEN expression.
- The search expression is evaluated once and then tested against each WHEN expression for equality until a match is found.

