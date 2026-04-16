---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.371Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent Couchbase integration"
feature_slug: "ops-agent-couchbase-integration"
latest_feature_date: "2022-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent"
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

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent can collect Couchbase logs and metrics.

## Extended Definition

Ops Agent can collect Couchbase logs and metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)

## Supporting Pages

### Couchbase \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must restart the agent for the configuration to take effect. set -e Check if the file exists if [ ! -f /etc/google-cloud-ops-agent/config.yaml ]; then Create the file if it doesn't exist. sudo mkdir -p /etc/google-cloud-ops-agent sudo touch /etc/google-cloud-ops-agent/config.yaml fi Create a back up of the existing file so existing configurations are not lost. sudo cp /etc/google-cloud-ops-agent/config.yaml /etc/google-cloud-ops-agent/config.yaml.bak Configure the Ops Agent. sudo tee /etc/google-cloud-ops-agent/config.yaml > /dev/null << EOF metrics: receivers: couchbase: type: couchbase username: admin password: password To use the googlesecretmanager provider to replace plaintext passwords, refer to the example below. password: ${ googlesecretmanager : projects / < project - id > / secrets / < secret - id > / versions / < version - id > } collection interval: 30s service: pipelines: couchbase: receivers: - couchbase logging: receivers: couchbase general: type: couchbase general couchbase http access: type: couchbase http access couchbase goxdcr: type: couchbase goxdcr service: pipelines: couchbase: receivers: - couchbase general - couchbase http access - couchbase goxdcr EOF For these changes to take effect, you must restart the Ops Agent: Linux To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " Windows Connect to your instance using RDP or a similar tool and login to Windows.
- Prerequisites To collect Couchbase telemetry, you must install the Ops Agent : For metrics, install version 2.18.2 or higher.
- What is monitored The following table provides the list of metrics that the Ops Agent collects from the Couchbase instance.
- The integration also collects Couchbase general, HTTP access, and cross-datacenter ("goxdcr") logs.

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

