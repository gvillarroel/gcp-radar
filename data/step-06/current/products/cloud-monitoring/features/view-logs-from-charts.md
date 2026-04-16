---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.073Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "View Logs from Charts"
feature_slug: "view-logs-from-charts"
latest_feature_date: "2015-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "view"
  - "logs"
  - "charts"
  - "include"
  - "option"
  - "settings"
  - "menu"
---

# View Logs from Charts

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Charts include a View Logs option in their settings menu.

## Extended Definition

Charts include a View Logs option in their settings menu.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- To open the flyout that displays both metric and log data, do one of the following: To filter log data only by the resource type and applicable variables, in the chart's toolbar, click more vert More chart options , and then select Inspect related logs .
- View chart configuration To view details like the metric type and the aggregation options for a chart that displays metric data, go to the toolbar of a chart or table, and then click info Information .
- Logs View Accessor ( roles/logging.viewAccessor ) on the log views listed in the default log scope of your App Hub host project or management project.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To view the charts and logs included on the Metrics Management page, to create alerting policies, and to create metric-exclusion rules, you must have the correct authorization .
- To analyze any of these charts in more detail, click more vert More options and select View in Metrics Explorer .
- To view audit logs for a specific metric, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- To get the permissions that you need to view audit logs, ask your administrator to grant you the Private Logs Viewer ( roles/logging.privateLogViewer ) IAM role on your project.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of a points array with two values: "points": [ { "interval": { "startTime": "2020-07-27T20:20:21.597143Z", "endTime": "2020-07-27T20:20:21.597143Z" }, "value": { "doubleValue": 0.473005 } }, { "interval": { "startTime": "2020-07-27T20:19:21.597239Z", "endTime": "2020-07-27T20:19:21.597239Z" }, "value": { "doubleValue": 0.473025 } }, ], To understand the meaning of a value, you need to refer to the other data included in the time series and to the definitions of that data.
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- Monitor metrics for multiple Google Cloud projects To view and monitor the time-series data for multiple Google Cloud projects and AWS accounts through a single interface, configure a multi-project metrics scope .
- Charts and tables that show metric data Log data and error groups Charts for alerting policies Information about alerts Text Events , such as a reboot or a crash, that affects the operation of a system.

