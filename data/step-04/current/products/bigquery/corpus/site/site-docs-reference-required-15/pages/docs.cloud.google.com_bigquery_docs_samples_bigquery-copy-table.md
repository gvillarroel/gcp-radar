---
title: "Copy a single-source table \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table
  title: "Copy a single-source table \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Copy a single-source table
Stay organized with collections
Save and categorize content based on your preferences.
Copy a single-source table to a given destination.
Explore further
For detailed documentation that includes this code sample, see the following:
Manage tables
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
using System ;
public class BigQueryCopyTable
{
public void CopyTable (
string projectId = "your-project-id" ,
string destinationDatasetId = "your_dataset_id"
)
{
BigQueryClient client = BigQueryClient . Create ( projectId );
TableReference sourceTableRef = new TableReference ()
{
TableId = "shakespeare" ,
DatasetId = "samples" ,
ProjectId = "bigquery-public-data"
};
TableReference destinationTableRef = client . GetTableReference (
destinationDatasetId , "destination_table" );
BigQueryJob job = client . CreateCopyJob (
sourceTableRef , destinationTableRef )
. PollUntilCompleted () // Wait for the job to complete.
. ThrowOnAnyError ();
// Retrieve destination table
BigQueryTable destinationTable = client . GetTable ( destinationTableRef );
Console . WriteLine (
$"Copied {destinationTable. Resource .NumRows} rows from table "
+ $"{sourceTableRef.DatasetId}.{sourceTableRef.TableId} "
+ $"to {destinationTable. FullyQualifiedId }."
);
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
// copyTable demonstrates copying a table from a source to a destination, and
// allowing the copy to overwrite existing data by using truncation.
func copyTable ( projectID , datasetID , srcID , dstID string ) error {
// projectID := "my-project-id"
// datasetID := "mydataset"
// srcID := "sourcetable"
// dstID := "destinationtable"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
dataset := client . Dataset ( datasetID )
copier := dataset . Table ( dstID ). CopierFrom ( dataset . Table ( srcID ))
copier . WriteDisposition = bigquery . WriteTruncate
job , err := copier . Run ( ctx )
if err != nil {
return err
}
status , err := job . Wait ( ctx )
if err != nil {
return err
}
if err := status . Err (); err != nil {
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
import com.google.cloud.bigquery. CopyJobConfiguration ;
import com.google.cloud.bigquery. Job ;
import com.google.cloud.bigquery. JobInfo ;
import com.google.cloud.bigquery. TableId ;
public class CopyTable {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String destinationDatasetName = "MY_DESTINATION_DATASET_NAME" ;
String destinationTableId = "MY_DESTINATION_TABLE_NAME" ;
String sourceDatasetName = "MY_SOURCE_DATASET_NAME" ;
String sourceTableId = "MY_SOURCE_TABLE_NAME" ;
copyTable ( sourceDatasetName , sourceTableId , destinationDatasetName , destinationTableId );
}
public static void copyTable (
String sourceDatasetName ,
String sourceTableId ,
String destinationDatasetName ,
String destinationTableId ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
TableId sourceTable = TableId . of ( sourceDatasetName , sourceTableId );
TableId destinationTable = TableId . of ( destinationDatasetName , destinationTableId );
// For more information on CopyJobConfiguration see:
// https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/bigquery/JobConfiguration.html
CopyJobConfiguration configuration =
CopyJobConfiguration . newBuilder ( destinationTable , sourceTable ). build ();
// For more information on Job see:
// https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html
Job job = bigquery . create ( JobInfo . of ( configuration ));
// Blocks until this job completes its execution, either failing or succeeding.
Job completedJob = job . waitFor ();
if ( completedJob == null ) {
System . out . println ( "Job not executed since it no longer exists." );
return ;
} else if ( completedJob . getStatus (). getError () != null ) {
System . out . println (
"BigQuery was unable to copy table due to an error: \n" + job . getStatus (). getError ());
return ;
}
System . out . println ( "Table copied successfully." );
} catch ( BigQueryException | InterruptedException e ) {
System . out . println ( "Table copying job was interrupted. \n" + e . toString ());
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
async function copyTable () {
// Copies src_dataset:src_table to dest_dataset:dest_table.
/**
* TODO(developer): Uncomment the following lines before running the sample
*/
// const srcDatasetId = "my_src_dataset";
// const srcTableId = "my_src_table";
// const destDatasetId = "my_dest_dataset";
// const destTableId = "my_dest_table";
// Copy the table contents into another table
const [ job ] = await bigquery
. dataset ( srcDatasetId )
. table ( srcTableId )
. copy ( bigquery . dataset ( destDatasetId ). table ( destTableId ));
console . log ( `Job ${ job . id } completed.` );
// Check the job's status for errors
const errors = job . status . errors ;
if ( errors && errors . length > 0 ) {
throw errors ;
}
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
* Copy the contents of table from source table to destination table.
*
* @param string $projectId The project Id of your Google Cloud Project.
* @param string $datasetId The BigQuery dataset ID.
* @param string $sourceTableId Source tableId in dataset.
* @param string $destinationTableId Destination tableId in dataset.
*/
function copy_table(
string $projectId,
string $datasetId,
string $sourceTableId,
string $destinationTableId
): void {
$bigQuery = new BigQueryClient([
'projectId' => $projectId,
]);
$dataset = $bigQuery->dataset($datasetId);
$sourceTable = $dataset->table($sourceTableId);
$destinationTable = $dataset->table($destinationTableId);
$copyConfig = $sourceTable->copy($destinationTable);
$job = $sourceTable->runJob($copyConfig);
// check if the job is complete
$job->reload();
if (!$job->isComplete()) {
throw new \Exception('Job has not yet completed', 500);
}
// check if the job has errors
if (isset($job->info()['status']['errorResult'])) {
$error = $job->info()['status']['errorResult']['message'];
printf('Error running job: %s' . PHP_EOL, $error);
} else {
print('Table copied successfully' . PHP_EOL);
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
from google.cloud import bigquery
# Construct a BigQuery client object.
client = bigquery . Client ()
# TODO(developer): Set source_table_id to the ID of the original table.
# source_table_id = "your-project.source_dataset.source_table"
# TODO(developer): Set destination_table_id to the ID of the destination table.
# destination_table_id = "your-project.destination_dataset.destination_table"
job = client . copy_table ( source_table_id , destination_table_id )
job . result () # Wait for the job to complete.
print ( "A copy of the table created." )
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
