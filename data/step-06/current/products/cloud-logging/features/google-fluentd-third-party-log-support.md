---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.508Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "google-fluentd third-party log support"
feature_slug: "google-fluentd-third-party-log-support"
latest_feature_date: "2015-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/logging/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party"
keywords:
  - "fluentd"
  - "third"
  - "party"
  - "log"
  - "logging"
  - "agent"
  - "supports"
  - "ingesting"
---

# google-fluentd third-party log support

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The google-fluentd logging agent supports ingesting two dozen third-party log types.

## Extended Definition

The google-fluentd logging agent supports ingesting two dozen third-party log types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party)

## Supporting Pages

### "Collect logs from third-party applications \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party)
- Source ID: `site-docs-root-2`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the full list of integrations that the Ops Agent supports, including the integrations that collect metrics from third-party applications, go to Monitoring third-party applications .
- For a walkthrough on how to use Ansible to install the Ops Agent, configure a third-party application, and install a sample dashboard, see the Install the Ops Agent to troubleshoot third-party applications video.
- Home Documentation Observability Cloud Logging Guides Send feedback Collect logs from third-party applications Stay organized with collections Save and categorize content based on your preferences.
- The following guides explain how to configure the Ops Agent to collect logs from supported third-party applications.

### Configure the Logging agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- C:\Program Files (x86)\Stackdriver\LoggingAgent\config.d is the third-party configuration directory for Windows.
- C:\Program Files (x86)\Stackdriver\LoggingAgent\config.d is the third-party configuration directory for Windows.
- To send logs via the fluentd in forward plugin, read the following instructions: Execute the following command on the VM with the Logging agent installed: echo '{"code": "send-log-via-fluent-cat", "message": "This is a log from in forward plugin."}' /opt/google-fluentd/embedded/bin/fluent-cat log-via-in-forward-plugin Check the Logs Explorer to see the ingested log entry: { insertId: "1kvvmhsg1ib4689" jsonPayload: { code: "send-log-via-fluent-cat" message: "This is a log from in forward plugin." } labels: { compute.googleapis.com/resource name: "add-structured-log-resource" } logName: "projects/my-sample-project-12345/logs/log-via-in-forward-plugin" receiveTimestamp: "2018-03-21T02:11:27.981020900Z" resource: { labels: { instance id: "5351724540900470204" project id: "my-sample-project-12345" zone: "us-central1-c" } type: "gce instance" } timestamp: "2018-03-21T02:11:22.717692494Z" } Streaming structured (JSON) log records from application code You can enable connectors in various languages to send structured logs from application code; for more information, review the fluentd documentation .
- In addition, the following Prometheus metrics are exposed by the output plugin in prometheus mode: uptime with a version label: Uptime of the Logging agent. stackdriver successful requests count with grpc and code labels: The number of successful requests to the Logging API. stackdriver failed requests count with grpc and code labels: The number of failed requests to the Logging API, broken down by the error code. stackdriver ingested entries count with grpc and code labels: The number of log entries ingested by the Logging API. stackdriver dropped entries count with grpc and code labels: The number of log entries rejected by the Logging API. stackdriver retried entries count with grpc and code labels: The number of log entries that failed to be ingested by the Google Cloud fluentd output plugin due to a transient error and were retried. prometheus and prometheus monitor plugin configuration Note: The following default monitoring configuration is exclusive to Linux operating systems.

### Ops Agent overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.
- Linux operating systems The agent supports the following Linux operating systems: Note: To use Cloud Logging on VMs with Container-Optimized OS, follow Using Cloud Logging with Container-Optimized OS instead.
- Rocky Linux 8 Rocky Linux 9 Rocky Linux 10 RHEL 8: rhel-8, rhel-8-6-sap-ha, rhel-8-8-sap-ha, rhel-8-10-sap-ha RHEL 9: rhel-9 RHEL 10: rhel-10 CentOS Stream 10 Debian 11 (Bullseye) Debian 12 (Bookworm) Debian 13 (Trixie) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu 22.04 LTS (Jammy Jellyfish): ubuntu-2204-lts, ubuntu-minimal-2204-lts Ubuntu 24.04 LTS (Noble Numbat): ubuntu-2404-lts-amd64, ubuntu-minimal-2404-lts-amd64 Ubuntu 25.10 (Questing Quokka): ubuntu-2510-amd64, ubuntu-minimal-2510-amd64 SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap Support for Compute Engine Arm VMs The Ops Agent supports Compute Engine C4A and Tau T2A Arm VM instances.

