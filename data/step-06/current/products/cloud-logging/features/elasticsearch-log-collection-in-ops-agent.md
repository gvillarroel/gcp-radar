---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.406Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Elasticsearch Log Collection in Ops Agent"
feature_slug: "elasticsearch-log-collection-in-ops-agent"
latest_feature_date: "2022-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
keywords:
  - "elasticsearch"
  - "log"
  - "collection"
  - "ops"
  - "agent"
  - "can"
  - "collect"
  - "logs"
---

# Elasticsearch Log Collection in Ops Agent

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent can collect Elasticsearch logs for Cloud Logging.

## Extended Definition

Ops Agent can collect Elasticsearch logs for Cloud Logging.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### Elasticsearch 7.9+ \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch)
- Source ID: `site-docs-root-2`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from Elasticsearch, you must create a receiver for the logs that Elasticsearch produces and then create a pipeline for the new receiver.
- If empty, the receiver uses the system root CA. cert file Path to the TLS certificate to use for mTLS-required connections. collection interval 60s A time duration value, such as 30s or 5m . endpoint http://localhost:92002 The base URL for the Elasticsearch REST API. insecure true Sets whether or not to use a secure TLS connection.
- The elasticsearch gc logs contain the following fields in the LogEntry : Field Type Description jsonPayload.gc run number The run of the garbage collector jsonPayload.message string Log message jsonPayload.type string The type of the log record severity string ( LogSeverity ) Log entry level (translated).
- Configure the Ops Agent for Elasticsearch Following the guide to Configure the Ops Agent , add the required elements to collect telemetry from Elasticsearch instances, and restart the agent .

### Elasticsearch 8.0+ and 9.0+ \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9)
- Source ID: `site-docs-root-2`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from Elasticsearch, you must create a receiver for the logs that Elasticsearch produces and then create a pipeline for the new receiver.
- The elasticsearch json logs contain the following fields in the LogEntry : Field Type Description jsonPayload.ecs.version string ECS version jsonPayload.elasticsearch.cluster.name string The name of the cluster emitting the log record in ECS format jsonPayload.elasticsearch.cluster.uuid string The UUID of the cluster emitting the log record in ECS format jsonPayload.elasticsearch.node.name string The name of the node emitting the log record in ECS format jsonPayload.event string Event information in ECS format jsonPayload.log string Log details in ECS format jsonPayload.log.level string Log entry level in ECS format jsonPayload.log.logger string The logger component that emitted the log in ECS format jsonPayload.message string Log message jsonPayload.process.thread.name string The name of the thread that emitted the log in ECS format jsonPayload.service.name string The name of the service emitting the log in ECS format severity string ( LogSeverity ) Log entry severity level The elasticsearch gc logs contain the following fields in the LogEntry : Field Type Description jsonPayload.gc run number The run of the garbage collector jsonPayload.message string Log message jsonPayload.type string The type of the log record severity string ( LogSeverity ) Log entry level (translated).
- If empty, the receiver uses the system root CA. cert file Path to the TLS certificate to use for mTLS-required connections. collection interval 60s A time duration value, such as 30s or 5m . endpoint https://localhost:9200 The base URL for the Elasticsearch REST API.
- Configure the Ops Agent for Elasticsearch Following the guide to Configure the Ops Agent , add the required elements to collect telemetry from Elasticsearch instances, and restart the agent .

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Observability Cloud Logging Guides Send feedback Install and manage the Ops Agent by using VM Extension Manager policies Stay organized with collections Save and categorize content based on your preferences.
- Verify that the Ops Agent is collecting telemetry If the Ops Agent has been successfully installed and is running correctly, then it sends metrics to Cloud Monitoring and logs to Cloud Logging.
- When the Ops Agent has been installed on the VM and is collecting logs and metrics, the agent's status is marked with a green checkmark next to the Ops Agent label.
- For information about verifying collection of metrics, see Agent is running, but data is not ingested .

