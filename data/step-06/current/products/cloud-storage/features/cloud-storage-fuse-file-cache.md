---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.911Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Cloud Storage FUSE file cache"
feature_slug: "cloud-storage-fuse-file-cache"
latest_feature_date: "2024-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file"
  - "https://docs.cloud.google.com/storage/docs/gcsfuse-config-file"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options"
  - "https://docs.cloud.google.com/storage/docs/gcsfuse-cli"
keywords:
  - "storage"
  - "fuse"
  - "file"
  - "cache"
  - "the"
  - "serves"
  - "repeated"
  - "reads"
---

# Cloud Storage FUSE file cache

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

The Cloud Storage FUSE file cache serves repeated file reads from faster client-side cache storage.

## Extended Definition

The Cloud Storage FUSE file cache serves repeated file reads from faster client-side cache storage.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- [https://docs.cloud.google.com/storage/docs/gcsfuse-config-file](https://docs.cloud.google.com/storage/docs/gcsfuse-config-file)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- [https://docs.cloud.google.com/storage/docs/gcsfuse-cli](https://docs.cloud.google.com/storage/docs/gcsfuse-cli)

## Supporting Pages

### Cloud Storage FUSE configuration file \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- Source ID: `site-docs-reference`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Storage FUSE configuration file format and fields The following YAML configuration example shows the format and fields available in Cloud Storage FUSE. app-name : "APP NAME" logging : file-path : "FILE PATH" format : FORMAT severity : SEVERITY log-rotate : max-file-size-mb : MAX FILE SIZE backup-file-count : BACKUP FILE COUNT compress : COMPRESS cache-dir : "CACHE DIR" file-cache : max-size-mb : MAX SIZE cache-file-for-range-read : CACHE FILE FOR RANGE READ enable-parallel-downloads : ENABLE PARALLEL DOWNLOADS exclude-regex : EXCLUDE REGEX include-regex : INCLUDE REGEX parallel-downloads-per-file : PARALLEL DOWNLOADS PER FILE max-parallel-downloads : MAX PARALLEL DOWNLOADS download-chunk-size-mb : DOWNLOAD CHUNK SIZE metadata-cache : negative-ttl-secs : ENABLE NEGATIVE TTL SECS stat-cache-max-size-mb : STAT CACHE MAX SIZE ttl-secs : TTL SECS enable-metadata-prefetch : ENABLE METADATA PREFETCH metadata-prefetch-entries-limit : METADATA PREFETCH ENTRIES LIMIT metadata-prefetch-max-workers : METADATA PREFETCH MAX WORKERS only-dir : "ONLY DIR" gcs-auth : anonymous-access : ANONYMOUS ACCESS key-file : "KEY FILE" reuse-token-from-url : REUSE TOKEN FROM URL token-url : "TOKEN URL" gcs-connection : billing-project : "BILLING PROJECT" client-protocol : CLIENT PROTOCOL custom-endpoint : "CUSTOM ENDPOINT" http-client-timeout : HTTP CLIENT TIMEOUT limit-bytes-per-sec : "LIMIT BYTES PER SEC" limit-ops-per-sec : "LIMIT OPS PER SEC" max-conns-per-host : MAX CONNS PER HOST max-idle-conns-per-host : MAX IDLE CONNS PER HOST sequential-read-size-mb : SEQUENTIAL READ SIZE implicit-dirs : IMPLICIT DIRS file-system : kernel-list-cache-ttl-secs : KERNEL LIST CACHE TTL SECS ignore-interrupts : IGNORE INTERRUPTS dir-mode : "DIR MODE" file-mode : "FILE MODE" fuse-options : FUSE OPTIONS gid : GID rename-dir-limit : RENAME DIR LIMIT temp-dir : "TEMP DIR" uid : UID foreground : FOREGROUND gcs-retries : max-retry-attempts : MAX RETRY ATTEMPTS max-retry-sleep : MAX RETRY SLEEP multiplier : "MULTIPLIER" metrics : cloud-metrics-export-interval-secs : CLOUD METRICS EXPORT INTERVAL prometheus-port : PROMETHEUS PORT debug : log-mutex : LOG MUTEX exit-on-invariant-violation : EXIT ON INVARIANT VIOLATION write : enable-streaming-writes : STREAMING WRITES global-max-blocks : MAXIMUM GLOBAL BLOCKS read : enable-buffered-read : ENABLE BUFFERED READ global-max-blocks : MAXIMUM GLOBAL READ BLOCKS profile : PROFILE Cloud Storage FUSE configuration file fields The following table describes the fields you can specify in your Cloud Storage FUSE configuration file.
- 0 : Disables the file cache. -1 cache-file-for-range-read Determines whether the full object should be downloaded asynchronously and stored in the Cloud Storage FUSE cache directory when the first read is completed from a non-zero offset.
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- Twice the number of CPU cores on your machine or 16 , whichever is higher. download-chunk-size-mb Specifies the size of each read request in MiB that each goroutine makes to Cloud Storage when downloading the object into the file cache.

### Cloud Storage FUSE configuration file \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/gcsfuse-config-file](https://docs.cloud.google.com/storage/docs/gcsfuse-config-file)
- Source ID: `site-docs-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Storage FUSE configuration file format and fields The following YAML configuration example shows the format and fields available in Cloud Storage FUSE. app-name : "APP NAME" logging : file-path : "FILE PATH" format : FORMAT severity : SEVERITY log-rotate : max-file-size-mb : MAX FILE SIZE backup-file-count : BACKUP FILE COUNT compress : COMPRESS cache-dir : "CACHE DIR" file-cache : max-size-mb : MAX SIZE cache-file-for-range-read : CACHE FILE FOR RANGE READ enable-parallel-downloads : ENABLE PARALLEL DOWNLOADS exclude-regex : EXCLUDE REGEX include-regex : INCLUDE REGEX parallel-downloads-per-file : PARALLEL DOWNLOADS PER FILE max-parallel-downloads : MAX PARALLEL DOWNLOADS download-chunk-size-mb : DOWNLOAD CHUNK SIZE metadata-cache : negative-ttl-secs : ENABLE NEGATIVE TTL SECS stat-cache-max-size-mb : STAT CACHE MAX SIZE ttl-secs : TTL SECS enable-metadata-prefetch : ENABLE METADATA PREFETCH metadata-prefetch-entries-limit : METADATA PREFETCH ENTRIES LIMIT metadata-prefetch-max-workers : METADATA PREFETCH MAX WORKERS only-dir : "ONLY DIR" gcs-auth : anonymous-access : ANONYMOUS ACCESS key-file : "KEY FILE" reuse-token-from-url : REUSE TOKEN FROM URL token-url : "TOKEN URL" gcs-connection : billing-project : "BILLING PROJECT" client-protocol : CLIENT PROTOCOL custom-endpoint : "CUSTOM ENDPOINT" http-client-timeout : HTTP CLIENT TIMEOUT limit-bytes-per-sec : "LIMIT BYTES PER SEC" limit-ops-per-sec : "LIMIT OPS PER SEC" max-conns-per-host : MAX CONNS PER HOST max-idle-conns-per-host : MAX IDLE CONNS PER HOST sequential-read-size-mb : SEQUENTIAL READ SIZE implicit-dirs : IMPLICIT DIRS file-system : kernel-list-cache-ttl-secs : KERNEL LIST CACHE TTL SECS ignore-interrupts : IGNORE INTERRUPTS dir-mode : "DIR MODE" file-mode : "FILE MODE" fuse-options : FUSE OPTIONS gid : GID rename-dir-limit : RENAME DIR LIMIT temp-dir : "TEMP DIR" uid : UID foreground : FOREGROUND gcs-retries : max-retry-attempts : MAX RETRY ATTEMPTS max-retry-sleep : MAX RETRY SLEEP multiplier : "MULTIPLIER" metrics : cloud-metrics-export-interval-secs : CLOUD METRICS EXPORT INTERVAL prometheus-port : PROMETHEUS PORT debug : log-mutex : LOG MUTEX exit-on-invariant-violation : EXIT ON INVARIANT VIOLATION write : enable-streaming-writes : STREAMING WRITES global-max-blocks : MAXIMUM GLOBAL BLOCKS read : enable-buffered-read : ENABLE BUFFERED READ global-max-blocks : MAXIMUM GLOBAL READ BLOCKS profile : PROFILE Cloud Storage FUSE configuration file fields The following table describes the fields you can specify in your Cloud Storage FUSE configuration file.
- 0 : Disables the file cache. -1 cache-file-for-range-read Determines whether the full object should be downloaded asynchronously and stored in the Cloud Storage FUSE cache directory when the first read is completed from a non-zero offset.
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- Twice the number of CPU cores on your machine or 16 , whichever is higher. download-chunk-size-mb Specifies the size of each read request in MiB that each goroutine makes to Cloud Storage when downloading the object into the file cache.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- Source ID: `site-docs-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 0 : Disables the file cache. -1 --file-cache-cache-file-for-range-read Determines whether the full object should be downloaded asynchronously and stored in the Cloud Storage FUSE cache directory when the first read is completed from a non-zero offset.
- If the file gets created in Cloud Storage but the NonexistentType entry for the file is cached, then Cloud Storage FUSE cannot request that file until the NonexistentType entry is removed from the type cache.
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- A path, for example: /tmp/user-example-bucket-gcsfuse-logs.txt . stdout when Cloud Storage FUSE is run in the foreground or syslog when Cloud Storage FUSE is run in the background --log-format Specifies the format of the log file. text json json --log-rotate-backup-file-count The maximum number of rotated log files to retain, excluding the active file that logs are written to.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/gcsfuse-cli](https://docs.cloud.google.com/storage/docs/gcsfuse-cli)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 0 : Disables the file cache. -1 --file-cache-cache-file-for-range-read Determines whether the full object should be downloaded asynchronously and stored in the Cloud Storage FUSE cache directory when the first read is completed from a non-zero offset.
- If the file gets created in Cloud Storage but the NonexistentType entry for the file is cached, then Cloud Storage FUSE cannot request that file until the NonexistentType entry is removed from the type cache.
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- A path, for example: /tmp/user-example-bucket-gcsfuse-logs.txt . stdout when Cloud Storage FUSE is run in the foreground or syslog when Cloud Storage FUSE is run in the background --log-format Specifies the format of the log file. text json json --log-rotate-backup-file-count The maximum number of rotated log files to retain, excluding the active file that logs are written to.

