---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:23:14.070Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Automatic Ops Agent installation for Batch jobs"
feature_slug: "automatic-ops-agent-installation-for-batch-jobs"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs"
  - "https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceClient"
keywords:
  - "installation"
  - "automatic"
  - "agent"
  - "ops"
  - "can"
  - "jobs"
  - "batch"
  - "for"
---

# Automatic Ops Agent installation for Batch jobs

Product: Batch
Coverage: LOW

## Step 02 Summary

Batch jobs can be configured to automatically install the Ops Agent to provide additional Cloud Monitoring resource metrics.

## Extended Definition

Batch jobs can be configured to automatically install the Ops Agent to provide additional Cloud Monitoring resource metrics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- [https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceClient](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceClient)

## Supporting Pages

### REST Resource: projects.locations.jobs \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "installGpuDrivers" : boolean , "installOpsAgent" : boolean , "blockProjectSshKeys" : boolean , // Union field policy template can be only one of the following: "policy" : { object ( InstancePolicy ) } , "instanceTemplate" : string // End of list of possible types for union field policy template . } Fields installGpuDrivers boolean Set this field true if you want Batch to help fetch drivers from a third party location and install them for GPUs specified in policy.accelerators or instanceTemplate on your behalf.
- For non Container-Optimized Image cases, following https://github.com/GoogleCloudPlatform/compute-gpu-installation/blob/main/linux/install gpu driver.py . installOpsAgent boolean Optional.
- Logs include information that is automatically written by the Batch service agent and any information that you configured the job's runnables to write to the stdout or stderr streams.
- Tasks get a BATCH TASK INDEX and BATCH TASK COUNT environment variable, in addition to any environment variables set in taskEnvironments, specifying the number of Tasks in the Task's parent TaskGroup, and the specific Task's index in the TaskGroup (0 through BATCH TASK COUNT - 1). taskCountPerNode string ( int64 format) Max number of tasks that can be run on a VM at the same time.

### "Class BatchServiceAsyncClient (0.20.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import batch v1 async def sample cancel job(): Create a client client = batch v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import batch v1 async def sample list jobs(): Create a client client = batch v1 .
- CancelJobRequest ( name="name value", ) Make the request operation = client. cancel job (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.batch v1.types.CancelJobRequest , dict]] The request object.
- ListJobsRequest ( ) Make the request page result = client. list jobs (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.batch v1.types.ListJobsRequest , dict]] The request object.

### "Class BatchServiceClient (0.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceClient](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceClient)
- Source ID: `site-python-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import batch v1 def sample cancel job(): Create a client client = batch v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import batch v1 def sample list jobs(): Create a client client = batch v1 .
- CancelJobRequest ( name="name value", ) Make the request operation = client. cancel job (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.batch v1.types.CancelJobRequest , dict] The request object.
- ListJobsRequest ( ) Make the request page result = client. list jobs (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.batch v1.types.ListJobsRequest , dict] The request object.

