---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.387Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery INFORMATION_SCHEMA.SHARED_DATASET_USAGE usage-metrics fields"
feature_slug: "bigquery-information-schema-shared-dataset-usage-usage-metrics-fields"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "referenced table metadata"
  - "INFORMATION_SCHEMA.SHARED_DATASET_USAGE"
  - "shared_resource_id field"
  - "shared_resource_type field"
  - "shared dataset usage view"
  - "usage-metrics columns"
  - "shared dataset usage"
  - "SHARED_DATASET_USAGE"
---

# BigQuery INFORMATION_SCHEMA.SHARED_DATASET_USAGE usage-metrics fields

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

Adds shared_resource_id, shared_resource_type, and referenced table metadata fields to INFORMATION_SCHEMA.SHARED_DATASET_USAGE.

## Extended Definition

BigQuery now adds usage-metrics fields to INFORMATION_SCHEMA.SHARED_DATASET_USAGE for external tables and routines, including shared_resource_id (the ID of the queried resource), shared_resource_type (the type of the queried resource), and referenced table metadata that contains project ID, dataset ID, table ID, and processed-bytes fields from the base table. The feature’s logged usage data is exposed in the job principal subject field of the INFORMATION_SCHEMA.SHARED_DATASET_USAGE view.

## Evidence Summary

The BigQuery release notes for October 6, 2025 explicitly describe the added SHARED_DATASET_USAGE schema fields and where that logged usage data can be found.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- October 06, 2025 Feature The INFORMATION SCHEMA.SHARED DATASET USAGE view now includes the following schema fields to support usage metrics for external tables and routines: shared resource id : the ID of the queried resource shared resource type : the type of the queried resource referenced tables : Contains project id , dataset id , table id , and processed bytes fields of the base table.
- The logged data is available in the job principal subject field of the INFORMATION SCHEMA.SHARED DATASET USAGE view .

