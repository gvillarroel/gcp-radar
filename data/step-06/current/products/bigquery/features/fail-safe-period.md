---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.591Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Fail-safe period"
feature_slug: "fail-safe-period"
latest_feature_date: "2023-07-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
keywords:
  - "fail"
  - "safe"
  - "period"
  - "provides"
  - "additional"
  - "seven"
  - "days"
  - "storage"
---

# Fail-safe period

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The fail-safe period provides an additional seven days of data storage after the time travel window for emergency recovery; The fail-safe period provides an additional seven days of data storage after the time travel window for emergency recovery.

## Extended Definition

The fail-safe period provides an additional seven days of data storage after the time travel window for emergency recovery; The fail-safe period provides an additional seven days of data storage after the time travel window for emergency recovery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.
- Examples Setting the expiration timestamp and description on a view The following example sets the expiration timestamp on a view to seven days from the execution time of the ALTER VIEW statement, and sets the description as well: ALTER VIEW mydataset . myview SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "View that expires seven days from now" ) ALTER MATERIALIZED VIEW SET OPTIONS statement Sets the options on a materialized view.
- Once you change a dataset's storage billing model, you must wait 14 days before you can change the storage billing model again. tags <ARRAY<STRUCT<STRING, STRING>>> An array of IAM tags for the dataset, expressed as key-value pairs.
- Once you change a dataset's storage billing model, you must wait 14 days before you can change the storage billing model again. tags <ARRAY<STRUCT<STRING, STRING>>> An array of IAM tags for the dataset, expressed as key-value pairs.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.
- Reducing the time travel window from the default value of seven days reduces the retention period for data deleted from or changed in a table.
- INFORMATION SCHEMA storage calculations don't match billing Use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view instead of INFORMATION SCHEMA.TABLE STORAGE - TABLE STORAGE USAGE TIMELINE provides more accurate and granular data to correctly calculate storage costs The queries run on INFORMATION SCHEMA views don't include taxes, adjustments, and rounding errors—take these into account when comparing the data.
- Active storage charges include any table or table partition that has not been modified for 90 consecutive days, whereas long-term storage charges include tables and partitions that haven't been modified for 90 consecutive days.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- If an organization has more than 10 projects, then only the top 10 projects with the highest slot usage, job concurrency, job duration, or failed jobs in the selected time period are shown.
- Error donut chart This chart shows the proportion of the top causes of failure in the selected time period.
- The Error donut chart shows the proportion of different causes of failure in the selected time period.
- Average slot usage in the selected time period from jobs that failed.

