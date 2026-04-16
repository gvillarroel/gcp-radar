---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.056Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Chart Snapshots"
feature_slug: "chart-snapshots"
latest_feature_date: "2016-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "chart"
  - "snapshots"
  - "charts"
  - "can"
  - "downloaded"
  - "png"
  - "images"
---

# Chart Snapshots

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Charts can be downloaded as PNG images.

## Extended Definition

Charts can be downloaded as PNG images.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- It is possible have charts and alerting policies that refer to metrics with no data (inactive metrics) and to query such metrics; on the Metrics Management page, these metrics are considered used metrics, even though any read operations return no data.
- Before you begin To view the charts and logs included on the Metrics Management page, to create alerting policies, and to create metric-exclusion rules, you must have the correct authorization .
- To determine how many of the active billable metrics are being queried or used in charts or alerting policies, refer to the Metric Usage scorecard.
- Reads from Metrics Explorer or charts on custom dashboards are "console" reads, and API reads from other sources are "other".

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Explore metric data The charts and tables on your dashboard display golden signals and other metric data that is relevant for the resources used by your application, service, or workload.
- For example, if the resource type is determined to be cloud run-revision , then charts might filter the data by the values of the location and service name labels.
- These charts also display event annotations , which can help you correlate data from different sources when you are troubleshooting an issue.
- Charts on this tab automatically aggregate metric data for the services and workloads in your application.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Charts and tables that show metric data Log data and error groups Charts for alerting policies Information about alerts Text Events , such as a reboot or a crash, that affects the operation of a system.
- You can also save charts to a custom dashboard.
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- The following screenshot illustrates a chart with this configuration: Pricing To learn about pricing for Cloud Monitoring, see the Google Cloud Observability pricing page.

