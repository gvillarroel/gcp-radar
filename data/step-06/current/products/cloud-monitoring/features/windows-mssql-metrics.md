---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.042Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Windows MSSQL Metrics"
feature_slug: "windows-mssql-metrics"
latest_feature_date: "2017-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
keywords:
  - "windows"
  - "mssql"
  - "metrics"
  - "monitoring"
  - "agent"
  - "include"
  - "microsoft"
  - "charting"
---

# Windows MSSQL Metrics

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring agent metrics include Microsoft Windows MSSQL metrics for charting and alerting.

## Extended Definition

Monitoring agent metrics include Microsoft Windows MSSQL metrics for charting and alerting.

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
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Monitoring features Monitoring features include: System metrics collected with no configuration.
- The agent supports the following Windows operating systems: Windows Server: windows-2016, windows-2019, windows-2022, windows-2025 Windows Server Core: windows-2016-core, windows-2019-core, windows-20h2-core, windows-2022-core, windows-2025-core Agent access requirements Installing the agent requires access to the following DNS names: Google Cloud package repository: packages.cloud.google.com Google downloads subdomain: dl.google.com Running the agent requires access to the following DNS names: OAuth2 token server: oauth2.googleapis.com Earlier versions of the agent may require access to www.googleapis.com (full URL: https://www.googleapis.com/oauth2/v3/token ).
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the metrics collected, see Metrics ingested by the receivers . logging : receivers : syslog : type : files include paths : - /var/log/messages - /var/log/syslog service : pipelines : default pipeline : receivers : [ syslog ] metrics : receivers : hostmetrics : type : hostmetrics collection interval : 60s processors : metrics filter : type : exclude metrics metrics pattern : [] service : pipelines : default pipeline : receivers : [ hostmetrics ] processors : [ metrics filter ] Windows By default, the Ops Agent collects Windows event logs from System , Application , and Security channels, as well as host metrics, IIS metrics, and SQL Server metrics.
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.
- Current number of GPU memory bytes used, by state Maximum amount of GPU memory, in bytes, that has been allocated by the process Percentage of time in the process lifetime that one or more kernels has been running on the GPU Percentage of time, since last sample, the GPU has been active interface Linux only Total count of network errors Total count of packets sent over the network Total number of bytes sent over the network memory Memory usage, with label for state (buffered, cached, free, slab, used) Memory usage percent, with label for state (buffered, cached, free, slab, used) network TCP connection count, with labels for port and TCP state swap Swap I/O operations, with label for direction Swap bytes used, with labels for device and state Swap percent used, with labels for device and state pagefile Windows only Current percentage of pagefile used by state processes Processes count, with label for state Processes forked count Per-process disk read I/O, with labels for process name + others Per-process disk write I/O, with labels for process name + others Per-process RSS usage, with labels for process name + others Per-process VM usage, with labels for process name + others About the gpu metrics: The hostmetrics receiver collects metrics reported by the NVIDIA Management Library (NVML) as agent.googleapis.com/gpu metrics.
- For more information about the metrics collected, see Metrics ingested by the receivers . logging : receivers : windows event log : type : windows event log channels : [ System , Application , Security ] service : pipelines : default pipeline : receivers : [ windows event log ] metrics : receivers : hostmetrics : type : hostmetrics collection interval : 60s iis : type : iis collection interval : 60s mssql : type : mssql collection interval : 60s processors : metrics filter : type : exclude metrics metrics pattern : [] service : pipelines : default pipeline : receivers : [ hostmetrics , iis , mssql ] processors : [ metrics filter ] These configurations are discussed in more detail in Logging configuration and Metrics configuration .

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.
- Enable the APIs Grant roles required to use the Ops Agent To get the permissions that you need to use the Ops Agent to write logs and metrics, ask your administrator to grant you the following IAM roles on your service account: To write logs: Logging Logs Writer ( roles/logging.logWriter ) To write metrics: Monitoring Metric Writer ( roles/monitoring.metricWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Verify that the Ops Agent is collecting telemetry If the Ops Agent has been successfully installed and is running correctly, then it sends metrics to Cloud Monitoring and logs to Cloud Logging.
- Enable the APIs required to use the Ops Agent To use the Ops Agent to write logs and metrics, you must enable the Cloud Logging API and Cloud Monitoring API on your Google Cloud project.

