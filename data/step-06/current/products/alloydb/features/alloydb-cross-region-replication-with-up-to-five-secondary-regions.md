---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.591Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB cross-region replication with up to five secondary regions"
feature_slug: "alloydb-cross-region-replication-with-up-to-five-secondary-regions"
latest_feature_date: "2025-02-27"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "geographic workload distribution"
  - "multi-region DR"
  - "multi-region replication setup"
  - "five secondary regions"
  - "five-region replication"
  - "disaster recovery replication"
  - "cross-region replication"
  - "cross-region failover"
---

# AlloyDB cross-region replication with up to five secondary regions

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

Cross-region replication in AlloyDB now supports up to five secondary regions for disaster recovery and geographic workload distribution.

## Extended Definition

AlloyDB cross-region replication is a feature that allows a primary cluster to replicate data and resources to secondary clusters in other regions, and as documented in the AlloyDB release notes, this setup now supports up to five secondary regions. The same release notes also state that cross-region replication supports performing a switchover with zero data loss, which is positioned for disaster-recovery testing and workload migration.

## Evidence Summary

The AlloyDB release notes provide direct evidence for both the five-secondary-region replication limit and the availability of zero-data-loss switchover in cross-region replication for DR or migration use cases.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- February 27, 2025 Feature AlloyDB's cross-region replication supports up to five secondary regions.
- Feature Performing a switchover with zero data loss in cross-region replication setups, to test disaster recovery (DR) or to perform workload migration, is now generally available ( GA ).
- December 08, 2022 Feature AlloyDB cross-region replication replicates your primary cluster's data and resources.
- For more information, see Cross-region replication overview and Work with cross-region replication .

