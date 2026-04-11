---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.626Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery STRUCT subscript operator"
feature_slug: "bigquery-struct-subscript-operator"
latest_feature_date: "2023-09-12"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/reference/standard-sql/operators"
keywords:
  - "positional STRUCT access"
  - "STRUCT positional access"
  - "STRUCT[offset] syntax"
  - "STRUCT[ordinal]"
  - "STRUCT subscript operator"
  - "STRUCT field access by index"
  - "STRUCT[] operator"
---

# BigQuery STRUCT subscript operator

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery SQL added a STRUCT subscript operator to access STRUCT fields by index, offset, or ordinal.

## Extended Definition

In BigQuery Standard SQL, the STRUCT subscript operator lets you access a field inside a STRUCT by position rather than by field name. Its syntax uses a STRUCT followed by a subscript specifier with positional keywords (for example, OFFSET or ORDINAL) to return the value at a selected position, and Google documents that SAFE positional keywords are not supported. If the field is within a STRUCT, this operator provides positional access based on the field’s location inside the STRUCT.

## Evidence Summary

The operators reference page documents the STRUCT subscript syntax, position-based semantics (index via OFFSET/ORDINAL), and usage examples confirming it returns a field from a STRUCT by position while noting SAFE positional subscript is not supported.

## Source Links

- [https://cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://cloud.google.com/bigquery/docs/reference/standard-sql/operators)

## Supporting Pages

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- SELECT [ "coffee" , "tea" , "milk" ][ OFFSET ( 6 ) ] AS item offset Struct subscript operator Note: Syntax characters enclosed in double quotes ( "" ) are literal and required. struct expression "[" struct subscript specifier "]" struct subscript specifier : { index position keyword ( index ) } position keyword : { OFFSET ORDINAL } Description Gets the value of a field at a selected position in a struct.
- Input values: STRUCT JSON GRAPH ELEMENT Note: If the field to access is within a STRUCT , you can use the struct subscript operator to access the field by its position within the STRUCT instead of by its name.
- Examples In following query, the struct subscript operator is used to return values at specific locations in item struct using position keywords.
- Note: The struct subscript operator doesn't support SAFE positional keywords at this time.

