---
title: "Create and manage assets \_|\_ Live Stream API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/livestream/docs/how-to/create-assets
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/livestream/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/livestream/docs/how-to/create-assets
  title: "Create and manage assets \_|\_ Live Stream API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Live Stream API
Guides
Send feedback
Create and manage assets
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create and manage Live Stream API assets. Assets
are video or images that can be used
with the Live Stream API. You can use an asset to
insert a slate into a live stream .
Supported media formats
The Live Stream API supports the following media codecs and formats for assets.
Input media Supported formats
Video file formats MP4, MPEG-TS, FLV
Video codecs H.264
Audio codecs AAC, AC3, MP2, MP3
Image file formats JPG
Maximum size 250 MB
Maximum resolutions 1920x1080
Set up your Google Cloud project and authentication
If you have not created a
Google Cloud project and credentials, see
Before you begin .
Create an asset
To create an asset, use the
projects.locations.assets.create method. The following sample
creates a video asset.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location in which to create the
asset; use one of the supported regions
Show locations
us-central1
us-east1
us-east4
us-west1
us-west2
northamerica-northeast1
southamerica-east1
asia-east1
asia-east2
asia-south1
asia-northeast1
asia-southeast1
australia-southeast1
europe-north1
europe-west1
europe-west2
europe-west3
europe-west4
ASSET_ID : a user-defined identifier for the new
asset to create. This value must be 1-63 characters, begin and end with [a-z0-9] , and
can contain dashes (-) between characters. For example, my-asset .
ASSET_URI : the URI of the video in your
Cloud Storage bucket to use, such as gs://my-bucket/my-video.mp4 (see the
supported media formats )
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
cat > request.json ASSET_URI "
}
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /assets?assetId= ASSET_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
@'
{
"video": {
"uri": " ASSET_URI "
}
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /assets?assetId= ASSET_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata",
"createTime": CREATE_TIME ,
"target": "projects/ PROJECT_NUMBER /locations/ LOCATION /assets/ ASSET_ID ",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
This command creates a long-running operation (LRO) that you can use
to track the progress of your request. See
Manage long-running operations
for more information.
C#
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API C# API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Video.LiveStream.V1 ;
using Google.LongRunning ;
using System.Threading.Tasks ;
public class CreateAssetSample
{
public async Task<Asset> CreateAssetAsync (
string projectId , string locationId , string assetId , string assetUri )
{
// Create the client.
LivestreamServiceClient client = LivestreamServiceClient . Create ();
CreateAssetRequest request = new CreateAssetRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( projectId , locationId ),
AssetId = assetId ,
Asset = new Asset
{
Video = new Asset . Types . VideoAsset
{
Uri = assetUri
}
}
};
// Make the request.
Operation<Asset , OperationMetadata > response = await client . CreateAssetAsync ( request );
// Poll until the returned long-running operation is complete.
Operation<Asset , OperationMetadata > completedResponse = await response . PollUntilCompletedAsync ();
// Retrieve the operation result.
return completedResponse . Result ;
}
}
Go
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Go API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
livestream "cloud.google.com/go/video/livestream/apiv1"
"cloud.google.com/go/video/livestream/apiv1/livestreampb"
)
// createAsset creates an asset. This asset references a video file
// in Cloud Storage.
func createAsset ( w io . Writer , projectID , location , assetID , assetURI string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// assetID := "my-asset"
// assetURI := "gs://my-bucket/my-video.mp4"
ctx := context . Background ()
client , err := livestream . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & livestreampb . CreateAssetRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
AssetId : assetID ,
Asset : & livestreampb . Asset {
Resource : & livestreampb . Asset_Video {
Video : & livestreampb . Asset_VideoAsset {
Uri : assetURI ,
},
},
},
}
// Creates the asset.
op , err := client . CreateAsset ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateAsset: %w" , err )
}
response , err := op . Wait ( ctx )
if err != nil {
return fmt . Errorf ( "Wait: %w" , err )
}
fmt . Fprintf ( w , "Asset: %v" , response . Name )
return nil
}
Java
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Java API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.livestream.v1. Asset ;
import com.google.cloud.video.livestream.v1. Asset . VideoAsset ;
import com.google.cloud.video.livestream.v1. CreateAssetRequest ;
import com.google.cloud.video.livestream.v1. LivestreamServiceClient ;
import com.google.cloud.video.livestream.v1. LocationName ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class CreateAsset {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String assetId = "my-asset-id" ;
String assetUri = "gs://my-bucket/my-video.mp4" ;
createAsset ( projectId , location , assetId , assetUri );
}
public static void createAsset ( String projectId , String location , String assetId , String assetUri )
throws InterruptedException , ExecutionException , TimeoutException , IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ();
var createAssetRequest =
CreateAssetRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , location ). toString ())
. setAssetId ( assetId )
. setAsset (
Asset . newBuilder ()
. setVideo (
VideoAsset . newBuilder ()
. setUri ( assetUri )
. build ())
. build ())
. build ();
// First API call in a project can take up to 15 minutes.
Asset result =
livestreamServiceClient . createAssetAsync ( createAssetRequest ). get ( 15 , TimeUnit . MINUTES );
System . out . println ( "Asset: " + result . getName ());
livestreamServiceClient . close ();
}
}
Node.js
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Node.js API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// assetId = 'my-asset';
// assetUri = 'gs://my-bucket/my-video.mp4';
// Imports the Livestream library
const { LivestreamServiceClient } = require ( ' @google-cloud/livestream ' ). v1 ;
// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient ();
async function createAsset () {
// Construct request
const request = {
parent : livestreamServiceClient . locationPath ( projectId , location ),
assetId : assetId ,
asset : {
video : {
uri : assetUri ,
},
},
};
// Run request
const [ operation ] = await livestreamServiceClient . createAsset ( request );
const response = await operation . promise ();
const [ asset ] = response ;
console . log ( `Asset: ${ asset . name } ` );
}
createAsset ();
PHP
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API PHP API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\LiveStream\V1\Asset;
use Google\Cloud\Video\LiveStream\V1\Client\LivestreamServiceClient;
use Google\Cloud\Video\LiveStream\V1\CreateAssetRequest;
/**
* Creates an asset. You can use an asset to create a slate.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the asset
* @param string $assetId The ID of the asset to be created
* @param string $assetUri The Cloud Storage URI of the asset
*/
function create_asset(
string $callingProjectId,
string $location,
string $assetId,
string $assetUri
): void {
// Instantiate a client.
$livestreamClient = new LivestreamServiceClient();
$parent = $livestreamClient->locationName($callingProjectId, $location);
$asset = (new Asset())
->setVideo(
(new Asset\VideoAsset())
->setUri($assetUri));
// Run the asset creation request. The response is a long-running operation ID.
$request = (new CreateAssetRequest())
->setParent($parent)
->setAsset($asset)
->setAssetId($assetId);
$operationResponse = $livestreamClient->createAsset($request);
$operationResponse->pollUntilComplete();
if ($operationResponse->operationSucceeded()) {
$result = $operationResponse->getResult();
// Print results
printf('Asset: %s' . PHP_EOL, $result->getName());
} else {
$error = $operationResponse->getError();
// handleError($error)
}
}
Python
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Python API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video import live_stream_v1
from google.cloud.video.live_stream_v1.services.livestream_service import (
LivestreamServiceClient ,
)
def create_asset (
project_id : str , location : str , asset_id : str , asset_uri : str
) - > live_stream_v1 . types . Asset :
"""Creates an asset.
Args:
project_id: The GCP project ID.
location: The location in which to create the asset.
asset_id: The user-defined asset ID.
asset_uri: The asset URI (e.g., 'gs://my-bucket/my-video.mp4')."""
client = LivestreamServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } "
asset = live_stream_v1 . types . Asset (
video = live_stream_v1 . types . Asset . VideoAsset (
uri = asset_uri ,
)
)
operation = client . create_asset ( parent = parent , asset = asset , asset_id = asset_id )
response = operation . result ( 600 )
print ( f "Asset: { response . name } " )
return response
Ruby
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Ruby API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/video/live_stream"
##
# Create an asset
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param location [String] The location (e.g. "us-central1")
# @param asset_id [String] Your asset name (e.g. "my-asset")
# @param asset_uri [String] Your asset URI (e.g. "gs://my-bucket/my-video.mp4")
#
def create_asset project_id :, location :, asset_id :, asset_uri :
# Create a Live Stream client.
client = Google :: Cloud :: Video :: LiveStream . livestream_service
# Build the resource name of the parent.
parent = client . location_path project : project_id , location : location
# Set the asset fields.
new_asset = {
video : {
uri : asset_uri
}
}
operation = client . create_asset parent : parent , asset : new_asset , asset_id : asset_id
# The returned object is of type Gapic::Operation. You can use this
# object to check the status of an operation, cancel it, or wait
# for results. Here is how to block until completion:
operation . wait_until_done!
# Print the asset name.
puts "Asset: #{ operation . response . name } "
end
Get asset details
To get the details of the asset, use the
projects.locations.assets.get method.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location of your asset; use one of
the supported regions
Show locations
us-central1
us-east1
us-east4
us-west1
us-west2
northamerica-northeast1
southamerica-east1
asia-east1
asia-east2
asia-south1
asia-northeast1
asia-southeast1
australia-southeast1
europe-north1
europe-west1
europe-west2
europe-west3
europe-west4
ASSET_ID : the user-defined identifier for the
asset
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /assets/ ASSET_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /assets/ ASSET_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /assets/ ASSET_ID ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"video": {
"uri": " ASSET_URI "
},
"crc32c": "pKNslg==",
"state": "ACTIVE"
}
C#
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API C# API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Video.LiveStream.V1 ;
public class GetAssetSample
{
public Asset GetAsset (
string projectId , string locationId , string assetId )
{
// Create the client.
LivestreamServiceClient client = LivestreamServiceClient . Create ();
GetAssetRequest request = new GetAssetRequest
{
AssetName = AssetName . FromProjectLocationAsset ( projectId , locationId , assetId )
};
// Make the request.
Asset response = client . GetAsset ( request );
return response ;
}
}
Go
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Go API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
livestream "cloud.google.com/go/video/livestream/apiv1"
"cloud.google.com/go/video/livestream/apiv1/livestreampb"
)
// getAsset gets a previously-created asset.
func getAsset ( w io . Writer , projectID , location , assetID string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// assetID := "my-asset-id"
ctx := context . Background ()
client , err := livestream . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & livestreampb . GetAssetRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/assets/%s" , projectID , location , assetID ),
}
response , err := client . GetAsset ( ctx , req )
if err != nil {
return fmt . Errorf ( "GetAsset: %w" , err )
}
fmt . Fprintf ( w , "Asset: %v" , response . Name )
return nil
}
Java
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Java API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.livestream.v1. Asset ;
import com.google.cloud.video.livestream.v1. AssetName ;
import com.google.cloud.video.livestream.v1. LivestreamServiceClient ;
import java.io.IOException ;
public class GetAsset {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String assetId = "my-asset-id" ;
getAsset ( projectId , location , assetId );
}
public static void getAsset ( String projectId , String location , String assetId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. In this example, try-with-resources is used
// which automatically calls close() on the client to clean up resources.
try ( LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ()) {
AssetName name = AssetName . of ( projectId , location , assetId );
Asset response = livestreamServiceClient . getAsset ( name );
System . out . println ( "Asset: " + response . getName ());
}
}
}
Node.js
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Node.js API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// assetId = 'my-asset';
// Imports the Livestream library
const { LivestreamServiceClient } = require ( ' @google-cloud/livestream ' ). v1 ;
// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient ();
async function getAsset () {
// Construct request
const request = {
name : livestreamServiceClient . assetPath ( projectId , location , assetId ),
};
const [ asset ] = await livestreamServiceClient . getAsset ( request );
console . log ( `Asset: ${ asset . name } ` );
}
getAsset ();
PHP
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API PHP API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\LiveStream\V1\Client\LivestreamServiceClient;
use Google\Cloud\Video\LiveStream\V1\GetAssetRequest;
/**
* Gets an asset.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the asset
* @param string $assetId The ID of the asset
*/
function get_asset(
string $callingProjectId,
string $location,
string $assetId
): void {
// Instantiate a client.
$livestreamClient = new LivestreamServiceClient();
$formattedName = $livestreamClient->assetName($callingProjectId, $location, $assetId);
// Get the asset.
$request = (new GetAssetRequest())
->setName($formattedName);
$response = $livestreamClient->getAsset($request);
// Print results
printf('Asset: %s' . PHP_EOL, $response->getName());
}
Python
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Python API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video import live_stream_v1
from google.cloud.video.live_stream_v1.services.livestream_service import (
LivestreamServiceClient ,
)
def get_asset (
project_id : str , location : str , asset_id : str
) - > live_stream_v1 . types . Asset :
"""Gets an asset.
Args:
project_id: The GCP project ID.
location: The location of the asset.
asset_id: The user-defined asset ID."""
client = LivestreamServiceClient ()
name = f "projects/ { project_id } /locations/ { location } /assets/ { asset_id } "
response = client . get_asset ( name = name )
print ( f "Asset: { response . name } " )
return response
Ruby
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Ruby API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/video/live_stream"
##
# Get an asset
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param location [String] The location (e.g. "us-central1")
# @param asset_id [String] Your asset name (e.g. "my-asset")
#
def get_asset project_id :, location :, asset_id :
# Create a Live Stream client.
client = Google :: Cloud :: Video :: LiveStream . livestream_service
# Build the resource name of the asset.
name = client . asset_path project : project_id , location : location , asset : asset_id
# Get the asset.
asset = client . get_asset name : name
# Print the asset name.
puts "Asset: #{ asset . name } "
end
List assets
To list all of the assets you created in a location, use the
projects.locations.assets.list method.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location of your assets; use one of
the supported regions
Show locations
us-central1
us-east1
us-east4
us-west1
us-west2
northamerica-northeast1
southamerica-east1
asia-east1
asia-east2
asia-south1
asia-northeast1
asia-southeast1
australia-southeast1
europe-north1
europe-west1
europe-west2
europe-west3
europe-west4
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /assets"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /assets" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"assets": [
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /assets/ ASSET_ID ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"video": {
"uri": " ASSET_URI "
},
"crc32c": "pKNslg==",
"state": "ACTIVE"
},
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /assets/ my-other-asset ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"video": {
"uri": " my-other-asset-uri "
},
"crc32c": "pLNslg==",
"state": "ACTIVE"
}
]
}
C#
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API C# API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax ;
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Video.LiveStream.V1 ;
using System.Collections.Generic ;
using System.Linq ;
public class ListAssetsSample
{
public IList<Asset> ListAssets (
string projectId , string regionId )
{
// Create the client.
LivestreamServiceClient client = LivestreamServiceClient . Create ();
ListAssetsRequest request = new ListAssetsRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( projectId , regionId )
};
// Make the request.
PagedEnumerable<ListAssetsResponse , Asset > response = client . ListAssets ( request );
// The returned sequence will lazily perform RPCs as it's being iterated over.
return response . ToList ();
}
}
Go
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Go API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
"google.golang.org/api/iterator"
livestream "cloud.google.com/go/video/livestream/apiv1"
"cloud.google.com/go/video/livestream/apiv1/livestreampb"
)
// listAssets lists all assets for a given location.
func listAssets ( w io . Writer , projectID , location string ) error {
// projectID := "my-project-id"
// location := "us-central1"
ctx := context . Background ()
client , err := livestream . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & livestreampb . ListAssetsRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
}
it := client . ListAssets ( ctx , req )
fmt . Fprintln ( w , "Assets:" )
for {
response , err := it . Next ()
if err == iterator . Done {
break
}
if err != nil {
return fmt . Errorf ( "ListAssets: %w" , err )
}
fmt . Fprintln ( w , response . GetName ())
}
return nil
}
Java
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Java API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.livestream.v1. Asset ;
import com.google.cloud.video.livestream.v1. ListAssetsRequest ;
import com.google.cloud.video.livestream.v1. LivestreamServiceClient ;
import com.google.cloud.video.livestream.v1. LocationName ;
import java.io.IOException ;
public class ListAssets {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
listAssets ( projectId , location );
}
public static void listAssets ( String projectId , String location ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. In this example, try-with-resources is used
// which automatically calls close() on the client to clean up resources.
try ( LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ()) {
var listAssetsRequest =
ListAssetsRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , location ). toString ())
. build ();
LivestreamServiceClient . ListAssetsPagedResponse response =
livestreamServiceClient . listAssets ( listAssetsRequest );
System . out . println ( "Assets:" );
for ( Asset asset : response . iterateAll ()) {
System . out . println ( asset . getName ());
}
}
}
}
Node.js
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Node.js API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// Imports the Livestream library
const { LivestreamServiceClient } = require ( ' @google-cloud/livestream ' ). v1 ;
// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient ();
async function listAssets () {
const iterable = await livestreamServiceClient . listAssetsAsync ({
parent : livestreamServiceClient . locationPath ( projectId , location ),
});
console . info ( 'Assets:' );
for await ( const response of iterable ) {
console . log ( response . name );
}
}
listAssets ();
PHP
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API PHP API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\LiveStream\V1\Client\LivestreamServiceClient;
use Google\Cloud\Video\LiveStream\V1\ListAssetsRequest;
/**
* Lists the assets for a given location.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the assets
*/
function list_assets(
string $callingProjectId,
string $location
): void {
// Instantiate a client.
$livestreamClient = new LivestreamServiceClient();
$parent = $livestreamClient->locationName($callingProjectId, $location);
$request = (new ListAssetsRequest())
->setParent($parent);
$response = $livestreamClient->listAssets($request);
// Print the asset list.
$assets = $response->iterateAllElements();
print('Assets:' . PHP_EOL);
foreach ($assets as $asset) {
printf('%s' . PHP_EOL, $asset->getName());
}
}
Python
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Python API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video.live_stream_v1.services.livestream_service import (
LivestreamServiceClient ,
pagers ,
)
def list_assets ( project_id : str , location : str ) - > pagers . ListAssetsPager :
"""Lists all assets in a location.
Args:
project_id: The GCP project ID.
location: The location of the assets."""
client = LivestreamServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } "
page_result = client . list_assets ( parent = parent )
print ( "Assets:" )
responses = []
for response in page_result :
print ( response . name )
responses . append ( response )
return responses
Ruby
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Ruby API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/video/live_stream"
##
# List the assets
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param location [String] The location (e.g. "us-central1")
#
def list_assets project_id :, location :
# Create a Live Stream client.
client = Google :: Cloud :: Video :: LiveStream . livestream_service
# Build the resource name of the parent.
parent = client . location_path project : project_id , location : location
# Get the list of assets.
response = client . list_assets parent : parent
puts "Assets:"
# Print out all assets.
response . each do | asset |
puts asset . name
end
end
Delete an asset
To delete an asset, use the
projects.locations.assets.delete method.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location of your asset; use one of
the supported regions
Show locations
us-central1
us-east1
us-east4
us-west1
us-west2
northamerica-northeast1
southamerica-east1
asia-east1
asia-east2
asia-south1
asia-northeast1
asia-southeast1
australia-southeast1
europe-north1
europe-west1
europe-west2
europe-west3
europe-west4
ASSET_ID : the user-defined identifier for the
asset
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /assets/ ASSET_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /assets/ ASSET_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata",
"createTime": CREATE_TIME ,
"target": "projects/ PROJECT_NUMBER /locations/ LOCATION /assets/ ASSET_ID ",
"verb": "delete",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
This command creates a long-running operation (LRO) that you can use
to track the progress of your request. See
Manage long-running operations
for more information.
C#
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API C# API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Video.LiveStream.V1 ;
using Google.LongRunning ;
using Google.Protobuf.WellKnownTypes ;
using System.Threading.Tasks ;
public class DeleteAssetSample
{
public async Task DeleteAssetAsync (
string projectId , string locationId , string assetId )
{
// Create the client.
LivestreamServiceClient client = LivestreamServiceClient . Create ();
DeleteAssetRequest request = new DeleteAssetRequest
{
AssetName = AssetName . FromProjectLocationAsset ( projectId , locationId , assetId )
};
// Make the request.
Operation<Empty , OperationMetadata > response = await client . DeleteAssetAsync ( request );
// Poll until the returned long-running operation is complete.
await response . PollUntilCompletedAsync ();
}
}
Go
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Go API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
livestream "cloud.google.com/go/video/livestream/apiv1"
"cloud.google.com/go/video/livestream/apiv1/livestreampb"
)
// deleteAsset deletes a previously-created asset.
func deleteAsset ( w io . Writer , projectID , location , assetID string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// assetID := "my-asset"
ctx := context . Background ()
client , err := livestream . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & livestreampb . DeleteAssetRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/assets/%s" , projectID , location , assetID ),
}
op , err := client . DeleteAsset ( ctx , req )
if err != nil {
return fmt . Errorf ( "DeleteAsset: %w" , err )
}
err = op . Wait ( ctx )
if err != nil {
return fmt . Errorf ( "Wait: %w" , err )
}
fmt . Fprintf ( w , "Deleted asset" )
return nil
}
Java
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Java API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.livestream.v1. AssetName ;
import com.google.cloud.video.livestream.v1. DeleteAssetRequest ;
import com.google.cloud.video.livestream.v1. LivestreamServiceClient ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class DeleteAsset {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String assetId = "my-asset-id" ;
deleteAsset ( projectId , location , assetId );
}
public static void deleteAsset ( String projectId , String location , String assetId )
throws InterruptedException , ExecutionException , TimeoutException , IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ();
var deleteAssetRequest =
DeleteAssetRequest . newBuilder ()
. setName ( AssetName . of ( projectId , location , assetId ). toString ())
. build ();
// First API call in a project can take up to 10 minutes.
livestreamServiceClient . deleteAssetAsync ( deleteAssetRequest ). get ( 10 , TimeUnit . MINUTES );
System . out . println ( "Deleted asset" );
livestreamServiceClient . close ();
}
}
Node.js
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Node.js API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// assetId = 'my-asset';
// Imports the Livestream library
const { LivestreamServiceClient } = require ( ' @google-cloud/livestream ' ). v1 ;
// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient ();
async function deleteAsset () {
// Construct request
const request = {
name : livestreamServiceClient . assetPath ( projectId , location , assetId ),
};
// Run request
const [ operation ] = await livestreamServiceClient . deleteAsset ( request );
await operation . promise ();
console . log ( 'Deleted asset' );
}
deleteAsset ();
PHP
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API PHP API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\LiveStream\V1\Client\LivestreamServiceClient;
use Google\Cloud\Video\LiveStream\V1\DeleteAssetRequest;
/**
* Deletes an asset.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the asset
* @param string $assetId The ID of the asset to be deleted
*/
function delete_asset(
string $callingProjectId,
string $location,
string $assetId
): void {
// Instantiate a client.
$livestreamClient = new LivestreamServiceClient();
$formattedName = $livestreamClient->assetName($callingProjectId, $location, $assetId);
// Run the asset deletion request. The response is a long-running operation ID.
$request = (new DeleteAssetRequest())
->setName($formattedName);
$operationResponse = $livestreamClient->deleteAsset($request);
$operationResponse->pollUntilComplete();
if ($operationResponse->operationSucceeded()) {
// Print status
printf('Deleted asset %s' . PHP_EOL, $assetId);
} else {
$error = $operationResponse->getError();
// handleError($error)
}
}
Python
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Python API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video.live_stream_v1.services.livestream_service import (
LivestreamServiceClient ,
)
from google.protobuf import empty_pb2 as empty
def delete_asset ( project_id : str , location : str , asset_id : str ) - > empty . Empty :
"""Deletes an asset.
Args:
project_id: The GCP project ID.
location: The location of the asset.
asset_id: The user-defined asset ID."""
client = LivestreamServiceClient ()
name = f "projects/ { project_id } /locations/ { location } /assets/ { asset_id } "
operation = client . delete_asset ( name = name )
response = operation . result ( 600 )
print ( "Deleted asset" )
return response
Ruby
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Ruby API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/video/live_stream"
##
# Delete an asset
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param location [String] The location (e.g. "us-central1")
# @param asset_id [String] Your asset name (e.g. "my-asset")
#
def delete_asset project_id :, location :, asset_id :
# Create a Live Stream client.
client = Google :: Cloud :: Video :: LiveStream . livestream_service
# Build the resource name of the asset.
name = client . asset_path project : project_id , location : location , asset : asset_id
# Delete the asset.
operation = client . delete_asset name : name
# The returned object is of type Gapic::Operation. You can use this
# object to check the status of an operation, cancel it, or wait
# for results. Here is how to block until completion:
operation . wait_until_done!
# Print a success message.
puts "Deleted asset"
end
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
