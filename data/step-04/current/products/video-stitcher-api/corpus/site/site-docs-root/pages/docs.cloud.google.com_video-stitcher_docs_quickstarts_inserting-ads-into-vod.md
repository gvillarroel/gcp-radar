---
title: "Insert ads into VOD assets \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/quickstarts/inserting-ads-into-vod
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/quickstarts/inserting-ads-into-vod
  title: "Insert ads into VOD assets \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To enable the Video Stitcher API for your project, please reach out to your Account Representative or contact Sales to learn more.
Home
Documentation
AI and ML
Video Stitcher API
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Insert ads into VOD assets
This page shows you how to insert ads into the playback of a video-on-demand
(VOD) asset using the Video Stitcher API and curl , PowerShell, or the client
libraries.
Before you begin
Before you call the Video Stitcher API, complete the following steps:
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Video Stitcher API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable videostitcher.googleapis.com
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/videostitcher.admin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Video Stitcher API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable videostitcher.googleapis.com
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/videostitcher.admin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
This quickstart requires an MPEG-DASH manifest (MPD) file, or
an HTTP Live Streaming (HLS) manifest (M3U8) file, and the associated
segment files. You can use existing VOD files or you can
create VOD source files
using the Transcoder API.
As an option, you can use a content delivery network (CDN) with this
quickstart. If you haven't configured a CDN, follow the steps in the
Media CDN quickstart with
the following modifications:
Upload MPEG-DASH or HLS manifest files and
media segments into the Cloud Storage bucket.
You don't have to make your Cloud Storage bucket publicly readable.
You can use signed URLs or unsigned URLs.
Create a CDN key
The Video Stitcher API can fetch videos from a content delivery network (CDN).
If the video asset is protected by URL signing, a CDN key must be registered
with the Video Stitcher API.
Note: You can skip to the next section if you are not
using a CDN or if your CDN uses unsigned URLs.
To register the CDN key, use the
projects.locations.cdnKeys.create
method.
REST (Media CDN)
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project number;
this is located in the Project number field on the IAM Settings page
LOCATION : the location in which to create your CDN
key; use one of the supported regions
Show locations
us-central1
us-east1
us-west1
asia-east1
asia-south1
asia-southeast1
europe-west1
southamerica-east1
CDN_KEY_ID : A user-defined identifier for the CDN
key, which will become the final component of the CDN key's resource name.
This ID can only contain lower-case letters, numbers, and hyphens.
The first character must be a letter, the last character must be a letter or a number, and the
entire ID has a 63 character maximum.
HOSTNAME : the hostname of the CDN to associate with
this CDN key (for example, an IP address like 35.190.60.252 or a domain name like
cdn.example.com )
MEDIA_CDN_KEYNAME : the keyset name of
the Media CDN key
MEDIA_CDN_PRIVATE_KEY : The 64-byte
Ed25519 private key as a base64-encoded string. See
Create a private key for Media CDN
for
more information.
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
cat > request.json HOSTNAME ",
"mediaCdnKey": {
"keyName": " MEDIA_CDN_KEYNAME ",
"privateKey": " MEDIA_CDN_PRIVATE_KEY "
}
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys?cdnKeyId= CDN_KEY_ID "
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
"hostname": " HOSTNAME ",
"mediaCdnKey": {
"keyName": " MEDIA_CDN_KEYNAME ",
"privateKey": " MEDIA_CDN_PRIVATE_KEY "
}
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys?cdnKeyId= CDN_KEY_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.common.OperationMetadata",
"createTime": CREATE_TIME ,
"target": "projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys/ CDN_KEY_ID ",
"verb": "create",
"cancelRequested": false,
"apiVersion": "v1"
},
"done": false
}
This command creates a
long-running operation (LRO)
that you can query to track progress. Copy the returned
OPERATION_ID ,
which is the last part of the name field, to use in the next section.
REST (Cloud CDN)
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project number;
this is located in the Project number field on the IAM Settings page
LOCATION : the location in which to create your CDN
key; use one of the supported regions
Show locations
us-central1
us-east1
us-west1
asia-east1
asia-south1
asia-southeast1
europe-west1
southamerica-east1
CDN_KEY_ID : A user-defined identifier for the CDN
key, which will become the final component of the CDN key's resource name.
This ID can only contain lower-case letters, numbers, and hyphens.
The first character must be a letter, the last character must be a letter or a number, and the
entire ID has a 63 character maximum.
HOSTNAME : the hostname of the CDN to associate with
this CDN key (for example, an IP address like 35.190.60.252 or a domain name like
cdn.example.com )
GCDN_KEYNAME : the name of the
Cloud CDN key
GCDN_PRIVATE_KEY : the base64-encoded string
secret for the Cloud CDN key
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
cat > request.json HOSTNAME ",
"googleCdnKey": {
"keyName": " GCDN_KEYNAME ",
"privateKey": " GCDN_PRIVATE_KEY "
}
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys?cdnKeyId= CDN_KEY_ID "
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
"hostname": " HOSTNAME ",
"googleCdnKey": {
"keyName": " GCDN_KEYNAME ",
"privateKey": " GCDN_PRIVATE_KEY "
}
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys?cdnKeyId= CDN_KEY_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.common.OperationMetadata",
"createTime": CREATE_TIME ,
"target": "projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys/ CDN_KEY_ID ",
"verb": "create",
"cancelRequested": false,
"apiVersion": "v1"
},
"done": false
}
This command creates a
long-running operation (LRO)
that you can query to track progress. Copy the returned
OPERATION_ID ,
which is the last part of the name field, to use in the next section.
REST (Akamai CDN)
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project number;
this is located in the Project number field on the IAM Settings page
LOCATION : the location in which to create your CDN
key; use one of the supported regions
Show locations
us-central1
us-east1
us-west1
asia-east1
asia-south1
asia-southeast1
europe-west1
southamerica-east1
CDN_KEY_ID : A user-defined identifier for the CDN
key, which will become the final component of the CDN key's resource name.
This ID can only contain lower-case letters, numbers, and hyphens.
The first character must be a letter, the last character must be a letter or a number, and the
entire ID has a 63 character maximum.
HOSTNAME : the hostname of the CDN to associate with
this CDN key (for example, an IP address like 35.190.60.252 or a domain name like
cdn.example.com )
AKAMAI_TOKEN_KEY : the base64-encoded string
token key for the Akamai CDN edge configuration
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
cat > request.json HOSTNAME ",
"akamaiCdnKey": {
"tokenKey": " AKAMAI_TOKEN_KEY "
}
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys?cdnKeyId= CDN_KEY_ID "
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
"hostname": " HOSTNAME ",
"akamaiCdnKey": {
"tokenKey": " AKAMAI_TOKEN_KEY "
}
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys?cdnKeyId= CDN_KEY_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.common.OperationMetadata",
"createTime": CREATE_TIME ,
"target": "projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys/ CDN_KEY_ID ",
"verb": "create",
"cancelRequested": false,
"apiVersion": "v1"
},
"done": false
}
This command creates a
long-running operation (LRO)
that you can query to track progress. Copy the returned
OPERATION_ID ,
which is the last part of the name field, to use in the next section.
C#
Before trying this sample, follow the C# setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API C# API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Video.Stitcher.V1 ;
using Google.LongRunning ;
using Google.Protobuf ;
using System.Threading.Tasks ;
public class CreateCdnKeySample
{
public async Task<CdnKey> CreateCdnKeyAsync (
string projectId , string location , string cdnKeyId , string hostname ,
string keyName , string privateKey , bool isMediaCdn )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
CdnKey cdnKey = new CdnKey
{
Hostname = hostname
};
if ( isMediaCdn )
{
cdnKey . MediaCdnKey = new MediaCdnKey
{
KeyName = keyName ,
PrivateKey = ByteString . CopyFromUtf8 ( privateKey )
};
}
else
{
cdnKey . GoogleCdnKey = new GoogleCdnKey
{
KeyName = keyName ,
PrivateKey = ByteString . CopyFromUtf8 ( privateKey )
};
}
CreateCdnKeyRequest request = new CreateCdnKeyRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( projectId , location ),
CdnKeyId = cdnKeyId ,
CdnKey = cdnKey
};
// Make the request.
Operation<CdnKey , OperationMetadata > response = await client . CreateCdnKeyAsync ( request );
// Poll until the returned long-running operation is complete.
Operation<CdnKey , OperationMetadata > completedResponse = await response . PollUntilCompletedAsync ();
// Retrieve the operation result.
return completedResponse . Result ;
}
}
Go
Before trying this sample, follow the Go setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Go API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
stitcher "cloud.google.com/go/video/stitcher/apiv1"
stitcherstreampb "cloud.google.com/go/video/stitcher/apiv1/stitcherpb"
)
// createCDNKey creates a CDN key. A CDN key is used to retrieve protected media.
// If isMediaCDN is true, create a Media CDN key. If false, create a Cloud
// CDN key. To create a privateKey value for Media CDN, see
// https://cloud.google.com/video-stitcher/docs/how-to/managing-cdn-keys#create-private-key-media-cdn.
func createCDNKey ( w io . Writer , projectID , keyID , privateKey string , isMediaCDN bool ) error {
// projectID := "my-project-id"
// keyID := "my-cdn-key"
// privateKey := "my-private-key"
// isMediaCDN := true
location := "us-central1"
hostname := "cdn.example.com"
keyName := "cdn-key"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
var req * stitcherstreampb . CreateCdnKeyRequest
if isMediaCDN {
req = & stitcherstreampb . CreateCdnKeyRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
CdnKeyId : keyID ,
CdnKey : & stitcherstreampb . CdnKey {
CdnKeyConfig : & stitcherstreampb . CdnKey_MediaCdnKey {
MediaCdnKey : & stitcherstreampb . MediaCdnKey {
KeyName : keyName ,
PrivateKey : [] byte ( privateKey ),
},
},
Hostname : hostname ,
},
}
} else {
req = & stitcherstreampb . CreateCdnKeyRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
CdnKeyId : keyID ,
CdnKey : & stitcherstreampb . CdnKey {
CdnKeyConfig : & stitcherstreampb . CdnKey_GoogleCdnKey {
GoogleCdnKey : & stitcherstreampb . GoogleCdnKey {
KeyName : keyName ,
PrivateKey : [] byte ( privateKey ),
},
},
Hostname : hostname ,
},
}
}
// Creates the CDN key.
op , err := client . CreateCdnKey ( ctx , req )
if err != nil {
return fmt . Errorf ( "client.CreateCdnKey: %w" , err )
}
response , err := op . Wait ( ctx )
if err != nil {
return err
}
fmt . Fprintf ( w , "CDN key: %v" , response . GetName ())
return nil
}
Java
Before trying this sample, follow the Java setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Java API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.stitcher.v1. CdnKey ;
import com.google.cloud.video.stitcher.v1. CreateCdnKeyRequest ;
import com.google.cloud.video.stitcher.v1. GoogleCdnKey ;
import com.google.cloud.video.stitcher.v1. LocationName ;
import com.google.cloud.video.stitcher.v1. MediaCdnKey ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import com.google.protobuf. ByteString ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class CreateCdnKey {
private static final int TIMEOUT_IN_MINUTES = 2 ;
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String cdnKeyId = "my-cdn-key-id" ;
String hostname = "cdn.example.com" ;
String keyName = "my-key" ;
// To create a privateKey value for Media CDN, see
// https://cloud.google.com/video-stitcher/docs/how-to/managing-cdn-keys#create-private-key-media-cdn.
String privateKey = "my-private-key" ; // will be converted to a byte string
Boolean isMediaCdn = true ;
createCdnKey ( projectId , location , cdnKeyId , hostname , keyName , privateKey , isMediaCdn );
}
// createCdnKey creates a Media CDN key or a Cloud CDN key. A CDN key is used to retrieve
// protected media.
public static CdnKey createCdnKey (
String projectId ,
String location ,
String cdnKeyId ,
String hostname ,
String keyName ,
String privateKey ,
Boolean isMediaCdn )
throws IOException , ExecutionException , InterruptedException , TimeoutException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
CdnKey cdnKey ;
if ( isMediaCdn ) {
cdnKey =
CdnKey . newBuilder ()
. setHostname ( hostname )
. setMediaCdnKey (
MediaCdnKey . newBuilder ()
. setKeyName ( keyName )
. setPrivateKey ( ByteString . copyFromUtf8 ( privateKey ))
. build ())
. build ();
} else {
cdnKey =
CdnKey . newBuilder ()
. setHostname ( hostname )
. setGoogleCdnKey (
GoogleCdnKey . newBuilder ()
. setKeyName ( keyName )
. setPrivateKey ( ByteString . copyFromUtf8 ( privateKey ))
. build ())
. build ();
}
CreateCdnKeyRequest createCdnKeyRequest =
CreateCdnKeyRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , location ). toString ())
. setCdnKeyId ( cdnKeyId )
. setCdnKey ( cdnKey )
. build ();
CdnKey result =
videoStitcherServiceClient
. createCdnKeyAsync ( createCdnKeyRequest )
. get ( TIMEOUT_IN_MINUTES , TimeUnit . MINUTES );
System . out . println ( "Created new CDN key: " + result . getName ());
return result ;
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Node.js API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
const location = 'us-central1' ;
const hostname = 'cdn.example.com' ;
const keyName = 'cdn-key' ;
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// cdnKeyId = 'my-cdn-key';
// privateKey = 'my-private-key';
// Imports the Video Stitcher library
const { VideoStitcherServiceClient } =
require ( ' @google-cloud/video-stitcher ' ). v1 ;
// Instantiates a client
const stitcherClient = new VideoStitcherServiceClient ();
async function createCdnKey () {
// Construct request
const request = {
parent : stitcherClient . locationPath ( projectId , location ),
cdnKey : {
hostname : hostname ,
},
cdnKeyId : cdnKeyId ,
};
if ( isMediaCdn === 'true' ) {
request . cdnKey . mediaCdnKey = {
keyName : keyName ,
privateKey : privateKey ,
};
} else {
request . cdnKey . googleCdnKey = {
keyName : keyName ,
privateKey : privateKey ,
};
}
const [ operation ] = await stitcherClient . createCdnKey ( request );
const [ response ] = await operation . promise ();
console . log ( `CDN key: ${ response . name } ` );
}
createCdnKey (). catch ( err = > {
console . error ( err . message );
process . exitCode = 1 ;
});
PHP
Before trying this sample, follow the PHP setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API PHP API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\Stitcher\V1\CdnKey;
use Google\Cloud\Video\Stitcher\V1\Client\VideoStitcherServiceClient;
use Google\Cloud\Video\Stitcher\V1\CreateCdnKeyRequest;
use Google\Cloud\Video\Stitcher\V1\GoogleCdnKey;
use Google\Cloud\Video\Stitcher\V1\MediaCdnKey;
/**
* Creates a CDN key. Cloud CDN keys and Media CDN keys are supported.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the CDN key
* @param string $cdnKeyId The ID of the CDN key to be created
* @param string $hostname The hostname of the CDN key
* @param string $keyName For a Media CDN key, this is the keyset name.
* For a Cloud CDN key, this is the public name of the
* CDN key.
* @param string $privateKey For a Media CDN key, this is a 64-byte Ed25519 private
* key encoded as a base64-encoded string. See
* https://cloud.google.com/video-stitcher/docs/how-to/managing-cdn-keys#create-private-key-media-cdn
* for more information. For a Cloud CDN key,
* this is a base64-encoded string secret.
* @param bool $isMediaCdn If true, create a Media CDN key. If false,
* create a Cloud CDN key.
*/
function create_cdn_key(
string $callingProjectId,
string $location,
string $cdnKeyId,
string $hostname,
string $keyName,
string $privateKey,
bool $isMediaCdn
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$parent = $stitcherClient->locationName($callingProjectId, $location);
$cdnKey = new CdnKey();
$cdnKey->setHostname($hostname);
if ($isMediaCdn == true) {
$cloudCdn = new MediaCdnKey();
$cdnKey->setMediaCdnKey($cloudCdn);
} else {
$cloudCdn = new GoogleCdnKey();
$cdnKey->setGoogleCdnKey($cloudCdn);
}
$cloudCdn->setKeyName($keyName);
$cloudCdn->setPrivateKey($privateKey);
// Run CDN key creation request
$request = (new CreateCdnKeyRequest())
->setParent($parent)
->setCdnKey($cdnKey)
->setCdnKeyId($cdnKeyId);
$operationResponse = $stitcherClient->createCdnKey($request);
$operationResponse->pollUntilComplete();
if ($operationResponse->operationSucceeded()) {
$result = $operationResponse->getResult();
// Print results
printf('CDN key: %s' . PHP_EOL, $result->getName());
} else {
$error = $operationResponse->getError();
// handleError($error)
}
}
Python
Before trying this sample, follow the Python setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Python API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video import stitcher_v1
from google.cloud.video.stitcher_v1.services.video_stitcher_service import (
VideoStitcherServiceClient ,
)
def create_cdn_key (
project_id : str ,
location : str ,
cdn_key_id : str ,
hostname : str ,
key_name : str ,
private_key : str ,
is_cloud_cdn : bool ,
) - > stitcher_v1 . types . CdnKey :
"""Creates a Cloud CDN or Media CDN key.
Args:
project_id: The GCP project ID.
location: The location in which to create the CDN key.
cdn_key_id: The user-defined CDN key ID.
hostname: The hostname to which this CDN key applies.
key_name: For a Media CDN key, this is the keyset name.
For a Cloud CDN key, this is the public name of the CDN key.
private_key: For a Media CDN key, this is a 64-byte Ed25519 private
key encoded as a base64-encoded string.
See https://cloud.google.com/video-stitcher/docs/how-to/managing-cdn-keys#create-private-key-media-cdn
for more information. For a Cloud CDN key, this is a base64-encoded string secret.
is_cloud_cdn: If true, create a Cloud CDN key. If false, create a Media CDN key.
Returns:
The CDN key resource.
"""
client = VideoStitcherServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } "
cdn_key = stitcher_v1 . types . CdnKey (
name = cdn_key_id ,
hostname = hostname ,
)
if is_cloud_cdn :
cdn_key . google_cdn_key = stitcher_v1 . types . GoogleCdnKey (
key_name = key_name ,
private_key = private_key ,
)
else :
cdn_key . media_cdn_key = stitcher_v1 . types . MediaCdnKey (
key_name = key_name ,
private_key = private_key ,
)
operation = client . create_cdn_key (
parent = parent , cdn_key_id = cdn_key_id , cdn_key = cdn_key
)
response = operation . result ()
print ( f "CDN key: { response . name } " )
return response
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Ruby API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/video/stitcher"
##
# Create a Media CDN or Cloud CDN key
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param cdn_key_id [String] The user-defined CDN key ID
# @param hostname [String] The hostname to which this CDN key applies
# @param key_name [String] For a Media CDN key, this is the keyset name.
# For a Cloud CDN key, this is the public name of the CDN key.
# @param private_key [String] For a Media CDN key, this is a 64-byte Ed25519
# private key encoded as a base64-encoded string. See
# https://cloud.google.com/video-stitcher/docs/how-to/managing-cdn-keys#create-private-key-media-cdn
# for more information. For a Cloud CDN key, this is a base64-encoded string
# secret.
# @param is_media_cdn [Boolean] If true, create a Media CDN key. If false,
# create a Cloud CDN key.
#
def create_cdn_key project_id :, location :, cdn_key_id :, hostname :, key_name :,
private_key :, is_media_cdn :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the parent.
parent = client . location_path project : project_id , location : location
# Build the path for the CDN key resource.
cdn_key_path = client . cdn_key_path project : project_id , location : location ,
cdn_key : cdn_key_id
# Set the CDN key fields.
new_cdn_key = if is_media_cdn
{
name : cdn_key_path ,
hostname : hostname ,
media_cdn_key : {
key_name : key_name ,
private_key : private_key
}
}
else
{
name : cdn_key_path ,
hostname : hostname ,
google_cdn_key : {
key_name : key_name ,
private_key : private_key
}
}
end
operation = client . create_cdn_key parent : parent , cdn_key : new_cdn_key ,
cdn_key_id : cdn_key_id
# The returned object is of type Gapic::Operation. You can use this
# object to check the status of an operation, cancel it, or wait
# for results. Here is how to block until completion:
operation . wait_until_done!
# Print the CDN key name.
puts "CDN key: #{ operation . response . name } "
end
Check for the result
To check if the CDN key has been created, use the
projects.locations.operations.get
method. If the response contains "done: false" , repeat the command until the
response contains "done: true" .
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project number;
this is located in the Project number field on the IAM Settings
page
LOCATION : the location of the data;
use one of the supported regions
Show locations
us-central1
us-east1
us-west1
asia-east1
asia-south1
asia-southeast1
europe-west1
southamerica-east1
OPERATION_ID : the identifier for the operation
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.common.OperationMetadata",
"createTime": CREATE_TIME ,
"endTime": END_TIME ,
"target": "projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys/ CDN_KEY_ID ",
"verb": "create",
"cancelRequested": false,
"apiVersion": "v1"
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.video.stitcher.v1.CdnKey",
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys/ CDN_KEY_ID ",
"hostname": " HOSTNAME ",
"mediaCdnKey": {
"keyName": " MEDIA_CDN_KEYNAME "
}
}
}
Create a VOD config
Before you create a VOD session, you need to create a configuration for it.
Many VOD sessions can share the same configuration.
To create the config, use the
projects.locations.vodConfigs.create
method.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project number;
this is located in the Project number field on the IAM Settings page
LOCATION : the location in which to create your VOD config;
use one of the supported regions
Show locations
us-central1
us-east1
us-west1
asia-east1
asia-south1
asia-southeast1
europe-west1
southamerica-east1
VOD_CONFIG_ID : a user-defined identifier for the VOD config.
This ID can only contain lower-case letters, numbers, and hyphens.
The first character must be a letter, the last character must be a letter or a number, and the
entire ID has a 63 character maximum.
VOD_URI : the URI of the media to stitch. This
URI must reference either an MPEG-DASH manifest (MPD) file or an HLS manifest (M3U8) file. Use a
public URI or an unsigned URI for which you
registered a CDN key .
Note: You can use the Transcoder API to create these manifest files. See
Create VOD source files
for more information. You must make the manifest files public so that the Video Stitcher API can
access them.
AD_TAG_URI the public URI of the ad tag; if you
don't have one, you can use a
VMAP Pre-roll
sample
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
cat > request.json VOD_URI ",
"adTagUri": " AD_TAG_URI "
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodConfigs?vodConfigId= VOD_CONFIG_ID "
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
"sourceUri": " VOD_URI ",
"adTagUri": " AD_TAG_URI "
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodConfigs?vodConfigId= VOD_CONFIG_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.common.OperationMetadata",
"createTime": CREATE_TIME ,
"target": "projects/ PROJECT_NUMBER /locations/ LOCATION /vodConfigs/ VOD_CONFIG_ID ",
"verb": "create",
"cancelRequested": false,
"apiVersion": "v1"
},
"done": false
}
This command creates a
long-running operation (LRO)
that you can query to track progress. For more information, see
Check for the result .
C#
Before trying this sample, follow the C# setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API C# API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Video.Stitcher.V1 ;
using Google.LongRunning ;
using System.Threading.Tasks ;
public class CreateVodConfigSample
{
public async Task<VodConfig> CreateVodConfigAsync (
string projectId , string location , string vodConfigId , string sourceUri , string adTagUri )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
CreateVodConfigRequest request = new CreateVodConfigRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( projectId , location ),
VodConfigId = vodConfigId ,
VodConfig = new VodConfig
{
SourceUri = sourceUri ,
AdTagUri = adTagUri
}
};
// Make the request.
Operation<VodConfig , OperationMetadata > response = await client . CreateVodConfigAsync ( request );
// Poll until the returned long-running operation is complete.
Operation<VodConfig , OperationMetadata > completedResponse = await response . PollUntilCompletedAsync ();
// Retrieve the operation result.
return completedResponse . Result ;
}
}
Go
Before trying this sample, follow the Go setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Go API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
stitcher "cloud.google.com/go/video/stitcher/apiv1"
stitcherstreampb "cloud.google.com/go/video/stitcher/apiv1/stitcherpb"
)
// createVodConfig creates a VOD config. VOD configs are used to configure VOD sessions.
func createVodConfig ( w io . Writer , projectID , vodConfigID , sourceURI string ) error {
// projectID := "my-project-id"
// vodConfigID := "my-vod-config-id"
// Uri of the media to stitch; this URI must reference either an MPEG-DASH
// manifest (.mpd) file or an M3U playlist manifest (.m3u8) file.
// sourceURI := "https://storage.googleapis.com/my-bucket/main.mpd"
// See https://cloud.google.com/video-stitcher/docs/concepts for information
// on ad tags and ad metadata. This sample uses an ad tag URL that displays
// a VMAP Pre-roll ad
// (https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/tags).
adTagURI := "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpreonly&ciu_szs=300x250%2C728x90&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator="
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
req := & stitcherstreampb . CreateVodConfigRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
VodConfigId : vodConfigID ,
VodConfig : & stitcherstreampb . VodConfig {
SourceUri : sourceURI ,
AdTagUri : adTagURI ,
},
}
// Creates the VOD config.
op , err := client . CreateVodConfig ( ctx , req )
if err != nil {
return fmt . Errorf ( "client.CreateVodConfig: %w" , err )
}
response , err := op . Wait ( ctx )
if err != nil {
return err
}
fmt . Fprintf ( w , "VOD config: %v" , response . GetName ())
return nil
}
Java
Before trying this sample, follow the Java setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Java API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.stitcher.v1. CreateVodConfigRequest ;
import com.google.cloud.video.stitcher.v1. LocationName ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import com.google.cloud.video.stitcher.v1. VodConfig ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class CreateVodConfig {
private static final int TIMEOUT_IN_MINUTES = 2 ;
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String vodConfigId = "my-vod-config-id" ;
// URI of the VOD stream to stitch; this URI must reference either an MPEG-DASH
// manifest (.mpd) file or an M3U playlist manifest (.m3u8) file.
String sourceUri = "https://storage.googleapis.com/my-bucket/main.mpd" ;
// See VMAP Pre-roll
// (https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/tags)
String adTagUri = "https://pubads.g.doubleclick.net/gampad/ads..." ;
createVodConfig ( projectId , location , vodConfigId , sourceUri , adTagUri );
}
// Creates a video on demand (VOD) config. VOD configs are used to configure VOD
// sessions. For more information, see
// https://cloud.google.com/video-stitcher/docs/how-to/managing-vod-configs.
public static VodConfig createVodConfig (
String projectId , String location , String vodConfigId , String sourceUri , String adTagUri )
throws IOException , ExecutionException , InterruptedException , TimeoutException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
CreateVodConfigRequest createVodConfigRequest =
CreateVodConfigRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , location ). toString ())
. setVodConfigId ( vodConfigId )
. setVodConfig (
VodConfig . newBuilder (). setSourceUri ( sourceUri ). setAdTagUri ( adTagUri ). build ())
. build ();
VodConfig response =
videoStitcherServiceClient
. createVodConfigAsync ( createVodConfigRequest )
. get ( TIMEOUT_IN_MINUTES , TimeUnit . MINUTES );
System . out . println ( "Created new VOD config: " + response . getName ());
return response ;
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Node.js API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// vodConfigId = 'my-vod-config-id';
// sourceUri = 'https://storage.googleapis.com/my-bucket/main.mpd';
// See VMAP Pre-roll
// (https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/tags)
// adTagUri = 'https://pubads.g.doubleclick.net/gampad/ads...';
// Imports the Video Stitcher library
const { VideoStitcherServiceClient } =
require ( ' @google-cloud/video-stitcher ' ). v1 ;
// Instantiates a client
const stitcherClient = new VideoStitcherServiceClient ();
async function createVodConfig () {
// Construct request
const request = {
parent : stitcherClient . locationPath ( projectId , location ),
vodConfig : {
sourceUri : sourceUri ,
adTagUri : adTagUri ,
},
vodConfigId : vodConfigId ,
};
const [ operation ] = await stitcherClient . createVodConfig ( request );
const [ response ] = await operation . promise ();
console . log ( `response.name: ${ response . name } ` );
}
createVodConfig (). catch ( err = > {
console . error ( err . message );
process . exitCode = 1 ;
});
PHP
Before trying this sample, follow the PHP setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API PHP API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\Stitcher\V1\Client\VideoStitcherServiceClient;
use Google\Cloud\Video\Stitcher\V1\CreateVodConfigRequest;
use Google\Cloud\Video\Stitcher\V1\VodConfig;
/**
* Creates a VOD config. VOD configs are used to configure VOD sessions.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the VOD config
* @param string $vodConfigId The name of the VOD config to be created
* @param string $sourceUri Uri of the media to stitch; this URI must
* reference either an MPEG-DASH manifest
* (.mpd) file or an M3U playlist manifest
* (.m3u8) file.
* @param string $adTagUri The Uri of the ad tag
*/
function create_vod_config(
string $callingProjectId,
string $location,
string $vodConfigId,
string $sourceUri,
string $adTagUri
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$parent = $stitcherClient->locationName($callingProjectId, $location);
$vodConfig = (new VodConfig())
->setSourceUri($sourceUri)
->setAdTagUri($adTagUri);
// Run VOD config creation request
$request = (new CreateVodConfigRequest())
->setParent($parent)
->setVodConfigId($vodConfigId)
->setVodConfig($vodConfig);
$operationResponse = $stitcherClient->createVodConfig($request);
$operationResponse->pollUntilComplete();
if ($operationResponse->operationSucceeded()) {
$result = $operationResponse->getResult();
// Print results
printf('VOD config: %s' . PHP_EOL, $result->getName());
} else {
$error = $operationResponse->getError();
// handleError($error)
}
}
Python
Before trying this sample, follow the Python setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Python API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video import stitcher_v1
from google.cloud.video.stitcher_v1.services.video_stitcher_service import (
VideoStitcherServiceClient ,
)
def create_vod_config (
project_id : str ,
location : str ,
vod_config_id : str ,
vod_uri : str ,
ad_tag_uri : str ,
) - > stitcher_v1 . types . VodConfig :
"""Creates a VOD config.
Args:
project_id: The GCP project ID.
location: The location in which to create the VOD config.
vod_config_id: The user-defined VOD config ID.
vod_uri: URI of the VOD to stitch; this URI must reference either an
MPEG-DASH manifest (.mpd) file or an M3U playlist manifest
(.m3u8) file.
ad_tag_uri: Uri of the ad tag.
Returns:
The VOD config resource.
"""
client = VideoStitcherServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } "
vod_config = stitcher_v1 . types . VodConfig (
source_uri = vod_uri ,
ad_tag_uri = ad_tag_uri ,
)
operation = client . create_vod_config (
parent = parent , vod_config_id = vod_config_id , vod_config = vod_config
)
response = operation . result ()
print ( f "VOD config: { response . name } " )
return response
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Ruby API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/video/stitcher"
##
# Create a VOD config. VOD configs are used to create VOD sessions.
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param vod_config_id [String] Your VOD config name (e.g. `my-vod-config`)
# @param source_uri [String] Uri of the VOD stream to stitch
# (e.g. `https://storage.googleapis.com/my-bucket/main.mpd`)
# @param ad_tag_uri [String] Uri of the ad tag
# (e.g. `https://pubads.g.doubleclick.net/gampad/ads...`)
#
def create_vod_config project_id :, location :, vod_config_id :, source_uri :,
ad_tag_uri :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the parent.
parent = client . location_path project : project_id , location : location
# Set the VOD config fields.
new_vod_config = {
source_uri : source_uri ,
ad_tag_uri : ad_tag_uri
}
operation = client . create_vod_config parent : parent ,
vod_config_id : vod_config_id ,
vod_config : new_vod_config
# The returned object is of type Gapic::Operation. You can use this
# object to check the status of an operation, cancel it, or wait
# for results. Here is how to block until completion:
operation . wait_until_done!
# Print the VOD config name.
puts "VOD config: #{ operation . response . name } "
end
Get the config
To get the config, use the
projects.locations.vodConfigs.get
method.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project number;
this is located in the Project number field on the IAM Settings page
LOCATION : the location of the VOD config;
use one of the supported regions
Show locations
us-central1
us-east1
us-west1
asia-east1
asia-south1
asia-southeast1
europe-west1
southamerica-east1
VOD_CONFIG_ID : the user-defined identifier for
the VOD config
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodConfigs/ VOD_CONFIG_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodConfigs/ VOD_CONFIG_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /vodConfigs/ VOD_CONFIG_ID ",
"sourceUri": " VOD_URI ",
"adTagUri": " AD_TAG_URI ",
"state": "READY"
}
C#
Before trying this sample, follow the C# setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API C# API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Video.Stitcher.V1 ;
public class GetVodConfigSample
{
public VodConfig GetVodConfig (
string projectId , string location , string vodConfigId )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
GetVodConfigRequest request = new GetVodConfigRequest
{
VodConfigName = VodConfigName . FromProjectLocationVodConfig ( projectId , location , vodConfigId )
};
// Call the API.
VodConfig response = client . GetVodConfig ( request );
// Return the result.
return response ;
}
}
Go
Before trying this sample, follow the Go setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Go API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"encoding/json"
"fmt"
"io"
stitcher "cloud.google.com/go/video/stitcher/apiv1"
stitcherstreampb "cloud.google.com/go/video/stitcher/apiv1/stitcherpb"
)
// getVodConfig gets a previously-created VOD config.
func getVodConfig ( w io . Writer , projectID , vodConfigID string ) error {
// projectID := "my-project-id"
// vodConfigID := "my-vod-config-id"
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
req := & stitcherstreampb . GetVodConfigRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/vodConfigs/%s" , projectID , location , vodConfigID ),
}
response , err := client . GetVodConfig ( ctx , req )
if err != nil {
return fmt . Errorf ( "client.GetVodConfig: %w" , err )
}
b , err := json . MarshalIndent ( response , "" , " " )
if err != nil {
return fmt . Errorf ( "json.MarshalIndent: %w" , err )
}
fmt . Fprintf ( w , "VOD config:\n%s" , string ( b ))
return nil
}
Java
Before trying this sample, follow the Java setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Java API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.stitcher.v1. GetVodConfigRequest ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import com.google.cloud.video.stitcher.v1. VodConfig ;
import com.google.cloud.video.stitcher.v1. VodConfigName ;
import java.io.IOException ;
public class GetVodConfig {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String vodConfigId = "my-vod-config-id" ;
getVodConfig ( projectId , location , vodConfigId );
}
// Gets a video on demand (VOD) config.
public static VodConfig getVodConfig ( String projectId , String location , String vodConfigId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
GetVodConfigRequest getVodConfigRequest =
GetVodConfigRequest . newBuilder ()
. setName ( VodConfigName . of ( projectId , location , vodConfigId ). toString ())
. build ();
VodConfig response = videoStitcherServiceClient . getVodConfig ( getVodConfigRequest );
System . out . println ( "VOD config: " + response . getName ());
return response ;
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Node.js API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// vodConfigId = 'my-vod-config-id';
// Imports the Video Stitcher library
const { VideoStitcherServiceClient } =
require ( ' @google-cloud/video-stitcher ' ). v1 ;
// Instantiates a client
const stitcherClient = new VideoStitcherServiceClient ();
async function getVodConfig () {
// Construct request
const request = {
name : stitcherClient . vodConfigPath ( projectId , location , vodConfigId ),
};
const [ vodConfig ] = await stitcherClient . getVodConfig ( request );
console . log ( `VOD config: ${ vodConfig . name } ` );
}
getVodConfig (). catch ( err = > {
console . error ( err . message );
process . exitCode = 1 ;
});
PHP
Before trying this sample, follow the PHP setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API PHP API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\Stitcher\V1\Client\VideoStitcherServiceClient;
use Google\Cloud\Video\Stitcher\V1\GetVodConfigRequest;
/**
* Gets a VOD config.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the VOD config
* @param string $vodConfigId The ID of the VOD config
*/
function get_vod_config(
string $callingProjectId,
string $location,
string $vodConfigId
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$formattedName = $stitcherClient->vodConfigName($callingProjectId, $location, $vodConfigId);
$request = (new GetVodConfigRequest())
->setName($formattedName);
$vodConfig = $stitcherClient->getVodConfig($request);
// Print results
printf('VOD config: %s' . PHP_EOL, $vodConfig->getName());
}
Python
Before trying this sample, follow the Python setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Python API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video import stitcher_v1
from google.cloud.video.stitcher_v1.services.video_stitcher_service import (
VideoStitcherServiceClient ,
)
def get_vod_config (
project_id : str , location : str , vod_config_id : str
) - > stitcher_v1 . types . VodConfig :
"""Gets a VOD config.
Args:
project_id: The GCP project ID.
location: The location of the VOD config.
vod_config_id: The user-defined VOD config ID.
Returns:
The VOD config resource.
"""
client = VideoStitcherServiceClient ()
name = f "projects/ { project_id } /locations/ { location } /vodConfigs/ { vod_config_id } "
response = client . get_vod_config ( name = name )
print ( f "VOD config: { response . name } " )
return response
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Ruby API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/video/stitcher"
##
# Get a VOD config
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param vod_config_id [String] Your VOD config name (e.g. `my-vod-config`)
#
def get_vod_config project_id :, location :, vod_config_id :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the VOD config.
name = client . vod_config_path project : project_id , location : location ,
vod_config : vod_config_id
# Get the VOD config.
vod_config = client . get_vod_config name : name
# Print the vod config name.
puts "VOD config: #{ vod_config . name } "
end
Check that the state is set to READY . If not, wait for a few seconds and send
the request again.
Create a session
To create a session for an ad-stitched video, use the
projects.locations.vodSessions.create
method.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number located in the Project number field on the IAM Settings
page
LOCATION : the location in which to create your
session; use one of the supported regions
Show locations
us-central1
us-east1
us-west1
asia-east1
asia-south1
asia-southeast1
europe-west1
southamerica-east1
VOD_CONFIG_ID : the user-defined identifier for the VOD config
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
cat > request.json PROJECT_NUMBER /locations/ LOCATION /vodConfigs/ VOD_CONFIG_ID ",
"adTracking": "SERVER"
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions"
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
"vodConfig": "projects/ PROJECT_NUMBER /locations/ LOCATION /vodConfigs/ VOD_CONFIG_ID ",
"adTracking": "SERVER"
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID ",
"interstitials": {
"sessionContent": {
"duration": "60s"
}
},
"playUri": " PLAY_URI ", # This is the ad-stitched VOD URI
"sourceUri": " VOD_URI ",
"adTagUri": " AD_TAG_URI ",
"assetId": " ASSET_ID ",
"adTracking": "SERVER",
"vodConfig": "projects/ PROJECT_NUMBER /locations/ LOCATION /vodConfigs/ VOD_CONFIG_ID "
}
C#
Before trying this sample, follow the C# setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API C# API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Video.Stitcher.V1 ;
public class CreateVodSessionSample
{
public VodSession CreateVodSession (
string projectId , string location , string vodConfigId )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
CreateVodSessionRequest request = new CreateVodSessionRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( projectId , location ),
VodSession = new VodSession
{
VodConfig = VodConfigName . FormatProjectLocationVodConfig ( projectId , location , vodConfigId ),
AdTracking = AdTracking . Server
}
};
// Call the API.
VodSession session = client . CreateVodSession ( request );
// Return the result.
return session ;
}
}
Go
Before trying this sample, follow the Go setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Go API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
stitcher "cloud.google.com/go/video/stitcher/apiv1"
stitcherstreampb "cloud.google.com/go/video/stitcher/apiv1/stitcherpb"
)
// createVodSession creates a video on demand (VOD) session in which to insert ads.
// VOD sessions are ephemeral resources that expire after a few hours.
func createVodSession ( w io . Writer , projectID , vodConfigID string ) error {
// projectID := "my-project-id"
// vodConfigID := "my-vod-config-id"
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
req := & stitcherstreampb . CreateVodSessionRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
VodSession : & stitcherstreampb . VodSession {
VodConfig : fmt . Sprintf ( "projects/%s/locations/%s/vodConfigs/%s" , projectID , location , vodConfigID ),
AdTracking : stitcherstreampb . AdTracking_SERVER ,
},
}
// Creates the VOD session.
response , err := client . CreateVodSession ( ctx , req )
if err != nil {
return fmt . Errorf ( "client.CreateVodSession: %w" , err )
}
fmt . Fprintf ( w , "VOD session: %v" , response . GetName ())
return nil
}
Java
Before trying this sample, follow the Java setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Java API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.stitcher.v1. AdTracking ;
import com.google.cloud.video.stitcher.v1. CreateVodSessionRequest ;
import com.google.cloud.video.stitcher.v1. LocationName ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import com.google.cloud.video.stitcher.v1. VodConfigName ;
import com.google.cloud.video.stitcher.v1. VodSession ;
import java.io.IOException ;
public class CreateVodSession {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String vodConfigId = "my-vod-config-id" ;
createVodSession ( projectId , location , vodConfigId );
}
// Creates a video on demand (VOD) session using the parameters in the designated VOD config.
// For more information, see
// https://cloud.google.com/video-stitcher/docs/how-to/creating-vod-sessions.
public static VodSession createVodSession ( String projectId , String location , String vodConfigId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
CreateVodSessionRequest createVodSessionRequest =
CreateVodSessionRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , location ). toString ())
. setVodSession (
VodSession . newBuilder ()
. setVodConfig ( VodConfigName . format ( projectId , location , vodConfigId ))
. setAdTracking ( AdTracking . SERVER )
. build ())
. build ();
VodSession response = videoStitcherServiceClient . createVodSession ( createVodSessionRequest );
System . out . println ( "Created VOD session: " + response . getName ());
return response ;
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Node.js API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// vodConfigId = 'my-vod-config-id';
// Imports the Video Stitcher library
const { VideoStitcherServiceClient } =
require ( ' @google-cloud/video-stitcher ' ). v1 ;
// Instantiates a client
const stitcherClient = new VideoStitcherServiceClient ();
async function createVodSession () {
// Construct request
const request = {
parent : stitcherClient . locationPath ( projectId , location ),
vodSession : {
vodConfig : stitcherClient . vodConfigPath (
projectId ,
location ,
vodConfigId
),
adTracking : ' SERVER ' ,
},
};
const [ session ] = await stitcherClient . createVodSession ( request );
console . log ( `VOD session: ${ session . name } ` );
}
createVodSession (). catch ( err = > {
console . error ( err . message );
process . exitCode = 1 ;
});
PHP
Before trying this sample, follow the PHP setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API PHP API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\Stitcher\V1\AdTracking;
use Google\Cloud\Video\Stitcher\V1\Client\VideoStitcherServiceClient;
use Google\Cloud\Video\Stitcher\V1\CreateVodSessionRequest;
use Google\Cloud\Video\Stitcher\V1\VodSession;
/**
* Creates a VOD session. VOD sessions are ephemeral resources that expire
* after a few hours.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the session
* @param string $vodConfigId The name of the VOD config to use for the session
*/
function create_vod_session(
string $callingProjectId,
string $location,
string $vodConfigId
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$parent = $stitcherClient->locationName($callingProjectId, $location);
$vodConfig = $stitcherClient->vodConfigName($callingProjectId, $location, $vodConfigId);
$vodSession = new VodSession();
$vodSession->setVodConfig($vodConfig);
$vodSession->setAdTracking(AdTracking::SERVER);
// Run VOD session creation request
$request = (new CreateVodSessionRequest())
->setParent($parent)
->setVodSession($vodSession);
$response = $stitcherClient->createVodSession($request);
// Print results
printf('VOD session: %s' . PHP_EOL, $response->getName());
}
Python
Before trying this sample, follow the Python setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Python API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video import stitcher_v1
from google.cloud.video.stitcher_v1.services.video_stitcher_service import (
VideoStitcherServiceClient ,
)
def create_vod_session (
project_id : str , location : str , vod_config_id : str
) - > stitcher_v1 . types . VodSession :
"""Creates a VOD session. VOD sessions are ephemeral resources that expire
after a few hours.
Args:
project_id: The GCP project ID.
location: The location in which to create the session.
vod_config_id: The user-defined VOD config ID to use to create the
session.
Returns:
The VOD session resource.
"""
client = VideoStitcherServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } "
vod_config_name = (
f "projects/ { project_id } /locations/ { location } /vodConfigs/ { vod_config_id } "
)
vod_session = stitcher_v1 . types . VodSession (
vod_config = vod_config_name , ad_tracking = "SERVER"
)
response = client . create_vod_session ( parent = parent , vod_session = vod_session )
print ( f "VOD session: { response . name } " )
return response
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Ruby API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/video/stitcher"
##
# Create a video on demand (VOD) session. VOD sessions are ephemeral resources
# that expire after a few hours.
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param vod_config_id [String] The VOD config ID (e.g. `my-vod-config`) to use
#
def create_vod_session project_id :, location :, vod_config_id :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the parent.
parent = client . location_path project : project_id , location : location
# Build the resource name of the VOD config.
vod_config_name = client . vod_config_path project : project_id ,
location : location ,
vod_config : vod_config_id
# Set the session fields.
new_vod_session = {
vod_config : vod_config_name ,
ad_tracking : Google :: Cloud :: Video :: Stitcher :: V1 :: AdTracking :: SERVER
}
response = client . create_vod_session parent : parent ,
vod_session : new_vod_session
# Print the VOD session name.
puts "VOD session: #{ response . name } "
end
The Video Stitcher API generates a unique session ID for each request. A session expires after 4
hours.
Confirm that the ad was stitched
An ad must be encoded before it can be stitched into a VOD session.
If the ad you specified in the vodSessions.create
command has already been encoded from a previous session, the Video Stitcher API
includes adBreaks events in the JSON response. The Video Stitcher API only looks
for encoded ads created by sessions associated with your Google Cloud project.
If the ad has not yet been encoded, the JSON response doesn't include
adBreaks events. If you receive a JSON response similar to the one in the
previous section , wait for ad encoding and
re-run the vodSessions.create command.
When the encoded ad has been successfully stitched into the session, the
response should look like the following:
{
"name" : "projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID " ,
"interstitials" : {
"adBreaks" : [
{
"progressEvents" : [
{
"timeOffset" : "0s" ,
"events" : [
{
"type" : "IMPRESSION" ,
"uri" : "https://securepubads.g.doubleclick.net/pcs/view..."
},
{
"type" : "START" ,
"uri" : "https://pubads.g.doubleclick.net/pagead/interaction/..."
},
...
]
},
...
],
"ads" : [
{
"duration" : "10s" ,
"activityEvents" : [
{
"type" : "ERROR" ,
"uri" : "https://pubads.g.doubleclick.net/pagead/interaction/..."
},
{
"type" : "CLICK_THROUGH" ,
"uri" : "https://pubads.g.doubleclick.net/pcs/click..." ,
"id" : "GDFP"
},
...
]
}
],
"endTimeOffset" : "10s" ,
"startTimeOffset" : "0s"
}
],
"sessionContent" : {
"duration" : "70s"
}
},
"playUri" : " PLAY_URI " ,
"sourceUri" : " VOD_URI " ,
"adTagUri" : " AD_TAG_URI " ,
"assetId" : " ASSET_ID " ,
"adTracking" : "SERVER" ,
"vodConfig" : "projects/ PROJECT_NUMBER /locations/ LOCATION /vodConfigs/ VOD_CONFIG_ID "
}
You can play the ad-stitched VOD stream by referencing the URI from the
playUri field of the response object.
Note: A single VOD asset may be transcoded into different variants based on
bandwidth, resolution, and frame rate. The Video Stitcher API may need to encode
the same ad multiple times to match the source VOD variant. For example, suppose
you create a session for a 720p VOD asset and a given ad. The same ad must be
encoded again if you create a session for the same VOD asset content at 1080p.
Play the ad-stitched VOD stream
Play the ad-stitched VOD stream using the URI from the playUri field of the
response object. To play this VOD session in
Shaka Player , complete the
following steps:
Navigate to Shaka Player , an
online media player.
Click Custom Content in the top navigation bar.
Click the + button.
Paste the value of the playUri field ( PLAY_URI ) into the Manifest URL box.
Type a name in the Name box.
Click Save .
Click Play .
If your video is located in a Cloud Storage bucket, make sure that the
bucket is public and CORS is enabled
on the bucket.
See an example ad-stitched video that
uses the
Transcoder API sample video and a
VMAP Pre-roll
ad tag URL.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
Note: You must manually delete all user-generated content from your project (for
example,
slates and
CDN keys ). The
Video Stitcher API does not automatically delete this content, even if you remove the service or
delete the project.
Delete the VOD config
To delete the VOD config, do the following:
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project number;
this is located in the Project number field on the IAM Settings page
LOCATION : the location of the VOD config;
use one of the supported regions
Show locations
us-central1
us-east1
us-west1
asia-east1
asia-south1
asia-southeast1
europe-west1
southamerica-east1
VOD_CONFIG_ID : the user-defined identifier for
the VOD config
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodConfigs/ VOD_CONFIG_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodConfigs/ VOD_CONFIG_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.common.OperationMetadata",
"createTime": CREATE_TIME ,
"target": "projects/ PROJECT_NUMBER /locations/ LOCATION /vodConfigs/ VOD_CONFIG_ID ",
"verb": "delete"
},
"done": false
}
This command creates a
long-running operation (LRO)
that you can query to track progress. For more information, see
Check for the result .
C#
Before trying this sample, follow the C# setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API C# API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Video.Stitcher.V1 ;
using Google.LongRunning ;
using Google.Protobuf.WellKnownTypes ;
using System.Threading.Tasks ;
public class DeleteVodConfigSample
{
public async Task DeleteVodConfigAsync (
string projectId , string location , string vodConfigId )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
DeleteVodConfigRequest request = new DeleteVodConfigRequest
{
VodConfigName = VodConfigName . FromProjectLocationVodConfig ( projectId , location , vodConfigId )
};
// Make the request.
Operation<Empty , OperationMetadata > response = await client . DeleteVodConfigAsync ( request );
// Poll until the returned long-running operation is complete.
await response . PollUntilCompletedAsync ();
}
}
Go
Before trying this sample, follow the Go setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Go API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
stitcher "cloud.google.com/go/video/stitcher/apiv1"
stitcherstreampb "cloud.google.com/go/video/stitcher/apiv1/stitcherpb"
)
// deleteVodConfig deletes a previously-created VOD config.
func deleteVodConfig ( w io . Writer , projectID , vodConfigID string ) error {
// projectID := "my-project-id"
// vodConfigID := "my-vod-config-id"
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
req := & stitcherstreampb . DeleteVodConfigRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/vodConfigs/%s" , projectID , location , vodConfigID ),
}
// Deletes the VOD config.
op , err := client . DeleteVodConfig ( ctx , req )
if err != nil {
return fmt . Errorf ( "client.DeleteVodConfig: %w" , err )
}
err = op . Wait ( ctx )
if err != nil {
return err
}
fmt . Fprintf ( w , "Deleted VOD config" )
return nil
}
Java
Before trying this sample, follow the Java setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Java API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.stitcher.v1. DeleteVodConfigRequest ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import com.google.cloud.video.stitcher.v1. VodConfigName ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class DeleteVodConfig {
private static final int TIMEOUT_IN_MINUTES = 2 ;
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String vodConfigId = "my-vod-config-id" ;
deleteVodConfig ( projectId , location , vodConfigId );
}
// Deletes a video on demand (VOD) config.
public static void deleteVodConfig ( String projectId , String location , String vodConfigId )
throws IOException , ExecutionException , InterruptedException , TimeoutException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
DeleteVodConfigRequest deleteVodConfigRequest =
DeleteVodConfigRequest . newBuilder ()
. setName ( VodConfigName . of ( projectId , location , vodConfigId ). toString ())
. build ();
videoStitcherServiceClient
. deleteVodConfigAsync ( deleteVodConfigRequest )
. get ( TIMEOUT_IN_MINUTES , TimeUnit . MINUTES );
System . out . println ( "Deleted VOD config" );
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Node.js API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// vodConfigId = 'my-vod-config-id';
// Imports the Video Stitcher library
const { VideoStitcherServiceClient } =
require ( ' @google-cloud/video-stitcher ' ). v1 ;
// Instantiates a client
const stitcherClient = new VideoStitcherServiceClient ();
async function deleteVodConfig () {
// Construct request
const request = {
name : stitcherClient . vodConfigPath ( projectId , location , vodConfigId ),
};
const [ operation ] = await stitcherClient . deleteVodConfig ( request );
await operation . promise ();
console . log ( 'Deleted VOD config' );
}
deleteVodConfig (). catch ( err = > {
console . error ( err . message );
process . exitCode = 1 ;
});
PHP
Before trying this sample, follow the PHP setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API PHP API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\Stitcher\V1\Client\VideoStitcherServiceClient;
use Google\Cloud\Video\Stitcher\V1\DeleteVodConfigRequest;
/**
* Deletes a VOD config.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the VOD config
* @param string $vodConfigId The ID of the VOD config
*/
function delete_vod_config(
string $callingProjectId,
string $location,
string $vodConfigId
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$formattedName = $stitcherClient->vodConfigName($callingProjectId, $location, $vodConfigId);
$request = (new DeleteVodConfigRequest())
->setName($formattedName);
$operationResponse = $stitcherClient->deleteVodConfig($request);
$operationResponse->pollUntilComplete();
if ($operationResponse->operationSucceeded()) {
// Print status
printf('Deleted VOD config %s' . PHP_EOL, $vodConfigId);
} else {
$error = $operationResponse->getError();
// handleError($error)
}
}
Python
Before trying this sample, follow the Python setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Python API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video.stitcher_v1.services.video_stitcher_service import (
VideoStitcherServiceClient ,
)
from google.protobuf import empty_pb2 as empty
def delete_vod_config (
project_id : str , location : str , vod_config_id : str
) - > empty . Empty :
"""Deletes a VOD config.
Args:
project_id: The GCP project ID.
location: The location of the VOD config.
vod_config_id: The user-defined VOD config ID."""
client = VideoStitcherServiceClient ()
name = f "projects/ { project_id } /locations/ { location } /vodConfigs/ { vod_config_id } "
operation = client . delete_vod_config ( name = name )
response = operation . result ()
print ( "Deleted VOD config" )
return response
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Ruby API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/video/stitcher"
##
# Delete a VOD config
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param vod_config_id [String] Your VOD config name (e.g. `my-vod-config`)
#
def delete_vod_config project_id :, location :, vod_config_id :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the VOD config.
name = client . vod_config_path project : project_id , location : location ,
vod_config : vod_config_id
# Delete the VOD config.
operation = client . delete_vod_config name : name
# The returned object is of type Gapic::Operation. You can use this
# object to check the status of an operation, cancel it, or wait
# for results. Here is how to block until completion:
operation . wait_until_done!
# Print a success message.
puts "Deleted VOD config"
end
Delete the CDN key
To delete the CDN key, do the following:
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project number;
this is located in the Project number field on the IAM Settings page
LOCATION : the location where your CDN key is located;
use one of the supported regions
Show locations
us-central1
us-east1
us-west1
asia-east1
asia-south1
asia-southeast1
europe-west1
southamerica-east1
CDN_KEY_ID : a user-defined identifier for the CDN
key
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys/ CDN_KEY_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys/ CDN_KEY_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.common.OperationMetadata",
"createTime": CREATE_TIME ,
"target": "projects/ PROJECT_NUMBER /locations/ LOCATION /cdnKeys/ CDN_KEY_ID ",
"verb": "delete",
"cancelRequested": false,
"apiVersion": "v1"
},
"done": false
}
This command creates a
long-running operation (LRO)
that you can query to track progress. For more information, see
Check for the result .
C#
Before trying this sample, follow the C# setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API C# API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Video.Stitcher.V1 ;
using Google.LongRunning ;
using Google.Protobuf.WellKnownTypes ;
using System.Threading.Tasks ;
public class DeleteCdnKeySample
{
public async Task DeleteCdnKeyAsync (
string projectId , string location , string cdnKeyId )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
DeleteCdnKeyRequest request = new DeleteCdnKeyRequest
{
CdnKeyName = CdnKeyName . FromProjectLocationCdnKey ( projectId , location , cdnKeyId )
};
// Make the request.
Operation<Empty , OperationMetadata > response = await client . DeleteCdnKeyAsync ( request );
// Poll until the returned long-running operation is complete.
await response . PollUntilCompletedAsync ();
}
}
Go
Before trying this sample, follow the Go setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Go API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
stitcher "cloud.google.com/go/video/stitcher/apiv1"
stitcherstreampb "cloud.google.com/go/video/stitcher/apiv1/stitcherpb"
)
// deleteCDNKey deletes a CDN key.
func deleteCDNKey ( w io . Writer , projectID , keyID string ) error {
// projectID := "my-project-id"
// keyID := "my-cdn-key"
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
name := fmt . Sprintf ( "projects/%s/locations/%s/cdnKeys/%s" , projectID , location , keyID )
req := & stitcherstreampb . DeleteCdnKeyRequest {
Name : name ,
}
// Deletes the CDN key.
op , err := client . DeleteCdnKey ( ctx , req )
if err != nil {
return fmt . Errorf ( "client.DeleteCdnKey: %w" , err )
}
err = op . Wait ( ctx )
if err != nil {
return err
}
fmt . Fprintf ( w , "Deleted CDN key" )
return nil
}
Java
Before trying this sample, follow the Java setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Java API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.stitcher.v1. CdnKeyName ;
import com.google.cloud.video.stitcher.v1. DeleteCdnKeyRequest ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class DeleteCdnKey {
private static final int TIMEOUT_IN_MINUTES = 2 ;
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String cdnKeyId = "my-cdn-key-id" ;
deleteCdnKey ( projectId , location , cdnKeyId );
}
// Deletes a CDN key.
public static void deleteCdnKey ( String projectId , String location , String cdnKeyId )
throws InterruptedException , ExecutionException , TimeoutException , IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
DeleteCdnKeyRequest deleteCdnKeyRequest =
DeleteCdnKeyRequest . newBuilder ()
. setName ( CdnKeyName . of ( projectId , location , cdnKeyId ). toString ())
. build ();
videoStitcherServiceClient
. deleteCdnKeyAsync ( deleteCdnKeyRequest )
. get ( TIMEOUT_IN_MINUTES , TimeUnit . MINUTES );
System . out . println ( "Deleted CDN key" );
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Node.js API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// cdnKeyId = 'my-cdn-key';
// Imports the Video Stitcher library
const { VideoStitcherServiceClient } =
require ( ' @google-cloud/video-stitcher ' ). v1 ;
// Instantiates a client
const stitcherClient = new VideoStitcherServiceClient ();
async function deleteCdnKey () {
// Construct request
const request = {
name : stitcherClient . cdnKeyPath ( projectId , location , cdnKeyId ),
};
const [ operation ] = await stitcherClient . deleteCdnKey ( request );
await operation . promise ();
console . log ( 'Deleted CDN key' );
}
deleteCdnKey (). catch ( err = > {
console . error ( err . message );
process . exitCode = 1 ;
});
PHP
Before trying this sample, follow the PHP setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API PHP API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\Stitcher\V1\Client\VideoStitcherServiceClient;
use Google\Cloud\Video\Stitcher\V1\DeleteCdnKeyRequest;
/**
* Deletes a CDN key.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the CDN key
* @param string $cdnKeyId The ID of the CDN key
*/
function delete_cdn_key(
string $callingProjectId,
string $location,
string $cdnKeyId
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$formattedName = $stitcherClient->cdnKeyName($callingProjectId, $location, $cdnKeyId);
$request = (new DeleteCdnKeyRequest())
->setName($formattedName);
$operationResponse = $stitcherClient->deleteCdnKey($request);
$operationResponse->pollUntilComplete();
if ($operationResponse->operationSucceeded()) {
// Print status
printf('Deleted CDN key %s' . PHP_EOL, $cdnKeyId);
} else {
$error = $operationResponse->getError();
// handleError($error)
}
}
Python
Before trying this sample, follow the Python setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Python API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video.stitcher_v1.services.video_stitcher_service import (
VideoStitcherServiceClient ,
)
from google.protobuf import empty_pb2 as empty
def delete_cdn_key ( project_id : str , location : str , cdn_key_id : str ) - > empty . Empty :
"""Deletes a CDN key.
Args:
project_id: The GCP project ID.
location: The location of the CDN key.
cdn_key_id: The user-defined CDN key ID."""
client = VideoStitcherServiceClient ()
name = f "projects/ { project_id } /locations/ { location } /cdnKeys/ { cdn_key_id } "
operation = client . delete_cdn_key ( name = name )
response = operation . result ()
print ( "Deleted CDN key" )
return response
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Video Stitcher API quickstart using
client libraries .
For more information, see the
Video Stitcher API Ruby API
reference documentation .
To authenticate to Video Stitcher API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/video/stitcher"
##
# Delete a CDN key
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param cdn_key_id [String] Your CDN key name (e.g. `my-cdn-key`)
#
def delete_cdn_key project_id :, location :, cdn_key_id :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the CDN key.
name = client . cdn_key_path project : project_id , location : location ,
cdn_key : cdn_key_id
# Delete the CDN key.
operation = client . delete_cdn_key name : name
# The returned object is of type Gapic::Operation. You can use this
# object to check the status of an operation, cancel it, or wait
# for results. Here is how to block until completion:
operation . wait_until_done!
# Print a success message.
puts "Deleted CDN key"
end
Revoke your credentials
Optional: Revoke the authentication credentials that you created, and delete the local
credential file.
gcloud auth application-default revoke
Optional: Revoke credentials from the gcloud CLI.
gcloud auth revoke
What's next
Review the Video Stitcher API reference documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
