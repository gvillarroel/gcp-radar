---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.440Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Explorer log download"
feature_slug: "logs-explorer-log-download"
latest_feature_date: "2020-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-python"
  - "https://docs.cloud.google.com/logging/docs/access-control"
keywords:
  - "logs"
  - "explorer"
  - "log"
  - "download"
  - "lets"
  - "users"
  - "entries"
  - "json"
---

# Logs Explorer log download

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Explorer lets users download log entries in JSON or CSV to a computer, Google Drive, or a new browser tab.

## Extended Definition

Logs Explorer lets users download log entries in JSON or CSV to a computer, Google Drive, or a new browser tab.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)
- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Logs Explorer interface The Logs Explorer interface lets you display log entries, parse and analyze them, and specify query parameters.
- You can also grant a role that contains the logging.logEntries.list permission, which lets a principal view and download logs.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.

### "Quickstart: Write and query log entries using a Python script \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also view the log entries you wrote by using the Logs Explorer.
- Clone source To configure your Cloud Shell for this quickstart, do the following: Clone the GitHub project python-logging : git clone https : // github . com / GoogleCloudPlatform / python - docs - samples The directory samples/snippets contains the two scripts used in this quickstart: snippets.py lets you manage entries in a log. export.py lets you manage log exports.
- To view the data that was exported by your sink, click the folder name my-log , and then continue clicking through the year, month, and day subfolders until you reach a file that ends with json : The JSON file contains the log entries that were exported to your Cloud Storage bucket.
- For example: export GOOGLE APPLICATION CREDENTIALS = "/home/user/Downloads/ FILE NAME .json" This environment variable only applies to your current shell session, so if you open a new session, set the variable again.

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: View logging.buckets.copyLogEntries logging.buckets.create logging. buckets. createTagBinding logging.buckets.delete logging. buckets. deleteTagBinding logging.buckets.get logging.buckets.list logging. buckets. listEffectiveTags logging. buckets. listTagBindings logging.buckets.undelete logging.buckets.update logging.exclusions. logging.exclusions.create logging.exclusions.delete logging.exclusions.get logging.exclusions.list logging.exclusions.update logging.fields.access logging.links. logging.links.create logging.links.delete logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logEntries. logging.logEntries.create logging.logEntries.download logging.logEntries.list logging.logEntries.route logging.logMetrics. logging.logMetrics.create logging.logMetrics.delete logging.logMetrics.get logging.logMetrics.list logging.logMetrics.update logging.logScopes. logging.logScopes.create logging.logScopes.delete logging.logScopes.get logging.logScopes.list logging.logScopes.update logging.logServiceIndexes.list logging.logServices.list logging.logs. logging.logs.delete logging.logs.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update logging.operations. logging.operations.cancel logging.operations.get logging.operations.list logging.privateLogEntries.list logging.queries. logging.queries.deleteShared logging.queries.getShared logging.queries.listShared logging.queries.share logging.queries.updateShared logging.queries.usePrivate logging.settings. logging.settings.get logging.settings.update logging.sinks. logging.sinks.create logging.sinks.delete logging.sinks.get logging.sinks.list logging.sinks.update logging.sqlAlerts. logging.sqlAlerts.create logging.sqlAlerts.update logging.usage.get logging.views. logging.views.access logging.views.create logging.views.delete logging.views.get logging.views.getIamPolicy logging.views.list logging.views.listLogs logging.views.listResourceKeys logging. views. listResourceValues logging.views.setIamPolicy logging.views.update observability.scopes.get resourcemanager.projects.get resourcemanager.projects.list Logs Bucket Writer ( roles/ logging.bucketWriter ) Ability to write logs to a log bucket.
- Console activity Required permissions Minimal read-only access logging.logEntries.list logging.logs.list logging.logServiceIndexes.list logging.logServices.list resourcemanager.projects.get View Data Access audit logs logging.privateLogEntries.list View log-based metrics logging.logMetrics.{list, get} View sinks logging.sinks.{list, get} View logs usage logging.usage.get Download logs logging.logEntries.{list, download} Only one of these permissions is necessary to download logs.
- Lowest-level resources where you can grant this role: View logging.logEntries.download logging.views.access logging.views.listLogs logging.views.listResourceKeys logging. views. listResourceValues Service agent roles Service agent roles should only be granted to service agents .
- Lowest-level resources where you can grant this role: View logging.buckets.get logging.buckets.list logging.exclusions.get logging.exclusions.list logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logEntries.list logging.logMetrics.get logging.logMetrics.list logging.logScopes.get logging.logScopes.list logging.logServiceIndexes.list logging.logServices.list logging.logs.list logging.operations.get logging.operations.list logging.queries.getShared logging.queries.listShared logging.queries.usePrivate logging.sinks.get logging.sinks.list logging.usage.get logging.views.get logging.views.list observability.scopes.get resourcemanager.projects.get Logs Configuration Writer ( roles/ logging.configWriter ) Provides permissions to read and write the configurations of logs-based metrics and sinks for exporting logs.

