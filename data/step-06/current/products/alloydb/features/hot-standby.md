---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.461Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Hot standby"
feature_slug: "hot-standby"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/high-availability"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference"
keywords:
  - "hot"
  - "standby"
  - "improves"
  - "alloydb"
  - "high"
  - "availability"
  - "keeping"
  - "node"
---

# Hot standby

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Hot standby improves AlloyDB high availability by keeping the standby node ready for faster failover and consistent post-failover performance.

## Extended Definition

Hot standby improves AlloyDB high availability by keeping the standby node ready for faster failover and consistent post-failover performance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/high-availability](https://docs.cloud.google.com/alloydb/docs/high-availability)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference)

## Supporting Pages

### "AlloyDB high availability overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/high-availability](https://docs.cloud.google.com/alloydb/docs/high-availability)
- Source ID: `site-docs-reference-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Primary and secondary instances An AlloyDB primary instance configured with high availability includes an active node and a standby node, which are located in different zones.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback AlloyDB high availability overview Stay organized with collections Save and categorize content based on your preferences.
- Failover If the active node becomes unavailable, AlloyDB automatically fails over the primary instance to its standby node, which becomes the new active node.
- New architecture Newly created AlloyDB instances with PostgreSQL 18 provide improved failover using a read replica on the standby node (hot standby node).

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- High availability By default, an AlloyDB cluster offers availability (HA) through its primary instance's redundant nodes, located in two different zones, with automatic failover.
- Adding read pool instances containing at least two nodes creates further load-balanced, multi-zonal, high-availability access points to your data.
- High availability: ensure service continuity through redundant nodes located in different zones, with automatic failover between them.
- Highly available : contains two nodes, an active node and a standby node, located in different zones for automatic failover.

### "Database performance snapshot report reference \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback Database performance snapshot report reference Stay organized with collections Save and categorize content based on your preferences.
- UltraFastCachePWrite I/O Latency of a write to the AlloyDB UltraFast Cache WalBatchWrite I/O Wait time for a minimal batch size to write WAL.
- Wait events in snapshot reports The following table describes wait events that are supported by AlloyDB performance snapshot reports.
- StorageAwaitMayWrite I/O Time spent waiting for AlloyDB storage to process logs and allow more writes.

