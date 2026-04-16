---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:34:53.934Z"
product_name: "Apigee Analytics"
product_slug: "apigee-analytics"
feature_name: "Apigee Analytics regional availability"
feature_slug: "apigee-analytics-regional-availability"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
keywords:
  - "apigee"
  - "analytics"
  - "regional"
  - "availability"
  - "available"
  - "hong"
  - "kong"
  - "paulo"
---

# Apigee Analytics regional availability

Product: Apigee Analytics
Coverage: MEDIUM

## Step 02 Summary

Apigee Analytics is available in the Hong Kong and São Paulo regions.

## Extended Definition

Apigee Analytics is available in the Hong Kong and São Paulo regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before using the Model Armor policies, we recommend that you carefully review the Model Armor documentation to make sure you understand the supported use cases, quota restrictions, regional availability, and pricing specific to Model Armor.
- Use regional templates across multiple Apigee instances You can customize the Model Armor template to use regional templates across multiple Apigee instances.
- Enable the API Set the Model Armor regional endpoint To use Model Armor with Apigee, you must set the Model Armor regional endpoint.
- Confirm that you have a Comprehensive environment available in your Apigee instance.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Confirm that you have a Comprehensive environment available in your Apigee instance.
- Increase quotas for dependent services If you experience performance bottlenecks resulting from higher queries per second (QPS), you may need to increase the following quotas for dependent services in your Google Cloud project: Online prediction requests per minute per region (select by region) Regional online prediction requests per base model per minute per region (select by region and the textembedding-gecko model) Matching Engine stream update requests per minute per region (select by region) To increase a quota for one of these services: Go to the Quota & System Limits page: Go to Quota & System Limits In the filter bar, enter name of the specific quota you want to increase, along with the region and model , name if relevant.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview The semantic caching policies help Apigee users with LLM models to intelligently serve identical or semantically similar prompts efficiently, minimizing backend API calls and reducing resource consumption.
- Set environment variables In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables: export PROJECT ID = PROJECT ID export REGION = REGION export RUNTIME HOSTNAME = RUNTIME HOSTNAME Where: PROJECT ID is the ID of the project with your Apigee instance.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customers should use the tools provided to determine the optimal threshold, whether it's the Cloud Monitoring dashboards that customers can create with the MQL provided below or the Apigee's analytics, to identify what "normal" looks like and then tune the alerts thresholds accordingly.
- To monitor the Apigee Runtime cluster infrastructure health and availability, a cluster admin can monitor the container and pod common resource use such as CPU, Mem, disk, and container restart counts.
- Cloud Monitoring dashboard MQL query : fetch apigee.googleapis.com/ProxyV2 metric 'apigee.googleapis.com/proxyv2/response count' filter (metric.response code != '200') align rate(1m) every 1m group by [metric.method, metric.response code, metric.fault code, metric.fault source, metric.apigee fault], [value response count aggregate: aggregate(value.response count)] Example Google Cloud operation Alert policy MQL : fetch apigee.googleapis.com/ProxyV2::apigee.googleapis.com/proxyv2/response count { filter (metric.response code == '500') ; ident } group by drop[metric.response code ], sliding(5m), .sum ratio scale '%' every (30s) condition val() > 5'%' Target error response count Use case : Use the targetv2/response count to monitor the API Target error response rate.
- For example: In production, trigger an event notification if the read clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Read' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Cassandra write request latency Use case : The cassandra/clientrequest latency (with scope=Write) SLI metric provides Cassandra services write request latency (at 99th percentile, 95th percentile, or 75th percentile).

