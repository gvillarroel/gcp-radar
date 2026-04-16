---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.374Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent Vault log collection"
feature_slug: "ops-agent-vault-log-collection"
latest_feature_date: "2022-07-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration"
keywords:
  - "ops"
  - "agent"
  - "vault"
  - "log"
  - "collection"
  - "can"
  - "collect"
  - "logs"
---

# Ops Agent Vault log collection

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent can collect Vault logs.

## Extended Definition

Ops Agent can collect Vault logs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Observability Cloud Logging Guides Send feedback Install and manage the Ops Agent by using VM Extension Manager policies Stay organized with collections Save and categorize content based on your preferences.
- Verify that the Ops Agent is collecting telemetry If the Ops Agent has been successfully installed and is running correctly, then it sends metrics to Cloud Monitoring and logs to Cloud Logging.
- When the Ops Agent has been installed on the VM and is collecting logs and metrics, the agent's status is marked with a green checkmark next to the Ops Agent label.
- For information about verifying collection of metrics, see Agent is running, but data is not ingested .

### Ops Agent overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.
- Home Documentation Observability Cloud Logging Guides Send feedback Ops Agent overview Stay organized with collections Save and categorize content based on your preferences.
- You can install the Ops Agent on Managed Service for Apache Spark clusters that use image version 2.2 and later to collect syslog logs and host metrics.
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.

### Configure the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- Source ID: `site-docs-root-2`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the metrics collected, see Metrics ingested by the receivers . logging : receivers : syslog : type : files include paths : - /var/log/messages - /var/log/syslog service : pipelines : default pipeline : receivers : [ syslog ] metrics : receivers : hostmetrics : type : hostmetrics collection interval : 60s processors : metrics filter : type : exclude metrics metrics pattern : [] service : pipelines : default pipeline : receivers : [ hostmetrics ] processors : [ metrics filter ] Windows By default, the Ops Agent collects Windows event logs from System , Application , and Security channels, as well as host metrics, IIS metrics, and SQL Server metrics.
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.
- You can disable the collection of these self logs, starting with Ops Agent version 2.44.0, by using the default self log file collection option.
- Built-in configuration The built-in configuration for the Ops Agent defines the default collection for logs and metrics.

