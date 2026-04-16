---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.767Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Customizable Apigee runtime Docker container in VS Code Insiders"
feature_slug: "customizable-apigee-runtime-docker-container-in-vs-code-insiders"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/cluster-monitoring-guidelines"
keywords:
  - "customizable"
  - "container"
  - "docker"
  - "insiders"
  - "runtime"
  - "code"
---

# Customizable Apigee runtime Docker container in VS Code Insiders

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The Apigee Insiders build for VS Code now includes pre-release support for customizing the Apigee runtime Docker container.

## Extended Definition

The Apigee Insiders build for VS Code now includes pre-release support for customizing the Apigee runtime Docker container.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/cluster-monitoring-guidelines)

## Supporting Pages

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: in production, trigger an event notification if the write clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Write' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Apigee Control plane Apigee Synchronizer service SLI metrics provide request and response counts and latencies between the Apigee control plane and the Hybrid runtime plane.
- Cloud Monitoring dashboard MQL query : fetch k8s container metric 'kubernetes.io/container/restart count' filter (resource.container name = '. cassandra. ' && resource.namespace name == 'apigee') align rate(1m) every 1m group by [resource.cluster name, resource.namespace name, resource.pod name, resource.container name], [value restart count aggregate: aggregate(value.restart count)] Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/upstream/response count' filter (resource.container name == 'apigee-synchronizer') && (metric.response code != '200' && metric.type == 'CONTRACT') align rate(1m) every 1m group by [metric.method, metric.response code, metric.type, resource.container name], [value response count aggregate: aggregate(value.response count)] Infrastructure GKE and other Kubernetes platforms provide system-level SLI metrics.
- Service Name Container Name Cassandra apigee-cassandra Message Processor(MP) apigee-runtime Synchronizer apigee-synchronizer Telemetry apigee-prometheus-app apigee-prometheus-proxy apigee-prometheus-agg apigee-stackdriver-exporter Containers / Pods Restart count Use case : The kubernetes.io/container/restart count system SLI metric provides the number of times a container has restarted.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: in production, trigger an event notification if the write clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Write' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Apigee Control plane Apigee Synchronizer service SLI metrics provide request and response counts and latencies between the Apigee control plane and the Hybrid runtime plane.
- Cloud Monitoring dashboard MQL query : fetch k8s container metric 'kubernetes.io/container/restart count' filter (resource.container name = '. cassandra. ' && resource.namespace name == 'apigee') align rate(1m) every 1m group by [resource.cluster name, resource.namespace name, resource.pod name, resource.container name], [value restart count aggregate: aggregate(value.restart count)] Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/upstream/response count' filter (resource.container name == 'apigee-synchronizer') && (metric.response code != '200' && metric.type == 'CONTRACT') align rate(1m) every 1m group by [metric.method, metric.response code, metric.type, resource.container name], [value response count aggregate: aggregate(value.response count)] Infrastructure GKE and other Kubernetes platforms provide system-level SLI metrics.
- Service Name Container Name Cassandra apigee-cassandra Message Processor(MP) apigee-runtime Synchronizer apigee-synchronizer Telemetry apigee-prometheus-app apigee-prometheus-proxy apigee-prometheus-agg apigee-stackdriver-exporter Containers / Pods Restart count Use case : The kubernetes.io/container/restart count system SLI metric provides the number of times a container has restarted.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: in production, trigger an event notification if the write clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Write' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Apigee Control plane Apigee Synchronizer service SLI metrics provide request and response counts and latencies between the Apigee control plane and the Hybrid runtime plane.
- Cloud Monitoring dashboard MQL query : fetch k8s container metric 'kubernetes.io/container/restart count' filter (resource.container name = '. cassandra. ' && resource.namespace name == 'apigee') align rate(1m) every 1m group by [resource.cluster name, resource.namespace name, resource.pod name, resource.container name], [value restart count aggregate: aggregate(value.restart count)] Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/upstream/response count' filter (resource.container name == 'apigee-synchronizer') && (metric.response code != '200' && metric.type == 'CONTRACT') align rate(1m) every 1m group by [metric.method, metric.response code, metric.type, resource.container name], [value response count aggregate: aggregate(value.response count)] Infrastructure GKE and other Kubernetes platforms provide system-level SLI metrics.
- Service Name Container Name Cassandra apigee-cassandra Message Processor(MP) apigee-runtime Synchronizer apigee-synchronizer Telemetry apigee-prometheus-app apigee-prometheus-proxy apigee-prometheus-agg apigee-stackdriver-exporter Containers / Pods Restart count Use case : The kubernetes.io/container/restart count system SLI metric provides the number of times a container has restarted.

