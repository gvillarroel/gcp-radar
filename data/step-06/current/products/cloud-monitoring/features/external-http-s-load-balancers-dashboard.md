---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.944Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "External HTTP(S) Load Balancers dashboard"
feature_slug: "external-http-s-load-balancers-dashboard"
latest_feature_date: "2021-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "external"
  - "http"
  - "load"
  - "balancers"
  - "dashboard"
  - "monitoring"
  - "provides"
  - "dedicated"
---

# External HTTP(S) Load Balancers dashboard

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring provides a dedicated dashboard with visualizations for understanding and troubleshooting external HTTP(S) load balancers.

## Extended Definition

Monitoring provides a dedicated dashboard with visualizations for understanding and troubleshooting external HTTP(S) load balancers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- For each metric, the table displays that metric's contribution to billable volume and provides links to to the alerting policies and custom dashboards associated with the metric, as shown in the following screenshot.
- Usage of the metrics Used metrics are metrics that have been queried in the last 30 days by the Cloud Monitoring API or other tools, or that are used in a custom dashboard or alerting policy.
- Metrics used or not used in a custom dashboard in the current Google Cloud project.These filters don't include metrics that are used in predefined dashboards provided by Cloud Monitoring.

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Layer 7 external and internal Application Load Balancers with HTTP or HTTPS traffic (Global, regional, and cross region) Traffic : Based on a Cloud Load Balancing metric type that records the request count, like https/request count .
- The dashboards that Application Monitoring creates display log and metric data, including the following golden signals, when that data includes application-specific labels: Traffic : Incoming request rates on the service or workload over the selected time period.
- For workloads that run on GKE, Google Cloud Observability might derive golden signals from the Prometheus metric http server request duration seconds , which is only available when you instrument your application by using OpenTelemetry.
- P95 latency : Based on a Cloud Load Balancing metric type that records total latencies, like https/total latencies .

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Monitoring services Cloud Monitoring provides different services that you can use to understand the health and performance of your applications, and of the other Google Cloud services that you use.
- The alerting, testing, and visualization services provided by Cloud Monitoring help you answer important questions like the following: What is the load on my service?
- For example, for an App Hub application, dashboards are created for the application and for each of its services and workloads.
- Cloud Monitoring provides both Google Cloud console and API support for most of its services.

