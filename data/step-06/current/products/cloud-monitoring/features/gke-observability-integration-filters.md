---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.849Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "GKE Observability integration filters"
feature_slug: "gke-observability-integration-filters"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/integrations"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
keywords:
  - "gke"
  - "observability"
  - "integration"
  - "filters"
  - "feature"
  - "adds"
  - "recommended"
  - "configured"
---

# GKE Observability integration filters

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

This feature adds recommended and configured integration filters to the GKE cluster Observability tab.

## Extended Definition

This feature adds recommended and configured integration filters to the GKE cluster Observability tab.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- For detailed information about chargeable features in Cloud Monitoring, see the Cloud Monitoring sections of the Google Cloud Observability pricing page.
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- Unused billable metrics represent possible observability gaps that might be filled by creating custom dashboards or alerting policies, or opportunities to reduce costs by excluding the metric entirely.

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Logging features Logging features include: Improved performance compared to the legacy Logging Agent: High throughput capability, taking full advantage of multi-core architecture.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Ops Agent overview Stay organized with collections Save and categorize content based on your preferences.
- The Cloud Monitoring Metrics Management page provides information that can help you control the amount you spend on billable metrics without affecting observability.

### Manage integrations \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- Source ID: `site-iam-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- The following screenshot shows an example of a Logs tab: Configure third-party integrations If you open the details pane for a third-party integration you haven't installed, then the panel indicates that you have no dashboards or configured resources for the integration.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Manage integrations Stay organized with collections Save and categorize content based on your preferences.
- The Quick filters panel that lets you control what is shown in the list of integrations.
- Configured : shows the integrations you have installed.

