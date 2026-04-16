---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.748Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Two-way HTTPS health monitor support"
feature_slug: "two-way-https-health-monitor-support"
latest_feature_date: "2024-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/cluster-monitoring-guidelines"
keywords:
  - "monitors"
  - "health"
  - "monitor"
  - "https"
---

# Two-way HTTPS health monitor support

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee health monitors now support two-way HTTPS checks by using TargetServer SSL parameters in HTTPMonitor configuration.

## Extended Definition

Apigee health monitors now support two-way HTTPS checks by using TargetServer SSL parameters in HTTPMonitor configuration.

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
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To monitor the Apigee Runtime cluster infrastructure health and availability, a cluster admin can monitor the container and pod common resource use such as CPU, Mem, disk, and container restart counts.
- At a minimum, along with Cassandra resource usage (CPU, Mem, and disk volume), the client's read and write request latency should be monitored for Cassandra service health.
- A combination of Resource Type labels and metrics labels should be used to effectively monitor cluster health and performance.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To monitor the Apigee Runtime cluster infrastructure health and availability, a cluster admin can monitor the container and pod common resource use such as CPU, Mem, disk, and container restart counts.
- At a minimum, along with Cassandra resource usage (CPU, Mem, and disk volume), the client's read and write request latency should be monitored for Cassandra service health.
- A combination of Resource Type labels and metrics labels should be used to effectively monitor cluster health and performance.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To monitor the Apigee Runtime cluster infrastructure health and availability, a cluster admin can monitor the container and pod common resource use such as CPU, Mem, disk, and container restart counts.
- At a minimum, along with Cassandra resource usage (CPU, Mem, and disk volume), the client's read and write request latency should be monitored for Cassandra service health.
- A combination of Resource Type labels and metrics labels should be used to effectively monitor cluster health and performance.
- For example: In production, trigger an event notification if the read clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Read' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Cassandra write request latency Use case : The cassandra/clientrequest latency (with scope=Write) SLI metric provides Cassandra services write request latency (at 99th percentile, 95th percentile, or 75th percentile).

