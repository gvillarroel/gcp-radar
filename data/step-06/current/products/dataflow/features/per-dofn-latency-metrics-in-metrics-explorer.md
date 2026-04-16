---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.763Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Per-DoFn latency metrics in Metrics Explorer"
feature_slug: "per-dofn-latency-metrics-in-metrics-explorer"
latest_feature_date: "2024-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring"
keywords:
  - "per"
  - "dofn"
  - "latency"
  - "metrics"
  - "explorer"
  - "dataflow"
  - "exposes"
  - "processing"
---

# Per-DoFn latency metrics in Metrics Explorer

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow exposes per-DoFn latency and processing metrics in Metrics Explorer for streaming pipelines using Apache Beam 2.53.0 and later.

## Extended Definition

Dataflow exposes per-DoFn latency and processing metrics in Metrics Explorer for streaming pipelines using Apache Beam 2.53.0 and later.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Processing stuck or operation ongoing If Dataflow spends more time executing a DoFn than the time specified in TIME INTERVAL without returning, the following message is displayed.
- You might find additional details regarding this error in Logs Explorer under Dataflow log names managed-transforms-worker and managed-transforms-worker-startup .
- This error occurs if your DoFn s are using values in the global namespace that are not available on the Dataflow worker.
- A large job graph can generate a large number of metrics that need to be reported back to the Dataflow service.

### "Spanner change streams to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- WriteDLQ . newBuilder () . withDlqDirectory ( dlqManager . getSevereDlqDirectoryWithDateTime ()) . withTmpDirectory ( dlqManager . getSevereDlqDirectory () + "tmp/" ) . setIncludePaneInfo ( true ) . build ()); return pipeline . run (); } private static DeadLetterQueueManager buildDlqManager ( SpannerChangeStreamsToBigQueryOptions options ) { String tempLocation = options . as ( DataflowPipelineOptions . class ). getTempLocation (). endsWith ( "/" ) ? options . as ( DataflowPipelineOptions . class ). getTempLocation () : options . as ( DataflowPipelineOptions . class ). getTempLocation () + "/" ; String dlqDirectory = options . getDeadLetterQueueDirectory (). isEmpty () ? tempLocation + "dlq/" + options . getJobName () + "/" : options . getDeadLetterQueueDirectory (); LOG . info ( "Dead letter queue directory: {}" , dlqDirectory ); return DeadLetterQueueManager . create ( dlqDirectory , DLQ MAX RETRIES ); } / Remove the following intermediate metadata fields that are not user data from {@link TableRow}: metadata error, metadata retry count, metadata spanner original payload json. / private static TableRow removeIntermediateMetadataFields ( TableRow tableRow ) { TableRow cleanTableRow = tableRow . clone (); Set<String> rowKeys = tableRow . keySet (); Set<String> metadataFields = BigQueryUtils . getBigQueryIntermediateMetadataFieldNames (); for ( String rowKey : rowKeys ) { if ( metadataFields . contains ( rowKey )) { cleanTableRow . remove ( rowKey ); } else if ( rowKeys . contains ( " type " + rowKey )) { cleanTableRow . remove ( " type " + rowKey ); } } return cleanTableRow ; } / DoFn that converts a {@link DataChangeRecord} to multiple {@link Mod} in serialized JSON format. / static class DataChangeRecordToModJsonFn extends DoFn<DataChangeRecord , String > { @ProcessElement public void process ( @Element DataChangeRecord input , OutputReceiver<String> receiver ) { for ( org . apache . beam . sdk . io . gcp . spanner . changestreams . model .
- WriteResult ; import org.apache.beam.sdk.io.gcp.spanner.SpannerConfig ; import org.apache.beam.sdk.io.gcp.spanner.SpannerIO ; import org.apache.beam.sdk.io.gcp.spanner.changestreams. model .DataChangeRecord ; import org.apache.beam.sdk. options .PipelineOptionsFactory ; import org.apache.beam.sdk. options .ValueProvider ; import org.apache.beam.sdk.transforms.DoFn ; import org.apache.beam.sdk.transforms.Flatten ; import org.apache.beam.sdk.transforms.MapElements ; import org.apache.beam.sdk.transforms.ParDo ; import org.apache.beam.sdk.transforms.Reshuffle ; import org.apache.beam.sdk.values.PCollection ; import org.apache.beam.sdk.values.PCollectionList ; import org.apache.beam.sdk.values.PCollectionTuple ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; // TODO(haikuo-google): Add integration test. // TODO(haikuo-google): Add README. // TODO(haikuo-google): Add stackdriver metrics. // TODO(haikuo-google): Ideally side input should be used to store schema information and shared // accross DoFns, but since side input fix is not yet deployed at the moment, we read schema // information in the beginning of the DoFn as a work around.
- Mod changeStreamsMod : input . getMods ()) { Mod mod = new Mod ( changeStreamsMod . getKeysJson (), changeStreamsMod . getNewValuesJson (), input . getCommitTimestamp (), input . getServerTransactionId (), input . isLastRecordInTransactionInPartition (), input . getRecordSequence (), input . getTableName (), input . getRowType (). stream (). map ( ModColumnType :: new ). collect ( Collectors . toList ()), input . getModType (), input . getValueCaptureType (), input . getNumberOfRecordsInTransaction (), input . getNumberOfPartitionsInTransaction ()); String modJsonString ; try { modJsonString = mod . toJson (); } catch ( IOException e ) { // Ignore exception and print bad format. modJsonString = String . format ( "\"%s\"" , input ); } receiver . output ( modJsonString ); } } } } Production considerations When running the Spanner Change Streams to BigQuery template in a production environment, consider the following best practices to help ensure reliability and prevent data loss: Worker provisioning and scaling Set maxNumWorkers adequately: Insufficient Dataflow workers can cause the pipeline to fall behind in processing change stream data.
- For the NEW ROW value capture type, the template is more" + " efficient, because the data change record captures the full new row including columns" + " that are not updated in UPDATEs, and the template does not need to do a stale read.\n" + "- You can minimize network latency and network transport costs by running the Dataflow" + " job from the same region as your Cloud Spanner instance or BigQuery tables.

### Dataflow project monitoring dashboard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- For an example of adding a custom metrics chart to the dashboard, see Customize the Dataflow monitoring dashboard .
- To customize the information displayed in the charts, use Metrics Explorer .
- The dashboard uses Cloud Monitoring to access Dataflow job metrics.
- The dashboard uses Cloud Monitoring to access Dataflow job metrics.

