---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:52:59.651Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch dependent jobs"
feature_slug: "batch-dependent-jobs"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
  - "https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs"
  - "https://docs.cloud.google.com/batch/docs/troubleshooting"
keywords:
  - "dependent"
  - "automated"
  - "schedule"
  - "enable"
  - "chains"
  - "jobs"
---

# Batch dependent jobs

Product: Batch
Coverage: MEDIUM

## Step 02 Summary

Dependent jobs enable you to schedule automated chains of Batch jobs to optimize multi-stage workflows.

## Extended Definition

Dependent jobs enable you to schedule automated chains of Batch jobs to optimize multi-stage workflows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- [https://docs.cloud.google.com/batch/docs/troubleshooting](https://docs.cloud.google.com/batch/docs/troubleshooting)

## Supporting Pages

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Schedule dependent jobs ( Preview ) explains how to specify a job that doesn't run until one or more existing dependency jobs have succeeded or failed.
- For more information, see Schedule dependent jobs ( Preview ).
- Specifically, the time a job takes to finish queueing and scheduling varies for different jobs and at different times based on the following factors: User-specified job prerequisites: any prerequisites that you require to be met before the job is scheduled.
- The job remains in your project's queue until it can be scheduled, which happens when the required resources are available and the jobs ahead of it have been assessed.

### REST Resource: projects.locations.jobs \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource: Job JSON representation TaskGroup JSON representation TaskSpec JSON representation Runnable JSON representation Container JSON representation Script JSON representation Barrier JSON representation Environment JSON representation KMSEnvMap JSON representation ComputeResource JSON representation LifecyclePolicy JSON representation Action ActionCondition JSON representation Volume JSON representation NFS JSON representation GCS JSON representation SchedulingPolicy AllocationPolicy JSON representation LocationPolicy JSON representation InstancePolicyOrTemplate JSON representation InstancePolicy JSON representation ProvisioningModel Accelerator JSON representation Disk JSON representation AttachedDisk JSON representation ServiceAccount JSON representation NetworkPolicy JSON representation NetworkInterface JSON representation PlacementPolicy JSON representation JobStatus JSON representation State TaskGroupStatus JSON representation InstanceStatus JSON representation LogsPolicy JSON representation Destination CloudLoggingOption JSON representation JobNotification JSON representation Message JSON representation Type Methods Resource: Job The Cloud Batch Job description.
- JSON representation { "name" : string , "uid" : string , "priority" : string , "taskGroups" : [ { object ( TaskGroup ) } ] , "allocationPolicy" : { object ( AllocationPolicy ) } , "labels" : { string : string , ... } , "status" : { object ( JobStatus ) } , "createTime" : string , "updateTime" : string , "logsPolicy" : { object ( LogsPolicy ) } , "notifications" : [ { object ( JobNotification ) } ] } Fields name string Output only.
- The runnable exited with a non-zero status, but you enabled its ignoreExitStatus subfield. computeResource object ( ComputeResource ) ComputeResource requirements. maxRunDuration string ( Duration format) Maximum duration the task should run before being automatically retried (if enabled) or automatically failed.
- JSON representation { "imageUri" : string , "commands" : [ string ] , "entrypoint" : string , "volumes" : [ string ] , "options" : string , "blockExternalNetwork" : boolean , "username" : string , "password" : string , "enableImageStreaming" : boolean } Fields imageUri string Required.

### Troubleshooting \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/troubleshooting](https://docs.cloud.google.com/batch/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Each task is only attempted once unless you enable automated task retries .
- Solution To resolve the issue, recreate the job and specify the network by using one of the following options: VM instance template: If you want to use a VM instance template while creating this job , you must specify the network in the VM instance template. network and subnetwork fields : These fields can be used in the request body when you create a job using the Batch API or in the JSON configuration file when you create a job using the gcloud CLI. --network and --subnetwork flags : These flags can be used with the gcloud batch jobs submit command when you create a job using the gcloud CLI.
- Otherwise, resolve the issue by doing the following: Ensure that the Monitoring API is enabled for your project: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- If the job failed due to insufficient quota or if these delays persist, try to prevent insufficient quota by doing any of the following: Create jobs that use less of that quota or a different quota.

