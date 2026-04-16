---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.359Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Cross-project log routing"
feature_slug: "cross-project-log-routing"
latest_feature_date: "2023-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/routing/overview"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/audit"
keywords:
  - "cross"
  - "project"
  - "log"
  - "routing"
  - "logging"
  - "can"
  - "route"
  - "logs"
---

# Cross-project log routing

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging can route logs through the Log Router of another Google Cloud project.

## Extended Definition

Cloud Logging can route logs through the Log Router of another Google Cloud project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)

## Supporting Pages

### Route log entries \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For best practices about using routing for data governance or for common use cases, see the following documents: Aggregate your organization's log into a central log bucket Regionalize your logs Set up multi-tenant logging for GKE Configure CMEK for logs routing Logs data: A step by step guide for overcoming common compliance challenges Data governance: Principles for securing and managing logs Examples: Centralize your log storage This section outlines how you might configure centralized storage .
- At a high level, this is how Cloud Logging routes and stores log entries: About Log Routers Each Google Cloud project, billing account, folder, and organization has a Log Router, which manages the flow of log entries through resource-level sinks.
- What's next To help you route and store Cloud Logging data, see the following documents: To create sinks to route log entries to supported destinations, see Route logs to supported destinations .
- The following destinations are supported: Google Cloud project Select this destination when you want the log sinks in the destination project to reroute your log entries, or when you have created an intercepting aggregated sink.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- To view and download log entries stored in a log view on a log bucket: Logs View Accessor ( roles/logging.viewAccessor ) on the project, folder, or organization that contains the log bucket.
- To get the permissions that you need to download logs, ask your administrator to grant you the Logs View Accessor ( roles/logging.viewAccessor ) IAM role on your project.
- To view all log entries in the Required and Default buckets: Private Logs Viewer ( roles/logging.privateLogViewer ) on your project, folder, or organization.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- Required roles To view audit logs, you must have the appropriate Identity and Access Management (IAM) permissions and roles: To get the permissions that you need to get read-only access to Admin Activity, Policy Denied, and System Event audit logs, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.
- To get the permissions that you need to get access to all logs in the Required and Default buckets, including Data Access logs, ask your administrator to grant you the Private Logs Viewer ( roles/logging.privateLogViewer ) IAM role on your project.
- If you route Admin Activity audit logs and System Event audit logs to a different project, then those logs don't pass through the Default or Required sink of the destination project.

