---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.328Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Copy log entries"
feature_slug: "copy-log-entries"
latest_feature_date: "2024-02-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud"
  - "https://docs.cloud.google.com/logging/docs/routing/overview"
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-python"
keywords:
  - "copy"
  - "log"
  - "entries"
  - "logging"
  - "supports"
  - "copying"
---

# Copy log entries

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports copying log entries.

## Extended Definition

Cloud Logging supports copying log entries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)

## Supporting Pages

### Route log entries \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- At a high level, this is how Cloud Logging routes and stores log entries: About Log Routers Each Google Cloud project, billing account, folder, and organization has a Log Router, which manages the flow of log entries through resource-level sinks.
- What's next To help you route and store Cloud Logging data, see the following documents: To create sinks to route log entries to supported destinations, see Route logs to supported destinations .
- Home Documentation Observability Cloud Logging Guides Send feedback Route log entries Stay organized with collections Save and categorize content based on your preferences.
- Sink destinations Note: To use the visualization and analysis tools of Cloud Logging or to use Error Reporting, you must store your log entries in log buckets.

### "Quickstart: Write and query log entries with the gcloud CLI \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- To read a list of log entries from Logging, do the following: Go to the API reference page for the entries.list API method: Go to entries.list API page Configure and run the API command: Replace PROJECT ID in the following text: "resourceNames": [ "projects/ PROJECT ID " ], "filter": "resource.type=global", "orderBy": "timestamp desc" Copy the updated text from the previous step, and paste it into the Request body field of APIs Explorer.
- Write log entries by using the gcloud CLI Logging supports log entries with structured and unstructured data.
- For example, to retrieve and display the log entries with a resource type of global , run the following command: gcloud logging read "resource.type=global" The command returns a result similar to the following: --- insertId : jpj9zjf73t1mn jsonPayload : message : My second entry weather : partly cloudy logName : projects / myloggingproject / logs / my - test - log receiveTimestamp : '2018-11-01T18:39:31.114507977Z' resource : labels : project id : myloggingproject type : global timestamp : '2018-11-01T18:39:31.114507977Z' --- insertId : vd4m1if7h7u1a logName : projects / myloggingproject / logs / my - test - log receiveTimestamp : '2018-11-01T18:39:19.718100792Z' resource : labels : project id : myloggingproject type : global textPayload : A simple entry timestamp : '2018-11-01T18:39:19.718100792Z' For information about reading logs, see the gcloud logging read reference documentation.
- The method returns a response similar to the following: { "entries": [ { "textPayload": "A simple entry", "insertId": "vd4m1if7h7u1a", "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:19.718100792Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:19.718100792Z" }, { "insertId": "jpj9zjf73t1mn", "jsonPayload": { "message": "My second entry", "weather": "partly cloudy" }, "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:31.114507977Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:31.114507977Z" } ] } View log entries in the Logs Explorer To view log entries in the Google Cloud console, you can use the Logs Explorer.

### "Quickstart: Write and query log entries using a Python script \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- To create the sink mysink that exports all log entries with a severity of at least INFO to the Cloud Storage bucket myloggingproject-1 , run the following command: python export . py create mysink myloggingproject - 1 "severity>=INFO" The script returns the following: Created sink mysink To view your sinks, run the export.py script with the list option: python export . py list The script returns the following: mysink: severity>=INFO -> storage.googleapis.com/myloggingproject-1 Update destination permissions The permissions of the destination, in this case, your Cloud Storage bucket, aren't modified when you create a sink by using the export.py script.
- Required roles To get the permissions that you need to create, list, and delete log entries and Cloud Storage buckets, ask your administrator to grant you the following IAM roles on your project: Create, list, and delete log entries: Logging Admin ( roles/logging.admin ) Create, list, and delete Cloud Storage buckets: Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Clone source To configure your Cloud Shell for this quickstart, do the following: Clone the GitHub project python-logging : git clone https : // github . com / GoogleCloudPlatform / python - docs - samples The directory samples/snippets contains the two scripts used in this quickstart: snippets.py lets you manage entries in a log. export.py lets you manage log exports.
- Logging can route log entries to the following destinations: Cloud Storage buckets BigQuery datasets Pub/Sub Logging buckets Google Cloud projects Before you begin You must have a Google Cloud project with billing enabled to complete this quickstart.

