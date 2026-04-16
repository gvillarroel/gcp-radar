---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.868Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Per-step worker logs in Dataflow UI"
feature_slug: "per-step-worker-logs-in-dataflow-ui"
latest_feature_date: "2017-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/logging"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/filter-logs"
keywords:
  - "per"
  - "step"
  - "worker"
  - "logs"
  - "dataflow"
  - "ui"
  - "exposes"
  - "directly"
---

# Per-step worker logs in Dataflow UI

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow exposes per-step worker logs directly in the UI.

## Extended Definition

Dataflow exposes per-step worker logs directly in the UI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/filter-logs](https://docs.cloud.google.com/dataflow/docs/guides/filter-logs)

## Supporting Pages

### Work with pipeline logs \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- Source ID: `site-docs-root-2`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow worker log example The modified WordCount pipeline can be run in the cloud with the following options: Java -- project = WordCountExample -- output = gs : //<bucket-name>/counts -- runner = DataflowRunner -- tempLocation = gs : //<bucket-name>/temp -- stagingLocation = gs : //<bucket-name>/binaries Python -- project = WordCountExample -- output = gs : // < bucket - name > / counts -- runner = DataflowRunner -- staging location = gs : // < bucket - name > / binaries Go -- project = WordCountExample -- output = gs : //<bucket-name>/counts -- runner = DataflowRunner -- staging location = gs : //<bucket-name>/binaries View logs Because the WordCount cloud pipeline uses blocking execution, console messages are output during pipeline execution.
- In some scenarios, they might capture process crashes or out-of-memory (OOM) events. docker and kubelet logs contain messages related to these public technologies, which are used on Dataflow workers. nvidia-mps logs contain messages about NVIDIA Multi-Process Service (MPS) operations .
- To see all logs available for a job, follow these steps: In the Query field, enter the following query: resource.type="dataflow step" resource.labels.job id=" JOB ID " Replace JOB ID with the ID of your job.
- Worker-level errors that originate from crashing user code and that are present in worker logs also propagate up to the job-message logs. worker logs are produced by Dataflow workers.

### Control Dataflow log ingestion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/filter-logs](https://docs.cloud.google.com/dataflow/docs/guides/filter-logs)
- Source ID: `site-docs-reference-required-3`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To track the Dataflow logs, in the Filter selection section, in the Build filter box, enter the following text: resource.type = "dataflow step" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To capture all Dataflow logs in an external destination, in the Choose logs to include in sink panel, in the Build inclusion filter field, enter the following filter expression: resource.type = "dataflow step" To find log entries that you routed from Cloud Logging to supported destinations, see View logs in sink destinations .
- After your job starts running, to view job logs, complete the following steps: In the Google Cloud console, go to the Dataflow Jobs page.
- Add an exclusion filter The following steps demonstrate how to add a Cloud Logging exclusion filter to your Dataflow logs.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- After you select the relevant logs, the query result might look like the following example: resource.type="dataflow step" resource.labels.job id="2022-06-29 08 02 54- JOB ID " labels."compute.googleapis.com/resource name"="testpipeline-jenkins-0629- DATE -cyhg-harness-8crw" logName=("projects/apache-beam-testing/logs/dataflow.googleapis.com%2Fdocker" OR "projects/apache-beam-testing/logs/dataflow.googleapis.com%2Fworker-startup" OR "projects/apache-beam-testing/logs/dataflow.googleapis.com%2Fworker") Because the logs reporting the symptom of the container failure are sometimes reported as INFO , include INFO logs in your analysis.
- Java --workerDiskType=pd-ssd Python --worker disk type=pd-ssd Go disk type=pd-ssd No space left on device When a job runs out of disk space, the following error might appear in the worker logs: No space left on device This error can occur for one of the following reasons: The worker persistent storage runs out of free space, which can occur for one of the following reasons: A job downloads large dependencies at runtime A job uses large custom containers A job writes many temporary data to local disk When using Dataflow Shuffle , Dataflow sets lower default disk size .
- Bad request When you run a Dataflow job, Cloud Monitoring logs display a series of warnings similar to the following: Unable to update setup work item STEP ID error: generic::invalid argument: Http(400) Bad Request Update range task returned 'invalid argument'.
- If you remove access to the image while the job is running, either by removing the image itself or revoking the Dataflow worker Service Account Credentials or internet access to access images, Dataflow only logs errors.

