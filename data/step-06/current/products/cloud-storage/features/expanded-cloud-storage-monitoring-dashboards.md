---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.926Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Expanded Cloud Storage monitoring dashboards"
feature_slug: "expanded-cloud-storage-monitoring-dashboards"
latest_feature_date: "2023-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file"
  - "https://docs.cloud.google.com/storage/docs/access-logs"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options"
keywords:
  - "expanded"
  - "storage"
  - "monitoring"
  - "dashboards"
  - "provide"
  - "additional"
  - "metrics"
  - "bucket"
---

# Expanded Cloud Storage monitoring dashboards

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Expanded monitoring dashboards provide additional metrics, bucket-location filtering, customization, and alerting for Cloud Storage; Expanded monitoring dashboards provide additional metrics, bucket-location filtering, customization, and alerting for Cloud Storage.

## Extended Definition

Expanded monitoring dashboards provide additional metrics, bucket-location filtering, customization, and alerting for Cloud Storage; Expanded monitoring dashboards provide additional metrics, bucket-location filtering, customization, and alerting for Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)

## Supporting Pages

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- This page discusses metrics used to monitor data usage for your Cloud Storage buckets, as well as how to request additional egress bandwidth for different quotas if you need more than the default quota .
- Introduction to bandwidth monitoring Cloud Storage provides bandwidth monitoring for you to track bandwidth usage from your project's buckets to other Google Cloud services.
- Request more storage Cloud Storage provides storage usage monitoring for zonal buckets.
- Monitoring alerts You can use Monitoring alerting policies to inform you when metrics such as storage.googleapis.com/google egress bandwidth , storage.googleapis.com/dualregion google egress bandwidth , and storage.googleapis.com/multiregion google egress bandwidth approach a quota limit.

### Cloud Storage FUSE configuration file \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Storage FUSE configuration file format and fields The following YAML configuration example shows the format and fields available in Cloud Storage FUSE. app-name : "APP NAME" logging : file-path : "FILE PATH" format : FORMAT severity : SEVERITY log-rotate : max-file-size-mb : MAX FILE SIZE backup-file-count : BACKUP FILE COUNT compress : COMPRESS cache-dir : "CACHE DIR" file-cache : max-size-mb : MAX SIZE cache-file-for-range-read : CACHE FILE FOR RANGE READ enable-parallel-downloads : ENABLE PARALLEL DOWNLOADS exclude-regex : EXCLUDE REGEX include-regex : INCLUDE REGEX parallel-downloads-per-file : PARALLEL DOWNLOADS PER FILE max-parallel-downloads : MAX PARALLEL DOWNLOADS download-chunk-size-mb : DOWNLOAD CHUNK SIZE metadata-cache : negative-ttl-secs : ENABLE NEGATIVE TTL SECS stat-cache-max-size-mb : STAT CACHE MAX SIZE ttl-secs : TTL SECS enable-metadata-prefetch : ENABLE METADATA PREFETCH metadata-prefetch-entries-limit : METADATA PREFETCH ENTRIES LIMIT metadata-prefetch-max-workers : METADATA PREFETCH MAX WORKERS only-dir : "ONLY DIR" gcs-auth : anonymous-access : ANONYMOUS ACCESS key-file : "KEY FILE" reuse-token-from-url : REUSE TOKEN FROM URL token-url : "TOKEN URL" gcs-connection : billing-project : "BILLING PROJECT" client-protocol : CLIENT PROTOCOL custom-endpoint : "CUSTOM ENDPOINT" http-client-timeout : HTTP CLIENT TIMEOUT limit-bytes-per-sec : "LIMIT BYTES PER SEC" limit-ops-per-sec : "LIMIT OPS PER SEC" max-conns-per-host : MAX CONNS PER HOST max-idle-conns-per-host : MAX IDLE CONNS PER HOST sequential-read-size-mb : SEQUENTIAL READ SIZE implicit-dirs : IMPLICIT DIRS file-system : kernel-list-cache-ttl-secs : KERNEL LIST CACHE TTL SECS ignore-interrupts : IGNORE INTERRUPTS dir-mode : "DIR MODE" file-mode : "FILE MODE" fuse-options : FUSE OPTIONS gid : GID rename-dir-limit : RENAME DIR LIMIT temp-dir : "TEMP DIR" uid : UID foreground : FOREGROUND gcs-retries : max-retry-attempts : MAX RETRY ATTEMPTS max-retry-sleep : MAX RETRY SLEEP multiplier : "MULTIPLIER" metrics : cloud-metrics-export-interval-secs : CLOUD METRICS EXPORT INTERVAL prometheus-port : PROMETHEUS PORT debug : log-mutex : LOG MUTEX exit-on-invariant-violation : EXIT ON INVARIANT VIOLATION write : enable-streaming-writes : STREAMING WRITES global-max-blocks : MAXIMUM GLOBAL BLOCKS read : enable-buffered-read : ENABLE BUFFERED READ global-max-blocks : MAXIMUM GLOBAL READ BLOCKS profile : PROFILE Cloud Storage FUSE configuration file fields The following table describes the fields you can specify in your Cloud Storage FUSE configuration file.
- This severity level also includes the information provided in the info , warning , and error severity levels. trace : contains granular details about each Cloud Storage FUSE operation and function call, outlining the gcsfuse interaction with the kernel FUSE driver and Cloud Storage.
- Floating-point number "2" cloud-metrics-export-interval-secs Exports metrics to Cloud Monitoring with the specified interval.
- This field should also be set if you're using Cloud Storage FUSE with public buckets.

