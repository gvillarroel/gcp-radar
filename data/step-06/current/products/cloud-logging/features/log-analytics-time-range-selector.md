---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.351Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Analytics time-range selector"
feature_slug: "log-analytics-time-range-selector"
latest_feature_date: "2023-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
keywords:
  - "log"
  - "analytics"
  - "time"
  - "range"
  - "selector"
  - "queries"
  - "can"
  - "filtered"
---

# Log Analytics time-range selector

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Log Analytics queries can be filtered with preset, custom, and relative time ranges using a time-range selector.

## Extended Definition

Log Analytics queries can be filtered with preset, custom, and relative time ranges using a time-range selector.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- The following occurs when you click manage search Analyze results : The time range in the Logs Explorer might be automatically adjusted so that there is meaningful log data in the Observability Analytics page.
- If a query doesn't use a timestamp expression, then the query uses the time-range selector as its time-range restriction.
- View logs by time range To specify a time range for the log entries that you want to view, use the time-range selector .
- You adjust the histogram timeline using the histogram's time controls or the time-range selector .

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Use the time-range selector The options in the time-range selector let you select from preset time options, specify a custom start and end time, or center the time range around a specific timestamp.
- If the query-editor field contains an expression with a timestamp, then the time-range selector is disabled, and the query uses the timestamp expression as its time-range restriction.
- View logs by time range There are two ways to display logs that were written in a specific time range: Use the time-range selector.
- If a query doesn't use a timestamp expression, then the query uses the time-range selector as its time-range restriction.

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- Examples: - ". (autoscaler. )$" will be converted to REGEXP EXTRACT(JSON VALUE(field),"request(. (autoscaler. )$)") in SQL. - "\(test value\)$" will be converted to REGEXP EXTRACT(JSON VALUE(field),"request(\(test value\)$)") in SQL. truncationGranularity string The truncation granularity when grouping by a time/date field.
- This can be either a date or a time granularity found at https://cloud.google.com/bigquery/docs/reference/standard-sql/timestamp functions#timestamp trunc granularity date and https://cloud.google.com/bigquery/docs/reference/standard-sql/timestamp functions#timestamp trunc granularity time respectively.
- Can be one of the BigQuery data types: - STRING - INT64 - FLOAT64 - BOOL - TIMESTAMP - DATE - RECORD - JSON parentPath string The dot-delimited path of the parent container that holds the target field.

