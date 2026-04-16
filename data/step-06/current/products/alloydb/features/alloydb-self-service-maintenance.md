---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.819Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB self-service maintenance"
feature_slug: "alloydb-self-service-maintenance"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/maintenance"
  - "https://docs.cloud.google.com/alloydb/docs/adaptive-autovacuum"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
  - "https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization"
keywords:
  - "self-service patching"
  - "install patches"
  - "self-service maintenance"
  - "configure deny periods"
  - "maintenance window"
  - "user-managed maintenance"
  - "apply updates"
  - "maintenance workflows"
---

# AlloyDB self-service maintenance

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB now offers self-service maintenance workflows to apply updates earlier, install patches, and configure deny periods.

## Extended Definition

AlloyDB now offers self-service maintenance workflows to apply updates earlier, install patches, and configure deny periods.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- [https://docs.cloud.google.com/alloydb/docs/adaptive-autovacuum](https://docs.cloud.google.com/alloydb/docs/adaptive-autovacuum)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)

## Supporting Pages

### Maintenance overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- Source ID: `site-docs-reference-2`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Non-emergency maintenance for an AlloyDB cluster with no configured maintenance windows can occur any time except for the hours between 6 AM and 10 PM on weekdays, in the local time of the region where the cluster is located.
- The maintenance window duration depends upon the complexity of the cluster—that is, the number of read pool instances that require updates—and the nature of the update.
- Self-service maintenance If you need to apply maintenance and update your clusters to the latest version immediately, you can perform self-service maintenance.
- If you set a maintenance window, then AlloyDB schedules future non-emergency maintenance events to begin no later than one hour after the specified time.

### "Configure adaptive autovacuum \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/adaptive-autovacuum](https://docs.cloud.google.com/alloydb/docs/adaptive-autovacuum)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: N/A

### "AlloyDB query tuning and optimization \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)
- Source ID: `site-api-reference`
- Final score: 60
- Re-rank relevance: N/A

