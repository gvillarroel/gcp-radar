---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.755Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Flex-start GPU provisioning"
feature_slug: "flex-start-gpu-provisioning"
latest_feature_date: "2025-09-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/overview"
  - "https://docs.cloud.google.com/dataflow/docs/resources"
  - "https://docs.cloud.google.com/dataflow/docs/guides/flexrs"
keywords:
  - "flex"
  - "start"
  - "gpu"
  - "provisioning"
  - "dataflow"
  - "supports"
  - "model"
  - "jobs"
---

# Flex-start GPU provisioning

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports the flex-start provisioning model for GPU jobs in batch pipelines to improve access to constrained GPU resources.

## Extended Definition

Dataflow supports the flex-start provisioning model for GPU jobs in batch pipelines to improve access to constrained GPU resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/overview](https://docs.cloud.google.com/dataflow/docs/overview)
- [https://docs.cloud.google.com/dataflow/docs/resources](https://docs.cloud.google.com/dataflow/docs/resources)
- [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)

## Supporting Pages

### Resources \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources](https://docs.cloud.google.com/dataflow/docs/resources)
- Source ID: `site-docs-reference-required-4`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Resources Send feedback Resources Stay organized with collections Save and categorize content based on your preferences.
- Quotas & limits This page provides information on the resource quotas associated with using Dataflow.
- Shared responsibility The shared security and compliance responsibilities when you use Dataflow.
- Media This page contains media articles, videos and podcasts related to Dataflow.

### Dataflow overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/overview](https://docs.cloud.google.com/dataflow/docs/overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 35
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Observable data pipeline jobs You can monitor the status of your Dataflow jobs through the Dataflow monitoring interface in the Google Cloud console.
- Dataflow supports several different ways to create and execute pipelines, depending on your needs: Write code using the Apache Beam SDKs.
- How data pipelines work for stream and batch processing Dataflow uses a data pipeline model, where data moves through a series of stages.
- Flexible data pipeline development You can use Dataflow for pipelines with straightforward use cases, such as just moving data.

### Use Flexible Resource Scheduling in Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- Source ID: `site-docs-reference-2`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Pricing FlexRS jobs are billed for the following resources: Regular and preemptible CPUs Memory resources Dataflow Shuffle resources 25 GB per worker of Persistent Disk resources While Dataflow uses both preemptible and regular workers to execute your FlexRS job, you are billed a uniform discounted rate compared to regular Dataflow prices regardless of the worker type.
- The Dataflow service selects the zone for all FlexRS jobs in the region that you specified with the region parameter.
- The Dataflow service selects the zone for all FlexRS jobs in the region that you specified with the region parameter.
- The Dataflow service selects the zone for all FlexRS jobs in the region that you specified with the region parameter.

