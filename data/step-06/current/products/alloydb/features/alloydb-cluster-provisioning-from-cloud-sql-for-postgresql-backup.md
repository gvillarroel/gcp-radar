---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.594Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB cluster provisioning from Cloud SQL for PostgreSQL backup"
feature_slug: "alloydb-cluster-provisioning-from-cloud-sql-for-postgresql-backup"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "provision cluster from Cloud SQL backup"
  - "cluster provisioning from backup copy"
  - "create AlloyDB cluster from backup"
  - "backup-based provisioning"
  - "backup-based cluster create"
  - "Cloud SQL backup migration"
  - "Cloud SQL for PostgreSQL backup"
---

# AlloyDB cluster provisioning from Cloud SQL for PostgreSQL backup

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB clusters can be set up using a copy of an existing Cloud SQL for PostgreSQL backup.

## Extended Definition

AlloyDB for PostgreSQL supports provisioning a new AlloyDB cluster from a backup of Cloud SQL for PostgreSQL. The AlloyDB release notes state that clusters can be set up using a copy of a Cloud SQL for PostgreSQL backup, including free-trial cluster setup, and later describe migration from Cloud SQL for PostgreSQL to AlloyDB using that backup as GA. This is a backup-based cluster provisioning path from an external source backup into AlloyDB.

## Evidence Summary

The release notes provide direct dated announcements that AlloyDB cluster creation/provisioning from Cloud SQL for PostgreSQL backups was introduced and later available as GA migration support.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- November 10, 2025 Feature AlloyDB now supports PostgreSQL 17 for migrating from Cloud SQL for PostgreSQL to AlloyDB for PostgreSQL using your Cloud SQL for PostgreSQL backup.
- May 07, 2025 Feature You can migrate from Cloud SQL for PostgreSQL to AlloyDB for PostgreSQL using your Cloud SQL for PostgreSQL backup ( GA ).
- September 25, 2024 Feature You can now set up AlloyDB free trial clusters using a copy of your Cloud SQL for PostgreSQL backup.
- November 21, 2024 Feature You can set up AlloyDB clusters using a copy of your Cloud SQL for PostgreSQL backup.

