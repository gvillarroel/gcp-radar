---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.806Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Pub/Sub to Pub/Sub template"
feature_slug: "pub-sub-to-pub-sub-template"
latest_feature_date: "2022-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet"
keywords:
  - "pub"
  - "sub"
  - "template"
  - "provided"
  - "reads"
  - "one"
  - "source"
  - "writes"
---

# Pub/Sub to Pub/Sub template

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This Google-provided template reads from one Pub/Sub source and writes to another Pub/Sub destination.

## Extended Definition

This Google-provided template reads from one Pub/Sub source and writes to another Pub/Sub destination.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet)

## Supporting Pages

### "Spanner to Cloud Storage Text template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BATCH , displayName = "Cloud Spanner to Text Files on Cloud Storage" , description = "The Cloud Spanner to Cloud Storage Text template is a batch pipeline that reads in data from a Cloud Spanner " + "table, and writes it to Cloud Storage as CSV text files." , optionsClass = SpannerToTextOptions . class , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage" , contactInformation = "https://cloud.google.com/support" , requirements = { "The input Spanner table must exist before running the pipeline." }) public class SpannerToText { private static final Logger LOG = LoggerFactory . getLogger ( SpannerToText . class ); / Custom PipelineOptions. / public interface SpannerToTextOptions extends PipelineOptions , SpannerReadOptions , FilesystemWriteOptions { @TemplateParameter.GcsWriteFolder ( order = 1 , groupName = "Target" , optional = true , description = "Cloud Storage temp directory for storing CSV files" , helpText = "The Cloud Storage path where temporary CSV files are written." , example = "gs://your-bucket/your-path" ) ValueProvider<String> getCsvTempDirectory (); @SuppressWarnings ( "unused" ) void setCsvTempDirectory ( ValueProvider<String> value ); @TemplateParameter.Enum ( order = 2 , groupName = "Source" , enumOptions = { @TemplateEnumOption ( "LOW" ), @TemplateEnumOption ( "MEDIUM" ), @TemplateEnumOption ( "HIGH" ) }, optional = true , description = "Priority for Spanner RPC invocations" , helpText = "The request priority (https://cloud.google.com/spanner/docs/reference/rest/v1/RequestOptions)" + " for Spanner calls.
- The Spanner to Cloud Storage Text template is a batch pipeline that reads in data from a Spanner table, and writes it to Cloud Storage as CSV text files.
- See the License for the specific language governing permissions and limitations under the License. / package com.google.cloud.teleport.templates ; import static com.google.cloud.teleport.util.ValueProviderUtils.eitherOrValueProvider ; import com.google.cloud.spanner.Options.RpcPriority ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.metadata.TemplateParameter ; import com.google.cloud.teleport.metadata.TemplateParameter.TemplateEnumOption ; import com.google.cloud.teleport.spanner.spannerio.ReadOperation ; import com.google.cloud.teleport.spanner.spannerio.SpannerConfig ; import com.google.cloud.teleport.spanner.spannerio.SpannerIO ; import com.google.cloud.teleport.spanner.spannerio.Transaction ; import com.google.cloud.teleport.templates.SpannerToText.SpannerToTextOptions ; import com.google.cloud.teleport.templates.common.SpannerConverters ; import com.google.cloud.teleport.templates.common.SpannerConverters.CreateTransactionFnWithTimestamp ; import com.google.cloud.teleport.templates.common.SpannerConverters.SpannerReadOptions ; import com.google.cloud.teleport.templates.common.TextConverters.FilesystemWriteOptions ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.io.FileSystems ; import org.apache.beam.sdk.io.TextIO ; import org.apache.beam.sdk.io.fs.ResourceId ; import org.apache.beam.sdk.options.PipelineOptions ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.ValueProvider ; import org.apache.beam.sdk.transforms.Create ; import org.apache.beam.sdk.transforms.MapElements ; import org.apache.beam.sdk.transforms.PTransform ; import org.apache.beam.sdk.transforms.ParDo ; import org.apache.beam.sdk.transforms.SerializableFunction ; import org.apache.beam.sdk.transforms.View ; import org.apache.beam.sdk.values.PBegin ; import org.apache.beam.sdk.values.PCollection ; import org.apache.beam.sdk.values.PCollectionView ; import org.apache.beam.sdk.values.TypeDescriptors ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; / Dataflow template which copies a Spanner table to a Text sink.
- The default value is MEDIUM." ) ValueProvider<RpcPriority> getSpannerPriority (); void setSpannerPriority ( ValueProvider<RpcPriority> value ); } / Runs a pipeline which reads in Records from Spanner, and writes the CSV to TextIO sink. @param args arguments to the pipeline / public static void main ( String [] args ) { LOG . info ( "Starting pipeline setup" ); PipelineOptionsFactory . register ( SpannerToTextOptions . class ); SpannerToTextOptions options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( SpannerToTextOptions . class ); FileSystems . setDefaultPipelineOptions ( options ); Pipeline pipeline = Pipeline . create ( options ); SpannerConfig spannerConfig = SpannerConfig . create () . withHost ( options . getSpannerHost ()) . withProjectId ( options . getSpannerProjectId ()) . withInstanceId ( options . getSpannerInstanceId ()) . withDatabaseId ( options . getSpannerDatabaseId ()) . withRpcPriority ( options . getSpannerPriority ()) . withDataBoostEnabled ( options . getDataBoostEnabled ()); PTransform<PBegin , PCollection<ReadOperation> > spannerExport = SpannerConverters .

