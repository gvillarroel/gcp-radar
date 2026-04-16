---
title: "Create external table with hive partitioning \_|\_ BigQuery \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned
  title: "Create external table with hive partitioning \_|\_ BigQuery \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Samples
Create external table with hive partitioning
Stay organized with collections
Save and categorize content based on your preferences.
Create an external table using hive partitioning.
Code sample
Go
Before trying this sample, follow the Go setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Go API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import (
"context"
"fmt"
"cloud.google.com/go/bigquery"
)
// createTableExternalHivePartitioned demonstrates creating an external table with hive partitioning.
func createTableExternalHivePartitioned ( projectID , datasetID , tableID string ) error {
// projectID := "my-project-id"
// datasetID := "mydatasetid"
// tableID := "mytableid"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
// First, we'll define table metadata to represent a table that's backed by parquet files held in
// Cloud Storage.
//
// Example file:
// gs://cloud-samples-data/bigquery/hive-partitioning-samples/autolayout/dt=2020-11-15/file1.parquet
metadata := & bigquery . TableMetadata {
Description : "An example table that demonstrates hive partitioning against external parquet files" ,
ExternalDataConfig : & bigquery . ExternalDataConfig {
SourceFormat : bigquery . Parquet ,
SourceURIs : [] string { "gs://cloud-samples-data/bigquery/hive-partitioning-samples/autolayout/*" },
AutoDetect : true ,
},
}
// The layout of the files in here is compatible with the layout requirements for hive partitioning,
// so we can add an optional Hive partitioning configuration to leverage the object paths for deriving
// partitioning column information.
//
// For more information on how partitions are extracted, see:
// https://cloud.google.com/bigquery/docs/hive-partitioned-queries-gcs
//
// We have a "/dt=YYYY-MM-DD/" path component in our example files as documented above. Autolayout will
// expose this as a column named "dt" of type DATE.
metadata . ExternalDataConfig . HivePartitioningOptions = & bigquery . HivePartitioningOptions {
Mode : bigquery . AutoHivePartitioningMode ,
SourceURIPrefix : "gs://cloud-samples-data/bigquery/hive-partitioning-samples/autolayout/" ,
RequirePartitionFilter : true ,
}
// Create the external table.
tableRef := client . Dataset ( datasetID ). Table ( tableID )
if err := tableRef . Create ( ctx , metadata ); err != nil {
return fmt . Errorf ( "table creation failure: %w" , err )
}
return nil
}
Java
Before trying this sample, follow the Java setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Java API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud.bigquery. BigQuery ;
import com.google.cloud.bigquery. BigQueryException ;
import com.google.cloud.bigquery. BigQueryOptions ;
import com.google.cloud.bigquery. ExternalTableDefinition ;
import com.google.cloud.bigquery. FormatOptions ;
import com.google.cloud.bigquery. HivePartitioningOptions ;
import com.google.cloud.bigquery. TableId ;
import com.google.cloud.bigquery. TableInfo ;
// Sample to create external table using hive partitioning
public class CreateTableExternalHivePartitioned {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
String tableName = "MY_TABLE_NAME" ;
String sourceUri = "gs://cloud-samples-data/bigquery/hive-partitioning-samples/customlayout/*" ;
String sourceUriPrefix =
"gs://cloud-samples-data/bigquery/hive-partitioning-samples/customlayout/{pkey:STRING}/" ;
createTableExternalHivePartitioned ( datasetName , tableName , sourceUriPrefix , sourceUri );
}
public static void createTableExternalHivePartitioned (
String datasetName , String tableName , String sourceUriPrefix , String sourceUri ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
// Configuring partitioning options
HivePartitioningOptions hivePartitioningOptions =
HivePartitioningOptions . newBuilder ()
. setMode ( "CUSTOM" )
. setRequirePartitionFilter ( true )
. setSourceUriPrefix ( sourceUriPrefix )
. build ();
TableId tableId = TableId . of ( datasetName , tableName );
ExternalTableDefinition customTable =
ExternalTableDefinition . newBuilder ( sourceUri , FormatOptions . parquet ())
. setAutodetect ( true )
. setHivePartitioningOptions ( hivePartitioningOptions )
. build ();
bigquery . create ( TableInfo . of ( tableId , customTable ));
System . out . println ( "External table created using hivepartitioningoptions" );
} catch ( BigQueryException e ) {
System . out . println ( "External table was not created" + e . toString ());
}
}
}
Python
Before trying this sample, follow the Python setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Python API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
# Demonstrates creating an external table with hive partitioning.
# TODO(developer): Set table_id to the ID of the table to create.
table_id = "your-project.your_dataset.your_table_name"
# TODO(developer): Set source uri.
# Example file:
# gs://cloud-samples-data/bigquery/hive-partitioning-samples/autolayout/dt=2020-11-15/file1.parquet
uri = "gs://cloud-samples-data/bigquery/hive-partitioning-samples/autolayout/*"
# TODO(developer): Set source uri prefix.
source_uri_prefix = (
"gs://cloud-samples-data/bigquery/hive-partitioning-samples/autolayout/"
)
from google.cloud import bigquery
# Construct a BigQuery client object.
client = bigquery . Client ()
# Configure the external data source.
external_config = bigquery . ExternalConfig ( "PARQUET" )
external_config . source_uris = [ uri ]
external_config . autodetect = True
# Configure partitioning options.
hive_partitioning_opts = bigquery . HivePartitioningOptions ()
# The layout of the files in here is compatible with the layout requirements for hive partitioning,
# so we can add an optional Hive partitioning configuration to leverage the object paths for deriving
# partitioning column information.
# For more information on how partitions are extracted, see:
# https://cloud.google.com/bigquery/docs/hive-partitioned-queries-gcs
# We have a "/dt=YYYY-MM-DD/" path component in our example files as documented above.
# Autolayout will expose this as a column named "dt" of type DATE.
hive_partitioning_opts . mode = "AUTO"
hive_partitioning_opts . require_partition_filter = True
hive_partitioning_opts . source_uri_prefix = source_uri_prefix
external_config . hive_partitioning = hive_partitioning_opts
table = bigquery . Table ( table_id )
table . external_data_configuration = external_config
table = client . create_table ( table ) # Make an API request.
print (
"Created table {} . {} . {} " . format ( table . project , table . dataset_id , table . table_id )
)
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
