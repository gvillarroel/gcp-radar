---
title: "Cloud Asset Inventory client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/client-libraries
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/client-libraries
  title: "Cloud Asset Inventory client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Reference
Send feedback
Cloud Asset Inventory client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Cloud Asset Inventory API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C#
If you are using Visual Studio 2017 or higher, open the NuGet package manager
window and type the following:
Install-Package Google.Cloud.Asset.V1
If you are using .NET Core command-line interface tools to install your
dependencies, run the following command:
dotnet add package Google.Cloud.Asset.V1
If you're using the Paket
command-line interface to install your dependencies, run the following
command:
paket add Google.Cloud.Asset.V1
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/asset/apiv1
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven , add the
following code to the dependencies in your pom.xml file:
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - asset < / artifactId >
< version>DESIRED_VERSION_NUMBER < / version >
< / dependency >
If you are using Gradle , add the following
code to your dependencies:
compile group : ' com . google . cloud ' , name : ' google - cloud - asset ' , version : ' DESIRED_VERSION_NUMBER '
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/asset
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-asset
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-asset
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-asset
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
The following example shows how to use the client library.
C#
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
Additional resources
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-product on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-product on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-product on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-product on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-product on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-product on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-product on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
