---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.591Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Physical bytes storage billing"
feature_slug: "physical-bytes-storage-billing"
latest_feature_date: "2023-07-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "physical"
  - "bytes"
  - "storage"
  - "billing"
  - "datasets"
  - "can"
  - "use"
  - "model"
---

# Physical bytes storage billing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Datasets can use physical bytes as the storage billing model, including bytes used for time travel and fail-safe storage; BigQuery can use physical bytes as a storage billing model.

## Extended Definition

Datasets can use physical bytes as the storage billing model, including bytes used for time travel and fail-safe storage; BigQuery can use physical bytes as a storage billing model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.
- During this retention window, the deleted data in physical storage billing model datasets contributes to the active physical storage cost, even though the tables will no longer appear in INFORMATION SCHEMA.TABLE STORAGE or in the console.
- The recommended approach to minimize costs caused by data deletion for physical storage billing model datasets is to reduce the time-travel window to 2 days.
- On-demand query size calculation To calculate the number of bytes processed by the various types of queries, see the following sections: DML statements DDL statements Clustered tables Note: The selected dataset storage billing model does not affect the on-demand query cost calculation.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Set the --storage billing model value to PHYSICAL to use physical bytes when calculating storage charges, or to LOGICAL to use logical bytes.
- Set the --storage billing model value to PHYSICAL to use physical bytes when calculating storage charges, or to LOGICAL to use logical bytes.
- Once you change a dataset's storage billing model, you must wait 14 days before you can change the storage billing model again. --table={true false} or -t={true false} Specifies whether to update a table.
- 168 hours is the default if this flag isn't specified. --storage billing model= BILLING MODEL Specifies the storage billing model for a dataset.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Set the storage billing model value to PHYSICAL to use physical bytes when calculating storage charges, or to LOGICAL to use logical bytes.
- Set the storage billing model value to PHYSICAL to use physical bytes when calculating storage charges, or to LOGICAL to use logical bytes.
- The storage billing model option is only available for datasets that have been updated after December 1, 2022.
- The storage billing model option is only available for datasets that have been updated after December 1, 2022.

