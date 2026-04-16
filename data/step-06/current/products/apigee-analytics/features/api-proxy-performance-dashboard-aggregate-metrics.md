---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:34:53.936Z"
product_name: "Apigee Analytics"
product_slug: "apigee-analytics"
feature_name: "API proxy performance dashboard aggregate metrics"
feature_slug: "api-proxy-performance-dashboard-aggregate-metrics"
latest_feature_date: "2025-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference"
keywords:
  - "proxy"
  - "performance"
  - "dashboard"
  - "aggregate"
  - "metrics"
  - "includes"
  - "such"
  - "average"
---

# API proxy performance dashboard aggregate metrics

Product: Apigee Analytics
Coverage: MEDIUM

## Step 02 Summary

The API proxy performance dashboard includes aggregate metrics such as average TPS in each chart; The API proxy performance dashboard includes aggregate metrics such as average TPS in each chart.

## Extended Definition

The API proxy performance dashboard includes aggregate metrics such as average TPS in each chart; The API proxy performance dashboard includes aggregate metrics such as average TPS in each chart.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)

## Supporting Pages

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/policyv2/latencies percentile' filter (metric.percentile == 'p99') group by 1m, [value latencies percentile mean: mean(value.latencies percentile)] every 1m group by [metric.policy name, metric.percentile], [value latencies percentile mean aggregate: aggregate(value latencies percentile mean)] Database Cassandra Apigee Cassandra database service has multiple Cassandra SLI metrics .
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.
- For example: in production, trigger an event notification if the write clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Write' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Apigee Control plane Apigee Synchronizer service SLI metrics provide request and response counts and latencies between the Apigee control plane and the Hybrid runtime plane.
- Alert threshold None Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Read' && metric.unit == 'OneMinuteRate') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Cassandra write request rate Use case : The cassandra/clientrequest rate (with scope=Write) SLI metric provides insight into Cassandra services write request average rate at any given time.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/policyv2/latencies percentile' filter (metric.percentile == 'p99') group by 1m, [value latencies percentile mean: mean(value.latencies percentile)] every 1m group by [metric.policy name, metric.percentile], [value latencies percentile mean aggregate: aggregate(value latencies percentile mean)] Database Cassandra Apigee Cassandra database service has multiple Cassandra SLI metrics .
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.
- For example: in production, trigger an event notification if the write clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Write' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Apigee Control plane Apigee Synchronizer service SLI metrics provide request and response counts and latencies between the Apigee control plane and the Hybrid runtime plane.
- Alert threshold None Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Read' && metric.unit == 'OneMinuteRate') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Cassandra write request rate Use case : The cassandra/clientrequest rate (with scope=Write) SLI metric provides insight into Cassandra services write request average rate at any given time.

### "Analytics metrics, dimensions, and filters reference \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns metrics for API proxies with the name books or music: filter=(apiproxy in 'books','music') Returns metrics for API proxies with names that start with m : filter=(apiproxy like 'm%') Returns metrics for API proxies with names that do not start with m : filter=(apiproxy not like 'm%') Returns metrics for API calls with response status codes between 400 and 599 : filter=(response status code ge 400 and response status code le 599) Returns metrics for API calls with response status code of 200 and a target response code of 404 : filter=(response status code eq 200 and target response code eq 404) Returns metrics for API calls with a response status code of 500 : filter=(response status code eq 500) Returns metrics for API calls that didn't result in errors: filter=(is error eq 0) Returns metrics for API calls that didn't result in null responses: filter=(response status code isnot null) Following are operators you can use to build report filters.
- For example, policy error metrics, grouped by the developer app dimension, might help you discover that an API key or OAuth token has expired for a given app; or you might find that a specific API proxy is throwing a lot of SpikeArrest policy errors, leading you to discover that the proxy's spike arrest limit doesn't account for an increase in holiday traffic.
- The time includes network overhead (such as the time it takes load balancers and routers to do their work), request processing latency, response processing latency, and target response time (if the response is served from the target service instead of cache).
- Gateway Flow ID is useful for distinguishing metrics in high-TPS situations where other dimensions such as organization, environment, and timestamp are identical across calls.

