---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.553Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Presto and Trino approximate parameter support"
feature_slug: "presto-and-trino-approximate-parameter-support"
latest_feature_date: "2023-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-connections"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters"
  - "https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters"
keywords:
  - "presto"
  - "trino"
  - "approximate"
  - "parameter"
  - "dialects"
  - "now"
---

# Presto and Trino approximate parameter support

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Presto and Trino dialects now support the approximate parameter.

## Extended Definition

The Presto and Trino dialects now support the approximate parameter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- [https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters)

## Supporting Pages

### "Runtime parameters in Blob Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- Source ID: `site-docs-reference-required-6`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameter templating examples These examples demonstrate specifying destination table names with different time formats, and offsetting the run time. run time (UTC) Templated parameter Output destination table name 2018-02-15 00:00:00 mytable mytable 2018-02-15 00:00:00 mytable { run time "%Y%m%d" } mytable 20180215 2018-02-15 00:00:00 mytable { run time+25h "%Y%m%d" } mytable 20180216 2018-02-15 00:00:00 mytable { run time-1h "%Y%m%d" } mytable 20180214 2018-02-15 00:00:00 mytable { run time+1.5h "%Y%m%d%H" } or mytable { run time+90m "%Y%m%d%H" } mytable 2018021501 2018-02-15 00:00:00 { run time+97s "%Y%m%d" } mytable { run time+97s "%H%M%S" } 20180215 mytable 000137 Note: When you use date or time parameters to create tables with names ending in a date format such as YYYYMMDD , BigQuery groups these tables together .
- Data source Parameterized URI or data path Parameterized destination table name Evaluated URI or data path Evaluated destination table name Cloud Storage gs://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } gs://bucket/events-20180215/ .csv mytable$20180215 Amazon S3 s3://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } s3://bucket/events-20180215/ .csv mytable$20180215 Blob Storage events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } events-20180215/ .csv mytable$20180215 What's next Learn more about setting up an Azure Blob Storage transfer .
- Data source Source URI or data path Parameterized destination table name Evaluated destination table name Cloud Storage gs://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Amazon S3 s3://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Blob Storage .csv mytable${ run time "%Y%m%d" } mytable$20180215 This use case transfers today's data into a table partitioned on today's date.
- When you use runtime parameters in a transfer, you can do the following: Specify how you want to partition the destination table Retrieve files that match a particular date Available runtime parameters When you set up the Cloud Storage, Blob Storage, or Amazon S3 transfer, you can specify how you want to partition the destination table by using runtime parameters.

### "Runtime parameters in Cloud Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters)
- Source ID: `site-docs-reference-required-6`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameter templating examples These examples demonstrate specifying destination table names with different time formats, and offsetting the run time. run time (UTC) Templated parameter Output destination table name 2018-02-15 00:00:00 mytable mytable 2018-02-15 00:00:00 mytable { run time "%Y%m%d" } mytable 20180215 2018-02-15 00:00:00 mytable { run time+25h "%Y%m%d" } mytable 20180216 2018-02-15 00:00:00 mytable { run time-1h "%Y%m%d" } mytable 20180214 2018-02-15 00:00:00 mytable { run time+1.5h "%Y%m%d%H" } or mytable { run time+90m "%Y%m%d%H" } mytable 2018021501 2018-02-15 00:00:00 { run time+97s "%Y%m%d" } mytable { run time+97s "%H%M%S" } 20180215 mytable 000137 Note: When you use date or time parameters to create tables with names ending in a date format such as YYYYMMDD , BigQuery groups these tables together .
- Data source Parameterized URI or data path Parameterized destination table name Evaluated URI or data path Evaluated destination table name Cloud Storage gs://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } gs://bucket/events-20180215/ .csv mytable$20180215 Amazon S3 s3://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } s3://bucket/events-20180215/ .csv mytable$20180215 Blob Storage events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } events-20180215/ .csv mytable$20180215 What's next Learn about setting up a Cloud Storage transfer .
- Data source Source URI or data path Parameterized destination table name Evaluated destination table name Cloud Storage gs://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Amazon S3 s3://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Blob Storage .csv mytable${ run time "%Y%m%d" } mytable$20180215 This use case transfers today's data into a table partitioned on today's date.
- When you use runtime parameters in a transfer, you can do the following: Specify how you want to partition the destination table Retrieve files that match a particular date Available runtime parameters When you set up the Cloud Storage, Blob Storage, or Amazon S3 transfer, you can specify how you want to partition the destination table by using runtime parameters.

### Admin settings - Connections \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- Source ID: `site-docs-reference-required-4`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- To correct the issue, configure your PrestoDB or Trino database to listen on a port other than port 443 when SSL is enabled.
- SSH connections to PrestoDB or Trino databases may require additional database configuration.
- When SSL is enabled, the PrestoDB or Trino database defaults to listening on port 443.
- The following table describes the elements on the Databases tab: Column Description Name The name of the connection, chosen by you, that is used in the connection LookML parameter.

