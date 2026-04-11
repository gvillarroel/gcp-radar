---
title: "Cloud Storage release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/release-notes
  title: "Cloud Storage release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Resources
Send feedback
Cloud Storage release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Cloud Storage. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 08, 2026
Feature
You can delete up to 1,000 objects in a single request by using the
Cloud Storage multi-object delete XML API. If you use Amazon S3-compatible tools or
libraries, you can point your request to the Cloud Storage endpoint to use this
feature with your existing workflows. For more information, see
Delete objects and
Delete multiple objects .
April 06, 2026
Feature
You can now use Storage batch operations
to update object contexts for multiple objects
in a single job. You can clear all existing contexts from the specified objects,
remove contexts with specific keys, or update and insert new context key-value
pairs. For more information, see
Create and manage batch operation jobs .
Feature
Object contexts are now
generally available .
You can attach key-value pairs to your objects to categorize, track, and search
your data. Object contexts are preserved by default during copy, rewrite, and
compose operations. You can help control this behavior by using the
dropContextGroups
JSON API parameter or by providing new contexts in the request.
April 02, 2026
Feature
You can configure which encryption types are allowed or prohibited for
creating new objects in a bucket. For more information, see
Enforce or restrict the encryption types for a bucket .
March 31, 2026
Feature
You can now use Storage Insights datasets to help manage your data security and compliance. The ability to identify publicly accessible objects is now generally available . Additionally, new fields in bucket and object metadata schemas, such as encryption , retentionPeriod , encryptionType , and retentionExpirationTime , help you audit encryption configurations and monitor data retention policies. For more information, see
Storage Insights datasets and
Dataset tables and schemas .
March 24, 2026
Announcement
Anywhere Cache has been renamed to Rapid Cache.
March 12, 2026
Change
Object uploads that use customer-managed encryption keys (CMEK) now fail if the
Cloud Storage service agent lacks the necessary IAM
role to decrypt the object. For steps to grant the required role, see
Assign a Cloud KMS key to a service agent .
March 10, 2026
Feature
Rapid Bucket is now generally available .
Rapid Bucket lets you store objects in the Rapid storage class by defining a
zone as a bucket's location. This architecture optimizes data access and I/O
performance between your storage and compute resources. Rapid Bucket is most
suitable for data-intensive workloads like AI/ML and high-scale data analytics.
For more information, see Rapid Bucket
and Create zonal buckets .
March 06, 2026
Feature
You can now identify publicly accessible objects ( preview ) by using Storage Insights
datasets. The object metadata schema includes fields that provide the public
access status of your objects, which lets you understand, organize, and manage
publicly accessible objects at scale.
March 05, 2026
Feature
You can now analyze object data and metadata from your Storage Insights
datasets by using BigQuery ObjectRef functions. The ref column in the
dataset contains a reference to the Cloud Storage object which you can use with
ObjectRef functions to analyze object content. For example, you can build
queries to help detect sensitive information in documents or to generate image
descriptions. For more information, see
Analyze object data and metadata using BigQuery .
January 30, 2026
Announcement
Object change notification is deprecated on January 30, 2026. To generate
notifications for changes to objects, use
Pub/Sub notifications for Cloud Storage instead.
January 28, 2026
Feature
Previously, when listing buckets by using the
client libraries, JSON API, or RPC API, the request returned an error if some
buckets couldn't be reached because a location was temporarily unavailable. You
can now use a partial success option to return a list of buckets that are
available, as well as the names of any buckets that can't be reached.
January 21, 2026
Feature
Bucket relocation with write downtime now supports completed multipart uploads.
If a multipart upload is started before relocation begins and is completed
before the final synchronization step, the objects are successfully relocated.
In-progress multipart uploads continue to block the final synchronization
step until they are either completed or cancelled. For more information, see
Bucket relocation overview .
January 20, 2026
Feature
Cloud Storage now offers support in the Thailand, Bangkok ( asia-southeast3 )
region. To learn more about supported locations, see Cloud Storage bucket
locations .
January 16, 2026
Feature
You can now use dry run mode
to simulate storage batch operations jobs without modifying or deleting data.
Dry run helps you to validate your job configuration before running the actual
operation.
To learn how to configure a dry run job, see Create and manage batch operations
jobs .
January 15, 2026
Feature
When you
bulk restore soft-deleted objects ,
you can restore objects that were live at a specific time. You can also choose
the objects to restore based on the object creation time.
December 22, 2025
Libraries
Java
2.61.0 (2025-12-15)
Features
Add support for partial success in ListBuckets for json ( #3415 ) ( 37ef7f3 )
Modifying getters and setters to be more inline with s3 interface. ( 0a8bbea )
mpu: Breaking change modifying getters and setters in MPU to be more inline with s3 interface. ( 66d54e2 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.64.1 ( 511ff51 )
Dependencies
Update actions/checkout action to v6 ( d934ad9 )
Update actions/checkout action to v6 ( d99dd53 )
Update dependency com.google.apis:google-api-services-storage to v1-rev20251118-2.0.0 ( f48fa3f )
Update dependency com.google.apis:google-api-services-storage to v1-rev20251118-2.0.0 ( #3427 ) ( 4612e72 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.54.2 ( 90a71be )
Update dependency com.google.cloud:sdk-platform-java-config to v3.54.2 ( #3424 ) ( c989dc3 )
Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.59.0 ( f5d8337 )
Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.59.0 ( 5480ce3 )
Update googleapis/sdk-platform-java action to v2.64.2 ( 23494d7 )
Update googleapis/sdk-platform-java action to v2.64.2 ( #3425 ) ( fad2d7a )
Java
2.62.0-rc1 (2025-12-17)
Features
breaking behavior rewrite Storage.blobAppendableUpload to be non-blocking and have improved throughput ( #3231 ) ( 7bd73d3 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 62b6248 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( c3a0aaa )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( fac7839 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 8332e1b )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( e4688a0 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( b426e7d )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( c601cca )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( c58fe1f )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 616256a )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( ba3af58 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( e12d2ad )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( d6044a1 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( eebc6c6 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 12507e2 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 58557a0 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( c109fdb )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( d98ecc7 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 6858a9d )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( bb7e1b4 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( e89ae27 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 8beaa03 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( ff8fd8f )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 944e0bc )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( eb8c5c8 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 50e4589 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( a751971 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( befff3b )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( ac950ad )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( f381795 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 84ffb6d )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( b95e51d )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 03aa3e7 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 23f9a79 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( e2a3e3c )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( bee4308 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 28f2759 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 775ad24 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( f29d825 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 2e8a0ee )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 5c2cf19 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 2431ee1 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( aeb621a )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 3d2520d )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 3e38109 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 8453281 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 4170803 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( f8e54b5 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 85049b9 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 2a92e35 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 3b195fe )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( ae31163 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( b1499d6 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 1085216 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 3616097 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 6a80994 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 69d01d4 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( fa0df98 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 3eec2e3 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 1bf497e )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( bc7a931 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( c6f5b57 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 8d4d7a3 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( affb14f )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 09c426b )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( af52279 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 72491e7 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 2968790 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( a4d919e )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( f437c0a )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( ba70fd8 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 95d46a5 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 413d65f )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 52639da )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 961f3cb )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 98dbb02 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( cbc22f2 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( f7c37f5 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( a7a8945 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 26db9e3 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 3ca4123 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 8553cb9 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 758756f )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 065d249 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 61824e6 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 67482f7 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( d540a83 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 8e516e6 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 0a2fac5 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 35c2fbf )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( e5e1107 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 79bea2c )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 9416a8f )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 411615d )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 51af43e )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 0bfb9ff )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( c648d38 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( b8dda33 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 264683e )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( c653bb6 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( 24be97d )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( a0535c5 )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( be3be3f )
add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( ec59078 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 62b6248 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( c3a0aaa )
add @BetaApi Storage#blobReadSession for gRPC Transport ( fac7839 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 8332e1b )
add @BetaApi Storage#blobReadSession for gRPC Transport ( e4688a0 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( b426e7d )
add @BetaApi Storage#blobReadSession for gRPC Transport ( c601cca )
add @BetaApi Storage#blobReadSession for gRPC Transport ( c58fe1f )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 616256a )
add @BetaApi Storage#blobReadSession for gRPC Transport ( ba3af58 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( e12d2ad )
add @BetaApi Storage#blobReadSession for gRPC Transport ( d6044a1 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( eebc6c6 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 12507e2 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 58557a0 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( c109fdb )
add @BetaApi Storage#blobReadSession for gRPC Transport ( d98ecc7 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 6858a9d )
add @BetaApi Storage#blobReadSession for gRPC Transport ( bb7e1b4 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( e89ae27 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 8beaa03 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( ff8fd8f )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 944e0bc )
add @BetaApi Storage#blobReadSession for gRPC Transport ( eb8c5c8 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 50e4589 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( a751971 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( befff3b )
add @BetaApi Storage#blobReadSession for gRPC Transport ( ac950ad )
add @BetaApi Storage#blobReadSession for gRPC Transport ( f381795 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 84ffb6d )
add @BetaApi Storage#blobReadSession for gRPC Transport ( b95e51d )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 03aa3e7 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 23f9a79 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( e2a3e3c )
add @BetaApi Storage#blobReadSession for gRPC Transport ( bee4308 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 28f2759 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 775ad24 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( f29d825 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 2e8a0ee )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 5c2cf19 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 2431ee1 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( aeb621a )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 3d2520d )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 3e38109 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 8453281 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 4170803 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( f8e54b5 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 85049b9 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 2a92e35 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 3b195fe )
add @BetaApi Storage#blobReadSession for gRPC Transport ( ae31163 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( b1499d6 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 1085216 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 3616097 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 6a80994 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 69d01d4 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( fa0df98 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 3eec2e3 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 1bf497e )
add @BetaApi Storage#blobReadSession for gRPC Transport ( bc7a931 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( c6f5b57 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 8d4d7a3 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( affb14f )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 09c426b )
add @BetaApi Storage#blobReadSession for gRPC Transport ( af52279 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 72491e7 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 2968790 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( a4d919e )
add @BetaApi Storage#blobReadSession for gRPC Transport ( f437c0a )
add @BetaApi Storage#blobReadSession for gRPC Transport ( ba70fd8 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 95d46a5 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 413d65f )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 52639da )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 961f3cb )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 98dbb02 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( cbc22f2 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( f7c37f5 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( a7a8945 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 26db9e3 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 3ca4123 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 8553cb9 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 758756f )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 065d249 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 61824e6 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 67482f7 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( d540a83 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 8e516e6 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 0a2fac5 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 35c2fbf )
add @BetaApi Storage#blobReadSession for gRPC Transport ( e5e1107 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 79bea2c )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 9416a8f )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 411615d )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 51af43e )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 0bfb9ff )
add @BetaApi Storage#blobReadSession for gRPC Transport ( c648d38 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( b8dda33 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 264683e )
add @BetaApi Storage#blobReadSession for gRPC Transport ( c653bb6 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( 24be97d )
add @BetaApi Storage#blobReadSession for gRPC Transport ( a0535c5 )
add @BetaApi Storage#blobReadSession for gRPC Transport ( be3be3f )
add @BetaApi Storage#blobReadSession for gRPC Transport ( ec59078 )
Add Anywhere cache control APIs ( 81c8c61 )
Add Anywhere cache control APIs ( 81c8c61 )
add AppendableUploadWriteableByteChannel#flush() ( #3261 ) ( 950c56f )
add BlobInfo.ObjectContexts ( #3259 ) ( 485aefd )
add BucketInfo.IpFilter ( #3177 ) ( 14a91ec )
add default end-to-end checksumming for JournalingBlobWriteSessionConfig #3180 ( fa0f6a0 )
add default end-to-end crc32c checksumming for several upload methods via grpc transport #3176 ( fa0f6a0 )
add MinFlushSizeFlushPolicy#withMaxPendingBytes(long) ( #3231 ) ( 7bd73d3 )
add MoveObject RPC ( 34b8ac4 )
add new Options to allow per method header values ( #2941 ) ( 297802d )
add new preview Bucket encryption policy configuration ( #3204 ) ( 7b250dd )
add new Storage#moveBlob method to atomically rename an object ( #2882 ) ( c49fd08 )
add per-message checksum validation for gRPC ReadObject operations ( #3336 ) ( 6eef1b0 )
add preview MultipartUploadClient#abortMultipartUpload https://github.com/googleapis/java-storage/pull/3361 ( 160fa9a )
add preview MultipartUploadClient#completeMultipartUpload https://github.com/googleapis/java-storage/pull/3372 ( 160fa9a )
add preview MultipartUploadClient#createMultipartUpload https://github.com/googleapis/java-storage/pull/3356 ( 160fa9a )
add preview MultipartUploadClient#listParts https://github.com/googleapis/java-storage/pull/3359 ( 160fa9a )
add preview MultipartUploadClient#uploadPart https://github.com/googleapis/java-storage/pull/3375 ( 160fa9a )
add preview MultipartUploadSettings ( 160fa9a )
add Storage.BlobListOption#includeTrailingDelimiter ( #3038 ) ( 0b7a0df )
add StorageChannelUtils to provide helper methods to perform blocking read/write to/from non-blocking channels ( #3231 ) ( 7bd73d3 )
expose BucketInfo.getProject as a BigInteger ( #3119 ) ( 64bbb60 ), closes #3023
implement improved retry context information ( 62b6248 )
implement improved retry context information ( c3a0aaa )
implement improved retry context information ( fac7839 )
implement improved retry context information ( 8332e1b )
implement improved retry context information ( e4688a0 )
implement improved retry context information ( b426e7d )
implement improved retry context information ( c601cca )
implement improved retry context information ( c58fe1f )
implement improved retry context information ( 616256a )
implement improved retry context information ( ba3af58 )
implement improved retry context information ( e12d2ad )
implement improved retry context information ( d6044a1 )
implement improved retry context information ( eebc6c6 )
implement improved retry context information ( 12507e2 )
implement improved retry context information ( 58557a0 )
implement improved retry context information ( c109fdb )
implement improved retry context information ( d98ecc7 )
implement improved retry context information ( 6858a9d )
implement improved retry context information ( bb7e1b4 )
implement improved retry context information ( e89ae27 )
implement improved retry context information ( 8beaa03 )
implement improved retry context information ( ff8fd8f )
implement improved retry context information ( 944e0bc )
implement improved retry context information ( eb8c5c8 )
implement improved retry context information ( 50e4589 )
implement improved retry context information ( a751971 )
implement improved retry context information ( befff3b )
implement improved retry context information ( ac950ad )
implement improved retry context information ( f381795 )
implement improved retry context information ( 84ffb6d )
implement improved retry context information ( b95e51d )
implement improved retry context information ( 03aa3e7 )
implement improved retry context information ( 23f9a79 )
implement improved retry context information ( e2a3e3c )
implement improved retry context information ( bee4308 )
implement improved retry context information ( 28f2759 )
implement improved retry context information ( 775ad24 )
implement improved retry context information ( f29d825 )
implement improved retry context information ( 2e8a0ee )
implement improved retry context information ( 5c2cf19 )
implement improved retry context information ( 2431ee1 )
implement improved retry context information ( aeb621a )
implement improved retry context information ( 3d2520d )
implement improved retry context information ( 3e38109 )
implement improved retry context information ( 8453281 )
implement improved retry context information ( 4170803 )
implement improved retry context information ( f8e54b5 )
implement improved retry context information ( 85049b9 )
implement improved retry context information ( 2a92e35 )
implement improved retry context information ( 3b195fe )
implement improved retry context information ( ae31163 )
implement improved retry context information ( b1499d6 )
implement improved retry context information ( 1085216 )
implement improved retry context information ( 3616097 )
implement improved retry context information ( 6a80994 )
implement improved retry context information ( 69d01d4 )
implement improved retry context information ( fa0df98 )
implement improved retry context information ( 3eec2e3 )
implement improved retry context information ( 1bf497e )
implement improved retry context information ( bc7a931 )
implement improved retry context information ( c6f5b57 )
implement improved retry context information ( 8d4d7a3 )
implement improved retry context information ( affb14f )
implement improved retry context information ( 09c426b )
implement improved retry context information ( af52279 )
implement improved retry context information ( 72491e7 )
implement improved retry context information ( 2968790 )
implement improved retry context information ( a4d919e )
implement improved retry context information ( f437c0a )
implement improved retry context information ( ba70fd8 )
implement improved retry context information ( 95d46a5 )
implement improved retry context information ( 413d65f )
implement improved retry context information ( 52639da )
implement improved retry context information ( 961f3cb )
implement improved retry context information ( 98dbb02 )
implement improved retry context information ( cbc22f2 )
implement improved retry context information ( f7c37f5 )
implement improved retry context information ( a7a8945 )
implement improved retry context information ( 26db9e3 )
implement improved retry context information ( 3ca4123 )
implement improved retry context information ( 8553cb9 )
implement improved retry context information ( 758756f )
implement improved retry context information ( 065d249 )
implement improved retry context information ( 61824e6 )
implement improved retry context information ( 67482f7 )
implement improved retry context information ( d540a83 )
implement improved retry context information ( 8e516e6 )
implement improved retry context information ( 0a2fac5 )
implement improved retry context information ( 35c2fbf )
implement improved retry context information ( e5e1107 )
implement improved retry context information ( 79bea2c )
implement improved retry context information ( 9416a8f )
implement improved retry context information ( 411615d )
implement improved retry context information ( 51af43e )
implement improved retry context information ( 0bfb9ff )
implement improved retry context information ( c648d38 )
implement improved retry context information ( b8dda33 )
implement improved retry context information ( 264683e )
implement improved retry context information ( c653bb6 )
implement improved retry context information ( 24be97d )
implement improved retry context information ( a0535c5 )
implement improved retry context information ( be3be3f )
implement improved retry context information ( ec59078 )
introductory beta level support for OpenTelemetry tracing on c.g.c.storage.Storage methods ( #2837 ) ( dd889ea )
next release from main branch is 2.48.0 ( #2885 ) ( 34e5903 )
next release from main branch is 2.50.0 ( #2968 ) ( 4a69fcc )
storagecontrol: Add Anywhere cache control APIs ( 06572b7 )
storagecontrol: Add Client Libraries Storage IntelligenceConfig ( 06572b7 )
storagecontrol: add GetIamPolicy, SetIamPolicy, and TestIamPermissions RPCs ( c884551 )
transfer-manager: add ParallelUploadConfig.Builder#setUploadBlobInfoFactory ( #2936 ) ( 86e9ae8 ), closes #2638
Bug Fixes
add case insensitive check for X-Goog-Content-SHA256 in SignatureInfo ( #3337 ) ( 54bc2c1 )
add new system property (com.google.cloud.storage.grpc.bound_token) to allow disabling bound token use with grpc ( #3365 ) ( ebf5e6d )
call response.disconnect() after resolving resumable upload url ( #3385 ) ( ac3be4b )
cancel the future in RemoteStorageHelper#forceDelete when TimeoutException happens ( #3136 ) ( e6007d5 )
categorize a WatchdogTimeoutException as retriable for grpc ReadObject ( #2954 ) ( b53bd53 )
de-beta storage-v2 artifacts ( #2852 ) ( 77a2e8a )
deps: update the Java code generator (gapic-generator-java) to 2.51.0 ( 34b8ac4 )
deps: update the Java code generator (gapic-generator-java) to 2.51.1 ( 09ed029 )
deps: update the Java code generator (gapic-generator-java) to 2.52.0 ( 00754bc )
deps: update the Java code generator (gapic-generator-java) to 2.53.0 ( 9946d6b )
deps: update the Java code generator (gapic-generator-java) to 2.54.0 ( 22e7e3d )
deps: update the Java code generator (gapic-generator-java) to 2.55.1 ( 81c8c61 )
deps: update the Java code generator (gapic-generator-java) to 2.56.0 ( 8f9f5ec )
deps: update the Java code generator (gapic-generator-java) to 2.56.2 ( 74c46dd )
deps: update the Java code generator (gapic-generator-java) to 2.58.0 ( 06572b7 )
deps: update the Java code generator (gapic-generator-java) to 2.59.0 ( 7dba9f0 )
deps: update the Java code generator (gapic-generator-java) to 2.60.2 ( bd1f199 )
deps: update the Java code generator (gapic-generator-java) to 2.61.0 ( f98b686 )
deps: update the Java code generator (gapic-generator-java) to 2.62.1 ( 0e348db )
deps: update the Java code generator (gapic-generator-java) to 2.62.2 ( 984f8ca )
deps: update the Java code generator (gapic-generator-java) to 2.62.3 ( ba84793 )
deps: update the Java code generator (gapic-generator-java) to 2.63.0 ( c1a8968 )
deps: update the Java code generator (gapic-generator-java) to 2.64.1 ( 511ff51 )
deps: update the Java code generator (gapic-generator-java) to 2.65.0-rc1 ( c3267aa )
enable ALTS bound token (for DirectPath) in the grpc channel provider ( #2919 ) ( 38d248d )
ensure object generation is sent for Storage#update(BlobInfo) using HTTP Transport ( #3006 ) ( 2a3e0e7 ), closes #2980
fix a possible NPE that could happen when shutting down a grpc Storage instance ( #3089 ) ( 56f5d0a )
fix appendable upload finalization race condition ( #3295 ) ( 485be18 )
fix DefaultBlobWriteSessionConfig init to work when grpc classes are excluded ( #3147 ) ( 8571ba8 )
fix grpc ReadObject memory leak introduced in 2.51.0 ( #3080 ) ( 7057629 )
fix IllegalMonitorStateException thrown from BlobAppendableUpload.isOpen() ( #3302 ) ( aa90468 )
fix interrupt spiral in grpc ReadObject drainQueue ( #2850 ) ( c1dac83 )
fix Journaling BlobWriteSessionConfig to properly handle multiple consecutive retries ( #3166 ) ( 895bfbd )
give user provided checksum precondition priority for Storage#create methods that accept byte[] #3182 ( fa0f6a0 )
improve 503 handling for json resumable uploads ( #2987 ) ( 9bc2b14 )
make FlushPolicy${Min,Max}FlushSizeFlushPolicy constructors private ( #3217 ) ( 7bd73d3 )
migrate away from GoogleCredentials.fromStream() usages ( #3339 ) ( 7e42c2f )
move crc32c computation before writing to disk for BufferToDiskThenUpload BlobWriteSession config #3187 ( fa0f6a0 )
next release candidate ( eec9efa )
update 416 handling for ReadChannel ( #3018 ) ( 4a9c3e4 )
update batch handling to ensure each operation has its own unique idempotency-token ( #2905 ) ( 8d79b8d )
update BlobAppendableUpload implementation to periodically flush for large writes ( #3278 ) ( d0ffe18 )
update BlobAppendableUploadConfig and FlushPolicy.MinFlushSizeFlushPolicy to default to 4MiB minFlushSize and 16MiB maxPendingBytes ( #3249 ) ( 7bd73d3 )
update BlobReadSession channels to not implicitly close once EOF is observed ( #3344 ) ( 9f0a93e )
update BlobReadSession ScatteringByteChannel projection to use less CPU ( #3324 ) ( 678fecc )
update DefaultRetryContext to trap and forward RejectedExceptionException to onFailure ( #3327 ) ( 1be31bd )
update grpc based Storage to defer project id validation ( #2930 ) ( cc03784 )
update gRPC Bidi resumable upload to have more robust error message generation ( #2998 ) ( 79b5d85 )
update grpc client side metrics detection to be graceful when not running on gcp ( #3097 ) ( 10cd32d )
update gRPC implementation for storage.buckets.get to translate NOT_FOUND to null ( #3005 ) ( 704af65 )
update grpc single-shot uploads to attach the callers stracktrace as suppressed exception if an error happens in the background ( #3330 ) ( 64e2b2e )
update kms key handling when opening a resumable upload to clear the value in the json to be null rather than empty string ( #2939 ) ( 43553de )
update object context diff logic to be shallow rather than deep ( #3287 ) ( 2fd15f6 )
update otel integration to properly activate span context for lazy RPCs such as reads & writes ( #3255 ) ( d6587f4 )
update otel integration to properly activate span context for lazy RPCs such as reads & writes pt.2 ( #3277 ) ( 3240f67 )
update PCU request building logic to properly clear crc32c and md5 ( #3323 ) ( 4da9f31 )
update request handling of gRPC based CopyWriter ( #2858 ) ( 093cb87 )
update retry lifecycle when attempting to decompress a gzip object ( #2840 ) ( 7dba13c )
update retry logic for grpc start resumable upload to properly handle client side deadline_exceeded ( #3354 ) ( 6eb3331 )
update Signed URL default scheme to resolve from storage options host ( #2880 ) ( 7ae7e39 ), closes #2870
update StorageException translation of an ApiException to include error details ( #2872 ) ( 8ad5010 )
update usages of String.format to explicitly pass Locale.US ( #2974 ) ( 8bcb2de ), closes #2972
Dependencies
remove explicit version declarations for packages that are in shared-dependencies ( #3014 ) ( 61cdb30 )
update actions/checkout action to v5 ( #3239 ) ( 33f024b )
update dependency com.google.apis:google-api-services-storage to v1-rev20241206-2.0.0 ( #2839 ) ( 8f3cdd3 )
update dependency com.google.apis:google-api-services-storage to v1-rev20250224-2.0.0 ( #2969 ) ( 80a40c4 )
update dependency com.google.apis:google-api-services-storage to v1-rev20250312-2.0.0 ( #3000 ) ( 78fc076 )
update dependency com.google.apis:google-api-services-storage to v1-rev20250416-2.0.0 ( #3063 ) ( d496d5b )
update dependency com.google.apis:google-api-services-storage to v1-rev20250420-2.0.0 ( #3070 ) ( 1ef50f2 )
update dependency com.google.apis:google-api-services-storage to v1-rev20250424-2.0.0 ( #3084 ) ( c7afbde )
update dependency com.google.apis:google-api-services-storage to v1-rev20250509-2.0.0 ( #3103 ) ( 1fd1090 )
update dependency com.google.apis:google-api-services-storage to v1-rev20250521-2.0.0 ( #3118 ) ( e1be49e )
update dependency com.google.apis:google-api-services-storage to v1-rev20250524-2.0.0 ( #3127 ) ( 2a4499d )
update dependency com.google.apis:google-api-services-storage to v1-rev20250605-2.0.0 ( #3143 ) ( 17a80d8 )
update dependency com.google.apis:google-api-services-storage to v1-rev20250629-2.0.0 ( #3185 ) ( 4ce8281 )
update dependency com.google.apis:google-api-services-storage to v1-rev20250718-2.0.0 ( #3203 ) ( 18978e4 )
update dependency com.google.apis:google-api-services-storage to v1-rev20250815-2.0.0 ( #3245 ) ( 87afe1a )
update dependency com.google.apis:google-api-services-storage to v1-rev20250925-2.0.0 ( #3313 ) ( ab310eb )
update dependency com.google.cloud:sdk-platform-java-config to v3.42.0 ( #2895 ) ( 145afb0 )
update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #3061 ) ( cb43a6c )
update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #3189 ) ( 7fbfb01 )
update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #3201 ) ( 782c3c4 )
update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #3213 ) ( 86ff697 )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.0 ( #3250 ) ( 0782e62 )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #3280 ) ( d046ea3 )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.2 ( #3298 ) ( 1489f3a )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.3 ( #3325 ) ( 4d3e3be )
update dependency com.google.cloud:sdk-platform-java-config to v3.53.0 ( #3351 ) ( e64565a )
update dependency com.google.cloud:sdk-platform-java-config to v3.54.1 ( #3381 ) ( e3d3700 )
update dependency com.google.cloud.opentelemetry:exporter-trace to v0.33.0 ( #2873 ) ( 39509d5 )
update dependency com.google.cloud.opentelemetry:exporter-trace to v0.33.0 ( #2904 ) ( 2a5242e )
update dependency com.google.cloud.opentelemetry:exporter-trace to v0.34.0 ( #2938 ) ( ff6f696 )
update dependency com.google.cloud.opentelemetry:exporter-trace to v0.36.0 ( #3162 ) ( 41a1030 )
update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.51.0 ( #2860 ) ( 980ac4e )
update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.52.0 ( #2883 ) ( a64a3d5 )
update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.59.0 ( f5d8337 )
update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.59.0 ( 5480ce3 )
update googleapis/sdk-platform-java action to v2.51.1 ( #2864 ) ( b731c06 )
update googleapis/sdk-platform-java action to v2.55.1 ( #2985 ) ( e22a2de )
update googleapis/sdk-platform-java action to v2.56.2 ( #3055 ) ( 7025ad7 )
update googleapis/sdk-platform-java action to v2.60.1 ( #3196 ) ( 6ba56e5 )
update googleapis/sdk-platform-java action to v2.62.1 ( #3281 ) ( c9078bb )
update googleapis/sdk-platform-java action to v2.62.2 ( #3299 ) ( c3b05ac )
update googleapis/sdk-platform-java action to v2.62.3 ( #3322 ) ( a5808ea )
update sdk-platform-java dependencies ( #2841 ) ( 2a70481 )
update sdk-platform-java dependencies ( #2866 ) ( 562df7f )
update sdk-platform-java dependencies ( #2921 ) ( fa9b0a8 )
update sdk-platform-java dependencies ( #2957 ) ( 40cfda6 )
update sdk-platform-java dependencies ( #2983 ) ( 9eeb82a )
update sdk-platform-java dependencies ( #2986 ) ( 10b922a )
update sdk-platform-java dependencies ( #3046 ) ( 861f958 )
update sdk-platform-java dependencies ( #3053 ) ( 921d1ba )
update sdk-platform-java dependencies ( #3087 ) ( 762ca13 )
update sdk-platform-java dependencies ( #3102 ) ( 3b53b94 )
update sdk-platform-java dependencies ( #3129 ) ( 31cd058 )
update sdk-platform-java dependencies ( #3152 ) ( 2f78192 )
update sdk-platform-java dependencies ( #3164 ) ( c22a131 )
update sdk-platform-java-config to 3.55.0-rc1 ( #3434 ) ( 25283cb )
Documentation
add explicit Optional annotations to fields that have always been treated as optional ( 53b6927 )
add note about HNS support to moveBlob ( #2929 ) ( c461546 )
add note that Bucket.project output format is always project number format ( 53b6927 )
add note that managedFolders are supported for GetIamPolicy and SetIamPolicy ( 53b6927 )
add samples for soft delete (objects) ( #2754 ) ( 41bc807 )
Create OpenTelemetry Quickstart Sample ( #2861 ) ( 31df9b7 )
update storage_copy_file to include MegabytesCopiedPerChunk ( #2910 ) ( 971ca5d )
December 16, 2025
Feature
You can now generate Storage Insights
datasets for activity data to receive insights
about object mutations, errors, and activity trends across projects, buckets,
and regions. For more information, see Dataset schema for activity data
tables .
Feature
You can now use Rapid Cache to serve data for object read requests issued
by BigQuery to accelerate data reads for your applications. For more
information, see Using Rapid Cache to accelerate reads for BigQuery .
December 15, 2025
Libraries
Python
3.7.0 (2025-12-09)
Features
Auto enable mTLS when supported certificates are detected ( #1637 ) ( 4e91c54 )
Send entire object checksum in the final api call of resumable upload ( #1654 ) ( ddce7e5 )
Support urllib3 >= 2.6.0 ( #1658 ) ( 57405e9 )
Bug Fixes
bucket: Move blob fails when the new blob name contains characters that need to be url encoded ( #1605 ) ( ec470a2 )
November 24, 2025
Libraries
Python
3.6.0 (2025-11-17)
Features
Add support for partial list buckets ( #1606 ) ( 92fc2b0 )
Make return_partial_success and unreachable fields public for list Bucket ( #1601 ) ( 323cddd )
zb-experimental: Add async write object stream ( 5ab8103 )
zb-experimental: Add async write object stream ( #1612 ) ( 5ab8103 )
Bug Fixes
Don't pass credentials to StorageClient ( #1608 ) ( 195d644 )
November 14, 2025
Feature
You can now use the Google Cloud console to relocate
buckets . Using bucket relocation, you
can move an existing bucket from one location to another without changing the
bucket's name or requiring manual transfer of data within the bucket.
November 11, 2025
Feature
You can now enable Autoclass for buckets with
hierarchical namespace enabled.
November 10, 2025
Libraries
Python
3.5.0 (2025-11-05)
Features
Ensure that Python in FIPS mode can fetch MD5 implementation ( #1522 ) ( 961536c )
Provide option to update user_agent ( #1596 ) ( 02f1451 )
Bug Fixes
Deprecate credentials_file argument ( 74415a2 )
Flaky system tests for resumable_media ( #1592 ) ( 7fee3dd )
Make download_ranges compatible with asyncio.create_task(..) ( #1591 ) ( faf8b83 )
Make download_ranges compatible with asyncio.create_task(..) ( #1591 ) ( faf8b83 )
Redact sensitive data from OTEL traces and fix env var parsing ( #1553 ) ( a38ca19 )
Redact sensitive data from OTEL traces and fix env var parsing ( #1553 ) ( a38ca19 )
Use separate header object for each upload in Transfer Manager MPU ( #1595 ) ( 0d867bd )
Java
2.60.0 (2025-11-07)
Features
Add preview MultipartUploadClient#abortMultipartUpload https://github.com/googleapis/java-storage/pull/3361 ( 160fa9a )
Add preview MultipartUploadClient#completeMultipartUpload https://github.com/googleapis/java-storage/pull/3372 ( 160fa9a )
Add preview MultipartUploadClient#createMultipartUpload https://github.com/googleapis/java-storage/pull/3356 ( 160fa9a )
Add preview MultipartUploadClient#listParts https://github.com/googleapis/java-storage/pull/3359 ( 160fa9a )
Add preview MultipartUploadClient#uploadPart https://github.com/googleapis/java-storage/pull/3375 ( 160fa9a )
Add preview MultipartUploadSettings ( 160fa9a )
Bug Fixes
Add new system property (com.google.cloud.storage.grpc.bound_token) to allow disabling bound token use with grpc ( #3365 ) ( ebf5e6d )
Call response.disconnect() after resolving resumable upload url ( #3385 ) ( ac3be4b )
deps: Update the Java code generator (gapic-generator-java) to 2.63.0 ( c1a8968 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.54.1 ( #3381 ) ( e3d3700 )
November 03, 2025
Libraries
Go
1.57.1 (2025-10-28)
Bug Fixes
storage: Takeover idempotence. ( #13230 ) ( cc5d2a1 )
storage: Copy metadata when using Copier with grpc ( #12919 ) ( 57a2e80 )
storage: Fix takeover response handling. ( #13239 ) ( 26d75bc )
storage: Remove default timeout for gRPC operations ( #13022 ) ( b94c3ba )
storage: Skip download of file outside of target dir ( #12945 ) ( 6259aee )
storage: Upgrade gRPC service registration func ( 8fffca2 )
October 27, 2025
Libraries
Java
2.59.0 (2025-10-21)
Features
Add per-message checksum validation for gRPC ReadObject operations ( #3336 ) ( 6eef1b0 )
Bug Fixes
Add case insensitive check for X-Goog-Content-SHA256 in SignatureInfo ( #3337 ) ( 54bc2c1 )
Migrate away from GoogleCredentials.fromStream() usages ( #3339 ) ( 7e42c2f )
Update BlobReadSession channels to not implicitly close once EOF is observed ( #3344 ) ( 9f0a93e )
Update grpc single-shot uploads to attach the callers stracktrace as suppressed exception if an error happens in the background ( #3330 ) ( 64e2b2e )
Update retry logic for grpc start resumable upload to properly handle client side deadline_exceeded ( #3354 ) ( 6eb3331 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.53.0 ( #3351 ) ( e64565a )
October 23, 2025
Feature
You can now use Storage batch operations to create and manage retention configurations for objects in bulk using the PutMetadata transformation.
October 20, 2025
Libraries
Go
1.56.3 (2025-10-14)
Bug Fixes
storage: Persist resource in append retry ( #13128 ) ( 9ad2100 )
October 13, 2025
Libraries
Java
2.58.1 (2025-10-06)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.62.3 ( ba84793 )
Update BlobReadSession ScatteringByteChannel projection to use less CPU ( #3324 ) ( 678fecc )
Update DefaultRetryContext to trap and forward RejectedExceptionException to onFailure ( #3327 ) ( 1be31bd )
Update PCU request building logic to properly clear crc32c and md5 ( #3323 ) ( 4da9f31 )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20250925-2.0.0 ( #3313 ) ( ab310eb )
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.3 ( #3325 ) ( 4d3e3be )
Update googleapis/sdk-platform-java action to v2.62.3 ( #3322 ) ( a5808ea )
Python
3.4.1 (2025-10-08)
Bug Fixes
Fixes #1561 by adding an option to specify the entire object checksum for resumable uploads via the upload_from_string , upload_from_file , and upload_from_filename methods ( acb918e )
September 30, 2025
Feature
Object contexts are now available in Preview . Object contexts let you attach contextual
information to your objects to help you manage and discover data.
September 29, 2025
Libraries
Java
2.58.0 (2025-09-23)
Features
storagecontrol: Add GetIamPolicy, SetIamPolicy, and TestIamPermissions RPCs ( c884551 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.62.2 ( 984f8ca )
Fix appendable upload finalization race condition ( #3295 ) ( 485be18 )
Fix IllegalMonitorStateException thrown from BlobAppendableUpload.isOpen() ( #3302 ) ( aa90468 )
Update object context diff logic to be shallow rather than deep ( #3287 ) ( 2fd15f6 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.2 ( #3298 ) ( 1489f3a )
Update googleapis/sdk-platform-java action to v2.62.2 ( #3299 ) ( c3b05ac )
Go
1.57.0 (2025-09-23)
Features
storage/control: Add new GetIamPolicy, SetIamPolicy, and TestIamPermissions RPCs ( d73f912 )
storage: Post support dynamic key name ( #12677 ) ( 9e761f9 )
storage: WithMeterProvider allows custom meter provider configuration ( #12668 ) ( 7f574b0 )
Bug Fixes
storage: Free buffers in Bidi Reader ( #12839 ) ( bc247fd )
storage: Make Writer thread-safe. ( #12753 ) ( 9ea380b )
storage: No progress report for oneshot write ( #12746 ) ( b97c286 )
Performance Improvements
storage: Pipeline gRPC writes ( #12422 ) ( 1f2c5fe )
September 22, 2025
Libraries
Python
3.4.0 (2025-09-15)
Features
experimental: Add async grpc client ( #1537 ) ( ac57b8d )
experimental: Add grpc client ( #1533 ) ( 5674587 )
Bug Fixes
GAPIC generation failed with 'Directory not empty' ( #1542 ) ( c80d820 )
Go
1.56.2 (2025-09-15)
Bug Fixes
storage: Free buffers in Bidi Reader ( #12839 ) ( 10c8fac )
September 17, 2025
Feature
The bucket_attributes_view and bucket_attributes_latest_snapshot_view tables in Storage Insights datasets are updated with two new fields: objectCount and totalSize . objectCount reflects the total number of objects in the bucket and totalSize reflects the total size of the bucket in bytes. The tables are automatically updated with the new fields in all existing datasets and are included in all new dataset configurations.
September 15, 2025
Libraries
Java
2.57.0 (2025-09-09)
Features
Add BlobInfo.ObjectContexts ( #3259 ) ( 485aefd )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.62.1 ( 0e348db )
Update BlobAppendableUpload implementation to periodically flush for large writes ( #3278 ) ( d0ffe18 )
Update otel integration to properly activate span context for lazy RPCs such as reads & writes pt.2 ( #3277 ) ( 3240f67 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #3280 ) ( d046ea3 )
Update googleapis/sdk-platform-java action to v2.62.1 ( #3281 ) ( c9078bb )
September 10, 2025
Feature
Cloud Storage FUSE now supports buffered reads, which can improve sequential read performance for large files by two to five times. When enabled, Cloud Storage FUSE asynchronously prefetches parts of a file into an in-memory buffer, allowing subsequent reads to be served from the buffer instead of requiring network calls.
To learn more about buffered reads, see Enable buffered reads .
September 01, 2025
Libraries
Java
2.56.0 (2025-08-25)
Features
breaking behavior rewrite Storage.blobAppendableUpload to be non-blocking and have improved throughput ( #3231 ) ( 7bd73d3 )
Add AppendableUploadWriteableByteChannel#flush() ( #3261 ) ( 950c56f )
Add MinFlushSizeFlushPolicy#withMaxPendingBytes(long) ( #3231 ) ( 7bd73d3 )
Add StorageChannelUtils to provide helper methods to perform blocking read/write to/from non-blocking channels ( #3231 ) ( 7bd73d3 )
Bug Fixes
Make FlushPolicy${Min,Max}FlushSizeFlushPolicy constructors private ( #3217 ) ( 7bd73d3 )
Update BlobAppendableUploadConfig and FlushPolicy.MinFlushSizeFlushPolicy to default to 4MiB minFlushSize and 16MiB maxPendingBytes ( #3249 ) ( 7bd73d3 )
Update otel integration to properly activate span context for lazy RPCs such as reads & writes ( #3255 ) ( d6587f4 )
Dependencies
Update actions/checkout action to v5 ( #3239 ) ( 33f024b )
Update dependency com.google.apis:google-api-services-storage to v1-rev20250815-2.0.0 ( #3245 ) ( 87afe1a )
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.0 ( #3250 ) ( 0782e62 )
Python
3.3.1 (2025-08-25)
Bug Fixes
Provide option to user to set entire object checksum at "initiate a resumable upload session" and send the same.( #1525 ) ( a8109e0 )
Send part's checksum for XML MPU part upload ( #1529 ) ( 2ad77c7 )
August 28, 2025
Change
Beginning October 31, 2025, if you set an object's age condition to a value of 0 when setting Object Lifecycle Management rules, the condition is satisfied at midnight UTC after the object is created, which helps reduce unintended data loss. To learn more about the age condition, see Lifecycle conditions .
August 25, 2025
Libraries
Go
1.56.1 (2025-08-19)
Bug Fixes
storage: Fix redirect logic in MRD ( #12733 ) ( 9f369f9 )
storage: Pass all user options to NewService ( #12615 ) ( 77cdb83 )
storage: ZB Reader redirect support ( #12703 ) ( 3c7ea5c )
August 18, 2025
Libraries
Python
3.3.0 (2025-08-05)
Features
Add support for bucket IP filter ( #1516 ) ( a29073c )
Bug Fixes
Add logs on AssertionError for issue #1512 ( #1518 ) ( 6a9923e )
Documentation
Update the documentation of move_blob function ( #1507 ) ( 72252e9 )
August 12, 2025
Feature
You can now use Anywhere Cache in the asia-south1-b and asia-south1-c zones. For more information, see Anywhere Cache supported locations .
August 11, 2025
Libraries
Java
2.55.0 (2025-08-05)
Features
Add new preview Bucket encryption policy configuration ( #3204 ) ( 7b250dd )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( f98b686 )
Enable ALTS bound token (for DirectPath) in the grpc channel provider ( #2919 ) ( 38d248d )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #3213 ) ( 86ff697 )
Feature
You can now use Anywhere Cache in the asia-south1-a zone. For more information, see Anywhere Cache supported locations .
August 04, 2025
Libraries
Java
2.54.0 (2025-07-24)
Features
Add BucketInfo.IpFilter ( #3177 ) ( 14a91ec )
Add default end-to-end checksumming for JournalingBlobWriteSessionConfig #3180 ( fa0f6a0 )
Add default end-to-end crc32c checksumming for several upload methods via grpc transport #3176 ( fa0f6a0 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( bd1f199 )
Give user provided checksum precondition priority for Storage#create methods that accept byte[] #3182 ( fa0f6a0 )
Move crc32c computation before writing to disk for BufferToDiskThenUpload BlobWriteSession config #3187 ( fa0f6a0 )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20250718-2.0.0 ( #3203 ) ( 18978e4 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #3201 ) ( 782c3c4 )
Update googleapis/sdk-platform-java action to v2.60.1 ( #3196 ) ( 6ba56e5 )
July 28, 2025
Libraries
Go
1.56.0 (2025-07-24)
Features
storage/control: Update BUILD configs to support rest transportation for all client ( 116a33a )
Bug Fixes
storage: Avoid integration test segfaults. ( #12419 ) ( a9dec07 )
storage: Current object generation takeover. ( #12383 ) ( 9ca8e01 )
storage: Fix MultiRangeDownloader deadlock ( #12548 ) ( 2eb23bb )
storage: Remove object length limit for unfinalized reads ( #12489 ) ( 5566d7d )
Performance Improvements
storage: Zero copy for MultiRangeDownloader ( #12542 ) ( a5e6a68 )
Documentation
storage/internal: Fix broken link for message CustomPlacementConfig ( 9614487 )
storage: Fix typo in storage/doc.go ( #12391 ) ( bf74408 )
storage: Improve error inspection documentation ( #12301 ) ( 420da1a )
July 14, 2025
Libraries
Java
2.53.3 (2025-07-09)
Bug Fixes
Fix DefaultBlobWriteSessionConfig init to work when grpc classes are excluded ( #3147 ) ( 8571ba8 )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20250629-2.0.0 ( #3185 ) ( 4ce8281 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #3189 ) ( 7fbfb01 )
Feature
Storage Insights datasets offer the latest snapshot of the bucket and object metadata. The bucket_attributes_latest_snapshot_view and object_attributes_latest_snapshot_view views give you access to the latest metadata. Also, the events_view view has been updated with a globalManifest.snapshotTime column and an eventCode to track when the dataset was last refreshed.
July 08, 2025
Feature
You can now create caches with Anywhere Cache in the us-west3-a , us-west3-b , and us-west3-c zones. For more information about supported locations for Anywhere Cache, see Supported locations .
July 07, 2025
Libraries
Python
3.2.0 (2025-07-04)
Features
Adding support of single shot download ( #1493 ) ( 61c5d5f )
July 02, 2025
Feature
Bucket IP filtering for Cloud Storage is now generally available ( GA ). Bucket IP filtering provides enhanced control over access to your data, allowing you to restrict incoming requests to your Cloud Storage buckets based on their source IP addresses or their Google Cloud Virtual Private Cloud.
June 30, 2025
Libraries
Java
2.53.2 (2025-06-25)
Bug Fixes
Fix Journaling BlobWriteSessionConfig to properly handle multiple consecutive retries ( #3166 ) ( 895bfbd )
Dependencies
Update dependency com.google.cloud.opentelemetry:exporter-trace to v0.36.0 ( #3162 ) ( 41a1030 )
Update sdk-platform-java dependencies ( #3164 ) ( c22a131 )
June 23, 2025
Libraries
Python
3.1.1 (2025-06-13)
Bug Fixes
Add a check for partial response data ( #1487 ) ( 7e0412a )
Add trove classifier for Python 3.13 ( 0100916 )
deps: Require google-crc32c >= 1.1.3 ( 0100916 )
deps: Require protobuf >= 3.20.2, < 7.0.0 ( 0100916 )
deps: Require requests >= 2.22.0 ( 0100916 )
Remove setup.cfg configuration for creating universal wheels ( #1448 ) ( d3b6b3f )
Resolve issue where pre-release versions of dependencies are installed ( 0100916 )
Segmentation fault in tink while writing data ( #1490 ) ( 2a46c0b )
Documentation
Move quickstart to top of readme ( #1451 ) ( 53257cf )
Update README to break infinite redirect loop ( #1450 ) ( 03f1594 )
Java
2.53.1 (2025-06-18)
Bug Fixes
Cancel the future in RemoteStorageHelper#forceDelete when TimeoutException happens ( #3136 ) ( e6007d5 )
deps: Update the Java code generator (gapic-generator-java) to 2.59.0 ( 7dba9f0 )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20250605-2.0.0 ( #3143 ) ( 17a80d8 )
Update sdk-platform-java dependencies ( #3152 ) ( 2f78192 )
Feature
The Cloud Storage Cloud Audit Logs have expanded support to include error scenario coverage and produce a more comprehensive error message with code, error messages, and details, in an easy to understand format. The Gemini Cloud Assist (GCA) service can then easily analyze the log and provide tailored recommendations on how to mitigate issues as they arise. Before this enhancement, error logs were generated for only a specific set of scenarios, and the status field solely contained the gRPC error code without any additional information. To learn more about Cloud Audit Logs, see Cloud Audit Logs overview .
June 16, 2025
Feature
Cloud Storage FUSE version 3.0 is now available with new features and enhancements designed to improve performance and simplify configuration. Improvements include automated configurations for high-performance machines , a comprehensive performance tuning guide to help optimize performance, and the new global-max-blocks configuration option , which gives you granular control over streaming write operations.
June 09, 2025
Libraries
Java
2.53.0 (2025-06-04)
Features
Expose BucketInfo.getProject as a BigInteger ( #3119 ) ( 64bbb60 ), closes #3023
storagecontrol: Add Anywhere cache control APIs ( 06572b7 )
storagecontrol: Add Client Libraries Storage IntelligenceConfig ( 06572b7 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.58.0 ( 06572b7 )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20250521-2.0.0 ( #3118 ) ( e1be49e )
Update dependency com.google.apis:google-api-services-storage to v1-rev20250524-2.0.0 ( #3127 ) ( 2a4499d )
Update sdk-platform-java dependencies ( #3129 ) ( 31cd058 )
Documentation
Add explicit Optional annotations to fields that have always been treated as optional ( 53b6927 )
Add note that Bucket.project output format is always project number format ( 53b6927 )
Add note that managedFolders are supported for GetIamPolicy and SetIamPolicy ( 53b6927 )
June 05, 2025
Change
The limit for the maximum number of prefixes and suffixes when using matchesPrefix and matchesSuffix lifecycle conditions across all rules on a bucket is increased from 50 to 1,000. For more information, see Quotas and limits .
June 02, 2025
Libraries
Go
1.55.0 (2025-05-29)
Features
storage/control: Add Client Libraries Storage IntelligenceConfig ( 2aaada3 )
storage/internal: Add IpFilter to Bucket ( #12309 ) ( d8ae687 )
storage/internal: Add Object.Retention message ( d8ae687 )
Bug Fixes
storage: Add EnableNewAuthLibrary internalOption to HTTP newClient ( #12320 ) ( 0036073 )
storage: Migrate oauth2/google usages to cloud.google.com/go/auth ( #11191 ) ( 3a22349 )
storage: Omit check on MultiRangeDownloader ( #12342 ) ( 774621c )
storage: Retry url.Error and net.OpErrors when they wrap an io.EOF ( #12289 ) ( 080f6b0 )
Documentation
storage/internal: Add explicit Optional annotations to fields that have always been treated as optional ( d8ae687 )
storage/internal: Add note that Bucket.project output format is always project number format ( d8ae687 )
storage/internal: Add note that managedFolders are supported for GetIamPolicy and SetIamPolicy ( d8ae687 )
May 26, 2025
Libraries
Java
2.52.3 (2025-05-19)
Bug Fixes
Update grpc client side metrics detection to be graceful when not running on gcp ( #3097 ) ( 10cd32d )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20250509-2.0.0 ( #3103 ) ( 1fd1090 )
Update sdk-platform-java dependencies ( #3102 ) ( 3b53b94 )
May 19, 2025
Libraries
Go
1.54.0 (2025-05-12)
Features
storage: Add experimental ZB API option ( #12214 ) ( f669982 )
Bug Fixes
storage: Fix append writer hang ( #12201 ) ( 7ce2a2a )
storage: Retry unwrapped EOFs ( #12202 ) ( b2d42bd )
May 12, 2025
Libraries
Java
2.52.2 (2025-05-06)
Bug Fixes
Fix a possible NPE that could happen when shutting down a grpc Storage instance ( #3089 ) ( 56f5d0a )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20250424-2.0.0 ( #3084 ) ( c7afbde )
Update sdk-platform-java dependencies ( #3087 ) ( 762ca13 )
May 05, 2025
Libraries
Java
2.52.0 (2025-04-28)
[!IMPORTANT]
This release has a direct memory leak when using a StorageOptions.grpc() instance and performing downloads.
Please update to 2.52.1 or later which contains the fix.
Features
Add Storage.BlobListOption#includeTrailingDelimiter ( #3038 ) ( 0b7a0df )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 74c46dd )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20250416-2.0.0 ( #3063 ) ( d496d5b )
Update dependency com.google.apis:google-api-services-storage to v1-rev20250420-2.0.0 ( #3070 ) ( 1ef50f2 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #3061 ) ( cb43a6c )
Update googleapis/sdk-platform-java action to v2.56.2 ( #3055 ) ( 7025ad7 )
Java
2.52.1 (2025-05-01)
Bug Fixes
Fix grpc ReadObject memory leak introduced in 2.51.0 ( #3080 ) ( 7057629 )
Go
1.53.0 (2025-05-02)
Features
storage/control: Add Anywhere cache control APIs ( 83ae06c )
Bug Fixes
storage: Fix append edge cases ( #12074 ) ( 0eee1f9 )
storage: Fix retries for redirection errors. ( #12093 ) ( 3e177e7 )
storage: Handle gRPC deadlines in tests. ( #12092 ) ( 30b7cd2 )
storage: Update offset on resumable upload retry ( #12086 ) ( 6ce8fe5 )
storage: Validate Bidi option for MRD ( #12033 ) ( d9018cf )
Documentation
storage/control: Added comments for Anywhere cache messages ( 83ae06c )
April 28, 2025
Libraries
Go
1.52.0 (2025-04-22)
Features
storage/control: Add Anywhere cache control APIs ( #11807 ) ( 12bfa98 )
storage: Add CurrentState function to determine state of stream in MRD ( #11688 ) ( 14e8e13 )
storage: Add OwnerEntity to bucketAttrs ( #11857 ) ( 4cd4a0c )
storage: Takeover appendable object ( #11977 ) ( 513b937 )
storage: Unfinalized appendable objects. ( #11647 ) ( 52c0218 )
Bug Fixes
storage: Fix Attrs for append takeover ( #11989 ) ( 6db35b1 )
storage: Fix panic when Flush called early ( #11934 ) ( 7d0b8a7 )
storage: Fix unfinalized write size ( #12016 ) ( 6217f8f )
storage: Force first message on next sendBuffer when nothing sent on current ( #11871 ) ( a1a2292 )
storage: Populate Writer.Attrs after Flush() ( #12021 ) ( 8e56f74 )
storage: Remove check for FinalizeOnClose ( #11992 ) ( 2664b8c )
storage: Wrap read response parsing errors ( #11951 ) ( d2e6583 )
Java
2.51.0 (2025-04-23)
[!IMPORTANT]
This release has a direct memory leak when using a StorageOptions.grpc() instance and performing downloads.
Please update to 2.52.1 or later which contains the fix.
Features
Add @BetaApi Storage#blobAppendableUpload for gRPC Transport ( #3020 ) ( 62b6248 )
Add @BetaApi Storage#blobReadSession for gRPC Transport ( #3020 ) ( 62b6248 )
Implement improved retry context information ( #3020 ) ( 62b6248 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.56.0 ( 8f9f5ec )
Ensure object generation is sent for Storage#update(BlobInfo) using HTTP Transport ( #3006 ) ( 2a3e0e7 ), closes #2980
Update 416 handling for ReadChannel ( #3018 ) ( 4a9c3e4 )
Update gRPC Bidi resumable upload to have more robust error message generation ( #2998 ) ( 79b5d85 )
Update gRPC implementation for storage.buckets.get to translate NOT_FOUND to null ( #3005 ) ( 704af65 )
Dependencies
Remove explicit version declarations for packages that are in shared-dependencies ( #3014 ) ( 61cdb30 )
Update dependency com.google.apis:google-api-services-storage to v1-rev20250312-2.0.0 ( #3000 ) ( 78fc076 )
Update dependency com.google.cloud.opentelemetry:exporter-trace to v0.34.0 ( #2938 ) ( ff6f696 )
Update sdk-platform-java dependencies ( #3046 ) ( 861f958 )
Update sdk-platform-java dependencies ( #3053 ) ( 921d1ba )
April 17, 2025
Change
Best practices for using Cloud Storage with media workloads are now available.
March 31, 2025
Feature
You can now use metrics to monitor Cloud Storage FUSE performance. For more information, see Cloud Storage FUSE metrics .
Feature
Storage batch operations for Cloud Storage is now generally available ( GA ). Using storage batch operations, you can perform operations on billions of Cloud Storage objects in a serverless manner. To learn more about storage batch operations, see Overview of storage batch operations .
Change
Additional functionality is now available for the bucket IP filtering feature:
You can use IP filtering for buckets in all regions , dual-regions , and multi-regions .
You can use custom organization policies to enforce IP filtering.
March 21, 2025
Feature
Cross-bucket replication is now generally available ( GA ). You can use cross-bucket replication to copy new and updated objects asynchronously from a source bucket to a destination bucket.
Feature
Storage Intelligence for Cloud Storage is now generally available ( GA ). Storage Intelligence simplifies data management in Cloud Storage at scale by providing a unified platform for data exploration, cost optimization, security enforcement, and governance implementation. To learn more about Storage Intelligence, see Overview of Storage Intelligence .
Feature
Storage Insights datasets is now generally available ( GA ). Storage Insights datasets helps you get insights for your Cloud Storage resources and export the data to BigQuery. Storage Insights datasets is an exclusive feature only available through the Storage Intelligence subscription. To learn more about Storage Insights, see Overview of Storage Insights datasets .
March 17, 2025
Libraries
Go
1.51.0 (2025-03-12)
Features
storage/append: Support appends in w1r3. ( #11483 ) ( 48bb391 )
storage: Benchmark with experimental MRD. ( #11501 ) ( 7b49152 )
storage: Implement RetryChunkDeadline for grpc writes ( #11476 ) ( 03575d7 )
storage: Specify benchmark integrity check. ( #11465 ) ( da18845 )
storage: Use ReadHandle for faster re-connect ( #11510 ) ( cac52f7 )
storage: Wrap NotFound errors for buckets and objects ( #11519 ) ( 0dd7d3d )
Bug Fixes
storage/append: Report progress for appends. ( #11503 ) ( 96dbb6c )
storage: Add a safety check for readhandle ( #11549 ) ( c9edb37 )
storage: Add universe domain to defaultSignBytesFunc ( #11521 ) ( 511608b )
storage: Clone the defaultRetry to avoid modifying it directly ( #11533 ) ( 7f8d69d )
storage: Fix adding multiple range on stream with same read id ( #11584 ) ( 0bb3434 )
storage: Modify the callback of mrd to return length of data read instead of limit. ( #11687 ) ( 9e359f0 )
storage: Propagate ctx from invoke to grpc upload reqs ( #11475 ) ( 9ad9d76 )
storage: Remove duplicate routing header ( #11534 ) ( 8eeb59c )
storage: Return sentinel ErrObjectNotExist for copy and compose ( #11369 ) ( 74d0c10 ), refs #10760
storage: Wait for XML read req to finish to avoid data races ( #11527 ) ( 782e12a )
Java
2.50.0 (2025-03-14)
Features
Next release from main branch is 2.50.0 ( #2968 ) ( 4a69fcc )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 22e7e3d )
deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( 81c8c61 )
Improve 503 handling for json resumable uploads ( #2987 ) ( 9bc2b14 )
Update usages of String.format to explicitly pass Locale.US ( #2974 ) ( 8bcb2de ), closes #2972
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20250224-2.0.0 ( #2969 ) ( 80a40c4 )
Update googleapis/sdk-platform-java action to v2.55.1 ( #2985 ) ( e22a2de )
Update sdk-platform-java dependencies ( #2983 ) ( 9eeb82a )
Update sdk-platform-java dependencies ( #2986 ) ( 10b922a )
Feature
Cloud Storage now offers the DE configurable dual-region code, which can be used when creating a dual-region bucket in europe-west3 (Frankfurt) and europe-west10 (Berlin). To learn more about Cloud Storage configurable dual-regions, see Configurable dual-regions
March 13, 2025
Feature
Anywhere Cache for Cloud Storage is now generally available (GA) . Anywhere Cache enables you to create SSD-backed caches in the same zones as your workloads, helping you get access to your data faster and avoid multi-region data transfer fees. To learn more about Anywhere Cache, see Overview of Anywhere Cache .
March 05, 2025
Feature
Configurable dual-regions now include the Turin, Italy ( europe-west12 ) region. For more information, see Cloud Storage configurable dual-regions .
March 04, 2025
Feature
Cloud Storage now offers support in the Stockholm, Sweden ( europe-north2 ) region. To learn more about supported locations, see Cloud Storage bucket locations .
March 03, 2025
Libraries
Java
2.49.0 (2025-02-26)
Features
Add new Options to allow per method header values ( #2941 ) ( 297802d )
transfer-manager: Add ParallelUploadConfig.Builder#setUploadBlobInfoFactory ( #2936 ) ( 86e9ae8 ), closes #2638
Bug Fixes
Categorize a WatchdogTimeoutException as retriable for grpc ReadObject ( #2954 ) ( b53bd53 )
deps: Update the Java code generator (gapic-generator-java) to 2.53.0 ( 9946d6b )
Update grpc based Storage to defer project id validation ( #2930 ) ( cc03784 )
Update kms key handling when opening a resumable upload to clear the value in the json to be null rather than empty string ( #2939 ) ( 43553de )
Dependencies
Update sdk-platform-java dependencies ( #2957 ) ( 40cfda6 )
Documentation
Add note about HNS support to moveBlob ( #2929 ) ( c461546 )
Python
3.1.0 (2025-02-27)
Features
Add api_key argument to Client constructor ( #1441 ) ( c869e15 )
Add Bucket.move_blob() for HNS-enabled buckets ( #1431 ) ( 24c000f )
February 26, 2025
Feature
Bucket relocation for Cloud Storage is generally available ( GA ). You can use bucket relocation to relocate buckets between geographic locations.
February 24, 2025
Feature
The Objects: move method supports moving objects in both flat and hierarchical namespace buckets.
February 17, 2025
Libraries
Java
2.48.2 (2025-02-11)
Dependencies
Update sdk-platform-java dependencies ( #2921 ) ( fa9b0a8 )
Documentation
Update storage_copy_file to include MegabytesCopiedPerChunk ( #2910 ) ( 971ca5d )
February 10, 2025
Libraries
Java
2.48.1 (2025-02-03)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.52.0 ( 00754bc )
Update batch handling to ensure each operation has its own unique idempotency-token ( #2905 ) ( 8d79b8d )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.42.0 ( #2895 ) ( 145afb0 )
Update dependency com.google.cloud.opentelemetry:exporter-trace to v0.33.0 ( #2904 ) ( 2a5242e )
Documentation
Create OpenTelemetry Quickstart Sample ( #2861 ) ( 31df9b7 )
February 05, 2025
Announcement
Announced billing changes for accessing Cloud Storage through BigQuery take effect Feb 21, 2025. These changes were originally set to take effect on February 01, 2025.
February 03, 2025
Libraries
Java
2.48.0 (2025-01-27)
Features
Add new Storage#moveBlob method to atomically rename an object ( #2882 ) ( c49fd08 )
Next release from main branch is 2.48.0 ( #2885 ) ( 34e5903 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.51.1 ( 09ed029 )
Update Signed URL default scheme to resolve from storage options host ( #2880 ) ( 7ae7e39 ), closes #2870
Update StorageException translation of an ApiException to include error details ( #2872 ) ( 8ad5010 )
Dependencies
Update dependency com.google.cloud.opentelemetry:exporter-trace to v0.33.0 ( #2873 ) ( 39509d5 )
Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.52.0 ( #2883 ) ( a64a3d5 )
Python
3.0.0 (2025-01-28)
⚠ BREAKING CHANGES
Please consult the README for details on this major version release.
The default checksum strategy for uploads has changed from None to "auto" ( #1383 )
The default checksum strategy for downloads has changed from "md5" to "auto" ( #1383 )
Deprecated positional argument "num_retries" has been removed ( #1377 )
Deprecated argument "text_mode" has been removed ( #1379 )
Blob.download_to_filename() now deletes the empty destination file on a 404 ( #1394 )
Media operations now use the same retry backoff, timeout and custom predicate system as non-media operations, which may slightly impact default retry behavior ( #1385 )
Retries are now enabled by default for uploads, blob deletes and blob metadata updates ( #1400 )
Features
Add "auto" checksum option and make default ( #1383 ) ( 5375fa0 )
Blob.download_to_filename() deletes the empty destination file on a 404 ( #1394 ) ( 066be2d )
Enable custom predicates for media operations ( #1385 ) ( f3517bf )
Integrate google-resumable-media ( #1283 ) ( bd917b4 )
Retry by default for uploads, blob deletes, metadata updates ( #1400 ) ( 0426005 )
Bug Fixes
Cancel upload when BlobWriter exits with exception ( #1243 ) ( df107d2 )
Changed name of methods Blob.from_string() and Bucket.from_string() to from_uri() ( #1335 ) ( 58c1d03 )
Correctly calculate starting offset for retries of ranged reads ( #1376 ) ( 7b6c9a0 )
Filter download_kwargs in BlobReader ( #1411 ) ( 0c21210 )
Remove deprecated num_retries argument ( #1377 ) ( 58b5040 )
Remove deprecated text_mode argument ( #1379 ) ( 4d20a8e )
Documentation
Correct formatting and update README.rst ( #1427 ) ( 2945853 )
Fix issue with exceptions.py documentation ( #1328 ) ( 22b8c30 )
January 31, 2025
Feature
You can now enable client-side traces with OpenTelemetry when you use Cloud Storage client libraries. To learn more about how client-side traces work and how to configure tracing for your application, see Use client-side traces .
January 13, 2025
Libraries
Java
2.47.0 (2025-01-08)
Features
Add MoveObject RPC ( 34b8ac4 )
Introductory beta level support for OpenTelemetry tracing on c.g.c.storage.Storage methods ( #2837 ) ( dd889ea )
Bug Fixes
De-beta storage-v2 artifacts ( #2852 ) ( 77a2e8a )
deps: Update the Java code generator (gapic-generator-java) to 2.51.0 ( 34b8ac4 )
Fix interrupt spiral in grpc ReadObject drainQueue ( #2850 ) ( c1dac83 )
Update request handling of gRPC based CopyWriter ( #2858 ) ( 093cb87 )
Dependencies
Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.51.0 ( #2860 ) ( 980ac4e )
Update googleapis/sdk-platform-java action to v2.51.1 ( #2864 ) ( b731c06 )
Update sdk-platform-java dependencies ( #2866 ) ( 562df7f )
Go
1.50.0 (2025-01-09)
Features
storage/internal: Add new appendable Object to BidiWrite API ( 2e4feb9 )
storage/internal: Add new preview BidiReadObject API ( 2e4feb9 )
storage: Add support for gRPC bi-directional multi-range reads. This API is in private preview and not generally and is not yet available for general use. ( #11377 ) ( b4d86a5 )
storage: Add support for ReadHandle, a gRPC feature that allows for accelerated resumption of streams when one is interrupted. ReadHandle requires the bi-directional read API, which is in private preview and is not yet available for general use. ( #11377 ) ( b4d86a5 )
storage: Support appendable semantics for writes in gRPC. This API is in preview. ( #11377 ) ( b4d86a5 )
storage: Refactor gRPC writer flow ( #11377 ) ( b4d86a5 )
Bug Fixes
storage: Add mutex around uses of mrd variables ( #11405 ) ( 54bfc32 )
storage: Return the appropriate error for method not supported ( #11416 ) ( 56d704e )
Documentation
storage/internal: Add IAM information to RPC comments for reference documentation ( 2e4feb9 )
storage: Add preview comment to NewMultiRangeDownloader ( #11420 ) ( 4ec1d66 )
December 23, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for storage/internal/apiv2
1.49.0 (2024-12-21)
Features
storage/internal: Add finalize_time field in Object metadata ( 46fc993 )
storage/internal: Add MoveObject RPC ( 46fc993 )
storage: Add ObjectHandle.Move method ( #11302 ) ( a3cb8c4 )
storage: Return file metadata on read ( #11212 ) ( d49263b )
Bug Fixes
storage/dataflux: Address deadlock when reading from ranges ( #11303 ) ( 32cbf56 )
storage: Disable allow non-default credentials flag ( #11337 ) ( 145ddf4 )
storage: Monitored resource detection ( #11197 ) ( 911bcd8 )
storage: Update golang.org/x/net to v0.33.0 ( e9b0b69 )
December 16, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-storage
2.46.0 (2024-12-13)
Features
Introduce java.time methods and variables ( #2826 ) ( baf30ee )
Bug Fixes
Update retry lifecycle when attempting to decompress a gzip object ( #2840 ) ( 7dba13c )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20241113-2.0.0 ( #2823 ) ( 503e518 )
Update dependency com.google.apis:google-api-services-storage to v1-rev20241206-2.0.0 ( #2839 ) ( 8f3cdd3 )
Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.50.0 ( #2825 ) ( 9aa68a6 )
Update sdk-platform-java dependencies ( #2841 ) ( 2a70481 )
Documentation
Add samples for soft delete (objects) ( #2754 ) ( 41bc807 )
Python
Changes for google-cloud-storage
3.0.0rc1 (2024-12-12)
⚠ BREAKING CHANGES
The default checksum strategy for uploads has changed from None to "auto" ( #1383 ) (5375fa0)
The default checksum strategy for downloads has changed from "md5" to "auto" ( #1383 ) (5375fa0)
Deprecated positional argument "num_retries" has been removed ( #1377 ) (58b5040)
Deprecated argument "text_mode" has been removed ( #1379 ) (4d20a8e)
Media operation retries now work identically to other retries, which may impact default retry settings ( #1385 ) (f3517bf)
Blob.download_to_filename() deletes the empty destination file on a 404
Features
Add "auto" checksum option and make default ( #1383 ) ( 5375fa0 )
Blob.download_to_filename() deletes the empty destination file on a 404 ( 066be2d )
Deprecated argument "text_mode" has been removed ( #1379 ) (4d20a8e) ( 4e9a382 )
Deprecated positional argument "num_retries" has been removed ( #1377 ) (58b5040) ( 4e9a382 )
Enable custom predicates for media operations ( #1385 ) ( f3517bf )
Integrate google-resumable-media ( #1283 ) ( bd917b4 )
Media operation retries now work identically to other retries, which may impact default retry settings ( #1385 ) (f3517bf) ( 4e9a382 )
The default checksum strategy for downloads has changed from "md5" to "auto" ( #1383 ) (5375fa0) ( 4e9a382 )
The default checksum strategy for uploads has changed from None to "auto" ( #1383 ) (5375fa0) ( 4e9a382 )
Bug Fixes
Cancel upload when BlobWriter exits with exception ( #1243 ) ( df107d2 )
Changed name of methods Blob.from_string() and Bucket.from_string() to from_uri() ( #1335 ) ( 58c1d03 )
Correctly calculate starting offset for retries of ranged reads ( #1376 ) ( 7b6c9a0 )
Remove deprecated num_retries argument ( #1377 ) ( 58b5040 )
Remove deprecated text_mode argument ( #1379 ) ( 4d20a8e )
Documentation
Fix issue with exceptions.py documentation ( #1328 ) ( 22b8c30 )
December 09, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for storage/internal/apiv2
1.48.0 (2024-12-05)
Features
storage/dataflux: Run worksteal listing parallel to sequential listing ( #10966 ) ( 3005f5a )
storage: Add Writer.ChunkTransferTimeout ( #11111 ) ( fd1db20 )
storage: Allow non default service account ( #11137 ) ( 19f01c3 )
Bug Fixes
storage: Add backoff to gRPC write retries ( #11200 ) ( a7db927 )
storage: Correct direct connectivity check ( #11152 ) ( a75c8b0 )
storage: Disable soft delete policy using 0 retentionDurationSeconds ( #11226 ) ( f087721 )
storage: Retry SignBlob call for URL signing ( #11154 ) ( f198452 )
Python
Changes for google-cloud-storage
2.19.0 (2024-11-21)
Features
Add integration test for universe domain ( #1346 ) ( 02a972d )
Add restore_bucket and handling for soft-deleted buckets ( #1365 ) ( ab94efd )
Add support for restore token ( #1369 ) ( 06ed15b )
IAM signBlob retry and universe domain support ( #1380 ) ( abc8061 )
Bug Fixes
Allow signed post policy v4 with service account and token ( #1356 ) ( 8ec02c0 )
Do not spam the log with checksum related INFO messages when downloading using transfer_manager ( #1357 ) ( 42392ef )
November 25, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-storage
2.45.0 (2024-11-18)
Features
Adds support for restore token ( aef367d )
Adds support for restore token ( #2768 ) ( 0394354 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.49.0 ( aef367d )
deps: Update the Java code generator (gapic-generator-java) to 2.50.0 ( 281cccb )
Set default values for monitored resource ( #2809 ) ( 27829a4 )
Dependencies
Update sdk-platform-java dependencies ( #2817 ) ( 9e961c4 )
November 18, 2024
Change
Cloud Storage is now available in Querétaro, Mexico ( northamerica-south1 region). For more information, see Cloud Storage regions .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for storage/internal/apiv2
1.47.0 (2024-11-14)
Features
storage: Introduce dp detector based on grpc metrics ( #11100 ) ( 60c2323 )
Bug Fixes
storage: Bump auth dep ( #11135 ) ( 9620a51 )
November 15, 2024
Change
You can now use the x-amz-decoded-content-length header to allow an XML API upload that uses chunked transfer encoding to include a signature in its Authorization header.
November 07, 2024
Feature
You can now restore soft-deleted buckets. If you delete a bucket with an active soft delete policy, Cloud Storage retains the bucket for the specified soft delete retention duration, during which the bucket can be restored to a live state. To learn more about the bucket restore feature, see Use soft-deleted buckets .
November 04, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/storage
7.14.0 (2024-10-29)
Features
Add support for restore token ( #2548 ) ( 8241e91 )
Adds integration tests for Universe Domain configuration ( #2538 ) ( 53db6ba )
Adds integration tests for Universe Domain configuration with ( 53db6ba )
storage: Add support for 'skipIfExists' option for downloadMany ( #2526 ) ( 729efb2 )
Go
Changes for storage/internal/apiv2
1.46.0 (2024-10-31)
Features
storage: Add grpc metrics experimental options ( #10984 ) ( 5b7397b )
Bug Fixes
storage: Skip only specific transport tests. ( #11016 ) ( d40fbff )
storage: Update google.golang.org/api to v0.203.0 ( 8bb87d5 )
storage: WARNING: On approximately Dec 1, 2024, an update to Protobuf will change service registration function signatures to use an interface instead of a concrete type in generated .pb.go files. This change is expected to affect very few if any users of this client library. For more information, see https://togithub.com/googleapis/google-cloud-go/issues/11020. ( 2b8ca4b )
Miscellaneous Chores
storage/internal: Remove notification, service account, and hmac RPCS. These API have been migrated to Storage Control and are available via the JSON API. ( #11008 ) ( e0759f4 )
October 29, 2024
Change
Data Access logs are now compatible with all authenticated browser downloads .
When an authenticated browser download occurs outside of the Google Cloud console, a resulting Data Access log has its principalEmail and callerIp fields redacted.
October 28, 2024
Change
Additional functionality is now available for the Object Retention Lock and Bucket Lock features:
You can now enable Object Retention Lock on existing buckets using the Console .
Enabling Object Retention Lock on a bucket will cause a lien to be placed, at best effort, on the project containing the bucket.
Buckets can now have Bucket Lock and Object Versioning enabled at the same time.
Feature
You can now use the Google Cloud console to get soft delete recommendations for buckets. Soft delete recommendations help you determine when it's best to enable or disable the soft delete feature on a bucket based on impact to cost and security.
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-storage
2.44.1 (2024-10-25)
Dependencies
Update sdk-platform-java dependencies ( #2795 ) ( aeb86e5 )
2.44.0 (2024-10-23)
Features
Promote gRPC transport to GA ( #2766 ) ( 41fd72a )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.47.0 ( c517798 )
Fix createFrom resumable upload retry offset calculation ( #2771 ) ( 1126cdc ), closes #2770
Update gRPC ReadObject retry to avoid double retry ( #2765 ) ( 1fc57b9 )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20241008-2.0.0 ( #2776 ) ( 0545b5e )
Update dependency com.google.cloud:sdk-platform-java-config to v3.38.0 ( #2787 ) ( a470e88 )
Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.48.0 ( #2781 ) ( 8fa013e )
Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.49.0 ( #2782 ) ( a7baffb )
Update googleapis/sdk-platform-java action to v2.48.0 ( #2786 ) ( 2893e61 )
October 23, 2024
Announcement
Announced billing changes for BigQuery users who are accessing Cloud Storage will now take effect February 1, 2025. These changes were originally set to take effect November 1, 2024.
October 22, 2024
Feature
You can now emit client-side metrics for gRPC. To learn which metrics are supported and how to emit them, see Use gRPC client-side metrics .
Feature
Connecting to Cloud Storage using gRPC is generally available ( GA ). You can use gRPC to interact with Cloud Storage.
October 21, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for storage/internal/apiv2
1.45.0 (2024-10-17)
Features
storage/internal: Adds support for restore token ( 70d82fe )
storage: Adding bucket-specific dynamicDelay ( #10987 ) ( a807a7e )
storage: Dynamic read request stall timeout ( #10958 ) ( a09f00e )
Documentation
storage: Remove preview wording from NewGRPCClient ( #11002 ) ( 40c3a5b )
October 15, 2024
Feature
Hierarchical namespace for Cloud Storage buckets is generally available ( GA ). With hierarchical namespace, you can store your data in a logical file system structure.
October 14, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-storage
2.43.2 (2024-10-08)
Bug Fixes
Plumb list blobs match glob option for grpc transport ( #2759 ) ( 207abd1 )
Dependencies
Update dependency com.google.api:gapic-generator-java to v2.47.0 ( #2750 ) ( 9041f24 )
Update dependency com.google.apis:google-api-services-storage to v1-rev20240924-2.0.0 ( #2719 ) ( 7b19831 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.37.0 ( #2751 ) ( 003d6fa )
Update googleapis/sdk-platform-java action to v2.47.0 ( #2749 ) ( befa415 )
October 07, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for storage/internal/apiv2
1.44.0 (2024-10-03)
Features
storage/dataflux: Add dataflux interface ( #10748 ) ( cb7b0a1 )
storage/dataflux: Add range_splitter #10748 ( #10899 ) ( d49da26 )
storage/dataflux: Add worksteal algorithm to fast-listing ( #10913 ) ( 015b52c )
storage/internal: Add managed folder to testIamPermissions method ( 2f0aec8 )
storage/transfermanager: Add option to StripPrefix on directory download ( #10894 ) ( 607534c )
storage/transfermanager: Add SkipIfExists option ( #10893 ) ( 7daa1bd )
storage/transfermanager: Checksum full object downloads ( #10569 ) ( c366c90 )
storage: Add direct google access side-effect imports by default ( #10757 ) ( 9ad8324 )
storage: Add full object checksum to reader.Attrs ( #10538 ) ( 245d2ea )
storage: Add support for Go 1.23 iterators ( 84461c0 )
storage: Add update time in bucketAttrs ( #10710 ) ( 5f06ae1 ), refs #9361
storage: GA gRPC client ( #10859 ) ( c7a55a2 )
storage: Introduce gRPC client-side metrics ( #10639 ) ( 437bcb1 )
storage: Support IncludeFoldersAsPrefixes for gRPC ( #10767 ) ( 65bcc59 )
Bug Fixes
storage/transfermanager: Correct Attrs.StartOffset for sharded downloads ( #10512 ) ( 01a5cbb )
storage: Add retryalways policy to encryption test ( #10644 ) ( 59cfd12 ), refs #10567
storage: Add unknown host to retriable errors ( #10619 ) ( 4ec0452 )
storage: Bump dependencies ( 2ddeb15 )
storage: Bump google.golang.org/grpc@v1.64.1 ( 8ecc4e9 )
storage: Check for grpc NotFound error in HMAC test ( #10645 ) ( 3c8e88a )
storage: Disable grpc metrics using emulator ( #10870 ) ( 35ad73d )
storage: Retry gRPC DEADLINE_EXCEEDED errors ( #10635 ) ( 0018415 )
storage: Update dependencies ( 257c40b )
storage: Update google.golang.org/api to v0.191.0 ( 5b32644 )
Performance Improvements
storage: GRPC zerocopy codec ( #10888 ) ( aeba28f )
Documentation
storage/internal: Clarify possible objectAccessControl roles ( 2f0aec8 )
storage/internal: Update dual-region bucket link ( 2f0aec8 )
September 30, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-storage
2.43.1 (2024-09-26)
Bug Fixes
Add managed folder to testIamPermissions method ( 556dd95 )
deps: Update the Java code generator (gapic-generator-java) to 2.46.0 ( 556dd95 )
Remove server unimplemented GrpcStorageImpl#{get,list,create,delete,Update}HmacKey ( #2717 ) ( 06f7292 )
Remove server unimplemented GrpcStorageImpl#{get,list,create,delete}Notification ( #2710 ) ( 310c9b2 )
Remove server unimplemented GrpcStorageImpl#getServiceAccount ( #2718 ) ( 51076a8 )
Update grpc based ReadObject rpcs to remove race condition between cancellation and message handling ( #2708 ) ( 2c7f088 )
Update grpc upload error diagnostics to be tolerant of receiving an error if no request has been sent ( #2732 ) ( fff72d5 )
Update GrpcStorageOptions to attempt direct path by default ( #2715 ) ( 9de9a92 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.36.0 ( #2721 ) ( 11f09fe )
Update dependency com.google.cloud:sdk-platform-java-config to v3.36.1 ( #2738 ) ( eb320e1 )
Update googleapis/sdk-platform-java action to v2.46.1 ( #2736 ) ( 795f2c3 )
September 25, 2024
Feature
Cross-bucket replication is now available in Cloud Storage. You can use cross-bucket replication to copy new and updated objects asynchronously from a source bucket to a destination bucket. For more information on how to use cross-bucket replication, see Using cross-bucket replication .
September 24, 2024
Feature
Cloud Storage is now enabled for use with Cloud KMS Autokey.
Using keys generated by Autokey can help you consistently align with industry
standards and recommended practices for data security, including the HSM
protection level, separation of duties, key rotation, location, and key
specificity. Keys requested using Autokey function identically to other
Cloud HSM keys with the same settings.
For more information, see Customer-managed encryption keys . To learn more
about Cloud KMS Autokey, see
Autokey overview .
September 23, 2024
Feature
You can now use hierarchical namespace with Cloud Storage FUSE. To learn more about how mounting buckets with hierarchical namespace enabled can help improve performance, see Mount buckets with hierarchical namespace enabled .
Change
In order to set a bucket to store Cloud Storage usage logs and storage logs , the bucket must now reside within the same organization as the bucket being logged.
If the bucket being logged is not associated with an organization, then the bucket storing the logs must reside within the same project instead.
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/storage
7.13.0 (2024-09-17)
Features
storage: Add support for 'fields' query parameter to getFiles ( #2521 ) ( f78fe92 )
Bug Fixes
retry: Export RETRYABLE_ERR_FN_DEFAULT ( #2517 ) ( db890fd )
Java
Changes for google-cloud-storage
2.43.0 (2024-09-13)
Features
Allow specifying an expected object size for resumable operations. ( #2661 ) ( 3405611 ), closes #2511
Bug Fixes
Close pending zero-copy responses when Storage#close is called ( #2696 ) ( 1855308 )
GitHub workflow vulnerable to script injection ( #2663 ) ( 9151ac2 )
Make ParallelCompositeUploadBlobWriteSessionConfig.ExecutorSupplier#cachedPool a singleton ( #2691 ) ( 1494809 )
Dependencies
Promote storage-v2 artifacts to beta ( 9d22597 )
Update dependency com.google.apis:google-api-services-storage to v1-rev20240819-2.0.0 ( #2665 ) ( 3df1000 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.35.0 ( #2698 ) ( 1dd51c3 )
September 11, 2024
Feature
You can now specify United States regions when using regional endpoints .
September 09, 2024
Feature
You can now use the Google Cloud console to do the following:
Create buckets with hierarchical namespace enabled. To learn more, see Create a bucket .
Create and manage folders in buckets with hierarchical namespace enabled. To learn more, see Create and manage folders .
Rename and move folders. To learn more, see Rename and move folders .
August 26, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-storage
2.42.0 (2024-08-19)
Features
Enable grpc.lb.locality label for client-side metrics ( #2659 ) ( b681ee0 )
Bug Fixes
Update modified field handling for blob and bucket with json transport to properly clear fields ( #2664 ) ( e2f5537 ), closes #2662
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.34.0 ( #2673 ) ( 453c29a )
Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.45.0 ( #2667 ) ( 1f66dff )
August 12, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/storage
7.12.1 (2024-08-07)
Bug Fixes
deps: Update fast-xml-parser to 4.4.1 due to security vulnerability ( #2505 ) ( b97d474 )
Python
Changes for google-cloud-storage
2.18.2 (2024-08-08)
Bug Fixes
Add regression test for range read retry issue and bump dependency to fix ( #1338 ) ( 0323647 )
2.18.1 (2024-08-05)
Bug Fixes
Properly escape URL construction for XML MPU API ( #1333 ) ( bf4d0e0 )
August 05, 2024
Feature
You can now use parallel downloads with Cloud Storage FUSE to accelerate read performance of large files over 1 GB in size. When enabled, parallel downloads use multiple workers to download a file in parallel, accelerating file reads. For more information, see Improve read performance using parallel downloads .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-storage
2.41.0 (2024-07-31)
Features
Enable gRPC client open telemetry metrics reporting ( #2590 ) ( d153228 )
Bug Fixes
Add UnknownHostException to set of retriable exception ( #2651 ) ( 18de9fc )
Update grpc resumable upload error categorization to be more tolerant ( #2644 ) ( 95697dd )
Update Storage#readAllBytes to respect shouldReturnRawInputStream option ( #2635 ) ( dc883cc )
Update TransferManager downloads to reduce in memory buffering ( #2630 ) ( fc2fd75 )
Use fast calculation for totalRemaining number of bytes from multiple ByteBuffers ( #2633 ) ( 758b3dd )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20240625-2.0.0 ( #2616 ) ( b22babb )
Update dependency com.google.apis:google-api-services-storage to v1-rev20240706-2.0.0 ( #2634 ) ( 1ccaa0c )
Update dependency com.google.cloud:sdk-platform-java-config to v3.33.0 ( #2647 ) ( 8196259 )
Update dependency net.jqwik:jqwik to v1.9.0 ( #2608 ) ( a20eb66 )
Update dependency org.junit.vintage:junit-vintage-engine to v5.10.3 ( #2604 ) ( 8c79f39 )
Update junit-platform.version to v5.10.3 ( #2605 ) ( a532ee4 )
August 01, 2024
Announcement
Beginning November 1, 2024, BigQuery users will start seeing charges for Cloud Storage usage as per pricing documentation , which was not metered before due to a billing bug.
Retrieval fees for Nearline, Coldline, and Archive storage classes will be charged per existing pricing documentation and retrieval SKUs .
Inter Region Network Data Transfer fees will be charged when a BigQuery job in one location reads data stored in a Cloud Storage bucket in a different location. These charges are covered by GCP Storage Data Transfer SKUs and Network Data Transfer GCP Inter Region SKUs . Network Data Transfer GCP Multi-region SKUs are not applicable to this change.
Refer to the announcement for more information.
July 31, 2024
Feature
You can now use the Google Cloud console to set a default soft delete retention duration. For more information, see Use tags to set a default soft delete retention duration for new buckets .
Feature
You can now use list caching with Cloud Storage FUSE, which is a cache for directory and file list, or ls , responses that improves list operation speeds. To learn more about list caching and how to enable it, see the Cloud Storage FUSE caching overview page .
July 29, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-storage
2.18.0 (2024-07-09)
Features
Add OpenTelemetry Tracing support as a preview feature ( #1288 ) ( c2ab0e0 )
Bug Fixes
Allow Protobuf 5.x ( #1317 ) ( 152b249 )
Correct notification error message ( #1290 ) ( 1cb977d ), closes #1289
July 23, 2024
Feature
You can now use tags to set a default soft delete retention duration on newly created buckets in your organization. To learn how to customize a default soft delete retention duration, see Set a default soft delete retention duration .
July 22, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/storage
7.12.0 (2024-07-15)
Features
Add function to allow user to set destination in transfer manager ( #2497 ) ( dc1e488 )
July 15, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/storage
7.11.3 (2024-07-09)
Bug Fixes
Error serialization in resumable-upload.ts ( #2493 ) ( c2e555c )
Handle unhandled error in startResumableUpload_ ( #2495 ) ( d5257ba )
Make CreateBucketRequest extend from BucketMetadata to allow all… ( #2489 ) ( 013a5a4 )
July 11, 2024
Feature
You can now specify Frankfurt (europe-west3) and Zürich (europe-west6) as a predefined dual-region pairing. For more information, see Predefined dual-regions .
July 08, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for storage/internal/apiv2
1.43.0 (2024-07-03)
Features
storage/transfermanager: Add DownloadDirectory ( #10430 ) ( 0d0e5dd )
storage/transfermanager: Automatically shard downloads ( #10379 ) ( 05816f9 )
Bug Fixes
storage/transfermanager: WaitAndClose waits for Callbacks to finish ( #10504 ) ( 0e81002 ), refs #10502
storage: Allow empty soft delete on Create ( #10394 ) ( d8bd2c1 ), refs #10380
storage: Bump google.golang.org/api@v0.187.0 ( 8fa9e39 )
storage: Retry broken pipe error ( #10374 ) ( 2f4daa1 ), refs #9178
Documentation
storage/control: Remove allowlist note from Folders RPCs ( d6c543c )
Feature
You can now specify London ( europe-west2 ) and Frankfurt ( europe-west3 ) as a predefined dual-region pairing. For more information, see Predefined dual-regions .
July 02, 2024
Feature
You can now disable soft delete for multiple buckets at a time or for all buckets in a project. To learn more, see Bulk disable soft delete .
July 01, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-storage
2.40.1 (2024-06-26)
Bug Fixes
Add a workaround to make sure grpc clients' hosts always match their universe domain ( #2588 ) ( 87bf737 )
Include x-goog-user-project on resumable upload puts for grpc transport ( #2586 ) ( 6f2f504 )
Update grpc bidi resumable uploads to validate ack'd object size ( #2570 ) ( 5c9cecf )
Update grpc finalize on close resumable uploads to validate ack'd object size ( #2572 ) ( 55a6d15 )
Update grpc single-shot uploads to validate ack'd object size ( #2567 ) ( 65c8808 )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20240524-2.0.0 ( #2565 ) ( d193243 )
Update dependency com.google.apis:google-api-services-storage to v1-rev20240621-2.0.0 ( #2596 ) ( 73b8753 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.32.0 ( #2597 ) ( 25940a4 )
Documentation
Add Hierarchical Namespace Bucket and Folders samples ( #2583 ) ( 3030081 ), closes #2569
Remove allowlist note from Folders RPCs ( #2593 ) ( 82161de )
Update DeleteObject Sample to be clearer on object versioning behavior ( #2595 ) ( 79b7cf0 )
June 28, 2024
Feature
You can now specify the Frankfurt, Germany ( europe-west3 ) and Paris, France ( europe-west9 ) regions when using regional endpoints .
June 18, 2024
Feature
Hierarchical namespace for Cloud Storage buckets is now available in Preview . With hierarchical namespace, you can store your data in a logical file system structure.
Issue
Renaming a folder in a bucket with hierarchical namespace enabled using command line is not supported.
June 17, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for storage/internal/apiv2
1.42.0 (2024-06-10)
Features
storage: Add new package transfermanager. This package is intended for parallel uploads and downloads, and is in preview. It is not stable, and is likely to change. ( #10045 ) ( cde5cbb )
storage: Add bucket HierarchicalNamespace ( #10315 ) ( b92406c ), refs #10146
storage: Add BucketName to BucketHandle ( #10127 ) ( 203cc59 )
Bug Fixes
storage: Set invocation headers on xml reads ( #10250 ) ( c87e1ab )
Documentation
storage: Update autoclass doc ( #10135 ) ( e4b2737 )
Python
Changes for google-cloud-storage
2.17.0 (2024-05-22)
Features
Support HNS enablement in bucket metadata ( #1278 ) ( add3c01 )
Support page_size in bucket.list_blobs ( #1275 ) ( c52e882 )
Bug Fixes
Remove deprecated methods in samples and tests ( #1274 ) ( 4db96c9 )
Documentation
Reference Storage Control in readme ( #1254 ) ( 3d6d369 )
Update DEFAULT_RETRY_IF_GENERATION_SPECIFIED docstrings ( #1234 ) ( bdd426a )
June 10, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/storage
7.11.2 (2024-06-07)
Bug Fixes
Support uint8array in file.save ( #2480 ) ( 1477fe1 )
Java
Changes for google-cloud-storage
2.40.0 (2024-06-06)
Features
Promote google-cloud-storage-control to GA ( #2575 ) ( 129f188 )
Bug Fixes
Reduce Java 21 Virtual Thread Pinning in IO operations ( #2553 ) ( 498fd0b )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.31.0 ( #2571 ) ( 67ce3d6 )
Update dependency net.jqwik:jqwik to v1.8.5 ( #2563 ) ( 88f7d86 )
Documentation
Managed Folders samples ( #2562 ) ( 5ffc1f2 )
Update javadoc for createFrom ( #2522 ) ( dc31e95 )
June 06, 2024
Feature
Cloud Storage now offers a new pre-defined dual region, EUROPE-WEST2 (London) and EUROPE-WEST1 (Belgium). To learn more about Cloud Storage pre-defined dual regions, see the Bucket locations page .
May 27, 2024
Feature
Cloud Storage FUSE now offers the following features:
You now have the option to disable authentication on custom endpoints using the --anonymous-access flag. For more information about the new global option, see the Cloud Storage FUSE CLI options page .
Cloud Storage FUSE now supports Rocky Linux versions 8.9 or later. For more information, see Cloud Storage FUSE instructions on how to configure the package manager .
The Cloud Storage FUSE max-conns-per-host flag has been updated to offer a default value which specifies no limit on TCP connections except for limitations set by your machine's specifications. For more information, see the Cloud Storage FUSE CLI page .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/storage
7.11.1 (2024-05-21)
Bug Fixes
Add missing projectIdentifier to GetServiceAccountOptions ( #2468 ) ( d49e9d2 )
Allow files in directories to be downloaded onto local machine ( #2199 ) ( 9f62429 )
Do not set customEndpoint if apiEndpoint === default ( #2460 ) ( b4dbd73 )
Improve GetFilesResponse interface ( #2466 ) ( 918db28 )
Java
Changes for google-cloud-storage
2.39.0 (2024-05-22)
Features
Plumb PartNamingStrategy for Parallel Composite Uploads in Transfer Manager ( #2547 ) ( 79d721d )
Bug Fixes
Update GapicUnbufferedChunkedResumableWritableByteChannel to be tolerant of non-quantum writes ( #2537 ) ( 1701fde )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.30.1 ( #2550 ) ( e9807ec )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.10.2 ( #2552 ) ( a207829 )
May 20, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for storage/internal/apiv2
1.41.0 (2024-05-13)
Features
storage/control: Make Managed Folders operations public ( 264a6dc )
storage: Support for soft delete policies and restore ( #9520 ) ( 985deb2 )
Bug Fixes
storage/control: An existing resource pattern value projects/{project}/buckets/{bucket}/managedFolders/{managedFolder=**} to resource definition storage.googleapis.com/ManagedFolder is removed ( 3e25053 )
storage: Add internaloption.WithDefaultEndpointTemplate ( 3b41408 )
storage: Bump x/net to v0.24.0 ( ba31ed5 )
storage: Disable gax retries for gRPC ( #9747 ) ( bbfc0ac )
storage: More strongly match regex ( #9706 ) ( 3cfc8eb ), refs #9705
storage: Retry net.OpError on connection reset ( #10154 ) ( 54fab10 ), refs #9478
storage: Wrap error when MaxAttempts is hit ( #9767 ) ( 9cb262b ), refs #9720
Documentation
storage/control: Update storage control documentation and add PHP for publishing ( 1d757c6 )
May 13, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/storage
7.11.0 (2024-05-03)
Features
Add ability to enable hierarchical namespace on buckets ( #2453 ) ( 4e5726f )
Java
Changes for google-cloud-storage
2.38.0 (2024-05-09)
Features
Promoted google-cloud-storage-control to beta ( #2531 ) ( 09f7191 )
Bug Fixes
Add strict client side response validation for gRPC chunked resumable uploads ( #2527 ) ( c1d1f4a )
An existing resource pattern value projects/{project}/buckets/{bucket}/managedFolders/{managedFolder=**} to resource definition storage.googleapis.com/ManagedFolder is removed ( #2524 ) ( 7d7f526 )
deps: Update the Java code generator (gapic-generator-java) to 2.39.0 ( #2501 ) ( 518d4be )
ParallelCompositeUpload in Transfer Manager hangs when encountering OOM ( #2526 ) ( 67a7c6b )
Update grpc WriteObject response handling to provide context when a failure happens ( #2532 ) ( 170a3f5 )
Update GzipReadableByteChannel to be tolerant of one byte reads ( #2512 ) ( 87b63f4 )
Update StorageOptions to carry forward fields that aren't part of ServiceOptions ( #2521 ) ( b84654e )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.30.0 ( #2523 ) ( 3e573f7 )
Update dependency info.picocli:picocli to v4.7.6 ( #2535 ) ( f26888a )
Documentation
Add in Transfer Manager chunked upload/download samples ( #2518 ) ( d1f6bcc )
Update readme to include gradle instructions for storage control ( #2503 ) ( 50ac93b )
Update TransportCompatibility annotation for Storage#blobWriteSession ( #2520 ) ( b7d673c )
April 29, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/storage
7.10.2 (2024-04-26)
Bug Fixes
Use correct indices for file.from and fix tests to verify names ( #2449 ) ( d4240fa )
7.10.1 (2024-04-22)
Bug Fixes
Change copyoptions type ( #2439 ) ( 2ebd7ac )
Expand types of custom metadata within FileMetadata ( #2442 ) ( 1d434a9 )
April 23, 2024
Change
Default replication monitoring for multi-region and dual-region buckets in the Google Cloud console is now available for the following graphs:
Percent of minutes out of RPO
Percent of objects out of target
Meeting RPO
April 22, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/storage
7.10.0 (2024-04-15)
Features
Add ability to create a File object from URL ( #2432 ) ( 1b71fcc )
Allow setting contentEncoding during compose ( #2431 ) ( 6e81e05 )
Bug Fixes
Destroy pipeline streams when returned stream errors ( #2437 ) ( fe1ac65 )
Remove extraneous mime-types package in favor of mime ( #2435 ) ( 63a71f2 )
Java
Changes for google-cloud-storage
2.37.0 (2024-04-19)
Features
Adds a ZeroCopy response marshaller for grpc ReadObject handling ( #2489 ) ( 8c7404d )
Port BufferToDiskThenUpload to work with HttpStorageOptions ( #2473 ) ( d84e255 )
Port DefaultBlobWriteSessionConfig to work with HttpStorageOptions ( #2472 ) ( e5772a4 )
Port ParallelCompositeUploadBlobWriteSessionConfig to work with HttpStorageOptions ( #2474 ) ( 3bf6026 )
Transfer Manager ParallelCompositeUploads ( #2494 ) ( 8b54549 )
Bug Fixes
Ensure all BlobWriteSession types conform to the semantics specified in BlobWriteSession ( #2482 ) ( d47afcf )
Fix BidiBlobWriteSessionConfigs to respect preconditions ( #2481 ) ( 955d78a )
Update ApiaryUnbufferedWritableByteChannel to be graceful of non-quantum aligned write calls ( #2493 ) ( f548335 )
Update BidiBlobWriteSessionConfig to respect a provided bufferSize ( #2471 ) ( e1fb857 )
Update grpc handling of IAM Policy etag to account for base64 encoding ( #2499 ) ( 032f2f2 )
Update Grpc Retry Conformance after new additions to testbench ( #2309 ) ( 09043c5 )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20240319-2.0.0 ( #2460 ) ( 9c2ee90 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.28.1 ( #2467 ) ( c12f329 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.29.0 ( #2502 ) ( 7ed8446 )
Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.43.0 ( #2459 ) ( 2dc4748 )
Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.44.0 ( #2497 ) ( 9b0253c )
Documentation
Add summary and reference docs for Storage Control API to readme ( #2485 ) ( 70fd088 )
Create Samples for transfer manager ( #2492 ) ( e2030b2 )
April 05, 2024
Feature
Custom constraints for Cloud Storage are now available. You can use custom constraints to enforce policies on Cloud Storage resources, such as a policy that enforces all buckets to have Object Versioning enabled.
April 03, 2024
Feature
Managed folders are now available in the Google Cloud Console.
You can now use managed folders in your Cloud Storage buckets using the Cloud Console. You can create, list, move, and delete your managed folders in the Console, as well as set IAM policies. To learn more, see Create and manage managed folders .
April 01, 2024
Feature
Google Cloud Storage now offers Dual-region Google Egress Bandwidth quotas per dual-region location. See Bandwidth usage in Cloud Storage .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for storage/internal/apiv2
1.40.0 (2024-03-29)
Features
storage: Implement io.WriterTo in Reader ( #9659 ) ( 8264a96 )
storage: New storage control client ( #9631 ) ( 1f4d279 )
Bug Fixes
storage: Retry errors from last recv on uploads ( #9616 ) ( b6574aa )
storage: Update protobuf dep to v1.33.0 ( 30b038d )
Performance Improvements
storage: Remove protobuf's copy of data on unmarshalling ( #9526 ) ( 81281c0 )
March 29, 2024
Feature
The Storage Control API is now available for use. The Storage Control API lets you perform metadata-specific, control plane, and long-running operations. To learn more about the Storage Control API and operations you can perform, see Storage Control API overview .
March 25, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/storage
7.9.0 (2024-03-18)
Features
Add ability to configure and utilize soft-delete and restore ( #2425 ) ( 7da5a7d )
Java
Changes for google-cloud-storage
2.36.1 (2024-03-20)
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20240311-2.0.0 ( #2446 ) ( 27b4780 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.28.1 ( #2450 ) ( bf35a9a )
Python
Changes for google-cloud-storage
2.16.0 (2024-03-18)
Features
Add support for soft delete ( #1229 ) ( 3928aa0 )
Support includeFoldersAsPrefixes ( #1223 ) ( 7bb8065 )
March 18, 2024
Feature
You can now use the GCS FUSE file cache feature, a client-based read cache that lets repeat file reads to be served from a faster cache storage of your choice. To learn more about caching, see GCS FUSE caching documentation .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for storage/internal/apiv2
1.39.1 (2024-03-11)
Bug Fixes
storage: Add object validation case and test ( #9521 ) ( 386bef3 )
Java
Changes for google-cloud-storage
2.36.0 (2024-03-15)
Features
Add Custom Part Metadata Decorator to ParallelCompositeUploadConfig ( #2434 ) ( 43b8006 )
Add hierarchical namespace and folders features ( #2445 ) ( 8074fff )
Add soft delete feature ( #2403 ) ( 989f36f )
Bug Fixes
Fix name digest for noprefix ( #2448 ) ( 12c9db8 )
Missing serialVersionUID of serializable classes ( #2344 ) ( 736865b )
Dependencies
Update dependency com.google.apis:google-api-services-storage to v1-rev20240307-2.0.0 ( #2442 ) ( 1352203 )
Update dependency net.jqwik:jqwik to v1.8.4 ( #2447 ) ( 110b80c )
Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.42.0 ( #2441 ) ( 80745d4 )
March 12, 2024
Feature
You can now view granular bucket-level cost data in the Cloud Billing Detailed data export .
January 31, 2024
Feature
Cloud Storage is now available in Johannesburg, South Africa ( africa-south1 region).
January 22, 2024
Change
You can now work with the Object Retention Lock feature within the Cloud Console.
January 15, 2024
Change
Newly created organizations now have the uniformBucketLevelAccess constraint enabled by default.
This lets you build your organization resources in a secure posture from Day 0.
You can opt out of this constraint. To opt out, contact your organization administrator.
December 07, 2023
Feature
Cloud Storage FUSE now provides the ability to configure log rotation .
December 04, 2023
Feature
The restrict unencrypted HTTP requests organization policy constraint is now generally available ( GA ). This constraint blocks all unencrypted HTTP access to Cloud Storage resources.
November 21, 2023
Feature
The Object Retention Lock feature is now available.
Using this feature, you can place a retention configuration on individual objects .
A retention configuration defines a date prior to which the object cannot be deleted or overwritten.
A retention configuration can optionally be locked to prevent the retention date from being shortened or removed.
November 20, 2023
Feature
Regional endpoints are now available in Preview. Regional endpoints let you run your workloads in a manner that complies with data residency and data sovereignty requirements, where your request traffic is routed directly to the region specified in the endpoint.
November 14, 2023
Change
New bandwidth quotas are now in effect.
Bandwidth quotas are now variable and based in part on a project's billing account history. Previously, the same default value applied to all projects.
For most projects, egress bandwidth quotas either remain unchanged or have increased.
You can view your project's egress bandwidth quotas in the Console .
November 03, 2023
Change
The Autoclass feature can now be enabled for existing buckets.
Previously, Autoclass could only be enabled when creating a new bucket.
Enabling Autoclass on an existing bucket incurs additional charges .
October 27, 2023
Change
Turbo replication performance monitoring in the Google Cloud console has been moved and expanded.
Monitoring graphs have been moved from a bucket's Configuration tab to its Observability tab.
A new, real-time Maximum delay in turbo replication graph is also available in the Observability tab.
October 26, 2023
Feature
Managed folders are now available in Preview. When using managed folders, you can organize your objects by group and set IAM policies that offer more granular access control over data segments within a bucket.
October 16, 2023
Change
Changes to the Autoclass feature that were announced on July 17, 2023 begin taking effect today.
October 12, 2023
Feature
The Node.js and Python client libraries now have parallelized upload and download options, improving their performance.
Both client libraries have improved bulk uploads , bulk downloads , large object uploads , and large object downloads .
September 28, 2023
Announcement
Beginning Oct 30, 2023, Cloud Storage will change how it enforces egress bandwidth quotas.
Instead of using the same default value for all projects, egress bandwidth quotas will depend on each project's history, such whether the billing account is in good standing.
For most projects, egress bandwidth quotas will either remain unchanged or will increase.
Once this change takes effect, you can view your project's egress bandwidth quotas in the Console .
September 26, 2023
Feature
You can now control the mounting behavior of Cloud Storage FUSE by using a configuration file instead of global options.
Change
Cloud Storage FUSE is now available for use on ARM64-based machines.
September 20, 2023
Change
The gcloud CLI now supports setting a user-defined prefix for naming temporary components of a parallel composite upload .
September 19, 2023
Feature
Cloud Storage is now available in Dammam, Saudi Arabia ( me-central2 region).
September 15, 2023
Feature
Manifest files are now available in Storage Insights. A manifest file is generated when an inventory report is split into shards. You can use the manifest file to easily locate the shards you want to download.
September 14, 2023
Change
The following dual-region pairs are now generally available:
Montréal and Toronto, Canada
Sydney and Melbourne, Australia
August 23, 2023
Feature
The Storage Object User role ( roles/storage.objectUser ) is now available. This role allows you to create, view, list, update, and delete objects and their metadata, without granting access to the object's ACLs.
August 22, 2023
Feature
Cloud Storage is now available in Berlin, Germany ( europe-west10 region).
August 01, 2023
Feature
You can now use locational endpoints to perform operations in a manner that's compliant with International Traffic in Arms Regulations (ITAR).
July 18, 2023
Breaking
The gcloud storage command-line tool has changed some of the metadata it returns for buckets and objects, as well as changed the format of some metadata names it returns.
To output metadata in the form used prior to July 18, 2023, include the flag --raw in your list and describe commands for objects and buckets.
Announcement
gcloud storage GA release 1.3 is now available.
The 1.3 release adds support for the rsync command , which synchronizes content between a source and destination.
The 1.3 release also adds support for generating signed URLs , managing HMAC keys , calculating bucket sizes and calculating hashes .
July 17, 2023
Announcement
Beginning October 16, 2023, the Autoclass feature will change its storage class transition behavior.
By default, new buckets with Autoclass enabled will only transition objects between the Standard and Nearline storage classes.
However, you can continue to create buckets that transition objects between all storage classes by choosing to opt-in.
Announcement
Beginning October 16, 2023, the Autoclass feature and the matchesStorageClass condition for Object Lifecycle Management will be incompatible.
You will not be able to modify any other bucket metadata for affected buckets until either the matchesStorageClass condition is removed or the Autoclass feature is disabled.
Announcement
Beginning October 16, 2023, the following pricing changes apply to buckets that use the Autoclass feature :
Each storage class transition from Coldline or Archive storage to Standard storage will change from being free to being charged as a Class A operation at the Standard storage rate.
Each Class B operation, such as reading object data, will change from being charged at the rate of the object's storage class at the time of the operation to being charged at the Standard storage rate.
After October 30, 2023, billing for objects in Autoclass buckets will use Autoclass-specific SKUs.
July 07, 2023
Feature
Custom audit logging for Cloud Storage is now generally available (GA) . In addition to using the Cloud Storage JSON API, you can now attach custom information to audit logs for requests by using the following tools:
The gcloud or gsutil command-line tools
The Cloud Storage client libraries
The Cloud Storage XML API
Signed URLs
June 28, 2023
Change
You can now have a maximum of 10 HMAC keys per service account.
June 26, 2023
Feature
Cloud Storage FUSE is now generally available .
June 23, 2023
Change
Objects created using XML API multipart uploads can now be copied and rewritten normally.
Previously, you had to perform an object composition on such objects before the output could be copied or rewritten.
May 26, 2023
Change
You can now add custom object metadata in the final request of a JSON API resumable upload by using the X-Goog-Meta- header .
May 11, 2023
Feature
Custom audit logging for Cloud Storage is now available in Preview.
JSON API requests now support user-defined headers that are prefixed with x-goog-custom-audit- .
Cloud Audit Logs can subsequently include these headers as part of your request's audit log entry.
April 17, 2023
Feature
The Storage Insights inventory reports feature is now generally available. Inventory reports provide an overview of metadata for all objects in a bucket.
Announcement
On July 17, 2023, the gcloud storage command-line tool will change some of the metadata it returns for buckets and objects, as well as change the format of some metadata names it returns.
To continue outputting metadata in its current form, you should include the flag --raw in your list and describe commands for objects and buckets.
April 05, 2023
Feature
Cloud Storage FUSE is now available in Preview. You can use Cloud Storage FUSE to mount and access storage buckets as local file systems.
Get started with mounting buckets using Cloud Storage FUSE .
Learn about integrations between Cloud Storage FUSE and other Google Cloud products .
April 01, 2023
Announcement
All announced pricing changes for Cloud Storage are now in effect.
March 30, 2023
Feature
Cloud Storage is now available in Doha, Qatar ( me-central1 region).
March 23, 2023
Feature
Cloud Storage is now available in Turin, Italy ( europe-west12 region).
Change
Objects smaller than 128KiB stored in buckets with Autoclass enabled are no longer managed by Autoclass.
Such objects are not subject to the Autoclass management fee and are statically set to Standard Storage.
Any such objects in Autoclass buckets that are currently stored in a different storage class are being transitioned to Standard Storage automatically and free of charge.
March 20, 2023
Feature
The following US regions are now available for dual-region storage:
Los Angeles ( us-west2 )
Salt Lake City ( us-west3 )
Feature
The following EU regions are now available for dual-region storage:
Warsaw ( europe-central2 )
Madrid ( europe-southwest1 )
Frankfurt ( europe-west3 )
Milan ( europe-west8 )
Paris ( europe-west9 )
March 17, 2023
Feature
Expanded Cloud Storage monitoring dashboards are now generally available (GA).
Available metrics include server and client error rates, write request counts, network ingress rates, and network egress rates.
Dashboards can be filtered by bucket location.
Dashboards are customizable, including the ability to set up alerts .
March 07, 2023
Change
In buckets with turbo replication enabled, objects uploaded using XML API multipart uploads are now included in the turbo replication RPO.
February 21, 2023
Change
You can now attach a maximum of 50 tag bindings to a storage bucket.
February 02, 2023
Announcement
The Autoclass feature will stop managing Cloud Storage objects smaller than 128KiB after March 6, 2023.
Affected objects will be transitioned to the Standard storage class at no cost to customers and without requiring any action from customers.
Affected objects will always remain in Standard storage and will not be subject to the Autoclass Management Fee .
The change is occurring because the Autoclass Management Fee typically outweighs storage fee savings for such small objects.
January 31, 2023
Fixed
The issue for gsutil commands that use the -m global flag, which was documented on January 19, 2023 , has been fixed in the most recent versions of the Cloud SDK and gsutil.
January 19, 2023
Issue
Some gsutil commands that use the -m global flag, such as cp and rsync , are currently failing if the requester does not have the storage.buckets.get permission.
If you installed gsutil as part of the Cloud SDK, you can work around this issue by reverting to an earlier version. To do so, run the command gcloud components update --version=413.0.0
If you installed gsutil as a standalone tool, you can work around this issue by reverting to version 5.17
January 18, 2023
Announcement
gcloud storage GA release 1.2 is now available.
The 1.2 release adds support for managing access with IAM and ACLs at the bucket and object level.
The 1.2 release also adds support for managing the Autoclass and turbo replication features.
November 16, 2022
Change
Turbo replication is now available for all dual-region combinations.
Change
The following regions are now generally available for dual-region storage:
Mumbai ( asia-south1 )
Delhi ( asia-south2 )
Columbus ( us-east5 )
Dallas ( us-south1 )
Las Vegas ( us-west4 )
November 10, 2022
Feature
You can now use the Google Cloud console to get role recommendations and policy insights for buckets. Role recommendations and policy insights help you understand and manage permission usage for your buckets.
November 09, 2022
Feature
Expanded Cloud Storage monitoring dashboards are now available in Preview.
Available metrics include server and client error rates, write request counts, network ingress rates, and network egress rates.
Dashboards can be filtered by bucket location.
Dashboards are customizable, including the ability to set up alerts .
In addition to the project-wide dashboard, per-bucket dashboards are available in a new Observability tab in the Bucket Details for each bucket.
November 08, 2022
Feature
The Autoclass feature is now available.
When enabled, Autoclass transitions the storage classes of your objects automatically based on their access patterns.
Currently, Autoclass can only be enabled at the time of bucket creation.
Announcement
gcloud storage GA release 1.1 is now available.
The 1.1 release adds more support for managing bucket settings, including lifecycle configurations, CORS configurations, and labels.
October 27, 2022
Feature
Bucket tags are now generally available ( GA ).
October 21, 2022
Feature
New public dataset stored in Cloud Storage.
Data for ERA5 are now hosted publicly in Cloud Storage.
September 28, 2022
Change
New buckets created using the Cloud Console now have public access prevention enabled by default.
During the bucket creation process, you can choose to change this setting.
September 13, 2022
Feature
Cloud Storage is now available in Tel Aviv, Israel ( me-west1 region).
Announcement
gcloud storage is now in GA
gcloud storage provides faster uploading and downloading performance when compared to the gsutil command line tool.
August 24, 2022
Feature
The restrict authentication types organization policy constraint is now generally available ( GA ). This constraint allows you to restrict the authentication types that can be used in requests for Cloud Storage resources.
August 02, 2022
Feature
Customer-managed encryption key (CMEK) organization policy constraints are now generally available ( GA ).
constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK.
constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
You can use both constraints together to enforce the use of CMEK from allowed projects.
Feature
New commands are now available gcloud alpha storage .
Commands include the ability to create buckets, view metadata for buckets and objects, and edit metadata for buckets and objects.
Note that all Cloud Storage gcloud commands continue to be in Preview .
August 01, 2022
Feature
Bucket tags are now available in Preview . You can apply tags to buckets for fine-grained access control.
July 28, 2022
Feature
Configurable dual-region storage is generally available ( GA ).
June 27, 2022
Feature
Object Lifecycle Management now supports new conditions and a new action.
The MatchesPrefix and MatchesSuffix conditions allow you to restrict lifecycle actions to objects with specific prefixes and suffixes.
The AbortIncompleteMultipartUpload action allows you to remove abandoned XML API multipart uploads.
Change
The XML API now supports setting a default Cloud KMS key on a bucket when creating the bucket .
June 06, 2022
Feature
Cloud Storage is now available in Dallas, Texas ( us-south1 region).
June 02, 2022
Announcement
Turbo replication is generally available ( GA ).
May 24, 2022
Feature
Cloud Storage is now available in Columbus, Ohio ( us-east5 region).
May 23, 2022
Change
JSON copy requests and XML copy requests now return a permanent error on timeouts for objects larger than 2.5 GiB and a retryable error on timeouts for objects smaller than 2.5 GiB.
May 10, 2022
Feature
Cloud Storage is now available in Madrid, Spain ( europe-southwest1 region).
May 06, 2022
Change
Us-east4 is now available for dual-region storage . This feature is now in Preview.
May 02, 2022
Feature
Cloud Storage is now available in Paris, France ( europe-west9 region).
April 20, 2022
Feature
Cloud Storage is now available in Milan, Italy ( europe-west8 region).
April 05, 2022
Feature
With dual-region storage , users can now specify two regions within the same continent to create a dual-region of their choosing. This feature is now in Preview .
March 25, 2022
Feature
Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview .
constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK.
constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
You can use both constraints together to enforce the use of CMEK from allowed projects.
March 14, 2022
Announcement
On October 1, 2022, certain prices in Cloud Storage will be changing. For a list of pricing changes, see the announcement .
February 24, 2022
Feature
The restrict authentication types organizational constraint is now in Preview.
The constraint allows you to restrict the authentication types that can be used in requests for Cloud Storage resources.
January 27, 2022
Fixed
The Storage Object Admin IAM role now correctly includes all storage.multipartUploads permissions.
December 15, 2021
Change
Public Access Prevention is now in GA.
Change
orgpolicy.policy.get permission is now included in certain Cloud Storage IAM roles .
This permission is now included in the following roles when they're set at the project-level: Storage Object Creator , Storage Object Admin , Storage HMAC Key Admin , and Storage Admin .
This permission allows principals to know the organizational policy constraints that a project is subject to.
November 19, 2021
Change
Public access prevention Preview now uses inherited in place of unspecified .
Name change more clearly expresses how the state of public access prevention is determined for affected buckets.
November 16, 2021
Feature
Santiago region ( southamerica-west1 ) launched.
New location for storing your data.
November 01, 2021
Feature
List Object V2 is generally available (GA) .
October 13, 2021
Feature
Cloud EKM keys can now be used to encrypt Cloud Storage data.
Cloud EKM keys encrypt your Cloud Storage data in the same way as other customer-managed encryption keys.
October 12, 2021
Issue
Objects uploaded using XML API multipart uploads cannot be rewritten or copied within Cloud Storage.
October 05, 2021
Feature
Turbo replication is a premium feature designed to provide inter-region replication for newly written objects within 15 minutes.
This feature is now available in Preview .
September 27, 2021
Announcement
Cloud Storage now more effectively batches Cloud KMS requests .
No changes to how you use Cloud Storage.
When working with objects encrypted with Cloud KMS keys, you may see improved performance in your high intensity workloads, a decrease in the number of Cloud KMS audit logs, and a reduction in Cloud KMS charges.
These improvements apply to objects written to and rewritten within Cloud Storage using Cloud KMS keys after September 2021.
September 22, 2021
Fixed
Object listing is no longer impacted when performing large-scale object deletion.
Previously, object listing performance could be degraded for up to several days when deleting millions of objects at once in a bucket.
September 20, 2021
Feature
Object Versioning can now be managed in the Cloud Console.
You can enable and disable Object Versioning using the Cloud Console.
You can list, restore, copy, move, and delete versioned objects from within the Cloud Console.
August 03, 2021
Feature
Toronto region ( northamerica-northeast2 ) launched.
New location for storing your data.
August 01, 2021
Change
Cloud Storage now has bandwidth quotas for egress to other Google services.
July 20, 2021
Feature
gcloud alpha storage commands are now available.
These commands provide faster uploading and downloading performance over the gsutil command line tool.
July 12, 2021
Change
XML API multipart uploads is now in GA.
Feature
List object V2 for the XML API Preview launched.
List object V2 provides improved interoperability with Amazon S3 tools and libraries.
July 01, 2021
Feature
Public access prevention Preview launched.
Enforcing public access prevention prevents data in your organization or project from being accidentally exposed to the public.
June 29, 2021
Feature
Delhi region ( asia-south2 ) launched.
New location for storing your data.
June 21, 2021
Feature
Melbourne region ( australia-southeast2 ) launched.
New location for storing your data.
May 14, 2021
Feature
XML API multipart uploads Preview launched.
April 27, 2021
Change
You can now compose objects using source objects that were encrypted with Cloud KMS keys .
March 29, 2021
Security
Cloud CDN, external HTTP(S) Load Balancing, and Cloud Storage services use BoringSSL , and are not affected by the recent OpenSSL security advisory that relates to CA certificate checks (CVE-2021-3450) and TLS renegotiation (CVE-2021-3449).
March 24, 2021
Feature
Warsaw region ( europe-central2 ) launched.
New location for storing your data.
September 28, 2020
Feature
Tokyo+Osaka dual-region ( asia1 ) launched.
New location for storing your data.
September 08, 2020
Feature
Custom time metadata is now available for objects.
Custom time metadata allows you to associate an arbitrary date and time with objects.
Feature
New conditions available for Object Lifecycle Management:
Noncurrent time conditions allow you to define lifecycle actions based on when an object became noncurrent .
Custom time conditions allow you to define lifecycle actions based on a custom time that you define for objects.
July 20, 2020
Feature
Detailed audit logging mode launched.
June 08, 2020
Feature
Jakarta region ( asia-southeast2 ) launched.
New location for storing your data.
May 18, 2020
Change
The V4 signing process is now in GA.
The V4 signing process is an improved method for creating signatures using RSA or HMAC keys.
April 20, 2020
Feature
Las Vegas region ( us-west4 ) launched.
New location for storing your data.
February 28, 2020
Change
IAM Conditions for Cloud Storage is now in GA.
February 24, 2020
Feature
Salt Lake City region ( us-west3 ) launched.
New location for storing your data.
January 24, 2020
Feature
Seoul region ( asia-northeast3 ) launched.
New location for storing your data.
January 08, 2020
Feature
Archive Storage now available.
New storage class for storing your long-term, rarely accessed data.
December 13, 2019
Feature
IAM Conditions BETA for Cloud Storage is now available.
IAM Conditions allows you to grant permissions for a specified period of time, or to a subset of objects in your buckets.
See Using IAM Conditions on buckets for step-by-step instructions.
November 18, 2019
Change
Uniform bucket-level access is now in GA.
November 15, 2019
Change
JSON API requests should now be made through the
storage.googleapis.com endpoint.
New preferred request endpoint
for the JSON API.
Change
New display for bucket lists in the Google Cloud Console.
The Name column is now always visible in the bucket list.
The column selector now appears as an icon ( ).
November 07, 2019
Change
The name of the Bucket Policy Only feature is now changed to uniform bucket-level access .
The organization policy and API fields referring to Bucket Policy Only are still supported, but we recommend using the equivalent uniform bucket-level access organization policy and API fields.
October 29, 2019
Change
HMAC keys for service accounts are now in GA.
Use the XML API to manage your HMAC keys for service accounts .
September 06, 2019
Change
New Stackdriver metric available to check for ACL usage.
Use Stackdriver to determine if enabling Bucket Policy Only would break your workflow.
August 14, 2019
Change
Multi-Regional Storage and Regional Storage are now Standard Storage.
Combining these into a single Standard Storage class separates your storage class considerations from your location considerations.
August 09, 2019
Feature
HMAC keys for service accounts BETA are now available.
Use HMAC keys to create signed requests for the XML API.
Creating HMAC keys for service accounts replaces the need to have HMAC keys for user accounts.
June 28, 2019
Feature
Dual-regions are now in GA.
June 20, 2019
Feature
You can now inspect buckets for sensitive information using Cloud Data Loss Prevention in the Google Cloud Console .
See Inspect a Cloud Storage location for step-by-step instructions.
June 18, 2019
Change
Improved object interaction in the Google Cloud Console.
Object downloads can be performed using the more options menu associated with each object.
Clicking on an object's name opens a page dedicated to details about the object.
June 17, 2019
Issue
Object composition cannot be performed if any of the source objects are encrypted with customer-managed encryption keys .
May 30, 2019
Change
Improved workflow for creating new buckets in the Google Cloud Console .
See the Creating storage buckets guide for step-by-step instructions.
Estimate your bucket's monthly costs during the bucket creation process.
April 18, 2019
Feature
Osaka region ( asia-northeast2 ) launched.
New location for storing your data.
Change
The C++ Cloud Storage Client Library is now in GA.
See the list of Cloud Storage guides for code samples that use the client library.
April 05, 2019
Feature
V4 signing process BETA launched.
The V4 signing process is an improved method for creating signed requests using RSA or HMAC signatures.
Use the process to create signed URLs .
March 11, 2019
Feature
Zürich region ( europe-west6 ) launched.
New location for storing your data.
March 01, 2019
Change
Price reduction for storing Coldline Storage data in regional locations.
Data storage rate is now as low as $0.004/GB/month .
February 15, 2019
Feature
Bucket Policy Only BETA launched.
Bucket Policy Only unifies your access controls by disabling object-level ACLs .
You can set an organizational policy that helps to enforce the use of Bucket Policy Only in your buckets.
February 13, 2019
Change
The C++ Cloud Storage Client Library is now in BETA.
See the list of Cloud Storage guides for code samples that use the client library.
January 24, 2019
Fixed
Bucket updates - such as editing lifecycle policies, adding bucket labels, or enabling bucket features - no longer require the updater to have the storage.buckets.setIamPolicy permission.
December 20, 2018
Change
Customer-Managed Encryption Keys can now be used with data stored in the eur4 and nam4 bucket locations.
October 22, 2018
Change
Limit change for object composition .
There is no longer a limit to the rate at which objects can be composed.
Feature
Hong Kong region ( asia-east2 ) launched.
New location for storing your data.
October 19, 2018
Feature
Retention policies and object holds are now available.
Retention policies allow you to set a minimum age that objects must reach before they can be deleted or overwritten.
You can lock your policy so that it can not be removed or reduced.
You can place holds on your objects as another way to prevent unintended deletion or overwrite.
October 11, 2018
Change
Geo-redundancy expanded in multi-regional locations.
All data stored in multi-regional locations are now geo-redundant , regardless of storage class.
Feature
Dual-regions BETA launched.
Data stored in a dual-regional location have copies stored in two specific locations.
October 09, 2018
Feature
C++ Cloud Storage Client Library ALPHA
See the list of Cloud Storage guides for code samples that use the client library.
August 15, 2018
Change
Cloud Key Management Service keys with Cloud Storage is now in GA.
July 18, 2018
Change
Improved security in the Google Cloud Platform Console.
Objects can no longer be made public through one-click actions. See Making data public for updated guides.
Public access columns for buckets and objects show you when the general public has access to your resources.
July 10, 2018
Feature
Los Angeles region ( us-west2 ) launched.
New location for storing your data.
June 21, 2018
Change
Limit changes for object composition .
There is no longer a limit to the number of components in a composite object.
The composition rate is now measured by the number of source objects, instead of the number of components within those source objects.
Copying a composite object is no longer considered when determining a project's composition rate.
June 11, 2018
Feature
Finland region ( europe-north1 ) launched.
New location for storing your data.
May 29, 2018
Change
New query parameter in JSON API object listing.
The optional query parameter includeTrailingDelimiter can now be used in your JSON API object listing requests .
May 07, 2018
Feature
Customer-Managed Encryption Keys BETA .
Cloud Key Management Service keys with Cloud Storage allow you to manage the encryption keys used on your Cloud Storage objects.
Google Cloud Platform Console functionality for the feature is fully available starting April 20.
February 07, 2018
Change
Changed endpoint for batch requests to the JSON API.
When making HTTP batch requests to the JSON API, users should utilize the www.googleapis.com/batch/storage/v1 endpoint instead of the www.googleapis.com/batch endpoint.
February 01, 2018
Change
Price reduction for Nearline Storage and Coldline Storage in select regions.
Nearline Storage price reductions apply to the following regions: Northern Virginia, London, and Frankfurt.
Coldline Storage price reductions apply to the following regions: London, Frankfurt, Mumbai, and Sydney.
Details regarding Cloud Storage pricing can be found on the Pricing page .
January 10, 2018
Feature
Montréal region ( northamerica-northeast1 ) launched.
New location for storing your data.
Feature
Netherlands region ( europe-west4 ) launched.
New location for storing your data.
January 04, 2018
Change
The Cloud Pub/Sub Notifications for Cloud Storage feature can now have up to 10 different notification configurations send notifications for the same event.
November 14, 2017
Feature
Requester Pays feature is now available.
When enabled on a bucket , users accessing the bucket or its contents must specify a project to bill for charges that arise from their request.
Callers can specify a billing project on requests to buckets both with and without Requester Pays enabled.
Deprecated
The resource attribute of Cloud Pub/Sub Notifications for Cloud Storage is now deprecated. It does not appear for new subscriptions and will not appear in any subscription after June 1, 2018.
Change
The Cloud Pub/Sub Notifications for Cloud Storage feature is now in GA.
October 31, 2017
Feature
Mumbai region ( asia-south1 ) launched.
New location for storing your data.
September 18, 2017
Issue
Bucket metadata PATCH requests to the JSON API require the storage.buckets.setIamPolicy permission if the requester has storage.buckets.getIamPolicy permission. This is true even for patches that do not change ACLs or IAM permissions.
See IAM permissions for JSON and IAM permissions for gsutil for affected methods and commands.
September 05, 2017
Feature
São Paulo region ( southamerica-east1 ) launched.
New location for storing your data.
August 14, 2017
Change
You can now control Object Lifecycle Management from the Storage Console .
August 01, 2017
Feature
Frankfurt region ( europe-west3 ) launched.
New location for storing your data.
June 20, 2017
Feature
Sydney region ( australia-southeast1 ) launched.
New location for storing your data.
June 06, 2017
Feature
New public dataset stored in Cloud Storage.
Data for NEXRAD are now hosted publicly in Cloud Storage.
Feature
London region ( europe-west2 ) launched.
New location for storing your data.
May 31, 2017
Change
Identity and Access Management (IAM) policies are now GA for buckets. Policies applied at the bucket level can be used to control access to individual buckets as well as all the objects within them.
May 24, 2017
Change
Attempts to access a non-existent object returns a 403 error instead of a 404 error if the requester lacks object listing permission for the associated bucket.
May 09, 2017
Feature
Northern Virginia region ( us-east4 ) launched.
New location for storing your data.
April 26, 2017
Change
The Cloud Storage Client Libraries for the Cloud Storage API is now in GA.
April 11, 2017
Feature
Singapore region ( asia-southeast1 ) launched.
New location for storing your data.
April 06, 2017
Feature
Labels can now be used with your buckets in order to better organize all of your Google Cloud Platform resources.
March 27, 2017
Feature
Cloud Pub/Sub Notifications for Cloud Storage BETA
Track changes to objects in your buckets through notifications sent to Cloud Pub/Sub.
You can set the event types that generate notifications as well as the information contained within notifications .
December 07, 2016
Change
The per-object storage class feature is now in GA.
November 07, 2016
Feature
asia-northeast1 region launched.
New location for storing your data.
October 20, 2016
Feature
Per-object storage classes BETA
Users can set the storage class at the object level .
Users can configure lifecycle management to automatically change the storage class of an object when designated criteria are met.
Feature
Coldline, a new archival storage class , is now available.
The Coldline Storage class provides low price, immediately accessible data storage for your backup, archival and disaster recovery needs.
Ideal for data that intends to be accessed less than once a year.
Change
Standard Storage class is now Multi-Regional Storage and Regional Storage.
The Multi-Regional Storage class provides the same price and performance along with geo-redundant copies of your data and a 99.95% availability SLA.
The Regional Storage class provides the same performance at a reduced price.
October 04, 2016
Feature
Public datasets stored in Cloud Storage
Datasets for the Landsat and Sentinel-2 missions are now hosted publicly in Cloud Storage.
Read about the Landsat dataset
Read about the Sentinel-2 dataset
September 26, 2016
Feature
Alpha release for bucket-level IAM.
Access to this feature is currently by request/invite only. Apply IAM permissions to individual buckets in your projects.
August 29, 2016
Change
Improved upload experience in the Storage Console .
Users can retry failed uploads.
The upload drawer persists when navigating to other parts of the Storage Console.
Users are immediately notified when an upload starts and ends.
August 03, 2016
Change
Nearline latency times reduced.
Buckets created in the Nearline storage class now have the same sub-second latency as other storage class buckets.
August 01, 2016
Change
Object generation numbers no longer have ordering guarantees.
Generation numbers associated with Cloud Storage objects no longer increase monotonically or have ordering guarantees between generations.
Generation numbers continue to be unique resource identifiers.
See the announcement .
July 20, 2016
Feature
us-west1 region launched.
New location for storing your data.
June 24, 2016
Feature
X-Goog-Content-Length-Range custom header available.
New header for XML and JSON .
Allows for checking the size of content sent to Cloud Storage.
June 13, 2016
Change
On-Demand I/O for Nearline-class buckets no longer necessary.
Buckets created in the Nearline storage class now have throughput and QPS that automatically scale with your needs, at no extra cost.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
