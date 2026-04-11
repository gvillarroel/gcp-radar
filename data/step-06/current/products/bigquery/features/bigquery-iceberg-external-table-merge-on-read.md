---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.445Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Iceberg external table merge-on-read"
feature_slug: "bigquery-iceberg-external-table-merge-on-read"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "equality deletes"
  - "Iceberg MOR"
  - "position deletes"
  - "Iceberg table deletes"
  - "external table delete support"
  - "Apache Iceberg external table"
  - "merge-on-read"
  - "merge on read"
---

# BigQuery Iceberg external table merge-on-read

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Iceberg external tables in BigQuery now support merge-on-read, including position and equality deletes.

## Extended Definition

As documented in BigQuery release notes, Iceberg external tables in BigQuery gained merge-on-read support (announced March 31, 2025), enabling query-time processing of change/deletion information from Apache Iceberg tables. The same release notes also state that Iceberg tables can be queried with position and equality deletes, indicating support for those delete types in this context.

## Evidence Summary

The BigQuery release notes page documents the March 31, 2025 feature announcement for Iceberg external table merge-on-read and separately mentions query support for Iceberg position and equality deletes.

## Source Links

- [https://cloud.google.com/bigquery/docs/release-notes](https://cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- You can query Iceberg tables with position deletes and equality deletes.
- September 16, 2025 Feature You can now access snapshots of Apache Iceberg external tables that are retained in your Iceberg metadata by using the FOR SYSTEM TIME AS OF clause.
- March 31, 2025 Feature Iceberg external tables now support merge-on-read.

