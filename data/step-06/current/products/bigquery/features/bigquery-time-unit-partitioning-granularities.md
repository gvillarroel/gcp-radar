---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.814Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery time-unit partitioning granularities"
feature_slug: "bigquery-time-unit-partitioning-granularities"
latest_feature_date: "2020-09-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
keywords:
  - "hour/month/year partitioning"
  - "time unit partitions"
  - "MONTH granularity"
  - "HOUR granularity"
  - "yearly partitioning"
  - "time-unit partitioning"
  - "monthly partitioning"
  - "hourly partitioning"
---

# BigQuery time-unit partitioning granularities

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports time-unit partitioning at hourly, monthly, and yearly granularities.

## Extended Definition

BigQuery now supports time-unit partitioning at hourly, monthly, and yearly granularities.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)

## Supporting Pages

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Partitioning is discussed generally, but specific hourly, monthly, or yearly time-unit granularity support is not clearly described in this excerpt.

Evidence snippets:
- For example, suppose that you create an ingestion-time partitioned table with hourly partitioning and send data at the following times: Ingestion time PARTITIONTIME Partition (hourly) 2021-05-07 17:22:00 2021-05-07 17:00:00 2021050717 2021-05-07 17:40:00 2021-05-07 17:00:00 2021050717 2021-05-07 18:31:00 2021-05-07 18:00:00 2021050718 Because the table in this example uses hourly partitioning, the value of PARTITIONTIME is truncated to an hour boundary.
- Select daily, hourly, monthly, or yearly partitioning When you partition a table by time-unit column or ingestion time, you choose whether the partitions have daily, hourly, monthly, or yearly granularity.
- Choose hourly partitioning if your tables have a high volume of data that spans a short date range — typically less than six months of timestamp values.
- In these scenarios, use monthly or yearly partitioning along with clustering on the partitioning column to achieve the best performance.

