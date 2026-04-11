---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.542Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Error group indicators in Logs Explorer"
feature_slug: "error-group-indicators-in-logs-explorer"
latest_feature_date: "2022-08-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
  - "https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging"
keywords:
  - "error"
  - "group"
  - "indicators"
  - "in"
  - "logs"
  - "explorer"
  - "marks"
  - "entries"
---

# Error group indicators in Logs Explorer

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Logs Explorer marks entries that belong to error groups and links to related error details and actions.

## Extended Definition

Logs Explorer marks entries that belong to error groups and links to related error details and actions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- This document provides you with an overview of the Logs Explorer in the Google Cloud console, which you can use to retrieve, view, and analyze log entries that are stored in log buckets .
- If resources in multiple projects or regions are searched for log entries, then the Observability Analytics might show different log entries than the Logs Explorer page.
- Logs Explorer interface The Logs Explorer interface lets you display log entries, parse and analyze them, and specify query parameters.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Examples List all the resource types that have instance in their names: gcloud logging resource - descriptors list -- filter = "type:instance" Result: TYPE DESCRIPTION KEY gce instance A virtual machine instance hosted in Compute Engine . project id , instance id , zone spanner instance A Cloud Spanner instance . project id , instance id , location , instance config redis instance A Redis instance hosted on Google Cloud MemoryStore . project id , region , instance id , node id gce instance group A Compute Engine instance group resource . project id , instance group id , instance group name , location gce instance group manager A Compute Engine instance group manager resource . project id , instance group manager id , instance group manager name , location gce instance template A Compute Engine instance template resource . project id , instance template id , instance template name Routing logs You route logs by creating sinks that send certain log entries to supported destinations.
- The log entries are to be shown in JSON format: gcloud logging read "resource.type=gce instance AND logName=projects/ PROJECT ID /logs/syslog AND textPayload:SyncAddress" -- limit 10 -- format json Following is an example of one returned log entry: { "insertId" : "2024-04-07 08:56:48.137651-07 10.162.32.129 -1509625619" , "logName" : "projects/[PROJECT ID]/logs/syslog" , "resource" : { "labels" : { "instance id" : "15543007601548829999" , "zone" : "global" } , "type" : "gce instance" } , "textPayload" : "Apr 7 15:56:47 my-gce-instance google-address-manager: ERROR SyncAddresses exception: HTTP Error 503: Service Unavailable" , "timestamp" : "2024-04-07T15:56:47.000Z" } To list logs in a folder, add the --folder flag.
- The destination is an existing Cloud Storage bucket in the current project: gcloud logging sinks create syslog - errors \ storage . googleapis . com / my - third - gcs - bucket \ -- log - filter "resource.type=gce instance AND logName=projects/ PROJECT ID /logs/compute.googleapis.com%2Fsyslog AND severity=ERROR" Create a sink, syslog-sink , in the current project that routes all syslog entries with severity WARNING or higher.
- The following command writes a log entry to a folder: gcloud logging write my-folder-log "A folder log entry" --folder= FOLDER ID To find your log entries, look in the Logs Explorer under the Global resource type.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Examples List all the resource types that have instance in their names: gcloud logging resource - descriptors list -- filter = "type:instance" Result: TYPE DESCRIPTION KEY gce instance A virtual machine instance hosted in Compute Engine . project id , instance id , zone spanner instance A Cloud Spanner instance . project id , instance id , location , instance config redis instance A Redis instance hosted on Google Cloud MemoryStore . project id , region , instance id , node id gce instance group A Compute Engine instance group resource . project id , instance group id , instance group name , location gce instance group manager A Compute Engine instance group manager resource . project id , instance group manager id , instance group manager name , location gce instance template A Compute Engine instance template resource . project id , instance template id , instance template name Routing logs You route logs by creating sinks that send certain log entries to supported destinations.
- The log entries are to be shown in JSON format: gcloud logging read "resource.type=gce instance AND logName=projects/ PROJECT ID /logs/syslog AND textPayload:SyncAddress" -- limit 10 -- format json Following is an example of one returned log entry: { "insertId" : "2024-04-07 08:56:48.137651-07 10.162.32.129 -1509625619" , "logName" : "projects/[PROJECT ID]/logs/syslog" , "resource" : { "labels" : { "instance id" : "15543007601548829999" , "zone" : "global" } , "type" : "gce instance" } , "textPayload" : "Apr 7 15:56:47 my-gce-instance google-address-manager: ERROR SyncAddresses exception: HTTP Error 503: Service Unavailable" , "timestamp" : "2024-04-07T15:56:47.000Z" } To list logs in a folder, add the --folder flag.
- The destination is an existing Cloud Storage bucket in the current project: gcloud logging sinks create syslog - errors \ storage . googleapis . com / my - third - gcs - bucket \ -- log - filter "resource.type=gce instance AND logName=projects/ PROJECT ID /logs/compute.googleapis.com%2Fsyslog AND severity=ERROR" Create a sink, syslog-sink , in the current project that routes all syslog entries with severity WARNING or higher.
- The following command writes a log entry to a folder: gcloud logging write my-folder-log "A folder log entry" --folder= FOLDER ID To find your log entries, look in the Logs Explorer under the Global resource type.

