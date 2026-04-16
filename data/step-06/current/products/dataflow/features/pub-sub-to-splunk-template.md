---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.773Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Pub/Sub to Splunk template"
feature_slug: "pub-sub-to-splunk-template"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-batch"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery"
keywords:
  - "pub"
  - "sub"
  - "splunk"
  - "template"
  - "dataflow"
  - "generally"
  - "available"
---

# Pub/Sub to Splunk template

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

The Pub/Sub to Splunk Dataflow template is generally available.

## Extended Definition

The Pub/Sub to Splunk Dataflow template is generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-batch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-batch)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery)

## Supporting Pages

### Google-provided templates \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Streaming templates Templates for processing data continuously: Apache Kafka to Apache Kafka Apache Kafka to BigQuery Apache Kafka to Cloud Storage Change Data Capture from MySQL to BigQuery (Stream) Bigtable change streams to BigQuery Bigtable change streams to Pub/Sub Spanner change streams to BigQuery Spanner change streams to Cloud Storage Spanner change streams to any source database Spanner change streams to Pub/Sub Datastream to BigQuery (Stream) Datastream to Spanner Datastream to MySQL or PostgreSQL (Stream) Data Masking/Tokenization from Cloud Storage to BigQuery (using Cloud DLP) JMS to Pub/Sub MongoDB to BigQuery (Stream) MQTT to Pub/Sub Pub/Sub to BigQuery Pub/Sub to BigQuery with Python UDF Pub/Sub Avro to BigQuery Pub/Sub Proto to BigQuery Pub/Sub Proto to BigQuery with Python UDF Pub/Sub Subscription to BigQuery Pub/Sub to Avro Files on Cloud Storage Pub/Sub to Datadog Pub/Sub to Elasticsearch Pub/Sub to Java Database Connectivity (JDBC) Pub/Sub to MongoDB Pub/Sub to MongoDB with Python UDF Pub/Sub to Pub/Sub Pub/Sub to Redis Pub/Sub to Splunk Pub/Sub Topic or Subscription to Text Files on Cloud Storage Pub/Sub Topic to Text Files on Cloud Storage Text Files on Cloud Storage to BigQuery (Stream) Cloud Storage text files to BigQuery with Python UDF Text files on Cloud Storage to Pub/Sub (Stream) Batch templates Templates for processing data in bulk: Any Source DB to Spanner Apache Cassandra to Bigtable AstraDB to BigQuery BigQuery to Bigtable BigQuery to Clickhouse BigQuery export to Parquet (via Storage API) BigQuery to Cloud Storage TFRecords BigQuery to Elasticsearch BigQuery to MongoDB Bigtable to Cloud Storage Avro Bigtable to Cloud Storage JSON Bigtable to Cloud Storage Parquet Bigtable to Cloud Storage SequenceFile Bigtable change streams to Vertex AI Vector Search Bigtable to Vertex AI Vector Search files on Cloud Storage Spanner to BigQuery Spanner to Cloud Storage Avro Spanner to Cloud Storage Text Spanner to Vertex AI Vector Search files on Cloud Storage Cloud Storage Avro to Bigtable Cloud Storage Parquet to Bigtable Cloud Storage SequenceFile to Bigtable Cloud Storage Avro to Spanner Cloud Storage CSV files to BigQuery Cloud Storage Text to BigQuery Cloud Storage text files to BigQuery with Python UDF Cloud Storage Text to Spanner Cloud Storage Text to Datastore [Deprecated] Cloud Storage Text to Firestore (Datastore mode) Cloud Storage Text to Pub/Sub (Batch) Cloud Storage to Elasticsearch Datastore to Cloud Storage Text [Deprecated] Firestore (Datastore mode) to Cloud Storage Text Google Ads to BigQuery Google Cloud to Neo4j JDBC to BigQuery JDBC to Pub/Sub MongoDB to BigQuery MySQL to BigQuery Oracle to BigQuery PostgreSQL to BigQuery SQL Server to BigQuery Utility templates Bulk Compress Cloud Storage Files Bulk Decompress Cloud Storage Files Datastore Bulk Delete [Deprecated] File Format Conversion Firestore (Datastore mode) Bulk Delete Streaming Data Generator to Pub/Sub, BigQuery, and Cloud Storage Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Google-provided templates Stay organized with collections Save and categorize content based on your preferences.
- To disable Dataflow Prime for Google-managed template jobs, set the enable prime Dataflow service option to false ( enable prime=false ) when you run the template.
- Google provides open source Dataflow templates that you can use instead of writing pipeline code.

