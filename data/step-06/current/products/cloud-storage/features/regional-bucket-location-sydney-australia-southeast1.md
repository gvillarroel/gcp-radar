---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.869Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Regional bucket location: Sydney (australia-southeast1)"
feature_slug: "regional-bucket-location-sydney-australia-southeast1"
latest_feature_date: "2017-06-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
keywords:
  - "regional"
  - "bucket"
  - "location"
  - "sydney"
  - "australia"
  - "southeast1"
  - "storage"
  - "added"
---

# Regional bucket location: Sydney (australia-southeast1)

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Cloud Storage added the Sydney region as a location for storing data.

## Extended Definition

Cloud Storage added the Sydney region as a location for storing data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)

## Supporting Pages

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following regions are available when creating a configurable dual-region bucket: Location code Region Name Region Description ASIA ASIA-EAST1 Taiwan ASIA-SOUTHEAST1 Singapore AU AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne CA NORTHAMERICA-NORTHEAST1 Montréal NORTHAMERICA-NORTHEAST2 Toronto DE EUROPE-WEST3 Frankfurt EUROPE-WEST10 Berlin EU EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 1 Finland EUROPE-SOUTHWEST1 Madrid EUROPE-WEST1 Belgium EUROPE-WEST3 5 Frankfurt EUROPE-WEST4 1 Netherlands EUROPE-WEST8 4 Milan EUROPE-WEST9 Paris EUROPE-WEST10 5 Berlin EUROPE-WEST12 4 Turin IN ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi IT EUROPE-WEST8 Milan EUROPE-WEST12 Turin US US-CENTRAL1 2 Iowa US-EAST1 2 South Carolina US-EAST4 Northern Virginia US-EAST5 3 Columbus US-SOUTH1 Dallas US-WEST1 Oregon US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas 1 The EUROPE-NORTH1 and EUROPE-WEST4 dual-region pairing is only available as a predefined dual-region .
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- The following regions are available: Geographic Area Region Name Region Description North America NORTHAMERICA-NORTHEAST1 1 Montréal Low CO 2 NORTHAMERICA-NORTHEAST2 Toronto Low CO 2 NORTHAMERICA-SOUTH1 1 Querétaro US-CENTRAL1 Iowa Low CO 2 US-EAST1 South Carolina US-EAST4 Northern Virginia US-EAST5 Columbus US-SOUTH1 Dallas Low CO 2 US-WEST1 Oregon Low CO 2 US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas South America SOUTHAMERICA-EAST1 São Paulo Low CO 2 SOUTHAMERICA-WEST1 Santiago Low CO 2 Europe EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 Finland Low CO 2 EUROPE-NORTH2 Stockholm Low CO 2 EUROPE-SOUTHWEST1 Madrid Low CO 2 EUROPE-WEST1 Belgium Low CO 2 EUROPE-WEST2 London Low CO 2 EUROPE-WEST3 Frankfurt EUROPE-WEST4 Netherlands Low CO 2 EUROPE-WEST6 Zürich Low CO 2 EUROPE-WEST8 Milan EUROPE-WEST9 Paris Low CO 2 EUROPE-WEST10 Berlin EUROPE-WEST12 Turin Asia ASIA-EAST1 Taiwan ASIA-EAST2 Hong Kong ASIA-NORTHEAST1 Tokyo ASIA-NORTHEAST2 1 Osaka ASIA-NORTHEAST3 Seoul ASIA-SOUTHEAST1 Singapore India ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi Indonesia ASIA-SOUTHEAST2 Jakarta Thailand ASIA-SOUTHEAST3 Bangkok Middle East ME-CENTRAL1 Doha ME-CENTRAL2 Dammam, Saudi Arabia ME-WEST1 Tel Aviv Australia AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne Africa AFRICA-SOUTH1 Johannesburg 1 Montréal, Osaka, and Querétaro each have three zones housed in one or two physical data centers.
- Lowest storage price No replication charges No outbound data transfer charges when reading data inside the same region Highest storage price Replication charges apply on write No outbound data transfer charges when reading data within either region Higher storage price than regions, but lower than dual-regions Replication charges apply on write Outbound data transfer charges always apply when reading data Location recommendations Requirements Recommended bucket location Workload examples Ultra-low latency Ultra-high bandwidth and I/O High performance Zone 1 Artificial Intelligence (AI) and Machine Learning (ML) High-performance computing Data-intensive analytics Optimized latency and bandwidth Lowest data storage cost Cross-zone redundancy Region 2 Analytics Backup and archive Optimized latency and bandwidth Cross-region redundancy, with precise control of the locations where copies of data are stored Dual-region 3 Analytics Backup and archive Disaster recovery Cross-geography data access Cross-region redundancy Multi-region Content serving Zonal locations for buckets are only available through Rapid Bucket .

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Features Add Storage.BlobListOption#includeTrailingDelimiter ( #3038 ) ( 0b7a0df ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 74c46dd ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250416-2.0.0 ( #3063 ) ( d496d5b ) Update dependency com.google.apis:google-api-services-storage to v1-rev20250420-2.0.0 ( #3070 ) ( 1ef50f2 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #3061 ) ( cb43a6c ) Update googleapis/sdk-platform-java action to v2.56.2 ( #3055 ) ( 7025ad7 ) Java 2.52.1 (2025-05-01) Bug Fixes Fix grpc ReadObject memory leak introduced in 2.51.0 ( #3080 ) ( 7057629 ) Go 1.53.0 (2025-05-02) Features storage/control: Add Anywhere cache control APIs ( 83ae06c ) Bug Fixes storage: Fix append edge cases ( #12074 ) ( 0eee1f9 ) storage: Fix retries for redirection errors. ( #12093 ) ( 3e177e7 ) storage: Handle gRPC deadlines in tests. ( #12092 ) ( 30b7cd2 ) storage: Update offset on resumable upload retry ( #12086 ) ( 6ce8fe5 ) storage: Validate Bidi option for MRD ( #12033 ) ( d9018cf ) Documentation storage/control: Added comments for Anywhere cache messages ( 83ae06c ) April 28, 2025 Libraries Go 1.52.0 (2025-04-22) Features storage/control: Add Anywhere cache control APIs ( #11807 ) ( 12bfa98 ) storage: Add CurrentState function to determine state of stream in MRD ( #11688 ) ( 14e8e13 ) storage: Add OwnerEntity to bucketAttrs ( #11857 ) ( 4cd4a0c ) storage: Takeover appendable object ( #11977 ) ( 513b937 ) storage: Unfinalized appendable objects. ( #11647 ) ( 52c0218 ) Bug Fixes storage: Fix Attrs for append takeover ( #11989 ) ( 6db35b1 ) storage: Fix panic when Flush called early ( #11934 ) ( 7d0b8a7 ) storage: Fix unfinalized write size ( #12016 ) ( 6217f8f ) storage: Force first message on next sendBuffer when nothing sent on current ( #11871 ) ( a1a2292 ) storage: Populate Writer.Attrs after Flush() ( #12021 ) ( 8e56f74 ) storage: Remove check for FinalizeOnClose ( #11992 ) ( 2664b8c ) storage: Wrap read response parsing errors ( #11951 ) ( d2e6583 ) Java 2.51.0 (2025-04-23) [!IMPORTANT] This release has a direct memory leak when using a StorageOptions.grpc() instance and performing downloads.
- Java Changes for google-cloud-storage 2.40.1 (2024-06-26) Bug Fixes Add a workaround to make sure grpc clients' hosts always match their universe domain ( #2588 ) ( 87bf737 ) Include x-goog-user-project on resumable upload puts for grpc transport ( #2586 ) ( 6f2f504 ) Update grpc bidi resumable uploads to validate ack'd object size ( #2570 ) ( 5c9cecf ) Update grpc finalize on close resumable uploads to validate ack'd object size ( #2572 ) ( 55a6d15 ) Update grpc single-shot uploads to validate ack'd object size ( #2567 ) ( 65c8808 ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20240524-2.0.0 ( #2565 ) ( d193243 ) Update dependency com.google.apis:google-api-services-storage to v1-rev20240621-2.0.0 ( #2596 ) ( 73b8753 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.32.0 ( #2597 ) ( 25940a4 ) Documentation Add Hierarchical Namespace Bucket and Folders samples ( #2583 ) ( 3030081 ), closes #2569 Remove allowlist note from Folders RPCs ( #2593 ) ( 82161de ) Update DeleteObject Sample to be clearer on object versioning behavior ( #2595 ) ( 79b7cf0 ) June 28, 2024 Feature You can now specify the Frankfurt, Germany ( europe-west3 ) and Paris, France ( europe-west9 ) regions when using regional endpoints .
- March 03, 2025 Libraries Java 2.49.0 (2025-02-26) Features Add new Options to allow per method header values ( #2941 ) ( 297802d ) transfer-manager: Add ParallelUploadConfig.Builder#setUploadBlobInfoFactory ( #2936 ) ( 86e9ae8 ), closes #2638 Bug Fixes Categorize a WatchdogTimeoutException as retriable for grpc ReadObject ( #2954 ) ( b53bd53 ) deps: Update the Java code generator (gapic-generator-java) to 2.53.0 ( 9946d6b ) Update grpc based Storage to defer project id validation ( #2930 ) ( cc03784 ) Update kms key handling when opening a resumable upload to clear the value in the json to be null rather than empty string ( #2939 ) ( 43553de ) Dependencies Update sdk-platform-java dependencies ( #2957 ) ( 40cfda6 ) Documentation Add note about HNS support to moveBlob ( #2929 ) ( c461546 ) Python 3.1.0 (2025-02-27) Features Add api key argument to Client constructor ( #1441 ) ( c869e15 ) Add Bucket.move blob() for HNS-enabled buckets ( #1431 ) ( 24c000f ) February 26, 2025 Feature Bucket relocation for Cloud Storage is generally available ( GA ).
- September 14, 2023 Change The following dual-region pairs are now generally available: Montréal and Toronto, Canada Sydney and Melbourne, Australia August 23, 2023 Feature The Storage Object User role ( roles/storage.objectUser ) is now available.

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Values include MULTI REGIONAL, /// REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE REDUCED AVAILABILITY. /// If this value is not specified when the bucket is created, it will default to /// STANDARD.</param> public Bucket CreateRegionalBucket ( string projectId = "your-project-id" , string bucketName = "your-unique-bucket-name" , string location = "us-west1" , string storageClass = "REGIONAL" ) { var storage = StorageClient .
- For more information, see Set up authentication for client libraries . using Google.Apis.Storage.v1.Data ; using Google.Cloud.Storage.V1 ; using System ; public class CreateRegionalBucketSample { /// <summary> /// Creates a storage bucket with region. /// </summary> /// <param name="projectId">The ID of the project to create the buckets in.</param> /// <param name="location">The location of the bucket.
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The name of a storage class // See the StorageClass documentation for other valid storage classes: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/storage/StorageClass.html // const storageClass = 'coldline'; // The name of a location // See this documentation for other valid locations: // http://g.co/cloud/storage/docs/locations#location-mr // const location = 'ASIA'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client // The bucket in the sample below will be created in the project associated with this client. // For more information, please see https://cloud.google.com/docs/authentication/production or https://googleapis.dev/nodejs/storage/latest/Storage.html const storage = new Storage (); async function createBucketWithStorageClassAndLocation () { // For default values see: https://cloud.google.com/storage/docs/locations and // https://cloud.google.com/storage/docs/storage-classes const [ bucket ] = await storage . createBucket ( bucketName , { location , [ storageClass ] : true , }); console . log ( ${ bucket . name } created with ${ storageClass } class in ${ location } ); } createBucketWithStorageClassAndLocation (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . use Google\Cloud\Storage\StorageClient; / Create a new bucket with a custom default storage class and location. @param string $bucketName The name of your Cloud Storage bucket. (e.g. 'my-bucket') / function create bucket class location(string $bucketName): void { $storage = new StorageClient(); $storageClass = 'COLDLINE'; $location = 'ASIA'; $bucket = $storage->createBucket($bucketName, [ 'storageClass' => $storageClass, 'location' => $location, ]); $objects = $bucket->objects([ 'encryption' => [ 'defaultKmsKeyName' => null, ] ]); printf('Created bucket %s in %s with storage class %s', $bucketName, $storageClass, $location); } Python For more information, see the Cloud Storage Python API reference documentation .

