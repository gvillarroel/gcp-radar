---
title: "List assets \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/listing-assets
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/listing-assets
  title: "List assets \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
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
List assets
Stay organized with collections
Save and categorize content based on your preferences.
You can list your assets in Google Cloud projects, folders, or organizations.
Before you begin
Enable the Cloud Asset Inventory API in the project you're running Cloud Asset Inventory commands
from.
Enable the Cloud Asset Inventory API
Make sure your account has the
correct role to call the Cloud Asset Inventory API .
For individual permissions for each call type, see
Permissions .
Limitations
When listing BigQuery table data, not all fields are supported.
Frequently changing asset fields in BigQuery metadata such as
numBytes , numLongTermBytes , numPhysicalBytes , and numRows are assigned
null values.
List your assets
Note: Listing assets might not meet the performance requirements of large-scale
customers. If you're experiencing timeouts,
export the data instead.
Console
The Google Cloud console uses the SearchAllResources API to
request data, which means you can only view assets with the
RESOURCE
content type . To view other content types, or to filter by more
precise criteria, use the gcloud CLI, REST, or a client library
instead.
To list resource metadata for your project, folder, or organization,
complete the following steps:
In the Google Cloud console, go to the Asset Inventory
page.
Go to Asset Inventory
Change to the project, folder, or organization you want to list
resources in.
Click the Resource tab.
In the Filter results panel, select the resource types, projects,
or locations to filter the results by.
To view a resource's metadata, click the resource's display name in the
results panel.
gcloud
gcloud asset list \
-- SCOPE \
--asset-types = ASSET_TYPE_1 , ASSET_TYPE_2 ,... \
--content-type = CONTENT_TYPE \
--relationship-types = RELATIONSHIP_TYPE_1 , RELATIONSHIP_TYPE_2 ,... \
--snapshot-time = " SNAPSHOT_TIME " Provide the following values:
SCOPE : Use one of the following values:
project= PROJECT_ID , where PROJECT_ID is the
ID of the project that has the asset you want to retrieve.
folder= FOLDER_ID , where FOLDER_ID is the
ID of the folder that has the asset you want to retrieve.
How to find the ID of a Google Cloud folder
Google Cloud console
To find the ID of a Google Cloud folder, complete the following steps:
Go to the Google Cloud console.
Go to the Google Cloud console
Click the switcher list box in the menu bar.
Select your organization from the list box.
Search for your folder name. The folder ID is shown next to the folder name.
gcloud CLI
You can retrieve the ID of a Google Cloud folder that's located at the organization level with the following command:
gcloud resource-manager folders list \
--organization = $( gcloud organizations describe ORGANIZATION_NAME \
--format = "value(name.segment(1))" ) \
--filter = '"DISPLAY_NAME":" TOP_LEVEL_FOLDER_NAME "' \
--format = "value(ID)"
Where TOP_LEVEL_FOLDER_NAME is a partial or full string match for the
folder's name. Remove the --format flag to see more information about the
found folders.
The previous command doesn't return the IDs of subfolders within folders. To do so,
run the following command using a top level folder's ID:
gcloud resource-manager folders list --folder = FOLDER_ID
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
ASSET_TYPE_# : Optional. A comma-separated list of
searchable asset types .
RE2-compatible regular expressions are supported. If the regular expression doesn't match
any supported asset type, an INVALID_ARGUMENT error is returned. When
--asset-types isn't specified, all asset types are returned.
CONTENT_TYPE : Optional. The
content type of the metadata that you want to retrieve. When
--content-type isn't specified, only basic information is returned, such as asset names, the last time the
assets were updated, and what projects, folders, and organizations they belong to.
RELATIONSHIP_TYPE_# : Optional. Requires access to the
Security Command Center Premium or Enterprise tier . A comma-separated list of
asset relationship types that you want to
retrieve. You must set CONTENT_TYPE to RELATIONSHIP for
this to work.
SNAPSHOT_TIME : Optional. The time at which you want to
take a snapshot of your assets, in
gcloud topic datetime format . The value must be no more than 35 days in the past. When
--snapshot-time isn't specified, a snapshot is taken at the current time.
See the gcloud CLI reference for
all options.
Example
The following command gets a resource metadata snapshot of Compute Engine
instances as of January 30, 2024 ( 2024-01-30 ) in the my-project
project.
Before running this command, make sure to change the snapshot time to be within the last 35 days,
and change the project name.
gcloud asset list \
--project = my-project \
--asset-types = compute.googleapis.com/Instance \
--content-type = resource \
--snapshot-time = " 2024-01-30 " Example response
---
ancestors:
- projects/000000000000
- folders/000000000000
- organizations/000000000000
assetType: compute.googleapis.com/Instance
name: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-name
resource:
data:
ASSET_METADATA
updateTime: '2024-01-30T00:00:00.000000Z'
REST
HTTP method and URL:
POST https://cloudasset.googleapis.com/v1/ SCOPE_PATH /assets
Note : You can use a GET method for this request with parameters as a query
string. However, the request URL is
length limited , meaning the server rejects the
request if the query string is too long. To avoid length restrictions, use a POST
request instead, set a header of X-HTTP-Method-Override: GET , and use a JSON body
for your parameters.
Request JSON body:
{
"assetTypes" : [
" ASSET_TYPE_1 " ,
" ASSET_TYPE_2 " ,
"..."
],
"contentType" : " CONTENT_TYPE " ,
"relationshipTypes" : [
" RELATIONSHIP_TYPE_1 " ,
" RELATIONSHIP_TYPE_2 " ,
"..."
],
"readTime" : " SNAPSHOT_TIME " ,
"pageSize" : " PAGE_SIZE " ,
"pageToken" : " PAGE_TOKEN "
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
folders/ FOLDER_ID , where FOLDER_ID is the
ID of the folder that has the asset you want to retrieve.
How to find the ID of a Google Cloud folder
Google Cloud console
To find the ID of a Google Cloud folder, complete the following steps:
Go to the Google Cloud console.
Go to the Google Cloud console
Click the switcher list box in the menu bar.
Select your organization from the list box.
Search for your folder name. The folder ID is shown next to the folder name.
gcloud CLI
You can retrieve the ID of a Google Cloud folder that's located at the organization level with the following command:
gcloud resource-manager folders list \
--organization = $( gcloud organizations describe ORGANIZATION_NAME \
--format = "value(name.segment(1))" ) \
--filter = '"DISPLAY_NAME":" TOP_LEVEL_FOLDER_NAME "' \
--format = "value(ID)"
Where TOP_LEVEL_FOLDER_NAME is a partial or full string match for the
folder's name. Remove the --format flag to see more information about the
found folders.
The previous command doesn't return the IDs of subfolders within folders. To do so,
run the following command using a top level folder's ID:
gcloud resource-manager folders list --folder = FOLDER_ID
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
ASSET_TYPE_# : Optional. An array of
searchable asset types .
RE2-compatible regular expressions are supported. If the regular expression doesn't match
any supported asset type, an INVALID_ARGUMENT error is returned. When
assetTypes isn't specified, all asset types are returned.
CONTENT_TYPE : Optional. The
content type of the metadata that you want to retrieve. When contentType isn't specified, only basic information is returned, such as asset names, the last time the
assets were updated, and what projects, folders, and organizations they belong to.
RELATIONSHIP_TYPE_# : Optional. Requires access to the
Security Command Center Premium or Enterprise tier . A comma-separated list of
asset relationship types that you want to
retrieve. You must set CONTENT_TYPE to RELATIONSHIP for
this to work.
SNAPSHOT_TIME : Optional. The time at which you want to
take a snapshot of your assets, in
RFC 3339 format . The value must be no more than 35 days in the past. When readTime isn't specified, a snapshot is taken at the current time.
PAGE_SIZE : Optional. The number of results to return per
page. The maximum is 500. If the value is set to 0 or a negative value, an
appropriate default is selected. A nextPageToken is returned to retrieve
subsequent results.
PAGE_TOKEN : Optional. Long request responses are separated
over multiple pages. When pageToken isn't specified, the first page is returned.
Subsequent pages can be called by using the previous response's nextPageToken as
the pageToken value.
See the REST reference for all
options.
Command examples
The following commands get a resource metadata snapshot of Compute Engine
instances as of January 30, 2024 ( 2024-01-30T00:00:00Z ) in the
my-project project.
Before running any of these commands, make sure to change the snapshot time to be within the last
35 days, and change the project name.
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
"assetTypes": ["compute.googleapis.com/Instance"],
"contentType": "RESOURCE",
"readTime": " 2024-01-30T00:00:00Z "
}' \
https://cloudasset.googleapis.com/v1/projects/ my-project /assets
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
"assetTypes": ["compute.googleapis.com/Instance"],
"contentType": "RESOURCE",
"readTime": " 2024-01-30T00:00:00Z "
}
"@
Invoke-WebRequest `
-Method POST `
-Headers $headers `
-ContentType : "application/json; charset=utf-8" `
-Body $body `
-Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /assets" | Select-Object -Expand Content
Example response
{
"readTime" : "2024-01-30T00:00:00Z" ,
"assets" : [
{
"name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-name" ,
"assetType" : "compute.googleapis.com/Instance" ,
"resource" : {
"version" : "v1" ,
"discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1" ,
"discoveryName" : "Instance" ,
"parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" ,
"data" : {
ASSET_METADATA
},
"location" : "us-central1-a"
},
"ancestors" : [
"projects/000000000000" ,
"folders/000000000000" ,
"organizations/000000000000"
],
"updateTime" : "2024-01-30T00:00:00.000000Z"
}
]
}
C#
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax ;
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Asset.V1 ;
public class ListAssetsSample
{
public PagedEnumerable<ListAssetsResponse , Asset > ListAssets ( string projectId )
{
// Create the client.
AssetServiceClient client = AssetServiceClient . Create ();
// Build the request.
ListAssetsRequest request = new ListAssetsRequest
{
ParentAsResourceName = ProjectName . FromProject ( projectId ),
ContentType = ContentType . Resource ,
};
// Call the API.
PagedEnumerable<ListAssetsResponse , Asset > response = client . ListAssets ( request );
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
// Sample list-assets list assets.
package main
import (
"context"
"fmt"
"log"
"os"
"google.golang.org/api/iterator"
asset "cloud.google.com/go/asset/apiv1"
"cloud.google.com/go/asset/apiv1/assetpb"
)
func main () {
ctx := context . Background ()
client , err := asset . NewClient ( ctx )
if err != nil {
log . Fatal ( err )
}
defer client . Close ()
projectID := os . Getenv ( "GOOGLE_CLOUD_PROJECT" )
assetType := "storage.googleapis.com/Bucket"
req := & assetpb . ListAssetsRequest {
Parent : fmt . Sprintf ( "projects/%s" , projectID ),
AssetTypes : [] string { assetType },
ContentType : assetpb . ContentType_RESOURCE ,
}
// Call ListAssets API to get an asset iterator.
it := client . ListAssets ( ctx , req )
// Traverse and print the first 10 listed assets in response.
for i := 0 ; i < 10 ; i ++ {
response , err := it . Next ()
if err == iterator . Done {
break
}
if err != nil {
log . Fatal ( err )
}
fmt . Println ( response )
}
}
Java
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Google Cloud client library
public class ListAssetsExample {
public static void listAssets () throws IOException , IllegalArgumentException {
// The project id of the asset parent to list.
String projectId = "YOUR_PROJECT_ID" ;
// The asset types to list. E.g.,
// ["storage.googleapis.com/Bucket", "bigquery.googleapis.com/Table"].
// See full list of supported asset types at
// https://cloud.google.com/asset-inventory/docs/supported-asset-types.
String [] assetTypes = { "YOUR_ASSET_TYPES_TO_LIST" };
// The asset content type to list. E.g., ContentType.CONTENT_TYPE_UNSPECIFIED.
// See full list of content types at
// https://cloud.google.com/asset-inventory/docs/reference/rpc/google.cloud.asset.v1#contenttype
ContentType contentType = ContentType . CONTENT_TYPE_UNSPECIFIED ;
listAssets ( projectId , assetTypes , contentType );
}
public static void listAssets ( String projectId , String [] assetTypes , ContentType contentType )
throws IOException , IllegalArgumentException {
try ( AssetServiceClient client = AssetServiceClient . create ()) {
ProjectName parent = ProjectName . of ( projectId );
// Build initial ListAssetsRequest without setting page token.
ListAssetsRequest request =
ListAssetsRequest . newBuilder ()
. setParent ( parent . toString ())
. addAllAssetTypes ( Arrays . asList ( assetTypes ))
. setContentType ( contentType )
. build ();
// Repeatedly call ListAssets until page token is empty.
ListAssetsPagedResponse response = client . listAssets ( request );
System . out . println ( response );
while ( ! response . getNextPageToken (). isEmpty ()) {
request = request . toBuilder (). setPageToken ( response . getNextPageToken ()). build ();
response = client . listAssets ( request );
System . out . println ( response );
}
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
// const assetTypes = 'storage.googleapis.com/Bucket,bigquery.googleapis.com/Table';
// const contentType = 'RESOURCE';
const util = require ( 'util' );
const { v1 } = require ( ' @google-cloud/asset ' );
const client = new v1 . AssetServiceClient ();
const projectId = await client . getProjectId ();
const projectResource = `projects/ ${ projectId } ` ;
// TODO(developer): Choose types of assets to list, such as 'storage.googleapis.com/Bucket':
// const assetTypes = 'storage.googleapis.com/Bucket,bigquery.googleapis.com/Table';
// Or simply use empty string to list all types of assets:
// const assetTypes = '';
const assetTypesList = assetTypes ? assetTypes . split ( ',' ) : [];
async function listAssets () {
const request = {
parent : projectResource ,
assetTypes : assetTypesList ,
contentType : contentType ,
// (Optional) Add readTime parameter to list assets at the given time instead of current time:
// readTime: { seconds: 1593988758 },
};
// Call cloud.assets.v1.ListAssets API.
const result = await client . listAssets ( request );
// Handle the response.
console . log ( util . inspect ( result , { depth : null }));
}
listAssets ();
PHP
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Asset\V1\Client\AssetServiceClient;
use Google\Cloud\Asset\V1\ListAssetsRequest;
/**
* @param string $projectId Tthe project Id for list assets.
* @param string[] $assetTypes (Optional) Asset types to list for.
* @param int $pageSize (Optional) Size of one result page.
*/
function list_assets(
string $projectId,
array $assetTypes = [],
int $pageSize = null
): void {
// Instantiate a client.
$client = new AssetServiceClient();
// Run request
$request = (new ListAssetsRequest())
->setParent("projects/$projectId")
->setAssetTypes($assetTypes)
->setPageSize($pageSize);
$response = $client->listAssets($request);
// Print the asset names in the result
foreach ($response->getPage() as $asset) {
print($asset->getName() . PHP_EOL);
}
}
Python
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import asset_v1
# TODO project_id = 'Your Google Cloud Project ID'
# TODO asset_types = 'Your asset type list, e.g.,
# ["storage.googleapis.com/Bucket","bigquery.googleapis.com/Table"]'
# TODO page_size = 'Num of assets in one page, which must be between 1 and
# 1000 (both inclusively)'
# TODO content_type ="Content type to list"
project_resource = f "projects/ { project_id } "
client = asset_v1 . AssetServiceClient ()
# Call ListAssets v1 to list assets.
response = client . list_assets (
request = {
"parent" : project_resource ,
"read_time" : None ,
"asset_types" : asset_types ,
"content_type" : content_type ,
"page_size" : page_size ,
}
)
for asset in response :
print ( asset )
Ruby
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/asset"
asset_service = Google :: Cloud :: Asset . asset_service
# project_id = 'YOUR_PROJECT_ID'
formatted_parent = asset_service . project_path project : project_id
content_type = :RESOURCE
response = asset_service . list_assets (
parent : formatted_parent ,
content_type : content_type
)
# Do things with the result
response . page . each do | resource |
puts resource
end
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
