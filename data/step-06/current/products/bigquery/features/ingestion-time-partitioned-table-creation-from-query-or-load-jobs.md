---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.873Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Ingestion-time partitioned table creation from query or load jobs"
feature_slug: "ingestion-time-partitioned-table-creation-from-query-or-load-jobs"
latest_feature_date: "2017-09-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/change-data-capture"
keywords:
  - "ingestion"
  - "time"
  - "partitioned"
  - "table"
  - "creation"
  - "query"
  - "load"
  - "jobs"
---

# Ingestion-time partitioned table creation from query or load jobs

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports creating ingestion-time partitioned tables by specifying partitioning options when writing query results or loading data into a new table.

## Extended Definition

BigQuery supports creating ingestion-time partitioned tables by specifying partitioning options when writing query results or loading data into a new table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)

## Supporting Pages

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Quotas and limits for jobs against partitioned tables Quotas and limits also apply to the different types of jobs you can run against partitioned tables, including: Loading data (load jobs) Exporting data (extract jobs) Querying data (query jobs) Copying tables (copy jobs) Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.
- Ingestion time partitioning When you create a table partitioned by ingestion time, BigQuery automatically assigns rows to partitions based on the time when BigQuery ingests the data.
- For example, suppose that you create an ingestion-time partitioned table with hourly partitioning and send data at the following times: Ingestion time PARTITIONTIME Partition (hourly) 2021-05-07 17:22:00 2021-05-07 17:00:00 2021050717 2021-05-07 17:40:00 2021-05-07 17:00:00 2021050717 2021-05-07 18:31:00 2021-05-07 18:00:00 2021050718 Because the table in this example uses hourly partitioning, the value of PARTITIONTIME is truncated to an hour boundary.
- If you previously created date-sharded tables, you can convert them into an ingestion-time partitioned table.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- To find information about metadata refresh jobs, query the INFORMATION SCHEMA.JOBS view , as shown in the following example: SELECT FROM region-us.INFORMATION SCHEMA.JOBS BY PROJECT WHERE job id LIKE '%metadata cache refresh%' AND creation time > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 6 HOUR ) ORDER BY start time DESC LIMIT 10 ; For Cloud Storage BigLake tables that are based on Parquet files, table statistics are collected during the metadata cache refresh and used to improve query plans.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to run a cross-cloud join: bigquery.jobs.create bigquery.tables.getData You might also be able to get these permissions with custom roles or other predefined roles .
- Each temporary table is only used for a single cross-cloud query and is not reused even if the same query is repeated multiple times.
- When you enable metadata caching for BigLake or object tables, BigQuery triggers metadata generation refresh jobs.

### "Stream table updates with change data capture ingestion \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- Source ID: `site-docs-reference-5`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- CDC-enabled tables don't support the following: Mutating data manipulation language (DML) statements such as DELETE , UPDATE , and MERGE Querying wildcard tables Search indexes CDC-enabled tables that perform runtime merge jobs because the table's max staleness value is too low cannot support the following: Table copy operations Table clone operations Table snapshot operations The BigQuery Storage Read API The requirePartitionFilter table option BigQuery export operations on CDC-enabled tables don't export recently streamed row modifications that have yet to be applied by a background job.
- To calculate the time it takes to apply upserted changes to an existing table, use the following SQL query to determine the 95th percentile duration of background apply jobs, plus a seven-minute buffer to allow for the BigQuery write-optimized storage (streaming buffer) conversion.
- BigQuery CDC ingestion jobs are split into three categories: Background apply jobs: jobs that run in the background at regular intervals that are defined by the table's max staleness value.
- If your query triggers a runtime merge on a partitioned table, then the entire table is scanned whether or not the query is restricted to a subset of the partitions.

