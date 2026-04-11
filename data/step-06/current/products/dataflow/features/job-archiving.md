---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.807Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Job archiving"
feature_slug: "job-archiving"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/jobs-list"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.pagers.AggregatedListJobsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.pagers.AggregatedListJobsPager"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient"
keywords:
  - "job"
  - "archiving"
  - "dataflow"
  - "lets"
  - "users"
  - "archive"
  - "completed"
  - "jobs"
---

# Job archiving

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow lets users archive completed jobs so they move from the main Jobs page to the Archived jobs page in the console.

## Extended Definition

Dataflow lets users archive completed jobs so they move from the main Jobs page to the Archived jobs page in the console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.pagers.AggregatedListJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.pagers.AggregatedListJobsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.pagers.AggregatedListJobsPager](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.pagers.AggregatedListJobsPager)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient)

## Supporting Pages

### Dataflow jobs list \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can only archive completed jobs, which includes jobs in the following states: JOB STATE CANCELLED JOB STATE DRAINED JOB STATE DONE JOB STATE FAILED JOB STATE UPDATED For more information on verifying these states, see Detect Dataflow job completion .
- For troubleshooting information when you are archiving jobs, see Archive job errors in "Troubleshoot Dataflow errors." All archived jobs are deleted after a 30 day retention period.
- Archive a job Follow these steps to remove a completed job from the main jobs list on the Dataflow Jobs page.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID You should receive a response similar to the following: Archived job [ JOB ID ]. createTime: ' 2025-06-29T11:00:02.432552Z ' currentState: JOB STATE DONE currentStateTime: ' 2025-06-29T11:04:25.125921Z ' id: JOB ID jobMetadata: userDisplayProperties: archived: 'true' projectId: PROJECT ID startTime: ' 2025-06-29T11:00:02.432552Z ' View and restore archived jobs Follow these steps to view archived jobs or to restore archived jobs to the main jobs list on the Dataflow Jobs page.

### "Class AggregatedListJobsAsyncPager (0.13.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.pagers.AggregatedListJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.pagers.AggregatedListJobsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataflow v1beta3.types.ListJobsRequest The initial request object. response google.cloud.dataflow v1beta3.types.ListJobsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListJobsResponse ], ], request : google . cloud . dataflow v1beta3 . types . jobs .
- ListJobsResponse ], ], request : google . cloud . dataflow v1beta3 . types . jobs .
- ListJobsRequest , response : google . cloud . dataflow v1beta3 . types . jobs .

### "Class AggregatedListJobsPager (0.13.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.pagers.AggregatedListJobsPager](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.pagers.AggregatedListJobsPager)
- Source ID: `site-python-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataflow v1beta3.types.ListJobsRequest The initial request object. response google.cloud.dataflow v1beta3.types.ListJobsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListJobsResponse ], request : google . cloud . dataflow v1beta3 . types . jobs .
- ListJobsResponse ], request : google . cloud . dataflow v1beta3 . types . jobs .
- ListJobsRequest , response : google . cloud . dataflow v1beta3 . types . jobs .

### "Class JobsV1Beta3AsyncClient (0.13.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient)
- Source ID: `site-python-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.dataflow v1beta3.types.CheckActiveJobsResponse Response for CheckActiveJobsRequest. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create job create job ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample aggregated list jobs(): Create a client client = dataflow v1beta3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample check active jobs(): Create a client client = dataflow v1beta3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample list jobs(): Create a client client = dataflow v1beta3 .

