---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.554Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Legacy Logs Viewer"
feature_slug: "legacy-logs-viewer"
latest_feature_date: "2021-11-22"
deprecation_date: "2022-03-01"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/audit"
keywords:
  - "legacy"
  - "logs"
  - "viewer"
  - "is"
  - "the"
  - "older"
  - "log"
  - "viewing"
---

# Legacy Logs Viewer

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Legacy Logs Viewer is the older log viewing interface that is being retired in favor of Logs Explorer; deprecated on 2022-03-01.

## Extended Definition

Legacy Logs Viewer is the older log viewing interface that is being retired in favor of Logs Explorer; deprecated on 2022-03-01.

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
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- Set preferences for viewing log data To customize how your logs data is presented in the query results, click the settings Preferences button, and select View , Format , or Manage summary fields : To show or hide the Timeline and Fields panes, to hide summary chips in your query results, or to change the sorting order of your logs, select View .
- The toolbar in the Query pane displays the resources searched for log entries: Project logs and Default : Log entries that originate in the selected project, folder, or organization are returned.
- The selected resource can be a project, folder, or organization: If the toolbar displays Project logs or Default , then the resource's Required and Default buckets are queried.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- September 22, 2020 Feature The histogram panel in the Logs Viewer (Preview) now contains a viewport to help you quickly understand the time range of the log entries you're viewing within the Query results pane.
- In the coming weeks, this naming format will be applied to organization-level sinks and folder-level sinks, and to sinks listed on the Logs Exports page in the Logs Viewer.
- The Logs Viewer (Classic) is now called the Legacy Logs Viewer.
- February 06, 2017 Feature App Engine Flexible Environment : For App Engine Flexible Environment, the Logs Viewer can now display application log entries ("log lines") inside the log entry for the associated service request.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- The following are the audit log names, including variables for the resource identifiers: projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Factivity projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fdata access projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fsystem event projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fpolicy folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Factivity folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fdata access folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fsystem event folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fpolicy billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Factivity billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fdata access billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fsystem event billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fpolicy organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Factivity organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fdata access organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fsystem event organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fpolicy Caller identities in audit logs Audit logs record the identity that performed the logged operations on the Google Cloud resource.
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- Required roles To view audit logs, you must have the appropriate Identity and Access Management (IAM) permissions and roles: To get the permissions that you need to get read-only access to Admin Activity, Policy Denied, and System Event audit logs, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.
- To get the permissions that you need to get access to all logs in the Required and Default buckets, including Data Access logs, ask your administrator to grant you the Private Logs Viewer ( roles/logging.privateLogViewer ) IAM role on your project.

