---
title: "Capacity Planner client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/capacity-planner/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/capacity-planner/docs
source_metadata:
  url: https://docs.cloud.google.com/capacity-planner/docs/reference/libraries
  title: "Capacity Planner client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Capacity Planner
Reference
Send feedback
Capacity Planner client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Capacity Planner API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C#
Run the following
Install-Package command :
Install-Package Google.Cloud.CapacityPlanner.V1Beta -Pre
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/capacityplanner
For more information, see Setting Up a Go Development Environment .
Java
Select one of the following options:
If you are using Maven with
BOM , add the following to your pom.xml
file:
<dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>libraries-bom</artifactId>
<version>26.71.0</version>
<type>pom</type>
<scope>import</scope>
</dependency>
</dependencies>
</dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-capacityplanner</artifactId>
</dependency>
</dependencies>
If you are using Maven without BOM, add the following to your dependencies:
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-capacityplanner</artifactId>
<version>0.1.0</version>
</dependency>
If you are using Gradle with BOM, add
the following to your dependencies:
implementation platform('com.google.cloud:libraries-bom:26.71.0')
implementation 'com.google.cloud:google-cloud-capacityplanner'
If you are using Gradle without BOM, add the following to your dependencies:
implementation 'com.google.cloud:google-cloud-capacityplanner:0.1.0'
If you are using SBT , add the
following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-capacityplanner" % "0.1.0"
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/capacityplanner
For more information, see Setting Up a Node.js Development Environment .
PHP
Run the following Composer command:
composer require google/cloud-capacityplanner
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-capacityplanner
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-capacity_planner-v1beta
For more information, see Setting Up a Ruby Development Environment .
Set up authentication
To authenticate calls to Google Cloud APIs, client libraries support
Application Default Credentials (ADC) ;
the libraries look for credentials in a set of defined locations and use those credentials
to authenticate requests to the API. With ADC, you can make
credentials available to your application in a variety of environments, such as local
development or production, without needing to modify your application code.
For production environments, the way you set up ADC depends on the service
and context. For more information, see Set up Application Default Credentials .
For a local development environment, you can set up ADC with the credentials
that are associated with your Google Account:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Use the client library
The following example shows how to use the client library to
query historical usage .
Note: Depending on the language, the sample to query historical usage might be
asynchronous or synchronous
or both samples might be provided.
C#
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.CapacityPlanner.V1Beta ;
using Google.Type ;
public sealed partial class GeneratedUsageServiceClientSnippets
{
/// <summary>Snippet for QueryUsageHistories</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void QueryUsageHistoriesRequestObject ()
{
// Create client
UsageServiceClient usageServiceClient = UsageServiceClient . Create ();
// Initialize request argument(s)
QueryUsageHistoriesRequest request = new QueryUsageHistoriesRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( "[PROJECT]" , "[LOCATION]" ),
MachineFamily = "" ,
CloudResourceType = "" ,
UsageAggregationMethod = UsageHistory . Types . AggregationMethod . Unspecified ,
DiskType = "" ,
GpuType = "" ,
StartDate = new Date (),
EndDate = new Date (),
LocationLevel = TimeSeries . Types . LocationType . Unspecified ,
TpuType = "" ,
MachineShape = new MachineShape (),
IsSpot = false ,
ConfidentialMode = false ,
};
// Make the request
QueryUsageHistoriesResponse response = usageServiceClient . QueryUsageHistories ( request );
}
}
Go
package main
import (
"context"
capacityplanner "cloud.google.com/go/capacityplanner/apiv1beta"
capacityplannerpb "cloud.google.com/go/capacityplanner/apiv1beta/capacityplannerpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := capacityplanner . NewUsageClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & capacityplannerpb . QueryUsageHistoriesRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/capacityplanner/apiv1beta/capacityplannerpb#QueryUsageHistoriesRequest.
}
resp , err := c . QueryUsageHistories ( ctx , req )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
import com.google.cloud.capacityplanner.v1beta.LocationName ;
import com.google.cloud.capacityplanner.v1beta.MachineShape ;
import com.google.cloud.capacityplanner.v1beta.QueryUsageHistoriesRequest ;
import com.google.cloud.capacityplanner.v1beta.QueryUsageHistoriesResponse ;
import com.google.cloud.capacityplanner.v1beta.UsageServiceClient ;
import com.google.type. Date ;
public class SyncQueryUsageHistories {
public static void main ( String [] args ) throws Exception {
syncQueryUsageHistories ();
}
public static void syncQueryUsageHistories () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( UsageServiceClient usageServiceClient = UsageServiceClient . create ()) {
QueryUsageHistoriesRequest request =
QueryUsageHistoriesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setIsSpot ( true )
. setMachineFamily ( "machineFamily419822219" )
. setMachineShape ( MachineShape . newBuilder (). build ())
. setDiskType ( "diskType279771767" )
. setConfidentialMode ( true )
. setGpuType ( "gpuType240737798" )
. setTpuType ( "tpuType-1106616237" )
. setCloudResourceType ( "cloudResourceType-1446274243" )
. setStartDate ( Date . newBuilder (). build ())
. setEndDate ( Date . newBuilder (). build ())
. build ();
QueryUsageHistoriesResponse response = usageServiceClient . queryUsageHistories ( request );
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
* Required. The compute engine resource and location for the time series
* values to return. The format is:
* projects/{project}/locations/{location} or
* organizations/{organization}/locations/{location} or
* folders/{folder}/locations/{location}
*/
// const parent = 'abc123'
/**
* Optional. The location level of the reservations usage timeseries.
*/
// const locationLevel = {}
/**
* Optional. The is_spot flag is used to fetch the usage data for preemptible
* Resources.
*/
// const isSpot = true
/**
* The machine family for the `UsageHistory` values to return. Possible values
* include "n1", and "n2d". See
* https://cloud.google.com/compute/docs/machine-types for more examples.
* Empty machine_family will return results matching all machine families.
*/
// const machineFamily = 'abc123'
/**
* Optional. The machine shape for the `UsageHistory` values to return.
*/
// const machineShape = {}
/**
* Optional. The disk_type for the `UsageHistory` values to return request
* with persistent-disk cloud_resource_type. Empty disk_type will return
* results matching all disk types.
*/
// const diskType = 'abc123'
/**
* Optional. Whether the persistent disk is in confidential mode.
*/
// const confidentialMode = true
/**
* Optional. The GPU type for the `UsageHistory` values to return. Sample
* values are "nvidia-tesla-t4", and "nvidia-tesla-a100". See
* https://cloud.google.com/compute/docs/gpus for a list. Empty gpu_type
* will return results matching all GPUs.
*/
// const gpuType = 'abc123'
/**
* Optional. The TPU type for the `UsageHistory` values to return. Empty
* tpu_type will return results matching all TPUs.
*/
// const tpuType = 'abc123'
/**
* The resource for the `UsageHistory` values to return. Possible values
* include "gce-vcpus", "gce-ram", "gce-local-ssd", "gce-persistent-disk",
* "gce-gpu" and "gce-tpu".
* Empty cloud_resource_type will return results matching all resources.
*/
// const cloudResourceType = 'abc123'
/**
* The method that should be used to convert sampled usage data to daily
* usage values.
* AGGREGATION_METHOD_UNSPECIFIED will return results matching all the
* aggregation methods.
*/
// const usageAggregationMethod = {}
/**
* Optional. The start date of reservations usage.
*/
// const startDate = {}
/**
* Optional. The end date of reservations usage.
*/
// const endDate = {}
// Imports the Capacityplanner library
const { UsageServiceClient } = require ( ' @google-cloud/capacityplanner ' ). v1beta ;
// Instantiates a client
const capacityplannerClient = new UsageServiceClient ();
async function callQueryUsageHistories () {
// Construct request
const request = {
parent ,
};
// Run request
const response = await capacityplannerClient . queryUsageHistories ( request );
console . log ( response );
}
callQueryUsageHistories ();
PHP
use Google\ApiCore\ApiException;
use Google\Cloud\CapacityPlanner\V1beta\Client\UsageServiceClient;
use Google\Cloud\CapacityPlanner\V1beta\QueryUsageHistoriesRequest;
use Google\Cloud\CapacityPlanner\V1beta\QueryUsageHistoriesResponse;
/**
* Returns a list of the usage histories that are in the parent parameter
* and match your specified filters.
*
* @param string $formattedParent The compute engine resource and location for the time series
* values to return. The format is:
*
* projects/{project}/locations/{location} or
* organizations/{organization}/locations/{location} or
* folders/{folder}/locations/{location}
* Please see {@see UsageServiceClient::locationName()} for help formatting this field.
* @param string $cloudResourceType The resource for the `UsageHistory` values to return. Possible
* values include "gce-vcpus", "gce-ram", "gce-local-ssd",
* "gce-persistent-disk", "gce-gpu" and "gce-tpu". Empty cloud_resource_type
* will return results matching all resources.
*/
function query_usage_histories_sample(string $formattedParent, string $cloudResourceType): void
{
// Create a client.
$usageServiceClient = new UsageServiceClient();
// Prepare the request message.
$request = (new QueryUsageHistoriesRequest())
->setParent($formattedParent)
->setCloudResourceType($cloudResourceType);
// Call the API and handle any network failures.
try {
/** @var QueryUsageHistoriesResponse $response */
$response = $usageServiceClient->queryUsageHistories($request);
printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
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
$formattedParent = UsageServiceClient::locationName('[PROJECT]', '[LOCATION]');
$cloudResourceType = '[CLOUD_RESOURCE_TYPE]';
query_usage_histories_sample($formattedParent, $cloudResourceType);
}
Python
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import capacityplanner_v1beta
def sample_query_usage_histories ():
# Create a client
client = capacityplanner_v1beta . UsageServiceClient ()
# Initialize request argument(s)
request = capacityplanner_v1beta . QueryUsageHistoriesRequest (
parent = "parent_value" ,
cloud_resource_type = "cloud_resource_type_value" ,
)
# Make the request
response = client . query_usage_histories ( request = request )
# Handle the response
print ( response )
Ruby
require "google/cloud/capacity_planner/v1beta"
##
# Snippet for the query_usage_histories call in the UsageService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::CapacityPlanner::V1beta::UsageService::Client#query_usage_histories.
#
def query_usage_histories
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: CapacityPlanner :: V1beta :: UsageService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: CapacityPlanner :: V1beta :: QueryUsageHistoriesRequest . new
# Call the query_usage_histories method.
result = client . query_usage_histories request
# The returned object is of type Google::Cloud::CapacityPlanner::V1beta::QueryUsageHistoriesResponse.
p result
end
Additional resources
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-capacity-planner on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-capacity-planner on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-capacity-planner on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-capacity-planner on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-capacity-planner on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-capacity-planner on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-capacity-planner on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
