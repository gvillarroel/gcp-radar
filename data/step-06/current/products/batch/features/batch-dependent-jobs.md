---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:23:14.066Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch dependent jobs"
feature_slug: "batch-dependent-jobs"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs"
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
  - "https://docs.cloud.google.com/batch/docs/release-notes"
keywords:
  - "dependent"
  - "automated"
  - "schedule"
  - "enable"
  - "you"
  - "jobs"
  - "batch"
  - "to"
---

# Batch dependent jobs

Product: Batch
Coverage: LOW

## Step 02 Summary

Dependent jobs enable you to schedule automated chains of Batch jobs to optimize multi-stage workflows.

## Extended Definition

Dependent jobs enable you to schedule automated chains of Batch jobs to optimize multi-stage workflows.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)

## Supporting Pages

### REST Resource: projects.locations.jobs \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource: Job JSON representation TaskGroup JSON representation TaskSpec JSON representation Runnable JSON representation Container JSON representation Script JSON representation Barrier JSON representation Environment JSON representation KMSEnvMap JSON representation ComputeResource JSON representation LifecyclePolicy JSON representation Action ActionCondition JSON representation Volume JSON representation NFS JSON representation GCS JSON representation SchedulingPolicy AllocationPolicy JSON representation LocationPolicy JSON representation InstancePolicyOrTemplate JSON representation InstancePolicy JSON representation ProvisioningModel Accelerator JSON representation Disk JSON representation AttachedDisk JSON representation ServiceAccount JSON representation NetworkPolicy JSON representation NetworkInterface JSON representation PlacementPolicy JSON representation JobStatus JSON representation State TaskGroupStatus JSON representation InstanceStatus JSON representation LogsPolicy JSON representation Destination CloudLoggingOption JSON representation JobNotification JSON representation Message JSON representation Type Methods Resource: Job The Cloud Batch Job description.
- JSON representation { "installGpuDrivers" : boolean , "installOpsAgent" : boolean , "blockProjectSshKeys" : boolean , // Union field policy template can be only one of the following: "policy" : { object ( InstancePolicy ) } , "instanceTemplate" : string // End of list of possible types for union field policy template . } Fields installGpuDrivers boolean Set this field true if you want Batch to help fetch drivers from a third party location and install them for GPUs specified in policy.accelerators or instanceTemplate on your behalf.
- The runnable exited with a non-zero status, but you enabled its ignoreExitStatus subfield. computeResource object ( ComputeResource ) ComputeResource requirements. maxRunDuration string ( Duration format) Maximum duration the task should run before being automatically retried (if enabled) or automatically failed.
- For example, the following are all valid URLs: Specify the image by its family name: projects/{project}/global/images/family/{image family} Specify the image version: projects/{project}/global/images/{imageVersion} You can also use Batch customized image in short names.

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specifically, the time a job takes to finish queueing and scheduling varies for different jobs and at different times based on the following factors: User-specified job prerequisites: any prerequisites that you require to be met before the job is scheduled.
- Orchestrate jobs using dsub explains how to run a Batch job through a dsub pipeline, which you can use to orchestrate batch-processing workflows on Google Cloud services.
- However, to prevent your jobs from becoming stale, if a job exceeds the maximum wait time in the queue , Batch automatically fails the job instead of scheduling it.
- Schedule dependent jobs ( Preview ) explains how to specify a job that doesn't run until one or more existing dependency jobs have succeeded or failed.

### Batch release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Dependent jobs let you schedule an automated chain of jobs, which can help you optimize resource consumption—for example, separate the types of VMs used for data preparation and compute-intensive data processing.
- December 21, 2023 Feature You can use Image streaming to enable Batch jobs to initialize without waiting for a container image to finish downloading.
- Documentation has been updated to include the following samples: Create a basic container job Create a basic script job Create and run a job that uses storage volumes Define job resources using a VM instance template Delete a job View a list of your jobs View the details of a job View a list of a job's tasks View the details of a task View logs for a job For more information, see All Batch code samples .
- October 30, 2025 Change Dynamic Workload Scheduler for Batch ( Preview ) has been replaced with the following consumption options: Flex-start VMs ( Preview ) : We recommend Flex-start VMs if your job can withstand best-effort availability in exchange for discounted pricing and up to 7 days to finish running.

