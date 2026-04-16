---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.894Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Cloud Storage gRPC support"
feature_slug: "cloud-storage-grpc-support"
latest_feature_date: "2024-10-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options"
  - "https://docs.cloud.google.com/storage/docs/xml-api/overview"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage"
keywords:
  - "storage"
  - "grpc"
  - "supports"
  - "interaction"
  - "over"
---

# Cloud Storage gRPC support

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage supports interaction over gRPC.

## Extended Definition

Cloud Storage supports interaction over gRPC.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)

## Supporting Pages

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- This severity level also includes the information provided in the info , warning , and error severity levels. trace : contains granular details about each Cloud Storage FUSE operation and function call, outlining the gcsfuse interaction with the kernel FUSE driver and Cloud Storage.
- When this option is not set, Application Default Credentials are used. --limit-bytes-per-sec Specifies the bandwidth limit at which Cloud Storage FUSE can read data from Cloud Storage, measured over a 30-second window.
- The custom endpoint must support the equivalent resources and operations as the Cloud Storage gRPC endpoint, storage.googleapis.com:443 , or the Cloud Storage JSON endpoint, https://storage.googleapis.com/storage/v1 .

### XML API overview \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Cloud Storage Reference Send feedback XML API overview Stay organized with collections Save and categorize content based on your preferences.
- Overview The Cloud Storage XML API is a RESTful interface that lets you manage Cloud Storage data in a programmatic way.
- The Cloud Storage XML API also supports a variety of query string parameters, which you can use to scope your requests.
- This document gives an overview of the Cloud Storage XML API and is intended for software developers.

### Cloud Storage FUSE configuration file \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- 0s , which specifies no timeout limit-bytes-per-sec Specifies the bandwidth limit at which Cloud Storage FUSE can read data from Cloud Storage, measured over a 30-second window. "-1" , which specifies no limit. limit-ops-per-sec Specifies a limit for operations performed per second, measured over a 30-second window.
- This severity level also includes the information provided in the info , warning , and error severity levels. trace : contains granular details about each Cloud Storage FUSE operation and function call, outlining the gcsfuse interaction with the kernel FUSE driver and Cloud Storage.
- String value representing a "project ID" . "" client-protocol Specifies the protocol used for communicating with the Cloud Storage backend. http1 for HTTP/1.1 http2 for HTTP/2 grpc for gRPC .

### "Package com.google.cloud.storage (2.64.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- Source ID: `site-java-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- See Also: BlobWriteSessionConfigs#bufferToDiskThenUpload(Path) , Storage#blobWriteSession(BlobInfo, BlobWriteOption...) , BlobWriteSessionConfigs#bufferToDiskThenUpload(Collection) , GrpcStorageOptions.Builder#setBlobWriteSessionConfig(BlobWriteSessionConfig) com. google. cloud. storage.
- An overview of the permissions available to Storage and the capabilities they grant can be found in the Google Cloud Storage IAM documentation. com. google. cloud. storage.
- To override source blob's information supply a BlobInfo to the CopyRequest using either Storage.CopyRequest.Builder#setTarget(BlobInfo, com. google. cloud. storage.
- Grpc Storage Rpc Factory Internal implementation detail, only public to allow for java.io.Serializable compatibility in com.google.cloud.ServiceOptions .

