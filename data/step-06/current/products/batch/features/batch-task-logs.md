---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:23:14.074Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch task logs"
feature_slug: "batch-task-logs"
latest_feature_date: "2024-02-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/batch/docs/analyze-job-using-logs"
  - "https://docs.cloud.google.com/batch/docs/release-notes"
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
keywords:
  - "unstructured"
  - "structured"
  - "logs"
  - "supports"
  - "task"
  - "including"
  - "batch"
  - "and"
---

# Batch task logs

Product: Batch
Coverage: LOW

## Step 02 Summary

Batch supports unstructured and structured task logs, including fields such as message, severity, custom fields, and custom status events.

## Extended Definition

Batch supports unstructured and structured task logs, including fields such as message, severity, custom fields, and custom status events.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/batch/docs/analyze-job-using-logs](https://docs.cloud.google.com/batch/docs/analyze-job-using-logs)
- [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)

## Supporting Pages

### Analyze a job using logs \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/analyze-job-using-logs](https://docs.cloud.google.com/batch/docs/analyze-job-using-logs)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Batch automatically writes agent logs for every job that has enabled logging. task logs ( batch task logs ): logs for any data that you've configured a job's runnables to write to the standard output ( stdout ) stream or standard error ( stderr ) stream .
- To get the permissions that you need to analyze a job using logs, ask your administrator to grant you the following IAM roles: To create a job: Batch Job Editor ( roles/batch.jobsEditor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the job's service account , which by default is the default Compute Engine service account To view logs: Logs Viewer ( roles/logging.viewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- ListLogEntries ( request )) { if ( ! l ) throw std :: move ( l ). status (); std :: cout << l - > text payload () << " \n " ; } } Filter Batch logs You can filter for Batch logs by writing a query that includes one or more of the following filter parameters and zero or more boolean operators ( AND , OR and NOT ) .
- Click open in new View in Logs Explorer to build a query in the Logs Explorer using the Batch filter parameters . gcloud To view logs using the gcloud CLI, use the gcloud logging read command : gcloud logging read " QUERY " where QUERY is a query for Batch logs that contains Batch filter parameters .

### Batch release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can write unstructured and structured task logs: An unstructured task log lets you define a log's message.
- Documentation has been updated to include the following samples: Create a basic container job Create a basic script job Create and run a job that uses storage volumes Define job resources using a VM instance template Delete a job View a list of your jobs View the details of a job View a list of a job's tasks View the details of a task View logs for a job For more information, see All Batch code samples .
- The following samples are available in Go, Node.js, and Python: Create and submit a job using a VM instance template Create and submit a job that uses a Cloud Storage bucket List tasks Describe a task The following sample is available in Go and Python: View logs from Cloud Logging for a job For more information, see All Batch code samples .
- Information that was previously on that page has been relocated to the following new pages: Batch locations Authenticate to Batch Create and run a job View jobs and tasks Analyze a job using logs Delete a job September 07, 2022 Feature Batch is now available in the following regions: asia-southeast1 and europe-west6 .

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For each workload you want to run on Batch, you go through the following basic process: Create a job: You define the workload you want to run by specifying a job's runnables, tasks, and any other requirements.
- Optimize various aspects of a job: Improve monitoring and analysis: Write task logs explains how to configure a job's runnables to write task logs.
- Writing task logs lets you surface custom information in Cloud Logging, which can help make jobs easier to analyze and troubleshoot.
- Otherwise, if taskCountPerNode is undefined, Batch decides a value by dividing the total number of compute resources—specifically vCPUs—per VM into the amount required for each task: \[{parallelTasksPerVm}=\frac{vcpusPerVm}{vcpusPerTask}\] This formula has the following values: \({vcpusPerVm}\): the total number of vCPUs per VM, which is determined by the machine type of your job's VMs. \({vcpusPerTask}\): the number of vCPUs per task, which is determined by converting the units of the vCPUs per task ( cpuMilli ) field .

