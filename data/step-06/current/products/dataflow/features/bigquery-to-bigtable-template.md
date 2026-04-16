---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.773Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "BigQuery to Bigtable template"
feature_slug: "bigquery-to-bigtable-template"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-bigtable"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cassandra-to-bigtable"
keywords:
  - "bigquery"
  - "bigtable"
  - "template"
  - "dataflow"
  - "generally"
  - "available"
---

# BigQuery to Bigtable template

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

The BigQuery to Bigtable Dataflow template is generally available.

## Extended Definition

The BigQuery to Bigtable Dataflow template is generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-bigtable](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-bigtable)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cassandra-to-bigtable](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cassandra-to-bigtable)

## Supporting Pages

### BigQuery to Bigtable template \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-bigtable](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-bigtable)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /flexTemplates:launch { "launch parameter" : { "jobName" : " JOB NAME " , "parameters" : { "readIdColumn" : " READ COLUMN ID " , "inputTableSpec" : " INPUT TABLE SPEC " , "bigtableWriteInstanceId" : " BIGTABLE INSTANCE ID " , "bigtableWriteTableId" : " BIGTABLE TABLE ID " , "bigtableWriteColumnFamily" : " BIGTABLE COLUMN FAMILY " }, "containerSpecGcsPath" : "gs://dataflow-templates- LOCATION / VERSION /flex/BigQuery to Bigtable" , } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- In your shell or terminal, run the template: gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --region = REGION NAME \ --template-file-gcs-location = gs://dataflow-templates- REGION NAME / VERSION /flex/BigQuery to Bigtable \ --parameters \ readIdColumn = READ COLUMN ID , \ inputTableSpec = INPUT TABLE SPEC , \ bigtableWriteInstanceId = BIGTABLE INSTANCE ID , \ bigtableWriteTableId = BIGTABLE TABLE ID , \ bigtableWriteColumnFamily = BIGTABLE COLUMN FAMILY Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice REGION NAME : the region where you want to deploy your Dataflow job—for example, us-central1 VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- See the License for the specific language governing permissions and limitations under the License. / package com.google.cloud.teleport.v2.templates ; import static com.google.cloud.teleport.v2.bigtable.utils.BigtableConfig.generateCloudBigtableWriteConfiguration ; import com.google.cloud.bigtable.beam.CloudBigtableIO ; import com.google.cloud.bigtable.beam.CloudBigtableTableConfiguration ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.metadata.TemplateParameter ; import com.google.cloud.teleport.v2.bigtable.options.BigtableCommonOptions ; import com.google.cloud.teleport.v2.bigtable.transforms.BigtableConverters ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2.templates.BigQueryToBigtable.BigQueryToBigtableOptions ; import com.google.cloud.teleport.v2.transforms.BigQueryConverters ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.extensions.gcp.options.GcpOptions ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO ; import org.apache.beam.sdk.options.Default ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.Validation.Required ; import org.apache.beam.sdk.transforms.DoFn ; import org.apache.beam.sdk.transforms.ParDo ; import org.apache.hadoop.hbase.client.Mutation ; import org.apache.hadoop.hbase.client.Put ; import org.apache.hadoop.hbase.util.Bytes ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; / Dataflow template which reads BigQuery data and writes it to Bigtable.
- WriteOptions . class }, optionalOptions = { "inputTableSpec" , "timestampColumn" , "skipNullValues" }, flexContainerName = "bigquery-to-bigtable" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-bigtable" , contactInformation = "https://cloud.google.com/support" , requirements = { "The source BigQuery table must exist." , "The Bigtable table must exist." , "The <a href=\"https://cloud.google.com/dataflow/docs/concepts/security-and-permissions#worker-service-account\">worker service account</a>" + " needs the <code>roles/bigquery.datasets.create</code> permission.

