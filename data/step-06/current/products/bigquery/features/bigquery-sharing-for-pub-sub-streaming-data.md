---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.424Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery sharing for Pub/Sub streaming data"
feature_slug: "bigquery-sharing-for-pub-sub-streaming-data"
latest_feature_date: "2025-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
keywords:
  - "BigQuery sharing client library"
  - "Pub/Sub streaming data sharing"
  - "share streaming data in BigQuery"
  - "provider usage metrics"
  - "Pub/Sub sharing"
  - "streaming data share"
  - "BigQuery sharing"
---

# BigQuery sharing for Pub/Sub streaming data

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports sharing Pub/Sub streaming data via BigQuery sharing with additional client library support and provider usage metrics.

## Extended Definition

BigQuery sharing supports sharing Pub/Sub streaming data, with the BigQuery release notes stating this capability includes additional client library support and provider usage metrics. BigQuery also has documented IAM roles and permissions specifically for BigQuery sharing resources, which are the access controls that apply to BigQuery sharing usage.

## Evidence Summary

The cited release notes confirm the Pub/Sub streaming data sharing feature, while the access-control documentation confirms BigQuery sharing has dedicated IAM roles and permission definitions.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now share Pub/Sub streaming data through BigQuery sharing with additional client libraries support and provider usage metrics.
- Libraries Go 1.71.0 (2025-09-30) Features bigquery/analyticshub: You can now configure listings for multiple regions for shared datasets and linked dataset replicas in BigQuery sharing ( 10e67ef ) bigquery/reservation: Add a new field failover mode to .google.cloud.bigquery.reservation.v1.FailoverReservationRequest that allows users to choose between the HARD or SOFT failover modes when they initiate a failover operation on a reservation ( 10e67ef ) bigquery/reservation: Add a new field soft failover start time in the existing replication status in .google.cloud.bigquery.reservation.v1.Reservation to provide visibility into the state of ongoing soft failover operations on the reservation ( 10e67ef ) bigquery: Add support for MaxSlots ( #12958 ) ( a3c0aca ) Announcement Starting March 17, 2026, the BigQuery Data Transfer Service will require the bigquery.datasets.setIamPolicy and the bigquery.datasets.getIamPolicy permissions on the target dataset to create or update a transfer configuration.
- Feature You can now use custom constraints with Organization Policy to provide more granular control over specific fields for some BigQuery sharing resources.
- September 02, 2025 Feature You can now configure listings for multiple regions for shared datasets and linked dataset replicas in BigQuery sharing.

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Warning: Do not grant service agent roles to any principals except service agents . bigquery.jobs.create bigquery.tables.updateData BigQuery sharing roles This table lists the predefined IAM roles and permissions for BigQuery sharing.
- BigQuery sharing permissions This table lists the IAM permissions for BigQuery sharing and the roles that include them.
- BigQuery sharing: Roles and permissions that apply to BigQuery sharing resources.

