---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.073Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Kubernetes workload dashboards L4 and L7 traffic metrics"
feature_slug: "kubernetes-workload-dashboards-l4-and-l7-traffic-metrics"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
keywords:
  - "kubernetes"
  - "workload"
  - "dashboards"
  - "l4"
  - "and"
  - "l7"
  - "traffic"
  - "metrics"
---

# Kubernetes workload dashboards L4 and L7 traffic metrics

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Application Monitoring dashboards for Kubernetes workloads can display both L4 and L7 traffic metrics when available.

## Extended Definition

Application Monitoring dashboards for Kubernetes workloads can display both L4 and L7 traffic metrics when available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- To learn more, see the following: List registered and discovered services and workloads Application Monitoring overview View application telemetry April 02, 2026 Feature Application Monitoring has added support for the following resources: Vertex AI Workbench GKE Gateway GKE Ingress Layer 7 cross-regional Application Load Balancers Additionally, dashboards for Kubernetes workloads display L4 and L7 traffic metrics, when both are available.
- To learn more, see the following: Correlate metric and log data Explore application telemetry August 25, 2025 Feature Your Application Monitoring dashboards will display latency, error rates, and traffic level for workloads deployed on Google Kubernetes Engine, when you instrument your application with OpenTelemetry.
- October 04, 2021 Feature GKE version 1.20.8-gke.2100 or later offers a Preview of a fully managed metric collection pipeline to scrape Prometheus-style metrics exposed by any GKE workload and send those metrics to Cloud Monitoring for dashboards, alerts, and SLOs.
- Feature Kubernetes Engine's Clusters and Workloads dashboards now provide an Operations menu.

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- When both the L7 and L4 traffic metrics are available, the L7 metrics appear on the summary pages but the traffic chart contains tabs, which let you view both metrics.
- The dashboards that Application Monitoring creates display log and metric data, including the following golden signals, when that data includes application-specific labels: Traffic : Incoming request rates on the service or workload over the selected time period.
- Golden signals for Kubernetes For Kubernetes DaemonSets, Deployments, and StatefulSets, Google Cloud Observability uses the following metric data to derive values for golden signals, when that metric data is available: Traffic : service/server/request count .
- On a dashboard, you might see that the chart that displays traffic information contains two tabs: The tab labeled Traffic (Requests) displays networking L7 traffic data and the units are requests per second.

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- Trivial PromQL queries for the example metrics look like the following: workload googleapis com:otlp test gauge{monitored resource="gce instance"} workload googleapis com:otlp test cumulative{monitored resource="gce instance"} The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.gauge metric: The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.cumulative metric: View metric usage and diagnostics in Cloud Monitoring The Cloud Monitoring Metrics Management page provides information that can help you control the amount you spend on billable metrics without affecting observability.
- Monitoring API: When you use the Monitoring API to ingest your application's metrics, each metric is handled as follows: The OTLP metric name is prefixed with the string workload.googleapis.com/ , unless the OTLP metric name already contains this string or another valid metric domain, like custom.googleapis.com .
- After the Ops Agent has collected your metrics, you can use the features of Cloud Monitoring, including charts, dashboards, and alerting policies, to monitor your metrics.

