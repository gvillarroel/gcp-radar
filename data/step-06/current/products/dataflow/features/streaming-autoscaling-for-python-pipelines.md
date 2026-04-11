---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.854Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming autoscaling for Python pipelines"
feature_slug: "streaming-autoscaling-for-python-pipelines"
latest_feature_date: "2019-10-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
  - "https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance"
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
keywords:
  - "streaming"
  - "autoscaling"
  - "for"
  - "python"
  - "pipelines"
  - "can"
  - "use"
  - "dataflow"
---

# Streaming autoscaling for Python pipelines

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Python streaming pipelines can use Dataflow streaming autoscaling.

## Extended Definition

Python streaming pipelines can use Dataflow streaming autoscaling.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)

## Supporting Pages

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Dataflow Prime Dataflow Runner v2 Default feature with no option to turn off for batch jobs and optional for streaming jobs Default feature with an option to turn off for batch jobs and optional for streaming jobs Dataflow Shuffle for batch jobs Default feature with an option to turn off Default feature with an option to turn off Streaming Engine for streaming jobs Optional feature for Java pipelines and always on for Python pipelines Optional feature for Java pipelines and always on for Python pipelines since 2.45.0 Horizontal Autoscaling Default feature with option to turn off Default feature with option to turn off Vertical Autoscaling Default feature with option to turn off Not applicable Right fitting Optional feature Optional feature Billing Serverless billing Standard billing What's next Read about Dataflow quotas .
- Java pipelines that meet the following requirements can use the MapState and SetState classes: use Streaming Engine use Apache Beam SDK versions 2.58.0 and later don't use Runner v2 All pipeline options not explicitly mentioned previously or in the feature comparison table work the same for Dataflow and Dataflow Prime.
- Java --dataflowServiceOptions = enable prime = false Python Apache Beam Python SDK version 2.29.0 or later: --dataflow service options = enable prime = false Apache Beam Python SDK version 2.21.0 to 2.28.0: --experiments = enable prime = false Go --dataflow service options = enable prime = false Use Dataflow Prime with templates If you're using Dataflow templates, you can choose to enable Dataflow Prime in one of the following ways: For jobs launched from the Create job from template page: Go to the Create job from template page.
- Unsupported features Dataflow Prime doesn't support the following: Designating specific VM types by using the flag --worker machine type or --machine type for Python pipelines and --workerMachineType for Java pipelines.

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use speculative execution to avoid stragglers For batch pipelines, you can enable speculative execution , a feature to mitigate the impact of slow-running or stuck tasks.
- For example, you can use Python's with exception handling method.
- Speculative execution can help pipelines complete faster by providing an alternative execution path for work items that are experiencing delays due to slow worker machines or other transient issues such as nondeterministic bugs, resource throttling, or connectivity issues.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.

### "Performance characteristics of Kafka to BigQuery pipelines \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The benchmark tests used a message schema similar to the following: { "logStreamId" : "{{integer(1000001,2000000)}}" , "message" : "{{alphaNumeric(962)}}" } Next steps Use the Dataflow job monitoring interface Best practices for Dataflow cost optimization Troubleshoot slow or stuck streaming jobs Read from Apache Kafka to Dataflow Write from Dataflow to BigQuery Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Based on the benchmark results for a 1 GiB/s pipeline, you can estimate the resource requirements as follows: Scaling Factor: (100 MiB/s) / (1 GiB/s) = 0.1 Projected worker nodes: 63 workers × 0.1 = 6.3 workers Projected number of Streaming Engine Compute Units per hour: 58 × 0.1 = 5.8 units per hour This value should only be used as an initial estimate.
- If your pipeline follows this pattern, you can use these benchmarks to assess your Dataflow job against a well-performing reference configuration.
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 , \ useStorageWriteApiAtLeastOnce = true Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic BQ DATASET : the name of the BigQuery dataset BQ TABLE NAME : the name of the BigQuery table Generate test data To generate test data, use the following command to run the Streaming Data Generator template : gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Streaming Data Generator \ --max-workers = 140 \ --parameters \ schemaLocation = SCHEMA LOCATION , \ qps = 1000000 , \ sinkType = KAFKA, \ bootstrapServer = KAFKA BOOTSTRAP ADDRESS , \ kafkaTopic = KAFKA TOPIC , \ outputType = JSON Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID SCHEMA LOCATION : the path to a schema file in Cloud Storage KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic The Streaming Data Generator template uses a JSON Data Generator file to define the message schema.

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you want to override the pipeline validation and launch your job with validation errors, use the following pipeline service option : Java --dataflowServiceOptions = enable preflight validation = false Python --dataflow service options = enable preflight validation = false Go --dataflow service options = enable preflight validation = false Set pipeline options You can control some aspects of how Dataflow runs your job by setting pipeline options in your Apache Beam pipeline code.
- Run your pipeline If you want to learn how to create your first pipeline and deploy it locally and on Dataflow, you can follow one of the Dataflow quickstarts: Run a Java pipeline Run a Python pipeline Run a Go pipeline Run a streaming pipeline from a template --> After you create and test your Apache Beam pipeline, run your pipeline.
- You can run your pipeline locally, which lets you test and debug your Apache Beam pipeline, or on Dataflow, a data processing system available for running Apache Beam pipelines.
- For example, you can use pipeline options to set whether your pipeline runs on worker virtual machines, on the Dataflow service backend, or locally.

