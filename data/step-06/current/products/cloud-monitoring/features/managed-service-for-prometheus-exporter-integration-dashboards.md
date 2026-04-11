---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.108Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Managed Service for Prometheus exporter integration dashboards"
feature_slug: "managed-service-for-prometheus-exporter-integration-dashboards"
latest_feature_date: "2023-01-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/integrations"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
keywords:
  - "managed"
  - "for"
  - "prometheus"
  - "exporter"
  - "integration"
  - "dashboards"
  - "provides"
  - "integrations"
---

# Managed Service for Prometheus exporter integration dashboards

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Managed Service for Prometheus provides dashboards for exporter integrations and can show static previews before configuration.

## Extended Definition

Managed Service for Prometheus provides dashboards for exporter integrations and can show static previews before configuration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)

## Supporting Pages

### Manage integrations \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following screenshot shows an example of the Monitoring Integrations page: The Integrations page displays the following: A listing of how many Compute Engine VMs have the Ops Agent installed and how many GKE clusters have Managed Service for Prometheus enabled.
- To limit the list of integrations by the type of application, click one of the following options: 3rd party services : shows all third-party services that have integrations with the Ops Agent or Managed Service for Prometheus.
- The following screenshot shows an example of a Logs tab: Configure third-party integrations If you open the details pane for a third-party integration you haven't installed, then the panel indicates that you have no dashboards or configured resources for the integration.
- The entry for an integration indicates whether dashboards are installed and, for third-party integrations, shows the number of VMs on which the integration is installed.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Existing integrations The Ops Agent provides integrations for a number of third-party applications .
- For the JSON Exporter example, use the following procedure: Edit the Ops Agent configuration file, /etc/google-cloud-ops-agent/config.yaml , and add the following Prometheus receiver and pipeline entries: metrics: receivers: prometheus: type: prometheus config: scrape configs: - job name: 'json exporter' scrape interval: 10s metrics path: /probe params: module: [default] target: [http://localhost:8000/examples/data.json] static configs: - targets: ['localhost:7979'] service: pipelines: prometheus pipeline: receivers: - prometheus If you have other configuration entries in this file already, add the Prometheus receiver and pipeline to the existing metrics and service entries.
- You can use the following pattern to add labels staticLabel1 and staticLabel2 to all ingested metrics: metric relabel configs: - source labels: [ address ] action: replace replacement: ' STATIC VALUE 1 ' target label: staticLabel1 - source labels: [ address ] action: replace replacement: ' STATIC VALUE 2 ' target label: staticLabel2 The following version of the Prometheus receiver for the JSON Exporter example uses these configuration patterns to do the following: Set the zone label from the value of the meta gce zone meta label provided by the Ops Agent.
- For information about setting up these interfaces, see the following sections in the Google Cloud Managed Service for Prometheus documentation: Prometheus UI Grafana Use PromQL PromQL is the recommended query language for metrics ingested by using the Prometheus receiver.

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- January 10, 2023 Feature Managed Service for Prometheus : Dashboards for exporter integrations are available and automatically installed when you configure the integration.
- The Integrations page provides links to install instructions, displays example dashboards, and lists the metrics and logs that the Ops Agent collects for each integration.
- October 04, 2021 Feature GKE version 1.20.8-gke.2100 or later offers a Preview of a fully managed metric collection pipeline to scrape Prometheus-style metrics exposed by any GKE workload and send those metrics to Cloud Monitoring for dashboards, alerts, and SLOs.
- For more information, see Manage integrations February 03, 2022 Feature You can now save a copy of a chart on a predefined dashboard to one of your custom dashboards by selecting Add to Custom Dashboard from the More Options menu on the chart.

