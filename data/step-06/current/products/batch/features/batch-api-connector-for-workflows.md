---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:52:59.659Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch API connector for Workflows"
feature_slug: "batch-api-connector-for-workflows"
latest_feature_date: "2023-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
  - "https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs"
  - "https://docs.cloud.google.com/batch/docs/create-run-basic-job"
keywords:
  - "integrating"
  - "connector"
  - "into"
  - "workflows"
  - "added"
  - "preview"
  - "jobs"
---

# Batch API connector for Workflows

Product: Batch
Coverage: MEDIUM

## Step 02 Summary

Batch added a preview connector for integrating Batch jobs into Workflows.

## Extended Definition

Batch added a preview connector for integrating Batch jobs into Workflows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)

## Supporting Pages

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use additional services to create and run jobs: Orchestrate jobs using Workflows explains how to use Workflows to execute a job's tasks in an order that you define using the Workflows syntax .
- Orchestrate jobs using dsub explains how to run a Batch job through a dsub pipeline, which you can use to orchestrate batch-processing workflows on Google Cloud services.
- Schedule dependent jobs ( Preview ) explains how to specify a job that doesn't run until one or more existing dependency jobs have succeeded or failed.
- Orchestrate jobs using Nextflow explains how to run a Batch job through a Nextflow pipeline, which you can use to orchestrate bioinformatics workflows.

### REST Resource: projects.locations.jobs \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource: Job JSON representation TaskGroup JSON representation TaskSpec JSON representation Runnable JSON representation Container JSON representation Script JSON representation Barrier JSON representation Environment JSON representation KMSEnvMap JSON representation ComputeResource JSON representation LifecyclePolicy JSON representation Action ActionCondition JSON representation Volume JSON representation NFS JSON representation GCS JSON representation SchedulingPolicy AllocationPolicy JSON representation LocationPolicy JSON representation InstancePolicyOrTemplate JSON representation InstancePolicy JSON representation ProvisioningModel Accelerator JSON representation Disk JSON representation AttachedDisk JSON representation ServiceAccount JSON representation NetworkPolicy JSON representation NetworkInterface JSON representation PlacementPolicy JSON representation JobStatus JSON representation State TaskGroupStatus JSON representation InstanceStatus JSON representation LogsPolicy JSON representation Destination CloudLoggingOption JSON representation JobNotification JSON representation Message JSON representation Type Methods Resource: Job The Cloud Batch Job description.
- JSON representation { "name" : string , "uid" : string , "priority" : string , "taskGroups" : [ { object ( TaskGroup ) } ] , "allocationPolicy" : { object ( AllocationPolicy ) } , "labels" : { string : string , ... } , "status" : { object ( JobStatus ) } , "createTime" : string , "updateTime" : string , "logsPolicy" : { object ( LogsPolicy ) } , "notifications" : [ { object ( JobNotification ) } ] } Fields name string Output only.
- Overrides the ENTRYPOINT specified in the container. volumes[] string Volumes to mount (bind mount) from the host machine files or directories into the container, formatted to match --volume option for the docker run command—for example, /foo:/bar or /foo:/bar:ro .
- JSON representation { "type" : enum ( Type ) , "newJobState" : enum ( State ) , "newTaskState" : enum ( State ) } Fields type enum ( Type ) The message type. newJobState enum ( State ) The new job state. newTaskState enum ( State ) The new task state.

### Create and run a basic job \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- This means the task requires 2 whole CPUs. . setCpuMilli ( 2000 ) // In MiB. . setMemoryMib ( 16 ) . build (); TaskSpec task = TaskSpec . newBuilder () // Jobs can be divided into tasks.
- This means the task requires 2 whole CPUs. . setCpuMilli ( 2000 ) // In MiB. . setMemoryMib ( 16 ) . build (); TaskSpec task = TaskSpec . newBuilder () // Jobs can be divided into tasks.
- This job has a total of $ {BATCH TASK COUNT} tasks." , ] Jobs can be divided into tasks.
- This job has a total of ${BATCH TASK COUNT} tasks." ] } } ], "computeResource" : { "cpuMilli" : 2000 , "memoryMib" : 16 }, "maxRetryCount" : 2 , "maxRunDuration" : "3600s" }, "taskCount" : 4 , "parallelism" : 2 } ], "allocationPolicy" : { "instances" : [ { "policy" : { "machineType" : "e2-standard-4" } } ] }, "labels" : { "department" : "finance" , "env" : "testing" }, "logsPolicy" : { "destination" : "CLOUD LOGGING" } } Run the following command: gcloud batch jobs submit example-container-job \ --location us-central1 \ --config hello-world-container.json API To create a basic container job using the Batch API, use the jobs.create method .

