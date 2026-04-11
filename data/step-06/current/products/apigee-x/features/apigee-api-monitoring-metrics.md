---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.847Z"
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
keywords:
  - "API Monitoring metrics"
  - "request/response metrics"
  - "proxy and target metrics"
  - "target response latency"
  - "target request count"
  - "proxy response latency"
  - "proxy request count"
  - "API Monitoring"
---

# Apigee API Monitoring metrics

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee added a new suite of API Monitoring metrics for proxy and target request/response counts and latencies to improve scalability and observability; Apigee added a new suite of API Monitoring metrics for proxy and target request/response counts and latencies to improve scalability and observability.

## Extended Definition

Apigee API Monitoring metrics in the documented Apigee Hybrid cluster monitoring guidance are Cloud Monitoring metrics used to measure and observe API traffic, specifically the `proxyv2/request count` and `targetv2/request count` resource metrics. These metrics are configured in Monitoring dashboards with MQL queries (for example, grouped by `metric.method` and aligned/rate-aggregated per minute), and are used to monitor proxy request volume and runtime target request volume, including alert scenarios such as abnormal request spikes or drops.

## Evidence Summary

The cited pages provide explicit metric types and dashboard/query examples for Apigee API monitoring, confirming proxy and target request-count metrics and their monitoring/alerting usage, but they do not clearly document latency metrics in the provided excerpts.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)

## Supporting Pages

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: STRONG
- Re-rank rationale: It provides core guidance on Apigee Hybrid SLI metrics, metric resource types, and alerting, which is directly relevant to defining API monitoring capabilities.

Evidence snippets:
- Resource types ProxyV2 Metric proxyv2/request count Group By method and all ProxyV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/request count' align rate(1m) every 1m group by [metric.method], [value request count aggregate: aggregate(value.request count)] Target request count Use case : Use the targetv2/request count to monitor the Apigee runtime target request count.
- Request Rate Proxy request count Use case : Use the proxyv2/request count to monitor the proxy request count.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: The page documents Apigee Hybrid SLI metric concepts, resource types, and alerting for proxy/target monitoring, which supports observability context but not the specific new metric-suit feature details.

Evidence snippets:
- Resource types ProxyV2 Metric proxyv2/request count Group By method and all ProxyV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/request count' align rate(1m) every 1m group by [metric.method], [value request count aggregate: aggregate(value.request count)] Target request count Use case : Use the targetv2/request count to monitor the Apigee runtime target request count.
- Request Rate Proxy request count Use case : Use the proxyv2/request count to monitor the proxy request count.

