---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.871Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Elastic worker pool scaling for batch pipelines"
feature_slug: "elastic-worker-pool-scaling-for-batch-pipelines"
latest_feature_date: "2015-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType"
keywords:
  - "elastic"
  - "worker"
  - "pool"
  - "scaling"
  - "batch"
  - "pipelines"
  - "dataflow"
  - "can"
---

# Elastic worker pool scaling for batch pipelines

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow batch pipelines can automatically grow and shrink the worker pool during different execution stages.

## Extended Definition

Dataflow batch pipelines can automatically grow and shrink the worker pool during different execution stages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType)

## Supporting Pages

### Troubleshoot and debug Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Worker pool stopped. ... com.google.cloud.dataflow.sdk.runners.BlockingDataflowPipelineRunner run INFO: Job finished with status FAILED Exception in thread "main" com.google.cloud.dataflow.sdk.runners.DataflowJobExecutionException: Job 2016-03-08 18 59 25-16868399470801620798 failed with status FAILED at com.google.cloud.dataflow.sdk.runners.DataflowRunner.run(DataflowRunner.java:155) at com.google.cloud.dataflow.sdk.runners.DataflowRunner.run(DataflowRunner.java:56) at com.google.cloud.dataflow.sdk.Pipeline.run(Pipeline.java:180) at com.google.cloud.dataflow.integration.BigQueryCopyTableExample.main(BigQueryCopyTableExample.java:74) Python INFO:root:Created job with id: [2016-03-08 14 12 01-2117248033993412477] ...
- Workers have started successfully. ... ... org.apache.beam.runners.dataflow.util.MonitoringUtil$LoggingHandler process SEVERE: 2017-05-23T21:06:33.711Z: (c14bab21d699a182): java.lang.RuntimeException: org.apache.beam.sdk.util.UserCodeException: java.lang.ArithmeticException: / by zero at com.google.cloud.dataflow.worker.runners.worker.GroupAlsoByWindowsParDoFn$1.output(GroupAlsoByWindowsParDoFn.java:146) at com.google.cloud.dataflow.worker.runners.worker.GroupAlsoByWindowFnRunner$1.outputWindowedValue(GroupAlsoByWindowFnRunner.java:104) at com.google.cloud.dataflow.worker.util.BatchGroupAlsoByWindowAndCombineFn.closeWindow(BatchGroupAlsoByWindowAndCombineFn.java:191) ... ...
- INFO:root:...: Traceback (most recent call last): File ".../dataflow worker/batchworker.py", line 384, in do work self.current executor.execute(work item.map task) ...
- File ".../apache beam/examples/wordcount.runfiles/py/apache beam/examples/wordcount.py", line 73, in <lambda> ValueError: invalid literal for int() with base 10: 'www' Note: The Dataflow service retries failed tasks up to 4 times in batch mode, and an unlimited number of times in streaming mode.

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.
- Speculative execution can help pipelines complete faster by providing an alternative execution path for work items that are experiencing delays due to slow worker machines or other transient issues such as nondeterministic bugs, resource throttling, or connectivity issues.
- Use speculative execution to avoid stragglers For batch pipelines, you can enable speculative execution , a feature to mitigate the impact of slow-running or stuck tasks.
- By default, Dataflow retries these failed tasks four times in batch mode and an unlimited number of times in streaming mode.

### "Enum AutoscalingEvent.AutoscalingEventType (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType)
- Source ID: `site-java-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf enum google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description ACTUATION FAILURE The ACTUATION FAILURE type should be used when we want to report an error to the user indicating why the current number of workers in the pool could not be changed.
- ACTUATION FAILURE = 3; ACTUATION FAILURE VALUE The ACTUATION FAILURE type should be used when we want to report an error to the user indicating why the current number of workers in the pool could not be changed.
- CURRENT NUM WORKERS CHANGED = 2; CURRENT NUM WORKERS CHANGED VALUE The CURRENT NUM WORKERS CHANGED type should be used when actual worker pool size has been changed, but the target num workers has not changed.
- ACTUATION FAILURE = 3; CURRENT NUM WORKERS CHANGED The CURRENT NUM WORKERS CHANGED type should be used when actual worker pool size has been changed, but the target num workers has not changed.

