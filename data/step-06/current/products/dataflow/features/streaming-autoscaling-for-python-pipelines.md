---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.847Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming autoscaling for Python pipelines"
feature_slug: "streaming-autoscaling-for-python-pipelines"
latest_feature_date: "2019-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
keywords:
  - "streaming"
  - "autoscaling"
  - "python"
  - "pipelines"
  - "can"
  - "use"
  - "dataflow"
---

# Streaming autoscaling for Python pipelines

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Python streaming pipelines can use Dataflow streaming autoscaling.

## Extended Definition

Python streaming pipelines can use Dataflow streaming autoscaling.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)

## Supporting Pages

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run your pipeline If you want to learn how to create your first pipeline and deploy it locally and on Dataflow, you can follow one of the Dataflow quickstarts: Run a Java pipeline Run a Python pipeline Run a Go pipeline Run a streaming pipeline from a template --> After you create and test your Apache Beam pipeline, run your pipeline.
- In your terminal, run the following command (from your word-count-beam directory): mvn -Pdataflow-runner compile exec:java \ -Dexec.mainClass=org.apache.beam.examples.WordCount \ -Dexec.args="--project= PROJECT ID \ --gcpTempLocation=gs:// BUCKET NAME /temp/ \ --output=gs:// BUCKET NAME /output \ --runner=DataflowRunner \ --region= REGION " Replace the following: PROJECT ID : your Google Cloud project ID BUCKET NAME : the name of your Cloud Storage bucket REGION : a Dataflow region , like us-central1 Python The following example code, taken from the quickstart, shows how to run the WordCount pipeline on Dataflow.
- In your terminal, run the following command: python -m apache beam.examples.wordcount \ --region DATAFLOW REGION \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// STORAGE BUCKET /results/outputs \ --runner DataflowRunner \ --project PROJECT ID \ --temp location gs:// STORAGE BUCKET /tmp/ Replace the following: DATAFLOW REGION : the region where you want to deploy the Dataflow job—for example, europe-west1 The --region flag overrides the default region that is set in the metadata server, your local client, or environment variables.
- If you want to override the pipeline validation and launch your job with validation errors, use the following pipeline service option : Java --dataflowServiceOptions = enable preflight validation = false Python --dataflow service options = enable preflight validation = false Go --dataflow service options = enable preflight validation = false Set pipeline options You can control some aspects of how Dataflow runs your job by setting pipeline options in your Apache Beam pipeline code.

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are two modes available: Java --dataflowServiceOptions= map task backup mode=ON --dataflowServiceOptions= map task backup mode=CAUTIOUS Python / Go --dataflow service options= map task backup mode=ON --dataflow service options= map task backup mode=CAUTIOUS In ON mode, a backup task is scheduled if the original task's expected runtime is about 20% longer than a new task's expected runtime.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.
- Limitations and considerations Before enabling speculative execution, consider the following: Streaming pipelines: Speculative execution is not supported for streaming pipelines.
- By default, Dataflow retries these failed tasks four times in batch mode and an unlimited number of times in streaming mode.

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-reference-2`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Dataflow Prime Dataflow Runner v2 Default feature with no option to turn off for batch jobs and optional for streaming jobs Default feature with an option to turn off for batch jobs and optional for streaming jobs Dataflow Shuffle for batch jobs Default feature with an option to turn off Default feature with an option to turn off Streaming Engine for streaming jobs Optional feature for Java pipelines and always on for Python pipelines Optional feature for Java pipelines and always on for Python pipelines since 2.45.0 Horizontal Autoscaling Default feature with option to turn off Default feature with option to turn off Vertical Autoscaling Default feature with option to turn off Not applicable Right fitting Optional feature Optional feature Billing Serverless billing Standard billing What's next Read about Dataflow quotas .
- Java pipelines that meet the following requirements can use the MapState and SetState classes: use Streaming Engine use Apache Beam SDK versions 2.58.0 and later don't use Runner v2 All pipeline options not explicitly mentioned previously or in the feature comparison table work the same for Dataflow and Dataflow Prime.
- Unsupported features Dataflow Prime doesn't support the following: Designating specific VM types by using the flag --worker machine type or --machine type for Python pipelines and --workerMachineType for Java pipelines.
- Dataflow Prime features The following is the list of supported Dataflow Prime features for different kinds of pipelines: Vertical Autoscaling (memory).

