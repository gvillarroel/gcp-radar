---
title: "Create a routine with DDL \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl
  title: "Create a routine with DDL \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Create a routine with DDL
Stay organized with collections
Save and categorize content based on your preferences.
Create a routine using a DDL query.
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
// createRoutineDDL demonstrates creating a new BigQuery UDF using a DDL query.
func createRoutineDDL ( projectID , datasetID , routineID string ) error {
// projectID := "my-project-id"
// datasetID := "mydatasetid"
// routineID := "myroutineid"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
routineName , err := client . Dataset ( datasetID ). Routine ( routineID ). Identifier ( bigquery . StandardSQLID )
if err != nil {
return fmt . Errorf ( "couldn't generate identifier: %w" , err )
}
sql := fmt . Sprintf ( `CREATE FUNCTION %s(
arr ARRAY<STRUCT<name STRING, val INT64> >
) AS (
(SELECT SUM(IF(elem.name = "foo",elem.val,null)) FROM UNNEST(arr) AS elem)
)` , routineName )
job , err := client . Query ( sql ). Run ( ctx )
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
import com.google.cloud.bigquery. Job ;
import com.google.cloud.bigquery. JobInfo ;
import com.google.cloud.bigquery. QueryJobConfiguration ;
// Sample to create a routine using DDL
public class CreateRoutineDdl {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String projectId = "MY_PROJECT_ID" ;
String datasetId = "MY_DATASET_ID" ;
String routineId = "MY_ROUTINE_ID" ;
String sql =
"CREATE FUNCTION "
+ "`"
+ projectId
+ "."
+ datasetId
+ "."
+ routineId
+ "`"
+ "( arr ARRAY<STRUCT<name STRING, val INT64>>) AS "
+ "( (SELECT SUM(IF(elem.name = \"foo\",elem.val,null)) FROM UNNEST(arr) AS elem))" ;
createRoutineDdl ( sql );
}
public static void createRoutineDdl ( String sql ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
QueryJobConfiguration config = QueryJobConfiguration . newBuilder ( sql ). build ();
// create a routine using query and it will wait to complete job.
Job job = bigquery . create ( JobInfo . of ( config ));
job = job . waitFor ();
if ( job . isDone ()) {
System . out . println ( "Routine created successfully" );
} else {
System . out . println ( "Routine was not created" );
}
} catch ( BigQueryException | InterruptedException e ) {
System . out . println ( "Routine was not created. \n" + e . toString ());
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
async function createRoutineDDL () {
// Creates a routine using DDL.
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// projectId = 'my_project';
// const datasetId = 'my_dataset';
// const routineId = 'my_routine';
const query = `CREATE FUNCTION \` ${ projectId } . ${ datasetId } . ${ routineId } \`(
arr ARRAY<STRUCT<name STRING, val INT64> >
) AS (
(SELECT SUM(IF(elem.name = "foo",elem.val,null)) FROM UNNEST(arr) AS elem)
)` ;
const options = {
query : query ,
};
// Run the query as a job
const [ job ] = await bigquery . createQueryJob ( options );
console . log ( `Job ${ job . id } started.` );
// Wait for the query to finish
await job . getQueryResults ();
console . log ( `Routine ${ routineId } created.` );
}
createRoutineDDL ();
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
# TODO(developer): Choose a fully-qualified ID for the routine.
# routine_id = "my-project.my_dataset.my_routine"
sql = """
CREATE FUNCTION ` {} `(
arr ARRAY<STRUCT<name STRING, val INT64> >
) AS (
(SELECT SUM(IF(elem.name = "foo",elem.val,null)) FROM UNNEST(arr) AS elem)
)
""" . format (
routine_id
)
query_job = client . query ( sql ) # Make an API request.
query_job . result () # Wait for the job to complete.
print ( "Created routine {} " . format ( query_job . ddl_target_routine ))
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
