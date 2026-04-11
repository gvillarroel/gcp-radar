---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.854Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "C++ Cloud Storage Client Library"
feature_slug: "c-cloud-storage-client-library"
latest_feature_date: "2018-10-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage"
  - "https://docs.cloud.google.com/storage/docs/release-notes"
keywords:
  - "storage"
  - "client"
  - "library"
  - "the"
  - "provides"
  - "for"
  - "interacting"
  - "with"
---

# C++ Cloud Storage Client Library

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

The C++ Cloud Storage Client Library provides a client library for interacting with Cloud Storage.

## Extended Definition

The C++ Cloud Storage Client Library provides a client library for interacting with Cloud Storage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storage/latest](https://docs.cloud.google.com/python/docs/reference/storage/latest)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)

## Supporting Pages

### "Python Client for Google Cloud Storage \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest](https://docs.cloud.google.com/python/docs/reference/storage/latest)
- Source ID: `site-python-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Client () The name for the new bucket bucket name = "my-new-bucket" Creates the new bucket bucket = storage client. create bucket (bucket name) print(f"Bucket {bucket.name} created.") Tracing With OpenTelemetry This is a PREVIEW FEATURE: Coverage and functionality are still in development and subject to change.
- Product Documentation Client Library Documentation github.com/googleapis/python-storage Certain control plane and long-running operations for Cloud Storage (including Folder and Managed Folder operations) are supported via the Storage Control Client .
- Read the Client Library Documentation for Google Cloud Storage API to see other available methods on the client.
- To enable OpenTelemetry tracing in the Cloud Storage client, first install OpenTelemetry: pip install google-cloud-storage[tracing] Set the ENABLE GCS PYTHON CLIENT OTEL TRACES environment variable to selectively opt-in tracing for the Cloud Storage client: export ENABLE GCS PYTHON CLIENT OTEL TRACES=True You will also need to tell OpenTelemetry which exporter to use.

### "Package com.google.cloud.storage (2.64.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- Source ID: `site-java-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Multipart Upload Client A client for interacting with Google Cloud Storage's Multipart Upload API.
- Storage Channel Utils Set of utility methods for working with non-blocking channels returned by this library. com. google. cloud. storage.
- This class provides factories which allow you to select the appropriate strategy for com. google. cloud. storage.
- Versions 1.50.0-1.111.2 of this library don’t support the CustomTimeBefore, com. google. cloud. storage.

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Java Changes for google-cloud-storage 2.46.0 (2024-12-13) Features Introduce java.time methods and variables ( #2826 ) ( baf30ee ) Bug Fixes Update retry lifecycle when attempting to decompress a gzip object ( #2840 ) ( 7dba13c ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20241113-2.0.0 ( #2823 ) ( 503e518 ) Update dependency com.google.apis:google-api-services-storage to v1-rev20241206-2.0.0 ( #2839 ) ( 8f3cdd3 ) Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.50.0 ( #2825 ) ( 9aa68a6 ) Update sdk-platform-java dependencies ( #2841 ) ( 2a70481 ) Documentation Add samples for soft delete (objects) ( #2754 ) ( 41bc807 ) Python Changes for google-cloud-storage 3.0.0rc1 (2024-12-12) ⚠ BREAKING CHANGES The default checksum strategy for uploads has changed from None to "auto" ( #1383 ) (5375fa0) The default checksum strategy for downloads has changed from "md5" to "auto" ( #1383 ) (5375fa0) Deprecated positional argument "num retries" has been removed ( #1377 ) (58b5040) Deprecated argument "text mode" has been removed ( #1379 ) (4d20a8e) Media operation retries now work identically to other retries, which may impact default retry settings ( #1385 ) (f3517bf) Blob.download to filename() deletes the empty destination file on a 404 Features Add "auto" checksum option and make default ( #1383 ) ( 5375fa0 ) Blob.download to filename() deletes the empty destination file on a 404 ( 066be2d ) Deprecated argument "text mode" has been removed ( #1379 ) (4d20a8e) ( 4e9a382 ) Deprecated positional argument "num retries" has been removed ( #1377 ) (58b5040) ( 4e9a382 ) Enable custom predicates for media operations ( #1385 ) ( f3517bf ) Integrate google-resumable-media ( #1283 ) ( bd917b4 ) Media operation retries now work identically to other retries, which may impact default retry settings ( #1385 ) (f3517bf) ( 4e9a382 ) The default checksum strategy for downloads has changed from "md5" to "auto" ( #1383 ) (5375fa0) ( 4e9a382 ) The default checksum strategy for uploads has changed from None to "auto" ( #1383 ) (5375fa0) ( 4e9a382 ) Bug Fixes Cancel upload when BlobWriter exits with exception ( #1243 ) ( df107d2 ) Changed name of methods Blob.from string() and Bucket.from string() to from uri() ( #1335 ) ( 58c1d03 ) Correctly calculate starting offset for retries of ranged reads ( #1376 ) ( 7b6c9a0 ) Remove deprecated num retries argument ( #1377 ) ( 58b5040 ) Remove deprecated text mode argument ( #1379 ) ( 4d20a8e ) Documentation Fix issue with exceptions.py documentation ( #1328 ) ( 22b8c30 ) December 09, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Go Changes for storage/internal/apiv2 1.48.0 (2024-12-05) Features storage/dataflux: Run worksteal listing parallel to sequential listing ( #10966 ) ( 3005f5a ) storage: Add Writer.ChunkTransferTimeout ( #11111 ) ( fd1db20 ) storage: Allow non default service account ( #11137 ) ( 19f01c3 ) Bug Fixes storage: Add backoff to gRPC write retries ( #11200 ) ( a7db927 ) storage: Correct direct connectivity check ( #11152 ) ( a75c8b0 ) storage: Disable soft delete policy using 0 retentionDurationSeconds ( #11226 ) ( f087721 ) storage: Retry SignBlob call for URL signing ( #11154 ) ( f198452 ) Python Changes for google-cloud-storage 2.19.0 (2024-11-21) Features Add integration test for universe domain ( #1346 ) ( 02a972d ) Add restore bucket and handling for soft-deleted buckets ( #1365 ) ( ab94efd ) Add support for restore token ( #1369 ) ( 06ed15b ) IAM signBlob retry and universe domain support ( #1380 ) ( abc8061 ) Bug Fixes Allow signed post policy v4 with service account and token ( #1356 ) ( 8ec02c0 ) Do not spam the log with checksum related INFO messages when downloading using transfer manager ( #1357 ) ( 42392ef ) November 25, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Go Changes for storage/internal/apiv2 1.41.0 (2024-05-13) Features storage/control: Make Managed Folders operations public ( 264a6dc ) storage: Support for soft delete policies and restore ( #9520 ) ( 985deb2 ) Bug Fixes storage/control: An existing resource pattern value projects/{project}/buckets/{bucket}/managedFolders/{managedFolder= } to resource definition storage.googleapis.com/ManagedFolder is removed ( 3e25053 ) storage: Add internaloption.WithDefaultEndpointTemplate ( 3b41408 ) storage: Bump x/net to v0.24.0 ( ba31ed5 ) storage: Disable gax retries for gRPC ( #9747 ) ( bbfc0ac ) storage: More strongly match regex ( #9706 ) ( 3cfc8eb ), refs #9705 storage: Retry net.OpError on connection reset ( #10154 ) ( 54fab10 ), refs #9478 storage: Wrap error when MaxAttempts is hit ( #9767 ) ( 9cb262b ), refs #9720 Documentation storage/control: Update storage control documentation and add PHP for publishing ( 1d757c6 ) May 13, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Node.js Changes for @google-cloud/storage 7.10.2 (2024-04-26) Bug Fixes Use correct indices for file.from and fix tests to verify names ( #2449 ) ( d4240fa ) 7.10.1 (2024-04-22) Bug Fixes Change copyoptions type ( #2439 ) ( 2ebd7ac ) Expand types of custom metadata within FileMetadata ( #2442 ) ( 1d434a9 ) April 23, 2024 Change Default replication monitoring for multi-region and dual-region buckets in the Google Cloud console is now available for the following graphs: Percent of minutes out of RPO Percent of objects out of target Meeting RPO April 22, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .

