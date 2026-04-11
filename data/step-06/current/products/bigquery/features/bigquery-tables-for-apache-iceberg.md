---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.471Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery tables for Apache Iceberg"
feature_slug: "bigquery-tables-for-apache-iceberg"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "customer-owned cloud buckets"
  - "BigQuery tables for Apache Iceberg"
  - "query Apache Iceberg data"
  - "Iceberg external table"
  - "Apache Iceberg tables"
  - "BQ Iceberg tables"
  - "Iceberg table support"
---

# BigQuery tables for Apache Iceberg

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Introduces BigQuery tables for Apache Iceberg that allow querying Iceberg data in customer-owned cloud buckets without moving data.

## Extended Definition

BigQuery tables for Apache Iceberg in BigQuery refer to support for Apache Iceberg external tables, including the ability to query them from BigQuery features such as materialized views without first migrating the data into BigQuery-managed storage. The release notes also state this feature was later renamed to "BigLake tables for Apache Iceberg in BigQuery," and document later capability additions such as merge-on-read support and access to snapshots via `FOR SYSTEM TIME AS OF`.

## Evidence Summary

The provided BigQuery release-notes excerpts confirm the feature’s existence, its rename to BigLake tables for Apache Iceberg, and key externally table behaviors including materialized-view usage, snapshot access, and merge-on-read.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- June 09, 2025 Libraries Java 2.51.0 (2025-06-06) Features bigquery: Job creation mode GA ( #3804 ) ( a21cde8 ) bigquery: Support Fine Grained ACLs for Datasets ( #3803 ) ( bebf1c6 ) Dependencies Rollback netty.version to v4.1.119.Final ( #3827 ) ( 94c71a0 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.65.0 ( #3787 ) ( 0574ecc ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250511-2.0.0 ( #3794 ) ( d3bf724 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #3811 ) ( 2c5ede4 ) Feature You can reference Iceberg external tables in materialized views instead of migrating that data to BigQuery-managed storage.
- September 16, 2025 Feature You can now access snapshots of Apache Iceberg external tables that are retained in your Iceberg metadata by using the FOR SYSTEM TIME AS OF clause.
- Feature BigQuery tables for Apache Iceberg have been renamed BigLake tables for Apache Iceberg in BigQuery .
- March 31, 2025 Feature Iceberg external tables now support merge-on-read.

