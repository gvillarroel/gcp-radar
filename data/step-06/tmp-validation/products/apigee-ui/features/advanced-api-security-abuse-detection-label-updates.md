---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.430Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Advanced API Security abuse detection label updates"
feature_slug: "advanced-api-security-abuse-detection-label-updates"
latest_feature_date: "2023-05-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines"
keywords:
  - "detection"
  - "advanced"
  - "updates"
  - "abuse"
  - "label"
  - "uses"
  - "security"
  - "view"
---

# Advanced API Security abuse detection label updates

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The Advanced API Security abuse detection view uses updated labels for detection metrics and fields.

## Extended Definition

The Advanced API Security abuse detection view uses updated labels for detection metrics and fields.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)

## Supporting Pages

### UI overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- API security Identify security threats and vulnerabilities with Advanced API Security .
- Whether you are a Pay-as-you-go or Subscription customer, this view provides you with a snapshot of key resource usage, as well as shortcuts to other monitoring and identity management resources for your organization, including: Cloud Monitoring Cloud Billing Identity and Access Management Explore Apigee API management features From the main navigation menu, you can explore the range of Apigee API management features available for your organization, as described in the table below: Main navigation menu Purpose Proxy development Develop and deploy API proxies .
- Apigee API management From the Overview page, you can: Get started as a new Apigee user Test your Apigee runtime View key resource usage metrics Explore Apigee API management features Get started as a new Apigee user If you just are new to Apigee, you can begin your API management journey with quickstart learning options launched from the Overview page: Begin by deploying your first proxy : Watch a video tutorial that walks you through the steps required to create and deploy an API proxy.
- For more advanced use cases, follow along with step-by-step video walkthroughs showcased in the Tutorials section of the page: Test your Apigee runtime If you just completed provisioning a new Apigee organization, use the Test your Apigee runtime card to deploy and call a proxy, as described below: Pay-as-you-go organization If you have a Pay-as-you-go organization: Click Deploy API to deploy the sample Hello World proxy to the test-env environment in your new runtime instance.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource types TargetV2 Metric targetv2/request count Group By method and all TargetV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxyv2/response count to monitor the proxy error response rate.
- Resource types ProxyV2 Metric proxyv2/request count Group By method and all ProxyV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/request count' align rate(1m) every 1m group by [metric.method], [value request count aggregate: aggregate(value.request count)] Target request count Use case : Use the targetv2/request count to monitor the Apigee runtime target request count.
- Resource types k8s container Metric cassandra/clientrequest rate Filter By scope = Read and unit = OneMinuteRate Group By scope , unit , and all k8s container resource type labels Aggregator sum Alert consideration For any potential problems or significant change in clients query patterns; for example a sudden, unexpected spike or drop in write requests that warrant further investigation.
- Resource types k8s container Metric upstream/request count Filter By method , response type , container name , and all k8s container resource type labels Group By Aggregator sum Alert consideration If there are errors in upstream/response count metrics with non-200 response codes returned from Apigee Control plane, then its required further investigation into those errors.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource types TargetV2 Metric targetv2/request count Group By method and all TargetV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/TargetV2 metric 'apigee.googleapis.com/targetv2/request count' align rate(1m) every 1m group by [metric.method, metric.type, metric.endpoint], [value request count aggregate: aggregate(value.request count)] Error Rate Proxy error response count Use case : Use the proxyv2/response count to monitor the proxy error response rate.
- Resource types ProxyV2 Metric proxyv2/request count Group By method and all ProxyV2 resource type labels Aggregator sum Alert consideration Events like abnormal request count spike/drop alerts Alert threshold None Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/request count' align rate(1m) every 1m group by [metric.method], [value request count aggregate: aggregate(value.request count)] Target request count Use case : Use the targetv2/request count to monitor the Apigee runtime target request count.
- Resource types k8s container Metric cassandra/clientrequest rate Filter By scope = Read and unit = OneMinuteRate Group By scope , unit , and all k8s container resource type labels Aggregator sum Alert consideration For any potential problems or significant change in clients query patterns; for example a sudden, unexpected spike or drop in write requests that warrant further investigation.
- Resource types k8s container Metric upstream/request count Filter By method , response type , container name , and all k8s container resource type labels Group By Aggregator sum Alert consideration If there are errors in upstream/response count metrics with non-200 response codes returned from Apigee Control plane, then its required further investigation into those errors.

