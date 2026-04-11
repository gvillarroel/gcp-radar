---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:23:14.065Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "GPU-enabled Batch job creation in Cloud Console"
feature_slug: "gpu-enabled-batch-job-creation-in-cloud-console"
latest_feature_date: "2025-01-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
  - "https://docs.cloud.google.com/batch/docs/analyze-job-using-logs"
  - "https://docs.cloud.google.com/batch/docs/create-run-basic-job"
keywords:
  - "enabled"
  - "console"
  - "creation"
  - "gpu"
  - "you"
  - "job"
  - "in"
  - "batch"
---

# GPU-enabled Batch job creation in Cloud Console

Product: Batch
Coverage: LOW

## Step 02 Summary

You can create Batch jobs that use GPUs from the Google Cloud console.

## Extended Definition

You can create Batch jobs that use GPUs from the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/batch/docs/analyze-job-using-logs](https://docs.cloud.google.com/batch/docs/analyze-job-using-logs)
- [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)

## Supporting Pages

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After you understand the fundamentals for job creation, consider creating a job that uses one or more of the following additional configuration options: Important: Some options for job creation are not available in the Google Cloud console.
- If you leave these fields undefined (which isn't possible when creating a job using the Google Cloud console), Batch automatically tries to select compatible VMs and doesn't add any additional resources.
- Home Documentation Compute Compute Engine Batch Guides Send feedback Job creation and execution overview Stay organized with collections Save and categorize content based on your preferences.
- Otherwise, if taskCountPerNode is undefined, Batch decides a value by dividing the total number of compute resources—specifically vCPUs—per VM into the amount required for each task: \[{parallelTasksPerVm}=\frac{vcpusPerVm}{vcpusPerTask}\] This formula has the following values: \({vcpusPerVm}\): the total number of vCPUs per VM, which is determined by the machine type of your job's VMs. \({vcpusPerTask}\): the number of vCPUs per task, which is determined by converting the units of the vCPUs per task ( cpuMilli ) field .

### Analyze a job using logs \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/analyze-job-using-logs](https://docs.cloud.google.com/batch/docs/analyze-job-using-logs)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Batch automatically writes agent logs for every job that has enabled logging. task logs ( batch task logs ): logs for any data that you've configured a job's runnables to write to the standard output ( stdout ) stream or standard error ( stderr ) stream .
- Enable logging for a job To allow logs to be generated for a job, enable logs from Cloud Logging when you create the job: If you create a job using the Google Cloud console, logs from Cloud Logging are always enabled.
- After completing all of your requests, call // the loggingClient.close() method on the client to safely // clean up any remaining background resources. try ( LoggingClient loggingClient = LoggingClient . create ()) { ListLogEntriesRequest request = ListLogEntriesRequest . newBuilder () . addResourceNames ( String . format ( "projects/%s" , projectId )) . setFilter ( String . format ( "labels.job uid=%s" , job . getUid ())) . build (); for ( LogEntry logEntry : loggingClient . listLogEntries ( request ). iterateAll ()) { System . out . println ( logEntry . getTextPayload ()); } } } } Python Python For more information, see the Batch Python API reference documentation .
- To get the permissions that you need to analyze a job using logs, ask your administrator to grant you the following IAM roles: To create a job: Batch Job Editor ( roles/batch.jobsEditor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the job's service account , which by default is the default Compute Engine service account To view logs: Logs Viewer ( roles/logging.viewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .

### Create and run a basic job \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CreateJob ( request ); if ( ! response ) throw std :: move ( response ). status (); std :: cout << "Job : " << response - > DebugString () << " \n " ; } Create a basic script job You can create a basic script job using the Google Cloud console, gcloud CLI, Batch API, Go, Java, Node.js, Python, or C++.
- You can create a basic container job using the Google Cloud console, gcloud CLI, Batch API, Go, Java, Node.js, Python, or C++.
- This job has a total of ${BATCH TASK COUNT} tasks." }, } ], "computeResource" : { "cpuMilli" : 2000 , "memoryMib" : 16 } }, "taskCount" : 3 , "taskEnvironments" : [ { "variables" : { " TASK VARIABLE NAME " : " TASK VARIABLE VALUE 0 " } }, { "variables" : { " TASK VARIABLE NAME " : " TASK VARIABLE VALUE 1 " } }, { "variables" : { " TASK VARIABLE NAME " : " TASK VARIABLE VALUE 2 " } } ] } ], "allocationPolicy" : { "instances" : [ { "policy" : { "machineType" : "e2-standard-4" } } ] } } Replace the following: PROJECT ID : the project ID of your project.
- CLOUD LOGGING ; // The job's parent is the project and region in which the job will run const parent = projects/ ${ projectId } /locations/ ${ region } ; async function callCreateJob () { // Construct request const request = { parent , jobId : jobName , job , }; // Run request const response = await batchClient . createJob ( request ); console . log ( response ); } await callCreateJob (); Python Python For more information, see the Batch Python API reference documentation .

