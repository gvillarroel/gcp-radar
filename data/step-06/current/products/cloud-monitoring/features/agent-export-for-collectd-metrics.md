---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.021Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Agent Export for collectd Metrics"
feature_slug: "agent-export-for-collectd-metrics"
latest_feature_date: "2017-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring"
keywords:
  - "agent"
  - "export"
  - "collectd"
  - "metrics"
  - "monitoring"
  - "can"
  - "custom"
---

# Agent Export for collectd Metrics

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Monitoring agent can export collectd metrics as custom metrics.

## Extended Definition

The Monitoring agent can export collectd metrics as custom metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)

## Supporting Pages

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition to exporting many predefined system and third-party metrics to Cloud Monitoring, the agent can export your own collectd application metrics to Monitoring as user-defined metrics .
- How Monitoring handles collectd metrics As background, the Monitoring agent processes collectd metrics and sends them to Monitoring, which treats each metric as a member of one of the following categories: User-defined metrics .
- This guide explains how you can configure the Monitoring agent to recognize and export your application metrics to Cloud Monitoring.
- Configure a collectd filter chain to add metadata to the collectd metrics, to meet the expectations of the Monitoring agent.

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- You can't configure the Ops Agent to export logs or metrics to services other than Cloud Logging and Cloud Monitoring.
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.
- Metrics service The metrics service customizes verbosity for the Ops Agent metrics module's own logs and links metrics receivers and processors together into pipelines.
- Metrics verbosity level log level , available with Ops Agent versions 2.6.0 and later, customizes verbosity for Ops Agent metrics submodule's own logs.

### Monitoring agent overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- The Monitoring agent is a collectd -based daemon that gathers system and application metrics from virtual machine instances and sends them to Monitoring.
- Note: The Monitoring agent is designed to ingest system, third-party, custom, and agent telemetry metrics.
- However, if you have to run the legacy Logging agent on Windows and also need to collect metrics, you must use the legacy Monitoring agent; you can't run the Ops Agent and a legacy agent on the same machine.
- Note: If your metrics scope is configured with a VPC Service Controls Service Perimeter for the Monitoring API, then the Monitoring agent won't work on any virtual machine instance outside the perimeter.

