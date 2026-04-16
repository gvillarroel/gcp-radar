---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.399Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Apache Kafka Log and Metric Collection in Ops Agent"
feature_slug: "apache-kafka-log-and-metric-collection-in-ops-agent"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/cassandra"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb"
keywords:
  - "apache"
  - "kafka"
  - "log"
  - "metric"
  - "collection"
  - "ops"
  - "agent"
  - "can"
---

# Apache Kafka Log and Metric Collection in Ops Agent

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent can collect Apache Kafka logs and metrics for Cloud Logging and Monitoring.

## Extended Definition

Ops Agent can collect Apache Kafka logs and metrics for Cloud Logging and Monitoring.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/cassandra](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/cassandra)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb)

## Supporting Pages

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

### Apache CouchDB \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb)
- Source ID: `site-docs-root-2`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from CouchDB, you must create a receiver for the logs that CouchDB produces and then create a pipeline for the new receiver.
- You must restart the agent for the configuration to take effect. set -e Check if the file exists if [ ! -f /etc/google-cloud-ops-agent/config.yaml ]; then Create the file if it doesn't exist. sudo mkdir -p /etc/google-cloud-ops-agent sudo touch /etc/google-cloud-ops-agent/config.yaml fi Create a back up of the existing file so existing configurations are not lost. sudo cp /etc/google-cloud-ops-agent/config.yaml /etc/google-cloud-ops-agent/config.yaml.bak Configure the Ops Agent. sudo tee /etc/google-cloud-ops-agent/config.yaml > /dev/null << EOF metrics: receivers: couchdb: type: couchdb username: admin password: otelp To use the googlesecretmanager provider to replace plaintext passwords, refer to the example below. password: ${ googlesecretmanager : projects / < project - id > / secrets / < secret - id > / versions / < version - id > } service: pipelines: couchdb: receivers: - couchdb logging: receivers: couchdb: type: couchdb service: pipelines: couchdb: receivers: - couchdb EOF For these changes to take effect, you must restart the Ops Agent: Linux To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " Windows Connect to your instance using RDP or a similar tool and login to Windows.
- To configure a receiver for your couchdb metrics, specify the following fields: Field Default Description collection interval 60s A time duration value, such as 30s or 5m . password The password used to connect to the server. server status url http://localhost:5984 The URL exposed by CouchDB. type This value must be couchdb . username The username used to connect to the server.
- Add the following lines to the file: [log] writer = file file = /var/log/couchdb/couchdb.log level = info Restart Apache CouchDB: sudo systemctl restart couchdb Configure the Ops Agent for CouchDB Following the guide to Configure the Ops Agent , add the required elements to collect telemetry from CouchDB instances, and restart the agent .

