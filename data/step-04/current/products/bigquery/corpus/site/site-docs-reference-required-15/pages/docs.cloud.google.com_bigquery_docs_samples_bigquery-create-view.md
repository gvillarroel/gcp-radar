---
title: "Create a view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-view
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-view
  title: "Create a view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Create a view
Stay organized with collections
Save and categorize content based on your preferences.
Create a view within a dataset.
Explore further
For detailed documentation that includes this code sample, see the following:
Create logical views
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
// createView demonstrates creation of a BigQuery logical view.
func createView ( projectID , datasetID , tableID string ) error {
// projectID := "my-project-id"
// datasetID := "mydatasetid"
// tableID := "mytableid"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
meta := & bigquery . TableMetadata {
// This example shows how to create a view of the shakespeare sample dataset, which
// provides word frequency information. This view restricts the results to only contain
// results for works that contain the "king" in the title, e.g. King Lear, King Henry V, etc.
ViewQuery : "SELECT word, word_count, corpus, corpus_date FROM `bigquery-public-data.samples.shakespeare` WHERE corpus LIKE '%king%'" ,
}
if err := client . Dataset ( datasetID ). Table ( tableID ). Create ( ctx , meta ); err != nil {
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
import com.google.cloud.bigquery. TableId ;
import com.google.cloud.bigquery. TableInfo ;
import com.google.cloud.bigquery. ViewDefinition ;
// Sample to create a view
public class CreateView {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
String tableName = "MY_TABLE_NAME" ;
String viewName = "MY_VIEW_NAME" ;
String query =
String . format (
"SELECT TimestampField, StringField, BooleanField FROM %s.%s" , datasetName , tableName );
createView ( datasetName , viewName , query );
}
public static void createView ( String datasetName , String viewName , String query ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
TableId tableId = TableId . of ( datasetName , viewName );
ViewDefinition viewDefinition =
ViewDefinition . newBuilder ( query ). setUseLegacySql ( false ). build ();
bigquery . create ( TableInfo . of ( tableId , viewDefinition ));
System . out . println ( "View created successfully" );
} catch ( BigQueryException e ) {
System . out . println ( "View was not created. \n" + e . toString ());
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
async function createView () {
// Creates a new view named "my_shared_view" in "my_dataset".
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const myDatasetId = "my_dataset"
// const myTableId = "my_shared_view"
// const projectId = "bigquery-public-data";
// const sourceDatasetId = "usa_names"
// const sourceTableId = "usa_1910_current";
const myDataset = await bigquery . dataset ( myDatasetId );
// For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource
const options = {
view : `SELECT name
FROM \` ${ projectId } . ${ sourceDatasetId } . ${ sourceTableId } \`
LIMIT 10` ,
};
// Create a new view in the dataset
const [ view ] = await myDataset . createTable ( myTableId , options );
console . log ( `View ${ view . id } created.` );
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
client = bigquery . Client ()
view_id = "my-project.my_dataset.my_view"
source_id = "my-project.my_dataset.my_table"
view = bigquery . Table ( view_id )
# The source table in this example is created from a CSV file in Google
# Cloud Storage located at
# `gs://cloud-samples-data/bigquery/us-states/us-states.csv`. It contains
# 50 US states, while the view returns only those states with names
# starting with the letter 'W'.
view . view_query = f "SELECT name, post_abbr FROM ` { source_id } ` WHERE name LIKE 'W%'"
# Make an API request to create the view.
view = client . create_table ( view )
print ( f "Created { view . table_type } : { str ( view . reference ) } " )
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
table_id = "myview"
view {
query = "SELECT global_id, faa_identifier, name, latitude, longitude FROM `bigquery-public-data.faa.us_airports`"
use_legacy_sql = false
}
}
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
