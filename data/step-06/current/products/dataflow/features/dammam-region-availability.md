---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.772Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dammam region availability"
feature_slug: "dammam-region-availability"
latest_feature_date: "2023-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints"
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
keywords:
  - "dammam"
  - "region"
  - "availability"
  - "dataflow"
  - "available"
  - "me"
  - "central2"
---

# Dammam region availability

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow is available in the Dammam region (me-central2).

## Extended Definition

Dataflow is available in the Dammam region (me-central2).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)

## Supporting Pages

### Dataflow regions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- Source ID: `site-docs-reference-required-3`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Regional placement offers benefits such as: Improved resource availability: Dataflow jobs are more resilient to zonal resource availability errors, because workers can continue to be created in other zones with remaining availability.
- Regional placement By default, the region that you select configures the Dataflow worker pool to utilize all available zones within the region.
- This feature is available in all regions where Dataflow is supported.
- Automatic zone placement For jobs not supported for regional placement, the best zone within the region is selected automatically, based on the available zone capacity at the time of the job creation request.

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Region description Region name Doha me-central1 Dammam, Saudi Arabia me-central2 Tel Aviv me-west1 Africa The following table lists the regions in Africa where Dataflow is available.
- Region description Region name Warsaw europe-central2 Finland europe-north1 Stockholm europe-north2 Madrid europe-southwest1 Belgium europe-west1 London europe-west2 Frankfurt europe-west3 Netherlands europe-west4 Zurich europe-west6 Milan europe-west8 Paris europe-west9 Berlin europe-west10 Turin europe-west12 Middle East The following table lists the regions in the Middle East where Dataflow is available.
- Region description Region name Montréal northamerica-northeast1 Toronto northamerica-northeast2 Queretaro, Mexico northamerica-south1 São Paulo southamerica-east1 Santiago southamerica-west1 Iowa us-central1 South Carolina us-east1 Northern Virginia us-east4 Columbus, Ohio us-east5 Oregon us-west1 Los Angeles, California us-west2 Salt Lake City, Utah us-west3 Las Vegas, Nevada us-west4 Dallas, Texas us-south1 Asia Pacific The following table lists the regions in Asia Pacific where Dataflow is available.
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Request payload size exceeds the limit: 20971520 bytes When you run a pipeline, the job might fail with the following error: com.google.api.client.googleapis.json.GoogleJsonResponseException: 400 Bad Request POST https://dataflow.googleapis.com/v1b3/projects/PROJECT ID/locations/REGION/jobs/JOB ID/workItems:reportStatus { "code": 400, "errors": [ { "domain": "global", "message": "Request payload size exceeds the limit: 20971520 bytes.", "reason": "badRequest" } ], "message": "Request payload size exceeds the limit: 20971520 bytes.", "status": "INVALID ARGUMENT" } This error can occur when a job using the Dataflow runner has a very large job graph.
- Check your usage of Compute Engine quotas To view Compute Engine resource usage compared to Dataflow quotas for the zone you're targeting, run the following command: gcloud compute regions describe [REGION] Review the results for the following resources to see if any are exceeding quota: CPUS DISKS TOTAL GB IN USE ADDRESSES INSTANCE GROUPS INSTANCES REGIONAL INSTANCE GROUP MANAGERS If needed, request a quota change .
- Cannot read and write in different locations When you run a Dataflow job, you might see the following error in the log files: message:Cannot read and write in different locations: source: SOURCE REGION , destination: DESTINATION REGION ,reason:invalid This error occurs when the source and destination are in different regions.
- This error occurs if your DoFn s are using values in the global namespace that are not available on the Dataflow worker.

