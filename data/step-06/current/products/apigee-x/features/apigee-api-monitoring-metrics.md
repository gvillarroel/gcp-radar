---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.750Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee API Monitoring metrics"
feature_slug: "apigee-api-monitoring-metrics"
latest_feature_date: "2024-03-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/cluster-monitoring-guidelines"
keywords:
  - "monitoring"
  - "metrics"
  - "suite"
  - "request"
  - "target"
  - "added"
  - "proxy"
---

# Apigee API Monitoring metrics

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee added a new suite of API Monitoring metrics for proxy and target request/response counts and latencies to improve scalability and observability; Apigee added a new suite of API Monitoring metrics for proxy and target request/response counts and latencies to improve scalability and observability.

## Extended Definition

Apigee added a new suite of API Monitoring metrics for proxy and target request/response counts and latencies to improve scalability and observability; Apigee added a new suite of API Monitoring metrics for proxy and target request/response counts and latencies to improve scalability and observability.

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
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource types TargetV2 Metric targetv2/request count Group By method and all TargetV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxyv2/response count to monitor the proxy error response rate.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/latencies percentile' filter (metric.percentile == 'p99') group by 1m, [value latencies percentile mean: mean(value.latencies percentile)] every 1m group by [metric.method, metric.percentile], [value latencies percentile mean percentile: percentile(value latencies percentile mean, 99)] Target latencies percentile Use case : Use the targetv2/latencies percentile to monitor the latency percentile (p50, p90, p95, and p99) of all API proxy target responses to a request.
- Resource types ProxyV2 Metric proxyv2/request count Group By method and all ProxyV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/request count' align rate(1m) every 1m group by [metric.method], [value request count aggregate: aggregate(value.request count)] Target request count Use case : Use the targetv2/request count to monitor the Apigee runtime target request count.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint, metric.response code], [value response count aggregate: aggregate(value.response count)] Latencies Proxy latencies percentile Use case : Use the proxyv2/latencies percentile to monitor the latency percentile (p50, p90, p95, and p99) of all API proxy responses to a request.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource types TargetV2 Metric targetv2/request count Group By method and all TargetV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxyv2/response count to monitor the proxy error response rate.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/latencies percentile' filter (metric.percentile == 'p99') group by 1m, [value latencies percentile mean: mean(value.latencies percentile)] every 1m group by [metric.method, metric.percentile], [value latencies percentile mean percentile: percentile(value latencies percentile mean, 99)] Target latencies percentile Use case : Use the targetv2/latencies percentile to monitor the latency percentile (p50, p90, p95, and p99) of all API proxy target responses to a request.
- Resource types ProxyV2 Metric proxyv2/request count Group By method and all ProxyV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/request count' align rate(1m) every 1m group by [metric.method], [value request count aggregate: aggregate(value.request count)] Target request count Use case : Use the targetv2/request count to monitor the Apigee runtime target request count.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint, metric.response code], [value response count aggregate: aggregate(value.response count)] Latencies Proxy latencies percentile Use case : Use the proxyv2/latencies percentile to monitor the latency percentile (p50, p90, p95, and p99) of all API proxy responses to a request.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource types Target Metric target/request count Group By method and all Target resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/Target metric 'apigee.googleapis.com/target/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxy/response count to monitor the proxy error response rate.
- Resource types Proxy Metric proxy/request count Group By method and all Proxy resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/Proxy metric 'apigee.googleapis.com/proxy/request count' align rate(1m) every 1m group by [metric.method], [value request count aggregate: aggregate(value.request count)] Target request count Use case : Use the target/request count to monitor the Apigee runtime target request count.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/Target metric 'apigee.googleapis.com/target/response count' filter (metric.response code != 200) align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint, metric.response code], [value response count aggregate: aggregate(value.response count)] Latencies Proxy latencies Use case : Use the proxy/latencies to monitor the latencies of all API proxy responses to a request.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/Proxy metric 'apigee.googleapis.com/proxy/latencies' align delta(1m) every 1m group by [metric.method], [value latencies percentile: percentile(value.latencies, 99)] Target latencies Use case : Use the target/latencies to monitor the latencies of all API proxy target responses to a request.

