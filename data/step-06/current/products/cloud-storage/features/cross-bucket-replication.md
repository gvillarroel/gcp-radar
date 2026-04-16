---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.886Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Cross-bucket replication"
feature_slug: "cross-bucket-replication"
latest_feature_date: "2025-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/availability-durability"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
  - "https://docs.cloud.google.com/storage/docs/locations"
keywords:
  - "cross"
  - "bucket"
  - "replication"
  - "asynchronously"
  - "copies"
  - "new"
  - "and"
  - "updated"
---

# Cross-bucket replication

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cross-bucket replication asynchronously copies new and updated objects from a source bucket to a destination bucket; Cross-bucket replication asynchronously copies new and updated objects from a source bucket to a destination bucket.

## Extended Definition

Cross-bucket replication asynchronously copies new and updated objects from a source bucket to a destination bucket; Cross-bucket replication asynchronously copies new and updated objects from a source bucket to a destination bucket.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/availability-durability](https://docs.cloud.google.com/storage/docs/availability-durability)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)

## Supporting Pages

### "Data availability and durability \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/availability-durability](https://docs.cloud.google.com/storage/docs/availability-durability)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cross-bucket replication copies new and updated objects asynchronously from a source bucket to a destination bucket.
- You can enable cross-bucket replication on new buckets you create and on existing buckets.
- To achieve redundancy between a region pairing not available as a dual-region, consider creating a separate bucket for each region and using Storage Transfer Service event-driven transfers or cross-bucket replication to keep the buckets in sync.
- Cross-bucket replication differs from default replication and turbo replication in that your data exists in two independent buckets, each with their own configurations such as storage location, encryption, access, and storage class.

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To set up cross-bucket replication , select Add cross-bucket replication via Storage Transfer Service and follow the steps: Set up cross-bucket replication In the Bucket menu, select a bucket.
- Refer to Before you begin in the cross-bucket replication user guide for information on the roles and permissions required.
- If you want to set up cross-bucket replication as part of creating your bucket, you need additional roles and permissions.
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The name of a storage class // See the StorageClass documentation for other valid storage classes: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/storage/StorageClass.html // const storageClass = 'coldline'; // The name of a location // See this documentation for other valid locations: // http://g.co/cloud/storage/docs/locations#location-mr // const location = 'ASIA'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client // The bucket in the sample below will be created in the project associated with this client. // For more information, please see https://cloud.google.com/docs/authentication/production or https://googleapis.dev/nodejs/storage/latest/Storage.html const storage = new Storage (); async function createBucketWithStorageClassAndLocation () { // For default values see: https://cloud.google.com/storage/docs/locations and // https://cloud.google.com/storage/docs/storage-classes const [ bucket ] = await storage . createBucket ( bucketName , { location , [ storageClass ] : true , }); console . log ( ${ bucket . name } created with ${ storageClass } class in ${ location } ); } createBucketWithStorageClassAndLocation (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- To update the bucket's IP filter, create and assign a new IPFilter object to this property and then call xref patch. .. code-block:: python from google.cloud.storage.ip filter import ( IPFilter, PublicNetworkSource, ) ip filter = IPFilter() ip filter.mode = "Enabled" ip filter.public network source = PublicNetworkSource( allowed ip cidr ranges=["203.0.113.5/32"] ) bucket.ip filter = ip filter bucket.patch() :setter: Set the IP Filter configuration for this bucket. :getter: Gets the IP Filter configuration for this bucket.
- For such buckets, iterate over the blobs returned by list blobs and call make public for each blob. move blob move blob ( blob , new name , client = None , if generation match = None , if generation not match = None , if metageneration match = None , if metageneration not match = None , if source generation match = None , if source generation not match = None , if source metageneration match = None , if source metageneration not match = None , timeout = 60 , retry = google . cloud . storage . retry .
- See https://cloud.google.com/storage/docs/lifecycle and https://cloud.google.com/storage/docs/json api/v1/buckets Note: The getter for this property returns a generator which yields copies of the bucket's lifecycle rules mappings.
- See http://www.w3.org/TR/cors/ and https://cloud.google.com/storage/docs/json api/v1/buckets Note: The getter for this property returns a list which contains copies of the bucket's CORS policy mappings.

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Lowest storage price No replication charges No outbound data transfer charges when reading data inside the same region Highest storage price Replication charges apply on write No outbound data transfer charges when reading data within either region Higher storage price than regions, but lower than dual-regions Replication charges apply on write Outbound data transfer charges always apply when reading data Location recommendations Requirements Recommended bucket location Workload examples Ultra-low latency Ultra-high bandwidth and I/O High performance Zone 1 Artificial Intelligence (AI) and Machine Learning (ML) High-performance computing Data-intensive analytics Optimized latency and bandwidth Lowest data storage cost Cross-zone redundancy Region 2 Analytics Backup and archive Optimized latency and bandwidth Cross-region redundancy, with precise control of the locations where copies of data are stored Dual-region 3 Analytics Backup and archive Disaster recovery Cross-geography data access Cross-region redundancy Multi-region Content serving Zonal locations for buckets are only available through Rapid Bucket .
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- The following regions are available when creating a configurable dual-region bucket: Location code Region Name Region Description ASIA ASIA-EAST1 Taiwan ASIA-SOUTHEAST1 Singapore AU AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne CA NORTHAMERICA-NORTHEAST1 Montréal NORTHAMERICA-NORTHEAST2 Toronto DE EUROPE-WEST3 Frankfurt EUROPE-WEST10 Berlin EU EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 1 Finland EUROPE-SOUTHWEST1 Madrid EUROPE-WEST1 Belgium EUROPE-WEST3 5 Frankfurt EUROPE-WEST4 1 Netherlands EUROPE-WEST8 4 Milan EUROPE-WEST9 Paris EUROPE-WEST10 5 Berlin EUROPE-WEST12 4 Turin IN ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi IT EUROPE-WEST8 Milan EUROPE-WEST12 Turin US US-CENTRAL1 2 Iowa US-EAST1 2 South Carolina US-EAST4 Northern Virginia US-EAST5 3 Columbus US-SOUTH1 Dallas US-WEST1 Oregon US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas 1 The EUROPE-NORTH1 and EUROPE-WEST4 dual-region pairing is only available as a predefined dual-region .
- The following options are available when creating a bucket in a predefined dual-region: Predefined dual-region name Region Name Region Description ASIA1 ASIA-NORTHEAST1 + ASIA-NORTHEAST2 Tokyo + Osaka EUR4 EUROPE-NORTH1 + EUROPE-WEST4 Finland + Netherlands EUR5 EUROPE-WEST1 + EUROPE-WEST2 Belgium + London EUR7 EUROPE-WEST2 + EUROPE-WEST3 London + Frankfurt EUR8 EUROPE-WEST3 + EUROPE-WEST6 Frankfurt + Zürich NAM4 US-CENTRAL1 + US-EAST1 Iowa + South Carolina Request routing for dual-region buckets When you access data in a dual-region bucket from a resource that's located in one of the regions of the dual-region, the request is routed to that same region to provide the best performance.

