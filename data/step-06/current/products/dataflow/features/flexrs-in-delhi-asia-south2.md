---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.816Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "FlexRS in Delhi (asia-south2)"
feature_slug: "flexrs-in-delhi-asia-south2"
latest_feature_date: "2021-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints"
keywords:
  - "flexrs"
  - "delhi"
  - "asia"
  - "south2"
  - "feature"
  - "makes"
  - "available"
  - "zones"
---

# FlexRS in Delhi (asia-south2)

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This feature makes FlexRS available in zones in the Delhi region asia-south2.

## Extended Definition

This feature makes FlexRS available in zones in the Delhi region asia-south2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)

## Supporting Pages

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.
- Region description Region name Montréal northamerica-northeast1 Toronto northamerica-northeast2 Queretaro, Mexico northamerica-south1 São Paulo southamerica-east1 Santiago southamerica-west1 Iowa us-central1 South Carolina us-east1 Northern Virginia us-east4 Columbus, Ohio us-east5 Oregon us-west1 Los Angeles, California us-west2 Salt Lake City, Utah us-west3 Las Vegas, Nevada us-west4 Dallas, Texas us-south1 Asia Pacific The following table lists the regions in Asia Pacific where Dataflow is available.
- For information about available regions and zones for GPUs, see GPU regions and zones availability in the Compute Engine documentation.
- For information about available regions and zones for TPUs, see TPU regions and zones in the Cloud TPU documentation.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- ZONE RESOURCE POOL EXHAUSTED WITH DETAILS: Instance ' INSTANCE NAME ' creation failed: The zone 'projects/ PROJECT ID /zones/ ZONE NAME ' does not have enough resources available to fulfill the request. '(resource type: RESOURCE TYPE )'.
- BigQuery connector errors The following sections contain common BigQuery connector errors that you might encounter and steps for resolving or troubleshooting the errors. quotaExceeded When using the BigQuery connector to write to BigQuery using streaming inserts, write throughput is lower than expected, and the following error might occur: quotaExceeded Slow throughput might be due to your pipeline exceeding the available BigQuery streaming insert quota.
- Image pull request failed with error During worker startup, one of the following errors appears in the worker or job logs: Image pull request failed with error pull access denied for IMAGE NAME manifest for IMAGE NAME not found: manifest unknown: Failed to fetch Get IMAGE NAME : Service Unavailable These errors occur if a worker is unable to start up because the worker can't pull a Docker container image.
- For configurations available in the Apache Beam SDK for Java, see BigQueryPipelineOptions , and for configurations available in the Apache Beam SDK for Python, see the WriteToBigQuery transform . rateLimitExceeded When using the BigQuery connector, the following error occurs: rateLimitExceeded This error occurs if too many BigQuery API requests are sent during a short duration.

### Dataflow regions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- Source ID: `site-docs-reference-required-3`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Regional placement By default, the region that you select configures the Dataflow worker pool to utilize all available zones within the region.
- You can run the gcloud compute regions list command to see a listing of regions and zones that are available for worker deployment.
- This feature is available in all regions where Dataflow is supported.
- This feature is only available for Streaming Engine jobs.

