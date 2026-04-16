---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.759Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Right fitting for streaming jobs"
feature_slug: "right-fitting-for-streaming-jobs"
latest_feature_date: "2025-06-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/right-fitting"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient"
keywords:
  - "right"
  - "fitting"
  - "streaming"
  - "jobs"
  - "dataflow"
  - "lets"
  - "you"
  - "specify"
---

# Right fitting for streaming jobs

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow right fitting lets you specify resource requirements for streaming pipelines or individual pipeline steps.

## Extended Definition

Dataflow right fitting lets you specify resource requirements for streaming pipelines or individual pipeline steps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/right-fitting](https://docs.cloud.google.com/dataflow/docs/guides/right-fitting)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient)

## Supporting Pages

### Right fitting \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/right-fitting](https://docs.cloud.google.com/dataflow/docs/guides/right-fitting)
- Source ID: `site-docs-reference-2`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Streaming right fitting For streaming jobs, you can enable right fitting by setting the --experiments=enable streaming rightfitting pipeline option .
- Verify right fitting You can verify that right fitting is enabled by viewing the autoscaling metrics and verifying that the Worker pool column is visible and lists different pools: Streaming right fitting performance Streaming pipelines with right fitting enabled might not always perform better than pipelines without right fitting enabled.
- For example: The pipeline is using more workers The system latency is higher, or the throughput is lower The worker pool sizes are changing more frequently, or are not stabilizing If you observe this for your pipeline, you can disable right fitting by removing the --experiments=enable streaming rightfitting pipeline option .
- If you specify a machine type both in the accelerator resource hint and in the worker machine type pipeline option , then the pipeline option is ignored during right fitting.

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete the individual resources If you want to keep the Google Cloud project that you used in this quickstart, then delete the individual resources: Go to the Dataflow Jobs page.
- Create a streaming pipeline using a Dataflow template This quickstart shows you how to create a streaming pipeline using a Google-provided Dataflow template.
- Note: Unless specified through the network option, the Dataflow runner runs jobs in the default Virtual Private Cloud network.
- Go to Jobs Select your streaming job from the job list.

### "Class JobsV1Beta3AsyncClient (0.13.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient)
- Source ID: `site-python-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample aggregated list jobs(): Create a client client = dataflow v1beta3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample check active jobs(): Create a client client = dataflow v1beta3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample list jobs(): Create a client client = dataflow v1beta3 .
- Returns Type Description google.cloud.dataflow v1beta3.types.CheckActiveJobsResponse Response for CheckActiveJobsRequest. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create job create job ( request : typing .

