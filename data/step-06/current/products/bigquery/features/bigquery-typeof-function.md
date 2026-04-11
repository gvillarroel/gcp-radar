---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.450Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery TYPEOF function"
feature_slug: "bigquery-typeof-function"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
keywords:
  - "query type introspection"
  - "BigQuery SQL TYPEOF"
  - "TYPEOF function"
  - "typeof function"
  - "typeof()"
  - "TYPEOF"
  - "return expression type"
  - "expression data type"
---

# BigQuery TYPEOF function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery added the TYPEOF function to return the data type of an expression.

## Extended Definition

BigQuery’s `TYPEOF` function is a SQL function that returns type information for an expression used in a query. In the cited documentation example, `TYPEOF(n)` is used to inspect a graph element expression and yields the graph element’s type representation (for example, `GRAPH NODE(...)`).

## Evidence Summary

The BigQuery data-types reference page example demonstrates `TYPEOF` being used in a query to expose the type of an expression (graph element), confirming its role as an expression type introspection function.

## Source Links

- [https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types)

## Supporting Pages

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- FinGraph MATCH ( n : Person ) RETURN n . name In the following example, the TYPEOF function is used to inspect the set of properties defined in the graph element type.
- FinGraph MATCH ( n : Person ) RETURN TYPEOF ( n ) AS t LIMIT 1 / --------------------------------------------------------+ t +--------------------------------------------------------+ GRAPH NODE(myproject.graph db.FinGraph)<id INT64, ...> +-------------------------------------------------------- / Graph path type Name Description GRAPH PATH A path in a property graph.

