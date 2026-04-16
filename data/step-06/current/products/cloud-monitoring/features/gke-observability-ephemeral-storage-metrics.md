---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.862Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "GKE Observability ephemeral storage metrics"
feature_slug: "gke-observability-ephemeral-storage-metrics"
latest_feature_date: "2023-05-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview"
keywords:
  - "gke"
  - "observability"
  - "ephemeral"
  - "storage"
  - "metrics"
  - "tab"
  - "includes"
  - "clusters"
---

# GKE Observability ephemeral storage metrics

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The GKE Observability tab includes ephemeral storage metrics for clusters.

## Extended Definition

The GKE Observability tab includes ephemeral storage metrics for clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)

## Supporting Pages

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Only configure scopes To get the permissions that you need to configure the observability scope, ask your administrator to grant you the following IAM roles: Observability Editor ( roles/observability.editor ) on your App Hub host project or management project Logs Configuration Writer ( roles/logging.configWriter ) on your App Hub host project or management project Monitoring admin ( roles/monitoring.admin ) on your App Hub host project or management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on your App Hub host project or management project App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Configure the metrics scope Make sure that the metrics scope for your App Hub host project or management project lists all projects that store your application's metric data: For app-enabled folders, Google Cloud Observability attempts to synchronize the list of projects in your app-enabled folder with the list of projects in the metrics scope.
- When the number of projects in your app-enabled folder doesn't exceed your metrics scope quota, which defaults to 375 projects per metrics scope, then Google Cloud Observability can keep the list of projects in the metrics scope synchronized with the list of projects in your app-enabled folder.
- Configure and set the default trace scope Do the following: For each project that will store your application's trace data, we recommend that you enable the Observability API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- For some golden signals, Google Cloud Observability has a prioritized list of source metrics.
- The dashboards that Application Monitoring creates display log and metric data, including the following golden signals, when that data includes application-specific labels: Traffic : Incoming request rates on the service or workload over the selected time period.
- Golden signals for Kubernetes For Kubernetes DaemonSets, Deployments, and StatefulSets, Google Cloud Observability uses the following metric data to derive values for golden signals, when that metric data is available: Traffic : service/server/request count .
- For workloads that run on GKE, Google Cloud Observability might derive golden signals from the Prometheus metric http server request duration seconds , which is only available when you instrument your application by using OpenTelemetry.

### Collect metrics overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Observability Cloud Monitoring Guides Send feedback Collect metrics overview Stay organized with collections Save and categorize content based on your preferences.
- These metrics are a key component of your system's overall observability.
- Metrics from third-party monitoring applications Cloud Monitoring provides integrations that let you collect telemetry from applications such as Apache Web Server, MySQL, Redis, and others for deployments running on Compute Engine and Google Kubernetes Engine: When using Compute Engine, third-party telemetry is collected by the Ops Agent .
- However, these automatically collected Compute Engine metrics might not provide you with all the information that you need to monitor your services.

