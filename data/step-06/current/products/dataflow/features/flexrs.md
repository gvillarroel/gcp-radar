---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.828Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "FlexRS"
feature_slug: "flexrs"
latest_feature_date: "2021-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/flexrs"
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
keywords:
  - "flexrs"
  - "flexible"
  - "resource"
  - "scheduling"
  - "feature"
  - "reducing"
  - "dataflow"
  - "job"
---

# FlexRS

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

FlexRS is a flexible resource scheduling feature for reducing Dataflow job cost; FlexRS is a flexible resource scheduling feature for reducing Dataflow job cost.

## Extended Definition

FlexRS is a flexible resource scheduling feature for reducing Dataflow job cost; FlexRS is a flexible resource scheduling feature for reducing Dataflow job cost.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)

## Supporting Pages

### Use Flexible Resource Scheduling in Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page explains how to enable Flexible Resource Scheduling (FlexRS) for autoscaled batch pipelines in Dataflow.
- As an alternative, use the following pipeline option . --additional-experiments = flexible resource scheduling,shuffle mode = service,delayed launch Monitor FlexRS jobs You can monitor the status of your FlexRS job on the Google Cloud console in two places: The Jobs page that shows all your jobs.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use Flexible Resource Scheduling in Cloud Dataflow Stay organized with collections Save and categorize content based on your preferences.
- Pricing FlexRS jobs are billed for the following resources: Regular and preemptible CPUs Memory resources Dataflow Shuffle resources 25 GB per worker of Persistent Disk resources While Dataflow uses both preemptible and regular workers to execute your FlexRS job, you are billed a uniform discounted rate compared to regular Dataflow prices regardless of the worker type.

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow Flexible Resource Scheduling Dataflow FlexRS reduces batch processing costs by using advanced scheduling techniques , the Dataflow Shuffle service, and a combination of preemptible virtual machine (VM) instances and regular VMs.
- For more information about FlexRS, see Using Flexible Resource Scheduling in Dataflow .
- Automatic tuning features The Dataflow service includes several features that provide on-the-fly adjustment of resource allocation and data partitioning.
- Fusion and combine optimizations Dataflow uses your pipeline code to create an execution graph that represents your pipeline's PCollection s and transforms, and optimizes the graph for the most efficient performance and resource usage.

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Flexible Resource Scheduling (FlexRS) .
- Feature Dataflow Prime Dataflow Runner v2 Default feature with no option to turn off for batch jobs and optional for streaming jobs Default feature with an option to turn off for batch jobs and optional for streaming jobs Dataflow Shuffle for batch jobs Default feature with an option to turn off Default feature with an option to turn off Streaming Engine for streaming jobs Optional feature for Java pipelines and always on for Python pipelines Optional feature for Java pipelines and always on for Python pipelines since 2.45.0 Horizontal Autoscaling Default feature with option to turn off Default feature with option to turn off Vertical Autoscaling Default feature with option to turn off Not applicable Right fitting Optional feature Optional feature Billing Serverless billing Standard billing What's next Read about Dataflow quotas .
- Java pipelines that meet the following requirements can use the MapState and SetState classes: use Streaming Engine use Apache Beam SDK versions 2.58.0 and later don't use Runner v2 All pipeline options not explicitly mentioned previously or in the feature comparison table work the same for Dataflow and Dataflow Prime.
- Unsupported features Dataflow Prime doesn't support the following: Designating specific VM types by using the flag --worker machine type or --machine type for Python pipelines and --workerMachineType for Java pipelines.

