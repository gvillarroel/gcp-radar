---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.897Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Hierarchical namespace support in Cloud Storage FUSE"
feature_slug: "hierarchical-namespace-support-in-cloud-storage-fuse"
latest_feature_date: "2024-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/introduction"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket"
  - "https://docs.cloud.google.com/storage/docs/gcsfuse-cli"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage FUSE supports mounting buckets with hierarchical namespace enabled.

## Extended Definition

Cloud Storage FUSE supports mounting buckets with hierarchical namespace enabled.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- [https://docs.cloud.google.com/storage/docs/gcsfuse-cli](https://docs.cloud.google.com/storage/docs/gcsfuse-cli)

## Supporting Pages

### Cloud Storage overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- While buckets are suitable for most data storage use cases, you can set up optional configurations and features on a bucket to make it more suitable for high-performance workloads specifically: Hierarchical namespace : Buckets can have hierarchical namespace enabled, which lets you store your data in a logical file system structure by using folders.
- When you locate buckets in zones, you get the ability to colocate your objects with your compute resources, automatic enablement of hierarchical namespace, and new APIs for streaming reads and appendable writes.
- Buckets with hierarchical namespace enabled offer up to 8 times higher initial queries per second (QPS) limits for reading and writing objects compared to buckets without hierarchical namespace enabled.
- Folder : Buckets with hierarchical namespace enabled can contain folders.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- If you're using the Cloud Storage FUSE CSI driver to mount your buckets to your local file system in Google Kubernetes Engine, see Mount options for the Cloud Storage FUSE CSI driver .
- The Cloud Storage FUSE command line interface (CLI), or gcsfuse CLI, is used to mount Cloud Storage buckets as file systems on a local machine.
- This option should also be set if you're using Cloud Storage FUSE with public buckets.
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.

### "Mount a Cloud Storage bucket using Cloud Storage FUSE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Learn how Vertex AI uses Cloud Storage FUSE to mount Cloud Storage buckets for custom training jobs.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the resources by completing the following steps: Unmount the storage bucket from your Linux machine by using the fusermount tool: fusermount -u "$HOME/mount-folder" To delete the bucket and everything inside of it, use the gcloud storage rm command with the --recursive flag: gcloud storage rm gs:// BUCKET NAME --recursive Replace BUCKET NAME with the name of your bucket.
- In this quickstart, you'll complete the following tasks: Install Cloud Storage FUSE on Debian or Ubuntu Mount the bucket as a folder on the machine Upload an object to the bucket You'll use the Google Cloud CLI to create and manage the object in your storage bucket, and you'll use the Cloud Storage FUSE CLI to mount your bucket to your machine.
- Mount the bucket To mount the bucket to your local file system, complete the following steps: Generate Application Default Credentials using the gcloud auth application-default login command: gcloud auth application-default login Cloud Storage FUSE automatically loads the credentials.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/gcsfuse-cli](https://docs.cloud.google.com/storage/docs/gcsfuse-cli)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- If you're using the Cloud Storage FUSE CSI driver to mount your buckets to your local file system in Google Kubernetes Engine, see Mount options for the Cloud Storage FUSE CSI driver .
- The Cloud Storage FUSE command line interface (CLI), or gcsfuse CLI, is used to mount Cloud Storage buckets as file systems on a local machine.
- This option should also be set if you're using Cloud Storage FUSE with public buckets.
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.

