---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.379Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent Varnish integration"
feature_slug: "ops-agent-varnish-integration"
latest_feature_date: "2022-05-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration"
keywords:
  - "ops"
  - "agent"
  - "varnish"
  - "integration"
  - "can"
  - "collect"
  - "logs"
  - "metrics"
---

# Ops Agent Varnish integration

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent can collect Varnish logs and metrics.

## Extended Definition

Ops Agent can collect Varnish logs and metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)

## Supporting Pages

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must restart the agent for the configuration to take effect . set - e Check if the file exists if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then Create the file if it doesn ' t exist . sudo mkdir - p / etc / google - cloud - ops - agent sudo touch / etc / google - cloud - ops - agent / config . yaml fi Create a back up of the existing file so existing configurations are not lost . sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak Configure the Ops Agent . sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF metrics : receivers : apache : type : apache service : pipelines : apache : receivers : - apache logging : receivers : apache access : type : apache access apache error : type : apache error service : pipelines : apache : receivers : - apache access - apache error EOF The previous command creates the configuration to collect and ingest logs and metrics from the Apache web server.
- Collect Apache web server logs and metrics In these steps, you configure the Ops Agent to collect logs and metrics from your Apache web server: Go to the SSH terminal for your VM instance.
- You've configured the Ops Agent to collect logs and metrics from your Apache web server, and you've viewed those logs.
- You've configured the Ops Agent to collect logs and metrics from your Apache web server, but you've only viewed logs.

### Ops Agent overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.
- You can install the Ops Agent on Managed Service for Apache Spark clusters that use image version 2.2 and later to collect syslog logs and host metrics.
- Google Kubernetes Engine node instances: GKE on Google Cloud clusters are configured to collect logs and metrics with Logging and Monitoring by default.

### Configure the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the metrics collected, see Metrics ingested by the receivers . logging : receivers : syslog : type : files include paths : - /var/log/messages - /var/log/syslog service : pipelines : default pipeline : receivers : [ syslog ] metrics : receivers : hostmetrics : type : hostmetrics collection interval : 60s processors : metrics filter : type : exclude metrics metrics pattern : [] service : pipelines : default pipeline : receivers : [ hostmetrics ] processors : [ metrics filter ] Windows By default, the Ops Agent collects Windows event logs from System , Application , and Security channels, as well as host metrics, IIS metrics, and SQL Server metrics.
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.
- The following shows the built-in configuration for Linux and for Windows: Linux By default, the Ops Agent collects file-based syslog logs and host metrics.
- Built-in configuration The built-in configuration for the Ops Agent defines the default collection for logs and metrics.

