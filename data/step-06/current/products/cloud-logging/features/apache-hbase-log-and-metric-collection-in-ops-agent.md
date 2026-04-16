---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.397Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Apache HBase Log and Metric Collection in Ops Agent"
feature_slug: "apache-hbase-log-and-metric-collection-in-ops-agent"
latest_feature_date: "2022-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hbase"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache"
keywords:
  - "apache"
  - "hbase"
  - "log"
  - "metric"
  - "collection"
  - "ops"
  - "agent"
  - "can"
---

# Apache HBase Log and Metric Collection in Ops Agent

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent can collect Apache HBase logs and metrics for Cloud Logging and Monitoring.

## Extended Definition

Ops Agent can collect Apache HBase logs and metrics for Cloud Logging and Monitoring.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hbase](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hbase)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache)

## Supporting Pages

### Apache HBase \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hbase](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hbase)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from HBase, you must create a receiver for the logs that HBase produces and then create a pipeline for the new receiver.
- You must restart the agent for the configuration to take effect . set - e Check if the file exists if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then Create the file if it doesn ' t exist . sudo mkdir - p / etc / google - cloud - ops - agent sudo touch / etc / google - cloud - ops - agent / config . yaml fi Create a back up of the existing file so existing configurations are not lost . sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak Configure the Ops Agent . sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF metrics : receivers : hbase : type : hbase endpoint : service : jmx : rmi : ///jndi/rmi://127.0.0.1:10101/jmxrmi service : pipelines : hbase : receivers : - hbase logging : receivers : hbase system : type : hbase system service : pipelines : hbase system : receivers : - hbase system EOF For these changes to take effect, you must restart the Ops Agent: Linux To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " Windows Connect to your instance using RDP or a similar tool and login to Windows.
- To configure a receiver for your hbase metrics, specify the following fields: Field Default Description collect jvm metrics true Configures the receiver to also collect the supported JVM metrics. collection interval 60s A time duration value, such as 30s or 5m . endpoint localhost:10101 The JMX Service URL or host and port used to construct the service URL.
- Configure metrics collection To ingest metrics from HBase, you must create a receiver for the metrics that HBase produces and then create a pipeline for the new receiver.

### Couchbase \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must restart the agent for the configuration to take effect. set -e Check if the file exists if [ ! -f /etc/google-cloud-ops-agent/config.yaml ]; then Create the file if it doesn't exist. sudo mkdir -p /etc/google-cloud-ops-agent sudo touch /etc/google-cloud-ops-agent/config.yaml fi Create a back up of the existing file so existing configurations are not lost. sudo cp /etc/google-cloud-ops-agent/config.yaml /etc/google-cloud-ops-agent/config.yaml.bak Configure the Ops Agent. sudo tee /etc/google-cloud-ops-agent/config.yaml > /dev/null << EOF metrics: receivers: couchbase: type: couchbase username: admin password: password To use the googlesecretmanager provider to replace plaintext passwords, refer to the example below. password: ${ googlesecretmanager : projects / < project - id > / secrets / < secret - id > / versions / < version - id > } collection interval: 30s service: pipelines: couchbase: receivers: - couchbase logging: receivers: couchbase general: type: couchbase general couchbase http access: type: couchbase http access couchbase goxdcr: type: couchbase goxdcr service: pipelines: couchbase: receivers: - couchbase general - couchbase http access - couchbase goxdcr EOF For these changes to take effect, you must restart the Ops Agent: Linux To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " Windows Connect to your instance using RDP or a similar tool and login to Windows.
- To configure a receiver for your couchbase metrics, specify the following fields: Field Default Description collection interval 60s A time.Duration value, such as 30s or 5m . endpoint localhost:8091 The URL of the node to monitor. password The password used to connect to the Couchbase server. type This value must be couchbase . username The username used to connect to the Couchbase server.
- Configure metrics collection To ingest metrics from Couchbase, you must create a receiver for the metrics that Couchbase produces and then create a pipeline for the new receiver.
- Prerequisites To collect Couchbase telemetry, you must install the Ops Agent : For metrics, install version 2.18.2 or higher.

### Apache Web Server (httpd) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from Apache Web Server, you must create a receiver for the logs that Apache Web Server produces and then create a pipeline for the new receiver.
- You must restart the agent for the configuration to take effect . set - e Check if the file exists if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then Create the file if it doesn ' t exist . sudo mkdir - p / etc / google - cloud - ops - agent sudo touch / etc / google - cloud - ops - agent / config . yaml fi Create a back up of the existing file so existing configurations are not lost . sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak Configure the Ops Agent . sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF metrics : receivers : apache : type : apache service : pipelines : apache : receivers : - apache logging : receivers : apache access : type : apache access apache error : type : apache error service : pipelines : apache : receivers : - apache access - apache error EOF For these changes to take effect, you must restart the Ops Agent: Linux To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " Windows Connect to your instance using RDP or a similar tool and login to Windows.
- To configure a receiver for your apache metrics, specify the following fields: Field Default Description collection interval 60s A time duration value, such as 30s or 5m . server status url http://localhost:80/server-status?auto The URL exposed by the mod status module. type This value must be apache .
- Configure metrics collection To ingest metrics from Apache Web Server, you must create a receiver for the metrics that Apache Web Server produces and then create a pipeline for the new receiver.

