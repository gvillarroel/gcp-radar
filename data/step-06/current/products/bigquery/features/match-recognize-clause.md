---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.407Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "MATCH_RECOGNIZE clause"
feature_slug: "match-recognize-clause"
latest_feature_date: "2025-07-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "MATCH_RECOGNIZE clause"
  - "MEASURES"
  - "MATCH_RECOGNIZE SQL"
  - "MATCH_RECOGNIZE"
  - "pattern matching"
  - "aggregate matches"
  - "row pattern"
---

# MATCH_RECOGNIZE clause

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports the MATCH_RECOGNIZE SQL clause for pattern matching, filtering, and aggregating matches across rows in a table.

## Extended Definition

In BigQuery Standard SQL, MATCH_RECOGNIZE is an optional sub-clause of the FROM clause that filters and aggregates rows by matching defined row patterns across table data. It uses PATTERN and DEFINE to describe what sequences of rows qualify, and MEASURES (with expressions such as ARRAY_AGG) to output aggregated results for each match, with matching behavior configurable via options like AFTER MATCH SKIP and USE LONGEST MATCH. Official release notes list MATCH_RECOGNIZE as a new feature in 2025 (shown with dates July 22, 2025 and November 05, 2025).

## Evidence Summary

The query syntax page defines how MATCH_RECOGNIZE is structured and used in SQL, while the release-notes page confirms its introduction and public availability in 2025.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: The provided excerpt does not show MATCH_RECOGNIZE syntax, so any coverage on this feature is at most incidental.

