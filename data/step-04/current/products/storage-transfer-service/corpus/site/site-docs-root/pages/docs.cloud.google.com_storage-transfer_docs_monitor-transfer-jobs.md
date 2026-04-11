---
title: "Monitor transfer jobs \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs
  title: "Monitor transfer jobs \_|\_ Storage Transfer Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Send feedback
Monitor transfer jobs
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Monitoring automatically collects and stores information
for your Storage Transfer Service jobs. You can use Cloud Monitoring to chart and
monitor a range of metrics:
The number of found objects and bytes
The number of copied objects and bytes
The number of deleted objects and bytes
The number of errors, and the associated error codes
Cloud Monitoring is automatically enabled for Storage Transfer Service. There's
no charge for the collection of data or to view metrics in the
Google Cloud console. API calls may incur charges; see
Cloud Monitoring pricing for pricing details.
Required IAM role
You must have the Monitoring Viewer ( roles/monitoring.viewer ) role, or
equivalent permissions, to view metrics in Cloud Monitoring.
Learn how to grant an IAM role .
View metrics
Cloud Monitoring metrics are available from two locations in the
Google Cloud console:
The Storage Transfer Service job details page displays metrics for a specific
transfer job. In addition to the metrics listed below, it computes the
bandwidth of bytes copies and the rate of objects copied.
The Cloud Monitoring page can display metrics for a single transfer job,
multiple jobs, or all jobs in a project. It provides multiple chart options
and customizations.
View metrics on the job details page
To view a specific job's metrics:
Go to the Transfer jobs page in the Google Cloud console.
Go to Transfer jobs
Click on the job for which to view metrics. The Job details page appears.
Click the Monitoring tab. The default dashboard is displayed.
View metrics in Cloud Monitoring
To view Storage Transfer Service metrics in Cloud Monitoring, do the following:
Go to the Metrics Explorer page in the Google Cloud console.
Go to Monitoring: Metrics Explorer
Follow the instructions in
Create charts with Metrics Explorer to
select and display your metrics.
Resource details
Monitored resource name: storage_transfer_job
Resource field / Target
field
REST resource and field
used to populate this
field
Description
project_id
TransferJob.project_id
The identifier of the
project associated
with this resource
job_id
TransferJob.name
The globally unique name
of the transfer
location
Will always be set to
global since transfer
jobs are not associated
with a region or
location
The location of the
transfer job
Metric details
All Storage Transfer Service metrics are
delta metrics . They measure
the change since the metric was last recorded. For example, metrics measuring
request counts are delta metrics; each value records how many requests were
received since the last data point was recorded.
Data is sampled every 60 seconds. After sampling, data is not visible for up to
180 seconds.
Metric names all begin with
storagetransfer.googleapis.com/transferjob/ . For example,
storagetransfer.googleapis.com/transferjob/found_bytes_count .
Metric name
Labels
Description
found_bytes_count
origin=[source | sink]
Number of bytes found that are scheduled to be transferred or deleted,
excluding any that are filtered based on
object conditions or because they already exist at the
destination. See
TransferOptions
for information about overwriting data in the sink.
Corresponding
TransferCounters : bytesFoundFromSource,
bytesFoundOnlyFromSink
found_objects_count
origin=[source | sink]
Number of objects found that are scheduled to be transferred or
deleted, excluding any that are filtered based on object conditions or
skipped due to sync.
Corresponding
TransferCounters : objectsFoundFromSource,
objectsFoundOnlyFromSink
copied_bytes_count
status=[succeeded | skipped | failed]
Number of bytes copied.
Corresponding
TransferCounters : bytesCopiedToSink,
bytesFromSourceSkippedBySync, bytesFromSourceFailed
The value of copied_bytes_count with status
succeeded does not always match the
bytesCopiedToSink counter, as the metric also counts
successfully copied bytes that are discarded in the case of a failure.
For example, if Storage Transfer Service copies 100 bytes of an object that is
deleted mid-way through transfer, the 100 bytes copied are recorded
under copied_bytes_count with status
succeeded . The full object's bytes are also recorded under
copied_bytes_count with status failed .
copied_objects_count
status=[succeeded | skipped | failed]
Number of objects copied.
Corresponding
TransferCounters : objectsCopiedToSink,
objectsFromSourceSkippedBySync, objectsFromSourceFailed
deleted_bytes_count
origin=[source | sink]
status=[succeeded | failed]
Number of bytes deleted. Storage Transfer Service can be configured
to delete data at the source and/or the destination. See
TransferOptions
for information about configuring delete behavior.
Corresponding
TransferCounters : bytesDeletedFromSource,
bytesDeletedFromSink, bytesFromSourceFailed,
bytesFailedToDeleteFromSink
Note: this counter is the sum of
deleted_bytes_count:status=failed,origin=source and
copied_bytes_count:status=failed .
deleted_objects_count
origin=[source | sink]
status=[succeeded | failed]
Number of objects deleted.
Corresponding
TransferCounters : objectsDeletedFromSource,
objectsDeletedFromSink, objectsFromSourceFailed,
objectsFailedToDeleteFromSink
Note: this counter is the sum of
deleted_objects_count:status=failed,origin=source and
copied_objects_count:status=failed .
error_count
code= error code
The number of errors as reported in
ErrorSummary .
object_replication_count
status=[succeeded | failed]
destination_bucket=[string]
source_bucket=[string]
The number of objects replicated using
cross-bucket
replication .
replication_latency
destination_bucket=[string]
source_bucket=[string]
Time in milliseconds for the object to be replicated using
cross-bucket replication .
replication_start_latency
destination_bucket=[string]
source_bucket=[string]
Time in milliseconds for the object to be picked up for
cross-bucket replication .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
