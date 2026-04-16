---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.490Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging API v1 sinks and logs-based metrics"
feature_slug: "logging-api-v1-sinks-and-logs-based-metrics"
latest_feature_date: "2017-05-01"
deprecation_date: "mid-July, 2017"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/logs-based-metrics"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest"
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
keywords:
  - "logging"
  - "v1"
  - "sinks"
  - "logs"
  - "based"
  - "metrics"
  - "export"
  - "being"
---

# Logging API v1 sinks and logs-based metrics

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The v1 API support for export sinks and logs-based metrics is being retired in favor of migration to v2; deprecated on mid-July, 2017.

## Extended Definition

The v1 API support for export sinks and logs-based metrics is being retired in favor of migration to v2; deprecated on mid-July, 2017.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)
- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)

## Supporting Pages

### Log-based metrics overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, user-defined log-based metrics are calculated from all logs received by the Logging API for the Google Cloud project, regardless of any inclusion filters or exclusion filters that might apply to the Google Cloud project.
- In Cloud Monitoring, log-based metrics use the following naming patterns: System: logging.googleapis.com/ SYSTEM METRIC NAME User-defined: logging.googleapis.com/user/ USER METRIC NAME Note that user-defined log-based metrics include the string user .
- Data types for log-based metrics Log-based metrics can extract data from logs to create metrics of the following types: Counter: these metrics count the number of log entries that match a specified filter within a specific period.
- Sources of log-based metrics You can use the metrics defined by Cloud Logging to collect general usage information, and you can define your own log-based metric to capture information specific to your application or business.

