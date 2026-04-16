---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.773Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Tau T2A Arm worker machine support"
feature_slug: "tau-t2a-arm-worker-machine-support"
latest_feature_date: "2023-09-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml"
keywords:
  - "tau"
  - "t2a"
  - "arm"
  - "worker"
  - "machine"
  - "dataflow"
  - "supports"
  - "series"
---

# Tau T2A Arm worker machine support

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports the Tau T2A Arm machine series as a worker machine type.

## Extended Definition

Dataflow supports the Tau T2A Arm machine series as a worker machine type.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm)
- [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml)

## Supporting Pages

### Configure Dataflow worker VMs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm)
- Source ID: `site-docs-reference-required-3`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- By default, Dataflow selects the machine type for the worker VMs that run your job, along with the size and type of Persistent Disk.
- Machine type The Compute Engine machine type that Dataflow uses when starting worker VMs.
- To verify that the Dataflow worker VMs are created with the specified minimum CPU platform, check the Cloud Logging entries for the job as follows: Navigate to the Cloud Logging console in the Google Cloud console.
- Shared-core machine types (for example, f1-micro , g1-small , e2-micro , e2-small , and e2-medium ) are not recommended for Dataflow jobs and are not supported under the Dataflow Service Level Agreement .

### Customize the Dataflow monitoring dashboard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- Source ID: `site-docs-reference-required-3`
- Final score: 34
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
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Save and load YAML job definitions with the job builder Stay organized with collections Save and categorize content based on your preferences.

