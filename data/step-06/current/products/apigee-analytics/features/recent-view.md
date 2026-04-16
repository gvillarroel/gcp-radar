---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:34:53.937Z"
product_name: "Apigee Analytics"
product_slug: "apigee-analytics"
feature_name: "Recent view"
feature_slug: "recent-view"
latest_feature_date: "2021-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
keywords:
  - "recent"
  - "view"
  - "monitoring"
  - "displays"
  - "treemaps"
  - "traffic"
  - "proxy"
  - "incident"
---

# Recent view

Product: Apigee Analytics
Coverage: MEDIUM

## Step 02 Summary

The API Monitoring Recent view displays treemaps of API traffic by proxy with incident, error rate, and latency indicators.

## Extended Definition

The API Monitoring Recent view displays treemaps of API traffic by proxy with incident, error rate, and latency indicators.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)

## Supporting Pages

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apigee-X users have access to API traffic SLI metrics such as Proxy, Target, and Policy in the Org's Google Cloud project and can use these SLI metrics for monitoring and alerts.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.
- Resource types TargetV2 Metric targetv2/request count Group By method and all TargetV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxyv2/response count to monitor the proxy error response rate.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/latencies percentile' filter (metric.percentile == 'p99') group by 1m, [value latencies percentile mean: mean(value.latencies percentile)] every 1m group by [metric.method, metric.percentile], [value latencies percentile mean percentile: percentile(value latencies percentile mean, 99)] Target latencies percentile Use case : Use the targetv2/latencies percentile to monitor the latency percentile (p50, p90, p95, and p99) of all API proxy target responses to a request.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apigee-X users have access to API traffic SLI metrics such as Proxy, Target, and Policy in the Org's Google Cloud project and can use these SLI metrics for monitoring and alerts.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.
- Resource types TargetV2 Metric targetv2/request count Group By method and all TargetV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxyv2/response count to monitor the proxy error response rate.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/latencies percentile' filter (metric.percentile == 'p99') group by 1m, [value latencies percentile mean: mean(value.latencies percentile)] every 1m group by [metric.method, metric.percentile], [value latencies percentile mean percentile: percentile(value latencies percentile mean, 99)] Target latencies percentile Use case : Use the targetv2/latencies percentile to monitor the latency percentile (p50, p90, p95, and p99) of all API proxy target responses to a request.

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View message data The Debug view in the Apigee Proxy Editor lets you view headers, variables, objects, and other details such as response time in the API proxy request and response flow.
- To use the Debug view in the Apigee UI to see what happens when the SpikeArrest policy rate is exceeded: In the Google Cloud console, go to the Proxy development > API Proxies page.
- The Debug view also lets you see how a request or response changes as it is processed by an API proxy.
- Home Documentation Application development Apigee Guides Send feedback View message data with the Debug view Stay organized with collections Save and categorize content based on your preferences.

