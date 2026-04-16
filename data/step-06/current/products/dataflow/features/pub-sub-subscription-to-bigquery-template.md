---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.805Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Pub/Sub Subscription to BigQuery template"
feature_slug: "pub-sub-subscription-to-bigquery-template"
latest_feature_date: "2022-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery"
keywords:
  - "pub"
  - "sub"
  - "subscription"
  - "bigquery"
  - "template"
  - "provided"
  - "loads"
  - "into"
---

# Pub/Sub Subscription to BigQuery template

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This Google-provided template loads data from a Pub/Sub subscription into BigQuery.

## Extended Definition

This Google-provided template loads data from a Pub/Sub subscription into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery)

## Supporting Pages

### "Use Flex Templates to package a Dataflow pipeline for deployment \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example metadata file Java { "name" : "Streaming Beam SQL" , "description" : "An Apache Beam streaming pipeline that reads JSON encoded messages from Pub/Sub, uses Beam SQL to transform the message data, and writes the results to a BigQuery" , "parameters" : [ { "name" : "inputSubscription" , "label" : "Pub/Sub input subscription." , "helpText" : "Pub/Sub subscription to read from." , "regexes" : [ "[a-zA-Z][- . +%a-zA-Z0-9]{2,}" ] }, { "name" : "outputTable" , "label" : "BigQuery output table" , "helpText" : "BigQuery table spec to write to, in the form 'project:dataset.table'." , "isOptional" : true , "regexes" : [ "[^:]+:[^.]+[.].+" ] } ] } Python { "name" : "Streaming beam Python flex template" , "description" : "Streaming beam example for python flex template." , "parameters" : [ { "name" : "input subscription" , "label" : "Input PubSub subscription." , "helpText" : "Name of the input PubSub subscription to consume from." , "regexes" : [ "projects/[^/]+/subscriptions/[a-zA-Z][- . +%a-zA-Z0-9]{2,}" ] }, { "name" : "output table" , "label" : "BigQuery output table name." , "helpText" : "Name of the BigQuery output table name." , "isOptional" : true , "regexes" : [ "([^:]+:)?[^.]+[.].+" ] } ] } You can download metadata files for the Google-provided templates from the Dataflow template directory .
- See: https://beam.apache.org/documentation/sdks/python-pipeline-dependencies/#pypi-dependencies ENV FLEX TEMPLATE PYTHON REQUIREMENTS FILE = "/template/requirements.txt" ENV FLEX TEMPLATE PYTHON PY FILE = "/template/streaming beam.py" COPY . /template RUN apt-get update \ Install any apt packages if required by your template pipeline. && apt-get install -y libffi-dev git \ && rm -rf /var/lib/apt/lists/ \ Upgrade pip and install the requirements. && pip install --no-cache-dir --upgrade pip \ Install dependencies from requirements file in the launch environment. && pip install --no-cache-dir -r $FLEX TEMPLATE PYTHON REQUIREMENTS FILE \ When FLEX TEMPLATE PYTHON REQUIREMENTS FILE option is used, then during Template launch Beam downloads dependencies into a local requirements cache folder and stages the cache to workers.
- This command creates the following artifacts: The template specification file, stored in Cloud Storage The launcher container image, stored in Artifact Registry Use a Google-provided base image To run a Flex Template using a Google-provided base image, run the following command: Java gcloud dataflow flex-template build gs:// BUCKET NAME / TEMPLATE FILE NAME \ --image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE : TAG " \ --sdk-language "JAVA" \ --flex-template-base-image " BASE IMAGE " \ --metadata-file " METADATA FILE " \ --jar " JAR FILE " \ --env "FLEX TEMPLATE JAVA MAIN CLASS= JAVA MAIN CLASS " Replace the following: BUCKET NAME : the name of a Cloud Storage bucket to store the template specification file TEMPLATE FILE NAME : the name of the template specification file to create.
- COPY --from = template launcher /opt/google/dataflow/python template launcher /opt/google/dataflow/python template launcher COPY my pipeline.py /template/ ENV FLEX TEMPLATE PYTHON PY FILE = "/template/my pipeline.py" Replace the following: IMAGE NAME : a Google-provided base image.

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

### "Spanner change streams to Pub/Sub template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After creation, Pub/Sub automatically generates and attaches a subscription to the new topic. " + "If you try to output data to a Pub/Sub topic that doesn't exist, the dataflow pipeline throws an exception, and the pipeline gets stuck as it continuously tries to make a connection.\n" , "If the necessary Pub/Sub topic already exists, you can output data to that topic." , "Learn more about <a href=\"https://cloud.google.com/spanner/docs/change-streams\">change streams</a>, <a href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow\">how to build change streams Dataflow pipelines</a>, and <a href=\"https://cloud.google.com/spanner/docs/change-streams/use-dataflow#best practices\">best practices</a>." }, optionsClass = SpannerChangeStreamsToPubSubOptions . class , flexContainerName = "googlecloud-to-googlecloud" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-pubsub" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner instance must exist before running the pipeline." , "The Cloud Spanner database must exist prior to running the pipeline." , "The Cloud Spanner metadata instance must exist prior to running the pipeline." , "The Cloud Spanner metadata database must exist prior to running the pipeline." , "The Cloud Spanner change stream must exist prior to running the pipeline." , "The Pub/Sub topic must exist prior to running the pipeline." }, streaming = true , supportsAtLeastOnce = true ) public class SpannerChangeStreamsToPubSub { private static final Logger LOG = LoggerFactory . getLogger ( SpannerChangeStreamsToPubSub . class ); private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; public static void main ( String [] args ) { UncaughtExceptionLogger . register (); LOG . info ( "Starting Input Messages to Pub/Sub" ); SpannerChangeStreamsToPubSubOptions options = PipelineOptionsFactory . fromArgs ( args ). as ( SpannerChangeStreamsToPubSubOptions . class ); run ( options ); } private static String getSpannerProjectId ( SpannerChangeStreamsToPubSubOptions options ) { return options . getSpannerProjectId (). isEmpty () ? options . getProject () : options . getSpannerProjectId (); } private static String getPubsubProjectId ( SpannerChangeStreamsToPubSubOptions options ) { return options . getPubsubProjectId (). isEmpty () ? options . getProject () : options . getPubsubProjectId (); } public static boolean isValidAsciiString ( String outputMessageMetadata ) { if ( outputMessageMetadata != null && !
- STREAMING , displayName = "Cloud Spanner change streams to Pub/Sub" , description = { "The Cloud Spanner change streams to the Pub/Sub template is a streaming pipeline that streams Cloud Spanner data change records and writes them into Pub/Sub topics using Dataflow Runner V2.\n" , "To output your data to a new Pub/Sub topic, you need to first create the topic.
- The Spanner change streams to the Pub/Sub template is a streaming pipeline that streams Spanner data change records and writes them into Pub/Sub topics using Dataflow Runner V2 .
- See the list of Google-provided templates .

