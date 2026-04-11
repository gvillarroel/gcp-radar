---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.816Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow Prime"
feature_slug: "dataflow-prime"
latest_feature_date: "2022-07-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
  - "https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-cloud-storage"
keywords:
  - "dataflow"
  - "prime"
  - "is"
  - "an"
  - "enhanced"
  - "execution"
  - "offering"
  - "for"
---

# Dataflow Prime

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow Prime is an enhanced Dataflow execution offering for running pipelines; Dataflow Prime is an enhanced Dataflow execution offering for running pipelines.

## Extended Definition

Dataflow Prime is an enhanced Dataflow execution offering for running pipelines; Dataflow Prime is an enhanced Dataflow execution offering for running pipelines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-cloud-storage](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-cloud-storage)

## Supporting Pages

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Java pipelines that meet the following requirements can use the MapState and SetState classes: use Streaming Engine use Apache Beam SDK versions 2.58.0 and later don't use Runner v2 All pipeline options not explicitly mentioned previously or in the feature comparison table work the same for Dataflow and Dataflow Prime.
- Attempting to set a minimum CPU platform with Dataflow Prime might result in an error such as: Setting minimum CPU platform is not supported for the selected machine type e2-standard-2.
- Before using Dataflow Prime To use Dataflow Prime, you can reuse your existing pipeline code and also enable the Dataflow Prime option either through Cloud Shell or programmatically.
- Feature comparison between Dataflow and Dataflow Prime The following table compares the available features for both variants of Dataflow.

### "Performance characteristics of Kafka to BigQuery pipelines \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 At-least-once mode gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Kafka to BigQuery Flex \ --enable-streaming-engine \ --additional-experiments = streaming mode at least once \ --parameters \ readBootstrapServerAndTopic = " KAFKA BOOTSTRAP ADDRESS ; KAFKA TOPIC " , \ kafkaReadAuthenticationMode = APPLICATION DEFAULT CREDENTIALS, \ messageFormat = JSON, \ writeMode = SINGLE TABLE NAME, \ outputTableSpec = " PROJECT ID : BQ DATASET .
- The benchmark tests used a message schema similar to the following: { "logStreamId" : "{{integer(1000001,2000000)}}" , "message" : "{{alphaNumeric(962)}}" } Next steps Use the Dataflow job monitoring interface Best practices for Dataflow cost optimization Troubleshoot slow or stuck streaming jobs Read from Apache Kafka to Dataflow Write from Dataflow to BigQuery Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Performance characteristics of Kafka to BigQuery pipelines Stay organized with collections Save and categorize content based on your preferences.
- If your pipeline follows this pattern, you can use these benchmarks to assess your Dataflow job against a well-performing reference configuration.

