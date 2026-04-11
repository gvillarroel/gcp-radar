---
title: "Manage a live session \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/how-to/managing-live-sessions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/how-to/managing-live-sessions
  title: "Manage a live session \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
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
Manage a live session
Stay organized with collections
Save and categorize content based on your preferences.
Using the Video Stitcher API, you create a live session each time you start
playback of a livestream in which ads are dynamically stitched during ad breaks.
The response contains the playback URL and the configuration of the live
session.
This page describes how to create and manage a live session that is not
enabled by Google Ad Manager. For more information on these types of live
sessions, see
Manage a live session enabled by Google Ad Manager .
Before you begin
Create a live config
Create a live session
To create a live session, use the
projects.locations.liveSessions.create method.
When you create a live session, the following fields are optional:
adTagMacros : a list of key-value pairs for ad tag macro
replacement; see the ad tag macros section
manifestOptions : specifies which video renditions are
generated in the stitched video manifest and the ordering of the renditions;
see the manifest options documentation
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
LIVE_CONFIG_ID : the user-defined identifier for
the live config
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
cat > request.json PROJECT_NUMBER /locations/ LOCATION /liveConfigs/ LIVE_CONFIG_ID "
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /liveSessions"
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
"liveConfig": "projects/ PROJECT_NUMBER /locations/ LOCATION /liveConfigs/ LIVE_CONFIG_ID "
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /liveSessions" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /liveSessions/ SESSION_ID ",
"playUri": " PLAY_URI ",
"liveConfig": "projects/ PROJECT_NUMBER /locations/ LOCATION /liveConfigs/ LIVE_CONFIG_ID ",
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
public class CreateLiveSessionSample
{
public LiveSession CreateLiveSession (
string projectId , string location , string liveConfigId )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
CreateLiveSessionRequest request = new CreateLiveSessionRequest
{
Parent = $"projects/{projectId}/locations/{location}" ,
LiveSession = new LiveSession
{
LiveConfig = LiveConfigName . FormatProjectLocationLiveConfig ( projectId , location , liveConfigId )
}
};
// Call the API.
LiveSession session = client . CreateLiveSession ( request );
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
"cloud.google.com/go/video/stitcher/apiv1/stitcherpb"
)
// createLiveSession creates a livestream session in which to insert ads.
// Live sessions are ephemeral resources that expire after a few minutes.
func createLiveSession ( w io . Writer , projectID , liveConfigID string ) error {
// projectID := "my-project-id"
// liveConfigID := "my-live-config"
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
req := & stitcherpb . CreateLiveSessionRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
LiveSession : & stitcherpb . LiveSession {
LiveConfig : fmt . Sprintf ( "projects/%s/locations/%s/liveConfigs/%s" , projectID , location , liveConfigID ),
},
}
// Creates the live session.
response , err := client . CreateLiveSession ( ctx , req )
if err != nil {
return fmt . Errorf ( "client.CreateLiveSession: %w" , err )
}
fmt . Fprintf ( w , "Live session: %v\n" , response . GetName ())
fmt . Fprintf ( w , "Play URI: %v" , response . GetPlayUri ())
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
import com.google.cloud.video.stitcher.v1. CreateLiveSessionRequest ;
import com.google.cloud.video.stitcher.v1. LiveConfigName ;
import com.google.cloud.video.stitcher.v1. LiveSession ;
import com.google.cloud.video.stitcher.v1. LocationName ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import java.io.IOException ;
public class CreateLiveSession {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String liveConfigId = "my-live-config-id" ;
createLiveSession ( projectId , location , liveConfigId );
}
// Creates a live session given the parameters in the supplied live config.
// For more information, see
// https://cloud.google.com/video-stitcher/docs/how-to/managing-live-sessions.
public static LiveSession createLiveSession (
String projectId , String location , String liveConfigId ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
CreateLiveSessionRequest createLiveSessionRequest =
CreateLiveSessionRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , location ). toString ())
. setLiveSession (
LiveSession . newBuilder ()
. setLiveConfig ( LiveConfigName . format ( projectId , location , liveConfigId )))
. build ();
LiveSession response = videoStitcherServiceClient . createLiveSession ( createLiveSessionRequest );
System . out . println ( "Created live session: " + response . getName ());
System . out . println ( "Play URI: " + response . getPlayUri ());
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
// liveConfigId = 'my-live-config-id';
// Imports the Video Stitcher library
const { VideoStitcherServiceClient } =
require ( ' @google-cloud/video-stitcher ' ). v1 ;
// Instantiates a client
const stitcherClient = new VideoStitcherServiceClient ();
async function createLiveSession () {
// Construct request
const request = {
parent : stitcherClient . locationPath ( projectId , location ),
liveSession : {
liveConfig : stitcherClient . liveConfigPath (
projectId ,
location ,
liveConfigId
),
},
};
const [ session ] = await stitcherClient . createLiveSession ( request );
console . log ( `Live session: ${ session . name } ` );
console . log ( `Play URI: ${ session . playUri } ` );
}
createLiveSession (). catch ( err = > {
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
use Google\Cloud\Video\Stitcher\V1\CreateLiveSessionRequest;
use Google\Cloud\Video\Stitcher\V1\LiveSession;
/**
* Creates a live session. Live sessions are ephemeral resources that expire
* after a few minutes.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the session
* @param string $liveConfigId The live config ID to use to create the
* live session
*/
function create_live_session(
string $callingProjectId,
string $location,
string $liveConfigId
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$parent = $stitcherClient->locationName($callingProjectId, $location);
$liveConfig = $stitcherClient->liveConfigName($callingProjectId, $location, $liveConfigId);
$liveSession = new LiveSession();
$liveSession->setLiveConfig($liveConfig);
// Run live session creation request
$request = (new CreateLiveSessionRequest())
->setParent($parent)
->setLiveSession($liveSession);
$response = $stitcherClient->createLiveSession($request);
// Print results
printf('Live session: %s' . PHP_EOL, $response->getName());
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
def create_live_session (
project_id : str , location : str , live_config_id : str
) - > stitcher_v1 . types . LiveSession :
"""Creates a live session. Live sessions are ephemeral resources that expire
after a few minutes.
Args:
project_id: The GCP project ID.
location: The location in which to create the session.
live_config_id: The user-defined live config ID.
Returns:
The live session resource.
"""
client = VideoStitcherServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } "
live_config = (
f "projects/ { project_id } /locations/ { location } /liveConfigs/ { live_config_id } "
)
live_session = stitcher_v1 . types . LiveSession ( live_config = live_config )
response = client . create_live_session ( parent = parent , live_session = live_session )
print ( f "Live session: { response . name } " )
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
# Create a live stream session. Live sessions are ephemeral resources
# that expire after a few minutes.
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param live_config_id [String] Your live config name (e.g. `my-live-config`)
#
def create_live_session project_id :, location :, live_config_id :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the parent.
parent = client . location_path project : project_id , location : location
# Build the resource name of the live config.
live_config_name = client . live_config_path project : project_id ,
location : location ,
live_config : live_config_id
# Set the session fields.
new_live_session = {
live_config : live_config_name
}
response = client . create_live_session parent : parent ,
live_session : new_live_session
# Print the live session name.
puts "Live session: #{ response . name } "
end
The response is a live session object . The
playUri is the URL the client device uses to play the ad stitched stream for
this live session.
The Video Stitcher API generates a unique session ID for each request. A
session expires if the playUri is not requested within the past 5 minutes.
An ad must be encoded before it can be stitched into a live session. When you
create a session for an ad-stitched video, the Video Stitcher API determines if
the ad has already been encoded from a previous session. The API only looks for
encoded ads created by sessions associated with your Google Cloud project. For more
information on this process, see the Overview .
If you're generating a session on behalf of your customers' devices, you can set
the following parameters using HTTP headers:
Parameter
HTTP Header
CLIENT_IP
x-forwarded-for
REFERRER_URL
referer
USER_AGENT
user-agent
You can add the following headers to the preceding curl request:
-H "x-forwarded-for: CLIENT_IP " \
-H "referer: REFERRER_URL " \
-H "user-agent: USER_AGENT " \
If the x-forwarded-for header is not provided, the Video Stitcher API uses the
client's IP address in ad metadata requests. Be aware that the client's IP
address may not match the IP of your customers' devices if sessions are
generated on behalf of your customers' devices.
Ad tag macros
An ad tag can contain macros, which can produce a different ad tag for each
session. Macros are denoted by square brackets in the ad tag, as illustrated by
the following example:
AD_TAG_URI &macro =[ my-key ]
The adTagUri is defined in the live config .
To substitute the value in the ad tag macro, provide a mapping in the
adTagMacros field. For example, if you want to replace the
[my-key] macro with the string my-value , you need to provide the following:
{
...
"adTagMacros" : {
"my-key" : "my-value"
},
...
}
When the Video Stitcher API requests the ad metadata, it uses the following ad
tag:
AD_TAG_URI &macro = my-value
Get a session
To get the live session, use the
projects.locations.liveSessions.get method.
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
SESSION_ID : the identifier for the live session
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /liveSessions/ SESSION_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /liveSessions/ SESSION_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /liveSessions/ SESSION_ID ",
"playUri": " ad-stitched-live-stream-uri ",
"liveConfig": "projects/ PROJECT_NUMBER /locations/ LOCATION /liveConfigs/ LIVE_CONFIG_ID ",
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
public class GetLiveSessionSample
{
public LiveSession GetLiveSession (
string projectId , string location , string sessionId )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
GetLiveSessionRequest request = new GetLiveSessionRequest
{
LiveSessionName = LiveSessionName . FromProjectLocationLiveSession ( projectId , location , sessionId )
};
// Call the API.
LiveSession session = client . GetLiveSession ( request );
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
"cloud.google.com/go/video/stitcher/apiv1/stitcherpb"
)
// getLiveSession gets a livestream session by ID.
func getLiveSession ( w io . Writer , projectID , sessionID string ) error {
// projectID := "my-project-id"
// sessionID := "123-456-789"
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
req := & stitcherpb . GetLiveSessionRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/liveSessions/%s" , projectID , location , sessionID ),
}
// Gets the session.
response , err := client . GetLiveSession ( ctx , req )
if err != nil {
return fmt . Errorf ( "client.GetLiveSession: %w" , err )
}
fmt . Fprintf ( w , "Live session: %+v" , response )
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
import com.google.cloud.video.stitcher.v1. GetLiveSessionRequest ;
import com.google.cloud.video.stitcher.v1. LiveSession ;
import com.google.cloud.video.stitcher.v1. LiveSessionName ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import java.io.IOException ;
public class GetLiveSession {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String sessionId = "my-session-id" ;
getLiveSession ( projectId , location , sessionId );
}
// Gets a live session.
public static LiveSession getLiveSession ( String projectId , String location , String sessionId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
GetLiveSessionRequest getLiveSessionRequest =
GetLiveSessionRequest . newBuilder ()
. setName ( LiveSessionName . of ( projectId , location , sessionId ). toString ())
. build ();
LiveSession response = videoStitcherServiceClient . getLiveSession ( getLiveSessionRequest );
System . out . println ( "Live session: " + response . getName ());
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
// sessionId = 'my-session-id';
// Imports the Video Stitcher library
const { VideoStitcherServiceClient } =
require ( ' @google-cloud/video-stitcher ' ). v1 ;
// Instantiates a client
const stitcherClient = new VideoStitcherServiceClient ();
async function getLiveSession () {
// Construct request
const request = {
name : stitcherClient . liveSessionPath ( projectId , location , sessionId ),
};
const [ session ] = await stitcherClient . getLiveSession ( request );
console . log ( `Live session: ${ session . name } ` );
}
getLiveSession (). catch ( err = > {
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
use Google\Cloud\Video\Stitcher\V1\GetLiveSessionRequest;
/**
* Gets a live session.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the session
* @param string $sessionId The ID of the session
*/
function get_live_session(
string $callingProjectId,
string $location,
string $sessionId
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$formattedName = $stitcherClient->liveSessionName($callingProjectId, $location, $sessionId);
$request = (new GetLiveSessionRequest())
->setName($formattedName);
$session = $stitcherClient->getLiveSession($request);
// Print results
printf('Live session: %s' . PHP_EOL, $session->getName());
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
def get_live_session (
project_id : str , location : str , session_id : str
) - > stitcher_v1 . types . LiveSession :
"""Gets a live session. Live sessions are ephemeral resources that expire
after a few minutes.
Args:
project_id: The GCP project ID.
location: The location of the session.
session_id: The ID of the live session.
Returns:
The live session resource.
"""
client = VideoStitcherServiceClient ()
name = client . live_session_path ( project_id , location , session_id )
response = client . get_live_session ( name = name )
print ( f "Live session: { response . name } " )
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
# Get a live session. Live sessions are ephemeral resources
# that expire after a few minutes.
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param session_id [String] The live session ID (e.g. `my-live-session-id`)
#
def get_live_session project_id :, location :, session_id :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the live session.
name = client . live_session_path project : project_id , location : location ,
live_session : session_id
# Get the live session.
session = client . get_live_session name : name
# Print the live session name.
puts "Live session: #{ session . name } "
end
Sample ad-stitched playlist
The following shows a sample source live playlist before ad-stitching:
#EXTM3U
#EXT-X-TARGETDURATION:10
#EXT-X-VERSION:4
#EXT-X-MEDIA-SEQUENCE:5
#EXTINF:10.010
segment_00005.ts
#EXTINF:10.010
segment_00006.ts
#EXT-X-DATERANGE:ID="2415919105",START-DATE="2021-06-22T08:32:00Z",DURATION=60,SCTE35-OUT=0xF...
#EXTINF:10.010
segment_00007.ts
#EXTINF:10.010
segment_00008.ts
#EXT-X-DATERANGE:ID="2415919105",START-DATE="2021-06-22T08:39:20Z",SCTE35-IN=0xF...
#EXTINF:10.010
segment_00009.ts
The following shows a sample source live playlist after ad-stitching:
#EXTM3U
#EXT-X-TARGETDURATION:10
#EXT-X-VERSION:4
#EXT-X-MEDIA-SEQUENCE:5
#EXTINF:10.010
segment_00005.ts
#EXTINF:10.010
segment_00006.ts
#EXT-X-DISCONTINUITY
#EXTINF:6.000
https://ads.us-west1.cdn.videostitcher.goog/ad-1/seg-1.ts
#EXTINF:5.000
https://ads.us-west1.cdn.videostitcher.goog/ad-1/seg-2.ts
#EXT-X-DISCONTINUITY
#EXTINF:6.000
https://ads.us-west1.cdn.videostitcher.goog/ad-2/seg-1.ts
#EXTINF:5.000
https://ads.us-west1.cdn.videostitcher.goog/ad-2/seg-2.ts
#EXT-X-DISCONTINUITY
#EXTINF:10.010
segment_00009.ts
Handle client-side ad tracking
When client ad tracking is enabled, the player is responsible for triggering ad
tracking events. Ad metadata provided by the Video Stitcher API includes ad
tracking and companion ads information. The Video Stitcher API parses this
information from the ad tag response.
Get the HLS ad metadata URI from manifest
In an HLS rendition manifest, an AdMetadataURI is encoded in attribute
X-VAST-META of tag #EXT-X-DATERANGE . The #EXT-X-DATERANGE tag can be found
before the first stitched segment of each ad.
The following is an example HLS timed metadata tag:
#EXT-X-DATERANGE:ID="id123",START-DATE=2014-03-05T11:15:00Z,DURATION=15,X-VAST-META="eyJBZE1ldGFkYXRhVXJpIjogImh0dHBzOi8vZXhhbXBsZS5jb20vdjFhbHBoYS9wcm9qZWN0cy8xMjMvbG9jYXRpb25zL3VzLWNlbnRyYWwxL2xpdmVTZXNzaW9ucy9hYmMzMjEvYWRNZXRhZGF0YS9pZDEyMyJ9"
The value of an X-VAST-META attribute is a base64-encoded JSON string. After
decoding, you could extract the AdMetadataURI from the JSON.
The following example shows the decoded X-VAST-META :
{
"AdMetadataUri" : "https://example.com/v1/projects/123/locations/us-central1/liveSessions/abc321/adMetadata/id123"
}
Get the DASH ad metadata URI from the manifest
In a DASH manifest, each stitched ad period contains one VAST ad, and its ad
metadata URI can be extracted from within the EventStream tag. AdMetadataURI
is encoded in attribute messageData of the Event element. Event is an
element inside tag EventStream with a schemeIdUri of
urn:videostitcher:admetadata:202008 .
The following is an example DASH event stream tag:
<EventStream schemeIdUri="urn:videostitcher:admetadata:202008" timescale="1000">
<Event duration="5000" messageData="eyJBZE1ldGFkYXRhVXJpIjogImh0dHBzOi8vZXhhbXBsZS5jb20vdjFhbHBoYS9wcm9qZWN0cy8xMjMvbG9jYXRpb25zL3VzLWNlbnRyYWwxL2xpdmVTZXNzaW9ucy9hYmMzMjEvYWRNZXRhZGF0YS9pZDEyMyJ9"></Event>
</EventStream>
Use base64 to decode the messageData to JSON.
The following example shows the decoded messageData :
{
"AdMetadataUri" : "https://example.com/v1/projects/123/locations/us-central1/liveSessions/abc321/adMetadata/id123"
}
Retrieve and process ad tracking events
After you get AdMetadataURI , you can fetch ad metadata.
The following example shows the ad metadata:
{
"activityEvents" : [
{
"type" : "PAUSE" ,
"uri" : "https://example.com/pause"
}
],
"progressiveEvents" : [
{
"timeOffset" : "0s" ,
"events" : [
{
"type" : "IMPRESSION" ,
"uri" : "https://example.com/impression"
},
{
"type" : "START" ,
"uri" : "https://example.com/start"
}
]
},
{
"timeOffset" : "2.500s" ,
"events" : [
{
"type" : "FIRST_QUARTILE" ,
"uri" : "https://example.com/firstquartile"
}
]
}
],
"adDuration" : "10s"
}
In the preceding example, the client should do the following:
Request https://example.com/start at the start of the ad video
Request https://example.com/impression at the start of the ad video
Request https://example.com/pause whenever the viewer pauses the ad video
Request https://example.com/firstQuartile 2.5 seconds into the ad video
Inspect live sessions
This section describes how to inspect live sessions and the ad tag details for a
given live session. For more details, see the
REST documentation .
Note: You can't use the ad tag details endpoints for live sessions
enabled by Google Ad Manager. For information on Google Ad Manager live
sessions, see
Manage a live session enabled by Google Ad Manager .
The Video Stitcher API sends requests to ad providers specified in the ad tags
in the body of a live session request. Request and response metadata for these
requests is saved for 14 days and can be viewed by inspecting the live session.
The Video Stitcher API composes the ad tag detail using the following:
The requested ad tag URL in a given ad break (or the default ad tag if none
is specified)
The configured ad tag macros from the live session request
Additional user metadata
This information, along with the body and metadata of the response, provides
insight to the behavior of the Video Stitcher API.
List ad tag details
To list the ad tag details for a live session, use the
projects.locations.liveSessions.liveAdTagDetails.list
method.
Consider the following response for a previously-created live session (some
fields are omitted):
{
"name" : "projects/ PROJECT_NUMBER /locations/ LOCATION /liveSessions/ SESSION_ID " ,
...
}
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number located in the Project number field on the IAM Settings
page
LOCATION : the location of your session; use one of
the supported regions
Show locations
us-central1
us-east1
us-west1
asia-east1
asia-south1
asia-southeast1
europe-west1
southamerica-east1
SESSION_ID : the identifier for the live session
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /liveSessions/ SESSION_ID /liveAdTagDetails"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /liveSessions/ SESSION_ID /liveAdTagDetails" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"liveAdTagDetails" : [
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /liveSessions/ SESSION_ID /liveAdTagDetails/ LIVE_AD_TAG_DETAILS_ID ",
"adRequests": [
{
"uri": " REQUEST_URL ",
"requestMetadata": " AD_TAG_REQUEST_METADATA ",
"responseMetadata": " AD_TAG_RESPONSE_METADATA "
}
]
}
]
}
Copy the returned LIVE_AD_TAG_DETAILS_ID . You need it to
get the details for a single ad tag.
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
using Google.Api.Gax ;
using Google.Cloud.Video.Stitcher.V1 ;
using System ;
public class ListLiveAdTagDetailsSample
{
public PagedEnumerable<ListLiveAdTagDetailsResponse , LiveAdTagDetail > ListLiveAdTagDetails (
string projectId , string regionId , string sessionId )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
ListLiveAdTagDetailsRequest request = new ListLiveAdTagDetailsRequest
{
ParentAsLiveSessionName = LiveSessionName . FromProjectLocationLiveSession ( projectId , regionId , sessionId )
};
// Make the request.
PagedEnumerable<ListLiveAdTagDetailsResponse , LiveAdTagDetail > response = client . ListLiveAdTagDetails ( request );
foreach ( LiveAdTagDetail liveAdTagDetail in response )
{
Console . WriteLine ( $"{liveAdTagDetail.Name}" );
}
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
"fmt"
"io"
stitcher "cloud.google.com/go/video/stitcher/apiv1"
stitcherstreampb "cloud.google.com/go/video/stitcher/apiv1/stitcherpb"
"google.golang.org/api/iterator"
)
// listLiveAdTagDetails lists the ad tag details for the specified live session.
func listLiveAdTagDetails ( w io . Writer , projectID , sessionID string ) error {
// projectID := "my-project-id"
// sessionID := "my-session-id"
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
req := & stitcherstreampb . ListLiveAdTagDetailsRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s/liveSessions/%s" , projectID , location , sessionID ),
}
it := client . ListLiveAdTagDetails ( ctx , req )
fmt . Fprintln ( w , "Live ad tag details:" )
for {
response , err := it . Next ()
if err == iterator . Done {
break
}
if err != nil {
return fmt . Errorf ( "it.Next(): %w" , err )
}
fmt . Fprintln ( w , response . GetName ())
}
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
import com.google.cloud.video.stitcher.v1. ListLiveAdTagDetailsRequest ;
import com.google.cloud.video.stitcher.v1. LiveAdTagDetail ;
import com.google.cloud.video.stitcher.v1. LiveSessionName ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient . ListLiveAdTagDetailsPagedResponse ;
import java.io.IOException ;
public class ListLiveAdTagDetails {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String sessionId = "my-session-id" ;
listLiveAdTagDetails ( projectId , location , sessionId );
}
// Lists the live ad tag details for a given live session.
public static ListLiveAdTagDetailsPagedResponse listLiveAdTagDetails (
String projectId , String location , String sessionId ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
ListLiveAdTagDetailsRequest listLiveAdTagDetailsRequest =
ListLiveAdTagDetailsRequest . newBuilder ()
. setParent ( LiveSessionName . of ( projectId , location , sessionId ). toString ())
. build ();
VideoStitcherServiceClient . ListLiveAdTagDetailsPagedResponse response =
videoStitcherServiceClient . listLiveAdTagDetails ( listLiveAdTagDetailsRequest );
System . out . println ( "Live ad tag details:" );
for ( LiveAdTagDetail adTagDetail : response . iterateAll ()) {
System . out . println ( adTagDetail . toString ());
}
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
// sessionId = 'my-session-id';
// Imports the Video Stitcher library
const { VideoStitcherServiceClient } =
require ( ' @google-cloud/video-stitcher ' ). v1 ;
// Instantiates a client
const stitcherClient = new VideoStitcherServiceClient ();
async function listLiveAdTagDetails () {
// Construct request
const request = {
parent : stitcherClient . liveSessionPath ( projectId , location , sessionId ),
};
const iterable = await stitcherClient . listLiveAdTagDetailsAsync ( request );
console . log ( 'Live ad tag details:' );
for await ( const response of iterable ) {
console . log ( response . name );
}
}
listLiveAdTagDetails (). catch ( err = > {
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
use Google\Cloud\Video\Stitcher\V1\ListLiveAdTagDetailsRequest;
/**
* Lists the ad tag details for the specified live session.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the session
* @param string $sessionId The ID of the session
*/
function list_live_ad_tag_details(
string $callingProjectId,
string $location,
string $sessionId
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$formattedName = $stitcherClient->liveSessionName($callingProjectId, $location, $sessionId);
$request = (new ListLiveAdTagDetailsRequest())
->setParent($formattedName);
$response = $stitcherClient->listLiveAdTagDetails($request);
// Print the ad tag details list.
$adTagDetails = $response->iterateAllElements();
print('Live ad tag details:' . PHP_EOL);
foreach ($adTagDetails as $adTagDetail) {
printf('%s' . PHP_EOL, $adTagDetail->getName());
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
pagers ,
VideoStitcherServiceClient ,
)
def list_live_ad_tag_details (
project_id : str , location : str , session_id : str
) - > pagers . ListLiveAdTagDetailsPager :
"""Lists the ad tag details for the specified live session.
Args:
project_id: The GCP project ID.
location: The location of the session.
session_id: The ID of the live session.
Returns:
An iterable object containing live ad tag details resources.
"""
client = VideoStitcherServiceClient ()
parent = client . live_session_path ( project_id , location , session_id )
page_result = client . list_live_ad_tag_details ( parent = parent )
print ( "Live ad tag details:" )
for response in page_result :
print ( response )
return page_result
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
# List the ad tag details for a live session
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param session_id [String] The live session ID (e.g. `my-live-session-id`)
#
def list_live_ad_tag_details project_id :, location :, session_id :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the parent.
parent = client . live_session_path project : project_id , location : location ,
live_session : session_id
# List all ad tag details for the live session.
response = client . list_live_ad_tag_details parent : parent
puts "Live ad tag details:"
# Print out all live ad tag details.
response . each do | live_ad_tag_detail |
puts live_ad_tag_detail . name
end
end
Get ad tag details
To get the details for a single ad tag details in a live session, use the
projects.locations.liveSessions.liveAdTagDetails.get
method.
The following example demonstrates viewing a single ad tag detail for a live
session using the name of an ad tag detail returned from a previous request:
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number located in the Project number field on the IAM Settings
page
LOCATION : the location of your session; use one of
the supported regions
Show locations
us-central1
us-east1
us-west1
asia-east1
asia-south1
asia-southeast1
europe-west1
southamerica-east1
SESSION_ID : the identifier for the live session
LIVE_AD_TAG_DETAILS_ID : the ID for the live ad tag details
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /liveSessions/ SESSION_ID /liveAdTagDetails/ LIVE_AD_TAG_DETAILS_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /liveSessions/ SESSION_ID /liveAdTagDetails/ LIVE_AD_TAG_DETAILS_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /liveSessions/ SESSION_ID /liveAdTagDetails/ LIVE_AD_TAG_DETAILS_ID ",
"adRequests": [
{
"uri": " REQUEST_URL ",
"requestMetadata": " AD_TAG_REQUEST_METADATA ",
"responseMetadata": " AD_TAG_RESPONSE_METADATA "
}
]
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
public class GetLiveAdTagDetailSample
{
public LiveAdTagDetail GetLiveAdTagDetail (
string projectId , string location , string sessionId , string adTagDetailId )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
GetLiveAdTagDetailRequest request = new GetLiveAdTagDetailRequest
{
LiveAdTagDetailName = LiveAdTagDetailName . FromProjectLocationLiveSessionLiveAdTagDetail ( projectId , location , sessionId , adTagDetailId )
};
// Call the API.
LiveAdTagDetail liveAdTagDetail = client . GetLiveAdTagDetail ( request );
// Return the result.
return liveAdTagDetail ;
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
// getLiveAdTagDetail gets the specified ad tag detail for a live session.
func getLiveAdTagDetail ( w io . Writer , projectID , sessionID , adTagDetailID string ) error {
// projectID := "my-project-id"
// sessionID := "my-session-id"
// adTagDetailID := "my-ad-tag-detail-id"
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
req := & stitcherstreampb . GetLiveAdTagDetailRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/liveSessions/%s/liveAdTagDetails/%s" , projectID , location , sessionID , adTagDetailID ),
}
// Gets the ad tag detail.
response , err := client . GetLiveAdTagDetail ( ctx , req )
if err != nil {
return fmt . Errorf ( "client.GetLiveAdTagDetail: %w" , err )
}
b , err := json . MarshalIndent ( response , "" , " " )
if err != nil {
return fmt . Errorf ( "json.MarshalIndent: %w" , err )
}
fmt . Fprintf ( w , "Live ad tag detail:\n%v" , string ( b ))
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
import com.google.cloud.video.stitcher.v1. GetLiveAdTagDetailRequest ;
import com.google.cloud.video.stitcher.v1. LiveAdTagDetail ;
import com.google.cloud.video.stitcher.v1. LiveAdTagDetailName ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import java.io.IOException ;
public class GetLiveAdTagDetail {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String sessionId = "my-session-id" ;
String adTagDetailId = "my-ad-tag-detail-id" ;
getLiveAdTagDetail ( projectId , location , sessionId , adTagDetailId );
}
// Gets a live ad tag detail in a live session.
public static LiveAdTagDetail getLiveAdTagDetail (
String projectId , String location , String sessionId , String adTagDetailId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
GetLiveAdTagDetailRequest getLiveAdTagDetailRequest =
GetLiveAdTagDetailRequest . newBuilder ()
. setName (
LiveAdTagDetailName . of ( projectId , location , sessionId , adTagDetailId ). toString ())
. build ();
LiveAdTagDetail response =
videoStitcherServiceClient . getLiveAdTagDetail ( getLiveAdTagDetailRequest );
System . out . println ( "Live ad tag detail: " + response . getName ());
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
// sessionId = 'my-session-id';
// adTagDetailId = 'my-ad-tag-detail-id';
// Imports the Video Stitcher library
const { VideoStitcherServiceClient } =
require ( ' @google-cloud/video-stitcher ' ). v1 ;
// Instantiates a client
const stitcherClient = new VideoStitcherServiceClient ();
async function getLiveAdTagDetail () {
// Construct request
const request = {
name : stitcherClient . liveAdTagDetailPath (
projectId ,
location ,
sessionId ,
adTagDetailId
),
};
const [ adTagDetail ] = await stitcherClient . getLiveAdTagDetail ( request );
console . log ( `Live ad tag detail: ${ adTagDetail . name } ` );
}
getLiveAdTagDetail (). catch ( err = > {
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
use Google\Cloud\Video\Stitcher\V1\GetLiveAdTagDetailRequest;
/**
* Gets the specified ad tag detail for the live session.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the session
* @param string $sessionId The ID of the session
* @param string $adTagDetailId The ID of the ad tag detail
*/
function get_live_ad_tag_detail(
string $callingProjectId,
string $location,
string $sessionId,
string $adTagDetailId
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$formattedName = $stitcherClient->liveAdTagDetailName($callingProjectId, $location, $sessionId, $adTagDetailId);
$request = (new GetLiveAdTagDetailRequest())
->setName($formattedName);
$adTagDetail = $stitcherClient->getLiveAdTagDetail($request);
// Print results
printf('Live ad tag detail: %s' . PHP_EOL, $adTagDetail->getName());
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
def get_live_ad_tag_detail (
project_id : str , location : str , session_id : str , ad_tag_detail_id : str
) - > stitcher_v1 . types . LiveAdTagDetail :
"""Gets the specified ad tag detail for a live session.
Args:
project_id: The GCP project ID.
location: The location of the session.
session_id: The ID of the live session.
ad_tag_detail_id: The ID of the ad tag details.
Returns:
The live ad tag detail resource.
"""
client = VideoStitcherServiceClient ()
name = client . live_ad_tag_detail_path (
project_id , location , session_id , ad_tag_detail_id
)
response = client . get_live_ad_tag_detail ( name = name )
print ( f "Live ad tag detail: { response . name } " )
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
# Get the specified ad tag detail for a live session
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param session_id [String] The live session ID (e.g. `my-live-session-id`)
# @param ad_tag_detail_id [String] The ad tag detail ID (e.g. `my-ad-tag-id`)
#
def get_live_ad_tag_detail project_id :, location :, session_id :,
ad_tag_detail_id :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the live ad tag detail.
name = client . live_ad_tag_detail_path project : project_id , location : location ,
live_session : session_id ,
live_ad_tag_detail : ad_tag_detail_id
# Get the live ad tag detail.
ad_tag_detail = client . get_live_ad_tag_detail name : name
# Print the live ad tag detail name.
puts "Live ad tag detail: #{ ad_tag_detail . name } "
end
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
