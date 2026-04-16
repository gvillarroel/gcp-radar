---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.852Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming autoscaling"
feature_slug: "streaming-autoscaling"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics"
  - "https://docs.cloud.google.com/dataflow/docs/guides/right-fitting"
keywords:
  - "streaming"
  - "autoscaling"
  - "automatically"
  - "adjusts"
  - "resources"
  - "pipelines"
  - "use"
  - "engine"
---

# Streaming autoscaling

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Streaming autoscaling automatically adjusts resources for streaming pipelines that use Streaming Engine.

## Extended Definition

Streaming autoscaling automatically adjusts resources for streaming pipelines that use Streaming Engine.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics](https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics)
- [https://docs.cloud.google.com/dataflow/docs/guides/right-fitting](https://docs.cloud.google.com/dataflow/docs/guides/right-fitting)

## Supporting Pages

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow fully manages Google Cloud services for you, such as Compute Engine and Cloud Storage to run your Dataflow job, and automatically spins up and tears down necessary resources.
- Streaming Engine By default, the Dataflow pipeline runner executes the steps of your streaming pipeline entirely on worker virtual machines, consuming worker CPU, memory, and Persistent Disk storage.
- Job optimizations In addition to managing Google Cloud resources, Dataflow automatically performs and optimizes many aspects of distributed parallel processing for you.
- Parallelization and distribution Dataflow automatically partitions your data and distributes your worker code to Compute Engine instances for parallel processing.

### Monitor Dataflow autoscaling \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics](https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Tune Horizontal Autoscaling for streaming pipelines Troubleshoot Dataflow autoscaling Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Each metric is organized into the following charts: Autoscaling Backlog (Streaming Engine only) CPU utilization The autoscaling action bar displays the current autoscaling status and workers count.
- Autoscaling rationale (Streaming Engine only) The Autoscaling rationale chart shows why the autoscaler scaled up, scaled down, or took no actions during a given time period.
- Monitor autoscaling metrics The Dataflow service automatically chooses the number of worker instances required to run your autoscaling job.

### Right fitting \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/right-fitting](https://docs.cloud.google.com/dataflow/docs/guides/right-fitting)
- Source ID: `site-docs-reference-2`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify right fitting You can verify that right fitting is enabled by viewing the autoscaling metrics and verifying that the Worker pool column is visible and lists different pools: Streaming right fitting performance Streaming pipelines with right fitting enabled might not always perform better than pipelines without right fitting enabled.
- Right fitting is supported with streaming pipelines with horizontal autoscaling enabled.
- If you use Compute Engine reservations with Auto VM Selection, note the following: If you have reservations that are consumed automatically , they might be used if Compute Engine provisions VMs of a matching machine type.
- Also, streaming pipelines with right fitting enabled using accelerator Resource Hints might use more accelerators than is deisirable.

