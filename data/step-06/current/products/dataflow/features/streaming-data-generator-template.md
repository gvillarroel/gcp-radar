---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.825Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming Data Generator template"
feature_slug: "streaming-data-generator-template"
latest_feature_date: "2022-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery"
keywords:
  - "streaming"
  - "generator"
  - "template"
  - "this"
  - "provided"
  - "generates"
  - "for"
  - "pub"
---

# Streaming Data Generator template

Product: Dataflow
Coverage: LOW

## Step 02 Summary

This Google-provided template generates streaming data for Pub/Sub, BigQuery, and Cloud Storage.

## Extended Definition

This Google-provided template generates streaming data for Pub/Sub, BigQuery, and Cloud Storage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)

## Supporting Pages

### "Spanner change streams to Pub/Sub template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- After creation, Pub/Sub automatically generates and attaches a subscription to the new topic. " + "If you try to output data to a Pub/Sub topic that doesn't exist, the dataflow pipeline throws an exception, and the pipeline gets stuck as it continuously tries to make a connection.\n" , "If the necessary Pub/Sub topic already exists, you can output data to that topic." , "Learn more about <a href=\"https://cloud.google.com/spanner/docs/change-streams\">change streams</a>, <a href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow\">how to build change streams Dataflow pipelines</a>, and <a href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow#best practices\">best practices</a>." }, optionsClass = SpannerChangeStreamsToPubSubOptions . class , flexContainerName = "googlecloud-to-googlecloud" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner instance must exist before running the pipeline." , "The Cloud Spanner database must exist prior to running the pipeline." , "The Cloud Spanner metadata instance must exist prior to running the pipeline." , "The Cloud Spanner metadata database must exist prior to running the pipeline." , "The Cloud Spanner change stream must exist prior to running the pipeline." , "The Pub/Sub topic must exist prior to running the pipeline." }, streaming = true , supportsAtLeastOnce = true ) public class SpannerChangeStreamsToPubSub { private static final Logger LOG = LoggerFactory . getLogger ( SpannerChangeStreamsToPubSub . class ); private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; public static void main ( String [] args ) { UncaughtExceptionLogger . register (); LOG . info ( "Starting Input Messages to Pub/Sub" ); SpannerChangeStreamsToPubSubOptions options = PipelineOptionsFactory . fromArgs ( args ). as ( SpannerChangeStreamsToPubSubOptions . class ); run ( options ); } private static String getSpannerProjectId ( SpannerChangeStreamsToPubSubOptions options ) { return options . getSpannerProjectId (). isEmpty () ? options . getProject () : options . getSpannerProjectId (); } private static String getPubsubProjectId ( SpannerChangeStreamsToPubSubOptions options ) { return options . getPubsubProjectId (). isEmpty () ? options . getProject () : options . getPubsubProjectId (); } public static boolean isValidAsciiString ( String outputMessageMetadata ) { if ( outputMessageMetadata != null && !
- LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 SPANNER INSTANCE ID : Spanner instance ID SPANNER DATABASE : Spanner database SPANNER METADATA INSTANCE ID : Spanner metadata instance ID SPANNER METADATA DATABASE : Spanner metadata database SPANNER CHANGE STREAM : Spanner change stream PUBSUB TOPIC : The Pub/Sub topic for change streams output Template source code Java / Copyright (C) 2022 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- The sink data can be stored in a JSON Text or Avro data format. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/googlecloud-to-googlecloud/README Spanner Change Streams to PubSub.md">README</a> for instructions on how to use or modify this template. / @Template ( name = "Spanner Change Streams to PubSub" , category = TemplateCategory .
- StaticValueProvider . of ( options . getSpannerDatabaseRole ())); } pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( spannerConfig ) . withMetadataInstance ( metadataInstanceId ) . withMetadataDatabase ( metadataDatabaseId ) . withChangeStreamName ( changeStreamName ) . withInclusiveStartAt ( startTimestamp ) . withInclusiveEndAt ( endTimestamp ) . withRpcPriority ( rpcPriority ) . withMetadataTable ( metadataTableName )) . apply ( "Convert each record to a PubsubMessage" , FileFormatFactorySpannerChangeStreamsToPubSub . newBuilder () . setOutputDataFormat ( options . getOutputDataFormat ()) . setProjectId ( pubsubProjectId ) . setPubsubAPI ( pubsubAPI ) . setPubsubTopicName ( pubsubTopicName ) . setIncludeSpannerSource ( includeSpannerSource ) . setSpannerDatabaseId ( databaseId ) . setSpannerInstanceId ( instanceId ) . setOutputMessageMetadata ( outputMessageMetadata ) . build ()); return pipeline . run (); } } What's next Learn about Dataflow templates .

