---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.423Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Bucket Copy to Cloud Storage"
feature_slug: "log-bucket-copy-to-cloud-storage"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-python"
  - "https://docs.cloud.google.com/logging/docs/routing/overview"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "log"
  - "bucket"
  - "copy"
  - "storage"
  - "logging"
  - "can"
  - "entries"
---

# Log Bucket Copy to Cloud Storage

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging can copy log entries from a Logging bucket to a Cloud Storage bucket.

## Extended Definition

Cloud Logging can copy log entries from a Logging bucket to a Cloud Storage bucket.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)
- [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### "Quickstart: Write and query log entries using a Python script \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create the sink mysink that exports all log entries with a severity of at least INFO to the Cloud Storage bucket myloggingproject-1 , run the following command: python export . py create mysink myloggingproject - 1 "severity>=INFO" The script returns the following: Created sink mysink To view your sinks, run the export.py script with the list option: python export . py list The script returns the following: mysink: severity>=INFO -> storage.googleapis.com/myloggingproject-1 Update destination permissions The permissions of the destination, in this case, your Cloud Storage bucket, aren't modified when you create a sink by using the export.py script.
- Required roles To get the permissions that you need to create, list, and delete log entries and Cloud Storage buckets, ask your administrator to grant you the following IAM roles on your project: Create, list, and delete log entries: Logging Admin ( roles/logging.admin ) Create, list, and delete Cloud Storage buckets: Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Logging can route log entries to the following destinations: Cloud Storage buckets BigQuery datasets Pub/Sub Logging buckets Google Cloud projects Before you begin You must have a Google Cloud project with billing enabled to complete this quickstart.
- Validate sink To validate that your sink and destination are properly configured, do the following: Write new log entries to the log my-log : python snippets . py my - log write View your Cloud Storage bucket's contents: In the Google Cloud console, go to the Buckets page: Go to Buckets If you use the search bar to find this page, then select the result whose subheading is Cloud Storage .

### Route log entries \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- For best practices about using routing for data governance or for common use cases, see the following documents: Aggregate your organization's log into a central log bucket Regionalize your logs Set up multi-tenant logging for GKE Configure CMEK for logs routing Logs data: A step by step guide for overcoming common compliance challenges Data governance: Principles for securing and managing logs Examples: Centralize your log storage This section outlines how you might configure centralized storage .
- Using a log sink, you can route log entries to various destinations, such as a log bucket for storage or Pub/Sub for export to third-party tools used for observability, notifications, and monitoring.
- Sink destinations Note: To use the visualization and analysis tools of Cloud Logging or to use Error Reporting, you must store your log entries in log buckets.
- The Required log sink routes to the Required log bucket the log entries that match the sink's filters and that originate in the CentralStorage project.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- To get an exact count of the number of log entries received in a time interval, use Observability Analytics or copy logs to a Cloud Storage bucket.
- To get an exact count of the number of log entries received in a time interval, use Observability Analytics or copy logs to a Cloud Storage bucket.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- Query returns an error If you issue a query over a resource without specifying a bucket, then Cloud Logging uses the history of the sinks in the Google Cloud project to determine where entries might have been written for that resource.

