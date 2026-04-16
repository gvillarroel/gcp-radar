---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.555Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Materialized views over BigLake metadata cache-enabled Cloud Storage tables"
feature_slug: "materialized-views-over-biglake-metadata-cache-enabled-cloud-storage-tables"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job"
keywords:
  - "materialized"
  - "views"
  - "over"
  - "biglake"
  - "metadata"
  - "cache"
  - "enabled"
  - "storage"
---

# Materialized views over BigLake metadata cache-enabled Cloud Storage tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports materialized views over BigLake metadata cache-enabled tables that reference structured data in Cloud Storage.

## Extended Definition

BigQuery supports materialized views over BigLake metadata cache-enabled tables that reference structured data in Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)

## Supporting Pages

### Copy a dataset \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset)
- Source ID: `site-docs-reference-required-15`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Cache-enabled tables with materialized views You can use materialized views over BigLake metadata cache-enabled tables to improve performance and efficiency when querying structured data stored in Cloud Storage or Amazon Simple Storage Service (Amazon S3).
- To find information about metadata refresh jobs, query the INFORMATION SCHEMA.JOBS view , as shown in the following example: SELECT FROM region-us.INFORMATION SCHEMA.JOBS BY PROJECT WHERE job id LIKE '%metadata cache refresh%' AND creation time > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 6 HOUR ) ORDER BY start time DESC LIMIT 10 ; For Cloud Storage BigLake tables that are based on Parquet files, table statistics are collected during the metadata cache refresh and used to improve query plans.
- As a result, metadata caching-enabled queries read data corresponding to the specific cached object version, even if newer versions become live in Cloud Storage.
- These materialized views function like materialized views over BigQuery-managed storage tables, including the benefits of automatic refresh and smart tuning .

### "Create a BigQuery DataFrame from a finished query job \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)
- Source ID: `site-docs-reference-required-15`
- Final score: 38
- Re-rank relevance: N/A

