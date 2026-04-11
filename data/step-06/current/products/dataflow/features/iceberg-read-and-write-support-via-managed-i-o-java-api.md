---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.800Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Iceberg read and write support via Managed I/O Java API"
feature_slug: "iceberg-read-and-write-support-via-managed-i-o-java-api"
latest_feature_date: "2024-06-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/cdc-read-from-iceberg-biglake"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet"
  - "https://docs.cloud.google.com/dataflow/docs/guides/managed-io"
  - "https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status"
keywords:
  - "iceberg"
  - "read"
  - "and"
  - "write"
  - "via"
  - "managed"
  - "java"
  - "api"
---

# Iceberg read and write support via Managed I/O Java API

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow Managed I/O Java API supports reading and writing Apache Iceberg tables.

## Extended Definition

Dataflow Managed I/O Java API supports reading and writing Apache Iceberg tables.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/cdc-read-from-iceberg-biglake](https://docs.cloud.google.com/dataflow/docs/guides/cdc-read-from-iceberg-biglake)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet)
- [https://docs.cloud.google.com/dataflow/docs/guides/managed-io](https://docs.cloud.google.com/dataflow/docs/guides/managed-io)
- [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)

## Supporting Pages

### "CDC Read from Apache Iceberg with BigLake REST Catalog \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/cdc-read-from-iceberg-biglake](https://docs.cloud.google.com/dataflow/docs/guides/cdc-read-from-iceberg-biglake)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- GoogleCredentials ; import com.google.common.collect.ImmutableMap ; import java.io.IOException ; import java.util.Map ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.coders.RowCoder ; import org.apache.beam.sdk.extensions.gcp.options.GcpOptions ; import org.apache.beam.sdk.managed.Managed ; import org.apache.beam.sdk.options.Default ; import org.apache.beam.sdk.options.Description ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.Validation ; import org.apache.beam.sdk.schemas.Schema ; import org.apache.beam.sdk.transforms.MapElements ; import org.apache.beam.sdk.transforms.Sum ; import org.apache.beam.sdk.transforms.windowing.FixedWindows ; import org.apache.beam.sdk.transforms.windowing.Window ; import org.apache.beam.sdk.values.KV ; import org.apache.beam.sdk.values.PCollection ; import org.apache.beam.sdk.values.Row ; import org.apache.beam.sdk.values.TypeDescriptors ; import org.joda.time.Duration ; / A streaming pipeline that reads CDC events from an Iceberg table, aggregates user clicks, and writes the results to another Iceberg table.
- Dependencies Add the following dependencies to your project: Java <dependency> <groupId>org.apache.beam</groupId> <artifactId>beam-sdks-java-managed</artifactId> <version>${beam.version}</version> </dependency> <dependency> <groupId>org.apache.beam</groupId> <artifactId>beam-sdks-java-io-iceberg</artifactId> <version>${beam.version}</version> </dependency> <dependency> <groupId>org.apache.iceberg</groupId> <artifactId>iceberg-gcp</artifactId> <version>${iceberg.version}</version> </dependency> Example The following example demonstrates a streaming pipeline that reads CDC events from an Apache Iceberg table, aggregates user clicks, and writes the results to another Apache Iceberg table.
- Managed I/O supports the following capabilities for Apache Iceberg: Catalogs Hadoop Hive REST-based catalogs BigQuery metastore (requires Apache Beam SDK 2.62.0 or later if not using Runner v2) Read capabilities Batch read Write capabilities Batch write Streaming write Dynamic destinations Dynamic table creation For BigQuery tables for Apache Iceberg , use the BigQueryIO connector with BigQuery Storage API.
- For more information on BigLake, see the documentation at https://cloud.google.com/bigquery/docs/blms-rest-catalog. <p>This pipeline can be used to process the output of {@link ApacheIcebergRestCatalogStreamingWrite}. / public class ApacheIcebergCdcRead { // Schema for the source table containing click events. public static final Schema SOURCE SCHEMA = Schema . builder (). addStringField ( "user id" ). addInt64Field ( "click count" ). build (); // Schema for the destination table containing aggregated click counts. public static final Schema DESTINATION SCHEMA = Schema . builder (). addStringField ( "user id" ). addInt64Field ( "total clicks" ). build (); / Pipeline options for this example. / public interface Options extends GcpOptions { @Description ( "The source Iceberg table to read CDC events from" ) @Validation.Required String getSourceTable (); void setSourceTable ( String sourceTable ); @Description ( "The destination Iceberg table to write aggregated results to" ) @Validation.Required String getDestinationTable (); void setDestinationTable ( String destinationTable ); @Description ( "Warehouse location for the Iceberg catalog" ) @Validation.Required String getWarehouse (); void setWarehouse ( String warehouse ); @Description ( "The URI for the REST catalog" ) @Default.String ( "https://biglake.googleapis.com/iceberg/v1beta/restcatalog" ) String getCatalogUri (); void setCatalogUri ( String value ); @Description ( "The name of the Iceberg catalog" ) @Validation.Required String getCatalogName (); void setCatalogName ( String catalogName ); } public static void main ( String [] args ) throws IOException { Options options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( Options . class ); // Note: The token expires in 1 hour.

### "BigQuery export to Parquet (via Storage API) template \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- BATCH , displayName = "BigQuery export to Parquet (via Storage API)" , description = "The BigQuery export to Parquet template is a batch pipeline that reads data from a BigQuery table and writes it to a Cloud Storage bucket in Parquet format. " + "This template utilizes the <a href=\"https://cloud.google.com/bigquery/docs/reference/storage\">BigQuery Storage API</a> to export the data." , optionsClass = BigQueryToParquetOptions . class , flexContainerName = "bigquery-to-parquet" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet" , contactInformation = "https://cloud.google.com/support" , requirements = { "The input BigQuery table must exist before running the pipeline." , "The output Cloud Storage bucket must exist before running the pipeline." }) public class BigQueryToParquet { / Logger for class. / private static final Logger LOG = LoggerFactory . getLogger ( BigQueryToParquet . class ); / File suffix for file to be written. / private static final String FILE SUFFIX = ".parquet" ; / Factory to create BigQueryStorageClients. / static class BigQueryStorageClientFactory { / Creates BigQueryStorage client for use in extracting table schema. @return BigQueryStorageClient / static BigQueryStorageClient create () { try { return BigQueryStorageClient . create (); } catch ( IOException e ) { LOG . error ( "Error connecting to BigQueryStorage API: " + e . getMessage ()); throw new RuntimeException ( e ); } } } / Factory to create ReadSessions. / static class ReadSessionFactory { / Creates ReadSession for schema extraction. @param client BigQueryStorage client used to create ReadSession. @param options BigQueryToParquetOptions options. @param tableReadOptions TableReadOptions that specify any fields in the table to filter on. @return session ReadSession object that contains the schema for the export. / static ReadSession create ( BigQueryStorageClient client , BigQueryToParquetOptions options , TableReadOptions tableReadOptions ) { String tableString = options . getTableRef (); TableReference tableReference = BigQueryHelpers . parseTableSpec ( tableString ); BigQueryOptions bigQueryOptions = options . as ( BigQueryOptions . class ); String parentProjectId = bigQueryOptions . getBigQueryProject () == null ? bigQueryOptions . getProject () : bigQueryOptions . getBigQueryProject (); String parentProjectIdResource = "projects/" + parentProjectId ; TableReferenceProto .
- InvalidArgumentException ; import com.google.api.services.bigquery.model.TableReference ; import com.google.cloud.bigquery.storage.v1beta1.BigQueryStorageClient ; import com.google.cloud.bigquery.storage.v1beta1.ReadOptions.TableReadOptions ; import com.google.cloud.bigquery.storage.v1beta1.Storage.CreateReadSessionRequest ; import com.google.cloud.bigquery.storage.v1beta1.Storage.ReadSession ; import com.google.cloud.bigquery.storage.v1beta1.TableReferenceProto ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.metadata.TemplateParameter ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2.templates.BigQueryToParquet.BigQueryToParquetOptions ; import com.google.common.base.Splitter ; import com.google.common.base.Strings ; import java.io.IOException ; import java.util.Arrays ; import java.util.List ; import org.apache.avro.Schema ; import org.apache.avro.generic.GenericRecord ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.PipelineResult ; import org.apache.beam.sdk.extensions.avro.coders.AvroCoder ; import org.apache.beam.sdk.io.FileIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryHelpers ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.TypedRead ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.TypedRead.Method ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryOptions ; import org.apache.beam.sdk.io.gcp.bigquery.SchemaAndRecord ; import org.apache.beam.sdk.io.parquet.ParquetIO ; import org.apache.beam.sdk.options.Default ; import org.apache.beam.sdk.options.PipelineOptions ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.Validation.Required ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; / The {@link BigQueryToParquet} pipeline exports data from a BigQuery table to Parquet file(s) in a Google Cloud Storage bucket. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/bigquery-to-parquet/README BigQuery to Parquet.md">README</a> for instructions on how to use or modify this template. / @Template ( name = "BigQuery to Parquet" , category = TemplateCategory .
- 2) Write records to Google Cloud Storage in Parquet format. / pipeline / Step 1: Read records via BigQueryIO using supplied schema as a PCollection of {@link GenericRecord}. / . apply ( "ReadFromBigQuery" , readFromBQ ) / Step 2: Write records to Google Cloud Storage as one or more Parquet files via {@link ParquetIO}. / . apply ( "WriteToParquet" , FileIO . < GenericRecord>write () . via ( ParquetIO . sink ( schema )) . to ( options . getBucket ()) . withNumShards ( options . getNumShards ()) . withSuffix ( FILE SUFFIX )); // Execute the pipeline and return the result. return pipeline . run (); } } What's next Learn about Dataflow templates .
- Builder builder = CreateReadSessionRequest . newBuilder () . setParent ( parentProjectIdResource ) . setReadOptions ( tableReadOptions ) . setTableReference ( storageTableRef ); try { return client . createReadSession ( builder . build ()); } catch ( InvalidArgumentException iae ) { LOG . error ( "Error creating ReadSession: " + iae . getMessage ()); throw new RuntimeException ( iae ); } } } / The {@link BigQueryToParquetOptions} class provides the custom execution options passed by the executor at the command-line. / public interface BigQueryToParquetOptions extends PipelineOptions { @TemplateParameter.BigQueryTable ( order = 1 , description = "BigQuery table to export" , groupName = "Source" , helpText = "The BigQuery input table location." , example = "your-project:your-dataset.your-table-name" ) @Required String getTableRef (); void setTableRef ( String tableRef ); @TemplateParameter.GcsWriteFile ( order = 2 , description = "Output Cloud Storage file(s)" , groupName = "Target" , helpText = "The Cloud Storage folder to write the Parquet files to." , example = "gs://your-bucket/export/" ) @Required String getBucket (); void setBucket ( String bucket ); @TemplateParameter.Integer ( order = 3 , optional = true , description = "Maximum output shards" , helpText = "The number of output file shards.

### Dataflow managed I/O \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/managed-io](https://docs.cloud.google.com/dataflow/docs/guides/managed-io)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Python Import the apache beam.transforms.managed module and call the managed.Read or managed.Write method.
- Specify which source or sink to instantiate, and pass in a set of configuration parameters, similar to the following: Map config = ImmutableMap . < String , Object>builder () . put ( "config1" , "abc" ) . put ( "config2" , 1 ); pipeline . apply ( Managed . read ( / Which source to read / ). withConfig ( config )) . getSinglePCollection (); You can also pass configuration parameters as a YAML file.
- Java --dataflowServiceOptions=managed transforms rolling upgrade window=never Python --dataflow service options=managed transforms rolling upgrade window=never Go --dataflow service options=managed transforms rolling upgrade window=never gcloud Use the gcloud dataflow jobs run command with the additional-experiments option.
- If you're using Flex Templates, use the gcloud dataflow flex-template run command. --additional-experiments=managed transforms rolling upgrade window=never Configuration API Managed I/O is a turnkey Apache Beam transform that provides a consistent API to configure sources and sinks.

### SDK version support status \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The following tables contain the support status for the Apache Beam 2.x SDKs, including the Apache Beam Python SDK, Apache Beam Java SDK, and the Apache Beam Go SDK: Java SDK version Status Supported components Details 2.72.0 Supported org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on March 30, 2027.
- This issue has been seen in SpannerIO in particular and manifests as a NoClassDefFoundError. org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed Deprecated on March 31, 2026.
- To mitigate the problem, downgrade to 2.66.0 (or before), or upgrade to 2.69 (or later) when available". org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on September 22, 2026.
- To mitigate the problem, downgrade to 2.66.0 (or before), or upgrade to 2.69 (or later) when available". org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on August 12, 2026.

