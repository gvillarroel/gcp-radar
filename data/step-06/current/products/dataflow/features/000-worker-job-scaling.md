---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.771Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "000-worker job scaling"
feature_slug: "000-worker-job-scaling"
latest_feature_date: "2023-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics"
  - "https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType"
keywords:
  - "000"
  - "worker"
  - "job"
  - "scaling"
  - "dataflow"
  - "jobs"
  - "can"
  - "scale"
---

# 000-worker job scaling

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow jobs can scale to 4,000 worker VMs.

## Extended Definition

Dataflow jobs can scale to 4,000 worker VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics](https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics)
- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType)

## Supporting Pages

### Monitor Dataflow autoscaling \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics](https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the target CPU utilization is set too high, you might see a pattern where Dataflow scales down, the backlog starts to grow, and Dataflow scales up again to compensate, instead of converging on a stable number of workers.
- Monitor autoscaling metrics The Dataflow service automatically chooses the number of worker instances required to run your autoscaling job.
- You can view autoscaling monitoring charts for streaming jobs within the Dataflow monitoring interface.
- Try reducing the worker utilization hint, so that Dataflow scales up more quickly.

### "Enum AutoscalingEvent.AutoscalingEventType (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType)
- Source ID: `site-java-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf enum google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description ACTUATION FAILURE The ACTUATION FAILURE type should be used when we want to report an error to the user indicating why the current number of workers in the pool could not be changed.
- 0.92.0 (latest) 0.91.0 0.89.0 0.87.0 0.86.0 0.85.0 0.84.0 0.82.0 0.80.0 0.79.0 0.78.0 0.77.0 0.76.0 0.74.0 0.72.0 0.71.0 0.68.0 0.67.0 0.66.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.5.0 public enum AutoscalingEvent .
- ACTUATION FAILURE = 3; ACTUATION FAILURE VALUE The ACTUATION FAILURE type should be used when we want to report an error to the user indicating why the current number of workers in the pool could not be changed.
- Home Documentation Developer tools Java Client libraries Send feedback Enum AutoscalingEvent.AutoscalingEventType (0.92.0) Stay organized with collections Save and categorize content based on your preferences.

### "Performance characteristics of Kafka to BigQuery pipelines \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource usage and cost scales roughly linearly with the input throughput, although for small jobs with only a few workers, the total cost is dominated by fixed costs.
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 , \ useStorageWriteApiAtLeastOnce = true Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic BQ DATASET : the name of the BigQuery dataset BQ TABLE NAME : the name of the BigQuery table Generate test data To generate test data, use the following command to run the Streaming Data Generator template : gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Streaming Data Generator \ --max-workers = 140 \ --parameters \ schemaLocation = SCHEMA LOCATION , \ qps = 1000000 , \ sinkType = KAFKA, \ bootstrapServer = KAFKA BOOTSTRAP ADDRESS , \ kafkaTopic = KAFKA TOPIC , \ outputType = JSON Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID SCHEMA LOCATION : the path to a schema file in Cloud Storage KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic The Streaming Data Generator template uses a JSON Data Generator file to define the message schema.
- The benchmark tests used a message schema similar to the following: { "logStreamId" : "{{integer(1000001,2000000)}}" , "message" : "{{alphaNumeric(962)}}" } Next steps Use the Dataflow job monitoring interface Best practices for Dataflow cost optimization Troubleshoot slow or stuck streaming jobs Read from Apache Kafka to Dataflow Write from Dataflow to BigQuery Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Result Exactly-once At-least-once Input throughput per worker Mean: 15 MBps, n=3 Mean: 18 MBps, n=3 Average CPU utilization across all workers Mean: 70%, n=3 Mean: 75%, n=3 Number of worker nodes Mean: 63, n=3 Mean: 53, n=3 Streaming Engine Compute Units per hour Mean: 58, n=3 Mean: 0, n=3 The autoscaling algorithm can affect the target CPU utilization level.

