---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.662Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "DE configurable dual-region"
feature_slug: "de-configurable-dual-region"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
keywords:
  - "de"
  - "configurable"
  - "dual"
  - "region"
  - "storage"
  - "offers"
  - "the"
  - "for"
---

# DE configurable dual-region

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Cloud Storage offers the DE configurable dual-region for buckets spanning europe-west3 and europe-west10.

## Extended Definition

Cloud Storage offers the DE configurable dual-region for buckets spanning europe-west3 and europe-west10.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- March 17, 2025 Libraries Go 1.51.0 (2025-03-12) Features storage/append: Support appends in w1r3. ( #11483 ) ( 48bb391 ) storage: Benchmark with experimental MRD. ( #11501 ) ( 7b49152 ) storage: Implement RetryChunkDeadline for grpc writes ( #11476 ) ( 03575d7 ) storage: Specify benchmark integrity check. ( #11465 ) ( da18845 ) storage: Use ReadHandle for faster re-connect ( #11510 ) ( cac52f7 ) storage: Wrap NotFound errors for buckets and objects ( #11519 ) ( 0dd7d3d ) Bug Fixes storage/append: Report progress for appends. ( #11503 ) ( 96dbb6c ) storage: Add a safety check for readhandle ( #11549 ) ( c9edb37 ) storage: Add universe domain to defaultSignBytesFunc ( #11521 ) ( 511608b ) storage: Clone the defaultRetry to avoid modifying it directly ( #11533 ) ( 7f8d69d ) storage: Fix adding multiple range on stream with same read id ( #11584 ) ( 0bb3434 ) storage: Modify the callback of mrd to return length of data read instead of limit. ( #11687 ) ( 9e359f0 ) storage: Propagate ctx from invoke to grpc upload reqs ( #11475 ) ( 9ad9d76 ) storage: Remove duplicate routing header ( #11534 ) ( 8eeb59c ) storage: Return sentinel ErrObjectNotExist for copy and compose ( #11369 ) ( 74d0c10 ), refs #10760 storage: Wait for XML read req to finish to avoid data races ( #11527 ) ( 782e12a ) Java 2.50.0 (2025-03-14) Features Next release from main branch is 2.50.0 ( #2968 ) ( 4a69fcc ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 22e7e3d ) deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( 81c8c61 ) Improve 503 handling for json resumable uploads ( #2987 ) ( 9bc2b14 ) Update usages of String.format to explicitly pass Locale.US ( #2974 ) ( 8bcb2de ), closes #2972 Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250224-2.0.0 ( #2969 ) ( 80a40c4 ) Update googleapis/sdk-platform-java action to v2.55.1 ( #2985 ) ( e22a2de ) Update sdk-platform-java dependencies ( #2983 ) ( 9eeb82a ) Update sdk-platform-java dependencies ( #2986 ) ( 10b922a ) Feature Cloud Storage now offers the DE configurable dual-region code, which can be used when creating a dual-region bucket in europe-west3 (Frankfurt) and europe-west10 (Berlin).
- Go Changes for storage/internal/apiv2 1.44.0 (2024-10-03) Features storage/dataflux: Add dataflux interface ( #10748 ) ( cb7b0a1 ) storage/dataflux: Add range splitter #10748 ( #10899 ) ( d49da26 ) storage/dataflux: Add worksteal algorithm to fast-listing ( #10913 ) ( 015b52c ) storage/internal: Add managed folder to testIamPermissions method ( 2f0aec8 ) storage/transfermanager: Add option to StripPrefix on directory download ( #10894 ) ( 607534c ) storage/transfermanager: Add SkipIfExists option ( #10893 ) ( 7daa1bd ) storage/transfermanager: Checksum full object downloads ( #10569 ) ( c366c90 ) storage: Add direct google access side-effect imports by default ( #10757 ) ( 9ad8324 ) storage: Add full object checksum to reader.Attrs ( #10538 ) ( 245d2ea ) storage: Add support for Go 1.23 iterators ( 84461c0 ) storage: Add update time in bucketAttrs ( #10710 ) ( 5f06ae1 ), refs #9361 storage: GA gRPC client ( #10859 ) ( c7a55a2 ) storage: Introduce gRPC client-side metrics ( #10639 ) ( 437bcb1 ) storage: Support IncludeFoldersAsPrefixes for gRPC ( #10767 ) ( 65bcc59 ) Bug Fixes storage/transfermanager: Correct Attrs.StartOffset for sharded downloads ( #10512 ) ( 01a5cbb ) storage: Add retryalways policy to encryption test ( #10644 ) ( 59cfd12 ), refs #10567 storage: Add unknown host to retriable errors ( #10619 ) ( 4ec0452 ) storage: Bump dependencies ( 2ddeb15 ) storage: Bump google.golang.org/grpc@v1.64.1 ( 8ecc4e9 ) storage: Check for grpc NotFound error in HMAC test ( #10645 ) ( 3c8e88a ) storage: Disable grpc metrics using emulator ( #10870 ) ( 35ad73d ) storage: Retry gRPC DEADLINE EXCEEDED errors ( #10635 ) ( 0018415 ) storage: Update dependencies ( 257c40b ) storage: Update google.golang.org/api to v0.191.0 ( 5b32644 ) Performance Improvements storage: GRPC zerocopy codec ( #10888 ) ( aeba28f ) Documentation storage/internal: Clarify possible objectAccessControl roles ( 2f0aec8 ) storage/internal: Update dual-region bucket link ( 2f0aec8 ) September 30, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Node.js Changes for @google-cloud/storage 7.11.2 (2024-06-07) Bug Fixes Support uint8array in file.save ( #2480 ) ( 1477fe1 ) Java Changes for google-cloud-storage 2.40.0 (2024-06-06) Features Promote google-cloud-storage-control to GA ( #2575 ) ( 129f188 ) Bug Fixes Reduce Java 21 Virtual Thread Pinning in IO operations ( #2553 ) ( 498fd0b ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.31.0 ( #2571 ) ( 67ce3d6 ) Update dependency net.jqwik:jqwik to v1.8.5 ( #2563 ) ( 88f7d86 ) Documentation Managed Folders samples ( #2562 ) ( 5ffc1f2 ) Update javadoc for createFrom ( #2522 ) ( dc31e95 ) June 06, 2024 Feature Cloud Storage now offers a new pre-defined dual region, EUROPE-WEST2 (London) and EUROPE-WEST1 (Belgium).
- Node.js Changes for @google-cloud/storage 7.10.2 (2024-04-26) Bug Fixes Use correct indices for file.from and fix tests to verify names ( #2449 ) ( d4240fa ) 7.10.1 (2024-04-22) Bug Fixes Change copyoptions type ( #2439 ) ( 2ebd7ac ) Expand types of custom metadata within FileMetadata ( #2442 ) ( 1d434a9 ) April 23, 2024 Change Default replication monitoring for multi-region and dual-region buckets in the Google Cloud console is now available for the following graphs: Percent of minutes out of RPO Percent of objects out of target Meeting RPO April 22, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- Lowest storage price No replication charges No outbound data transfer charges when reading data inside the same region Highest storage price Replication charges apply on write No outbound data transfer charges when reading data within either region Higher storage price than regions, but lower than dual-regions Replication charges apply on write Outbound data transfer charges always apply when reading data Location recommendations Requirements Recommended bucket location Workload examples Ultra-low latency Ultra-high bandwidth and I/O High performance Zone 1 Artificial Intelligence (AI) and Machine Learning (ML) High-performance computing Data-intensive analytics Optimized latency and bandwidth Lowest data storage cost Cross-zone redundancy Region 2 Analytics Backup and archive Optimized latency and bandwidth Cross-region redundancy, with precise control of the locations where copies of data are stored Dual-region 3 Analytics Backup and archive Disaster recovery Cross-geography data access Cross-region redundancy Multi-region Content serving Zonal locations for buckets are only available through Rapid Bucket .
- Note: Unlike buckets in other locations, which bill storage usage against the SKUs associated with their location code, buckets in configurable dual-regions bill storage usage against SKUs in both of their underlying regions.
- The following regions are available when creating a configurable dual-region bucket: Location code Region Name Region Description ASIA ASIA-EAST1 Taiwan ASIA-SOUTHEAST1 Singapore AU AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne CA NORTHAMERICA-NORTHEAST1 Montréal NORTHAMERICA-NORTHEAST2 Toronto DE EUROPE-WEST3 Frankfurt EUROPE-WEST10 Berlin EU EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 1 Finland EUROPE-SOUTHWEST1 Madrid EUROPE-WEST1 Belgium EUROPE-WEST3 5 Frankfurt EUROPE-WEST4 1 Netherlands EUROPE-WEST8 4 Milan EUROPE-WEST9 Paris EUROPE-WEST10 5 Berlin EUROPE-WEST12 4 Turin IN ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi IT EUROPE-WEST8 Milan EUROPE-WEST12 Turin US US-CENTRAL1 2 Iowa US-EAST1 2 South Carolina US-EAST4 Northern Virginia US-EAST5 3 Columbus US-SOUTH1 Dallas US-WEST1 Oregon US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas 1 The EUROPE-NORTH1 and EUROPE-WEST4 dual-region pairing is only available as a predefined dual-region .

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- For the storage.googleapis.com/dualregion google egress bandwidth and storage.googleapis.com/dualregion internet egress bandwidth metrics, there must be non-zero historical usage of the metric before you can request an increase.
- Monitoring alerts You can use Monitoring alerting policies to inform you when metrics such as storage.googleapis.com/google egress bandwidth , storage.googleapis.com/dualregion google egress bandwidth , and storage.googleapis.com/multiregion google egress bandwidth approach a quota limit.
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/google egress bandwidth to increase Google egress for your buckets located in regions.
- If the previous instructions don't work for you, or if you need bandwidth greater than 5 Tbps for egress from buckets in zones, regions, or dual-regions, contact your Technical Account Manager or Google representative.

