---
title: "Create a routine \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine
  title: "Create a routine \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Create a routine
Stay organized with collections
Save and categorize content based on your preferences.
Create a routine within an existing dataset.
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
// createRoutine demonstrates creating a new BigQuery UDF using the routine API.
func createRoutine ( projectID , datasetID , routineID string ) error {
// projectID := "my-project-id"
// datasetID := "mydatasetid"
// routineID := "myroutineid"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
metaData := & bigquery . RoutineMetadata {
Type : "SCALAR_FUNCTION" ,
Language : "SQL" ,
Body : "x * 3" ,
Arguments : [] * bigquery . RoutineArgument {
{ Name : "x" , DataType : & bigquery . StandardSQLDataType { TypeKind : "INT64" }},
},
}
routineRef := client . Dataset ( datasetID ). Routine ( routineID )
if err := routineRef . Create ( ctx , metaData ); err != nil {
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
import com.google.cloud.bigquery. RoutineArgument ;
import com.google.cloud.bigquery. RoutineId ;
import com.google.cloud.bigquery. RoutineInfo ;
import com.google.cloud.bigquery. StandardSQLDataType ;
import com.google.cloud.bigquery. StandardSQLTypeName ;
import com.google.common.collect.ImmutableList ;
// Sample to create a routine
public class CreateRoutine {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
String routineName = "MY_ROUTINE_NAME" ;
createRoutine ( datasetName , routineName );
}
public static void createRoutine ( String datasetName , String routineName ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
RoutineId routineId = RoutineId . of ( datasetName , routineName );
RoutineInfo routineInfo =
RoutineInfo . newBuilder ( routineId )
. setRoutineType ( "SCALAR_FUNCTION" )
. setLanguage ( "SQL" )
. setBody ( "x * 3" )
. setArguments (
ImmutableList . of (
RoutineArgument . newBuilder ()
. setName ( "x" )
. setDataType (
StandardSQLDataType . newBuilder ( StandardSQLTypeName . INT64 ). build ())
. build ()))
. build ();
bigquery . create ( routineInfo );
System . out . println ( "Routine created successfully" );
} catch ( BigQueryException e ) {
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
async function createRoutine () {
// Creates a new routine named "my_routine" in "my_dataset".
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const datasetId = 'my_dataset';
// const routineId = 'my_routine';
const dataset = bigquery . dataset ( datasetId );
// Create routine reference
let routine = dataset . routine ( routineId );
const config = {
arguments : [
{
name : 'x' ,
dataType : {
typeKind : 'INT64' ,
},
},
],
definitionBody : 'x * 3' ,
routineType : 'SCALAR_FUNCTION' ,
returnType : {
typeKind : 'INT64' ,
},
};
// Make API call
[ routine ] = await routine . create ( config );
console . log ( `Routine ${ routineId } created.` );
}
createRoutine ();
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
# TODO(developer): Choose a fully qualified ID for the routine.
# routine_id = "my-project.my_dataset.my_routine"
routine = bigquery . Routine (
routine_id ,
type_ = "SCALAR_FUNCTION" ,
language = "SQL" ,
body = "x * 3" ,
arguments = [
bigquery . RoutineArgument (
name = "x" ,
data_type = bigquery . StandardSqlDataType (
type_kind = bigquery . StandardSqlTypeNames . INT64
),
)
],
)
routine = client . create_routine ( routine ) # Make an API request.
print ( "Created routine {} " . format ( routine . reference ))
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
