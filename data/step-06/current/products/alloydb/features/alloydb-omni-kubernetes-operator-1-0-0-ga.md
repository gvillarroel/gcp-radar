---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.619Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Omni Kubernetes Operator 1.0.0 GA"
feature_slug: "alloydb-omni-kubernetes-operator-1-0-0-ga"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "operator GA release"
  - "AOK Operator"
  - "AlloyDB Omni Kubernetes Operator"
  - "Kubernetes Operator 1.0.0"
  - "Omni Kubernetes Operator"
  - "1.0.0 GA"
  - "AlloyDB Omni Operator"
---

# AlloyDB Omni Kubernetes Operator 1.0.0 GA

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The AlloyDB Omni Kubernetes Operator version 1.0.0 is generally available.

## Extended Definition

The AlloyDB release notes describe AlloyDB Omni Kubernetes Operator 1.0.0+ as enabling scheduling behavior where new database Pods are placed to match and balance node distribution across an AlloyDB Omni cluster. This node-distribution scheduling is intended to help optimize cluster performance. The provided snippets do not include a direct statement that version 1.0.0 itself is GA; they explicitly label 1.1.0 as GA and mention 1.0.0+ feature availability.

## Evidence Summary

The cited release notes confirm that AlloyDB Omni Kubernetes Operator gained pod-scheduling behavior in version 1.0.0 and later, while explicitly confirming GA status only for version 1.1.0.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- This version includes the following changes: pgvector is updated to version 0.5.0 PostgreSQL is updated to version 15.4 Feature The AlloyDB Omni Kubernetes Operator version 0.3.0 is now available in Preview , and includes bug fixes and improvements to the operator.
- This version includes the following features and changes: The AlloyDB Omni Kubernetes Operator version 1.1.0 is generally available ( GA ) and it includes the following new features: Cross-data center replication to support automated setup of disaster recovery.
- Before you upgrade to AlloyDB Omni Kubernetes operator version 1.1.1, you must drop any indexes created using the earlier postgres ann version, then upgrade AlloyDB Omni, and then create the indexes again using the alloydb scann extension.
- August 14, 2024 Feature The AlloyDB Omni Kubernetes Operator version 1.0.0 and later lets you schedule matching new database Pods to nodes to balance node distribution across the AlloyDB Omni cluster and help optimize performance.

