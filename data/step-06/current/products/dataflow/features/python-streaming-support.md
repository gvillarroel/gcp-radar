---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.847Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Python streaming support"
feature_slug: "python-streaming-support"
latest_feature_date: "2019-10-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration"
  - "https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest"
keywords:
  - "python"
  - "streaming"
  - "dataflow"
  - "supports"
  - "pipelines"
  - "apache"
  - "beam"
  - "sdk"
---

# Python streaming support

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports Python streaming pipelines with Apache Beam SDK 2.16 or higher.

## Extended Definition

Dataflow supports Python streaming pipelines with Apache Beam SDK 2.16 or higher.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration](https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration)
- [https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest)

## Supporting Pages

### "Python Client for Dataflow \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest](https://docs.cloud.google.com/python/docs/reference/dataflow/latest)
- Source ID: `site-python-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-dataflow-client Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-dataflow-client Next Steps Read the Client Library Documentation for Dataflow to see other available methods on the client.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Dataflow Stay organized with collections Save and categorize content based on your preferences.
- The Google-specific logging configurations (default handlers for environment-based configuration; not propagating logging events to the root logger) get executed the first time any client library is instantiated in your application, and only if the affected loggers have not been previously configured. (This is the reason for 2.i. above.) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Environment-Based Examples Enabling the default handler for all Google-based loggers export GOOGLE SDK PYTHON LOGGING SCOPE=google Enabling the default handler for a specific Google module (for a client library called library v1 ): export GOOGLE SDK PYTHON LOGGING SCOPE=google.cloud.library v1 Advanced, code-based configuration You can also configure a valid logging scope using Python’s standard logging mechanism.

### "Apache Beam I/O connector best practices \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices)
- Source ID: `site-docs-reference-required-3`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- I/O connector name Java Python Go AvroIO Supported Supported Supported BigQueryIO Supported Supported Supported BigTableIO Supported Sink supported Sink supported DatastoreIO Supported Supported Supported FhirIO (healthcare) Supported Not available Supported FileIO Supported Supported Supported GcsFileSystem Supported Supported Supported JdbcIO Supported Cross-language support Cross-language support KafkaIO Supported Cross-language support Cross-language support LocalFileSystem Supported Supported Supported ParquetIO Supported Supported Supported PubSubIO Supported Supported Supported SpannerIO Supported Cross-language support Supported TextIO Supported Supported Supported TFRecordIO Supported Supported Not available What's next Read the Apache Beam documentation for I/O connectors .
- Best practices for individual I/O connectors The following topics list best practices for individual I/O connectors: I/O connector Read Write Apache Iceberg Read from Apache Iceberg Write to Apache Iceberg Apache Kafka Read from Apache Kafka Write to Apache Kafka BigQuery Read from BigQuery Write to BigQuery Bigtable Read from Bigtable Write to Bigtable Cloud Storage Read from Cloud Storage Write to Cloud Storage Pub/Sub Read from Pub/Sub Write to Pub/Sub Google-supported I/O connectors The following table lists the Apache Beam I/O connectors supported by Dataflow.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Apache Beam I/O connector best practices Stay organized with collections Save and categorize content based on your preferences.
- For an example of performance benchmarks in a Dataflow streaming pipeline, see Performance characteristics of Pub/Sub to BigQuery pipelines .

### "Migrate from App Engine MapReduce to Apache Beam and Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration](https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration)
- Source ID: `site-docs-reference-required-3`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use Apache Beam to create complex pipelines for both batch and streaming and run them on Dataflow.
- Getting started with Dataflow and Apache Beam To get started, follow the quickstart of your choice: Using Java and Apache Maven Using Python Using Go Creating and running a pipeline When using App Engine MapReduce, you create data processing classes, add the MapReduce library, and once the job's specification and settings are defined, you create and start the job in one step using the static start() method on the appropriate job class.
- Write ( s , "wordcounts.txt" , formatted ) Additional Apache Beam and Dataflow benefits If you choose to migrate your App Engine MapReduce jobs to Apache Beam pipelines, you will benefit from several features that Apache Beam and Dataflow have to offer.
- Migration cases The following are some example cases where you could benefit from migrating from App Engine MapReduce to Apache Beam and Dataflow: Store your Datastore database application data in a BigQuery data warehouse for analytical processing using SQL.

