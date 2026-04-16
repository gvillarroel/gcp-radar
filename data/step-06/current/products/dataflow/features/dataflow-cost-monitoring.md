---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.781Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow cost monitoring"
feature_slug: "dataflow-cost-monitoring"
latest_feature_date: "2023-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard"
  - "https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview"
keywords:
  - "dataflow"
  - "cost"
  - "monitoring"
  - "provides"
  - "visibility"
  - "into"
  - "job"
  - "costs"
---

# Dataflow cost monitoring

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow cost monitoring provides visibility into Dataflow job costs.

## Extended Definition

Dataflow cost monitoring provides visibility into Dataflow job costs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost](https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost)
- [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- [https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview](https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview)

## Supporting Pages

### Dataflow estimated cost \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost](https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost)
- Source ID: `site-docs-reference-required-3`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow cost monitoring approximates the TPU accelerator costs using the vCPU and memory costs, even though TPU workers don't incur vCPU and memory charges.
- Estimated costs are calculated by multiplying the resource usage metrics as shown in Cloud Monitoring by the price of those resources in the job region .
- Limitations Dataflow cost monitoring does not support Dataflow Prime jobs and does not reflect additional GPU accelerator cost.
- You can use monitoring alerts to get notifications when your job costs cross a specified threshold.

### Customize the Dataflow monitoring dashboard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- Source ID: `site-docs-reference-required-3`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow job metrics can give you a baseline for cost optimization, but the actual costs might differ.
- Map metric names to PromQL strings To use Monitoring metrics in PromQL queries, you must map the metric name to a PromQL string, as follows: Metric name PromQL string job/total vcpu time dataflow googleapis com:job total vcpu time job/total memory usage time dataflow googleapis com:job total memory usage time job/total streaming data processed dataflow googleapis com:job total streaming data processed job/total pd usage time dataflow googleapis com:job total pd usage time For more information, see Mapping Cloud Monitoring metrics to PromQL .
- Formula: ((Standard PD time)[Bucket 1m] / Seconds per hour) Standard PD price sum( max over time( dataflow googleapis com:job total pd usage time{storage type="HDD"}[1m] ) / 3600 STANDARD PD PRICE ) by (job id) Formula: ((SSD PD time)[Bucket 1m] / Seconds per hour) SSD PD price sum( max over time( dataflow googleapis com:job total pd usage time{storage type="SSD"}[1m] ) / 3600 SSD PD PRICE ) by (job id) Summing the previous values gives the estimated cost per job.
- CPU PRICE : CPU price, per vCPU per hour MEMORY PRICE : Memory price, per GB per hour SHUFFLE PRICE : Shuffle price, per GB STANDARD PD PRICE : Standard Persistent Disk price, per GB per hour SSD PD PRICE : SSD Persistent Disk price, per GB per hour Edit the dashboard If you didn't previously create a custom dashboard for Dataflow in this project, create one as follows: In the Google Cloud console, go to the Dataflow Monitoring page.

### Use the Dataflow job monitoring interface \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview](https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Use Cloud Monitoring to create alerts and view Dataflow metrics, including custom metrics Learn more about building production-ready data pipelines Learn how to troubleshoot your pipeline Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Monitoring interface components The monitoring interface contains the following visualizers and charts: Project monitoring dashboard A dashboard that monitors your Dataflow jobs at the project level.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use the Dataflow job monitoring interface Stay organized with collections Save and categorize content based on your preferences.
- When you run your pipeline by using Dataflow, you can view that job and any others by using the Dataflow monitoring interface.

