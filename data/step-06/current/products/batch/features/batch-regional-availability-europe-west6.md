---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:52:59.664Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch regional availability: europe-west6"
feature_slug: "batch-regional-availability-europe-west6"
latest_feature_date: "2022-09-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/batch/docs/locations"
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
  - "https://docs.cloud.google.com/batch/docs/create-run-basic-job"
keywords:
  - "west6"
  - "europe"
  - "regional"
  - "region"
  - "availability"
  - "became"
  - "available"
---

# Batch regional availability: europe-west6

Product: Batch
Coverage: MEDIUM

## Step 02 Summary

Batch became available in the europe-west6 region.

## Extended Definition

Batch became available in the europe-west6 region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/batch/docs/locations](https://docs.cloud.google.com/batch/docs/locations)
- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)

## Supporting Pages

### Batch locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/locations](https://docs.cloud.google.com/batch/docs/locations)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Region description Region name Details Warsaw europe-central2 Finland europe-north1 Low CO 2 Madrid europe-southwest1 Low CO 2 Belgium europe-west1 Low CO 2 London europe-west2 Low CO 2 Frankfurt europe-west3 Netherlands europe-west4 Low CO 2 Zürich europe-west6 Low CO 2 Milan europe-west8 Paris europe-west9 Low CO 2 Berlin europe-west10 Turin europe-west12 Doha me-central1 Dammam me-central2 Tel Aviv me-west1 The following table lists the regions in Asia Pacific where Batch is available.
- Region description Region name Details Montréal northamerica-northeast1 Low CO 2 Toronto northamerica-northeast2 Low CO 2 São Paulo southamerica-east1 Low CO 2 Santiago southamerica-west1 Low CO 2 Iowa us-central1 Low CO 2 South Carolina us-east1 Northern Virginia us-east4 Columbus us-east5 Dallas us-south1 Low CO 2 Oregon us-west1 Low CO 2 Los Angeles us-west2 Salt Lake City us-west3 Las Vegas us-west4 The following table lists the regions in Europe and the Middle East where Batch is available.
- Regions The following table lists the regions in the Americas where Batch is available.
- Batch is available in the following regions.

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Job resources Each Batch job runs on a regional managed instance group (MIG), which is a group of one or more matching Compute Engine virtual machine (VM) instances that are each located in one of the included zones.
- Task scheduling When a job runs, its tasks are scheduled according to the scheduling policy ( schedulingPolicy ) field , which lets you specify one of the following options: As soon as possible ( AS SOON AS POSSIBLE ) (default): tasks run as soon as resources are available and can run in parallel.
- After you understand the fundamentals for job creation, consider creating a job that uses one or more of the following additional configuration options: Important: Some options for job creation are not available in the Google Cloud console.
- Secondly, a job is more likely to be delayed or fail if any of its required resources are in low capacity relative to the current demand due to resource availability errors .

### Create and run a basic job \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Regions that are // available for Batch are listed on: https://cloud.google.com/batch/docs/get-started#locations String region = "europe-central2" ; // The name of the job that will be created. // It needs to be unique for each project and region pair.
- Regions that are // available for Batch are listed on: https://cloud.google.com/batch/docs/get-started#locations String region = "europe-central2" ; // The name of the job that will be created. // It needs to be unique for each project and region pair.
- Regions that are available for Batch are listed on: https://cloud.google.com/batch/docs/get-started#locations job name: the name of the job that will be created.
- Regions that are available for Batch are listed on: https://cloud.google.com/batch/docs/get-started#locations job name: the name of the job that will be created.