### AstraDB to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /flexTemplates:launch { "launchParameter" : { "jobName" : " JOB NAME " , "parameters" : { "astraToken" : " ASTRA TOKEN " , "astraDatabaseId" : " ASTRA DATABASE ID " , "astraKeyspace" : " ASTRA KEYSPACE " , "astraTable" : " ASTRA TABLE " , }, "containerSpecGcsPath" : "gs://dataflow-templates- LOCATION / VERSION /flex/AstraDB To BigQuery" , "environment" : { "maxWorkers" : "10" } } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- In your shell or terminal, run the template: gcloud dataflow flex-template run JOB NAME \ --template-file-gcs-location = gs://dataflow-templates- REGION NAME / VERSION /flex/AstraDB To BigQuery \ --project = PROJECT ID \ --region = REGION NAME \ --parameters \ astraToken = ASTRA TOKEN , \ astraDatabaseId = ASTRA DATABASE ID , \ astraKeyspace = ASTRA KEYSPACE , \ astraTable = ASTRA TABLE , \ Replace the following: JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- DatasetInfo ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.v2.astradb.options.AstraDbToBigQueryOptions ; import com.google.cloud.teleport.v2.astradb.transforms.AstraDbToBigQueryMappingFn ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2.utils.SecretManagerUtils ; import java.util.AbstractMap ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.coders.SerializableCoder ; import org.apache.beam.sdk.io.astra.db.AstraDbIO ; import org.apache.beam.sdk.io.astra.db.CqlSessionHolder ; import org.apache.beam.sdk.io.astra.db.mapping.AstraDbMapper ; import org.apache.beam.sdk.io.astra.db.mapping.BeamRowDbMapperFactoryFn ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryUtils ; import org.apache.beam.sdk.options.PipelineOptions ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.transforms.SerializableFunction ; import org.apache.beam.sdk.values.Row ; import org.apache.commons.lang3.StringUtils ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; / The {@link AstraDbToBigQuery} pipeline is a batch pipeline which ingests data from AstraDB and outputs the resulting records to BigQuery. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/astradb-to-bigquery/README AstraDB to BigQuery.md">README</a> for instructions on how to use or modify this template. / @Template ( name = "AstraDB To BigQuery" , category = TemplateCategory .
- If not set, the table specification is built from the cassandra source table attributes: keyspace=dataset name, table=table name. / String bigQueryOutputTableSpec = options . getOutputTableSpec (); if ( StringUtils . isEmpty ( bigQueryOutputTableSpec )) { bigQueryOutputTableSpec = options . getProject () + ":" + options . getAstraKeyspace () + "." + options . getAstraTable (); } TableReference bigQueryTableReference = BigQueryUtils . toTableReference ( bigQueryOutputTableSpec ); LOGGER . info ( "Big Query table spec has been set to {}" , bigQueryOutputTableSpec ); return bigQueryTableReference ; } / Create destination dataset and tables if needed (schema mapped from Cassandra). @param options pipeline options @param bqTableRef big query table reference / private static void createBigQueryDestinationTableIfNotExist ( Options options , TableReference bqTableRef ) { BigQuery bigquery = BigQueryOptions . newBuilder (). setProjectId ( options . getProject ()). build (). getService (); if ( null == bigquery . getDataset ( DatasetId . of ( bqTableRef . getProjectId (), bqTableRef . getDatasetId ()))) { LOGGER . info ( "Dataset was not found: creating DataSet {} in region {}" , bqTableRef . getDatasetId (), options . getWorkerRegion ()); bigquery . create ( DatasetInfo . newBuilder ( bqTableRef . getDatasetId ()) . setLocation ( options . getWorkerRegion ()) . build ()); LOGGER . debug ( "Dataset has been created [OK]" ); } else { LOGGER . info ( "Dataset {} already exist" , bqTableRef . getDatasetId ()); } } } What's next Learn about Dataflow templates .

