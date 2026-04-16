---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.751Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee control plane CMEK support"
feature_slug: "apigee-control-plane-cmek-support"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines"
keywords:
  - "encryption"
  - "customer"
  - "plane"
  - "cmek"
  - "control"
  - "managed"
  - "added"
---

# Apigee control plane CMEK support

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee added customer-managed encryption key (CMEK) support for the control plane.

## Extended Definition

Apigee added customer-managed encryption key (CMEK) support for the control plane.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)

## Supporting Pages

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: in production, trigger an event notification if the write clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Write' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Apigee Control plane Apigee Synchronizer service SLI metrics provide request and response counts and latencies between the Apigee control plane and the Hybrid runtime plane.
- Alert threshold None Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/upstream/request count' filter (resource.container name == 'apigee-synchronizer') && (metric.type == 'CONTRACT') align rate(1m) every 1m group by [metric.method, metric.type, resource.container name], [value request count aggregate: aggregate(value.request count)] Error rate Upstream response count Use case : The upstream/response count SLI metric provides the number of responses the Synchronizer services received from the Apigee control plane.
- Resource types k8s container Metric upstream/request count Filter By method , response type , container name , and all k8s container resource type labels Group By Aggregator sum Alert consideration If there are errors in upstream/response count metrics with non-200 response codes returned from Apigee Control plane, then its required further investigation into those errors.
- Synchronizer instances running in the runtime plane are expected to poll the control plane regularly, download the contracts and make the same available to local runtime instances.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: in production, trigger an event notification if the write clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Write' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Apigee Control plane Apigee Synchronizer service SLI metrics provide request and response counts and latencies between the Apigee control plane and the Hybrid runtime plane.
- Alert threshold None Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/upstream/request count' filter (resource.container name == 'apigee-synchronizer') && (metric.type == 'CONTRACT') align rate(1m) every 1m group by [metric.method, metric.type, resource.container name], [value request count aggregate: aggregate(value.request count)] Error rate Upstream response count Use case : The upstream/response count SLI metric provides the number of responses the Synchronizer services received from the Apigee control plane.
- Resource types k8s container Metric upstream/request count Filter By method , response type , container name , and all k8s container resource type labels Group By Aggregator sum Alert consideration If there are errors in upstream/response count metrics with non-200 response codes returned from Apigee Control plane, then its required further investigation into those errors.
- Synchronizer instances running in the runtime plane are expected to poll the control plane regularly, download the contracts and make the same available to local runtime instances.

### PCI Configuration Guide for Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Because Apigee does not know the details of every customer's API design and data payloads, customers have the responsibility to determine appropriate encryption for data in transit.
- Use/Authorizations Access to Debug Session is managed through the Cloud IAM (Identity Access Management) RBAC (Role-Based Access Control) system.
- Customer requirements around encryption, protocol, and algorithm selections are widely variable and specific to individual use cases.
- Data encryption Data encryption tools are not offered to customers for their use inside of Apigee.