### AstraDB to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BATCH , displayName = "AstraDB to BigQuery" , description = { "The AstraDB to BigQuery template is a batch pipeline that reads records from AstraDB and writes them to BigQuery." , "If the destination table doesn't exist in BigQuery, the pipeline creates a table with the following values:\n" + "- The Dataset ID is inherited from the Cassandra keyspace.\n" + "- The Table ID is inherited from the Cassandra table.\n" , "The schema of the destination table is inferred from the source Cassandra table.\n" + "- List and Set are mapped to BigQuery REPEATED fields.\n" + "- Map are mapped to BigQuery RECORD fields.\n" + "- All other types are mapped to BigQuery fields with the corresponding types.\n" + "- Cassandra user-defined types (UDTs) and tuple data types are not supported." }, optionsClass = AstraDbToBigQuery .
- The AstraDB to BigQuery template is a batch pipeline that reads records from AstraDB and writes them to BigQuery.
- If not set, the table specification is built from the cassandra source table attributes: keyspace=dataset name, table=table name. / String bigQueryOutputTableSpec = options . getOutputTableSpec (); if ( StringUtils . isEmpty ( bigQueryOutputTableSpec )) { bigQueryOutputTableSpec = options . getProject () + ":" + options . getAstraKeyspace () + "." + options . getAstraTable (); } TableReference bigQueryTableReference = BigQueryUtils . toTableReference ( bigQueryOutputTableSpec ); LOGGER . info ( "Big Query table spec has been set to {}" , bigQueryOutputTableSpec ); return bigQueryTableReference ; } / Create destination dataset and tables if needed (schema mapped from Cassandra). @param options pipeline options @param bqTableRef big query table reference / private static void createBigQueryDestinationTableIfNotExist ( Options options , TableReference bqTableRef ) { BigQuery bigquery = BigQueryOptions . newBuilder (). setProjectId ( options . getProject ()). build (). getService (); if ( null == bigquery . getDataset ( DatasetId . of ( bqTableRef . getProjectId (), bqTableRef . getDatasetId ()))) { LOGGER . info ( "Dataset was not found: creating DataSet {} in region {}" , bqTableRef . getDatasetId (), options . getWorkerRegion ()); bigquery . create ( DatasetInfo . newBuilder ( bqTableRef . getDatasetId ()) . setLocation ( options . getWorkerRegion ()) . build ()); LOGGER . debug ( "Dataset has been created [OK]" ); } else { LOGGER . info ( "Dataset {} already exist" , bqTableRef . getDatasetId ()); } } } What's next Learn about Dataflow templates .
- Options . class , flexContainerName = "astradb-to-bigquery" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/astradb-to-bigquery" , contactInformation = "https://cloud.google.com/support" , preview = true , requirements = { "AstraDB account with a token" }) public class AstraDbToBigQuery { / Logger for the class. / private static final Logger LOGGER = LoggerFactory . getLogger ( AstraDbToBigQuery . class ); / If not provided, it is the default token range value. / public static final int DEFAULT TOKEN RANGE = 18 ; / Options for the sample <p>Inherits standard configuration options. / public interface Options extends PipelineOptions , AstraDbToBigQueryOptions .

