---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.293Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Analytics query builder"
feature_slug: "log-analytics-query-builder"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
keywords:
  - "log"
  - "analytics"
  - "query"
  - "builder"
  - "lets"
  - "users"
  - "build"
  - "edit"
---

# Log Analytics query builder

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Log Analytics query builder lets users build, edit, and run queries without writing SQL manually; The Log Analytics query builder lets users build queries in the Log Analytics page without manually writing SQL.

## Extended Definition

The Log Analytics query builder lets users build, edit, and run queries without writing SQL manually; The Log Analytics query builder lets users build queries in the Log Analytics page without manually writing SQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)

## Supporting Pages

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- A query builder configuration used in Log Analytics.
- The alias must be defined in the QueryBuilderConfig 's fieldSources list, otherwise the model is invalid. projectedField object ( ProjectedField ) A projected field option for when a user wants to use a field with some additional transformations such as casting or extractions.
- Use ProjectedField when you need more than just the raw source field name (for which you might use FieldSource directly in QueryBuilderConfig's fieldSources list if no transformations or specific operation type are needed).

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Query-editor field: Build advanced queries by using the Logging query language.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- A separate dialog opens with the following information: The pattern that was found The percentage of log entries that contain the pattern Example log entries that contain the pattern In this dialog, you can hide or show log entries: Hide similar log entries You can hide similar log entries, which lets you remove logs from your query results.
- The manage search Analyze results button is visible only when the log bucket that contains the log view you are querying has been upgraded to use Observability Analytics.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Write advanced queries using the Logging query language You can use the Logging query language to build more advanced queries in the Logs Explorer query-editor field: If you don't see the query-editor field in the Query pane, enable Show query .
- For example, the following two queries are the same: -"response successful" NOT "response successful" Construct queries with filter menus You can use the filter menus in the Query pane to add resource, log name, log severity, and correlation parameters to the query-editor field.
- Home Documentation Observability Cloud Logging Guides Send feedback Build and save queries by using the Logging query language Stay organized with collections Save and categorize content based on your preferences.
- If you added any search terms in the search field or selected any parameters in the filter menus, then those also appear in the query-editor field and are evaluated as part of your query expression.

