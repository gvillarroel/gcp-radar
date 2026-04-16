---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:52:59.657Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "VPC Service Controls support for Batch"
feature_slug: "vpc-service-controls-support-for-batch"
latest_feature_date: "2023-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
  - "https://docs.cloud.google.com/batch/docs/troubleshooting"
  - "https://docs.cloud.google.com/batch/docs/resources"
keywords:
  - "perimeters"
  - "resources"
  - "controls"
  - "protect"
  - "availability"
  - "added"
---

# VPC Service Controls support for Batch

Product: Batch
Coverage: MEDIUM

## Step 02 Summary

Batch added general availability support for VPC Service Controls to protect Batch resources and data with service perimeters.

## Extended Definition

Batch added general availability support for VPC Service Controls to protect Batch resources and data with service perimeters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/batch/docs/troubleshooting](https://docs.cloud.google.com/batch/docs/troubleshooting)
- [https://docs.cloud.google.com/batch/docs/resources](https://docs.cloud.google.com/batch/docs/resources)

## Supporting Pages

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Networking overview provides an overview of when and how you can customize the networking configuration for a job, including specifying the job's network, blocking external connections, and protecting data and resources by using VPC Service Controls.
- Secondly, a job is more likely to be delayed or fail if any of its required resources are in low capacity relative to the current demand due to resource availability errors .
- Firstly, a job cannot run if you happen to specify any resources that aren't offered in that location—when this happens, the job fails with a zone availability error .
- Job resource availability: the availability of the job's required resources within the allowed locations.

### Troubleshooting \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/troubleshooting](https://docs.cloud.google.com/batch/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Verify that there aren't any issues with the methods you are using to view metrics by doing the following: Unless you want to see metrics for only running resources, ensure that you are viewing metrics by using the Metrics Explorer or a custom dashboard made from Metrics Explorer charts.
- Please set no external ip address field to be true Solution This issue occurs because you are attempting to create and run a job with VMs that have external IP addresses in a VPC Service Controls service perimeter.
- Unfortunately, many hardware failures or software failures can cause a VM to be unresponsive—for example, a VM might crash due to a temporary host event or insufficient resources .
- For more information about how to configure networking for a job in a VPC Service Controls service perimeter, see Use VPC Service Controls with Batch .

### Resources \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/resources](https://docs.cloud.google.com/batch/docs/resources)
- Source ID: `site-api-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Batch Resources Send feedback Resources Stay organized with collections Save and categorize content based on your preferences.
- Quotas and limits Usage policies for your Batch resources.

