---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.863Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Ops Agent OTLP receiver"
feature_slug: "ops-agent-otlp-receiver"
latest_feature_date: "2023-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
keywords:
  - "ops"
  - "agent"
  - "otlp"
  - "receiver"
  - "includes"
  - "collecting"
  - "custom"
  - "metrics"
---

# Ops Agent OTLP receiver

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Ops Agent includes an OTLP receiver for collecting custom metrics and traces from OpenTelemetry-instrumented applications.

## Extended Definition

The Ops Agent includes an OTLP receiver for collecting custom metrics and traces from OpenTelemetry-instrumented applications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)

## Supporting Pages

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disable the OTLP receiver If you are collecting both OTLP metrics and traces by using the Ops Agent, and you want to disable the collection of either metrics or traces but not both, then do the following: Disable collection of either metrics or traces by making one of the following changes to the user configuration file, config.yaml : Remove the otlp pipeline from the metrics service.
- To disable the collection of OTLP metrics and traces by the Ops Agent, do the following: Remove the OTLP configuration from the user configuration file: Delete the entire combined section, which includes the otlp receiver.
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Collect OTLP metrics When you use the OTLP receiver to collect metrics from your OpenTelemetry applications, the primary configuration choice for the receiver is the API that you want to use to ingest the metrics.
- This document describes how can use the Ops Agent and the OpenTelemetry Protocol (OTLP) receiver to collect user-defined metrics and traces from applications instrumented by using OpenTelemetry and running on Compute Engine.

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.
- Example logging service configurations A service configuration has the following structure: service: log level: CUSTOM LOG LEVEL pipelines: PIPELINE ID : receivers: [...] processors: [...] PIPELINE ID 2 : receivers: [...] processors: [...] To stop the agent from collecting and sending either /var/log/message or /var/log/syslog entries, redefine the default pipeline with an empty receivers list and no processors.
- Metrics service The metrics service customizes verbosity for the Ops Agent metrics module's own logs and links metrics receivers and processors together into pipelines.
- Use the OpenTelemetry Protocol (OTLP) receiver to collect custom metrics and traces.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Prometheus prometheus.googleapis.com Samples Metrics collected by using Google Cloud Managed Service for Prometheus , or by using the Ops Agent and the Prometheus receiver or the OTLP receiver .
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- The following table includes regular expressions that might be useful for excluding metrics from statsd or similar dynamically named metrics: Block metrics with names containing Regex more than one underscore in a row . {2,}. more than 7 digits in a row (likely timestamp) . \d{7,}. really long segments (likely label-parsing errors) . [a-zA-Z0-9]{20,}. hexadecimal substrings, including GUIDs . [A-F0-9]{10,}.

