---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.398Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery managed disaster recovery soft failover"
feature_slug: "bigquery-managed-disaster-recovery-soft-failover"
latest_feature_date: "2025-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "soft failover"
  - "disaster recovery failover"
  - "BigQuery managed DR"
  - "managed DR"
  - "BigQuery DR"
  - "managed disaster recovery"
  - "managed failover"
---

# BigQuery managed disaster recovery soft failover

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports soft failover as part of managed disaster recovery.

## Extended Definition

BigQuery managed disaster recovery includes a **soft failover** capability. The BigQuery release notes state that BigQuery now supports soft failover for managed DR, and also describe failover-related API fields that let users choose a HARD or SOFT failover mode and expose a soft-failover start time in reservation replication status.

## Evidence Summary

The release notes are the primary source confirming managed DR soft-failover support and providing related reservation failover API signals (mode selection and replication-status timing).

## Source Links

- [https://cloud.google.com/bigquery/docs/release-notes](https://cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Feature BigQuery now supports soft failover with managed disaster recovery.
- Libraries Go 1.71.0 (2025-09-30) Features bigquery/analyticshub: You can now configure listings for multiple regions for shared datasets and linked dataset replicas in BigQuery sharing ( 10e67ef ) bigquery/reservation: Add a new field failover mode to .google.cloud.bigquery.reservation.v1.FailoverReservationRequest that allows users to choose between the HARD or SOFT failover modes when they initiate a failover operation on a reservation ( 10e67ef ) bigquery/reservation: Add a new field soft failover start time in the existing replication status in .google.cloud.bigquery.reservation.v1.Reservation to provide visibility into the state of ongoing soft failover operations on the reservation ( 10e67ef ) bigquery: Add support for MaxSlots ( #12958 ) ( a3c0aca ) Announcement Starting March 17, 2026, the BigQuery Data Transfer Service will require the bigquery.datasets.setIamPolicy and the bigquery.datasets.getIamPolicy permissions on the target dataset to create or update a transfer configuration.
- March 04, 2026 Feature Monitor dataset replication latency and network egress bytes in Cloud Monitoring for BigQuery cross-region replication and managed disaster recovery .

