---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.770Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Replacement job graph validation"
feature_slug: "replacement-job-graph-validation"
latest_feature_date: "2023-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
keywords:
  - "replacement"
  - "job"
  - "graph"
  - "validation"
  - "dataflow"
  - "can"
  - "validate"
  - "whether"
---

# Replacement job graph validation

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow can validate whether a replacement job is valid before the new job is launched.

## Extended Definition

Dataflow can validate whether a replacement job is valid before the new job is launched.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)

## Supporting Pages

### "Create a custom job with the job builder \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)
- Source ID: `site-docs-reference-required-3`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To validate the pipeline syntax, perform the following steps: Click Validate to open Cloud Shell and start the validation service.
- Run the following command in your shell or terminal: gcloud dataflow yaml run my-job-builder-job --yaml-pipeline-file = YAML FILE PATH Replace YAML FILE PATH with the path of your YAML file, either locally or in Cloud Storage.
- Validate the pipeline before launching For pipelines with complex configuration, such as Python filters and SQL expressions, it can be helpful to check the pipeline configuration for syntax errors before launching.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Create a custom job with the job builder Stay organized with collections Save and categorize content based on your preferences.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Request payload size exceeds the limit: 20971520 bytes When you run a pipeline, the job might fail with the following error: com.google.api.client.googleapis.json.GoogleJsonResponseException: 400 Bad Request POST https://dataflow.googleapis.com/v1b3/projects/PROJECT ID/locations/REGION/jobs/JOB ID/workItems:reportStatus { "code": 400, "errors": [ { "domain": "global", "message": "Request payload size exceeds the limit: 20971520 bytes.", "reason": "badRequest" } ], "message": "Request payload size exceeds the limit: 20971520 bytes.", "status": "INVALID ARGUMENT" } This error can occur when a job using the Dataflow runner has a very large job graph.
- If object retention isn't enabled on the Cloud Storage bucket, verify whether the Dataflow worker service account has write permission on the Cloud Storage bucket.
- A large job graph can generate a large number of metrics that need to be reported back to the Dataflow service.
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.

### "Spanner change streams to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Specifically:\n" + " - For Cloud Spanner JSON type, the order of the members of an object is" + " lexicographically ordered, but there is no such guarantee for BigQuery JSON type.\n" + " - Cloud Spanner supports nanoseconds TIMESTAMP type, BigQuery only supports" + " microseconds TIMESTAMP type.\n" , "Learn more about <a href=\"https://cloud.google.com/spanner/docs/change-streams\">change" + " streams</a>, <a" + " href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow\">how to" + " build change streams Dataflow pipelines</a>, and <a" + " href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow#best practices\">best" + " practices</a>." }, optionsClass = SpannerChangeStreamsToBigQueryOptions . class , flexContainerName = "googlecloud-to-googlecloud" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner instance must exist prior to running the pipeline." , "The Cloud Spanner database must exist prior to running the pipeline." , "The Cloud Spanner metadata instance must exist prior to running the pipeline." , "The Cloud Spanner metadata database must exist prior to running the pipeline." , "The Cloud Spanner change stream must exist prior to running the pipeline." , "The BigQuery dataset must exist prior to running the pipeline." }, streaming = true , supportsExactlyOnce = true , supportsAtLeastOnce = true ) public final class SpannerChangeStreamsToBigQuery { / String/String Coder for {@link FailsafeElement}. / public static final FailsafeElementCoder<String , String > FAILSAFE ELEMENT CODER = FailsafeElementCoder . of ( StringUtf8Coder . of (), StringUtf8Coder . of ()); private static final Logger LOG = LoggerFactory . getLogger ( SpannerChangeStreamsToBigQuery . class ); // Max number of deadletter queue retries. private static final int DLQ MAX RETRIES = 5 ; private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; / Main entry point for executing the pipeline. @param args The command-line arguments to the pipeline. / public static void main ( String [] args ) { UncaughtExceptionLogger . register (); LOG . info ( "Starting to replicate change records from Spanner change streams to BigQuery" ); SpannerChangeStreamsToBigQueryOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( SpannerChangeStreamsToBigQueryOptions . class ); run ( options ); } private static void validateOptions ( SpannerChangeStreamsToBigQueryOptions options ) { if ( options . getDlqRetryMinutes () < = 0 ) { throw new IllegalArgumentException ( "dlqRetryMinutes must be positive." ); } if ( options . getBigQueryChangelogTableNameTemplate () . equals ( BigQueryUtils .
- STREAMING , displayName = "Cloud Spanner change streams to BigQuery" , description = { "The Cloud Spanner change streams to BigQuery template is a streaming pipeline that streams" + " Cloud Spanner data change records and writes them into BigQuery tables using Dataflow" + " Runner V2.\n" , "All change stream watched columns are included in each BigQuery table row, regardless of" + " whether they are modified by a Cloud Spanner transaction.
- BQ CHANGELOG FIELD NAME TABLE NAME )); } BigQueryIOUtils . validateBQStorageApiOptionsStreaming ( options ); } private static void setOptions ( SpannerChangeStreamsToBigQueryOptions options ) { options . setStreaming ( true ); options . setEnableStreamingEngine ( true ); // Add use runner v2 to the experiments option, since change streams connector is only supported // on Dataflow runner v2.
- WriteDLQ . newBuilder () . withDlqDirectory ( dlqManager . getSevereDlqDirectoryWithDateTime ()) . withTmpDirectory ( dlqManager . getSevereDlqDirectory () + "tmp/" ) . setIncludePaneInfo ( true ) . build ()); return pipeline . run (); } private static DeadLetterQueueManager buildDlqManager ( SpannerChangeStreamsToBigQueryOptions options ) { String tempLocation = options . as ( DataflowPipelineOptions . class ). getTempLocation (). endsWith ( "/" ) ? options . as ( DataflowPipelineOptions . class ). getTempLocation () : options . as ( DataflowPipelineOptions . class ). getTempLocation () + "/" ; String dlqDirectory = options . getDeadLetterQueueDirectory (). isEmpty () ? tempLocation + "dlq/" + options . getJobName () + "/" : options . getDeadLetterQueueDirectory (); LOG . info ( "Dead letter queue directory: {}" , dlqDirectory ); return DeadLetterQueueManager . create ( dlqDirectory , DLQ MAX RETRIES ); } / Remove the following intermediate metadata fields that are not user data from {@link TableRow}: metadata error, metadata retry count, metadata spanner original payload json. / private static TableRow removeIntermediateMetadataFields ( TableRow tableRow ) { TableRow cleanTableRow = tableRow . clone (); Set<String> rowKeys = tableRow . keySet (); Set<String> metadataFields = BigQueryUtils . getBigQueryIntermediateMetadataFieldNames (); for ( String rowKey : rowKeys ) { if ( metadataFields . contains ( rowKey )) { cleanTableRow . remove ( rowKey ); } else if ( rowKeys . contains ( " type " + rowKey )) { cleanTableRow . remove ( " type " + rowKey ); } } return cleanTableRow ; } / DoFn that converts a {@link DataChangeRecord} to multiple {@link Mod} in serialized JSON format. / static class DataChangeRecordToModJsonFn extends DoFn<DataChangeRecord , String > { @ProcessElement public void process ( @Element DataChangeRecord input , OutputReceiver<String> receiver ) { for ( org . apache . beam . sdk . io . gcp . spanner . changestreams . model .

