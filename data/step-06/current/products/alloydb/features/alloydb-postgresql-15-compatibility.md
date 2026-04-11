---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.637Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB PostgreSQL 15 compatibility"
feature_slug: "alloydb-postgresql-15-compatibility"
latest_feature_date: "2023-09-21"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "supported PostgreSQL versions"
  - "PG15"
  - "PostgreSQL 15 compatibility"
  - "PostgreSQL 15 support"
  - "version 15 database"
  - "AlloyDB PostgreSQL 15"
  - "PostgreSQL 15"
---

# AlloyDB PostgreSQL 15 compatibility

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB supports database clusters with PostgreSQL 15 compatibility.

## Extended Definition

AlloyDB for PostgreSQL supports creating and upgrading clusters with PostgreSQL 15 compatibility. The release notes also state that, after a March 29, 2024 fix, clusters created via the Google Cloud CLI, AlloyDB Admin API, or Terraform now default to PostgreSQL 15 compatibility instead of PostgreSQL 14 compatibility.

## Evidence Summary

The AlloyDB release notes explicitly confirm PostgreSQL 15 compatibility for cluster creation/upgrade and document a default-setting correction that aligns CLI/API/Terraform-created clusters to PG15 compatibility.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- March 29, 2024 Fixed Fixed the issue causing AlloyDB clusters created using the Google Cloud CLI, the AlloyDB Admin API, or Terraform to have PostgreSQL 14 compatibility by default, instead of PostgreSQL 15 compatibility.
- AlloyDB clusters created using the Google Cloud CLI, the AlloyDB Admin API, or Terraform have PostgreSQL 14 compatibility by default, instead of PostgreSQL 15 compatibility.
- You can create or upgrade a cluster with PostgreSQL 15 compatibility.
- You can create a cluster with PostgreSQL 15 compatibility .

