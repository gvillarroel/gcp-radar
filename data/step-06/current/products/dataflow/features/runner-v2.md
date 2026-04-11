---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.818Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Runner v2"
feature_slug: "runner-v2"
latest_feature_date: "2022-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery"
keywords:
  - "runner"
  - "v2"
  - "is"
  - "the"
  - "next"
  - "generation"
  - "dataflow"
  - "architecture"
---

# Runner v2

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Runner v2 is the next-generation Dataflow runner architecture for executing pipelines.

## Extended Definition

Runner v2 is the next-generation Dataflow runner architecture for executing pipelines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Runner v2 harness update The following info message appears in the job logs of a Runner v2 job The Dataflow RunnerV2 container image of this job's workers will be ready for update in 7 days.
- It might be possible to retrieve stacktraces of a thread that is holding the GIL on a running Dataflow worker as follows: SSH into a running Dataflow worker VM that is currently a straggler, for example: gcloud compute ssh --zone "us-central1-a" "worker-that-emits-unable-to-retrieve-status-messages" --project "project-id" Install nerdctl to inspect a running container with ptrace privileges. wget https://github.com/containerd/nerdctl/releases/download/v2.0.2/nerdctl-2.0.2-linux-amd64.tar.gz sudo tar Cxzvvf /var/lib/toolbox nerdctl-2.0.2-linux-amd64.tar.gz alias nerdctl = "sudo /var/lib/toolbox/nerdctl -n k8s.io" Find a container running the Python SDK harness.
- Request payload size exceeds the limit: 20971520 bytes When you run a pipeline, the job might fail with the following error: com.google.api.client.googleapis.json.GoogleJsonResponseException: 400 Bad Request POST https://dataflow.googleapis.com/v1b3/projects/PROJECT ID/locations/REGION/jobs/JOB ID/workItems:reportStatus { "code": 400, "errors": [ { "domain": "global", "message": "Request payload size exceeds the limit: 20971520 bytes.", "reason": "badRequest" } ], "message": "Request payload size exceeds the limit: 20971520 bytes.", "status": "INVALID ARGUMENT" } This error can occur when a job using the Dataflow runner has a very large job graph.
- Failed to attach disk When you try to launch a Dataflow job that uses C3 VMs with Persistent Disk, the job fails with one or both of the following errors: Failed to attach disk(s), status: generic::invalid argument: One or more operations had an error Can not allocate sha384 (reason: -2), Spectre V2 : WARNING: Unprivileged eBPF is enabled with eIBRS on...

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- October 30, 2020 Change Dataflow Runner v2 is now the default runner for Python streaming pipelines using SDK 2.21.0 and above.
- August 26, 2025 Fixed Dataflow Runner v2 fixes an issue that could cause data discrepancies when using splittable DoFns, particularly when processing large datasets as side inputs.
- January 13, 2026 Feature Dataflow now serves a notice for when the Dataflow Runner v2 container image of a streaming pipeline will be upgraded.
- This improvement is available in recent Dataflow service releases, and is automatically enabled when using Dataflow Runner v2.

