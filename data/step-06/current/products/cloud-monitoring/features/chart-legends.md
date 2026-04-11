---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.145Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Chart Legends"
feature_slug: "chart-legends"
latest_feature_date: "2018-09-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "chart"
  - "legends"
  - "multiple"
  - "labeled"
  - "columns"
  - "sorting"
  - "scrolling"
  - "and"
---

# Chart Legends

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Chart legends support multiple labeled columns, sorting, scrolling, and improved resizing.

## Extended Definition

Chart legends support multiple labeled columns, sorting, scrolling, and improved resizing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Feature Faster chart legends : Charts involving custom and logs-based metrics now have faster legends that include instance names with the metric name where available.
- July 20, 2023 Change We made improvements to the dashboard building experience: Improved the performance Simplified the layout and expanded the configurable settings Improved the widget drag and drop experience Enhanced the text widget Unified the chart-configuration experience between dashboards and the Metrics Explorer For more information, see Add charts and tables to a custom dashboard .
- Change The improved dashboard building experience is now GA: Improved the performance Simplified the layout and expanded the configurable settings Improved the widget drag and drop experience Enhanced the text widget Unified the chart-configuration experience between dashboards and the Metrics Explorer For more information, see Add charts and tables to a custom dashboard .
- November 03, 2022 Feature You can now add table widgets to custom dashboards that let you limit the number of table rows, persiste specific columns, display only those rows with the highest, or lowest values, and that display a visual indicator of the value as compared to the range of possible values.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- For examples that start with the Namespace Volume Ingestion chart and use Metrics Explorer to perform ingestion-volume attribution, see the following: Identify high-volume metrics Identify high-volume namespaces For more information about using Metrics Explorer to analyze data, including actions like comparing the current month's behavior to the last month's behavior, see Explore charted data .
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- This chart can tell you which projects are sending the most data, and if any project is sending an increasing or decreasing amount of data. ( Billable samples only ) To find the namespaces that are sending metrics with the largest contributions to the billable values, use the Namespace Volume Ingestion chart.
- It is possible have charts and alerting policies that refer to metrics with no data (inactive metrics) and to query such metrics; on the Metrics Management page, these metrics are considered used metrics, even though any read operations return no data.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- The chart settings let you compare current data to previous data, display outliers and percentiles, and display multiple metrics.
- Monitor metrics for multiple Google Cloud projects To view and monitor the time-series data for multiple Google Cloud projects and AWS accounts through a single interface, configure a multi-project metrics scope .
- Charts and tables that show metric data Log data and error groups Charts for alerting policies Information about alerts Text Events , such as a reboot or a crash, that affects the operation of a system.
- To complete these tasks, you can use the dashboard and charting services: To control what data you view and the display format for that data, create a custom dashboard .

