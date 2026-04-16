---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.925Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Ops Agent MariaDB metrics and logs integration"
feature_slug: "ops-agent-mariadb-metrics-and-logs-integration"
latest_feature_date: "2022-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
keywords:
  - "ops"
  - "agent"
  - "mariadb"
  - "metrics"
  - "logs"
  - "integration"
  - "can"
  - "collect"
---

# Ops Agent MariaDB metrics and logs integration

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Ops Agent can collect MariaDB metrics and logs for Cloud Monitoring.

## Extended Definition

The Ops Agent can collect MariaDB metrics and logs for Cloud Monitoring.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)

## Supporting Pages

### Collect metrics overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metrics from third-party monitoring applications Cloud Monitoring provides integrations that let you collect telemetry from applications such as Apache Web Server, MySQL, Redis, and others for deployments running on Compute Engine and Google Kubernetes Engine: When using Compute Engine, third-party telemetry is collected by the Ops Agent .
- To collect additional system metrics from your Compute Engine instances, install an agent.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Collect metrics overview Stay organized with collections Save and categorize content based on your preferences.
- For your agentic applications, some frameworks can collect your prompts and responses or pass context that allows tracing of some remote Google Cloud MCP servers calls.

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.
- You can install the Ops Agent on Managed Service for Apache Spark clusters that use image version 2.2 and later to collect syslog logs and host metrics.
- Google Kubernetes Engine node instances: GKE on Google Cloud clusters are configured to collect logs and metrics with Logging and Monitoring by default.

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Collect OTLP metrics When you use the OTLP receiver to collect metrics from your OpenTelemetry applications, the primary configuration choice for the receiver is the API that you want to use to ingest the metrics.
- Disable the OTLP receiver If you are collecting both OTLP metrics and traces by using the Ops Agent, and you want to disable the collection of either metrics or traces but not both, then do the following: Disable collection of either metrics or traces by making one of the following changes to the user configuration file, config.yaml : Remove the otlp pipeline from the metrics service.
- Benefits Before the availability of the OTLP plugin for the Ops Agent, the primary ways to instrument your applications to collect user-defined metrics and traces included the following: Using client libraries that implement the Monitoring API or the Trace API.
- The prometheus target resource type also includes these labels: project id : The identifier of the Google Cloud project, like my-project , in which the Ops Agent is running. cluster : The value is always gce when metrics are collected by the Ops Agent.

