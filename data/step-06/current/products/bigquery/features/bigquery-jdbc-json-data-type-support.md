---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.716Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery JDBC JSON data type support"
feature_slug: "bigquery-jdbc-json-data-type-support"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
keywords:
  - "data type mapping"
  - "JSON data type"
  - "JSON field"
  - "SQL type JSON"
  - "JDBC JSON"
  - "JSON support"
  - "JSON type"
---

# BigQuery JDBC JSON data type support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The BigQuery JDBC driver now supports the JSON data type.

## Extended Definition

The provided Google Cloud documentation shows BigQuery’s standard SQL includes a native `JSON` data type, used to represent JSON data as a lightweight data-interchange format, with canonical behavior for values such as booleans, strings, and nulls and dedicated JSON literal guidance. It also documents JSON operators for working with JSON values, including JSON field access (`.field`) and JSON array subscript access (`[index]` or field name). However, these excerpts do not directly confirm BigQuery JDBC driver behavior, so JDBC-specific JSON support is not evidenced here.

## Evidence Summary

The cited pages establish BigQuery’s native SQL JSON type and its access/operators behavior, but do not provide direct evidence for BigQuery JDBC driver support for JSON.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)

## Supporting Pages

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Expect these canonicalization behaviors when creating a value of JSON type: Booleans, strings, and nulls are preserved exactly.
- SQL type name: INTERVAL JSON type Represents JSON, a lightweight data-interchange format.
- JSON type Name Description JSON Represents JSON, a lightweight data-interchange format.
- To learn more about the literal representation of a JSON type, see JSON literals .

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Return type JSON Example In the following example: json value is a JSON expression. .class is a JSON field access. .students is a JSON field access. [0] is a JSON subscript expression with an element offset that accesses the zeroth element of an array in the JSON value. ['name'] is a JSON subscript expression with a field name that accesses a field.
- Order of Precedence Operator Input Data Types Name Operator Arity 1 Field access operator STRUCT JSON Field access operator Binary Array subscript operator ARRAY Array position.
- Binary JSON subscript operator JSON Field name or array position in JSON.

