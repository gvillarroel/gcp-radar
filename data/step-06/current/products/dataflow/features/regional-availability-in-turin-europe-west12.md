---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.783Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Regional availability in Turin (europe-west12)"
feature_slug: "regional-availability-in-turin-europe-west12"
latest_feature_date: "2023-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
keywords:
  - "regional"
  - "availability"
  - "turin"
  - "europe"
  - "west12"
  - "feature"
  - "makes"
  - "dataflow"
---

# Regional availability in Turin (europe-west12)

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This feature makes Dataflow available in the Turin region europe-west12.

## Extended Definition

This feature makes Dataflow available in the Turin region europe-west12.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)

## Supporting Pages

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Region description Region name Warsaw europe-central2 Finland europe-north1 Stockholm europe-north2 Madrid europe-southwest1 Belgium europe-west1 London europe-west2 Frankfurt europe-west3 Netherlands europe-west4 Zurich europe-west6 Milan europe-west8 Paris europe-west9 Berlin europe-west10 Turin europe-west12 Middle East The following table lists the regions in the Middle East where Dataflow is available.
- Regional availability You can use Dataflow workers, endpoints, Streaming Engine, Shuffle, and FlexRS in supported regions.
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.
- Region description Region name Johannesburg africa-south1 GPU availability Dataflow supports a variety of GPU types.

### Dataflow regions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- Source ID: `site-docs-reference-required-3`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Regional placement offers benefits such as: Improved resource availability: Dataflow jobs are more resilient to zonal resource availability errors, because workers can continue to be created in other zones with remaining availability.
- Regional placement By default, the region that you select configures the Dataflow worker pool to utilize all available zones within the region.
- The following limitations apply: Regional placement is supported only for jobs using Streaming Engine or Dataflow Shuffle.
- Jobs that have opted out of Streaming Engine or Dataflow Shuffle cannot use regional placement.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Check your usage of Compute Engine quotas To view Compute Engine resource usage compared to Dataflow quotas for the zone you're targeting, run the following command: gcloud compute regions describe [REGION] Review the results for the following resources to see if any are exceeding quota: CPUS DISKS TOTAL GB IN USE ADDRESSES INSTANCE GROUPS INSTANCES REGIONAL INSTANCE GROUP MANAGERS If needed, request a quota change .
- For details and availability, see Dataflow Shuffle .
- For details and availability, see Dataflow Shuffle .
- For details and availability, see Dataflow Shuffle .

