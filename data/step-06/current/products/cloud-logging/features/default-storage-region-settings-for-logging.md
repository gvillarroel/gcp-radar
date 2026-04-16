---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.402Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Default Storage Region Settings for Logging"
feature_slug: "default-storage-region-settings-for-logging"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/buckets"
  - "https://docs.cloud.google.com/logging/docs/regionalized-logs"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "default"
  - "storage"
  - "region"
  - "settings"
  - "logging"
  - "organizations"
  - "can"
  - "configure"
---

# Default Storage Region Settings for Logging

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Organizations can configure default storage regions for Logging resources in new projects and folders.

## Extended Definition

Organizations can configure default storage regions for Logging resources in new projects and folders.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Configure default settings for organizations and folders .
- To update the retention period for a custom log bucket or for the Default log bucket, do the following: Google Cloud console To update a log bucket's retention period, do the following: In the Google Cloud console, go to the Logs Storage page: Go to Logs Storage If you use the search bar to find this page, then select the result whose subheading is Logging .
- List buckets To list the log buckets associated with a Google Cloud project, and to see details such as retention settings, do the following: Google Cloud console In the Google Cloud console, go to the Logs Storage page: Go to Logs Storage If you use the search bar to find this page, then select the result whose subheading is Logging .
- For example, to view the details for the Default log bucket in the global region, run the gcloud logging buckets describe command: gcloud logging buckets describe Default --location=global REST To list the log buckets associated with a Google Cloud project, use projects.locations.buckets.list in the Logging API.

### Regionalize your logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Configure default settings for organizations and folders .
- Example command: gcloud logging sinks update Default \ logging.googleapis.com/projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID \ --log-filter='NOT LOG ID("cloudaudit.googleapis.com/activity") AND NOT LOG ID("externalaudit.googleapis.com/activity") AND NOT LOG ID("cloudaudit.googleapis.com/system event") AND NOT LOG ID("externalaudit.googleapis.com/system event") AND NOT LOG ID("cloudaudit.googleapis.com/access transparency") AND NOT LOG ID("externalaudit.googleapis.com/access transparency")' \ --description="Updated the Default sink to route logs to the LOCATION region" Note: When you create a project, the filter for the Default sink is as shown in the previous command.
- You can also set a default storage location for new Default and Required buckets by configuring default settings for your organization or folder.
- This document describes how you can use the Default sink to route your log entries to a Cloud Logging bucket that is in a specific region.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- To select which parts of the timestamp to display, click the settings Preferences menu, select Format , and then select one of the following options: Date, time, and timezone Date and time (default) Time only Find patterns in your logs by using summary fields Suppose you're looking through the log entries in your query results and want to quickly skim the results by a certain LogEntry field.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- To view all log entries in the Required and Default buckets: Private Logs Viewer ( roles/logging.privateLogViewer ) on your project, folder, or organization.
- Note: To configure which resources are searched when the Logs Explorer page opens, set the default log scope.

