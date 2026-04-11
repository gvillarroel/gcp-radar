---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.498Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery JSON_KEYS function"
feature_slug: "bigquery-json-keys-function"
latest_feature_date: "2024-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "unique key extraction"
  - "JSON key extraction"
  - "extract unique JSON keys"
  - "JSON_KEYS function"
  - "JSON keys function"
  - "JSON expression"
  - "JSON_KEYS()"
---

# BigQuery JSON_KEYS function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery introduces the JSON_KEYS function to extract unique keys from a JSON expression.

## Extended Definition

BigQuery’s JSON_KEYS function is a SQL function that extracts the unique keys from a JSON expression. The provided Google Cloud documentation also shows BigQuery JSON access patterns (JSON field access/subscript and JSON key search modes), but it does not fully detail the function’s return type in these excerpts.

## Evidence Summary

The release notes page directly states the JSON KEYS feature and its purpose, while the other reference pages provide adjacent JSON-handling context used to interpret its role.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For example: -- Error: Field ordinal 6 is out of bounds in STRUCT SELECT STRUCT<INT64 , STRING , BOOL > ( 23 , "tea" , FALSE ) [ 6 ] AS field offset -- Error: Field ordinal 6 is out of bounds in STRUCT SELECT STRUCT<INT64 , STRING , BOOL > ( 23 , "tea" , FALSE ) [ OFFSET ( 6 ) ] AS field offset JSON subscript operator Note: Syntax characters enclosed in double quotes ( "" ) are literal and required. json expression "[" array element id "]" json expression "[" field name "]" Description Gets a value of an array element or field in a JSON expression.
- Return type JSON Example In the following example: json value is a JSON expression. .class is a JSON field access. .students is a JSON field access. [0] is a JSON subscript expression with an element offset that accesses the zeroth element of an array in the JSON value. ['name'] is a JSON subscript expression with a field name that accesses a field.
- If a negative value is entered, or the value is greater than or equal to the size of the array, or the JSON expression doesn't represent a JSON array, a SQL NULL is returned. [field name] : A STRING expression that represents the name of a field in JSON.
- Input values: JSON expression : The JSON expression that contains an array element or field to return. [array element id] : An INT64 expression that represents a zero-based index in the array.

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

