---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.392Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "FOR SYSTEM_TIME AS OF for Apache Iceberg external tables"
feature_slug: "for-system-time-as-of-for-apache-iceberg-external-tables"
latest_feature_date: "2025-09-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "external table snapshot retention"
  - "time travel snapshot query"
  - "SYSTEM_TIME snapshot query"
  - "Iceberg metadata snapshot"
  - "query Iceberg snapshots"
  - "Apache Iceberg external table"
  - "FOR SYSTEM_TIME AS OF"
  - "AS OF query on Iceberg"
---

# FOR SYSTEM_TIME AS OF for Apache Iceberg external tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports querying snapshots of Apache Iceberg external tables retained in Iceberg metadata using the FOR SYSTEM_TIME AS OF clause.

## Extended Definition

FOR SYSTEM TIME AS OF is a BigQuery SQL option that references table data and metadata as it existed at a specific timestamp. In queries, it appears in the FROM clause as `FOR SYSTEM TIME AS OF <timestamp expression>` to read historical table versions, and in DDL it can be used with `CREATE SNAPSHOT TABLE` / `CREATE TABLE ... CLONE` to materialize a table version at a given time. The provided snippets support this behavior for BigQuery tables generally but do not explicitly confirm it for Apache Iceberg external tables.

## Evidence Summary

The cited pages document the general syntax and semantics of `FOR SYSTEM TIME AS OF` for historical table access, but they do not provide explicit evidence that this clause is supported specifically for Apache Iceberg external tables in the provided excerpts.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- FROM clause FROM from clause [, ...] from clause : from item [ { pivot operator unpivot operator match recognize clause } ] [ tablesample operator ] from item : { table name [ as alias ] [ FOR SYSTEM TIME AS OF timestamp expression ] { join operation ( join operation ) } ( query expr ) [ as alias ] field path unnest operator cte name [ as alias ] graph table operator [ as alias ] } as alias : [ AS ] alias The FROM clause indicates the table or tables from which to retrieve rows, and specifies how to join those rows together to produce a single stream of rows for processing in the rest of the query. pivot operator See PIVOT operator . unpivot operator See UNPIVOT operator . tablesample operator See TABLESAMPLE operator . match recognize clause See MATCH RECOGNIZE clause . graph table operator See GRAPH TABLE operator . table name The name (optionally qualified) of an existing table.
- INSERT INTO t1 SELECT FROM t1 FOR SYSTEM TIME AS OF TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 1 DAY ); join operation See Join operation . query expr ( query expr ) [ [ AS ] alias ] is a table subquery . field path In the FROM clause, field path is any path that resolves to a field within a data type. field path can go arbitrarily deep into a nested data structure.
- SELECT FROM Roster; SELECT FROM dataset.Roster; SELECT FROM project.dataset.Roster; FOR SYSTEM TIME AS OF FOR SYSTEM TIME AS OF references the historical versions of the table definition and rows that were current at timestamp expression .
- SELECT FROM books FOR SYSTEM TIME AS OF JOB START TIMESTAMP ; The following query returns an error because the DML operates on the current version of the table, and a historical version of the table from one day ago.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Syntax CREATE SNAPSHOT TABLE [ IF NOT EXISTS ] table snapshot name CLONE source table name [ FOR SYSTEM TIME AS OF time expression ] [ OPTIONS ( snapshot option list ) ] Arguments IF NOT EXISTS : If a table snapshot or other table resource exists with the same name, the CREATE statement has no effect. table snapshot name : The name of the table snapshot that you want to create.
- The source table must be one of the following: A table A table clone A table snapshot The FOR SYSTEM TIME AS OF clause can only be used when creating a snapshot of a table or table clone; it can't be used when making a copy of a table snapshot. snapshot option list The option list lets you set table snapshot options such as a label and an expiration time.
- Syntax CREATE TABLE [ IF NOT EXISTS ] destination table name CLONE source table name [ FOR SYSTEM TIME AS OF time expression ] ... [ OPTIONS ( table option list ) ] Details Other than the use of the CLONE clause in place of a column list, the syntax is identical to the CREATE TABLE syntax.
- FOR SYSTEM TIME AS OF : Lets you select the version of the table that was current at the time specified by timestamp expression .

