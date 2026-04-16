---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:34:53.934Z"
product_name: "Apigee Analytics"
product_slug: "apigee-analytics"
feature_name: "Target Performance dashboard aggregate data"
feature_slug: "target-performance-dashboard-aggregate-data"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/using-performance-metrics"
keywords:
  - "target"
  - "performance"
  - "dashboard"
  - "aggregate"
  - "supports"
  - "viewing"
  - "charts"
---

# Target Performance dashboard aggregate data

Product: Apigee Analytics
Coverage: MEDIUM

## Step 02 Summary

The Target Performance dashboard supports viewing aggregate data in its charts.

## Extended Definition

The Target Performance dashboard supports viewing aggregate data in its charts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/using-performance-metrics](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/using-performance-metrics)

## Supporting Pages

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.
- Resource types TargetV2 Metric targetv2/request count Group By method and all TargetV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxyv2/response count to monitor the proxy error response rate.
- Resource types ProxyV2 Metric proxyv2/request count Group By method and all ProxyV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/request count' align rate(1m) every 1m group by [metric.method], [value request count aggregate: aggregate(value.request count)] Target request count Use case : Use the targetv2/request count to monitor the Apigee runtime target request count.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint, metric.response code], [value response count aggregate: aggregate(value.response count)] Latencies Proxy latencies percentile Use case : Use the proxyv2/latencies percentile to monitor the latency percentile (p50, p90, p95, and p99) of all API proxy responses to a request.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.
- Resource types TargetV2 Metric targetv2/request count Group By method and all TargetV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxyv2/response count to monitor the proxy error response rate.
- Resource types ProxyV2 Metric proxyv2/request count Group By method and all ProxyV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/request count' align rate(1m) every 1m group by [metric.method], [value request count aggregate: aggregate(value.request count)] Target request count Use case : Use the targetv2/request count to monitor the Apigee runtime target request count.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint, metric.response code], [value response count aggregate: aggregate(value.response count)] Latencies Proxy latencies percentile Use case : Use the proxyv2/latencies percentile to monitor the latency percentile (p50, p90, p95, and p99) of all API proxy responses to a request.

### Using performance metrics \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/using-performance-metrics](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/using-performance-metrics)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on using analytics to troubleshoot problems, see: Apigee Analytics overview Creating and managing custom reports Using the analytics dashboards Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application development Apigee Guides Send feedback Using performance metrics Stay organized with collections Save and categorize content based on your preferences.
- For example, if your API goes down, analytics charts can help illustrate whether the failure was sudden or involved a slow lead-in time.
- The Apigee Analytics API lets you monitor and manage API performance and health.

