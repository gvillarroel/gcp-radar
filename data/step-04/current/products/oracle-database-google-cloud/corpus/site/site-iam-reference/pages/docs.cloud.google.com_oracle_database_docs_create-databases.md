---
title: "Create databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/create-databases
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/iam-overview
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/create-databases
  title: "Create databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
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
Create databases
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create an Autonomous AI Database in
Google Cloud.
In Oracle Database@Google Cloud, you can create an Autonomous AI Database in the
Google Cloud using Google Cloud console or the Oracle Database@Google Cloud API.
To see which regions you can create Autonomous AI Database resources in,
see Available configurations .
Before you begin
Set up the gcloud CLI and enable the API .
Confirm you have an active marketplace order for Oracle Database@Google Cloud.
Enable the Oracle Database@Google Cloud API for the project.
Enable the Oracle Database@Google Cloud API
Create an ODB Network and ODB Subnets .
An Autonomous AI Database requires at least a client subnet.
Confirm that you have the required roles necessary to create an instance:
autonomousDatabaseAdmin .
For more information on how to assign roles, see
Apply IAM roles .
Create an Autonomous AI Database
To create a Autonomous AI Database, do the following:
Note: To create an Autonomous AI Database with an ODB Network, use
gcloud CLI or API.
Console
Go to the Autonomous AI Database Service page in the Google Cloud console.
Go to Autonomous AI Database Service
Click Create .
In the Instance details section, complete the following:
Enter an Instance ID for your database. This field is permanent
and can't be modified once created.
Enter a Database name for your database. The database name must
meet the following criteria:
Only contain letters and numbers
Must start with a letter
Can't exceed the maximum limit of 30 characters
Enter a Database display name to help identify your database.
Select a Region for your database from the drop-down. The region
choice is permanent and can't be changed later.
Confirm your Oracle Cloud account . If the account name doesn't
match your Oracle Cloud account , confirm that you're in the correct
project for your database.
In the Workload configuration section, choose one of the following
workload types for your database:
Lakehouse : for fast insights from a single lakehouse for all your
data. This is built for AI Lakehouse workloads.
Transaction Processing : for high concurrency for short-running
queries and transactions. This is built for transactional workloads.
JSON : for JSON-centric application development that has built-in
JSON storage.
APEX : for a warehouse built for Oracle APEX application development
with creation and deployment of low-code application.
In the Database configuration section, complete the following:
Select your License type from the drop-down. If you choose
Bring Your Own License (BYOL) , then select the edition from the
Oracle Database Edition drop-down.
Select a database version in the Choose database version drop-down.
In the ECPU count field, enter your preferred count. The ECPU
count can range from 2 to 512.
Select the Enable compute autoscaling checkbox to let the system
to expand the specific ECPU count up to three times if the demand
increases. This is an optional field.
In the Storage (TiB) field, enter your preferred storage count.
Storage can range from 0.02 TiB to 384 TiB and is measured in gigabyte
(GiB) increments.
For AI Lakehouse workloads only, storage is measured in terabyte (TiB)
increments and must range from 1 TiB to 384 TiB.
Select the Enable storage autoscaling checkbox to let the system
to expand the reserved storage up to three times. This is an optional
field.
In the Backup retention section, enter the retention period for
backups in the Backup retention period in days field. This number
can range from 1 to 60 days.
Backups beyond the set retention period are automatically deleted.
Automatic backups are managed by Oracle and
billed separately ,
in addition to database storage.
In the Administrator credentials section, confirm the
administrator username and enter your password in the Password
field. Re-enter your password in the Confirm password field to
confirm.
In the Networking section, choose an access type to connect to
the Autonomous AI Database:
Secure access from everywhere : Selecting this access type allows
public network access using database credentials and a connection
wallet.
When you select this access type, the mTLS authentication is
automatically enabled as it is required for public network access.
Secure access from allowed IPs only : Selecting this access type
restricts access to the specified IP addresses and CIDR blocks.
To set up this access type, do the following:
Create access endpoints.
You can set up multiple access endpoints, but you must define at
least one. To set up an access endpoint, do the following:
Click Add a network access .
Select the IP notation type. You can specify either an IP
address or a CIDR block.
Depending on the notation you selected, enter the IP address
or the CIDR block for endpoints that you want to set up.
Click Done .
Repeat these steps to set up more access endpoints.
(Optional) Select the Require mutual TLS (mTLS) authentication
checkbox.
Private endpoint access only : Selecting this access type restricts
access to a private endpoint within a VPC network.
To set up this access type, do the following:
From the Network project list, select the project that contains
your ODB Network.
Select the ODB Network .
Select a Client subnet .
(Optional) In the Advanced network settings section, you can
provide a Private IP address and a Hostname prefix .
(Optional) To enable public access, select the
Allow public access checkbox and create access endpoints.
You can set up multiple access endpoints, but you must define at
least one. To set up an access endpoint, do the following:
Click Add a network access .
Select the IP notation type. You can specify either an IP
address or a CIDR block.
Depending on the notation you selected, enter the IP address
or the CIDR block for endpoints that you want to set up.
Click Done .
Repeat these steps to set up more access endpoints.
(Optional) Select the Require mutual TLS (mTLS) authentication
checkbox.
In the Operational notifications and announcements contact section,
enter the email addresses for all contacts you want to receive
notifications about this database.
In the Advanced settings section, you can optionally modify the
following settings:
Maintenance : this setting is set to Regular by default, which
patches your database on a regular schedule. You can modify this
setting to Early which patches your database one week before the
regular scheduled patch maintenance.
Management : this setting sets AL32UTF8 as the default for the
Character set and AL16UTF16 as the default for
National character set . Use the drop-downs to modify these
settings as necessary.
Note: The AL32UTF8 value is recommended by default for Character set .
Click Create to create your database.
gcloud
Use the gcloud oracle-database autonomous-databases create
command to create a database.
gcloud oracle - database autonomous - databases create DATABASE_ID \
-- project = PROJECT_ID \
-- location = REGION \
-- display - name = DISPLAY_NAME \
-- database = DATABASE_NAME \
-- admin - password = ADMIN_PASSWORD \
-- odb - subnet = projects / ODB_NETWORK_PROJECT_ID / locations / REGION / odbNetworks / ODB_NETWORK_ID / odbSubnets / ODB_SUBNET_ID \
-- properties - compute - count = COMPUTE_COUNT \
-- properties - db - version = DATABASE_VERSION \
-- properties - license - type = LICENSE_TYPE \
-- properties - db - workload = WORKLOAD_TYPE \
-- properties - data - storage - size - gb = STORAGE_SIZE
Replace the following:
DATABASE_ID : a permanent identifier for your instance.
The database ID can't be changed once set.
PROJECT_ID : the ID of your Google Cloud project
which contains the Autonomous AI Database.
REGION : the region for your database. The region is
permanent and can't be changed later. For a list of available regions,
see Available configurations .
DISPLAY_NAME : a name to identify your database. This
name is displayed in the Google Cloud console. The name must be
unique within your Google Cloud project.
DATABASE_NAME : a name for the database. Consider the following
guidelines:
Must begin with an alphabetic character.
Contain up to 30 alphanumeric characters.
Must not include special characters.
Must be unique in your Oracle Cloud Infrastructure (OCI) tenancy.
Not required if you're creating a cross-region disaster recovery
standby instance or cross-region Autonomous Data Guard standby instance.
ADMIN_PASSWORD : the password for the default administrator
user for your Autonomous AI Database.
For odb-subnet property, replace the following:
ODB_NETWORK_PROJECT_ID : the ID of your Google Cloud project
which contains your ODB Network. If you're using a
Shared VPC, then this is the ID of your host project.
REGION : the region of your ODB Network.
ODB_NETWORK_ID : the ID of your ODB Network.
ODB_SUBNET_ID : the ID of your ODB Subnet.
COMPUTE_COUNT : the compute capacity for your database.
DATABASE_VERSION : the Oracle database version for your
database.
LICENSE_TYPE : the license type associated with your
Oracle Database@Google Cloud order. Only accepted values are
bring-your-own-license or license-included .
WORKLOAD_TYPE : the workload type for your
Autonomous AI Database that must be one of the following:
ajd : Autonomous JSON Database
apex : Autonomous Database with Oracle APEX Application
Development workload type
dw : Autonomous Data Warehouse database
oltp : Autonomous Transaction Processing database
STORAGE_SIZE : your preferred storage count. Storage can range
from 0.02 TiB to 384 TiB and is measured in gigabyte (GiB) increments.
For Data Warehouse workloads only, storage is measured in terabyte (TiB)
increments and must range from 1 TiB to 384 TiB.
API
To create an Autonomous AI Database, run the following curl command:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://oracledatabase.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /autonomousDatabases/ DATABASE_ID "
-d \
'{
"database": " DATABASE_NAME ",
"displayName": " DISPLAY_NAME ",
"admin_password": " PASSWORD ",
"odb_subnet": "projects/ ODB_NETWORK_PROJECT_ID /locations/ REGION /odbNetworks/ ODB_NETWORK_ID /odbSubnets/ ODB_SUBNET_ID ",
"properties": {
"licenseType": " LICENSE_TYPE ",
"computeCount": COMPUTE_COUNT ,
"dbVersion": " DATABASE_VERSION ",
"dbWorkload": " WORKLOAD_TYPE ",
"dataStorageSizeTb": STORAGE_SIZE
}
}'
Replace the following:
PROJECT_ID : the ID of your Google Cloud project in which
to create the database.
REGION : the region in which to create the database.
DATABASE_ID : a unique identifier for your database.
DATABASE_NAME : a name for the database. Consider the following
guidelines:
Must begin with an alphabetic character.
Contain up to 30 alphanumeric characters.
Must not include special characters.
Must be unique in your Oracle Cloud Infrastructure (OCI) tenancy.
Not required if you're creating a cross-region disaster recovery standby
instance or cross-region Autonomous Data Guard standby instance.
DISPLAY_NAME : a name for your database to be displayed
in the Google Cloud console.
PASSWORD : the password for the default administrator user for
your database.
For odbSubnet property, replace the following:
ODB_NETWORK_PROJECT_ID : the ID of your Google Cloud project
which contains your ODB Network. If you're using a Shared VPC,
then this is the ID of your host project.
REGION : the region of your ODB Network.
ODB_NETWORK_ID : the ID of your ODB Network.
ODB_SUBNET_ID : the ID of your ODB Subnet.
LICENSE_TYPE : the license type associated with your
Oracle Database@Google Cloud order. Only accepted values are
bring-your-own-license or license-included .
COMPUTE_COUNT : the compute capacity for your database.
DATABASE_VERSION : the Oracle database version for your database.
WORKLOAD_TYPE : the workload type for your database. Following
are the accepted values:
ajd : Autonomous JSON Database
apex : Autonomous Database with Oracle APEX Application Development
workload type
dw : Autonomous Data Warehouse database
oltp : Autonomous Transaction Processing database
STORAGE_SIZE : your preferred storage count. Storage can range
from 0.02 TiB to 384 TiB and is measured in gigabyte (GiB) increments.
For Data Warehouse workloads only, storage is measured in terabyte (TiB)
increments and must range from 1 TiB to 384 TiB.
C#
using Google.Cloud.OracleDatabase.V1 ;
using Google.LongRunning ;
using System.Threading.Tasks ;
public sealed partial class GeneratedOracleDatabaseClientSnippets
{
/// <summary>Snippet for CreateAutonomousDatabaseAsync</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public async Task CreateAutonomousDatabaseAsync ()
{
// Create client
OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient . CreateAsync ();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]" ;
AutonomousDatabase autonomousDatabase = new AutonomousDatabase ();
string autonomousDatabaseId = "" ;
// Make the request
Operation<AutonomousDatabase , OperationMetadata > response = await oracleDatabaseClient . CreateAutonomousDatabaseAsync ( parent , autonomousDatabase , autonomousDatabaseId );
// Poll until the returned long-running operation is complete
Operation<AutonomousDatabase , OperationMetadata > completedResponse = await response . PollUntilCompletedAsync ();
// Retrieve the operation result
AutonomousDatabase result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<AutonomousDatabase , OperationMetadata > retrievedResponse = await oracleDatabaseClient . PollOnceCreateAutonomousDatabaseAsync ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
AutonomousDatabase retrievedResult = retrievedResponse . Result ;
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
req := & oracledatabasepb . CreateAutonomousDatabaseRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/oracledatabase/apiv1/oracledatabasepb#CreateAutonomousDatabaseRequest.
}
op , err := c . CreateAutonomousDatabase ( ctx , req )
if err != nil {
// TODO: Handle error.
}
resp , err := op . Wait ( ctx )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
import com.google.api.core. ApiFuture ;
import com.google.cloud.oracledatabase.v1. AutonomousDatabase ;
import com.google.cloud.oracledatabase.v1. CreateAutonomousDatabaseRequest ;
import com.google.cloud.oracledatabase.v1. LocationName ;
import com.google.cloud.oracledatabase.v1. OracleDatabaseClient ;
import com.google.longrunning. Operation ;
public class AsyncCreateAutonomousDatabase {
public static void main ( String [] args ) throws Exception {
asyncCreateAutonomousDatabase ();
}
public static void asyncCreateAutonomousDatabase () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) {
CreateAutonomousDatabaseRequest request =
CreateAutonomousDatabaseRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setAutonomousDatabaseId ( "autonomousDatabaseId-1972693114" )
. setAutonomousDatabase ( AutonomousDatabase . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future =
oracleDatabaseClient . createAutonomousDatabaseCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
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
* Required. The name of the parent in the following format:
* projects/{project}/locations/{location}.
*/
// const parent = 'abc123'
/**
* Required. The ID of the Autonomous Database to create. This value is
* restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of
* 63 characters in length. The value must start with a letter and end with a
* letter or a number.
*/
// const autonomousDatabaseId = 'abc123'
/**
* Required. The Autonomous Database being created.
*/
// const autonomousDatabase = {}
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
async function callCreateAutonomousDatabase () {
// Construct request
const request = {
parent ,
autonomousDatabaseId ,
autonomousDatabase ,
};
// Run request
const [ operation ] = await oracledatabaseClient . createAutonomousDatabase ( request );
const [ response ] = await operation . promise ();
console . log ( response );
}
callCreateAutonomousDatabase ();
PHP
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\OracleDatabase\V1\AutonomousDatabase;
use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient;
use Google\Cloud\OracleDatabase\V1\CreateAutonomousDatabaseRequest;
use Google\Rpc\Status;
/**
* Creates a new Autonomous Database in a given project and location.
*
* @param string $formattedParent The name of the parent in the following format:
* projects/{project}/locations/{location}. Please see
* {@see OracleDatabaseClient::locationName()} for help formatting this field.
* @param string $autonomousDatabaseId The ID of the Autonomous Database to create. This value is
* restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of
* 63 characters in length. The value must start with a letter and end with a
* letter or a number.
*/
function create_autonomous_database_sample(
string $formattedParent,
string $autonomousDatabaseId
): void {
// Create a client.
$oracleDatabaseClient = new OracleDatabaseClient();
// Prepare the request message.
$autonomousDatabase = new AutonomousDatabase();
$request = (new CreateAutonomousDatabaseRequest())
->setParent($formattedParent)
->setAutonomousDatabaseId($autonomousDatabaseId)
->setAutonomousDatabase($autonomousDatabase);
// Call the API and handle any network failures.
try {
/** @var OperationResponse $response */
$response = $oracleDatabaseClient->createAutonomousDatabase($request);
$response->pollUntilComplete();
if ($response->operationSucceeded()) {
/** @var AutonomousDatabase $result */
$result = $response->getResult();
printf('Operation successful with response data: %s' . PHP_EOL, $result->serializeToJsonString());
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
$formattedParent = OracleDatabaseClient::locationName('[PROJECT]', '[LOCATION]');
$autonomousDatabaseId = '[AUTONOMOUS_DATABASE_ID]';
create_autonomous_database_sample($formattedParent, $autonomousDatabaseId);
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
def sample_create_autonomous_database ():
# Create a client
client = oracledatabase_v1 . OracleDatabaseClient ()
# Initialize request argument(s)
request = oracledatabase_v1 . CreateAutonomousDatabaseRequest (
parent = "parent_value" ,
autonomous_database_id = "autonomous_database_id_value" ,
)
# Make the request
operation = client . create_autonomous_database ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ()
# Handle the response
print ( response )
Ruby
require "google/cloud/oracle_database/v1"
##
# Snippet for the create_autonomous_database call in the OracleDatabase service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::OracleDatabase::V1::OracleDatabase::Client#create_autonomous_database.
#
def create_autonomous_database
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: OracleDatabase :: V1 :: OracleDatabase :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: OracleDatabase :: V1 :: CreateAutonomousDatabaseRequest . new
# Call the create_autonomous_database method.
result = client . create_autonomous_database request
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
When you create a Autonomous AI Database, the provisioning workflow automatically
creates a Oracle-managed service account which you can use to
enable Google Cloud CMEK on the database.
This lets you grant precise IAM permissions to Oracle databases
to access Google Cloud services. For more information about CMEK, see
Customer-managed encryption keys (CMEK) .
What's next
Learn about CMEK for Oracle Database@Google Cloud .
Learn how to manage
or delete an Autonomous AI Database.
Configure Identity and Access Management roles for an instance.
Use monitoring metrics to monitor
your instances.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
