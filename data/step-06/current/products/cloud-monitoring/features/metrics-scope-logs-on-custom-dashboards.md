---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.930Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Metrics scope logs on custom dashboards"
feature_slug: "metrics-scope-logs-on-custom-dashboards"
latest_feature_date: "2021-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "metrics"
  - "scope"
  - "logs"
  - "custom"
  - "dashboards"
  - "can"
  - "display"
  - "project"
---

# Metrics scope logs on custom dashboards

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Custom dashboards can display project-scoped log entries for all projects in a metrics scope.

## Extended Definition

Custom dashboards can display project-scoped log entries for all projects in a metrics scope.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: The Metrics Management page lists only alerting policies and custom dashboards defined in the current project; metrics listed with no alerting policies or custom dashboards might have alerting policies or custom dashboards in another project in your metrics scope.
- To view alerting policies or custom dashboards for a metric in your metrics scope but defined in a different project, use the project picker to select the Google Cloud project that stores the metric.
- To view custom dashboards for a metric in your metrics scope but defined in a different project, use the project picker to select the Google Cloud project that stores the metric.
- You can list metrics that appear in no alerting policy or in no custom dashboard defined in the current Google Cloud project by selecting the No alert policies or No custom dashboards quick filter.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- The Application Logs and Logs sections of a dashboard display log entries that match a filter and are stored by the resources listed in the default log scope of your App Hub host project or management project.
- The displayed data can be stored in any project listed by the metrics scope of the your App Hub host project or management project.
- Explore trace data Note: If your dashboards aren't displaying the trace data that you expect, then you might need to configure the default trace scope or you might need additional Identity and Access Management permissions.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monitor metrics for multiple Google Cloud projects To view and monitor the time-series data for multiple Google Cloud projects and AWS accounts through a single interface, configure a multi-project metrics scope .
- For information about how to configure our Google Cloud project to view metrics for multiple Google Cloud projects and AWS accounts, see Metrics scopes overview .
- You can configure the metrics scope to include time-series data from other Google Cloud projects and from AWS accounts.
- For information about how to modify a metrics scope, see Configure a metrics scope for multiple projects .