### Google-provided templates \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-batch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-batch)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Streaming templates Templates for processing data continuously: Apache Kafka to Apache Kafka Apache Kafka to BigQuery Apache Kafka to Cloud Storage Change Data Capture from MySQL to BigQuery (Stream) Bigtable change streams to BigQuery Bigtable change streams to Pub/Sub Spanner change streams to BigQuery Spanner change streams to Cloud Storage Spanner change streams to any source database Spanner change streams to Pub/Sub Datastream to BigQuery (Stream) Datastream to Spanner Datastream to MySQL or PostgreSQL (Stream) Data Masking/Tokenization from Cloud Storage to BigQuery (using Cloud DLP) JMS to Pub/Sub MongoDB to BigQuery (Stream) MQTT to Pub/Sub Pub/Sub to BigQuery Pub/Sub to BigQuery with Python UDF Pub/Sub Avro to BigQuery Pub/Sub Proto to BigQuery Pub/Sub Proto to BigQuery with Python UDF Pub/Sub Subscription to BigQuery Pub/Sub to Avro Files on Cloud Storage Pub/Sub to Datadog Pub/Sub to Elasticsearch Pub/Sub to Java Database Connectivity (JDBC) Pub/Sub to MongoDB Pub/Sub to MongoDB with Python UDF Pub/Sub to Pub/Sub Pub/Sub to Redis Pub/Sub to Splunk Pub/Sub Topic or Subscription to Text Files on Cloud Storage Pub/Sub Topic to Text Files on Cloud Storage Text Files on Cloud Storage to BigQuery (Stream) Cloud Storage text files to BigQuery with Python UDF Text files on Cloud Storage to Pub/Sub (Stream) Batch templates Templates for processing data in bulk: Any Source DB to Spanner Apache Cassandra to Bigtable AstraDB to BigQuery BigQuery to Bigtable BigQuery to Clickhouse BigQuery export to Parquet (via Storage API) BigQuery to Cloud Storage TFRecords BigQuery to Elasticsearch BigQuery to MongoDB Bigtable to Cloud Storage Avro Bigtable to Cloud Storage JSON Bigtable to Cloud Storage Parquet Bigtable to Cloud Storage SequenceFile Bigtable change streams to Vertex AI Vector Search Bigtable to Vertex AI Vector Search files on Cloud Storage Spanner to BigQuery Spanner to Cloud Storage Avro Spanner to Cloud Storage Text Spanner to Vertex AI Vector Search files on Cloud Storage Cloud Storage Avro to Bigtable Cloud Storage Parquet to Bigtable Cloud Storage SequenceFile to Bigtable Cloud Storage Avro to Spanner Cloud Storage CSV files to BigQuery Cloud Storage Text to BigQuery Cloud Storage text files to BigQuery with Python UDF Cloud Storage Text to Spanner Cloud Storage Text to Datastore [Deprecated] Cloud Storage Text to Firestore (Datastore mode) Cloud Storage Text to Pub/Sub (Batch) Cloud Storage to Elasticsearch Datastore to Cloud Storage Text [Deprecated] Firestore (Datastore mode) to Cloud Storage Text Google Ads to BigQuery Google Cloud to Neo4j JDBC to BigQuery JDBC to Pub/Sub MongoDB to BigQuery MySQL to BigQuery Oracle to BigQuery PostgreSQL to BigQuery SQL Server to BigQuery Utility templates Bulk Compress Cloud Storage Files Bulk Decompress Cloud Storage Files Datastore Bulk Delete [Deprecated] File Format Conversion Firestore (Datastore mode) Bulk Delete Streaming Data Generator to Pub/Sub, BigQuery, and Cloud Storage Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Google-provided templates Stay organized with collections Save and categorize content based on your preferences.
- To disable Dataflow Prime for Google-managed template jobs, set the enable prime Dataflow service option to false ( enable prime=false ) when you run the template.
- Google provides open source Dataflow templates that you can use instead of writing pipeline code.

