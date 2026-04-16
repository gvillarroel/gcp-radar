---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.769Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "At-least-once streaming mode"
feature_slug: "at-least-once-streaming-mode"
latest_feature_date: "2024-02-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers"
keywords:
  - "least"
  - "once"
  - "streaming"
  - "mode"
  - "dataflow"
  - "supports"
  - "lower"
  - "latency"
---

# At-least-once streaming mode

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports an at-least-once streaming mode for lower latency and reduced costs in workloads that can tolerate duplicate records.

## Extended Definition

Dataflow supports an at-least-once streaming mode for lower latency and reduced costs in workloads that can tolerate duplicate records.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers)

## Supporting Pages

### Package and import transforms \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-providers)
- Source ID: `site-docs-reference-required-3`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Package and import transforms Stay organized with collections Save and categorize content based on your preferences.

### "Bigtable change streams to BigQuery template \_|\_ Cloud Dataflow \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Streams Bigtable data change records and writes them into BigQuery using Dataflow Runner V2." , optionsClass = BigtableChangeStreamToBigQueryOptions . class , optionsOrder = { BigtableChangeStreamToBigQueryOptions . class , ReadChangeStreamOptions . class , ReadOptions . class }, skipOptions = { "bigtableReadAppProfile" , "bigtableAdditionalRetryCodes" , "bigtableRpcAttemptTimeoutMs" , "bigtableRpcTimeoutMs" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery" , flexContainerName = "googlecloud-to-googlecloud" , contactInformation = "https://cloud.google.com/support" , streaming = true ) public final class BigtableChangeStreamsToBigQuery { private static final Logger LOG = LoggerFactory . getLogger ( BigtableChangeStreamsToBigQuery . class ); private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; / Main entry point for executing the pipeline. @param args The command-line arguments to the pipeline. / public static void main ( String [] args ) { LOG . info ( "Starting to replicate change records from Cloud Bigtable change streams to BigQuery" ); BigtableChangeStreamToBigQueryOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( BigtableChangeStreamToBigQueryOptions . class ); run ( options ); } private static void setOptions ( BigtableChangeStreamToBigQueryOptions options ) { options . setStreaming ( true ); options . setEnableStreamingEngine ( true ); // Add use runner v2 to the experiments option, since change streams connector is only supported // on Dataflow runner v2.
- STORAGE API AT LEAST ONCE ) . withNumStorageWriteApiStreams ( 0 ) . withFailedInsertRetryPolicy ( InsertRetryPolicy . retryTransientErrors ()); if ( destinationInfo . isPartitioned ()) { bigQueryWrite = bigQueryWrite . withTimePartitioning ( bigQuery . getTimePartitioning ()); } // Unfortunately, due to https://github.com/apache/beam/issues/24090, it is no longer possible // to pass metadata via fake columns when writing to BigQuery.
- The Bigtable change streams to BigQuery template is a streaming pipeline that streams Bigtable data change records and writes them into BigQuery tables by using Dataflow.
- WriteDLQ . newBuilder () . withDlqDirectory ( dlqManager . getSevereDlqDirectory () + "YYYY/MM/dd/HH/mm/" ) . withTmpDirectory ( dlqManager . getSevereDlqDirectory () + "tmp/" ) . setIncludePaneInfo ( true ) . build ()); return pipeline . run (); } private static void validateBigQueryDatasetExists ( String bigQueryProject , String bigQueryDataset ) { BigQueryOptions options = BigQueryOptions . newBuilder (). build (); options . setThrowNotFound ( true ); BigQuery bigQuery = options . getService (); bigQuery . getDataset ( DatasetId . of ( bigQueryProject , bigQueryDataset )); } private static Instant toInstant ( Timestamp timestamp ) { if ( timestamp == null ) { return null ; } else { return Instant . ofEpochMilli ( timestamp . getSeconds () 1000 + timestamp . getNanos () / 1000000 ); } } private static DeadLetterQueueManager buildDlqManager ( BigtableChangeStreamToBigQueryOptions options ) { String tempLocation = options . as ( DataflowPipelineOptions . class ). getTempLocation (). endsWith ( "/" ) ? options . as ( DataflowPipelineOptions . class ). getTempLocation () : options . as ( DataflowPipelineOptions . class ). getTempLocation () + "/" ; String dlqDirectory = options . getDlqDirectory (). isEmpty () ? tempLocation + "dlq/" : options . getDlqDirectory (); LOG . info ( "Dead letter queue directory: {}" , dlqDirectory ); return DeadLetterQueueManager . create ( dlqDirectory , 1 ); } private static String getBigtableCharset ( BigtableChangeStreamToBigQueryOptions options ) { return StringUtils . isEmpty ( options . getBigtableChangeStreamCharset ()) ? "UTF-8" : options . getBigtableChangeStreamCharset (); } private static String getBigtableProjectId ( BigtableChangeStreamToBigQueryOptions options ) { return StringUtils . isEmpty ( options . getBigtableReadProjectId ()) ? options . getProject () : options . getBigtableReadProjectId (); } private static String getBigQueryChangelogTableName ( BigtableChangeStreamToBigQueryOptions options ) { return StringUtils . isEmpty ( options . getBigQueryChangelogTableName ()) ? options . getBigtableReadTableId () + " changelog" : options . getBigQueryChangelogTableName (); } private static String getBigQueryProjectId ( BigtableChangeStreamToBigQueryOptions options ) { return StringUtils . isEmpty ( options . getBigQueryProjectId ()) ? options . getProject () : options . getBigQueryProjectId (); } / DoFn that converts a {@link ChangeStreamMutation} to multiple {@link Mod} in serialized JSON format. / static class ChangeStreamMutationToTableRowFn extends DoFn<ChangeStreamMutation , TableRow > { private final BigtableSource sourceInfo ; private final BigQueryUtils bigQuery ; ChangeStreamMutationToTableRowFn ( BigtableSource source , BigQueryUtils bigQuery ) { this . sourceInfo = source ; this . bigQuery = bigQuery ; } @ProcessElement public void process ( @Element ChangeStreamMutation input , OutputReceiver<TableRow> receiver ) throws Exception { for ( Entry entry : input . getEntries ()) { ModType modType = getModType ( entry ); Mod mod = null ; switch ( modType ) { case SET CELL : mod = new Mod ( sourceInfo , input , ( SetCell ) entry ); break ; case DELETE CELLS : mod = new Mod ( sourceInfo , input , ( DeleteCells ) entry ); break ; case DELETE FAMILY : mod = new Mod ( sourceInfo , input , ( DeleteFamily ) entry ); break ; default : case UNKNOWN : throw new UnsupportedEntryException ( "Cloud Bigtable change stream entry of type " + entry . getClass (). getName () + " is not supported.

### "Set the pipeline streaming mode \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)
- Source ID: `site-docs-reference-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- REST Use the additionalExperiments field in the FlexTemplateRuntimeEnvironment (Flex templates) or RuntimeEnvironment (classic templates) object. { addi t io nal Experime nts : [ "streaming mode at least once" ] ... } Custom templates If you create a custom template that supports at-least-once processing, add the following top-level fields to the template metadata file: { "streaming" : true , "supportsAtLeastOnce" : true , "supportsExactlyOnce" : true , "defaultStreamingMode" : "AT LEAST ONCE" } These metadata fields enable users to select the streaming mode when deploying the template in the Google Cloud console.
- If the template supports only one mode, then this option is disabled. gcloud To enable at-least-once mode, set the streaming mode at least once option in the additional-experiments flag: --additional-experiments=streaming mode at least once To enable exactly-once mode, set the streaming mode exactly once option in the additional-experiments flag: --additional-experiments=streaming mode exactly once These two options are mutually exclusive.
- Java --dataflowServiceOptions=streaming mode at least once Python --dataflow service options=streaming mode at least once Go --dataflow service options=streaming mode at least once If you don't specify the streaming mode at least once option, then Dataflow uses exactly-once streaming mode.
- In that case, deduplication within the pipeline might be unnecessary, and you can benefit from the reduced cost and latency of at-least-once streaming mode.

