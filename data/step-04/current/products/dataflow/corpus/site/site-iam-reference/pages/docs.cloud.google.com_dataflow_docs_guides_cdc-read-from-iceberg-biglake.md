---
title: "CDC Read from Apache Iceberg with BigLake REST Catalog \_|\_ Cloud Dataflow\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/cdc-read-from-iceberg-biglake
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/cdc-read-from-iceberg-biglake
  title: "CDC Read from Apache Iceberg with BigLake REST Catalog \_|\_ Cloud Dataflow\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
CDC Read from Apache Iceberg with BigLake REST Catalog
Stay organized with collections
Save and categorize content based on your preferences.
Note: Managed I/O doesn't support
automatic upgrades for
Apache Iceberg CDC.
To read Change Data Capture (CDC) events from Apache Iceberg using the BigLake REST Catalog, use the
Apache Beam managed I/O connector .
Managed I/O supports the following capabilities for Apache Iceberg:
Catalogs
Hadoop
Hive
REST-based catalogs
BigQuery metastore
(requires Apache Beam SDK 2.62.0 or later if not using Runner v2)
Read capabilities
Batch read
Write capabilities
Batch write
Streaming write
Dynamic destinations
Dynamic table creation
For BigQuery tables for Apache Iceberg ,
use the
BigQueryIO connector
with BigQuery Storage API. The table must already exist; dynamic table creation is
not supported.
Limitations
Apache Iceberg CDC is only supported using the Managed API. Managed transforms service features are not yet enabled. Expect changes that affect backward compatibility
The CDC Managed API only reads append-only snapshots. Full CDC is not yet available.
Prerequisites
Set up BigLake. Configure your Google Cloud project with the
required permissions by following
Use the BigLake Metastore with the Iceberg REST catalog .
Make sure that you understand the limitations of BigLake
Iceberg REST Catalog described on that page.
Create a source Iceberg table. The example shown here assumes that you
have an Apache Iceberg table. To create one, you can use the pipeline
shown in
Streaming Write to Apache Iceberg with BigLake REST Catalog .
Dependencies
Add the following dependencies to your project:
Java
<dependency>
<groupId>org.apache.beam</groupId>
<artifactId>beam-sdks-java-managed</artifactId>
<version>${beam.version}</version>
</dependency>
<dependency>
<groupId>org.apache.beam</groupId>
<artifactId>beam-sdks-java-io-iceberg</artifactId>
<version>${beam.version}</version>
</dependency>
<dependency>
<groupId>org.apache.iceberg</groupId>
<artifactId>iceberg-gcp</artifactId>
<version>${iceberg.version}</version>
</dependency>
Example
The following example demonstrates a streaming pipeline that reads CDC events from an Apache Iceberg table, aggregates user clicks, and writes the results to another Apache Iceberg table.
Java
To authenticate to Dataflow, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.auth.oauth2. GoogleCredentials ;
import com.google.common.collect.ImmutableMap ;
import java.io.IOException ;
import java.util.Map ;
import org.apache.beam.sdk.Pipeline ;
import org.apache.beam.sdk.coders.RowCoder ;
import org.apache.beam.sdk.extensions.gcp.options.GcpOptions ;
import org.apache.beam.sdk.managed.Managed ;
import org.apache.beam.sdk.options.Default ;
import org.apache.beam.sdk.options.Description ;
import org.apache.beam.sdk.options.PipelineOptionsFactory ;
import org.apache.beam.sdk.options.Validation ;
import org.apache.beam.sdk.schemas.Schema ;
import org.apache.beam.sdk.transforms.MapElements ;
import org.apache.beam.sdk.transforms.Sum ;
import org.apache.beam.sdk.transforms.windowing.FixedWindows ;
import org.apache.beam.sdk.transforms.windowing.Window ;
import org.apache.beam.sdk.values.KV ;
import org.apache.beam.sdk.values.PCollection ;
import org.apache.beam.sdk.values.Row ;
import org.apache.beam.sdk.values.TypeDescriptors ;
import org.joda.time.Duration ;
/**
* A streaming pipeline that reads CDC events from an Iceberg table, aggregates user clicks, and
* writes the results to another Iceberg table. For more information on BigLake,
* see the documentation at https://cloud.google.com/bigquery/docs/blms-rest-catalog.
*
* <p>This pipeline can be used to process the output of {@link
* ApacheIcebergRestCatalogStreamingWrite}.
*/
public class ApacheIcebergCdcRead {
// Schema for the source table containing click events.
public static final Schema SOURCE_SCHEMA =
Schema . builder (). addStringField ( "user_id" ). addInt64Field ( "click_count" ). build ();
// Schema for the destination table containing aggregated click counts.
public static final Schema DESTINATION_SCHEMA =
Schema . builder (). addStringField ( "user_id" ). addInt64Field ( "total_clicks" ). build ();
/** Pipeline options for this example. */
public interface Options extends GcpOptions {
@Description ( "The source Iceberg table to read CDC events from" )
@Validation.Required
String getSourceTable ();
void setSourceTable ( String sourceTable );
@Description ( "The destination Iceberg table to write aggregated results to" )
@Validation.Required
String getDestinationTable ();
void setDestinationTable ( String destinationTable );
@Description ( "Warehouse location for the Iceberg catalog" )
@Validation.Required
String getWarehouse ();
void setWarehouse ( String warehouse );
@Description ( "The URI for the REST catalog" )
@Default.String ( "https://biglake.googleapis.com/iceberg/v1beta/restcatalog" )
String getCatalogUri ();
void setCatalogUri ( String value );
@Description ( "The name of the Iceberg catalog" )
@Validation.Required
String getCatalogName ();
void setCatalogName ( String catalogName );
}
public static void main ( String [] args ) throws IOException {
Options options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( Options . class );
// Note: The token expires in 1 hour. Users may need to re-run the pipeline.
// Future updates to Iceberg and the BigLake Metastore will support token refreshing.
Map<String , String > catalogProps =
ImmutableMap . < String , String>builder ()
. put ( "type" , "rest" )
. put ( "uri" , options . getCatalogUri ())
. put ( "warehouse" , options . getWarehouse ())
. put ( "header.x-goog-user-project" , options . getProject ())
. put (
"header.Authorization" ,
"Bearer "
+ GoogleCredentials . getApplicationDefault ()
. createScoped ( "https://www.googleapis.com/auth/cloud-platform" )
. refreshAccessToken ()
. getTokenValue ())
. put ( "rest-metrics-reporting-enabled" , "false" )
. build ();
Pipeline p = Pipeline . create ( options );
// Configure the Iceberg CDC read
Map<String , Object > icebergReadConfig =
ImmutableMap . < String , Object>builder ()
. put ( "table" , options . getSourceTable ())
. put ( "catalog_name" , options . getCatalogName ())
. put ( "catalog_properties" , catalogProps )
. put ( "streaming" , Boolean . TRUE )
. put ( "poll_interval_seconds" , 20 )
. build ();
PCollection<Row> cdcEvents =
p . apply ( "ReadFromIceberg" , Managed . read ( Managed . ICEBERG_CDC ). withConfig ( icebergReadConfig ))
. getSinglePCollection ()
. setRowSchema ( SOURCE_SCHEMA );
PCollection<Row> aggregatedRows =
cdcEvents
. apply ( "ApplyWindow" , Window . into ( FixedWindows . of ( Duration . standardSeconds ( 30 ))))
. apply (
"ExtractUserAndCount" ,
MapElements . into (
TypeDescriptors . kvs ( TypeDescriptors . strings (), TypeDescriptors . longs ()))
. via (
row - > {
String userId = row . getString ( "user_id" );
Long clickCount = row . getInt64 ( "click_count" );
return KV . of ( userId , clickCount == null ? 0 L : clickCount );
}))
. apply ( "SumClicksPerUser" , Sum . longsPerKey ())
. apply (
"FormatToRow" ,
MapElements . into ( TypeDescriptors . rows ())
. via (
kv - >
Row . withSchema ( DESTINATION_SCHEMA )
. withFieldValue ( "user_id" , kv . getKey ())
. withFieldValue ( "total_clicks" , kv . getValue ())
. build ()))
. setCoder ( RowCoder . of ( DESTINATION_SCHEMA ));
// Configure the Iceberg write
Map<String , Object > icebergWriteConfig =
ImmutableMap . < String , Object>builder ()
. put ( "table" , options . getDestinationTable ())
. put ( "catalog_properties" , catalogProps )
. put ( "catalog_name" , options . getCatalogName ())
. put ( "triggering_frequency_seconds" , 30 )
. build ();
aggregatedRows . apply (
"WriteToIceberg" , Managed . write ( Managed . ICEBERG ). withConfig ( icebergWriteConfig ));
p . run ();
}
}
What's next
Learn more about Managed I/O .
Learn more about BigLake REST Catalog .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
