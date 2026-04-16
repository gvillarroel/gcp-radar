---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.851Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Omni Arm architecture support"
feature_slug: "alloydb-omni-arm-architecture-support"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.QuantityBasedRetention"
  - "https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.TimeBasedRetention"
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
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
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni now supports Arm-based architectures.

## Extended Definition

AlloyDB Omni now supports Arm-based architectures.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.QuantityBasedRetention](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.QuantityBasedRetention)
- [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.TimeBasedRetention](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.TimeBasedRetention)
- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)

## Supporting Pages

### "Class QuantityBasedRetention (0.7.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.QuantityBasedRetention](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.QuantityBasedRetention)
- Source ID: `site-python-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Class TimeBasedRetention (0.7.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.TimeBasedRetention](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.TimeBasedRetention)
- Source ID: `site-python-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 48
- Re-rank relevance: N/A

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- You can use materialized views to make incremental changes to the views instead of recomputing the contents from scratch. pg partman Enables you to create and manage time-based and serial-based table partition sets. pg prewarm Provides a convenient way to load relation data into either the operating system buffer cache or the PostgreSQL buffer cache.
- You can't enable or configure automatic prewarming features, because you can't configure the shared preload libraries or pg prewarm.autoprewarm parameters in AlloyDB. pg proctab Enables you to use pg top with AlloyDB, and generate reports from the operating system process table. pg repack Lets you remove bloat from tables and indexes.
- This extension is supported for manual prewarming by calling its functions directly.

