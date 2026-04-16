---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.489Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Data access logs"
feature_slug: "data-access-logs"
latest_feature_date: "2017-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/access-control"
  - "https://docs.cloud.google.com/logging/docs/audit"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "access"
  - "logs"
  - "logging"
  - "provides"
  - "user"
  - "configurable"
---

# Data access logs

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging provides user-configurable data access logs.

## Extended Definition

Cloud Logging provides user-configurable data access logs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest-level resources where you can grant this role: View logging.buckets.get logging.buckets.list logging.exclusions.get logging.exclusions.list logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logEntries.list logging.logMetrics.get logging.logMetrics.list logging.logServiceIndexes.list logging.logServices.list logging.logs.list logging.operations.get logging.operations.list logging.privateLogEntries.list logging.queries.getShared logging.queries.listShared logging.queries.usePrivate logging.sinks.get logging.sinks.list logging.usage.get logging.views.access logging.views.get logging.views.list observability.scopes.get resourcemanager.projects.get Logs Viewer ( roles/ logging.viewer ) Provides access to view logs.
- To let a user read logs in the Required and Default buckets or to use the Logs Explorer and Observability Analytics pages, grant one of the following roles: For access to all logs in the Required bucket, and access to the Default view on the Default bucket, grant the Logs Viewer ( roles/logging.viewer ) role.
- Lowest-level resources where you can grant this role: Project logging.fields.access Log Link Accessor ( roles/ logging.linkViewer ) Ability to see links for a bucket. logging.links.get logging.links.list Logs Writer ( roles/ logging.logWriter ) Provides the permissions to write log entries.
- Lowest-level resources where you can grant this role: Project logging.buckets.write Private Logs Viewer ( roles/ logging.privateLogViewer ) Provides permissions of the Logs Viewer role and in addition, provides read-only access to log entries in private logs.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To view audit logs, you must have the appropriate Identity and Access Management (IAM) permissions and roles: To get the permissions that you need to get read-only access to Admin Activity, Policy Denied, and System Event audit logs, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.
- Types of audit logs Cloud Audit Logs provides the following audit logs for each Google Cloud project, folder, and organization: Admin Activity audit logs Data Access audit logs System Event audit logs Policy Denied audit logs Note: Log entries written by Cloud Audit Logs are immutable.
- To get the permissions that you need to get access to all logs in the Required and Default buckets, including Data Access logs, ask your administrator to grant you the Private Logs Viewer ( roles/logging.privateLogViewer ) IAM role on your project.
- The Private Logs Viewer role (roles/logging.privateLogViewer) includes the permissions contained in the Logs Viewer role ( roles/logging.viewer ), and those necessary to read Data Access audit logs in the Default bucket.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- To view and download log entries stored in a log view on a log bucket: Logs View Accessor ( roles/logging.viewAccessor ) on the project, folder, or organization that contains the log bucket.
- To get the permissions that you need to download logs, ask your administrator to grant you the Logs View Accessor ( roles/logging.viewAccessor ) IAM role on your project.
- Troubleshoot logging issues This section provides instructions for troubleshooting common issues when using the Logs Explorer.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.

