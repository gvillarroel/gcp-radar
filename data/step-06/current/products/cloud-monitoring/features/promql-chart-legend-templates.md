---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.758Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "PromQL chart legend templates"
feature_slug: "promql-chart-legend-templates"
latest_feature_date: "2026-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "promql"
  - "chart"
  - "legend"
  - "templates"
  - "monitoring"
  - "lets"
  - "you"
  - "configure"
---

# PromQL chart legend templates

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring lets you configure legend templates for PromQL-formatted charts.

## Extended Definition

Cloud Monitoring lets you configure legend templates for PromQL-formatted charts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- The following screenshot illustrates a chart with this configuration: Pricing To learn about pricing for Cloud Monitoring, see the Google Cloud Observability pricing page.
- When these integrations exist, you might see a panel that lists recommended alerts, or you might see a button on a chart that lets you create an alerting policy.
- Cloud Monitoring API: The API supports Prometheus Query Language (PromQL) and Monitoring filter expressions.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before you can use Application Monitoring, make sure that you configure your App Hub host project or management project.
- List applications To list the applications you have registered with App Hub, along with information like the number of incidents and the application's location, criticality, and environment, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- The following screenshot illustrates the dashboard for a workload: The registration status of a service or workload affects what data Application Monitoring displays on the dashboard for the service or workload: Registered : Application Monitoring uses the application-specific labels and attributes that supported infrastructure and instrumented applications attach to the telemetry they generate.
- Investigate an application To investigate the health of an application, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- To filter for any metrics with an id label matching this pattern, use the following query: example value count{id= "id. "} For more information about using PromQL in Metrics Explorer and Cloud Monitoring charts, see PromQL in Cloud Monitoring .
- The following sections describe the query tools available in Cloud Monitoring with Metrics Explorer: PromQL Monitoring filters You can create Cloud Monitoring dashboards and alerting policies for your metrics.
- You can use all of the tools provided by Cloud Monitoring, including PromQL, to view and analyze the data collected by the Prometheus receiver.
- For example, you can chart data by using Metrics Explorer , as described in Google Cloud console for Monitoring .

