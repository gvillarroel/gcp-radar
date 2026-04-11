---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.652Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Cloud Storage FUSE 3.0"
feature_slug: "cloud-storage-fuse-3-0"
latest_feature_date: "2025-06-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file"
keywords:
  - "storage"
  - "fuse"
  - "adds"
  - "performance"
  - "improvements"
  - "automated"
  - "high"
  - "configurations"
---

# Cloud Storage FUSE 3.0

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Cloud Storage FUSE 3.0 adds performance improvements, automated high-performance configurations, tuning guidance, and a global-max-blocks option for streaming writes.

## Extended Definition

Cloud Storage FUSE 3.0 adds performance improvements, automated high-performance configurations, tuning guidance, and a global-max-blocks option for streaming writes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Improvements include automated configurations for high-performance machines , a comprehensive performance tuning guide to help optimize performance, and the new global-max-blocks configuration option , which gives you granular control over streaming write operations.
- August 04, 2025 Libraries Java 2.54.0 (2025-07-24) Features Add BucketInfo.IpFilter ( #3177 ) ( 14a91ec ) Add default end-to-end checksumming for JournalingBlobWriteSessionConfig #3180 ( fa0f6a0 ) Add default end-to-end crc32c checksumming for several upload methods via grpc transport #3176 ( fa0f6a0 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( bd1f199 ) Give user provided checksum precondition priority for Storage#create methods that accept byte[] #3182 ( fa0f6a0 ) Move crc32c computation before writing to disk for BufferToDiskThenUpload BlobWriteSession config #3187 ( fa0f6a0 ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250718-2.0.0 ( #3203 ) ( 18978e4 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #3201 ) ( 782c3c4 ) Update googleapis/sdk-platform-java action to v2.60.1 ( #3196 ) ( 6ba56e5 ) July 28, 2025 Libraries Go 1.56.0 (2025-07-24) Features storage/control: Update BUILD configs to support rest transportation for all client ( 116a33a ) Bug Fixes storage: Avoid integration test segfaults. ( #12419 ) ( a9dec07 ) storage: Current object generation takeover. ( #12383 ) ( 9ca8e01 ) storage: Fix MultiRangeDownloader deadlock ( #12548 ) ( 2eb23bb ) storage: Remove object length limit for unfinalized reads ( #12489 ) ( 5566d7d ) Performance Improvements storage: Zero copy for MultiRangeDownloader ( #12542 ) ( a5e6a68 ) Documentation storage/internal: Fix broken link for message CustomPlacementConfig ( 9614487 ) storage: Fix typo in storage/doc.go ( #12391 ) ( bf74408 ) storage: Improve error inspection documentation ( #12301 ) ( 420da1a ) July 14, 2025 Libraries Java 2.53.3 (2025-07-09) Bug Fixes Fix DefaultBlobWriteSessionConfig init to work when grpc classes are excluded ( #3147 ) ( 8571ba8 ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250629-2.0.0 ( #3185 ) ( 4ce8281 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #3189 ) ( 7fbfb01 ) Feature Storage Insights datasets offer the latest snapshot of the bucket and object metadata.
- Go Changes for storage/internal/apiv2 1.44.0 (2024-10-03) Features storage/dataflux: Add dataflux interface ( #10748 ) ( cb7b0a1 ) storage/dataflux: Add range splitter #10748 ( #10899 ) ( d49da26 ) storage/dataflux: Add worksteal algorithm to fast-listing ( #10913 ) ( 015b52c ) storage/internal: Add managed folder to testIamPermissions method ( 2f0aec8 ) storage/transfermanager: Add option to StripPrefix on directory download ( #10894 ) ( 607534c ) storage/transfermanager: Add SkipIfExists option ( #10893 ) ( 7daa1bd ) storage/transfermanager: Checksum full object downloads ( #10569 ) ( c366c90 ) storage: Add direct google access side-effect imports by default ( #10757 ) ( 9ad8324 ) storage: Add full object checksum to reader.Attrs ( #10538 ) ( 245d2ea ) storage: Add support for Go 1.23 iterators ( 84461c0 ) storage: Add update time in bucketAttrs ( #10710 ) ( 5f06ae1 ), refs #9361 storage: GA gRPC client ( #10859 ) ( c7a55a2 ) storage: Introduce gRPC client-side metrics ( #10639 ) ( 437bcb1 ) storage: Support IncludeFoldersAsPrefixes for gRPC ( #10767 ) ( 65bcc59 ) Bug Fixes storage/transfermanager: Correct Attrs.StartOffset for sharded downloads ( #10512 ) ( 01a5cbb ) storage: Add retryalways policy to encryption test ( #10644 ) ( 59cfd12 ), refs #10567 storage: Add unknown host to retriable errors ( #10619 ) ( 4ec0452 ) storage: Bump dependencies ( 2ddeb15 ) storage: Bump google.golang.org/grpc@v1.64.1 ( 8ecc4e9 ) storage: Check for grpc NotFound error in HMAC test ( #10645 ) ( 3c8e88a ) storage: Disable grpc metrics using emulator ( #10870 ) ( 35ad73d ) storage: Retry gRPC DEADLINE EXCEEDED errors ( #10635 ) ( 0018415 ) storage: Update dependencies ( 257c40b ) storage: Update google.golang.org/api to v0.191.0 ( 5b32644 ) Performance Improvements storage: GRPC zerocopy codec ( #10888 ) ( aeba28f ) Documentation storage/internal: Clarify possible objectAccessControl roles ( 2f0aec8 ) storage/internal: Update dual-region bucket link ( 2f0aec8 ) September 30, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- September 29, 2025 Libraries Java 2.58.0 (2025-09-23) Features storagecontrol: Add GetIamPolicy, SetIamPolicy, and TestIamPermissions RPCs ( c884551 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.62.2 ( 984f8ca ) Fix appendable upload finalization race condition ( #3295 ) ( 485be18 ) Fix IllegalMonitorStateException thrown from BlobAppendableUpload.isOpen() ( #3302 ) ( aa90468 ) Update object context diff logic to be shallow rather than deep ( #3287 ) ( 2fd15f6 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.52.2 ( #3298 ) ( 1489f3a ) Update googleapis/sdk-platform-java action to v2.62.2 ( #3299 ) ( c3b05ac ) Go 1.57.0 (2025-09-23) Features storage/control: Add new GetIamPolicy, SetIamPolicy, and TestIamPermissions RPCs ( d73f912 ) storage: Post support dynamic key name ( #12677 ) ( 9e761f9 ) storage: WithMeterProvider allows custom meter provider configuration ( #12668 ) ( 7f574b0 ) Bug Fixes storage: Free buffers in Bidi Reader ( #12839 ) ( bc247fd ) storage: Make Writer thread-safe. ( #12753 ) ( 9ea380b ) storage: No progress report for oneshot write ( #12746 ) ( b97c286 ) Performance Improvements storage: Pipeline gRPC writes ( #12422 ) ( 1f2c5fe ) September 22, 2025 Libraries Python 3.4.0 (2025-09-15) Features experimental: Add async grpc client ( #1537 ) ( ac57b8d ) experimental: Add grpc client ( #1533 ) ( 5674587 ) Bug Fixes GAPIC generation failed with 'Directory not empty' ( #1542 ) ( c80d820 ) Go 1.56.2 (2025-09-15) Bug Fixes storage: Free buffers in Bidi Reader ( #12839 ) ( 10c8fac ) September 17, 2025 Feature The bucket attributes view and bucket attributes latest snapshot view tables in Storage Insights datasets are updated with two new fields: objectCount and totalSize . objectCount reflects the total number of objects in the bucket and totalSize reflects the total size of the bucket in bytes.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Automated configuration values for high-performance machine types . gcsfuse CLI command structure The following example shows the structure of the gcsfuse command, including required commands and optional gcsfuse options. gcsfuse GLOBAL OPTIONS BUCKET NAME MOUNT POINT Replace the following: GLOBAL OPTIONS are the gcsfuse options that control how the mount is set up and how Cloud Storage FUSE behaves.
- A path, for example: /etc/gcsfuse.yaml . "" --profile Applies a predefined, optimized set of Cloud Storage FUSE configurations for caching, threading, and buffer sizes to help you achieve high performance for a specific workload type, such as training, serving, and checkpointing.
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- Note: For specific high-performance machine types, some gcsfuse command options are automatically set to specific values by default to maximize performance.

### Cloud Storage FUSE configuration file \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- 40 profile Applies a predefined, optimized set of Cloud Storage FUSE configurations for caching, threading, and buffer sizes to help you achieve high performance for a specific workload type, such as training, serving, and checkpointing.
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- For more information, see Automated configuration values for high-performance machine types .
- Cloud Storage FUSE configuration file format and fields The following YAML configuration example shows the format and fields available in Cloud Storage FUSE. app-name : "APP NAME" logging : file-path : "FILE PATH" format : FORMAT severity : SEVERITY log-rotate : max-file-size-mb : MAX FILE SIZE backup-file-count : BACKUP FILE COUNT compress : COMPRESS cache-dir : "CACHE DIR" file-cache : max-size-mb : MAX SIZE cache-file-for-range-read : CACHE FILE FOR RANGE READ enable-parallel-downloads : ENABLE PARALLEL DOWNLOADS exclude-regex : EXCLUDE REGEX include-regex : INCLUDE REGEX parallel-downloads-per-file : PARALLEL DOWNLOADS PER FILE max-parallel-downloads : MAX PARALLEL DOWNLOADS download-chunk-size-mb : DOWNLOAD CHUNK SIZE metadata-cache : negative-ttl-secs : ENABLE NEGATIVE TTL SECS stat-cache-max-size-mb : STAT CACHE MAX SIZE ttl-secs : TTL SECS enable-metadata-prefetch : ENABLE METADATA PREFETCH metadata-prefetch-entries-limit : METADATA PREFETCH ENTRIES LIMIT metadata-prefetch-max-workers : METADATA PREFETCH MAX WORKERS only-dir : "ONLY DIR" gcs-auth : anonymous-access : ANONYMOUS ACCESS key-file : "KEY FILE" reuse-token-from-url : REUSE TOKEN FROM URL token-url : "TOKEN URL" gcs-connection : billing-project : "BILLING PROJECT" client-protocol : CLIENT PROTOCOL custom-endpoint : "CUSTOM ENDPOINT" http-client-timeout : HTTP CLIENT TIMEOUT limit-bytes-per-sec : "LIMIT BYTES PER SEC" limit-ops-per-sec : "LIMIT OPS PER SEC" max-conns-per-host : MAX CONNS PER HOST max-idle-conns-per-host : MAX IDLE CONNS PER HOST sequential-read-size-mb : SEQUENTIAL READ SIZE implicit-dirs : IMPLICIT DIRS file-system : kernel-list-cache-ttl-secs : KERNEL LIST CACHE TTL SECS ignore-interrupts : IGNORE INTERRUPTS dir-mode : "DIR MODE" file-mode : "FILE MODE" fuse-options : FUSE OPTIONS gid : GID rename-dir-limit : RENAME DIR LIMIT temp-dir : "TEMP DIR" uid : UID foreground : FOREGROUND gcs-retries : max-retry-attempts : MAX RETRY ATTEMPTS max-retry-sleep : MAX RETRY SLEEP multiplier : "MULTIPLIER" metrics : cloud-metrics-export-interval-secs : CLOUD METRICS EXPORT INTERVAL prometheus-port : PROMETHEUS PORT debug : log-mutex : LOG MUTEX exit-on-invariant-violation : EXIT ON INVARIANT VIOLATION write : enable-streaming-writes : STREAMING WRITES global-max-blocks : MAXIMUM GLOBAL BLOCKS read : enable-buffered-read : ENABLE BUFFERED READ global-max-blocks : MAXIMUM GLOBAL READ BLOCKS profile : PROFILE Cloud Storage FUSE configuration file fields The following table describes the fields you can specify in your Cloud Storage FUSE configuration file.

