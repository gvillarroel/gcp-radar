---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.352Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent built-in log rotation"
feature_slug: "ops-agent-built-in-log-rotation"
latest_feature_date: "2023-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent/logging"
keywords:
  - "ops"
  - "agent"
  - "built"
  - "log"
  - "rotation"
  - "includes"
---

# Ops Agent built-in log rotation

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent includes built-in support for log rotation.

## Extended Definition

Ops Agent includes built-in support for log rotation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs](https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/logging](https://docs.cloud.google.com/logging/docs/agent/logging)

## Supporting Pages

### "Use log rotation for Ops Agent self logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs](https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs)
- Source ID: `site-docs-root-2`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You might need a manual process if you are using a version of the Ops Agent without built-in log rotation, or if you prefer to rotate your logs manually.
- If you are running Ops Agent version 2.31.0 or newer, then you can use the built-in log-rotation feature; see Configure log rotation in the Ops Agent .
- Ops Agent version 2.31.0 introduces a configurable log-rotation feature built into the agent.
- The result, specifying all options and default values, looks like the following: logging: ... metrics: ... global: default self log file rotation: enabled: true max file size megabytes: 400 backup count: 1 Example configurations To disable log rotation by the Ops Agent, specify the enabled option with the value false : logging: ... metrics: ... global: default self log file rotation: enabled: false To rotate the log when the log file reaches 20 MB and keep 5 backups (6 files total): logging: ... metrics: ... global: default self log file rotation: max file size megabytes: 20 backup count: 5 To rotate the log when the log file reaches 2,000 MB (2 GB) and keep 1 backup (2 files total): logging: ... metrics: ... global: default self log file rotation: max file size megabytes: 2000 To rotate the log when the log file reaches 400 MB and keep 2 backups (3 files total): logging: ... metrics: ... global: default self log file rotation: backup count: 2 If you make frequent changes as you refine your log-rotation configuration, remember to restart the agent to apply your changes.

### Configure the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- Source ID: `site-docs-root-2`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- TAG "). receivers : RECEIVER ID : type : fluent forward listen host : 127.0.0.1 listen port : 24224 Sample syslog receiver (Linux only): receivers : RECEIVER ID : type : syslog transport protocol : tcp listen host : 0.0.0.0 listen port : 5140 Sample tcp receiver: receivers : RECEIVER ID : type : tcp format : json listen host : 127.0.0.1 listen port : 5170 Sample windows event log receiver (Windows only): receivers : RECEIVER ID : type : windows event log channels : [ System , Application , Security ] Sample windows event log receiver that overrides the built-in receiver to use version 2 : receivers : windows event log : type : windows event log channels : [ System , Application , Security ] receiver version : 2 Sample systemd journald receiver: receivers : RECEIVER ID : type : systemd journald Special fields in structured payloads For processors and receivers that can ingest structured data (the fluent forward and tcp receivers and the parse json processor), you can set special fields in the input that will map to specific fields in the LogEntry object that the agent writes to the Logging API.
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.
- To disable self-log collection, add a global section to your user-specified configuration file and set the default self log file collection option to the value false : logging: ... metrics: ... global: default self log file collection: false Log-rotation configuration Starting with Ops Agent version 2.31.0, you can also set up the agent's log-rotation feature by using the configuration files.
- Put your configuration for the Ops Agent in the following files: For Linux: /etc/google-cloud-ops-agent/config.yaml For Windows: C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml Any user-specified configuration is merged with the built-in configuration when the agent restarts.

### About the Logging agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging](https://docs.cloud.google.com/logging/docs/agent/logging)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The GitHub repository named google-fluentd-catch-all-config which includes the configuration files for the Logging agent for ingesting the logs from various third-party software packages.
- Cloud Run functions includes built-in support for Logging.
- App Engine includes built-in support for Logging.
- Cloud Run includes built-in support for Logging.

