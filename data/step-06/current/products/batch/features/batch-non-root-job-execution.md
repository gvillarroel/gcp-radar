---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:23:14.073Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch non-root job execution"
feature_slug: "batch-non-root-job-execution"
latest_feature_date: "2024-02-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs"
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
  - "https://docs.cloud.google.com/batch/docs/create-run-basic-job"
keywords:
  - "execution"
  - "root"
  - "non"
  - "run"
  - "you"
  - "can"
  - "job"
  - "batch"
---

# Batch non-root job execution

Product: Batch
Coverage: LOW

## Step 02 Summary

You can run Batch jobs as a non-root user to satisfy workload and security requirements.

## Extended Definition

You can run Batch jobs as a non-root user to satisfy workload and security requirements.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)

## Supporting Pages

### REST Resource: projects.locations.jobs \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if the job has a bucket with mountPath set to /mnt/disks/my-bucket , you can write logs to the root directory of the remotePath of that bucket by setting this field to /mnt/disks/my-bucket/ . cloudLoggingOption object ( CloudLoggingOption ) Optional.
- The host file supports up to 1000 VMs. permissiveSsh boolean When true, Batch will configure SSH to allow passwordless login between VMs running the Batch tasks in the same TaskGroup. runAsNonRoot boolean Optional.
- Logs include information that is automatically written by the Batch service agent and any information that you configured the job's runnables to write to the stdout or stderr streams.
- If set to true, Batch runs the runnables using a non-root user.

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Orchestrate jobs using dsub explains how to run a Batch job through a dsub pipeline, which you can use to orchestrate batch-processing workflows on Google Cloud services.
- How job creation and execution works To use Batch, you create a job that specifies your workload and its requirements, and then Batch automatically runs it.
- Orchestrate jobs using Nextflow explains how to run a Batch job through a Nextflow pipeline, which you can use to orchestrate bioinformatics workflows.
- Otherwise, if a job's tasks run AS SOON AS POSSIBLE , then you can estimate the number of VMs and the number simultaneous tasks using the following formula: \[{vmsPerJob}=\frac{taskCount}{parallelTasksPerVm}\] This formula has the following values: \({vmsPerJob}\): the maximum number of VMs for a job.

### Create and run a basic job \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use predefined environment variables By default, the runnables in your job can use the following predefined environment variables: BATCH TASK COUNT : the total number of tasks in this task group.
- This is task ${BATCH TASK INDEX}. " + "This job has a total of ${BATCH TASK COUNT} tasks." ) // You can also run a script from a file.
- This job has a total of ${BATCH TASK COUNT} tasks." , } // You can also run a script from a file.
- This job has a total of ${BATCH TASK COUNT} tasks.' ; // You can also run a script from a file.

