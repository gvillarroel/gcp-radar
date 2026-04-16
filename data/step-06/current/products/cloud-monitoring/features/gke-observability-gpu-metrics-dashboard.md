---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.842Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "GKE Observability GPU metrics dashboard"
feature_slug: "gke-observability-gpu-metrics-dashboard"
latest_feature_date: "2023-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring"
keywords:
  - "gke"
  - "observability"
  - "gpu"
  - "metrics"
  - "dashboard"
  - "feature"
  - "adds"
  - "cluster"
---

# GKE Observability GPU metrics dashboard

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

This feature adds a GPU metrics dashboard to the GKE cluster Observability tab when GPU nodes are present.

## Extended Definition

This feature adds a GPU metrics dashboard to the GKE cluster Observability tab when GPU nodes are present.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)

## Supporting Pages

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- The Cloud Monitoring Metrics Management page provides information that can help you control the amount you spend on billable metrics without affecting observability.
- You can install the Ops Agent on Managed Service for Apache Spark clusters that use image version 2.2 and later to collect syslog logs and host metrics.
- Google Kubernetes Engine node instances: GKE on Google Cloud clusters are configured to collect logs and metrics with Logging and Monitoring by default.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Unused billable metrics represent possible observability gaps that might be filled by creating custom dashboards or alerting policies, or opportunities to reduce costs by excluding the metric entirely.
- If you have metrics that aren't used in an alerting policy or a custom dashboard and are never queried, then you might be paying for metrics and not be getting any observability benefit from them.
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.

### "Instrument an application for Application Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Use Google Cloud Managed Service for Prometheus on GKE To have Google Cloud Observability attach application labels to metric data generated by your application's workloads that runs on Google Kubernetes Engine clusters, do the following: Use Google Cloud Managed Service for Prometheus with managed collection .
- Add application labels to metric data Google Cloud Observability attempts to identify the source of Prometheus metrics by comparing the attributes attached to Prometheus metrics that are sent to your project with data returned from the App Hub API.
- Instead, Google Cloud Observability uses OpenTelemetry resource attributes and the App Hub API to identify the App Hub application associated with a span, and then it adds the application-specific attributes before storing the span.
- Metric data from instrumentation you added to your applications can include the following metric labels: metric.labels.apphub application {container,id,location} metric.labels.apphub workload {criticality type,environment type,id} Trace spans generated by instrumentation you added to your applications can include the following resource attributes: gcp.apphub.application.{container,id,location} gcp.apphub.{workload,service}.{criticality type,environment type,id} About OpenTelemetry HTTP server metrics There are no system metrics for workloads that run on Google Kubernetes Engine that can report the traffic level, server error rate, or the latency for HTTP requests.

