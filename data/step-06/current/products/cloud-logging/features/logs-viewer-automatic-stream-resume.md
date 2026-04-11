---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.578Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Viewer automatic stream resume"
feature_slug: "logs-viewer-automatic-stream-resume"
latest_feature_date: "2017-02-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/audit"
keywords:
  - "logs"
  - "viewer"
  - "automatic"
  - "stream"
  - "resume"
  - "automatically"
  - "resumes"
  - "log"
---

# Logs Viewer automatic stream resume

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Logs Viewer automatically resumes log streaming when the browser tab or window becomes active again.

## Extended Definition

Logs Viewer automatically resumes log streaming when the browser tab or window becomes active again.

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
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- The following occurs when you click manage search Analyze results : The time range in the Logs Explorer might be automatically adjusted so that there is meaningful log data in the Observability Analytics page.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- To view all log entries in the Required and Default buckets: Private Logs Viewer ( roles/logging.privateLogViewer ) on your project, folder, or organization.
- When you run a query, the query results are analyzed for patterns and log entries are then automatically grouped based on similar log field content.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Feature Resuming log streaming : The Logs Viewer now automatically resumes streaming logs when its browser window or tab is selected.
- January 08, 2024 Feature You can now go to the Log Analytics page from the Logs Explorer page by clicking the Analyze results button, which automatically translates the Logging query language query into a SQL query.
- May 26, 2025 Libraries Java 3.22.4 (2025-05-20) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.58.0 ( 45b4878 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.48.0 ( #1808 ) ( 6327c51 ) Update googleapis/sdk-platform-java action to v2.58.0 ( #1806 ) ( b94da77 ) May 12, 2025 Libraries Java 3.22.3 (2025-05-06) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.56.3 ( 844f4fa ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.46.3 ( #1801 ) ( d7aa7bc ) Update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #1803 ) ( 5967ffe ) Update googleapis/sdk-platform-java action to v2.57.0 ( #1804 ) ( e9a27ec ) Java 3.22.3 (2025-05-06) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.56.3 ( 844f4fa ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.46.3 ( #1801 ) ( d7aa7bc ) Update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #1803 ) ( 5967ffe ) Update googleapis/sdk-platform-java action to v2.57.0 ( #1804 ) ( e9a27ec ) May 08, 2025 Feature Log Analytics can now automatically infer fields of a column when the data type is JSON.
- February 06, 2017 Feature App Engine Flexible Environment : For App Engine Flexible Environment, the Logs Viewer can now display application log entries ("log lines") inside the log entry for the associated service request.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Clicking this prepopulated form automatically fills the request body, but you need to supply a valid PROJECT ID in each of the log names. { "resourceNames": [ "projects/ PROJECT ID " ], "pageSize": 5, "filter": "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" } Click Execute .
- Required roles To view audit logs, you must have the appropriate Identity and Access Management (IAM) permissions and roles: To get the permissions that you need to get read-only access to Admin Activity, Policy Denied, and System Event audit logs, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.
- To get the permissions that you need to get access to all logs in the Required and Default buckets, including Data Access logs, ask your administrator to grant you the Private Logs Viewer ( roles/logging.privateLogViewer ) IAM role on your project.
- The Private Logs Viewer role (roles/logging.privateLogViewer) includes the permissions contained in the Logs Viewer role ( roles/logging.viewer ), and those necessary to read Data Access audit logs in the Default bucket.

