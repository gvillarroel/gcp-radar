---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.488Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Service-level minimum instances"
feature_slug: "service-level-minimum-instances"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/configuring"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "minimum"
  - "configured"
  - "number"
  - "keep"
  - "level"
  - "instances"
---

# Service-level minimum instances

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Service-level minimum instances let you keep a configured minimum number of instances warm for a Cloud Run service; Service-level minimum instances let you keep a configured minimum number of instances warm for a Cloud Run service.

## Extended Definition

Service-level minimum instances let you keep a configured minimum number of instances warm for a Cloud Run service; Service-level minimum instances let you keep a configured minimum number of instances warm for a Cloud Run service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you need to change the default number of container instances that are kept warm, ready to receive requests, you can set revision-level maximum instances and minimum instances .
- You can avoid cold starts for your application and reduce application latency by setting a minimum number of instances.
- Setting a maximum number of instances can help to curb costs and guard against abnormally high request levels .
- When using autoscaling, each Cloud Run revision is automatically scaled to the number of instances needed to handle all incoming requests, events, or CPU utilization.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Shutdown For Cloud Run services, an idle instance can be shut down at any time, including instances kept warm due to a configured minimum number of instances .
- If you have configured a number of minimum instances , you must use instance-based billing so that CPU is allocated outside of requests .
- When a revision does not receive any traffic, it is scaled in to the minimum number of instances configured (zero by default).
- Unless an instance must be kept idle due to the minimum number of instances configuration setting, it won't be kept idle for longer than 15 minutes.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Shutdown For Cloud Run services, an idle instance can be shut down at any time, including instances kept warm due to a configured minimum number of instances .
- If you have configured a number of minimum instances , you must use instance-based billing so that CPU is allocated outside of requests .
- When a revision does not receive any traffic, it is scaled in to the minimum number of instances configured (zero by default).
- Unless an instance must be kept idle due to the minimum number of instances configuration setting, it won't be kept idle for longer than 15 minutes.

