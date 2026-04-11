---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.888Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "FOR SYSTEM_TIME AS OF in FROM clause"
feature_slug: "for-system-time-as-of-in-from-clause"
latest_feature_date: "2017-11-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/access-historical-data"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "FROM FOR SYSTEM_TIME AS OF"
  - "system-time table query"
  - "FOR SYSTEM_TIME AS OF"
  - "AS OF timestamp query"
  - "time travel query"
  - "SYSTEM_TIME AS OF"
  - "AS OF clause"
---

# FOR SYSTEM_TIME AS OF in FROM clause

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL now supports the FOR SYSTEM_TIME AS OF expression in the FROM clause.

## Extended Definition

BigQuery Standard SQL now supports the FOR SYSTEM_TIME AS OF expression in the FROM clause.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Access historical data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- Source ID: `site-docs-root-2`
- Final score: 66
- Re-rank relevance: STRONG
- Re-rank rationale: It directly explains how to use `FOR SYSTEM TIME AS OF` in BigQuery queries to read historical table versions within the time travel window.

Evidence snippets:
- For example, the following query returns a historical version of the table from one hour ago: SELECT FROM mydataset.mytable FOR SYSTEM TIME AS OF TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 1 HOUR ); Note: The FOR SYSTEM TIME AS OF clause is supported in GoogleSQL.
- Query data at a point in time You can query a table's historical data from any point in time within the time travel window by using a FOR SYSTEM TIME AS OF clause.
- After you replace an existing table by using the CREATE OR REPLACE TABLE statement, you can use FOR SYSTEM TIME AS OF to query the previous version of the table.
- There is no limit on table size when using SYSTEM TIME AS OF .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- The source table must be one of the following: A table A table clone A table snapshot The FOR SYSTEM TIME AS OF clause can only be used when creating a snapshot of a table or table clone; it can't be used when making a copy of a table snapshot. snapshot option list The option list lets you set table snapshot options such as a label and an expiration time.
- Syntax CREATE SNAPSHOT TABLE [ IF NOT EXISTS ] table snapshot name CLONE source table name [ FOR SYSTEM TIME AS OF time expression ] [ OPTIONS ( snapshot option list ) ] Arguments IF NOT EXISTS : If a table snapshot or other table resource exists with the same name, the CREATE statement has no effect. table snapshot name : The name of the table snapshot that you want to create.
- Syntax CREATE TABLE [ IF NOT EXISTS ] destination table name CLONE source table name [ FOR SYSTEM TIME AS OF time expression ] ... [ OPTIONS ( table option list ) ] Details Other than the use of the CLONE clause in place of a column list, the syntax is identical to the CREATE TABLE syntax.
- FOR SYSTEM TIME AS OF : Lets you select the version of the table that was current at the time specified by timestamp expression .

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- FROM clause FROM from clause [, ...] from clause : from item [ { pivot operator unpivot operator match recognize clause } ] [ tablesample operator ] from item : { table name [ as alias ] [ FOR SYSTEM TIME AS OF timestamp expression ] { join operation ( join operation ) } ( query expr ) [ as alias ] field path unnest operator cte name [ as alias ] graph table operator [ as alias ] } as alias : [ AS ] alias The FROM clause indicates the table or tables from which to retrieve rows, and specifies how to join those rows together to produce a single stream of rows for processing in the rest of the query. pivot operator See PIVOT operator . unpivot operator See UNPIVOT operator . tablesample operator See TABLESAMPLE operator . match recognize clause See MATCH RECOGNIZE clause . graph table operator See GRAPH TABLE operator . table name The name (optionally qualified) of an existing table.
- INSERT INTO t1 SELECT FROM t1 FOR SYSTEM TIME AS OF TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 1 DAY ); join operation See Join operation . query expr ( query expr ) [ [ AS ] alias ] is a table subquery . field path In the FROM clause, field path is any path that resolves to a field within a data type. field path can go arbitrarily deep into a nested data structure.
- SELECT FROM Roster; SELECT FROM dataset.Roster; SELECT FROM project.dataset.Roster; FOR SYSTEM TIME AS OF FOR SYSTEM TIME AS OF references the historical versions of the table definition and rows that were current at timestamp expression .
- SELECT FROM books FOR SYSTEM TIME AS OF JOB START TIMESTAMP ; The following query returns an error because the DML operates on the current version of the table, and a historical version of the table from one day ago.

