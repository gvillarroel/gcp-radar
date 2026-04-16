---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.884Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Cloud Audit Logs enhanced error coverage for Cloud Storage"
feature_slug: "cloud-audit-logs-enhanced-error-coverage-for-cloud-storage"
latest_feature_date: "2025-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/audit-logging"
  - "https://docs.cloud.google.com/storage/docs/access-logs"
  - "https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging"
  - "https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage"
keywords:
  - "audit"
  - "logs"
  - "enhanced"
  - "error"
  - "coverage"
  - "for"
  - "storage"
  - "include"
---

# Cloud Audit Logs enhanced error coverage for Cloud Storage

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage Cloud Audit Logs include broader error scenario coverage and more detailed error messages.

## Extended Definition

Cloud Storage Cloud Audit Logs include broader error scenario coverage and more detailed error messages.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- [https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging](https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging)
- [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)

## Supporting Pages

### Cloud Audit Logs with Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Audit log type Sub-type Cloud Storage operations Admin Activity ADMIN WRITE Setting bucket or managed folder IAM policies Setting object ACLs 1 Creating buckets Deleting buckets Restoring soft-deleted buckets Relocating buckets Updating bucket metadata Creating tag bindings on buckets Deleting tag bindings on buckets Creating managed folders Deleting managed folders Updating Storage Intelligence configuration for a project, a folder, or an organization Creating Rapid Cache caches Pausing Rapid Cache caches Resuming Rapid Cache caches Disabling Rapid Cache caches Updating Rapid Cache caches Creating HMAC keys Deleting HMAC keys Updating HMAC keys Cancelling long-running operations Deleting long-running operations Creating Storage Insights inventory report configurations Updating Storage Insights inventory report configurations Deleting Storage Insights inventory report configurations Creating Storage Insights dataset configurations Updating Storage Insights dataset configurations Deleting Storage Insights dataset configurations Linking Storage Insights dataset configurations Unlinking Storage Insights dataset configurations Data Access ADMIN READ Getting bucket or managed folder IAM policies Getting object ACLs Getting bucket metadata Listing buckets Listing tag bindings on buckets Listing effective tags on buckets Getting managed folder metadata Listing managed folders Getting Storage Intelligence configuration for a project, a folder, or an organization Getting Rapid Cache caches Listing Rapid Cache caches Getting HMAC keys Listing HMAC keys Getting long-running operations Listing long-running operations Getting Storage Insights inventory report configurations Listing Storage Insights inventory report configurations Getting Storage Insights inventory reports Listing Storage Insights inventory reports Getting Storage Insights dataset configurations Listing Storage Insights dataset configurations Data Access DATA READ Getting object data Getting object metadata Listing objects Getting folder metadata Listing folders Copying objects 2 Composing objects 2 Listing ongoing XML API multipart uploads Listing XML API multipart upload parts Data Access DATA WRITE Creating objects Deleting objects Deleting multiple objects using the XML API Restoring soft-deleted objects Moving objects Updating non-ACL object metadata Setting retentions for objects Overriding unlocked retentions for objects Copying objects 2 Composing objects 2 Initiating XML API multipart uploads Creating parts in an XML API multipart upload Aborting XML API multipart uploads Completing XML API multipart uploads Creating folders Deleting folders Renaming folders System Event Start of bucket relocate process 3 End of bucket relocate process 1 Admin Activity audit logs are not generated if/when ACLs are initially set at object creation.
- For example: gcloud storage sign-url gs://example bucket/example object.jpeg --private-key-file=example-key.json --duration=10m --query-params=x-goog-custom-audit-job=job name,x-goog-custom-audit-user=test user Example log entry protoPayload: { @type: "type.googleapis.com/google.cloud.audit.Auditlog", ... metadata: { audit context: { app context: "EXTERNAL", audit info: { x-goog-custom-audit-job: "job name", x-goog-custom-audit-user: "test user" } } } } For more information on the fields included in the protoPayload object with the type type.googleapis.com/google.cloud.audit.Auditlog , see the AuditLog reference documentation .
- Audit logs for multi-object delete XML API When you use the XML API to delete multiple objects in a single request, Cloud Storage generates two types of data access audit logs, provided you enable data access audit logs : Parent request audit log : A log is generated for the overall multi-object delete request.
- Here are some reasons you might want to route your audit logs: To keep audit logs for a longer period of time or to use more powerful search capabilities, you can route copies of your audit logs to Cloud Storage, BigQuery, or Pub/Sub.

