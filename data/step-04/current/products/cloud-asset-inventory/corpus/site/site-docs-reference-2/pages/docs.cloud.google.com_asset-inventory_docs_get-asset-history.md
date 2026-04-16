---
title: "Get asset histories \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/get-asset-history
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/get-asset-history
  title: "Get asset histories \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Guides
Send feedback
Get asset histories
Stay organized with collections
Save and categorize content based on your preferences.
You can retrieve up to 35 days of create, update, and delete history for your
assets in Google Cloud projects or organizations. Assets that haven't changed in
the past 35 days report their latest status.
Before you begin
Enable the Cloud Asset Inventory API in the project you're running Cloud Asset Inventory commands
from.
Enable the Cloud Asset Inventory API
Make sure your account has the
correct role to call the Cloud Asset Inventory API .
For individual permissions for each call type, see
Permissions .
Limitations
You can only retrieve asset history at the organization and project level.
Folders aren't supported.
Get your asset histories
Console
To get the history of your assets stored in Google Cloud, complete the
following steps.
Go to the Asset Inventory page in the
Google Cloud console.
Go to Asset Inventory
Change to the project, folder, or organization you want to search.
Click the Resource tab.
In the Filter results panel, select a resource type or location
to filter the results.
Click a resource in the results panel.
Click the Change history tab.
Select a Start time and End time for the report.
Use the Select a record to compare list boxes to show a diff
between the records for your selected dates.
After performing a search, the resources matching the query are listed in
the Results table. Double-click your query to edit it, or use the
Filter results pane to restrict the search results by specific
criteria.
To view the query as a Google Cloud CLI command, click
View query .
To export the results, click Download CSV .
gcloud
gcloud asset get-history \
-- SCOPE \
--asset-names = ASSET_NAME_1 , ASSET_NAME_2 ,... \
--content-type = CONTENT_TYPE \
--relationship-types = RELATIONSHIP_TYPE_1 , RELATIONSHIP_TYPE_2 ,... \
--start-time = " START_TIME " \
--end-time = " END_TIME " Provide the following values:
SCOPE : Use one of the following values:
project= PROJECT_ID , where PROJECT_ID is the
ID of the project that has the asset you want to retrieve.
organization= ORGANIZATION_ID , where
ORGANIZATION_ID is the ID of the organization that has the asset you want to retrieve.
How to find the ID of a Google Cloud organization
Google Cloud console
To find the ID of a Google Cloud organization, complete the following steps:
Go to the Google Cloud console.
Go to the Google Cloud console
Click the switcher list box in the menu bar.
Select your organization from the list box.
Click the All tab. The organization ID is shown next to the organization name.
gcloud CLI
You can retrieve the ID of a Google Cloud organization with the following command:
gcloud organizations describe ORGANIZATION_NAME --format = "value(name.segment(1))"
ASSET_NAME_# : A comma-separated list of asset full names .
CONTENT_TYPE : The
content type of the metadata that you want to retrieve. When
--content-type isn't specified, only basic information is returned, such as asset names, the last time the
assets were updated, and what projects, folders, and organizations they belong to.
RELATIONSHIP_TYPE_# : Optional. Requires access to the
Security Command Center Premium or Enterprise tier . A comma-separated list of
asset relationship types that you want to
retrieve. You must set CONTENT_TYPE to RELATIONSHIP for
this to work.
START_TIME : The beginning of the time range, in
gcloud topic datetime format . The value must be no more than 35 days in the past.
END_TIME : Optional. The finishing point of the time range,
in
gcloud topic datetime format . The value must be no more than 35 days in the past. When
--end-time isn't specified, it's set to the current time.
See the gcloud CLI reference for
all options.
Example
Run the following command to get the resource history metadata of the
my-instance Compute Engine instance in the my-project project
between January 30, 2024 and February 5, 2024. The instance has the following properties:
Instance name : my-instance
Project : my-project
Location : us-central1-a
gcloud asset get-history \
--project = my-project \
--asset-names = //compute.googleapis.com/projects/ my-project /zones/ us-central1-a /instances/ my-instance \
--content-type = resource \
--start-time = " 2024-01-30 " \
--end-time = " 2024-02-05 " Example response
---
asset:
ancestors:
- projects/000000000000
- folders/000000000000
- organizations/000000000000
assetType: compute.googleapis.com/Instance
name: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance
resource:
data:
LATEST_ASSET_METADATA
discoveryDocumentUri: https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1
discoveryName: Instance
location: us-central1-a
parent: //cloudresourcemanager.googleapis.com/projects/000000000000
version: v1
updateTime: '2024-02-05T16:00:25.259186Z'
window:
endTime: '2024-02-05T16:00:25.259186Z'
startTime: '2024-02-03T16:00:28.854779Z'
---
asset:
ancestors:
- projects/000000000000
- folders/000000000000
- organizations/000000000000
assetType: compute.googleapis.com/Instance
name: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance
resource:
data:
EARLIEST_ASSET_METADATA
discoveryDocumentUri: https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1
discoveryName: Instance
location: us-central1-a
parent: //cloudresourcemanager.googleapis.com/projects/000000000000
version: v1
updateTime: '2024-02-03T16:00:28.854779Z'
window:
endTime: '2024-02-03T16:00:28.854779Z'
startTime: '2024-01-30T08:00:22.930462Z'
REST
HTTP method and URL:
POST https://cloudasset.googleapis.com/v1/ SCOPE_PATH :batchGetAssetsHistory
Note : You can use a GET method for this request with parameters as a query
string. However, the request URL is
length limited , meaning the server rejects the
request if the query string is too long. To avoid length restrictions, use a POST
request instead, set a header of X-HTTP-Method-Override: GET , and use a JSON body
for your parameters.
Request JSON body:
{
"assetNames" : [
" ASSET_NAME_1 " ,
" ASSET_NAME_2 " ,
"..."
],
"contentType" : " CONTENT_TYPE " ,
"relationshipTypes" : [
" RELATIONSHIP_TYPE_1 " ,
" RELATIONSHIP_TYPE_2 " ,
"..."
],
"readTimeWindow" : {
"startTime" : " START_TIME " ,
"endTime" : " END_TIME "
}
} Provide the following values:
SCOPE_PATH : Use one of the following values:
The allowed values are:
projects/ PROJECT_ID , where PROJECT_ID is the
ID of the project that has the asset you want to retrieve.
projects/ PROJECT_NUMBER , where
PROJECT_NUMBER is the number of the project that has the asset you want to retrieve.
How to find a Google Cloud project number
Google Cloud console
To find a Google Cloud project number, complete the following steps:
Go to the Welcome page in the Google Cloud console.
Go to Welcome
Click the switcher list box in the menu bar.
Select your organization from the list box, and then search for your project name.
The project name, project number, and project ID are shown near the Welcome
heading.
Up to 4,000 resources are displayed. If you don't see the project you're looking for,
go to the
Manage resources page and
filter the list using the name of that project.
gcloud CLI
You can retrieve a Google Cloud project number with the following command:
gcloud projects describe PROJECT_ID --format = "value(projectNumber)"
organizations/ ORGANIZATION_ID , where
ORGANIZATION_ID is the ID of the organization that has the asset you want to retrieve.
How to find the ID of a Google Cloud organization
Google Cloud console
To find the ID of a Google Cloud organization, complete the following steps:
Go to the Google Cloud console.
Go to the Google Cloud console
Click the switcher list box in the menu bar.
Select your organization from the list box.
Click the All tab. The organization ID is shown next to the organization name.
gcloud CLI
You can retrieve the ID of a Google Cloud organization with the following command:
gcloud organizations describe ORGANIZATION_NAME --format = "value(name.segment(1))"
ASSET_NAME_# : An array of asset full names .
CONTENT_TYPE : The
content type of the metadata that you want to retrieve. When contentType isn't specified, only basic information is returned, such as asset names, the last time the
assets were updated, and what projects, folders, and organizations they belong to.
RELATIONSHIP_TYPE_# : Optional. Requires access to the
Security Command Center Premium or Enterprise tier . A comma-separated list of
asset relationship types that you want to
retrieve. You must set CONTENT_TYPE to RELATIONSHIP for
this to work.
START_TIME : The beginning of the time range, in
RFC 3339 format . The value must be no more than 35 days in the past.
END_TIME : Optional. The finishing point of the time range,
in
RFC 3339 format . The value must be no more than 35 days in the past. When endTime isn't specified, it's set to the current time.
See the REST reference for all
options.
Command examples
Run one of the following commands to get the resource history of the
my-instance Compute Engine instance in the my-project project
between January 30, 2024 and February 5, 2024. The instance has the following properties:
Instance name : my-instance
Project : my-project
Location : us-central1-a
curl (Linux, macOS, or Cloud Shell)
Note : The following command assumes that you have logged in to the
gcloud CLI with your user account by running
gcloud init
or
gcloud auth login , or by using
Cloud Shell , which automatically logs you into
the gcloud CLI. You can check the active account by running
gcloud auth list .
curl -X POST \
-H "X-HTTP-Method-Override: GET" \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
-d '{
"assetNames": ["//compute.googleapis.com/projects/ my-project /zones/ us-central1-a /instances/ my-instance "],
"contentType": "RESOURCE",
"readTimeWindow": {
"startTime": " 2024-01-30T00:00:00Z ",
"endTime": " 2024-02-05T00:00:00Z "
}
}' \
https://cloudasset.googleapis.com/v1/projects/ my-project :batchGetAssetsHistory
PowerShell (Windows)
Note : The following command assumes that you have logged in to the
gcloud CLI with your user account by running
gcloud init
or
gcloud auth login . You can check the active account by
running
gcloud auth list .
$cred = gcloud auth print-access-token
$headers = @{
"X-HTTP-Method-Override" = "GET" ;
"Authorization" = "Bearer $cred"
}
$body = @"
{
"assetNames": ["//compute.googleapis.com/projects/ my-project /zones/ us-central1-a /instances/ my-instance "],
"contentType": "RESOURCE",
"readTimeWindow": {
"startTime": " 2024-01-30T00:00:00Z ",
"endTime": " 2024-02-05T00:00:00Z "
}
}
"@
Invoke-WebRequest `
-Method POST `
-Headers $headers `
-ContentType : "application/json; charset=utf-8" `
-Body $body `
-Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :batchGetAssetsHistory" | Select-Object -Expand Content
Example response
{
"assets" : [
{
"window" : {
"startTime" : "2024-02-03T16:00:28.854779Z" ,
"endTime" : "2024-02-05T16:00:25.259186Z"
},
"asset" : {
"name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance" ,
"assetType" : "compute.googleapis.com/Instance" ,
"resource" : {
"version" : "v1" ,
"discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1" ,
"discoveryName" : "Instance" ,
"parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" ,
"data" : {
LATEST_ASSET_METADATA
},
"location" : "us-central1-a"
},
"ancestors" : [
"projects/000000000000" ,
"folders/000000000000" ,
"organizations/000000000000"
],
"updateTime" : "2024-02-05T16:00:25.259186Z"
}
},
{
"window" : {
"startTime" : "2024-01-30T08:00:22.930462Z" ,
"endTime" : "2024-02-03T16:00:28.854779Z"
},
"asset" : {
"name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance" ,
"assetType" : "compute.googleapis.com/Instance" ,
"resource" : {
"version" : "v1" ,
"discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1" ,
"discoveryName" : "Instance" ,
"parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" ,
"data" : {
EARLIEST_ASSET_METADATA
},
"location" : "us-central1-a"
},
"ancestors" : [
"projects/000000000000" ,
"folders/000000000000" ,
"organizations/000000000000"
],
"updateTime" : "2024-02-03T16:00:28.854779Z"
}
}
]
}
C#
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Asset.V1 ;
using Google.Protobuf.WellKnownTypes ;
using System ;
public class BatchGetAssetsHistorySample
{
public BatchGetAssetsHistoryResponse BatchGetAssetsHistory ( string [] assetNames , DateTimeOffset startTime , string projectId )
{
// Create the client.
AssetServiceClient client = AssetServiceClient . Create ();
// Build the request.
BatchGetAssetsHistoryRequest request = new BatchGetAssetsHistoryRequest
{
ParentAsResourceName = ProjectName . FromProject ( projectId ),
ContentType = ContentType . Resource ,
ReadTimeWindow = new TimeWindow
{
StartTime = Timestamp . FromDateTimeOffset ( startTime )
}
};
request . AssetNames . AddRange ( assetNames );
// Call the API.
BatchGetAssetsHistoryResponse response = client . BatchGetAssetsHistory ( request );
// Return the result.
return response ;
}
}
Go
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Sample asset-quickstart batch-gets assets history.
package main
import (
"context"
"fmt"
"log"
"os"
"time"
asset "cloud.google.com/go/asset/apiv1"
"cloud.google.com/go/asset/apiv1/assetpb"
"github.com/golang/protobuf/ptypes/timestamp"
)
func main () {
ctx := context . Background ()
client , err := asset . NewClient ( ctx )
if err != nil {
log . Fatal ( err )
}
defer client . Close ()
projectID := os . Getenv ( "GOOGLE_CLOUD_PROJECT" )
bucketResourceName := fmt . Sprintf ( "//storage.googleapis.com/%s-for-assets" , projectID )
req := & assetpb . BatchGetAssetsHistoryRequest {
Parent : fmt . Sprintf ( "projects/%s" , projectID ),
AssetNames : [] string { bucketResourceName },
ContentType : assetpb . ContentType_RESOURCE ,
ReadTimeWindow : & assetpb . TimeWindow {
StartTime : & timestamp . Timestamp {
Seconds : time . Now (). Unix (),
},
},
}
response , err := client . BatchGetAssetsHistory ( ctx , req )
if err != nil {
log . Fatal ( err )
}
fmt . Print ( response )
}
Java
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Google Cloud client library
import com.google.cloud. ServiceOptions ;
import com.google.cloud.asset.v1. AssetServiceClient ;
import com.google.cloud.asset.v1. BatchGetAssetsHistoryRequest ;
import com.google.cloud.asset.v1. BatchGetAssetsHistoryResponse ;
import com.google.cloud.asset.v1. ContentType ;
import com.google.cloud.asset.v1. ProjectName ;
import com.google.cloud.asset.v1. TimeWindow ;
import java.util.Arrays ;
public class BatchGetAssetsHistoryExample {
// Use the default project Id.
private static final String projectId = ServiceOptions . getDefaultProjectId ();
// Export assets for a project.
// @param args path where the results will be exported to.
public static void main ( String ... args ) throws Exception {
// Asset names, e.g.: "//storage.googleapis.com/[BUCKET_NAME]"
String [] assetNames = args [ 0 ] . split ( "," );
try ( AssetServiceClient client = AssetServiceClient . create ()) {
ProjectName parent = ProjectName . of ( projectId );
ContentType contentType = ContentType . CONTENT_TYPE_UNSPECIFIED ;
TimeWindow readTimeWindow = TimeWindow . newBuilder (). build ();
BatchGetAssetsHistoryRequest request =
BatchGetAssetsHistoryRequest . newBuilder ()
. setParent ( parent . toString ())
. addAllAssetNames ( Arrays . asList ( assetNames ))
. setContentType ( contentType )
. setReadTimeWindow ( readTimeWindow )
. build ();
BatchGetAssetsHistoryResponse response = client . batchGetAssetsHistory ( request );
System . out . println ( response );
}
}
}
Node.js
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// const assetNames = '//storage.googleapis.com/<BUCKET_NAME1>,//storage.googleapis.com/<BUCKET_NAME2>';
// const contentType = 'RESOURCE';
const util = require ( 'util' );
const { AssetServiceClient } = require ( ' @google-cloud/asset ' );
const client = new AssetServiceClient ();
async function batchGetAssetsHistory () {
const projectId = await client . getProjectId ();
const projectResource = `projects/ ${ projectId } ` ;
// TODO(developer): Choose asset names, such as //storage.googleapis.com/[YOUR_BUCKET_NAME].
// const assetNames = ['ASSET_NAME1', 'ASSET_NAME2', ...];
const request = {
parent : projectResource ,
assetNames : assetNames . split ( ',' ),
contentType : contentType ,
readTimeWindow : {
startTime : {
seconds : Math . floor ( new Date (). getTime () / 1000 ),
},
},
};
// Handle the operation using the promise pattern.
const result = await client . batchGetAssetsHistory ( request );
// Do things with with the response.
console . log ( util . inspect ( result , { depth : null }));
PHP
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Asset\V1\BatchGetAssetsHistoryRequest;
use Google\Cloud\Asset\V1\Client\AssetServiceClient;
use Google\Cloud\Asset\V1\ContentType;
use Google\Cloud\Asset\V1\TimeWindow;
use Google\Protobuf\Timestamp;
/**
* @param string $projectId Tthe project Id for list assets.
* @param string[] $assetNames (Optional) Asset types to list for.
*/
function batch_get_assets_history(string $projectId, array $assetNames): void
{
$client = new AssetServiceClient();
$formattedParent = $client->projectName($projectId);
$contentType = ContentType::RESOURCE;
$readTimeWindow = new TimeWindow(['start_time' => new Timestamp(['seconds' => time()])]);
$request = (new BatchGetAssetsHistoryRequest())
->setParent($formattedParent)
->setContentType($contentType)
->setReadTimeWindow($readTimeWindow)
->setAssetNames($assetNames);
$resp = $client->batchGetAssetsHistory($request);
# Do things with response.
print($resp->serializeToString());
}
Python
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import asset_v1
# TODO project_id = 'Your Google Cloud Project ID'
# TODO asset_names = 'Your asset names list, e.g.:
# ["//storage.googleapis.com/[BUCKET_NAME]",]'
client = asset_v1 . AssetServiceClient ()
parent = f "projects/ { project_id } "
content_type = asset_v1 . ContentType . RESOURCE
read_time_window = asset_v1 . TimeWindow ()
response = client . batch_get_assets_history (
request = {
"parent" : parent ,
"asset_names" : asset_names ,
"content_type" : content_type ,
"read_time_window" : read_time_window ,
}
)
print ( f "assets: { response . assets } " )
Ruby
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/asset"
# project_id = 'YOUR_PROJECT_ID'
# asset names, e.g.: //storage.googleapis.com/[YOUR_BUCKET_NAME]
# asset_names = [ASSET_NAMES, COMMMA_DELIMTTED]
asset_service = Google :: Cloud :: Asset . asset_service
formatted_parent = asset_service . project_path project : project_id
content_type = :RESOURCE
read_time_window = {
start_time : {
seconds : Time . now . getutc . to_i
}
}
response = asset_service . batch_get_assets_history (
parent : formatted_parent ,
content_type : content_type ,
read_time_window : read_time_window ,
asset_names : asset_names
)
# Do things with the response
puts response . assets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
