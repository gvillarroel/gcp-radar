---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.604Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cross-data center replication for automated disaster recovery"
feature_slug: "cross-data-center-replication-for-automated-disaster-recovery"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "cross-dc replication"
  - "cross-region DR"
  - "automated DR"
  - "cross-data-center replication"
  - "disaster recovery setup"
  - "automated disaster recovery"
  - "cross-region replica"
  - "alloydb omni disaster recovery"
---

# Cross-data center replication for automated disaster recovery

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Cross-data center replication now supports automated disaster recovery setup in AlloyDB Omni.

## Extended Definition

AlloyDB cross-region replication replicates a primary cluster’s data and resources to secondary regions, enabling a switchover path that can be used to test disaster recovery or perform workload migration with zero data loss. The release notes describe this DR-oriented switchover behavior as generally available. The same notes state cross-region replication can use up to five secondary regions, but they do not explicitly confirm the "automated" setup wording or AlloyDB Omni context in the provided excerpts.

## Evidence Summary

The cited release notes page provides evidence that cross-region replication (including DR switchover and migration scenarios) is GA with zero data loss, and that it scales to five secondary regions.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Feature Performing a switchover with zero data loss in cross-region replication setups, to test disaster recovery (DR) or to perform workload migration, is now generally available ( GA ).
- December 08, 2022 Feature AlloyDB cross-region replication replicates your primary cluster's data and resources.
- For more information, see Cross-region replication overview and Work with cross-region replication .
- February 27, 2025 Feature AlloyDB's cross-region replication supports up to five secondary regions.