### "Apache Cassandra to Bigtable template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cassandra-to-bigtable](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cassandra-to-bigtable)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /templates:launch?gcsPath=gs://dataflow-templates- LOCATION / VERSION /Cassandra To Cloud Bigtable { "jobName" : " JOB NAME " , "parameters" : { "bigtableProjectId" : " BIGTABLE PROJECT ID " , "bigtableInstanceId" : " BIGTABLE INSTANCE ID " , "bigtableTableId" : " BIGTABLE TABLE ID " , "cassandraHosts" : " CASSANDRA HOSTS " , "cassandraKeyspace" : " CASSANDRA KEYSPACE " , "cassandraTable" : " CASSANDRA TABLE " }, "environment" : { "zone" : "us-central1-f" } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- In your shell or terminal, run the template: gcloud dataflow jobs run JOB NAME \ --gcs-location gs://dataflow-templates- REGION NAME / VERSION /Cassandra To Cloud Bigtable \ --region REGION NAME \ --parameters \ bigtableProjectId = BIGTABLE PROJECT ID , \ bigtableInstanceId = BIGTABLE INSTANCE ID , \ bigtableTableId = BIGTABLE TABLE ID , \ cassandraHosts = CASSANDRA HOSTS , \ cassandraKeyspace = CASSANDRA KEYSPACE , \ cassandraTable = CASSANDRA TABLE Replace the following: JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- BATCH , displayName = "Cassandra to Cloud Bigtable" , description = { "The Apache Cassandra to Cloud Bigtable template copies a table from Apache Cassandra to Cloud Bigtable. " + "This template requires minimal configuration and replicates the table structure in Cassandra as closely as possible in Cloud Bigtable." , "The Apache Cassandra to Cloud Bigtable template is useful for the following:\n" + "- Migrating Apache Cassandra database when short downtime is acceptable.\n" + "- Periodically replicating Cassandra tables to Cloud Bigtable for global serving." }, optionsClass = Options . class , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cassandra-to-bigtable" , contactInformation = "https://cloud.google.com/support" , requirements = { "The target Bigtable table must exist before running the pipeline." , "Network connection between Dataflow workers and Apache Cassandra nodes." }) public final class CassandraToBigtable { / TODO - refactor to extend BigtableCommonOptions.WriteOptions. / public interface Options extends PipelineOptions { @TemplateParameter.Text ( order = 1 , groupName = "Source" , regexes = { "^[a-zA-Z0-9\\.\\-,] $" }, description = "Cassandra Hosts" , helpText = "The hosts of the Apache Cassandra nodes in a comma-separated list." ) ValueProvider<String> getCassandraHosts (); @SuppressWarnings ( "unused" ) void setCassandraHosts ( ValueProvider<String> hosts ); @TemplateParameter.Integer ( order = 2 , groupName = "Source" , optional = true , description = "Cassandra Port" , helpText = "The TCP port to use to reach Apache Cassandra on the nodes.
- See the License for the specific language governing permissions and limitations under the License. / package com.google.cloud.teleport.bigtable ; import com.datastax.driver.core.Session ; import com.google.cloud.teleport.bigtable.CassandraToBigtable.Options ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.metadata.TemplateParameter ; import java.util.Arrays ; import java.util.List ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.coders.SerializableCoder ; import org.apache.beam.sdk.io.cassandra.CassandraIO ; import org.apache.beam.sdk.io.cassandra.Mapper ; import org.apache.beam.sdk.io.gcp.bigtable.BigtableIO ; import org.apache.beam.sdk.options.Default ; import org.apache.beam.sdk.options.PipelineOptions ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.ValueProvider ; import org.apache.beam.sdk.transforms.ParDo ; import org.apache.beam.sdk.transforms.SerializableFunction ; import org.apache.beam.sdk.values.Row ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; / This Dataflow Template performs a one off copy of one table from Apache Cassandra to Cloud Bigtable.

### "Bigtable change streams to BigQuery template \_|\_ Cloud Dataflow \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /flexTemplates:launch { "launch parameter" : { "jobName" : " JOB NAME " , "containerSpecGcsPath" : "gs://dataflow-templates- REGION NAME / VERSION /flex/Bigtable Change Streams to BigQuery" , "parameters" : { "bigtableReadInstanceId" : " BIGTABLE INSTANCE ID " , "bigtableReadTableId" : " BIGTABLE TABLE ID " , "bigtableChangeStreamAppProfile" : " BIGTABLE APPLICATION PROFILE ID " , "bigQueryDataset" : " BIGQUERY DESTINATION DATASET " } } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- In your shell or terminal, run the template: gcloud dataflow flex-template run JOB NAME \ --region = REGION NAME \ --template-file-gcs-location = gs://dataflow-templates- REGION NAME / VERSION /flex/Bigtable Change Streams to BigQuery \ --parameters \ bigtableReadInstanceId = BIGTABLE INSTANCE ID , \ bigtableReadTableId = BIGTABLE TABLE ID , \ bigtableChangeStreamAppProfile = BIGTABLE APPLICATION PROFILE ID , \ bigQueryDataset = BIGQUERY DESTINATION DATASET Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- Streams Bigtable data change records and writes them into BigQuery using Dataflow Runner V2." , optionsClass = BigtableChangeStreamToBigQueryOptions . class , optionsOrder = { BigtableChangeStreamToBigQueryOptions . class , ReadChangeStreamOptions . class , ReadOptions . class }, skipOptions = { "bigtableReadAppProfile" , "bigtableAdditionalRetryCodes" , "bigtableRpcAttemptTimeoutMs" , "bigtableRpcTimeoutMs" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery" , flexContainerName = "googlecloud-to-googlecloud" , contactInformation = "https://cloud.google.com/support" , streaming = true ) public final class BigtableChangeStreamsToBigQuery { private static final Logger LOG = LoggerFactory . getLogger ( BigtableChangeStreamsToBigQuery . class ); private static final String USE RUNNER V2 EXPERIMENT = "use runner v2" ; / Main entry point for executing the pipeline. @param args The command-line arguments to the pipeline. / public static void main ( String [] args ) { LOG . info ( "Starting to replicate change records from Cloud Bigtable change streams to BigQuery" ); BigtableChangeStreamToBigQueryOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( BigtableChangeStreamToBigQueryOptions . class ); run ( options ); } private static void setOptions ( BigtableChangeStreamToBigQueryOptions options ) { options . setStreaming ( true ); options . setEnableStreamingEngine ( true ); // Add use runner v2 to the experiments option, since change streams connector is only supported // on Dataflow runner v2.
- Home Documentation Data analytics Cloud Dataflow Reference Send feedback Bigtable change streams to BigQuery template Stay organized with collections Save and categorize content based on your preferences.

