---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.596Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB in-place major version upgrade"
feature_slug: "alloydb-in-place-major-version-upgrade"
latest_feature_date: "2024-10-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "major upgrade operation"
  - "in-place major version upgrade"
  - "AlloyDB major version upgrade"
  - "PG major upgrade"
  - "upgrade in-place"
  - "in-place upgrade"
  - "PostgreSQL 14 to 15"
---

# AlloyDB in-place major version upgrade

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB for PostgreSQL now supports in-place major-version upgrades, including PostgreSQL 14 to PostgreSQL 15.

## Extended Definition

AlloyDB in-place major version upgrade is a managed operation that upgrades the PostgreSQL major version of an existing AlloyDB cluster without replacing the cluster in place. According to AlloyDB release notes, the feature supports upgrading a cluster from PostgreSQL 14 or 15 to PostgreSQL 16, and it progressed from Preview (reported 2024-10-28) to General Availability (reported 2025-03-19).

## Evidence Summary

The cited release-notes page is the authoritative source confirming both availability milestones and the supported source/target versions for AlloyDB in-place major version upgrades.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can perform an in-place major version upgrade of your AlloyDB cluster to PostgreSQL version 16 from PostgreSQL version 14 or 15.
- March 19, 2025 Feature Performing an in-place major version upgrade of your AlloyDB cluster is generally available ( GA ).
- October 28, 2024 Feature AlloyDB for PostgreSQL now supports in-place major version upgrade in Preview .

