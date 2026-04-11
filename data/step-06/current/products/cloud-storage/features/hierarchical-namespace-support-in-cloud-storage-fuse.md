---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.682Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Hierarchical namespace support in Cloud Storage FUSE"
feature_slug: "hierarchical-namespace-support-in-cloud-storage-fuse"
latest_feature_date: "2024-09-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options"
keywords:
  - "hierarchical"
  - "namespace"
  - "in"
  - "storage"
  - "fuse"
  - "supports"
  - "mounting"
  - "buckets"
---

# Hierarchical namespace support in Cloud Storage FUSE

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Cloud Storage FUSE supports mounting buckets with hierarchical namespace enabled.

## Extended Definition

Cloud Storage FUSE supports mounting buckets with hierarchical namespace enabled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Node.js Changes for @google-cloud/storage 7.11.0 (2024-05-03) Features Add ability to enable hierarchical namespace on buckets ( #2453 ) ( 4e5726f ) Java Changes for google-cloud-storage 2.38.0 (2024-05-09) Features Promoted google-cloud-storage-control to beta ( #2531 ) ( 09f7191 ) Bug Fixes Add strict client side response validation for gRPC chunked resumable uploads ( #2527 ) ( c1d1f4a ) An existing resource pattern value projects/{project}/buckets/{bucket}/managedFolders/{managedFolder= } to resource definition storage.googleapis.com/ManagedFolder is removed ( #2524 ) ( 7d7f526 ) deps: Update the Java code generator (gapic-generator-java) to 2.39.0 ( #2501 ) ( 518d4be ) ParallelCompositeUpload in Transfer Manager hangs when encountering OOM ( #2526 ) ( 67a7c6b ) Update grpc WriteObject response handling to provide context when a failure happens ( #2532 ) ( 170a3f5 ) Update GzipReadableByteChannel to be tolerant of one byte reads ( #2512 ) ( 87b63f4 ) Update StorageOptions to carry forward fields that aren't part of ServiceOptions ( #2521 ) ( b84654e ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.30.0 ( #2523 ) ( 3e573f7 ) Update dependency info.picocli:picocli to v4.7.6 ( #2535 ) ( f26888a ) Documentation Add in Transfer Manager chunked upload/download samples ( #2518 ) ( d1f6bcc ) Update readme to include gradle instructions for storage control ( #2503 ) ( 50ac93b ) Update TransportCompatibility annotation for Storage#blobWriteSession ( #2520 ) ( b7d673c ) April 29, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Go Changes for storage/internal/apiv2 1.45.0 (2024-10-17) Features storage/internal: Adds support for restore token ( 70d82fe ) storage: Adding bucket-specific dynamicDelay ( #10987 ) ( a807a7e ) storage: Dynamic read request stall timeout ( #10958 ) ( a09f00e ) Documentation storage: Remove preview wording from NewGRPCClient ( #11002 ) ( 40c3a5b ) October 15, 2024 Feature Hierarchical namespace for Cloud Storage buckets is generally available ( GA ).
- To learn more about how mounting buckets with hierarchical namespace enabled can help improve performance, see Mount buckets with hierarchical namespace enabled .
- February 24, 2025 Feature The Objects: move method supports moving objects in both flat and hierarchical namespace buckets.

### "Mount a Cloud Storage bucket using Cloud Storage FUSE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Learn how Vertex AI uses Cloud Storage FUSE to mount Cloud Storage buckets for custom training jobs.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the resources by completing the following steps: Unmount the storage bucket from your Linux machine by using the fusermount tool: fusermount -u "$HOME/mount-folder" To delete the bucket and everything inside of it, use the gcloud storage rm command with the --recursive flag: gcloud storage rm gs:// BUCKET NAME --recursive Replace BUCKET NAME with the name of your bucket.
- In this quickstart, you'll complete the following tasks: Install Cloud Storage FUSE on Debian or Ubuntu Mount the bucket as a folder on the machine Upload an object to the bucket You'll use the Google Cloud CLI to create and manage the object in your storage bucket, and you'll use the Cloud Storage FUSE CLI to mount your bucket to your machine.
- Mount the bucket To mount the bucket to your local file system, complete the following steps: Generate Application Default Credentials using the gcloud auth application-default login command: gcloud auth application-default login Cloud Storage FUSE automatically loads the credentials.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- If you're using the Cloud Storage FUSE CSI driver to mount your buckets to your local file system in Google Kubernetes Engine, see Mount options for the Cloud Storage FUSE CSI driver .
- The Cloud Storage FUSE command line interface (CLI), or gcsfuse CLI, is used to mount Cloud Storage buckets as file systems on a local machine.
- This option should also be set if you're using Cloud Storage FUSE with public buckets.
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.