### "Bigtable change streams to Pub/Sub template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- ReadOptions . class }, skipOptions = { "bigtableReadAppProfile" , "bigtableAdditionalRetryCodes" , "bigtableRpcAttemptTimeoutMs" , "bigtableRpcTimeoutMs" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub" , flexContainerName = "googlecloud-to-googlecloud" , contactInformation = "https://cloud.google.com/support" , streaming = true , supportsAtLeastOnce = true ) public final class BigtableChangeStreamsToPubSub { / String/String Coder for {@link FailsafeElement}. / public static final FailsafeElementCoder<String , String > FAILSAFE ELEMENT CODER = FailsafeElementCoder . of ( StringUtf8Coder . of (), StringUtf8Coder . of ()); private static final Logger LOG = LoggerFactory . getLogger ( BigtableChangeStreamsToPubSub . class ); private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; private static final TupleTag<FailsafeElement<String , String >> INVALID MODS TAG = new TupleTag<FailsafeElement<String , String >> ( "invalidMods" ) {}; private static final TupleTag<FailsafeElement<String , String >> VALID MODS TAG = new TupleTag<FailsafeElement<String , String >> ( "validMods" ) {}; / Main entry point for executing the pipeline. @param args The command-line arguments to the pipeline. / public static void main ( String [] args ) { LOG . info ( "Starting to replicate change records from Cloud Bigtable change streams to PubSub" ); BigtableChangeStreamsToPubSubOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( BigtableChangeStreamsToPubSubOptions . class ); run ( options ); } private static void validateOptions ( BigtableChangeStreamsToPubSubOptions options ) { if ( options . getDlqRetryMinutes () < = 0 ) { throw new IllegalArgumentException ( "dlqRetryMinutes must be positive." ); } if ( options . getDlqMaxRetries () < 0 ) { throw new IllegalArgumentException ( "dlqMaxRetries cannot be negative." ); } if ( options . getBigtableReadChangeStreamTimeoutMs () != null && options . getBigtableReadChangeStreamTimeoutMs () < = 0 ) { throw new IllegalArgumentException ( "bigtableReadChangeStreamTimeoutMs must be greater than 0." ); } } private static void setOptions ( BigtableChangeStreamsToPubSubOptions options ) { options . setStreaming ( true ); options . setEnableStreamingEngine ( true ); // Add use runner v2 to the experiments option, since change streams connector is only supported // on Dataflow runner v2.
- Instant . now (), // low watermark setCell ); Mod mod = new Mod ( pubSub . getSource (), mutation , setCell ); switch ( pubSub . getDestination (). getMessageFormat ()) { case AVRO : return pubSub . mapChangeJsonStringToPubSubMessageAsAvro ( mod . getChangeJson ()); case PROTOCOL BUFFERS : return pubSub . mapChangeJsonStringToPubSubMessageAsProto ( mod . getChangeJson ()); case JSON : return pubSub . mapChangeJsonStringToPubSubMessageAsJson ( mod . getChangeJson ()); default : throw new IllegalArgumentException ( "Unexpected message format: " + pubSub . getDestination (). getMessageFormat ()); } } / DoFn that converts a {@link ChangeStreamMutation} to multiple {@link Mod} in serialized JSON format. / static class ChangeStreamMutationToModJsonFn extends DoFn<ChangeStreamMutation , String > { private final BigtableSource sourceInfo ; ChangeStreamMutationToModJsonFn ( BigtableSource source ) { this . sourceInfo = source ; } private static String toJsonString ( Mod mod , ChangeStreamMutation inputMutation ) { try { return mod . toJson (); } catch ( IOException e ) { // Ignore exception and print bad format. return String . format ( "\"%s\"" , inputMutation ); } } @ProcessElement public void process ( @Element ChangeStreamMutation input , OutputReceiver<String> receiver ) throws Exception { for ( Entry entry : input . getEntries ()) { ModType modType = getModType ( entry ); switch ( modType ) { case SET CELL : SetCell setCell = ( SetCell ) entry ; if ( ! sourceInfo . isIgnoredColumnFamily ( setCell . getFamilyName ()) && ! sourceInfo . isIgnoredColumn ( setCell . getFamilyName (), setCell . getQualifier (). toString ( Charset . forName ( sourceInfo . getCharset ())))) { Mod mod = new Mod ( sourceInfo , input , setCell ); receiver . output ( toJsonString ( mod , input )); } break ; case DELETE CELLS : DeleteCells deleteCells = ( DeleteCells ) entry ; if ( ! sourceInfo . isIgnoredColumnFamily ( deleteCells . getFamilyName ()) && ! sourceInfo . isIgnoredColumn ( deleteCells . getFamilyName (), deleteCells . getQualifier () . toString ( Charset . forName ( sourceInfo . getCharset ())))) { Mod mod = new Mod ( sourceInfo , input , deleteCells ); receiver . output ( toJsonString ( mod , input )); } break ; case DELETE FAMILY : DeleteFamily deleteFamily = ( DeleteFamily ) entry ; if ( ! sourceInfo . isIgnoredColumnFamily ( deleteFamily . getFamilyName ())) { Mod mod = new Mod ( sourceInfo , input , deleteFamily ); receiver . output ( toJsonString ( mod , input )); } break ; default : case UNKNOWN : throw new UnsupportedEntryException ( "Cloud Bigtable change stream entry of type " + entry . getClass (). getName () + " is not supported.
- MessageFormat ; import com.google.cloud.teleport.v2.templates.bigtablechangestreamstopubsub. model .Mod ; import com.google.cloud.teleport.v2.templates.bigtablechangestreamstopubsub. model .ModType ; import com.google.cloud.teleport.v2.templates.bigtablechangestreamstopubsub. model .PubSubDestination ; import com.google.cloud.teleport.v2.templates.bigtablechangestreamstopubsub. model .TestChangeStreamMutation ; import com.google.cloud.teleport.v2.templates.bigtablechangestreamstopubsub.schemautils.PubSubUtils ; import com.google.cloud.teleport.v2.transforms.DLQWriteTransform ; import com.google.cloud.teleport.v2.utils.
- This parameter is useful when you don't need a new value to be present, also known as cache invalidation, or when values are extremely large and exceed Pub/Sub message size limits. dlqDirectory : The directory for the dead-letter queue.

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Create a streaming pipeline using a Dataflow template This quickstart shows you how to create a streaming pipeline using a Google-provided Dataflow template.
- The Pub/Sub to BigQuery template is a streaming pipeline that can read JSON-formatted messages from a Pub/Sub topic and write them to a BigQuery table.
- Run the pipeline Run a streaming pipeline using the Google-provided Pub/Sub to BigQuery template.
- What's next Dataflow templates overview Creating classic templates Running classic templates Google-provided templates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Spanner change streams to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Specifically:\n" + " - For Cloud Spanner JSON type, the order of the members of an object is" + " lexicographically ordered, but there is no such guarantee for BigQuery JSON type.\n" + " - Cloud Spanner supports nanoseconds TIMESTAMP type, BigQuery only supports" + " microseconds TIMESTAMP type.\n" , "Learn more about <a href=\"https://cloud.google.com/spanner/docs/change-streams\">change" + " streams</a>, <a" + " href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow\">how to" + " build change streams Dataflow pipelines</a>, and <a" + " href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow#best practices\">best" + " practices</a>." }, optionsClass = SpannerChangeStreamsToBigQueryOptions . class , flexContainerName = "googlecloud-to-googlecloud" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner instance must exist prior to running the pipeline." , "The Cloud Spanner database must exist prior to running the pipeline." , "The Cloud Spanner metadata instance must exist prior to running the pipeline." , "The Cloud Spanner metadata database must exist prior to running the pipeline." , "The Cloud Spanner change stream must exist prior to running the pipeline." , "The BigQuery dataset must exist prior to running the pipeline." }, streaming = true , supportsExactlyOnce = true , supportsAtLeastOnce = true ) public final class SpannerChangeStreamsToBigQuery { / String/String Coder for {@link FailsafeElement}. / public static final FailsafeElementCoder<String , String > FAILSAFE ELEMENT CODER = FailsafeElementCoder . of ( StringUtf8Coder . of (), StringUtf8Coder . of ()); private static final Logger LOG = LoggerFactory . getLogger ( SpannerChangeStreamsToBigQuery . class ); // Max number of deadletter queue retries. private static final int DLQ MAX RETRIES = 5 ; private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; / Main entry point for executing the pipeline. @param args The command-line arguments to the pipeline. / public static void main ( String [] args ) { UncaughtExceptionLogger . register (); LOG . info ( "Starting to replicate change records from Spanner change streams to BigQuery" ); SpannerChangeStreamsToBigQueryOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( SpannerChangeStreamsToBigQueryOptions . class ); run ( options ); } private static void validateOptions ( SpannerChangeStreamsToBigQueryOptions options ) { if ( options . getDlqRetryMinutes () < = 0 ) { throw new IllegalArgumentException ( "dlqRetryMinutes must be positive." ); } if ( options . getBigQueryChangelogTableNameTemplate () . equals ( BigQueryUtils .
- Extracted from change stream" + " data change record.\n" + "- metadata big query commit timestamp: The commit timestamp of when the row is" + " inserted into BigQuery.\n" , "Notes:\n" + "- This template does not propagate schema changes from Cloud Spanner to BigQuery." + " Because performing a schema change in Cloud Spanner is likely going to break the" + " pipeline, you might need to recreate the pipeline after the schema change.\n" + "- For OLD AND NEW VALUES and NEW VALUES value capture types, when the data change" + " record contains an UPDATE change, the template needs to do a stale read to Cloud" + " Spanner at the commit timestamp of the data change record to retrieve the unchanged" + " but watched columns.
- LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 SPANNER INSTANCE ID : Spanner instance ID SPANNER DATABASE : Spanner database SPANNER METADATA INSTANCE ID : Spanner metadata instance ID SPANNER METADATA DATABASE : Spanner metadata database SPANNER CHANGE STREAM : Spanner change stream BIGQUERY DATASET : The BigQuery dataset for change streams output Template source code Java / Copyright (C) 2022 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- See" + " more about Dataflow regional endpoints.\n" + "- This template supports all valid Cloud Spanner data types, but if the BigQuery type" + " is more precise than the Cloud Spanner type, precision loss might occur during the" + " transformation.

