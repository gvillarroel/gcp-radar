---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.923Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Dual-region storage region support: Los Angeles and Salt Lake City"
feature_slug: "dual-region-storage-region-support-los-angeles-and-salt-lake-city"
latest_feature_date: "2023-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/availability-durability"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage"
keywords:
  - "dual"
  - "region"
  - "storage"
  - "los"
  - "angeles"
  - "and"
  - "salt"
  - "lake"
---

# Dual-region storage region support: Los Angeles and Salt Lake City

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Dual-region storage supports Los Angeles and Salt Lake City as available US regions.

## Extended Definition

Dual-region storage supports Los Angeles and Salt Lake City as available US regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/availability-durability](https://docs.cloud.google.com/storage/docs/availability-durability)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)

## Supporting Pages

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- The following regions are available when creating a configurable dual-region bucket: Location code Region Name Region Description ASIA ASIA-EAST1 Taiwan ASIA-SOUTHEAST1 Singapore AU AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne CA NORTHAMERICA-NORTHEAST1 Montréal NORTHAMERICA-NORTHEAST2 Toronto DE EUROPE-WEST3 Frankfurt EUROPE-WEST10 Berlin EU EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 1 Finland EUROPE-SOUTHWEST1 Madrid EUROPE-WEST1 Belgium EUROPE-WEST3 5 Frankfurt EUROPE-WEST4 1 Netherlands EUROPE-WEST8 4 Milan EUROPE-WEST9 Paris EUROPE-WEST10 5 Berlin EUROPE-WEST12 4 Turin IN ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi IT EUROPE-WEST8 Milan EUROPE-WEST12 Turin US US-CENTRAL1 2 Iowa US-EAST1 2 South Carolina US-EAST4 Northern Virginia US-EAST5 3 Columbus US-SOUTH1 Dallas US-WEST1 Oregon US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas 1 The EUROPE-NORTH1 and EUROPE-WEST4 dual-region pairing is only available as a predefined dual-region .
- The following regions are available: Geographic Area Region Name Region Description North America NORTHAMERICA-NORTHEAST1 1 Montréal Low CO 2 NORTHAMERICA-NORTHEAST2 Toronto Low CO 2 NORTHAMERICA-SOUTH1 1 Querétaro US-CENTRAL1 Iowa Low CO 2 US-EAST1 South Carolina US-EAST4 Northern Virginia US-EAST5 Columbus US-SOUTH1 Dallas Low CO 2 US-WEST1 Oregon Low CO 2 US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas South America SOUTHAMERICA-EAST1 São Paulo Low CO 2 SOUTHAMERICA-WEST1 Santiago Low CO 2 Europe EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 Finland Low CO 2 EUROPE-NORTH2 Stockholm Low CO 2 EUROPE-SOUTHWEST1 Madrid Low CO 2 EUROPE-WEST1 Belgium Low CO 2 EUROPE-WEST2 London Low CO 2 EUROPE-WEST3 Frankfurt EUROPE-WEST4 Netherlands Low CO 2 EUROPE-WEST6 Zürich Low CO 2 EUROPE-WEST8 Milan EUROPE-WEST9 Paris Low CO 2 EUROPE-WEST10 Berlin EUROPE-WEST12 Turin Asia ASIA-EAST1 Taiwan ASIA-EAST2 Hong Kong ASIA-NORTHEAST1 Tokyo ASIA-NORTHEAST2 1 Osaka ASIA-NORTHEAST3 Seoul ASIA-SOUTHEAST1 Singapore India ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi Indonesia ASIA-SOUTHEAST2 Jakarta Thailand ASIA-SOUTHEAST3 Bangkok Middle East ME-CENTRAL1 Doha ME-CENTRAL2 Dammam, Saudi Arabia ME-WEST1 Tel Aviv Australia AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne Africa AFRICA-SOUTH1 Johannesburg 1 Montréal, Osaka, and Querétaro each have three zones housed in one or two physical data centers.
- Lowest storage price No replication charges No outbound data transfer charges when reading data inside the same region Highest storage price Replication charges apply on write No outbound data transfer charges when reading data within either region Higher storage price than regions, but lower than dual-regions Replication charges apply on write Outbound data transfer charges always apply when reading data Location recommendations Requirements Recommended bucket location Workload examples Ultra-low latency Ultra-high bandwidth and I/O High performance Zone 1 Artificial Intelligence (AI) and Machine Learning (ML) High-performance computing Data-intensive analytics Optimized latency and bandwidth Lowest data storage cost Cross-zone redundancy Region 2 Analytics Backup and archive Optimized latency and bandwidth Cross-region redundancy, with precise control of the locations where copies of data are stored Dual-region 3 Analytics Backup and archive Disaster recovery Cross-geography data access Cross-region redundancy Multi-region Content serving Zonal locations for buckets are only available through Rapid Bucket .
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring alerts You can use Monitoring alerting policies to inform you when metrics such as storage.googleapis.com/google egress bandwidth , storage.googleapis.com/dualregion google egress bandwidth , and storage.googleapis.com/multiregion google egress bandwidth approach a quota limit.
- For the storage.googleapis.com/dualregion google egress bandwidth and storage.googleapis.com/dualregion internet egress bandwidth metrics, there must be non-zero historical usage of the metric before you can request an increase.
- Use storage.googleapis.com/dualregion internet egress bandwidth to increase Internet egress for your buckets located in dual-regions.
- Use storage.googleapis.com/dualregion google egress bandwidth to increase Google egress for your buckets located in dual-regions.

### "Data availability and durability \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/availability-durability](https://docs.cloud.google.com/storage/docs/availability-durability)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Redundancy across regions While traditional storage models often rely on an active-passive approach with "primary" and "secondary" geographic locations, Cloud Storage dual-regions and multi-regions provide an active-active architecture based on a single bucket with redundancy across regions.
- To achieve redundancy between a region pairing not available as a dual-region, consider creating a separate bucket for each region and using Storage Transfer Service event-driven transfers or cross-bucket replication to keep the buckets in sync.
- Turbo replication Turbo replication provides faster redundancy across regions for data in your dual-region buckets, which reduces the risk of data loss exposure and helps support uninterrupted service following a regional outage.
- The following sections cover how Cloud Storage redundantly stores data, the default replication behavior for dual-regions and multi-regions, and advanced features like turbo replication and cross-bucket replication.

### "Package com.google.cloud.storage (2.64.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- Source ID: `site-java-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- This interface allows writing bytes to an Appendable Upload, and provides methods to close this channel -- optionally finalizing the upload. com. google. cloud. storage.
- See Also: Google Cloud Storage error codes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Max Length Range Spec Function Produce a new RangeSpec relative to the provided offset and prev , where the RangeSpec will have a maxLength set to the lesser of prev.maxLength and this.maxLength . com. google. cloud. storage.
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.cloud.storage (2.64.0) Stay organized with collections Save and categorize content based on your preferences.

