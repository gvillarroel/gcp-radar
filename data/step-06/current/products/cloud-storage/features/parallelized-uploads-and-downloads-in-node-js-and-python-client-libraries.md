---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.731Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Parallelized uploads and downloads in Node.js and Python client libraries"
feature_slug: "parallelized-uploads-and-downloads-in-node-js-and-python-client-libraries"
latest_feature_date: "2023-10-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob"
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions"
keywords:
  - "parallelized"
  - "uploads"
  - "and"
  - "downloads"
  - "in"
  - "node"
  - "js"
  - "python"
---

# Parallelized uploads and downloads in Node.js and Python client libraries

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

The Node.js and Python Cloud Storage client libraries support parallelized uploads and downloads for improved transfer performance.

## Extended Definition

The Node.js and Python Cloud Storage client libraries support parallelized uploads and downloads for improved transfer performance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Node.js Changes for @google-cloud/storage 7.12.1 (2024-08-07) Bug Fixes deps: Update fast-xml-parser to 4.4.1 due to security vulnerability ( #2505 ) ( b97d474 ) Python Changes for google-cloud-storage 2.18.2 (2024-08-08) Bug Fixes Add regression test for range read retry issue and bump dependency to fix ( #1338 ) ( 0323647 ) 2.18.1 (2024-08-05) Bug Fixes Properly escape URL construction for XML MPU API ( #1333 ) ( bf4d0e0 ) August 05, 2024 Feature You can now use parallel downloads with Cloud Storage FUSE to accelerate read performance of large files over 1 GB in size.
- October 12, 2023 Feature The Node.js and Python client libraries now have parallelized upload and download options, improving their performance.
- Java Changes for google-cloud-storage 2.46.0 (2024-12-13) Features Introduce java.time methods and variables ( #2826 ) ( baf30ee ) Bug Fixes Update retry lifecycle when attempting to decompress a gzip object ( #2840 ) ( 7dba13c ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20241113-2.0.0 ( #2823 ) ( 503e518 ) Update dependency com.google.apis:google-api-services-storage to v1-rev20241206-2.0.0 ( #2839 ) ( 8f3cdd3 ) Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.50.0 ( #2825 ) ( 9aa68a6 ) Update sdk-platform-java dependencies ( #2841 ) ( 2a70481 ) Documentation Add samples for soft delete (objects) ( #2754 ) ( 41bc807 ) Python Changes for google-cloud-storage 3.0.0rc1 (2024-12-12) ⚠ BREAKING CHANGES The default checksum strategy for uploads has changed from None to "auto" ( #1383 ) (5375fa0) The default checksum strategy for downloads has changed from "md5" to "auto" ( #1383 ) (5375fa0) Deprecated positional argument "num retries" has been removed ( #1377 ) (58b5040) Deprecated argument "text mode" has been removed ( #1379 ) (4d20a8e) Media operation retries now work identically to other retries, which may impact default retry settings ( #1385 ) (f3517bf) Blob.download to filename() deletes the empty destination file on a 404 Features Add "auto" checksum option and make default ( #1383 ) ( 5375fa0 ) Blob.download to filename() deletes the empty destination file on a 404 ( 066be2d ) Deprecated argument "text mode" has been removed ( #1379 ) (4d20a8e) ( 4e9a382 ) Deprecated positional argument "num retries" has been removed ( #1377 ) (58b5040) ( 4e9a382 ) Enable custom predicates for media operations ( #1385 ) ( f3517bf ) Integrate google-resumable-media ( #1283 ) ( bd917b4 ) Media operation retries now work identically to other retries, which may impact default retry settings ( #1385 ) (f3517bf) ( 4e9a382 ) The default checksum strategy for downloads has changed from "md5" to "auto" ( #1383 ) (5375fa0) ( 4e9a382 ) The default checksum strategy for uploads has changed from None to "auto" ( #1383 ) (5375fa0) ( 4e9a382 ) Bug Fixes Cancel upload when BlobWriter exits with exception ( #1243 ) ( df107d2 ) Changed name of methods Blob.from string() and Bucket.from string() to from uri() ( #1335 ) ( 58c1d03 ) Correctly calculate starting offset for retries of ranged reads ( #1376 ) ( 7b6c9a0 ) Remove deprecated num retries argument ( #1377 ) ( 58b5040 ) Remove deprecated text mode argument ( #1379 ) ( 4d20a8e ) Documentation Fix issue with exceptions.py documentation ( #1328 ) ( 22b8c30 ) December 09, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Node.js Changes for @google-cloud/storage 7.10.0 (2024-04-15) Features Add ability to create a File object from URL ( #2432 ) ( 1b71fcc ) Allow setting contentEncoding during compose ( #2431 ) ( 6e81e05 ) Bug Fixes Destroy pipeline streams when returned stream errors ( #2437 ) ( fe1ac65 ) Remove extraneous mime-types package in favor of mime ( #2435 ) ( 63a71f2 ) Java Changes for google-cloud-storage 2.37.0 (2024-04-19) Features Adds a ZeroCopy response marshaller for grpc ReadObject handling ( #2489 ) ( 8c7404d ) Port BufferToDiskThenUpload to work with HttpStorageOptions ( #2473 ) ( d84e255 ) Port DefaultBlobWriteSessionConfig to work with HttpStorageOptions ( #2472 ) ( e5772a4 ) Port ParallelCompositeUploadBlobWriteSessionConfig to work with HttpStorageOptions ( #2474 ) ( 3bf6026 ) Transfer Manager ParallelCompositeUploads ( #2494 ) ( 8b54549 ) Bug Fixes Ensure all BlobWriteSession types conform to the semantics specified in BlobWriteSession ( #2482 ) ( d47afcf ) Fix BidiBlobWriteSessionConfigs to respect preconditions ( #2481 ) ( 955d78a ) Update ApiaryUnbufferedWritableByteChannel to be graceful of non-quantum aligned write calls ( #2493 ) ( f548335 ) Update BidiBlobWriteSessionConfig to respect a provided bufferSize ( #2471 ) ( e1fb857 ) Update grpc handling of IAM Policy etag to account for base64 encoding ( #2499 ) ( 032f2f2 ) Update Grpc Retry Conformance after new additions to testbench ( #2309 ) ( 09043c5 ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20240319-2.0.0 ( #2460 ) ( 9c2ee90 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.28.1 ( #2467 ) ( c12f329 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.29.0 ( #2502 ) ( 7ed8446 ) Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.43.0 ( #2459 ) ( 2dc4748 ) Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.44.0 ( #2497 ) ( 9b0253c ) Documentation Add summary and reference docs for Storage Control API to readme ( #2485 ) ( 70fd088 ) Create Samples for transfer manager ( #2492 ) ( e2030b2 ) April 05, 2024 Feature Custom constraints for Cloud Storage are now available.

### Class Blob (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob)
- Source ID: `site-python-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For both uploads and downloads, the following arguments are supported: if generation match if generation not match if metageneration match if metageneration not match timeout retry For downloads only, the following additional arguments are supported: raw download single shot download For uploads only, the following additional arguments are supported: content type predefined acl checksum Parameters Name Description mode str (Optional) A mode string, as per standard Python open() semantics.The first character must be 'r', to open the blob for reading, or 'w' to open it for writing.
- Pass 'strict' to raise a ValueError exception if there is an encoding error (the default of None has the same effect), or pass 'ignore' to ignore errors. (Note that ignoring encoding errors can lead to data loss.) Other more rarely-used options are also available; see the Python 'io' module documentation for 'io.TextIOWrapper' for a complete list. newline str (Optional) For text mode only, controls how line endings are handled.
- However, that behavior is incompatible with some consumers and wrappers of file objects in Python, such as zipfile.ZipFile or io.TextIOWrapper.
- The default is "auto", which will try to detect if the C extension for crc32c is installed and fall back to md5 otherwise. predefined acl str (Optional) Predefined access control list if generation match long (Optional) See :ref: using-if-generation-match if generation not match long (Optional) See :ref: using-if-generation-not-match if metageneration match long (Optional) See :ref: using-if-metageneration-match if metageneration not match long (Optional) See :ref: using-if-metageneration-not-match retry google.api core.retry.Retry or google.cloud.storage.retry.ConditionalRetryPolicy (Optional) How to retry the RPC.

### "Set and manage IAM policies on buckets \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . def remove bucket conditional iam binding bucket name : The ID of your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name role = "roles/storage.objectViewer" title = "Title" description = "Description" expression = "resource.name.startsWith( \" projects/ /buckets/bucket-name/objects/prefix-a- \" )" bucket . policy requested policy version : 3 do policy policy . version = 3 binding to remove = nil policy . bindings . each do b condition = { title : title , description : description , expression : expression } if b . role == role && b . condition && b . condition . title == title && b . condition . description == description && b . condition . expression == expression binding to remove = b end end if binding to remove policy . bindings . remove binding to remove puts "Conditional Binding was removed." else puts "No matching conditional binding found." end end end REST APIs JSON Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . def add bucket conditional iam binding bucket name : The ID of your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name role = "roles/storage.objectViewer" member = "group:example@google.com" title = "Title" description = "Description" expression = "resource.name.startsWith( \" projects/ /buckets/bucket-name/objects/prefix-a- \" )" bucket . policy requested policy version : 3 do policy policy . version = 3 policy . bindings . insert ( role : role , members : member , condition : { title : title , description : description , expression : expression } ) end puts "Added #{ member } with role #{ role } to #{ bucket name } with condition #{ title } #{ description } #{ expression } " end REST APIs JSON Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . def view bucket iam members bucket name : The ID of your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name policy = bucket . policy requested policy version : 3 policy . bindings . each do binding puts "Role: #{ binding . role } " puts "Members: #{ binding . members } " if a conditional binding exists print the condition. if binding . condition puts "Condition Title: #{ binding . condition . title } " puts "Condition Description: #{ binding . condition . description } " puts "Condition Expression: #{ binding . condition . expression } " end end end REST APIs JSON Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . def remove bucket iam member bucket name : The ID of your GCS bucket bucket name = "your-unique-bucket-name" For more information please read: https://cloud.google.com/storage/docs/access-control/iam require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name role = "roles/storage.objectViewer" member = "group:example@google.com" bucket . policy requested policy version : 3 do policy policy . bindings . each do binding if binding . role == role && binding . condition . nil? binding . members . delete member end end end puts "Removed #{ member } with role #{ role } from #{ bucket name } " end REST APIs JSON Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.

