---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:23:14.080Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch C++ code samples"
feature_slug: "batch-c-code-samples"
latest_feature_date: "2023-07-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
  - "https://docs.cloud.google.com/batch/docs/create-run-basic-job"
  - "https://docs.cloud.google.com/batch/docs/release-notes"
keywords:
  - "covering"
  - "creation"
  - "documentation"
  - "added"
  - "samples"
  - "code"
  - "job"
  - "batch"
---

# Batch C++ code samples

Product: Batch
Coverage: LOW

## Step 02 Summary

Batch added C++ documentation samples covering job creation, storage volumes, VM instance templates, job and task listing/details, and job log viewing.

## Extended Definition

Batch added C++ documentation samples covering job creation, storage volumes, VM instance templates, job and task listing/details, and job log viewing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)

## Supporting Pages

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Compute Compute Engine Batch Guides Send feedback Job creation and execution overview Stay organized with collections Save and categorize content based on your preferences.
- For the example jobs in Batch documentation, which are typically very small and use minimal resources, you might see them finish running in as little as a few minutes.
- How job creation and execution works To use Batch, you create a job that specifies your workload and its requirements, and then Batch automatically runs it.
- Otherwise, if taskCountPerNode is undefined, Batch decides a value by dividing the total number of compute resources—specifically vCPUs—per VM into the amount required for each task: \[{parallelTasksPerVm}=\frac{vcpusPerVm}{vcpusPerTask}\] This formula has the following values: \({vcpusPerVm}\): the total number of vCPUs per VM, which is determined by the machine type of your job's VMs. \({vcpusPerTask}\): the number of vCPUs per task, which is determined by converting the units of the vCPUs per task ( cpuMilli ) field .

### Create and run a basic job \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CLOUD LOGGING ; // The job's parent is the project and region in which the job will run const parent = projects/ ${ projectId } /locations/ ${ region } ; async function callCreateJob () { // Construct request const request = { parent , jobId : jobName , job , }; // Run request const response = await batchClient . createJob ( request ); console . log ( response ); } await callCreateJob (); Python Python For more information, see the Batch Python API reference documentation .
- CLOUD LOGGING ; // The job's parent is the project and region in which the job will run const parent = projects/ ${ projectId } /locations/ ${ region } ; async function callCreateJob () { // Construct request const request = { parent , jobId : jobName , job , }; // Run request const response = await batchClient . createJob ( request ); console . log ( response ); } await callCreateJob (); Python Python For more information, see the Batch Python API reference documentation .
- CreateJobRequest () create request . job = job create request . job id = job name The job's parent is the region in which the job will run create request . parent = f "projects/ { project id } /locations/ { region } " return client . create job ( create request ) C++ C++ For more information, see the Batch C++ API reference documentation .
- CreateJobRequest () create request . job = job create request . job id = job name The job's parent is the region in which the job will run create request . parent = f "projects/ { project id } /locations/ { region } " return client . create job ( create request ) C++ C++ For more information, see the Batch C++ API reference documentation .

### Batch release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Documentation has been updated to include the following samples: Create a basic container job Create a basic script job Create and run a job that uses storage volumes Define job resources using a VM instance template Delete a job View a list of your jobs View the details of a job View a list of a job's tasks View the details of a task View logs for a job For more information, see All Batch code samples .
- Documentation has been updated to include the following samples: Create a basic container job Create a basic script job List jobs Describe a job Delete a job For more information, see All Batch code samples .
- Documentation has been updated to include the following samples: Create a basic container job Create a basic script job List jobs Describe a job Delete a job For more information, see All Batch code samples .
- April 27, 2023 Change Documentation has been added for an overview page that summarizes Batch content including pages, code samples, and videos.

