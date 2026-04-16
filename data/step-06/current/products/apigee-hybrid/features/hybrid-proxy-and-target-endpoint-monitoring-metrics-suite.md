---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.842Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Hybrid proxy and target endpoint monitoring metrics suite"
feature_slug: "hybrid-proxy-and-target-endpoint-monitoring-metrics-suite"
latest_feature_date: "2024-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/deprecations/proxyv2-targetv2-metrics"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development"
keywords:
  - "monitoring"
  - "endpoint"
  - "target"
  - "suite"
  - "metrics"
  - "proxy"
---

# Hybrid proxy and target endpoint monitoring metrics suite

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Apigee hybrid 1.12 adds a new set of metrics for monitoring both proxies and target endpoints.

## Extended Definition

Apigee hybrid 1.12 adds a new set of metrics for monitoring both proxies and target endpoints.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/deprecations/proxyv2-targetv2-metrics](https://docs.cloud.google.com/apigee/docs/deprecations/proxyv2-targetv2-metrics)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)

## Supporting Pages

### "ProxyV2 and TargetV2 metrics deprecation \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/deprecations/proxyv2-targetv2-metrics](https://docs.cloud.google.com/apigee/docs/deprecations/proxyv2-targetv2-metrics)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Shutdown schedule The following table lists the shutdown schedule for the ProxyV2 and TargetV2 metrics suite: Date Event April 17, 2024 ProxyV2 and TargetV2 metrics suite deprecated for Apigee hybrid v1.12.
- April 17, 2024 Support for the ProxyV2 and TargetV2 metrics suite in Apigee hybrid in v1.10 and v1.11 extended for one year.
- Support for the ProxyV2 and TargetV2 metrics suite in Apigee hybrid v1.10 and v1.11 will end in April of 2025.
- April 17, 2025 Support for the ProxyV2 and TargetV2 metrics suite shut down for all Apigee hybrid versions.

### "Best practices for API proxy design and development with Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Users who require large payload processing can configure a higher limit using the <Properties> element in the ProxyEndpoint or TargetEndpoint configurations of their API proxies.
- Development standards Comments and Documentation Provide inline comments in the ProxyEndpoint and TargetEndpoint configurations.
- For example, looking up a location (endpoint) from a routing table based on a key found in a request and dynamically applying a target endpoint or a custom/proprietary authentication method, etc.
- Enabling CORS Before publishing your APIs, you'll need to add the CORS policy to the request PreFlow of the ProxyEndpoint to support client-side cross-origin requests.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource types TargetV2 Metric targetv2/request count Group By method and all TargetV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxyv2/response count to monitor the proxy error response rate.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint, metric.response code], [value response count aggregate: aggregate(value.response count)] Latencies Proxy latencies percentile Use case : Use the proxyv2/latencies percentile to monitor the latency percentile (p50, p90, p95, and p99) of all API proxy responses to a request.
- Apigee-X users have access to API traffic SLI metrics such as Proxy, Target, and Policy in the Org's Google Cloud project and can use these SLI metrics for monitoring and alerts.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.

