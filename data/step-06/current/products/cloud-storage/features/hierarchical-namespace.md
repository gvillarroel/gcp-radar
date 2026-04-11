---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.679Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Hierarchical namespace"
feature_slug: "hierarchical-namespace"
latest_feature_date: "2024-10-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/introduction"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
keywords:
  - "hierarchical"
  - "namespace"
  - "lets"
  - "storage"
  - "buckets"
  - "organize"
  - "in"
  - "logical"
---

# Hierarchical namespace

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Hierarchical namespace lets Cloud Storage buckets organize data in a logical file system structure; Hierarchical namespace lets Cloud Storage buckets organize data in a logical file system structure.

## Extended Definition

Hierarchical namespace lets Cloud Storage buckets organize data in a logical file system structure; Hierarchical namespace lets Cloud Storage buckets organize data in a logical file system structure.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Node.js Changes for @google-cloud/storage 7.11.0 (2024-05-03) Features Add ability to enable hierarchical namespace on buckets ( #2453 ) ( 4e5726f ) Java Changes for google-cloud-storage 2.38.0 (2024-05-09) Features Promoted google-cloud-storage-control to beta ( #2531 ) ( 09f7191 ) Bug Fixes Add strict client side response validation for gRPC chunked resumable uploads ( #2527 ) ( c1d1f4a ) An existing resource pattern value projects/{project}/buckets/{bucket}/managedFolders/{managedFolder= } to resource definition storage.googleapis.com/ManagedFolder is removed ( #2524 ) ( 7d7f526 ) deps: Update the Java code generator (gapic-generator-java) to 2.39.0 ( #2501 ) ( 518d4be ) ParallelCompositeUpload in Transfer Manager hangs when encountering OOM ( #2526 ) ( 67a7c6b ) Update grpc WriteObject response handling to provide context when a failure happens ( #2532 ) ( 170a3f5 ) Update GzipReadableByteChannel to be tolerant of one byte reads ( #2512 ) ( 87b63f4 ) Update StorageOptions to carry forward fields that aren't part of ServiceOptions ( #2521 ) ( b84654e ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.30.0 ( #2523 ) ( 3e573f7 ) Update dependency info.picocli:picocli to v4.7.6 ( #2535 ) ( f26888a ) Documentation Add in Transfer Manager chunked upload/download samples ( #2518 ) ( d1f6bcc ) Update readme to include gradle instructions for storage control ( #2503 ) ( 50ac93b ) Update TransportCompatibility annotation for Storage#blobWriteSession ( #2520 ) ( b7d673c ) April 29, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Go Changes for storage/internal/apiv2 1.45.0 (2024-10-17) Features storage/internal: Adds support for restore token ( 70d82fe ) storage: Adding bucket-specific dynamicDelay ( #10987 ) ( a807a7e ) storage: Dynamic read request stall timeout ( #10958 ) ( a09f00e ) Documentation storage: Remove preview wording from NewGRPCClient ( #11002 ) ( 40c3a5b ) October 15, 2024 Feature Hierarchical namespace for Cloud Storage buckets is generally available ( GA ).
- June 18, 2024 Feature Hierarchical namespace for Cloud Storage buckets is now available in Preview .
- Java Changes for google-cloud-storage 2.40.1 (2024-06-26) Bug Fixes Add a workaround to make sure grpc clients' hosts always match their universe domain ( #2588 ) ( 87bf737 ) Include x-goog-user-project on resumable upload puts for grpc transport ( #2586 ) ( 6f2f504 ) Update grpc bidi resumable uploads to validate ack'd object size ( #2570 ) ( 5c9cecf ) Update grpc finalize on close resumable uploads to validate ack'd object size ( #2572 ) ( 55a6d15 ) Update grpc single-shot uploads to validate ack'd object size ( #2567 ) ( 65c8808 ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20240524-2.0.0 ( #2565 ) ( d193243 ) Update dependency com.google.apis:google-api-services-storage to v1-rev20240621-2.0.0 ( #2596 ) ( 73b8753 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.32.0 ( #2597 ) ( 25940a4 ) Documentation Add Hierarchical Namespace Bucket and Folders samples ( #2583 ) ( 3030081 ), closes #2569 Remove allowlist note from Folders RPCs ( #2593 ) ( 82161de ) Update DeleteObject Sample to be clearer on object versioning behavior ( #2595 ) ( 79b7cf0 ) June 28, 2024 Feature You can now specify the Frankfurt, Germany ( europe-west3 ) and Paris, France ( europe-west9 ) regions when using regional endpoints .

### Cloud Storage overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- While buckets are suitable for most data storage use cases, you can set up optional configurations and features on a bucket to make it more suitable for high-performance workloads specifically: Hierarchical namespace : Buckets can have hierarchical namespace enabled, which lets you store your data in a logical file system structure by using folders.
- When you locate buckets in zones, you get the ability to colocate your objects with your compute resources, automatic enablement of hierarchical namespace, and new APIs for streaming reads and appendable writes.
- Buckets with hierarchical namespace enabled offer up to 8 times higher initial queries per second (QPS) limits for reading and writing objects compared to buckets without hierarchical namespace enabled.
- How Cloud Storage works Cloud Storage is a scalable and managed storage service offered by Google Cloud that lets you store data as objects in containers called buckets .

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- In the Optimize storage for data-intensive workloads section, do the following: To enable hierarchical namespace , select Enable Hierarchical namespace on this bucket .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions storage.buckets.create storage.buckets.enableObjectRetention (only required if enabling object retention configurations for the bucket) storage.buckets.list (only required if creating a bucket using the Google Cloud console.) resourcemanager.projects.get (only required if creating a bucket using the Google Cloud console) You might also be able to get these permissions with custom roles or other predefined roles.
- Create new storage bucket in the US multi-region with coldline storage resource "random id" "bucket prefix" { byte length = 8 } resource "google storage bucket" "static" { name = "${random id.bucket prefix.hex}-new-bucket" location = "US" storage class = "COLDLINE" uniform bucket level access = true } REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . using Google.Apis.Storage.v1.Data ; using Google.Cloud.Storage.V1 ; using System ; public class CreateRegionalBucketSample { /// <summary> /// Creates a storage bucket with region. /// </summary> /// <param name="projectId">The ID of the project to create the buckets in.</param> /// <param name="location">The location of the bucket.

