---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.807Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Pub/Sub Topic to BigQuery template"
feature_slug: "pub-sub-topic-to-bigquery-template"
latest_feature_date: "2022-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery"
keywords:
  - "pub"
  - "sub"
  - "topic"
  - "bigquery"
  - "template"
  - "provided"
  - "loads"
  - "into"
---

# Pub/Sub Topic to BigQuery template

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This Google-provided template loads data from a Pub/Sub topic into BigQuery.

## Extended Definition

This Google-provided template loads data from a Pub/Sub topic into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery)

## Supporting Pages

### "Bigtable change streams to Pub/Sub template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The {@link ChangeStreamMutation} is then broken into {@link Mod}, which converted into PubsubMessage and inserted into Pub/Sub topic. / @Template ( name = "Bigtable Change Streams to PubSub" , category = TemplateCategory .
- ReadOptions . class }, skipOptions = { "bigtableReadAppProfile" , "bigtableAdditionalRetryCodes" , "bigtableRpcAttemptTimeoutMs" , "bigtableRpcTimeoutMs" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub" , flexContainerName = "googlecloud-to-googlecloud" , contactInformation = "https://cloud.google.com/support" , streaming = true , supportsAtLeastOnce = true ) public final class BigtableChangeStreamsToPubSub { / String/String Coder for {@link FailsafeElement}. / public static final FailsafeElementCoder<String , String > FAILSAFE ELEMENT CODER = FailsafeElementCoder . of ( StringUtf8Coder . of (), StringUtf8Coder . of ()); private static final Logger LOG = LoggerFactory . getLogger ( BigtableChangeStreamsToPubSub . class ); private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; private static final TupleTag<FailsafeElement<String , String >> INVALID MODS TAG = new TupleTag<FailsafeElement<String , String >> ( "invalidMods" ) {}; private static final TupleTag<FailsafeElement<String , String >> VALID MODS TAG = new TupleTag<FailsafeElement<String , String >> ( "validMods" ) {}; / Main entry point for executing the pipeline. @param args The command-line arguments to the pipeline. / public static void main ( String [] args ) { LOG . info ( "Starting to replicate change records from Cloud Bigtable change streams to PubSub" ); BigtableChangeStreamsToPubSubOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( BigtableChangeStreamsToPubSubOptions . class ); run ( options ); } private static void validateOptions ( BigtableChangeStreamsToPubSubOptions options ) { if ( options . getDlqRetryMinutes () < = 0 ) { throw new IllegalArgumentException ( "dlqRetryMinutes must be positive." ); } if ( options . getDlqMaxRetries () < 0 ) { throw new IllegalArgumentException ( "dlqMaxRetries cannot be negative." ); } if ( options . getBigtableReadChangeStreamTimeoutMs () != null && options . getBigtableReadChangeStreamTimeoutMs () < = 0 ) { throw new IllegalArgumentException ( "bigtableReadChangeStreamTimeoutMs must be greater than 0." ); } } private static void setOptions ( BigtableChangeStreamsToPubSubOptions options ) { options . setStreaming ( true ); options . setEnableStreamingEngine ( true ); // Add use runner v2 to the experiments option, since change streams connector is only supported // on Dataflow runner v2.
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /flexTemplates:launch { "launch parameter" : { "jobName" : " JOB NAME " , "containerSpecGcsPath" : "gs://dataflow-templates- REGION NAME / VERSION /flex/Bigtable Change Streams to PubSub" , "parameters" : { "bigtableReadInstanceId" : " BIGTABLE INSTANCE ID " , "bigtableReadTableId" : " BIGTABLE TABLE ID " , "bigtableChangeStreamAppProfile" : " BIGTABLE APPLICATION PROFILE ID " , "pubSubTopic" : " PUBSUB TOPIC " } } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- In your shell or terminal, run the template: gcloud dataflow flex-template run JOB NAME \ --region = REGION NAME \ --template-file-gcs-location = gs://dataflow-templates- REGION NAME / VERSION /flex/Bigtable Change Streams to PubSub \ --parameters \ bigtableReadInstanceId = BIGTABLE INSTANCE ID , \ bigtableReadTableId = BIGTABLE TABLE ID , \ bigtableChangeStreamAppProfile = BIGTABLE APPLICATION PROFILE ID , \ pubSubTopic = PUBSUB TOPIC Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.

### "Spanner change streams to Pub/Sub template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After creation, Pub/Sub automatically generates and attaches a subscription to the new topic. " + "If you try to output data to a Pub/Sub topic that doesn't exist, the dataflow pipeline throws an exception, and the pipeline gets stuck as it continuously tries to make a connection.\n" , "If the necessary Pub/Sub topic already exists, you can output data to that topic." , "Learn more about <a href=\"https://cloud.google.com/spanner/docs/change-streams\">change streams</a>, <a href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow\">how to build change streams Dataflow pipelines</a>, and <a href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow#best practices\">best practices</a>." }, optionsClass = SpannerChangeStreamsToPubSubOptions . class , flexContainerName = "googlecloud-to-googlecloud" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner instance must exist before running the pipeline." , "The Cloud Spanner database must exist prior to running the pipeline." , "The Cloud Spanner metadata instance must exist prior to running the pipeline." , "The Cloud Spanner metadata database must exist prior to running the pipeline." , "The Cloud Spanner change stream must exist prior to running the pipeline." , "The Pub/Sub topic must exist prior to running the pipeline." }, streaming = true , supportsAtLeastOnce = true ) public class SpannerChangeStreamsToPubSub { private static final Logger LOG = LoggerFactory . getLogger ( SpannerChangeStreamsToPubSub . class ); private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; public static void main ( String [] args ) { UncaughtExceptionLogger . register (); LOG . info ( "Starting Input Messages to Pub/Sub" ); SpannerChangeStreamsToPubSubOptions options = PipelineOptionsFactory . fromArgs ( args ). as ( SpannerChangeStreamsToPubSubOptions . class ); run ( options ); } private static String getSpannerProjectId ( SpannerChangeStreamsToPubSubOptions options ) { return options . getSpannerProjectId (). isEmpty () ? options . getProject () : options . getSpannerProjectId (); } private static String getPubsubProjectId ( SpannerChangeStreamsToPubSubOptions options ) { return options . getPubsubProjectId (). isEmpty () ? options . getProject () : options . getPubsubProjectId (); } public static boolean isValidAsciiString ( String outputMessageMetadata ) { if ( outputMessageMetadata != null && !
- STREAMING , displayName = "Cloud Spanner change streams to Pub/Sub" , description = { "The Cloud Spanner change streams to the Pub/Sub template is a streaming pipeline that streams Cloud Spanner data change records and writes them into Pub/Sub topics using Dataflow Runner V2.\n" , "To output your data to a new Pub/Sub topic, you need to first create the topic.
- The Spanner change streams to the Pub/Sub template is a streaming pipeline that streams Spanner data change records and writes them into Pub/Sub topics using Dataflow Runner V2 .
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /flexTemplates:launch { "launch parameter" : { "jobName" : " JOB NAME " , "parameters" : { "spannerInstanceId" : " SPANNER INSTANCE ID " , "spannerDatabase" : " SPANNER DATABASE " , "spannerMetadataInstanceId" : " SPANNER METADATA INSTANCE ID " , "spannerMetadataDatabase" : " SPANNER METADATA DATABASE " , "spannerChangeStreamName" : " SPANNER CHANGE STREAM " , "pubsubTopic" : " PUBSUB TOPIC " }, "containerSpecGcsPath" : "gs://dataflow-templates- LOCATION / VERSION /flex/Spanner Change Streams to PubSub" , } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.

### AstraDB to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Options . class , flexContainerName = "astradb-to-bigquery" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery" , contactInformation = "https://cloud.google.com/support" , preview = true , requirements = { "AstraDB account with a token" }) public class AstraDbToBigQuery { / Logger for the class. / private static final Logger LOGGER = LoggerFactory . getLogger ( AstraDbToBigQuery . class ); / If not provided, it is the default token range value. / public static final int DEFAULT TOKEN RANGE = 18 ; / Options for the sample <p>Inherits standard configuration options. / public interface Options extends PipelineOptions , AstraDbToBigQueryOptions .
- Optional parameters astraQuery : The query to use to filter rows instead of reading the whole table. astraDatabaseRegion : If not provided, a default is chosen, which is useful with multi-region databases. minTokenRangesCount : The minimal number of splits to use to distribute the query. outputTableSpec : The BigQuery table location to write the output to.
- DatasetInfo ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.v2.astradb.options.AstraDbToBigQueryOptions ; import com.google.cloud.teleport.v2.astradb.transforms.AstraDbToBigQueryMappingFn ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2.utils.SecretManagerUtils ; import java.util.AbstractMap ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.coders.SerializableCoder ; import org.apache.beam.sdk.io.astra.db.AstraDbIO ; import org.apache.beam.sdk.io.astra.db.CqlSessionHolder ; import org.apache.beam.sdk.io.astra.db.mapping.AstraDbMapper ; import org.apache.beam.sdk.io.astra.db.mapping.BeamRowDbMapperFactoryFn ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryUtils ; import org.apache.beam.sdk.options.PipelineOptions ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.transforms.SerializableFunction ; import org.apache.beam.sdk.values.Row ; import org.apache.commons.lang3.StringUtils ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; / The {@link AstraDbToBigQuery} pipeline is a batch pipeline which ingests data from AstraDB and outputs the resulting records to BigQuery. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/astradb-to-bigquery/README AstraDB to BigQuery.md">README</a> for instructions on how to use or modify this template. / @Template ( name = "AstraDB To BigQuery" , category = TemplateCategory .
- If not set, the table specification is built from the cassandra source table attributes: keyspace=dataset name, table=table name. / String bigQueryOutputTableSpec = options . getOutputTableSpec (); if ( StringUtils . isEmpty ( bigQueryOutputTableSpec )) { bigQueryOutputTableSpec = options . getProject () + ":" + options . getAstraKeyspace () + "." + options . getAstraTable (); } TableReference bigQueryTableReference = BigQueryUtils . toTableReference ( bigQueryOutputTableSpec ); LOGGER . info ( "Big Query table spec has been set to {}" , bigQueryOutputTableSpec ); return bigQueryTableReference ; } / Create destination dataset and tables if needed (schema mapped from Cassandra). @param options pipeline options @param bqTableRef big query table reference / private static void createBigQueryDestinationTableIfNotExist ( Options options , TableReference bqTableRef ) { BigQuery bigquery = BigQueryOptions . newBuilder (). setProjectId ( options . getProject ()). build (). getService (); if ( null == bigquery . getDataset ( DatasetId . of ( bqTableRef . getProjectId (), bqTableRef . getDatasetId ()))) { LOGGER . info ( "Dataset was not found: creating DataSet {} in region {}" , bqTableRef . getDatasetId (), options . getWorkerRegion ()); bigquery . create ( DatasetInfo . newBuilder ( bqTableRef . getDatasetId ()) . setLocation ( options . getWorkerRegion ()) . build ()); LOGGER . debug ( "Dataset has been created [OK]" ); } else { LOGGER . info ( "Dataset {} already exist" , bqTableRef . getDatasetId ()); } } } What's next Learn about Dataflow templates .

