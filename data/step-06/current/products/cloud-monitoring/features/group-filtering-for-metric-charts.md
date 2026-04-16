---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.057Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Group Filtering for Metric Charts"
feature_slug: "group-filtering-for-metric-charts"
latest_feature_date: "2016-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "group"
  - "filtering"
  - "metric"
  - "charts"
  - "custom"
  - "logs"
  - "based"
  - "filter"
---

# Group Filtering for Metric Charts

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Custom and logs-based metric charts support a group filter.

## Extended Definition

Custom and logs-based metric charts support a group filter.

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
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- You can list metrics that appear in no alerting policy or in no custom dashboard defined in the current Google Cloud project by selecting the No alert policies or No custom dashboards quick filter.
- Before you begin To view the charts and logs included on the Metrics Management page, to create alerting policies, and to create metric-exclusion rules, you must have the correct authorization .
- Metrics used or not used in a custom dashboard in the current Google Cloud project.These filters don't include metrics that are used in predefined dashboards provided by Cloud Monitoring.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- To open the flyout that displays both metric and log data, do one of the following: To filter log data only by the resource type and applicable variables, in the chart's toolbar, click more vert More chart options , and then select Inspect related logs .
- For applications, the filter is similar to the following: -- Application logs (apphub application location=global) (apphub application id=my-app) For services and workloads, the filter contains additional clauses.
- The Application Logs and Logs sections of a dashboard display log entries that match a filter and are stored by the resources listed in the default log scope of your App Hub host project or management project.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Charts and tables that show metric data Log data and error groups Charts for alerting policies Information about alerts Text Events , such as a reboot or a crash, that affects the operation of a system.
- Log-based metrics that record numeric information about the logs written to Cloud Logging .
- If you install the Ops Agent on your Compute Engine virtual machines (VMs), then you can collect metrics and logs from your applications and from third-party applications.
- Google-defined log-based metrics include counts of the errors that your service detects and the total number of log entries received by your Google Cloud project.

