---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.956Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Dual-region storage"
feature_slug: "dual-region-storage"
latest_feature_date: "2019-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/access-monitoring"
  - "https://docs.cloud.google.com/storage/docs/availability-durability"
  - "https://docs.cloud.google.com/storage/docs/locations"
keywords:
  - "dual"
  - "region"
  - "storage"
  - "keeps"
  - "copies"
  - "of"
  - "in"
  - "two"
---

# Dual-region storage

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Dual-region storage keeps copies of data in two specific locations within a dual-region; Dual-region storage keeps copies of data in two specific locations within a dual-region.

## Extended Definition

Dual-region storage keeps copies of data in two specific locations within a dual-region; Dual-region storage keeps copies of data in two specific locations within a dual-region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring)
- [https://docs.cloud.google.com/storage/docs/availability-durability](https://docs.cloud.google.com/storage/docs/availability-durability)
- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)

## Supporting Pages

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the storage.googleapis.com/dualregion google egress bandwidth and storage.googleapis.com/dualregion internet egress bandwidth metrics, there must be non-zero historical usage of the metric before you can request an increase.
- Monitoring alerts You can use Monitoring alerting policies to inform you when metrics such as storage.googleapis.com/google egress bandwidth , storage.googleapis.com/dualregion google egress bandwidth , and storage.googleapis.com/multiregion google egress bandwidth approach a quota limit.
- Use storage.googleapis.com/dualregion internet egress bandwidth to increase Internet egress for your buckets located in dual-regions.
- Use storage.googleapis.com/dualregion google egress bandwidth to increase Google egress for your buckets located in dual-regions.

### Access monitoring data in Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- JSON API For information on programmatically retrieving time series information for non dual-region quotas, see the ListTimeSeries command , using the following values for filter : metric.type="serviceruntime.googleapis.com/quota/rate/net usage" resource.type="consumer quota" One of the following: metric.label.quota metric="storage.googleapis.com/google egress bandwidth" metric.label.quota metric="storage.googleapis.com/rapid zonal egress bandwidth" metric.label.quota metric="storage.googleapis.com/internet egress bandwidth" metric.label.quota metric="storage.googleapis.com/multiregion google egress bandwidth" metric.label.quota metric="storage.googleapis.com/multiregion internet egress bandwidth" For information on programmatically retrieving time series information for dual-region quotas, see the ListTimeSeries command , using the following values for filter : resource.type="storage.googleapis.com/Project" One of the following: metric.type="storage.googleapis.com/quota/dualregion google egress bandwidth/usage" metric.type="storage.googleapis.com/quota/dualregion internet egress bandwidth/usage" For information about bandwidth monitoring metrics and what data they represent, see Bandwidth monitoring metrics .
- Open Cloud Storage Quotas and systems limits Google Egress Bandwidth per second per region Rapid Zonal Egress Bandwidth per second per zone Dualregion Google Egress Bandwidth per second per region per dualregion location MultiRegion Google Egress Bandwidth per second per region Internet Egress Bandwidth per second per region Dualregion Internet Egress Bandwidth per second per region per dualregion location Multiregion Internet Egress Bandwidth per second per region Rapid Zonal Bytes per zone You can also view the Google egress bandwidth usage of buckets in your project that are located in regions on the Cloud Storage monitoring page .
- In the YAML response, look for the following: storage.googleapis.com/google egress bandwidth storage.googleapis.com/rapid zonal egress bandwidth storage.googleapis.com/dualregion google egress bandwidth storage.googleapis.com/multiregion google egress bandwidth storage.googleapis.com/internet egress bandwidth storage.googleapis.com/dualregion internet egress bandwidth storage.googleapis.com/multiregion internet egress bandwidth storage.googleapis.com/rapid zonal bytes For information about bandwidth monitoring metrics and what data they represent, see Bandwidth monitoring metrics .
- If the bucket is located in a dual-region , the usage must be by resources located in either of the regions that makes up the dual-region.

### "Data availability and durability \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/availability-durability](https://docs.cloud.google.com/storage/docs/availability-durability)
- Source ID: `site-iam-reference`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Redundancy across regions While traditional storage models often rely on an active-passive approach with "primary" and "secondary" geographic locations, Cloud Storage dual-regions and multi-regions provide an active-active architecture based on a single bucket with redundancy across regions.
- Cloud Storage also offers a cross-bucket replication capability that can be used to replicate data between independent buckets to meet additional data replication needs that aren't met by dual-region or multi-region locations.
- When enabled, turbo replication is designed to replicate 100% of newly written objects to the two regions that constitute a dual-region within the recovery point objective of 15 minutes , regardless of object size.
- In the unlikely event of a region-wide outage, such as one caused by a natural disaster, dual-region and multi-region buckets remain available, with no need to change storage paths.

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Lowest storage price No replication charges No outbound data transfer charges when reading data inside the same region Highest storage price Replication charges apply on write No outbound data transfer charges when reading data within either region Higher storage price than regions, but lower than dual-regions Replication charges apply on write Outbound data transfer charges always apply when reading data Location recommendations Requirements Recommended bucket location Workload examples Ultra-low latency Ultra-high bandwidth and I/O High performance Zone 1 Artificial Intelligence (AI) and Machine Learning (ML) High-performance computing Data-intensive analytics Optimized latency and bandwidth Lowest data storage cost Cross-zone redundancy Region 2 Analytics Backup and archive Optimized latency and bandwidth Cross-region redundancy, with precise control of the locations where copies of data are stored Dual-region 3 Analytics Backup and archive Disaster recovery Cross-geography data access Cross-region redundancy Multi-region Content serving Zonal locations for buckets are only available through Rapid Bucket .
- The following types of dual-regions are supported in Cloud Storage: A predefined dual-region is identified by a unique location code and represents two specific regions.
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- Note: Unlike buckets in other locations, which bill storage usage against the SKUs associated with their location code, buckets in configurable dual-regions bill storage usage against SKUs in both of their underlying regions.

