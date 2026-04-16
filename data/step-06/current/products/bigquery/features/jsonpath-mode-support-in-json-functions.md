---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.431Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSONPath mode support in JSON functions"
feature_slug: "jsonpath-mode-support-in-json-functions"
latest_feature_date: "2024-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "jsonpath"
  - "mode"
  - "json"
  - "functions"
  - "some"
  - "bigquery"
  - "selectable"
  - "modes"
---

# JSONPath mode support in JSON functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Some BigQuery JSON functions support selectable JSONPath modes that provide flexibility in how paths match JSON data structures.

## Extended Definition

Some BigQuery JSON functions support selectable JSONPath modes that provide flexibility in how paths match JSON data structures.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON-formatted string: '{"a": [["b", "c"], "d"], "e":"f"}' JSON path: "$.a[0][1]" JSON result: "c" Modes for JSONPath Some JSON functions that take a JSONPath let you specify a mode that indicates how the JSONPath matches the JSON data structure.
- The following modes are supported: Mode Description Example JSONPath strict (default) The JSONPath must structurally match the JSON data "$.class.students" lax Implicitly adapts the path to the structure of the JSON data.
- Home Documentation Data analytics BigQuery Reference Send feedback JSON functions Stay organized with collections Save and categorize content based on your preferences.
- GoogleSQL for BigQuery supports the following functions, which can retrieve and transform JSON data.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- NORMALIZE AND CASEFOLD supports four optional normalization modes: Value Name Description NFC Normalization Form Canonical Composition Decomposes and recomposes characters by canonical equivalence.
- NORMALIZE supports four optional normalization modes: Value Name Description NFC Normalization Form Canonical Composition Decomposes and recomposes characters by canonical equivalence.
- Home Documentation Data analytics BigQuery Reference Send feedback String functions Stay organized with collections Save and categorize content based on your preferences.
- GoogleSQL for BigQuery supports string functions.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Examples: PARSE PACKED IP('48.49.50.51') returns 'MDEyMw==' PARSE PACKED IP('3031:3233:3435:3637:3839:4041:4243:4445') returns 'MDEyMzQ1Njc4OUBBQkNERQ==' JSON functions BigQuery's JSON functions give you the ability to find values within your stored JSON data, by using JSONPath -like expressions.
- Use JSON functions instead of BigQuery's regular expression functions if working with structured data, as JSON functions are easier to use.
- Syntax JSON functions JSON EXTRACT() Selects a value according to the JSONPath expression and returns a JSON string.
- JSON functions JSON EXTRACT() Selects a value according to the JSONPath expression and returns a JSON string.

