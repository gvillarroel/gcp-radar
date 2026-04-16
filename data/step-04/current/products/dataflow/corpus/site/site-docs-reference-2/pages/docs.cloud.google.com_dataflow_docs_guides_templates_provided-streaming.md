---
title: "Google-provided templates \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-streaming
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-streaming
  title: "Google-provided templates \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Google-provided templates
Stay organized with collections
Save and categorize content based on your preferences.
Google provides
open source
Dataflow templates that you can use instead of writing pipeline code. This page
lists the available templates. Container images for these templates are hosted at
gcr.io/dataflow-templates .
Starting August 4, 2025, Google-managed template jobs run on
Dataflow Prime by default.
To run your job on standard Dataflow, you must disable Dataflow Prime.
To disable Dataflow Prime for Google-managed template jobs, set the enable_prime
Dataflow service option to false
( enable_prime=false ) when you run the template.
For more details, see
Disable Dataflow Prime .
For general information about templates, see the
Overview .
To get started, run the sample
template WordCount .
To create your own
template, see how to extend templates .
Streaming templates
Templates for processing data continuously:
Apache Kafka to Apache Kafka
Apache Kafka to BigQuery
Apache Kafka to Cloud Storage
Change Data Capture from MySQL to BigQuery (Stream)
Bigtable change streams to BigQuery
Bigtable change streams to Pub/Sub
Spanner change streams to BigQuery
Spanner change streams to Cloud Storage
Spanner change streams to any source database
Spanner change streams to Pub/Sub
Datastream to BigQuery (Stream)
Datastream to Spanner
Datastream to MySQL or PostgreSQL (Stream)
Data Masking/Tokenization from Cloud Storage to BigQuery (using Cloud DLP)
JMS to Pub/Sub
MongoDB to BigQuery (Stream)
MQTT to Pub/Sub
Pub/Sub to BigQuery
Pub/Sub to BigQuery with Python UDF
Pub/Sub Avro to BigQuery
Pub/Sub Proto to BigQuery
Pub/Sub Proto to BigQuery with Python UDF
Pub/Sub Subscription to BigQuery
Pub/Sub to Avro Files on Cloud Storage
Pub/Sub to Datadog
Pub/Sub to Elasticsearch
Pub/Sub to Java Database Connectivity (JDBC)
Pub/Sub to MongoDB
Pub/Sub to MongoDB with Python UDF
Pub/Sub to Pub/Sub
Pub/Sub to Redis
Pub/Sub to Splunk
Pub/Sub Topic or Subscription to Text Files on Cloud Storage
Pub/Sub Topic to Text Files on Cloud Storage
Text Files on Cloud Storage to BigQuery (Stream)
Cloud Storage text files to BigQuery with Python UDF
Text files on Cloud Storage to Pub/Sub (Stream)
Batch templates
Templates for processing data in bulk:
Any Source DB to Spanner
Apache Cassandra to Bigtable
AstraDB to BigQuery
BigQuery to Bigtable
BigQuery to Clickhouse
BigQuery export to Parquet (via Storage API)
BigQuery to Cloud Storage TFRecords
BigQuery to Elasticsearch
BigQuery to MongoDB
Bigtable to Cloud Storage Avro
Bigtable to Cloud Storage JSON
Bigtable to Cloud Storage Parquet
Bigtable to Cloud Storage SequenceFile
Bigtable change streams to Vertex AI Vector Search
Bigtable to Vertex AI Vector Search files on Cloud Storage
Spanner to BigQuery
Spanner to Cloud Storage Avro
Spanner to Cloud Storage Text
Spanner to Vertex AI Vector Search files on Cloud Storage
Cloud Storage Avro to Bigtable
Cloud Storage Parquet to Bigtable
Cloud Storage SequenceFile to Bigtable
Cloud Storage Avro to Spanner
Cloud Storage CSV files to BigQuery
Cloud Storage Text to BigQuery
Cloud Storage text files to BigQuery with Python UDF
Cloud Storage Text to Spanner
Cloud Storage Text to Datastore [Deprecated]
Cloud Storage Text to Firestore (Datastore mode)
Cloud Storage Text to Pub/Sub (Batch)
Cloud Storage to Elasticsearch
Datastore to Cloud Storage Text [Deprecated]
Firestore (Datastore mode) to Cloud Storage Text
Google Ads to BigQuery
Google Cloud to Neo4j
JDBC to BigQuery
JDBC to Pub/Sub
MongoDB to BigQuery
MySQL to BigQuery
Oracle to BigQuery
PostgreSQL to BigQuery
SQL Server to BigQuery
Utility templates
Bulk Compress Cloud Storage Files
Bulk Decompress Cloud Storage Files
Datastore Bulk Delete [Deprecated]
File Format Conversion
Firestore (Datastore mode) Bulk Delete
Streaming
Data Generator to Pub/Sub, BigQuery, and Cloud Storage
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
