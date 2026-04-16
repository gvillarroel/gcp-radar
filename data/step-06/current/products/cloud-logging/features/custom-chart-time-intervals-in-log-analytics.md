---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.339Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Custom chart time intervals in Log Analytics"
feature_slug: "custom-chart-time-intervals-in-log-analytics"
latest_feature_date: "2023-11-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/logs-based-metrics"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
keywords:
  - "custom"
  - "chart"
  - "time"
  - "intervals"
  - "log"
  - "analytics"
  - "charts"
  - "specified"
---

# Custom chart time intervals in Log Analytics

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Log Analytics charts support custom time intervals specified in minutes, hours, or days.

## Extended Definition

Log Analytics charts support custom time intervals specified in minutes, hours, or days.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)

## Supporting Pages

### Log-based metrics overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It also simplifies the process of creating charts and alerting policies, as there is no ambiguity as to which time-series data is charted or monitored.
- For these charts and alerting policies, you can use labels to filter or combine time series.
- Charts and alerting policies in Cloud Monitoring You can use both system and user-defined log-based metrics in Cloud Monitoring to create charts and alerting policies.
- For information about distributions, including their format within a time series and how they are visualized, see Charting distribution metrics .

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- Examples: - ". (autoscaler. )$" will be converted to REGEXP EXTRACT(JSON VALUE(field),"request(. (autoscaler. )$)") in SQL. - "\(test value\)$" will be converted to REGEXP EXTRACT(JSON VALUE(field),"request(\(test value\)$)") in SQL. truncationGranularity string The truncation granularity when grouping by a time/date field.
- This can be either a date or a time granularity found at https://cloud.google.com/bigquery/docs/reference/standard-sql/timestamp functions#timestamp trunc granularity date and https://cloud.google.com/bigquery/docs/reference/standard-sql/timestamp functions#timestamp trunc granularity time respectively.
- Examples: jsonPayload.labels.message jsonPayload.request id httpRequest.status jsonPayload.\ my-custom-field.value jsonPayload.my key with spaces.data` aliasRef string The alias name for a field that has already been aliased within a different ProjectedField type elsewhere in the query model.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- For information about creating charts from your query results and saving charts to a custom dashboard, see Chart query results with Observability Analytics .
- Set preferences for viewing log data To customize how your logs data is presented in the query results, click the settings Preferences button, and select View , Format , or Manage summary fields : To show or hide the Timeline and Fields panes, to hide summary chips in your query results, or to change the sorting order of your logs, select View .
- The copied URL has the corresponding absolute time range represented by the time range of your query; for example, 7:49:37 PM - 8:49:37 PM . settings Preferences : Adjust the view of the Logs Explorer page, and customize the format of your query results.
- Analyze results by using Observability Analytics You can aggregate, analyze, and chart your log data by using SQL queries in the Observability Analytics page when your project contains log buckets that are upgraded to use Observability Analytics.

