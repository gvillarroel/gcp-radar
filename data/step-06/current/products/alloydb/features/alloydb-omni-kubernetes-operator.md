---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.636Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Omni Kubernetes Operator"
feature_slug: "alloydb-omni-kubernetes-operator"
latest_feature_date: "2023-10-11"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "deploy AlloyDB Omni on Kubernetes"
  - "Kubernetes operator for AlloyDB Omni"
  - "AlloyDB Omni Kubernetes Operator"
  - "manage AlloyDB Omni clusters"
  - "Omni Kubernetes Operator"
  - "AlloyDB Omni Operator"
  - "alloydb omni operator"
  - "alloydb-omni-operator"
---

# AlloyDB Omni Kubernetes Operator

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

The AlloyDB Omni Kubernetes Operator enables deploying and managing AlloyDB Omni on Kubernetes clusters.

## Extended Definition

The AlloyDB Omni Kubernetes Operator is a Kubernetes operator for AlloyDB Omni released in versioned form, with release notes showing it was in Preview in version 0.3.0 and generally available in version 1.1.0. It includes cluster management capabilities such as cross-data-center replication setup for disaster recovery and matching database Pod scheduling to balance node distribution across an AlloyDB Omni cluster.

## Evidence Summary

The AlloyDB release notes provide feature-level evidence for the operator, including lifecycle status (Preview and GA) and specific supported capabilities introduced across versions.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- This version includes the following changes: pgvector is updated to version 0.5.0 PostgreSQL is updated to version 15.4 Feature The AlloyDB Omni Kubernetes Operator version 0.3.0 is now available in Preview , and includes bug fixes and improvements to the operator.
- This version includes the following features and changes: The AlloyDB Omni Kubernetes Operator version 1.1.0 is generally available ( GA ) and it includes the following new features: Cross-data center replication to support automated setup of disaster recovery.
- Before you upgrade to AlloyDB Omni Kubernetes operator version 1.1.1, you must drop any indexes created using the earlier postgres ann version, then upgrade AlloyDB Omni, and then create the indexes again using the alloydb scann extension.
- August 14, 2024 Feature The AlloyDB Omni Kubernetes Operator version 1.0.0 and later lets you schedule matching new database Pods to nodes to balance node distribution across the AlloyDB Omni cluster and help optimize performance.

