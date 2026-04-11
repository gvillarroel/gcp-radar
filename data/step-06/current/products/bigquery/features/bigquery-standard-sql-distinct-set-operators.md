---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.886Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Standard SQL DISTINCT set operators"
feature_slug: "bigquery-standard-sql-distinct-set-operators"
latest_feature_date: "2017-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "INTERSECT/EXCEPT DISTINCT"
  - "SELECT INTERSECT DISTINCT"
  - "INTERSECT DISTINCT"
  - "SELECT EXCEPT DISTINCT"
  - "EXCEPT DISTINCT"
  - "distinct set operators"
  - "Standard SQL set operators"
---

# BigQuery Standard SQL DISTINCT set operators

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL now supports INTERSECT DISTINCT and EXCEPT DISTINCT as set operators.

## Extended Definition

BigQuery Standard SQL now supports INTERSECT DISTINCT and EXCEPT DISTINCT as set operators.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- SELECT item , purchases , category , LAST VALUE ( item ) OVER ( item window ) AS most popular FROM Produce WINDOW item window AS ( PARTITION BY category ORDER BY purchases ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( d ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS ( b ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ), d AS ( c ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( c ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS b Set operators query expr [ { INNER [ { FULL LEFT } [ OUTER ] ] } ] { UNION { ALL DISTINCT } INTERSECT DISTINCT EXCEPT DISTINCT } [ { BY NAME [ ON ( column list ) ] [ STRICT ] CORRESPONDING [ BY ( column list ) ] } ] query expr Set operators combine or filter results from two or more input queries into a single result set.
- The following examples illustrate the use of parentheses with set operations: -- Same set operations, no parentheses. query1 UNION ALL query2 UNION ALL query3 ; -- Different set operations, parentheses needed. query1 UNION ALL ( query2 UNION DISTINCT query3 ); -- Invalid query1 UNION ALL query2 UNION DISTINCT query3 ; -- Same set operations, no parentheses. query1 EXCEPT DISTINCT query2 EXCEPT DISTINCT query3 ; -- Equivalent query with optional parentheses, returns same results. ( query1 EXCEPT DISTINCT query2 ) EXCEPT DISTINCT query3 ; -- Different execution order with a subquery, parentheses needed. query1 EXCEPT DISTINCT ( query2 EXCEPT DISTINCT query3 ); Set operator behavior with duplicate rows Consider a given row R that appears exactly m times in the first input query and n times in the second input query, where m >= 0 and n >= 0 : For UNION ALL , row R appears exactly m + n times in the result.
- Examples SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 2 , 3 , 3 , 4 ] ) AS number INTERSECT DISTINCT SELECT FROM UNNEST ( ARRAY<INT64> [ 2 , 3 , 3 , 5 ] ) AS number ; / --------+ number +--------+ 2 3 +-------- / The following example shows multiple chained operations: SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 2 , 3 , 3 , 4 ] ) AS number INTERSECT DISTINCT SELECT FROM UNNEST ( ARRAY<INT64> [ 2 , 3 , 3 , 5 ] ) AS number INTERSECT DISTINCT SELECT FROM UNNEST ( ARRAY<INT64> [ 3 , 3 , 4 , 5 ] ) AS number ; / --------+ number +--------+ 3 +-------- / The following example shows input queries that specify multiple columns.
- Examples SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 2 , 3 , 3 , 4 ] ) AS number EXCEPT DISTINCT SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 2 ] ) AS number ; / --------+ number +--------+ 3 4 +-------- / The following example shows multiple chained operations: SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 2 , 3 , 3 , 4 ] ) AS number EXCEPT DISTINCT SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 2 ] ) AS number EXCEPT DISTINCT SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 4 ] ) AS number ; / --------+ number +--------+ 3 +-------- / The following example modifies the execution behavior of the set operations.

