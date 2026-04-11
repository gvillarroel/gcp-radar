---
title: "Export asset metadata to Cloud Storage \_|\_ Cloud Asset Inventory \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage
  title: "Export asset metadata to Cloud Storage \_|\_ Cloud Asset Inventory \_|\_\
    \ Google Cloud Documentation"
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
Export asset metadata to Cloud Storage
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to export the asset metadata of your organization,
folder, or project to a Cloud Storage bucket .
Before you begin
Enable the Cloud Asset Inventory API in the project you're running Cloud Asset Inventory commands
from.
Enable the Cloud Asset Inventory API
Make sure your account has the
correct role to call the Cloud Asset Inventory API .
For individual permissions for each call type, see
Permissions .
Create a Cloud Storage bucket to
export to, if you don't have one already.
Limitations
Cloud Storage buckets encrypted with custom Cloud Key Management Service
(Cloud KMS) keys are not supported.
The Cloud Storage bucket can't have a
retention policy set.
During export, the operation might create temporary files in the output
folder. Don't remove these temporary files while the operation is in progress.
After the operation is complete, the temporary files are removed
automatically.
The ACCESS_POLICY content type can only be exported at the
organization level.
If the file you're exporting to already exists and is in the process of being
exported to, a 400 error is returned.
To test permissions, Cloud Asset Inventory creates an empty file before exporting the
data, which sends out an extra Cloud Storage trigger event of
google.cloud.storage.object.v1.finalized .
Export an asset snapshot to Cloud Storage
gcloud
gcloud asset export \
-- SCOPE \
--billing-project = BILLING_PROJECT_ID \
--asset-types = ASSET_TYPE_1 , ASSET_TYPE_2 ,... \
--content-type = CONTENT_TYPE \
--relationship-types = RELATIONSHIP_TYPE_1 , RELATIONSHIP_TYPE_2 ,... \
--snapshot-time = " SNAPSHOT_TIME " \
-- OUTPUT_TYPE Provide the following values:
SCOPE : Use one of the following values:
project= PROJECT_ID , where PROJECT_ID is the
ID of the project that has the asset metadata you want to export.
folder= FOLDER_ID , where FOLDER_ID is the
ID of the folder that has the asset metadata you want to export.
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
ORGANIZATION_ID is the ID of the organization that has the asset metadata you want to export.
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
BILLING_PROJECT_ID : Optional. The project ID that the
default Cloud Asset Inventory service agent is in that has permissions to manage your
BigQuery datasets and tables.
Read more about setting the billing project .
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
OUTPUT_TYPE : Use one of the following values:
--output-path="gs:// BUCKET_NAME / FILE_NAME " to write
the output to a file, where:
BUCKET_NAME is the name of the Cloud Storage bucket to
write to.
FILE_NAME is the file to write to in your Cloud Storage
bucket.
--output-path-prefix="gs:// BUCKET_NAME / FOLDER_NAME " to write the output to a folder, where:
BUCKET_NAME is the name of the Cloud Storage bucket to
write to.
FOLDER_NAME is the folder to write to in your
Cloud Storage bucket. The output is split into subfolders named after
asset types . The subfolders must not already
exist in the folder that you specify.
See the gcloud CLI reference for
all options.
Example
Run the following command to export your resource metadata as it was on January 30,
2024 in the my-project project, to the file my-file.txt in the
Cloud Storage bucket my-bucket .
gcloud asset export \
--project = my-project \
--billing-project = my-project \
--content-type = resource \
--snapshot-time = " 2024-01-30 " \
--output-path = "gs:// my-bucket / my-file.txt " Example response
Export in progress for root asset [projects/my-project].
Use [gcloud asset operations describe projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000] to check the status of the operation.
REST
HTTP method and URL:
POST https://cloudasset.googleapis.com/v1/ SCOPE_PATH :exportAssets
Headers:
X-Goog-User-Project: BILLING_PROJECT_ID Request JSON body:
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
"outputConfig" : {
"gcsDestination" : {
OUTPUT_TYPE
}
}
} Provide the following values:
SCOPE_PATH : Use one of the following values:
The allowed values are:
projects/ PROJECT_ID , where PROJECT_ID is the
ID of the project that has the asset metadata you want to export.
projects/ PROJECT_NUMBER , where
PROJECT_NUMBER is the number of the project that has the asset metadata you want to export.
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
ID of the folder that has the asset metadata you want to export.
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
ORGANIZATION_ID is the ID of the organization that has the asset metadata you want to export.
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
BILLING_PROJECT_ID : The project ID that the
default Cloud Asset Inventory service agent is in that has permissions to manage your
BigQuery datasets and tables.
Read more about setting the billing project .
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
OUTPUT_TYPE : Use one of the following values:
"uri": "gs:// BUCKET_NAME / FILE_NAME " to write the
output to a file, where:
BUCKET_NAME is the name of the Cloud Storage bucket to
write to.
FILE_NAME is the file to write to in your Cloud Storage
bucket.
"uriPrefix": "gs:// BUCKET_NAME / FOLDER_NAME " to write the output to a folder, where:
BUCKET_NAME is the name of the Cloud Storage bucket to
write to.
FOLDER_NAME is the folder to write to in your
Cloud Storage bucket. The output is split into subfolders named after
asset types . The subfolders must not already
exist in the folder that you specify.
See the REST reference for all
options.
Command examples
Run one of the following commands to export your resource metadata as it was on
January 30, 2024 in the my-project project, to the file my-file.txt in
the Cloud Storage bucket my-bucket .
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
-H "X-Goog-User-Project: BILLING_PROJECT_ID " \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
-d '{
"contentType": "RESOURCE",
"readTime": "2024-01-30T00:00:00Z",
"outputConfig": {
"gcsDestination": {
"uri": "gs:// my-bucket / my-file "
}
}
}' \
https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets
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
"X-Goog-User-Project" = " BILLING_PROJECT_ID " ;
"Authorization" = "Bearer $cred"
}
$body = @"
{
"contentType": "RESOURCE",
"readTime": "2024-01-30T00:00:00Z",
"outputConfig": {
"gcsDestination": {
"uri": "gs:// my-bucket / my-file "
}
}
}
"@
Invoke-WebRequest `
-Method POST `
-Headers $headers `
-ContentType : "application/json; charset=utf-8" `
-Body $body `
-Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets" | Select-Object -Expand Content
Example response
{
"name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" ,
"metadata" : {
"@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" ,
"parent" : "projects/000000000000" ,
"readTime" : "2024-01-30T00:00:00Z" ,
"contentType" : "RESOURCE" ,
"outputConfig" : {
"gcsDestination" : {
"uri" : "gs://my-bucket/export.txt"
}
}
}
}
C#
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Asset.V1 ;
public class ExportAssetsSample
{
public ExportAssetsResponse ExportAssets ( string bucketName , string projectId )
{
string assetDumpFile = $"gs://{bucketName}/my-assets.txt" ;
// Create the client
AssetServiceClient client = AssetServiceClient . Create ();
// Build the request
ExportAssetsRequest request = new ExportAssetsRequest
{
ParentAsResourceName = ProjectName . FromProject ( projectId ),
OutputConfig = new OutputConfig
{
GcsDestination = new GcsDestination { Uri = assetDumpFile }
}
};
// Start the long-running export operation
var operation = client . ExportAssets ( request );
// Wait for it to complete (or fail)
operation = operation . PollUntilCompleted ();
// Return the result
return operation . Result ;
}
}
Go
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Sample asset-quickstart exports assets to given path.
package main
import (
"context"
"fmt"
"log"
"os"
asset "cloud.google.com/go/asset/apiv1"
"cloud.google.com/go/asset/apiv1/assetpb"
)
func main () {
ctx := context . Background ()
projectID := os . Getenv ( "GOOGLE_CLOUD_PROJECT" )
client , err := asset . NewClient ( ctx )
if err != nil {
log . Fatal ( err )
}
defer client . Close ()
bucketName := fmt . Sprintf ( "%s-for-assets" , projectID )
assetDumpFile := fmt . Sprintf ( "gs://%s/my-assets.txt" , bucketName )
req := & assetpb . ExportAssetsRequest {
Parent : fmt . Sprintf ( "projects/%s" , projectID ),
OutputConfig : & assetpb . OutputConfig {
Destination : & assetpb . OutputConfig_GcsDestination {
GcsDestination : & assetpb . GcsDestination {
ObjectUri : & assetpb . GcsDestination_Uri {
Uri : string ( assetDumpFile ),
},
},
},
},
}
operation , err := client . ExportAssets ( ctx , req )
if err != nil {
log . Fatal ( err )
}
response , err := operation . Wait ( ctx )
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
import com.google.cloud.asset.v1. ContentType ;
import com.google.cloud.asset.v1. ExportAssetsRequest ;
import com.google.cloud.asset.v1. ExportAssetsRequest .Builder ;
import com.google.cloud.asset.v1. ExportAssetsResponse ;
import com.google.cloud.asset.v1. GcsDestination ;
import com.google.cloud.asset.v1. OutputConfig ;
import com.google.cloud.asset.v1. ProjectName ;
import java.io.IOException ;
import java.util.Arrays ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class ExportAssetsExample {
// Use the default project Id.
private static final String projectId = ServiceOptions . getDefaultProjectId ();
/**
* Export assets for a project.
*
* @param exportPath where the results will be exported to
* @param contentType determines the schema for the table
* @param assetTypes a list of asset types to export. if empty, export all.
*/
public static void exportAssets ( String exportPath , ContentType contentType , String [] assetTypes )
throws IOException ,
IllegalArgumentException ,
InterruptedException ,
ExecutionException ,
TimeoutException {
try ( AssetServiceClient client = AssetServiceClient . create ()) {
ProjectName parent = ProjectName . of ( projectId );
OutputConfig outputConfig =
OutputConfig . newBuilder ()
. setGcsDestination ( GcsDestination . newBuilder (). setUri ( exportPath ). build ())
. build ();
Builder exportAssetsRequestBuilder =
ExportAssetsRequest . newBuilder ()
. setParent ( parent . toString ())
. setContentType ( contentType )
. setOutputConfig ( outputConfig );
if ( assetTypes . length > 0 ) {
exportAssetsRequestBuilder . addAllAssetTypes ( Arrays . asList ( assetTypes ));
}
ExportAssetsRequest request = exportAssetsRequestBuilder . build ();
ExportAssetsResponse response = client . exportAssetsAsync ( request ). get ( 5 , TimeUnit . MINUTES );
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
// const dumpFilePath = 'gs://my-bucket/my-assets.txt';
// const contentType = 'RESOURCE';
const { AssetServiceClient } = require ( ' @google-cloud/asset ' );
const client = new AssetServiceClient ();
async function exportAssets () {
const projectId = await client . getProjectId ();
const projectResource = `projects/ ${ projectId } ` ;
// TODO(developer): choose the dump file path
// const dumpFilePath = 'Dump file path, e.g.: gs://<my_bucket>/<my_asset_file>'
const request = {
parent : projectResource ,
contentType : contentType ,
outputConfig : {
gcsDestination : {
uri : dumpFilePath ,
},
},
};
// Handle the operation using the promise pattern.
const [ operation ] = await client . exportAssets ( request );
// Operation#promise starts polling for the completion of the operation.
const [ result ] = await operation . promise ();
// Do things with with the response.
console . log ( result );
}
exportAssets (). catch ( err = > {
throw err ;
});
PHP
To learn how to install and use the client library for Cloud Asset Inventory, see
Cloud Asset Inventory client libraries .
To authenticate to Cloud Asset Inventory, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Asset\V1\Client\AssetServiceClient;
use Google\Cloud\Asset\V1\ExportAssetsRequest;
use Google\Cloud\Asset\V1\GcsDestination;
use Google\Cloud\Asset\V1\OutputConfig;
/**
* Export assets for given project to specified dump file path.
*
* @param string $projectId the project Id for export assets.
* @param string $dumpFilePath the file path where the assets will be dumped to.
* e.g.: gs://[bucket-name]/[asset-file-name].
*/
function export_assets(string $projectId, string $dumpFilePath)
{
$client = new AssetServiceClient();
$gcsDestination = new GcsDestination(['uri' => $dumpFilePath]);
$outputConfig = new OutputConfig(['gcs_destination' => $gcsDestination]);
$request = (new ExportAssetsRequest())
->setParent("projects/$projectId")
->setOutputConfig($outputConfig);
$resp = $client->exportAssets($request);
$resp->pollUntilComplete();
if ($resp->operationSucceeded()) {
print('The result is dumped to $dumpFilePath successfully.' . PHP_EOL);
} else {
$error = $resp->getError();
printf('There was an error: "%s".' . PHP_EOL, $error?->getMessage());
// handleError($error)
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
# TODO dump_file_path = 'Your asset dump file path'
client = asset_v1 . AssetServiceClient ()
parent = f "projects/ { project_id } "
output_config = asset_v1 . OutputConfig ()
output_config . gcs_destination . uri = dump_file_path
request_options = { "parent" : parent , "output_config" : output_config }
if content_type is not None :
request_options [ "content_type" ] = content_type
response = client . export_assets ( request = request_options )
print ( response . result ())
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
# Assets dump file path, e.g.: gs://[YOUR_BUCKET]/[YOUR_ASSETS_FILE]
# dump_file_path = 'YOUR_ASSET_DUMP_FILE_PATH'
output_config = {
gcs_destination : {
uri : dump_file_path
}
}
operation = asset_service . export_assets (
parent : formatted_parent , output_config : output_config
) do | op |
# Handle the error.
raise op . results . message if op . error?
end
operation . wait_until_done!
response = operation . response
puts "Exported assets to: #{ response . output_config . gcs_destination . uri } "
# Do things with the result
Check the status of an export
Exports take time to complete. To check if an export is done, you can query the
operation using its operation ID.
Be aware that even if your export is done, someone might have made another
export request to the same destination as a different operation. New export
requests to the same destination can be made after a previous request has
finished, or if more than 15 minutes has elapsed. Export requests made outside
of these conditions are rejected by Cloud Asset Inventory.
Caution: Operations are associated with an operation ID, which is a
UUID . This value
is potentially sensitive, because an operations request requires no additional
permissions to run successfully. Ensure that you only share operation IDs with
trusted users.
gcloud
To view the status of your export, complete the following instructions:
Get the OPERATION_PATH , which includes the operation
ID, from the response to your export request. The
OPERATION_PATH is shown in the response to the
export, which is formatted as follows:
projects/ PROJECT_NUMBER /operations/ExportAssets/ CONTENT_TYPE / OPERATION_ID
To check the status of your export, run following command with the
OPERATION_PATH :
gcloud asset operations describe OPERATION_PATH
REST
To view the status of your export, complete the following instructions:
Get the OPERATION_PATH , which includes the operation
ID, from the response to your export request. The
OPERATION_PATH is shown as the value of the name
field in the response to the export, which is formatted as follows:
projects/ PROJECT_NUMBER /operations/ExportAssets/ CONTENT_TYPE / OPERATION_ID
To check the status of your export, make the following request.
REST
HTTP method and URL:
GET https://cloudasset.googleapis.com/v1/ OPERATION_PATH
Command examples
curl (Linux, macOS, or Cloud Shell)
Note : The following command assumes that you have logged in to the
gcloud CLI with your user account by running
gcloud init
or
gcloud auth login , or by using
Cloud Shell , which automatically logs you into
the gcloud CLI. You can check the active account by running
gcloud auth list .
curl -X GET \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
https://cloudasset.googleapis.com/v1/ OPERATION_PATH
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
"Authorization" = "Bearer $cred"
}
Invoke-WebRequest `
-Method GET `
-Headers $headers `
-Uri "https://cloudasset.googleapis.com/v1/ OPERATION_PATH " | Select-Object -Expand Content
Example response
{
"name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" ,
"metadata" : {
"@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" ,
"parent" : "projects/000000000000" ,
"readTime" : "2024-01-30T00:00:00Z" ,
"contentType" : "RESOURCE" ,
"outputConfig" : {
"gcsDestination" : {
"uri" : "gs://my-bucket/export.txt"
}
}
}
}
View an asset snapshot
To view your asset snapshot:
Go to the Cloud Storage Buckets page in the Google Cloud console.
Go to Buckets
Click the name of the bucket you exported your asset snapshot to, and then
click the export filename.
Click Download to download your asset snapshot, and open it in your
text editor of choice.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
