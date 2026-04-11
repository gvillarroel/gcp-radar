---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.694Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Predefined dual-region pairing: Frankfurt and Zurich"
feature_slug: "predefined-dual-region-pairing-frankfurt-and-zurich"
latest_feature_date: "2024-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/release-notes"
keywords:
  - "predefined"
  - "dual"
  - "region"
  - "pairing"
  - "frankfurt"
  - "and"
  - "zurich"
  - "storage"
---

# Predefined dual-region pairing: Frankfurt and Zurich

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Cloud Storage supports Frankfurt and Zurich as a predefined dual-region bucket pairing.

## Extended Definition

Cloud Storage supports Frankfurt and Zurich as a predefined dual-region bucket pairing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)

## Supporting Pages

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- The following regions are available when creating a configurable dual-region bucket: Location code Region Name Region Description ASIA ASIA-EAST1 Taiwan ASIA-SOUTHEAST1 Singapore AU AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne CA NORTHAMERICA-NORTHEAST1 Montréal NORTHAMERICA-NORTHEAST2 Toronto DE EUROPE-WEST3 Frankfurt EUROPE-WEST10 Berlin EU EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 1 Finland EUROPE-SOUTHWEST1 Madrid EUROPE-WEST1 Belgium EUROPE-WEST3 5 Frankfurt EUROPE-WEST4 1 Netherlands EUROPE-WEST8 4 Milan EUROPE-WEST9 Paris EUROPE-WEST10 5 Berlin EUROPE-WEST12 4 Turin IN ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi IT EUROPE-WEST8 Milan EUROPE-WEST12 Turin US US-CENTRAL1 2 Iowa US-EAST1 2 South Carolina US-EAST4 Northern Virginia US-EAST5 3 Columbus US-SOUTH1 Dallas US-WEST1 Oregon US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas 1 The EUROPE-NORTH1 and EUROPE-WEST4 dual-region pairing is only available as a predefined dual-region .
- The following options are available when creating a bucket in a predefined dual-region: Predefined dual-region name Region Name Region Description ASIA1 ASIA-NORTHEAST1 + ASIA-NORTHEAST2 Tokyo + Osaka EUR4 EUROPE-NORTH1 + EUROPE-WEST4 Finland + Netherlands EUR5 EUROPE-WEST1 + EUROPE-WEST2 Belgium + London EUR7 EUROPE-WEST2 + EUROPE-WEST3 London + Frankfurt EUR8 EUROPE-WEST3 + EUROPE-WEST6 Frankfurt + Zürich NAM4 US-CENTRAL1 + US-EAST1 Iowa + South Carolina Request routing for dual-region buckets When you access data in a dual-region bucket from a resource that's located in one of the regions of the dual-region, the request is routed to that same region to provide the best performance.
- The following types of dual-regions are supported in Cloud Storage: A predefined dual-region is identified by a unique location code and represents two specific regions.
- 2 The US-CENTRAL1 and US-EAST1 dual-region pairing is only available as a predefined dual-region .

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring alerts You can use Monitoring alerting policies to inform you when metrics such as storage.googleapis.com/google egress bandwidth , storage.googleapis.com/dualregion google egress bandwidth , and storage.googleapis.com/multiregion google egress bandwidth approach a quota limit.
- For the storage.googleapis.com/dualregion google egress bandwidth and storage.googleapis.com/dualregion internet egress bandwidth metrics, there must be non-zero historical usage of the metric before you can request an increase.
- Use storage.googleapis.com/dualregion internet egress bandwidth to increase Internet egress for your buckets located in dual-regions.
- Use storage.googleapis.com/dualregion google egress bandwidth to increase Google egress for your buckets located in dual-regions.

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Go Changes for storage/internal/apiv2 1.43.0 (2024-07-03) Features storage/transfermanager: Add DownloadDirectory ( #10430 ) ( 0d0e5dd ) storage/transfermanager: Automatically shard downloads ( #10379 ) ( 05816f9 ) Bug Fixes storage/transfermanager: WaitAndClose waits for Callbacks to finish ( #10504 ) ( 0e81002 ), refs #10502 storage: Allow empty soft delete on Create ( #10394 ) ( d8bd2c1 ), refs #10380 storage: Bump google.golang.org/api@v0.187.0 ( 8fa9e39 ) storage: Retry broken pipe error ( #10374 ) ( 2f4daa1 ), refs #9178 Documentation storage/control: Remove allowlist note from Folders RPCs ( d6c543c ) Feature You can now specify London ( europe-west2 ) and Frankfurt ( europe-west3 ) as a predefined dual-region pairing.
- Node.js Changes for @google-cloud/storage 7.11.3 (2024-07-09) Bug Fixes Error serialization in resumable-upload.ts ( #2493 ) ( c2e555c ) Handle unhandled error in startResumableUpload ( #2495 ) ( d5257ba ) Make CreateBucketRequest extend from BucketMetadata to allow all… ( #2489 ) ( 013a5a4 ) July 11, 2024 Feature You can now specify Frankfurt (europe-west3) and Zürich (europe-west6) as a predefined dual-region pairing.
- March 17, 2025 Libraries Go 1.51.0 (2025-03-12) Features storage/append: Support appends in w1r3. ( #11483 ) ( 48bb391 ) storage: Benchmark with experimental MRD. ( #11501 ) ( 7b49152 ) storage: Implement RetryChunkDeadline for grpc writes ( #11476 ) ( 03575d7 ) storage: Specify benchmark integrity check. ( #11465 ) ( da18845 ) storage: Use ReadHandle for faster re-connect ( #11510 ) ( cac52f7 ) storage: Wrap NotFound errors for buckets and objects ( #11519 ) ( 0dd7d3d ) Bug Fixes storage/append: Report progress for appends. ( #11503 ) ( 96dbb6c ) storage: Add a safety check for readhandle ( #11549 ) ( c9edb37 ) storage: Add universe domain to defaultSignBytesFunc ( #11521 ) ( 511608b ) storage: Clone the defaultRetry to avoid modifying it directly ( #11533 ) ( 7f8d69d ) storage: Fix adding multiple range on stream with same read id ( #11584 ) ( 0bb3434 ) storage: Modify the callback of mrd to return length of data read instead of limit. ( #11687 ) ( 9e359f0 ) storage: Propagate ctx from invoke to grpc upload reqs ( #11475 ) ( 9ad9d76 ) storage: Remove duplicate routing header ( #11534 ) ( 8eeb59c ) storage: Return sentinel ErrObjectNotExist for copy and compose ( #11369 ) ( 74d0c10 ), refs #10760 storage: Wait for XML read req to finish to avoid data races ( #11527 ) ( 782e12a ) Java 2.50.0 (2025-03-14) Features Next release from main branch is 2.50.0 ( #2968 ) ( 4a69fcc ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 22e7e3d ) deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( 81c8c61 ) Improve 503 handling for json resumable uploads ( #2987 ) ( 9bc2b14 ) Update usages of String.format to explicitly pass Locale.US ( #2974 ) ( 8bcb2de ), closes #2972 Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250224-2.0.0 ( #2969 ) ( 80a40c4 ) Update googleapis/sdk-platform-java action to v2.55.1 ( #2985 ) ( e22a2de ) Update sdk-platform-java dependencies ( #2983 ) ( 9eeb82a ) Update sdk-platform-java dependencies ( #2986 ) ( 10b922a ) Feature Cloud Storage now offers the DE configurable dual-region code, which can be used when creating a dual-region bucket in europe-west3 (Frankfurt) and europe-west10 (Berlin).
- March 20, 2023 Feature The following US regions are now available for dual-region storage: Los Angeles ( us-west2 ) Salt Lake City ( us-west3 ) Feature The following EU regions are now available for dual-region storage: Warsaw ( europe-central2 ) Madrid ( europe-southwest1 ) Frankfurt ( europe-west3 ) Milan ( europe-west8 ) Paris ( europe-west9 ) March 17, 2023 Feature Expanded Cloud Storage monitoring dashboards are now generally available (GA).

