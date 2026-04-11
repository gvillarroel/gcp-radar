---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.829Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ORDER BY NULLS FIRST / NULLS LAST"
feature_slug: "bigquery-order-by-nulls-first-nulls-last"
latest_feature_date: "2020-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "BigQuery SQL NULL handling"
  - "NULL sort order"
  - "ORDER BY NULLS LAST"
  - "ORDER BY NULLS FIRST"
  - "NULLS FIRST/LAST"
  - "NULLS LAST clause"
  - "NULLS FIRST clause"
  - "NULLS LAST"
---

# BigQuery ORDER BY NULLS FIRST / NULLS LAST

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The `ORDER BY` clause now supports `NULLS FIRST` and `NULLS LAST` to control sort ordering of null values.

## Extended Definition

The `ORDER BY` clause now supports `NULLS FIRST` and `NULLS LAST` to control sort ordering of null values.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Example The following query selects approximately 10% of a table's data: SELECT FROM dataset . my table TABLESAMPLE SYSTEM ( 10 PERCENT ) MATCH RECOGNIZE clause FROM from item MATCH RECOGNIZE ( [ PARTITION BY partition expr [, ... ] ] ORDER BY order expr [{ ASC DESC }] [{ NULLS FIRST NULLS LAST }] [, ...] MEASURES { measures expr [AS] alias } [, ... ] [ AFTER MATCH SKIP { PAST LAST ROW TO NEXT ROW } ] PATTERN ( pattern ) DEFINE symbol AS boolean expr [, ... ] [ OPTIONS ( [ use longest match = { TRUE FALSE } ] ) ] ) Description The MATCH RECOGNIZE clause is an optional sub-clause of the FROM clause, used to filter and aggregate based on matches.
- SELECT LastName , COUNT ( ) FROM PlayerStats GROUP BY LastName HAVING SUM ( PointsScored ) > 15 ; ORDER BY clause ORDER BY expression [{ ASC DESC }] [{ NULLS FIRST NULLS LAST }] [, ...] The ORDER BY clause specifies a column or expression as the sort criterion for the result set.
- SELECT x , y FROM ( SELECT 1 AS x , true AS y UNION ALL SELECT 9 , true UNION ALL SELECT NULL , false ) ORDER BY x NULLS LAST ; / ------+-------+ x y +------+-------+ 1 true 9 true NULL false +------+------- / Use descending sort order.
- If null ordering isn't specified with NULLS FIRST or NULLS LAST : NULLS FIRST is applied by default if the sort order is ascending.

