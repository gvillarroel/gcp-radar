---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.771Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Job archiving"
feature_slug: "job-archiving"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/jobs-list"
  - "https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
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
Coverage: MEDIUM

## Step 02 Summary

Dataflow lets users archive completed jobs so they move from the main Jobs page to the Archived jobs page in the console.

## Extended Definition

Dataflow lets users archive completed jobs so they move from the main Jobs page to the Archived jobs page in the console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list)
- [https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)

## Supporting Pages

### Dataflow jobs list \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list)
- Source ID: `site-docs-root-2`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can only archive completed jobs, which includes jobs in the following states: JOB STATE CANCELLED JOB STATE DRAINED JOB STATE DONE JOB STATE FAILED JOB STATE UPDATED For more information on verifying these states, see Detect Dataflow job completion .
- For troubleshooting information when you are archiving jobs, see Archive job errors in "Troubleshoot Dataflow errors." All archived jobs are deleted after a 30 day retention period.
- Archive a job Follow these steps to remove a completed job from the main jobs list on the Dataflow Jobs page.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID You should receive a response similar to the following: Archived job [ JOB ID ]. createTime: ' 2025-06-29T11:00:02.432552Z ' currentState: JOB STATE DONE currentStateTime: ' 2025-06-29T11:04:25.125921Z ' id: JOB ID jobMetadata: userDisplayProperties: archived: 'true' projectId: PROJECT ID startTime: ' 2025-06-29T11:00:02.432552Z ' View and restore archived jobs Follow these steps to view archived jobs or to restore archived jobs to the main jobs list on the Dataflow Jobs page.

### Stop a running Dataflow pipeline \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can only archive completed jobs, which includes jobs in the following states: JOB STATE CANCELLED JOB STATE DRAINED JOB STATE DONE JOB STATE FAILED JOB STATE UPDATED For more information on verifying these states, see Detect Dataflow job completion .
- For troubleshooting information when you are archiving jobs, see Archive job errors in "Troubleshoot Dataflow errors." All archived jobs are deleted after a 30 day retention period.
- Archive completed Dataflow jobs When you archive a Dataflow job, the job is removed from the list of jobs in the Dataflow Jobs page in the console.
- Archive a job Follow these steps to remove a completed job from the main jobs list on the Dataflow Jobs page.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Completed jobs have one of the following job states : JOB STATE CANCELLED JOB STATE DRAINED JOB STATE DONE JOB STATE FAILED JOB STATE UPDATED For more information, see Detect Dataflow job completion .
- Request payload size exceeds the limit: 20971520 bytes When you run a pipeline, the job might fail with the following error: com.google.api.client.googleapis.json.GoogleJsonResponseException: 400 Bad Request POST https://dataflow.googleapis.com/v1b3/projects/PROJECT ID/locations/REGION/jobs/JOB ID/workItems:reportStatus { "code": 400, "errors": [ { "domain": "global", "message": "Request payload size exceeds the limit: 20971520 bytes.", "reason": "badRequest" } ], "message": "Request payload size exceeds the limit: 20971520 bytes.", "status": "INVALID ARGUMENT" } This error can occur when a job using the Dataflow runner has a very large job graph.
- Invalid table specification in Data Catalog When you use Dataflow SQL to create Dataflow SQL jobs, your job might fail with the following error in the log files: Invalid table specification in Data Catalog: Could not resolve table in Data Catalog This error occurs if the Dataflow service account doesn't have access to the Data Catalog API.
- No value is provided When you try to archive a Dataflow job by using the API, the following error might occur: The field mask specifies an update for the field job metadata.user display properties.archived in job JOB ID , but no value is provided.

