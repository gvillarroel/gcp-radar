---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.629Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bucket relocation console support"
feature_slug: "bucket-relocation-console-support"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/discover-object-storage-console"
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket"
keywords:
  - "bucket"
  - "relocation"
  - "console"
  - "the"
  - "supports"
  - "relocating"
  - "storage"
  - "buckets"
---

# Bucket relocation console support

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

The Google Cloud console supports relocating Cloud Storage buckets between locations without changing bucket names.

## Extended Definition

The Google Cloud console supports relocating Cloud Storage buckets between locations without changing bucket names.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)

## Supporting Pages

### "Quickstart: Discover object storage with the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create a bucket: In the Google Cloud console, go to the Cloud Storage Buckets page.
- In the Google Cloud console, go to the Cloud Storage Buckets page.
- Create a bucket Buckets are the basic containers that hold your data in Cloud Storage.
- The Copy URL button provides a shareable URL similar to the following: https://storage.googleapis.com/ YOUR BUCKET NAME /kitten.png To remove public access from the bucket and stop sharing the image publicly: Click the Permissions tab.

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- March 03, 2025 Libraries Java 2.49.0 (2025-02-26) Features Add new Options to allow per method header values ( #2941 ) ( 297802d ) transfer-manager: Add ParallelUploadConfig.Builder#setUploadBlobInfoFactory ( #2936 ) ( 86e9ae8 ), closes #2638 Bug Fixes Categorize a WatchdogTimeoutException as retriable for grpc ReadObject ( #2954 ) ( b53bd53 ) deps: Update the Java code generator (gapic-generator-java) to 2.53.0 ( 9946d6b ) Update grpc based Storage to defer project id validation ( #2930 ) ( cc03784 ) Update kms key handling when opening a resumable upload to clear the value in the json to be null rather than empty string ( #2939 ) ( 43553de ) Dependencies Update sdk-platform-java dependencies ( #2957 ) ( 40cfda6 ) Documentation Add note about HNS support to moveBlob ( #2929 ) ( c461546 ) Python 3.1.0 (2025-02-27) Features Add api key argument to Client constructor ( #1441 ) ( c869e15 ) Add Bucket.move blob() for HNS-enabled buckets ( #1431 ) ( 24c000f ) February 26, 2025 Feature Bucket relocation for Cloud Storage is generally available ( GA ).
- December 15, 2025 Libraries Python 3.7.0 (2025-12-09) Features Auto enable mTLS when supported certificates are detected ( #1637 ) ( 4e91c54 ) Send entire object checksum in the final api call of resumable upload ( #1654 ) ( ddce7e5 ) Support urllib3 >= 2.6.0 ( #1658 ) ( 57405e9 ) Bug Fixes bucket: Move blob fails when the new blob name contains characters that need to be url encoded ( #1605 ) ( ec470a2 ) November 24, 2025 Libraries Python 3.6.0 (2025-11-17) Features Add support for partial list buckets ( #1606 ) ( 92fc2b0 ) Make return partial success and unreachable fields public for list Bucket ( #1601 ) ( 323cddd ) zb-experimental: Add async write object stream ( 5ab8103 ) zb-experimental: Add async write object stream ( #1612 ) ( 5ab8103 ) Bug Fixes Don't pass credentials to StorageClient ( #1608 ) ( 195d644 ) November 14, 2025 Feature You can now use the Google Cloud console to relocate buckets .
- Node.js Changes for @google-cloud/storage 7.10.2 (2024-04-26) Bug Fixes Use correct indices for file.from and fix tests to verify names ( #2449 ) ( d4240fa ) 7.10.1 (2024-04-22) Bug Fixes Change copyoptions type ( #2439 ) ( 2ebd7ac ) Expand types of custom metadata within FileMetadata ( #2442 ) ( 1d434a9 ) April 23, 2024 Change Default replication monitoring for multi-region and dual-region buckets in the Google Cloud console is now available for the following graphs: Percent of minutes out of RPO Percent of objects out of target Meeting RPO April 22, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Change The following regions are now generally available for dual-region storage: Mumbai ( asia-south1 ) Delhi ( asia-south2 ) Columbus ( us-east5 ) Dallas ( us-south1 ) Las Vegas ( us-west4 ) November 10, 2022 Feature You can now use the Google Cloud console to get role recommendations and policy insights for buckets.

### "Mount a Cloud Storage bucket using Cloud Storage FUSE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that you have the following role or roles on the project: Storage Admin ( roles/storage.admin ), Storage Bucket Viewer ( roles/storage.bucketViewer ) Check for the roles In the Google Cloud console, go to the IAM page.
- Make sure that you have the following role or roles on the project: Storage Admin ( roles/storage.admin ), Storage Bucket Viewer ( roles/storage.bucketViewer ) Check for the roles In the Google Cloud console, go to the IAM page.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the resources by completing the following steps: Unmount the storage bucket from your Linux machine by using the fusermount tool: fusermount -u "$HOME/mount-folder" To delete the bucket and everything inside of it, use the gcloud storage rm command with the --recursive flag: gcloud storage rm gs:// BUCKET NAME --recursive Replace BUCKET NAME with the name of your bucket.
- In this quickstart, you'll complete the following tasks: Install Cloud Storage FUSE on Debian or Ubuntu Mount the bucket as a folder on the machine Upload an object to the bucket You'll use the Google Cloud CLI to create and manage the object in your storage bucket, and you'll use the Cloud Storage FUSE CLI to mount your bucket to your machine.

