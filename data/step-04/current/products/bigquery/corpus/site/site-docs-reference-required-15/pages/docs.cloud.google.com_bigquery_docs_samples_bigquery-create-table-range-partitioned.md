---
title: "Create an integer-range partitioned table \_|\_ BigQuery \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned
  title: "Create an integer-range partitioned table \_|\_ BigQuery \_|\_ Google Cloud\
    \ Documentation"
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
Create an integer-range partitioned table
Stay organized with collections
Save and categorize content based on your preferences.
Create a new integer-range partitioned table in an existing dataset.
Explore further
For detailed documentation that includes this code sample, see the following:
Creating partitioned tables
Code sample
C#
Before trying this sample, follow the C# setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery C# API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
using Google.Apis.Bigquery.v2.Data ;
using Google.Cloud.BigQuery.V2 ;
public class BigQueryCreateTableRangePartitioned
{
public BigQueryTable CreateTable ( string projectId , string datasetId , string tableId )
{
BigQueryClient client = BigQueryClient . Create ( projectId );
var dataset = client . GetDataset ( datasetId );
// Note: The field must be a top- level, NULLABLE/REQUIRED field.
// The only supported type is INTEGER/INT64.
var partitioning = new RangePartitioning
{
Field = "integerField" ,
Range = new RangePartitioning . RangeData
{
Start = 1 ,
Interval = 2 ,
End = 10
}
};
var schema = new TableSchemaBuilder
{
{ "integerField" , BigQueryDbType . Int64 },
{ "stringField" , BigQueryDbType . String },
{ "booleanField" , BigQueryDbType . Bool },
{ "dateField" , BigQueryDbType . Date }
}. Build ();
var table = new Table
{
RangePartitioning = partitioning ,
Schema = schema
};
return dataset . CreateTable ( tableId , table );
}
}
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
// createTableRangeParitioned demonstrates creating a table and specifying a
// range partitioning configuration.
func createTableRangePartitioned ( projectID , datasetID , tableID string ) error {
// projectID := "my-project-id"
// datasetID := "mydatasetid"
// tableID := "mytableid"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
sampleSchema := bigquery . Schema {
{ Name : "full_name" , Type : bigquery . StringFieldType },
{ Name : "city" , Type : bigquery . StringFieldType },
{ Name : "zipcode" , Type : bigquery . IntegerFieldType },
}
metadata := & bigquery . TableMetadata {
RangePartitioning : & bigquery . RangePartitioning {
Field : "zipcode" ,
Range : & bigquery . RangePartitioningRange {
Start : 0 ,
End : 100000 ,
Interval : 10 ,
},
},
Schema : sampleSchema ,
}
tableRef := client . Dataset ( datasetID ). Table ( tableID )
if err := tableRef . Create ( ctx , metadata ); err != nil {
return err
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
import com.google.cloud.bigquery. Field ;
import com.google.cloud.bigquery. RangePartitioning ;
import com.google.cloud.bigquery. Schema ;
import com.google.cloud.bigquery. StandardSQLTypeName ;
import com.google.cloud.bigquery. StandardTableDefinition ;
import com.google.cloud.bigquery. TableId ;
import com.google.cloud.bigquery. TableInfo ;
// Sample to create a range partitioned table
public class CreateRangePartitionedTable {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
String tableName = "MY_TABLE_NAME" ;
Schema schema =
Schema . of (
Field . of ( "integerField" , StandardSQLTypeName . INT64 ),
Field . of ( "stringField" , StandardSQLTypeName . STRING ),
Field . of ( "booleanField" , StandardSQLTypeName . BOOL ),
Field . of ( "dateField" , StandardSQLTypeName . DATE ));
createRangePartitionedTable ( datasetName , tableName , schema );
}
public static void createRangePartitionedTable (
String datasetName , String tableName , Schema schema ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
TableId tableId = TableId . of ( datasetName , tableName );
// Note: The field must be a top- level, NULLABLE/REQUIRED field.
// The only supported type is INTEGER/INT64
RangePartitioning partitioning =
RangePartitioning . newBuilder ()
. setField ( "integerField" )
. setRange (
RangePartitioning . Range . newBuilder ()
. setStart ( 1L )
. setInterval ( 2L )
. setEnd ( 10L )
. build ())
. build ();
StandardTableDefinition tableDefinition =
StandardTableDefinition . newBuilder ()
. setSchema ( schema )
. setRangePartitioning ( partitioning )
. build ();
TableInfo tableInfo = TableInfo . newBuilder ( tableId , tableDefinition ). build ();
bigquery . create ( tableInfo );
System . out . println ( "Range partitioned table created successfully" );
} catch ( BigQueryException e ) {
System . out . println ( "Range partitioned table was not created. \n" + e . toString ());
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Node.js API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
// Import the Google Cloud client library
const { BigQuery } = require ( ' @google-cloud/bigquery ' );
const bigquery = new BigQuery ();
async function createTableRangePartitioned () {
// Creates a new integer range partitioned table named "my_table"
// in "my_dataset".
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const datasetId = "my_dataset";
// const tableId = "my_table";
const schema = [
{ name : 'fullName' , type : 'STRING' },
{ name : 'city' , type : 'STRING' },
{ name : 'zipcode' , type : ' INTEGER ' },
];
// To use integer range partitioning, select a top-level REQUIRED or
// NULLABLE column with INTEGER / INT64 data type. Values that are
// outside of the range of the table will go into the UNPARTITIONED
// partition. Null values will be in the NULL partition.
const rangePartition = {
field : 'zipcode' ,
range : {
start : 0 ,
end : 100000 ,
interval : 10 ,
},
};
// For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource
const options = {
schema : schema ,
rangePartitioning : rangePartition ,
};
// Create a new table in the dataset
const [ table ] = await bigquery
. dataset ( datasetId )
. createTable ( tableId , options );
console . log ( `Table ${ table . id } created with integer range partitioning: ` );
console . log ( table . metadata . rangePartitioning );
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
from google.cloud import bigquery
# Construct a BigQuery client object.
client = bigquery . Client ()
# TODO(developer): Set table_id to the ID of the table to create.
# table_id = "your-project.your_dataset.your_table_name"
schema = [
bigquery . SchemaField ( "full_name" , "STRING" ),
bigquery . SchemaField ( "city" , "STRING" ),
bigquery . SchemaField ( "zipcode" , "INTEGER" ),
]
table = bigquery . Table ( table_id , schema = schema )
table . range_partitioning = bigquery . RangePartitioning (
# To use integer range partitioning, select a top-level REQUIRED /
# NULLABLE column with INTEGER / INT64 data type.
field = "zipcode" ,
range_ = bigquery . PartitionRange ( start = 0 , end = 100000 , interval = 10 ),
)
table = client . create_table ( table ) # Make an API request.
print (
"Created table {} . {} . {} " . format ( table . project , table . dataset_id , table . table_id )
)
Ruby
Before trying this sample, follow the Ruby setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Ruby API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
require "google/cloud/bigquery"
##
# Creates a table with range partitioning.
#
# @param dataset_id [String] The ID of the dataset to create the table in.
# @param table_id [String] The ID of the table to create.
def create_range_partitioned_table dataset_id , table_id
bigquery = Google :: Cloud :: Bigquery . new
dataset = bigquery . dataset dataset_id
table = dataset . create_table table_id do | t |
t . schema do | s |
s . integer "integerField" , mode : :required
s . string "stringField" , mode : :nullable
s . boolean "booleanField" , mode : :nullable
s . date "dateField" , mode : :nullable
end
t . range_partitioning_field = "integerField"
t . range_partitioning_start = 1
t . range_partitioning_interval = 2
t . range_partitioning_end = 10
end
puts "Created range-partitioned table: #{ table . table_id } "
end
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
For more information, see the
Terraform provider reference documentation .
resource "google_bigquery_dataset" "default" {
dataset_id = "mydataset"
default_partition_expiration_ms = 2592000000 # 30 days
default_table_expiration_ms = 31536000000 # 365 days
description = "dataset description"
location = "US"
max_time_travel_hours = 96 # 4 days
labels = {
billing_group = "accounting" ,
pii = "sensitive"
}
}
resource "google_bigquery_table" "default" {
dataset_id = google_bigquery_dataset.default.dataset_id
table_id = "mytable"
range_partitioning {
field = "ID"
range {
start = 0
end = 1000
interval = 10
}
}
require_partition_filter = true
schema = << EOF
[
{
"name" : "ID" ,
"type" : "INT64" ,
"description" : "Item ID"
},
{
"name" : "Item" ,
"type" : "STRING" ,
"mode" : "NULLABLE"
}
]
EOF
}
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
