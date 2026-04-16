---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.008Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Chart Legends"
feature_slug: "chart-legends"
latest_feature_date: "2018-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "chart"
  - "legends"
  - "multiple"
  - "labeled"
  - "columns"
  - "sorting"
  - "scrolling"
  - "improved"
---

# Chart Legends

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Chart legends support multiple labeled columns, sorting, scrolling, and improved resizing.

## Extended Definition

Chart legends support multiple labeled columns, sorting, scrolling, and improved resizing.

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
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- You see a set of charts like the following: By default, chart legends are collapsed.
- For examples that start with the Namespace Volume Ingestion chart and use Metrics Explorer to perform ingestion-volume attribution, see the following: Identify high-volume metrics Identify high-volume namespaces For more information about using Metrics Explorer to analyze data, including actions like comparing the current month's behavior to the last month's behavior, see Explore charted data .
- View the volume of excluded metrics To see the volume of excluded bytes or samples as a chart in Metrics Explorer, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- The chart settings let you compare current data to previous data, display outliers and percentiles, and display multiple metrics.
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- Monitor metrics for multiple Google Cloud projects To view and monitor the time-series data for multiple Google Cloud projects and AWS accounts through a single interface, configure a multi-project metrics scope .
- Charts and tables that show metric data Log data and error groups Charts for alerting policies Information about alerts Text Events , such as a reboot or a crash, that affects the operation of a system.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- For each supported App Hub region , this page lists at most 100 discovered services and 100 discovered workloads: The App Hub Type column displays the App Hub registration type : Service ( ) Workload ( ) The Functional Type column displays the App Hub functional type : Agent ( robot 2 ) MCP server ( ) From the Services and Workloads tab, you can do all of the following: Modify the data the table displays by using the view column Columns button.
- To open the flyout that displays both metric and log data, do one of the following: To filter log data only by the resource type and applicable variables, in the chart's toolbar, click more vert More chart options , and then select Inspect related logs .
- Discovered : Services and workloads that you can register to an application because they are part of the application management boundary and that aren't registered to any other application or can be registered to multiple applications.
- View chart configuration To view details like the metric type and the aggregation options for a chart that displays metric data, go to the toolbar of a chart or table, and then click info Information .

