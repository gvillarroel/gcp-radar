---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.565Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "partitioning"
feature_slug: "partitioning"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "table partitioning guidance"
  - "table partitioning tips"
  - "partitioning advisor"
  - "query history-based partitioning"
  - "cost/performance partitioning"
  - "partitioning recommendations"
  - "clustering recommendations"
  - "partitioning optimization"
---

# partitioning

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Gemini in BigQuery now provides recommendations for materialized views, partitioning, and clustering to reduce cost and improve performance.

## Extended Definition

In BigQuery, partitioning is a table design feature that splits table data into smaller partitions based on a partitioning field, so queries can prune partitions and scan only matching data, reducing bytes read and helping control cost and improve performance. BigQuery supports time-unit (including ingestion-time) partitioning and integer-range partitioning as partitioning modes for tables. The BigQuery CLI exposes explicit options to set time-based partitioning fields and intervals, integer-range partition boundaries, and to apply clustering after partitioning when both are configured.

## Evidence Summary

The cited BigQuery docs define partitioned tables and partition pruning with cost/performance effects, and the CLI reference adds operational evidence for how time-based and range partitioning (plus clustering-with-partitioning behavior) are configured.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

