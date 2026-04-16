---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.603Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Object tables"
feature_slug: "object-tables"
latest_feature_date: "2023-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/automatic-discovery"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
keywords:
  - "object"
  - "tables"
  - "read"
  - "only"
  - "store"
  - "metadata"
  - "unstructured"
  - "storage"
---

# Object tables

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Object tables are read-only tables that store metadata for unstructured data in Cloud Storage so it can be analyzed with BigQuery capabilities; Object tables are read-only BigQuery tables that store metadata for unstructured Cloud Storage objects.

## Extended Definition

Object tables are read-only tables that store metadata for unstructured data in Cloud Storage so it can be analyzed with BigQuery capabilities; Object tables are read-only BigQuery tables that store metadata for unstructured Cloud Storage objects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/automatic-discovery](https://docs.cloud.google.com/bigquery/docs/automatic-discovery)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)

## Supporting Pages

### "Discover and catalog Cloud Storage data \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/automatic-discovery](https://docs.cloud.google.com/bigquery/docs/automatic-discovery)
- Source ID: `site-docs-reference-5`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The discovery scan supports the following compression formats: Structured and semi-structured data Internal compression for the following formats: Compression File extension sample Supported format gzip .gz.parquet Parquet lz4 .lz4.parquet Parquet Snappy .snappy.parquet Parquet, ORC, Avro lzo .lzo.parquet Parquet, ORC External compression for JSON and CSV files: gzip bzip2 Unstructured data For object tables, compression is managed primarily through Cloud Storage object metadata , rather than BigQuery internal settings.
- For example, gs://images/group1 must only contain GIF images, and gs://images/group2 must only contain JPEG images for the discovery scan to detect and register two BigLake object tables.
- As part of the discovery scan, automatic discovery creates BigLake or external tables for structured data and object tables for unstructured data.
- Metadata caching for BigLake tables and object tables is also enabled.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Create a multimodal table You can create a table with one or more ObjectRef columns in order to store metadata about unstructured data that is related to the other structured data in the table.
- The unstructured data itself is stored in Cloud Storage, and is made available in BigQuery by using an object table .
- TABLE STORAGE BY PROJECT WHERE total physical bytes + fail safe physical bytes > 0 -- Base the forecast on base tables only for highest precision results AND table type = 'BASE TABLE' GROUP BY 1 ) SELECT dataset name , -- Logical ROUND ( active logical gib , 2 ) AS active logical gib , ROUND ( long term logical gib , 2 ) AS long term logical gib , -- Physical ROUND ( active physical gib , 2 ) AS active physical gib , ROUND ( long term physical gib , 2 ) AS long term physical gib , ROUND ( time travel physical gib , 2 ) AS time travel physical gib , ROUND ( fail safe physical gib , 2 ) AS fail safe physical gib , -- Compression ratio ROUND ( SAFE DIVIDE ( active logical gib , active no tt physical gib ), 2 ) AS active compression ratio , ROUND ( SAFE DIVIDE ( long term logical gib , long term physical gib ), 2 ) AS long term compression ratio , -- Forecast costs logical ROUND ( active logical gib active logical gib price , 2 ) AS forecast active logical cost , ROUND ( long term logical gib long term logical gib price , 2 ) AS forecast long term logical cost , -- Forecast costs physical ROUND (( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price , 2 ) AS forecast active physical cost , ROUND ( long term physical gib long term physical gib price , 2 ) AS forecast long term physical cost , -- Forecast costs total ROUND ((( active logical gib active logical gib price ) + ( long term logical gib long term logical gib price )) - ((( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price ) + ( long term physical gib long term physical gib price )), 2 ) AS forecast total cost difference FROM storage sizes ORDER BY ( forecast active logical cost + forecast active physical cost ) DESC ; Note: INFORMATION SCHEMA view names are case-sensitive.
- For readability, some columns are excluded from the result. +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ table catalog table schema table name table type is insertable into creation time ddl +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ myproject mydataset mytable1 BASE TABLE YES 2018-10-29 20:34:44 CREATE TABLE myproject.mydataset.mytable1 ( id INT64 ); myproject mydataset myview1 VIEW NO 2018-12-29 00:19:20 CREATE VIEW myproject.mydataset.myview1 AS SELECT 100 as id; +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ Example 2: The following example retrieves table metadata for all tables of type CLONE or SNAPSHOT from the INFORMATION SCHEMA.TABLES view.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cache-enabled tables with materialized views You can use materialized views over BigLake metadata cache-enabled tables to improve performance and efficiency when querying structured data stored in Cloud Storage or Amazon Simple Storage Service (Amazon S3).
- As a result, metadata caching-enabled queries read data corresponding to the specific cached object version, even if newer versions become live in Cloud Storage.
- To find information about metadata refresh jobs, query the INFORMATION SCHEMA.JOBS view , as shown in the following example: SELECT FROM region-us.INFORMATION SCHEMA.JOBS BY PROJECT WHERE job id LIKE '%metadata cache refresh%' AND creation time > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 6 HOUR ) ORDER BY start time DESC LIMIT 10 ; For Cloud Storage BigLake tables that are based on Parquet files, table statistics are collected during the metadata cache refresh and used to improve query plans.
- If you are automatically refreshing the metadata cache for a table, and you set the staleness interval to 30 minutes, it is possible that some of your operations against the table might read from the datastore if the metadata cache refresh takes on the longer side of the usual 30 to 60 minute window.

