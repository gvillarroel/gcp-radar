---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.372Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Subscriber email logging for shared dataset usage"
feature_slug: "subscriber-email-logging-for-shared-dataset-usage"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "principal identifiers"
  - "subscriber email logging"
  - "email subscriber logging"
  - "subscriber usage logs"
  - "dataset usage logs"
  - "shared data exchanges"
  - "job and query logging"
  - "shared dataset usage"
---

# Subscriber email logging for shared dataset usage

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Subscriber email logging can capture principal identifiers for jobs and queries on linked datasets and shared data exchanges.

## Extended Definition

Subscriber email logging in BigQuery is a feature that records principal identifiers for users who execute jobs and queries against linked datasets. The release notes describe this as logging information used to identify who ran work on shared-linked dataset resources. Coverage is limited to this behavioral statement, so deeper semantics (retention, output destination, and configuration options) are not specified in the provided excerpt.

## Evidence Summary

The BigQuery release notes include a 2025 feature entry stating that subscriber email logging captures principal identifiers of users running jobs and queries on linked datasets.

## Source Links

- [https://cloud.google.com/bigquery/docs/release-notes](https://cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- February 17, 2025 Libraries Node.js 7.9.2 (2025-02-12) Bug Fixes Avoid schema field mutation when passing selectedFields opt ( #1437 ) ( 27044d5 ) Java 2.48.0 (2025-02-13) Features Implement wasNull for BigQueryResultSet ( #3650 ) ( c7ef94b ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.59.0 ( #3660 ) ( 3a6228b ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250128-2.0.0 ( #3667 ) ( 0b92af6 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.63.0 ( #3661 ) ( 9bc8c01 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #3669 ) ( 4d9e0ff ) Documentation Update CONTRIBUTING.md for users without branch permissions ( #3670 ) ( 009b9a2 ) Libraries Java 2.48.0 (2025-02-13) Features Implement wasNull for BigQueryResultSet ( #3650 ) ( c7ef94b ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.59.0 ( #3660 ) ( 3a6228b ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250128-2.0.0 ( #3667 ) ( 0b92af6 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.63.0 ( #3661 ) ( 9bc8c01 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #3669 ) ( 4d9e0ff ) Documentation Update CONTRIBUTING.md for users without branch permissions ( #3670 ) ( 009b9a2 ) Feature Subscriber email logging lets you log the principal identifiers of users who execute jobs and queries against linked datasets.
- Feature Subscriber email logging lets you log the principal identifiers of users who execute jobs and queries against linked datasets.
- May 19, 2025 Libraries Go 1.68.0 (2025-05-12) Features bigquery/analyticshub: Support new feature Sharing Cloud Pubsub Streams via AH (GA) and Subscriber Email logging feature ( #11908 ) ( a21d596 ) bigquery/storage: Increased the number of partitions can be written in a single request ( 43bc515 ) bigquery: Add performance insights ( #12101 ) ( aef68ab ) bigquery: Add some missing fields to BQ stats ( #12212 ) ( 77b08e8 ) bigquery: Add WriteTruncateData write disposition ( #12013 ) ( b1126a3 ) bigquery: New client(s) ( #12228 ) ( f229bd9 ) bigquery: Support managed iceberg tables ( #11931 ) ( 35e0774 ) bigquery: Support per-job reservation assignment ( #12078 ) ( c9cebcc ) Bug Fixes bigquery: Cache total rows count ( #12230 ) ( 202dce0 ), refs #11874 #11873 bigquery: Parse timestamps with timezone info ( #11950 ) ( 530d522 ) bigquery: Update google.golang.org/api to 0.229.0 ( 3319672 ) bigquery: Upgrade gRPC service registration func ( 7c01015 ) Documentation bigquery/storage: Updated the number of partitions (from 100 to 900) can be inserted, updated and deleted in a single request ( 43bc515 ) Libraries Python 3.32.0 (2025-05-12) - YANKED Reason this release was yanked: PR #2154 caused a performance regression.
- October 06, 2025 Feature The INFORMATION SCHEMA.SHARED DATASET USAGE view now includes the following schema fields to support usage metrics for external tables and routines: shared resource id : the ID of the queried resource shared resource type : the type of the queried resource referenced tables : Contains project id , dataset id , table id , and processed bytes fields of the base table.

