---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.856Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming autoscaling"
feature_slug: "streaming-autoscaling"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance"
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
keywords:
  - "streaming"
  - "autoscaling"
  - "automatically"
  - "adjusts"
  - "resources"
  - "for"
  - "pipelines"
  - "that"
---

# Streaming autoscaling

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Streaming autoscaling automatically adjusts resources for streaming pipelines that use Streaming Engine.

## Extended Definition

Streaming autoscaling automatically adjusts resources for streaming pipelines that use Streaming Engine.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- April 10, 2019 Feature Streaming autoscaling is generally available for pipelines that use Streaming Engine .
- Change Performance and stability improvements for Streaming pipelines: Addressed a condition that caused a slowly-growing memory usage in streaming workers.
- September 29, 2016 Feature Autoscaling for streaming pipelines is now publicly available in beta for use with select sources and sinks.
- March 15, 2024 Feature You can now use worker utilization hints to tune horizontal autoscaling for streaming pipelines .

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Dataflow fully manages Google Cloud services for you, such as Compute Engine and Cloud Storage to run your Dataflow job, and automatically spins up and tears down necessary resources.
- Job optimizations In addition to managing Google Cloud resources, Dataflow automatically performs and optimizes many aspects of distributed parallel processing for you.
- In your terminal, run the following command: python -m apache beam.examples.wordcount \ --region DATAFLOW REGION \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// STORAGE BUCKET /results/outputs \ --runner DataflowRunner \ --project PROJECT ID \ --temp location gs:// STORAGE BUCKET /tmp/ Replace the following: DATAFLOW REGION : the region where you want to deploy the Dataflow job—for example, europe-west1 The --region flag overrides the default region that is set in the metadata server, your local client, or environment variables.
- These features include the following: Horizontal Autoscaling Vertical Autoscaling Dynamic work rebalancing Note: With the introduction of Vertical Autoscaling, the feature that was previously called Autoscaling has been renamed to Horizontal Autoscaling.

### "Performance characteristics of Kafka to BigQuery pipelines \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- This page describes performance characteristics for Dataflow streaming jobs that read from Apache Kafka and write to BigQuery.
- The BigQuery Storage Write API is recommended for streaming pipelines.
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 At-least-once mode gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Kafka to BigQuery Flex \ --enable-streaming-engine \ --additional-experiments = streaming mode at least once \ --parameters \ readBootstrapServerAndTopic = " KAFKA BOOTSTRAP ADDRESS ; KAFKA TOPIC " , \ kafkaReadAuthenticationMode = APPLICATION DEFAULT CREDENTIALS, \ messageFormat = JSON, \ writeMode = SINGLE TABLE NAME, \ outputTableSpec = " PROJECT ID : BQ DATASET .
- The benchmark tests used a message schema similar to the following: { "logStreamId" : "{{integer(1000001,2000000)}}" , "message" : "{{alphaNumeric(962)}}" } Next steps Use the Dataflow job monitoring interface Best practices for Dataflow cost optimization Troubleshoot slow or stuck streaming jobs Read from Apache Kafka to Dataflow Write from Dataflow to BigQuery Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Speculative execution can help pipelines complete faster by providing an alternative execution path for work items that are experiencing delays due to slow worker machines or other transient issues such as nondeterministic bugs, resource throttling, or connectivity issues.
- Limitations and considerations Before enabling speculative execution, consider the following: Streaming pipelines: Speculative execution is not supported for streaming pipelines.
- Materialize intermediate results Pipelines might have one or more particularly expensive transforms that dominate pipeline execution time.
- Time out expensive records Pipelines might stop responding while processing a small subset of elements that are more expensive or that hit a limitation that causes unresponsiveness, like a deadlock.

