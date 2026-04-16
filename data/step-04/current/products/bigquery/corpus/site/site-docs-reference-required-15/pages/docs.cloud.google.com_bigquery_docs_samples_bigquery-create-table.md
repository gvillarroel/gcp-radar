---
title: "Create table with schema \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table
  title: "Create table with schema \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Create table with schema
Stay organized with collections
Save and categorize content based on your preferences.
Create a table with a schema.
Explore further
For detailed documentation that includes this code sample, see the following:
Create and use tables
Specifying a schema
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
using Google.Cloud.BigQuery.V2 ;
public class BigQueryCreateTable
{
public BigQueryTable CreateTable (
string projectId = "your-project-id" ,
string datasetId = "your_dataset_id"
)
{
BigQueryClient client = BigQueryClient . Create ( projectId );
var dataset = client . GetDataset ( datasetId );
// Create schema for new table.
var schema = new TableSchemaBuilder
{
{ "full_name" , BigQueryDbType . String },
{ "age" , BigQueryDbType . Int64 }
}. Build ();
// Create the table
return dataset . CreateTable ( tableId : "your_table_id" , schema : schema );
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
"time"
"cloud.google.com/go/bigquery"
)
// createTableExplicitSchema demonstrates creating a new BigQuery table and specifying a schema.
func createTableExplicitSchema ( projectID , datasetID , tableID string ) error {
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
{ Name : "age" , Type : bigquery . IntegerFieldType },
}
metaData := & bigquery . TableMetadata {
Schema : sampleSchema ,
ExpirationTime : time . Now (). AddDate ( 1 , 0 , 0 ), // Table will be automatically deleted in 1 year.
}
tableRef := client . Dataset ( datasetID ). Table ( tableID )
if err := tableRef . Create ( ctx , metaData ); err != nil {
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
import com.google.cloud.bigquery. Schema ;
import com.google.cloud.bigquery. StandardSQLTypeName ;
import com.google.cloud.bigquery. StandardTableDefinition ;
import com.google.cloud.bigquery. TableDefinition ;
import com.google.cloud.bigquery. TableId ;
import com.google.cloud.bigquery. TableInfo ;
public class CreateTable {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
String tableName = "MY_TABLE_NAME" ;
Schema schema =
Schema . of (
Field . of ( "stringField" , StandardSQLTypeName . STRING ),
Field . of ( "booleanField" , StandardSQLTypeName . BOOL ));
createTable ( datasetName , tableName , schema );
}
public static void createTable ( String datasetName , String tableName , Schema schema ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
TableId tableId = TableId . of ( datasetName , tableName );
TableDefinition tableDefinition = StandardTableDefinition . of ( schema );
TableInfo tableInfo = TableInfo . newBuilder ( tableId , tableDefinition ). build ();
bigquery . create ( tableInfo );
System . out . println ( "Table created successfully" );
} catch ( BigQueryException e ) {
System . out . println ( "Table was not created. \n" + e . toString ());
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
// Import the Google Cloud client library and create a client
const { BigQuery } = require ( ' @google-cloud/bigquery ' );
const bigquery = new BigQuery ();
async function createTable () {
// Creates a new table named "my_table" in "my_dataset".
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const datasetId = "my_dataset";
// const tableId = "my_table";
// const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean';
// For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource
const options = {
schema : schema ,
location : 'US' ,
};
// Create a new table in the dataset
const [ table ] = await bigquery
. dataset ( datasetId )
. createTable ( tableId , options );
console . log ( `Table ${ table . id } created.` );
}
PHP
Before trying this sample, follow the PHP setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery PHP API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
use Google\Cloud\BigQuery\BigQueryClient;
/**
* Creates a table with the given ID and Schema
*
* @param string $projectId The project Id of your Google Cloud Project.
* @param string $datasetId The BigQuery dataset ID.
* @param string $tableId The BigQuery table ID.
* @param string $fields Json Encoded string of schema of the table. For eg,
* $fields = json_encode([
* [
* 'name' => 'field1',
* 'type' => 'string',
* 'mode' => 'required'
* ],
* [
* 'name' => 'field2',
* 'type' => 'integer'
* ],
* ]);
*/
function create_table(
string $projectId,
string $datasetId,
string $tableId,
string $fields
): void {
$bigQuery = new BigQueryClient([
'projectId' => $projectId,
]);
$dataset = $bigQuery->dataset($datasetId);
$fields = json_decode($fields);
$schema = ['fields' => $fields];
$table = $dataset->createTable($tableId, ['schema' => $schema]);
printf('Created table %s' . PHP_EOL, $tableId);
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
bigquery . SchemaField ( "full_name" , "STRING" , mode = "REQUIRED" ),
bigquery . SchemaField ( "age" , "INTEGER" , mode = "REQUIRED" ),
]
table = bigquery . Table ( table_id , schema = schema )
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
def create_table dataset_id = "my_dataset"
bigquery = Google :: Cloud :: Bigquery . new
dataset = bigquery . dataset dataset_id
table_id = "my_table"
table = dataset . create_table table_id do | updater |
updater . string "full_name" , mode : :required
updater . integer "age" , mode : :required
end
puts "Created table: #{ table_id } "
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
schema = << EOF
[
{
"name" : "ID" ,
"type" : "INT64" ,
"mode" : "NULLABLE" ,
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
