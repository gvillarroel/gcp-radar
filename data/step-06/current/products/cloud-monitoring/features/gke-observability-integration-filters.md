---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.101Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "GKE Observability integration filters"
feature_slug: "gke-observability-integration-filters"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/integrations"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
keywords:
  - "gke"
  - "observability"
  - "integration"
  - "filters"
  - "this"
  - "adds"
  - "recommended"
  - "and"
---

# GKE Observability integration filters

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

This feature adds recommended and configured integration filters to the GKE cluster Observability tab.

## Extended Definition

This feature adds recommended and configured integration filters to the GKE cluster Observability tab.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Feature Observability for Google Kubernetes Engine: The Observability tab for each of your GKE clusters now includes filters for recommended and configured integrations.
- You can enable this package of metrics from the Observability tab for your GKE cluster and preview the available charts and metrics before you enable the metrics.
- February 17, 2023 Feature You can now install pre-defined alerting policies for services integrated with Cloud Monitoring from the Monitoring Integrations page and from the Observability tab on the pages for Kubernetes Engine clusters and workloads.
- This version is built on a fork of collectd version 5.8.1 and includes the following changes: drops support for various third-party integrations . changes the file path for configuring an HTTP proxy when installing the agent .

### Manage integrations \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- The following screenshot shows an example of the Monitoring Integrations page: The Integrations page displays the following: A listing of how many Compute Engine VMs have the Ops Agent installed and how many GKE clusters have Managed Service for Prometheus enabled.
- This document describes the Cloud Monitoring Integrations page, a central location from which you can manage and review the status of Monitoring integrations with Google services and with your third-party applications.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Manage integrations Stay organized with collections Save and categorize content based on your preferences.
- When an integration is available for both Compute Engine and GKE, the details page lets you select your deployment platform.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- View summaries of metric usage To view summaries of the number of billable metrics, rates of metric ingestion, and error rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- This chart can tell you which projects are sending the most data, and if any project is sending an increasing or decreasing amount of data. ( Billable samples only ) To find the namespaces that are sending metrics with the largest contributions to the billable values, use the Namespace Volume Ingestion chart.

