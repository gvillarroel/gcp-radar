---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.848Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming Engine for Python pipelines"
feature_slug: "streaming-engine-for-python-pipelines"
latest_feature_date: "2019-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline"
keywords:
  - "streaming"
  - "engine"
  - "python"
  - "pipelines"
  - "can"
  - "use"
  - "dataflow"
---

# Streaming Engine for Python pipelines

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Python streaming pipelines can use Dataflow Streaming Engine.

## Extended Definition

Python streaming pipelines can use Dataflow Streaming Engine.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)
- [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)

## Supporting Pages

### "Set the pipeline streaming mode \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)
- Source ID: `site-docs-reference-2`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Java --dataflowServiceOptions=streaming mode at least once Python --dataflow service options=streaming mode at least once Go --dataflow service options=streaming mode at least once If you don't specify the streaming mode at least once option, then Dataflow uses exactly-once streaming mode.
- If you set the streaming mode at least once option, Dataflow automatically enables Streaming Engine with resource-based billing .
- For more information, see the following sections in the Dataflow templates documentation: Flex templates: Metadata Classic templates: Use metadata in your pipeline code View a job's streaming mode To view the streaming mode for a job, go to the Jobs page in the Google Cloud console.
- Select the streaming mode for a template To select the streaming mode when you run a Dataflow streaming template, perform the following steps: Console In the Google Cloud console, go to the Dataflow Jobs page.

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run your pipeline If you want to learn how to create your first pipeline and deploy it locally and on Dataflow, you can follow one of the Dataflow quickstarts: Run a Java pipeline Run a Python pipeline Run a Go pipeline Run a streaming pipeline from a template --> After you create and test your Apache Beam pipeline, run your pipeline.
- Streaming Engine By default, the Dataflow pipeline runner executes the steps of your streaming pipeline entirely on worker virtual machines, consuming worker CPU, memory, and Persistent Disk storage.
- Dataflow's Streaming Engine moves pipeline execution out of the worker VMs and into the Dataflow service backend.
- In your terminal, run the following command (from your word-count-beam directory): mvn -Pdataflow-runner compile exec:java \ -Dexec.mainClass=org.apache.beam.examples.WordCount \ -Dexec.args="--project= PROJECT ID \ --gcpTempLocation=gs:// BUCKET NAME /temp/ \ --output=gs:// BUCKET NAME /output \ --runner=DataflowRunner \ --region= REGION " Replace the following: PROJECT ID : your Google Cloud project ID BUCKET NAME : the name of your Cloud Storage bucket REGION : a Dataflow region , like us-central1 Python The following example code, taken from the quickstart, shows how to run the WordCount pipeline on Dataflow.

### Troubleshoot and debug Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python For example, if your pipeline uses type hints and the argument type in one of the transforms is not as expected, an error message similar to the following occurs: ... in <module> run() ... in run beam.Map('count', lambda (word, ones): (word, sum(ones)))) ... in or return self.pipeline.apply(ptransform, self) ... in apply transform.type check inputs(pvalueish) ... in type check inputs self.type check inputs or outputs(pvalueish, 'input') ... in type check inputs or outputs pvalue .element type)) google.cloud.dataflow.typehints.decorators.TypeCheckError: Input type hint violation at group: expected Tuple[TypeVariable[K], TypeVariable[V]], got <type 'str'> Go For example, if your pipeline uses a DoFn that doesn't take in any inputs, an error message similar to the following occurs: ... panic: Method ProcessElement in DoFn main.extractFn is missing all inputs.
- Worker pool stopped. ... com.google.cloud.dataflow.sdk.runners.BlockingDataflowPipelineRunner run INFO: Job finished with status FAILED Exception in thread "main" com.google.cloud.dataflow.sdk.runners.DataflowJobExecutionException: Job 2016-03-08 18 59 25-16868399470801620798 failed with status FAILED at com.google.cloud.dataflow.sdk.runners.DataflowRunner.run(DataflowRunner.java:155) at com.google.cloud.dataflow.sdk.runners.DataflowRunner.run(DataflowRunner.java:56) at com.google.cloud.dataflow.sdk.Pipeline.run(Pipeline.java:180) at com.google.cloud.dataflow.integration.BigQueryCopyTableExample.main(BigQueryCopyTableExample.java:74) Python INFO:root:Created job with id: [2016-03-08 14 12 01-2117248033993412477] ...
- File ".../apache beam/examples/wordcount.runfiles/py/apache beam/examples/wordcount.py", line 73, in <lambda> ValueError: invalid literal for int() with base 10: 'www' Note: The Dataflow service retries failed tasks up to 4 times in batch mode, and an unlimited number of times in streaming mode.
- To prevent pipelines that are likely to encounter issues from being submitted, Dataflow automatically rejects your pipeline and displays the following message: The workflow was automatically rejected by the service because it might trigger an identified bug in the SDK (details below).

