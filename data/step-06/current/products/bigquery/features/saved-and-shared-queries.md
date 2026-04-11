---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.936Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Saved and shared queries"
feature_slug: "saved-and-shared-queries"
latest_feature_date: "2016-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
keywords:
  - "query snippets"
  - "saved query sharing"
  - "saved query list"
  - "share query"
  - "query sharing"
  - "saved queries"
  - "shared query"
---

# Saved and shared queries

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added the ability to save and share queries.

## Extended Definition

BigQuery added the ability to save and share queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Libraries Go 1.71.0 (2025-09-30) Features bigquery/analyticshub: You can now configure listings for multiple regions for shared datasets and linked dataset replicas in BigQuery sharing ( 10e67ef ) bigquery/reservation: Add a new field failover mode to .google.cloud.bigquery.reservation.v1.FailoverReservationRequest that allows users to choose between the HARD or SOFT failover modes when they initiate a failover operation on a reservation ( 10e67ef ) bigquery/reservation: Add a new field soft failover start time in the existing replication status in .google.cloud.bigquery.reservation.v1.Reservation to provide visibility into the state of ongoing soft failover operations on the reservation ( 10e67ef ) bigquery: Add support for MaxSlots ( #12958 ) ( a3c0aca ) Announcement Starting March 17, 2026, the BigQuery Data Transfer Service will require the bigquery.datasets.setIamPolicy and the bigquery.datasets.getIamPolicy permissions on the target dataset to create or update a transfer configuration.
- September 15, 2025 Libraries Java 2.55.0 (2025-09-12) Features bigquery: Add custom ExceptionHandler to BigQueryOptions ( #3937 ) ( de0914d ) Dependencies Update dependency com.google.cloud:google-cloud-bigquerystorage-bom to v3.17.0 ( #3954 ) ( e73deed ) Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #3952 ) ( 79b7557 ) Libraries Python 3.37.0 (2025-09-08) Features Updates to fastpath query execution ( #2268 ) ( ef2740a ) Bug Fixes Remove deepcopy while setting properties for QueryResults ( #2280 ) ( 33ea296 ) Documentation Clarify that the presence of XyzJob.errors doesn't necessarily mean that the job has not completed or was unsuccessful ( #2278 ) ( 6e88d7d ) Clarify the api method arg for client.query() ( #2277 ) ( 8a13c12 ) Feature In the BigQuery Studio, in the Explorer pane, you can now open saved queries in Connected Sheets .
- May 05, 2025 Libraries Node.js 8.0.0 (2025-04-23) ⚠ BREAKING CHANGES migrate to node 18 ( #1458 ) Miscellaneous Chores Migrate to node 18 ( #1458 ) ( 6cd706b ) Feature Changes that you make to your saved queries are now automatically saved .
- November 17, 2025 Feature You can use folders to organize and control access to single file code assets, such as notebooks, saved queries, data canvases, and data preparation files.

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Warning: Do not grant service agent roles to any principals except service agents . bigquery.jobs.create bigquery.tables.updateData BigQuery sharing roles This table lists the predefined IAM roles and permissions for BigQuery sharing.
- BigQuery sharing permissions This table lists the IAM permissions for BigQuery sharing and the roles that include them.
- BigQuery sharing: Roles and permissions that apply to BigQuery sharing resources.

