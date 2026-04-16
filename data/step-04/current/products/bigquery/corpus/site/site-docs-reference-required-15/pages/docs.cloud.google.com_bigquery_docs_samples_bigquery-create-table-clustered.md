---
title: "Create a clustered table \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-clustered
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-clustered
  title: "Create a clustered table \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Create a clustered table
Stay organized with collections
Save and categorize content based on your preferences.
Create a clustered table.
Explore further
For detailed documentation that includes this code sample, see the following:
Create clustered tables
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
"time"
"cloud.google.com/go/bigquery"
)
// createTableClustered demonstrates creating a BigQuery table with advanced properties like
// partitioning and clustering features.
func createTableClustered ( projectID , datasetID , tableID string ) error {
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
{ Name : "timestamp" , Type : bigquery . TimestampFieldType },
{ Name : "origin" , Type : bigquery . StringFieldType },
{ Name : "destination" , Type : bigquery . StringFieldType },
{ Name : "amount" , Type : bigquery . NumericFieldType },
}
metaData := & bigquery . TableMetadata {
Schema : sampleSchema ,
TimePartitioning : & bigquery . TimePartitioning {
Field : "timestamp" ,
Expiration : 90 * 24 * time . Hour ,
},
Clustering : & bigquery . Clustering {
Fields : [] string { "origin" , "destination" },
},
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
import com.google.cloud.bigquery. Clustering ;
import com.google.cloud.bigquery. Field ;
import com.google.cloud.bigquery. Schema ;
import com.google.cloud.bigquery. StandardSQLTypeName ;
import com.google.cloud.bigquery. StandardTableDefinition ;
import com.google.cloud.bigquery. TableId ;
import com.google.cloud.bigquery. TableInfo ;
import com.google.cloud.bigquery. TimePartitioning ;
import com.google.common.collect.ImmutableList ;
import java.util.List ;
public class CreateClusteredTable {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
String tableName = "MY_TABLE_NAME" ;
Schema schema =
Schema . of (
Field . of ( "name" , StandardSQLTypeName . STRING ),
Field . of ( "post_abbr" , StandardSQLTypeName . STRING ),
Field . of ( "date" , StandardSQLTypeName . DATE ));
createClusteredTable ( datasetName , tableName , schema , ImmutableList . of ( "name" , "post_abbr" ));
}
public static void createClusteredTable (
String datasetName , String tableName , Schema schema , List<String> clusteringFields ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
TableId tableId = TableId . of ( datasetName , tableName );
TimePartitioning partitioning = TimePartitioning . of ( TimePartitioning . Type . DAY );
// Clustering fields will be consisted of fields mentioned in the schema.
// BigQuery supports clustering for both partitioned and non-partitioned tables.
Clustering clustering = Clustering . newBuilder (). setFields ( clusteringFields ). build ();
StandardTableDefinition tableDefinition =
StandardTableDefinition . newBuilder ()
. setSchema ( schema )
. setTimePartitioning ( partitioning )
. setClustering ( clustering )
. build ();
TableInfo tableInfo = TableInfo . newBuilder ( tableId , tableDefinition ). build ();
bigquery . create ( tableInfo );
System . out . println ( "Clustered table created successfully" );
} catch ( BigQueryException e ) {
System . out . println ( "Clustered table was not created. \n" + e . toString ());
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
async function createTableClustered () {
// Creates a new clustered table named "my_table" in "my_dataset".
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const datasetId = "my_dataset";
// const tableId = "my_table";
const schema = 'name:string, city:string, zipcode:integer' ;
// For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource
const options = {
schema : schema ,
clustering : {
fields : [ 'city' , 'zipcode' ],
},
};
// Create a new table in the dataset
const [ table ] = await bigquery
. dataset ( datasetId )
. createTable ( tableId , options );
console . log ( `Table ${ table . id } created with clustering:` );
console . log ( table . metadata . clustering );
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
table . clustering_fields = [ "city" , "zipcode" ]
table = client . create_table ( table ) # Make an API request.
print (
"Created clustered table {} . {} . {} " . format (
table . project , table . dataset_id , table . table_id
)
)
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
clustering = [ "ID", "Created" ]
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
},
{
"name" : "Created" ,
"type" : "TIMESTAMP"
}
]
EOF
}
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
