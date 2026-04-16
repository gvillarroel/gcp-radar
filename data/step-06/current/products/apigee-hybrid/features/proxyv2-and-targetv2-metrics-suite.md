---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.842Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "ProxyV2 and TargetV2 metrics suite"
feature_slug: "proxyv2-and-targetv2-metrics-suite"
latest_feature_date: "2024-04-17"
deprecation_date: "2025-04-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/deprecations/proxyv2-targetv2-metrics"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines"
keywords:
  - "targetv2"
  - "proxyv2"
  - "deprecates"
  - "ending"
  - "suite"
  - "metrics"
---

# ProxyV2 and TargetV2 metrics suite

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Deprecates the Proxyv2 and Targetv2 metrics suite, with support ending for hybrid v1.10 and v1.11; deprecated on 2025-04-17.

## Extended Definition

Deprecates the Proxyv2 and Targetv2 metrics suite, with support ending for hybrid v1.10 and v1.11; deprecated on 2025-04-17.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/deprecations/proxyv2-targetv2-metrics](https://docs.cloud.google.com/apigee/docs/deprecations/proxyv2-targetv2-metrics)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)

## Supporting Pages

### "ProxyV2 and TargetV2 metrics deprecation \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/deprecations/proxyv2-targetv2-metrics](https://docs.cloud.google.com/apigee/docs/deprecations/proxyv2-targetv2-metrics)
- Source ID: `site-docs-reference`
- Final score: 247
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Shutdown schedule The following table lists the shutdown schedule for the ProxyV2 and TargetV2 metrics suite: Date Event April 17, 2024 ProxyV2 and TargetV2 metrics suite deprecated for Apigee hybrid v1.12.
- April 17, 2024 Support for the ProxyV2 and TargetV2 metrics suite in Apigee hybrid in v1.10 and v1.11 extended for one year.
- Support for the ProxyV2 and TargetV2 metrics suite in Apigee hybrid v1.10 and v1.11 will end in April of 2025.
- April 17, 2025 Support for the ProxyV2 and TargetV2 metrics suite shut down for all Apigee hybrid versions.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.
- Resource types TargetV2 Metric targetv2/request count Group By method and all TargetV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxyv2/response count to monitor the proxy error response rate.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/latencies percentile' filter (metric.percentile == 'p99') group by 1m, [value latencies percentile mean: mean(value.latencies percentile)] every 1m group by [metric.method, metric.percentile], [value latencies percentile mean percentile: percentile(value latencies percentile mean, 99)] Target latencies percentile Use case : Use the targetv2/latencies percentile to monitor the latency percentile (p50, p90, p95, and p99) of all API proxy target responses to a request.
- Resource types ProxyV2 Metric proxyv2/request count Group By method and all ProxyV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/request count' align rate(1m) every 1m group by [metric.method], [value request count aggregate: aggregate(value.request count)] Target request count Use case : Use the targetv2/request count to monitor the Apigee runtime target request count.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.
- Resource types TargetV2 Metric targetv2/request count Group By method and all TargetV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxyv2/response count to monitor the proxy error response rate.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/latencies percentile' filter (metric.percentile == 'p99') group by 1m, [value latencies percentile mean: mean(value.latencies percentile)] every 1m group by [metric.method, metric.percentile], [value latencies percentile mean percentile: percentile(value latencies percentile mean, 99)] Target latencies percentile Use case : Use the targetv2/latencies percentile to monitor the latency percentile (p50, p90, p95, and p99) of all API proxy target responses to a request.
- Resource types ProxyV2 Metric proxyv2/request count Group By method and all ProxyV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/request count' align rate(1m) every 1m group by [metric.method], [value request count aggregate: aggregate(value.request count)] Target request count Use case : Use the targetv2/request count to monitor the Apigee runtime target request count.

