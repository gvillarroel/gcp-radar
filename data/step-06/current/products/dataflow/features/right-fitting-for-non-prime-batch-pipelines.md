---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.767Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Right fitting for non-Prime batch pipelines"
feature_slug: "right-fitting-for-non-prime-batch-pipelines"
latest_feature_date: "2024-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/right-fitting"
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
keywords:
  - "right"
  - "fitting"
  - "non"
  - "prime"
  - "batch"
  - "pipelines"
  - "dataflow"
---

# Right fitting for non-Prime batch pipelines

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow right fitting is supported for non-Prime batch pipelines.

## Extended Definition

Dataflow right fitting is supported for non-Prime batch pipelines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/right-fitting](https://docs.cloud.google.com/dataflow/docs/guides/right-fitting)
- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)

## Supporting Pages

### Right fitting \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/right-fitting](https://docs.cloud.google.com/dataflow/docs/guides/right-fitting)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Right fitting is supported with batch pipelines.
- Right fitting supports Dataflow Prime .
- Verify right fitting You can verify that right fitting is enabled by viewing the autoscaling metrics and verifying that the Worker pool column is visible and lists different pools: Streaming right fitting performance Streaming pipelines with right fitting enabled might not always perform better than pipelines without right fitting enabled.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Right fitting Stay organized with collections Save and categorize content based on your preferences.

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Dataflow Prime Dataflow Runner v2 Default feature with no option to turn off for batch jobs and optional for streaming jobs Default feature with an option to turn off for batch jobs and optional for streaming jobs Dataflow Shuffle for batch jobs Default feature with an option to turn off Default feature with an option to turn off Streaming Engine for streaming jobs Optional feature for Java pipelines and always on for Python pipelines Optional feature for Java pipelines and always on for Python pipelines since 2.45.0 Horizontal Autoscaling Default feature with option to turn off Default feature with option to turn off Vertical Autoscaling Default feature with option to turn off Not applicable Right fitting Optional feature Optional feature Billing Serverless billing Standard billing What's next Read about Dataflow quotas .
- By default, Dataflow Prime uses Dataflow Shuffle and Dataflow Runner v2 for batch pipelines.
- Dataflow Prime supports both batch and streaming pipelines.
- Java pipelines that meet the following requirements can use the MapState and SetState classes: use Streaming Engine use Apache Beam SDK versions 2.58.0 and later don't use Runner v2 All pipeline options not explicitly mentioned previously or in the feature comparison table work the same for Dataflow and Dataflow Prime.

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.
- Use speculative execution to avoid stragglers For batch pipelines, you can enable speculative execution , a feature to mitigate the impact of slow-running or stuck tasks.
- By default, Dataflow retries these failed tasks four times in batch mode and an unlimited number of times in streaming mode.
- Vertical Autoscaling also requires Dataflow Prime, which has additional limitations and a different billing model .

