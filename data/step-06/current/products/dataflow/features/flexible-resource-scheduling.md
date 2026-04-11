---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.848Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Flexible Resource Scheduling"
feature_slug: "flexible-resource-scheduling"
latest_feature_date: "2020-04-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/flexrs"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost"
keywords:
  - "flexible"
  - "resource"
  - "scheduling"
  - "optimizes"
  - "dataflow"
  - "usage"
  - "and"
  - "cost"
---

# Flexible Resource Scheduling

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Flexible Resource Scheduling optimizes Dataflow resource usage and cost for eligible jobs; Flexible Resource Scheduling optimizes Dataflow resource usage and cost for eligible jobs.

## Extended Definition

Flexible Resource Scheduling optimizes Dataflow resource usage and cost for eligible jobs; Flexible Resource Scheduling optimizes Dataflow resource usage and cost for eligible jobs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost](https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost)

## Supporting Pages

### Use Flexible Resource Scheduling in Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use Flexible Resource Scheduling in Cloud Dataflow Stay organized with collections Save and categorize content based on your preferences.
- Pipeline options Java To enable a FlexRS job, use the following pipeline option: --flexRSGoal=COST OPTIMIZED , where the cost-optimized goal means that the Dataflow service chooses any available discounted resources. --flexRSGoal=SPEED OPTIMIZED , where it optimizes for lower execution time.
- Python To enable a FlexRS job, use the following pipeline option: --flexrs goal=COST OPTIMIZED , where the cost-optimized goal means that the Dataflow service chooses any available discounted resources. --flexrs goal=SPEED OPTIMIZED , where it optimizes for lower execution time.
- Go To enable a FlexRS job, use the following pipeline option: --flexrs goal=COST OPTIMIZED , where the cost-optimized goal means that the Dataflow service chooses any available discounted resources. --flexrs goal=SPEED OPTIMIZED , where it optimizes for lower execution time.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- February 03, 2021 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: asia-east2 Hong Kong asia-northeast2 - Japan (Osaka) asia-northeast3 - Seoul asia-southeast2 - Jakarta europe-north1 - Finland us-west3 - Salt Lake City us-west4 - Las Vegas January 29, 2021 Announcement Flex templates now support updating streaming jobs and Flexible Resource Scheduling (FlexRS).
- Feature Cloud Dataflow Shuffle is now available in two additional regions: asia-northeast1 (Tokyo) europe-west4 (Netherlands) Feature Cloud Dataflow provides beta support for Flexible Resource Scheduling (FlexRS) in the us-central1 and europe-west1 regions .
- Feature Cloud Dataflow provides beta support for Flexible Resource Scheduling (FlexRS) in the us-central1 and europe-west1 regions .
- November 18, 2019 Feature Flexible Resource Scheduling (FlexRS) in Cloud Dataflow is generally available.

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Dataflow Flexible Resource Scheduling Dataflow FlexRS reduces batch processing costs by using advanced scheduling techniques , the Dataflow Shuffle service, and a combination of preemptible virtual machine (VM) instances and regular VMs.
- Fusion and combine optimizations Dataflow uses your pipeline code to create an execution graph that represents your pipeline's PCollection s and transforms, and optimizes the graph for the most efficient performance and resource usage.
- Job optimizations In addition to managing Google Cloud resources, Dataflow automatically performs and optimizes many aspects of distributed parallel processing for you.
- For more information about FlexRS, see Using Flexible Resource Scheduling in Dataflow .

### Dataflow estimated cost \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost](https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resources include vCPUs, memory, Dataflow Shuffle data processed or Streaming Engine data processed, and SSD and HDD disk usage.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Dataflow estimated cost Stay organized with collections Save and categorize content based on your preferences.
- The Estimated Cost page in the Google Cloud console provides the following information: Details about which resources contribute to the job cost and by how much.
- Dataflow cost monitoring approximates the TPU accelerator costs using the vCPU and memory costs, even though TPU workers don't incur vCPU and memory charges.

