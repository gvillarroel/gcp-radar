---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.796Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Targeted reservations for accelerator pipelines"
feature_slug: "targeted-reservations-for-accelerator-pipelines"
latest_feature_date: "2025-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/compute-engine-reservations"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance"
  - "https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines"
keywords:
  - "targeted"
  - "reservations"
  - "for"
  - "accelerator"
  - "pipelines"
  - "dataflow"
  - "supports"
  - "specifically"
---

# Targeted reservations for accelerator pipelines

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports specifically targeted Compute Engine reservations for pipelines that use GPUs or TPUs.

## Extended Definition

Dataflow supports specifically targeted Compute Engine reservations for pipelines that use GPUs or TPUs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/compute-engine-reservations](https://docs.cloud.google.com/dataflow/docs/guides/compute-engine-reservations)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)

## Supporting Pages

### Use Compute Engine reservations with Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/compute-engine-reservations](https://docs.cloud.google.com/dataflow/docs/guides/compute-engine-reservations)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Reservations and accelerators Dataflow supports specifically targeted reservations for pipelines using accelerators (GPUs or TPUs).
- Compute Engine pricing model If your Dataflow usage includes VMs from specifically targeted reservations that have GPUs or TPUs, then compute resources from those reserved VMs are billed according to Compute Engine Pricing .
- If your specifically targeted reservations are attached to a Compute Engine resource-based commitment , then you also receive applicable resource-based committed use discounts (CUDs) for your usage.
- For instructions on using Dataflow accelerators with specific reservations, contact your account team.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Feature Dataflow supports specifically targeted reservations for pipelines using accelerators (GPUs or TPUs).
- March 17, 2022 Feature Dataflow now supports the following Google-provided templates in GA: Pub/Sub Subscription to BigQuery Pub/Sub Topic to BigQuery Pub/Sub Avro to BigQuery Pub/Sub Proto to BigQuery Pub/Sub to Pub/Sub Pub/Sub to Cloud Storage Avro Pub/Sub to Cloud Storage Text Cloud Storage Text to BigQuery (Stream) Cloud Storage Text to Pub/Sub (Stream) Change Data Capture to BigQuery (Stream) Apache Kafka to BigQuery BigQuery export to Parquet (via Storage API) Firestore to Cloud Storage Text Cloud Spanner to Cloud Storage Text Cloud Storage Text to BigQuery Cloud Storage Text to Firestore Cloud Storage Text to Pub/Sub (Batch) Apache Cassandra to Bigtable Datastream to Cloud Spanner File Format Conversion Bulk Compress Cloud Storage Files Bulk Decompress Cloud Storage Files Firestore Bulk Delete Streaming Data Generator to Pub/Sub, BigQuery, and Cloud Storage March 04, 2022 Feature You can now use the Apache Beam SDK for Go to create batch Dataflow pipelines .
- August 27, 2025 Feature Dataflow supports TPUs, Google's custom-designed AI accelerators that are optimized for large-scale AI/ML workloads.
- November 21, 2025 Feature Dataflow now supports speculative execution for batch pipelines.

### "Performance characteristics of Kafka to BigQuery pipelines \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Performance characteristics of Kafka to BigQuery pipelines Stay organized with collections Save and categorize content based on your preferences.
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 At-least-once mode gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Kafka to BigQuery Flex \ --enable-streaming-engine \ --additional-experiments = streaming mode at least once \ --parameters \ readBootstrapServerAndTopic = " KAFKA BOOTSTRAP ADDRESS ; KAFKA TOPIC " , \ kafkaReadAuthenticationMode = APPLICATION DEFAULT CREDENTIALS, \ messageFormat = JSON, \ writeMode = SINGLE TABLE NAME, \ outputTableSpec = " PROJECT ID : BQ DATASET .
- The benchmark tests used a message schema similar to the following: { "logStreamId" : "{{integer(1000001,2000000)}}" , "message" : "{{alphaNumeric(962)}}" } Next steps Use the Dataflow job monitoring interface Best practices for Dataflow cost optimization Troubleshoot slow or stuck streaming jobs Read from Apache Kafka to Dataflow Write from Dataflow to BigQuery Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Exactly-once mode gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Kafka to BigQuery Flex \ --enable-streaming-engine \ --parameters \ readBootstrapServerAndTopic = " KAFKA BOOTSTRAP ADDRESS ; KAFKA TOPIC " , \ kafkaReadAuthenticationMode = APPLICATION DEFAULT CREDENTIALS, \ messageFormat = JSON, \ writeMode = SINGLE TABLE NAME, \ outputTableSpec = " PROJECT ID : BQ DATASET .

### Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- You can use TestPipeline on a Apache Beam pipeline runner such as the Direct Runner or the Dataflow Runner to apply assertions on the contents of PCollection objects using PAssert , as shown in the following code snippet of a JUnit test class : @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void myPipelineTest () throws Exception { final PCollection<String> pcol = p . apply (...) PAssert . that ( pcol ). containsInAnyOrder (...); p . run (); } Unit tests for individual transforms By factoring your code into reusable transforms, for example, as top-level or static nested classes, you can create targeted tests for different parts of your pipeline.
- For streaming pipelines, you can also run end-to-end tests using generated data, for example, using the Dataflow Streaming Data Generator to emulate production-like data characteristics and volumes.
- Although this page focuses on running pipelines built using the Apache Beam Java SDK, Dataflow also supports Apache Beam pipelines that were developed using Python and Go.
- The following sections describe how various formal software tests apply to data pipelines using Dataflow.

