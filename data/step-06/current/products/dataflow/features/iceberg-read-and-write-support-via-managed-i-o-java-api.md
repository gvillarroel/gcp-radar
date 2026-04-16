---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.762Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Iceberg read and write support via Managed I/O Java API"
feature_slug: "iceberg-read-and-write-support-via-managed-i-o-java-api"
latest_feature_date: "2024-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/cdc-read-from-iceberg-biglake"
  - "https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status"
  - "https://docs.cloud.google.com/dataflow/docs/guides/managed-io"
keywords:
  - "iceberg"
  - "read"
  - "write"
  - "via"
  - "managed"
  - "java"
  - "dataflow"
  - "supports"
---

# Iceberg read and write support via Managed I/O Java API

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow Managed I/O Java API supports reading and writing Apache Iceberg tables.

## Extended Definition

Dataflow Managed I/O Java API supports reading and writing Apache Iceberg tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/cdc-read-from-iceberg-biglake](https://docs.cloud.google.com/dataflow/docs/guides/cdc-read-from-iceberg-biglake)
- [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- [https://docs.cloud.google.com/dataflow/docs/guides/managed-io](https://docs.cloud.google.com/dataflow/docs/guides/managed-io)

## Supporting Pages

### "CDC Read from Apache Iceberg with BigLake REST Catalog \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/cdc-read-from-iceberg-biglake](https://docs.cloud.google.com/dataflow/docs/guides/cdc-read-from-iceberg-biglake)
- Source ID: `site-docs-reference-required-3`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GoogleCredentials ; import com.google.common.collect.ImmutableMap ; import java.io.IOException ; import java.util.Map ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.coders.RowCoder ; import org.apache.beam.sdk.extensions.gcp.options.GcpOptions ; import org.apache.beam.sdk.managed.Managed ; import org.apache.beam.sdk.options.Default ; import org.apache.beam.sdk.options.Description ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.Validation ; import org.apache.beam.sdk.schemas.Schema ; import org.apache.beam.sdk.transforms.MapElements ; import org.apache.beam.sdk.transforms.Sum ; import org.apache.beam.sdk.transforms.windowing.FixedWindows ; import org.apache.beam.sdk.transforms.windowing.Window ; import org.apache.beam.sdk.values.KV ; import org.apache.beam.sdk.values.PCollection ; import org.apache.beam.sdk.values.Row ; import org.apache.beam.sdk.values.TypeDescriptors ; import org.joda.time.Duration ; / A streaming pipeline that reads CDC events from an Iceberg table, aggregates user clicks, and writes the results to another Iceberg table.
- Dependencies Add the following dependencies to your project: Java <dependency> <groupId>org.apache.beam</groupId> <artifactId>beam-sdks-java-managed</artifactId> <version>${beam.version}</version> </dependency> <dependency> <groupId>org.apache.beam</groupId> <artifactId>beam-sdks-java-io-iceberg</artifactId> <version>${beam.version}</version> </dependency> <dependency> <groupId>org.apache.iceberg</groupId> <artifactId>iceberg-gcp</artifactId> <version>${iceberg.version}</version> </dependency> Example The following example demonstrates a streaming pipeline that reads CDC events from an Apache Iceberg table, aggregates user clicks, and writes the results to another Apache Iceberg table.
- Managed I/O supports the following capabilities for Apache Iceberg: Catalogs Hadoop Hive REST-based catalogs BigQuery metastore (requires Apache Beam SDK 2.62.0 or later if not using Runner v2) Read capabilities Batch read Write capabilities Batch write Streaming write Dynamic destinations Dynamic table creation For BigQuery tables for Apache Iceberg , use the BigQueryIO connector with BigQuery Storage API.
- For more information on BigLake, see the documentation at https://cloud.google.com/bigquery/docs/blms-rest-catalog. <p>This pipeline can be used to process the output of {@link ApacheIcebergRestCatalogStreamingWrite}. / public class ApacheIcebergCdcRead { // Schema for the source table containing click events. public static final Schema SOURCE SCHEMA = Schema . builder (). addStringField ( "user id" ). addInt64Field ( "click count" ). build (); // Schema for the destination table containing aggregated click counts. public static final Schema DESTINATION SCHEMA = Schema . builder (). addStringField ( "user id" ). addInt64Field ( "total clicks" ). build (); / Pipeline options for this example. / public interface Options extends GcpOptions { @Description ( "The source Iceberg table to read CDC events from" ) @Validation.Required String getSourceTable (); void setSourceTable ( String sourceTable ); @Description ( "The destination Iceberg table to write aggregated results to" ) @Validation.Required String getDestinationTable (); void setDestinationTable ( String destinationTable ); @Description ( "Warehouse location for the Iceberg catalog" ) @Validation.Required String getWarehouse (); void setWarehouse ( String warehouse ); @Description ( "The URI for the REST catalog" ) @Default.String ( "https://biglake.googleapis.com/iceberg/v1beta/restcatalog" ) String getCatalogUri (); void setCatalogUri ( String value ); @Description ( "The name of the Iceberg catalog" ) @Validation.Required String getCatalogName (); void setCatalogName ( String catalogName ); } public static void main ( String [] args ) throws IOException { Options options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( Options . class ); // Note: The token expires in 1 hour.

### SDK version support status \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following tables contain the support status for the Apache Beam 2.x SDKs, including the Apache Beam Python SDK, Apache Beam Java SDK, and the Apache Beam Go SDK: Java SDK version Status Supported components Details 2.72.0 Supported org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on March 30, 2027.
- To mitigate the problem, downgrade to 2.66.0 (or before), or upgrade to 2.69 (or later) when available". org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on September 22, 2026.
- To mitigate the problem, downgrade to 2.66.0 (or before), or upgrade to 2.69 (or later) when available". org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on August 12, 2026.
- This issue has been seen in SpannerIO in particular and manifests as a NoClassDefFoundError. org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed Deprecated on March 31, 2026.

### Dataflow managed I/O \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/managed-io](https://docs.cloud.google.com/dataflow/docs/guides/managed-io)
- Source ID: `site-docs-reference-2`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Java --dataflowServiceOptions=managed transforms rolling upgrade window=never Python --dataflow service options=managed transforms rolling upgrade window=never Go --dataflow service options=managed transforms rolling upgrade window=never gcloud Use the gcloud dataflow jobs run command with the additional-experiments option.
- Java --dataflowServiceOptions=managed transforms rolling upgrade window= DAYS Python --dataflow service options=managed transforms rolling upgrade window= DAYS gcloud Use the gcloud dataflow jobs run command with the additional-experiments option.
- Python Import the apache beam.transforms.managed module and call the managed.Read or managed.Write method.
- Specify which source or sink to instantiate, and pass in a set of configuration parameters, similar to the following: Map config = ImmutableMap . < String , Object>builder () . put ( "config1" , "abc" ) . put ( "config2" , 1 ); pipeline . apply ( Managed . read ( / Which source to read / ). withConfig ( config )) . getSinglePCollection (); You can also pass configuration parameters as a YAML file.

