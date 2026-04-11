---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.443Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigLake managed tables support in BigQuery"
feature_slug: "biglake-managed-tables-support-in-bigquery"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "BigLake managed tables"
  - "BigLake integration"
  - "managed table type"
  - "managed tables"
  - "BigLake tables"
  - "managed table"
  - "BigLake table"
---

# BigLake managed tables support in BigQuery

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports BigLake managed tables.

## Extended Definition

BigQuery exposes BigLake managed tables as a managed table type (`BIGLAKE`) in its table metadata, described as “BigLake tables for Apache Iceberg in BigQuery.” The DDL and table documentation also shows BigLake-specific managed-table attributes (for example, `file format` and `max staleness`) and flags BigLake support in at least one schema column as preview, so support appears partially preview-labeled. Release notes state that BigQuery includes support for BigLake managed tables.

## Evidence Summary

The pages together confirm that BigQuery has a `BIGLAKE` managed table type for Apache Iceberg and that release notes announce support for BigLake managed tables, while the SQL/table references show some BigLake-specific table properties and preview status.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Applies to: CSV, JSON, and Google Sheets data. max staleness INTERVAL Applicable for BigLake tables and object tables .
- Required for managed tables . file format STRING In preview .
- Required for managed tables . file format STRING In preview .
- CREATE TEMP TABLE Example ( x INT64 , y STRING ); INSERT INTO Example VALUES ( 5 , 'foo' ); INSERT INTO Example VALUES ( 6 , 'bar' ); SELECT FROM Example ; This script returns the following output: +-----+---+-----+ Row x y +-----+--- -----+ 1 5 foo 2 6 bar +-----+--- -----+ Load data across clouds Example 1 Suppose you have a BigLake table named myawsdataset.orders that references data from Amazon S3 .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- The managed table type; one of the following: NATIVE : A standard table BIGLAKE : A BigLake table for Apache Iceberg in BigQuery is insertable into STRING YES or NO depending on whether the table supports DML INSERT statements is fine grained mutations enabled STRING YES or NO depending on whether fine-grained DML mutations are enabled on the table is typed STRING The value is always NO is change history enabled STRING YES or NO depending on whether change history is enabled creation time TIMESTAMP The table's creation time base table catalog STRING For table clones and table snapshots , the base table's project.
- Applicable only to tables with table type set to CLONE or SNAPSHOT . replica source catalog STRING For materialized view replicas , the base materialized view's project. replica source schema STRING For materialized view replicas , the base materialized view's dataset. replica source name STRING For materialized view replicas , the base materialized view's name. replication status STRING For materialized view replicas , the status of the replication from the base materialized view to the materialized view replica; one of the following: REPLICATION STATUS UNSPECIFIED ACTIVE : Replication is active with no errors SOURCE DELETED : The source materialized view has been deleted PERMISSION DENIED : The source materialized view hasn't been authorized on the dataset that contains the source Amazon S3 BigLake tables used in the query that created the materialized view.
- Also referred to as the tableId . table type STRING The table type; one of the following: BASE TABLE : A standard table CLONE : A table clone SNAPSHOT : A table snapshot VIEW : A view MATERIALIZED VIEW : A materialized view or materialized view replica EXTERNAL : A table that references an external data source managed table type STRING This column is in Preview.
- Applies to: CSV, JSON, and Google Sheets data. max staleness INTERVAL Applicable for BigLake tables and object tables .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- It also includes support for BigLake managed tables and the BigQuery Storage Read API.
- Feature In BigQuery Data Transfer Service, you can monitor resource-level status reporting for Hive managed tables to track progress and view granular error details for individual tables.
- Feature BigQuery tables for Apache Iceberg have been renamed BigLake tables for Apache Iceberg in BigQuery .
- Feature Dataform now lets you automate the creation of BigLake tables for Apache Iceberg in BigQuery .

