---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.705Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Cloud Storage FUSE Rocky Linux support"
feature_slug: "cloud-storage-fuse-rocky-linux-support"
latest_feature_date: "2024-05-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket"
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options"
keywords:
  - "storage"
  - "fuse"
  - "rocky"
  - "linux"
  - "supports"
  - "and"
  - "later"
---

# Cloud Storage FUSE Rocky Linux support

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Cloud Storage FUSE supports Rocky Linux 8.9 and later.

## Extended Definition

Cloud Storage FUSE supports Rocky Linux 8.9 and later.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)

## Supporting Pages

### "Mount a Cloud Storage bucket using Cloud Storage FUSE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- Source ID: `site-iam-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the resources by completing the following steps: Unmount the storage bucket from your Linux machine by using the fusermount tool: fusermount -u "$HOME/mount-folder" To delete the bucket and everything inside of it, use the gcloud storage rm command with the --recursive flag: gcloud storage rm gs:// BUCKET NAME --recursive Replace BUCKET NAME with the name of your bucket.
- In this quickstart, you'll complete the following tasks: Install Cloud Storage FUSE on Debian or Ubuntu Mount the bucket as a folder on the machine Upload an object to the bucket You'll use the Google Cloud CLI to create and manage the object in your storage bucket, and you'll use the Cloud Storage FUSE CLI to mount your bucket to your machine.
- Mount the bucket To mount the bucket to your local file system, complete the following steps: Generate Application Default Credentials using the gcloud auth application-default login command: gcloud auth application-default login Cloud Storage FUSE automatically loads the credentials.
- Create a directory to mount the storage bucket to: mkdir "$HOME/mount-folder" Mount your storage bucket using the gcsfuse command: gcsfuse BUCKET NAME "$HOME/mount-folder" Replace BUCKET NAME with the name of the bucket you want to mount.

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Storage FUSE now supports Rocky Linux versions 8.9 or later.
- Node.js Changes for @google-cloud/storage 7.9.0 (2024-03-18) Features Add ability to configure and utilize soft-delete and restore ( #2425 ) ( 7da5a7d ) Java Changes for google-cloud-storage 2.36.1 (2024-03-20) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20240311-2.0.0 ( #2446 ) ( 27b4780 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.28.1 ( #2450 ) ( bf35a9a ) Python Changes for google-cloud-storage 2.16.0 (2024-03-18) Features Add support for soft delete ( #1229 ) ( 3928aa0 ) Support includeFoldersAsPrefixes ( #1223 ) ( 7bb8065 ) March 18, 2024 Feature You can now use the GCS FUSE file cache feature, a client-based read cache that lets repeat file reads to be served from a faster cache storage of your choice.
- September 15, 2025 Libraries Java 2.57.0 (2025-09-09) Features Add BlobInfo.ObjectContexts ( #3259 ) ( 485aefd ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.62.1 ( 0e348db ) Update BlobAppendableUpload implementation to periodically flush for large writes ( #3278 ) ( d0ffe18 ) Update otel integration to properly activate span context for lazy RPCs such as reads & writes pt.2 ( #3277 ) ( 3240f67 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #3280 ) ( d046ea3 ) Update googleapis/sdk-platform-java action to v2.62.1 ( #3281 ) ( c9078bb ) September 10, 2025 Feature Cloud Storage FUSE now supports buffered reads, which can improve sequential read performance for large files by two to five times.
- Node.js Changes for @google-cloud/storage 7.12.1 (2024-08-07) Bug Fixes deps: Update fast-xml-parser to 4.4.1 due to security vulnerability ( #2505 ) ( b97d474 ) Python Changes for google-cloud-storage 2.18.2 (2024-08-08) Bug Fixes Add regression test for range read retry issue and bump dependency to fix ( #1338 ) ( 0323647 ) 2.18.1 (2024-08-05) Bug Fixes Properly escape URL construction for XML MPU API ( #1333 ) ( bf4d0e0 ) August 05, 2024 Feature You can now use parallel downloads with Cloud Storage FUSE to accelerate read performance of large files over 1 GB in size.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- For more information, see Automated configuration values for high-performance machine types . gcsfuse CLI command structure The following example shows the structure of the gcsfuse command, including required commands and optional gcsfuse options. gcsfuse GLOBAL OPTIONS BUCKET NAME MOUNT POINT Replace the following: GLOBAL OPTIONS are the gcsfuse options that control how the mount is set up and how Cloud Storage FUSE behaves.
- This severity level also includes the information provided in the info , warning , and error severity levels. trace : contains granular details about each Cloud Storage FUSE operation and function call, outlining the gcsfuse interaction with the kernel FUSE driver and Cloud Storage.
- A path, for example: /etc/gcsfuse.yaml . "" --profile Applies a predefined, optimized set of Cloud Storage FUSE configurations for caching, threading, and buffer sizes to help you achieve high performance for a specific workload type, such as training, serving, and checkpointing.

