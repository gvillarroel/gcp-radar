---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.443Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Default storage billing model for new datasets"
feature_slug: "default-storage-billing-model-for-new-datasets"
latest_feature_date: "2024-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "default"
  - "storage"
  - "billing"
  - "model"
  - "datasets"
  - "bigquery"
  - "lets"
  - "users"
---

# Default storage billing model for new datasets

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery lets users configure the default storage billing model for newly created datasets.

## Extended Definition

BigQuery lets users configure the default storage billing model for newly created datasets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- 168 hours is the default if this option isn't specified. primary replica STRING The replica name to set as the primary replica . storage billing model STRING Alters the storage billing model for the dataset.
- 168 hours is the default if this option isn't specified. primary replica STRING The replica name to set as the primary replica . storage billing model STRING Alters the storage billing model for the dataset.
- The storage billing model option is only available for datasets that have been updated after December 1, 2022.
- The storage billing model option is only available for datasets that have been updated after December 1, 2022.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.
- During this retention window, the deleted data in physical storage billing model datasets contributes to the active physical storage cost, even though the tables will no longer appear in INFORMATION SCHEMA.TABLE STORAGE or in the console.
- The recommended approach to minimize costs caused by data deletion for physical storage billing model datasets is to reduce the time-travel window to 2 days.
- As a best practice, consider long-term storage pricing and the physical storage billing model before exporting data out of BigQuery .

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- If the configuration setting is not specified, the default value is true ; the query uses legacy SQL. --vertex ai model id= VERTEX AI MODEL ID When specified, updates the model ID for a BigQuery ML model that is registered in the Vertex AI Model Registry. --view= QUERY When specified, updates the SQL query for a view. --view udf resource= FILE Updates the Cloud Storage URI or the path to a local code file that is loaded and evaluated immediately as a user-defined function resource in a view's SQL query.
- 168 hours is the default if this flag isn't specified. --storage billing model= BILLING MODEL Specifies the storage billing model for a dataset.
- Once you change a dataset's storage billing model, you must wait 14 days before you can change the storage billing model again. --table={true false} or -t={true false} Specifies whether to update a table.
- Set the --storage billing model value to PHYSICAL to use physical bytes when calculating storage charges, or to LOGICAL to use logical bytes.