### "BigQuery export to Parquet (via Storage API) template \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BATCH , displayName = "BigQuery export to Parquet (via Storage API)" , description = "The BigQuery export to Parquet template is a batch pipeline that reads data from a BigQuery table and writes it to a Cloud Storage bucket in Parquet format. " + "This template utilizes the <a href=\"https://cloud.google.com/bigquery/docs/reference/storage\">BigQuery Storage API</a> to export the data." , optionsClass = BigQueryToParquetOptions . class , flexContainerName = "bigquery-to-parquet" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet" , contactInformation = "https://cloud.google.com/support" , requirements = { "The input BigQuery table must exist before running the pipeline." , "The output Cloud Storage bucket must exist before running the pipeline." }) public class BigQueryToParquet { / Logger for class. / private static final Logger LOG = LoggerFactory . getLogger ( BigQueryToParquet . class ); / File suffix for file to be written. / private static final String FILE SUFFIX = ".parquet" ; / Factory to create BigQueryStorageClients. / static class BigQueryStorageClientFactory { / Creates BigQueryStorage client for use in extracting table schema. @return BigQueryStorageClient / static BigQueryStorageClient create () { try { return BigQueryStorageClient . create (); } catch ( IOException e ) { LOG . error ( "Error connecting to BigQueryStorage API: " + e . getMessage ()); throw new RuntimeException ( e ); } } } / Factory to create ReadSessions. / static class ReadSessionFactory { / Creates ReadSession for schema extraction. @param client BigQueryStorage client used to create ReadSession. @param options BigQueryToParquetOptions options. @param tableReadOptions TableReadOptions that specify any fields in the table to filter on. @return session ReadSession object that contains the schema for the export. / static ReadSession create ( BigQueryStorageClient client , BigQueryToParquetOptions options , TableReadOptions tableReadOptions ) { String tableString = options . getTableRef (); TableReference tableReference = BigQueryHelpers . parseTableSpec ( tableString ); BigQueryOptions bigQueryOptions = options . as ( BigQueryOptions . class ); String parentProjectId = bigQueryOptions . getBigQueryProject () == null ? bigQueryOptions . getProject () : bigQueryOptions . getBigQueryProject (); String parentProjectIdResource = "projects/" + parentProjectId ; TableReferenceProto .
- Builder builder = CreateReadSessionRequest . newBuilder () . setParent ( parentProjectIdResource ) . setReadOptions ( tableReadOptions ) . setTableReference ( storageTableRef ); try { return client . createReadSession ( builder . build ()); } catch ( InvalidArgumentException iae ) { LOG . error ( "Error creating ReadSession: " + iae . getMessage ()); throw new RuntimeException ( iae ); } } } / The {@link BigQueryToParquetOptions} class provides the custom execution options passed by the executor at the command-line. / public interface BigQueryToParquetOptions extends PipelineOptions { @TemplateParameter.BigQueryTable ( order = 1 , description = "BigQuery table to export" , groupName = "Source" , helpText = "The BigQuery input table location." , example = "your-project:your-dataset.your-table-name" ) @Required String getTableRef (); void setTableRef ( String tableRef ); @TemplateParameter.GcsWriteFile ( order = 2 , description = "Output Cloud Storage file(s)" , groupName = "Target" , helpText = "The Cloud Storage folder to write the Parquet files to." , example = "gs://your-bucket/export/" ) @Required String getBucket (); void setBucket ( String bucket ); @TemplateParameter.Integer ( order = 3 , optional = true , description = "Maximum output shards" , helpText = "The number of output file shards.
- The BigQuery export to Parquet template is a batch pipeline that reads data from a BigQuery table and writes it to a Cloud Storage bucket in Parquet format.
- InvalidArgumentException ; import com.google.api.services.bigquery.model.TableReference ; import com.google.cloud.bigquery.storage.v1beta1.BigQueryStorageClient ; import com.google.cloud.bigquery.storage.v1beta1.ReadOptions.TableReadOptions ; import com.google.cloud.bigquery.storage.v1beta1.Storage.CreateReadSessionRequest ; import com.google.cloud.bigquery.storage.v1beta1.Storage.ReadSession ; import com.google.cloud.bigquery.storage.v1beta1.TableReferenceProto ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.metadata.TemplateParameter ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2.templates.BigQueryToParquet.BigQueryToParquetOptions ; import com.google.common.base.Splitter ; import com.google.common.base.Strings ; import java.io.IOException ; import java.util.Arrays ; import java.util.List ; import org.apache.avro.Schema ; import org.apache.avro.generic.GenericRecord ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.PipelineResult ; import org.apache.beam.sdk.extensions.avro.coders.AvroCoder ; import org.apache.beam.sdk.io.FileIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryHelpers ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.TypedRead ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.TypedRead.Method ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryOptions ; import org.apache.beam.sdk.io.gcp.bigquery.SchemaAndRecord ; import org.apache.beam.sdk.io.parquet.ParquetIO ; import org.apache.beam.sdk.options.Default ; import org.apache.beam.sdk.options.PipelineOptions ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.Validation.Required ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; / The {@link BigQueryToParquet} pipeline exports data from a BigQuery table to Parquet file(s) in a Google Cloud Storage bucket. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/bigquery-to-parquet/README BigQuery to Parquet.md">README</a> for instructions on how to use or modify this template. / @Template ( name = "BigQuery to Parquet" , category = TemplateCategory .