### Cloud Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v2 REST Resource: v2.billingAccounts REST Resource: v2.billingAccounts.exclusions REST Resource: v2.billingAccounts.locations.buckets REST Resource: v2.billingAccounts.locations.buckets.links REST Resource: v2.billingAccounts.locations.buckets.views REST Resource: v2.billingAccounts.locations.buckets.views.logs REST Resource: v2.billingAccounts.locations.operations REST Resource: v2.billingAccounts.locations.recentQueries REST Resource: v2.billingAccounts.locations.savedQueries REST Resource: v2.billingAccounts.logs REST Resource: v2.billingAccounts.sinks REST Resource: v2.entries REST Resource: v2.exclusions REST Resource: v2.folders REST Resource: v2.folders.exclusions REST Resource: v2.folders.locations.buckets REST Resource: v2.folders.locations.buckets.links REST Resource: v2.folders.locations.buckets.views REST Resource: v2.folders.locations.buckets.views.logs REST Resource: v2.folders.locations.logScopes REST Resource: v2.folders.locations.operations REST Resource: v2.folders.locations.recentQueries REST Resource: v2.folders.locations.savedQueries REST Resource: v2.folders.logs REST Resource: v2.folders.sinks REST Resource: v2.locations.buckets REST Resource: v2.locations.buckets.links REST Resource: v2.locations.buckets.views REST Resource: v2.locations.operations REST Resource: v2.logs REST Resource: v2.monitoredResourceDescriptors REST Resource: v2.organizations REST Resource: v2.organizations.exclusions REST Resource: v2.organizations.locations.buckets REST Resource: v2.organizations.locations.buckets.links REST Resource: v2.organizations.locations.buckets.views REST Resource: v2.organizations.locations.buckets.views.logs REST Resource: v2.organizations.locations.logScopes REST Resource: v2.organizations.locations.operations REST Resource: v2.organizations.locations.recentQueries REST Resource: v2.organizations.locations.savedQueries REST Resource: v2.organizations.logs REST Resource: v2.organizations.sinks REST Resource: v2.projects REST Resource: v2.projects.exclusions REST Resource: v2.projects.locations.buckets REST Resource: v2.projects.locations.buckets.links REST Resource: v2.projects.locations.buckets.views REST Resource: v2.projects.locations.buckets.views.logs REST Resource: v2.projects.locations.logScopes REST Resource: v2.projects.locations.operations REST Resource: v2.projects.locations.recentQueries REST Resource: v2.projects.locations.savedQueries REST Resource: v2.projects.logs REST Resource: v2.projects.metrics REST Resource: v2.projects.sinks REST Resource: v2.sinks Service: logging.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v2.projects.metrics Methods create POST /v2/{parent=projects/ }/metrics Creates a logs-based metric. delete DELETE /v2/{metricName=projects/ /metrics/ } Deletes a logs-based metric. get GET /v2/{metricName=projects/ /metrics/ } Gets a logs-based metric. list GET /v2/{parent=projects/ }/metrics Lists logs-based metrics. update PUT /v2/{metricName=projects/ /metrics/ } Creates or updates a logs-based metric.
- REST Resource: v2.billingAccounts.sinks Methods create POST /v2/{parent=billingAccounts/ }/sinks Creates a sink that exports specified log entries to a destination. delete DELETE /v2/{sinkName=billingAccounts/ /sinks/ } Deletes a sink. get GET /v2/{sinkName=billingAccounts/ /sinks/ } Gets a sink. list GET /v2/{parent=billingAccounts/ }/sinks Lists sinks. patch PATCH /v2/{sinkName=billingAccounts/ /sinks/ } Updates a sink. update PUT /v2/{sinkName=billingAccounts/ /sinks/ } Updates a sink.
- REST Resource: v2.organizations.sinks Methods create POST /v2/{parent=organizations/ }/sinks Creates a sink that exports specified log entries to a destination. delete DELETE /v2/{sinkName=organizations/ /sinks/ } Deletes a sink. get GET /v2/{sinkName=organizations/ /sinks/ } Gets a sink. list GET /v2/{parent=organizations/ }/sinks Lists sinks. patch PATCH /v2/{sinkName=organizations/ /sinks/ } Updates a sink. update PUT /v2/{sinkName=organizations/ /sinks/ } Updates a sink.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must also have the IAM role that corresponds to the log's location, and to your use case: Use case IAM role List logs Logging/Logs Viewer Tail logs Logging/Logs Viewer Delete logs Logging/Logging Admin Write logs Logging/Logs Writer Read logs Logging/Logs Viewer Read Data Access audit logs Logging/Private Logs Viewer List sinks Logging/Logs Viewer Create sinks Logging/Logs Configuration Writer Update sinks Logging/Logs Configuration Writer Delete sinks Logging/Logs Configuration Writer List metrics Logging/Logs Viewer Create basic metrics Logging/Logs Configuration Writer Create advanced metrics Logging/Logs Configuration Writer Update metrics Logging/Logs Configuration Writer Delete metrics Logging/Logs Configuration Writer Create log scopes Logging/Logs Configuration Writer For additional information on required Logging IAM roles and permissions, go to Access control .
- Examples Update the destination of a project sink: gcloud logging sinks update PROJECT ID storage.googleapis.com/my-second-gcs-bucket Deleting sinks Use the gcloud logging sinks delete command, corresponding to the API method projects.sinks.delete : You stop routing its log entries when you delete a sink: gcloud logging sinks delete SINK NAME Examples Delete sink syslog-sink-1 in the current project: gcloud logging sinks delete syslog-sink-1 Log-based metrics To manage log-based metrics, use the gcloud logging metrics command group, corresponding to the API methods at projects.metrics .
- The destination is an existing Cloud Storage bucket in the current project. gcloud logging sinks create folder-logs \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" The following command creates an aggregated sink, routing all Admin Activity audit logs from a folder and from all folders and projects contained in the folder: gcloud logging sinks create folder-logs --include-children \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" Listing or describing sinks Use the gcloud logging sinks list or gcloud logging sinks describe commands, corresponding to the API methods projects.sinks.list and projects.sinks.get , respectively: gcloud logging sinks list gcloud logging sinks describe SINK NAME Examples List sinks in the current project: gcloud logging sinks list NAME DESTINATION FILTER google-sink-1481139614360-9906 storage.googleapis.com/my-second-gcs-bucket logName = "projects/my-gcp-project-id/logs/syslog" pubsub-logs-sink pubsub.googleapis.com/projects/my-gcp-project-id/topics/my-pubsub-logs-topic logName = "projects/my-gcp-project-id/logs/pubsubtestlog" test-sink-v4 storage.googleapis.com/my-gcs-bucket severity=CRITICAL List sinks in a folder: gcloud logging sinks list --folder= FOLDER ID NAME DESTINATION FILTER folder-logs storage.googleapis.com/my-folder-bucket logName:activity List sinks in an organization: gcloud logging sinks list --organization= ORGANIZATION ID NAME DESTINATION FILTER organization-logs storage.googleapis.com/my-org-bucket logName:activity Describe sinks in the current project test-sink-v4 : gcloud logging sinks describe test-sink-v4 Output: destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 outputVersionFormat : V2 writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Describe sinks in a folder: gcloud logging sinks describe test-sink-v4 --folder= FOLDER ID Output: destination: storage.googleapis.com/my-gcs-bucket filter: severity=CRITICAL name: test-sink-v4 Describe sinks in an organization: gcloud logging sinks describe test-sink-v4 --organization= ORGANIZATION ID Output: createTime : [ TIMESTAMP ] description : Test Sink destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 updateTime : [ TIMESTAMP ] writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Updating sinks Use the gcloud logging sinks update command, corresponding to the API method projects.sink.update : You can update a sink to change the destination or the query: gcloud logging sinks update SINK NAME NEW DESTINATION --log-filter= NEW FILTER You can omit the NEW DESTINATION or --log-filter if those parts don't change.
- Show the information in the default YAML format: gcloud logging metrics describe "myapp/request latency" Result: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : Request latency for myapp filter : resource . type = "gae app" logName = "projects/[PROJECT ID]/logs/appengine.googleapis.com%2Fnginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : description : Request latency for myapp labels : - description : HTTP Path key : path metricKind : DELTA name : projects /[ PROJECT ID ]/ metricDescriptors / logging . googleapis . com / user / myapp / request latency type : logging . googleapis . com / user / myapp / request latency valueType : DISTRIBUTION name : myapp / request latency valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Deleting metrics Use the gcloud logging metrics delete command, corresponding to the API method projects.metrics.delete : gcloud logging metrics delete METRIC NAME Examples Delete the metric my-distribution-metric from the current project: gcloud logging metrics delete "my-distribution-metric" Result: Really delete metric [my-distribution-metric]?

