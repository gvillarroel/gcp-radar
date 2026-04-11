---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.863Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow worker support in australia-southeast1"
feature_slug: "dataflow-worker-support-in-australia-southeast1"
latest_feature_date: "2017-06-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/data-sampling"
  - "https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/manage-dependencies"
keywords:
  - "dataflow"
  - "worker"
  - "in"
  - "australia"
  - "southeast1"
  - "can"
  - "run"
  - "workers"
---

# Dataflow worker support in australia-southeast1

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow can run workers in zones within the australia-southeast1 region.

## Extended Definition

Dataflow can run workers in zones within the australia-southeast1 region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/manage-dependencies](https://docs.cloud.google.com/dataflow/docs/guides/manage-dependencies)

## Supporting Pages

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- To ensure that the Compute Engine default service account has the necessary permissions to run the Dataflow job, ask your administrator to grant the following IAM roles to the Compute Engine default service account on your project: Important: You must grant these roles to the Compute Engine default service account, not to your user account.
- What's next Dataflow templates overview Creating classic templates Running classic templates Google-provided templates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- BigQuery Data Editor ( roles/bigquery.dataEditor ) Dataflow Worker ( roles/dataflow.worker ) Pub/Sub Editor ( roles/pubsub.editor ) Storage Object Admin ( roles/storage.objectAdmin ) Viewer ( roles/viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Note: Unless specified through the network option, the Dataflow runner runs jobs in the default Virtual Private Cloud network.

### "Use data sampling to observe pipeline data \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ensure that you are using Runner v2 Make sure the workers have started.
- Data sampling is executed by the Dataflow workers.
- When running a Dataflow template, use the additional-experiments flag to disable exception sampling: --additional-experiments=disable always on exception sampling Security considerations Dataflow writes the sampled data to a Cloud Storage bucket that you create and manage.
- When running a Dataflow template, use the additional-experiments flag to enable data sampling: --additional-experiments=enable data sampling When periodic sampling is enabled, Dataflow collects samples from each PCollection in the job graph.

### Troubleshoot and debug Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Workers have started successfully. ... ... org.apache.beam.runners.dataflow.util.MonitoringUtil$LoggingHandler process SEVERE: 2017-05-23T21:06:33.711Z: (c14bab21d699a182): java.lang.RuntimeException: org.apache.beam.sdk.util.UserCodeException: java.lang.ArithmeticException: / by zero at com.google.cloud.dataflow.worker.runners.worker.GroupAlsoByWindowsParDoFn$1.output(GroupAlsoByWindowsParDoFn.java:146) at com.google.cloud.dataflow.worker.runners.worker.GroupAlsoByWindowFnRunner$1.outputWindowedValue(GroupAlsoByWindowFnRunner.java:104) at com.google.cloud.dataflow.worker.util.BatchGroupAlsoByWindowAndCombineFn.closeWindow(BatchGroupAlsoByWindowAndCombineFn.java:191) ... ...
- Worker pool stopped. ... com.google.cloud.dataflow.sdk.runners.BlockingDataflowPipelineRunner run INFO: Job finished with status FAILED Exception in thread "main" com.google.cloud.dataflow.sdk.runners.DataflowJobExecutionException: Job 2016-03-08 18 59 25-16868399470801620798 failed with status FAILED at com.google.cloud.dataflow.sdk.runners.DataflowRunner.run(DataflowRunner.java:155) at com.google.cloud.dataflow.sdk.runners.DataflowRunner.run(DataflowRunner.java:56) at com.google.cloud.dataflow.sdk.Pipeline.run(Pipeline.java:180) at com.google.cloud.dataflow.integration.BigQueryCopyTableExample.main(BigQueryCopyTableExample.java:74) Python INFO:root:Created job with id: [2016-03-08 14 12 01-2117248033993412477] ...
- You can see the jobs' status at a glance in the Status field: "Running," "Succeeded," or "Failed." Figure 1: A list of Dataflow jobs in the Google Cloud console with jobs in the running, succeeded, and failed states.
- These errors occur when there are errors or bugs in the user-provided code that Dataflow distributes to parallel workers, such as the DoFn instances of a ParDo transform.

### Manage pipeline dependencies in Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/manage-dependencies](https://docs.cloud.google.com/dataflow/docs/guides/manage-dependencies)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use custom containers to control the runtime environment To run a pipeline with the Apache Beam Python SDK, Dataflow workers need a Python environment that contains an interpreter, the Apache Beam SDK, and the pipeline dependencies.
- Installing packages at runtime can have the following consequences: Worker startup time increases due to dependency resolution, download, and installation.
- To reduce startup time, you want to avoid dependency installation on the workers at runtime.
- Many Apache Beam pipelines can run using the default Dataflow runtime environments.

