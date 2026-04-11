---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.602Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB admin password secret persistence"
feature_slug: "alloydb-admin-password-secret-persistence"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "admin secret lifecycle"
  - "credential persistence"
  - "secret persistence"
  - "password secret retention"
  - "admin password secret"
  - "password secret"
  - "cluster creation"
---

# AlloyDB admin password secret persistence

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

When creating an AlloyDB cluster, the admin password secret is no longer deleted after being specified.

## Extended Definition

In AlloyDB for PostgreSQL, this feature means that when a database cluster is created, the admin password secret supplied at creation is kept instead of being removed afterward. It specifically changes the lifecycle of the admin password secret during cluster provisioning so the secret persists after cluster creation.

## Evidence Summary

The provided AlloyDB release note states that during database cluster creation, the admin password secret is no longer deleted after being specified, which directly documents persistent admin-credential secret behavior.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- When you create a database cluster, the admin password secret is no longer deleted after you specify it.
- You can now select the Enhanced tier during cluster creation, manage your project-level backups with tiered tabs, and delete an enhanced backup.
- You can now select the Enhanced tier during cluster creation, manage your project-level backups with tiered tabs, and delete an enhanced backup.
- You can also override IP address range allocations configured during cluster creation.

