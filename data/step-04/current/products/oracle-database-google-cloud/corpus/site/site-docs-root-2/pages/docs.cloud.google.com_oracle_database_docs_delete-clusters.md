---
title: "Delete VM clusters \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/delete-clusters
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/delete-clusters
  title: "Delete VM clusters \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
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
Delete VM clusters
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to delete a Exadata VM Cluster in
Google Cloud. To create a cluster,
see Create clusters . To modify an existing
cluster, see Manage clusters .
To learn more about Oracle Database@Google Cloud, see
Product overview .
Before you begin
Set up gcloud CLI and enable the API .
Enable the Oracle Database@Google Cloud API for the project.
Enable the Oracle Database@Google Cloud API
Confirm that you have the required roles necessary to delete a cluster:
cloudVmClusterAdmin .
For more information on how to assign roles, see
Apply IAM roles .
Delete cluster
Warning: Deleting a cluster permanently removes the cluster. You can't undo
this later.
To delete your Exadata VM Cluster, complete the following steps:
Console
Go to the Exadata Database Service page in the Google Cloud console.
Go to Exadata Database Service
Click Exadata VM Clusters .
In the Exadata VM Clusters section, click the name of the cluster
you want to delete.
Click Delete at the top of the page.
In the Delete Exadata VM Cluster? window, type the VM Cluster ID
for your cluster to confirm deletion of the cluster.
Click Confirm .
gcloud
You can use the gcloud oracle-database cloud-vm-clusters delete
Google Cloud CLI command to delete a cluster using gcloud CLI.
gcloud oracle-database cloud-vm-clusters delete CLUSTER_ID
--location= REGION_ID
Replace the following:
CLUSTER_ID : the identifier for the cluster that you
want to delete.
REGION_ID : the region for the cluster that you want
to delete.
C#
using Google.Cloud.OracleDatabase.V1 ;
using Google.LongRunning ;
using Google.Protobuf.WellKnownTypes ;
using System.Threading.Tasks ;
public sealed partial class GeneratedOracleDatabaseClientSnippets
{
/// <summary>Snippet for DeleteCloudVmClusterAsync</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public async Task DeleteCloudVmClusterAsync ()
{
// Create client
OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient . CreateAsync ();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/cloudVmClusters/[CLOUD_VM_CLUSTER]" ;
// Make the request
Operation<Empty , OperationMetadata > response = await oracleDatabaseClient . DeleteCloudVmClusterAsync ( name );
// Poll until the returned long-running operation is complete
Operation<Empty , OperationMetadata > completedResponse = await response . PollUntilCompletedAsync ();
// Retrieve the operation result
Empty result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty , OperationMetadata > retrievedResponse = await oracleDatabaseClient . PollOnceDeleteCloudVmClusterAsync ( operationName );
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
req := & oracledatabasepb . DeleteCloudVmClusterRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/oracledatabase/apiv1/oracledatabasepb#DeleteCloudVmClusterRequest.
}
op , err := c . DeleteCloudVmCluster ( ctx , req )
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
import com.google.cloud.oracledatabase.v1. CloudVmClusterName ;
import com.google.cloud.oracledatabase.v1. DeleteCloudVmClusterRequest ;
import com.google.cloud.oracledatabase.v1. OracleDatabaseClient ;
import com.google.longrunning. Operation ;
public class AsyncDeleteCloudVmCluster {
public static void main ( String [] args ) throws Exception {
asyncDeleteCloudVmCluster ();
}
public static void asyncDeleteCloudVmCluster () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) {
DeleteCloudVmClusterRequest request =
DeleteCloudVmClusterRequest . newBuilder ()
. setName (
CloudVmClusterName . of ( "[PROJECT]" , "[LOCATION]" , "[CLOUD_VM_CLUSTER]" ). toString ())
. setRequestId ( "requestId693933066" )
. setForce ( true )
. build ();
ApiFuture<Operation> future =
oracleDatabaseClient . deleteCloudVmClusterCallable (). futureCall ( request );
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
* Required. The name of the Cloud VM Cluster in the following format:
* projects/{project}/locations/{location}/cloudVmClusters/{cloud_vm_cluster}.
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
/**
* Optional. If set to true, all child resources for the VM Cluster will be
* deleted. A VM Cluster can only be deleted once all its child resources have
* been deleted.
*/
// const force = true
// Imports the Oracledatabase library
const { OracleDatabaseClient } = require ( ' @google-cloud/oracledatabase ' ). v1 ;
// Instantiates a client
const oracledatabaseClient = new OracleDatabaseClient ();
async function callDeleteCloudVmCluster () {
// Construct request
const request = {
name ,
};
// Run request
const [ operation ] = await oracledatabaseClient . deleteCloudVmCluster ( request );
const [ response ] = await operation . promise ();
console . log ( response );
}
callDeleteCloudVmCluster ();
PHP
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient;
use Google\Cloud\OracleDatabase\V1\DeleteCloudVmClusterRequest;
use Google\Rpc\Status;
/**
* Deletes a single VM Cluster.
*
* @param string $formattedName The name of the Cloud VM Cluster in the following format:
* projects/{project}/locations/{location}/cloudVmClusters/{cloud_vm_cluster}. Please see
* {@see OracleDatabaseClient::cloudVmClusterName()} for help formatting this field.
*/
function delete_cloud_vm_cluster_sample(string $formattedName): void
{
// Create a client.
$oracleDatabaseClient = new OracleDatabaseClient();
// Prepare the request message.
$request = (new DeleteCloudVmClusterRequest())
->setName($formattedName);
// Call the API and handle any network failures.
try {
/** @var OperationResponse $response */
$response = $oracleDatabaseClient->deleteCloudVmCluster($request);
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
$formattedName = OracleDatabaseClient::cloudVmClusterName(
'[PROJECT]',
'[LOCATION]',
'[CLOUD_VM_CLUSTER]'
);
delete_cloud_vm_cluster_sample($formattedName);
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
def sample_delete_cloud_vm_cluster ():
# Create a client
client = oracledatabase_v1 . OracleDatabaseClient ()
# Initialize request argument(s)
request = oracledatabase_v1 . DeleteCloudVmClusterRequest (
name = "name_value" ,
)
# Make the request
operation = client . delete_cloud_vm_cluster ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ()
# Handle the response
print ( response )
Ruby
require "google/cloud/oracle_database/v1"
##
# Snippet for the delete_cloud_vm_cluster call in the OracleDatabase service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::OracleDatabase::V1::OracleDatabase::Client#delete_cloud_vm_cluster.
#
def delete_cloud_vm_cluster
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: OracleDatabase :: V1 :: OracleDatabase :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: OracleDatabase :: V1 :: DeleteCloudVmClusterRequest . new
# Call the delete_cloud_vm_cluster method.
result = client . delete_cloud_vm_cluster request
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
or manage a Exadata VM Cluster.
Configure Identity and Access Management roles for an instance.
Use monitoring metrics to monitor
your instances.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
