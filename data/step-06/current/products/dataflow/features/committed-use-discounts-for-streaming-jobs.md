---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.769Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Committed use discounts for streaming jobs"
feature_slug: "committed-use-discounts-for-streaming-jobs"
latest_feature_date: "2024-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/cuds"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard"
  - "https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes"
keywords:
  - "committed"
  - "use"
  - "discounts"
  - "streaming"
  - "jobs"
  - "dataflow"
  - "discounted"
  - "pricing"
---

# Committed use discounts for streaming jobs

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow streaming jobs support committed use discounts for discounted pricing in exchange for long-term compute commitments.

## Extended Definition

Dataflow streaming jobs support committed use discounts for discounted pricing in exchange for long-term compute commitments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds)
- [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)

## Supporting Pages

### Committed use discounts \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds)
- Source ID: `site-docs-reference-required-4`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow committed use discounts automatically apply to your spending on the Dataflow compute capacity used by streaming jobs across projects.
- Committed use discounts (CUDs) for Dataflow provide discounted prices in exchange for your commitment to continuously spend a minimum hourly amount on Dataflow capacity for a year or longer.
- Dataflow CUDs apply to your spending on the following resources: Worker CPU and memory for streaming jobs Streaming Engine data processed Streaming Engine compute units Data Compute Units (DCUs) for Dataflow Prime streaming jobs Dataflow CUDs don't apply to your spending on the following resources: Worker CPU and memory for batch and FlexRS jobs Dataflow Shuffle data processed Data Compute Units (DCUs) for Dataflow Prime batch jobs Persistent Disk storage GPUs and TPUs Snapshots Confidential VMs For a list of applicable SKUs, see Dataflow CUD Eligible SKUs .
- Resources eligible for Dataflow CUDs Note: While Dataflow Committed Use Discounts (CUDs) don't apply to GPUs and TPUs, you can apply resource-based CUDs for these accelerators by purchasing Compute Engine resource-based commitments with specifically targeted reservations, and using these reservations with Dataflow.

### Customize the Dataflow monitoring dashboard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- Source ID: `site-docs-reference-required-3`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the top 25 jobs, use a top K filter: topk(25, Sum the individual values. ) Write the complete query The following shows the complete query: topk(25, sum( max over time( dataflow googleapis com:job total vcpu time[1m]) / 3600 CPU PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total memory usage time[1m]) / 3600 MEMORY PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total streaming data processed[1m]) / 1000000000 SHUFFLE PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total pd usage time{storage type="HDD"}[1m]) / 3600 STANDARD PD PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total pd usage time{storage type="SSD"}[1m]) / 3600 SSD PD PRICE ) by (job id) ) Replace the following variables with values from the Dataflow pricing page for your region.
- Important: The actual cost to run a job depends on factors such as Dataflow pricing model, committed use discounts (CUDs) , and contractual discounts.
- Choose metrics The following metrics are needed to estimate the cost of a job, given the assumptions listed the previous section: Resource Relevant metric CPU (vCPU per hour) job/total vcpu time Memory (GB per hour) job/total memory usage time Data processed during shuffle (GB) job/total streaming data processed Persistent Disk usage (GB per hour, Standard and SSD) job/total pd usage time For more information, see Dataflow pricing .
- Map metric names to PromQL strings To use Monitoring metrics in PromQL queries, you must map the metric name to a PromQL string, as follows: Metric name PromQL string job/total vcpu time dataflow googleapis com:job total vcpu time job/total memory usage time dataflow googleapis com:job total memory usage time job/total streaming data processed dataflow googleapis com:job total streaming data processed job/total pd usage time dataflow googleapis com:job total pd usage time For more information, see Mapping Cloud Monitoring metrics to PromQL .

### "Set the pipeline streaming mode \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the following sections in the Dataflow templates documentation: Flex templates: Metadata Classic templates: Use metadata in your pipeline code View a job's streaming mode To view the streaming mode for a job, go to the Jobs page in the Google Cloud console.
- Select the streaming mode for a template To select the streaming mode when you run a Dataflow streaming template, perform the following steps: Console In the Google Cloud console, go to the Dataflow Jobs page.
- Set the streaming mode Exactly-once processing is the default setting for all Dataflow jobs.
- Dataflow supports two modes for streaming jobs: Exactly-once mode .

