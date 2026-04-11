---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.572Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Viewer custom summary fields"
feature_slug: "logs-viewer-custom-summary-fields"
latest_feature_date: "2018-05-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
keywords:
  - "logs"
  - "viewer"
  - "custom"
  - "summary"
  - "fields"
  - "lets"
  - "users"
  - "specify"
---

# Logs Viewer custom summary fields

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Logs Viewer lets users specify custom fields in log-entry summary lines.

## Extended Definition

Logs Viewer lets users specify custom fields in log-entry summary lines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Set preferences for viewing log data To customize how your logs data is presented in the query results, click the settings Preferences button, and select View , Format , or Manage summary fields : To show or hide the Timeline and Fields panes, to hide summary chips in your query results, or to change the sorting order of your logs, select View .
- The Logs Explorer offers default summary fields and custom summary fields.
- To select which parts of the timestamp to display, click the settings Preferences menu, select Format , and then select one of the following options: Date, time, and timezone Date and time (default) Time only Find patterns in your logs by using summary fields Suppose you're looking through the log entries in your query results and want to quickly skim the results by a certain LogEntry field.
- Hide or show default summary fields: To customize which default summary fields are shown in your query results, expand the Hide or show default summary fields menu.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- May 08, 2018 Feature You can now specify custom fields in your Logs Viewer log-entry summary lines.
- May 18, 2020 Feature Logs Viewer now contains the Logs field explorer panel, which lets you view aggregation-based results for your project's log fields and makes it more efficient to refine queries.
- November 22, 2021 Deprecated On or after March 1, 2022, the Legacy Logs Viewer will be shut down and all users will be redirected to use the Logs Explorer .
- May 03, 2021 Feature You can now add custom fields in the Logs Explorer to better analyze logs and refine your queries.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Include custom summary fields (Optional): Enable Include summary fields and enter the summary fields that you want to display.
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.
- Do one of the following: To get the permissions that you need to write and run queries, to run and save private queries, and to run shared queries, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.
- Use the time-range selector The options in the time-range selector let you select from preset time options, specify a custom start and end time, or center the time range around a specific timestamp.

