---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.794Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Flex-start GPU provisioning"
feature_slug: "flex-start-gpu-provisioning"
latest_feature_date: "2025-09-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub"
  - "https://docs.cloud.google.com/dataflow/docs/guides/flexrs"
keywords:
  - "flex"
  - "start"
  - "gpu"
  - "provisioning"
  - "dataflow"
  - "supports"
  - "the"
  - "model"
---

# Flex-start GPU provisioning

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports the flex-start provisioning model for GPU jobs in batch pipelines to improve access to constrained GPU resources.

## Extended Definition

Dataflow supports the flex-start provisioning model for GPU jobs in batch pipelines to improve access to constrained GPU resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub)
- [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- September 24, 2025 Feature For jobs that use GPUs, Dataflow now supports the flex-start provisioning model.
- This flex-start provisioning model can improve your ability to get access to constrained GPU resources for short-duration workloads.
- February 03, 2021 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: asia-east2 Hong Kong asia-northeast2 - Japan (Osaka) asia-northeast3 - Seoul asia-southeast2 - Jakarta europe-north1 - Finland us-west3 - Salt Lake City us-west4 - Las Vegas January 29, 2021 Announcement Flex templates now support updating streaming jobs and Flexible Resource Scheduling (FlexRS).
- November 05, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: us-west2 (Los Angeles) southamerica-east1 (São Paulo) europe-west6 (Zurich) asia-south1 (Mumbai) Change Pub/Sub I/O metrics in the Dataflow and Cloud Monitoring UIs may be unavailable for Dataflow jobs using Streaming Engine .

### "Spanner change streams to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Specifically:\n" + " - For Cloud Spanner JSON type, the order of the members of an object is" + " lexicographically ordered, but there is no such guarantee for BigQuery JSON type.\n" + " - Cloud Spanner supports nanoseconds TIMESTAMP type, BigQuery only supports" + " microseconds TIMESTAMP type.\n" , "Learn more about <a href=\"https://cloud.google.com/spanner/docs/change-streams\">change" + " streams</a>, <a" + " href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow\">how to" + " build change streams Dataflow pipelines</a>, and <a" + " href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow#best practices\">best" + " practices</a>." }, optionsClass = SpannerChangeStreamsToBigQueryOptions . class , flexContainerName = "googlecloud-to-googlecloud" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner instance must exist prior to running the pipeline." , "The Cloud Spanner database must exist prior to running the pipeline." , "The Cloud Spanner metadata instance must exist prior to running the pipeline." , "The Cloud Spanner metadata database must exist prior to running the pipeline." , "The Cloud Spanner change stream must exist prior to running the pipeline." , "The BigQuery dataset must exist prior to running the pipeline." }, streaming = true , supportsExactlyOnce = true , supportsAtLeastOnce = true ) public final class SpannerChangeStreamsToBigQuery { / String/String Coder for {@link FailsafeElement}. / public static final FailsafeElementCoder<String , String > FAILSAFE ELEMENT CODER = FailsafeElementCoder . of ( StringUtf8Coder . of (), StringUtf8Coder . of ()); private static final Logger LOG = LoggerFactory . getLogger ( SpannerChangeStreamsToBigQuery . class ); // Max number of deadletter queue retries. private static final int DLQ MAX RETRIES = 5 ; private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; / Main entry point for executing the pipeline. @param args The command-line arguments to the pipeline. / public static void main ( String [] args ) { UncaughtExceptionLogger . register (); LOG . info ( "Starting to replicate change records from Spanner change streams to BigQuery" ); SpannerChangeStreamsToBigQueryOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( SpannerChangeStreamsToBigQueryOptions . class ); run ( options ); } private static void validateOptions ( SpannerChangeStreamsToBigQueryOptions options ) { if ( options . getDlqRetryMinutes () < = 0 ) { throw new IllegalArgumentException ( "dlqRetryMinutes must be positive." ); } if ( options . getBigQueryChangelogTableNameTemplate () . equals ( BigQueryUtils .
- WriteDLQ . newBuilder () . withDlqDirectory ( dlqManager . getSevereDlqDirectoryWithDateTime ()) . withTmpDirectory ( dlqManager . getSevereDlqDirectory () + "tmp/" ) . setIncludePaneInfo ( true ) . build ()); return pipeline . run (); } private static DeadLetterQueueManager buildDlqManager ( SpannerChangeStreamsToBigQueryOptions options ) { String tempLocation = options . as ( DataflowPipelineOptions . class ). getTempLocation (). endsWith ( "/" ) ? options . as ( DataflowPipelineOptions . class ). getTempLocation () : options . as ( DataflowPipelineOptions . class ). getTempLocation () + "/" ; String dlqDirectory = options . getDeadLetterQueueDirectory (). isEmpty () ? tempLocation + "dlq/" + options . getJobName () + "/" : options . getDeadLetterQueueDirectory (); LOG . info ( "Dead letter queue directory: {}" , dlqDirectory ); return DeadLetterQueueManager . create ( dlqDirectory , DLQ MAX RETRIES ); } / Remove the following intermediate metadata fields that are not user data from {@link TableRow}: metadata error, metadata retry count, metadata spanner original payload json. / private static TableRow removeIntermediateMetadataFields ( TableRow tableRow ) { TableRow cleanTableRow = tableRow . clone (); Set<String> rowKeys = tableRow . keySet (); Set<String> metadataFields = BigQueryUtils . getBigQueryIntermediateMetadataFieldNames (); for ( String rowKey : rowKeys ) { if ( metadataFields . contains ( rowKey )) { cleanTableRow . remove ( rowKey ); } else if ( rowKeys . contains ( " type " + rowKey )) { cleanTableRow . remove ( " type " + rowKey ); } } return cleanTableRow ; } / DoFn that converts a {@link DataChangeRecord} to multiple {@link Mod} in serialized JSON format. / static class DataChangeRecordToModJsonFn extends DoFn<DataChangeRecord , String > { @ProcessElement public void process ( @Element DataChangeRecord input , OutputReceiver<String> receiver ) { for ( org . apache . beam . sdk . io . gcp . spanner . changestreams . model .
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /flexTemplates:launch { "launch parameter" : { "jobName" : " JOB NAME " , "parameters" : { "spannerInstanceId" : " SPANNER INSTANCE ID " , "spannerDatabase" : " SPANNER DATABASE " , "spannerMetadataInstanceId" : " SPANNER METADATA INSTANCE ID " , "spannerMetadataDatabase" : " SPANNER METADATA DATABASE " , "spannerChangeStreamName" : " SPANNER CHANGE STREAM " , "bigQueryDataset" : " BIGQUERY DATASET " }, "containerSpecGcsPath" : "gs://dataflow-templates- LOCATION / VERSION /flex/Spanner Change Streams to BigQuery" , } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- Mod changeStreamsMod : input . getMods ()) { Mod mod = new Mod ( changeStreamsMod . getKeysJson (), changeStreamsMod . getNewValuesJson (), input . getCommitTimestamp (), input . getServerTransactionId (), input . isLastRecordInTransactionInPartition (), input . getRecordSequence (), input . getTableName (), input . getRowType (). stream (). map ( ModColumnType :: new ). collect ( Collectors . toList ()), input . getModType (), input . getValueCaptureType (), input . getNumberOfRecordsInTransaction (), input . getNumberOfPartitionsInTransaction ()); String modJsonString ; try { modJsonString = mod . toJson (); } catch ( IOException e ) { // Ignore exception and print bad format. modJsonString = String . format ( "\"%s\"" , input ); } receiver . output ( modJsonString ); } } } } Production considerations When running the Spanner Change Streams to BigQuery template in a production environment, consider the following best practices to help ensure reliability and prevent data loss: Worker provisioning and scaling Set maxNumWorkers adequately: Insufficient Dataflow workers can cause the pipeline to fall behind in processing change stream data.

### "Bigtable change streams to Pub/Sub template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- ReadOptions . class }, skipOptions = { "bigtableReadAppProfile" , "bigtableAdditionalRetryCodes" , "bigtableRpcAttemptTimeoutMs" , "bigtableRpcTimeoutMs" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub" , flexContainerName = "googlecloud-to-googlecloud" , contactInformation = "https://cloud.google.com/support" , streaming = true , supportsAtLeastOnce = true ) public final class BigtableChangeStreamsToPubSub { / String/String Coder for {@link FailsafeElement}. / public static final FailsafeElementCoder<String , String > FAILSAFE ELEMENT CODER = FailsafeElementCoder . of ( StringUtf8Coder . of (), StringUtf8Coder . of ()); private static final Logger LOG = LoggerFactory . getLogger ( BigtableChangeStreamsToPubSub . class ); private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; private static final TupleTag<FailsafeElement<String , String >> INVALID MODS TAG = new TupleTag<FailsafeElement<String , String >> ( "invalidMods" ) {}; private static final TupleTag<FailsafeElement<String , String >> VALID MODS TAG = new TupleTag<FailsafeElement<String , String >> ( "validMods" ) {}; / Main entry point for executing the pipeline. @param args The command-line arguments to the pipeline. / public static void main ( String [] args ) { LOG . info ( "Starting to replicate change records from Cloud Bigtable change streams to PubSub" ); BigtableChangeStreamsToPubSubOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( BigtableChangeStreamsToPubSubOptions . class ); run ( options ); } private static void validateOptions ( BigtableChangeStreamsToPubSubOptions options ) { if ( options . getDlqRetryMinutes () < = 0 ) { throw new IllegalArgumentException ( "dlqRetryMinutes must be positive." ); } if ( options . getDlqMaxRetries () < 0 ) { throw new IllegalArgumentException ( "dlqMaxRetries cannot be negative." ); } if ( options . getBigtableReadChangeStreamTimeoutMs () != null && options . getBigtableReadChangeStreamTimeoutMs () < = 0 ) { throw new IllegalArgumentException ( "bigtableReadChangeStreamTimeoutMs must be greater than 0." ); } } private static void setOptions ( BigtableChangeStreamsToPubSubOptions options ) { options . setStreaming ( true ); options . setEnableStreamingEngine ( true ); // Add use runner v2 to the experiments option, since change streams connector is only supported // on Dataflow runner v2.
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /flexTemplates:launch { "launch parameter" : { "jobName" : " JOB NAME " , "containerSpecGcsPath" : "gs://dataflow-templates- REGION NAME / VERSION /flex/Bigtable Change Streams to PubSub" , "parameters" : { "bigtableReadInstanceId" : " BIGTABLE INSTANCE ID " , "bigtableReadTableId" : " BIGTABLE TABLE ID " , "bigtableChangeStreamAppProfile" : " BIGTABLE APPLICATION PROFILE ID " , "pubSubTopic" : " PUBSUB TOPIC " } } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- In your shell or terminal, run the template: gcloud dataflow flex-template run JOB NAME \ --region = REGION NAME \ --template-file-gcs-location = gs://dataflow-templates- REGION NAME / VERSION /flex/Bigtable Change Streams to PubSub \ --parameters \ bigtableReadInstanceId = BIGTABLE INSTANCE ID , \ bigtableReadTableId = BIGTABLE TABLE ID , \ bigtableChangeStreamAppProfile = BIGTABLE APPLICATION PROFILE ID , \ pubSubTopic = PUBSUB TOPIC Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- List<String> experiments = options . getExperiments (); if ( experiments == null ) { experiments = new ArrayList <> (); } boolean hasUseRunnerV2 = false ; for ( String experiment : experiments ) { if ( experiment . equalsIgnoreCase ( USE RUNNER V2 EXPERIMENT )) { hasUseRunnerV2 = true ; break ; } } if ( ! hasUseRunnerV2 ) { experiments . add ( USE RUNNER V2 EXPERIMENT ); } options . setExperiments ( experiments ); } / Runs the pipeline with the supplied options. @param options The execution parameters to the pipeline. @return The result of the pipeline execution. / public static PipelineResult run ( BigtableChangeStreamsToPubSubOptions options ) { setOptions ( options ); validateOptions ( options ); String bigtableProject = getBigtableProjectId ( options ); // Retrieve and parse the startTimestamp Instant startTimestamp = options . getBigtableChangeStreamStartTimestamp (). isEmpty () ?

### Use Flexible Resource Scheduling in Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Pricing FlexRS jobs are billed for the following resources: Regular and preemptible CPUs Memory resources Dataflow Shuffle resources 25 GB per worker of Persistent Disk resources While Dataflow uses both preemptible and regular workers to execute your FlexRS job, you are billed a uniform discounted rate compared to regular Dataflow prices regardless of the worker type.
- The following example shows how to add parameters to your regular pipeline parameters in order to use FlexRS: --flexRSGoal = COST OPTIMIZED \ --region = europe-west1 \ --maxNumWorkers = 10 \ --workerMachineType = n1-highmem-16 If you omit region , maxNumWorkers , and workerMachineType , the Dataflow service determines the default value.
- The following example shows how to add parameters to your regular pipeline parameters in order to use FlexRS: --flexrs goal = COST OPTIMIZED \ --region = europe-west1 \ --max num workers = 10 \ --machine type = n1-highmem-16 If you omit region , max num workers , and machine type , the Dataflow service determines the default value.
- The following example shows how to add parameters to your regular pipeline parameters in order to use FlexRS: --flexrs goal = COST OPTIMIZED \ --region = europe-west1 \ --max num workers = 10 \ --machine type = n1-highmem-16 If you omit region , max num workers , and machine type , the Dataflow service determines the default value.

