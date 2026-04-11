---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.866Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Elastic worker pool scaling for batch pipelines"
feature_slug: "elastic-worker-pool-scaling-for-batch-pipelines"
latest_feature_date: "2015-03-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
  - "https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
keywords:
  - "elastic"
  - "worker"
  - "pool"
  - "scaling"
  - "for"
  - "batch"
  - "pipelines"
  - "dataflow"
---

# Elastic worker pool scaling for batch pipelines

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow batch pipelines can automatically grow and shrink the worker pool during different execution stages.

## Extended Definition

Dataflow batch pipelines can automatically grow and shrink the worker pool during different execution stages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)

## Supporting Pages

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.
- Speculative execution can help pipelines complete faster by providing an alternative execution path for work items that are experiencing delays due to slow worker machines or other transient issues such as nondeterministic bugs, resource throttling, or connectivity issues.
- Use speculative execution to avoid stragglers For batch pipelines, you can enable speculative execution , a feature to mitigate the impact of slow-running or stuck tasks.
- This document explains how to minimize the impact of job failures for large batch pipelines.

### Troubleshoot and debug Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Worker pool stopped. ... com.google.cloud.dataflow.sdk.runners.BlockingDataflowPipelineRunner run INFO: Job finished with status FAILED Exception in thread "main" com.google.cloud.dataflow.sdk.runners.DataflowJobExecutionException: Job 2016-03-08 18 59 25-16868399470801620798 failed with status FAILED at com.google.cloud.dataflow.sdk.runners.DataflowRunner.run(DataflowRunner.java:155) at com.google.cloud.dataflow.sdk.runners.DataflowRunner.run(DataflowRunner.java:56) at com.google.cloud.dataflow.sdk.Pipeline.run(Pipeline.java:180) at com.google.cloud.dataflow.integration.BigQueryCopyTableExample.main(BigQueryCopyTableExample.java:74) Python INFO:root:Created job with id: [2016-03-08 14 12 01-2117248033993412477] ...
- Workers have started successfully. ... ... org.apache.beam.runners.dataflow.util.MonitoringUtil$LoggingHandler process SEVERE: 2017-05-23T21:06:33.711Z: (c14bab21d699a182): java.lang.RuntimeException: org.apache.beam.sdk.util.UserCodeException: java.lang.ArithmeticException: / by zero at com.google.cloud.dataflow.worker.runners.worker.GroupAlsoByWindowsParDoFn$1.output(GroupAlsoByWindowsParDoFn.java:146) at com.google.cloud.dataflow.worker.runners.worker.GroupAlsoByWindowFnRunner$1.outputWindowedValue(GroupAlsoByWindowFnRunner.java:104) at com.google.cloud.dataflow.worker.util.BatchGroupAlsoByWindowAndCombineFn.closeWindow(BatchGroupAlsoByWindowAndCombineFn.java:191) ... ...
- File ".../apache beam/examples/wordcount.runfiles/py/apache beam/examples/wordcount.py", line 73, in <lambda> ValueError: invalid literal for int() with base 10: 'www' Note: The Dataflow service retries failed tasks up to 4 times in batch mode, and an unlimited number of times in streaming mode.
- These errors occur when there are errors or bugs in the user-provided code that Dataflow distributes to parallel workers, such as the DoFn instances of a ParDo transform.

### "Performance characteristics of Kafka to BigQuery pipelines \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Based on the benchmark results for a 1 GiB/s pipeline, you can estimate the resource requirements as follows: Scaling Factor: (100 MiB/s) / (1 GiB/s) = 0.1 Projected worker nodes: 63 workers × 0.1 = 6.3 workers Projected number of Streaming Engine Compute Units per hour: 58 × 0.1 = 5.8 units per hour This value should only be used as an initial estimate.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Performance characteristics of Kafka to BigQuery pipelines Stay organized with collections Save and categorize content based on your preferences.
- After horizontal scaling stabilized and the pipeline reached steady state, the pipelines were allowed to run for roughly one day, after which the results were collected and analyzed.
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 , \ useStorageWriteApiAtLeastOnce = true Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic BQ DATASET : the name of the BigQuery dataset BQ TABLE NAME : the name of the BigQuery table Generate test data To generate test data, use the following command to run the Streaming Data Generator template : gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Streaming Data Generator \ --max-workers = 140 \ --parameters \ schemaLocation = SCHEMA LOCATION , \ qps = 1000000 , \ sinkType = KAFKA, \ bootstrapServer = KAFKA BOOTSTRAP ADDRESS , \ kafkaTopic = KAFKA TOPIC , \ outputType = JSON Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID SCHEMA LOCATION : the path to a schema file in Cloud Storage KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic The Streaming Data Generator template uses a JSON Data Generator file to define the message schema.

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Autoscaling Settings Settings for WorkerPool autoscaling. com. google. dataflow. v1beta3.
- Builder Settings for WorkerPool autoscaling. com. google. dataflow. v1beta3.
- Package The packages that must be installed in order for a worker to run the steps of the Cloud Dataflow job that will be assigned to its worker pool. com. google. dataflow. v1beta3.
- Builder The packages that must be installed in order for a worker to run the steps of the Cloud Dataflow job that will be assigned to its worker pool. com. google. dataflow. v1beta3.

