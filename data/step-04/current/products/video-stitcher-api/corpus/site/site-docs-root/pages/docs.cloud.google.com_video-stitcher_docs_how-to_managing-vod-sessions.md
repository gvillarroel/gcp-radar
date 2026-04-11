---
title: "Manage a VOD session \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/how-to/managing-vod-sessions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/how-to/managing-vod-sessions
  title: "Manage a VOD session \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
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
Manage a VOD session
Stay organized with collections
Save and categorize content based on your preferences.
Using the Video Stitcher API, you create a video-on-demand (VOD) session each time
you dynamically insert ads prior to delivery to client devices. When you create
a session, the response includes the playback URL and information about the ads
that you inserted into the video.
This page describes how to create and manage a VOD session that is not enabled
by Google Ad Manager. For more information on these types of VOD sessions, see
Manage a VOD session enabled by Google Ad Manager .
Before you begin
Create a VOD config
Create a session
To create a session for an ad-stitched video, use the
projects.locations.vodSessions.create method.
When you create a VOD session, the following field is required:
adTracking : determines if the client player is expected to
trigger playback and activity events or if the Video Stitcher API is expected
to trigger playback events on behalf of the client player; for more
information on client-side ad tracking, see
Handle VOD client ad tracking .
The example in this section uses server-side ad tracking.
When you create a VOD session, the following fields are optional:
adTagMacroMap : a list of key-value pairs for ad tag
macro replacement; see the ad tag macros section
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
The Video Stitcher API generates a unique session ID for each request. A session expires after 4
hours.
An ad must be encoded before it can be stitched into a VOD session. When you
create a session for an ad-stitched video, the Video Stitcher API determines if
the ad has already been encoded from a previous session. If it has, the JSON
response will indicate ad break events. The API only looks for encoded ads
created by sessions associated with your Google Cloud project. For more information
on this process, see the Overview .
Look at the JSON response. This response indicates that an ad was not
stitched into the session. If this is the case, wait 5 minutes (for ad encoding)
and then re-run the create session command. The response
should now be similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID ",
"interstitials": {
"adBreaks": [
{
"progressEvents": [
{
"timeOffset": "0s",
"events": [
{
"type": "IMPRESSION",
"uri": "https://securepubads.g.doubleclick.net/pcs/view..."
},
{
"type": "START",
"uri": "https://pubads.g.doubleclick.net/pagead/interaction/..."
},
...
]
},
...
],
"ads": [
{
"duration": "10s",
"activityEvents": [
{
"type": "ERROR",
"uri": "https://pubads.g.doubleclick.net/pagead/interaction/..."
},
{
"type": "CLICK_THROUGH",
"uri": "https://pubads.g.doubleclick.net/pcs/click...",
"id": "GDFP"
},
...
]
}
],
"endTimeOffset": "10s",
"startTimeOffset": "0s"
}
],
"sessionContent": {
"duration": "70s"
}
},
"playUri": " PLAY_URI ",
"sourceUri": " VOD_URI ",
"adTagUri": " AD_TAG_URI ",
"assetId": " ASSET_ID ",
"adTracking": "SERVER",
"vodConfig": "projects/ PROJECT_NUMBER /locations/ LOCATION /vodConfigs/ VOD_CONFIG_ID "
}
The response is a VOD session object that contains the following
fields:
A name field that shows the VOD
SESSION_ID . Use this
ID to get information about the session .
An interstitials object that contains metadata about the
ads that were inserted (see the ad metadata concepts ).
A playUri field that shows the URL that the client device uses to play the
conditioned video asset.
If you're generating a session on behalf of your customers' devices, set the
following parameters using HTTP headers:
Parameter
HTTP Header
CLIENT_IP
x-user-ip
REFERRER_URL
referer
USER_AGENT
user-agent
You can add the following headers to the preceding curl request:
-H "x-user-ip: CLIENT_IP " \
-H "referer: REFERRER_URL " \
-H "user-agent: USER_AGENT " \
Ad tag macros
An ad tag can contain macros, which can result in a different ad tag for each
session. Macros are denoted by square brackets in the ad tag, as illustrated by
the following example:
AD_TAG_URI &macro =[ my-key ]
The adTagUri is defined in the VOD config .
To substitute the value in the ad tag macro, provide a mapping in the
adTagMacroMap field. For example, if you want to replace
the [my-key] macro with the string my-value , you need to provide the
following:
{
...
"adTagMacroMap" : {
"my-key" : "my-value"
},
...
}
When the Video Stitcher API requests the ad metadata, it uses the following ad
tag:
AD_TAG_URI &macro = my-value
Get a session
To get the session for an ad-stitched video, use the
projects.locations.vodSessions.get method.
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
SESSION_ID : the identifier for the VOD session
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID ",
"interstitials": {
"adBreaks": [
{
"progressEvents": [
{
"timeOffset": "0s",
"events": [
{
"type": "IMPRESSION",
"uri": "https://securepubads.g.doubleclick.net/pcs/view..."
},
{
"type": "START",
"uri": "https://pubads.g.doubleclick.net/pagead/interaction/..."
},
...
]
},
...
],
"ads": [
{
"duration": "10s",
"activityEvents": [
{
"type": "ERROR",
"uri": "https://pubads.g.doubleclick.net/pagead/interaction/..."
},
{
"type": "CLICK_THROUGH",
"uri": "https://pubads.g.doubleclick.net/pcs/click...",
"id": "GDFP"
},
...
]
}
],
"endTimeOffset": "10s",
"startTimeOffset": "0s"
}
],
"sessionContent": {
"duration": "70s"
}
},
"playUri": " PLAY_URI ",
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
using Google.Cloud.Video.Stitcher.V1 ;
public class GetVodSessionSample
{
public VodSession GetVodSession (
string projectId , string location , string sessionId )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
GetVodSessionRequest request = new GetVodSessionRequest
{
VodSessionName = VodSessionName . FromProjectLocationVodSession ( projectId , location , sessionId )
};
// Call the API.
VodSession session = client . GetVodSession ( request );
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
"encoding/json"
"fmt"
"io"
stitcher "cloud.google.com/go/video/stitcher/apiv1"
stitcherstreampb "cloud.google.com/go/video/stitcher/apiv1/stitcherpb"
)
// getVodSession gets a VOD session by ID.
func getVodSession ( w io . Writer , projectID , sessionID string ) error {
// projectID := "my-project-id"
// sessionID := "123-456-789"
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
req := & stitcherstreampb . GetVodSessionRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/vodSessions/%s" , projectID , location , sessionID ),
}
// Gets the session.
response , err := client . GetVodSession ( ctx , req )
if err != nil {
return fmt . Errorf ( "client.GetVodSession: %w" , err )
}
b , err := json . MarshalIndent ( response , "" , " " )
if err != nil {
return fmt . Errorf ( "json.MarshalIndent: %w" , err )
}
fmt . Fprintf ( w , "VOD session:\n%s" , string ( b ))
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
import com.google.cloud.video.stitcher.v1. GetVodSessionRequest ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import com.google.cloud.video.stitcher.v1. VodSession ;
import com.google.cloud.video.stitcher.v1. VodSessionName ;
import java.io.IOException ;
public class GetVodSession {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String sessionId = "my-session-id" ;
getVodSession ( projectId , location , sessionId );
}
// Gets a video on demand (VOD) session.
public static VodSession getVodSession ( String projectId , String location , String sessionId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
GetVodSessionRequest getVodSessionRequest =
GetVodSessionRequest . newBuilder ()
. setName ( VodSessionName . of ( projectId , location , sessionId ). toString ())
. build ();
VodSession response = videoStitcherServiceClient . getVodSession ( getVodSessionRequest );
System . out . println ( "VOD session: " + response . getName ());
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
async function getVodSession () {
// Construct request
const request = {
name : stitcherClient . vodSessionPath ( projectId , location , sessionId ),
};
const [ session ] = await stitcherClient . getVodSession ( request );
console . log ( `VOD session: ${ session . name } ` );
}
getVodSession (). catch ( err = > {
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
use Google\Cloud\Video\Stitcher\V1\GetVodSessionRequest;
/**
* Gets a VOD session.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the session
* @param string $sessionId The ID of the session
*/
function get_vod_session(
string $callingProjectId,
string $location,
string $sessionId
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$formattedName = $stitcherClient->vodSessionName($callingProjectId, $location, $sessionId);
$request = (new GetVodSessionRequest())
->setName($formattedName);
$session = $stitcherClient->getVodSession($request);
// Print results
printf('VOD session: %s' . PHP_EOL, $session->getName());
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
def get_vod_session (
project_id : str , location : str , session_id : str
) - > stitcher_v1 . types . VodSession :
"""Gets a VOD session. VOD sessions are ephemeral resources that expire
after a few hours.
Args:
project_id: The GCP project ID.
location: The location of the session.
session_id: The ID of the VOD session.
Returns:
The VOD session resource.
"""
client = VideoStitcherServiceClient ()
name = client . vod_session_path ( project_id , location , session_id )
response = client . get_vod_session ( name = name )
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
# Get a VOD session. VOD sessions are ephemeral resources that expire
# after a few hours.
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param session_id [String] The VOD session ID (e.g. `my-vod-session-id`)
#
def get_vod_session project_id :, location :, session_id :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the VOD session.
name = client . vod_session_path project : project_id , location : location ,
vod_session : session_id
# Get the VOD session.
session = client . get_vod_session name : name
# Print the VOD session name.
puts "VOD session: #{ session . name } "
end
Sample ad-stitched playlist
The following shows a sample source VOD playlist before ad stitching:
#EXTM3U
#EXT-X-TARGETDURATION:6
#EXT-X-VERSION:4
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-MEDIA-SEQUENCE:0
#EXTINF:6.000,
segment_01.ts
#EXTINF:6.000,
segment_02.ts
#EXTINF:6.000,
segment_03.ts
#EXTINF:6.000,
segment_04.ts
#EXTINF:6.000,
segment_05.ts
#EXTINF:6.000,
segment_06.ts
#EXT-X-ENDLIST
The following shows a sample source VOD playlist after ad stitching with
pre-roll, mid-roll, and post-roll ads:
#EXTM3U
#EXT-X-VERSION:4
#EXT-X-TARGETDURATION:6
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-DISCONTINUITY
#EXTINF:4.000,
https://ads.us-west1.cdn.videostitcher.goog/preroll_ad/seg_01.ts
#EXTINF:4.000,
https://ads.us-west1.cdn.videostitcher.goog/preroll_ad/seg_02.ts
#EXTINF:1.990,
https://ads.us-west1.cdn.videostitcher.goog/preroll_ad/seg_03.ts
#EXT-X-DISCONTINUITY
#EXTINF:6.000,
segment_01.ts
#EXTINF:6.000,
segment_02.ts
#EXT-X-DISCONTINUITY
#EXTINF:4.000,
https://ads.us-west1.cdn.videostitcher.goog/midroll_ad/seg_01.ts
#EXTINF:0.990,
https://ads.us-west1.cdn.videostitcher.goog/midroll_ad/seg_02.ts
#EXT-X-DISCONTINUITY
#EXTINF:6.000,
segment_03.ts
#EXTINF:6.000,
segment_04.ts
#EXTINF:6.000,
segment_05.ts
#EXTINF:6.000,
segment_06.ts
#EXT-X-DISCONTINUITY
#EXTINF:4.000,
https://ads.us-west1.cdn.videostitcher.goog/postroll_ad/seg_01.ts
#EXTINF:4.000,
https://ads.us-west1.cdn.videostitcher.goog/postroll_ad/seg_02.ts
#EXTINF:1.990,
https://ads.us-west1.cdn.videostitcher.goog/postroll_ad/seg_03.ts
#EXT-X-ENDLIST
Handle client-side ad tracking
When client ad tracking is enabled, the player is responsible for triggering ad
tracking events. You can find client-side tracking information in the
interstitials object returned when the VOD session is created.
The interstitials object includes ad tracking information and metadata for
companion ads parsed from ad tag requests. To inspect which ads are stitched,
see Inspect VOD sessions .
Interstitials
Ad tracking information is grouped by ad breaks in the
interstitials object.
Ad breaks may have progress events which specify the event URI and the time
offset relative to the break start time for each event that has been fired. For
more details about progress events, see the ProgressEvent
reference documentation.
Ad breaks may also have activity events and companion ads. For more details
about companion ads, see the CompanionAds reference
documentation.
The following is an interstitials example:
{
"adBreaks" : [
{
"progressEvents" : [
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
"timeOffset" : "1.250s" ,
"events" : [
{
"type" : "FIRST_QUARTILE" ,
"uri" : "https://example.com/firstquartile"
}
]
}
],
"ads" : [
{
"duration" : "5s" ,
"activityEvents" : [
{
"type" : "PAUSE" ,
"uri" : "https://example.com/pause"
}
],
"companionAds" : {
"required" : "all" ,
"companions" : [
{
"width" : 200 ,
"height" : 100 ,
"staticResource" : {
"uri" : "https://example.com/static.png" ,
"creativeType" : "image/png"
}
}
]
}
},
{
"duration" : "10s"
}
],
"startTimeOffset" : "0s" ,
"endTimeOffset" : "15.000s"
}
],
"sessionContent" : {
"duration" : "120.000s"
}
}
In the preceding example, there is one pre-roll ad break with two ads stitched
into a VOD asset. The duration of the first ad is 5 seconds and the duration of
the second ad is 10 seconds. The total stitched video length is 120 seconds, as
identified by the duration field in sessionContent .
When the client receives this object, it should do the following:
Make a request to https://example.com/start at the start of the ad break.
Make a request to https://example.com/impression at the start of the ad
break.
Make a request to https://example.com/pause whenever the viewer pauses the
video during the first ad.
Make a request to https://example.com/firstQuartile 1.25 seconds into the
first ad.
Load the companion ad https://example.com/static.png during the first ad.
Inspect VOD sessions
This section describes how to inspect the ad tag details and stitch details for
a given VOD session. For more details, see the REST documentation for
VodAdTagDetail and
VodStitchDetail .
Note: This section does not apply to VOD sessions created for
Google Ad Manager (GAM) ad insertion. You can't use the ad tag and stitch
details endpoints for these sessions. Use the
Stream activity monitor in Ad Manager
to see details about ad requests.
The adTagUri field, defined in the VOD config for the VOD session, specifies
the URL from where ad metadata is retrieved. The Video Stitcher API also includes
user metadata when it makes the request.
The /vodAdTagDetails endpoint contains the following information:
resolved ad tag
user metadata
request body and headers
response body and headers
The /vodStitchDetails endpoint contains the following information:
ad break ID
ad ID
ad time offset (in seconds)
reason if the ad was not inserted
ad media metadata
Note: The ad tag and stitch details information is stored for 30 days.
List ad tag details
To list the ad tag details for a VOD session, use the
projects.locations.vodSessions.vodAdTagDetails.list
method.
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
SESSION_ID : the session ID for the VOD session
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID /vodAdTagDetails"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID /vodAdTagDetails" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"vodAdTagDetails" : [
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID /vodAdTagDetails/ VOD_AD_TAG_DETAILS_ID ",
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
public class ListVodAdTagDetailsSample
{
public PagedEnumerable<ListVodAdTagDetailsResponse , VodAdTagDetail > ListVodAdTagDetails (
string projectId , string regionId , string sessionId )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
ListVodAdTagDetailsRequest request = new ListVodAdTagDetailsRequest
{
ParentAsVodSessionName = VodSessionName . FromProjectLocationVodSession ( projectId , regionId , sessionId )
};
// Make the request.
PagedEnumerable<ListVodAdTagDetailsResponse , VodAdTagDetail > response = client . ListVodAdTagDetails ( request );
foreach ( VodAdTagDetail vodAdTagDetail in response )
{
Console . WriteLine ( $"{vodAdTagDetail.Name}" );
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
// listVodAdTagDetails lists the ad tag details for a video on demand (VOD) session.
func listVodAdTagDetails ( w io . Writer , projectID , sessionID string ) error {
// projectID := "my-project-id"
// sessionID := "123-456-789"
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
req := & stitcherstreampb . ListVodAdTagDetailsRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s/vodSessions/%s" , projectID , location , sessionID ),
}
it := client . ListVodAdTagDetails ( ctx , req )
fmt . Fprintln ( w , "VOD ad tag details:" )
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
import com.google.cloud.video.stitcher.v1. ListVodAdTagDetailsRequest ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient . ListVodAdTagDetailsPagedResponse ;
import com.google.cloud.video.stitcher.v1. VodAdTagDetail ;
import com.google.cloud.video.stitcher.v1. VodSessionName ;
import java.io.IOException ;
public class ListVodAdTagDetails {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String sessionId = "my-session-id" ;
listVodAdTagDetails ( projectId , location , sessionId );
}
// Lists the ad tag details for a video on demand (VOD) session.
public static ListVodAdTagDetailsPagedResponse listVodAdTagDetails (
String projectId , String location , String sessionId ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
ListVodAdTagDetailsRequest listVodAdTagDetailsRequest =
ListVodAdTagDetailsRequest . newBuilder ()
. setParent ( VodSessionName . of ( projectId , location , sessionId ). toString ())
. build ();
VideoStitcherServiceClient . ListVodAdTagDetailsPagedResponse response =
videoStitcherServiceClient . listVodAdTagDetails ( listVodAdTagDetailsRequest );
System . out . println ( "VOD ad tag details:" );
for ( VodAdTagDetail adTagDetail : response . iterateAll ()) {
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
async function listVodAdTagDetails () {
// Construct request
const request = {
parent : stitcherClient . vodSessionPath ( projectId , location , sessionId ),
};
const iterable = await stitcherClient . listVodAdTagDetailsAsync ( request );
console . log ( 'VOD ad tag details:' );
for await ( const response of iterable ) {
console . log ( response . name );
}
}
listVodAdTagDetails (). catch ( err = > {
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
use Google\Cloud\Video\Stitcher\V1\ListVodAdTagDetailsRequest;
/**
* Lists the ad tag details for the specified VOD session.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the session
* @param string $sessionId The ID of the session
*/
function list_vod_ad_tag_details(
string $callingProjectId,
string $location,
string $sessionId
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$formattedName = $stitcherClient->vodSessionName($callingProjectId, $location, $sessionId);
$request = (new ListVodAdTagDetailsRequest())
->setParent($formattedName);
$response = $stitcherClient->listVodAdTagDetails($request);
// Print the ad tag details list.
$adTagDetails = $response->iterateAllElements();
print('VOD ad tag details:' . PHP_EOL);
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
def list_vod_ad_tag_details (
project_id : str , location : str , session_id : str
) - > pagers . ListVodAdTagDetailsPager :
"""Lists the ad tag details for the specified VOD session.
Args:
project_id: The GCP project ID.
location: The location of the session.
session_id: The ID of the VOD session.
Returns:
An iterable object containing VOD ad tag details resources.
"""
client = VideoStitcherServiceClient ()
parent = client . vod_session_path ( project_id , location , session_id )
page_result = client . list_vod_ad_tag_details ( parent = parent )
print ( "VOD ad tag details:" )
for response in page_result :
print ( response )
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
# List the ad tag details for a VOD session
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param session_id [String] The VOD session ID (e.g. `my-vod-session-id`)
#
def list_vod_ad_tag_details project_id :, location :, session_id :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the parent.
parent = client . vod_session_path project : project_id , location : location ,
vod_session : session_id
# List all ad tag details for the VOD session.
response = client . list_vod_ad_tag_details parent : parent
puts "VOD ad tag details:"
# Print out all VOD ad tag details.
response . each do | vod_ad_tag_detail |
puts vod_ad_tag_detail . name
end
end
The response returns a list of
VodAdTagDetail objects. Each
VodAdTagDetail represents the ad
retrieval metadata for an ad tag, and each
AdRequest represents the ad request metadata
for a single ad request.
Additional results
The curl response may include a nextPageToken , which you can use to retrieve
additional results:
{
"vodAdTagDetails" : [
...
],
"nextPageToken" : " NEXT_PAGE_TOKEN "
}
You can send another curl request, including the value of
NEXT_PAGE_TOKEN , to list the additional objects. Append
the following to the URL in the preceding API call:
?pageToken= NEXT_PAGE_TOKEN
Get ad tag details
To get the details for a single VodAdTagDetail object in a VOD session, use
the
projects.locations.vodSessions.vodAdTagDetails.get
method.
The following example demonstrates viewing a single ad tag detail for a VOD
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
SESSION_ID : the session ID for the VOD session
VOD_AD_TAG_DETAILS_ID : the ID for the
VOD ad tag details
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID /vodAdTagDetails/ VOD_AD_TAG_DETAILS_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID /vodAdTagDetails/ VOD_AD_TAG_DETAILS_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID /vodAdTagDetails/ VOD_AD_TAG_DETAILS_ID ",
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
public class GetVodAdTagDetailSample
{
public VodAdTagDetail GetVodAdTagDetail (
string projectId , string location , string sessionId , string adTagDetailId )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
GetVodAdTagDetailRequest request = new GetVodAdTagDetailRequest
{
VodAdTagDetailName = VodAdTagDetailName . FromProjectLocationVodSessionVodAdTagDetail ( projectId , location , sessionId , adTagDetailId )
};
// Call the API.
VodAdTagDetail vodAdTagDetail = client . GetVodAdTagDetail ( request );
// Return the result.
return vodAdTagDetail ;
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
// getVodAdTagDetail gets the specified ad tag detail for a video on demand (VOD) session.
func getVodAdTagDetail ( w io . Writer , projectID , sessionID , adTagDetailID string ) error {
// projectID := "my-project-id"
// sessionID := "123-456-789"
// adTagDetailID := "01234-56789"
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
req := & stitcherstreampb . GetVodAdTagDetailRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/vodSessions/%s/vodAdTagDetails/%s" , projectID , location , sessionID , adTagDetailID ),
}
// Gets the ad tag detail.
response , err := client . GetVodAdTagDetail ( ctx , req )
if err != nil {
return fmt . Errorf ( "client.GetVodAdTagDetail: %w" , err )
}
b , err := json . MarshalIndent ( response , "" , " " )
if err != nil {
return fmt . Errorf ( "json.MarshalIndent: %w" , err )
}
fmt . Fprintf ( w , "VOD ad tag detail:\n%s" , string ( b ))
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
import com.google.cloud.video.stitcher.v1. GetVodAdTagDetailRequest ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import com.google.cloud.video.stitcher.v1. VodAdTagDetail ;
import com.google.cloud.video.stitcher.v1. VodAdTagDetailName ;
import java.io.IOException ;
public class GetVodAdTagDetail {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String sessionId = "my-session-id" ;
String adTagDetailId = "my-ad-tag-id" ;
getVodAdTagDetail ( projectId , location , sessionId , adTagDetailId );
}
// Gets an ad tag detail for a video on demand (VOD) session.
public static VodAdTagDetail getVodAdTagDetail (
String projectId , String location , String sessionId , String adTagDetailId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
GetVodAdTagDetailRequest getVodAdTagDetailRequest =
GetVodAdTagDetailRequest . newBuilder ()
. setName (
VodAdTagDetailName . of ( projectId , location , sessionId , adTagDetailId ). toString ())
. build ();
VodAdTagDetail response =
videoStitcherServiceClient . getVodAdTagDetail ( getVodAdTagDetailRequest );
System . out . println ( "VOD ad tag detail: " + response . getName ());
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
async function getVodAdTagDetail () {
// Construct request
const request = {
name : stitcherClient . vodAdTagDetailPath (
projectId ,
location ,
sessionId ,
adTagDetailId
),
};
const [ adTagDetail ] = await stitcherClient . getVodAdTagDetail ( request );
console . log ( `VOD ad tag detail: ${ adTagDetail . name } ` );
}
getVodAdTagDetail (). catch ( err = > {
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
use Google\Cloud\Video\Stitcher\V1\GetVodAdTagDetailRequest;
/**
* Gets the specified ad tag detail for the VOD session.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the session
* @param string $sessionId The ID of the session
* @param string $adTagDetailId The ID of the ad tag detail
*/
function get_vod_ad_tag_detail(
string $callingProjectId,
string $location,
string $sessionId,
string $adTagDetailId
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$formattedName = $stitcherClient->vodAdTagDetailName($callingProjectId, $location, $sessionId, $adTagDetailId);
$request = (new GetVodAdTagDetailRequest())
->setName($formattedName);
$adTagDetail = $stitcherClient->getVodAdTagDetail($request);
// Print results
printf('VOD ad tag detail: %s' . PHP_EOL, $adTagDetail->getName());
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
def get_vod_ad_tag_detail (
project_id : str , location : str , session_id : str , ad_tag_detail_id : str
) - > stitcher_v1 . types . VodAdTagDetail :
"""Gets the specified ad tag detail for a VOD session.
Args:
project_id: The GCP project ID.
location: The location of the session.
session_id: The ID of the VOD session.
ad_tag_detail_id: The ID of the ad tag details.
Returns:
The VOD ad tag detail resource.
"""
client = VideoStitcherServiceClient ()
name = client . vod_ad_tag_detail_path (
project_id , location , session_id , ad_tag_detail_id
)
response = client . get_vod_ad_tag_detail ( name = name )
print ( f "VOD ad tag detail: { response . name } " )
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
# Get the specified ad tag detail for a VOD session
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param session_id [String] The VOD session ID (e.g. `my-vod-session-id`)
# @param ad_tag_detail_id [String] The ad tag detail ID (e.g. `my-ad-tag-id`)
#
def get_vod_ad_tag_detail project_id :, location :, session_id :, ad_tag_detail_id :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the VOD ad tag detail.
name = client . vod_ad_tag_detail_path project : project_id , location : location ,
vod_session : session_id ,
vod_ad_tag_detail : ad_tag_detail_id
# Get the VOD ad tag detail.
ad_tag_detail = client . get_vod_ad_tag_detail name : name
# Print the VOD ad tag detail name.
puts "VOD ad tag detail: #{ ad_tag_detail . name } "
end
List stitch details
You can view detailed information about the ads that were stitched for any VOD
session.
To list the stitch details for a VOD session, use the
projects.locations.vodSessions.vodStitchDetails.list
method.
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
SESSION_ID : the session ID for the VOD session
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID /vodStitchDetails"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID /vodStitchDetails" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"vodStitchDetails" : [
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID /vodStitchDetails/ VOD_STITCH_DETAILS_ID ",
"adStitchDetails": [
{
"adBreakId": " AD_BREAK_ID ",
"adId": " AD_ID ",
"adTimeOffset": " AD_TIME_OFFSET ",
"skipReason": " SKIP_REASON ",
"media": " MEDIA_OBJECT "
},
{
"adBreakId": " my-other-ad-break-id ",
"adId": " my-other-ad-id ",
"adTimeOffset": " my-other-ad-time-offset ",
"skipReason": " my-other-skip-reason ",
"media": " my-other-media-object "
}
]
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
using Google.Api.Gax ;
using Google.Cloud.Video.Stitcher.V1 ;
using System ;
public class ListVodStitchDetailsSample
{
public PagedEnumerable<ListVodStitchDetailsResponse , VodStitchDetail > ListVodStitchDetails (
string projectId , string regionId , string sessionId )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
ListVodStitchDetailsRequest request = new ListVodStitchDetailsRequest
{
ParentAsVodSessionName = VodSessionName . FromProjectLocationVodSession ( projectId , regionId , sessionId )
};
// Make the request.
PagedEnumerable<ListVodStitchDetailsResponse , VodStitchDetail > response = client . ListVodStitchDetails ( request );
foreach ( VodStitchDetail vodStitchDetail in response )
{
Console . WriteLine ( $"{vodStitchDetail.Name}" );
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
// listVodStitchDetails lists the stitch details for a video on demand (VOD) session.
func listVodStitchDetails ( w io . Writer , projectID , sessionID string ) error {
// projectID := "my-project-id"
// sessionID := "123-456-789"
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
req := & stitcherstreampb . ListVodStitchDetailsRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s/vodSessions/%s" , projectID , location , sessionID ),
}
it := client . ListVodStitchDetails ( ctx , req )
fmt . Fprintln ( w , "VOD stitch details:" )
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
import com.google.cloud.video.stitcher.v1. ListVodStitchDetailsRequest ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient . ListVodStitchDetailsPagedResponse ;
import com.google.cloud.video.stitcher.v1. VodSessionName ;
import com.google.cloud.video.stitcher.v1. VodStitchDetail ;
import java.io.IOException ;
public class ListVodStitchDetails {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String sessionId = "my-session-id" ;
listVodStitchDetails ( projectId , location , sessionId );
}
// Lists the VOD stitch details for a video on demand (VOD) session.
public static ListVodStitchDetailsPagedResponse listVodStitchDetails (
String projectId , String location , String sessionId ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
ListVodStitchDetailsRequest listVodStitchDetailsRequest =
ListVodStitchDetailsRequest . newBuilder ()
. setParent ( VodSessionName . of ( projectId , location , sessionId ). toString ())
. build ();
VideoStitcherServiceClient . ListVodStitchDetailsPagedResponse response =
videoStitcherServiceClient . listVodStitchDetails ( listVodStitchDetailsRequest );
System . out . println ( "VOD stitch details:" );
for ( VodStitchDetail stitchDetail : response . iterateAll ()) {
System . out . println ( stitchDetail . toString ());
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
async function listVodStitchDetails () {
// Construct request
const request = {
parent : stitcherClient . vodSessionPath ( projectId , location , sessionId ),
};
const iterable = await stitcherClient . listVodStitchDetailsAsync ( request );
console . log ( 'VOD stitch details:' );
for await ( const response of iterable ) {
console . log ( response . name );
}
}
listVodStitchDetails (). catch ( err = > {
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
use Google\Cloud\Video\Stitcher\V1\ListVodStitchDetailsRequest;
/**
* Lists the stitch details for the specified VOD session.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the session
* @param string $sessionId The ID of the session
*/
function list_vod_stitch_details(
string $callingProjectId,
string $location,
string $sessionId
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$formattedName = $stitcherClient->vodSessionName($callingProjectId, $location, $sessionId);
$request = (new ListVodStitchDetailsRequest())
->setParent($formattedName);
$response = $stitcherClient->listVodStitchDetails($request);
// Print the stitch details list.
$stitchDetails = $response->iterateAllElements();
print('VOD stitch details:' . PHP_EOL);
foreach ($stitchDetails as $stitchDetail) {
printf('%s' . PHP_EOL, $stitchDetail->getName());
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
def list_vod_stitch_details (
project_id : str , location : str , session_id : str
) - > pagers . ListVodStitchDetailsPager :
"""Lists the stitch details for the specified VOD session.
Args:
project_id: The GCP project ID.
location: The location of the session.
session_id: The ID of the VOD session.
Returns:
An iterable object containing VOD stitch details resources.
"""
client = VideoStitcherServiceClient ()
parent = client . vod_session_path ( project_id , location , session_id )
page_result = client . list_vod_stitch_details ( parent = parent )
print ( "VOD stitch details:" )
for response in page_result :
print ( response )
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
# List the stitch details for a VOD session
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param session_id [String] The VOD session ID (e.g. `my-vod-session-id`)
#
def list_vod_stitch_details project_id :, location :, session_id :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the parent.
parent = client . vod_session_path project : project_id , location : location ,
vod_session : session_id
# List all stitch details for the VOD session.
response = client . list_vod_stitch_details parent : parent
puts "VOD stitch details:"
# Print out all VOD stitch details.
response . each do | vod_stitch_detail |
puts vod_stitch_detail . name
end
end
The response returns a list of
VodStitchDetail objects. Each
VodStitchDetail represents the stitch detail for an ad tag, and each
adStitchDetails object represents the
stitch detail for a single ad.
The curl response may include a nextPageToken , which you can use to retrieve
additional results .
Get ad tag stitch detail
To get the stitch detail for a single ad tag for a VOD session, use the
projects.locations.vodSessions.vodStitchDetails.get
method.
The following example demonstrates viewing a single ad tag stitch detail for a
VOD session using the name of an stitch ad tag detail returned from a previous
request:
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
SESSION_ID : the session ID for the VOD session
VOD_STITCH_DETAILS_ID : the ID for the
VOD stitch details
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID /vodStitchDetails/ VOD_STITCH_DETAILS_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://videostitcher.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID /vodStitchDetails/ VOD_STITCH_DETAILS_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /vodSessions/ SESSION_ID /vodStitchDetails/ VOD_STITCH_DETAILS_ID ",
"adStitchDetails": [
{
"adBreakId": " AD_BREAK_ID ",
"adId": " AD_ID ",
"adTimeOffset": " AD_TIME_OFFSET ",
"skipReason": " SKIP_REASON ",
"media": " MEDIA_OBJECT "
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
public class GetVodStitchDetailSample
{
public VodStitchDetail GetVodStitchDetail (
string projectId , string location , string sessionId , string stitchDetailId )
{
// Create the client.
VideoStitcherServiceClient client = VideoStitcherServiceClient . Create ();
GetVodStitchDetailRequest request = new GetVodStitchDetailRequest
{
VodStitchDetailName = VodStitchDetailName . FromProjectLocationVodSessionVodStitchDetail ( projectId , location , sessionId , stitchDetailId )
};
// Call the API.
VodStitchDetail vodStitchDetail = client . GetVodStitchDetail ( request );
// Return the result.
return vodStitchDetail ;
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
// getVodStitchDetail gets the specified stitch detail for a video on demand (VOD) session.
func getVodStitchDetail ( w io . Writer , projectID , sessionID , stitchDetailID string ) error {
// projectID := "my-project-id"
// sessionID := "123-456-789"
// stitchDetailID := "01234-56789"
location := "us-central1"
ctx := context . Background ()
client , err := stitcher . NewVideoStitcherClient ( ctx )
if err != nil {
return fmt . Errorf ( "stitcher.NewVideoStitcherClient: %w" , err )
}
defer client . Close ()
req := & stitcherstreampb . GetVodStitchDetailRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/vodSessions/%s/vodStitchDetails/%s" , projectID , location , sessionID , stitchDetailID ),
}
// Gets the stitch detail.
response , err := client . GetVodStitchDetail ( ctx , req )
if err != nil {
return fmt . Errorf ( "client.GetStitchDetail: %w" , err )
}
b , err := json . MarshalIndent ( response , "" , " " )
if err != nil {
return fmt . Errorf ( "json.MarshalIndent: %w" , err )
}
fmt . Fprintf ( w , "VOD stitch detail:\n%s" , string ( b ))
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
import com.google.cloud.video.stitcher.v1. GetVodStitchDetailRequest ;
import com.google.cloud.video.stitcher.v1. VideoStitcherServiceClient ;
import com.google.cloud.video.stitcher.v1. VodStitchDetail ;
import com.google.cloud.video.stitcher.v1. VodStitchDetailName ;
import java.io.IOException ;
public class GetVodStitchDetail {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String sessionId = "my-session-id" ;
String stitchDetailId = "my-stitch-id" ;
getVodStitchDetail ( projectId , location , sessionId , stitchDetailId );
}
// Gets a stitch detail for a video on demand (VOD) session.
public static VodStitchDetail getVodStitchDetail (
String projectId , String location , String sessionId , String stitchDetailId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( VideoStitcherServiceClient videoStitcherServiceClient =
VideoStitcherServiceClient . create ()) {
GetVodStitchDetailRequest getVodStitchDetailRequest =
GetVodStitchDetailRequest . newBuilder ()
. setName (
VodStitchDetailName . of ( projectId , location , sessionId , stitchDetailId ). toString ())
. build ();
VodStitchDetail response =
videoStitcherServiceClient . getVodStitchDetail ( getVodStitchDetailRequest );
System . out . println ( "VOD stitch detail: " + response . getName ());
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
// stitchDetailId = 'my-stitch-detail-id';
// Imports the Video Stitcher library
const { VideoStitcherServiceClient } =
require ( ' @google-cloud/video-stitcher ' ). v1 ;
// Instantiates a client
const stitcherClient = new VideoStitcherServiceClient ();
async function getVodStitchDetail () {
// Construct request
const request = {
name : stitcherClient . vodStitchDetailPath (
projectId ,
location ,
sessionId ,
stitchDetailId
),
};
const [ stitchDetail ] = await stitcherClient . getVodStitchDetail ( request );
console . log ( `VOD stitch detail: ${ stitchDetail . name } ` );
}
getVodStitchDetail (). catch ( err = > {
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
use Google\Cloud\Video\Stitcher\V1\GetVodStitchDetailRequest;
/**
* Gets the specified stitch detail for the VOD session.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the session
* @param string $sessionId The ID of the session
* @param string $stitchDetailId The ID of the stitch detail
*/
function get_vod_stitch_detail(
string $callingProjectId,
string $location,
string $sessionId,
string $stitchDetailId
): void {
// Instantiate a client.
$stitcherClient = new VideoStitcherServiceClient();
$formattedName = $stitcherClient->vodStitchDetailName($callingProjectId, $location, $sessionId, $stitchDetailId);
$request = (new GetVodStitchDetailRequest())
->setName($formattedName);
$stitchDetail = $stitcherClient->getVodStitchDetail($request);
// Print results
printf('VOD stitch detail: %s' . PHP_EOL, $stitchDetail->getName());
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
def get_vod_stitch_detail (
project_id : str , location : str , session_id : str , stitch_detail_id : str
) - > stitcher_v1 . types . VodStitchDetail :
"""Gets the specified stitch detail for a VOD session.
Args:
project_id: The GCP project ID.
location: The location of the session.
session_id: The ID of the VOD session.
stitch_detail_id: The ID of the stitch details.
Returns:
The VOD stitch detail resource.
"""
client = VideoStitcherServiceClient ()
name = client . vod_stitch_detail_path (
project_id , location , session_id , stitch_detail_id
)
response = client . get_vod_stitch_detail ( name = name )
print ( f "VOD stitch detail: { response . name } " )
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
# Get the specified stitch detail for a VOD session
#
# @param project_id [String] Your Google Cloud project (e.g. `my-project`)
# @param location [String] The location (e.g. `us-central1`)
# @param session_id [String] The VOD session ID (e.g. `my-vod-session-id`)
# @param stitch_detail_id [String] The stitch detail ID (e.g. `my-stitch-id`)
#
def get_vod_stitch_detail project_id :, location :, session_id :, stitch_detail_id :
# Create a Video Stitcher client.
client = Google :: Cloud :: Video :: Stitcher . video_stitcher_service
# Build the resource name of the VOD stitch detail.
name = client . vod_stitch_detail_path project : project_id , location : location ,
vod_session : session_id ,
vod_stitch_detail : stitch_detail_id
# Get the VOD stitch detail.
stitch_detail = client . get_vod_stitch_detail name : name
# Print the VOD stitch detail name.
puts "VOD stitch detail: #{ stitch_detail . name } "
end
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
