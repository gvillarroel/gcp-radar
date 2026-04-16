---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.791Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Regional availability in Columbus (us-east5)"
feature_slug: "regional-availability-in-columbus-us-east5"
latest_feature_date: "2022-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
keywords:
  - "regional"
  - "availability"
  - "columbus"
  - "us"
  - "east5"
  - "feature"
  - "makes"
  - "dataflow"
---

# Regional availability in Columbus (us-east5)

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This feature makes Dataflow available in the Columbus region us-east5.

## Extended Definition

This feature makes Dataflow available in the Columbus region us-east5.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)

## Supporting Pages

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

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Region description Region name Montréal northamerica-northeast1 Toronto northamerica-northeast2 Queretaro, Mexico northamerica-south1 São Paulo southamerica-east1 Santiago southamerica-west1 Iowa us-central1 South Carolina us-east1 Northern Virginia us-east4 Columbus, Ohio us-east5 Oregon us-west1 Los Angeles, California us-west2 Salt Lake City, Utah us-west3 Las Vegas, Nevada us-west4 Dallas, Texas us-south1 Asia Pacific The following table lists the regions in Asia Pacific where Dataflow is available.
- Regional availability You can use Dataflow workers, endpoints, Streaming Engine, Shuffle, and FlexRS in supported regions.
- Region description Region name Johannesburg africa-south1 GPU availability Dataflow supports a variety of GPU types.
- Note: The Dataflow Data Pipelines feature is available in the Cloud Scheduler regions .

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Check your usage of Compute Engine quotas To view Compute Engine resource usage compared to Dataflow quotas for the zone you're targeting, run the following command: gcloud compute regions describe [REGION] Review the results for the following resources to see if any are exceeding quota: CPUS DISKS TOTAL GB IN USE ADDRESSES INSTANCE GROUPS INSTANCES REGIONAL INSTANCE GROUP MANAGERS If needed, request a quota change .
- For details and availability, see Dataflow Shuffle .
- For details and availability, see Dataflow Shuffle .
- For details and availability, see Dataflow Shuffle .

