---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.434Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Fair idle slot allocation across reservations"
feature_slug: "fair-idle-slot-allocation-across-reservations"
latest_feature_date: "2025-04-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "idle slot distribution"
  - "fairness across reservations"
  - "reservation-level fairness"
  - "fair idle slot allocation"
  - "fair share reservations"
  - "single admin project reservations"
  - "reservation slot sharing"
  - "idle slots"
---

# Fair idle slot allocation across reservations

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports fair distribution of idle slots across reservations within a single admin project.

## Extended Definition

BigQuery supports fair idle-slot distribution through the reservation setting `ignore idle slots`. When idle slots are not ignored, BigQuery shares idle slots equally across reservations and then across projects within a reservation, rather than restricting use to only provisioned capacity. The CLI and DDL references both expose this behavior as part of reservation configuration, while monitoring docs expose borrowed-slot usage metrics when idle-slot sharing is involved.

## Evidence Summary

The DDL and bq CLI pages define `ignore idle slots` reservation behavior, and the monitoring page explains metrics for borrowed slot usage when idle-slot sharing causes cross-reservation slot use.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- The following options are supported: NAME TYPE Details ignore idle slots BOOLEAN If the value is true , then the reservation uses only the slots that are provisioned to it.
- The following options are supported: NAME TYPE Details ignore idle slots BOOLEAN If the value is true , then the reservation uses only the slots that are provisioned to it.
- If true , idle slots are shared equally across all reservations first, and then across projects within the reservation.
- For more information, see Idle slots . slot capacity INTEGER The number of slots to allocate to the reservation.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Note: BigQuery might allocate additional slots to perform a job, resulting in a slot usage value that exceeds the total maximum capacity value and a non-zero value for borrowed slot usage in reservations that ignore idle slots.
- Note: BigQuery sometimes allocates additional slots to perform a job, resulting in a Total Usage value that exceeds the Maximum capacity value and a non-zero value for Borrowed Slot Usage in reservations that ignore idle slots.
- This metric lets you monitor the idle slots borrowed from other reservations and commitments, or the rounding imprecisions in the usage data.
- This metric lets you monitor the idle slots borrowed from other reservations and commitments, or the rounding imprecisions in the usage data.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Idle slots . --location= LOCATION Specifies the location of the reservation. --project id= PROJECT ID Specifies the project that owns the reservation. --slots= NUMBER OF BASELINE SLOTS Specifies the number of baseline slots to allocate to this reservation. --edition= EDITION The edition associated with the capacity commitment.
- For example: --external table definition=myTable::/tmp/tabledef --external table definition=myTable::Region:STRING,Quarter:STRING,Total sales:INTEGER@CSV=gs://mybucket/sales.csv --ignore idle slots={true false} Use with the --reservation flag.
- For more information, see Idle slots . --max staleness= INTERVAL Specifies an INTERVAL value that determines the maximum staleness allowed when querying a materialized view or an external table.
- For more information, see Use query queues . --ignore idle slots={true false} To restrict jobs running in this reservation to only use slots allocated to the reservation, set to true .

