---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.827Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery hourly partitioned tables"
feature_slug: "bigquery-hourly-partitioned-tables"
latest_feature_date: "2020-05-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
keywords:
  - "ingestion-time hourly partitions"
  - "time partitioning HOUR"
  - "hour partitioning"
  - "HOUR partitioning"
  - "hourly table partitioning"
  - "hourly partitioned tables"
  - "time-unit partitioning"
  - "hourly partitioning"
---

# BigQuery hourly partitioned tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Hourly partitioned tables feature is now available in BigQuery in beta.

## Extended Definition

Hourly partitioned tables feature is now available in BigQuery in beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)

## Supporting Pages

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose that you create an ingestion-time partitioned table with hourly partitioning and send data at the following times: Ingestion time PARTITIONTIME Partition (hourly) 2021-05-07 17:22:00 2021-05-07 17:00:00 2021050717 2021-05-07 17:40:00 2021-05-07 17:00:00 2021050717 2021-05-07 18:31:00 2021-05-07 18:00:00 2021050718 Because the table in this example uses hourly partitioning, the value of PARTITIONTIME is truncated to an hour boundary.
- Choose hourly partitioning if your tables have a high volume of data that spans a short date range — typically less than six months of timestamp values.
- If you choose hourly partitioning, make sure the partition count stays within the partition limits .

