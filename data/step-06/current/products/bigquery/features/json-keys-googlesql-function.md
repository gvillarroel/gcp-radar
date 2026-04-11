---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.392Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON_KEYS GoogleSQL function"
feature_slug: "json-keys-googlesql-function"
latest_feature_date: "2025-09-16"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "JSON key extraction"
  - "extract unique keys"
  - "unique JSON keys"
  - "extract JSON keys"
  - "JSON_KEYS function"
  - "JSON expression"
  - "JSON_KEYS()"
  - "JSON_KEYS"
---

# JSON_KEYS GoogleSQL function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery SQL now supports the JSON_KEYS function for extracting unique JSON keys from a JSON expression.

## Extended Definition

In BigQuery SQL (Standard SQL), `JSON_KEYS` is a function that extracts the unique keys from a JSON expression. The function’s documented behavior is key extraction from JSON data, and it is listed in the official BigQuery function references.

## Evidence Summary

The function reference identifies `JSON KEYS` as extracting unique JSON keys, while release notes confirm the feature’s introduction/use in BigQuery.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- JSON KEYS Extracts unique JSON keys from a JSON expression.
- KEYS.KEYSET FROM JSON Converts a STRING JSON keyset to a serialized BYTES value.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- SELECT CONTAINS SUBSTR ( JSON '{"lunch":"soup"}' , "lunch" , json scope = > "JSON KEYS" ) AS result ; / --------+ result +--------+ TRUE +-------- / EDIT DISTANCE EDIT DISTANCE ( value1 , value2 , [ max distance = > max distance value ] ) Description Computes the Levenshtein distance between two STRING or BYTES values.
- SELECT CONTAINS SUBSTR ( JSON '{"lunch":"soup"}' , "lunch" , json scope = > "JSON KEYS AND VALUES" ) AS result ; / --------+ result +--------+ TRUE +-------- / The following query searches for the value lunch in the keys of the JSON {"lunch":"soup"} and returns TRUE because lunch is a JSON key.
- If json scope is not provided, this is used by default. 'JSON KEYS' : Only the JSON keys are searched. 'JSON KEYS AND VALUES' : The JSON keys and values are searched.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can use the JSON KEYS function to extract unique JSON keys from a JSON expression, and you can specify a mode for some JSON functions that take a JSONPath to allow more flexibility in how the path matches the JSON structure.

