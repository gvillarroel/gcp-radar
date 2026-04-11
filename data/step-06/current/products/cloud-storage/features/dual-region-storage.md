---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.843Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Dual-region storage"
feature_slug: "dual-region-storage"
latest_feature_date: "2019-06-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/access-monitoring"
keywords:
  - "dual"
  - "region"
  - "storage"
  - "keeps"
  - "copies"
  - "of"
  - "in"
  - "two"
---

# Dual-region storage

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Dual-region storage keeps copies of data in two specific locations within a dual-region; Dual-region storage keeps copies of data in two specific locations within a dual-region.

## Extended Definition

Dual-region storage keeps copies of data in two specific locations within a dual-region; Dual-region storage keeps copies of data in two specific locations within a dual-region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring)

## Supporting Pages

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For the storage.googleapis.com/dualregion google egress bandwidth and storage.googleapis.com/dualregion internet egress bandwidth metrics, there must be non-zero historical usage of the metric before you can request an increase.
- Monitoring alerts You can use Monitoring alerting policies to inform you when metrics such as storage.googleapis.com/google egress bandwidth , storage.googleapis.com/dualregion google egress bandwidth , and storage.googleapis.com/multiregion google egress bandwidth approach a quota limit.
- Use storage.googleapis.com/dualregion internet egress bandwidth to increase Internet egress for your buckets located in dual-regions.
- Use storage.googleapis.com/dualregion google egress bandwidth to increase Google egress for your buckets located in dual-regions.

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- April 05, 2022 Feature With dual-region storage , users can now specify two regions within the same continent to create a dual-region of their choosing.
- March 17, 2025 Libraries Go 1.51.0 (2025-03-12) Features storage/append: Support appends in w1r3. ( #11483 ) ( 48bb391 ) storage: Benchmark with experimental MRD. ( #11501 ) ( 7b49152 ) storage: Implement RetryChunkDeadline for grpc writes ( #11476 ) ( 03575d7 ) storage: Specify benchmark integrity check. ( #11465 ) ( da18845 ) storage: Use ReadHandle for faster re-connect ( #11510 ) ( cac52f7 ) storage: Wrap NotFound errors for buckets and objects ( #11519 ) ( 0dd7d3d ) Bug Fixes storage/append: Report progress for appends. ( #11503 ) ( 96dbb6c ) storage: Add a safety check for readhandle ( #11549 ) ( c9edb37 ) storage: Add universe domain to defaultSignBytesFunc ( #11521 ) ( 511608b ) storage: Clone the defaultRetry to avoid modifying it directly ( #11533 ) ( 7f8d69d ) storage: Fix adding multiple range on stream with same read id ( #11584 ) ( 0bb3434 ) storage: Modify the callback of mrd to return length of data read instead of limit. ( #11687 ) ( 9e359f0 ) storage: Propagate ctx from invoke to grpc upload reqs ( #11475 ) ( 9ad9d76 ) storage: Remove duplicate routing header ( #11534 ) ( 8eeb59c ) storage: Return sentinel ErrObjectNotExist for copy and compose ( #11369 ) ( 74d0c10 ), refs #10760 storage: Wait for XML read req to finish to avoid data races ( #11527 ) ( 782e12a ) Java 2.50.0 (2025-03-14) Features Next release from main branch is 2.50.0 ( #2968 ) ( 4a69fcc ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 22e7e3d ) deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( 81c8c61 ) Improve 503 handling for json resumable uploads ( #2987 ) ( 9bc2b14 ) Update usages of String.format to explicitly pass Locale.US ( #2974 ) ( 8bcb2de ), closes #2972 Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250224-2.0.0 ( #2969 ) ( 80a40c4 ) Update googleapis/sdk-platform-java action to v2.55.1 ( #2985 ) ( e22a2de ) Update sdk-platform-java dependencies ( #2983 ) ( 9eeb82a ) Update sdk-platform-java dependencies ( #2986 ) ( 10b922a ) Feature Cloud Storage now offers the DE configurable dual-region code, which can be used when creating a dual-region bucket in europe-west3 (Frankfurt) and europe-west10 (Berlin).
- Go Changes for storage/internal/apiv2 1.44.0 (2024-10-03) Features storage/dataflux: Add dataflux interface ( #10748 ) ( cb7b0a1 ) storage/dataflux: Add range splitter #10748 ( #10899 ) ( d49da26 ) storage/dataflux: Add worksteal algorithm to fast-listing ( #10913 ) ( 015b52c ) storage/internal: Add managed folder to testIamPermissions method ( 2f0aec8 ) storage/transfermanager: Add option to StripPrefix on directory download ( #10894 ) ( 607534c ) storage/transfermanager: Add SkipIfExists option ( #10893 ) ( 7daa1bd ) storage/transfermanager: Checksum full object downloads ( #10569 ) ( c366c90 ) storage: Add direct google access side-effect imports by default ( #10757 ) ( 9ad8324 ) storage: Add full object checksum to reader.Attrs ( #10538 ) ( 245d2ea ) storage: Add support for Go 1.23 iterators ( 84461c0 ) storage: Add update time in bucketAttrs ( #10710 ) ( 5f06ae1 ), refs #9361 storage: GA gRPC client ( #10859 ) ( c7a55a2 ) storage: Introduce gRPC client-side metrics ( #10639 ) ( 437bcb1 ) storage: Support IncludeFoldersAsPrefixes for gRPC ( #10767 ) ( 65bcc59 ) Bug Fixes storage/transfermanager: Correct Attrs.StartOffset for sharded downloads ( #10512 ) ( 01a5cbb ) storage: Add retryalways policy to encryption test ( #10644 ) ( 59cfd12 ), refs #10567 storage: Add unknown host to retriable errors ( #10619 ) ( 4ec0452 ) storage: Bump dependencies ( 2ddeb15 ) storage: Bump google.golang.org/grpc@v1.64.1 ( 8ecc4e9 ) storage: Check for grpc NotFound error in HMAC test ( #10645 ) ( 3c8e88a ) storage: Disable grpc metrics using emulator ( #10870 ) ( 35ad73d ) storage: Retry gRPC DEADLINE EXCEEDED errors ( #10635 ) ( 0018415 ) storage: Update dependencies ( 257c40b ) storage: Update google.golang.org/api to v0.191.0 ( 5b32644 ) Performance Improvements storage: GRPC zerocopy codec ( #10888 ) ( aeba28f ) Documentation storage/internal: Clarify possible objectAccessControl roles ( 2f0aec8 ) storage/internal: Update dual-region bucket link ( 2f0aec8 ) September 30, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Node.js Changes for @google-cloud/storage 7.11.2 (2024-06-07) Bug Fixes Support uint8array in file.save ( #2480 ) ( 1477fe1 ) Java Changes for google-cloud-storage 2.40.0 (2024-06-06) Features Promote google-cloud-storage-control to GA ( #2575 ) ( 129f188 ) Bug Fixes Reduce Java 21 Virtual Thread Pinning in IO operations ( #2553 ) ( 498fd0b ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.31.0 ( #2571 ) ( 67ce3d6 ) Update dependency net.jqwik:jqwik to v1.8.5 ( #2563 ) ( 88f7d86 ) Documentation Managed Folders samples ( #2562 ) ( 5ffc1f2 ) Update javadoc for createFrom ( #2522 ) ( dc31e95 ) June 06, 2024 Feature Cloud Storage now offers a new pre-defined dual region, EUROPE-WEST2 (London) and EUROPE-WEST1 (Belgium).

### Access monitoring data in Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- JSON API For information on programmatically retrieving time series information for non dual-region quotas, see the ListTimeSeries command , using the following values for filter : metric.type="serviceruntime.googleapis.com/quota/rate/net usage" resource.type="consumer quota" One of the following: metric.label.quota metric="storage.googleapis.com/google egress bandwidth" metric.label.quota metric="storage.googleapis.com/rapid zonal egress bandwidth" metric.label.quota metric="storage.googleapis.com/internet egress bandwidth" metric.label.quota metric="storage.googleapis.com/multiregion google egress bandwidth" metric.label.quota metric="storage.googleapis.com/multiregion internet egress bandwidth" For information on programmatically retrieving time series information for dual-region quotas, see the ListTimeSeries command , using the following values for filter : resource.type="storage.googleapis.com/Project" One of the following: metric.type="storage.googleapis.com/quota/dualregion google egress bandwidth/usage" metric.type="storage.googleapis.com/quota/dualregion internet egress bandwidth/usage" For information about bandwidth monitoring metrics and what data they represent, see Bandwidth monitoring metrics .
- Open Cloud Storage Quotas and systems limits Google Egress Bandwidth per second per region Rapid Zonal Egress Bandwidth per second per zone Dualregion Google Egress Bandwidth per second per region per dualregion location MultiRegion Google Egress Bandwidth per second per region Internet Egress Bandwidth per second per region Dualregion Internet Egress Bandwidth per second per region per dualregion location Multiregion Internet Egress Bandwidth per second per region Rapid Zonal Bytes per zone You can also view the Google egress bandwidth usage of buckets in your project that are located in regions on the Cloud Storage monitoring page .
- In the YAML response, look for the following: storage.googleapis.com/google egress bandwidth storage.googleapis.com/rapid zonal egress bandwidth storage.googleapis.com/dualregion google egress bandwidth storage.googleapis.com/multiregion google egress bandwidth storage.googleapis.com/internet egress bandwidth storage.googleapis.com/dualregion internet egress bandwidth storage.googleapis.com/multiregion internet egress bandwidth storage.googleapis.com/rapid zonal bytes For information about bandwidth monitoring metrics and what data they represent, see Bandwidth monitoring metrics .
- If the bucket is located in a dual-region , the usage must be by resources located in either of the regions that makes up the dual-region.

