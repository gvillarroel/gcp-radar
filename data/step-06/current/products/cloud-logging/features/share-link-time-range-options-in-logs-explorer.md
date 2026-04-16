---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.422Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Share Link Time Range Options in Logs Explorer"
feature_slug: "share-link-time-range-options-in-logs-explorer"
latest_feature_date: "2021-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/access-control"
keywords:
  - "share"
  - "link"
  - "time"
  - "range"
  - "options"
  - "logs"
  - "explorer"
  - "links"
---

# Share Link Time Range Options in Logs Explorer

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Explorer share links can include either absolute or relative time ranges.

## Extended Definition

Logs Explorer share links can include either absolute or relative time ranges.

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
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The copied URL has the corresponding absolute time range represented by the time range of your query; for example, 7:49:37 PM - 8:49:37 PM . settings Preferences : Adjust the view of the Logs Explorer page, and customize the format of your query results.
- The following occurs when you click manage search Analyze results : The time range in the Logs Explorer might be automatically adjusted so that there is meaningful log data in the Observability Analytics page.
- To select which parts of the timestamp to display, click the settings Preferences menu, select Format , and then select one of the following options: Date, time, and timezone Date and time (default) Time only Find patterns in your logs by using summary fields Suppose you're looking through the log entries in your query results and want to quickly skim the results by a certain LogEntry field.
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- For example, the following request body lists all shared Logs Explorer queries with a wildcard location ID: { "parent": "name": projects/PROJECT ID/locations/- "visibility": "SHARED" "filter": "explorer" } Use suggested queries Logging generates suggested queries based on the context of your Google Cloud project, such as the Google Cloud products you're using.
- Use the time-range selector The options in the time-range selector let you select from preset time options, specify a custom start and end time, or center the time range around a specific timestamp.
- This document describes how to retrieve and analyze logs when you use the Logs Explorer by writing queries in the query-editor field and by selecting from predefined filter options.

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: View logging.buckets.copyLogEntries logging.buckets.create logging. buckets. createTagBinding logging.buckets.delete logging. buckets. deleteTagBinding logging.buckets.get logging.buckets.list logging. buckets. listEffectiveTags logging. buckets. listTagBindings logging.buckets.undelete logging.buckets.update logging.exclusions. logging.exclusions.create logging.exclusions.delete logging.exclusions.get logging.exclusions.list logging.exclusions.update logging.fields.access logging.links. logging.links.create logging.links.delete logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logEntries. logging.logEntries.create logging.logEntries.download logging.logEntries.list logging.logEntries.route logging.logMetrics. logging.logMetrics.create logging.logMetrics.delete logging.logMetrics.get logging.logMetrics.list logging.logMetrics.update logging.logScopes. logging.logScopes.create logging.logScopes.delete logging.logScopes.get logging.logScopes.list logging.logScopes.update logging.logServiceIndexes.list logging.logServices.list logging.logs. logging.logs.delete logging.logs.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update logging.operations. logging.operations.cancel logging.operations.get logging.operations.list logging.privateLogEntries.list logging.queries. logging.queries.deleteShared logging.queries.getShared logging.queries.listShared logging.queries.share logging.queries.updateShared logging.queries.usePrivate logging.settings. logging.settings.get logging.settings.update logging.sinks. logging.sinks.create logging.sinks.delete logging.sinks.get logging.sinks.list logging.sinks.update logging.sqlAlerts. logging.sqlAlerts.create logging.sqlAlerts.update logging.usage.get logging.views. logging.views.access logging.views.create logging.views.delete logging.views.get logging.views.getIamPolicy logging.views.list logging.views.listLogs logging.views.listResourceKeys logging. views. listResourceValues logging.views.setIamPolicy logging.views.update observability.scopes.get resourcemanager.projects.get resourcemanager.projects.list Logs Bucket Writer ( roles/ logging.bucketWriter ) Ability to write logs to a log bucket.
- Lowest-level resources where you can grant this role: View logging.buckets.get logging.buckets.list logging.exclusions.get logging.exclusions.list logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logEntries.list logging.logMetrics.get logging.logMetrics.list logging.logScopes.get logging.logScopes.list logging.logServiceIndexes.list logging.logServices.list logging.logs.list logging.operations.get logging.operations.list logging.queries.getShared logging.queries.listShared logging.queries.usePrivate logging.sinks.get logging.sinks.list logging.usage.get logging.views.get logging.views.list observability.scopes.get resourcemanager.projects.get Logs Configuration Writer ( roles/ logging.configWriter ) Provides permissions to read and write the configurations of logs-based metrics and sinks for exporting logs.
- Lowest-level resources where you can grant this role: View logging.buckets.get logging.buckets.list logging.exclusions.get logging.exclusions.list logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logEntries.list logging.logMetrics.get logging.logMetrics.list logging.logServiceIndexes.list logging.logServices.list logging.logs.list logging.operations.get logging.operations.list logging.privateLogEntries.list logging.queries.getShared logging.queries.listShared logging.queries.usePrivate logging.sinks.get logging.sinks.list logging.usage.get logging.views.access logging.views.get logging.views.list observability.scopes.get resourcemanager.projects.get Logs Viewer ( roles/ logging.viewer ) Provides access to view logs.
- Save and use private queries logging.queries.usePrivate logging.queries.{listShared,getShared} Save and use shared queries logging.queries.{share, getShared, updateShared, deleteShared, listShared} Use recent queries logging.queries.{create, list} Create and manage log scopes logging.logScopes.{create, delete, get, list, update} Set and manage the default log scope observability.scopes.{get, update} Create and manage analytics views observability.analyticsViews.{create, delete, get, list, update} Create and manage linked datasets logging.links.{create, delete, get, list} You might need additional IAM roles to query the linked dataset.

