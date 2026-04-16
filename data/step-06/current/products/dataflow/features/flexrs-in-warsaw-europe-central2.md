---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.824Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "FlexRS in Warsaw (europe-central2)"
feature_slug: "flexrs-in-warsaw-europe-central2"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/guides/flexrs"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
keywords:
  - "flexrs"
  - "warsaw"
  - "europe"
  - "central2"
  - "feature"
  - "makes"
  - "available"
  - "zones"
---

# FlexRS in Warsaw (europe-central2)

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This feature makes FlexRS available in zones in the Warsaw region europe-central2.

## Extended Definition

This feature makes FlexRS available in zones in the Warsaw region europe-central2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)

## Supporting Pages

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Region description Region name Warsaw europe-central2 Finland europe-north1 Stockholm europe-north2 Madrid europe-southwest1 Belgium europe-west1 London europe-west2 Frankfurt europe-west3 Netherlands europe-west4 Zurich europe-west6 Milan europe-west8 Paris europe-west9 Berlin europe-west10 Turin europe-west12 Middle East The following table lists the regions in the Middle East where Dataflow is available.
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.
- Region description Region name Doha me-central1 Dammam, Saudi Arabia me-central2 Tel Aviv me-west1 Africa The following table lists the regions in Africa where Dataflow is available.
- For information about available regions and zones for GPUs, see GPU regions and zones availability in the Compute Engine documentation.

### Use Flexible Resource Scheduling in Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to add parameters to your regular pipeline parameters in order to use FlexRS: --flexRSGoal = COST OPTIMIZED \ --region = europe-west1 \ --maxNumWorkers = 10 \ --workerMachineType = n1-highmem-16 If you omit region , maxNumWorkers , and workerMachineType , the Dataflow service determines the default value.
- The following example shows how to add parameters to your regular pipeline parameters in order to use FlexRS: --flexrs goal = COST OPTIMIZED \ --region = europe-west1 \ --max num workers = 10 \ --machine type = n1-highmem-16 If you omit region , max num workers , and machine type , the Dataflow service determines the default value.
- The following example shows how to add parameters to your regular pipeline parameters in order to use FlexRS: --flexrs goal = COST OPTIMIZED \ --region = europe-west1 \ --max num workers = 10 \ --machine type = n1-highmem-16 If you omit region , max num workers , and machine type , the Dataflow service determines the default value.
- Pipeline options Java To enable a FlexRS job, use the following pipeline option: --flexRSGoal=COST OPTIMIZED , where the cost-optimized goal means that the Dataflow service chooses any available discounted resources. --flexRSGoal=SPEED OPTIMIZED , where it optimizes for lower execution time.

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

