---
title: "Create and manage channel events \_|\_ Live Stream API \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/livestream/docs/how-to/create-channel-events
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/livestream/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/livestream/docs/how-to/create-channel-events
  title: "Create and manage channel events \_|\_ Live Stream API \_|\_ Google Cloud\
    \ Documentation"
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
Create and manage channel events
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create and manage Live Stream API channel events.
A channel event is a sub-resource of a channel. You can use a channel event to
execute operations on a channel resource without needing to stop the channel.
Set up your Google Cloud project and authentication
If you have not created a
Google Cloud project and credentials, see
Before you begin .
Prerequisites
You must create the following resources before creating a channel event:
Create an input endpoint
Create a channel
Create a channel event
Make sure to start the channel
before creating a channel event.
To create a channel event, use the
projects.locations.channels.events.create
method. The following event types are supported:
Ad break event
Insert slate event
Return to program event
Mute event
Unmute event
Switch input event
Update encryptions event
Events can be
executed immediately or
scheduled to run
in the future.
The Live Stream API automatically deletes a channel event
seven days after the event is executed. This deletion includes events that have failed.
Ad break event
Use the adBreak
object to insert a new ad opportunity.
Use the Return to program event to return from
the ad break back to the live stream.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location where your channel is
located; use one of the supported regions
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
CHANNEL_ID : a user-defined identifier for the channel
EVENT_ID : a user-defined identifier for the event
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
cat > request.json
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID "
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
"adBreak": {
"duration": "100s"
},
"executeNow": true
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ EVENT_ID ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"adBreak": {
"duration": "100s"
},
"executeNow": true,
"state": "PENDING"
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
public class CreateChannelEventSample
{
public Event CreateChannelEvent (
string projectId , string locationId , string channelId , string eventId )
{
// Create the client.
LivestreamServiceClient client = LivestreamServiceClient . Create ();
CreateEventRequest request = new CreateEventRequest
{
ParentAsChannelName = ChannelName . FromProjectLocationChannel ( projectId , locationId , channelId ),
EventId = eventId ,
Event = new Event
{
AdBreak = new Event . Types . AdBreakTask
{
Duration = new Google . Protobuf . WellKnownTypes . Duration
{
Seconds = 30
}
},
ExecuteNow = true
}
};
// Make the request.
Event response = client . CreateEvent ( request );
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
"github.com/golang/protobuf/ptypes/duration"
livestream "cloud.google.com/go/video/livestream/apiv1"
"cloud.google.com/go/video/livestream/apiv1/livestreampb"
)
// createChannelEvent creates a channel event. An event is a sub-resource of a
// channel, which can be scheduled by the user to execute operations on a
// channel resource without having to stop the channel. This sample creates an
// ad break event.
func createChannelEvent ( w io . Writer , projectID , location , channelID , eventID string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// channelID := "my-channel"
// eventID := "my-channel-event"
ctx := context . Background ()
client , err := livestream . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & livestreampb . CreateEventRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s/channels/%s" , projectID , location , channelID ),
EventId : eventID ,
Event : & livestreampb . Event {
Task : & livestreampb . Event_AdBreak {
AdBreak : & livestreampb . Event_AdBreakTask {
Duration : & duration . Duration {
Seconds : 30 ,
},
},
},
ExecuteNow : true ,
},
}
// Creates the channel event.
response , err := client . CreateEvent ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateEvent: %w" , err )
}
fmt . Fprintf ( w , "Channel event: %v" , response . Name )
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
import com.google.cloud.video.livestream.v1. ChannelName ;
import com.google.cloud.video.livestream.v1. CreateEventRequest ;
import com.google.cloud.video.livestream.v1. Event ;
import com.google.cloud.video.livestream.v1. Event . AdBreakTask ;
import com.google.cloud.video.livestream.v1. LivestreamServiceClient ;
import com.google.protobuf. Duration ;
import java.io.IOException ;
public class CreateChannelEvent {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String channelId = "my-channel-id" ;
String eventId = "my-channel-event-id" ;
createChannelEvent ( projectId , location , channelId , eventId );
}
public static void createChannelEvent (
String projectId , String location , String channelId , String eventId ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. In this example, try-with-resources is used
// which automatically calls close() on the client to clean up resources.
try ( LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ()) {
var createEventRequest =
CreateEventRequest . newBuilder ()
. setParent ( ChannelName . of ( projectId , location , channelId ). toString ())
. setEventId ( eventId )
. setEvent (
Event . newBuilder ()
. setAdBreak (
AdBreakTask . newBuilder ()
. setDuration ( Duration . newBuilder (). setSeconds ( 30 ). build ())
. build ())
. setExecuteNow ( true )
. build ())
. build ();
Event response = livestreamServiceClient . createEvent ( createEventRequest );
System . out . println ( "Channel event: " + response . getName ());
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
// channelId = 'my-channel';
// eventId = 'my-channel-event';
// Imports the Livestream library
const { LivestreamServiceClient } = require ( ' @google-cloud/livestream ' ). v1 ;
// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient ();
async function createChannelEvent () {
// Construct request
const request = {
parent : livestreamServiceClient . channelPath (
projectId ,
location ,
channelId
),
eventId : eventId ,
event : {
adBreak : {
duration : {
seconds : 30 ,
},
},
executeNow : true ,
},
};
// Run request
const [ event ] = await livestreamServiceClient . createEvent ( request );
console . log ( `Channel event: ${ event . name } ` );
}
createChannelEvent ();
PHP
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API PHP API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\LiveStream\V1\Event;
use Google\Cloud\Video\LiveStream\V1\Client\LivestreamServiceClient;
use Google\Cloud\Video\LiveStream\V1\CreateEventRequest;
use Google\Protobuf\Duration;
/**
* Creates a channel event. This particular sample inserts an ad break marker.
* Other event types are supported.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the channel
* @param string $channelId The ID of the channel
* @param string $eventId The ID of the channel event
*/
function create_channel_event(
string $callingProjectId,
string $location,
string $channelId,
string $eventId
): void {
// Instantiate a client.
$livestreamClient = new LivestreamServiceClient();
$parent = $livestreamClient->channelName($callingProjectId, $location, $channelId);
$eventAdBreak = (new Event\AdBreakTask())
->setDuration(new Duration(['seconds' => 30]));
$event = (new Event())
->setAdBreak($eventAdBreak)
->setExecuteNow(true);
// Run the channel event creation request.
$request = (new CreateEventRequest())
->setParent($parent)
->setEvent($event)
->setEventId($eventId);
$response = $livestreamClient->createEvent($request);
// Print results.
printf('Channel event: %s' . PHP_EOL, $response->getName());
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
from google.protobuf import duration_pb2 as duration
def create_channel_event (
project_id : str , location : str , channel_id : str , event_id : str
) - > live_stream_v1 . types . Event :
"""Creates a channel event.
Args:
project_id: The GCP project ID.
location: The location of the channel.
channel_id: The user-defined channel ID.
event_id: The user-defined event ID."""
client = LivestreamServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } /channels/ { channel_id } "
name = f "projects/ { project_id } /locations/ { location } /channels/ { channel_id } /events/ { event_id } "
event = live_stream_v1 . types . Event (
name = name ,
ad_break = live_stream_v1 . types . Event . AdBreakTask (
duration = duration . Duration (
seconds = 30 ,
),
),
execute_now = True ,
)
response = client . create_event ( parent = parent , event = event , event_id = event_id )
print ( f "Channel event: { response . name } " )
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
# Create a channel event
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param location [String] The location (e.g. "us-central1")
# @param channel_id [String] Your channel name (e.g. "my-channel")
# @param event_id [String] Your event name (e.g. "my-event")
#
def create_channel_event project_id :, location :, channel_id :, event_id :
# Create a Live Stream client.
client = Google :: Cloud :: Video :: LiveStream . livestream_service
# Build the resource name of the parent.
parent = client . channel_path project : project_id , location : location , channel : channel_id
# Set the event fields.
new_event = {
ad_break : {
duration : {
seconds : 100
}
},
execute_now : true
}
response = client . create_event parent : parent , event : new_event , event_id : event_id
# Print the channel event name.
puts "Channel event: #{ response . name } "
end
Insert slate event
Use the slate
object to
insert a slate into a live stream .
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location where your channel is
located; use one of the supported regions
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
CHANNEL_ID : a user-defined identifier for the channel
EVENT_ID : a user-defined identifier for the event
ASSET_ID : the user-defined identifier for the slate asset
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
cat > request.json PROJECT_NUMBER /locations/ LOCATION /assets/ ASSET_ID ",
"duration": "60s"
},
"executeNow": "true"
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID "
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
"slate": {
"asset": "projects/ PROJECT_NUMBER /locations/ LOCATION /assets/ ASSET_ID ",
"duration": "60s"
},
"executeNow": "true"
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ EVENT_ID ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"slate": {
"duration": "60s",
"asset": "projects/ PROJECT_NUMBER /locations/ LOCATION /assets/ ASSET_ID "
},
"executeNow": "true",
"state": "PENDING"
}
Return to program event
Use the returnToProgram
object to stop all running adBreak events. You can stop these events
immediately or schedule the stop for a future time using the
executionTime
field.
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location where your channel is
located; use one of the supported regions
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
CHANNEL_ID : a user-defined identifier for the channel
EVENT_ID : a user-defined identifier for the event
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
cat > request.json
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID "
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
"returnToProgram": {},
"executeNow": true
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ EVENT_ID ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"executeNow": true,
"state": "PENDING",
"returnToProgram": {}
}
Mute event
Use the mute
object to mute the live stream. You can specify a duration for which the stream
should be muted, or mute the stream until an unmute event is
executed.
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location where your channel is
located; use one of the supported regions
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
CHANNEL_ID : a user-defined identifier for the channel
EVENT_ID : a user-defined identifier for the event
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
cat > request.json
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID "
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
"mute": {
"duration": "30s"
},
"executeNow": true
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ EVENT_ID ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"mute": {
"duration": "30s"
},
"executeNow": true,
"state": "PENDING"
}
Unmute event
Use the unmute
object to unmute (that is, restore sound to) the live stream.
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location where your channel is
located; use one of the supported regions
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
CHANNEL_ID : a user-defined identifier for the channel
EVENT_ID : a user-defined identifier for the event
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
cat > request.json
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID "
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
"unmute": {},
"executeNow": true
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ EVENT_ID ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"unmute": {},
"executeNow": true,
"state": "PENDING"
}
Update encryptions event
Use the updateEncryptions
object to update the encryption settings for the channel. The encryption setting
that is being updated should have existed when the channel was started. The
encryption setting should be unique (that is, an encryption ID should only
appear once in each event). You should execute update encryptions events at
least five minutes apart from each other.
For more information,
see Encrypt a live stream .
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location where your channel is
located; use one of the supported regions
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
CHANNEL_ID : a user-defined identifier for the channel
EVENT_ID : a user-defined identifier for the event
ENCRYPTION_ID : an existing encryption ID in the channel
SECRET_ID : the secret to fetch keys from
VERSION_ID : the version of the secret
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
cat > request.json ENCRYPTION_ID ",
"secretManagerKeySource": {
"secretVersion": "projects/ PROJECT_NUMBER /secrets/ SECRET_ID /versions/ VERSION_ID "
}
}
]
},
"executeNow": true
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID "
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
"updateEncryptions": {
"encryptions": [
{
"id": " ENCRYPTION_ID ",
"secretManagerKeySource": {
"secretVersion": "projects/ PROJECT_NUMBER /secrets/ SECRET_ID /versions/ VERSION_ID "
}
}
]
},
"executeNow": true
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ EVENT_ID ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"updateEncryptions": {
"encryptions": [
{
"id": " ENCRYPTION_ID ",
"secretManagerKeySource": {
"secretVersion": "projects/ PROJECT_NUMBER /secrets/ SECRET_ID /versions/ VERSION_ID "
}
}
]
},
"executeNow": true,
"state": "PENDING"
}
Switch input event
Use the inputSwitch
object to manually switch the channel input. See
Create a channel with a backup input stream
for more information on creating a channel with additional inputs.
When you manually switch the input, the
InputSwitchMode
changes to MANUAL . The designated input stream is then always used, even if a
backup input stream is configured by the automaticFailover
field of the designated input stream. The channel won't switch to the backup
input stream when the designated input stream disconnects because automatic
failover is disabled. To enable failover again, see
Enable automatic failover .
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location where your channel is
located; use one of the supported regions
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
CHANNEL_ID : a user-defined identifier for the channel
EVENT_ID : a user-defined identifier for the event
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
cat > request.json
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID "
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
"inputSwitch": {
"inputKey": "input-backup"
},
"executeNow": true
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events?eventId= EVENT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ EVENT_ID ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"inputSwitch": {
"inputKey": "input-backup"
},
"executeNow": true,
"state": "PENDING"
}
Enable automatic failover
To enable automatic failover after a manual input switch, do the following:
Stop the channel
Update the InputSwitchMode channel field
to FAILOVER_PREFER_PRIMARY
Start the channel
Get channel event details
To get the details of a channel event, use the
projects.locations.channels.events.get
method.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location where your channel is
located; use one of the supported regions
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
CHANNEL_ID : a user-defined identifier for the channel
EVENT_ID : a user-defined identifier for the event
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ EVENT_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ EVENT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ EVENT_ID ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"adBreak": {
"duration": "10s"
},
"executeNow": true,
"state": "SCHEDULED"
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
public class GetChannelEventSample
{
public Event GetChannelEvent (
string projectId , string locationId , string channelId , string eventId )
{
// Create the client.
LivestreamServiceClient client = LivestreamServiceClient . Create ();
GetEventRequest request = new GetEventRequest
{
EventName = EventName . FromProjectLocationChannelEvent ( projectId , locationId , channelId , eventId ),
};
// Make the request.
Event response = client . GetEvent ( request );
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
// getChannelEvent gets a previously-created channel event.
func getChannelEvent ( w io . Writer , projectID , location , channelID , eventID string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// channelID := "my-channel-id"
// eventID := "my-channel-event"
ctx := context . Background ()
client , err := livestream . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & livestreampb . GetEventRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/channels/%s/events/%s" , projectID , location , channelID , eventID ),
}
response , err := client . GetEvent ( ctx , req )
if err != nil {
return fmt . Errorf ( "GetEvent: %w" , err )
}
fmt . Fprintf ( w , "Channel event: %v" , response . Name )
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
import com.google.cloud.video.livestream.v1. Event ;
import com.google.cloud.video.livestream.v1. EventName ;
import com.google.cloud.video.livestream.v1. LivestreamServiceClient ;
import java.io.IOException ;
public class GetChannelEvent {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String channelId = "my-channel-id" ;
String eventId = "my-channel-event-id" ;
getChannelEvent ( projectId , location , channelId , eventId );
}
public static void getChannelEvent (
String projectId , String location , String channelId , String eventId ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. In this example, try-with-resources is used
// which automatically calls close() on the client to clean up resources.
try ( LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ()) {
EventName name = EventName . of ( projectId , location , channelId , eventId );
Event response = livestreamServiceClient . getEvent ( name );
System . out . println ( "Channel event: " + response . getName ());
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
// channelId = 'my-channel';
// eventId = 'my-channel-event';
// Imports the Livestream library
const { LivestreamServiceClient } = require ( ' @google-cloud/livestream ' ). v1 ;
// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient ();
async function getChannelEvent () {
// Construct request
const request = {
name : livestreamServiceClient . eventPath (
projectId ,
location ,
channelId ,
eventId
),
};
const [ event ] = await livestreamServiceClient . getEvent ( request );
console . log ( `Channel event: ${ event . name } ` );
}
getChannelEvent ();
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
use Google\Cloud\Video\LiveStream\V1\GetEventRequest;
/**
* Gets a channel event.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the channel
* @param string $channelId The ID of the channel
* @param string $eventId The ID of the channel event
*/
function get_channel_event(
string $callingProjectId,
string $location,
string $channelId,
string $eventId
): void {
// Instantiate a client.
$livestreamClient = new LivestreamServiceClient();
$formattedName = $livestreamClient->eventName($callingProjectId, $location, $channelId, $eventId);
// Get the channel event.
$request = (new GetEventRequest())
->setName($formattedName);
$response = $livestreamClient->getEvent($request);
printf('Channel event: %s' . PHP_EOL, $response->getName());
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
def get_channel_event (
project_id : str , location : str , channel_id : str , event_id : str
) - > live_stream_v1 . types . Event :
"""Gets a channel.
Args:
project_id: The GCP project ID.
location: The location of the channel.
channel_id: The user-defined channel ID.
event_id: The user-defined event ID."""
client = LivestreamServiceClient ()
name = f "projects/ { project_id } /locations/ { location } /channels/ { channel_id } /events/ { event_id } "
response = client . get_event ( name = name )
print ( f "Channel event: { response . name } " )
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
# Get a channel event
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param location [String] The location (e.g. "us-central1")
# @param channel_id [String] Your channel name (e.g. "my-channel")
# @param event_id [String] Your event name (e.g. "my-event")
#
def get_channel_event project_id :, location :, channel_id :, event_id :
# Create a Live Stream client.
client = Google :: Cloud :: Video :: LiveStream . livestream_service
# Build the resource name of the channel event.
name = client . event_path project : project_id , location : location , channel : channel_id , event : event_id
# Get the channel event.
event = client . get_event name : name
# Print the channel event name.
puts "Channel event: #{ event . name } "
end
List channel events
To list all of the channel events you created for a channel, use the
projects.locations.channels.events.list
method.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location where your channel is
located; use one of the supported regions
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
CHANNEL_ID : a user-defined identifier for the channel
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"events": [
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ my-event ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"adBreak": {
"duration": "10s"
},
"executeNow": true,
"state": "SCHEDULED"
},
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ my-event2 ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"adBreak": {
"duration": "10s"
},
"executeNow": true,
"state": "SCHEDULED"
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
using Google.Cloud.Video.LiveStream.V1 ;
using System.Collections.Generic ;
using System.Linq ;
public class ListChannelEventsSample
{
public IList<Event> ListChannelEvents (
string projectId , string regionId , string channelId )
{
// Create the client.
LivestreamServiceClient client = LivestreamServiceClient . Create ();
ListEventsRequest request = new ListEventsRequest
{
ParentAsChannelName = ChannelName . FromProjectLocationChannel ( projectId , regionId , channelId )
};
// Make the request.
PagedEnumerable<ListEventsResponse , Event > response = client . ListEvents ( request );
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
// listChannelEvents lists all channel events for a given channel.
func listChannelEvents ( w io . Writer , projectID , location , channelID string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// channelID := "my-channel-id"
ctx := context . Background ()
client , err := livestream . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & livestreampb . ListEventsRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s/channels/%s" , projectID , location , channelID ),
}
it := client . ListEvents ( ctx , req )
fmt . Fprintln ( w , "Channel events:" )
for {
response , err := it . Next ()
if err == iterator . Done {
break
}
if err != nil {
return fmt . Errorf ( "ListEvents: %w" , err )
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
import com.google.cloud.video.livestream.v1. ChannelName ;
import com.google.cloud.video.livestream.v1. Event ;
import com.google.cloud.video.livestream.v1. ListEventsRequest ;
import com.google.cloud.video.livestream.v1. LivestreamServiceClient ;
import java.io.IOException ;
public class ListChannelEvents {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String channelId = "my-channel-id" ;
listChannelEvents ( projectId , location , channelId );
}
public static void listChannelEvents ( String projectId , String location , String channelId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. In this example, try-with-resources is used
// which automatically calls close() on the client to clean up resources.
try ( LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ()) {
var listEventsRequest =
ListEventsRequest . newBuilder ()
. setParent ( ChannelName . of ( projectId , location , channelId ). toString ())
. build ();
LivestreamServiceClient . ListEventsPagedResponse response =
livestreamServiceClient . listEvents ( listEventsRequest );
System . out . println ( "Channel events:" );
for ( Event event : response . iterateAll ()) {
System . out . println ( event . getName ());
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
// channelId = 'my-channel';
// Imports the Livestream library
const { LivestreamServiceClient } = require ( ' @google-cloud/livestream ' ). v1 ;
// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient ();
async function listChannelEvents () {
const iterable = await livestreamServiceClient . listEventsAsync ({
parent : livestreamServiceClient . channelPath (
projectId ,
location ,
channelId
),
});
console . info ( 'Channel events:' );
for await ( const response of iterable ) {
console . log ( response . name );
}
}
listChannelEvents ();
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
use Google\Cloud\Video\LiveStream\V1\ListEventsRequest;
/**
* Lists the channel events for a given channel.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the channel
* @param string $channelId The ID of the channel
*/
function list_channel_events(
string $callingProjectId,
string $location,
string $channelId
): void {
// Instantiate a client.
$livestreamClient = new LivestreamServiceClient();
$parent = $livestreamClient->channelName($callingProjectId, $location, $channelId);
$request = (new ListEventsRequest())
->setParent($parent);
$response = $livestreamClient->listEvents($request);
// Print the channel list.
$events = $response->iterateAllElements();
print('Channel events:' . PHP_EOL);
foreach ($events as $event) {
printf('%s' . PHP_EOL, $event->getName());
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
def list_channel_events (
project_id : str , location : str , channel_id : str
) - > pagers . ListEventsPager :
"""Lists all events for a channel.
Args:
project_id: The GCP project ID.
location: The location of the channel.
channel_id: The user-defined channel ID."""
client = LivestreamServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } /channels/ { channel_id } "
page_result = client . list_events ( parent = parent )
print ( "Events:" )
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
# List the channel events
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param location [String] The location (e.g. "us-central1")
# @param channel_id [String] Your channel name (e.g. "my-channel")
#
def list_channel_events project_id :, location :, channel_id :
# Create a Live Stream client.
client = Google :: Cloud :: Video :: LiveStream . livestream_service
# Build the resource name of the parent.
parent = client . channel_path project : project_id , location : location , channel : channel_id
# Get the list of channel events.
response = client . list_events parent : parent
puts "Channel events:"
# Print out all channel events.
response . each do | event |
puts event . name
end
end
Delete a channel event
To delete a channel event, use the
projects.locations.channels.events.delete
method.
The Live Stream API automatically deletes a channel event
seven days after the event is executed. This deletion includes events that have failed.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location where your channel is
located; use one of the supported regions
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
CHANNEL_ID : a user-defined identifier for the channel
EVENT_ID : a user-defined identifier for the event
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ EVENT_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID /events/ EVENT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{}
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
public class DeleteChannelEventSample
{
public void DeleteChannelEvent (
string projectId , string locationId , string channelId , string eventId )
{
// Create the client.
LivestreamServiceClient client = LivestreamServiceClient . Create ();
DeleteEventRequest request = new DeleteEventRequest
{
EventName = EventName . FromProjectLocationChannelEvent ( projectId , locationId , channelId , eventId ),
};
// Make the request.
client . DeleteEvent ( request );
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
// deleteChannelEvent deletes a previously-created channel event.
func deleteChannelEvent ( w io . Writer , projectID , location , channelID , eventID string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// channelID := "my-channel"
// eventID := "my-channel-event"
ctx := context . Background ()
client , err := livestream . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & livestreampb . DeleteEventRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/channels/%s/events/%s" , projectID , location , channelID , eventID ),
}
err = client . DeleteEvent ( ctx , req )
if err != nil {
return fmt . Errorf ( "DeleteEvent: %w" , err )
}
fmt . Fprintf ( w , "Deleted channel event" )
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
import com.google.cloud.video.livestream.v1. DeleteEventRequest ;
import com.google.cloud.video.livestream.v1. EventName ;
import com.google.cloud.video.livestream.v1. LivestreamServiceClient ;
import java.io.IOException ;
public class DeleteChannelEvent {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String channelId = "my-channel-id" ;
String eventId = "my-channel-event-id" ;
deleteChannelEvent ( projectId , location , channelId , eventId );
}
public static void deleteChannelEvent (
String projectId , String location , String channelId , String eventId ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. In this example, try-with-resources is used
// which automatically calls close() on the client to clean up resources.
try ( LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ()) {
var deleteEventRequest =
DeleteEventRequest . newBuilder ()
. setName ( EventName . of ( projectId , location , channelId , eventId ). toString ())
. build ();
livestreamServiceClient . deleteEvent ( deleteEventRequest );
System . out . println ( "Deleted channel event" );
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
// channelId = 'my-channel';
// eventId = 'my-channel-event';
// Imports the Livestream library
const { LivestreamServiceClient } = require ( ' @google-cloud/livestream ' ). v1 ;
// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient ();
async function deleteChannelEvent () {
// Construct request
const request = {
name : livestreamServiceClient . eventPath (
projectId ,
location ,
channelId ,
eventId
),
};
// Run request
await livestreamServiceClient . deleteEvent ( request );
console . log ( 'Deleted channel event' );
}
deleteChannelEvent ();
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
use Google\Cloud\Video\LiveStream\V1\DeleteEventRequest;
/**
* Deletes a channel event.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the channel
* @param string $channelId The ID of the channel
* @param string $eventId The ID of the channel event to be deleted
*/
function delete_channel_event(
string $callingProjectId,
string $location,
string $channelId,
string $eventId
): void {
// Instantiate a client.
$livestreamClient = new LivestreamServiceClient();
$formattedName = $livestreamClient->eventName($callingProjectId, $location, $channelId, $eventId);
// Run the channel event deletion request.
$request = (new DeleteEventRequest())
->setName($formattedName);
$livestreamClient->deleteEvent($request);
printf('Deleted channel event %s' . PHP_EOL, $eventId);
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
def delete_channel_event (
project_id : str , location : str , channel_id : str , event_id : str
) - > None :
"""Deletes a channel event.
Args:
project_id: The GCP project ID.
location: The location of the channel.
channel_id: The user-defined channel ID.
event_id: The user-defined event ID."""
client = LivestreamServiceClient ()
name = f "projects/ { project_id } /locations/ { location } /channels/ { channel_id } /events/ { event_id } "
response = client . delete_event ( name = name )
print ( "Deleted channel event" )
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
# Delete a channel event
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param location [String] The location (e.g. "us-central1")
# @param channel_id [String] Your channel name (e.g. "my-channel")
# @param event_id [String] Your event name (e.g. "my-event")
#
def delete_channel_event project_id :, location :, channel_id :, event_id :
# Create a Live Stream client.
client = Google :: Cloud :: Video :: LiveStream . livestream_service
# Build the resource name of the channel event.
name = client . event_path project : project_id , location : location , channel : channel_id , event : event_id
# Delete the channel event.
client . delete_event name : name
# Print a success message.
puts "Deleted channel event"
end
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
