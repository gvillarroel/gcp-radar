---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.395Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Apache CouchDB Log Collection in Ops Agent"
feature_slug: "apache-couchdb-log-collection-in-ops-agent"
latest_feature_date: "2022-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
keywords:
  - "apache"
  - "couchdb"
  - "log"
  - "collection"
  - "ops"
  - "agent"
  - "can"
  - "collect"
---

# Apache CouchDB Log Collection in Ops Agent

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent can collect Apache CouchDB logs for Cloud Logging.

## Extended Definition

Ops Agent can collect Apache CouchDB logs for Cloud Logging.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)

## Supporting Pages

### Apache CouchDB \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from CouchDB, you must create a receiver for the logs that CouchDB produces and then create a pipeline for the new receiver.
- Add the following lines to the file: [log] writer = file file = /var/log/couchdb/couchdb.log level = info Restart Apache CouchDB: sudo systemctl restart couchdb Configure the Ops Agent for CouchDB Following the guide to Configure the Ops Agent , add the required elements to collect telemetry from CouchDB instances, and restart the agent .
- Home Documentation Observability Cloud Logging Guides Send feedback Apache CouchDB Stay organized with collections Save and categorize content based on your preferences.
- To configure a receiver for your couchdb metrics, specify the following fields: Field Default Description collection interval 60s A time duration value, such as 30s or 5m . password The password used to connect to the server. server status url http://localhost:5984 The URL exposed by CouchDB. type This value must be couchdb . username The username used to connect to the server.

### Apache Web Server (httpd) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from Apache Web Server, you must create a receiver for the logs that Apache Web Server produces and then create a pipeline for the new receiver.
- To configure a receiver for your apache metrics, specify the following fields: Field Default Description collection interval 60s A time duration value, such as 30s or 5m . server status url http://localhost:80/server-status?auto The URL exposed by the mod status module. type This value must be apache .
- Configure the Ops Agent for Apache Web Server Following the guide to Configure the Ops Agent , add the required elements to collect telemetry from Apache Web Server instances, and restart the agent .
- Configure metrics collection To ingest metrics from Apache Web Server, you must create a receiver for the metrics that Apache Web Server produces and then create a pipeline for the new receiver.

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must restart the agent for the configuration to take effect . set - e Check if the file exists if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then Create the file if it doesn ' t exist . sudo mkdir - p / etc / google - cloud - ops - agent sudo touch / etc / google - cloud - ops - agent / config . yaml fi Create a back up of the existing file so existing configurations are not lost . sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak Configure the Ops Agent . sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF metrics : receivers : apache : type : apache service : pipelines : apache : receivers : - apache logging : receivers : apache access : type : apache access apache error : type : apache error service : pipelines : apache : receivers : - apache access - apache error EOF The previous command creates the configuration to collect and ingest logs and metrics from the Apache web server.
- Collect logs from Apache with the Ops Agent Learn how to collect and view syslog logs collected from an Apache web server installed on a Compute Engine virtual machine (VM) instance by using the Ops Agent.
- Collect Apache web server logs and metrics In these steps, you configure the Ops Agent to collect logs and metrics from your Apache web server: Go to the SSH terminal for your VM instance.
- For information about how to collect and view Apache web server metrics, see the quickstart Collect Apache web server metrics with the Ops Agent .

