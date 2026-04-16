---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.478Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Exclusion filters"
feature_slug: "exclusion-filters"
latest_feature_date: "2017-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/access-control"
  - "https://docs.cloud.google.com/logging/docs/audit"
  - "https://docs.cloud.google.com/logging/docs/routing/overview"
keywords:
  - "exclusion"
  - "filters"
  - "let"
  - "users"
  - "control"
  - "which"
  - "logs"
  - "retained"
---

# Exclusion filters

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Exclusion filters let users control which logs are retained in Cloud Logging; Exclusion filters let users control which logs are retained in Cloud Logging.

## Extended Definition

Exclusion filters let users control which logs are retained in Cloud Logging; Exclusion filters let users control which logs are retained in Cloud Logging.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)

## Supporting Pages

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List and view log scopes logging.logScopes.{get, list} View the default log scope observability.scopes.get Exclude logs logging.exclusions.{list, create, get, update, delete} When creating a custom role that includes permissions to manage exclusion filters, add the logging.sinks. permissions to the role instead of adding the logging.exclusions. permissions.
- Lowest-level resources where you can grant this role: View logging.buckets.copyLogEntries logging.buckets.create logging. buckets. createTagBinding logging.buckets.delete logging. buckets. deleteTagBinding logging.buckets.get logging.buckets.list logging. buckets. listEffectiveTags logging. buckets. listTagBindings logging.buckets.undelete logging.buckets.update logging.exclusions. logging.exclusions.create logging.exclusions.delete logging.exclusions.get logging.exclusions.list logging.exclusions.update logging.fields.access logging.links. logging.links.create logging.links.delete logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logEntries. logging.logEntries.create logging.logEntries.download logging.logEntries.list logging.logEntries.route logging.logMetrics. logging.logMetrics.create logging.logMetrics.delete logging.logMetrics.get logging.logMetrics.list logging.logMetrics.update logging.logScopes. logging.logScopes.create logging.logScopes.delete logging.logScopes.get logging.logScopes.list logging.logScopes.update logging.logServiceIndexes.list logging.logServices.list logging.logs. logging.logs.delete logging.logs.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update logging.operations. logging.operations.cancel logging.operations.get logging.operations.list logging.privateLogEntries.list logging.queries. logging.queries.deleteShared logging.queries.getShared logging.queries.listShared logging.queries.share logging.queries.updateShared logging.queries.usePrivate logging.settings. logging.settings.get logging.settings.update logging.sinks. logging.sinks.create logging.sinks.delete logging.sinks.get logging.sinks.list logging.sinks.update logging.sqlAlerts. logging.sqlAlerts.create logging.sqlAlerts.update logging.usage.get logging.views. logging.views.access logging.views.create logging.views.delete logging.views.get logging.views.getIamPolicy logging.views.list logging.views.listLogs logging.views.listResourceKeys logging. views. listResourceValues logging.views.setIamPolicy logging.views.update observability.scopes.get resourcemanager.projects.get resourcemanager.projects.list Logs Bucket Writer ( roles/ logging.bucketWriter ) Ability to write logs to a log bucket.
- Lowest-level resources where you can grant this role: View logging.buckets.create logging. buckets. createTagBinding logging.buckets.delete logging. buckets. deleteTagBinding logging.buckets.get logging.buckets.list logging. buckets. listEffectiveTags logging. buckets. listTagBindings logging.buckets.undelete logging.buckets.update logging.exclusions. logging.exclusions.create logging.exclusions.delete logging.exclusions.get logging.exclusions.list logging.exclusions.update logging.links. logging.links.create logging.links.delete logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logMetrics. logging.logMetrics.create logging.logMetrics.delete logging.logMetrics.get logging.logMetrics.list logging.logMetrics.update logging.logScopes. logging.logScopes.create logging.logScopes.delete logging.logScopes.get logging.logScopes.list logging.logScopes.update logging.logServiceIndexes.list logging.logServices.list logging.logs.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update logging.operations. logging.operations.cancel logging.operations.get logging.operations.list logging.settings. logging.settings.get logging.settings.update logging.sinks. logging.sinks.create logging.sinks.delete logging.sinks.get logging.sinks.list logging.sinks.update logging.sqlAlerts. logging.sqlAlerts.create logging.sqlAlerts.update logging.views.create logging.views.delete logging.views.get logging.views.getIamPolicy logging.views.list logging.views.update observability.scopes.get resourcemanager.projects.get resourcemanager.projects.list Log Field Accessor ( roles/ logging.fieldAccessor ) Ability to read restricted fields in a log bucket.
- Lowest-level resources where you can grant this role: View logging.buckets.get logging.buckets.list logging.exclusions.get logging.exclusions.list logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logEntries.list logging.logMetrics.get logging.logMetrics.list logging.logScopes.get logging.logScopes.list logging.logServiceIndexes.list logging.logServices.list logging.logs.list logging.operations.get logging.operations.list logging.queries.getShared logging.queries.listShared logging.queries.usePrivate logging.sinks.get logging.sinks.list logging.usage.get logging.views.get logging.views.list observability.scopes.get resourcemanager.projects.get Logs Configuration Writer ( roles/ logging.configWriter ) Provides permissions to read and write the configurations of logs-based metrics and sinks for exporting logs.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can't disable Policy Denied audit logs, but you can use exclusion filters to prevent Policy Denied audit logs from being stored in Cloud Logging.
- VPC Service Controls : For Policy Denied audit logs, the following redaction occurs: Parts of the caller email addresses might be redacted and replaced by three period characters ... .
- Cloud Storage : When Cloud Storage usage logs are enabled, Cloud Storage writes usage data to the Cloud Storage bucket, which generates Data Access audit logs for the bucket.
- For a list of services that write Admin Activity audit logs and detailed information about which activities generate those logs, see Google Cloud services with audit logs .

### Route log entries \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This sink doesn't specify any exclusion filters, and the inclusion filter is as shown: LOG ID("cloudaudit.googleapis.com/activity") OR LOG ID("externalaudit.googleapis.com/activity") OR LOG ID("cloudaudit.googleapis.com/system event") OR LOG ID("externalaudit.googleapis.com/system event") OR LOG ID("cloudaudit.googleapis.com/access transparency") OR LOG ID("externalaudit.googleapis.com/access transparency") The Required log sink only matches log entries that originate in the resource where the Required log sink is defined.
- A project-level sink routes the log entry to the sink's destination when the log entry matches the sink's inclusion filter but doesn't match any of the sink's exclusion filters.
- A project-level sink routes the log entry to the sink's destination when the log entry matches the sink's inclusion filter but doesn't match any of the sink's exclusion filters.
- A project-level sink routes the log entry to the sink's destination when the log entry matches the sink's inclusion filter but doesn't match any of the sink's exclusion filters.

