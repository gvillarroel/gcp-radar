---
title: "Copy multiple tables \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source
  title: "Copy multiple tables \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Copy multiple tables
Stay organized with collections
Save and categorize content based on your preferences.
Copy multiple source tables to a given destination.
Explore further
For detailed documentation that includes this code sample, see the following:
Manage tables
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
// copyMultiTable demonstrates using a copy job to copy multiple source tables into a single destination table.
func copyMultiTable ( projectID , srcDatasetID string , srcTableIDs [] string , dstDatasetID , dstTableID string ) error {
// projectID := "my-project-id"
// srcDatasetID := "sourcedataset"
// srcTableIDs := []string{"table1","table2"}
// dstDatasetID = "destinationdataset"
// dstTableID = "destinationtable"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
srcDataset := client . Dataset ( srcDatasetID )
dstDataset := client . Dataset ( dstDatasetID )
var tableRefs [] * bigquery . Table
for _ , v := range srcTableIDs {
tableRefs = append ( tableRefs , srcDataset . Table ( v ))
}
copier := dstDataset . Table ( dstTableID ). CopierFrom ( tableRefs ... )
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
import java.util.Arrays ;
public class CopyMultipleTables {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String destinationDatasetName = "MY_DATASET_NAME" ;
String destinationTableId = "MY_TABLE_NAME" ;
String sourceTable1Id = "MY_SOURCE_TABLE_1" ;
String sourceTable2Id = "MY_SOURCE_TABLE_2" ;
copyMultipleTables ( destinationDatasetName , destinationTableId , sourceTable1Id , sourceTable2Id );
}
public static void copyMultipleTables (
String destinationDatasetName ,
String destinationTableId ,
String sourceTable1Id ,
String sourceTable2Id ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
TableId destinationTable = TableId . of ( destinationDatasetName , destinationTableId );
TableId sourceTable1 = TableId . of ( destinationDatasetName , sourceTable1Id );
TableId sourceTable2 = TableId . of ( destinationDatasetName , sourceTable2Id );
// For more information on CopyJobConfiguration see:
// https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/bigquery/JobConfiguration.html
CopyJobConfiguration configuration =
CopyJobConfiguration . newBuilder (
destinationTable , Arrays . asList ( sourceTable1 , sourceTable2 ))
. build ();
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
"BigQuery was unable to copy tables due to an error: \n" + job . getStatus (). getError ());
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
// Import the Google Cloud client library
const { BigQuery } = require ( ' @google-cloud/bigquery ' );
const bigquery = new BigQuery ();
async function copyTableMultipleSource () {
// Copy multiple source tables to a given destination.
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const datasetId = "my_dataset";
// sourceTable = 'my_table';
// destinationTable = 'testing';
// Create a client
const dataset = bigquery . dataset ( datasetId );
const metadata = {
createDisposition : 'CREATE_NEVER' ,
writeDisposition : 'WRITE_TRUNCATE' ,
};
// Create table references
const table = dataset . table ( sourceTable );
const yourTable = dataset . table ( destinationTable );
// Copy table
const [ apiResponse ] = await table . copy ( yourTable , metadata );
console . log ( apiResponse . configuration . copy );
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
# TODO(developer): Set dest_table_id to the ID of the destination table.
# dest_table_id = "your-project.your_dataset.your_table_name"
# TODO(developer): Set table_ids to the list of the IDs of the original tables.
# table_ids = ["your-project.your_dataset.your_table_name", ...]
job = client . copy_table ( table_ids , dest_table_id ) # Make an API request.
job . result () # Wait for the job to complete.
print ( "The tables {} have been appended to {} " . format ( table_ids , dest_table_id ))
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
