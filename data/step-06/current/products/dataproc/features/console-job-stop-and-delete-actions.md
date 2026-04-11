---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.123Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Console job stop and delete actions"
feature_slug: "console-job-stop-and-delete-actions"
latest_feature_date: "2016-10-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient"
keywords:
  - "console"
  - "job"
  - "stop"
  - "and"
  - "delete"
  - "actions"
  - "the"
  - "dataproc"
---

# Console job stop and delete actions

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The Dataproc console Jobs page shows Stop and Delete buttons for every job in the list.

## Extended Definition

The Dataproc console Jobs page shows Stop and Delete buttons for every job in the list.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient)

## Supporting Pages

### "Stop and start clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google Cloud console Click the cluster name from the Managed Service for Apache Spark Clusters page in the Google Cloud console, then click STOP to stop and START to start the cluster. gcloud CLI Stop a cluster gcloud dataproc clusters stop CLUSTER NAME \ --region= REGION Start a cluster gcloud dataproc clusters start CLUSTER NAME \ --region= REGION REST API Stop a cluster Submit a clusters.stop request.
- Limitations You cannot stop: clusters with secondary workers clusters with local ssds When a cluster is stopped, you cannot: update the cluster submit jobs to the cluster access notebooks running on the cluster using the Managed Service for Apache Spark component gateway Starting a cluster When you restart a stopped cluster, any initialization actions won't be re-run.
- Stop Response: When the stop request returns a stop operation, the cluster will be in a STOPPING state, and no further jobs will be allowed to be submitted ( SubmitJob requests will fail).
- You can use the gcloud dataproc clusters describe cluster-name command to monitor the transitioning of the cluster's status from RUNNING to STOPPING to STOPPED .

### "Class JobControllerAsyncClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SubmitJobRequest ( project id="project id value", region="region value", job=job, ) Make the request operation = client. submit job as operation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.SubmitJobRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample delete job(): Create a client client = dataproc v1 .
- UpdateJobRequest ( project id="project id value", region="region value", job id="job id value", job=job, ) Make the request response = await client. update job (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.UpdateJobRequest , dict]] The request object.
- ListJobsRequest ( project id="project id value", region="region value", ) Make the request page result = client. list jobs (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.ListJobsRequest , dict]] The request object.

### "Class JobControllerClient (5.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SubmitJobRequest ( project id="project id value", region="region value", job=job, ) Make the request operation = client. submit job as operation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataproc v1.types.SubmitJobRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample delete job(): Create a client client = dataproc v1 .
- UpdateJobRequest ( project id="project id value", region="region value", job id="job id value", job=job, ) Make the request response = client. update job (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataproc v1.types.UpdateJobRequest , dict] The request object.
- ListJobsRequest ( project id="project id value", region="region value", ) Make the request page result = client. list jobs (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.dataproc v1.types.ListJobsRequest , dict] The request object.

