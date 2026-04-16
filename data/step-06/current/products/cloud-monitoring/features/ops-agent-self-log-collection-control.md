---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.839Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Ops Agent self-log collection control"
feature_slug: "ops-agent-self-log-collection-control"
latest_feature_date: "2023-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
keywords:
  - "ops"
  - "agent"
  - "self"
  - "log"
  - "collection"
  - "control"
  - "feature"
  - "lets"
---

# Ops Agent self-log collection control

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

This feature lets users prevent the Ops Agent from collecting and sending its self logs to Cloud Logging.

## Extended Definition

This feature lets users prevent the Ops Agent from collecting and sending its self logs to Cloud Logging.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.
- Logging features Logging features include: Improved performance compared to the legacy Logging Agent: High throughput capability, taking full advantage of multi-core architecture.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Ops Agent overview Stay organized with collections Save and categorize content based on your preferences.

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- To disable self-log collection, add a global section to your user-specified configuration file and set the default self log file collection option to the value false : logging: ... metrics: ... global: default self log file collection: false Log-rotation configuration Starting with Ops Agent version 2.31.0, you can also set up the agent's log-rotation feature by using the configuration files.
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.
- You can disable the collection of these self logs, starting with Ops Agent version 2.44.0, by using the default self log file collection option.
- For more information about the metrics collected, see Metrics ingested by the receivers . logging : receivers : syslog : type : files include paths : - /var/log/messages - /var/log/syslog service : pipelines : default pipeline : receivers : [ syslog ] metrics : receivers : hostmetrics : type : hostmetrics collection interval : 60s processors : metrics filter : type : exclude metrics metrics pattern : [] service : pipelines : default pipeline : receivers : [ hostmetrics ] processors : [ metrics filter ] Windows By default, the Ops Agent collects Windows event logs from System , Application , and Security channels, as well as host metrics, IIS metrics, and SQL Server metrics.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Observability Cloud Monitoring Guides Send feedback Install and manage the Ops Agent by using VM Extension Manager policies Stay organized with collections Save and categorize content based on your preferences.
- To find the status information for an Ops Agent managed by VM Extension Manager, see the following: Agent health checks Agent self logs .
- For information about verifying collection of metrics, see Agent is running, but data is not ingested .
- Version control: Keep the Ops Agent updated to the latest version.

