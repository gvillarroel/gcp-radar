---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.373Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent SAP HANA integration"
feature_slug: "ops-agent-sap-hana-integration"
latest_feature_date: "2022-07-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
keywords:
  - "ops"
  - "agent"
  - "sap"
  - "hana"
  - "integration"
  - "can"
  - "collect"
  - "logs"
---

# Ops Agent SAP HANA integration

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent can collect SAP HANA logs and metrics.

## Extended Definition

Ops Agent can collect SAP HANA logs and metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)

## Supporting Pages

### "Collect logs from third-party applications \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party)
- Source ID: `site-docs-root-2`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the full list of integrations that the Ops Agent supports, including the integrations that collect metrics from third-party applications, go to Monitoring third-party applications .
- The following guides explain how to configure the Ops Agent to collect logs from supported third-party applications.
- Home Documentation Observability Cloud Logging Guides Send feedback Collect logs from third-party applications Stay organized with collections Save and categorize content based on your preferences.
- Active Directory Domain Services (AD DS) Read docs Aerospike Read docs Apache ActiveMQ Read docs Apache Cassandra Read docs Apache CouchDB Read docs Apache Flink Read docs Apache Hadoop Read docs Apache HBase Read docs Apache Kafka Read docs Apache Solr Read docs Apache Tomcat Read docs Apache Web Server (httpd) Read docs Apache ZooKeeper Read docs Couchbase Read docs Elasticsearch 7.9+ Read docs Elasticsearch 8 and 9 Read docs Hashicorp Vault Read docs Internet Information Services Read docs Jetty Read docs MariaDB Read docs Memcached Read docs MongoDB Read docs MySQL Read docs nginx Read docs Oracle Database Read docs PostgreSQL Read docs RabbitMQ Read docs Redis Read docs SAP HANA Read docs Varnish HTTP Cache Read docs WildFly Read docs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Ops Agent overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.
- You can install the Ops Agent on Managed Service for Apache Spark clusters that use image version 2.2 and later to collect syslog logs and host metrics.
- To collect OpenTelemetry Protocol (OTLP) traces, you must configure the agent to collect traces from an instrumented application; for more information, see Collect (OTLP) traces with the Ops Agent .

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- You must restart the agent for the configuration to take effect . set - e Check if the file exists if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then Create the file if it doesn ' t exist . sudo mkdir - p / etc / google - cloud - ops - agent sudo touch / etc / google - cloud - ops - agent / config . yaml fi Create a back up of the existing file so existing configurations are not lost . sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak Configure the Ops Agent . sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF metrics : receivers : apache : type : apache service : pipelines : apache : receivers : - apache logging : receivers : apache access : type : apache access apache error : type : apache error service : pipelines : apache : receivers : - apache access - apache error EOF The previous command creates the configuration to collect and ingest logs and metrics from the Apache web server.
- Collect logs from Apache with the Ops Agent Learn how to collect and view syslog logs collected from an Apache web server installed on a Compute Engine virtual machine (VM) instance by using the Ops Agent.
- Collect Apache web server logs and metrics In these steps, you configure the Ops Agent to collect logs and metrics from your Apache web server: Go to the SSH terminal for your VM instance.
- You've configured the Ops Agent to collect logs and metrics from your Apache web server, and you've viewed those logs.

