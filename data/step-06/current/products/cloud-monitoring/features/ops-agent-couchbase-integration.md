---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.896Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Ops Agent Couchbase integration"
feature_slug: "ops-agent-couchbase-integration"
latest_feature_date: "2022-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
  - "https://docs.cloud.google.com/monitoring/agent/integrations"
keywords:
  - "ops"
  - "agent"
  - "couchbase"
  - "integration"
  - "can"
  - "collect"
  - "logs"
  - "metrics"
---

# Ops Agent Couchbase integration

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Ops Agent can collect Couchbase logs and metrics.

## Extended Definition

The Ops Agent can collect Couchbase logs and metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)

## Supporting Pages

### Collect metrics overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Metrics from third-party monitoring applications Cloud Monitoring provides integrations that let you collect telemetry from applications such as Apache Web Server, MySQL, Redis, and others for deployments running on Compute Engine and Google Kubernetes Engine: When using Compute Engine, third-party telemetry is collected by the Ops Agent .
- To collect additional system metrics from your Compute Engine instances, install an agent.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Collect metrics overview Stay organized with collections Save and categorize content based on your preferences.
- For your agentic applications, some frameworks can collect your prompts and responses or pass context that allows tracing of some remote Google Cloud MCP servers calls.

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.
- You can install the Ops Agent on Managed Service for Apache Spark clusters that use image version 2.2 and later to collect syslog logs and host metrics.
- Google Kubernetes Engine node instances: GKE on Google Cloud clusters are configured to collect logs and metrics with Logging and Monitoring by default.

### Manage integrations \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- Source ID: `site-iam-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the integration collects logs, then the Logs tab shows the structure of the logs collected by each Ops Agent log receiver and provides a link to view those logs in the Logs Explorer.
- The following screenshot shows an example of the details pane for a third-party integration for Compute Engine, with the Metrics tab selected: The Metrics tab shows a table of the metrics, if any, collected by the integration.
- The displayed tabs vary with the integration and might include the following: Metrics : a table of the metrics collected by the integration.
- Dashboards let you see the metrics that the integration collects on charts.

