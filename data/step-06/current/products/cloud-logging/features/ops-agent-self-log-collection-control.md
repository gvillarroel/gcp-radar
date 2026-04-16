---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.333Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent self-log collection control"
feature_slug: "ops-agent-self-log-collection-control"
latest_feature_date: "2023-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent"
keywords:
  - "ops"
  - "agent"
  - "self"
  - "log"
  - "collection"
  - "control"
  - "can"
  - "configured"
---

# Ops Agent self-log collection control

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent can be configured not to collect and send its own logs to Cloud Logging.

## Extended Definition

Ops Agent can be configured not to collect and send its own logs to Cloud Logging.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs](https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)

## Supporting Pages

### Configure the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.
- To disable self-log collection, add a global section to your user-specified configuration file and set the default self log file collection option to the value false : logging: ... metrics: ... global: default self log file collection: false Log-rotation configuration Starting with Ops Agent version 2.31.0, you can also set up the agent's log-rotation feature by using the configuration files.
- You can disable the collection of these self logs, starting with Ops Agent version 2.44.0, by using the default self log file collection option.
- For more information about the metrics collected, see Metrics ingested by the receivers . logging : receivers : syslog : type : files include paths : - /var/log/messages - /var/log/syslog service : pipelines : default pipeline : receivers : [ syslog ] metrics : receivers : hostmetrics : type : hostmetrics collection interval : 60s processors : metrics filter : type : exclude metrics metrics pattern : [] service : pipelines : default pipeline : receivers : [ hostmetrics ] processors : [ metrics filter ] Windows By default, the Ops Agent collects Windows event logs from System , Application , and Security channels, as well as host metrics, IIS metrics, and SQL Server metrics.

### "Use log rotation for Ops Agent self logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs](https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs)
- Source ID: `site-docs-root-2`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Logging Guides Send feedback Use log rotation for Ops Agent self logs Stay organized with collections Save and categorize content based on your preferences.
- The result, specifying all options and default values, looks like the following: logging: ... metrics: ... global: default self log file rotation: enabled: true max file size megabytes: 400 backup count: 1 Example configurations To disable log rotation by the Ops Agent, specify the enabled option with the value false : logging: ... metrics: ... global: default self log file rotation: enabled: false To rotate the log when the log file reaches 20 MB and keep 5 backups (6 files total): logging: ... metrics: ... global: default self log file rotation: max file size megabytes: 20 backup count: 5 To rotate the log when the log file reaches 2,000 MB (2 GB) and keep 1 backup (2 files total): logging: ... metrics: ... global: default self log file rotation: max file size megabytes: 2000 To rotate the log when the log file reaches 400 MB and keep 2 backups (3 files total): logging: ... metrics: ... global: default self log file rotation: backup count: 2 If you make frequent changes as you refine your log-rotation configuration, remember to restart the agent to apply your changes.
- This effectively limits the disk space used by the Ops Agent self log files. rotate 30 Log files are rotated when they grow bigger than maxsize even before the additionally specified time interval maxsize 256 M Skip rotation if the log file is missing. missingok Do not rotate the log if it is empty. notifempty Old versions of log files are compressed with gzip by default. compress Postpone compression of the previous log file to the next rotation cycle. delaycompress } EOF Set up crontab or systemd timer to trigger the logrotate utility periodically.
- Trigger the agent self log file to be larger than 1K by restarting the agent a few times: sudo service google-cloud-ops-agent restart Wait for the crontab or systemd timer to take effect to trigger the logrotate utility, or trigger the logrotate utility manually by running this command: sudo logrotate /etc/logrotate.d/google-cloud-ops-agent.conf Verify that you see rotated log files in the /var/log/google-cloud-ops-agent/subagents/ directory.

### Ops Agent overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.
- Home Documentation Observability Cloud Logging Guides Send feedback Ops Agent overview Stay organized with collections Save and categorize content based on your preferences.
- Rocky Linux 8 Rocky Linux 9 Rocky Linux 10 RHEL 8: rhel-8, rhel-8-6-sap-ha, rhel-8-8-sap-ha, rhel-8-10-sap-ha RHEL 9: rhel-9 RHEL 10: rhel-10 CentOS Stream 10 Debian 11 (Bullseye) Debian 12 (Bookworm) Debian 13 (Trixie) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu 22.04 LTS (Jammy Jellyfish): ubuntu-2204-lts, ubuntu-minimal-2204-lts Ubuntu 24.04 LTS (Noble Numbat): ubuntu-2404-lts-amd64, ubuntu-minimal-2404-lts-amd64 Ubuntu 25.10 (Questing Quokka): ubuntu-2510-amd64, ubuntu-minimal-2510-amd64 SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap Support for Compute Engine Arm VMs The Ops Agent supports Compute Engine C4A and Tau T2A Arm VM instances.

