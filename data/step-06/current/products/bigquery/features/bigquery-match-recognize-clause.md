---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.366Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery MATCH_RECOGNIZE clause"
feature_slug: "bigquery-match-recognize-clause"
latest_feature_date: "2025-11-05"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "row pattern recognition"
  - "MATCH_RECOGNIZE syntax"
  - "BigQuery MATCH_RECOGNIZE"
  - "MATCH_RECOGNIZE clause"
  - "pattern matching clause"
  - "MATCH_RECOGNIZE"
  - "row pattern clause"
---

# BigQuery MATCH_RECOGNIZE clause

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery SQL now supports the MATCH_RECOGNIZE clause for filtering and aggregating row matches.

## Extended Definition

MATCH_RECOGNIZE is an optional sub-clause of BigQuery’s Standard SQL FROM clause that applies row pattern matching to a table result stream, allowing queries to filter and aggregate rows based on defined patterns. Its syntax includes `PATTERN`, `DEFINE`, `MEASURES`, and optional clauses such as `PARTITION BY`, `ORDER BY`, and `AFTER MATCH SKIP`, with support for row-context functions like `PREV()` and `NEXT()` in pattern definitions. BigQuery release notes indicate this feature exists as of November 5, 2025 (with a related feature entry also listed in July 2025).

## Evidence Summary

The query syntax reference defines MATCH_RECOGNIZE syntax and usage for row pattern filtering/aggregation, while the release notes confirm the feature’s availability timeline in 2025.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES MATCH NUMBER () AS match number , ARRAY AGG ( STRUCT ( MATCH ROW NUMBER () AS row , CLASSIFIER () AS symbol , sale date , product category )) AS sales PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); / ----------+--------------+-----------+--------------+-----------------+------------------------+ customer match number sales.row sales.symbol sales.sale date sales.product category +----------+--------------+-----------+--------------+-----------------+------------------------+ Ian 1 1 low 2024-02-01 Books 2 low 2024-02-08 Clothing 3 mid 2024-02-10 Clothing 4 high 2024-03-15 Electronics 5 high 2024-03-15 Electronics Ian 2 1 low 2024-03-21 Software 2 mid 2024-04-07 Books 3 high 2024-07-07 Clothing +----------+--------------+-----------+--------------+-----------------+------------------------ / The following example is similar to the previous one, except it allows overlapping matches: SELECT FROM Sales MATCH RECOGNIZE ( PARTITION BY customer ORDER BY sale date MEASURES MATCH NUMBER () AS match number , ARRAY AGG ( STRUCT ( MATCH ROW NUMBER () AS row , CLASSIFIER () AS symbol , sale date , product category )) AS sales AFTER MATCH SKIP TO NEXT ROW PATTERN ( low + mid + high + ) DEFINE low AS amount < 50 , mid AS amount > = 50 AND amount < = 100 , high AS amount > 100 ); / ----------+--------------+-----------+--------------+-----------------+------------------------+ customer match number sales.row sales.symbol sales.sale date sales.product category +----------+--------------+-----------+--------------+-----------------+------------------------+ Ian 1 1 low 2024-02-01 Books 2 low 2024-02-08 Clothing 3 mid 2024-02-10 Clothing 4 high 2024-03-15 Electronics 5 high 2024-03-15 Electronics Ian 2 1 low 2024-02-08 Clothing 2 mid 2024-02-10 Clothing 3 high 2024-03-15 Electronics 4 high 2024-03-15 Electronics Ian 3 1 low 2024-03-21 Software 2 mid 2024-04-07 Books 3 high 2024-07-07 Clothing +----------+--------------+-----------+--------------+-----------------+------------------------ / Best practices To scale the performance of queries that contain the MATCH RECOGNIZE clause, use the following best practices: Use the PARTITION BY clause.
- FROM clause FROM from clause [, ...] from clause : from item [ { pivot operator unpivot operator match recognize clause } ] [ tablesample operator ] from item : { table name [ as alias ] [ FOR SYSTEM TIME AS OF timestamp expression ] { join operation ( join operation ) } ( query expr ) [ as alias ] field path unnest operator cte name [ as alias ] graph table operator [ as alias ] } as alias : [ AS ] alias The FROM clause indicates the table or tables from which to retrieve rows, and specifies how to join those rows together to produce a single stream of rows for processing in the rest of the query. pivot operator See PIVOT operator . unpivot operator See UNPIVOT operator . tablesample operator See TABLESAMPLE operator . match recognize clause See MATCH RECOGNIZE clause . graph table operator See GRAPH TABLE operator . table name The name (optionally qualified) of an existing table.
- For example, you can use the following pattern and symbols in a MATCH RECOGNIZE clause to match pairs of adjacent rows in which the value of sales is less than 100 in the first row and greater than 200 in the following row: PATTERN ( low sales high sales ) DEFINE low sales AS sales < 100 , high sales AS sales > 200 The following example matches one or more rows with sales less than 100, followed by at most one row with sales greater than 200, followed by any number of rows with sales less than 100: PATTERN ( low sales + high sales ? low sales ) DEFINE low sales AS sales < 100 , high sales AS sales > 200 There are two functions unique to the DEFINE clause, PREV() and NEXT() , that you can use to define a symbol in relation to rows around the current row.
- Example The following query selects approximately 10% of a table's data: SELECT FROM dataset . my table TABLESAMPLE SYSTEM ( 10 PERCENT ) MATCH RECOGNIZE clause FROM from item MATCH RECOGNIZE ( [ PARTITION BY partition expr [, ... ] ] ORDER BY order expr [{ ASC DESC }] [{ NULLS FIRST NULLS LAST }] [, ...] MEASURES { measures expr [AS] alias } [, ... ] [ AFTER MATCH SKIP { PAST LAST ROW TO NEXT ROW } ] PATTERN ( pattern ) DEFINE symbol AS boolean expr [, ... ] [ OPTIONS ( [ use longest match = { TRUE FALSE } ] ) ] ) Description The MATCH RECOGNIZE clause is an optional sub-clause of the FROM clause, used to filter and aggregate based on matches.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- November 05, 2025 Feature You can use the MATCH RECOGNIZE clause in your SQL queries to filter and aggregate matches across rows in a table.
- July 22, 2025 Feature You can now use the MATCH RECOGNIZE clause in your SQL queries to filter and aggregate matches across rows in a table.

