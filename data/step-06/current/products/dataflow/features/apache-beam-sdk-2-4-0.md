---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.852Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Apache Beam SDK 2.4.0"
feature_slug: "apache-beam-sdk-2-4-0"
latest_feature_date: "2019-03-20"
deprecation_date: "2019-03-20"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk"
  - "https://docs.cloud.google.com/dataflow/docs/guides/migrate-java-1-to-2"
  - "https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices"
keywords:
  - "apache"
  - "beam"
  - "sdk"
  - "version"
  - "dataflow"
  - "pipelines"
  - "deprecated"
  - "2019"
---

# Apache Beam SDK 2.4.0

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Apache Beam SDK 2.4.0 is an SDK version supported by Dataflow pipelines; deprecated on 2019-03-20.

## Extended Definition

Apache Beam SDK 2.4.0 is an SDK version supported by Dataflow pipelines; deprecated on 2019-03-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- [https://docs.cloud.google.com/dataflow/docs/guides/migrate-java-1-to-2](https://docs.cloud.google.com/dataflow/docs/guides/migrate-java-1-to-2)
- [https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices)

## Supporting Pages

### Install the Apache Beam SDK \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/migrate-java-1-to-2](https://docs.cloud.google.com/dataflow/docs/guides/migrate-java-1-to-2)
- Source ID: `site-docs-reference-2`
- Final score: 47
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To upgrade an existing installation of apache-beam, use the --upgrade flag: pip install --upgrade 'apache-beam[gcp]' As of October 7, 2020, Dataflow no longer supports Python 2 pipelines.
- You define these pipelines with an Apache Beam program and can choose a runner, such as Dataflow, to execute your pipeline.
- This page shows you how to install the Apache Beam SDK so that you can run your pipelines on the Dataflow service.
- To install the latest version of the Apache Beam SDK for Go, run the the following command: go get -u github.com/apache/beam/sdks/v2/go/pkg/beam Note: Version numbers have the form major.minor.patch and are incremented as follows: major version for incompatible API changes, minor version for new functionality added in a backward-compatible manner, and patch version for forward-compatible bug fixes.

### Install the Apache Beam SDK \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- Source ID: `site-docs-reference-required-3`
- Final score: 47
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To upgrade an existing installation of apache-beam, use the --upgrade flag: pip install --upgrade 'apache-beam[gcp]' As of October 7, 2020, Dataflow no longer supports Python 2 pipelines.
- You define these pipelines with an Apache Beam program and can choose a runner, such as Dataflow, to execute your pipeline.
- This page shows you how to install the Apache Beam SDK so that you can run your pipelines on the Dataflow service.
- To install the latest version of the Apache Beam SDK for Go, run the the following command: go get -u github.com/apache/beam/sdks/v2/go/pkg/beam Note: Version numbers have the form major.minor.patch and are incremented as follows: major version for incompatible API changes, minor version for new functionality added in a backward-compatible manner, and patch version for forward-compatible bug fixes.

### "Apache Beam I/O connector best practices \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices)
- Source ID: `site-docs-reference-required-3`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Best practices for individual I/O connectors The following topics list best practices for individual I/O connectors: I/O connector Read Write Apache Iceberg Read from Apache Iceberg Write to Apache Iceberg Apache Kafka Read from Apache Kafka Write to Apache Kafka BigQuery Read from BigQuery Write to BigQuery Bigtable Read from Bigtable Write to Bigtable Cloud Storage Read from Cloud Storage Write to Cloud Storage Pub/Sub Read from Pub/Sub Write to Pub/Sub Google-supported I/O connectors The following table lists the Apache Beam I/O connectors supported by Dataflow.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Apache Beam I/O connector best practices Stay organized with collections Save and categorize content based on your preferences.
- This type of error handling is supported for the following Java I/Os in Apache Beam versions 2.55.0 and later: BigQueryIO , BigtableIO , PubSubIO , KafkaIO , FileIO , TextIO , and AvroIO .
- Use the latest version of the Apache Beam SDK.

