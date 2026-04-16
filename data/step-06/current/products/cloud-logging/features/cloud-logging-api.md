---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.506Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Cloud Logging API"
feature_slug: "cloud-logging-api"
latest_feature_date: "2015-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/access-control"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/audit"
keywords:
  - "logging"
  - "lets"
  - "users"
  - "write"
  - "logs"
  - "create"
  - "control"
  - "log"
---

# Cloud Logging API

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud Logging API lets users write logs, create logs, and control log export through client libraries and API methods.

## Extended Definition

The Google Cloud Logging API lets users write logs, create logs, and control log export through client libraries and API methods.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)

## Supporting Pages

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Roles required to create and use log-based metrics Following is a summary of the common roles and permissions that a principal needs to access log-based metrics: The Logs Configuration Writer ( roles/logging.configWriter ) role lets principals list, create, get, update, and delete log-based metrics.
- Lowest-level resources where you can grant this role: View logging.buckets.copyLogEntries logging.buckets.create logging. buckets. createTagBinding logging.buckets.delete logging. buckets. deleteTagBinding logging.buckets.get logging.buckets.list logging. buckets. listEffectiveTags logging. buckets. listTagBindings logging.buckets.undelete logging.buckets.update logging.exclusions. logging.exclusions.create logging.exclusions.delete logging.exclusions.get logging.exclusions.list logging.exclusions.update logging.fields.access logging.links. logging.links.create logging.links.delete logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logEntries. logging.logEntries.create logging.logEntries.download logging.logEntries.list logging.logEntries.route logging.logMetrics. logging.logMetrics.create logging.logMetrics.delete logging.logMetrics.get logging.logMetrics.list logging.logMetrics.update logging.logScopes. logging.logScopes.create logging.logScopes.delete logging.logScopes.get logging.logScopes.list logging.logScopes.update logging.logServiceIndexes.list logging.logServices.list logging.logs. logging.logs.delete logging.logs.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update logging.operations. logging.operations.cancel logging.operations.get logging.operations.list logging.privateLogEntries.list logging.queries. logging.queries.deleteShared logging.queries.getShared logging.queries.listShared logging.queries.share logging.queries.updateShared logging.queries.usePrivate logging.settings. logging.settings.get logging.settings.update logging.sinks. logging.sinks.create logging.sinks.delete logging.sinks.get logging.sinks.list logging.sinks.update logging.sqlAlerts. logging.sqlAlerts.create logging.sqlAlerts.update logging.usage.get logging.views. logging.views.access logging.views.create logging.views.delete logging.views.get logging.views.getIamPolicy logging.views.list logging.views.listLogs logging.views.listResourceKeys logging. views. listResourceValues logging.views.setIamPolicy logging.views.update observability.scopes.get resourcemanager.projects.get resourcemanager.projects.list Logs Bucket Writer ( roles/ logging.bucketWriter ) Ability to write logs to a log bucket.
- Required roles To get the permissions that you need to create log-based alerting policies, to create notification channels, and to create the associated Logging notification rules , ask your administrator to grant you the following IAM roles on your project: Monitoring AlertPolicy Editor ( roles/monitoring.alertPolicyEditor ) Monitoring NotificationChannel Editor ( roles/monitoring.notificationChannelEditor ) Logs Configuration Writer ( roles/logging.configWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Lowest-level resources where you can grant this role: Project logging.logEntries.create logging.logEntries.route SQL Alert Writer Beta ( roles/ logging.sqlAlertWriter ) Ability to write SQL Alerts. logging.sqlAlerts. logging.sqlAlerts.create logging.sqlAlerts.update Logs View Accessor ( roles/ logging.viewAccessor ) Ability to read logs in a view.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- For more information about investigations, see the following documentation: Troubleshoot issues with Gemini Cloud Assist investigations Create a Gemini Cloud Assist investigation Manage Gemini Cloud Assist investigations View similar log entries You can view log entries that are similar to a selected log entry, which lets you focus on logs of interest.
- You can also grant a role that contains the logging.logEntries.list permission, which lets a principal view and download logs.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Access control IAM permissions and roles determine your ability to access audit logs data in the Logging API , the Logs Explorer , and the Google Cloud CLI .
- For example, these logs record when users create VM instances or change Identity and Access Management permissions.
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- Required roles To view audit logs, you must have the appropriate Identity and Access Management (IAM) permissions and roles: To get the permissions that you need to get read-only access to Admin Activity, Policy Denied, and System Event audit logs, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.

