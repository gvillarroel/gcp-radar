---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.443Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery CDC _CHANGE_SEQUENCE_NUMBER"
feature_slug: "bigquery-cdc-change-sequence-number"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "streaming UPSERT ordering"
  - "CDC sequencing"
  - "_CHANGE_SEQUENCE_NUMBER"
  - "change sequence number"
  - "sequence number"
  - "CDC sequence"
  - "Change Data Capture"
---

# BigQuery CDC _CHANGE_SEQUENCE_NUMBER

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery change data capture now supports _CHANGE_SEQUENCE_NUMBER to manage streaming UPSERT ordering; BigQuery change data capture now supports defining _CHANGE_SEQUENCE_NUMBER to manage streaming UPSERT ordering.

## Extended Definition

BigQuery change data capture supports defining a `_CHANGE_SEQUENCE_NUMBER` to manage ordering for streaming UPSERT operations. In the same official release-notes source, this CDC capability is later described under the renamed feature name "BigQuery change data capture ingestion."

## Evidence Summary

The BigQuery release notes announce the new `_CHANGE_SEQUENCE_NUMBER` support for CDC streaming UPSERT ordering and document a subsequent rename of the feature.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now define a CHANGE SEQUENCE NUMBER for BigQuery change data capture (CDC) to manage streaming UPSERT ordering for BigQuery.
- November 03, 2025 Libraries Go 1.72.0 (2025-10-28) Features bigquery/reservation: Add new BACKGROUND CHANGE DATA CAPTURE , BACKGROUND COLUMN METADATA INDEX , and BACKGROUND SEARCH INDEX REFRESH reservation assignment types ( 182df61 ) bigquery/reservation: Add new reservation IAM policy get/set/test methods ( 182df61 ) bigquery/reservation: Add support for creation and modification of new reservation groups ( 182df61 ) bigquery: Expose continuous query in config ( #13130 ) ( 2f0942b ) Bug Fixes bigquery/v2: Upgrade gRPC service registration func ( 8fffca2 ) bigquery: Upgrade gRPC service registration func ( 8fffca2 ) October 31, 2025 Feature We have increased the row capacity for pivot tables backed by BigQuery in Connected Sheets from 100,000 to 200,000 rows.
- January 28, 2026 Change The BigQuery change data capture feature has been renamed to BigQuery change data capture ingestion .

