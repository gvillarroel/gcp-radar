---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.030Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Windows Process Metrics"
feature_slug: "windows-process-metrics"
latest_feature_date: "2017-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
keywords:
  - "windows"
  - "process"
  - "metrics"
  - "include"
  - "all"
  - "processes"
  - "accessible"
  - "monitoring"
---

# Windows Process Metrics

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Windows process metrics include all processes accessible to the Monitoring agent.

## Extended Definition

Windows process metrics include all processes accessible to the Monitoring agent.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)

## Supporting Pages

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Monitoring features Monitoring features include: System metrics collected with no configuration.
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.
- The Cloud Monitoring Metrics Management page provides information that can help you control the amount you spend on billable metrics without affecting observability.

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Current number of GPU memory bytes used, by state Maximum amount of GPU memory, in bytes, that has been allocated by the process Percentage of time in the process lifetime that one or more kernels has been running on the GPU Percentage of time, since last sample, the GPU has been active interface Linux only Total count of network errors Total count of packets sent over the network Total number of bytes sent over the network memory Memory usage, with label for state (buffered, cached, free, slab, used) Memory usage percent, with label for state (buffered, cached, free, slab, used) network TCP connection count, with labels for port and TCP state swap Swap I/O operations, with label for direction Swap bytes used, with labels for device and state Swap percent used, with labels for device and state pagefile Windows only Current percentage of pagefile used by state processes Processes count, with label for state Processes forked count Per-process disk read I/O, with labels for process name + others Per-process disk write I/O, with labels for process name + others Per-process RSS usage, with labels for process name + others Per-process VM usage, with labels for process name + others About the gpu metrics: The hostmetrics receiver collects metrics reported by the NVIDIA Management Library (NVML) as agent.googleapis.com/gpu metrics.
- For more information about the metrics collected, see Metrics ingested by the receivers . logging : receivers : syslog : type : files include paths : - /var/log/messages - /var/log/syslog service : pipelines : default pipeline : receivers : [ syslog ] metrics : receivers : hostmetrics : type : hostmetrics collection interval : 60s processors : metrics filter : type : exclude metrics metrics pattern : [] service : pipelines : default pipeline : receivers : [ hostmetrics ] processors : [ metrics filter ] Windows By default, the Ops Agent collects Windows event logs from System , Application , and Security channels, as well as host metrics, IIS metrics, and SQL Server metrics.
- For more information about the metrics collected, see Metrics ingested by the receivers . logging : receivers : windows event log : type : windows event log channels : [ System , Application , Security ] service : pipelines : default pipeline : receivers : [ windows event log ] metrics : receivers : hostmetrics : type : hostmetrics collection interval : 60s iis : type : iis collection interval : 60s mssql : type : mssql collection interval : 60s processors : metrics filter : type : exclude metrics metrics pattern : [] service : pipelines : default pipeline : receivers : [ hostmetrics , iis , mssql ] processors : [ metrics filter ] These configurations are discussed in more detail in Logging configuration and Metrics configuration .
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.

### Troubleshoot the Monitoring agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Process data access issue (Windows) You might see an agent error message in the Windows Event Log similar to the following: Read access denied for processes: Registry (84), smss.exe (264), csrss.exe (376), wininit.exe (448), csrss.exe (456), services.exe (580), NisSrv.exe (3008), MsMpEng.exe (3624), csrss.exe (7044) This message indicates that the agent doesn't have access to this data on your system.
- Metadata cache issues (Linux) You might see an error message in the Linux system log file ( /var/log/syslog on Debian / Ubuntu or /var/log/messages on Red Hat / CentOS / SLES) similar to the following: collectd [ 25571 ] : uc update : Value too old : name = myhost / processes-all / ps vm ; value time = 1511345468 .
- Monitoring agent doesn't appear in Windows Uninstall a program list To uninstall the Monitoring agent when it isn't listed in the Windows Control Panel's Uninstall a program list, run uninstall.exe from the directory where you installed it.
- Reinstalling the Monitoring agent Installing the most recent version of the agent can solve many problems: If you are sure that the problem isn't related to credentials, you can skip ahead to Installing on Linux and Windows .

