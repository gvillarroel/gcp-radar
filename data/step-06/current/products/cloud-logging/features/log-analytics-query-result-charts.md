---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.343Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Analytics query result charts"
feature_slug: "log-analytics-query-result-charts"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
keywords:
  - "log"
  - "analytics"
  - "query"
  - "result"
  - "charts"
  - "can"
  - "display"
  - "results"
---

# Log Analytics query result charts

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Log Analytics can display query results as charts in the Log Analytics page.

## Extended Definition

Log Analytics can display query results as charts in the Log Analytics page.

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
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GROUP BY Group the query results by the distinct values of this field.
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- This equates to the WHERE clause in SQL. fieldSources[] object ( FieldSource ) Defines the items to include in the query result, analogous to a SQL SELECT clause. limit string ( int64 format) The limit to use for the query.
- Home Documentation Observability Cloud Logging Reference Send feedback OpsAnalyticsQuery Stay organized with collections Save and categorize content based on your preferences.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- For information about creating charts from your query results and saving charts to a custom dashboard, see Chart query results with Observability Analytics .
- To select which parts of the timestamp to display, click the settings Preferences menu, select Format , and then select one of the following options: Date, time, and timezone Date and time (default) Time only Find patterns in your logs by using summary fields Suppose you're looking through the log entries in your query results and want to quickly skim the results by a certain LogEntry field.
- For example, if the toolbar displays N log view , then the manage search Analyze results button is shown when the log bucket for at least one of the selected log views is upgraded to use Observability Analytics.
- The manage search Analyze results button is visible only when the log bucket that contains the log view you are querying has been upgraded to use Observability Analytics.

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you add the following conditions to your query, the results pane displays exactly the log entries in the indicated 30-minute period and you won't be able to scroll outside of that date range: timestamp >= "2023-11-29T23:00:00Z" timestamp When writing a query with a timestamp, you must use dates and times in the format shown previously.
- For example, the following functions match the string "hello world": SEARCH("hello world") SEARCH("Hello World") SEARCH("HELLO WORLD") Because backticks are used in the following functions, they produce different results: SEARCH("hello world") SEARCH("world hello") The Logging query language supports different ways that you can search your log data.
- For example, a field holding measurements might have an array of numbers: {8.5, 9, 6} When comparisons are performed and [FIELD NAME] is an array field, each member of the array is compared to [VALUE] and the results are joined together using the OR operator.
- For example, if you want to display all log entries that have a field that contains cat and a field that contains either hat or bat , write the query as: ("cat" AND ("hat" OR "bat")) In this case, there are three global restrictions: cat , hat and bat .

