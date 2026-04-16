---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.849Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Update and drain for Python streaming pipelines"
feature_slug: "update-and-drain-for-python-streaming-pipelines"
latest_feature_date: "2019-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline"
keywords:
  - "update"
  - "drain"
  - "python"
  - "streaming"
  - "pipelines"
  - "can"
  - "updated"
  - "drained"
---

# Update and drain for Python streaming pipelines

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Python streaming pipelines can be updated and drained in Dataflow.

## Extended Definition

Python streaming pipelines can be updated and drained in Dataflow.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)

## Supporting Pages

### Stop a running Dataflow pipeline \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can only archive completed jobs, which includes jobs in the following states: JOB STATE CANCELLED JOB STATE DRAINED JOB STATE DONE JOB STATE FAILED JOB STATE UPDATED For more information on verifying these states, see Detect Dataflow job completion .
- If you want to prevent data loss as you bring down your streaming pipelines, the best option is to drain your job.
- You can update a pipeline that is being drained.
- In addition to the updated JobMetadata object, your API request must also include the updateMask query parameter in the request URL: https://dataflow.googleapis.com/v1b3/ [...] /jobs/ JOB ID / ?updateMask=job metadata.user display properties.archived Before using any of the request data, make the following replacements: PROJECT ID : your project ID REGION : a Dataflow region JOB ID : the ID of your Dataflow job HTTP method and URL: PUT https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived Request JSON body: { "job metadata": { "userDisplayProperties": { "archived": "false" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Completed jobs have one of the following job states : JOB STATE CANCELLED JOB STATE DRAINED JOB STATE DONE JOB STATE FAILED JOB STATE UPDATED For more information, see Detect Dataflow job completion .
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.
- Side input stale caching in global window When running a streaming pipeline using the Apache Beam SDK for Python, side inputs in the global window might experience unpredictable delays in updates.
- Java --enableStreamingEngine=true Python --enable streaming engine=true Request Entity Too Large When you submit your job, one of the following errors appears in your console or terminal window: 413 Request Entity Too Large The size of serialized JSON representation of the pipeline exceeds the allowable limit Failed to create a workflow job: Invalid JSON payload received Failed to create a workflow job: Request payload exceeds the allowable limit When you encounter an error about the JSON payload when submitting your job, the JSON representation of your pipeline exceeds the maximum 20 MB request size.

### Troubleshoot and debug Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Inc ( ctx , 1 ) emit ( v ) } Troubleshoot slow-running pipelines or lack of output See the following pages: Troubleshoot slow or stuck streaming jobs .
- Best practices for pipelines The following are the best practices for Java, Python, and Go pipelines.
- For in-progress batch or streaming jobs, don't delete staged files, even after a pipeline update.

