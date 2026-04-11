---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.518Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Analytics query builder"
feature_slug: "log-analytics-query-builder"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "log"
  - "analytics"
  - "query"
  - "builder"
  - "the"
  - "lets"
  - "users"
  - "build"
---

# Log Analytics query builder

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The Log Analytics query builder lets users build, edit, and run queries without writing SQL manually; The Log Analytics query builder lets users build queries in the Log Analytics page without manually writing SQL.

## Extended Definition

The Log Analytics query builder lets users build, edit, and run queries without writing SQL manually; The Log Analytics query builder lets users build queries in the Log Analytics page without manually writing SQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- A query builder configuration used in Log Analytics.
- The alias must be defined in the QueryBuilderConfig 's fieldSources list, otherwise the model is invalid. projectedField object ( ProjectedField ) A projected field option for when a user wants to use a field with some additional transformations such as casting or extractions.
- Use ProjectedField when you need more than just the raw source field name (for which you might use FieldSource directly in QueryBuilderConfig's fieldSources list if no transformations or specific operation type are needed).

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Write advanced queries using the Logging query language You can use the Logging query language to build more advanced queries in the Logs Explorer query-editor field: If you don't see the query-editor field in the Query pane, enable Show query .
- Home Documentation Observability Cloud Logging Guides Send feedback Build and save queries by using the Logging query language Stay organized with collections Save and categorize content based on your preferences.
- The Query pane provides multiple ways to build and run query expressions: Search for text across all log fields.
- The queries you build are written in the Logging query language .

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- A separate dialog opens with the following information: The pattern that was found The percentage of log entries that contain the pattern Example log entries that contain the pattern In this dialog, you can hide or show log entries: Hide similar log entries You can hide similar log entries, which lets you remove logs from your query results.
- The manage search Analyze results button is visible only when the log bucket that contains the log view you are querying has been upgraded to use Observability Analytics.
- The Observability Analytics page opens in a new tab and automatically translates the current Logging query language query into a SQL query.
- In the query pane, you can build and refine queries by using the following features: Select which resources are searched for log entries .

