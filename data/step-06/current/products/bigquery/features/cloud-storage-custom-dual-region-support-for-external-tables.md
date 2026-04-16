---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.607Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud Storage custom dual-region support for external tables"
feature_slug: "cloud-storage-custom-dual-region-support-for-external-tables"
latest_feature_date: "2023-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/locations"
keywords:
  - "storage"
  - "custom"
  - "dual"
  - "region"
  - "external"
  - "tables"
  - "biglake"
  - "non"
---

# Cloud Storage custom dual-region support for external tables

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigLake and non-BigLake external tables can use Cloud Storage custom dual-region locations.

## Extended Definition

BigLake and non-BigLake external tables can use Cloud Storage custom dual-region locations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To find information about metadata refresh jobs, query the INFORMATION SCHEMA.JOBS view , as shown in the following example: SELECT FROM region-us.INFORMATION SCHEMA.JOBS BY PROJECT WHERE job id LIKE '%metadata cache refresh%' AND creation time > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 6 HOUR ) ORDER BY start time DESC LIMIT 10 ; For Cloud Storage BigLake tables that are based on Parquet files, table statistics are collected during the metadata cache refresh and used to improve query plans.
- Using customer-managed encryption keys (CMEK) with cached metadata is not supported for BigLake tables that reference Amazon S3 or Blob Storage data.
- Supported data stores You can use BigLake tables with the following data stores: Amazon S3 by using BigQuery Omni Blob Storage by using BigQuery Omni Cloud Storage Temporary table support BigLake tables based on Cloud Storage can be temporary or permanent.
- Cache-enabled tables with materialized views You can use materialized views over BigLake metadata cache-enabled tables to improve performance and efficiency when querying structured data stored in Cloud Storage or Amazon Simple Storage Service (Amazon S3).

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- TABLE STORAGE BY PROJECT WHERE total physical bytes + fail safe physical bytes > 0 -- Base the forecast on base tables only for highest precision results AND table type = 'BASE TABLE' GROUP BY 1 ) SELECT dataset name , -- Logical ROUND ( active logical gib , 2 ) AS active logical gib , ROUND ( long term logical gib , 2 ) AS long term logical gib , -- Physical ROUND ( active physical gib , 2 ) AS active physical gib , ROUND ( long term physical gib , 2 ) AS long term physical gib , ROUND ( time travel physical gib , 2 ) AS time travel physical gib , ROUND ( fail safe physical gib , 2 ) AS fail safe physical gib , -- Compression ratio ROUND ( SAFE DIVIDE ( active logical gib , active no tt physical gib ), 2 ) AS active compression ratio , ROUND ( SAFE DIVIDE ( long term logical gib , long term physical gib ), 2 ) AS long term compression ratio , -- Forecast costs logical ROUND ( active logical gib active logical gib price , 2 ) AS forecast active logical cost , ROUND ( long term logical gib long term logical gib price , 2 ) AS forecast long term logical cost , -- Forecast costs physical ROUND (( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price , 2 ) AS forecast active physical cost , ROUND ( long term physical gib long term physical gib price , 2 ) AS forecast long term physical cost , -- Forecast costs total ROUND ((( active logical gib active logical gib price ) + ( long term logical gib long term logical gib price )) - ((( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price ) + ( long term physical gib long term physical gib price )), 2 ) AS forecast total cost difference FROM storage sizes ORDER BY ( forecast active logical cost + forecast active physical cost ) DESC ; Note: INFORMATION SCHEMA view names are case-sensitive.
- DECLARE active logical gib price FLOAT64 DEFAULT 0.02 ; DECLARE long term logical gib price FLOAT64 DEFAULT 0.01 ; DECLARE active physical gib price FLOAT64 DEFAULT 0.04 ; DECLARE long term physical gib price FLOAT64 DEFAULT 0.02 ; WITH storage sizes AS ( SELECT table schema AS dataset name , -- Logical SUM ( IF ( deleted = false , active logical bytes , 0 )) / power ( 1024 , 3 ) AS active logical gib , SUM ( IF ( deleted = false , long term logical bytes , 0 )) / power ( 1024 , 3 ) AS long term logical gib , -- Physical SUM ( active physical bytes ) / power ( 1024 , 3 ) AS active physical gib , SUM ( active physical bytes - time travel physical bytes ) / power ( 1024 , 3 ) AS active no tt physical gib , SUM ( long term physical bytes ) / power ( 1024 , 3 ) AS long term physical gib , -- Restorable previously deleted physical SUM ( time travel physical bytes ) / power ( 1024 , 3 ) AS time travel physical gib , SUM ( fail safe physical bytes ) / power ( 1024 , 3 ) AS fail safe physical gib , FROM region- REGION .
- Applicable only to tables with table type set to CLONE or SNAPSHOT . replica source catalog STRING For materialized view replicas , the base materialized view's project. replica source schema STRING For materialized view replicas , the base materialized view's dataset. replica source name STRING For materialized view replicas , the base materialized view's name. replication status STRING For materialized view replicas , the status of the replication from the base materialized view to the materialized view replica; one of the following: REPLICATION STATUS UNSPECIFIED ACTIVE : Replication is active with no errors SOURCE DELETED : The source materialized view has been deleted PERMISSION DENIED : The source materialized view hasn't been authorized on the dataset that contains the source Amazon S3 BigLake tables used in the query that created the materialized view.
- Unpartitioned tables return 0. total logical bytes INT64 Total number of logical (uncompressed) bytes in the table or materialized view. active logical bytes INT64 Number of logical (uncompressed) bytes that are younger than 90 days. long term logical bytes INT64 Number of logical (uncompressed) bytes that are older than 90 days. current physical bytes INT64 Total number of physical bytes for the current storage of the table across all partitions. total physical bytes INT64 Total number of physical (compressed) bytes used for storage, including active, long-term, and time-travel (deleted or changed data) bytes.

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Location considerations When you choose a location for your data, consider the following: Cloud Storage You can interact with Cloud Storage data using BigQuery in the following ways: Query Cloud Storage data using BigLake or non-BigLake external tables Load Cloud Storage data into BigQuery Query Cloud Storage data When you query data in Cloud Storage by using a BigLake or a non-BigLake external table , the data you query must be colocated with your BigQuery dataset, otherwise the query incurs data transfer charges .
- If your BigQuery dataset is in the EU multi-region, the corresponding Cloud Storage bucket must be in a dual-region that includes Netherlands ( europe-west4 ), like the EUR4 dual-region, or in a custom dual-region that includes Netherlands ( europe-west4 ) .
- If your BigQuery dataset is in the US multi-region, the corresponding Cloud Storage bucket must be in a dual-region that includes Iowa ( us-central1 ), like the NAM4 dual-region, or in a custom dual-region that includes Iowa ( us-central1 ).
- Multi-region bucket : Using multi-region dataset locations with multi-region Cloud Storage buckets is not recommended for external tables, because external query performance depends on minimal latency and optimal network bandwidth.