### "Bigtable change streams to Pub/Sub template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- ReadOptions . class }, skipOptions = { "bigtableReadAppProfile" , "bigtableAdditionalRetryCodes" , "bigtableRpcAttemptTimeoutMs" , "bigtableRpcTimeoutMs" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-pubsub" , flexContainerName = "googlecloud-to-googlecloud" , contactInformation = "https://cloud.google.com/support" , streaming = true , supportsAtLeastOnce = true ) public final class BigtableChangeStreamsToPubSub { / String/String Coder for {@link FailsafeElement}. / public static final FailsafeElementCoder<String , String > FAILSAFE ELEMENT CODER = FailsafeElementCoder . of ( StringUtf8Coder . of (), StringUtf8Coder . of ()); private static final Logger LOG = LoggerFactory . getLogger ( BigtableChangeStreamsToPubSub . class ); private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; private static final TupleTag<FailsafeElement<String , String >> INVALID MODS TAG = new TupleTag<FailsafeElement<String , String >> ( "invalidMods" ) {}; private static final TupleTag<FailsafeElement<String , String >> VALID MODS TAG = new TupleTag<FailsafeElement<String , String >> ( "validMods" ) {}; / Main entry point for executing the pipeline. @param args The command-line arguments to the pipeline. / public static void main ( String [] args ) { LOG . info ( "Starting to replicate change records from Cloud Bigtable change streams to PubSub" ); BigtableChangeStreamsToPubSubOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( BigtableChangeStreamsToPubSubOptions . class ); run ( options ); } private static void validateOptions ( BigtableChangeStreamsToPubSubOptions options ) { if ( options . getDlqRetryMinutes () < = 0 ) { throw new IllegalArgumentException ( "dlqRetryMinutes must be positive." ); } if ( options . getDlqMaxRetries () < 0 ) { throw new IllegalArgumentException ( "dlqMaxRetries cannot be negative." ); } if ( options . getBigtableReadChangeStreamTimeoutMs () != null && options . getBigtableReadChangeStreamTimeoutMs () < = 0 ) { throw new IllegalArgumentException ( "bigtableReadChangeStreamTimeoutMs must be greater than 0." ); } } private static void setOptions ( BigtableChangeStreamsToPubSubOptions options ) { options . setStreaming ( true ); options . setEnableStreamingEngine ( true ); // Add use runner v2 to the experiments option, since change streams connector is only supported // on Dataflow runner v2.
- List<String> experiments = options . getExperiments (); if ( experiments == null ) { experiments = new ArrayList <> (); } boolean hasUseRunnerV2 = false ; for ( String experiment : experiments ) { if ( experiment . equalsIgnoreCase ( USE RUNNER V2 EXPERIMENT )) { hasUseRunnerV2 = true ; break ; } } if ( ! hasUseRunnerV2 ) { experiments . add ( USE RUNNER V2 EXPERIMENT ); } options . setExperiments ( experiments ); } / Runs the pipeline with the supplied options. @param options The execution parameters to the pipeline. @return The result of the pipeline execution. / public static PipelineResult run ( BigtableChangeStreamsToPubSubOptions options ) { setOptions ( options ); validateOptions ( options ); String bigtableProject = getBigtableProjectId ( options ); // Retrieve and parse the startTimestamp Instant startTimestamp = options . getBigtableChangeStreamStartTimestamp (). isEmpty () ?
- Streams Bigtable data change records and writes them into PubSub using Dataflow Runner V2." , optionsClass = BigtableChangeStreamsToPubSubOptions . class , optionsOrder = { BigtableChangeStreamsToPubSubOptions . class , BigtableCommonOptions .
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /flexTemplates:launch { "launch parameter" : { "jobName" : " JOB NAME " , "containerSpecGcsPath" : "gs://dataflow-templates- REGION NAME / VERSION /flex/Bigtable Change Streams to PubSub" , "parameters" : { "bigtableReadInstanceId" : " BIGTABLE INSTANCE ID " , "bigtableReadTableId" : " BIGTABLE TABLE ID " , "bigtableChangeStreamAppProfile" : " BIGTABLE APPLICATION PROFILE ID " , "pubSubTopic" : " PUBSUB TOPIC " } } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.

### "Spanner change streams to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Specifically:\n" + " - For Cloud Spanner JSON type, the order of the members of an object is" + " lexicographically ordered, but there is no such guarantee for BigQuery JSON type.\n" + " - Cloud Spanner supports nanoseconds TIMESTAMP type, BigQuery only supports" + " microseconds TIMESTAMP type.\n" , "Learn more about <a href=\"https://cloud.google.com/spanner/docs/change-streams\">change" + " streams</a>, <a" + " href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow\">how to" + " build change streams Dataflow pipelines</a>, and <a" + " href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow#best practices\">best" + " practices</a>." }, optionsClass = SpannerChangeStreamsToBigQueryOptions . class , flexContainerName = "googlecloud-to-googlecloud" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner instance must exist prior to running the pipeline." , "The Cloud Spanner database must exist prior to running the pipeline." , "The Cloud Spanner metadata instance must exist prior to running the pipeline." , "The Cloud Spanner metadata database must exist prior to running the pipeline." , "The Cloud Spanner change stream must exist prior to running the pipeline." , "The BigQuery dataset must exist prior to running the pipeline." }, streaming = true , supportsExactlyOnce = true , supportsAtLeastOnce = true ) public final class SpannerChangeStreamsToBigQuery { / String/String Coder for {@link FailsafeElement}. / public static final FailsafeElementCoder<String , String > FAILSAFE ELEMENT CODER = FailsafeElementCoder . of ( StringUtf8Coder . of (), StringUtf8Coder . of ()); private static final Logger LOG = LoggerFactory . getLogger ( SpannerChangeStreamsToBigQuery . class ); // Max number of deadletter queue retries. private static final int DLQ MAX RETRIES = 5 ; private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; / Main entry point for executing the pipeline. @param args The command-line arguments to the pipeline. / public static void main ( String [] args ) { UncaughtExceptionLogger . register (); LOG . info ( "Starting to replicate change records from Spanner change streams to BigQuery" ); SpannerChangeStreamsToBigQueryOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( SpannerChangeStreamsToBigQueryOptions . class ); run ( options ); } private static void validateOptions ( SpannerChangeStreamsToBigQueryOptions options ) { if ( options . getDlqRetryMinutes () < = 0 ) { throw new IllegalArgumentException ( "dlqRetryMinutes must be positive." ); } if ( options . getBigQueryChangelogTableNameTemplate () . equals ( BigQueryUtils .
- STREAMING , displayName = "Cloud Spanner change streams to BigQuery" , description = { "The Cloud Spanner change streams to BigQuery template is a streaming pipeline that streams" + " Cloud Spanner data change records and writes them into BigQuery tables using Dataflow" + " Runner V2.\n" , "All change stream watched columns are included in each BigQuery table row, regardless of" + " whether they are modified by a Cloud Spanner transaction.
- BQ CHANGELOG FIELD NAME TABLE NAME )); } BigQueryIOUtils . validateBQStorageApiOptionsStreaming ( options ); } private static void setOptions ( SpannerChangeStreamsToBigQueryOptions options ) { options . setStreaming ( true ); options . setEnableStreamingEngine ( true ); // Add use runner v2 to the experiments option, since change streams connector is only supported // on Dataflow runner v2.
- The Spanner change streams to BigQuery template is a streaming pipeline that streams Spanner data change records and writes them into BigQuery tables using Dataflow Runner V2.

