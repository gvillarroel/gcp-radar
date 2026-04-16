---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.796Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Apache Kafka to BigQuery template"
feature_slug: "apache-kafka-to-bigquery-template"
latest_feature_date: "2022-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cassandra-to-bigtable"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery"
keywords:
  - "apache"
  - "kafka"
  - "bigquery"
  - "template"
  - "provided"
  - "loads"
  - "into"
---

# Apache Kafka to BigQuery template

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This Google-provided template loads data from Apache Kafka into BigQuery.

## Extended Definition

This Google-provided template loads data from Apache Kafka into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cassandra-to-bigtable](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cassandra-to-bigtable)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery)

## Supporting Pages

### "Performance characteristics of Kafka to BigQuery pipelines \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- Source ID: `site-docs-root-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 , \ useStorageWriteApiAtLeastOnce = true Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic BQ DATASET : the name of the BigQuery dataset BQ TABLE NAME : the name of the BigQuery table Generate test data To generate test data, use the following command to run the Streaming Data Generator template : gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Streaming Data Generator \ --max-workers = 140 \ --parameters \ schemaLocation = SCHEMA LOCATION , \ qps = 1000000 , \ sinkType = KAFKA, \ bootstrapServer = KAFKA BOOTSTRAP ADDRESS , \ kafkaTopic = KAFKA TOPIC , \ outputType = JSON Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID SCHEMA LOCATION : the path to a schema file in Cloud Storage KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic The Streaming Data Generator template uses a JSON Data Generator file to define the message schema.
- A Dataflow streaming pipeline that used the Apache Kafka to BigQuery template .
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 At-least-once mode gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Kafka to BigQuery Flex \ --enable-streaming-engine \ --additional-experiments = streaming mode at least once \ --parameters \ readBootstrapServerAndTopic = " KAFKA BOOTSTRAP ADDRESS ; KAFKA TOPIC " , \ kafkaReadAuthenticationMode = APPLICATION DEFAULT CREDENTIALS, \ messageFormat = JSON, \ writeMode = SINGLE TABLE NAME, \ outputTableSpec = " PROJECT ID : BQ DATASET .
- The benchmark tests used a message schema similar to the following: { "logStreamId" : "{{integer(1000001,2000000)}}" , "message" : "{{alphaNumeric(962)}}" } Next steps Use the Dataflow job monitoring interface Best practices for Dataflow cost optimization Troubleshoot slow or stuck streaming jobs Read from Apache Kafka to Dataflow Write from Dataflow to BigQuery Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Apache Cassandra to Bigtable template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cassandra-to-bigtable](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cassandra-to-bigtable)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BATCH , displayName = "Cassandra to Cloud Bigtable" , description = { "The Apache Cassandra to Cloud Bigtable template copies a table from Apache Cassandra to Cloud Bigtable. " + "This template requires minimal configuration and replicates the table structure in Cassandra as closely as possible in Cloud Bigtable." , "The Apache Cassandra to Cloud Bigtable template is useful for the following:\n" + "- Migrating Apache Cassandra database when short downtime is acceptable.\n" + "- Periodically replicating Cassandra tables to Cloud Bigtable for global serving." }, optionsClass = Options . class , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cassandra-to-bigtable" , contactInformation = "https://cloud.google.com/support" , requirements = { "The target Bigtable table must exist before running the pipeline." , "Network connection between Dataflow workers and Apache Cassandra nodes." }) public final class CassandraToBigtable { / TODO - refactor to extend BigtableCommonOptions.WriteOptions. / public interface Options extends PipelineOptions { @TemplateParameter.Text ( order = 1 , groupName = "Source" , regexes = { "^[a-zA-Z0-9\\.\\-,] $" }, description = "Cassandra Hosts" , helpText = "The hosts of the Apache Cassandra nodes in a comma-separated list." ) ValueProvider<String> getCassandraHosts (); @SuppressWarnings ( "unused" ) void setCassandraHosts ( ValueProvider<String> hosts ); @TemplateParameter.Integer ( order = 2 , groupName = "Source" , optional = true , description = "Cassandra Port" , helpText = "The TCP port to use to reach Apache Cassandra on the nodes.
- LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 BIGTABLE PROJECT ID : your project ID where Bigtable is located BIGTABLE INSTANCE ID : the Bigtable instance id BIGTABLE TABLE ID : the name of your Bigtable table name CASSANDRA HOSTS : the Apache Cassandra host list; if multiple hosts are provided, follow the instruction on how to escape commas CASSANDRA KEYSPACE : the Apache Cassandra keyspace where table is located CASSANDRA TABLE : the Apache Cassandra table that needs to be migrated Template source code Java / Copyright (C) 2019 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- REGION NAME : the region where you want to deploy your Dataflow job—for example, us-central1 BIGTABLE PROJECT ID : your project ID where Bigtable is located BIGTABLE INSTANCE ID : the Bigtable instance id BIGTABLE TABLE ID : the name of your Bigtable table name CASSANDRA HOSTS : the Apache Cassandra host list; if multiple hosts are provided, follow the instruction on how to escape commas CASSANDRA KEYSPACE : the Apache Cassandra keyspace where table is located CASSANDRA TABLE : the Apache Cassandra table that needs to be migrated API To run the template using the REST API, send an HTTP POST request.
- The default value is 9042." ) @Default.Integer ( 9042 ) ValueProvider<Integer> getCassandraPort (); @SuppressWarnings ( "unused" ) void setCassandraPort ( ValueProvider<Integer> port ); @TemplateParameter.Text ( order = 3 , groupName = "Source" , regexes = { "^[a-zA-Z0-9][a-zA-Z0-9 ]{0,47}$" }, description = "Cassandra Keyspace" , helpText = "The Apache Cassandra keyspace where the table is located." ) ValueProvider<String> getCassandraKeyspace (); @SuppressWarnings ( "unused" ) void setCassandraKeyspace ( ValueProvider<String> keyspace ); @TemplateParameter.Text ( order = 4 , groupName = "Source" , regexes = { "^[a-zA-Z][a-zA-Z0-9 ] $" }, description = "Cassandra Table" , helpText = "The Apache Cassandra table to copy." ) ValueProvider<String> getCassandraTable (); @SuppressWarnings ( "unused" ) void setCassandraTable ( ValueProvider<String> cassandraTable ); @TemplateParameter.ProjectId ( order = 5 , groupName = "Target" , description = "Bigtable Project ID" , helpText = "The Google Cloud project ID associated with the Bigtable instance." ) ValueProvider<String> getBigtableProjectId (); @SuppressWarnings ( "unused" ) void setBigtableProjectId ( ValueProvider<String> projectId ); @TemplateParameter.Text ( order = 6 , groupName = "Target" , regexes = { "[a-z][a-z0-9\\-]+[a-z0-9]" }, description = "Target Bigtable Instance" , helpText = "The ID of the Bigtable instance that the Apache Cassandra table is copied to." ) ValueProvider<String> getBigtableInstanceId (); @SuppressWarnings ( "unused" ) void setBigtableInstanceId ( ValueProvider<String> bigtableInstanceId ); @TemplateParameter.Text ( order = 7 , groupName = "Target" , regexes = { "[ a-zA-Z0-9][- .a-zA-Z0-9] " }, description = "Target Bigtable Table" , helpText = "The name of the Bigtable table that the Apache Cassandra table is copied to." ) ValueProvider<String> getBigtableTableId (); @SuppressWarnings ( "unused" ) void setBigtableTableId ( ValueProvider<String> bigtableTableId ); @TemplateParameter.Text ( order = 8 , groupName = "Target" , optional = true , regexes = { "[- .a-zA-Z0-9]+" }, description = "The Default Bigtable Column Family" , helpText = "The name of the column family of the Bigtable table.

