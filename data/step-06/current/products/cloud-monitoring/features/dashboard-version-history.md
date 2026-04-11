---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.083Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Dashboard version history"
feature_slug: "dashboard-version-history"
latest_feature_date: "2025-03-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
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
Coverage: LOW

## Step 02 Summary

Cloud Monitoring dashboards provide version history so you can review changes made to a dashboard.

## Extended Definition

Cloud Monitoring dashboards provide version history so you can review changes made to a dashboard.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- For information about dashboards, see the following: Create and manage custom dashboards Install a dashboard template Import Grafana dashboards April 09, 2025 Feature Application Monitoring lets you monitor the resources and infrastructure from the perspective of an App Hub application.
- July 30, 2024 Feature You can now troubleshoot Compute Engine issues involving host events, MIG autoscaling and health-check failures, resource-availability errors, and VM performance by using the new "interactive playbook" dashboards in Cloud Monitoring.
- December 16, 2025 Other On December 15, 2025, it was announced that your Application Monitoring dashboards will display the trace spans that are associated with your registered App Hub applications.
- Change The Metrics management page in Cloud Monitoring now lets you create alerting policies and charts for metrics that have no associated alerting policies or custom dashboards.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- You can also create Cloud Monitoring dashboards and alerting policies to monitor your Prometheus metrics.
- You can use the following pattern to add labels staticLabel1 and staticLabel2 to all ingested metrics: metric relabel configs: - source labels: [ address ] action: replace replacement: ' STATIC VALUE 1 ' target label: staticLabel1 - source labels: [ address ] action: replace replacement: ' STATIC VALUE 2 ' target label: staticLabel2 The following version of the Prometheus receiver for the JSON Exporter example uses these configuration patterns to do the following: Set the zone label from the value of the meta gce zone meta label provided by the Ops Agent.
- The following sections describe the query tools available in Cloud Monitoring with Metrics Explorer: PromQL Monitoring filters You can create Cloud Monitoring dashboards and alerting policies for your metrics.
- You must design and create any Cloud Monitoring dashboards you need, based on the set of metrics you are ingesting and on your business needs.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- Data visualization As you instantiate Google Cloud resources or register applications with App Hub , the dashboard service automatically creates Google Cloud-managed dashboards .
- These dashboards show curated information that helps you understand the health of your resources and applications.
- The dashboards created by Google Cloud might provide you enough information to complete an investigation.

