---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.484Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Aggregated exports"
feature_slug: "aggregated-exports"
latest_feature_date: "2017-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest"
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
  - "https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging"
keywords:
  - "aggregated"
  - "exports"
  - "let"
  - "organizations"
  - "folders"
  - "export"
  - "selected"
  - "log"
---

# Aggregated exports

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Aggregated exports let organizations and folders export selected log entries from all their projects through a single sink.

## Extended Definition

Aggregated exports let organizations and folders export selected log entries from all their projects through a single sink.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)
- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)

## Supporting Pages

### Cloud Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v2.organizations.sinks Methods create POST /v2/{parent=organizations/ }/sinks Creates a sink that exports specified log entries to a destination. delete DELETE /v2/{sinkName=organizations/ /sinks/ } Deletes a sink. get GET /v2/{sinkName=organizations/ /sinks/ } Gets a sink. list GET /v2/{parent=organizations/ }/sinks Lists sinks. patch PATCH /v2/{sinkName=organizations/ /sinks/ } Updates a sink. update PUT /v2/{sinkName=organizations/ /sinks/ } Updates a sink.
- REST Resource: v2.folders.sinks Methods create POST /v2/{parent=folders/ }/sinks Creates a sink that exports specified log entries to a destination. delete DELETE /v2/{sinkName=folders/ /sinks/ } Deletes a sink. get GET /v2/{sinkName=folders/ /sinks/ } Gets a sink. list GET /v2/{parent=folders/ }/sinks Lists sinks. patch PATCH /v2/{sinkName=folders/ /sinks/ } Updates a sink. update PUT /v2/{sinkName=folders/ /sinks/ } Updates a sink.
- REST Resource: v2 REST Resource: v2.billingAccounts REST Resource: v2.billingAccounts.exclusions REST Resource: v2.billingAccounts.locations.buckets REST Resource: v2.billingAccounts.locations.buckets.links REST Resource: v2.billingAccounts.locations.buckets.views REST Resource: v2.billingAccounts.locations.buckets.views.logs REST Resource: v2.billingAccounts.locations.operations REST Resource: v2.billingAccounts.locations.recentQueries REST Resource: v2.billingAccounts.locations.savedQueries REST Resource: v2.billingAccounts.logs REST Resource: v2.billingAccounts.sinks REST Resource: v2.entries REST Resource: v2.exclusions REST Resource: v2.folders REST Resource: v2.folders.exclusions REST Resource: v2.folders.locations.buckets REST Resource: v2.folders.locations.buckets.links REST Resource: v2.folders.locations.buckets.views REST Resource: v2.folders.locations.buckets.views.logs REST Resource: v2.folders.locations.logScopes REST Resource: v2.folders.locations.operations REST Resource: v2.folders.locations.recentQueries REST Resource: v2.folders.locations.savedQueries REST Resource: v2.folders.logs REST Resource: v2.folders.sinks REST Resource: v2.locations.buckets REST Resource: v2.locations.buckets.links REST Resource: v2.locations.buckets.views REST Resource: v2.locations.operations REST Resource: v2.logs REST Resource: v2.monitoredResourceDescriptors REST Resource: v2.organizations REST Resource: v2.organizations.exclusions REST Resource: v2.organizations.locations.buckets REST Resource: v2.organizations.locations.buckets.links REST Resource: v2.organizations.locations.buckets.views REST Resource: v2.organizations.locations.buckets.views.logs REST Resource: v2.organizations.locations.logScopes REST Resource: v2.organizations.locations.operations REST Resource: v2.organizations.locations.recentQueries REST Resource: v2.organizations.locations.savedQueries REST Resource: v2.organizations.logs REST Resource: v2.organizations.sinks REST Resource: v2.projects REST Resource: v2.projects.exclusions REST Resource: v2.projects.locations.buckets REST Resource: v2.projects.locations.buckets.links REST Resource: v2.projects.locations.buckets.views REST Resource: v2.projects.locations.buckets.views.logs REST Resource: v2.projects.locations.logScopes REST Resource: v2.projects.locations.operations REST Resource: v2.projects.locations.recentQueries REST Resource: v2.projects.locations.savedQueries REST Resource: v2.projects.logs REST Resource: v2.projects.metrics REST Resource: v2.projects.sinks REST Resource: v2.sinks Service: logging.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v2.billingAccounts.sinks Methods create POST /v2/{parent=billingAccounts/ }/sinks Creates a sink that exports specified log entries to a destination. delete DELETE /v2/{sinkName=billingAccounts/ /sinks/ } Deletes a sink. get GET /v2/{sinkName=billingAccounts/ /sinks/ } Gets a sink. list GET /v2/{parent=billingAccounts/ }/sinks Lists sinks. patch PATCH /v2/{sinkName=billingAccounts/ /sinks/ } Updates a sink. update PUT /v2/{sinkName=billingAccounts/ /sinks/ } Updates a sink.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- The destination is an existing Cloud Storage bucket in the current project. gcloud logging sinks create folder-logs \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" The following command creates an aggregated sink, routing all Admin Activity audit logs from a folder and from all folders and projects contained in the folder: gcloud logging sinks create folder-logs --include-children \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" Listing or describing sinks Use the gcloud logging sinks list or gcloud logging sinks describe commands, corresponding to the API methods projects.sinks.list and projects.sinks.get , respectively: gcloud logging sinks list gcloud logging sinks describe SINK NAME Examples List sinks in the current project: gcloud logging sinks list NAME DESTINATION FILTER google-sink-1481139614360-9906 storage.googleapis.com/my-second-gcs-bucket logName = "projects/my-gcp-project-id/logs/syslog" pubsub-logs-sink pubsub.googleapis.com/projects/my-gcp-project-id/topics/my-pubsub-logs-topic logName = "projects/my-gcp-project-id/logs/pubsubtestlog" test-sink-v4 storage.googleapis.com/my-gcs-bucket severity=CRITICAL List sinks in a folder: gcloud logging sinks list --folder= FOLDER ID NAME DESTINATION FILTER folder-logs storage.googleapis.com/my-folder-bucket logName:activity List sinks in an organization: gcloud logging sinks list --organization= ORGANIZATION ID NAME DESTINATION FILTER organization-logs storage.googleapis.com/my-org-bucket logName:activity Describe sinks in the current project test-sink-v4 : gcloud logging sinks describe test-sink-v4 Output: destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 outputVersionFormat : V2 writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Describe sinks in a folder: gcloud logging sinks describe test-sink-v4 --folder= FOLDER ID Output: destination: storage.googleapis.com/my-gcs-bucket filter: severity=CRITICAL name: test-sink-v4 Describe sinks in an organization: gcloud logging sinks describe test-sink-v4 --organization= ORGANIZATION ID Output: createTime : [ TIMESTAMP ] description : Test Sink destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 updateTime : [ TIMESTAMP ] writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Updating sinks Use the gcloud logging sinks update command, corresponding to the API method projects.sink.update : You can update a sink to change the destination or the query: gcloud logging sinks update SINK NAME NEW DESTINATION --log-filter= NEW FILTER You can omit the NEW DESTINATION or --log-filter if those parts don't change.
- The full resource name for a log must be one of the following: projects/ PROJECT ID /logs/ LOG ID organizations/ ORGANIZATION ID /logs/ LOG ID folders/ FOLDER ID /logs/ LOG ID billingAccounts/ BILLING ACCOUNT ID /logs/ LOG ID LOG ID can only contain alphanumeric characters, forward-slash, underscore, hyphen, and period characters.
- If you additionally add the --include-children flag, then the sink becomes an aggregated sink and the sink routes logs from all folders and projects contained within the named resource, subject to the filter in the --log-filter flag.
- Example: Delete logs in folders, billing accounts or organizations To delete a log contained in folders, billing accounts or organizations, pass the full resource name with the LOG ID URL-encoded.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- The destination is an existing Cloud Storage bucket in the current project. gcloud logging sinks create folder-logs \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" The following command creates an aggregated sink, routing all Admin Activity audit logs from a folder and from all folders and projects contained in the folder: gcloud logging sinks create folder-logs --include-children \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" Listing or describing sinks Use the gcloud logging sinks list or gcloud logging sinks describe commands, corresponding to the API methods projects.sinks.list and projects.sinks.get , respectively: gcloud logging sinks list gcloud logging sinks describe SINK NAME Examples List sinks in the current project: gcloud logging sinks list NAME DESTINATION FILTER google-sink-1481139614360-9906 storage.googleapis.com/my-second-gcs-bucket logName = "projects/my-gcp-project-id/logs/syslog" pubsub-logs-sink pubsub.googleapis.com/projects/my-gcp-project-id/topics/my-pubsub-logs-topic logName = "projects/my-gcp-project-id/logs/pubsubtestlog" test-sink-v4 storage.googleapis.com/my-gcs-bucket severity=CRITICAL List sinks in a folder: gcloud logging sinks list --folder= FOLDER ID NAME DESTINATION FILTER folder-logs storage.googleapis.com/my-folder-bucket logName:activity List sinks in an organization: gcloud logging sinks list --organization= ORGANIZATION ID NAME DESTINATION FILTER organization-logs storage.googleapis.com/my-org-bucket logName:activity Describe sinks in the current project test-sink-v4 : gcloud logging sinks describe test-sink-v4 Output: destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 outputVersionFormat : V2 writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Describe sinks in a folder: gcloud logging sinks describe test-sink-v4 --folder= FOLDER ID Output: destination: storage.googleapis.com/my-gcs-bucket filter: severity=CRITICAL name: test-sink-v4 Describe sinks in an organization: gcloud logging sinks describe test-sink-v4 --organization= ORGANIZATION ID Output: createTime : [ TIMESTAMP ] description : Test Sink destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 updateTime : [ TIMESTAMP ] writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Updating sinks Use the gcloud logging sinks update command, corresponding to the API method projects.sink.update : You can update a sink to change the destination or the query: gcloud logging sinks update SINK NAME NEW DESTINATION --log-filter= NEW FILTER You can omit the NEW DESTINATION or --log-filter if those parts don't change.
- The full resource name for a log must be one of the following: projects/ PROJECT ID /logs/ LOG ID organizations/ ORGANIZATION ID /logs/ LOG ID folders/ FOLDER ID /logs/ LOG ID billingAccounts/ BILLING ACCOUNT ID /logs/ LOG ID LOG ID can only contain alphanumeric characters, forward-slash, underscore, hyphen, and period characters.
- If you additionally add the --include-children flag, then the sink becomes an aggregated sink and the sink routes logs from all folders and projects contained within the named resource, subject to the filter in the --log-filter flag.
- Example: Delete logs in folders, billing accounts or organizations To delete a log contained in folders, billing accounts or organizations, pass the full resource name with the LOG ID URL-encoded.

