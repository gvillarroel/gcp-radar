---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.840Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Parameterized queries in Dataflow SQL UI"
feature_slug: "parameterized-queries-in-dataflow-sql-ui"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk"
  - "https://docs.cloud.google.com/dataflow/docs/guides/migrate-java-1-to-2"
keywords:
  - "parameterized"
  - "queries"
  - "dataflow"
  - "sql"
  - "ui"
  - "supports"
  - "running"
---

# Parameterized queries in Dataflow SQL UI

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

The Dataflow SQL UI supports running parameterized SQL queries.

## Extended Definition

The Dataflow SQL UI supports running parameterized SQL queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- [https://docs.cloud.google.com/dataflow/docs/guides/migrate-java-1-to-2](https://docs.cloud.google.com/dataflow/docs/guides/migrate-java-1-to-2)

## Supporting Pages

### "Spanner change streams to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Specifically:\n" + " - For Cloud Spanner JSON type, the order of the members of an object is" + " lexicographically ordered, but there is no such guarantee for BigQuery JSON type.\n" + " - Cloud Spanner supports nanoseconds TIMESTAMP type, BigQuery only supports" + " microseconds TIMESTAMP type.\n" , "Learn more about <a href=\"https://cloud.google.com/spanner/docs/change-streams\">change" + " streams</a>, <a" + " href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow\">how to" + " build change streams Dataflow pipelines</a>, and <a" + " href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow#best practices\">best" + " practices</a>." }, optionsClass = SpannerChangeStreamsToBigQueryOptions . class , flexContainerName = "googlecloud-to-googlecloud" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner instance must exist prior to running the pipeline." , "The Cloud Spanner database must exist prior to running the pipeline." , "The Cloud Spanner metadata instance must exist prior to running the pipeline." , "The Cloud Spanner metadata database must exist prior to running the pipeline." , "The Cloud Spanner change stream must exist prior to running the pipeline." , "The BigQuery dataset must exist prior to running the pipeline." }, streaming = true , supportsExactlyOnce = true , supportsAtLeastOnce = true ) public final class SpannerChangeStreamsToBigQuery { / String/String Coder for {@link FailsafeElement}. / public static final FailsafeElementCoder<String , String > FAILSAFE ELEMENT CODER = FailsafeElementCoder . of ( StringUtf8Coder . of (), StringUtf8Coder . of ()); private static final Logger LOG = LoggerFactory . getLogger ( SpannerChangeStreamsToBigQuery . class ); // Max number of deadletter queue retries. private static final int DLQ MAX RETRIES = 5 ; private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; / Main entry point for executing the pipeline. @param args The command-line arguments to the pipeline. / public static void main ( String [] args ) { UncaughtExceptionLogger . register (); LOG . info ( "Starting to replicate change records from Spanner change streams to BigQuery" ); SpannerChangeStreamsToBigQueryOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( SpannerChangeStreamsToBigQueryOptions . class ); run ( options ); } private static void validateOptions ( SpannerChangeStreamsToBigQueryOptions options ) { if ( options . getDlqRetryMinutes () < = 0 ) { throw new IllegalArgumentException ( "dlqRetryMinutes must be positive." ); } if ( options . getBigQueryChangelogTableNameTemplate () . equals ( BigQueryUtils .
- Mod changeStreamsMod : input . getMods ()) { Mod mod = new Mod ( changeStreamsMod . getKeysJson (), changeStreamsMod . getNewValuesJson (), input . getCommitTimestamp (), input . getServerTransactionId (), input . isLastRecordInTransactionInPartition (), input . getRecordSequence (), input . getTableName (), input . getRowType (). stream (). map ( ModColumnType :: new ). collect ( Collectors . toList ()), input . getModType (), input . getValueCaptureType (), input . getNumberOfRecordsInTransaction (), input . getNumberOfPartitionsInTransaction ()); String modJsonString ; try { modJsonString = mod . toJson (); } catch ( IOException e ) { // Ignore exception and print bad format. modJsonString = String . format ( "\"%s\"" , input ); } receiver . output ( modJsonString ); } } } } Production considerations When running the Spanner Change Streams to BigQuery template in a production environment, consider the following best practices to help ensure reliability and prevent data loss: Worker provisioning and scaling Set maxNumWorkers adequately: Insufficient Dataflow workers can cause the pipeline to fall behind in processing change stream data.
- For the NEW ROW value capture type, the template is more" + " efficient, because the data change record captures the full new row including columns" + " that are not updated in UPDATEs, and the template does not need to do a stale read.\n" + "- You can minimize network latency and network transport costs by running the Dataflow" + " job from the same region as your Cloud Spanner instance or BigQuery tables.
- See" + " more about Dataflow regional endpoints.\n" + "- This template supports all valid Cloud Spanner data types, but if the BigQuery type" + " is more precise than the Cloud Spanner type, precision loss might occur during the" + " transformation.

### Install the Apache Beam SDK \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/migrate-java-1-to-2](https://docs.cloud.google.com/dataflow/docs/guides/migrate-java-1-to-2)
- Source ID: `site-docs-reference-2`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The console will contain a message like the following, which contains the Dataflow SDK version information: Python To find out what version of the Dataflow SDK that a given pipeline is running, you can look at the console output when running with DataflowRunner .
- The console will contain a message like the following, which contains the Dataflow SDK version information: Go To find out what version of the Dataflow SDK that a given pipeline is running, you can look at the console output when running with DataflowRunner .
- Java To find out what version of the Dataflow SDK that a given pipeline is running, you can look at the console output when running with DataflowPipelineRunner or BlockingDataflowPipelineRunner .
- To upgrade an existing installation of apache-beam, use the --upgrade flag: pip install --upgrade 'apache-beam[gcp]' As of October 7, 2020, Dataflow no longer supports Python 2 pipelines.

### Install the Apache Beam SDK \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- Source ID: `site-docs-reference-required-3`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The console will contain a message like the following, which contains the Dataflow SDK version information: Python To find out what version of the Dataflow SDK that a given pipeline is running, you can look at the console output when running with DataflowRunner .
- The console will contain a message like the following, which contains the Dataflow SDK version information: Go To find out what version of the Dataflow SDK that a given pipeline is running, you can look at the console output when running with DataflowRunner .
- Java To find out what version of the Dataflow SDK that a given pipeline is running, you can look at the console output when running with DataflowPipelineRunner or BlockingDataflowPipelineRunner .
- To upgrade an existing installation of apache-beam, use the --upgrade flag: pip install --upgrade 'apache-beam[gcp]' As of October 7, 2020, Dataflow no longer supports Python 2 pipelines.