Evidence snippets:
- SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES MATCH NUMBER () AS match number , ARRAY AGG ( STRUCT ( MATCH ROW NUMBER () AS row , CLASSIFIER () AS symbol , sale date , product category )) AS sales PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); / ----------+--------------+-----------+--------------+-----------------+------------------------+ customer match number sales.row sales.symbol sales.sale date sales.product category +----------+--------------+-----------+--------------+-----------------+------------------------+ Ian 1 1 low 2024-02-01 Books 2 low 2024-02-08 Clothing 3 mid 2024-02-10 Clothing 4 high 2024-03-15 Electronics 5 high 2024-03-15 Electronics Ian 2 1 low 2024-03-21 Software 2 mid 2024-04-07 Books 3 high 2024-07-07 Clothing +----------+--------------+-----------+--------------+-----------------+------------------------ / The following example is similar to the previous one, except it allows overlapping matches: SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES MATCH NUMBER () AS match number , ARRAY AGG ( STRUCT ( MATCH ROW NUMBER () AS row , CLASSIFIER () AS symbol , sale date , product category )) AS sales AFTER MATCH SKIP TO NEXT ROW PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); / ----------+--------------+-----------+--------------+-----------------+------------------------+ customer match number sales.row sales.symbol sales.sale date sales.product category +----------+--------------+-----------+--------------+-----------------+------------------------+ Ian 1 1 low 2024-02-01 Books 2 low 2024-02-08 Clothing 3 mid 2024-02-10 Clothing 4 high 2024-03-15 Electronics 5 high 2024-03-15 Electronics Ian 2 1 low 2024-02-08 Clothing 2 mid 2024-02-10 Clothing 3 high 2024-03-15 Electronics 4 high 2024-03-15 Electronics Ian 3 1 low 2024-03-21 Software 2 mid 2024-04-07 Books 3 high 2024-07-07 Clothing +----------+--------------+-----------+--------------+-----------------+------------------------ / Best practices To scale the performance of queries that contain the MATCH RECOGNIZE clause, use the following best practices: Use the PARTITION BY clause.
- Example The following query selects approximately 10% of a table's data: SELECT FROM dataset . my table TABLESAMPLE SYSTEM ( 10 PERCENT ) MATCH RECOGNIZE clause FROM from item MATCH RECOGNIZE ( [ PARTITION BY partition expr [, ... ] ] ORDER BY order expr [{ ASC DESC }] [{ NULLS FIRST NULLS LAST }] [, ...] MEASURES { measures expr [AS] alias } [, ... ] [ AFTER MATCH SKIP { PAST LAST ROW TO NEXT ROW } ] PATTERN ( pattern ) DEFINE symbol AS boolean expr [, ... ] [ OPTIONS ( [ use longest match = { TRUE FALSE } ] ) ] ) Description The MATCH RECOGNIZE clause is an optional sub-clause of the FROM clause, used to filter and aggregate based on matches.
- SELECT FROM ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ) MATCH RECOGNIZE ( ORDER BY x MEASURES ARRAY AGG ( high . x ) AS high agg , ARRAY AGG ( low . x ) AS low agg AFTER MATCH SKIP TO NEXT ROW PATTERN ( low high + ) DEFINE low AS x < = 2 , high AS x > = 2 OPTIONS ( use longest match = TRUE ) ); / ----------+---------+ high agg low agg +----------+---------+ NULL [1] [2,3] NULL [3] NULL +----------+--------- / The following examples reference a table called Sales : WITH Sales AS ( SELECT 'Daisy' AS customer , DATE '2024-01-03' AS sale date , 'Electronics' AS product category , 500 AS amount UNION ALL SELECT 'Daisy' , DATE '2024-01-04' , 'Software' , 30 UNION ALL SELECT 'Ian' , DATE '2024-02-01' , 'Books' , 20 UNION ALL SELECT 'Ian' , DATE '2024-02-08' , 'Clothing' , 30 UNION ALL SELECT 'Ian' , DATE '2024-02-10' , 'Clothing' , 90 UNION ALL SELECT 'Daisy' , DATE '2024-03-15' , 'Software' , 40 UNION ALL SELECT 'Ian' , DATE '2024-03-15' , 'Electronics' , 300 UNION ALL SELECT 'Ian' , DATE '2024-03-15' , 'Electronics' , 400 UNION ALL SELECT 'Ian' , DATE '2024-03-21' , 'Software' , 30 UNION ALL SELECT 'Ian' , DATE '2024-04-07' , 'Books' , 50 UNION ALL SELECT 'Daisy' , DATE '2024-06-28' , 'Electronics' , 400 UNION ALL SELECT 'Daisy' , DATE '2024-06-29' , 'Clothing' , 100 UNION ALL SELECT 'Daisy' , DATE '2024-06-30' , 'Software' , 30 UNION ALL SELECT 'Ian' , DATE '2024-07-07' , 'Clothing' , 110 ) SELECT FROM Sales ; / ----------+------------+------------------+--------+ customer sale date product category amount +----------+------------+------------------+--------+ Daisy 2024-01-03 Electronics 500 Daisy 2024-01-04 Software 30 Ian 2024-02-01 Books 20 Ian 2024-02-08 Clothing 30 Ian 2024-02-10 Clothing 90 Daisy 2024-03-15 Software 40 Ian 2024-03-15 Electronics 300 Ian 2024-03-15 Electronics 400 Ian 2024-03-21 Software 30 Ian 2024-04-07 Books 50 Daisy 2024-06-28 Electronics 400 Daisy 2024-06-29 Clothing 100 Daisy 2024-06-30 Software 30 Ian 2024-07-07 Clothing 110 +----------+------------+------------------+-------- / The following example finds electronics purchases, followed by any number of other purchases of other types, followed by software purchases.
- SELECT FROM ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ) MATCH RECOGNIZE ( ORDER BY x MEASURES ARRAY AGG ( high . x ) AS high agg , ARRAY AGG ( low . x ) AS low agg AFTER MATCH SKIP TO NEXT ROW PATTERN ( low high ) DEFINE low AS x < = 2 , high AS x > = 2 ); / ----------+---------+ high agg low agg +----------+---------+ NULL [1] NULL [2] [3] NULL +----------+--------- / The following example is similar to the preceding example, except that the pattern is changed to low high+ and the use longest match option is set to TRUE .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- November 05, 2025 Feature You can use the MATCH RECOGNIZE clause in your SQL queries to filter and aggregate matches across rows in a table.
- July 22, 2025 Feature You can now use the MATCH RECOGNIZE clause in your SQL queries to filter and aggregate matches across rows in a table.

