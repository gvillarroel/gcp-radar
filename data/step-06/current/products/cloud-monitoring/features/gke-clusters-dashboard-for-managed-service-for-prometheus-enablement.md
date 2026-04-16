---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.882Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "GKE Clusters dashboard for Managed Service for Prometheus enablement"
feature_slug: "gke-clusters-dashboard-for-managed-service-for-prometheus-enablement"
latest_feature_date: "2022-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/integrations"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "gke"
  - "clusters"
  - "dashboard"
  - "managed"
  - "prometheus"
  - "enablement"
  - "monitoring"
  - "provides"
---

# GKE Clusters dashboard for Managed Service for Prometheus enablement

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring provides a GKE Clusters dashboard for enabling Managed Service for Prometheus on clusters in a project.

## Extended Definition

Cloud Monitoring provides a GKE Clusters dashboard for enabling Managed Service for Prometheus on clusters in a project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Monitoring services Cloud Monitoring provides different services that you can use to understand the health and performance of your applications, and of the other Google Cloud services that you use.
- Data visualization As you instantiate Google Cloud resources or register applications with App Hub , the dashboard service automatically creates Google Cloud-managed dashboards .
- Prometheus metrics that are collected by Google Cloud Managed Service for Prometheus , or by using the Ops Agent and the Prometheus receiver or the OTLP receiver .
- Cloud Monitoring API: The API supports Prometheus Query Language (PromQL) and Monitoring filter expressions.

### Manage integrations \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- Source ID: `site-iam-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- The following screenshot shows an example of the Monitoring Integrations page: The Integrations page displays the following: A listing of how many Compute Engine VMs have the Ops Agent installed and how many GKE clusters have Managed Service for Prometheus enabled.
- Many of the applications that export metrics to Managed Service for Prometheus also include Prometheus Rules configurations for alerts, external to Cloud Monitoring.
- To limit the list of integrations by the type of application, click one of the following options: 3rd party services : shows all third-party services that have integrations with the Ops Agent or Managed Service for Prometheus.
- After you configure a third-party integration and metric collection begins, Monitoring automatically installs the dashboards available for the integration.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- For each metric, the table displays that metric's contribution to billable volume and provides links to to the alerting policies and custom dashboards associated with the metric, as shown in the following screenshot.
- Prometheus prometheus.googleapis.com Samples Metrics collected by using Google Cloud Managed Service for Prometheus , or by using the Ops Agent and the Prometheus receiver or the OTLP receiver .

