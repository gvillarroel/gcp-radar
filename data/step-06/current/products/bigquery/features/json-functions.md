---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.950Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON functions"
feature_slug: "json-functions"
latest_feature_date: "2014-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
keywords:
  - "JSON parsing functions"
  - "JSON_EXTRACT_SCALAR"
  - "JSON operators"
  - "JSON_EXTRACT"
  - "JSON functions"
  - "JSON_VALUE"
  - "JSON support"
  - "JSON_QUERY"
---

# JSON functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery introduced JSON functions to support JSON-oriented query operations.

## Extended Definition

BigQuery introduced JSON functions to support JSON-oriented query operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)

## Supporting Pages

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: As a complete BigQuery function reference, it includes the JSON function names in the same reference list, so it is useful for confirming availability of JSON functions.

Evidence snippets:
- JSON EXTRACT ARRAY (Deprecated) Extracts a JSON array and converts it to a SQL ARRAY<JSON-formatted STRING> or ARRAY<JSON> value.
- JSON QUERY ARRAY Extracts a JSON array and converts it to a SQL ARRAY<JSON-formatted STRING> or ARRAY<JSON> value.
- JSON EXTRACT (Deprecated) Extracts a JSON value and converts it to a SQL JSON-formatted STRING or JSON value.
- JSON EXTRACT SCALAR (Deprecated) Extracts a JSON scalar value and converts it to a SQL STRING value.

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

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- SELECT json value . class . students [ 0 ][ 'name' ] AS first student FROM UNNEST ( [ JSON '{"class" : {"students" : [{"name" : "Jane"}]}}' , JSON '{"class" : {"students" : []}}' , JSON '{"class" : {"students" : [{"name" : "John"}, {"name": "Jamie"}]}}' ] ) AS json value ; / -----------------+ first student +-----------------+ "Jane" NULL "John" +----------------- / Arithmetic operators All arithmetic operators accept input of numeric type T , and the result type has type T unless otherwise indicated in the description below: Name Syntax Addition X + Y Subtraction X - Y Multiplication X Y Division X / Y Unary Plus + X Unary Minus - X NOTE: Divide by zero operations return an error.
- Return type JSON Example In the following example: json value is a JSON expression. .class is a JSON field access. .students is a JSON field access. [0] is a JSON subscript expression with an element offset that accesses the zeroth element of an array in the JSON value. ['name'] is a JSON subscript expression with a field name that accesses a field.
- If a field isn't found in a JSON value, a SQL NULL is returned.
- For more information, see JSON functions .

