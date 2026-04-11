---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.577Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Viewer field expansion"
feature_slug: "logs-viewer-field-expansion"
latest_feature_date: "2017-06-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/audit"
keywords:
  - "logs"
  - "viewer"
  - "field"
  - "expansion"
  - "lets"
  - "users"
  - "expand"
  - "all"
---

# Logs Viewer field expansion

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Logs Viewer lets users expand all fields in a log entry more easily.

## Extended Definition

Logs Viewer lets users expand all fields in a log entry more easily.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- To view all log entries in the Required and Default buckets: Private Logs Viewer ( roles/logging.privateLogViewer ) on your project, folder, or organization.
- Show all logs for this trace : Refines and runs the query by adding the trace field set to the identifier of the trace associated with the log entry.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- To select which parts of the timestamp to display, click the settings Preferences menu, select Format , and then select one of the following options: Date, time, and timezone Date and time (default) Time only Find patterns in your logs by using summary fields Suppose you're looking through the log entries in your query results and want to quickly skim the results by a certain LogEntry field.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Feature Logs Viewer : You can more easily expand all fields in a log entry.
- May 18, 2020 Feature Logs Viewer now contains the Logs field explorer panel, which lets you view aggregation-based results for your project's log fields and makes it more efficient to refine queries.
- November 22, 2021 Deprecated On or after March 1, 2022, the Legacy Logs Viewer will be shut down and all users will be redirected to use the Logs Explorer .
- Feature Resuming log streaming : The Logs Viewer now automatically resumes streaming logs when its browser window or tab is selected.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- To display all audit logs, enter either of the following queries into the query-editor field, and then click Run query : logName:"cloudaudit.googleapis.com" protoPayload."@type"="type.googleapis.com/google.cloud.audit.AuditLog" To display the audit logs for a specific resource and audit log type, in the Query builder pane, do the following: In Resource type , select the Google Cloud resource whose audit logs you want to see.
- To get the permissions that you need to get access to all logs in the Required and Default buckets, including Data Access logs, ask your administrator to grant you the Private Logs Viewer ( roles/logging.privateLogViewer ) IAM role on your project.
- IP address of the caller in audit logs The IP address of the caller is held in the RequestMetadata.callerIp field of the AuditLog object: For a caller from the internet, the address is a public IPv4 or IPv6 address.
- Publicly available resources that have the Identity and Access Management policies allAuthenticatedUsers or allUsers don't generate audit logs.

