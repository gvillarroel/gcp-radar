---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.469Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Viewer custom summary fields"
feature_slug: "logs-viewer-custom-summary-fields"
latest_feature_date: "2018-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/access-control"
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
Coverage: MEDIUM

## Step 02 Summary

Logs Viewer lets users specify custom fields in log-entry summary lines.

## Extended Definition

Logs Viewer lets users specify custom fields in log-entry summary lines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set preferences for viewing log data To customize how your logs data is presented in the query results, click the settings Preferences button, and select View , Format , or Manage summary fields : To show or hide the Timeline and Fields panes, to hide summary chips in your query results, or to change the sorting order of your logs, select View .
- The Logs Explorer offers default summary fields and custom summary fields.
- To select which parts of the timestamp to display, click the settings Preferences menu, select Format , and then select one of the following options: Date, time, and timezone Date and time (default) Time only Find patterns in your logs by using summary fields Suppose you're looking through the log entries in your query results and want to quickly skim the results by a certain LogEntry field.
- Hide or show default summary fields: To customize which default summary fields are shown in your query results, expand the Hide or show default summary fields menu.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Include custom summary fields (Optional): Enable Include summary fields and enter the summary fields that you want to display.
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.
- Do one of the following: To get the permissions that you need to write and run queries, to run and save private queries, and to run shared queries, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.
- Use the time-range selector The options in the time-range selector let you select from preset time options, specify a custom start and end time, or center the time range around a specific timestamp.

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Roles required to create and use log-based metrics Following is a summary of the common roles and permissions that a principal needs to access log-based metrics: The Logs Configuration Writer ( roles/logging.configWriter ) role lets principals list, create, get, update, and delete log-based metrics.
- Lowest-level resources where you can grant this role: Project logging.fields.access Log Link Accessor ( roles/ logging.linkViewer ) Ability to see links for a bucket. logging.links.get logging.links.list Logs Writer ( roles/ logging.logWriter ) Provides the permissions to write log entries.
- Grant access to log buckets The Logs Viewer role ( roles/logging.viewer ) lets a principal access all log data stored in the Required and Default log buckets, except for data access logs.
- Lowest-level resources where you can grant this role: View logging.buckets.copyLogEntries logging.buckets.create logging. buckets. createTagBinding logging.buckets.delete logging. buckets. deleteTagBinding logging.buckets.get logging.buckets.list logging. buckets. listEffectiveTags logging. buckets. listTagBindings logging.buckets.undelete logging.buckets.update logging.exclusions. logging.exclusions.create logging.exclusions.delete logging.exclusions.get logging.exclusions.list logging.exclusions.update logging.fields.access logging.links. logging.links.create logging.links.delete logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logEntries. logging.logEntries.create logging.logEntries.download logging.logEntries.list logging.logEntries.route logging.logMetrics. logging.logMetrics.create logging.logMetrics.delete logging.logMetrics.get logging.logMetrics.list logging.logMetrics.update logging.logScopes. logging.logScopes.create logging.logScopes.delete logging.logScopes.get logging.logScopes.list logging.logScopes.update logging.logServiceIndexes.list logging.logServices.list logging.logs. logging.logs.delete logging.logs.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update logging.operations. logging.operations.cancel logging.operations.get logging.operations.list logging.privateLogEntries.list logging.queries. logging.queries.deleteShared logging.queries.getShared logging.queries.listShared logging.queries.share logging.queries.updateShared logging.queries.usePrivate logging.settings. logging.settings.get logging.settings.update logging.sinks. logging.sinks.create logging.sinks.delete logging.sinks.get logging.sinks.list logging.sinks.update logging.sqlAlerts. logging.sqlAlerts.create logging.sqlAlerts.update logging.usage.get logging.views. logging.views.access logging.views.create logging.views.delete logging.views.get logging.views.getIamPolicy logging.views.list logging.views.listLogs logging.views.listResourceKeys logging. views. listResourceValues logging.views.setIamPolicy logging.views.update observability.scopes.get resourcemanager.projects.get resourcemanager.projects.list Logs Bucket Writer ( roles/ logging.bucketWriter ) Ability to write logs to a log bucket.

