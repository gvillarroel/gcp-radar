---
title: "Create Exadata VM Cluster \_|\_ Oracle Database at Google Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/create-clusters
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/create-clusters
  title: "Create Exadata VM Cluster \_|\_ Oracle Database at Google Cloud \_|\_ Google\
    \ Cloud Documentation"
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
Create Exadata VM Cluster
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create a Exadata VM Cluster in
Google Cloud.
In Oracle Database@Google Cloud, you can create a Exadata VM Cluster in
Google Cloud using Google Cloud console or the Oracle Database@Google Cloud API.
You'll need to create an Exadata Infrastructure instance before you can
create a Exadata VM Cluster. To learn more about how to create a Exadata Infrastructure
instance, see Create instances .
After you create a Exadata VM Cluster, you can create a database for your
Exadata VM Cluster with Oracle Cloud Infrastructure (OCI).
Before you begin
Set up gcloud CLI and enable the API .
Enable the Oracle Database@Google Cloud API for the project.
Enable the Oracle Database@Google Cloud API
Ensure that you have the following Identity and Access Management (IAM) roles and
permissions required to create a cluster:
Oracle Database@Google Cloud Exadata VM Cluster Admin role
Oracle Database@Google Cloud Exadata Infrastructure User role for the project that
contains the Exadata Infrastructure in which you want to create the
Exadata VM Cluster.
compute.networks.list permission
To learn how to assign roles, see
Apply IAM roles .
Create an ODB Network and ODB Subnets .
A Exadata VM Cluster requires at least a client subnet and a backup subnet.
Create an instance or confirm the
name of the instance you'd like to create Exadata VM Clusters for.
Configure the VPC Network that you
want to use to manage access for your Exadata VM Cluster.
Create a VM cluster
A Exadata VM Cluster is created in the same region and zone as its Exadata Infrastructure.
To create a Exadata VM Cluster, do the following:
Console
Go to the Exadata Database Service page.
Go to Exadata Database Service
Select the Exadata VM Clusters tab.
In the Exadata VM Clusters section, click Create .
In the Infrastructure project selector, select the Google Cloud
project that contains the Exadata Infrastructure in which you want to
create your Exadata VM Cluster.
The project selector doesn't display the resources of a project.
Therefore, know the name of your project that contains
your Exadata Infrastructure. By default, the current project is selected.
The project selector shows projects based on the IAM
roles and permissions that you have. If you don't have the required
permissions to view a project, then that project doesn't appear in the
list. Contact your administrator to grant you the
required permissions .
From the Oracle Exadata infrastructure list, select your
Exadata Infrastructure. If the project that you selected doesn't contain
any Exadata Infrastructure, this field is disabled.
In the Basic details section, do the following:
Enter a Display name for your Exadata VM Cluster. This name appears
in the Google Cloud console. The display name must be unique within your
Google Cloud project.
Enter a VM Cluster ID as a unique identifier for your cluster. The Exadata VM Cluster
ID can't be changed later.
Optional: Enter a name for your cluster.
From the menu, select the Oracle Grid Infrastructure version .
To select an Exadata guest OS version that's optimized for your VMs, do
the following:
Click Change image .
On the Change image page, select the Oracle Exadata image version.
Click Save .
In the VM Cluster configuration section, do the following:
To select the database servers for VM placement, click
Change DB Servers . You must select at least one database server.
Only database servers that are available in the Exadata Infrastructure
can be selected. Once you select the DB servers, click Submit
to save.
Enter the OCPU count per VM for your cluster. The OCPU count can
range from 2 to 126.
Enter the Memory per VM for your cluster. The memory count can range
from 30 GiB to 1,390 GiB.
Enter the Local storage per VM for your cluster. The local storage
count can range from 60 GiB to 900 GiB.
In the Exadata storage configuration section, do the following:
Enter the Usable Exadata Storage for your cluster. This can range
from 2 TiB to 238 TiB and must be specified in multiples of 1 TiB.
Check the box for Allocate storage for sparse snapshots to allow
storage to be utilized for sparse snapshots. This setting can't be
changed after the Exadata VM Cluster has been created.
Check the box for Allocate storage for local backups to allow
your cluster storage to be used for local backups. This setting
can't be changed after the Exadata VM Cluster has been created.
In the Networking section, define the network configuration for the
Exadata VM Cluster by completing the following:
From the Network project list, select the project that contains
your ODB Network.
Select the ODB Network . You can only select an
ODB Network that is in the same region and zone as that of the
Exadata Infrastructure that you selected.
Select a Client subnet .
Select a Backup subnet .
In the Hostname prefix , specify a prefix you want to use to
generate hostnames for the Exadata VM Cluster virtual machines. This
prefix can only contain letters, numbers, or hyphens, and must start
with a letter. The maximum allowed length is 12 characters.
In the SSH keys section, add the public SSH keys you'd like to use for
the cluster. To add a key, enter the SSH key name in the SSH Key 1
field. For each additional key, click ADD ITEM .
For more information on how to generate SSH keys, see
Generate SSH keys .
In the License type section, select the type of Oracle license
you're using for your cluster. Select one of the following:
License included if you use a new license purchased as
part of the Google Cloud marketplace order.
Bring your own license (BYOL) if you use an existing Oracle license.
In the Diagnostics collection section, do the following
to configure monitoring for your Exadata VM Cluster:
Select the Enable diagnostic events checkbox to track all
cluster diagnostic events.
Select the Enable health monitoring checkbox to use the
monitoring console to monitor cluster health metrics.
Select the Enable incident logs and trace collection checkbox
to enable incident logging for your cluster.
In the Advanced fields section, do the following:
From the Timezone drop-down, select the timezone you'd like to use
for diagnostic collection. This timezone is used for event timestamps.
In the SCAN Listener Port (TCP/IP) field, enter a value to assign
a SCAN listener port to your cluster. The port value can range from
1,024 to 8,000, and the default value is 1,521.
Click Create to create the Exadata VM Cluster.
gcloud
Use the gcloud oracle-database cloud-vm-clusters create command to create
a cluster.
gcloud oracle - database cloud - vm - clusters create CLUSTER_ID \
-- exadata - infrastructure = projects / PROJECT_ID / locations / REGION / cloudExadataInfrastructures / EXADATA_INSTANCE_ID \
-- project = PROJECT_ID \
-- location = REGION \
-- display - name = " DISPLAY_NAME " \
-- odb - subnet = projects / ODB_NETWORK_PROJECT_ID / locations / REGION / odbNetworks / ODB_NETWORK_ID / odbSubnets / CLIENT_SUBNET_ID \
-- backup - odb - subnet = projects / ODB_NETWORK_PROJECT_ID / locations / REGION / odbNetworks / ODB_NETWORK_ID / odbSubnets / BACKUP_SUBNET_ID \
-- properties - license - type = LICENSE_TYPE \
-- properties - ssh - public - keys = " SSH_KEYS " \
-- properties - gi - version = GI_VERSION \
-- properties - hostname - prefix = HOSTNAME_PREFIX_NAME \
-- properties - cpu - core - count = CPU_CORE_COUNT
Replace the following:
CLUSTER_ID : a unique identifier for your cluster.
The cluster ID can't be changed once set.
For exadata_infrastructure parameter, replace the following:
PROJECT_ID : the ID of your Google Cloud project which
contains the Exadata Database for which you want to create the cluster.
REGION : the region of your Exadata Database.
EXADATA_INSTANCE_ID : the ID of your Exadata Database.
PROJECT_ID : the ID of your Google Cloud project.
REGION : the region for your cluster. The region is
permanent and can't be changed later. The region must match the region
used to create the Exadata Infrastructure instance. For a list of available regions,
see Available configurations .
DISPLAY_NAME : a name to identify your cluster and is
displayed in the Google Cloud console. The name must be unique within your
Google Cloud project.
For odb-subnet and backup-odb-subnet parameters,
replace the following:
ODB_NETWORK_PROJECT_ID : the ID of your Google Cloud
project which contains your ODB Network. If you're using a
Shared VPC, then this is the ID of your host project.
REGION : the region of your ODB Network.
ODB_NETWORK_ID : the ID of your ODB Network.
CLIENT_SUBNET_ID : the ID of your client ODB Subnet.
BACKUP_SUBNET_ID : the ID of your backup ODB Subnet.
LICENSE_TYPE : the license type associated with your
Oracle Database@Google Cloud order. Only accepted values are
bring-your-own-license or license-included .
SSH_KEYS : the public SSH keys you want stored with your
cluster. You can enter a single value for a single key, or an array of
values for multiple keys.
GI_VERSION : the grid infrastructure version for your
cluster. To get a list of all available grid infrastructure versions,
run the following command in gcloud CLI:
gcloud oracle-database gi-versions list --location= REGION
Replace the following:
REGION : the region where you're creating your
cluster. For a list of available regions, see
Available configurations .
HOSTNAME_PREFIX_NAME : the prefix you want to use to
generate hostnames for the Exadata VM Cluster. This prefix can only
contain letters, numbers, or hyphens, and must start with a letter.
The maximum allowed length is 12 characters.
CPU_CORE_COUNT : the number of enabled CPU cores you
want for your cluster.
API
To create an Exadata VM Cluster, run the following curl command:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://oracledatabase.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /cloudVmClusters/ CLUSTER_ID "
-d \
'{
"exadata_infrastructure": "projects/ PROJECT_ID /locations/ REGION /cloudExadataInfrastructures/ EXADATA_INSTANCE_ID "
"displayName": " DISPLAY_NAME ",
"properties": {
"odb_network": "projects/ ODB_NETWORK_PROJECT_ID /locations/ REGION /odbNetworks/ ODB_NETWORK_ID ",
"odb_subnet": "projects/ ODB_NETWORK_PROJECT_ID /locations/ REGION /odbNetworks/ ODB_NETWORK_ID /odbSubnets/ CLIENT_SUBNET_ID ",
"backup_odb_subnet": "projects/ ODB_NETWORK_PROJECT_ID /locations/ REGION /odbNetworks/ ODB_NETWORK_ID /odbSubnets/ BACKUP_SUBNET_ID ",
"licenseType": " LICENSE_TYPE ",
"ssh_public_keys": [" SSH_PUBLIC_KEY "],
"cpu_core_count": CPU_CORE_COUNT ,
"gi_version": " GI_VERSION ",
"hostname_prefix": " HOSTNAME_PREFIX "
}
}'
Replace the following:
PROJECT_ID : the ID of your Google Cloud project in which
to create the Exadata VM Cluster.
REGION : the region in which to create the Exadata VM Cluster.
CLUSTER_ID : a unique identifier for your Exadata VM Cluster.
For exadata_infrastructure parameter, replace the following:
PROJECT_ID : the ID of your Google Cloud project which
contains the Exadata Database for which you want to create the cluster.
REGION : the region of your Exadata Database.
EXADATA_INSTANCE_ID : the ID of your Exadata Database.
DISPLAY_NAME : a name for your Exadata VM Cluster to be displayed
in the Google Cloud console.
For odb_network , odb_subnet , and backup_odb_subnet properties,
replace the following:
ODB_NETWORK_PROJECT_ID : the ID of your Google Cloud project
which contains your ODB Network. If you're using a Shared VPC,
then this is the ID of your host project.
REGION : the region of your ODB Network.
ODB_NETWORK_ID : the ID of your ODB Network.
CLIENT_SUBNET_ID : the ID of your client ODB Subnet.
BACKUP_SUBNET_ID : the ID of your backup ODB Subnet.
LICENSE_TYPE : the license type associated with your
Oracle Database@Google Cloud order. Only accepted values are
bring-your-own-license or license-included .
SSH_PUBLIC_KEY : the SSH public keys for your cluster. You can
enter a single value for a single key, or an array of values for multiple
keys.
CPU_CORE_COUNT : the number of enabled CPU cores required for
your cluster.
GI_VERSION : the grid infrastructure version for your cluster.
HOSTNAME_PREFIX : the prefix you want to use to generate
hostnames for the cluster. This prefix can only contain letters,
numbers, or hyphens, and must start with a letter. The maximum allowed
length is 12 characters.
C#
using Google.Cloud.OracleDatabase.V1 ;
using Google.LongRunning ;
using System.Threading.Tasks ;
public sealed partial class GeneratedOracleDatabaseClientSnippets
{
/// <summary>Snippet for CreateCloudVmClusterAsync</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public async Task CreateCloudVmClusterAsync ()
{
// Create client
OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient . CreateAsync ();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]" ;
CloudVmCluster cloudVmCluster = new CloudVmCluster ();
string cloudVmClusterId = "" ;
// Make the request
Operation<CloudVmCluster , OperationMetadata > response = await oracleDatabaseClient . CreateCloudVmClusterAsync ( parent , cloudVmCluster , cloudVmClusterId );
// Poll until the returned long-running operation is complete
Operation<CloudVmCluster , OperationMetadata > completedResponse = await response . PollUntilCompletedAsync ();
// Retrieve the operation result
CloudVmCluster result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<CloudVmCluster , OperationMetadata > retrievedResponse = await oracleDatabaseClient . PollOnceCreateCloudVmClusterAsync ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
CloudVmCluster retrievedResult = retrievedResponse . Result ;
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
req := & oracledatabasepb . CreateCloudVmClusterRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/oracledatabase/apiv1/oracledatabasepb#CreateCloudVmClusterRequest.
}
op , err := c . CreateCloudVmCluster ( ctx , req )
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
/*
* Copyright 2026 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* https://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
package com.google.cloud.oracledatabase.v1.samples ;
import com.google.api.core. ApiFuture ;
import com.google.cloud.oracledatabase.v1. CloudVmCluster ;
import com.google.cloud.oracledatabase.v1. CreateCloudVmClusterRequest ;
import com.google.cloud.oracledatabase.v1. LocationName ;
import com.google.cloud.oracledatabase.v1. OracleDatabaseClient ;
import com.google.longrunning. Operation ;
public class AsyncCreateCloudVmCluster {
public static void main ( String [] args ) throws Exception {
asyncCreateCloudVmCluster ();
}
public static void asyncCreateCloudVmCluster () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) {
CreateCloudVmClusterRequest request =
CreateCloudVmClusterRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setCloudVmClusterId ( "cloudVmClusterId-1217103287" )
. setCloudVmCluster ( CloudVmCluster . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future =
oracleDatabaseClient . createCloudVmClusterCallable (). futureCall ( request );
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
* Required. The ID of the VM Cluster to create. This value is restricted
* to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
* characters in length. The value must start with a letter and end with
* a letter or a number.
*/
// const cloudVmClusterId = 'abc123'
/**
* Required. The resource being created
*/
// const cloudVmCluster = {}
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
async function callCreateCloudVmCluster () {
// Construct request
const request = {
parent ,
cloudVmClusterId ,
cloudVmCluster ,
};
// Run request
const [ operation ] = await oracledatabaseClient . createCloudVmCluster ( request );
const [ response ] = await operation . promise ();
console . log ( response );
}
callCreateCloudVmCluster ();
PHP
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient;
use Google\Cloud\OracleDatabase\V1\CloudVmCluster;
use Google\Cloud\OracleDatabase\V1\CreateCloudVmClusterRequest;
use Google\Rpc\Status;
/**
* Creates a new VM Cluster in a given project and location.
*
* @param string $formattedParent The name of the parent in the following format:
* projects/{project}/locations/{location}. Please see
* {@see OracleDatabaseClient::locationName()} for help formatting this field.
* @param string $cloudVmClusterId The ID of the VM Cluster to create. This value is restricted
* to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
* characters in length. The value must start with a letter and end with
* a letter or a number.
* @param string $formattedCloudVmClusterExadataInfrastructure The name of the Exadata Infrastructure resource on which VM
* cluster resource is created, in the following format:
* projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}
* Please see {@see OracleDatabaseClient::cloudExadataInfrastructureName()} for help formatting this field.
* @param string $cloudVmClusterCidr Network settings. CIDR to use for cluster IP allocation.
* @param string $cloudVmClusterBackupSubnetCidr CIDR range of the backup subnet.
* @param string $formattedCloudVmClusterNetwork The name of the VPC network.
* Format: projects/{project}/global/networks/{network}
* Please see {@see OracleDatabaseClient::networkName()} for help formatting this field.
*/
function create_cloud_vm_cluster_sample(
string $formattedParent,
string $cloudVmClusterId,
string $formattedCloudVmClusterExadataInfrastructure,
string $cloudVmClusterCidr,
string $cloudVmClusterBackupSubnetCidr,
string $formattedCloudVmClusterNetwork
): void {
// Create a client.
$oracleDatabaseClient = new OracleDatabaseClient();
// Prepare the request message.
$cloudVmCluster = (new CloudVmCluster())
->setExadataInfrastructure($formattedCloudVmClusterExadataInfrastructure)
->setCidr($cloudVmClusterCidr)
->setBackupSubnetCidr($cloudVmClusterBackupSubnetCidr)
->setNetwork($formattedCloudVmClusterNetwork);
$request = (new CreateCloudVmClusterRequest())
->setParent($formattedParent)
->setCloudVmClusterId($cloudVmClusterId)
->setCloudVmCluster($cloudVmCluster);
// Call the API and handle any network failures.
try {
/** @var OperationResponse $response */
$response = $oracleDatabaseClient->createCloudVmCluster($request);
$response->pollUntilComplete();
if ($response->operationSucceeded()) {
/** @var CloudVmCluster $result */
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
$cloudVmClusterId = '[CLOUD_VM_CLUSTER_ID]';
$formattedCloudVmClusterExadataInfrastructure = OracleDatabaseClient::cloudExadataInfrastructureName(
'[PROJECT]',
'[LOCATION]',
'[CLOUD_EXADATA_INFRASTRUCTURE]'
);
$cloudVmClusterCidr = '[CIDR]';
$cloudVmClusterBackupSubnetCidr = '[BACKUP_SUBNET_CIDR]';
$formattedCloudVmClusterNetwork = OracleDatabaseClient::networkName('[PROJECT]', '[NETWORK]');
create_cloud_vm_cluster_sample(
$formattedParent,
$cloudVmClusterId,
$formattedCloudVmClusterExadataInfrastructure,
$cloudVmClusterCidr,
$cloudVmClusterBackupSubnetCidr,
$formattedCloudVmClusterNetwork
);
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
def sample_create_cloud_vm_cluster ():
# Create a client
client = oracledatabase_v1 . OracleDatabaseClient ()
# Initialize request argument(s)
cloud_vm_cluster = oracledatabase_v1 . CloudVmCluster ()
cloud_vm_cluster . exadata_infrastructure = "exadata_infrastructure_value"
request = oracledatabase_v1 . CreateCloudVmClusterRequest (
parent = "parent_value" ,
cloud_vm_cluster_id = "cloud_vm_cluster_id_value" ,
cloud_vm_cluster = cloud_vm_cluster ,
)
# Make the request
operation = client . create_cloud_vm_cluster ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ()
# Handle the response
print ( response )
Ruby
require "google/cloud/oracle_database/v1"
##
# Snippet for the create_cloud_vm_cluster call in the OracleDatabase service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::OracleDatabase::V1::OracleDatabase::Client#create_cloud_vm_cluster.
#
def create_cloud_vm_cluster
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: OracleDatabase :: V1 :: OracleDatabase :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: OracleDatabase :: V1 :: CreateCloudVmClusterRequest . new
# Call the create_cloud_vm_cluster method.
result = client . create_cloud_vm_cluster request
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
When you create a Exadata VM Cluster, the provisioning workflow automatically
creates a Google-managed service account which you can use to
enable Google Cloud CMEK on the cluster.
This lets you grant precise IAM permissions to Oracle databases
to access Google Cloud services. For more information about CMEK, see
Customer-managed encryption keys (CMEK) .
What's next
Learn about CMEK for Oracle Database@Google Cloud .
Create an Exadata database
Learn how to manage
or delete a cluster.
Create an Exadata Infrastructure instance for
your Exadata VM Cluster.
Configure Identity and Access Management roles for an instance.
Use monitoring metrics to monitor
your instances.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
