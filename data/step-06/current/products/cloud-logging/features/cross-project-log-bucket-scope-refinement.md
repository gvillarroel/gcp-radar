---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.346Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Cross-project log bucket scope refinement"
feature_slug: "cross-project-log-bucket-scope-refinement"
latest_feature_date: "2023-07-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/buckets"
  - "https://docs.cloud.google.com/logging/docs/regionalized-logs"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "cross"
  - "project"
  - "log"
  - "bucket"
  - "scope"
  - "refinement"
  - "logs"
  - "explorer"
---

# Cross-project log bucket scope refinement

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Explorer can refine scope to view logs stored in buckets across different projects.

## Extended Definition

Logs Explorer can refine scope to view logs stored in buckets across different projects.

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
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Logs Explorer overview: Refine scope . gcloud To read logs from a log bucket, use the gcloud logging read command and add a LOG FILTER to select data: gcloud logging read LOG FILTER --bucket= BUCKET ID --location= LOCATION --view= LOG VIEW ID REST To read logs from a log bucket, use the entries.list method.
- You might be viewing logs in a log bucket in a centralized Google Cloud project , which aggregates logs from across your organization.
- After Logging displays the linked dataset name on the Logs Storage page, it might take several minutes before BigQuery recognizes the dataset. gcloud To create a linked dataset for a log bucket that is upgraded to use Observability Analytics, run the gcloud logging links create command: gcloud logging links create LINK ID --bucket= BUCKET ID --location= LOCATION The LINK ID that you provide is used as the name of the BigQuery dataset, and the value of this field must be unique for your Google Cloud project.
- On the Logs Storage page, the pending-deletion indicator is removed from your log bucket. gcloud To restore a log bucket that is pending deletion, run the gcloud logging buckets undelete command: gcloud logging buckets undelete BUCKET ID --location= LOCATION REST To restore a bucket that is pending deletion, use projects.locations.buckets.undelete in the Logging API.

### Regionalize your logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example command: gcloud logging sinks update Default \ logging.googleapis.com/projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID \ --log-filter='NOT LOG ID("cloudaudit.googleapis.com/activity") AND NOT LOG ID("externalaudit.googleapis.com/activity") AND NOT LOG ID("cloudaudit.googleapis.com/system event") AND NOT LOG ID("externalaudit.googleapis.com/system event") AND NOT LOG ID("cloudaudit.googleapis.com/access transparency") AND NOT LOG ID("externalaudit.googleapis.com/access transparency")' \ --description="Updated the Default sink to route logs to the LOCATION region" Note: When you create a project, the filter for the Default sink is as shown in the previous command.
- Search logs in the Google Cloud console To view the log entries in your log bucket, go to the Google Cloud console and complete the following steps: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Example command: gcloud logging write LOG NAME "Test to route logs to BUCKET ID " \ --project= PROJECT ID Note: It might take several minutes for the test message to be sent.
- Log bucket locations Log buckets are the containers in your Google Cloud project, billing account, folder, and organization that store and organize your logs data.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- To view and download log entries stored in a log view on a log bucket: Logs View Accessor ( roles/logging.viewAccessor ) on the project, folder, or organization that contains the log bucket.
- This document provides you with an overview of the Logs Explorer in the Google Cloud console, which you can use to retrieve, view, and analyze log entries that are stored in log buckets .
- The selected resource can be a project, folder, or organization: If the toolbar displays Project logs or Default , then the resource's Required and Default buckets are queried.

