---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.396Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Apache Hadoop Log and Metric Collection in Ops Agent"
feature_slug: "apache-hadoop-log-and-metric-collection-in-ops-agent"
latest_feature_date: "2022-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hadoop"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/cassandra"
keywords:
  - "apache"
  - "hadoop"
  - "log"
  - "metric"
  - "collection"
  - "ops"
  - "agent"
  - "can"
---

# Apache Hadoop Log and Metric Collection in Ops Agent

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent can collect Apache Hadoop logs and metrics for Cloud Logging and Monitoring.

## Extended Definition

Ops Agent can collect Apache Hadoop logs and metrics for Cloud Logging and Monitoring.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hadoop](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hadoop)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/cassandra](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/cassandra)

## Supporting Pages

### Apache Hadoop \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hadoop](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hadoop)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from Hadoop, you must create a receiver for the logs that Hadoop produces and then create a pipeline for the new receiver.
- You must restart the agent for the configuration to take effect . set - e Check if the file exists if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then Create the file if it doesn ' t exist . sudo mkdir - p / etc / google - cloud - ops - agent sudo touch / etc / google - cloud - ops - agent / config . yaml fi Create a back up of the existing file so existing configurations are not lost . sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak Configure the Ops Agent . sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF metrics : receivers : hadoop : type : hadoop endpoint : service : jmx : rmi : ///jndi/rmi://127.0.0.1:8004/jmxrmi service : pipelines : hadoop : receivers : - hadoop logging : receivers : hadoop : type : hadoop service : pipelines : hadoop : receivers : - hadoop EOF For these changes to take effect, you must restart the Ops Agent: Linux To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " Windows Connect to your instance using RDP or a similar tool and login to Windows.
- To configure a receiver for your hadoop metrics, specify the following fields: Field Default Description collect jvm metrics true Configures the receiver to also collect the supported JVM metrics. collection interval 60s A time duration value, such as 30s or 5m . endpoint localhost:8004 The JMX Service URL or host and port used to construct the service URL.
- Configure metrics collection To ingest metrics from Hadoop, you must create a receiver for the metrics that Hadoop produces and then create a pipeline for the new receiver.

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

### Apache Cassandra \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/cassandra](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/cassandra)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from Cassandra, you must create a receiver for the logs that Cassandra produces and then create a pipeline for the new receiver.
- You must restart the agent for the configuration to take effect . set - e Check if the file exists if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then Create the file if it doesn ' t exist . sudo mkdir - p / etc / google - cloud - ops - agent sudo touch / etc / google - cloud - ops - agent / config . yaml fi Create a back up of the existing file so existing configurations are not lost . sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak Configure the Ops Agent . sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF metrics : receivers : cassandra : type : cassandra endpoint : service : jmx : rmi : ///jndi/rmi://127.0.0.1:7199/jmxrmi service : pipelines : cassandra : receivers : - cassandra logging : receivers : cassandra system : type : cassandra system cassandra debug : type : cassandra debug cassandra gc : type : cassandra gc service : pipelines : cassandra : receivers : - cassandra system - cassandra debug - cassandra gc EOF For these changes to take effect, you must restart the Ops Agent: Linux To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " Windows Connect to your instance using RDP or a similar tool and login to Windows.
- To configure a receiver for your cassandra metrics, specify the following fields: Field Default Description collect jvm metrics true Configures the receiver to also collect the supported JVM metrics. collection interval 60s A time duration value, such as 30s or 5m . endpoint localhost:7199 The JMX Service URL or host and port used to construct the service URL.
- Configure metrics collection To ingest metrics from Cassandra, you must create a receiver for the metrics that Cassandra produces and then create a pipeline for the new receiver.

