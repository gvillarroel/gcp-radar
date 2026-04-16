---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.858Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DML on partitioned tables"
feature_slug: "dml-on-partitioned-tables"
latest_feature_date: "2018-03-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
keywords:
  - "dml"
  - "partitioned"
  - "tables"
  - "bigquery"
  - "supports"
  - "statements"
---

# DML on partitioned tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports using DML statements with partitioned tables.

## Extended Definition

BigQuery supports using DML statements with partitioned tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)

## Supporting Pages

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Quotas and limits for jobs against partitioned tables Quotas and limits also apply to the different types of jobs you can run against partitioned tables, including: Loading data (load jobs) Exporting data (extract jobs) Querying data (query jobs) Copying tables (copy jobs) Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.
- Table pricing When you create and use partitioned tables in BigQuery, your charges are based on how much data is stored in the partitions and on the queries you run against the data: For information on storage pricing, see Storage pricing .
- For best practices for controlling costs in BigQuery, see Controlling costs in BigQuery Table security Access control for partitioned tables is the same as access control for standard tables.
- Quotas and limits Partitioned tables have defined limits in BigQuery.

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Data manipulation language (DML) statements in GoogleSQL The BigQuery data manipulation language (DML) enables you to update, insert, and delete data from your BigQuery tables.
- INSERT [ INTO ] target name [ ( column 1 [ , ..., column n ] ) ] input input ::= VALUES ( expr 1 [ , ..., expr n ] ) [ , ..., ( expr k 1 [ , ..., expr k n ] ) ] SELECT QUERY expr ::= value expression DEFAULT INSERT statements must comply with the following rules: Column names are optional if the target table is not an ingestion-time partitioned table .
- Partitioned tables For partitioned tables, the number of bytes processed is calculated as follows: q' = The sum of bytes processed by the DML statement itself, including any columns referenced in all partitions scanned by the DML statement. t' = The total size of all partitions being updated by the DML statement before any modifications are made.
- Non-partitioned tables For non-partitioned tables, the number of bytes processed is calculated as follows: q = The sum of bytes processed by the DML statement itself, including any columns referenced in tables scanned by the DML statement. t = The size of the table being updated by the DML statement before any modifications are made.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- You can reference BigLake tables anywhere in a SELECT statement as if they were standard BigQuery tables, including in data manipulation language (DML) and data definition language (DDL) statements that use subqueries to retrieve data.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to run a cross-cloud join: bigquery.jobs.create bigquery.tables.getData You might also be able to get these permissions with custom roles or other predefined roles .
- Supported data stores You can use BigLake tables with the following data stores: Amazon S3 by using BigQuery Omni Blob Storage by using BigQuery Omni Cloud Storage Temporary table support BigLake tables based on Cloud Storage can be temporary or permanent.
- BigLake tables support the following formats: Avro CSV Delta Lake Iceberg JSON ORC Parquet You can't use cached metadata with Apache Iceberg external tables ; BigQuery already uses the metadata that Iceberg captures in manifest files.

