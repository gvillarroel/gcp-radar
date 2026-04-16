---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:52:59.656Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch regional availability"
feature_slug: "batch-regional-availability"
latest_feature_date: "2023-10-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/batch/docs/locations"
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
  - "https://docs.cloud.google.com/iam/docs/authentication"
keywords:
  - "southeast2"
  - "australia"
  - "expanded"
  - "europe"
  - "regional"
  - "availability"
---

# Batch regional availability

Product: Batch
Coverage: MEDIUM

## Step 02 Summary

Batch availability was expanded to the australia-southeast2, europe-west8, europe-west12, me-west1, northamerica-northeast2, southamerica-east1, and us-east5 regions; Batch became available in the europe-west10 (Berlin) region.

## Extended Definition

Batch availability was expanded to the australia-southeast2, europe-west8, europe-west12, me-west1, northamerica-northeast2, southamerica-east1, and us-east5 regions; Batch became available in the europe-west10 (Berlin) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/batch/docs/locations](https://docs.cloud.google.com/batch/docs/locations)
- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)

## Supporting Pages

### Batch locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/locations](https://docs.cloud.google.com/batch/docs/locations)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Region description Region name Details Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Sydney australia-southeast1 Melbourne australia-southeast2 Recommended zones to obtain GPUs from Dynamic Workload Scheduler When you create and run a job that uses GPUs and use calendar-mode reservations ( Preview ) or Flex-start VMs ( Preview ), which both use Dynamic Workload Scheduler, we recommend that you use the following zones.
- A4 A3 Ultra A3 Mega A3 High GPU machine series Recommended zones for Dynamic Workload Scheduler capacity Details A4 asia-southeast1-b (Singapore) us-central1-b (Iowa) Low CO 2 us-south1-b (Dallas) Low CO 2 A3 Ultra asia-south1-b (Mumbai) asia-south2-c (Delhi) europe-west1-b (Belgium) Low CO 2 europe-west4-a (Netherlands) Low CO 2 us-central1-b (Iowa) Low CO 2 us-east4-b (Northern Virginia) us-south1-b (Dallas) Low CO 2 A3 Mega europe-west1-c (Belgium) Low CO 2 europe-west4-b (Netherlands) Low CO 2 europe-west4-c (Netherlands) Low CO 2 us-central1-a (Iowa) Low CO 2 us-central1-b (Iowa) Low CO 2 us-central1-c (Iowa) Low CO 2 us-east4-b (Northern Virginia) A3 High asia-east1-c (Taiwan) europe-west1-b (Belgium) Low CO 2 us-central1-a (Iowa) Low CO 2 us-central1-b (Iowa) Low CO 2 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Region description Region name Details Montréal northamerica-northeast1 Low CO 2 Toronto northamerica-northeast2 Low CO 2 São Paulo southamerica-east1 Low CO 2 Santiago southamerica-west1 Low CO 2 Iowa us-central1 Low CO 2 South Carolina us-east1 Northern Virginia us-east4 Columbus us-east5 Dallas us-south1 Low CO 2 Oregon us-west1 Low CO 2 Los Angeles us-west2 Salt Lake City us-west3 Las Vegas us-west4 The following table lists the regions in Europe and the Middle East where Batch is available.
- Region description Region name Details Warsaw europe-central2 Finland europe-north1 Low CO 2 Madrid europe-southwest1 Low CO 2 Belgium europe-west1 Low CO 2 London europe-west2 Low CO 2 Frankfurt europe-west3 Netherlands europe-west4 Low CO 2 Zürich europe-west6 Low CO 2 Milan europe-west8 Paris europe-west9 Low CO 2 Berlin europe-west10 Turin europe-west12 Doha me-central1 Dammam me-central2 Tel Aviv me-west1 The following table lists the regions in Asia Pacific where Batch is available.

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- Job resources Each Batch job runs on a regional managed instance group (MIG), which is a group of one or more matching Compute Engine virtual machine (VM) instances that are each located in one of the included zones.
- Secondly, a job is more likely to be delayed or fail if any of its required resources are in low capacity relative to the current demand due to resource availability errors .
- Firstly, a job cannot run if you happen to specify any resources that aren't offered in that location—when this happens, the job fails with a zone availability error .
- Using reserved VMs can help you minimize a job's scheduling time, prevent resource availability errors, and optimize costs.

### "Authenticate to IAM \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)
- Source ID: `site-iam-reference`
- Final score: 44
- Re-rank relevance: N/A

