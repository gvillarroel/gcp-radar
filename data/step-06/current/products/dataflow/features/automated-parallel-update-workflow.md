---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.758Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Automated parallel update workflow"
feature_slug: "automated-parallel-update-workflow"
latest_feature_date: "2025-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient"
keywords:
  - "automated"
  - "parallel"
  - "update"
  - "workflow"
  - "dataflow"
  - "can"
  - "streaming"
  - "jobs"
---

# Automated parallel update workflow

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow can update streaming jobs by launching a replacement job in parallel and automatically draining the old job after a specified time.

## Extended Definition

Dataflow can update streaming jobs by launching a replacement job in parallel and automatically draining the old job after a specified time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient)

## Supporting Pages

### Troubleshoot and debug Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For in-progress batch or streaming jobs, don't delete staged files, even after a pipeline update.
- File ".../apache beam/examples/wordcount.runfiles/py/apache beam/examples/wordcount.py", line 73, in <lambda> ValueError: invalid literal for int() with base 10: 'www' Note: The Dataflow service retries failed tasks up to 4 times in batch mode, and an unlimited number of times in streaming mode.
- To prevent pipelines that are likely to encounter issues from being submitted, Dataflow automatically rejects your pipeline and displays the following message: The workflow was automatically rejected by the service because it might trigger an identified bug in the SDK (details below).
- You can see the jobs' status at a glance in the Status field: "Running," "Succeeded," or "Failed." Figure 1: A list of Dataflow jobs in the Google Cloud console with jobs in the running, succeeded, and failed states.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Completed jobs have one of the following job states : JOB STATE CANCELLED JOB STATE DRAINED JOB STATE DONE JOB STATE FAILED JOB STATE UPDATED For more information, see Detect Dataflow job completion .
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.
- Request payload size exceeds the limit: 20971520 bytes When you run a pipeline, the job might fail with the following error: com.google.api.client.googleapis.json.GoogleJsonResponseException: 400 Bad Request POST https://dataflow.googleapis.com/v1b3/projects/PROJECT ID/locations/REGION/jobs/JOB ID/workItems:reportStatus { "code": 400, "errors": [ { "domain": "global", "message": "Request payload size exceeds the limit: 20971520 bytes.", "reason": "badRequest" } ], "message": "Request payload size exceeds the limit: 20971520 bytes.", "status": "INVALID ARGUMENT" } This error can occur when a job using the Dataflow runner has a very large job graph.
- Java --enableStreamingEngine=true Python --enable streaming engine=true Request Entity Too Large When you submit your job, one of the following errors appears in your console or terminal window: 413 Request Entity Too Large The size of serialized JSON representation of the pipeline exceeds the allowable limit Failed to create a workflow job: Invalid JSON payload received Failed to create a workflow job: Request payload exceeds the allowable limit When you encounter an error about the JSON payload when submitting your job, the JSON representation of your pipeline exceeds the maximum 20 MB request size.

### "Class JobsV1Beta3AsyncClient (0.13.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.jobs_v1_beta3.JobsV1Beta3AsyncClient)
- Source ID: `site-python-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.dataflow v1beta3.types.CheckActiveJobsResponse Response for CheckActiveJobsRequest. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create job create job ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample aggregated list jobs(): Create a client client = dataflow v1beta3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample check active jobs(): Create a client client = dataflow v1beta3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample update job(): Create a client client = dataflow v1beta3 .

