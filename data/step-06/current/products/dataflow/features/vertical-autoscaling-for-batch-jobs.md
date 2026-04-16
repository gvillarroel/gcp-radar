---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.782Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Vertical Autoscaling for batch jobs"
feature_slug: "vertical-autoscaling-for-batch-jobs"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
keywords:
  - "vertical"
  - "autoscaling"
  - "batch"
  - "jobs"
  - "automatically"
  - "adjusts"
  - "worker"
  - "machine"
---

# Vertical Autoscaling for batch jobs

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Vertical Autoscaling automatically adjusts worker machine resources for batch jobs.

## Extended Definition

Vertical Autoscaling automatically adjusts worker machine resources for batch jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)

## Supporting Pages

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-reference-2`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertical Autoscaling This feature automatically adjusts the memory available to the Dataflow worker VMs to fit the needs of the pipeline and help prevent out-of-memory errors.
- Feature Dataflow Prime Dataflow Runner v2 Default feature with no option to turn off for batch jobs and optional for streaming jobs Default feature with an option to turn off for batch jobs and optional for streaming jobs Dataflow Shuffle for batch jobs Default feature with an option to turn off Default feature with an option to turn off Streaming Engine for streaming jobs Optional feature for Java pipelines and always on for Python pipelines Optional feature for Java pipelines and always on for Python pipelines since 2.45.0 Horizontal Autoscaling Default feature with option to turn off Default feature with option to turn off Vertical Autoscaling Default feature with option to turn off Not applicable Right fitting Optional feature Optional feature Billing Serverless billing Standard billing What's next Read about Dataflow quotas .
- Unsupported features Dataflow Prime doesn't support the following: Designating specific VM types by using the flag --worker machine type or --machine type for Python pipelines and --workerMachineType for Java pipelines.
- Dataflow Prime features The following is the list of supported Dataflow Prime features for different kinds of pipelines: Vertical Autoscaling (memory).

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Speculative execution can help pipelines complete faster by providing an alternative execution path for work items that are experiencing delays due to slow worker machines or other transient issues such as nondeterministic bugs, resource throttling, or connectivity issues.
- Because Vertical Autoscaling might increase the cost of your job and doesn't prevent all out-of-memory failures, you still need to address excessive memory consumption issues.
- Enable Vertical Autoscaling If you are unsure how much memory your job needs or think that your job is at risk of running out of memory, enable Vertical Autoscaling.
- Run small experiments for large jobs Before you run a large batch job, run one or more smaller jobs on a subset of the dataset.

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These features include the following: Horizontal Autoscaling Vertical Autoscaling Dynamic work rebalancing Note: With the introduction of Vertical Autoscaling, the feature that was previously called Autoscaling has been renamed to Horizontal Autoscaling.
- Dataflow Flexible Resource Scheduling Dataflow FlexRS reduces batch processing costs by using advanced scheduling techniques , the Dataflow Shuffle service, and a combination of preemptible virtual machine (VM) instances and regular VMs.
- Streaming Engine By default, the Dataflow pipeline runner executes the steps of your streaming pipeline entirely on worker virtual machines, consuming worker CPU, memory, and Persistent Disk storage.
- Parallelization and distribution Dataflow automatically partitions your data and distributes your worker code to Compute Engine instances for parallel processing.

