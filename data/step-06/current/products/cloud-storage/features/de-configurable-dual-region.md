---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.888Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "DE configurable dual-region"
feature_slug: "de-configurable-dual-region"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/storage-classes"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
keywords:
  - "de"
  - "configurable"
  - "dual"
  - "region"
  - "storage"
  - "offers"
  - "the"
  - "for"
---

# DE configurable dual-region

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage offers the DE configurable dual-region for buckets spanning europe-west3 and europe-west10.

## Extended Definition

Cloud Storage offers the DE configurable dual-region for buckets spanning europe-west3 and europe-west10.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)

## Supporting Pages

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- Lowest storage price No replication charges No outbound data transfer charges when reading data inside the same region Highest storage price Replication charges apply on write No outbound data transfer charges when reading data within either region Higher storage price than regions, but lower than dual-regions Replication charges apply on write Outbound data transfer charges always apply when reading data Location recommendations Requirements Recommended bucket location Workload examples Ultra-low latency Ultra-high bandwidth and I/O High performance Zone 1 Artificial Intelligence (AI) and Machine Learning (ML) High-performance computing Data-intensive analytics Optimized latency and bandwidth Lowest data storage cost Cross-zone redundancy Region 2 Analytics Backup and archive Optimized latency and bandwidth Cross-region redundancy, with precise control of the locations where copies of data are stored Dual-region 3 Analytics Backup and archive Disaster recovery Cross-geography data access Cross-region redundancy Multi-region Content serving Zonal locations for buckets are only available through Rapid Bucket .
- Note: Unlike buckets in other locations, which bill storage usage against the SKUs associated with their location code, buckets in configurable dual-regions bill storage usage against SKUs in both of their underlying regions.
- The following regions are available when creating a configurable dual-region bucket: Location code Region Name Region Description ASIA ASIA-EAST1 Taiwan ASIA-SOUTHEAST1 Singapore AU AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne CA NORTHAMERICA-NORTHEAST1 Montréal NORTHAMERICA-NORTHEAST2 Toronto DE EUROPE-WEST3 Frankfurt EUROPE-WEST10 Berlin EU EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 1 Finland EUROPE-SOUTHWEST1 Madrid EUROPE-WEST1 Belgium EUROPE-WEST3 5 Frankfurt EUROPE-WEST4 1 Netherlands EUROPE-WEST8 4 Milan EUROPE-WEST9 Paris EUROPE-WEST10 5 Berlin EUROPE-WEST12 4 Turin IN ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi IT EUROPE-WEST8 Milan EUROPE-WEST12 Turin US US-CENTRAL1 2 Iowa US-EAST1 2 South Carolina US-EAST4 Northern Virginia US-EAST5 3 Columbus US-SOUTH1 Dallas US-WEST1 Oregon US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas 1 The EUROPE-NORTH1 and EUROPE-WEST4 dual-region pairing is only available as a predefined dual-region .

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- For the storage.googleapis.com/dualregion google egress bandwidth and storage.googleapis.com/dualregion internet egress bandwidth metrics, there must be non-zero historical usage of the metric before you can request an increase.
- Monitoring alerts You can use Monitoring alerting policies to inform you when metrics such as storage.googleapis.com/google egress bandwidth , storage.googleapis.com/dualregion google egress bandwidth , and storage.googleapis.com/multiregion google egress bandwidth approach a quota limit.
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/google egress bandwidth to increase Google egress for your buckets located in regions.
- If the previous instructions don't work for you, or if you need bandwidth greater than 5 Tbps for egress from buckets in zones, regions, or dual-regions, contact your Technical Account Manager or Google representative.

### Storage classes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Storage Class Name for APIs and CLIs Minimum storage duration Retrieval fees Typical monthly availability 1 Rapid storage 2 RAPID None None 99.95% in zones Standard storage STANDARD None None 99.99% in multi-regions and dual-regions 99.99% in regions Nearline storage NEARLINE 30 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions Coldline storage COLDLINE 90 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions Archive storage ARCHIVE 365 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions 1 See the class descriptions for the availability SLA for each storage class.
- When used in a multi-region, Standard storage is appropriate for storing data that is accessed around the world, such as serving website content, streaming videos, executing interactive workloads, or serving data supporting mobile and gaming applications.
- Availability The availability of Standard storage data is: Location type Availability SLA 1 Typical monthly availability multi-region 99.95% 99.99% dual-region 99.95% 99.99% region 99.9% 99.99% 1 The availability SLA is the monthly uptime percentage backed by the Cloud Storage SLA .
- Availability The availability of Nearline storage data is: Location type Availability SLA 1 Typical monthly availability multi-region 99.9% 99.95% dual-region 99.9% 99.95% region 99.0% 99.9% 1 The availability SLA is the monthly uptime percentage backed by the Cloud Storage SLA .

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Create new storage bucket in the US multi-region with coldline storage resource "random id" "bucket prefix" { byte length = 8 } resource "google storage bucket" "static" { name = "${random id.bucket prefix.hex}-new-bucket" location = "US" storage class = "COLDLINE" uniform bucket level access = true } REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . from google.cloud import storage def create bucket class location ( bucket name ): """ Create a new bucket in the US region with the coldline storage class """ bucket name = "your-new-bucket-name" storage client = storage .
- Note: When creating a configurable dual-region , you must set the <LocationConstraint> element to be the location code associated with the underlying regions, and you must also include a <CustomPlacementConfig> element.
- Note: When creating a configurable dual-region , you must set the --location flag to be the location code associated with the underlying regions, and you must use the --placement flag with a valid pair of regions.

