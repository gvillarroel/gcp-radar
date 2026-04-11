---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.099Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "GKE Observability GPU metrics dashboard"
feature_slug: "gke-observability-gpu-metrics-dashboard"
latest_feature_date: "2023-11-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
keywords:
  - "gke"
  - "observability"
  - "gpu"
  - "metrics"
  - "dashboard"
  - "this"
  - "adds"
  - "to"
---

# GKE Observability GPU metrics dashboard

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

This feature adds a GPU metrics dashboard to the GKE cluster Observability tab when GPU nodes are present.

## Extended Definition

This feature adds a GPU metrics dashboard to the GKE cluster Observability tab when GPU nodes are present.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- November 17, 2023 Feature Observability for Google Kubernetes Engine: The Observability tab for a GKE cluster adds a dashboard for GPU metrics.
- May 28, 2024 Feature Announcing new Open Telemetry samples that show how to instrument your Python and Node.js applications to collect metrics, logs, and traces: Python example Node.js example For general instrumentation information and recommendations, and for links to other samples, see: Instrumentation and observability overview Choose an instrumentation approach May 13, 2024 Feature You can now configure dashboards to display events by using the Monitoring API.
- To learn more, see the following: List registered and discovered services and workloads Application Monitoring overview View application telemetry April 02, 2026 Feature Application Monitoring has added support for the following resources: Vertex AI Workbench GKE Gateway GKE Ingress Layer 7 cross-regional Application Load Balancers Additionally, dashboards for Kubernetes workloads display L4 and L7 traffic metrics, when both are available.
- October 04, 2021 Feature GKE version 1.20.8-gke.2100 or later offers a Preview of a fully managed metric collection pipeline to scrape Prometheus-style metrics exposed by any GKE workload and send those metrics to Cloud Monitoring for dashboards, alerts, and SLOs.

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Only configure scopes To get the permissions that you need to configure the observability scope, ask your administrator to grant you the following IAM roles: Observability Editor ( roles/observability.editor ) on your App Hub host project or management project Logs Configuration Writer ( roles/logging.configWriter ) on your App Hub host project or management project Monitoring admin ( roles/monitoring.admin ) on your App Hub host project or management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on your App Hub host project or management project App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Configure the metrics scope Make sure that the metrics scope for your App Hub host project or management project lists all projects that store your application's metric data: For app-enabled folders, Google Cloud Observability attempts to synchronize the list of projects in your app-enabled folder with the list of projects in the metrics scope.
- When the number of projects in your app-enabled folder doesn't exceed your metrics scope quota, which defaults to 375 projects per metrics scope, then Google Cloud Observability can keep the list of projects in the metrics scope synchronized with the list of projects in your app-enabled folder.
- To view all of the telemetry generated by your application through a single interface, such as through the dashboards that Application Monitoring provides, you must configure Google Cloud Observability.

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The dashboards that Application Monitoring creates display log and metric data, including the following golden signals, when that data includes application-specific labels: Traffic : Incoming request rates on the service or workload over the selected time period.
- Golden signals for Kubernetes For Kubernetes DaemonSets, Deployments, and StatefulSets, Google Cloud Observability uses the following metric data to derive values for golden signals, when that metric data is available: Traffic : service/server/request count .
- For workloads that run on GKE, Google Cloud Observability might derive golden signals from the Prometheus metric http server request duration seconds , which is only available when you instrument your application by using OpenTelemetry.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Application Monitoring supported infrastructure Stay organized with collections Save and categorize content based on your preferences.

