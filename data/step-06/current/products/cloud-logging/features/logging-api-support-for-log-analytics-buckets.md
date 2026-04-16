---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.361Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging API support for Log Analytics buckets"
feature_slug: "logging-api-support-for-log-analytics-buckets"
latest_feature_date: "2023-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/buckets"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/access-control"
keywords:
  - "logging"
  - "log"
  - "analytics"
  - "buckets"
  - "can"
  - "create"
  - "upgrade"
  - "use"
---

# Logging API support for Log Analytics buckets

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Logging API can create and upgrade log buckets to use Log Analytics.

## Extended Definition

The Logging API can create and upgrade log buckets to use Log Analytics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)

## Supporting Pages

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you want to create a bucket with the BUCKET ID my-bucket in the global region, your command would look like the following: gcloud logging buckets create my-bucket --location global --description "My first bucket" For example, to create a bucket with the BUCKET ID my-upgraded-bucket in the global location, and then upgrade the log bucket to use Observability Analytics, your command would look like the following: gcloud logging buckets create my-upgraded-bucket --location global \ --description "My first upgraded bucket" \ --enable-analytics --retention-days=45 Note: After you create your log bucket, you can't change your bucket's region.
- If you want to upgrade the log bucket to use Observability Analytics, then include the --enable-analytics and --async flags, and make sure that you set the variable LOCATION to a supported region : gcloud logging buckets create BUCKET ID --location= LOCATION --enable-analytics --async OPTIONAL FLAGS The flag --async forces the command to be asynchronous.
- REST To create a linked a BigQuery dataset for an existing log bucket that is upgraded use Observability Analytics, call the asynchronous projects.locations.buckets.links.create method of the Cloud Logging API.
- After Logging displays the linked dataset name on the Logs Storage page, it might take several minutes before BigQuery recognizes the dataset. gcloud To create a linked dataset for a log bucket that is upgraded to use Observability Analytics, run the gcloud logging links create command: gcloud logging links create LINK ID --bucket= BUCKET ID --location= LOCATION The LINK ID that you provide is used as the name of the BigQuery dataset, and the value of this field must be unique for your Google Cloud project.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Analyze results by using Observability Analytics You can aggregate, analyze, and chart your log data by using SQL queries in the Observability Analytics page when your project contains log buckets that are upgraded to use Observability Analytics.
- You can continue to use the Logs Explorer to view logs in log buckets that have been upgraded to use Observability Analytics.
- To perform aggregate operations on your log entries, like counting the number of log entries that contain a specific pattern, upgrade the log bucket to use Observability Analytics, and then run queries from the Observability Analytics page of the Google Cloud console.
- For example, if the toolbar displays N log view , then the manage search Analyze results button is shown when the log bucket for at least one of the selected log views is upgraded to use Observability Analytics.

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: View logging.buckets.copyLogEntries logging.buckets.create logging. buckets. createTagBinding logging.buckets.delete logging. buckets. deleteTagBinding logging.buckets.get logging.buckets.list logging. buckets. listEffectiveTags logging. buckets. listTagBindings logging.buckets.undelete logging.buckets.update logging.exclusions. logging.exclusions.create logging.exclusions.delete logging.exclusions.get logging.exclusions.list logging.exclusions.update logging.fields.access logging.links. logging.links.create logging.links.delete logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logEntries. logging.logEntries.create logging.logEntries.download logging.logEntries.list logging.logEntries.route logging.logMetrics. logging.logMetrics.create logging.logMetrics.delete logging.logMetrics.get logging.logMetrics.list logging.logMetrics.update logging.logScopes. logging.logScopes.create logging.logScopes.delete logging.logScopes.get logging.logScopes.list logging.logScopes.update logging.logServiceIndexes.list logging.logServices.list logging.logs. logging.logs.delete logging.logs.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update logging.operations. logging.operations.cancel logging.operations.get logging.operations.list logging.privateLogEntries.list logging.queries. logging.queries.deleteShared logging.queries.getShared logging.queries.listShared logging.queries.share logging.queries.updateShared logging.queries.usePrivate logging.settings. logging.settings.get logging.settings.update logging.sinks. logging.sinks.create logging.sinks.delete logging.sinks.get logging.sinks.list logging.sinks.update logging.sqlAlerts. logging.sqlAlerts.create logging.sqlAlerts.update logging.usage.get logging.views. logging.views.access logging.views.create logging.views.delete logging.views.get logging.views.getIamPolicy logging.views.list logging.views.listLogs logging.views.listResourceKeys logging. views. listResourceValues logging.views.setIamPolicy logging.views.update observability.scopes.get resourcemanager.projects.get resourcemanager.projects.list Logs Bucket Writer ( roles/ logging.bucketWriter ) Ability to write logs to a log bucket.
- Lowest-level resources where you can grant this role: View logging.buckets.create logging. buckets. createTagBinding logging.buckets.delete logging. buckets. deleteTagBinding logging.buckets.get logging.buckets.list logging. buckets. listEffectiveTags logging. buckets. listTagBindings logging.buckets.undelete logging.buckets.update logging.exclusions. logging.exclusions.create logging.exclusions.delete logging.exclusions.get logging.exclusions.list logging.exclusions.update logging.links. logging.links.create logging.links.delete logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logMetrics. logging.logMetrics.create logging.logMetrics.delete logging.logMetrics.get logging.logMetrics.list logging.logMetrics.update logging.logScopes. logging.logScopes.create logging.logScopes.delete logging.logScopes.get logging.logScopes.list logging.logScopes.update logging.logServiceIndexes.list logging.logServices.list logging.logs.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update logging.operations. logging.operations.cancel logging.operations.get logging.operations.list logging.settings. logging.settings.get logging.settings.update logging.sinks. logging.sinks.create logging.sinks.delete logging.sinks.get logging.sinks.list logging.sinks.update logging.sqlAlerts. logging.sqlAlerts.create logging.sqlAlerts.update logging.views.create logging.views.delete logging.views.get logging.views.getIamPolicy logging.views.list logging.views.update observability.scopes.get resourcemanager.projects.get resourcemanager.projects.list Log Field Accessor ( roles/ logging.fieldAccessor ) Ability to read restricted fields in a log bucket.
- Save and use private queries logging.queries.usePrivate logging.queries.{listShared,getShared} Save and use shared queries logging.queries.{share, getShared, updateShared, deleteShared, listShared} Use recent queries logging.queries.{create, list} Create and manage log scopes logging.logScopes.{create, delete, get, list, update} Set and manage the default log scope observability.scopes.{get, update} Create and manage analytics views observability.analyticsViews.{create, delete, get, list, update} Create and manage linked datasets logging.links.{create, delete, get, list} You might need additional IAM roles to query the linked dataset.
- To let a user read logs in the Required and Default buckets or to use the Logs Explorer and Observability Analytics pages, grant one of the following roles: For access to all logs in the Required bucket, and access to the Default view on the Default bucket, grant the Logs Viewer ( roles/logging.viewer ) role.

