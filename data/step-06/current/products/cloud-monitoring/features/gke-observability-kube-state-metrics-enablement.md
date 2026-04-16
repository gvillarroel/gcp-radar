---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.832Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "GKE Observability kube state metrics enablement"
feature_slug: "gke-observability-kube-state-metrics-enablement"
latest_feature_date: "2024-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
  - "https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "gke"
  - "observability"
  - "kube"
  - "state"
  - "metrics"
  - "enablement"
  - "feature"
  - "lets"
---

# GKE Observability kube state metrics enablement

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

This feature lets GKE deployments enable the kube state metrics package from the Observability tab.

## Extended Definition

This feature lets GKE deployments enable the kube state metrics package from the Observability tab.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)

## Supporting Pages

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Golden signals for Kubernetes For Kubernetes DaemonSets, Deployments, and StatefulSets, Google Cloud Observability uses the following metric data to derive values for golden signals, when that metric data is available: Traffic : service/server/request count .
- To learn how to use a StatefulSet or deploy a stateful application, see About StatefulSets in Google Kubernetes Engine .
- For some golden signals, Google Cloud Observability has a prioritized list of source metrics.
- Kubernetes StatefulSets (Regional and zonal) See Golden signals for Kubernetes .

### Collect metrics overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Metrics from third-party monitoring applications Cloud Monitoring provides integrations that let you collect telemetry from applications such as Apache Web Server, MySQL, Redis, and others for deployments running on Compute Engine and Google Kubernetes Engine: When using Compute Engine, third-party telemetry is collected by the Ops Agent .
- Home Documentation Observability Cloud Monitoring Guides Send feedback Collect metrics overview Stay organized with collections Save and categorize content based on your preferences.
- These metrics are a key component of your system's overall observability.
- However, these automatically collected Compute Engine metrics might not provide you with all the information that you need to monitor your services.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- To determine what trace data to analyze, Google Cloud Observability queries the resources listed in the default trace scope for trace data, and then retains only the data that is for projects within your application management boundary.
- When you use an app-enabled folder, the Google Cloud console automatically resets the resource picker from an app-enabled folder to the folder's management project when you navigate to a Google Cloud Observability page.
- View topology for your application management boundary Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Home Documentation Observability Cloud Monitoring Guides Send feedback View application telemetry Stay organized with collections Save and categorize content based on your preferences.

