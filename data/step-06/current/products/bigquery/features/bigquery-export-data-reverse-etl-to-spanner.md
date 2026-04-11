---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.449Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery EXPORT DATA reverse ETL to Spanner"
feature_slug: "bigquery-export-data-reverse-etl-to-spanner"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery"
keywords:
  - "BigQuery Spanner sink"
  - "Cloud Spanner export target"
  - "reverse ETL to Spanner"
  - "BigQuery-to-Spanner export"
  - "reverse ETL"
  - "EXPORT DATA statement"
  - "export to Spanner"
  - "EXPORT DATA"
---

# BigQuery EXPORT DATA reverse ETL to Spanner

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports reverse ETL from BigQuery to Spanner using EXPORT DATA statements.

## Extended Definition

BigQuery supports reverse ETL to Cloud Spanner using the SQL `EXPORT DATA` statement, enabling BigQuery-to-Spanner data export. The feature was announced in March 2025 and is later described with Cloud resource connections used with `EXPORT DATA` for reverse ETL to Spanner, indicating continued or expanded support by March 2026. In the BigQuery Java client surface, `EXPORT DATA` is treated as part of query-job execution and exposes export statistics.

## Evidence Summary

The release notes provide direct feature confirmation and timeline for reverse ETL to Spanner via `EXPORT DATA`, while the Java API reference supports that `EXPORT DATA` is an executable statement with associated query-job export statistics.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- March 26, 2026 Feature You can now use Cloud resource connections with EXPORT DATA statements to reverse ETL BigQuery data to Spanner.
- March 17, 2025 Feature You can now use EXPORT DATA statements to reverse ETL BigQuery data to Spanner .
- You can load or export your data from any region or multi-region to any other region or multi-region using a single bq load , LOAD DATA , bq extract , or EXPORT DATA statement.

### "Package com.google.cloud.bigquery (2.62.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery)
- Source ID: `site-java-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Export Data Stats Statistics for the EXPORT DATA statement as part of Query Job.

