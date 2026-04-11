---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.793Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery TABLESAMPLE operator"
feature_slug: "bigquery-tablesample-operator"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "sample percent table"
  - "TABLESAMPLE operator"
  - "TABLESAMPLE SYSTEM"
  - "TABLESAMPLE syntax"
  - "TABLESAMPLE clause"
  - "table sampling"
  - "TABLESAMPLE"
  - "random table subset"
---

# BigQuery TABLESAMPLE operator

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL added support for the TABLESAMPLE operator, enabling random subset queries over large tables.

## Extended Definition

BigQuery Standard SQL added support for the TABLESAMPLE operator, enabling random subset queries over large tables.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- SELECT FROM Produce UNPIVOT ( ( first half sales , second half sales ) FOR semesters IN (( Q1 , Q2 ) AS 'semester 1' , ( Q3 , Q4 ) AS 'semester 2' )) / ---------+------------------+-------------------+------------+ product first half sales second half sales semesters +---------+------------------+-------------------+------------+ Kale 51 23 semester 1 Kale 45 3 semester 2 Apple 77 0 semester 1 Apple 25 2 semester 2 +---------+------------------+-------------------+------------ / TABLESAMPLE operator TABLESAMPLE SYSTEM ( percent PERCENT ) Description You can use the TABLESAMPLE operator to select a random sample of a dataset.
- FROM clause FROM from clause [, ...] from clause : from item [ { pivot operator unpivot operator match recognize clause } ] [ tablesample operator ] from item : { table name [ as alias ] [ FOR SYSTEM TIME AS OF timestamp expression ] { join operation ( join operation ) } ( query expr ) [ as alias ] field path unnest operator cte name [ as alias ] graph table operator [ as alias ] } as alias : [ AS ] alias The FROM clause indicates the table or tables from which to retrieve rows, and specifies how to join those rows together to produce a single stream of rows for processing in the rest of the query. pivot operator See PIVOT operator . unpivot operator See UNPIVOT operator . tablesample operator See TABLESAMPLE operator . match recognize clause See MATCH RECOGNIZE clause . graph table operator See GRAPH TABLE operator . table name The name (optionally qualified) of an existing table.
- Example The following query selects approximately 10% of a table's data: SELECT FROM dataset . my table TABLESAMPLE SYSTEM ( 10 PERCENT ) MATCH RECOGNIZE clause FROM from item MATCH RECOGNIZE ( [ PARTITION BY partition expr [, ... ] ] ORDER BY order expr [{ ASC DESC }] [{ NULLS FIRST NULLS LAST }] [, ...] MEASURES { measures expr [AS] alias } [, ... ] [ AFTER MATCH SKIP { PAST LAST ROW TO NEXT ROW } ] PATTERN ( pattern ) DEFINE symbol AS boolean expr [, ... ] [ OPTIONS ( [ use longest match = { TRUE FALSE } ] ) ] ) Description The MATCH RECOGNIZE clause is an optional sub-clause of the FROM clause, used to filter and aggregate based on matches.
- GoogleSQL doesn't cache the results of queries that include a TABLESAMPLE clause.

