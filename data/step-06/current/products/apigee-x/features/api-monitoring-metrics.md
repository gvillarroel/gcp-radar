---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.173Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "API Monitoring metrics"
feature_slug: "api-monitoring-metrics"
latest_feature_date: "2024-03-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines"
keywords:
  - "monitoring"
  - "metrics"
  - "suite"
  - "includes"
  - "endpoint"
  - "target"
  - "proxy"
---

# API Monitoring metrics

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee API Monitoring includes a new suite of proxy and target endpoint metrics with improved scalability and accuracy; Apigee API Monitoring includes a new suite of proxy and target endpoint metrics with improved scalability and accuracy.

## Extended Definition

Apigee API Monitoring includes a new suite of proxy and target endpoint metrics with improved scalability and accuracy; Apigee API Monitoring includes a new suite of proxy and target endpoint metrics with improved scalability and accuracy.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)

## Supporting Pages

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Resource types Target Metric target/request count Group By method and all Target resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard PromQL query : sum by (method, type, endpoint) ( rate({"apigee.googleapis.com/target/request count", monitored resource="apigee.googleapis.com/Target"}[1m]) ) Error Rate Proxy error response count Use case : Use the proxy/response count to monitor the proxy error response rate.
- Cloud Monitoring dashboard PromQL query : sum by (method, type, endpoint, response code) ( rate({"apigee.googleapis.com/target/response count", monitored resource="apigee.googleapis.com/Target", response code!="200"}[1m]) ) Latencies Proxy latencies Use case : Use the proxy/latencies to monitor the latencies of all API proxy responses to a request.
- Apigee-X users have access to API traffic SLI metrics such as Proxy, Target, and Policy in the Org's Google Cloud project and can use these SLI metrics for monitoring and alerts.
- Cloud Monitoring dashboard PromQL query : sum by (method, response code, fault code, fault source, apigee fault) ( rate({"apigee.googleapis.com/proxy/response count", monitored resource="apigee.googleapis.com/Proxy", response code!="200"}[1m]) ) Example Google Cloud operation Alert policy PromQL : 100 ( sum by (method, org, apigee fault, location, resource container, env, proxy name, fault code, fault source) ({"apigee.googleapis.com/proxy/response count", monitored resource="apigee.googleapis.com/Proxy", response code="500"}) / sum by (method, org, apigee fault, location, resource container, env, proxy name, fault code, fault source) ({"apigee.googleapis.com/proxy/response count", monitored resource="apigee.googleapis.com/Proxy"}) ) > 5 Target error response count Use case : Use the target/response count to monitor the API Target error response rate.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource types TargetV2 Metric targetv2/request count Group By method and all TargetV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxyv2/response count to monitor the proxy error response rate.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint, metric.response code], [value response count aggregate: aggregate(value.response count)] Latencies Proxy latencies percentile Use case : Use the proxyv2/latencies percentile to monitor the latency percentile (p50, p90, p95, and p99) of all API proxy responses to a request.
- Apigee-X users have access to API traffic SLI metrics such as Proxy, Target, and Policy in the Org's Google Cloud project and can use these SLI metrics for monitoring and alerts.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource types TargetV2 Metric targetv2/request count Group By method and all TargetV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxyv2/response count to monitor the proxy error response rate.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint, metric.response code], [value response count aggregate: aggregate(value.response count)] Latencies Proxy latencies percentile Use case : Use the proxyv2/latencies percentile to monitor the latency percentile (p50, p90, p95, and p99) of all API proxy responses to a request.
- Apigee-X users have access to API traffic SLI metrics such as Proxy, Target, and Policy in the Org's Google Cloud project and can use these SLI metrics for monitoring and alerts.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.