### "Spanner change streams to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Specifically:\n" + " - For Cloud Spanner JSON type, the order of the members of an object is" + " lexicographically ordered, but there is no such guarantee for BigQuery JSON type.\n" + " - Cloud Spanner supports nanoseconds TIMESTAMP type, BigQuery only supports" + " microseconds TIMESTAMP type.\n" , "Learn more about <a href=\"https://cloud.google.com/spanner/docs/change-streams\">change" + " streams</a>, <a" + " href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow\">how to" + " build change streams Dataflow pipelines</a>, and <a" + " href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow#best practices\">best" + " practices</a>." }, optionsClass = SpannerChangeStreamsToBigQueryOptions . class , flexContainerName = "googlecloud-to-googlecloud" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner instance must exist prior to running the pipeline." , "The Cloud Spanner database must exist prior to running the pipeline." , "The Cloud Spanner metadata instance must exist prior to running the pipeline." , "The Cloud Spanner metadata database must exist prior to running the pipeline." , "The Cloud Spanner change stream must exist prior to running the pipeline." , "The BigQuery dataset must exist prior to running the pipeline." }, streaming = true , supportsExactlyOnce = true , supportsAtLeastOnce = true ) public final class SpannerChangeStreamsToBigQuery { / String/String Coder for {@link FailsafeElement}. / public static final FailsafeElementCoder<String , String > FAILSAFE ELEMENT CODER = FailsafeElementCoder . of ( StringUtf8Coder . of (), StringUtf8Coder . of ()); private static final Logger LOG = LoggerFactory . getLogger ( SpannerChangeStreamsToBigQuery . class ); // Max number of deadletter queue retries. private static final int DLQ MAX RETRIES = 5 ; private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; / Main entry point for executing the pipeline. @param args The command-line arguments to the pipeline. / public static void main ( String [] args ) { UncaughtExceptionLogger . register (); LOG . info ( "Starting to replicate change records from Spanner change streams to BigQuery" ); SpannerChangeStreamsToBigQueryOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( SpannerChangeStreamsToBigQueryOptions . class ); run ( options ); } private static void validateOptions ( SpannerChangeStreamsToBigQueryOptions options ) { if ( options . getDlqRetryMinutes () < = 0 ) { throw new IllegalArgumentException ( "dlqRetryMinutes must be positive." ); } if ( options . getBigQueryChangelogTableNameTemplate () . equals ( BigQueryUtils .
- WriteDLQ . newBuilder () . withDlqDirectory ( dlqManager . getSevereDlqDirectoryWithDateTime ()) . withTmpDirectory ( dlqManager . getSevereDlqDirectory () + "tmp/" ) . setIncludePaneInfo ( true ) . build ()); return pipeline . run (); } private static DeadLetterQueueManager buildDlqManager ( SpannerChangeStreamsToBigQueryOptions options ) { String tempLocation = options . as ( DataflowPipelineOptions . class ). getTempLocation (). endsWith ( "/" ) ? options . as ( DataflowPipelineOptions . class ). getTempLocation () : options . as ( DataflowPipelineOptions . class ). getTempLocation () + "/" ; String dlqDirectory = options . getDeadLetterQueueDirectory (). isEmpty () ? tempLocation + "dlq/" + options . getJobName () + "/" : options . getDeadLetterQueueDirectory (); LOG . info ( "Dead letter queue directory: {}" , dlqDirectory ); return DeadLetterQueueManager . create ( dlqDirectory , DLQ MAX RETRIES ); } / Remove the following intermediate metadata fields that are not user data from {@link TableRow}: metadata error, metadata retry count, metadata spanner original payload json. / private static TableRow removeIntermediateMetadataFields ( TableRow tableRow ) { TableRow cleanTableRow = tableRow . clone (); Set<String> rowKeys = tableRow . keySet (); Set<String> metadataFields = BigQueryUtils . getBigQueryIntermediateMetadataFieldNames (); for ( String rowKey : rowKeys ) { if ( metadataFields . contains ( rowKey )) { cleanTableRow . remove ( rowKey ); } else if ( rowKeys . contains ( " type " + rowKey )) { cleanTableRow . remove ( " type " + rowKey ); } } return cleanTableRow ; } / DoFn that converts a {@link DataChangeRecord} to multiple {@link Mod} in serialized JSON format. / static class DataChangeRecordToModJsonFn extends DoFn<DataChangeRecord , String > { @ProcessElement public void process ( @Element DataChangeRecord input , OutputReceiver<String> receiver ) { for ( org . apache . beam . sdk . io . gcp . spanner . changestreams . model .
- Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.v2.cdc.dlq.DeadLetterQueueManager ; import com.google.cloud.teleport.v2.cdc.dlq.StringDeadLetterQueueSanitizer ; import com.google.cloud.teleport.v2.coders.FailsafeElementCoder ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2. options .SpannerChangeStreamsToBigQueryOptions ; import com.google.cloud.teleport.v2.templates.spannerchangestreamstobigquery. model .Mod ; import com.google.cloud.teleport.v2.templates.spannerchangestreamstobigquery. model .ModColumnType ; import com.google.cloud.teleport.v2.templates.spannerchangestreamstobigquery.schemautils.BigQueryUtils ; import com.google.cloud.teleport.v2.templates.spannerchangestreamstobigquery.schemautils.OptionsUtils ; import com.google.cloud.teleport.v2.transforms.DLQWriteTransform ; import com.google.cloud.teleport.v2.utils.BigQueryIOUtils ; import com.google.cloud.teleport.v2.values.FailsafeElement ; import com.google.common.base.Strings ; import com.google.common.collect.ImmutableSet ; import java.io.IOException ; import java.util.ArrayList ; import java.util.List ; import java.util.Set ; import java.util.stream.Collectors ; import org.apache.beam.runners.dataflow. options .DataflowPipelineOptions ; import org.apache.beam.sdk.
- Mod changeStreamsMod : input . getMods ()) { Mod mod = new Mod ( changeStreamsMod . getKeysJson (), changeStreamsMod . getNewValuesJson (), input . getCommitTimestamp (), input . getServerTransactionId (), input . isLastRecordInTransactionInPartition (), input . getRecordSequence (), input . getTableName (), input . getRowType (). stream (). map ( ModColumnType :: new ). collect ( Collectors . toList ()), input . getModType (), input . getValueCaptureType (), input . getNumberOfRecordsInTransaction (), input . getNumberOfPartitionsInTransaction ()); String modJsonString ; try { modJsonString = mod . toJson (); } catch ( IOException e ) { // Ignore exception and print bad format. modJsonString = String . format ( "\"%s\"" , input ); } receiver . output ( modJsonString ); } } } } Production considerations When running the Spanner Change Streams to BigQuery template in a production environment, consider the following best practices to help ensure reliability and prevent data loss: Worker provisioning and scaling Set maxNumWorkers adequately: Insufficient Dataflow workers can cause the pipeline to fall behind in processing change stream data.

### "Spanner change streams to Cloud Storage template \_|\_ Cloud Dataflow \_\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-cloud-storage](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-cloud-storage)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Output files can be written in either JSON or AVRO format, depending on the user configuration.\n" , "Note that you can minimize network latency and network transport costs by running the Dataflow job from the same region as your Cloud Spanner instance or Cloud Storage bucket. " + "If you use sources, sinks, staging file locations, or temporary file locations that are located outside of your job's region, your data might be sent across regions. " + "See more about <a href=\"https://cloud.google.com/dataflow/docs/concepts/regional-endpoints\">Dataflow regional endpoints</a>.\n" , "Learn more about <a href=\"https://cloud.google.com/spanner/docs/change-streams\">change streams</a>, <a href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow\">how to build change streams Dataflow pipelines</a>, and <a href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow#best practices\">best practices</a>." }, optionsClass = SpannerChangeStreamsToGcsOptions . class , flexContainerName = "googlecloud-to-googlecloud" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-cloud-storage" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner instance must exist prior to running the pipeline." , "The Cloud Spanner database must exist prior to running the pipeline." , "The Cloud Spanner metadata instance must exist prior to running the pipeline." , "The Cloud Spanner metadata database must exist prior to running the pipeline." , "The Cloud Spanner change stream must exist prior to running the pipeline." , "The Cloud Storage output bucket must exist prior to running the pipeline." }, streaming = true , supportsAtLeastOnce = true ) public class SpannerChangeStreamsToGcs { private static final Logger LOG = LoggerFactory . getLogger ( SpannerChangeStreamsToGcs . class ); private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; public static void main ( String [] args ) { UncaughtExceptionLogger . register (); LOG . info ( "Starting Input Files to GCS" ); SpannerChangeStreamsToGcsOptions options = PipelineOptionsFactory . fromArgs ( args ). as ( SpannerChangeStreamsToGcsOptions . class ); run ( options ); } private static String getProjectId ( SpannerChangeStreamsToGcsOptions options ) { return options . getSpannerProjectId (). isEmpty () ? options . getProject () : options . getSpannerProjectId (); } public static PipelineResult run ( SpannerChangeStreamsToGcsOptions options ) { LOG . info ( "Requested File Format is " + options . getOutputFileFormat ()); options . setStreaming ( true ); options . setEnableStreamingEngine ( true ); final Pipeline pipeline = Pipeline . create ( options ); // Get the Spanner project, instance, database, and change stream parameters.
- LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 SPANNER INSTANCE ID : Cloud Spanner instance ID SPANNER DATABASE : Cloud Spanner database SPANNER METADATA INSTANCE ID : Cloud Spanner metadata instance ID SPANNER METADATA DATABASE : Cloud Spanner metadata database SPANNER CHANGE STREAM : Cloud Spanner change stream GCS OUTPUT DIRECTORY : File location for change streams output Template source code Java / Copyright (C) 2022 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- The sink data can be stored in a Text or Avro file format. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/googlecloud-to-googlecloud/README Spanner Change Streams to Google Cloud Storage.md">README</a> for instructions on how to use or modify this template. / @Template ( name = "Spanner Change Streams to Google Cloud Storage" , category = TemplateCategory .
- The default for this parameter is the project where the Dataflow pipeline is running. spannerDatabaseRole : The Spanner database role to use when running the template.

