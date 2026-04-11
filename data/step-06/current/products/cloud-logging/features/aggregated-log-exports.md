---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.577Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Aggregated log exports"
feature_slug: "aggregated-log-exports"
latest_feature_date: "2017-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/central-log-storage"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
keywords:
  - "aggregated"
  - "log"
  - "exports"
  - "logging"
  - "supports"
  - "organization"
  - "folder"
  - "and"
---

# Aggregated log exports

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports organization, folder, and billing account sinks that export logs from included projects.

## Extended Definition

Cloud Logging supports organization, folder, and billing account sinks that export logs from included projects.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)

## Supporting Pages

### "Aggregate and store your organization's logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Ensure the following: To get the permissions that you need to configure an aggregated sink, ask your administrator to grant you the following IAM roles on your organization: To create log buckets and sinks in a project: Logs Configuration Writer ( roles/logging.configWriter ) - your project To create an aggregated sink: Logs Configuration Writer ( roles/logging.configWriter ) - your organization To grant roles to principals: Owner ( roles/owner ) - your project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Execute the gcloud logging sinks create command: gcloud logging sinks create PROJECT LEVEL SINK NAME SINK DESTINATION --project= PROJECT ID --log-filter='logName:cloudaudit.googleapis.com' \ --description=" Audit logs from my organization " \ Create the aggregated sink Aggregated sinks combine and route log entries from the resources contained by an organization or folder to a destination.
- Set up the sink at the organization level To create an aggregated sink that is non-intercepting and that routes log entries to a project, complete the following steps: Run the gcloud logging sinks create command.
- Execute the gcloud logging sinks create command: gcloud logging sinks create SINK NAME \ logging.googleapis.com/projects/ PROJECT ID \ --log-filter='logName:cloudaudit.googleapis.com' \ --description=" Audit logs from my organization " \ --organization= ORGANIZATION ID \ --include-children The --include-children option is important.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Feature Exporting logs from organizations, folders, and billing accounts : The gcloud logging command-line tool now supports creating log sinks to export audit logs from organizations, folders, and billing accounts.
- August 23, 2017 Feature Aggregated Exports : Organizations and folders can now export selected log entries from all of their projects with a single sink created in the organization or folder.
- Feature Aggregated exports of logs : You can now create log sinks in organizations, billing accounts, and folders.
- In the coming weeks, this naming format will be applied to organization-level sinks and folder-level sinks, and to sinks listed on the Logs Exports page in the Logs Viewer.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- The destination is an existing Cloud Storage bucket in the current project. gcloud logging sinks create folder-logs \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" The following command creates an aggregated sink, routing all Admin Activity audit logs from a folder and from all folders and projects contained in the folder: gcloud logging sinks create folder-logs --include-children \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" Listing or describing sinks Use the gcloud logging sinks list or gcloud logging sinks describe commands, corresponding to the API methods projects.sinks.list and projects.sinks.get , respectively: gcloud logging sinks list gcloud logging sinks describe SINK NAME Examples List sinks in the current project: gcloud logging sinks list NAME DESTINATION FILTER google-sink-1481139614360-9906 storage.googleapis.com/my-second-gcs-bucket logName = "projects/my-gcp-project-id/logs/syslog" pubsub-logs-sink pubsub.googleapis.com/projects/my-gcp-project-id/topics/my-pubsub-logs-topic logName = "projects/my-gcp-project-id/logs/pubsubtestlog" test-sink-v4 storage.googleapis.com/my-gcs-bucket severity=CRITICAL List sinks in a folder: gcloud logging sinks list --folder= FOLDER ID NAME DESTINATION FILTER folder-logs storage.googleapis.com/my-folder-bucket logName:activity List sinks in an organization: gcloud logging sinks list --organization= ORGANIZATION ID NAME DESTINATION FILTER organization-logs storage.googleapis.com/my-org-bucket logName:activity Describe sinks in the current project test-sink-v4 : gcloud logging sinks describe test-sink-v4 Output: destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 outputVersionFormat : V2 writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Describe sinks in a folder: gcloud logging sinks describe test-sink-v4 --folder= FOLDER ID Output: destination: storage.googleapis.com/my-gcs-bucket filter: severity=CRITICAL name: test-sink-v4 Describe sinks in an organization: gcloud logging sinks describe test-sink-v4 --organization= ORGANIZATION ID Output: createTime : [ TIMESTAMP ] description : Test Sink destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 updateTime : [ TIMESTAMP ] writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Updating sinks Use the gcloud logging sinks update command, corresponding to the API method projects.sink.update : You can update a sink to change the destination or the query: gcloud logging sinks update SINK NAME NEW DESTINATION --log-filter= NEW FILTER You can omit the NEW DESTINATION or --log-filter if those parts don't change.
- Examples Write a log entry to log my-test-log in the current project with a plain-text payload and a severity of ERROR : gcloud logging write my - test - log "A simple entry" -- severity = ERROR Write a log entry with a structured (JSON) payload: gcloud logging write my - test - log '{ "message": "My second entry", "weather": "partly cloudy"}' -- payload - type = json Write a log entry to a folder, billing account, or organization.
- Use the gcloud logging sinks command group, corresponding to the API methods projects.sinks , folders.sinks , billingAccounts.sinks , and organizations.sinks .
- The log entries are to be shown in JSON format: gcloud logging read "resource.type=gce instance AND logName=projects/ PROJECT ID /logs/syslog AND textPayload:SyncAddress" -- limit 10 -- format json Following is an example of one returned log entry: { "insertId" : "2024-04-07 08:56:48.137651-07 10.162.32.129 -1509625619" , "logName" : "projects/[PROJECT ID]/logs/syslog" , "resource" : { "labels" : { "instance id" : "15543007601548829999" , "zone" : "global" } , "type" : "gce instance" } , "textPayload" : "Apr 7 15:56:47 my-gce-instance google-address-manager: ERROR SyncAddresses exception: HTTP Error 503: Service Unavailable" , "timestamp" : "2024-04-07T15:56:47.000Z" } To list logs in a folder, add the --folder flag.

