---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.608Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Omni Arm architecture support"
feature_slug: "alloydb-omni-arm-architecture-support"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
keywords:
  - "ARM architecture"
  - "AArch64 support"
  - "ARM64 support"
  - "AArch64"
  - "Arm64"
  - "Arm-based support"
  - "AlloyDB Omni Arm"
  - "ARM"
---

# AlloyDB Omni Arm architecture support

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB Omni now supports Arm-based architectures.

## Extended Definition

AlloyDB Omni now supports Arm-based architectures.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- This version includes the following: Compatibility with PostgreSQL server version 15 A command-line interface for easier installation and maintenance of AlloyDB Omni Integration with Vertex AI Guides for data protection using Barman and pglogical Various bug fixes and query performance improvements Feature A separate Technology Preview edition of AlloyDB Omni is available.
- March 16, 2026 Feature AlloyDB now supports the 2 vCPU C4A machine type ( c4a-highmem-2-lssd ), which is powered by Google Axion, Google's custom Arm-based processor.
- AlloyDB continuously replicates transactions to the standby node to keep caches warm and to ensure that the node is ready to take over quickly during a failover.
- September 11, 2025 Feature AlloyDB supports C4A Arm VMs on Google's custom-built Axion processors.

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use materialized views to make incremental changes to the views instead of recomputing the contents from scratch. pg partman Enables you to create and manage time-based and serial-based table partition sets. pg prewarm Provides a convenient way to load relation data into either the operating system buffer cache or the PostgreSQL buffer cache.
- You can't enable or configure automatic prewarming features, because you can't configure the shared preload libraries or pg prewarm.autoprewarm parameters in AlloyDB. pg proctab Enables you to use pg top with AlloyDB, and generate reports from the operating system process table. pg repack Lets you remove bloat from tables and indexes.
- This extension is supported for manual prewarming by calling its functions directly.

