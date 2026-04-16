---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.978Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable tiered storage"
feature_slug: "bigtable-tiered-storage"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/overview"
  - "https://docs.cloud.google.com/bigtable/docs/autoscaling"
  - "https://docs.cloud.google.com/bigtable/docs/choosing-ssd-hdd"
keywords:
  - "optimized"
  - "reduce"
  - "costs"
  - "tiered"
  - "allows"
  - "storage"
  - "usage"
---

# Bigtable tiered storage

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable tiered storage allows optimized storage usage to reduce costs and retain data longer.

## Extended Definition

Bigtable tiered storage allows optimized storage usage to reduce costs and retain data longer.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/overview](https://docs.cloud.google.com/bigtable/docs/overview)
- [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- [https://docs.cloud.google.com/bigtable/docs/choosing-ssd-hdd](https://docs.cloud.google.com/bigtable/docs/choosing-ssd-hdd)

## Supporting Pages

### Bigtable overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/overview](https://docs.cloud.google.com/bigtable/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Compactions Bigtable periodically rewrites your tables to remove deleted entries, to reorganize your data so that reads and writes are more efficient, and to move data as part of tiered storage.
- Bigtable also excels as a storage engine for batch MapReduce operations, stream processing/analytics, and machine-learning applications.
- On average, it takes a week for a compaction to complete and execute tasks such as data deletion or moving data to tiered storage.
- Tiered storage lets you choose the storage tier that best suits your Bigtable data access needs.

### Autoscaling \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, on an SSD cluster, if you set a storage utilization target of 2.5 TB (50%) per node, and your infrequent access usage is high enough to push the storage usage with tiered storage over the limit, Bigtable adds nodes.
- 3 TB 60% 3 TB 0 TB 3 TB 1 SSD usage almost exceeds the SSD usage target, and tiered usage almost exceeds the tiered storage limit.
- 5 TB 100% 6 TB 0 TB 6 TB 2 SSD usage and infrequent access usage are within the tiered storage limit.
- 5 TB 100% 5 TB 27 TB 32 TB 1 Tiered storage usage exceeds the tiered storage limit.

### Choose between SSD and HDD storage \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/choosing-ssd-hdd](https://docs.cloud.google.com/bigtable/docs/choosing-ssd-hdd)
- Source ID: `site-docs-root-2`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table compares Bigtable storage types in the context of tiered storage: Instance and tier Node capacity Expected latency Operations Best for SSD instance, SSD storage tier 5 TB Write/read: single-digit ms Write, read, update, delete High write/read throughput and low latency workloads SSD instance, tiered storage enabled 32 TB (up to 5 TB SSD) Write: single-digit ms Read: low double-digit ms Write, read, update, delete Large datasets with infrequently accessed data HDD instance, HDD tier 16 TB Write: single-digit ms Read: low double-digit ms Write, read, update, delete Large datasets with latency-insensitive workloads For more information about the performance of Bigtable storage types, see Understand performance .
- In a cluster that uses HDD storage, it's possible to reach the maximum throughput before CPU usage reaches 100%, a situation you can monitor using the disk load metric.
- SSD storage supports a tiered storage option for infrequently accessed data .
- Bigtable instances that use SSD storage support tiered storage ( Preview ).

