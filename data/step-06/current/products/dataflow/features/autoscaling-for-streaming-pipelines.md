---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.868Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Autoscaling for streaming pipelines"
feature_slug: "autoscaling-for-streaming-pipelines"
latest_feature_date: "2016-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines"
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
  - "https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance"
keywords:
  - "autoscaling"
  - "streaming"
  - "pipelines"
  - "dataflow"
  - "supports"
  - "select"
  - "sources"
  - "sinks"
---

# Autoscaling for streaming pipelines

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports autoscaling for streaming pipelines with select sources and sinks.

## Extended Definition

Dataflow supports autoscaling for streaming pipelines with select sources and sinks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)

## Supporting Pages

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.
- Limitations and considerations Before enabling speculative execution, consider the following: Streaming pipelines: Speculative execution is not supported for streaming pipelines.
- By default, Dataflow retries these failed tasks four times in batch mode and an unlimited number of times in streaming mode.
- Vertical Autoscaling also requires Dataflow Prime, which has additional limitations and a different billing model .

### "Performance characteristics of Kafka to BigQuery pipelines \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- Source ID: `site-docs-root-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 , \ useStorageWriteApiAtLeastOnce = true Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic BQ DATASET : the name of the BigQuery dataset BQ TABLE NAME : the name of the BigQuery table Generate test data To generate test data, use the following command to run the Streaming Data Generator template : gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Streaming Data Generator \ --max-workers = 140 \ --parameters \ schemaLocation = SCHEMA LOCATION , \ qps = 1000000 , \ sinkType = KAFKA, \ bootstrapServer = KAFKA BOOTSTRAP ADDRESS , \ kafkaTopic = KAFKA TOPIC , \ outputType = JSON Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID SCHEMA LOCATION : the path to a schema file in Cloud Storage KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic The Streaming Data Generator template uses a JSON Data Generator file to define the message schema.
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 At-least-once mode gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Kafka to BigQuery Flex \ --enable-streaming-engine \ --additional-experiments = streaming mode at least once \ --parameters \ readBootstrapServerAndTopic = " KAFKA BOOTSTRAP ADDRESS ; KAFKA TOPIC " , \ kafkaReadAuthenticationMode = APPLICATION DEFAULT CREDENTIALS, \ messageFormat = JSON, \ writeMode = SINGLE TABLE NAME, \ outputTableSpec = " PROJECT ID : BQ DATASET .
- The benchmark tests used a message schema similar to the following: { "logStreamId" : "{{integer(1000001,2000000)}}" , "message" : "{{alphaNumeric(962)}}" } Next steps Use the Dataflow job monitoring interface Best practices for Dataflow cost optimization Troubleshoot slow or stuck streaming jobs Read from Apache Kafka to Dataflow Write from Dataflow to BigQuery Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Exactly-once mode gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Kafka to BigQuery Flex \ --enable-streaming-engine \ --parameters \ readBootstrapServerAndTopic = " KAFKA BOOTSTRAP ADDRESS ; KAFKA TOPIC " , \ kafkaReadAuthenticationMode = APPLICATION DEFAULT CREDENTIALS, \ messageFormat = JSON, \ writeMode = SINGLE TABLE NAME, \ outputTableSpec = " PROJECT ID : BQ DATASET .

### Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- Source ID: `site-docs-reference-required-3`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- The end-to-end test uses the Dataflow Runner and a small test dataset to verify that the complete pipeline functions correctly, including its integration with data sources, data sinks, and other external systems.
- For streaming pipelines, you can also run end-to-end tests using generated data, for example, using the Dataflow Streaming Data Generator to emulate production-like data characteristics and volumes.
- Although this page focuses on running pipelines built using the Apache Beam Java SDK, Dataflow also supports Apache Beam pipelines that were developed using Python and Go.
- The diagram shows the scope of different tests and how they relate to transforms ( DoFn and PTransform subclasses), pipelines, data sources, and data sinks.

