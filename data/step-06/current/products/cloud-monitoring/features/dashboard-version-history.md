---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.788Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Dashboard version history"
feature_slug: "dashboard-version-history"
latest_feature_date: "2025-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "dashboard"
  - "version"
  - "history"
  - "monitoring"
  - "dashboards"
  - "provide"
  - "so"
  - "you"
---

# Dashboard version history

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring dashboards provide version history so you can review changes made to a dashboard.

## Extended Definition

Cloud Monitoring dashboards provide version history so you can review changes made to a dashboard.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Metrics used or not used in a custom dashboard in the current Google Cloud project.These filters don't include metrics that are used in predefined dashboards provided by Cloud Monitoring.
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- For each metric, the table displays that metric's contribution to billable volume and provides links to to the alerting policies and custom dashboards associated with the metric, as shown in the following screenshot.
- The usage status for metrics is computed every 24 hours, to reflect the most recent query history and changes to dashboards and alerting policies.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- The following sections describe the query tools available in Cloud Monitoring with Metrics Explorer: PromQL Monitoring filters You can create Cloud Monitoring dashboards and alerting policies for your metrics.
- You must design and create any Cloud Monitoring dashboards you need, based on the set of metrics you are ingesting and on your business needs.
- You can also create Cloud Monitoring dashboards and alerting policies to monitor your Prometheus metrics.
- You can use the following pattern to add labels staticLabel1 and staticLabel2 to all ingested metrics: metric relabel configs: - source labels: [ address ] action: replace replacement: ' STATIC VALUE 1 ' target label: staticLabel1 - source labels: [ address ] action: replace replacement: ' STATIC VALUE 2 ' target label: staticLabel2 The following version of the Prometheus receiver for the JSON Exporter example uses these configuration patterns to do the following: Set the zone label from the value of the meta gce zone meta label provided by the Ops Agent.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- The dashboards created by Google Cloud might provide you enough information to complete an investigation.
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- Cloud Monitoring services Cloud Monitoring provides different services that you can use to understand the health and performance of your applications, and of the other Google Cloud services that you use.
- Data visualization As you instantiate Google Cloud resources or register applications with App Hub , the dashboard service automatically creates Google Cloud-managed dashboards .

