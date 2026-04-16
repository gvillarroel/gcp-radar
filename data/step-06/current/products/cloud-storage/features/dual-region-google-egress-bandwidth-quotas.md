---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.909Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Dual-region Google Egress Bandwidth quotas"
feature_slug: "dual-region-google-egress-bandwidth-quotas"
latest_feature_date: "2024-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/access-monitoring"
  - "https://docs.cloud.google.com/storage/docs/storage-classes"
  - "https://docs.cloud.google.com/storage/docs/locations"
keywords:
  - "dual"
  - "region"
  - "egress"
  - "bandwidth"
  - "quotas"
  - "storage"
  - "provides"
  - "for"
---

# Dual-region Google Egress Bandwidth quotas

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage provides Google Egress Bandwidth quotas for each dual-region location.

## Extended Definition

Cloud Storage provides Google Egress Bandwidth quotas for each dual-region location.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring)
- [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)

## Supporting Pages

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monitoring alerts You can use Monitoring alerting policies to inform you when metrics such as storage.googleapis.com/google egress bandwidth , storage.googleapis.com/dualregion google egress bandwidth , and storage.googleapis.com/multiregion google egress bandwidth approach a quota limit.
- For the storage.googleapis.com/dualregion google egress bandwidth and storage.googleapis.com/dualregion internet egress bandwidth metrics, there must be non-zero historical usage of the metric before you can request an increase.
- Use storage.googleapis.com/dualregion internet egress bandwidth to increase Internet egress for your buckets located in dual-regions.
- Use storage.googleapis.com/dualregion google egress bandwidth to increase Google egress for your buckets located in dual-regions.

### Access monitoring data in Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- JSON API For information on programmatically retrieving time series information for non dual-region quotas, see the ListTimeSeries command , using the following values for filter : metric.type="serviceruntime.googleapis.com/quota/rate/net usage" resource.type="consumer quota" One of the following: metric.label.quota metric="storage.googleapis.com/google egress bandwidth" metric.label.quota metric="storage.googleapis.com/rapid zonal egress bandwidth" metric.label.quota metric="storage.googleapis.com/internet egress bandwidth" metric.label.quota metric="storage.googleapis.com/multiregion google egress bandwidth" metric.label.quota metric="storage.googleapis.com/multiregion internet egress bandwidth" For information on programmatically retrieving time series information for dual-region quotas, see the ListTimeSeries command , using the following values for filter : resource.type="storage.googleapis.com/Project" One of the following: metric.type="storage.googleapis.com/quota/dualregion google egress bandwidth/usage" metric.type="storage.googleapis.com/quota/dualregion internet egress bandwidth/usage" For information about bandwidth monitoring metrics and what data they represent, see Bandwidth monitoring metrics .
- Open Cloud Storage Quotas and systems limits Google Egress Bandwidth per second per region Rapid Zonal Egress Bandwidth per second per zone Dualregion Google Egress Bandwidth per second per region per dualregion location MultiRegion Google Egress Bandwidth per second per region Internet Egress Bandwidth per second per region Dualregion Internet Egress Bandwidth per second per region per dualregion location Multiregion Internet Egress Bandwidth per second per region Rapid Zonal Bytes per zone You can also view the Google egress bandwidth usage of buckets in your project that are located in regions on the Cloud Storage monitoring page .
- In the YAML response, look for the following: storage.googleapis.com/google egress bandwidth storage.googleapis.com/rapid zonal egress bandwidth storage.googleapis.com/dualregion google egress bandwidth storage.googleapis.com/multiregion google egress bandwidth storage.googleapis.com/internet egress bandwidth storage.googleapis.com/dualregion internet egress bandwidth storage.googleapis.com/multiregion internet egress bandwidth storage.googleapis.com/rapid zonal bytes For information about bandwidth monitoring metrics and what data they represent, see Bandwidth monitoring metrics .
- To monitor bandwidth or storage usage: Console You can view egress bandwidth usage for your project's buckets or storage usage for zonal buckets only by using the Quotas and system limits page with the appropriate metric.

### Storage classes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Storage Class Name for APIs and CLIs Minimum storage duration Retrieval fees Typical monthly availability 1 Rapid storage 2 RAPID None None 99.95% in zones Standard storage STANDARD None None 99.99% in multi-regions and dual-regions 99.99% in regions Nearline storage NEARLINE 30 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions Coldline storage COLDLINE 90 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions Archive storage ARCHIVE 365 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions 1 See the class descriptions for the availability SLA for each storage class.
- Multi-Regional storage : Equivalent to Standard storage, except Multi-Regional storage can only be used for objects stored in multi-regions or dual-regions .
- Availability The availability of Standard storage data is: Location type Availability SLA 1 Typical monthly availability multi-region 99.95% 99.99% dual-region 99.95% 99.99% region 99.9% 99.99% 1 The availability SLA is the monthly uptime percentage backed by the Cloud Storage SLA .
- Availability The availability of Nearline storage data is: Location type Availability SLA 1 Typical monthly availability multi-region 99.9% 99.95% dual-region 99.9% 99.95% region 99.0% 99.9% 1 The availability SLA is the monthly uptime percentage backed by the Cloud Storage SLA .

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Lowest storage price No replication charges No outbound data transfer charges when reading data inside the same region Highest storage price Replication charges apply on write No outbound data transfer charges when reading data within either region Higher storage price than regions, but lower than dual-regions Replication charges apply on write Outbound data transfer charges always apply when reading data Location recommendations Requirements Recommended bucket location Workload examples Ultra-low latency Ultra-high bandwidth and I/O High performance Zone 1 Artificial Intelligence (AI) and Machine Learning (ML) High-performance computing Data-intensive analytics Optimized latency and bandwidth Lowest data storage cost Cross-zone redundancy Region 2 Analytics Backup and archive Optimized latency and bandwidth Cross-region redundancy, with precise control of the locations where copies of data are stored Dual-region 3 Analytics Backup and archive Disaster recovery Cross-geography data access Cross-region redundancy Multi-region Content serving Zonal locations for buckets are only available through Rapid Bucket .
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- To avoid this, you might want to consider using a dual-region or backing up business-critical data to a second region using Storage Transfer Service for increased data protection.
- The following options are available when creating a bucket in a predefined dual-region: Predefined dual-region name Region Name Region Description ASIA1 ASIA-NORTHEAST1 + ASIA-NORTHEAST2 Tokyo + Osaka EUR4 EUROPE-NORTH1 + EUROPE-WEST4 Finland + Netherlands EUR5 EUROPE-WEST1 + EUROPE-WEST2 Belgium + London EUR7 EUROPE-WEST2 + EUROPE-WEST3 London + Frankfurt EUR8 EUROPE-WEST3 + EUROPE-WEST6 Frankfurt + Zürich NAM4 US-CENTRAL1 + US-EAST1 Iowa + South Carolina Request routing for dual-region buckets When you access data in a dual-region bucket from a resource that's located in one of the regions of the dual-region, the request is routed to that same region to provide the best performance.

