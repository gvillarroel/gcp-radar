---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.951Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Distribution chart percentile overlay"
feature_slug: "distribution-chart-percentile-overlay"
latest_feature_date: "2021-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "distribution"
  - "chart"
  - "percentile"
  - "overlay"
  - "charts"
  - "can"
  - "display"
  - "optional"
---

# Distribution chart percentile overlay

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Distribution charts can display optional 50th, 95th, and 99th percentile overlay lines.

## Extended Definition

Distribution charts can display optional 50th, 95th, and 99th percentile overlay lines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Instead, the charts display "No data is available for the selected timeframe." This message isn't an error.
- Note: When a Google Cloud project isn't ingesting any billable metrics, these charts don't display data.
- It is possible have charts and alerting policies that refer to metrics with no data (inactive metrics) and to query such metrics; on the Metrics Management page, these metrics are considered used metrics, even though any read operations return no data.
- Before you begin To view the charts and logs included on the Metrics Management page, to create alerting policies, and to create metric-exclusion rules, you must have the correct authorization .

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- The chart settings let you compare current data to previous data, display outliers and percentiles, and display multiple metrics.
- Charts and tables that show metric data Log data and error groups Charts for alerting policies Information about alerts Text Events , such as a reboot or a crash, that affects the operation of a system.
- To complete these tasks, you can use the dashboard and charting services: To control what data you view and the display format for that data, create a custom dashboard .
- You can also save charts to a custom dashboard.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Explore metric data The charts and tables on your dashboard display golden signals and other metric data that is relevant for the resources used by your application, service, or workload.
- These charts also display event annotations , which can help you correlate data from different sources when you are troubleshooting an issue.
- The charts and other widgets display telemetry data and incident information.
- To open the flyout that displays both metric and log data, do one of the following: To filter log data only by the resource type and applicable variables, in the chart's toolbar, click more vert More chart options , and then select Inspect related logs .

