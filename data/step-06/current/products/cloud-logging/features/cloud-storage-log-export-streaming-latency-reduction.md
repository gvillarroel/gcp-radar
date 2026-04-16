---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.466Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Cloud Storage log export streaming latency reduction"
feature_slug: "cloud-storage-log-export-streaming-latency-reduction"
latest_feature_date: "2018-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
  - "https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging"
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-python"
keywords:
  - "storage"
  - "log"
  - "export"
  - "streaming"
  - "latency"
  - "reduction"
  - "logging"
  - "reduced"
---

# Cloud Storage log export streaming latency reduction

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging reduced Google Cloud Storage log export streaming time from 12 hours to 3 hours.

## Extended Definition

Cloud Logging reduced Google Cloud Storage log export streaming time from 12 hours to 3 hours.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)
- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)

## Supporting Pages

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- The destination is an existing Cloud Storage bucket in the current project. gcloud logging sinks create folder-logs \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" The following command creates an aggregated sink, routing all Admin Activity audit logs from a folder and from all folders and projects contained in the folder: gcloud logging sinks create folder-logs --include-children \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" Listing or describing sinks Use the gcloud logging sinks list or gcloud logging sinks describe commands, corresponding to the API methods projects.sinks.list and projects.sinks.get , respectively: gcloud logging sinks list gcloud logging sinks describe SINK NAME Examples List sinks in the current project: gcloud logging sinks list NAME DESTINATION FILTER google-sink-1481139614360-9906 storage.googleapis.com/my-second-gcs-bucket logName = "projects/my-gcp-project-id/logs/syslog" pubsub-logs-sink pubsub.googleapis.com/projects/my-gcp-project-id/topics/my-pubsub-logs-topic logName = "projects/my-gcp-project-id/logs/pubsubtestlog" test-sink-v4 storage.googleapis.com/my-gcs-bucket severity=CRITICAL List sinks in a folder: gcloud logging sinks list --folder= FOLDER ID NAME DESTINATION FILTER folder-logs storage.googleapis.com/my-folder-bucket logName:activity List sinks in an organization: gcloud logging sinks list --organization= ORGANIZATION ID NAME DESTINATION FILTER organization-logs storage.googleapis.com/my-org-bucket logName:activity Describe sinks in the current project test-sink-v4 : gcloud logging sinks describe test-sink-v4 Output: destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 outputVersionFormat : V2 writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Describe sinks in a folder: gcloud logging sinks describe test-sink-v4 --folder= FOLDER ID Output: destination: storage.googleapis.com/my-gcs-bucket filter: severity=CRITICAL name: test-sink-v4 Describe sinks in an organization: gcloud logging sinks describe test-sink-v4 --organization= ORGANIZATION ID Output: createTime : [ TIMESTAMP ] description : Test Sink destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 updateTime : [ TIMESTAMP ] writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Updating sinks Use the gcloud logging sinks update command, corresponding to the API method projects.sink.update : You can update a sink to change the destination or the query: gcloud logging sinks update SINK NAME NEW DESTINATION --log-filter= NEW FILTER You can omit the NEW DESTINATION or --log-filter if those parts don't change.
- Show the information in the default YAML format: gcloud logging metrics describe "myapp/request latency" Result: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : Request latency for myapp filter : resource . type = "gae app" logName = "projects/[PROJECT ID]/logs/appengine.googleapis.com%2Fnginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : description : Request latency for myapp labels : - description : HTTP Path key : path metricKind : DELTA name : projects /[ PROJECT ID ]/ metricDescriptors / logging . googleapis . com / user / myapp / request latency type : logging . googleapis . com / user / myapp / request latency valueType : DISTRIBUTION name : myapp / request latency valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Deleting metrics Use the gcloud logging metrics delete command, corresponding to the API method projects.metrics.delete : gcloud logging metrics delete METRIC NAME Examples Delete the metric my-distribution-metric from the current project: gcloud logging metrics delete "my-distribution-metric" Result: Really delete metric [my-distribution-metric]?
- Examples Create a distribution metric to record request latencies: gcloud logging metrics create my-distribution-metric --config-from-file=logmetric.dat where logmetric.dat contains the following: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : App Engine Request Latency filter : resource . type = "gae app" logName = "projects/ PROJECT ID /logs/appengine.googleapis.com %2F nginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : labels : - description : HTTP Path key : path metricKind : DELTA name : projects / PROJECT ID / metricDescriptors / logging . googleapis . com / user / my - distribution - metric type : logging . googleapis . com / user / my - distribution - metric valueType : DISTRIBUTION name : my - distribution - metric valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Result: Created [my-distribution-metric].
- Examples Update the destination of a project sink: gcloud logging sinks update PROJECT ID storage.googleapis.com/my-second-gcs-bucket Deleting sinks Use the gcloud logging sinks delete command, corresponding to the API method projects.sinks.delete : You stop routing its log entries when you delete a sink: gcloud logging sinks delete SINK NAME Examples Delete sink syslog-sink-1 in the current project: gcloud logging sinks delete syslog-sink-1 Log-based metrics To manage log-based metrics, use the gcloud logging metrics command group, corresponding to the API methods at projects.metrics .

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- The destination is an existing Cloud Storage bucket in the current project. gcloud logging sinks create folder-logs \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" The following command creates an aggregated sink, routing all Admin Activity audit logs from a folder and from all folders and projects contained in the folder: gcloud logging sinks create folder-logs --include-children \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" Listing or describing sinks Use the gcloud logging sinks list or gcloud logging sinks describe commands, corresponding to the API methods projects.sinks.list and projects.sinks.get , respectively: gcloud logging sinks list gcloud logging sinks describe SINK NAME Examples List sinks in the current project: gcloud logging sinks list NAME DESTINATION FILTER google-sink-1481139614360-9906 storage.googleapis.com/my-second-gcs-bucket logName = "projects/my-gcp-project-id/logs/syslog" pubsub-logs-sink pubsub.googleapis.com/projects/my-gcp-project-id/topics/my-pubsub-logs-topic logName = "projects/my-gcp-project-id/logs/pubsubtestlog" test-sink-v4 storage.googleapis.com/my-gcs-bucket severity=CRITICAL List sinks in a folder: gcloud logging sinks list --folder= FOLDER ID NAME DESTINATION FILTER folder-logs storage.googleapis.com/my-folder-bucket logName:activity List sinks in an organization: gcloud logging sinks list --organization= ORGANIZATION ID NAME DESTINATION FILTER organization-logs storage.googleapis.com/my-org-bucket logName:activity Describe sinks in the current project test-sink-v4 : gcloud logging sinks describe test-sink-v4 Output: destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 outputVersionFormat : V2 writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Describe sinks in a folder: gcloud logging sinks describe test-sink-v4 --folder= FOLDER ID Output: destination: storage.googleapis.com/my-gcs-bucket filter: severity=CRITICAL name: test-sink-v4 Describe sinks in an organization: gcloud logging sinks describe test-sink-v4 --organization= ORGANIZATION ID Output: createTime : [ TIMESTAMP ] description : Test Sink destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 updateTime : [ TIMESTAMP ] writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Updating sinks Use the gcloud logging sinks update command, corresponding to the API method projects.sink.update : You can update a sink to change the destination or the query: gcloud logging sinks update SINK NAME NEW DESTINATION --log-filter= NEW FILTER You can omit the NEW DESTINATION or --log-filter if those parts don't change.
- Show the information in the default YAML format: gcloud logging metrics describe "myapp/request latency" Result: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : Request latency for myapp filter : resource . type = "gae app" logName = "projects/[PROJECT ID]/logs/appengine.googleapis.com%2Fnginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : description : Request latency for myapp labels : - description : HTTP Path key : path metricKind : DELTA name : projects /[ PROJECT ID ]/ metricDescriptors / logging . googleapis . com / user / myapp / request latency type : logging . googleapis . com / user / myapp / request latency valueType : DISTRIBUTION name : myapp / request latency valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Deleting metrics Use the gcloud logging metrics delete command, corresponding to the API method projects.metrics.delete : gcloud logging metrics delete METRIC NAME Examples Delete the metric my-distribution-metric from the current project: gcloud logging metrics delete "my-distribution-metric" Result: Really delete metric [my-distribution-metric]?
- Examples Create a distribution metric to record request latencies: gcloud logging metrics create my-distribution-metric --config-from-file=logmetric.dat where logmetric.dat contains the following: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : App Engine Request Latency filter : resource . type = "gae app" logName = "projects/ PROJECT ID /logs/appengine.googleapis.com %2F nginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : labels : - description : HTTP Path key : path metricKind : DELTA name : projects / PROJECT ID / metricDescriptors / logging . googleapis . com / user / my - distribution - metric type : logging . googleapis . com / user / my - distribution - metric valueType : DISTRIBUTION name : my - distribution - metric valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Result: Created [my-distribution-metric].
- Examples Update the destination of a project sink: gcloud logging sinks update PROJECT ID storage.googleapis.com/my-second-gcs-bucket Deleting sinks Use the gcloud logging sinks delete command, corresponding to the API method projects.sinks.delete : You stop routing its log entries when you delete a sink: gcloud logging sinks delete SINK NAME Examples Delete sink syslog-sink-1 in the current project: gcloud logging sinks delete syslog-sink-1 Log-based metrics To manage log-based metrics, use the gcloud logging metrics command group, corresponding to the API methods at projects.metrics .

