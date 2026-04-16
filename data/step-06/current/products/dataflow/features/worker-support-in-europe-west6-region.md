---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.853Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Worker support in europe-west6 region"
feature_slug: "worker-support-in-europe-west6-region"
latest_feature_date: "2019-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints"
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/guides/flexrs"
keywords:
  - "worker"
  - "europe"
  - "west6"
  - "region"
  - "dataflow"
  - "can"
  - "run"
  - "vms"
---

# Worker support in europe-west6 region

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow can run worker VMs in zones within the europe-west6 region.

## Extended Definition

Dataflow can run worker VMs in zones within the europe-west6 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)

## Supporting Pages

### Use Flexible Resource Scheduling in Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to add parameters to your regular pipeline parameters in order to use FlexRS: --flexRSGoal = COST OPTIMIZED \ --region = europe-west1 \ --maxNumWorkers = 10 \ --workerMachineType = n1-highmem-16 If you omit region , maxNumWorkers , and workerMachineType , the Dataflow service determines the default value.
- The following example shows how to add parameters to your regular pipeline parameters in order to use FlexRS: --flexrs goal = COST OPTIMIZED \ --region = europe-west1 \ --max num workers = 10 \ --machine type = n1-highmem-16 If you omit region , max num workers , and machine type , the Dataflow service determines the default value.
- The following example shows how to add parameters to your regular pipeline parameters in order to use FlexRS: --flexrs goal = COST OPTIMIZED \ --region = europe-west1 \ --max num workers = 10 \ --machine type = n1-highmem-16 If you omit region , max num workers , and machine type , the Dataflow service determines the default value.
- Pricing FlexRS jobs are billed for the following resources: Regular and preemptible CPUs Memory resources Dataflow Shuffle resources 25 GB per worker of Persistent Disk resources While Dataflow uses both preemptible and regular workers to execute your FlexRS job, you are billed a uniform discounted rate compared to regular Dataflow prices regardless of the worker type.

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Region description Region name Warsaw europe-central2 Finland europe-north1 Stockholm europe-north2 Madrid europe-southwest1 Belgium europe-west1 London europe-west2 Frankfurt europe-west3 Netherlands europe-west4 Zurich europe-west6 Milan europe-west8 Paris europe-west9 Berlin europe-west10 Turin europe-west12 Middle East The following table lists the regions in the Middle East where Dataflow is available.
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.
- Regional availability You can use Dataflow workers, endpoints, Streaming Engine, Shuffle, and FlexRS in supported regions.
- Region description Region name Montréal northamerica-northeast1 Toronto northamerica-northeast2 Queretaro, Mexico northamerica-south1 São Paulo southamerica-east1 Santiago southamerica-west1 Iowa us-central1 South Carolina us-east1 Northern Virginia us-east4 Columbus, Ohio us-east5 Oregon us-west1 Los Angeles, California us-west2 Salt Lake City, Utah us-west3 Las Vegas, Nevada us-west4 Dallas, Texas us-south1 Asia Pacific The following table lists the regions in Asia Pacific where Dataflow is available.

### Dataflow regions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- Source ID: `site-docs-reference-required-3`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Regional placement offers benefits such as: Improved resource availability: Dataflow jobs are more resilient to zonal resource availability errors, because workers can continue to be created in other zones with remaining availability.
- Although user data is strictly handled by Dataflow workers in their assigned geographic region, pipeline log messages are stored in Cloud Logging , which has a single global presence in Google Cloud.
- Note: Starting with Beam SDK version 2.44.0, Dataflow does not support running jobs with workers in a region that is different from the job region.
- Regional placement By default, the region that you select configures the Dataflow worker pool to utilize all available zones within the region.

