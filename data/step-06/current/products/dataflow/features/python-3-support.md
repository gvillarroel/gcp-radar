---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.854Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Python 3 support"
feature_slug: "python-3-support"
latest_feature_date: "2019-10-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status"
keywords:
  - "python"
  - "dataflow"
  - "supports"
  - "running"
  - "apache"
  - "beam"
  - "pipelines"
  - "with"
---

# Python 3 support

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports running Apache Beam pipelines with Python 3.5, 3.6, and 3.7; Dataflow supports running Apache Beam pipelines with Python 3.5, 3.6, and 3.7.

## Extended Definition

Dataflow supports running Apache Beam pipelines with Python 3.5, 3.6, and 3.7; Dataflow supports running Apache Beam pipelines with Python 3.5, 3.6, and 3.7.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)

## Supporting Pages

### Install the Apache Beam SDK \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To upgrade an existing installation of apache-beam, use the --upgrade flag: pip install --upgrade 'apache-beam[gcp]' As of October 7, 2020, Dataflow no longer supports Python 2 pipelines.
- You define these pipelines with an Apache Beam program and can choose a runner, such as Dataflow, to execute your pipeline.
- Set up your development environment For information about setting up your Google Cloud project and development environment to use Dataflow, follow one of the tutorials: Create a Dataflow pipeline using Java Create a Dataflow pipeline using Python Create a Dataflow pipeline using Go Source code and examples The Apache Beam source code is available in the Apache Beam repository on GitHub.
- Install Python wheel by running the following command: pip install wheel Install the latest version of the Apache Beam SDK for Python by running the following command from a virtual environment: pip install 'apache-beam[gcp]' Depending on the connection, the installation might take some time.

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Develop Apache Beam notebooks with the interactive runner Stay organized with collections Save and categorize content based on your preferences.
- Use the Apache Beam interactive runner with JupyterLab notebooks to complete the following tasks: Iteratively develop pipelines.
- To launch the notebooks on the Dataflow service, export the pipelines created in your Apache Beam notebook.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- March 17, 2022 Feature Dataflow now supports the following Google-provided templates in GA: Pub/Sub Subscription to BigQuery Pub/Sub Topic to BigQuery Pub/Sub Avro to BigQuery Pub/Sub Proto to BigQuery Pub/Sub to Pub/Sub Pub/Sub to Cloud Storage Avro Pub/Sub to Cloud Storage Text Cloud Storage Text to BigQuery (Stream) Cloud Storage Text to Pub/Sub (Stream) Change Data Capture to BigQuery (Stream) Apache Kafka to BigQuery BigQuery export to Parquet (via Storage API) Firestore to Cloud Storage Text Cloud Spanner to Cloud Storage Text Cloud Storage Text to BigQuery Cloud Storage Text to Firestore Cloud Storage Text to Pub/Sub (Batch) Apache Cassandra to Bigtable Datastream to Cloud Spanner File Format Conversion Bulk Compress Cloud Storage Files Bulk Decompress Cloud Storage Files Firestore Bulk Delete Streaming Data Generator to Pub/Sub, BigQuery, and Cloud Storage March 04, 2022 Feature You can now use the Apache Beam SDK for Go to create batch Dataflow pipelines .
- April 21, 2023 Feature Dataflow ML now supports the Automatic Model Refresh feature, which lets you update your machine learning model without stopping your Apache Beam pipeline.
- October 30, 2017 Feature Cloud Dataflow Shuffle is now available for pipelines using the Apache Beam SDK for Python version 2.1 or later.
- Apache Beam SDK for Java, versions 2.0.0 to 2.4.0 (inclusive) Apache Beam SDK for Python, versions 2.0.0 to 2.4.0 (inclusive) Cloud Dataflow SDK for Java, versions 2.0.0 to 2.4.0 (inclusive) Cloud Dataflow SDK for Python, versions 2.0.0 to 2.4.0 (inclusive) See the SDK version support status page for detailed SDK support status.

### SDK version support status \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Known issue: Pipelines that read data from Cloud Storage by using GcsIO, either directly or indirectly, such as with BigQueryIO, might experience data corruption on the Apache Beam Python SDK versions 2.53.0 to 2.58.1.
- Known issue: Pipelines that read data from Cloud Storage by using GcsIO, either directly or indirectly, such as with BigQueryIO, might experience data corruption on the Apache Beam Python SDK versions 2.53.0 to 2.58.1.
- Known issue: Pipelines that read data from Cloud Storage by using GcsIO, either directly or indirectly, such as with BigQueryIO, might experience data corruption on the Apache Beam Python SDK versions 2.53.0 to 2.58.1.
- Known issue: Pipelines that read data from Cloud Storage by using GcsIO, either directly or indirectly, such as with BigQueryIO, might experience data corruption on the Apache Beam Python SDK versions 2.53.0 to 2.58.1.

