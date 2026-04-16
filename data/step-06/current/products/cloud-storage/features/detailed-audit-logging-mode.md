---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.951Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Detailed audit logging mode"
feature_slug: "detailed-audit-logging-mode"
latest_feature_date: "2020-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/audit-logging"
  - "https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging"
  - "https://docs.cloud.google.com/storage/docs/access-logs"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file"
keywords:
  - "detailed"
  - "audit"
  - "logging"
  - "mode"
  - "provides"
  - "more"
  - "granular"
  - "for"
---

# Detailed audit logging mode

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Detailed audit logging mode provides more granular audit logging for Cloud Storage activity.

## Extended Definition

Detailed audit logging mode provides more granular audit logging for Cloud Storage activity.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- [https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging](https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging)
- [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)

## Supporting Pages

### Cloud Audit Logs with Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Within the protoPayload field, additional audit information specific to Cloud Storage is included in the request and response fields when Detailed audit logging mode is enforced.
- For more information about querying by using the Logs Explorer, see Build queries in the Logs Explorer . gcloud The Google Cloud CLI provides a command-line interface to the Logging API.
- You can also attach custom information to audit logs for more granular information about how your resources are accessed.
- Note that you don't need to enforce detailed audit logging to attach custom information to audit logs.

### Storage batch operations audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging](https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Storage Batch Operations audit logs use the service name storagebatchoperations.googleapis.com .
- Filter for this method : protoPayload.methodName="google.longrunning.Operations.ListOperations" Methods that don't produce audit logs A method might not produce audit logs for one or more of the following reasons: It is a high volume method involving significant log generation and storage costs.
- This document describes audit logging for Storage Batch Operations.
- For more information see Audit logs for long-running operations .

### Usage logs & storage logs \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Audit Logs can, optionally, log detailed request and response information.
- PUT / example-logs-bucket ?acl HTTP/1.1 Host: storage.googleapis.com <AccessControlList> <Entries> <Entry> <Scope type="GroupByEmail"> <EmailAddress>cloud-storage-analytics@google.com</EmailAddress> </Scope> <Permission>WRITE</Permission> </Entry> <!-- include other existing ACL entries here--> </Entries> </AccessControlList> Enable logging for your bucket using the logging query parameter: PUT / example-bucket ?logging HTTP/1.1 Host: storage.googleapis.com <Logging> <LogBucket> example-logs-bucket </LogBucket> <LogObjectPrefix> log object prefix </LogObjectPrefix> </Logging> Check logging status Command line Check logging by using the buckets describe command with the --format flag: gcloud storage buckets describe gs://example-bucket --format="default(logging config)" You can also save the logging configurations to a file: gcloud storage buckets describe gs://example-bucket > your logging configuration file --format="default(logging config)" If logging is enabled, the server returns the logging configuration in the response: logging: logBucket: example-logs-bucket logObjectPrefix: log object prefix If logging is not enabled, the following is returned: null REST APIs JSON API Send a GET request for the bucket's logging configuration as shown in the following example: GET /s t orage/v 1 /b/ example - bucke t ? f ields=loggi n g Hos t : s t orage. googleapis.com If logging is enabled, the server sends the configuration in the response.
- For example, the following query shows how to summarize the request methods that clients use to access resources in the logged bucket. project-name>SELECT cs method, COUNT( ) AS count FROM [storageanalysis.usage] GROUP BY cs method Example output from the query: Waiting on bqjob r1a6b4596bd9c29fb 000001437d6f8a52 1 ... (0s) Current status: DONE +-----------+-------+ cs method count +-----------+-------+ PUT 8002 GET 12631 POST 2737 HEAD 2173 DELETE 7290 +-----------+-------+ Quit the interactive shell of the bq tool. project-name> quit Disable logging Command line Disable logging with the --clear-log-bucket flag in the buckets update command: gcloud storage buckets update gs://example-bucket --clear-log-bucket To check that logging was successfully disabled, use the buckets describe command: gcloud storage buckets describe gs://example-bucket --format="default(logging config)" If logging is disabled, the following is returned: null REST APIs JSON API Disable logging by sending a PATCH request to the bucket's logging configuration as shown in the following example.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### Cloud Storage FUSE configuration file \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Storage FUSE configuration file format and fields The following YAML configuration example shows the format and fields available in Cloud Storage FUSE. app-name : "APP NAME" logging : file-path : "FILE PATH" format : FORMAT severity : SEVERITY log-rotate : max-file-size-mb : MAX FILE SIZE backup-file-count : BACKUP FILE COUNT compress : COMPRESS cache-dir : "CACHE DIR" file-cache : max-size-mb : MAX SIZE cache-file-for-range-read : CACHE FILE FOR RANGE READ enable-parallel-downloads : ENABLE PARALLEL DOWNLOADS exclude-regex : EXCLUDE REGEX include-regex : INCLUDE REGEX parallel-downloads-per-file : PARALLEL DOWNLOADS PER FILE max-parallel-downloads : MAX PARALLEL DOWNLOADS download-chunk-size-mb : DOWNLOAD CHUNK SIZE metadata-cache : negative-ttl-secs : ENABLE NEGATIVE TTL SECS stat-cache-max-size-mb : STAT CACHE MAX SIZE ttl-secs : TTL SECS enable-metadata-prefetch : ENABLE METADATA PREFETCH metadata-prefetch-entries-limit : METADATA PREFETCH ENTRIES LIMIT metadata-prefetch-max-workers : METADATA PREFETCH MAX WORKERS only-dir : "ONLY DIR" gcs-auth : anonymous-access : ANONYMOUS ACCESS key-file : "KEY FILE" reuse-token-from-url : REUSE TOKEN FROM URL token-url : "TOKEN URL" gcs-connection : billing-project : "BILLING PROJECT" client-protocol : CLIENT PROTOCOL custom-endpoint : "CUSTOM ENDPOINT" http-client-timeout : HTTP CLIENT TIMEOUT limit-bytes-per-sec : "LIMIT BYTES PER SEC" limit-ops-per-sec : "LIMIT OPS PER SEC" max-conns-per-host : MAX CONNS PER HOST max-idle-conns-per-host : MAX IDLE CONNS PER HOST sequential-read-size-mb : SEQUENTIAL READ SIZE implicit-dirs : IMPLICIT DIRS file-system : kernel-list-cache-ttl-secs : KERNEL LIST CACHE TTL SECS ignore-interrupts : IGNORE INTERRUPTS dir-mode : "DIR MODE" file-mode : "FILE MODE" fuse-options : FUSE OPTIONS gid : GID rename-dir-limit : RENAME DIR LIMIT temp-dir : "TEMP DIR" uid : UID foreground : FOREGROUND gcs-retries : max-retry-attempts : MAX RETRY ATTEMPTS max-retry-sleep : MAX RETRY SLEEP multiplier : "MULTIPLIER" metrics : cloud-metrics-export-interval-secs : CLOUD METRICS EXPORT INTERVAL prometheus-port : PROMETHEUS PORT debug : log-mutex : LOG MUTEX exit-on-invariant-violation : EXIT ON INVARIANT VIOLATION write : enable-streaming-writes : STREAMING WRITES global-max-blocks : MAXIMUM GLOBAL BLOCKS read : enable-buffered-read : ENABLE BUFFERED READ global-max-blocks : MAXIMUM GLOBAL READ BLOCKS profile : PROFILE Cloud Storage FUSE configuration file fields The following table describes the fields you can specify in your Cloud Storage FUSE configuration file.
- For more information, see Control cacheability at file granularity using regular expressions .
- For more information, see Control cacheability at file granularity using regular expressions .
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.

