---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.648Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB cross-region replication"
feature_slug: "alloydb-cross-region-replication"
latest_feature_date: "2023-06-21"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "regional replication setup"
  - "disaster recovery readiness"
  - "AlloyDB Cross-Region Replication"
  - "CRR"
  - "cross-region replication"
  - "cross region replication"
  - "cross-region failover"
  - "primary cluster replication"
---

# AlloyDB cross-region replication

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB cross-region replication reached general availability; AlloyDB Cross-Region Replication replicates primary cluster data and resources to other regions for disaster recovery readiness.

## Extended Definition

AlloyDB cross-region replication is an AlloyDB feature that replicates a primary cluster's data and resources to secondary clusters in separate Google Cloud regions for disaster recovery readiness. It reached general availability on June 21, 2023, and includes support for cross-region switchover with zero data loss for DR testing or workload migration scenarios.

## Evidence Summary

The release notes confirm feature availability milestones and GA status for cross-region replication, while the overview page describes it as a disaster-recovery approach using secondary clusters in another region.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- December 08, 2022 Feature AlloyDB cross-region replication replicates your primary cluster's data and resources.
- June 21, 2023 Feature AlloyDB cross-region replication is generally available ( GA ).
- Feature Performing a switchover with zero data loss in cross-region replication setups, to test disaster recovery (DR) or to perform workload migration, is now generally available ( GA ).
- For more information, see Cross-region replication overview and Work with cross-region replication .

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- As a further method of disaster recovery, you can achieve cross-region replication by creating secondary clusters in separate Google Cloud regions.
- For more information, see About cross-region replication .

