---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:34:53.936Z"
product_name: "Apigee Analytics"
product_slug: "apigee-analytics"
feature_name: "Advanced API Operations"
feature_slug: "advanced-api-operations"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
keywords:
  - "advanced"
  - "operations"
  - "provides"
  - "anomaly"
  - "detection"
  - "investigation"
  - "alerting"
  - "traffic"
---

# Advanced API Operations

Product: Apigee Analytics
Coverage: MEDIUM

## Step 02 Summary

Advanced API Operations provides anomaly detection, anomaly investigation, and anomaly alerting for API traffic.

## Extended Definition

Advanced API Operations provides anomaly detection, anomaly investigation, and anomaly alerting for API traffic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)

## Supporting Pages

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: In production, trigger an event notification if the read clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Read' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Cassandra write request latency Use case : The cassandra/clientrequest latency (with scope=Write) SLI metric provides Cassandra services write request latency (at 99th percentile, 95th percentile, or 75th percentile).
- Alert threshold None Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Write' && metric.unit == 'OneMinuteRate') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Cassandra read request latency Use case : The cassandra/clientrequest latency (with scope=Read) SLI metric provides Cassandra services read request latency (at 99th percentile, 95th percentile, or 75th percentile).
- Alert threshold None Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Read' && metric.unit == 'OneMinuteRate') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Cassandra write request rate Use case : The cassandra/clientrequest rate (with scope=Write) SLI metric provides insight into Cassandra services write request average rate at any given time.
- Alert threshold None Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/upstream/request count' filter (resource.container name == 'apigee-synchronizer') && (metric.type == 'CONTRACT') align rate(1m) every 1m group by [metric.method, metric.type, resource.container name], [value request count aggregate: aggregate(value.request count)] Error rate Upstream response count Use case : The upstream/response count SLI metric provides the number of responses the Synchronizer services received from the Apigee control plane.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: In production, trigger an event notification if the read clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Read' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Cassandra write request latency Use case : The cassandra/clientrequest latency (with scope=Write) SLI metric provides Cassandra services write request latency (at 99th percentile, 95th percentile, or 75th percentile).
- Alert threshold None Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Write' && metric.unit == 'OneMinuteRate') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Cassandra read request latency Use case : The cassandra/clientrequest latency (with scope=Read) SLI metric provides Cassandra services read request latency (at 99th percentile, 95th percentile, or 75th percentile).
- Alert threshold None Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Read' && metric.unit == 'OneMinuteRate') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Cassandra write request rate Use case : The cassandra/clientrequest rate (with scope=Write) SLI metric provides insight into Cassandra services write request average rate at any given time.
- Alert threshold None Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/upstream/request count' filter (resource.container name == 'apigee-synchronizer') && (metric.type == 'CONTRACT') align rate(1m) every 1m group by [metric.method, metric.type, resource.container name], [value request count aggregate: aggregate(value.request count)] Error rate Upstream response count Use case : The upstream/response count SLI metric provides the number of responses the Synchronizer services received from the Apigee control plane.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create an OpenAPI 3.0.x specification describing your API operations Before you create and deploy your MCP Discovery Proxy, you need to create an OpenAPI 3.0.x specification that describes the API operations that you want to expose as MCP tools.
- The following sections describe the steps to create and deploy an MCP Discovery Proxy, create an API product, and list available tools: Create an OpenAPI 3.0.x specification describing your API operations.
- MCP in Apigee supports the following OpenAPI versions: 3.0.0 3.0.1 3.0.2 3.0.3 This quickstart uses a sample OpenAPI 3.0.x specification with three API operations: GET /artists : Returns a list of artists.
- Apigee Analytics allows you to filter metrics to distinguish between standard API traffic and MCP-specific traffic, and to see usage volume for tools/list versus tools/call requests.

