---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.754Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "WITH RECURSIVE clause in Google Standard SQL"
feature_slug: "with-recursive-clause-in-google-standard-sql"
latest_feature_date: "2022-02-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "forward references in WITH"
  - "recursive CTE"
  - "recursive common table expression"
  - "recursive WITH query"
  - "WITH RECURSIVE"
  - "recursive WITH"
---

# WITH RECURSIVE clause in Google Standard SQL

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The WITH RECURSIVE clause enables recursive and forward references within WITH queries in BigQuery Google Standard SQL.

## Extended Definition

The WITH RECURSIVE clause enables recursive and forward references within WITH queries in BigQuery Google Standard SQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- It's also okay for recursive entries to depend on non-recursive entries and vice-versa: WITH RECURSIVE T0 AS ( SELECT 1 AS n ), T1 AS (( SELECT FROM T0 ) UNION ALL ( SELECT n + 1 FROM T1 WHERE n < 4 )), T2 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + 1 FROM T2 WHERE n < 4 )), T3 AS ( SELECT FROM T1 INNER JOIN T2 USING ( n )) SELECT FROM T3 ORDER BY n / ---+ n +---+ 1 2 3 4 +--- / Aggregate functions can be invoked in subqueries, as long as they aren't aggregating on the table being defined: WITH RECURSIVE T0 AS ( SELECT FROM UNNEST ( [ 60 , 20 , 30 ] )), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + ( SELECT COUNT ( ) FROM T0 ) FROM T1 WHERE n < 4 )) SELECT FROM T1 ORDER BY n / ---+ n +---+ 1 4 +--- / INNER JOIN can be used inside subqueries: WITH RECURSIVE T0 AS ( SELECT 1 AS n ), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + 1 FROM T1 INNER JOIN T0 USING ( n ))) SELECT FROM T1 ORDER BY n / ---+ n +---+ 1 2 +--- / CROSS JOIN can be used inside subqueries: WITH RECURSIVE T0 AS ( SELECT 2 AS p ), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT T1 . n + T0 . p FROM T1 CROSS JOIN T0 WHERE T1 . n < 4 )) SELECT FROM T1 CROSS JOIN T0 ORDER BY n / ---+---+ n p +---+---+ 1 2 3 2 5 2 +---+--- / Recursive CTEs can be used inside CREATE TABLE AS SELECT statements.
- Angle brackets <> Literal angle brackets SQL syntax query statement : query expr query expr : [ WITH [ RECURSIVE ] { non recursive cte recursive cte }[, ...] ] { select ( query expr ) set operation } [ ORDER BY expression [{ ASC DESC }] [, ...] ] [ LIMIT count [ OFFSET skip rows ] ] select : SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list [ FROM from clause [, ...] ] [ WHERE bool expression ] [ GROUP BY group by specification ] [ HAVING bool expression ] [ QUALIFY bool expression ] [ WINDOW window clause ] SELECT statement SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list select list : { select all select expression } [, ...] select all : [ expression . ] [ EXCEPT ( column name [, ...] ) ] [ REPLACE ( expression AS column name [, ...] ) ] select expression : expression [ [ AS ] alias ] The SELECT list defines the columns that the query will return.
- WITH RECURSIVE T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + 1 FROM T1 ORDER BY n )) SELECT FROM T1 ; -- Error The following recursive CTE is disallowed because table T1 can't be recursively referenced from inside an inner WITH clause WITH RECURSIVE T1 AS (( SELECT 1 AS n ) UNION ALL ( WITH t AS ( SELECT n FROM T1 ) SELECT FROM t )) SELECT FROM T1 -- Error CTE rules and constraints Common table expressions (CTEs) can be referenced inside the query expression that contains the WITH clause.
- Examples SELECT FROM UNNEST ( ARRAY<STRING> [ 'a' , 'b' , 'c' , 'd' , 'e' ] ) AS letter ORDER BY letter ASC LIMIT 2 ; / ---------+ letter +---------+ a b +--------- / SELECT FROM UNNEST ( ARRAY<STRING> [ 'a' , 'b' , 'c' , 'd' , 'e' ] ) AS letter ORDER BY letter ASC LIMIT 3 OFFSET 1 ; / ---------+ letter +---------+ b c d +--------- / WITH clause WITH [ RECURSIVE ] { non recursive cte recursive cte }[, ...] A WITH clause contains one or more common table expressions (CTEs).

