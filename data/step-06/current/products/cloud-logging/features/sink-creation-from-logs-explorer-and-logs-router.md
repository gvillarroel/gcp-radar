---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.439Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Sink Creation from Logs Explorer and Logs Router"
feature_slug: "sink-creation-from-logs-explorer-and-logs-router"
latest_feature_date: "2020-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/regionalized-logs"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/audit"
keywords:
  - "sink"
  - "creation"
  - "logs"
  - "explorer"
  - "router"
  - "logging"
  - "lets"
  - "users"
---

# Sink Creation from Logs Explorer and Logs Router

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging lets users create sinks directly from the Logs Explorer and Logs Router pages.

## Extended Definition

Cloud Logging lets users create sinks directly from the Logs Explorer and Logs Router pages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- Get started To begin using the Logs Explorer, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Logs Explorer interface The Logs Explorer interface lets you display log entries, parse and analyze them, and specify query parameters.
- You can also grant a role that contains the logging.logEntries.list permission, which lets a principal view and download logs.

### Regionalize your logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example command: gcloud logging sinks update Default \ logging.googleapis.com/projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID \ --log-filter='NOT LOG ID("cloudaudit.googleapis.com/activity") AND NOT LOG ID("externalaudit.googleapis.com/activity") AND NOT LOG ID("cloudaudit.googleapis.com/system event") AND NOT LOG ID("externalaudit.googleapis.com/system event") AND NOT LOG ID("cloudaudit.googleapis.com/access transparency") AND NOT LOG ID("externalaudit.googleapis.com/access transparency")' \ --description="Updated the Default sink to route logs to the LOCATION region" Note: When you create a project, the filter for the Default sink is as shown in the previous command.
- Search logs in the Google Cloud console To view the log entries in your log bucket, go to the Google Cloud console and complete the following steps: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- The Log Router might send logs to a different region based on a sink's definition or if you've opted to share log data with another Google Cloud service such as the Security Command Center Threat Detection .
- View your log entry: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- For more information about querying by using the Logs Explorer, see Build queries in the Logs Explorer . gcloud The Google Cloud CLI provides a command-line interface to the Logging API.
- In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Access control IAM permissions and roles determine your ability to access audit logs data in the Logging API , the Logs Explorer , and the Google Cloud CLI .
- For more information about querying your logs, see Build queries in the Logs Explorer The Logs Explorer lets you view filter individual log entries.

