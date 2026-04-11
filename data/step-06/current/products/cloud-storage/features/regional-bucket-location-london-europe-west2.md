---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.872Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Regional bucket location: London (europe-west2)"
feature_slug: "regional-bucket-location-london-europe-west2"
latest_feature_date: "2017-06-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
keywords:
  - "regional"
  - "bucket"
  - "location"
  - "london"
  - "europe"
  - "west2"
  - "storage"
  - "added"
---

# Regional bucket location: London (europe-west2)

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Cloud Storage added the London region as a location for storing data.

## Extended Definition

Cloud Storage added the London region as a location for storing data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)

## Supporting Pages

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Multi-regions Multi-Region Name Multi-Region Description ASIA Data centers in Asia, excluding Hong Kong and Indonesia EU Data centers within member states of the European Union US Data centers in the United States Object data added to a bucket in the EU multi-region is not stored in the EUROPE-WEST2 (London) or EUROPE-WEST6 (Zürich) regions.
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- The following regions are available when creating a configurable dual-region bucket: Location code Region Name Region Description ASIA ASIA-EAST1 Taiwan ASIA-SOUTHEAST1 Singapore AU AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne CA NORTHAMERICA-NORTHEAST1 Montréal NORTHAMERICA-NORTHEAST2 Toronto DE EUROPE-WEST3 Frankfurt EUROPE-WEST10 Berlin EU EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 1 Finland EUROPE-SOUTHWEST1 Madrid EUROPE-WEST1 Belgium EUROPE-WEST3 5 Frankfurt EUROPE-WEST4 1 Netherlands EUROPE-WEST8 4 Milan EUROPE-WEST9 Paris EUROPE-WEST10 5 Berlin EUROPE-WEST12 4 Turin IN ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi IT EUROPE-WEST8 Milan EUROPE-WEST12 Turin US US-CENTRAL1 2 Iowa US-EAST1 2 South Carolina US-EAST4 Northern Virginia US-EAST5 3 Columbus US-SOUTH1 Dallas US-WEST1 Oregon US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas 1 The EUROPE-NORTH1 and EUROPE-WEST4 dual-region pairing is only available as a predefined dual-region .
- The following options are available when creating a bucket in a predefined dual-region: Predefined dual-region name Region Name Region Description ASIA1 ASIA-NORTHEAST1 + ASIA-NORTHEAST2 Tokyo + Osaka EUR4 EUROPE-NORTH1 + EUROPE-WEST4 Finland + Netherlands EUR5 EUROPE-WEST1 + EUROPE-WEST2 Belgium + London EUR7 EUROPE-WEST2 + EUROPE-WEST3 London + Frankfurt EUR8 EUROPE-WEST3 + EUROPE-WEST6 Frankfurt + Zürich NAM4 US-CENTRAL1 + US-EAST1 Iowa + South Carolina Request routing for dual-region buckets When you access data in a dual-region bucket from a resource that's located in one of the regions of the dual-region, the request is routed to that same region to provide the best performance.

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Java Changes for google-cloud-storage 2.40.1 (2024-06-26) Bug Fixes Add a workaround to make sure grpc clients' hosts always match their universe domain ( #2588 ) ( 87bf737 ) Include x-goog-user-project on resumable upload puts for grpc transport ( #2586 ) ( 6f2f504 ) Update grpc bidi resumable uploads to validate ack'd object size ( #2570 ) ( 5c9cecf ) Update grpc finalize on close resumable uploads to validate ack'd object size ( #2572 ) ( 55a6d15 ) Update grpc single-shot uploads to validate ack'd object size ( #2567 ) ( 65c8808 ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20240524-2.0.0 ( #2565 ) ( d193243 ) Update dependency com.google.apis:google-api-services-storage to v1-rev20240621-2.0.0 ( #2596 ) ( 73b8753 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.32.0 ( #2597 ) ( 25940a4 ) Documentation Add Hierarchical Namespace Bucket and Folders samples ( #2583 ) ( 3030081 ), closes #2569 Remove allowlist note from Folders RPCs ( #2593 ) ( 82161de ) Update DeleteObject Sample to be clearer on object versioning behavior ( #2595 ) ( 79b7cf0 ) June 28, 2024 Feature You can now specify the Frankfurt, Germany ( europe-west3 ) and Paris, France ( europe-west9 ) regions when using regional endpoints .
- Node.js Changes for @google-cloud/storage 7.11.2 (2024-06-07) Bug Fixes Support uint8array in file.save ( #2480 ) ( 1477fe1 ) Java Changes for google-cloud-storage 2.40.0 (2024-06-06) Features Promote google-cloud-storage-control to GA ( #2575 ) ( 129f188 ) Bug Fixes Reduce Java 21 Virtual Thread Pinning in IO operations ( #2553 ) ( 498fd0b ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.31.0 ( #2571 ) ( 67ce3d6 ) Update dependency net.jqwik:jqwik to v1.8.5 ( #2563 ) ( 88f7d86 ) Documentation Managed Folders samples ( #2562 ) ( 5ffc1f2 ) Update javadoc for createFrom ( #2522 ) ( dc31e95 ) June 06, 2024 Feature Cloud Storage now offers a new pre-defined dual region, EUROPE-WEST2 (London) and EUROPE-WEST1 (Belgium).
- Go Changes for storage/internal/apiv2 1.43.0 (2024-07-03) Features storage/transfermanager: Add DownloadDirectory ( #10430 ) ( 0d0e5dd ) storage/transfermanager: Automatically shard downloads ( #10379 ) ( 05816f9 ) Bug Fixes storage/transfermanager: WaitAndClose waits for Callbacks to finish ( #10504 ) ( 0e81002 ), refs #10502 storage: Allow empty soft delete on Create ( #10394 ) ( d8bd2c1 ), refs #10380 storage: Bump google.golang.org/api@v0.187.0 ( 8fa9e39 ) storage: Retry broken pipe error ( #10374 ) ( 2f4daa1 ), refs #9178 Documentation storage/control: Remove allowlist note from Folders RPCs ( d6c543c ) Feature You can now specify London ( europe-west2 ) and Frankfurt ( europe-west3 ) as a predefined dual-region pairing.
- Features Add Storage.BlobListOption#includeTrailingDelimiter ( #3038 ) ( 0b7a0df ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 74c46dd ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250416-2.0.0 ( #3063 ) ( d496d5b ) Update dependency com.google.apis:google-api-services-storage to v1-rev20250420-2.0.0 ( #3070 ) ( 1ef50f2 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #3061 ) ( cb43a6c ) Update googleapis/sdk-platform-java action to v2.56.2 ( #3055 ) ( 7025ad7 ) Java 2.52.1 (2025-05-01) Bug Fixes Fix grpc ReadObject memory leak introduced in 2.51.0 ( #3080 ) ( 7057629 ) Go 1.53.0 (2025-05-02) Features storage/control: Add Anywhere cache control APIs ( 83ae06c ) Bug Fixes storage: Fix append edge cases ( #12074 ) ( 0eee1f9 ) storage: Fix retries for redirection errors. ( #12093 ) ( 3e177e7 ) storage: Handle gRPC deadlines in tests. ( #12092 ) ( 30b7cd2 ) storage: Update offset on resumable upload retry ( #12086 ) ( 6ce8fe5 ) storage: Validate Bidi option for MRD ( #12033 ) ( d9018cf ) Documentation storage/control: Added comments for Anywhere cache messages ( 83ae06c ) April 28, 2025 Libraries Go 1.52.0 (2025-04-22) Features storage/control: Add Anywhere cache control APIs ( #11807 ) ( 12bfa98 ) storage: Add CurrentState function to determine state of stream in MRD ( #11688 ) ( 14e8e13 ) storage: Add OwnerEntity to bucketAttrs ( #11857 ) ( 4cd4a0c ) storage: Takeover appendable object ( #11977 ) ( 513b937 ) storage: Unfinalized appendable objects. ( #11647 ) ( 52c0218 ) Bug Fixes storage: Fix Attrs for append takeover ( #11989 ) ( 6db35b1 ) storage: Fix panic when Flush called early ( #11934 ) ( 7d0b8a7 ) storage: Fix unfinalized write size ( #12016 ) ( 6217f8f ) storage: Force first message on next sendBuffer when nothing sent on current ( #11871 ) ( a1a2292 ) storage: Populate Writer.Attrs after Flush() ( #12021 ) ( 8e56f74 ) storage: Remove check for FinalizeOnClose ( #11992 ) ( 2664b8c ) storage: Wrap read response parsing errors ( #11951 ) ( d2e6583 ) Java 2.51.0 (2025-04-23) [!IMPORTANT] This release has a direct memory leak when using a StorageOptions.grpc() instance and performing downloads.

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, if the bucket's resource has not been loaded from the server, or if the bucket is not a dual-regions bucket. default event based hold Scalar property getter. default kms key name Retrieve / set default KMS encryption key for objects in the bucket.
- E.g.: >> policies = bucket.cors >> policies.append({'origin': '/foo', ...}) >> policies[1]['maxAgeSeconds'] = 3600 >> del policies[0] >> bucket.cors = policies >> bucket.update() Returns Type Description list of dictionaries A sequence of mappings describing each CORS policy. data locations Retrieve the list of regional locations for custom dual-region buckets.
- Returns Type Description str or NoneType If set, one of NEARLINE STORAGE CLASS , COLDLINE STORAGE CLASS , ARCHIVE STORAGE CLASS , STANDARD STORAGE CLASS , MULTI REGIONAL LEGACY STORAGE CLASS , REGIONAL LEGACY STORAGE CLASS , or DURABLE REDUCED AVAILABILITY LEGACY STORAGE CLASS , else None . time created Retrieve the timestamp at which the bucket was created.
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, or if the bucket's resource has not been loaded from the server. location type Retrieve the location type for the bucket.

