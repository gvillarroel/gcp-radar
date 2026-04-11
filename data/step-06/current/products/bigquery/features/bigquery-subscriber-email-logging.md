---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.454Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery subscriber email logging"
feature_slug: "bigquery-subscriber-email-logging"
latest_feature_date: "2025-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart"
keywords:
  - "data exchange scope"
  - "job and query subscriber logs"
  - "email-based subscriber logging"
  - "subscriber email logging"
  - "listing scope logging"
  - "subscriber logs"
  - "user principal ID"
  - "linked dataset"
---

# BigQuery subscriber email logging

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports subscriber email logging to record user principal IDs for jobs and queries on linked datasets at listing and data exchange scope.

## Extended Definition

BigQuery’s subscriber email logging is a feature that logs the principal identifier (user principal ID) of users who execute jobs and queries against linked datasets. The available evidence indicates this logging capability exists as a documented BigQuery feature introduced in the February 17, 2025 release stream, but does not describe operational details such as filtering, output location, or listing/data-exchange scope behavior.

## Evidence Summary

The cited release-notes entries confirm the feature’s purpose and core scope (principal IDs for users running jobs/queries on linked datasets), while the Salesforce quickstart contributes only background context for linked datasets in BigQuery.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- February 17, 2025 Libraries Node.js 7.9.2 (2025-02-12) Bug Fixes Avoid schema field mutation when passing selectedFields opt ( #1437 ) ( 27044d5 ) Java 2.48.0 (2025-02-13) Features Implement wasNull for BigQueryResultSet ( #3650 ) ( c7ef94b ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.59.0 ( #3660 ) ( 3a6228b ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250128-2.0.0 ( #3667 ) ( 0b92af6 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.63.0 ( #3661 ) ( 9bc8c01 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #3669 ) ( 4d9e0ff ) Documentation Update CONTRIBUTING.md for users without branch permissions ( #3670 ) ( 009b9a2 ) Libraries Java 2.48.0 (2025-02-13) Features Implement wasNull for BigQueryResultSet ( #3650 ) ( c7ef94b ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.59.0 ( #3660 ) ( 3a6228b ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250128-2.0.0 ( #3667 ) ( 0b92af6 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.63.0 ( #3661 ) ( 9bc8c01 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #3669 ) ( 4d9e0ff ) Documentation Update CONTRIBUTING.md for users without branch permissions ( #3670 ) ( 009b9a2 ) Feature Subscriber email logging lets you log the principal identifiers of users who execute jobs and queries against linked datasets.
- Feature Subscriber email logging lets you log the principal identifiers of users who execute jobs and queries against linked datasets.
- May 19, 2025 Libraries Go 1.68.0 (2025-05-12) Features bigquery/analyticshub: Support new feature Sharing Cloud Pubsub Streams via AH (GA) and Subscriber Email logging feature ( #11908 ) ( a21d596 ) bigquery/storage: Increased the number of partitions can be written in a single request ( 43bc515 ) bigquery: Add performance insights ( #12101 ) ( aef68ab ) bigquery: Add some missing fields to BQ stats ( #12212 ) ( 77b08e8 ) bigquery: Add WriteTruncateData write disposition ( #12013 ) ( b1126a3 ) bigquery: New client(s) ( #12228 ) ( f229bd9 ) bigquery: Support managed iceberg tables ( #11931 ) ( 35e0774 ) bigquery: Support per-job reservation assignment ( #12078 ) ( c9cebcc ) Bug Fixes bigquery: Cache total rows count ( #12230 ) ( 202dce0 ), refs #11874 #11873 bigquery: Parse timestamps with timezone info ( #11950 ) ( 530d522 ) bigquery: Update google.golang.org/api to 0.229.0 ( 3319672 ) bigquery: Upgrade gRPC service registration func ( 7c01015 ) Documentation bigquery/storage: Updated the number of partitions (from 100 to 900) can be inserted, updated and deleted in a single request ( 43bc515 ) Libraries Python 3.32.0 (2025-05-12) - YANKED Reason this release was yanked: PR #2154 caused a performance regression.
- Libraries Go 1.71.0 (2025-09-30) Features bigquery/analyticshub: You can now configure listings for multiple regions for shared datasets and linked dataset replicas in BigQuery sharing ( 10e67ef ) bigquery/reservation: Add a new field failover mode to .google.cloud.bigquery.reservation.v1.FailoverReservationRequest that allows users to choose between the HARD or SOFT failover modes when they initiate a failover operation on a reservation ( 10e67ef ) bigquery/reservation: Add a new field soft failover start time in the existing replication status in .google.cloud.bigquery.reservation.v1.Reservation to provide visibility into the state of ongoing soft failover operations on the reservation ( 10e67ef ) bigquery: Add support for MaxSlots ( #12958 ) ( a3c0aca ) Announcement Starting March 17, 2026, the BigQuery Data Transfer Service will require the bigquery.datasets.setIamPolicy and the bigquery.datasets.getIamPolicy permissions on the target dataset to create or update a transfer configuration.

### Work with Salesforce Data Cloud data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Data Cloud datasets are subject to the same limitations as other linked datasets, such as only being accessible in INFORMATION SCHEMA in dataset-scoped queries.
- Once the linked dataset is created, you can explore the dataset and the tables in it.
- Specify the name of the linked dataset.

