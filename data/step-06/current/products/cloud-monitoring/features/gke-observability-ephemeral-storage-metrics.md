---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.104Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "GKE Observability ephemeral storage metrics"
feature_slug: "gke-observability-ephemeral-storage-metrics"
latest_feature_date: "2023-05-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
keywords:
  - "gke"
  - "observability"
  - "ephemeral"
  - "storage"
  - "metrics"
  - "the"
  - "tab"
  - "includes"
---

# GKE Observability ephemeral storage metrics

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The GKE Observability tab includes ephemeral storage metrics for clusters.

## Extended Definition

The GKE Observability tab includes ephemeral storage metrics for clusters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- May 26, 2023 Feature Observability for Google Kubernetes Engine : The Observability tab for each of your GKE clusters now includes metrics for ephemeral storage.
- Feature Observability for Google Kubernetes Engine: Charts on the Observability tab for each of your GKE clusters and workloads now includes an optional fleet ID filter, where applicable.
- November 07, 2023 Feature Observability for Google Kubernetes Engine: The Observability tab for a GKE deployment now shows application performance metrics if the metrics are available.
- January 16, 2024 Feature Observability for Google Kubernetes Engine: You can now enable the package of kube state metrics from the Observability tab of a GKE deployment.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- The following meta labels are available on targets for you to use in the relabel configs section: meta gce instance id : the numeric ID of the Compute Engine instance (local) meta gce instance name : the name of the Compute Engine instance (local); the Ops Agent automatically places this value in the mutable instance name label on your metrics. meta gce machine type : full or partial URL of the machine type of the instance; the Ops Agent automatically places this value in the mutable machine type label on your metrics. meta gce metadata NAME : each metadata item of the instance meta gce network : the network URL of the instance meta gce private ip : the private IP address of the instance meta gce interface ipv4 NAME : IPv4 address of each named interface meta gce project : the Google Cloud project in which the instance is running (local) meta gce public ip : the public IP address of the instance, if present meta gce tags : comma separated list of instance tags meta gce zone : the Compute Engine zone URL in which the instance is running The values of these labels are set when the Ops Agent starts.
- The estimate is based on the following factors: Number of scalar metrics; each value is one sample Number of distribution metrics; each histogram counts as (2 + number of buckets in the histogram) samples Sampling frequency of each metric Number of hosts from which the metrics are sampled For more information about pricing, see Google Cloud Observability pricing .
- Compute Engine meta labels available during relabeling When the Ops Agent scrapes metrics, it includes a set of meta labels whose values are based on the configuration of the Compute Engine VM on which the agent is running.
- View metric usage and diagnostics in Cloud Monitoring The Cloud Monitoring Metrics Management page provides information that can help you control the amount you spend on billable metrics without affecting observability.

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- For workloads that run on GKE, Google Cloud Observability might derive golden signals from the Prometheus metric http server request duration seconds , which is only available when you instrument your application by using OpenTelemetry.
- When both the L7 and L4 traffic metrics are available, the L7 metrics appear on the summary pages but the traffic chart contains tabs, which let you view both metrics.
- The dashboards that Application Monitoring creates display log and metric data, including the following golden signals, when that data includes application-specific labels: Traffic : Incoming request rates on the service or workload over the selected time period.
- Golden signals for Kubernetes For Kubernetes DaemonSets, Deployments, and StatefulSets, Google Cloud Observability uses the following metric data to derive values for golden signals, when that metric data is available: Traffic : service/server/request count .

