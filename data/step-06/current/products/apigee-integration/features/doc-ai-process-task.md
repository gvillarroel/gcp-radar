---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:40.077Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "Doc AI - Process task"
feature_slug: "doc-ai-process-task"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines"
keywords:
  - "Doc AI document processing"
  - "Doc AI Process task"
  - "Doc AI process"
  - "Document AI process"
  - "Process document task"
  - "processText"
  - "Process task"
  - "Process"
---

# Doc AI - Process task

Product: Apigee Integration
Coverage: LOW

## Step 02 Summary

Adds a Doc AI document processing integration task in preview.

## Extended Definition

The provided official Google Cloud excerpts only establish that Apigee tasks/policies are attached in request/response flows as sequential processing steps in an API proxy and can be monitored via policy-related latency and platform/container health metrics. Therefore, the “Doc AI - Process task” can be described only in general terms as an Apigee policy/task in the proxy processing pipeline, not as a documented Doc AI-specific capability in these excerpts. The evidence does not explicitly define its preview status, Doc AI input/output behavior, or configuration details.

## Evidence Summary

These pages confirm Apigee policy flow placement and monitoring semantics, but they do not directly document the Doc AI Process task feature itself.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)

## Supporting Pages

### Step 6: Attach a policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- In the following steps, you create a new policy and attach it to your API proxy in the PreFlow response flow to ensure the policy is applied before any other processing takes place.
- Proxy and target endpoints define a pipeline for request and response message processing referred to as request and response flows .
- Policies are attached at different points in the request and response message flows as processing steps .
- Flows are sequential stages along the API request processing path.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/latencies percentile' filter (metric.percentile == 'p99') group by 1m, [value latencies percentile mean: mean(value.latencies percentile)] every 1m group by [metric.method, metric.percentile], [value latencies percentile mean percentile: percentile(value latencies percentile mean, 99)] Policy latencies percentile Use case : Use the policyv2/latencies percentile monitor the processing latency percentile (p50, p90, p95, and p99) of all Apigee policies.
- Service Name Container Name Cassandra apigee-cassandra Message Processor(MP) apigee-runtime Synchronizer apigee-synchronizer Telemetry apigee-prometheus-app apigee-prometheus-proxy apigee-prometheus-agg apigee-stackdriver-exporter Containers / Pods Restart count Use case : The kubernetes.io/container/restart count system SLI metric provides the number of times a container has restarted.
- An Alert threshold optimization and determination is an on-going process as it can change with the service and infrastructure usage.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/latencies percentile' filter (metric.percentile == 'p99') group by 1m, [value latencies percentile mean: mean(value.latencies percentile)] every 1m group by [metric.method, metric.percentile], [value latencies percentile mean percentile: percentile(value latencies percentile mean, 99)] Policy latencies percentile Use case : Use the policyv2/latencies percentile monitor the processing latency percentile (p50, p90, p95, and p99) of all Apigee policies.
- Service Name Container Name Cassandra apigee-cassandra Message Processor(MP) apigee-runtime Synchronizer apigee-synchronizer Telemetry apigee-prometheus-app apigee-prometheus-proxy apigee-prometheus-agg apigee-stackdriver-exporter Containers / Pods Restart count Use case : The kubernetes.io/container/restart count system SLI metric provides the number of times a container has restarted.
- An Alert threshold optimization and determination is an on-going process as it can change with the service and infrastructure usage.

