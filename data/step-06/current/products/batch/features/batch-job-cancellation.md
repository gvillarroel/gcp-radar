---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:52:59.650Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch job cancellation"
feature_slug: "batch-job-cancellation"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs"
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
  - "https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient"
keywords:
  - "cancellation"
  - "running"
  - "availability"
  - "supports"
  - "jobs"
---

# Batch job cancellation

Product: Batch
Coverage: MEDIUM

## Step 02 Summary

Batch now supports general availability of job cancellation for running jobs; Canceling jobs became available in Preview for Batch.

## Extended Definition

Batch now supports general availability of job cancellation for running jobs; Canceling jobs became available in Preview for Batch.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient)

## Supporting Pages

### REST Resource: projects.locations.jobs \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The host file supports up to 1000 VMs. permissiveSsh boolean When true, Batch will configure SSH to allow passwordless login between VMs running the Batch tasks in the same TaskGroup. runAsNonRoot boolean Optional.
- Resource: Job JSON representation TaskGroup JSON representation TaskSpec JSON representation Runnable JSON representation Container JSON representation Script JSON representation Barrier JSON representation Environment JSON representation KMSEnvMap JSON representation ComputeResource JSON representation LifecyclePolicy JSON representation Action ActionCondition JSON representation Volume JSON representation NFS JSON representation GCS JSON representation SchedulingPolicy AllocationPolicy JSON representation LocationPolicy JSON representation InstancePolicyOrTemplate JSON representation InstancePolicy JSON representation ProvisioningModel Accelerator JSON representation Disk JSON representation AttachedDisk JSON representation ServiceAccount JSON representation NetworkPolicy JSON representation NetworkInterface JSON representation PlacementPolicy JSON representation JobStatus JSON representation State TaskGroupStatus JSON representation InstanceStatus JSON representation LogsPolicy JSON representation Destination CloudLoggingOption JSON representation JobNotification JSON representation Message JSON representation Type Methods Resource: Job The Cloud Batch Job description.
- JSON representation { "name" : string , "uid" : string , "priority" : string , "taskGroups" : [ { object ( TaskGroup ) } ] , "allocationPolicy" : { object ( AllocationPolicy ) } , "labels" : { string : string , ... } , "status" : { object ( JobStatus ) } , "createTime" : string , "updateTime" : string , "logsPolicy" : { object ( LogsPolicy ) } , "notifications" : [ { object ( JobNotification ) } ] } Fields name string Output only.
- JSON representation { "type" : enum ( Type ) , "newJobState" : enum ( State ) , "newTaskState" : enum ( State ) } Fields type enum ( Type ) The message type. newJobState enum ( State ) The new job state. newTaskState enum ( State ) The new task state.

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- For the example jobs in Batch documentation, which are typically very small and use minimal resources, you might see them finish running in as little as a few minutes.
- Specifically, the time a job takes to finish queueing and scheduling varies for different jobs and at different times based on the following factors: User-specified job prerequisites: any prerequisites that you require to be met before the job is scheduled.
- Each VM has dedicated hardware for CPU cores (specifically virtual CPUs (vCPUs) ) and memory—which affect the performance of your job—and a boot disk—which stores an operating system (OS) image and instructions for running your job.
- Custom status events let you describe important events that happen for runnables and appear when you view a job's history of status events , which can help make jobs easier to analyze and troubleshoot.

### "Class BatchServiceAsyncClient (0.20.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Union [ str , bytes ]]] = () ) - > None Starts asynchronous cancellation on a long-running operation.
- Pattern: "projects/{project}/locations/{location}/jobs/{job}/taskGroups/{task group}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import batch v1 async def sample list jobs(): Create a client client = batch v1 .
- ListJobsRequest ( ) Make the request page result = client. list jobs (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.batch v1.types.ListJobsRequest , dict]] The request object.

