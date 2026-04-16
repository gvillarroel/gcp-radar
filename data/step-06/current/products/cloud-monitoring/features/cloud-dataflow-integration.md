---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.044Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Cloud Dataflow Integration"
feature_slug: "cloud-dataflow-integration"
latest_feature_date: "2017-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/integrations"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
keywords:
  - "dataflow"
  - "integration"
  - "integrated"
  - "monitoring"
---

# Cloud Dataflow Integration

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cloud Dataflow is integrated with Monitoring.

## Extended Definition

Cloud Dataflow is integrated with Monitoring.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)

## Supporting Pages

### Manage integrations \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- Source ID: `site-iam-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- The following screenshot shows an example of the Monitoring Integrations page: The Integrations page displays the following: A listing of how many Compute Engine VMs have the Ops Agent installed and how many GKE clusters have Managed Service for Prometheus enabled.
- This document describes the Cloud Monitoring Integrations page, a central location from which you can manage and review the status of Monitoring integrations with Google services and with your third-party applications.
- Get started In the Google Cloud console, go to the Integrations page: Go to Integrations If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Home Documentation Observability Cloud Monitoring Guides Send feedback Manage integrations Stay organized with collections Save and categorize content based on your preferences.

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Google Distributed Cloud instances have an integrated logging and monitoring solution that collects status about system components.
- Dataflow instances have pre-installed legacy Monitoring agents with service-specific configurations.
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Ops Agent overview Stay organized with collections Save and categorize content based on your preferences.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For information on the existing integrations with the Ops Agent, see Monitoring third-party applications .
- The software you are monitoring isn't already part of the set of existing Ops Agent integrations .
- To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Prometheus metrics in Cloud Monitoring You can use the tools provided by Cloud Monitoring with the data collected by the Prometheus receiver.
- The simplest way to verify that your Prometheus data is being ingested is to use the Cloud Monitoring Metrics Explorer page in the Google Cloud console: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .

