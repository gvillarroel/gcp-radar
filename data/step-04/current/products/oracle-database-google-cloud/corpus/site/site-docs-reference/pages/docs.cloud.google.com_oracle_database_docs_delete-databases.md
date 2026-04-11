---
title: "Delete databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/delete-databases
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/create-databases
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/delete-databases
  title: "Delete databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Guides
Send feedback
Delete databases
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to delete an Autonomous AI Database in
Google Cloud. To create a database,
see Create databases . To modify an existing
database, see Manage databases .
Before you begin
Set up the gcloud CLI and enable the API .
Enable the Oracle Database@Google Cloud API for the project.
Enable the Oracle Database@Google Cloud API
Confirm that you have the required roles necessary to create an instance:
autonomousDatabaseAdmin .
For more information on how to assign roles, see
Apply IAM roles .
Delete database
Warning: Deleting a database permanently removes the database. You can't
undo this later.
To delete your Autonomous AI Database, complete the following steps:
Console
Go to the Autonomous AI Database Service page in the Google Cloud console.
Go to Autonomous AI Database Service
Click the name of the database you want to delete.
Click Delete at the top of the page.
In the Delete database instance dialog, type the Database ID
to confirm deletion of your database.
Click Confirm .
Your database is deleted.
gcloud
You can use the gcloud oracle-database autonomous-databases delete
command to delete a database.
gcloud oracle-database autonomous-databases delete DATABASE_ID
--location= REGION_ID
Replace the following:
DATABASE_ID : the identifier for the database that you
want to delete.
REGION_ID : the region for the database that you want
to delete.
C#
using Google.Cloud.OracleDatabase.V1 ;
using Google.LongRunning ;
using Google.Protobuf.WellKnownTypes ;
using System.Threading.Tasks ;
public sealed partial class GeneratedOracleDatabaseClientSnippets
{
/// <summary>Snippet for DeleteAutonomousDatabaseAsync</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public async Task DeleteAutonomousDatabaseAsync ()
{
// Create client
OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient . CreateAsync ();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/autonomousDatabases/[AUTONOMOUS_DATABASE]" ;
// Make the request
Operation<Empty , OperationMetadata > response = await oracleDatabaseClient . DeleteAutonomousDatabaseAsync ( name );
// Poll until the returned long-running operation is complete
Operation<Empty , OperationMetadata > completedResponse = await response . PollUntilCompletedAsync ();
// Retrieve the operation result
Empty result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty , OperationMetadata > retrievedResponse = await oracleDatabaseClient . PollOnceDeleteAutonomousDatabaseAsync ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
Empty retrievedResult = retrievedResponse . Result ;
}
}
}
Go
package main
import (
"context"
oracledatabase "cloud.google.com/go/oracledatabase/apiv1"
oracledatabasepb "cloud.google.com/go/oracledatabase/apiv1/oracledatabasepb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := oracledatabase . NewClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & oracledatabasepb . DeleteAutonomousDatabaseRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/oracledatabase/apiv1/oracledatabasepb#DeleteAutonomousDatabaseRequest.
}
op , err := c . DeleteAutonomousDatabase ( ctx , req )
if err != nil {
// TODO: Handle error.
}
err = op . Wait ( ctx )
if err != nil {
// TODO: Handle error.
}
}
Java
import com.google.api.core. ApiFuture ;
import com.google.cloud.oracledatabase.v1. AutonomousDatabaseName ;
import com.google.cloud.oracledatabase.v1. DeleteAutonomousDatabaseRequest ;
import com.google.cloud.oracledatabase.v1. OracleDatabaseClient ;
import com.google.longrunning. Operation ;
public class AsyncDeleteAutonomousDatabase {
public static void main ( String [] args ) throws Exception {
asyncDeleteAutonomousDatabase ();
}
public static void asyncDeleteAutonomousDatabase () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) {
DeleteAutonomousDatabaseRequest request =
DeleteAutonomousDatabaseRequest . newBuilder ()
. setName (
AutonomousDatabaseName . of ( "[PROJECT]" , "[LOCATION]" , "[AUTONOMOUS_DATABASE]" )
. toString ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future =
oracleDatabaseClient . deleteAutonomousDatabaseCallable (). futureCall ( request );
// Do something.
future . get ();
}
}
}
Node.js
/**
* This snippet has been automatically generated and should be regarded as a code template only.
* It will require modifications to work.
* It may require correct/in-range values for request initialization.
* TODO(developer): Uncomment these variables before running the sample.
*/
/**
* Required. The name of the resource in the following format:
* projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}.
*/
// const name = 'abc123'
/**
* Optional. An optional ID to identify the request. This value is used to
* identify duplicate requests. If you make a request with the same request ID
* and the original request is still in progress or completed, the server
* ignores the second request. This prevents clients from
* accidentally creating duplicate commitments.
* The request ID must be a valid UUID with the exception that zero UUID is
* not supported (00000000-0000-0000-0000-000000000000).
*/
// const requestId = 'abc123'
// Imports the Oracledatabase library
const { OracleDatabaseClient } = require ( ' @google-cloud/oracledatabase ' ). v1 ;
// Instantiates a client
const oracledatabaseClient = new OracleDatabaseClient ();
async function callDeleteAutonomousDatabase () {
// Construct request
const request = {
name ,
};
// Run request
const [ operation ] = await oracledatabaseClient . deleteAutonomousDatabase ( request );
const [ response ] = await operation . promise ();
console . log ( response );
}
callDeleteAutonomousDatabase ();
PHP
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient;
use Google\Cloud\OracleDatabase\V1\DeleteAutonomousDatabaseRequest;
use Google\Rpc\Status;
/**
* Deletes a single Autonomous Database.
*
* @param string $formattedName The name of the resource in the following format:
* projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. Please see
* {@see OracleDatabaseClient::autonomousDatabaseName()} for help formatting this field.
*/
function delete_autonomous_database_sample(string $formattedName): void
{
// Create a client.
$oracleDatabaseClient = new OracleDatabaseClient();
// Prepare the request message.
$request = (new DeleteAutonomousDatabaseRequest())
->setName($formattedName);
// Call the API and handle any network failures.
try {
/** @var OperationResponse $response */
$response = $oracleDatabaseClient->deleteAutonomousDatabase($request);
$response->pollUntilComplete();
if ($response->operationSucceeded()) {
printf('Operation completed successfully.' . PHP_EOL);
} else {
/** @var Status $error */
$error = $response->getError();
printf('Operation failed with error data: %s' . PHP_EOL, $error->serializeToJsonString());
}
} catch (ApiException $ex) {
printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
}
}
/**
* Helper to execute the sample.
*
* This sample has been automatically generated and should be regarded as a code
* template only. It will require modifications to work:
* - It may require correct/in-range values for request initialization.
* - It may require specifying regional endpoints when creating the service client,
* please see the apiEndpoint client configuration option for more details.
*/
function callSample(): void
{
$formattedName = OracleDatabaseClient::autonomousDatabaseName(
'[PROJECT]',
'[LOCATION]',
'[AUTONOMOUS_DATABASE]'
);
delete_autonomous_database_sample($formattedName);
}
Python
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import oracledatabase_v1
def sample_delete_autonomous_database ():
# Create a client
client = oracledatabase_v1 . OracleDatabaseClient ()
# Initialize request argument(s)
request = oracledatabase_v1 . DeleteAutonomousDatabaseRequest (
name = "name_value" ,
)
# Make the request
operation = client . delete_autonomous_database ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ()
# Handle the response
print ( response )
Ruby
require "google/cloud/oracle_database/v1"
##
# Snippet for the delete_autonomous_database call in the OracleDatabase service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::OracleDatabase::V1::OracleDatabase::Client#delete_autonomous_database.
#
def delete_autonomous_database
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: OracleDatabase :: V1 :: OracleDatabase :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: OracleDatabase :: V1 :: DeleteAutonomousDatabaseRequest . new
# Call the delete_autonomous_database method.
result = client . delete_autonomous_database request
# The returned object is of type Gapic::Operation. You can use it to
# check the status of an operation, cancel it, or wait for results.
# Here is how to wait for a response.
result . wait_until_done! timeout : 60
if result . response?
p result . response
else
puts "No response received."
end
end
What's next
Learn how to create
or manage an Autonomous AI Database.
Configure Identity and Access Management roles for a database.
Use monitoring metrics to monitor
your databases.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
