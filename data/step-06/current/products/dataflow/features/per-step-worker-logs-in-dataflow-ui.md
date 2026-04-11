---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.864Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Per-step worker logs in Dataflow UI"
feature_slug: "per-step-worker-logs-in-dataflow-ui"
latest_feature_date: "2017-04-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/logging"
  - "https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/data-sampling"
keywords:
  - "per"
  - "step"
  - "worker"
  - "logs"
  - "in"
  - "dataflow"
  - "ui"
  - "exposes"
---

# Per-step worker logs in Dataflow UI

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow exposes per-step worker logs directly in the UI.

## Extended Definition

Dataflow exposes per-step worker logs directly in the UI.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)

## Supporting Pages

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To ensure that the Compute Engine default service account has the necessary permissions to run the Dataflow job, ask your administrator to grant the following IAM roles to the Compute Engine default service account on your project: Important: You must grant these roles to the Compute Engine default service account, not to your user account.
- BigQuery Data Editor ( roles/bigquery.dataEditor ) Dataflow Worker ( roles/dataflow.worker ) Pub/Sub Editor ( roles/pubsub.editor ) Storage Object Admin ( roles/storage.objectAdmin ) Viewer ( roles/viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- If you clicked Hide preview features to go to the Google Cloud console, then perform the following step instead: In the navigation panel, in the Resources section, select the taxirides dataset you created.

### Work with pipeline logs \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In some scenarios, they might capture process crashes or out-of-memory (OOM) events. docker and kubelet logs contain messages related to these public technologies, which are used on Dataflow workers. nvidia-mps logs contain messages about NVIDIA Multi-Process Service (MPS) operations .
- Dataflow worker log example The modified WordCount pipeline can be run in the cloud with the following options: Java -- project = WordCountExample -- output = gs : //<bucket-name>/counts -- runner = DataflowRunner -- tempLocation = gs : //<bucket-name>/temp -- stagingLocation = gs : //<bucket-name>/binaries Python -- project = WordCountExample -- output = gs : // < bucket - name > / counts -- runner = DataflowRunner -- staging location = gs : // < bucket - name > / binaries Go -- project = WordCountExample -- output = gs : //<bucket-name>/counts -- runner = DataflowRunner -- staging location = gs : //<bucket-name>/binaries View logs Because the WordCount cloud pipeline uses blocking execution, console messages are output during pipeline execution.
- If there is a problem starting workers, these logs are a good place to look. harness logs contain messages from the Runner v2 runner harness. shuffler logs contain messages from workers that consolidate the results of parallel pipeline operations. system logs contain messages from the host operating systems of worker VMs.
- To see all logs available for a job, follow these steps: In the Query field, enter the following query: resource.type="dataflow step" resource.labels.job id=" JOB ID " Replace JOB ID with the ID of your job.

### Troubleshoot and debug Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View step logs for your job When you select a step in your pipeline graph, the logs panel toggles from displaying Job Logs generated by the Dataflow service to showing logs from the Compute Engine instances running your pipeline step.
- Dataflow provides real-time feedback about your job, and there is a basic set of steps you can use to check the error messages, logs, and for conditions such as your job's progress having stalled.
- These errors occur when Dataflow runs into a problem building the graph of steps that compose your pipeline, as described by your Apache Beam pipeline.
- You can check the Dataflow worker and worker startup logs for warnings or errors by following the instructions in Viewing logs .

### "Use data sampling to observe pipeline data \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View sampled data To view the sampled data in the Google Cloud console, perform the following steps: In the Google Cloud console, go to the Dataflow Jobs page.
- View exceptions To view an exception, perform the following steps: In the Google Cloud console, go to the Dataflow Jobs page.
- Each Dataflow worker writes samples in batches, incurring one read operation and one write operation per batch.
- To view the sampled data in the Google Cloud console, you need the following Identity and Access Management permissions : storage.buckets.get storage.objects.get storage.objects.list Periodic sampling requires the following Apache Beam SDK: Apache Beam Java SDK 2.47.0 or later Apache Beam Python SDK 2.46.0 or later Apache Beam Go SDK 2.53.0 or later Exception sampling requires the following Apache Beam SDK: Apache Beam Java SDK 2.51.0 or later Apache Beam Python SDK 2.51.0 or later The Apache Beam Go SDK does not support exception sampling.

