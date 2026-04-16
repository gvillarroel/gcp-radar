---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.948Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Cloud Storage dual-region asia1"
feature_slug: "cloud-storage-dual-region-asia1"
latest_feature_date: "2020-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/storage/docs/availability-durability"
  - "https://docs.cloud.google.com/storage/docs/storage-classes"
keywords:
  - "storage"
  - "dual"
  - "region"
  - "asia1"
  - "offers"
  - "the"
  - "tokyo"
  - "and"
---

# Cloud Storage dual-region asia1

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage offers the Tokyo and Osaka dual-region location asia1 for storing data across two regions.

## Extended Definition

Cloud Storage offers the Tokyo and Osaka dual-region location asia1 for storing data across two regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/storage/docs/availability-durability](https://docs.cloud.google.com/storage/docs/availability-durability)
- [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)

## Supporting Pages

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- For the storage.googleapis.com/dualregion google egress bandwidth and storage.googleapis.com/dualregion internet egress bandwidth metrics, there must be non-zero historical usage of the metric before you can request an increase.
- Monitoring alerts You can use Monitoring alerting policies to inform you when metrics such as storage.googleapis.com/google egress bandwidth , storage.googleapis.com/dualregion google egress bandwidth , and storage.googleapis.com/multiregion google egress bandwidth approach a quota limit.
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/google egress bandwidth to increase Google egress for your buckets located in regions.
- If the previous instructions don't work for you, or if you need bandwidth greater than 5 Tbps for egress from buckets in zones, regions, or dual-regions, contact your Technical Account Manager or Google representative.

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- The following options are available when creating a bucket in a predefined dual-region: Predefined dual-region name Region Name Region Description ASIA1 ASIA-NORTHEAST1 + ASIA-NORTHEAST2 Tokyo + Osaka EUR4 EUROPE-NORTH1 + EUROPE-WEST4 Finland + Netherlands EUR5 EUROPE-WEST1 + EUROPE-WEST2 Belgium + London EUR7 EUROPE-WEST2 + EUROPE-WEST3 London + Frankfurt EUR8 EUROPE-WEST3 + EUROPE-WEST6 Frankfurt + Zürich NAM4 US-CENTRAL1 + US-EAST1 Iowa + South Carolina Request routing for dual-region buckets When you access data in a dual-region bucket from a resource that's located in one of the regions of the dual-region, the request is routed to that same region to provide the best performance.
- Lowest storage price No replication charges No outbound data transfer charges when reading data inside the same region Highest storage price Replication charges apply on write No outbound data transfer charges when reading data within either region Higher storage price than regions, but lower than dual-regions Replication charges apply on write Outbound data transfer charges always apply when reading data Location recommendations Requirements Recommended bucket location Workload examples Ultra-low latency Ultra-high bandwidth and I/O High performance Zone 1 Artificial Intelligence (AI) and Machine Learning (ML) High-performance computing Data-intensive analytics Optimized latency and bandwidth Lowest data storage cost Cross-zone redundancy Region 2 Analytics Backup and archive Optimized latency and bandwidth Cross-region redundancy, with precise control of the locations where copies of data are stored Dual-region 3 Analytics Backup and archive Disaster recovery Cross-geography data access Cross-region redundancy Multi-region Content serving Zonal locations for buckets are only available through Rapid Bucket .
- If the regions you want to pair are not available as a dual-region, consider creating a separate bucket in each region and using Storage Transfer Service Event-driven transfers to keep the buckets in sync.

### "Data availability and durability \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/availability-durability](https://docs.cloud.google.com/storage/docs/availability-durability)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- To achieve redundancy between a region pairing not available as a dual-region, consider creating a separate bucket for each region and using Storage Transfer Service event-driven transfers or cross-bucket replication to keep the buckets in sync.
- The following sections cover how Cloud Storage redundantly stores data, the default replication behavior for dual-regions and multi-regions, and advanced features like turbo replication and cross-bucket replication.
- In the unlikely event of a region-wide outage, such as one caused by a natural disaster, dual-region and multi-region buckets remain available, with no need to change storage paths.
- Performance monitoring Cloud Storage monitors the oldest unreplicated objects in dual-region and multi-region buckets using default replication or turbo replication.

### Storage classes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Storage Class Name for APIs and CLIs Minimum storage duration Retrieval fees Typical monthly availability 1 Rapid storage 2 RAPID None None 99.95% in zones Standard storage STANDARD None None 99.99% in multi-regions and dual-regions 99.99% in regions Nearline storage NEARLINE 30 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions Coldline storage COLDLINE 90 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions Archive storage ARCHIVE 365 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions 1 See the class descriptions for the availability SLA for each storage class.
- Availability The availability of Standard storage data is: Location type Availability SLA 1 Typical monthly availability multi-region 99.95% 99.99% dual-region 99.95% 99.99% region 99.9% 99.99% 1 The availability SLA is the monthly uptime percentage backed by the Cloud Storage SLA .
- Availability The availability of Nearline storage data is: Location type Availability SLA 1 Typical monthly availability multi-region 99.9% 99.95% dual-region 99.9% 99.95% region 99.0% 99.9% 1 The availability SLA is the monthly uptime percentage backed by the Cloud Storage SLA .
- Availability The availability of Coldline storage data is: Location type Availability SLA 1 Typical monthly availability multi-region 99.9% 99.95% dual-region 99.9% 99.95% region 99.0% 99.9% 1 The availability SLA is the monthly uptime percentage backed by the Cloud Storage SLA .

