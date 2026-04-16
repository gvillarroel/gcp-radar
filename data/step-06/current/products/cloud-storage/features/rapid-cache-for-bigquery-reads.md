---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.874Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Rapid Cache for BigQuery reads"
feature_slug: "rapid-cache-for-bigquery-reads"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-permissions"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file"
  - "https://docs.cloud.google.com/storage/docs/gcsfuse-cli"
keywords:
  - "rapid"
  - "cache"
  - "for"
  - "reads"
  - "can"
  - "accelerate"
  - "storage"
  - "object"
---

# Rapid Cache for BigQuery reads

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Rapid Cache can accelerate Cloud Storage object read requests issued by BigQuery.

## Extended Definition

Rapid Cache can accelerate Cloud Storage object read requests issued by BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- [https://docs.cloud.google.com/storage/docs/gcsfuse-cli](https://docs.cloud.google.com/storage/docs/gcsfuse-cli)

## Supporting Pages

### IAM permissions for Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions)
- Source ID: `site-docs-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This permission alone does not allow you to read IAM policies or IP filtering rules. storage.buckets.getIamPolicy Read bucket IAM policies. storage.buckets.getIpFilter Lists or reads the IP filtering rules on a bucket. storage.buckets.getObjectInsights Read object metadata for generating inventory reports and Storage Insights datasets . storage.buckets.list List buckets in a project including read bucket metadata.
- Bucket permissions Bucket permission name Description storage.buckets.create Create new buckets in a project. storage.buckets.createTagBinding Create a new tag binding to a bucket. storage.buckets.delete Delete buckets. storage.buckets.deleteTagBinding Delete the tag binding on a bucket. storage.buckets.enableObjectRetention Enable object retention configurations on a bucket. storage.buckets.exemptFromIpFilter Exempts the user or service account from IP filtering rules for bucket-level operations. storage.buckets.get Read bucket metadata, including listing or reading the Pub/Sub notification configurations on a bucket.
- This also returns any contexts attached to the objects. storage.objects.move Move an object within a bucket with hierarchical namespace enabled. storage.objects.overrideUnlockedRetention Use the x-goog-bypass-governance-retention header or the overrideUnlockedRetention query parameter when working with object retention configurations . storage.objects.restore Restore objects that have been soft-deleted . storage.objects.setIamPolicy Update object ACLs. storage.objects.setRetention Add or update retentions for objects. storage.objects.update Update object metadata, excluding ACLs.
- Rapid Cache permissions Rapid Cache permission name Description storage.anywhereCaches.create Create a cache using Rapid Cache. storage.anywhereCaches.list Lists caches using Rapid Cache. storage.anywhereCaches.update Update a cache using Rapid Cache. storage.anywhereCaches.get Get the metadata of a cache using Rapid Cache. storage.anywhereCaches.pause Pause a cache using Rapid Cache. storage.anywhereCaches.resume Resume a cache using Rapid Cache. storage.anywhereCaches.disable Disable a cache using Rapid Cache.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- 0 : Disables the file cache. -1 --file-cache-cache-file-for-range-read Determines whether the full object should be downloaded asynchronously and stored in the Cloud Storage FUSE cache directory when the first read is completed from a non-zero offset.
- If the file gets created in Cloud Storage but the NonexistentType entry for the file is cached, then Cloud Storage FUSE cannot request that file until the NonexistentType entry is removed from the type cache.
- Using this value issues a Get metadata call to make sure that the object generation for the file in the cache matches what's stored in Cloud Storage.
- Note : If you perform a partial read starting at offset 0 , Cloud Storage FUSE asynchronously downloads and caches the full object.

### Cloud Storage FUSE configuration file \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Storage FUSE configuration file format and fields The following YAML configuration example shows the format and fields available in Cloud Storage FUSE. app-name : "APP NAME" logging : file-path : "FILE PATH" format : FORMAT severity : SEVERITY log-rotate : max-file-size-mb : MAX FILE SIZE backup-file-count : BACKUP FILE COUNT compress : COMPRESS cache-dir : "CACHE DIR" file-cache : max-size-mb : MAX SIZE cache-file-for-range-read : CACHE FILE FOR RANGE READ enable-parallel-downloads : ENABLE PARALLEL DOWNLOADS exclude-regex : EXCLUDE REGEX include-regex : INCLUDE REGEX parallel-downloads-per-file : PARALLEL DOWNLOADS PER FILE max-parallel-downloads : MAX PARALLEL DOWNLOADS download-chunk-size-mb : DOWNLOAD CHUNK SIZE metadata-cache : negative-ttl-secs : ENABLE NEGATIVE TTL SECS stat-cache-max-size-mb : STAT CACHE MAX SIZE ttl-secs : TTL SECS enable-metadata-prefetch : ENABLE METADATA PREFETCH metadata-prefetch-entries-limit : METADATA PREFETCH ENTRIES LIMIT metadata-prefetch-max-workers : METADATA PREFETCH MAX WORKERS only-dir : "ONLY DIR" gcs-auth : anonymous-access : ANONYMOUS ACCESS key-file : "KEY FILE" reuse-token-from-url : REUSE TOKEN FROM URL token-url : "TOKEN URL" gcs-connection : billing-project : "BILLING PROJECT" client-protocol : CLIENT PROTOCOL custom-endpoint : "CUSTOM ENDPOINT" http-client-timeout : HTTP CLIENT TIMEOUT limit-bytes-per-sec : "LIMIT BYTES PER SEC" limit-ops-per-sec : "LIMIT OPS PER SEC" max-conns-per-host : MAX CONNS PER HOST max-idle-conns-per-host : MAX IDLE CONNS PER HOST sequential-read-size-mb : SEQUENTIAL READ SIZE implicit-dirs : IMPLICIT DIRS file-system : kernel-list-cache-ttl-secs : KERNEL LIST CACHE TTL SECS ignore-interrupts : IGNORE INTERRUPTS dir-mode : "DIR MODE" file-mode : "FILE MODE" fuse-options : FUSE OPTIONS gid : GID rename-dir-limit : RENAME DIR LIMIT temp-dir : "TEMP DIR" uid : UID foreground : FOREGROUND gcs-retries : max-retry-attempts : MAX RETRY ATTEMPTS max-retry-sleep : MAX RETRY SLEEP multiplier : "MULTIPLIER" metrics : cloud-metrics-export-interval-secs : CLOUD METRICS EXPORT INTERVAL prometheus-port : PROMETHEUS PORT debug : log-mutex : LOG MUTEX exit-on-invariant-violation : EXIT ON INVARIANT VIOLATION write : enable-streaming-writes : STREAMING WRITES global-max-blocks : MAXIMUM GLOBAL BLOCKS read : enable-buffered-read : ENABLE BUFFERED READ global-max-blocks : MAXIMUM GLOBAL READ BLOCKS profile : PROFILE Cloud Storage FUSE configuration file fields The following table describes the fields you can specify in your Cloud Storage FUSE configuration file.
- Default value for low-specification machines with limited resources: 4 Default value for high-specification machines with a large amount of resources: 1600 enable-buffered-read Specifies asynchronous prefetching of parts of a Cloud Storage object into an in-memory buffer, allowing subsequent reads to be served from the buffer instead of requiring network calls.
- 0 : Disables the file cache. -1 cache-file-for-range-read Determines whether the full object should be downloaded asynchronously and stored in the Cloud Storage FUSE cache directory when the first read is completed from a non-zero offset.
- Using this value issues a Get metadata call to make sure that the object generation for the file in the cache matches what's stored in Cloud Storage.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/gcsfuse-cli](https://docs.cloud.google.com/storage/docs/gcsfuse-cli)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- 0 : Disables the file cache. -1 --file-cache-cache-file-for-range-read Determines whether the full object should be downloaded asynchronously and stored in the Cloud Storage FUSE cache directory when the first read is completed from a non-zero offset.
- If the file gets created in Cloud Storage but the NonexistentType entry for the file is cached, then Cloud Storage FUSE cannot request that file until the NonexistentType entry is removed from the type cache.
- Using this value issues a Get metadata call to make sure that the object generation for the file in the cache matches what's stored in Cloud Storage.
- Note : If you perform a partial read starting at offset 0 , Cloud Storage FUSE asynchronously downloads and caches the full object.

