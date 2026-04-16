---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.369Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Analytics"
feature_slug: "log-analytics"
latest_feature_date: "2022-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
  - "https://docs.cloud.google.com/logging/docs/audit"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "log"
  - "analytics"
  - "lets"
  - "users"
  - "run"
  - "sql"
  - "queries"
  - "use"
---

# Log Analytics

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Log Analytics lets users run SQL queries on log data and use BigQuery to analyze logs.

## Extended Definition

Log Analytics lets users run SQL queries on log data and use BigQuery to analyze logs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- For more information about querying your logs, see Build queries in the Logs Explorer The Logs Explorer lets you view filter individual log entries.
- To display all audit logs, enter either of the following queries into the query-editor field, and then click Run query : logName:"cloudaudit.googleapis.com" protoPayload."@type"="type.googleapis.com/google.cloud.audit.AuditLog" To display the audit logs for a specific resource and audit log type, in the Query builder pane, do the following: In Resource type , select the Google Cloud resource whose audit logs you want to see.
- For more information about querying by using the Logs Explorer, see Build queries in the Logs Explorer . gcloud The Google Cloud CLI provides a command-line interface to the Logging API.
- When configuring your log sinks' filters, you need to specify the audit log types you want to route; for filtering examples, see Security logging queries .

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- Home Documentation Observability Cloud Logging Reference Send feedback OpsAnalyticsQuery Stay organized with collections Save and categorize content based on your preferences.
- This value is used to determine JSON extractions in generated SQL queries.
- A query builder configuration used in Log Analytics.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- To perform aggregate operations on your log entries, like counting the number of log entries that contain a specific pattern, upgrade the log bucket to use Observability Analytics, and then run queries from the Observability Analytics page of the Google Cloud console.
- Analyze results by using Observability Analytics You can aggregate, analyze, and chart your log data by using SQL queries in the Observability Analytics page when your project contains log buckets that are upgraded to use Observability Analytics.
- Saved queries: View your saved queries and queries that other users of the Google Cloud project have shared with you.
- For information about using SQL to write queries, see Query and view logs in Observability Analytics .

