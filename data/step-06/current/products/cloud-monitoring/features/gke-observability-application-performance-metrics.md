---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.843Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "GKE Observability application performance metrics"
feature_slug: "gke-observability-application-performance-metrics"
latest_feature_date: "2023-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/application-topology"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
keywords:
  - "gke"
  - "observability"
  - "application"
  - "performance"
  - "metrics"
  - "feature"
  - "shows"
  - "deployment"
---

# GKE Observability application performance metrics

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

This feature shows application performance metrics in the GKE deployment Observability tab from supported metric sources.

## Extended Definition

This feature shows application performance metrics in the GKE deployment Observability tab from supported metric sources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/application-topology](https://docs.cloud.google.com/monitoring/docs/application-topology)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- To determine what trace data to analyze, Google Cloud Observability queries the resources listed in the default trace scope for trace data, and then retains only the data that is for projects within your application management boundary.
- View topology for your application management boundary Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Home Documentation Observability Cloud Monitoring Guides Send feedback View application telemetry Stay organized with collections Save and categorize content based on your preferences.
- For example, for managed instance groups (MIGs), Cloud Run, and Google Kubernetes Engine deployments, this field shows the CPU utilization.

### View application topology \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-topology](https://docs.cloud.google.com/monitoring/docs/application-topology)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following image shows a topology map for an application management boundary: This map has the following elements: Blue circles : Each blue circle represents an application registered with App Hub.
- View topology for your application management boundary Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- View the topology map for an application Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Home Documentation Observability Cloud Monitoring Guides Send feedback View application topology Stay organized with collections Save and categorize content based on your preferences.

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Golden signals for Kubernetes For Kubernetes DaemonSets, Deployments, and StatefulSets, Google Cloud Observability uses the following metric data to derive values for golden signals, when that metric data is available: Traffic : service/server/request count .
- For workloads that run on GKE, Google Cloud Observability might derive golden signals from the Prometheus metric http server request duration seconds , which is only available when you instrument your application by using OpenTelemetry.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Application Monitoring supported infrastructure Stay organized with collections Save and categorize content based on your preferences.
- For example, for managed instance groups (MIGs), Cloud Run, and Google Kubernetes Engine deployments, this field shows the CPU utilization.

