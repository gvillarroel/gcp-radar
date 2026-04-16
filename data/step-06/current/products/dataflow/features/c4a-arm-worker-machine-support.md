---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.753Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "C4A Arm worker machine support"
feature_slug: "c4a-arm-worker-machine-support"
latest_feature_date: "2026-02-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml"
keywords:
  - "c4a"
  - "arm"
  - "worker"
  - "machine"
  - "dataflow"
  - "supports"
  - "series"
  - "vms"
---

# C4A Arm worker machine support

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports the C4A Arm machine series for worker VMs to improve power efficiency and price-performance for many workloads.

## Extended Definition

Dataflow supports the C4A Arm machine series for worker VMs to improve power efficiency and price-performance for many workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml)

## Supporting Pages

### Package and import transforms \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers)
- Source ID: `site-docs-reference-required-3`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Package and import transforms Stay organized with collections Save and categorize content based on your preferences.

### Customize the Dataflow monitoring dashboard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- Source ID: `site-docs-reference-required-3`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the top 25 jobs, use a top K filter: topk(25, Sum the individual values. ) Write the complete query The following shows the complete query: topk(25, sum( max over time( dataflow googleapis com:job total vcpu time[1m]) / 3600 CPU PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total memory usage time[1m]) / 3600 MEMORY PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total streaming data processed[1m]) / 1000000000 SHUFFLE PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total pd usage time{storage type="HDD"}[1m]) / 3600 STANDARD PD PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total pd usage time{storage type="SSD"}[1m]) / 3600 SSD PD PRICE ) by (job id) ) Replace the following variables with values from the Dataflow pricing page for your region.
- Map metric names to PromQL strings To use Monitoring metrics in PromQL queries, you must map the metric name to a PromQL string, as follows: Metric name PromQL string job/total vcpu time dataflow googleapis com:job total vcpu time job/total memory usage time dataflow googleapis com:job total memory usage time job/total streaming data processed dataflow googleapis com:job total streaming data processed job/total pd usage time dataflow googleapis com:job total pd usage time For more information, see Mapping Cloud Monitoring metrics to PromQL .
- Formula: ((Standard PD time)[Bucket 1m] / Seconds per hour) Standard PD price sum( max over time( dataflow googleapis com:job total pd usage time{storage type="HDD"}[1m] ) / 3600 STANDARD PD PRICE ) by (job id) Formula: ((SSD PD time)[Bucket 1m] / Seconds per hour) SSD PD price sum( max over time( dataflow googleapis com:job total pd usage time{storage type="SSD"}[1m] ) / 3600 SSD PD PRICE ) by (job id) Summing the previous values gives the estimated cost per job.
- CPU PRICE : CPU price, per vCPU per hour MEMORY PRICE : Memory price, per GB per hour SHUFFLE PRICE : Shuffle price, per GB STANDARD PD PRICE : Standard Persistent Disk price, per GB per hour SSD PD PRICE : SSD Persistent Disk price, per GB per hour Edit the dashboard If you didn't previously create a custom dashboard for Dataflow in this project, create one as follows: In the Google Cloud console, go to the Dataflow Monitoring page.

### "Save and load YAML job definitions with the job builder \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml)
- Source ID: `site-docs-reference-required-3`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Save and load YAML job definitions with the job builder Stay organized with collections Save and categorize content based on your preferences.

