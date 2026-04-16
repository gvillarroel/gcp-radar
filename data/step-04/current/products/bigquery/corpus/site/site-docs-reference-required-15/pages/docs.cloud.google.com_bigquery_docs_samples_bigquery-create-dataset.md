---
title: "Create a dataset in BigQuery. \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset
  title: "Create a dataset in BigQuery. \_|\_ Google Cloud Documentation"
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
Create a dataset in BigQuery.
Stay organized with collections
Save and categorize content based on your preferences.
Sample demonstrating how to create a dataset in BigQuery. Give the dataset a unique name. Note, that the geographic location for the location can not be changed once the dataset is created.
Explore further
For detailed documentation that includes this code sample, see the following:
Create datasets
Get started with authentication
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
public class BigQueryCreateDataset
{
public BigQueryDataset CreateDataset (
string projectId = "your-project-id" ,
string location = "US"
)
{
BigQueryClient client = BigQueryClient . Create ( projectId );
var dataset = new Dataset
{
// Specify the geographic location where the dataset should reside.
Location = location
};
// Create the dataset
return client . CreateDataset (
datasetId : "your_new_dataset_id" , dataset );
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
// createDataset demonstrates creation of a new dataset using an explicit destination location.
func createDataset ( projectID , datasetID string ) error {
// projectID := "my-project-id"
// datasetID := "mydataset"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
meta := & bigquery . DatasetMetadata {
Location : "US" , // See https://cloud.google.com/bigquery/docs/locations
}
if err := client . Dataset ( datasetID ). Create ( ctx , meta ); err != nil {
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
import com.google.cloud.bigquery. Dataset ;
import com.google.cloud.bigquery. DatasetInfo ;
public class CreateDataset {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
createDataset ( datasetName );
}
public static void createDataset ( String datasetName ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
String location = "US" ;
DatasetInfo datasetInfo = DatasetInfo . newBuilder ( datasetName ). setLocation ( location ). build ();
Dataset newDataset = bigquery . create ( datasetInfo );
String newDatasetName = newDataset . getDatasetId (). getDataset ();
System . out . println ( newDatasetName + " created successfully" );
} catch ( BigQueryException e ) {
System . out . println ( "Dataset was not created. \n" + e . toString ());
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
async function createDataset () {
// Creates a new dataset named "my_dataset".
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const datasetId = "my_new_dataset";
// Specify the geographic location where the dataset should reside
const options = {
location : 'US' ,
};
// Create a new dataset
const [ dataset ] = await bigquery . createDataset ( datasetId , options );
console . log ( `Dataset ${ dataset . id } created.` );
}
createDataset ();
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
* Creates a dataset with the given dataset ID.
*
* @param string $projectId The project Id of your Google Cloud Project.
* @param string $datasetId The BigQuery dataset ID.
*/
function create_dataset(string $projectId, string $datasetId): void
{
$bigQuery = new BigQueryClient([
'projectId' => $projectId,
]);
$dataset = $bigQuery->createDataset($datasetId);
printf('Created dataset %s' . PHP_EOL, $datasetId);
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
# TODO(developer): Set dataset_id to the ID of the dataset to create.
# dataset_id = "{}.your_dataset".format(client.project)
# Construct a full Dataset object to send to the API.
dataset = bigquery . Dataset ( dataset_id )
# TODO(developer): Specify the geographic location where the dataset should reside.
dataset . location = "US"
# Send the dataset to the API for creation, with an explicit timeout.
# Raises google.api_core.exceptions.Conflict if the Dataset already
# exists within the project.
dataset = client . create_dataset ( dataset , timeout = 30 ) # Make an API request.
print ( "Created dataset {} . {} " . format ( client . project , dataset . dataset_id ))
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
def create_dataset dataset_id = "my_dataset" , location = "US"
bigquery = Google :: Cloud :: Bigquery . new
# Create the dataset in a specified geographic location
bigquery . create_dataset dataset_id , location : location
puts "Created dataset: #{ dataset_id } "
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
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
