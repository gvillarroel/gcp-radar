---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.912Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Cloud Storage FUSE log rotation"
feature_slug: "cloud-storage-fuse-log-rotation"
latest_feature_date: "2023-12-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file"
  - "https://docs.cloud.google.com/storage/docs/gcsfuse-cli"
keywords:
  - "storage"
  - "fuse"
  - "log"
  - "rotation"
  - "supports"
  - "configurable"
---

# Cloud Storage FUSE log rotation

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage FUSE supports configurable log rotation.

## Extended Definition

Cloud Storage FUSE supports configurable log rotation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- [https://docs.cloud.google.com/storage/docs/gcsfuse-cli](https://docs.cloud.google.com/storage/docs/gcsfuse-cli)

## Supporting Pages

### "Mount a Cloud Storage bucket using Cloud Storage FUSE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- Source ID: `site-iam-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Mount the bucket To mount the bucket to your local file system, complete the following steps: Generate Application Default Credentials using the gcloud auth application-default login command: gcloud auth application-default login Cloud Storage FUSE automatically loads the credentials.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the resources by completing the following steps: Unmount the storage bucket from your Linux machine by using the fusermount tool: fusermount -u "$HOME/mount-folder" To delete the bucket and everything inside of it, use the gcloud storage rm command with the --recursive flag: gcloud storage rm gs:// BUCKET NAME --recursive Replace BUCKET NAME with the name of your bucket.
- In this quickstart, you'll complete the following tasks: Install Cloud Storage FUSE on Debian or Ubuntu Mount the bucket as a folder on the machine Upload an object to the bucket You'll use the Google Cloud CLI to create and manage the object in your storage bucket, and you'll use the Cloud Storage FUSE CLI to mount your bucket to your machine.
- Create a directory to mount the storage bucket to: mkdir "$HOME/mount-folder" Mount your storage bucket using the gcsfuse command: gcsfuse BUCKET NAME "$HOME/mount-folder" Replace BUCKET NAME with the name of the bucket you want to mount.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- A path, for example: /tmp/user-example-bucket-gcsfuse-logs.txt . stdout when Cloud Storage FUSE is run in the foreground or syslog when Cloud Storage FUSE is run in the background --log-format Specifies the format of the log file. text json json --log-rotate-backup-file-count The maximum number of rotated log files to retain, excluding the active file that logs are written to.
- For example, when you specify warning , Cloud Storage FUSE generates logs for warnings and errors.
- 512 --log-severity The severity level you want Cloud Storage FUSE to generate logs for.

### Cloud Storage FUSE configuration file \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Storage FUSE configuration file format and fields The following YAML configuration example shows the format and fields available in Cloud Storage FUSE. app-name : "APP NAME" logging : file-path : "FILE PATH" format : FORMAT severity : SEVERITY log-rotate : max-file-size-mb : MAX FILE SIZE backup-file-count : BACKUP FILE COUNT compress : COMPRESS cache-dir : "CACHE DIR" file-cache : max-size-mb : MAX SIZE cache-file-for-range-read : CACHE FILE FOR RANGE READ enable-parallel-downloads : ENABLE PARALLEL DOWNLOADS exclude-regex : EXCLUDE REGEX include-regex : INCLUDE REGEX parallel-downloads-per-file : PARALLEL DOWNLOADS PER FILE max-parallel-downloads : MAX PARALLEL DOWNLOADS download-chunk-size-mb : DOWNLOAD CHUNK SIZE metadata-cache : negative-ttl-secs : ENABLE NEGATIVE TTL SECS stat-cache-max-size-mb : STAT CACHE MAX SIZE ttl-secs : TTL SECS enable-metadata-prefetch : ENABLE METADATA PREFETCH metadata-prefetch-entries-limit : METADATA PREFETCH ENTRIES LIMIT metadata-prefetch-max-workers : METADATA PREFETCH MAX WORKERS only-dir : "ONLY DIR" gcs-auth : anonymous-access : ANONYMOUS ACCESS key-file : "KEY FILE" reuse-token-from-url : REUSE TOKEN FROM URL token-url : "TOKEN URL" gcs-connection : billing-project : "BILLING PROJECT" client-protocol : CLIENT PROTOCOL custom-endpoint : "CUSTOM ENDPOINT" http-client-timeout : HTTP CLIENT TIMEOUT limit-bytes-per-sec : "LIMIT BYTES PER SEC" limit-ops-per-sec : "LIMIT OPS PER SEC" max-conns-per-host : MAX CONNS PER HOST max-idle-conns-per-host : MAX IDLE CONNS PER HOST sequential-read-size-mb : SEQUENTIAL READ SIZE implicit-dirs : IMPLICIT DIRS file-system : kernel-list-cache-ttl-secs : KERNEL LIST CACHE TTL SECS ignore-interrupts : IGNORE INTERRUPTS dir-mode : "DIR MODE" file-mode : "FILE MODE" fuse-options : FUSE OPTIONS gid : GID rename-dir-limit : RENAME DIR LIMIT temp-dir : "TEMP DIR" uid : UID foreground : FOREGROUND gcs-retries : max-retry-attempts : MAX RETRY ATTEMPTS max-retry-sleep : MAX RETRY SLEEP multiplier : "MULTIPLIER" metrics : cloud-metrics-export-interval-secs : CLOUD METRICS EXPORT INTERVAL prometheus-port : PROMETHEUS PORT debug : log-mutex : LOG MUTEX exit-on-invariant-violation : EXIT ON INVARIANT VIOLATION write : enable-streaming-writes : STREAMING WRITES global-max-blocks : MAXIMUM GLOBAL BLOCKS read : enable-buffered-read : ENABLE BUFFERED READ global-max-blocks : MAXIMUM GLOBAL READ BLOCKS profile : PROFILE Cloud Storage FUSE configuration file fields The following table describes the fields you can specify in your Cloud Storage FUSE configuration file.
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- String value, for example: "/var/log" . "" format Specifies the format of the log file. text json json severity The severity level you want Cloud Storage FUSE to generate logs for.
- If this field is unspecified, the logs are routed to stdout when Cloud Storage FUSE runs in foreground mode and to syslogs when Cloud Storage FUSE runs in background mode.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/gcsfuse-cli](https://docs.cloud.google.com/storage/docs/gcsfuse-cli)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- A path, for example: /tmp/user-example-bucket-gcsfuse-logs.txt . stdout when Cloud Storage FUSE is run in the foreground or syslog when Cloud Storage FUSE is run in the background --log-format Specifies the format of the log file. text json json --log-rotate-backup-file-count The maximum number of rotated log files to retain, excluding the active file that logs are written to.
- For example, when you specify warning , Cloud Storage FUSE generates logs for warnings and errors.
- 512 --log-severity The severity level you want Cloud Storage FUSE to generate logs for.

