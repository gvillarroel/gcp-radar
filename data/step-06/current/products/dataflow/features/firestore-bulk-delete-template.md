---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.803Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Firestore Bulk Delete template"
feature_slug: "firestore-bulk-delete-template"
latest_feature_date: "2022-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-batch"
keywords:
  - "firestore"
  - "bulk"
  - "delete"
  - "template"
  - "provided"
  - "deletes"
  - "documents"
---

# Firestore Bulk Delete template

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This Google-provided template deletes Firestore documents in bulk.

## Extended Definition

This Google-provided template deletes Firestore documents in bulk.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-batch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-batch)

## Supporting Pages

### "BigQuery to Elasticsearch template \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch)
- Source ID: `site-api-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- XLANG , description = "The BigQuery to Elasticsearch template is a batch pipeline that ingests data from a BigQuery table into Elasticsearch as documents. " + "The template can either read the entire table or read specific records using a supplied query." , optionsClass = BigQueryToElasticsearchOptions . class , skipOptions = { "javascriptTextTransformReloadIntervalMinutes" , "javascriptTextTransformGcsPath" , "javascriptTextTransformFunctionName" }, flexContainerName = "googlecloud-to-elasticsearch-xlang" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch" , contactInformation = "https://cloud.google.com/support" , preview = true , requirements = { "The source BigQuery table must exist." , "A Elasticsearch host on a Google Cloud instance or on Elastic Cloud with Elasticsearch version 7.0 or above and should be accessible from the Dataflow worker machines." , }) }) public class BigQueryToElasticsearch { / Main entry point for pipeline execution. @param args Command line arguments to the pipeline. / public static void main ( String [] args ) { UncaughtExceptionLogger . register (); BigQueryToElasticsearchOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( BigQueryToElasticsearchOptions . class ); run ( options ); } / Runs the pipeline with the supplied options. @param options The execution parameters to the pipeline. @return The result of the pipeline execution. / private static PipelineResult run ( BigQueryToElasticsearchOptions options ) { // Create the pipeline.
- BATCH , displayName = "BigQuery to Elasticsearch" , description = "The BigQuery to Elasticsearch template is a batch pipeline that ingests data from a BigQuery table into Elasticsearch as documents. " + "The template can either read the entire table or read specific records using a supplied query." , optionsClass = BigQueryToElasticsearchOptions . class , skipOptions = { "javascriptTextTransformReloadIntervalMinutes" , "pythonExternalTextTransformGcsPath" , "pythonExternalTextTransformFunctionName" }, flexContainerName = "googlecloud-to-elasticsearch" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch" , contactInformation = "https://cloud.google.com/support" , preview = true , requirements = { "The source BigQuery table must exist." , "A Elasticsearch host on a Google Cloud instance or on Elastic Cloud with Elasticsearch version 7.0 or above and should be accessible from the Dataflow worker machines." , }), @Template ( name = "BigQuery to Elasticsearch Xlang" , category = TemplateCategory .
- RowToStringElementFn ())); } else { udfOut = readJsonDocuments . apply ( TransformTextViaJavascript . newBuilder () . setFileSystemPath ( options . getJavascriptTextTransformGcsPath ()) . setFunctionName ( options . getJavascriptTextTransformFunctionName ()) . build ()); } / Step #4: Write converted records to Elasticsearch / udfOut . apply ( "WriteToElasticsearch" , WriteToElasticsearch . newBuilder () . setUserAgent ( "dataflow-bigquery-to-elasticsearch-template/v2" ) . setOptions ( options . as ( BigQueryToElasticsearchOptions . class )) . build ()); return pipeline . run (); } } What's next Learn about Dataflow templates .
- If a query is provided then it is used to get the TableRows. / PCollection<String> readJsonDocuments = pipeline . apply ( "ReadFromBigQuery" , ReadBigQueryTableRows . newBuilder () . setOptions ( options . as ( BigQueryToElasticsearchOptions . class )) . build ()) / Step #2: Convert table rows to JSON documents. / . apply ( "TableRowsToJsonDocument" , ParDo . of ( new TableRowToJsonFn ())); / Step #3: Apply UDF functions (if specified) / PCollection<String> udfOut ; if ( usePythonUdf ) { udfOut = readJsonDocuments . apply ( "MapToRecord" , PythonExternalTextTransformer .

### Google-provided templates \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Streaming templates Templates for processing data continuously: Apache Kafka to Apache Kafka Apache Kafka to BigQuery Apache Kafka to Cloud Storage Change Data Capture from MySQL to BigQuery (Stream) Bigtable change streams to BigQuery Bigtable change streams to Pub/Sub Spanner change streams to BigQuery Spanner change streams to Cloud Storage Spanner change streams to any source database Spanner change streams to Pub/Sub Datastream to BigQuery (Stream) Datastream to Spanner Datastream to MySQL or PostgreSQL (Stream) Data Masking/Tokenization from Cloud Storage to BigQuery (using Cloud DLP) JMS to Pub/Sub MongoDB to BigQuery (Stream) MQTT to Pub/Sub Pub/Sub to BigQuery Pub/Sub to BigQuery with Python UDF Pub/Sub Avro to BigQuery Pub/Sub Proto to BigQuery Pub/Sub Proto to BigQuery with Python UDF Pub/Sub Subscription to BigQuery Pub/Sub to Avro Files on Cloud Storage Pub/Sub to Datadog Pub/Sub to Elasticsearch Pub/Sub to Java Database Connectivity (JDBC) Pub/Sub to MongoDB Pub/Sub to MongoDB with Python UDF Pub/Sub to Pub/Sub Pub/Sub to Redis Pub/Sub to Splunk Pub/Sub Topic or Subscription to Text Files on Cloud Storage Pub/Sub Topic to Text Files on Cloud Storage Text Files on Cloud Storage to BigQuery (Stream) Cloud Storage text files to BigQuery with Python UDF Text files on Cloud Storage to Pub/Sub (Stream) Batch templates Templates for processing data in bulk: Any Source DB to Spanner Apache Cassandra to Bigtable AstraDB to BigQuery BigQuery to Bigtable BigQuery to Clickhouse BigQuery export to Parquet (via Storage API) BigQuery to Cloud Storage TFRecords BigQuery to Elasticsearch BigQuery to MongoDB Bigtable to Cloud Storage Avro Bigtable to Cloud Storage JSON Bigtable to Cloud Storage Parquet Bigtable to Cloud Storage SequenceFile Bigtable change streams to Vertex AI Vector Search Bigtable to Vertex AI Vector Search files on Cloud Storage Spanner to BigQuery Spanner to Cloud Storage Avro Spanner to Cloud Storage Text Spanner to Vertex AI Vector Search files on Cloud Storage Cloud Storage Avro to Bigtable Cloud Storage Parquet to Bigtable Cloud Storage SequenceFile to Bigtable Cloud Storage Avro to Spanner Cloud Storage CSV files to BigQuery Cloud Storage Text to BigQuery Cloud Storage text files to BigQuery with Python UDF Cloud Storage Text to Spanner Cloud Storage Text to Datastore [Deprecated] Cloud Storage Text to Firestore (Datastore mode) Cloud Storage Text to Pub/Sub (Batch) Cloud Storage to Elasticsearch Datastore to Cloud Storage Text [Deprecated] Firestore (Datastore mode) to Cloud Storage Text Google Ads to BigQuery Google Cloud to Neo4j JDBC to BigQuery JDBC to Pub/Sub MongoDB to BigQuery MySQL to BigQuery Oracle to BigQuery PostgreSQL to BigQuery SQL Server to BigQuery Utility templates Bulk Compress Cloud Storage Files Bulk Decompress Cloud Storage Files Datastore Bulk Delete [Deprecated] File Format Conversion Firestore (Datastore mode) Bulk Delete Streaming Data Generator to Pub/Sub, BigQuery, and Cloud Storage Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Google-provided templates Stay organized with collections Save and categorize content based on your preferences.
- To disable Dataflow Prime for Google-managed template jobs, set the enable prime Dataflow service option to false ( enable prime=false ) when you run the template.
- Google provides open source Dataflow templates that you can use instead of writing pipeline code.

### Google-provided templates \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-batch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-batch)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Streaming templates Templates for processing data continuously: Apache Kafka to Apache Kafka Apache Kafka to BigQuery Apache Kafka to Cloud Storage Change Data Capture from MySQL to BigQuery (Stream) Bigtable change streams to BigQuery Bigtable change streams to Pub/Sub Spanner change streams to BigQuery Spanner change streams to Cloud Storage Spanner change streams to any source database Spanner change streams to Pub/Sub Datastream to BigQuery (Stream) Datastream to Spanner Datastream to MySQL or PostgreSQL (Stream) Data Masking/Tokenization from Cloud Storage to BigQuery (using Cloud DLP) JMS to Pub/Sub MongoDB to BigQuery (Stream) MQTT to Pub/Sub Pub/Sub to BigQuery Pub/Sub to BigQuery with Python UDF Pub/Sub Avro to BigQuery Pub/Sub Proto to BigQuery Pub/Sub Proto to BigQuery with Python UDF Pub/Sub Subscription to BigQuery Pub/Sub to Avro Files on Cloud Storage Pub/Sub to Datadog Pub/Sub to Elasticsearch Pub/Sub to Java Database Connectivity (JDBC) Pub/Sub to MongoDB Pub/Sub to MongoDB with Python UDF Pub/Sub to Pub/Sub Pub/Sub to Redis Pub/Sub to Splunk Pub/Sub Topic or Subscription to Text Files on Cloud Storage Pub/Sub Topic to Text Files on Cloud Storage Text Files on Cloud Storage to BigQuery (Stream) Cloud Storage text files to BigQuery with Python UDF Text files on Cloud Storage to Pub/Sub (Stream) Batch templates Templates for processing data in bulk: Any Source DB to Spanner Apache Cassandra to Bigtable AstraDB to BigQuery BigQuery to Bigtable BigQuery to Clickhouse BigQuery export to Parquet (via Storage API) BigQuery to Cloud Storage TFRecords BigQuery to Elasticsearch BigQuery to MongoDB Bigtable to Cloud Storage Avro Bigtable to Cloud Storage JSON Bigtable to Cloud Storage Parquet Bigtable to Cloud Storage SequenceFile Bigtable change streams to Vertex AI Vector Search Bigtable to Vertex AI Vector Search files on Cloud Storage Spanner to BigQuery Spanner to Cloud Storage Avro Spanner to Cloud Storage Text Spanner to Vertex AI Vector Search files on Cloud Storage Cloud Storage Avro to Bigtable Cloud Storage Parquet to Bigtable Cloud Storage SequenceFile to Bigtable Cloud Storage Avro to Spanner Cloud Storage CSV files to BigQuery Cloud Storage Text to BigQuery Cloud Storage text files to BigQuery with Python UDF Cloud Storage Text to Spanner Cloud Storage Text to Datastore [Deprecated] Cloud Storage Text to Firestore (Datastore mode) Cloud Storage Text to Pub/Sub (Batch) Cloud Storage to Elasticsearch Datastore to Cloud Storage Text [Deprecated] Firestore (Datastore mode) to Cloud Storage Text Google Ads to BigQuery Google Cloud to Neo4j JDBC to BigQuery JDBC to Pub/Sub MongoDB to BigQuery MySQL to BigQuery Oracle to BigQuery PostgreSQL to BigQuery SQL Server to BigQuery Utility templates Bulk Compress Cloud Storage Files Bulk Decompress Cloud Storage Files Datastore Bulk Delete [Deprecated] File Format Conversion Firestore (Datastore mode) Bulk Delete Streaming Data Generator to Pub/Sub, BigQuery, and Cloud Storage Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Google-provided templates Stay organized with collections Save and categorize content based on your preferences.
- To disable Dataflow Prime for Google-managed template jobs, set the enable prime Dataflow service option to false ( enable prime=false ) when you run the template.
- Google provides open source Dataflow templates that you can use instead of writing pipeline code.