### Usage logs & storage logs \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- Source ID: `site-iam-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- The recommended tool for measuring storage consumption is Monitoring, which provides visualization tools as well as additional metrics related to storage consumption that storage logs do not.
- PATCH / example - bucke t ?loggi n g HTTP/ 1.1 Hos t : s t orage. googleapis.com { "logging" : null } XML API Disable logging by sending a PUT request to the bucket's logging configuration as shown in the following example: PUT / example-bucket ?logging HTTP/1.1 Host: storage.googleapis.com <Logging/> Usage and storage log format The usage logs and storage logs can provide an overwhelming amount of information.
- Storage logs provide information about the storage consumption of that bucket for the last day and are created daily.
- PUT / example-logs-bucket ?acl HTTP/1.1 Host: storage.googleapis.com <AccessControlList> <Entries> <Entry> <Scope type="GroupByEmail"> <EmailAddress>cloud-storage-analytics@google.com</EmailAddress> </Scope> <Permission>WRITE</Permission> </Entry> <!-- include other existing ACL entries here--> </Entries> </AccessControlList> Enable logging for your bucket using the logging query parameter: PUT / example-bucket ?logging HTTP/1.1 Host: storage.googleapis.com <Logging> <LogBucket> example-logs-bucket </LogBucket> <LogObjectPrefix> log object prefix </LogObjectPrefix> </Logging> Check logging status Command line Check logging by using the buckets describe command with the --format flag: gcloud storage buckets describe gs://example-bucket --format="default(logging config)" You can also save the logging configurations to a file: gcloud storage buckets describe gs://example-bucket > your logging configuration file --format="default(logging config)" If logging is enabled, the server returns the logging configuration in the response: logging: logBucket: example-logs-bucket logObjectPrefix: log object prefix If logging is not enabled, the following is returned: null REST APIs JSON API Send a GET request for the bucket's logging configuration as shown in the following example: GET /s t orage/v 1 /b/ example - bucke t ? f ields=loggi n g Hos t : s t orage. googleapis.com If logging is enabled, the server sends the configuration in the response.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- To use gRPC with Cloud Storage FUSE, we recommend using Cloud Storage FUSE versions 2.10.0 or newer. http1 --cloud-metrics-export-interval-secs Exports metrics to Cloud Monitoring with the specified interval.
- For more information, see Automated configuration values for high-performance machine types . gcsfuse CLI command structure The following example shows the structure of the gcsfuse command, including required commands and optional gcsfuse options. gcsfuse GLOBAL OPTIONS BUCKET NAME MOUNT POINT Replace the following: GLOBAL OPTIONS are the gcsfuse options that control how the mount is set up and how Cloud Storage FUSE behaves.
- A path, for example: /tmp/user-example-bucket-gcsfuse-logs.txt . stdout when Cloud Storage FUSE is run in the foreground or syslog when Cloud Storage FUSE is run in the background --log-format Specifies the format of the log file. text json json --log-rotate-backup-file-count The maximum number of rotated log files to retain, excluding the active file that logs are written to.
- This severity level also includes the information provided in the info , warning , and error severity levels. trace : contains granular details about each Cloud Storage FUSE operation and function call, outlining the gcsfuse interaction with the kernel FUSE driver and Cloud Storage.

