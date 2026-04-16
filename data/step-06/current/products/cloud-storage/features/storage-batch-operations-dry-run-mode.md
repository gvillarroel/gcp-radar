---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.873Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Storage batch operations dry run mode"
feature_slug: "storage-batch-operations-dry-run-mode"
latest_feature_date: "2026-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file"
  - "https://docs.cloud.google.com/storage/docs/gcsfuse-config-file"
keywords:
  - "storage"
  - "batch"
  - "operations"
  - "dry"
  - "run"
  - "mode"
  - "can"
  - "be"
---

# Storage batch operations dry run mode

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Storage batch operations can be run in dry run mode to validate job configuration without changing or deleting data.

## Extended Definition

Storage batch operations can be run in dry run mode to validate job configuration without changing or deleting data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging](https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- [https://docs.cloud.google.com/storage/docs/gcsfuse-config-file](https://docs.cloud.google.com/storage/docs/gcsfuse-config-file)

## Supporting Pages

### Storage batch operations audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging](https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.storagebatchoperations.v1.StorageBatchOperations.GetJob google.cloud.storagebatchoperations.v1.StorageBatchOperations.ListJobs google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.storagebatchoperations.v1.StorageBatchOperations.CancelJob google.cloud.storagebatchoperations.v1.StorageBatchOperations.CreateJob (LRO) google.cloud.storagebatchoperations.v1.StorageBatchOperations.DeleteJob google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Cloud Identity and Access Management documentation for Storage Batch Operations. google.cloud.storagebatchoperations.v1.StorageBatchOperations The following audit logs are associated with methods belonging to google.cloud.storagebatchoperations.v1.StorageBatchOperations .
- Filter for this method : protoPayload.methodName="google.cloud.storagebatchoperations.v1.StorageBatchOperations.CancelJob" CreateJob Method : google.cloud.storagebatchoperations.v1.StorageBatchOperations.CreateJob Audit log type : Admin activity Permissions : storagebatchoperations.jobs.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.storagebatchoperations.v1.StorageBatchOperations.CreateJob" DeleteJob Method : google.cloud.storagebatchoperations.v1.StorageBatchOperations.DeleteJob Audit log type : Admin activity Permissions : storagebatchoperations.jobs.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.longrunning.Operations.CancelOperation" DeleteOperation Method : google.longrunning.Operations.DeleteOperation Audit log type : Admin activity Permissions : storagebatchoperations.operations.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this service: protoPayload . serviceName = "storagebatchoperations.googleapis.com" Methods by permission type Each IAM permission has a type property, whose value is an enum that can be one of four values: ADMIN READ , ADMIN WRITE , DATA READ , or DATA WRITE .

### "IAM permissions for gcloud storage commands \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Command Flag Required IAM Permissions batch-operations jobs create storagebatchoperations.jobs.create batch-operations jobs cancel storagebatchoperations.jobs.cancel batch-operations jobs delete storagebatchoperations.jobs.delete batch-operations jobs get storagebatchoperations.jobs.get batch-operations jobs list storagebatchoperations.jobs.list buckets add-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets anywhere-caches create storage.anywhereCaches.create buckets anywhere-caches describe storage.anywhereCaches.get buckets anywhere-caches list storage.anywhereCaches.list buckets anywhere-caches update storage.anywhereCaches.update buckets anywhere-caches pause storage.anywhereCaches.pause buckets anywhere-caches resume storage.anywhereCaches.resume buckets anywhere-caches disable storage.anywhereCaches.disable buckets create storage.buckets.create storage.buckets.setIpFilter 15 buckets delete storage.buckets.delete buckets describe storage.buckets.get storage.buckets.getIamPolicy 1 storage.buckets.getIpFilter 16 buckets get-iam-policy storage.buckets.get storage.buckets.getIamPolicy buckets list storage.buckets.list storage.buckets.getIamPolicy 1 buckets notifications create storage.buckets.get storage.buckets.update pubsub.topics.get (for the project containing the Pub/Sub topic) pubsub.topics.create 3 (for the project containing the Pub/Sub topic) pubsub.topics.getIamPolicy (for Pub/Sub topic receiving notifications) pubsub.topics.setIamPolicy 3 (for Pub/Sub topic receiving notifications) buckets notifications create --skip-topic-setup storage.buckets.get storage.buckets.update buckets notifications delete storage.buckets.get storage.buckets.update buckets notifications describe storage.buckets.get buckets notifications list storage.buckets.get buckets relocate storage.buckets.relocate buckets remove-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets set-iam-policy storage.buckets.setIamPolicy storage.buckets.update buckets update storage.buckets.update storage.buckets.setIpFilter 15 buckets update --no-requester-pays storage.buckets.update resourcemanager.projects.createBillingAssignment 2 buckets update --recovery-point-objective --rpo --[no-]uniform-bucket-level-access storage.buckets.get storage.buckets.update buckets update --clear-pap --clear-public-access-prevention --[no-]pap --[no-]public-access-prevention storage.buckets.get storage.buckets.update storage.buckets.setIamPolicy cat storage.objects.get storage.objects.list 13 cp storage.objects.get (for the source objects) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) du storage.objects.list folders create storage.folders.create folders delete storage.folders.delete folders describe storage.folders.get folders list storage.folders.list folders rename storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) hash storage.objects.get hmac create storage.hmacKeys.create hmac delete storage.hmacKeys.delete hmac describe storage.hmacKeys.get hmac list storage.hmacKeys.list hmac update storage.hmacKeys.update insights dataset-configs create storageinsights.datasetConfigs.create insights dataset-configs create-link storageinsights.datasetConfigs.linkDataset insights dataset-configs delete storageinsights.datasetConfigs.delete insights dataset-configs delete-link storageinsights.datasetConfigs.unlinkDataset insights dataset-configs describe storageinsights.datasetConfigs.get insights dataset-configs list storageinsights.datasetConfigs.list insights dataset-configs update storageinsights.datasetConfigs.update insights inventory-reports create storageinsights.reportConfigs.create insights inventory-reports delete storageinsights.reportConfigs.delete insights inventory-reports details list storageinsights.reportDetails.list insights inventory-reports details describe storageinsights.reportDetails.get insights inventory-reports list storageinsights.reportConfigs.list insights inventory-reports update storageinsights.reportConfigs.get storageinsights.reportConfigs.update ls (for bucket listing) storage.buckets.list storage.buckets.getIamPolicy 6 ls (for object listing) storage.objects.get 7 storage.objects.list storage.objects.getIamPolicy 8 ls --buckets storage.buckets.get storage.buckets.getIamPolicy 6 storage intelligence-config enable storage.intelligenceConfigs.update storage-intelligence disable storage.intelligenceConfigs.update storage-intelligence describe storage.intelligenceConfigs.get storage-intelligence update storage.intelligenceConfigs.update mv storage.objects.get (for the source objects) storage.objects.delete (for the source bucket) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) objects compose storage.objects.get storage.objects.create storage.objects.delete 9 objects describe storage.objects.get storage.objects.getIamPolicy 8 objects list storage.objects.list storage.objects.getIamPolicy 8 objects update storage.objects.get storage.objects.list storage.objects.update objects update --storage-class --encryption-key --clear-encryption-key storage.objects.get storage.objects.list storage.objects.create storage.objects.delete objects update --retention-mode --retain-until --clear-retention storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 11 operations cancel storage.bucketOperations.cancel operations describe storage.bucketOperations.get operations list storage.bucketOperations.list restore storage.objects.create storage.objects.delete 9 storage.objects.restore restore --async storage.objects.create storage.objects.delete 14 storage.objects.restore storage.buckets.restore rm storage.buckets.delete storage.objects.delete storage.objects.list rsync storage.objects.list (for the source bucket) storage.objects.get (for the source objects) storage.objects.list (for the destination bucket) storage.objects.get (for the destination bucket) storage.objects.create (for the destination bucket) storage.objects.delete 10 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) rsync --dry-run storage.objects.list (for the source and destination buckets) service-agent resourceManager.projects.get sign-url None; however, the service account whose key is used as part of this command must have permission to perform the request being encoded into the signed URL.
- The following table lists the Identity and Access Management (IAM) permissions required to run gcloud storage commands .
- The --billing-project top-level flag If you use the --billing-project global flag to specify a project that should be billed for your request, you must have serviceusage.services.use permission for the project you specify.
- 5 This permission is only required if you use parallel composite uploads or if you don't use the --no-clobber flag but insert an object that has the same name as an object that already exists in the bucket.

### Cloud Storage FUSE configuration file \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Storage FUSE configuration file format and fields The following YAML configuration example shows the format and fields available in Cloud Storage FUSE. app-name : "APP NAME" logging : file-path : "FILE PATH" format : FORMAT severity : SEVERITY log-rotate : max-file-size-mb : MAX FILE SIZE backup-file-count : BACKUP FILE COUNT compress : COMPRESS cache-dir : "CACHE DIR" file-cache : max-size-mb : MAX SIZE cache-file-for-range-read : CACHE FILE FOR RANGE READ enable-parallel-downloads : ENABLE PARALLEL DOWNLOADS exclude-regex : EXCLUDE REGEX include-regex : INCLUDE REGEX parallel-downloads-per-file : PARALLEL DOWNLOADS PER FILE max-parallel-downloads : MAX PARALLEL DOWNLOADS download-chunk-size-mb : DOWNLOAD CHUNK SIZE metadata-cache : negative-ttl-secs : ENABLE NEGATIVE TTL SECS stat-cache-max-size-mb : STAT CACHE MAX SIZE ttl-secs : TTL SECS enable-metadata-prefetch : ENABLE METADATA PREFETCH metadata-prefetch-entries-limit : METADATA PREFETCH ENTRIES LIMIT metadata-prefetch-max-workers : METADATA PREFETCH MAX WORKERS only-dir : "ONLY DIR" gcs-auth : anonymous-access : ANONYMOUS ACCESS key-file : "KEY FILE" reuse-token-from-url : REUSE TOKEN FROM URL token-url : "TOKEN URL" gcs-connection : billing-project : "BILLING PROJECT" client-protocol : CLIENT PROTOCOL custom-endpoint : "CUSTOM ENDPOINT" http-client-timeout : HTTP CLIENT TIMEOUT limit-bytes-per-sec : "LIMIT BYTES PER SEC" limit-ops-per-sec : "LIMIT OPS PER SEC" max-conns-per-host : MAX CONNS PER HOST max-idle-conns-per-host : MAX IDLE CONNS PER HOST sequential-read-size-mb : SEQUENTIAL READ SIZE implicit-dirs : IMPLICIT DIRS file-system : kernel-list-cache-ttl-secs : KERNEL LIST CACHE TTL SECS ignore-interrupts : IGNORE INTERRUPTS dir-mode : "DIR MODE" file-mode : "FILE MODE" fuse-options : FUSE OPTIONS gid : GID rename-dir-limit : RENAME DIR LIMIT temp-dir : "TEMP DIR" uid : UID foreground : FOREGROUND gcs-retries : max-retry-attempts : MAX RETRY ATTEMPTS max-retry-sleep : MAX RETRY SLEEP multiplier : "MULTIPLIER" metrics : cloud-metrics-export-interval-secs : CLOUD METRICS EXPORT INTERVAL prometheus-port : PROMETHEUS PORT debug : log-mutex : LOG MUTEX exit-on-invariant-violation : EXIT ON INVARIANT VIOLATION write : enable-streaming-writes : STREAMING WRITES global-max-blocks : MAXIMUM GLOBAL BLOCKS read : enable-buffered-read : ENABLE BUFFERED READ global-max-blocks : MAXIMUM GLOBAL READ BLOCKS profile : PROFILE Cloud Storage FUSE configuration file fields The following table describes the fields you can specify in your Cloud Storage FUSE configuration file.
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- 0s , which specifies no timeout limit-bytes-per-sec Specifies the bandwidth limit at which Cloud Storage FUSE can read data from Cloud Storage, measured over a 30-second window. "-1" , which specifies no limit. limit-ops-per-sec Specifies a limit for operations performed per second, measured over a 30-second window.
- An endpoint, for example: storage.googleapis.com:443 . http-client-timeout Specifies how long the Cloud Storage FUSE HTTP client can wait to get a response from the server before timing out.

### Cloud Storage FUSE configuration file \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/gcsfuse-config-file](https://docs.cloud.google.com/storage/docs/gcsfuse-config-file)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Storage FUSE configuration file format and fields The following YAML configuration example shows the format and fields available in Cloud Storage FUSE. app-name : "APP NAME" logging : file-path : "FILE PATH" format : FORMAT severity : SEVERITY log-rotate : max-file-size-mb : MAX FILE SIZE backup-file-count : BACKUP FILE COUNT compress : COMPRESS cache-dir : "CACHE DIR" file-cache : max-size-mb : MAX SIZE cache-file-for-range-read : CACHE FILE FOR RANGE READ enable-parallel-downloads : ENABLE PARALLEL DOWNLOADS exclude-regex : EXCLUDE REGEX include-regex : INCLUDE REGEX parallel-downloads-per-file : PARALLEL DOWNLOADS PER FILE max-parallel-downloads : MAX PARALLEL DOWNLOADS download-chunk-size-mb : DOWNLOAD CHUNK SIZE metadata-cache : negative-ttl-secs : ENABLE NEGATIVE TTL SECS stat-cache-max-size-mb : STAT CACHE MAX SIZE ttl-secs : TTL SECS enable-metadata-prefetch : ENABLE METADATA PREFETCH metadata-prefetch-entries-limit : METADATA PREFETCH ENTRIES LIMIT metadata-prefetch-max-workers : METADATA PREFETCH MAX WORKERS only-dir : "ONLY DIR" gcs-auth : anonymous-access : ANONYMOUS ACCESS key-file : "KEY FILE" reuse-token-from-url : REUSE TOKEN FROM URL token-url : "TOKEN URL" gcs-connection : billing-project : "BILLING PROJECT" client-protocol : CLIENT PROTOCOL custom-endpoint : "CUSTOM ENDPOINT" http-client-timeout : HTTP CLIENT TIMEOUT limit-bytes-per-sec : "LIMIT BYTES PER SEC" limit-ops-per-sec : "LIMIT OPS PER SEC" max-conns-per-host : MAX CONNS PER HOST max-idle-conns-per-host : MAX IDLE CONNS PER HOST sequential-read-size-mb : SEQUENTIAL READ SIZE implicit-dirs : IMPLICIT DIRS file-system : kernel-list-cache-ttl-secs : KERNEL LIST CACHE TTL SECS ignore-interrupts : IGNORE INTERRUPTS dir-mode : "DIR MODE" file-mode : "FILE MODE" fuse-options : FUSE OPTIONS gid : GID rename-dir-limit : RENAME DIR LIMIT temp-dir : "TEMP DIR" uid : UID foreground : FOREGROUND gcs-retries : max-retry-attempts : MAX RETRY ATTEMPTS max-retry-sleep : MAX RETRY SLEEP multiplier : "MULTIPLIER" metrics : cloud-metrics-export-interval-secs : CLOUD METRICS EXPORT INTERVAL prometheus-port : PROMETHEUS PORT debug : log-mutex : LOG MUTEX exit-on-invariant-violation : EXIT ON INVARIANT VIOLATION write : enable-streaming-writes : STREAMING WRITES global-max-blocks : MAXIMUM GLOBAL BLOCKS read : enable-buffered-read : ENABLE BUFFERED READ global-max-blocks : MAXIMUM GLOBAL READ BLOCKS profile : PROFILE Cloud Storage FUSE configuration file fields The following table describes the fields you can specify in your Cloud Storage FUSE configuration file.
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- 0s , which specifies no timeout limit-bytes-per-sec Specifies the bandwidth limit at which Cloud Storage FUSE can read data from Cloud Storage, measured over a 30-second window. "-1" , which specifies no limit. limit-ops-per-sec Specifies a limit for operations performed per second, measured over a 30-second window.
- An endpoint, for example: storage.googleapis.com:443 . http-client-timeout Specifies how long the Cloud Storage FUSE HTTP client can wait to get a response from the server before timing out.

