---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.444Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Viewer resource context view"
feature_slug: "logs-viewer-resource-context-view"
latest_feature_date: "2020-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/audit"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
keywords:
  - "logs"
  - "viewer"
  - "resource"
  - "context"
  - "view"
  - "lets"
  - "users"
  - "log"
---

# Logs Viewer resource context view

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Viewer lets users view a log entry in its resource context; Logs Viewer lets users view a log entry in its resource context.

## Extended Definition

Logs Viewer lets users view a log entry in its resource context; Logs Viewer lets users view a log entry in its resource context.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- For more information about investigations, see the following documentation: Troubleshoot issues with Gemini Cloud Assist investigations Create a Gemini Cloud Assist investigation Manage Gemini Cloud Assist investigations View similar log entries You can view log entries that are similar to a selected log entry, which lets you focus on logs of interest.
- View Monitoring data For certain logs, such as GKE and Compute Engine logs, you can select the resource type from the log's summary line to display a menu with the following options: View monitoring details : opens a details panel for a GKE resource.
- Using the Timeline , click push pin Pin , and then choose from the following menu options: Scroll to log entry : Bring the log entry into the current Query results pane and view the pinned log entry in the context of nearby logs.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To view audit logs, you must have the appropriate Identity and Access Management (IAM) permissions and roles: To get the permissions that you need to get read-only access to Admin Activity, Policy Denied, and System Event audit logs, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.
- To get the permissions that you need to get access to all logs in the Required and Default buckets, including Data Access logs, ask your administrator to grant you the Private Logs Viewer ( roles/logging.privateLogViewer ) IAM role on your project.
- The Private Logs Viewer role (roles/logging.privateLogViewer) includes the permissions contained in the Logs Viewer role ( roles/logging.viewer ), and those necessary to read Data Access audit logs in the Default bucket.
- For more information about querying your logs, see Build queries in the Logs Explorer The Logs Explorer lets you view filter individual log entries.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Do one of the following: To get the permissions that you need to write and run queries, to run and save private queries, and to run shared queries, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.
- Select the Google Cloud project or other Google Cloud resource for which you want to view logs.
- Select the Google Cloud project or other Google Cloud resource for which you want to view logs.
- Select the Google Cloud project or other Google Cloud resource for which you want to view logs.

