---
title: "Creating and managing job templates \_|\_ Transcoder API \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/transcoder/docs/how-to/job-templates
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/transcoder/docs
source_metadata:
  url: https://docs.cloud.google.com/transcoder/docs/how-to/job-templates
  title: "Creating and managing job templates \_|\_ Transcoder API \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Transcoder API
Guides
Send feedback
Creating and managing job templates
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create and manage Transcoder API job templates.
By default, the Transcoder API applies a preset template called
preset/web-hd to populate a job configuration. You can specify your own custom
job templates when creating transcoding jobs. A job configuration represents
many of the settings you can customize when creating a job.
Set up your Google Cloud project and authentication
If you have not created a
Google Cloud project and credentials, see
Before you begin .
Creating job templates
You can specify a wide variety of settings in a job template. For an
introduction to some of the terminology and concepts of job configurations, see
the Transcoder API overview .
To create a job template, use the
projects.locations.jobTemplates.create
method. The following example uses a simple configuration to create standard
definition and high definition .mp4 output files. For more information on a
job configuration, see the
JobConfig reference.
Note: Don't specify an input or output URI for a job template. Instead, you
populate these values when creating a job.
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project ID listed in
the IAM Settings .
LOCATION : The location where your job template will
be stored. Use one of the supported regions .
Show locations
us-central1
us-west1
us-west2
us-east1
us-east4
southamerica-east1
northamerica-northeast1
asia-east1
asia-northeast1
asia-northeast3
asia-south1
asia-southeast1
australia-southeast1
europe-west1
europe-west2
europe-west4
me-west1
me-central1
me-central2
TEMPLATE_ID : A user-defined identifier for the new job template to
create. This value should be 4-63 characters and valid characters are in the regular expression
[a-zA-Z][a-zA-Z0-9_-]* .
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobTemplates?jobTemplateId= TEMPLATE_ID "
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
"config": {
"elementaryStreams": [
{
"key": "video-stream0",
"videoStream": {
"h264": {
"heightPixels": 360,
"widthPixels": 640,
"bitrateBps": 550000,
"frameRate": 60
}
}
},
{
"key": "video-stream1",
"videoStream": {
"h264": {
"heightPixels": 720,
"widthPixels": 1280,
"bitrateBps": 2500000,
"frameRate": 60
}
}
},
{
"key": "audio-stream0",
"audioStream": {
"codec": "aac",
"bitrateBps": 64000
}
}
],
"muxStreams": [
{
"key": "sd",
"container": "mp4",
"elementaryStreams": [
"video-stream0",
"audio-stream0"
]
},
{
"key": "hd",
"container": "mp4",
"elementaryStreams": [
"video-stream1",
"audio-stream0"
]
}
]
}
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobTemplates?jobTemplateId= TEMPLATE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /jobTemplates/ TEMPLATE_ID ",
"config": {
"inputs": [
{
"key": "input0"
}
],
"editList": [
{
"key": "atom0",
"inputs": [
"input0"
],
"startTimeOffset": "0s"
}
],
"elementaryStreams": [
{
"videoStream": {
"h264": {
"widthPixels": 640,
"heightPixels": 360,
"frameRate": 60,
"bitrateBps": 550000,
"pixelFormat": "yuv420p",
"rateControlMode": "vbr",
"crfLevel": 21,
"gopDuration": "3s",
"vbvSizeBits": 550000,
"vbvFullnessBits": 495000,
"entropyCoder": "cabac",
"profile": "high",
"preset": "veryfast"
}
},
"key": "video-stream0"
},
{
"videoStream": {
"h264": {
"widthPixels": 1280,
"heightPixels": 720,
"frameRate": 60,
"bitrateBps": 2500000,
"pixelFormat": "yuv420p",
"rateControlMode": "vbr",
"crfLevel": 21,
"gopDuration": "3s",
"vbvSizeBits": 2500000,
"vbvFullnessBits": 2250000,
"entropyCoder": "cabac",
"profile": "high",
"preset": "veryfast"
}
},
"key": "video-stream1"
},
{
"audioStream": {
"codec": "aac",
"bitrateBps": 64000,
"channelCount": 2,
"channelLayout": [
"fl",
"fr"
],
"sampleRateHertz": 48000
},
"key": "audio-stream0"
}
],
"muxStreams": [
{
"key": "sd",
"fileName": "sd.mp4",
"container": "mp4",
"elementaryStreams": [
"video-stream0",
"audio-stream0"
]
},
{
"key": "hd",
"fileName": "hd.mp4",
"container": "mp4",
"elementaryStreams": [
"video-stream1",
"audio-stream0"
]
}
],
"output": {}
}
}
gcloud
Create a request.json file that defines the job template
fields. The following is an example job template:
{
"config" : {
"elementaryStreams" : [
{
"key" : "video-stream0" ,
"videoStream" : {
"h264" : {
"heightPixels" : 360 ,
"widthPixels" : 640 ,
"bitrateBps" : 550000 ,
"frameRate" : 60
}
}
} ,
{
"key" : "video-stream1" ,
"videoStream" : {
"h264" : {
"heightPixels" : 720 ,
"widthPixels" : 1280 ,
"bitrateBps" : 2500000 ,
"frameRate" : 60
}
}
} ,
{
"key" : "audio-stream0" ,
"audioStream" : {
"codec" : "aac" ,
"bitrateBps" : 64000
}
}
] ,
"muxStreams" : [
{
"key" : "sd" ,
"container" : "mp4" ,
"elementaryStreams" : [
"video-stream0" ,
"audio-stream0"
]
} ,
{
"key" : "hd" ,
"container" : "mp4" ,
"elementaryStreams" : [
"video-stream1" ,
"audio-stream0"
]
}
]
}
}
Make the following replacements for the
gcloud
command:
TEMPLATE_ID : A user-defined
identifier for the new job template to create. This value should be 4-63
characters and valid characters are in the regular expression
[a-zA-Z][a-zA-Z0-9_-]* .
LOCATION : The location where
your job template will be stored. Use one of the supported regions .
Show locations
us-central1
us-west1
us-west2
us-east1
us-east4
southamerica-east1
northamerica-northeast1
asia-east1
asia-northeast1
asia-northeast3
asia-south1
asia-southeast1
australia-southeast1
europe-west1
europe-west2
europe-west4
me-west1
me-central1
me-central2
Run the following command:
gcloud transcoder templates create TEMPLATE_ID --file = "request.json" --location = LOCATION
You should see a response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /jobTemplates/ TEMPLATE_ID ",
"config": {
"inputs": [
{
"key": "input0"
}
],
"editList": [
{
"key": "atom0",
"inputs": [
"input0"
],
"startTimeOffset": "0s"
}
],
"elementaryStreams": [
{
"videoStream": {
"h264": {
"widthPixels": 640,
"heightPixels": 360,
"frameRate": 60,
"bitrateBps": 550000,
"pixelFormat": "yuv420p",
"rateControlMode": "vbr",
"crfLevel": 21,
"gopDuration": "3s",
"vbvSizeBits": 550000,
"vbvFullnessBits": 495000,
"entropyCoder": "cabac",
"profile": "high",
"preset": "veryfast"
}
},
"key": "video-stream0"
},
{
"videoStream": {
"h264": {
"widthPixels": 1280,
"heightPixels": 720,
"frameRate": 60,
"bitrateBps": 2500000,
"pixelFormat": "yuv420p",
"rateControlMode": "vbr",
"crfLevel": 21,
"gopDuration": "3s",
"vbvSizeBits": 2500000,
"vbvFullnessBits": 2250000,
"entropyCoder": "cabac",
"profile": "high",
"preset": "veryfast"
}
},
"key": "video-stream1"
},
{
"audioStream": {
"codec": "aac",
"bitrateBps": 64000,
"channelCount": 2,
"channelLayout": [
"fl",
"fr"
],
"sampleRateHertz": 48000
},
"key": "audio-stream0"
}
],
"muxStreams": [
{
"key": "sd",
"fileName": "sd.mp4",
"container": "mp4",
"elementaryStreams": [
"video-stream0",
"audio-stream0"
]
},
{
"key": "hd",
"fileName": "hd.mp4",
"container": "mp4",
"elementaryStreams": [
"video-stream1",
"audio-stream0"
]
}
],
"output": {}
}
}
C#
Before trying this sample, follow the C# setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API C# API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Video.Transcoder.V1 ;
public class CreateJobTemplateSample
{
public JobTemplate CreateJobTemplate (
string projectId , string location , string templateId )
{
// Create the client.
TranscoderServiceClient client = TranscoderServiceClient . Create ();
// Build the parent location name.
LocationName parentLocation = new LocationName ( projectId , location );
// Build the job template config.
VideoStream videoStream0 = new VideoStream
{
H264 = new VideoStream . Types . H264CodecSettings
{
BitrateBps = 550000 ,
FrameRate = 60 ,
HeightPixels = 360 ,
WidthPixels = 640
}
};
VideoStream videoStream1 = new VideoStream
{
H264 = new VideoStream . Types . H264CodecSettings
{
BitrateBps = 2500000 ,
FrameRate = 60 ,
HeightPixels = 720 ,
WidthPixels = 1280
}
};
AudioStream audioStream0 = new AudioStream
{
Codec = "aac" ,
BitrateBps = 64000
};
ElementaryStream elementaryStream0 = new ElementaryStream
{
Key = "video_stream0" ,
VideoStream = videoStream0
};
ElementaryStream elementaryStream1 = new ElementaryStream
{
Key = "video_stream1" ,
VideoStream = videoStream1
};
ElementaryStream elementaryStream2 = new ElementaryStream
{
Key = "audio_stream0" ,
AudioStream = audioStream0
};
MuxStream muxStream0 = new MuxStream
{
Key = "sd" ,
Container = "mp4" ,
ElementaryStreams = { "video_stream0" , "audio_stream0" }
};
MuxStream muxStream1 = new MuxStream
{
Key = "hd" ,
Container = "mp4" ,
ElementaryStreams = { "video_stream1" , "audio_stream0" }
};
JobConfig jobConfig = new JobConfig
{
ElementaryStreams = { elementaryStream0 , elementaryStream1 , elementaryStream2 },
MuxStreams = { muxStream0 , muxStream1 }
};
JobTemplate newJobTemplate = new JobTemplate
{
Config = jobConfig
};
// Call the API.
JobTemplate jobTemplate = client . CreateJobTemplate ( parentLocation , newJobTemplate , templateId );
return jobTemplate ;
}
}
Go
Before trying this sample, follow the Go setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Go API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
transcoder "cloud.google.com/go/video/transcoder/apiv1"
"cloud.google.com/go/video/transcoder/apiv1/transcoderpb"
)
// createJobTemplate creates a template for a job. See
// https://cloud.google.com/transcoder/docs/how-to/job-templates#create_job_templates
// for more information.
func createJobTemplate ( w io . Writer , projectID string , location string , templateID string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// templateID := "my-job-template"
ctx := context . Background ()
client , err := transcoder . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & transcoderpb . CreateJobTemplateRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
JobTemplateId : templateID ,
JobTemplate : & transcoderpb . JobTemplate {
Config : & transcoderpb . JobConfig {
ElementaryStreams : [] * transcoderpb . ElementaryStream {
{
Key : "video_stream0" ,
ElementaryStream : & transcoderpb . ElementaryStream_VideoStream {
VideoStream : & transcoderpb . VideoStream {
CodecSettings : & transcoderpb . VideoStream_H264 {
H264 : & transcoderpb . VideoStream_H264CodecSettings {
BitrateBps : 550000 ,
FrameRate : 60 ,
HeightPixels : 360 ,
WidthPixels : 640 ,
},
},
},
},
},
{
Key : "video_stream1" ,
ElementaryStream : & transcoderpb . ElementaryStream_VideoStream {
VideoStream : & transcoderpb . VideoStream {
CodecSettings : & transcoderpb . VideoStream_H264 {
H264 : & transcoderpb . VideoStream_H264CodecSettings {
BitrateBps : 2500000 ,
FrameRate : 60 ,
HeightPixels : 720 ,
WidthPixels : 1280 ,
},
},
},
},
},
{
Key : "audio_stream0" ,
ElementaryStream : & transcoderpb . ElementaryStream_AudioStream {
AudioStream : & transcoderpb . AudioStream {
Codec : "aac" ,
BitrateBps : 64000 ,
},
},
},
},
MuxStreams : [] * transcoderpb . MuxStream {
{
Key : "sd" ,
Container : "mp4" ,
ElementaryStreams : [] string { "video_stream0" , "audio_stream0" },
},
{
Key : "hd" ,
Container : "mp4" ,
ElementaryStreams : [] string { "video_stream1" , "audio_stream0" },
},
},
},
},
}
response , err := client . CreateJobTemplate ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateJobTemplate: %w" , err )
}
fmt . Fprintf ( w , "Job template: %v" , response . GetName ())
return nil
}
Java
Before trying this sample, follow the Java setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Java API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.transcoder.v1. AudioStream ;
import com.google.cloud.video.transcoder.v1. CreateJobTemplateRequest ;
import com.google.cloud.video.transcoder.v1. ElementaryStream ;
import com.google.cloud.video.transcoder.v1. JobConfig ;
import com.google.cloud.video.transcoder.v1. JobTemplate ;
import com.google.cloud.video.transcoder.v1. LocationName ;
import com.google.cloud.video.transcoder.v1. MuxStream ;
import com.google.cloud.video.transcoder.v1. TranscoderServiceClient ;
import com.google.cloud.video.transcoder.v1. VideoStream ;
import java.io.IOException ;
public class CreateJobTemplate {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String templateId = "my-job-template" ;
createJobTemplate ( projectId , location , templateId );
}
// Creates a job template.
public static void createJobTemplate ( String projectId , String location , String templateId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient . create ()) {
VideoStream videoStream0 =
VideoStream . newBuilder ()
. setH264 (
VideoStream . H264CodecSettings . newBuilder ()
. setBitrateBps ( 550000 )
. setFrameRate ( 60 )
. setHeightPixels ( 360 )
. setWidthPixels ( 640 ))
. build ();
VideoStream videoStream1 =
VideoStream . newBuilder ()
. setH264 (
VideoStream . H264CodecSettings . newBuilder ()
. setBitrateBps ( 2500000 )
. setFrameRate ( 60 )
. setHeightPixels ( 720 )
. setWidthPixels ( 1280 ))
. build ();
AudioStream audioStream0 =
AudioStream . newBuilder (). setCodec ( "aac" ). setBitrateBps ( 64000 ). build ();
JobConfig config =
JobConfig . newBuilder ()
. addElementaryStreams (
ElementaryStream . newBuilder ()
. setKey ( "video_stream0" )
. setVideoStream ( videoStream0 ))
. addElementaryStreams (
ElementaryStream . newBuilder ()
. setKey ( "video_stream1" )
. setVideoStream ( videoStream1 ))
. addElementaryStreams (
ElementaryStream . newBuilder ()
. setKey ( "audio_stream0" )
. setAudioStream ( audioStream0 ))
. addMuxStreams (
MuxStream . newBuilder ()
. setKey ( "sd" )
. setContainer ( "mp4" )
. addElementaryStreams ( "video_stream0" )
. addElementaryStreams ( "audio_stream0" )
. build ())
. addMuxStreams (
MuxStream . newBuilder ()
. setKey ( "hd" )
. setContainer ( "mp4" )
. addElementaryStreams ( "video_stream1" )
. addElementaryStreams ( "audio_stream0" )
. build ())
. build ();
CreateJobTemplateRequest createJobTemplateRequest =
CreateJobTemplateRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , location ). toString ())
. setJobTemplateId ( templateId )
. setJobTemplate ( JobTemplate . newBuilder (). setConfig ( config ). build ())
. build ();
// Send the job template creation request and process the response.
JobTemplate jobTemplate = transcoderServiceClient . createJobTemplate ( createJobTemplateRequest );
System . out . println ( "Job template: " + jobTemplate . getName ());
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Node.js API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// templateId = 'my-job-template';
// Imports the Transcoder library
const { TranscoderServiceClient } =
require ( ' @google-cloud/video-transcoder ' ). v1 ;
// Instantiates a client
const transcoderServiceClient = new TranscoderServiceClient ();
async function createJobTemplate () {
// Construct request
const request = {
parent : transcoderServiceClient . locationPath ( projectId , location ),
jobTemplateId : templateId ,
jobTemplate : {
config : {
elementaryStreams : [
{
key : 'video-stream0' ,
videoStream : {
h264 : {
heightPixels : 360 ,
widthPixels : 640 ,
bitrateBps : 550000 ,
frameRate : 60 ,
},
},
},
{
key : 'video-stream1' ,
videoStream : {
h264 : {
heightPixels : 720 ,
widthPixels : 1280 ,
bitrateBps : 2500000 ,
frameRate : 60 ,
},
},
},
{
key : 'audio-stream0' ,
audioStream : {
codec : 'aac' ,
bitrateBps : 64000 ,
},
},
],
muxStreams : [
{
key : 'sd' ,
container : 'mp4' ,
elementaryStreams : [ 'video-stream0' , 'audio-stream0' ],
},
{
key : 'hd' ,
container : 'mp4' ,
elementaryStreams : [ 'video-stream1' , 'audio-stream0' ],
},
],
},
},
};
// Run request
const [ jobTemplate ] =
await transcoderServiceClient . createJobTemplate ( request );
console . log ( `Job template: ${ jobTemplate . name } ` );
}
createJobTemplate ();
PHP
Before trying this sample, follow the PHP setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API PHP API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\Transcoder\V1\AudioStream;
use Google\Cloud\Video\Transcoder\V1\Client\TranscoderServiceClient;
use Google\Cloud\Video\Transcoder\V1\CreateJobTemplateRequest;
use Google\Cloud\Video\Transcoder\V1\ElementaryStream;
use Google\Cloud\Video\Transcoder\V1\JobConfig;
use Google\Cloud\Video\Transcoder\V1\JobTemplate;
use Google\Cloud\Video\Transcoder\V1\MuxStream;
use Google\Cloud\Video\Transcoder\V1\VideoStream;
/**
* Creates a job template.
*
* @param string $projectId The ID of your Google Cloud Platform project.
* @param string $location The location of the job template.
* @param string $templateId The user-defined template ID.
*/
function create_job_template($projectId, $location, $templateId)
{
// Instantiate a client.
$transcoderServiceClient = new TranscoderServiceClient();
$formattedParent = $transcoderServiceClient->locationName($projectId, $location);
$jobTemplate = (new JobTemplate())->setConfig(
(new JobConfig())->setElementaryStreams([
(new ElementaryStream())
->setKey('video-stream0')
->setVideoStream(
(new VideoStream())->setH264(
(new VideoStream\H264CodecSettings())
->setBitrateBps(550000)
->setFrameRate(60)
->setHeightPixels(360)
->setWidthPixels(640)
)
),
(new ElementaryStream())
->setKey('video-stream1')
->setVideoStream(
(new VideoStream())->setH264(
(new VideoStream\H264CodecSettings())
->setBitrateBps(2500000)
->setFrameRate(60)
->setHeightPixels(720)
->setWidthPixels(1280)
)
),
(new ElementaryStream())
->setKey('audio-stream0')
->setAudioStream(
(new AudioStream())
->setCodec('aac')
->setBitrateBps(64000)
)
])->setMuxStreams([
(new MuxStream())
->setKey('sd')
->setContainer('mp4')
->setElementaryStreams(['video-stream0', 'audio-stream0']),
(new MuxStream())
->setKey('hd')
->setContainer('mp4')
->setElementaryStreams(['video-stream1', 'audio-stream0'])
])
);
$request = (new CreateJobTemplateRequest())
->setParent($formattedParent)
->setJobTemplate($jobTemplate)
->setJobTemplateId($templateId);
$response = $transcoderServiceClient->createJobTemplate($request);
// Print job template name.
printf('Job template: %s' . PHP_EOL, $response->getName());
}
Python
Before trying this sample, follow the Python setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Python API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video import transcoder_v1
from google.cloud.video.transcoder_v1.services.transcoder_service import (
TranscoderServiceClient ,
)
def create_job_template (
project_id : str ,
location : str ,
template_id : str ,
) - > transcoder_v1 . types . resources . JobTemplate :
"""Creates a job template.
Args:
project_id: The GCP project ID.
location: The location to store this template in.
template_id: The user-defined template ID.
Returns:
The job template resource.
"""
client = TranscoderServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } "
job_template = transcoder_v1 . types . JobTemplate ()
job_template . name = (
f "projects/ { project_id } /locations/ { location } /jobTemplates/ { template_id } "
)
job_template . config = transcoder_v1 . types . JobConfig (
elementary_streams = [
transcoder_v1 . types . ElementaryStream (
key = "video-stream0" ,
video_stream = transcoder_v1 . types . VideoStream (
h264 = transcoder_v1 . types . VideoStream . H264CodecSettings (
height_pixels = 360 ,
width_pixels = 640 ,
bitrate_bps = 550000 ,
frame_rate = 60 ,
),
),
),
transcoder_v1 . types . ElementaryStream (
key = "video-stream1" ,
video_stream = transcoder_v1 . types . VideoStream (
h264 = transcoder_v1 . types . VideoStream . H264CodecSettings (
height_pixels = 720 ,
width_pixels = 1280 ,
bitrate_bps = 2500000 ,
frame_rate = 60 ,
),
),
),
transcoder_v1 . types . ElementaryStream (
key = "audio-stream0" ,
audio_stream = transcoder_v1 . types . AudioStream (
codec = "aac" , bitrate_bps = 64000
),
),
],
mux_streams = [
transcoder_v1 . types . MuxStream (
key = "sd" ,
container = "mp4" ,
elementary_streams = [ "video-stream0" , "audio-stream0" ],
),
transcoder_v1 . types . MuxStream (
key = "hd" ,
container = "mp4" ,
elementary_streams = [ "video-stream1" , "audio-stream0" ],
),
],
)
response = client . create_job_template (
parent = parent , job_template = job_template , job_template_id = template_id
)
print ( f "Job template: { response . name } " )
return response
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Ruby API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# project_id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project")
# location = "YOUR-JOB-TEMPLATE-LOCATION" # (e.g. "us-central1")
# template_id = "YOUR-JOB-TEMPLATE" # (e.g. "my-job-template")
# Require the Transcoder client library.
require "google/cloud/video/transcoder"
# Create a Transcoder client.
client = Google :: Cloud :: Video :: Transcoder . transcoder_service
# Build the resource name of the parent.
parent = client . location_path project : project_id , location : location
# Build the job template.
new_job_template = {
config : {
elementary_streams : [
{
key : "video-stream0" ,
video_stream : {
h264 : {
height_pixels : 360 ,
width_pixels : 640 ,
bitrate_bps : 550_000 ,
frame_rate : 60
}
}
},
{
key : "video-stream1" ,
video_stream : {
h264 : {
height_pixels : 720 ,
width_pixels : 1280 ,
bitrate_bps : 2_500_000 ,
frame_rate : 60
}
}
},
{
key : "audio-stream0" ,
audio_stream : {
codec : "aac" ,
bitrate_bps : 64_000
}
}
] ,
mux_streams : [
{
key : "sd" ,
container : "mp4" ,
elementary_streams : [
"video-stream0" ,
"audio-stream0"
]
},
{
key : "hd" ,
container : "mp4" ,
elementary_streams : [
"video-stream1" ,
"audio-stream0"
]
}
]
}
}
job_template = client . create_job_template parent : parent , job_template : new_job_template , job_template_id : template_id
# Print the job template name.
puts "Job template: #{ job_template . name } "
Getting job template details
To get the details for a job template, use the
projects.locations.jobTemplates.get
method.
REST
Before using any of the request data,
make the following replacements:
TEMPLATE_ID : The ID of the job template you created.
PROJECT_ID : Your Google Cloud project ID.
LOCATION : The location of your job template. Use one
of the supported regions .
Show locations
us-central1
us-west1
us-west2
us-east1
us-east4
southamerica-east1
northamerica-northeast1
asia-east1
asia-northeast1
asia-northeast3
asia-south1
asia-southeast1
australia-southeast1
europe-west1
europe-west2
europe-west4
me-west1
me-central1
me-central2
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobTemplates/ TEMPLATE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobTemplates/ TEMPLATE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /jobTemplates/ TEMPLATE_ID ",
"config": {
"inputs": [
{
"key": "input0"
}
],
"editList": [
{
"key": "atom0",
"inputs": [
"input0"
],
"startTimeOffset": "0s"
}
],
"elementaryStreams": [
{
"videoStream": {
"h264": {
"widthPixels": 640,
"heightPixels": 360,
"frameRate": 60,
"bitrateBps": 550000,
"pixelFormat": "yuv420p",
"rateControlMode": "vbr",
"crfLevel": 21,
"gopDuration": "3s",
"vbvSizeBits": 550000,
"vbvFullnessBits": 495000,
"entropyCoder": "cabac",
"profile": "high",
"preset": "veryfast"
}
},
"key": "video-stream0"
},
{
"videoStream": {
"h264": {
"widthPixels": 1280,
"heightPixels": 720,
"frameRate": 60,
"bitrateBps": 2500000,
"pixelFormat": "yuv420p",
"rateControlMode": "vbr",
"crfLevel": 21,
"gopDuration": "3s",
"vbvSizeBits": 2500000,
"vbvFullnessBits": 2250000,
"entropyCoder": "cabac",
"profile": "high",
"preset": "veryfast"
}
},
"key": "video-stream1"
},
{
"audioStream": {
"codec": "aac",
"bitrateBps": 64000,
"channelCount": 2,
"channelLayout": [
"fl",
"fr"
],
"sampleRateHertz": 48000
},
"key": "audio-stream0"
}
],
"muxStreams": [
{
"key": "sd",
"fileName": "sd.mp4",
"container": "mp4",
"elementaryStreams": [
"video-stream0",
"audio-stream0"
]
},
{
"key": "hd",
"fileName": "hd.mp4",
"container": "mp4",
"elementaryStreams": [
"video-stream1",
"audio-stream0"
]
}
],
"output": {}
}
}
gcloud
Make the following replacements for the
gcloud
command:
TEMPLATE_ID : The ID of the
job template you created.
LOCATION : The location of your
job template. Use one of the supported regions .
Show locations
us-central1
us-west1
us-west2
us-east1
us-east4
southamerica-east1
northamerica-northeast1
asia-east1
asia-northeast1
asia-northeast3
asia-south1
asia-southeast1
australia-southeast1
europe-west1
europe-west2
europe-west4
me-west1
me-central1
me-central2
Run the following command:
gcloud transcoder templates describe TEMPLATE_ID --location = LOCATION
You should see a response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /jobTemplates/ TEMPLATE_ID ",
"config": {
"inputs": [
{
"key": "input0"
}
],
"editList": [
{
"key": "atom0",
"inputs": [
"input0"
],
"startTimeOffset": "0s"
}
],
"elementaryStreams": [
{
"videoStream": {
"h264": {
"widthPixels": 640,
"heightPixels": 360,
"frameRate": 60,
"bitrateBps": 550000,
"pixelFormat": "yuv420p",
"rateControlMode": "vbr",
"crfLevel": 21,
"gopDuration": "3s",
"vbvSizeBits": 550000,
"vbvFullnessBits": 495000,
"entropyCoder": "cabac",
"profile": "high",
"preset": "veryfast"
}
},
"key": "video-stream0"
},
{
"videoStream": {
"h264": {
"widthPixels": 1280,
"heightPixels": 720,
"frameRate": 60,
"bitrateBps": 2500000,
"pixelFormat": "yuv420p",
"rateControlMode": "vbr",
"crfLevel": 21,
"gopDuration": "3s",
"vbvSizeBits": 2500000,
"vbvFullnessBits": 2250000,
"entropyCoder": "cabac",
"profile": "high",
"preset": "veryfast"
}
},
"key": "video-stream1"
},
{
"audioStream": {
"codec": "aac",
"bitrateBps": 64000,
"channelCount": 2,
"channelLayout": [
"fl",
"fr"
],
"sampleRateHertz": 48000
},
"key": "audio-stream0"
}
],
"muxStreams": [
{
"key": "sd",
"fileName": "sd.mp4",
"container": "mp4",
"elementaryStreams": [
"video-stream0",
"audio-stream0"
]
},
{
"key": "hd",
"fileName": "hd.mp4",
"container": "mp4",
"elementaryStreams": [
"video-stream1",
"audio-stream0"
]
}
],
"output": {}
}
}
C#
Before trying this sample, follow the C# setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API C# API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Video.Transcoder.V1 ;
public class GetJobTemplateSample
{
public JobTemplate GetJobTemplate ( string projectId , string location , string templateId )
{
// Create the client.
TranscoderServiceClient client = TranscoderServiceClient . Create ();
// Build the job template name.
JobTemplateName name = JobTemplateName . FromProjectLocationJobTemplate ( projectId , location , templateId );
// Call the API.
JobTemplate jobTemplate = client . GetJobTemplate ( name );
// Return the result.
return jobTemplate ;
}
}
Go
Before trying this sample, follow the Go setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Go API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
transcoder "cloud.google.com/go/video/transcoder/apiv1"
"cloud.google.com/go/video/transcoder/apiv1/transcoderpb"
)
// getJobTemplate gets a previously-created job template. See
// https://cloud.google.com/transcoder/docs/how-to/job-templates#get_job_template
// for more information.
func getJobTemplate ( w io . Writer , projectID string , location string , templateID string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// templateID := "my-job-template"
ctx := context . Background ()
client , err := transcoder . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & transcoderpb . GetJobTemplateRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/jobTemplates/%s" , projectID , location , templateID ),
}
response , err := client . GetJobTemplate ( ctx , req )
if err != nil {
return fmt . Errorf ( "GetJobTemplate: %w" , err )
}
fmt . Fprintf ( w , "Job template: %v" , response . GetName ())
return nil
}
Java
Before trying this sample, follow the Java setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Java API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.transcoder.v1. GetJobTemplateRequest ;
import com.google.cloud.video.transcoder.v1. JobTemplate ;
import com.google.cloud.video.transcoder.v1. JobTemplateName ;
import com.google.cloud.video.transcoder.v1. TranscoderServiceClient ;
import java.io.IOException ;
public class GetJobTemplate {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String templateId = "my-job-template" ;
getJobTemplate ( projectId , location , templateId );
}
// Gets a job template.
public static void getJobTemplate ( String projectId , String location , String templateId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient . create ()) {
JobTemplateName jobTemplateName =
JobTemplateName . newBuilder ()
. setProject ( projectId )
. setLocation ( location )
. setJobTemplate ( templateId )
. build ();
GetJobTemplateRequest getJobTemplateRequest =
GetJobTemplateRequest . newBuilder (). setName ( jobTemplateName . toString ()). build ();
// Send the get job template request and process the response.
JobTemplate jobTemplate = transcoderServiceClient . getJobTemplate ( getJobTemplateRequest );
System . out . println ( "Job template: " + jobTemplate . getName ());
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Node.js API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// templateId = 'my-job-template';
// Imports the Transcoder library
const { TranscoderServiceClient } =
require ( ' @google-cloud/video-transcoder ' ). v1 ;
// Instantiates a client
const transcoderServiceClient = new TranscoderServiceClient ();
async function getJobTemplate () {
// Construct request
const request = {
name : transcoderServiceClient . jobTemplatePath (
projectId ,
location ,
templateId
),
};
const [ jobTemplate ] = await transcoderServiceClient . getJobTemplate ( request );
console . log ( `Job template: ${ jobTemplate . name } ` );
}
getJobTemplate ();
PHP
Before trying this sample, follow the PHP setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API PHP API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\Transcoder\V1\Client\TranscoderServiceClient;
use Google\Cloud\Video\Transcoder\V1\GetJobTemplateRequest;
/**
* Gets a Transcoder job template.
*
* @param string $projectId The ID of your Google Cloud Platform project.
* @param string $location The location of the job template.
* @param string $templateId The user-defined template ID.
*/
function get_job_template($projectId, $location, $templateId)
{
// Instantiate a client.
$transcoderServiceClient = new TranscoderServiceClient();
$formattedName = $transcoderServiceClient->jobTemplateName($projectId, $location, $templateId);
$request = (new GetJobTemplateRequest())
->setName($formattedName);
$template = $transcoderServiceClient->getJobTemplate($request);
// Print job template name.
printf('Job template: %s' . PHP_EOL, $template->getName());
}
Python
Before trying this sample, follow the Python setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Python API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video import transcoder_v1
from google.cloud.video.transcoder_v1.services.transcoder_service import (
TranscoderServiceClient ,
)
def get_job_template (
project_id : str ,
location : str ,
template_id : str ,
) - > transcoder_v1 . types . resources . JobTemplate :
"""Gets a job template.
Args:
project_id: The GCP project ID.
location: The location of the template.
template_id: The user-defined template ID.
Returns:
The job template resource.
"""
client = TranscoderServiceClient ()
name = f "projects/ { project_id } /locations/ { location } /jobTemplates/ { template_id } "
response = client . get_job_template ( name = name )
print ( f "Job template: { response . name } " )
return response
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Ruby API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# project_id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project")
# location = "YOUR-JOB-TEMPLATE-LOCATION" # (e.g. "us-central1")
# template_id = "YOUR-JOB-TEMPLATE" # (e.g. "my-job-template")
# Require the Transcoder client library.
require "google/cloud/video/transcoder"
# Create a Transcoder client.
client = Google :: Cloud :: Video :: Transcoder . transcoder_service
# Build the resource name of the job template.
name = client . job_template_path project : project_id , location : location , job_template : template_id
# Get the job template.
job_template = client . get_job_template name : name
# Print the job template name.
puts "Job template: #{ job_template . name } "
Listing job templates
If you want to review all the job templates you created in a location, use the
projects.locations.jobTemplates.list
method.
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project ID.
LOCATION : The location of your job template. Use one
of the supported regions .
Show locations
us-central1
us-west1
us-west2
us-east1
us-east4
southamerica-east1
northamerica-northeast1
asia-east1
asia-northeast1
asia-northeast3
asia-south1
asia-southeast1
australia-southeast1
europe-west1
europe-west2
europe-west4
me-west1
me-central1
me-central2
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobTemplates"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobTemplates" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"jobTemplates": [
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /jobTemplates/ TEMPLATE_ID ",
"config": {
...
}
},
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /jobTemplates/my-other-template",
"config": {
...
}
}
]
}
gcloud
Make the following replacements for the
gcloud
command:
LOCATION : The location of your
job template(s). Use one of the supported regions .
Show locations
us-central1
us-west1
us-west2
us-east1
us-east4
southamerica-east1
northamerica-northeast1
asia-east1
asia-northeast1
asia-northeast3
asia-south1
asia-southeast1
australia-southeast1
europe-west1
europe-west2
europe-west4
me-west1
me-central1
me-central2
Run the following command:
gcloud transcoder templates list --location = LOCATION
You should see a response similar to the following:
NAME
projects/ PROJECT_NUMBER /locations/ LOCATION /jobTemplates/ TEMPLATE_ID
projects/ PROJECT_NUMBER /locations/ LOCATION /jobTemplates/my-other-template
C#
Before trying this sample, follow the C# setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API C# API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Video.Transcoder.V1 ;
using Google.Api.Gax.ResourceNames ;
using Google.Api.Gax ;
using System.Linq ;
using System.Collections.Generic ;
public class ListJobTemplatesSample
{
public IList<JobTemplate> ListJobTemplates ( string projectId , string location )
{
// Create the client.
TranscoderServiceClient client = TranscoderServiceClient . Create ();
// Build the parent location name.
LocationName parentLocation = new LocationName ( projectId , location );
// Call the API.
PagedEnumerable<ListJobTemplatesResponse , JobTemplate > response = client . ListJobTemplates ( parentLocation );
// The returned sequence will lazily perform RPCs as it's being iterated over.
return response . ToList ();
}
}
Go
Before trying this sample, follow the Go setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Go API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
"google.golang.org/api/iterator"
transcoder "cloud.google.com/go/video/transcoder/apiv1"
"cloud.google.com/go/video/transcoder/apiv1/transcoderpb"
)
// listJobTemplates gets all previously-created job templates for a given
// location. See
// https://cloud.google.com/transcoder/docs/how-to/job-templates#list_job_template
// for more information.
func listJobTemplates ( w io . Writer , projectID string , location string ) error {
// projectID := "my-project-id"
// location := "us-central1"
ctx := context . Background ()
client , err := transcoder . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & transcoderpb . ListJobTemplatesRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
}
it := client . ListJobTemplates ( ctx , req )
fmt . Fprintln ( w , "Job templates:" )
for {
response , err := it . Next ()
if err == iterator . Done {
break
}
if err != nil {
return fmt . Errorf ( "ListJobTemplates: %w" , err )
}
fmt . Fprintln ( w , response . GetName ())
}
return nil
}
Java
Before trying this sample, follow the Java setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Java API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.transcoder.v1. JobTemplate ;
import com.google.cloud.video.transcoder.v1. ListJobTemplatesRequest ;
import com.google.cloud.video.transcoder.v1. LocationName ;
import com.google.cloud.video.transcoder.v1. TranscoderServiceClient ;
import java.io.IOException ;
public class ListJobTemplates {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
listJobTemplates ( projectId , location );
}
// Lists the job templates for a given location.
public static void listJobTemplates ( String projectId , String location ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient . create ()) {
ListJobTemplatesRequest listJobTemplatesRequest =
ListJobTemplatesRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , location ). toString ())
. build ();
// Send the list job templates request and process the response.
TranscoderServiceClient . ListJobTemplatesPagedResponse response =
transcoderServiceClient . listJobTemplates ( listJobTemplatesRequest );
System . out . println ( "Job templates:" );
for ( JobTemplate jobTemplate : response . iterateAll ()) {
System . out . println ( jobTemplate . getName ());
}
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Node.js API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// Imports the Transcoder library
const { TranscoderServiceClient } =
require ( ' @google-cloud/video-transcoder ' ). v1 ;
// Instantiates a client
const transcoderServiceClient = new TranscoderServiceClient ();
async function listJobTemplates () {
const iterable = await transcoderServiceClient . listJobTemplatesAsync ({
parent : transcoderServiceClient . locationPath ( projectId , location ),
});
console . info ( 'Job templates:' );
for await ( const response of iterable ) {
console . log ( response . name );
}
}
listJobTemplates ();
PHP
Before trying this sample, follow the PHP setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API PHP API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\Transcoder\V1\Client\TranscoderServiceClient;
use Google\Cloud\Video\Transcoder\V1\ListJobTemplatesRequest;
/**
* Lists all Transcoder job templates in a location.
*
* @param string $projectId The ID of your Google Cloud Platform project.
* @param string $location The location of the job templates.
*/
function list_job_templates($projectId, $location)
{
// Instantiate a client.
$transcoderServiceClient = new TranscoderServiceClient();
$formattedParent = $transcoderServiceClient->locationName($projectId, $location);
$request = (new ListJobTemplatesRequest())
->setParent($formattedParent);
$response = $transcoderServiceClient->listJobTemplates($request);
// Print job template list.
$jobTemplates = $response->iterateAllElements();
print('Job templates:' . PHP_EOL);
foreach ($jobTemplates as $jobTemplate) {
printf('%s' . PHP_EOL, $jobTemplate->getName());
}
}
Python
Before trying this sample, follow the Python setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Python API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video.transcoder_v1.services.transcoder_service import (
pagers ,
TranscoderServiceClient ,
)
def list_job_templates (
project_id : str ,
location : str ,
) - > pagers . ListJobTemplatesPager :
"""Lists all job templates in a location.
Args:
project_id: The GCP project ID.
location: The location of the templates.
Returns:
An iterable object containing job template resources.
"""
client = TranscoderServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } "
response = client . list_job_templates ( parent = parent )
print ( "Job templates:" )
for jobTemplate in response . job_templates :
print ({ jobTemplate . name })
return response
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Ruby API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# project_id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project")
# location = "YOUR-JOB-TEMPLATE-LOCATION" # (e.g. "us-central1")
# Require the Transcoder client library.
require "google/cloud/video/transcoder"
# Create a Transcoder client.
client = Google :: Cloud :: Video :: Transcoder . transcoder_service
# Build the resource name of the parent.
parent = client . location_path project : project_id , location : location
# Get the list of job templates.
response = client . list_job_templates parent : parent
puts "Job templates:"
# Print out all job templates.
response . each do | job_template |
puts job_template . name
end
This response may include a nextPageToken , which you can use to retrieve
additional results:
{
"jobTemplates": [
...
],
"nextPageToken": " NEXT_PAGE_TOKEN "
}
In the following curl example, you can then send another request, and include
the value of NEXT_PAGE_TOKEN to list additional job templates,
similar to the following:
curl -X GET \
-H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobTemplates?pageToken= NEXT_PAGE_TOKEN
See the relevant client library for
more information on using this token.
Deleting job templates
To delete a job template, use the
projects.locations.jobTemplates.delete
method.
REST
Before using any of the request data,
make the following replacements:
TEMPLATE_ID : The ID of the job template you created.
PROJECT_ID : Your Google Cloud project ID.
LOCATION : The location of your job template. Use one
of the supported regions .
Show locations
us-central1
us-west1
us-west2
us-east1
us-east4
southamerica-east1
northamerica-northeast1
asia-east1
asia-northeast1
asia-northeast3
asia-south1
asia-southeast1
australia-southeast1
europe-west1
europe-west2
europe-west4
me-west1
me-central1
me-central2
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobTemplates/ TEMPLATE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobTemplates/ TEMPLATE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{}
gcloud
Make the following replacements for the
gcloud
command:
TEMPLATE_ID : The ID of the
job template you created.
LOCATION : The location of your
job template. Use one of the supported regions .
Show locations
us-central1
us-west1
us-west2
us-east1
us-east4
southamerica-east1
northamerica-northeast1
asia-east1
asia-northeast1
asia-northeast3
asia-south1
asia-southeast1
australia-southeast1
europe-west1
europe-west2
europe-west4
me-west1
me-central1
me-central2
Run the following command:
gcloud transcoder templates delete TEMPLATE_ID --location = LOCATION
You should see a response similar to the following:
Deleted template [projects/ PROJECT_ID /locations/ LOCATION /jobTemplates/ TEMPLATE_ID ].
C#
Before trying this sample, follow the C# setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API C# API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Video.Transcoder.V1 ;
public class DeleteJobTemplateSample
{
public void DeleteJobTemplate ( string projectId , string location , string templateId )
{
// Create the client.
TranscoderServiceClient client = TranscoderServiceClient . Create ();
// Build the job template name.
JobTemplateName name = JobTemplateName . FromProjectLocationJobTemplate ( projectId , location , templateId );
// Call the API.
client . DeleteJobTemplate ( name );
}
}
Go
Before trying this sample, follow the Go setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Go API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
transcoder "cloud.google.com/go/video/transcoder/apiv1"
"cloud.google.com/go/video/transcoder/apiv1/transcoderpb"
)
// deleteJobTemplate deletes a previously-created template for a job. See
// https://cloud.google.com/transcoder/docs/how-to/job-templates#delete_job_template
// for more information.
func deleteJobTemplate ( w io . Writer , projectID string , location string , templateID string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// templateID := "my-job-template"
ctx := context . Background ()
client , err := transcoder . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & transcoderpb . DeleteJobTemplateRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/jobTemplates/%s" , projectID , location , templateID ),
}
err = client . DeleteJobTemplate ( ctx , req )
if err != nil {
return fmt . Errorf ( "DeleteJobTemplate: %w" , err )
}
fmt . Fprintf ( w , "Deleted job template" )
return nil
}
Java
Before trying this sample, follow the Java setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Java API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.transcoder.v1. DeleteJobTemplateRequest ;
import com.google.cloud.video.transcoder.v1. JobTemplateName ;
import com.google.cloud.video.transcoder.v1. TranscoderServiceClient ;
import java.io.IOException ;
public class DeleteJobTemplate {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String templateId = "my-job-template" ;
deleteJobTemplate ( projectId , location , templateId );
}
// Deletes a job template.
public static void deleteJobTemplate ( String projectId , String location , String templateId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient . create ()) {
JobTemplateName jobTemplateName =
JobTemplateName . newBuilder ()
. setProject ( projectId )
. setLocation ( location )
. setJobTemplate ( templateId )
. build ();
DeleteJobTemplateRequest deleteJobTemplateRequest =
DeleteJobTemplateRequest . newBuilder (). setName ( jobTemplateName . toString ()). build ();
// Send the delete job template request and process the response.
transcoderServiceClient . deleteJobTemplate ( deleteJobTemplateRequest );
System . out . println ( "Deleted job template" );
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Node.js API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// templateId = 'my-job-template';
// Imports the Transcoder library
const { TranscoderServiceClient } =
require ( ' @google-cloud/video-transcoder ' ). v1 ;
// Instantiates a client
const transcoderServiceClient = new TranscoderServiceClient ();
async function deleteJobTemplate () {
// Construct request
const request = {
name : transcoderServiceClient . jobTemplatePath (
projectId ,
location ,
templateId
),
};
await transcoderServiceClient . deleteJobTemplate ( request );
console . log ( 'Deleted job template' );
}
deleteJobTemplate ();
PHP
Before trying this sample, follow the PHP setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API PHP API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\Transcoder\V1\Client\TranscoderServiceClient;
use Google\Cloud\Video\Transcoder\V1\DeleteJobTemplateRequest;
/**
* Deletes a Transcoder job template.
*
* @param string $projectId The ID of your Google Cloud Platform project.
* @param string $location The location of the job template.
* @param string $templateId The user-defined template ID.
*/
function delete_job_template($projectId, $location, $templateId)
{
// Instantiate a client.
$transcoderServiceClient = new TranscoderServiceClient();
$formattedName = $transcoderServiceClient->jobTemplateName($projectId, $location, $templateId);
$request = (new DeleteJobTemplateRequest())
->setName($formattedName);
$transcoderServiceClient->deleteJobTemplate($request);
print('Deleted job template' . PHP_EOL);
}
Python
Before trying this sample, follow the Python setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Python API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video.transcoder_v1.services.transcoder_service import (
TranscoderServiceClient ,
)
def delete_job_template (
project_id : str ,
location : str ,
template_id : str ,
) - > None :
"""Deletes a job template.
Args:
project_id: The GCP project ID.
location: The location of the template.
template_id: The user-defined template ID."""
client = TranscoderServiceClient ()
name = f "projects/ { project_id } /locations/ { location } /jobTemplates/ { template_id } "
response = client . delete_job_template ( name = name )
print ( "Deleted job template" )
return response
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Transcoder API quickstart using
client libraries .
For more information, see the
Transcoder API Ruby API
reference documentation .
To authenticate to Transcoder API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# project_id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project")
# location = "YOUR-JOB-TEMPLATE-LOCATION" # (e.g. "us-central1")
# template_id = "YOUR-JOB-TEMPLATE" # (e.g. "my-job-template")
# Require the Transcoder client library.
require "google/cloud/video/transcoder"
# Create a Transcoder client.
client = Google :: Cloud :: Video :: Transcoder . transcoder_service
# Build the resource name of the job template.
name = client . job_template_path project : project_id , location : location , job_template : template_id
# Delete the job template.
client . delete_job_template name : name
# Print a success message.
puts "Deleted job template"
What's next
Learn about Creating and managing jobs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