### AstraDB to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DatasetInfo ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.v2.astradb.options.AstraDbToBigQueryOptions ; import com.google.cloud.teleport.v2.astradb.transforms.AstraDbToBigQueryMappingFn ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2.utils.SecretManagerUtils ; import java.util.AbstractMap ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.coders.SerializableCoder ; import org.apache.beam.sdk.io.astra.db.AstraDbIO ; import org.apache.beam.sdk.io.astra.db.CqlSessionHolder ; import org.apache.beam.sdk.io.astra.db.mapping.AstraDbMapper ; import org.apache.beam.sdk.io.astra.db.mapping.BeamRowDbMapperFactoryFn ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryUtils ; import org.apache.beam.sdk.options.PipelineOptions ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.transforms.SerializableFunction ; import org.apache.beam.sdk.values.Row ; import org.apache.commons.lang3.StringUtils ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; / The {@link AstraDbToBigQuery} pipeline is a batch pipeline which ingests data from AstraDB and outputs the resulting records to BigQuery. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/astradb-to-bigquery/README AstraDB to BigQuery.md">README</a> for instructions on how to use or modify this template. / @Template ( name = "AstraDB To BigQuery" , category = TemplateCategory .
- Options . class , flexContainerName = "astradb-to-bigquery" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery" , contactInformation = "https://cloud.google.com/support" , preview = true , requirements = { "AstraDB account with a token" }) public class AstraDbToBigQuery { / Logger for the class. / private static final Logger LOGGER = LoggerFactory . getLogger ( AstraDbToBigQuery . class ); / If not provided, it is the default token range value. / public static final int DEFAULT TOKEN RANGE = 18 ; / Options for the sample <p>Inherits standard configuration options. / public interface Options extends PipelineOptions , AstraDbToBigQueryOptions .
- Read < ? > , TableSchema > bigQuerySchemaFactory = new AstraDbToBigQueryMappingFn ( options . getAstraKeyspace (), options . getAstraTable ()); LOGGER . debug ( "Schema Mapper has been initialized" ); // Map Cassandra Rows into (Apache) Beam Rows (DATA) SerializableFunction<CqlSession , AstraDbMapper<Row> > beamRowMapperFactory = new BeamRowDbMapperFactoryFn ( options . getAstraKeyspace (), options . getAstraTable ()); LOGGER . debug ( "Row Mapper has been initialized" ); // Distribute reads across all available Cassandra nodes int minimalTokenRangesCount = ( options . getMinTokenRangesCount () == null ) ?
- Optional parameters astraQuery : The query to use to filter rows instead of reading the whole table. astraDatabaseRegion : If not provided, a default is chosen, which is useful with multi-region databases. minTokenRangesCount : The minimal number of splits to use to distribute the query. outputTableSpec : The BigQuery table location to write the output to.

