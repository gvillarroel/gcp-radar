---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.447Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Buckets"
feature_slug: "logs-buckets"
latest_feature_date: "2020-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/audit"
  - "https://docs.cloud.google.com/logging/docs/buckets"
keywords:
  - "logs"
  - "buckets"
  - "let"
  - "users"
  - "centralize"
  - "separate"
  - "according"
  - "storage"
---

# Logs Buckets

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Buckets let users centralize or separate logs according to their storage and management needs; Logs Buckets let users centralize or separate logs according to their storage and management needs.

## Extended Definition

Logs Buckets let users centralize or separate logs according to their storage and management needs; Logs Buckets let users centralize or separate logs according to their storage and management needs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- A separate dialog opens with the following information: The pattern that was found The percentage of log entries that contain the pattern Example log entries that contain the pattern In this dialog, you can hide or show log entries: Hide similar log entries You can hide similar log entries, which lets you remove logs from your query results.
- When you select the Zoom to time feature, the following happens: The logs data that you see in the Query results pane reloads and narrows according to the time-range restriction of the selected timeline bar.
- When you select the Scroll to time feature, the following happens: The logs data that you see in the Query results pane adjusts according to the time range captured by the selected timeline bar.
- This document provides you with an overview of the Logs Explorer in the Google Cloud console, which you can use to retrieve, view, and analyze log entries that are stored in log buckets .

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- To get the permissions that you need to get access to all logs in the Required and Default buckets, including Data Access logs, ask your administrator to grant you the Private Logs Viewer ( roles/logging.privateLogViewer ) IAM role on your project.
- If you route log data to other Google Cloud services, then see the following documents: Cloud Storage pricing BigQuery pricing Pub/Sub pricing What's next Learn how to read and understand audit logs .
- Cloud Storage : When Cloud Storage usage logs are enabled, Cloud Storage writes usage data to the Cloud Storage bucket, which generates Data Access audit logs for the bucket.
- Publicly available resources that have the Identity and Access Management policies allAuthenticatedUsers or allUsers don't generate audit logs.

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- On the Logs Storage page, the pending-deletion indicator is removed from your log bucket. gcloud To restore a log bucket that is pending deletion, run the gcloud logging buckets undelete command: gcloud logging buckets undelete BUCKET ID --location= LOCATION REST To restore a bucket that is pending deletion, use projects.locations.buckets.undelete in the Logging API.
- List buckets To list the log buckets associated with a Google Cloud project, and to see details such as retention settings, do the following: Google Cloud console In the Google Cloud console, go to the Logs Storage page: Go to Logs Storage If you use the search bar to find this page, then select the result whose subheading is Logging .
- Track volume of logs stored in log buckets The Logs Storage page in the Google Cloud console tracks the volume of logs data stored in log buckets: In the Google Cloud console, go to the Logs Storage page: Go to Logs Storage If you use the search bar to find this page, then select the result whose subheading is Logging .
- The Logs Storage page displays a summary of statistics for your Google Cloud project: The following statistics are reported: Current month ingestion : The amount of logs data that your Google Cloud project has stored in log buckets since the first day of the current calendar month.

