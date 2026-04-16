---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.872Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dynamic work rebalancing"
feature_slug: "dynamic-work-rebalancing"
latest_feature_date: "2015-03-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/overview"
keywords:
  - "dynamic"
  - "work"
  - "rebalancing"
  - "dataflow"
  - "supports"
  - "during"
  - "pipeline"
  - "execution"
---

# Dynamic work rebalancing

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports dynamic work rebalancing during pipeline execution.

## Extended Definition

Dataflow supports dynamic work rebalancing during pipeline execution.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/overview](https://docs.cloud.google.com/dataflow/docs/overview)

## Supporting Pages

### "Monitoring pipeline performance using Cloud Profiler \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Profiler agent is installed during Dataflow worker startup.
- Heap profiling requires Java 11 or higher. --dataflowServiceOptions=enable google cloud profiler --dataflowServiceOptions=enable google cloud heap sampling Note: The pipeline option --dataflowServiceOptions is the Dataflow preferred way to enable Dataflow features.
- Go To enable CPU and heap profiling, start the pipeline with the following option. --dataflow service options=enable google cloud profiler Note: The pipeline option --dataflow service options is the Dataflow preferred way to enable Dataflow features.
- Heap profiling is not yet supported for Python. --dataflow service options=enable google cloud profiler Note: The pipeline option --dataflow service options is the Dataflow preferred way to enable Dataflow features.

### Dataflow overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/overview](https://docs.cloud.google.com/dataflow/docs/overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow supports several different ways to create and execute pipelines, depending on your needs: Write code using the Apache Beam SDKs.
- How data pipelines work for stream and batch processing Dataflow uses a data pipeline model, where data moves through a series of stages.
- For example, Dataflow can dynamically rebalance work among the VMs, so that parallel work completes more efficiently.
- When you run a Dataflow job, the Dataflow service allocates a pool of worker VMs to execute the pipeline.

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Dataflow's Streaming Engine moves pipeline execution out of the worker VMs and into the Dataflow service backend.
- Dataflow jobs use Cloud Storage to store temporary files during pipeline execution.
- These features include the following: Horizontal Autoscaling Vertical Autoscaling Dynamic work rebalancing Note: With the introduction of Vertical Autoscaling, the feature that was previously called Autoscaling has been renamed to Horizontal Autoscaling.
- Fusion and combine optimizations Dataflow uses your pipeline code to create an execution graph that represents your pipeline's PCollection s and transforms, and optimizes the graph for the most efficient performance and resource usage.

