---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.824Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Cloud Storage dual-region asia1"
feature_slug: "cloud-storage-dual-region-asia1"
latest_feature_date: "2020-09-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/locations"
keywords:
  - "storage"
  - "dual"
  - "region"
  - "asia1"
  - "offers"
  - "the"
  - "tokyo"
  - "and"
---

# Cloud Storage dual-region asia1

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Cloud Storage offers the Tokyo and Osaka dual-region location asia1 for storing data across two regions.

## Extended Definition

Cloud Storage offers the Tokyo and Osaka dual-region location asia1 for storing data across two regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)

## Supporting Pages

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- For the storage.googleapis.com/dualregion google egress bandwidth and storage.googleapis.com/dualregion internet egress bandwidth metrics, there must be non-zero historical usage of the metric before you can request an increase.
- Monitoring alerts You can use Monitoring alerting policies to inform you when metrics such as storage.googleapis.com/google egress bandwidth , storage.googleapis.com/dualregion google egress bandwidth , and storage.googleapis.com/multiregion google egress bandwidth approach a quota limit.
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/google egress bandwidth to increase Google egress for your buckets located in regions.
- If the previous instructions don't work for you, or if you need bandwidth greater than 5 Tbps for egress from buckets in zones, regions, or dual-regions, contact your Technical Account Manager or Google representative.

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- March 17, 2025 Libraries Go 1.51.0 (2025-03-12) Features storage/append: Support appends in w1r3. ( #11483 ) ( 48bb391 ) storage: Benchmark with experimental MRD. ( #11501 ) ( 7b49152 ) storage: Implement RetryChunkDeadline for grpc writes ( #11476 ) ( 03575d7 ) storage: Specify benchmark integrity check. ( #11465 ) ( da18845 ) storage: Use ReadHandle for faster re-connect ( #11510 ) ( cac52f7 ) storage: Wrap NotFound errors for buckets and objects ( #11519 ) ( 0dd7d3d ) Bug Fixes storage/append: Report progress for appends. ( #11503 ) ( 96dbb6c ) storage: Add a safety check for readhandle ( #11549 ) ( c9edb37 ) storage: Add universe domain to defaultSignBytesFunc ( #11521 ) ( 511608b ) storage: Clone the defaultRetry to avoid modifying it directly ( #11533 ) ( 7f8d69d ) storage: Fix adding multiple range on stream with same read id ( #11584 ) ( 0bb3434 ) storage: Modify the callback of mrd to return length of data read instead of limit. ( #11687 ) ( 9e359f0 ) storage: Propagate ctx from invoke to grpc upload reqs ( #11475 ) ( 9ad9d76 ) storage: Remove duplicate routing header ( #11534 ) ( 8eeb59c ) storage: Return sentinel ErrObjectNotExist for copy and compose ( #11369 ) ( 74d0c10 ), refs #10760 storage: Wait for XML read req to finish to avoid data races ( #11527 ) ( 782e12a ) Java 2.50.0 (2025-03-14) Features Next release from main branch is 2.50.0 ( #2968 ) ( 4a69fcc ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 22e7e3d ) deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( 81c8c61 ) Improve 503 handling for json resumable uploads ( #2987 ) ( 9bc2b14 ) Update usages of String.format to explicitly pass Locale.US ( #2974 ) ( 8bcb2de ), closes #2972 Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250224-2.0.0 ( #2969 ) ( 80a40c4 ) Update googleapis/sdk-platform-java action to v2.55.1 ( #2985 ) ( e22a2de ) Update sdk-platform-java dependencies ( #2983 ) ( 9eeb82a ) Update sdk-platform-java dependencies ( #2986 ) ( 10b922a ) Feature Cloud Storage now offers the DE configurable dual-region code, which can be used when creating a dual-region bucket in europe-west3 (Frankfurt) and europe-west10 (Berlin).
- Node.js Changes for @google-cloud/storage 7.11.2 (2024-06-07) Bug Fixes Support uint8array in file.save ( #2480 ) ( 1477fe1 ) Java Changes for google-cloud-storage 2.40.0 (2024-06-06) Features Promote google-cloud-storage-control to GA ( #2575 ) ( 129f188 ) Bug Fixes Reduce Java 21 Virtual Thread Pinning in IO operations ( #2553 ) ( 498fd0b ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.31.0 ( #2571 ) ( 67ce3d6 ) Update dependency net.jqwik:jqwik to v1.8.5 ( #2563 ) ( 88f7d86 ) Documentation Managed Folders samples ( #2562 ) ( 5ffc1f2 ) Update javadoc for createFrom ( #2522 ) ( dc31e95 ) June 06, 2024 Feature Cloud Storage now offers a new pre-defined dual region, EUROPE-WEST2 (London) and EUROPE-WEST1 (Belgium).
- Node.js Changes for @google-cloud/storage 7.10.2 (2024-04-26) Bug Fixes Use correct indices for file.from and fix tests to verify names ( #2449 ) ( d4240fa ) 7.10.1 (2024-04-22) Bug Fixes Change copyoptions type ( #2439 ) ( 2ebd7ac ) Expand types of custom metadata within FileMetadata ( #2442 ) ( 1d434a9 ) April 23, 2024 Change Default replication monitoring for multi-region and dual-region buckets in the Google Cloud console is now available for the following graphs: Percent of minutes out of RPO Percent of objects out of target Meeting RPO April 22, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- March 20, 2023 Feature The following US regions are now available for dual-region storage: Los Angeles ( us-west2 ) Salt Lake City ( us-west3 ) Feature The following EU regions are now available for dual-region storage: Warsaw ( europe-central2 ) Madrid ( europe-southwest1 ) Frankfurt ( europe-west3 ) Milan ( europe-west8 ) Paris ( europe-west9 ) March 17, 2023 Feature Expanded Cloud Storage monitoring dashboards are now generally available (GA).

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- The following options are available when creating a bucket in a predefined dual-region: Predefined dual-region name Region Name Region Description ASIA1 ASIA-NORTHEAST1 + ASIA-NORTHEAST2 Tokyo + Osaka EUR4 EUROPE-NORTH1 + EUROPE-WEST4 Finland + Netherlands EUR5 EUROPE-WEST1 + EUROPE-WEST2 Belgium + London EUR7 EUROPE-WEST2 + EUROPE-WEST3 London + Frankfurt EUR8 EUROPE-WEST3 + EUROPE-WEST6 Frankfurt + Zürich NAM4 US-CENTRAL1 + US-EAST1 Iowa + South Carolina Request routing for dual-region buckets When you access data in a dual-region bucket from a resource that's located in one of the regions of the dual-region, the request is routed to that same region to provide the best performance.
- Lowest storage price No replication charges No outbound data transfer charges when reading data inside the same region Highest storage price Replication charges apply on write No outbound data transfer charges when reading data within either region Higher storage price than regions, but lower than dual-regions Replication charges apply on write Outbound data transfer charges always apply when reading data Location recommendations Requirements Recommended bucket location Workload examples Ultra-low latency Ultra-high bandwidth and I/O High performance Zone 1 Artificial Intelligence (AI) and Machine Learning (ML) High-performance computing Data-intensive analytics Optimized latency and bandwidth Lowest data storage cost Cross-zone redundancy Region 2 Analytics Backup and archive Optimized latency and bandwidth Cross-region redundancy, with precise control of the locations where copies of data are stored Dual-region 3 Analytics Backup and archive Disaster recovery Cross-geography data access Cross-region redundancy Multi-region Content serving Zonal locations for buckets are only available through Rapid Bucket .
- If the regions you want to pair are not available as a dual-region, consider creating a separate bucket in each region and using Storage Transfer Service Event-driven transfers to keep the buckets in sync.