### "Quickstart: Write and query log entries using a Python script \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- To create the sink mysink that exports all log entries with a severity of at least INFO to the Cloud Storage bucket myloggingproject-1 , run the following command: python export . py create mysink myloggingproject - 1 "severity>=INFO" The script returns the following: Created sink mysink To view your sinks, run the export.py script with the list option: python export . py list The script returns the following: mysink: severity>=INFO -> storage.googleapis.com/myloggingproject-1 Update destination permissions The permissions of the destination, in this case, your Cloud Storage bucket, aren't modified when you create a sink by using the export.py script.
- The contents are similar to: { "insertId" : "yf1cshfoivz48" , "logName" : "projects/loggingproject-222616/logs/my-log" , "receiveTimestamp" : "2018-11-15T23:06:14.738729911Z" , "resource" :{ "labels" :{ "project id" : "loggingproject-222616" }, "type" : "global" }, "severity" : "ERROR" , "textPayload" : "Goodbye, world!" , "timestamp" : "2018-11-15T23:06:14.738729911Z" } Because the severity level of ERROR is greater than the severity level of INFO , the log entry containing the string '"Goodbye, world!"' is exported to the sink destination.
- Required roles To get the permissions that you need to create, list, and delete log entries and Cloud Storage buckets, ask your administrator to grant you the following IAM roles on your project: Create, list, and delete log entries: Logging Admin ( roles/logging.admin ) Create, list, and delete Cloud Storage buckets: Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Clone source To configure your Cloud Shell for this quickstart, do the following: Clone the GitHub project python-logging : git clone https : // github . com / GoogleCloudPlatform / python - docs - samples The directory samples/snippets contains the two scripts used in this quickstart: snippets.py lets you manage entries in a log. export.py lets you manage log exports.