### Usage logs & storage logs \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- Source ID: `site-iam-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PUT / example-logs-bucket ?acl HTTP/1.1 Host: storage.googleapis.com <AccessControlList> <Entries> <Entry> <Scope type="GroupByEmail"> <EmailAddress>cloud-storage-analytics@google.com</EmailAddress> </Scope> <Permission>WRITE</Permission> </Entry> <!-- include other existing ACL entries here--> </Entries> </AccessControlList> Enable logging for your bucket using the logging query parameter: PUT / example-bucket ?logging HTTP/1.1 Host: storage.googleapis.com <Logging> <LogBucket> example-logs-bucket </LogBucket> <LogObjectPrefix> log object prefix </LogObjectPrefix> </Logging> Check logging status Command line Check logging by using the buckets describe command with the --format flag: gcloud storage buckets describe gs://example-bucket --format="default(logging config)" You can also save the logging configurations to a file: gcloud storage buckets describe gs://example-bucket > your logging configuration file --format="default(logging config)" If logging is enabled, the server returns the logging configuration in the response: logging: logBucket: example-logs-bucket logObjectPrefix: log object prefix If logging is not enabled, the following is returned: null REST APIs JSON API Send a GET request for the bucket's logging configuration as shown in the following example: GET /s t orage/v 1 /b/ example - bucke t ? f ields=loggi n g Hos t : s t orage. googleapis.com If logging is enabled, the server sends the configuration in the response.
- In most cases, Cloud Audit Logs is the recommended method for generating logs that track API operations performed in Cloud Storage: Cloud Audit Logs tracks access on a continuous basis, with delivery of events within seconds of their occurrence.
- Your usage logs are in CSV format and have the following naming convention: OBJECT PREFIX usage TIMESTAMP ID v0 Similarly, storage logs are named using the following convention: OBJECT PREFIX storage TIMESTAMP ID v0 For example, the following is the name of a usage log object that uses the default object prefix, reports usage for the bucket named example-bucket , and was created on June 18, 2022 at 14:00 UTC: example-bucket usage 2022 06 18 14 00 00 1702e6 v0 Similarly, the following is the name of the storage log object that uses the default object prefix and was created on June 18, 2022 for the same bucket: example-bucket storage 2022 06 18 07 00 00 1702e6 v0 To download logs: Console In the Google Cloud console, go to the Cloud Storage Buckets page.
- Here's an example of a modified log file: "bucket","storage byte hours","filename" "example-bucket","5532482018","example-bucket storage 2014 01 05 08 00 00 021fd v0" When you load the storage usage logs into BigQuery, load your locally modified logs and use the customized schema. for f in example-bucket storage\ ; \ do ./bq.py load --skip leading rows=1 storageanalysis.storage $f ./cloud storage storage schema custom.json; done Query logs in BigQuery Once your logs are loaded into BigQuery, you can query your usage logs to return information about your logged bucket(s).

### Storage batch operations audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging](https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.storagebatchoperations.v1.StorageBatchOperations.GetJob google.cloud.storagebatchoperations.v1.StorageBatchOperations.ListJobs google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.storagebatchoperations.v1.StorageBatchOperations.CancelJob google.cloud.storagebatchoperations.v1.StorageBatchOperations.CreateJob (LRO) google.cloud.storagebatchoperations.v1.StorageBatchOperations.DeleteJob google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Cloud Identity and Access Management documentation for Storage Batch Operations. google.cloud.storagebatchoperations.v1.StorageBatchOperations The following audit logs are associated with methods belonging to google.cloud.storagebatchoperations.v1.StorageBatchOperations .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Storage Batch Operations audit logs use the service name storagebatchoperations.googleapis.com .
- Filter for this method : protoPayload.methodName="google.longrunning.Operations.ListOperations" Methods that don't produce audit logs A method might not produce audit logs for one or more of the following reasons: It is a high volume method involving significant log generation and storage costs.
- Filter for this method : protoPayload.methodName="google.cloud.storagebatchoperations.v1.StorageBatchOperations.ListJobs" google.longrunning.Operations The following audit logs are associated with methods belonging to google.longrunning.Operations .

### Shim for Running gcloud storage \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- In both the shim and unshimmed cases, the old key is maintained. rm $folder$ delete markers are not supported. rpo Works as expected. setmeta Does not throw an error if no headers are changed. stat Includes a field "Storage class update time:" which may throw off tabbing. ubla Works as expected. versioning Works as expected. web The get subcommand has different JSON spacing and doesn't print an informational message if no configuration is found.
- Boto Configuration Configuration found in the boto file is mapped 1:1 to gcloud environment variables where appropriate. [Credentials] aws access key id: AWS ACCESS KEY ID aws secret access key: AWS SECRET ACCESS KEY use client certificate: CLOUDSDK CONTEXT AWARE USE CLIENT CERTIFICATE [Boto] proxy: CLOUDSDK PROXY ADDRESS proxy type: CLOUDSDK PROXY TYPE proxy port: CLOUDSDK PROXY PORT proxy user: CLOUDSDK PROXY USERNAME proxy pass: CLOUDSDK PROXY PASSWORD proxy rdns: CLOUDSDK PROXY RDNS http socket timeout: CLOUDSDK CORE HTTP TIMEOUT ca certificates file: CLOUDSDK CORE CUSTOM CA CERTS FILE max retry delay: CLOUDSDK STORAGE BASE RETRY DELAY num retries: CLOUDSDK STORAGE MAX RETRIES [GSUtil] check hashes: CLOUDSDK STORAGE CHECK HASHES default project id: CLOUDSDK CORE PROJECT disable analytics prompt: CLOUDSDK CORE DISABLE USAGE REPORTING use magicfile: CLOUDSDK STORAGE USE MAGICFILE parallel composite upload threshold: CLOUDSDK STORAGE PARALLEL COMPOSITE UPLOAD THRESHOLD resumable threshold: CLOUDSDK STORAGE RESUMABLE THRESHOLD [OAuth2] client id: CLOUDSDK AUTH CLIENT ID client secret: CLOUDSDK AUTH CLIENT SECRET provider authorization uri: CLOUDSDK AUTH AUTH HOST provider token uri: CLOUDSDK AUTH TOKEN HOST General Compatibility Notes Due to its compatibility across all major platforms, multiprocessing is enabled for all commands by default (equivalent to the -m option always being included in gsutil).
- The all-version flag ( -A ) silently enables sequential execution rather than raising an error. defacl The ch subcommand is not supported. defstorageclass Works as expected. hash In gsutil, the -m and -c flags that affect which hashes are displayed are ignored for cloud objects.
- Overview Cloud SDK includes a new CLI, gcloud storage, that can be considerably faster than gsutil when performing uploads and downloads with less parameter tweaking.

