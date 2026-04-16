---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.331Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Analytics charting"
feature_slug: "log-analytics-charting"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
keywords:
  - "log"
  - "analytics"
  - "charting"
  - "supports"
  - "query"
  - "results"
  - "including"
  - "selecting"
---

# Log Analytics charting

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Log Analytics supports charting query results, including selecting no aggregation for a chart.

## Extended Definition

Log Analytics supports charting query results, including selecting no aggregation for a chart.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)

## Supporting Pages

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- Home Documentation Observability Cloud Logging Reference Send feedback OpsAnalyticsQuery Stay organized with collections Save and categorize content based on your preferences.
- GROUP BY Group the query results by the distinct values of this field.
- A query builder configuration used in Log Analytics.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- The manage search Analyze results button is visible only when the log bucket that contains the log view you are querying has been upgraded to use Observability Analytics.
- For information about creating charts from your query results and saving charts to a custom dashboard, see Chart query results with Observability Analytics .
- To go to the Observability Analytics page from the Logs Explorer, in the Query results toolbar, click manage search Analyze results .

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following functions match the string "hello world": SEARCH("hello world") SEARCH("Hello World") SEARCH("HELLO WORLD") Because backticks are used in the following functions, they produce different results: SEARCH("hello world") SEARCH("world hello") The Logging query language supports different ways that you can search your log data.
- For example, if you add the following conditions to your query, the results pane displays exactly the log entries in the indicated 30-minute period and you won't be able to scroll outside of that date range: timestamp >= "2023-11-29T23:00:00Z" timestamp When writing a query with a timestamp, you must use dates and times in the format shown previously.
- The log entries must have severity of at least ERROR , which is equivalent to selecting ERROR in the query interface's severity menu. logName = "projects/[PROJECT ID]/logs/cloudaudit.googleapis.com%2Factivity" Finds all the Admin Activity audit log entries in the project [PROJECT ID] .
- Examples querying logs using regular expressions Query type Example Standard query sourceLocation.file = "foo" Query with case-insensitive search labels.subnetwork name = "(?i)foo" Query containing quotation marks jsonPayload.message = "field1=\"bar. \"" Query using a boolean or labels.pod name = "(foo bar)" Query using anchors logName = "/my%2Flog$" Query not matching a pattern labels.pod name ! "foo" Query using boolean operator labels.env = ("^prod. server" OR "^staging. server") Query that begins with a value logName = "^foo" Query that ends with a value logName = "foo$" Note: For a detailed explanation of the RE2 syntax, see the RE2 wiki page .

