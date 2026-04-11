---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.930Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON functions in BigQuery standard SQL"
feature_slug: "json-functions-in-bigquery-standard-sql"
latest_feature_date: "2016-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "PARSE_JSON"
  - "JSON_EXTRACT_SCALAR()"
  - "JSON_EXTRACT_SCALAR"
  - "JSON_EXTRACT()"
  - "TO_JSON_STRING"
  - "JSON_EXTRACT"
  - "JSON functions"
  - "JSON_VALUE"
---

# JSON functions in BigQuery standard SQL

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added JSON functions support in standard SQL.

## Extended Definition

BigQuery added JSON functions support in standard SQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- JSON EXTRACT SCALAR( json , json path ) Selects a value in json according to the JSONPath expression json path . json path must be a string constant.
- JSON EXTRACT SCALAR() Selects a value according to the JSONPath expression and returns a JSON scalar.
- JSON EXTRACT SCALAR() Selects a value according to the JSONPath expression and returns a JSON scalar.
- Syntax JSON functions JSON EXTRACT() Selects a value according to the JSONPath expression and returns a JSON string.

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: The page is explicitly about GoogleSQL/Standard SQL functions, and therefore provides relevant context for which JSON functions are available in Standard SQL.

Evidence snippets:
- JSON EXTRACT SCALAR (Deprecated) Extracts a JSON scalar value and converts it to a SQL STRING value.
- JSON EXTRACT ARRAY (Deprecated) Extracts a JSON array and converts it to a SQL ARRAY<JSON-formatted STRING> or ARRAY<JSON> value.
- JSON EXTRACT (Deprecated) Extracts a JSON value and converts it to a SQL JSON-formatted STRING or JSON value.
- JSON EXTRACT STRING ARRAY (Deprecated) Extracts a JSON array of scalar values and converts it to a SQL ARRAY<STRING> value.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- EXCEPT ( Lunch , Dinner )), 'potato' ); / -------------------+-------------------------+------------------+ Breakfast Lunch Dinner +-------------------+-------------------------+------------------+ Potato pancakes Toasted cheese sandwich Beef stroganoff +-------------------+-------------------------+------------------ / The following query searches for the value lunch in the JSON {"lunch":"soup"} and returns FALSE because the default json scope is "JSON VALUES" , and lunch is a JSON key, not a JSON value.
- SELECT CONTAINS SUBSTR ( JSON '{"lunch":"soup"}' , "lunch" , json scope = > "JSON VALUES" ) AS result ; / --------+ result +--------+ FALSE +-------- / The following query searches for the value lunch in the keys and values of the JSON {"lunch":"soup"} and returns TRUE because lunch is a JSON key.
- SELECT CONTAINS SUBSTR ( JSON '{"lunch":"soup"}' , "lunch" ) AS result ; / --------+ result +--------+ FALSE +-------- / The following query searches for the value lunch in the values of the JSON {"lunch":"soup"} and returns FALSE because lunch is a JSON key, not a JSON value.
- It has no effect if expression isn't JSON or doesn't contain a JSON field. 'JSON VALUES' : Only the JSON values are searched.

