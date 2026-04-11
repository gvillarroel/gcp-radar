---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.934Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery flat-rate pricing"
feature_slug: "bigquery-flat-rate-pricing"
latest_feature_date: "2016-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "fixed monthly price"
  - "fixed-price billing"
  - "unlimited querying"
  - "flat-rate commitment"
  - "flat-rate pricing"
  - "flat-rate model"
  - "flat-rate"
  - "billing model"
---

# BigQuery flat-rate pricing

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery introduced flat-rate pricing that provides unlimited querying for a fixed monthly price.

## Extended Definition

BigQuery introduced flat-rate pricing that provides unlimited querying for a fixed monthly price.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Once you change a dataset's storage billing model, you must wait 14 days before you can change the storage billing model again. tags <ARRAY<STRUCT<STRING, STRING>>> An array of IAM tags for the dataset, expressed as key-value pairs.
- Once you change a dataset's storage billing model, you must wait 14 days before you can change the storage billing model again. tags <ARRAY<STRUCT<STRING, STRING>>> An array of IAM tags for the dataset, expressed as key-value pairs.
- 168 hours is the default if this option isn't specified. primary replica STRING The replica name to set as the primary replica . storage billing model STRING Alters the storage billing model for the dataset.
- 168 hours is the default if this option isn't specified. primary replica STRING The replica name to set as the primary replica . storage billing model STRING Alters the storage billing model for the dataset.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.
- The following are examples of actions that might result in this move: Insert, update, truncate, merge, or delete statements that change table data Loading, streaming, or appending data to the table ALTER statements that change the table schema Adding or modifying table properties like description, labels, or expiration Modifying table metadata Configure the storage billing model Best practice: Optimize the storage billing model based on your usage patterns.
- On-demand query size calculation To calculate the number of bytes processed by the various types of queries, see the following sections: DML statements DDL statements Clustered tables Note: The selected dataset storage billing model does not affect the on-demand query cost calculation.
- During this retention window, the deleted data in physical storage billing model datasets contributes to the active physical storage cost, even though the tables will no longer appear in INFORMATION SCHEMA.TABLE STORAGE or in the console.

