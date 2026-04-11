---
title: "Quickstart: Transcode a video with the Transcoder API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/transcoder/docs/transcode-video
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/transcoder/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/transcoder/docs/transcode-video
  title: "Quickstart: Transcode a video with the Transcoder API \_|\_ Google Cloud\
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
Stay organized with collections
Save and categorize content based on your preferences.
Transcode a video with the Transcoder API
This page shows you how to create a basic video transcoding job using the
default settings of the Transcoder API and curl , Windows PowerShell, or the
client libraries.
You can also perform this quickstart directly in the Google Cloud console
using either of the following programming languages:
Node.js
Python
Before you begin
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
Enable the Transcoder API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable transcoder.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/transcoder.admin, roles/storage.admin
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
Enable the Transcoder API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable transcoder.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/transcoder.admin, roles/storage.admin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Create a Cloud Storage bucket
In the Google Cloud console, go to the Cloud Storage
Buckets page.
Go to Buckets
Click add_box Create .
On the Create a bucket page, enter your bucket information. To go to the next
step, click Continue .
For Name your bucket , enter a unique bucket name. Don't include sensitive
information in the bucket name, because the bucket namespace is global and publicly
visible.
In the Choose where to store your data section, do the following:
Select a Location type .
Choose a location where your bucket's data is permanently stored from the Location type drop-down menu.
If you select the dual-region location type, you can
also choose to enable turbo replication by using the
relevant checkbox.
To set up cross-bucket replication , select
Add cross-bucket replication via Storage Transfer Service and
follow these steps:
Set up cross-bucket replication
In the Bucket menu, select a bucket.
In the Replication settings section,
click Configure to configure settings for the
replication job.
The Configure cross-bucket replication pane
appears.
To filter objects to replicate by object name prefix,
enter a prefix that you want to include or exclude objects from, then click add
Add a prefix .
To set a storage class for the replicated objects,
select a storage class from the Storage class menu.
If you skip this step, the replicated objects will use the
destination bucket's storage class by default.
Click Done .
In the Choose how to store your data section, do the following:
In the Set a default class section, select the following:
Standard .
To enable hierarchical namespace , in the
Optimize storage for data-intensive workloads section, select
Enable hierarchical namespace on this bucket .
Note: You cannot enable hierarchical namespace in existing
buckets.
In the Choose how to control access to objects section, select
whether or not your bucket enforces public access prevention ,
and select an access control method for your bucket's objects.
Note: You cannot change the Prevent public access setting if this setting is enforced at an organization policy .
In the Choose how to protect object data section, do the
following:
Select any of the options under Data protection that you
want to set for your bucket.
To enable soft delete , click the
Soft delete policy (For data recovery) checkbox,
and specify the number of days you want to retain objects
after deletion.
To set Object Versioning , click the
Object versioning (For version control) checkbox,
and specify the maximum number of versions per object and the number of days after which
the noncurrent versions expire.
To enable the retention policy on objects and buckets, click the Retention (For compliance) checkbox, and then do the following:
To enable Object Retention Lock , click the
Enable object retention checkbox.
To enable Bucket Lock , click the Set bucket retention policy checkbox, and choose a unit of time and a length of time for your retention period.
To choose how your object data will be encrypted, expand the
Data encryption section ( expand_more ), and select a
Data encryption method .
Click Create .
Click Create Folder and enter a name to create a folder in which to
save the encoded video outputs.
Transcode a video using the Transcoder API
You need a video at least 5 seconds in duration from your local machine for
the following steps ( sample video ). See the
list of supported input and output formats .
Note: The input video must have at least one video track and one
audio track in order to use the
preset/web-hd preset .
Upload a video to your Cloud Storage bucket
In the Google Cloud console, go to the Cloud Storage Browser page.
Go to the Cloud Storage Browser page
Click the name of your bucket to open it.
Click Upload files .
Select a video file to upload from your local machine.
Your video is now saved to the Cloud Storage bucket.
Create a transcoding job
By default, the Transcoder API transcodes video using H.264 encoding and
MP4, HLS, and MPEG-DASH packaging. For each input video, it delivers output
renditions in high definition (1280x720 pixels) and standard definition (640x360
pixels).
To create a job, use the projects.locations.jobs.create
method. The following code samples create a basic transcoding job using a
preset .
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project ID listed in
the IAM Settings .
LOCATION : The location where your job will run. Use
one of the supported regions .
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
STORAGE_BUCKET_NAME : The name of the Cloud Storage
bucket you created.
STORAGE_INPUT_VIDEO : The name of the video in your
Cloud Storage bucket that you are transcoding, such as my-vid.mp4 .
This field should take into account any folders that you created in the
bucket (for example, input/my-vid.mp4 ).
Note: The input video must have at least one video track and one
audio track in order to use the
preset/web-hd preset .
STORAGE_OUTPUT_FOLDER : The Cloud Storage
folder name where you want to save the encoded video outputs.
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
cat > request.json STORAGE_BUCKET_NAME / STORAGE_INPUT_VIDEO ",
"outputUri": "gs:// STORAGE_BUCKET_NAME / STORAGE_OUTPUT_FOLDER /",
"templateId": "preset/web-hd"
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobs?fields=name"
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
"inputUri": "gs:// STORAGE_BUCKET_NAME / STORAGE_INPUT_VIDEO ",
"outputUri": "gs:// STORAGE_BUCKET_NAME / STORAGE_OUTPUT_FOLDER /",
"templateId": "preset/web-hd"
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobs?fields=name" | Select-Object -Expand Content
This particular REST example uses the optional
fields query parameter to only
show the created resource name in the response.
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /jobs/ JOB_ID "
}
gcloud
Make the following replacements for the
gcloud
command:
STORAGE_BUCKET_NAME : The
name of the Cloud Storage bucket you created.
STORAGE_INPUT_VIDEO : The
name of the video in your Cloud Storage bucket that you are
transcoding, such as my-vid.mp4 . This field should take into
account any folders that you created in the bucket (for example,
input/my-vid.mp4 ).
Note: The input video must have at least one video track and one
audio track in order to use the
preset/web-hd preset .
LOCATION : The location where
your job will run. Use one of the supported regions .
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
STORAGE_OUTPUT_FOLDER : The Cloud Storage
folder name where you want to save the encoded video outputs.
Note: You don't need to create the output folder object before
creating the job. When processing the job, the Transcoder API automatically prepends the
folder name you specify as part of the names of the objects saved to Cloud Storage.
Run the following command:
gcloud transcoder jobs create \
--input-uri = "gs:// STORAGE_BUCKET_NAME / STORAGE_INPUT_VIDEO " \
--location = LOCATION \
--output-uri = "gs:// STORAGE_BUCKET_NAME / STORAGE_OUTPUT_FOLDER /"
You should see a response similar to the following:
{
"config": {
...
},
"createTime": CREATE_TIME ,
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /jobs/ JOB_ID ",
"state": "PENDING",
"ttlAfterCompletionDays": 30
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
public class CreateJobFromPresetSample
{
public Job CreateJobFromPreset (
string projectId , string location , string inputUri , string outputUri , string preset )
{
// Create the client.
TranscoderServiceClient client = TranscoderServiceClient . Create ();
// Build the parent location name.
LocationName parent = new LocationName ( projectId , location );
// Build the job.
Job newJob = new Job
{
InputUri = inputUri ,
OutputUri = outputUri ,
TemplateId = preset
};
// Call the API.
Job job = client . CreateJob ( parent , newJob );
// Return the result.
return job ;
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
// createJobFromPreset creates a job based on a given preset template. See
// https://cloud.google.com/transcoder/docs/how-to/jobs#create_jobs_presets
// for more information.
func createJobFromPreset ( w io . Writer , projectID string , location string , inputURI string , outputURI string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// inputURI := "gs://my-bucket/my-video-file"
// outputURI := "gs://my-bucket/my-output-folder/"
preset := "preset/web-hd"
ctx := context . Background ()
client , err := transcoder . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & transcoderpb . CreateJobRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
Job : & transcoderpb . Job {
InputUri : inputURI ,
OutputUri : outputURI ,
JobConfig : & transcoderpb . Job_TemplateId {
TemplateId : preset ,
},
},
}
// Creates the job, Jobs take a variable amount of time to run.
// You can query for the job state.
response , err := client . CreateJob ( ctx , req )
if err != nil {
return fmt . Errorf ( "createJobFromPreset: %w" , err )
}
fmt . Fprintf ( w , "Job: %v" , response . GetName ())
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
import com.google.cloud.video.transcoder.v1. CreateJobRequest ;
import com.google.cloud.video.transcoder.v1. Job ;
import com.google.cloud.video.transcoder.v1. LocationName ;
import com.google.cloud.video.transcoder.v1. TranscoderServiceClient ;
import java.io.IOException ;
public class CreateJobFromPreset {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String inputUri = "gs://my-bucket/my-video-file" ;
String outputUri = "gs://my-bucket/my-output-folder/" ;
// See https://cloud.google.com/transcoder/docs/concepts/overview#job_template
// for information on this preset.
String preset = "preset/web-hd" ;
createJobFromPreset ( projectId , location , inputUri , outputUri , preset );
}
// Creates a job from a preset.
public static void createJobFromPreset (
String projectId , String location , String inputUri , String outputUri , String preset )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient . create ()) {
CreateJobRequest createJobRequest =
CreateJobRequest . newBuilder ()
. setJob (
Job . newBuilder ()
. setInputUri ( inputUri )
. setOutputUri ( outputUri )
. setTemplateId ( preset )
. build ())
. setParent ( LocationName . of ( projectId , location ). toString ())
. build ();
// Send the job creation request and process the response.
Job job = transcoderServiceClient . createJob ( createJobRequest );
System . out . println ( "Job: " + job . getName ());
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
// inputUri = 'gs://my-bucket/my-video-file';
// outputUri = 'gs://my-bucket/my-output-folder/';
// preset = 'preset/web-hd';
// Imports the Transcoder library
const { TranscoderServiceClient } =
require ( ' @google-cloud/video-transcoder ' ). v1 ;
// Instantiates a client
const transcoderServiceClient = new TranscoderServiceClient ();
async function createJobFromPreset () {
// Construct request
const request = {
parent : transcoderServiceClient . locationPath ( projectId , location ),
job : {
inputUri : inputUri ,
outputUri : outputUri ,
templateId : preset ,
},
};
// Run request
const [ response ] = await transcoderServiceClient . createJob ( request );
console . log ( `Job: ${ response . name } ` );
}
createJobFromPreset ();
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
use Google\Cloud\Video\Transcoder\V1\CreateJobRequest;
use Google\Cloud\Video\Transcoder\V1\Job;
/**
* Creates a job based on a job preset.
*
* @param string $projectId The ID of your Google Cloud Platform project.
* @param string $location The location of the job.
* @param string $inputUri Uri of the video in the Cloud Storage bucket.
* @param string $outputUri Uri of the video output folder in the Cloud Storage bucket.
* @param string $preset The preset template (for example, "preset/web-hd").
*/
function create_job_from_preset($projectId, $location, $inputUri, $outputUri, $preset)
{
// Instantiate a client.
$transcoderServiceClient = new TranscoderServiceClient();
$formattedParent = $transcoderServiceClient->locationName($projectId, $location);
$job = new Job();
$job->setInputUri($inputUri);
$job->setOutputUri($outputUri);
$job->setTemplateId($preset);
$request = (new CreateJobRequest())
->setParent($formattedParent)
->setJob($job);
$response = $transcoderServiceClient->createJob($request);
// Print job name.
printf('Job: %s' . PHP_EOL, $response->getName());
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
def create_job_from_preset (
project_id : str ,
location : str ,
input_uri : str ,
output_uri : str ,
preset : str ,
) - > transcoder_v1 . types . resources . Job :
"""Creates a job based on a job preset.
Args:
project_id: The GCP project ID.
location: The location to start the job in.
input_uri: Uri of the video in the Cloud Storage bucket.
output_uri: Uri of the video output folder in the Cloud Storage bucket.
preset: The preset template (for example, 'preset/web-hd').
Returns:
The job resource.
"""
client = TranscoderServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } "
job = transcoder_v1 . types . Job ()
job . input_uri = input_uri
job . output_uri = output_uri
job . template_id = preset
response = client . create_job ( parent = parent , job = job )
print ( f "Job: { response . name } " )
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
# location = "YOUR-JOB-LOCATION" # (e.g. "us-central1")
# input_uri = "YOUR-GCS-INPUT-VIDEO" # (e.g. "gs://my-bucket/my-video-file")
# output_uri = "YOUR-GCS-OUTPUT-FOLDER/" # (e.g. "gs://my-bucket/my-output-folder/")
# preset = "YOUR-JOB-PRESET" # (e.g. "preset/web-hd")
# Require the Transcoder client library.
require "google/cloud/video/transcoder"
# Create a Transcoder client.
client = Google :: Cloud :: Video :: Transcoder . transcoder_service
# Build the resource name of the parent.
parent = client . location_path project : project_id , location : location
# Set the job fields.
new_job = {
input_uri : input_uri ,
output_uri : output_uri ,
template_id : preset
}
job = client . create_job parent : parent , job : new_job
# Print the job name.
puts "Job: #{ job . name } "
Copy the returned JOB_ID . You need it to get the status of the job.
Check the status of your transcoding job
To check the status of a job, use the projects.locations.jobs.get
method. The following code samples
get the job details and then
show the job state.
REST
Before using any of the request data,
make the following replacements:
JOB_ID : The ID of the job you created.
PROJECT_ID : Your Google Cloud project ID.
LOCATION : The location of your job. Use one of the
supported regions .
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobs/ JOB_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobs/ JOB_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /jobs/ JOB_ID ",
"config": {
"inputs": [
{
"key": "input0",
"uri": "gs:// STORAGE_BUCKET_NAME / STORAGE_INPUT_VIDEO "
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
"frameRate": 30,
"bitrateBps": 550000,
"pixelFormat": "yuv420p",
"rateControlMode": "vbr",
"crfLevel": 21,
"gopDuration": "3s",
"vbvSizeBits": 550000,
"vbvFullnessBits": 495000,
"entropyCoder": "cabac",
"bFrameCount": 3,
"aqStrength": 1,
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
"frameRate": 30,
"bitrateBps": 2500000,
"pixelFormat": "yuv420p",
"rateControlMode": "vbr",
"crfLevel": 21,
"gopDuration": "3s",
"vbvSizeBits": 2500000,
"vbvFullnessBits": 2250000,
"entropyCoder": "cabac",
"bFrameCount": 3,
"aqStrength": 1,
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
},
{
"key": "media-sd",
"fileName": "media-sd.ts",
"container": "ts",
"elementaryStreams": [
"video-stream0",
"audio-stream0"
]
},
{
"key": "media-hd",
"fileName": "media-hd.ts",
"container": "ts",
"elementaryStreams": [
"video-stream1",
"audio-stream0"
]
},
{
"key": "video-only-sd",
"fileName": "video-only-sd.m4s",
"container": "fmp4",
"elementaryStreams": [
"video-stream0"
]
},
{
"key": "video-only-hd",
"fileName": "video-only-hd.m4s",
"container": "fmp4",
"elementaryStreams": [
"video-stream1"
]
},
{
"key": "audio-only",
"fileName": "audio-only.m4s",
"container": "fmp4",
"elementaryStreams": [
"audio-stream0"
]
}
],
"manifests": [
{
"fileName": "manifest.m3u8",
"type": "HLS",
"muxStreams": [
"media-sd",
"media-hd"
]
},
{
"fileName": "manifest.mpd",
"type": "DASH",
"muxStreams": [
"video-only-sd",
"video-only-hd",
"audio-only"
]
}
],
"output": {
"uri": "gs:// STORAGE_BUCKET_NAME / STORAGE_OUTPUT_FOLDER /"
}
},
"state": "PENDING",
"createTime": CREATE_TIME ,
"ttlAfterCompletionDays": 30
}
gcloud
Make the following replacements for the
gcloud
command:
JOB_ID : The ID of the job you
created.
LOCATION : The location of your
job. Use one of the supported regions .
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
gcloud transcoder jobs describe JOB_ID --location = LOCATION
You should see a response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /jobs/ JOB_ID ",
"config": {
"inputs": [
{
"key": "input0",
"uri": "gs:// STORAGE_BUCKET_NAME / STORAGE_INPUT_VIDEO "
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
"frameRate": 30,
"bitrateBps": 550000,
"pixelFormat": "yuv420p",
"rateControlMode": "vbr",
"crfLevel": 21,
"gopDuration": "3s",
"vbvSizeBits": 550000,
"vbvFullnessBits": 495000,
"entropyCoder": "cabac",
"bFrameCount": 3,
"aqStrength": 1,
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
"frameRate": 30,
"bitrateBps": 2500000,
"pixelFormat": "yuv420p",
"rateControlMode": "vbr",
"crfLevel": 21,
"gopDuration": "3s",
"vbvSizeBits": 2500000,
"vbvFullnessBits": 2250000,
"entropyCoder": "cabac",
"bFrameCount": 3,
"aqStrength": 1,
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
},
{
"key": "media-sd",
"fileName": "media-sd.ts",
"container": "ts",
"elementaryStreams": [
"video-stream0",
"audio-stream0"
]
},
{
"key": "media-hd",
"fileName": "media-hd.ts",
"container": "ts",
"elementaryStreams": [
"video-stream1",
"audio-stream0"
]
},
{
"key": "video-only-sd",
"fileName": "video-only-sd.m4s",
"container": "fmp4",
"elementaryStreams": [
"video-stream0"
]
},
{
"key": "video-only-hd",
"fileName": "video-only-hd.m4s",
"container": "fmp4",
"elementaryStreams": [
"video-stream1"
]
},
{
"key": "audio-only",
"fileName": "audio-only.m4s",
"container": "fmp4",
"elementaryStreams": [
"audio-stream0"
]
}
],
"manifests": [
{
"fileName": "manifest.m3u8",
"type": "HLS",
"muxStreams": [
"media-sd",
"media-hd"
]
},
{
"fileName": "manifest.mpd",
"type": "DASH",
"muxStreams": [
"video-only-sd",
"video-only-hd",
"audio-only"
]
}
],
"output": {
"uri": "gs:// STORAGE_BUCKET_NAME / STORAGE_OUTPUT_FOLDER /"
}
},
"state": "PENDING",
"createTime": CREATE_TIME ,
"ttlAfterCompletionDays": 30
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
public class GetJobStateSample
{
public Job . Types . ProcessingState GetJobState ( string projectId , string location , string jobId )
{
// Create the client.
TranscoderServiceClient client = TranscoderServiceClient . Create ();
// Build the job name.
JobName jobName = JobName . FromProjectLocationJob ( projectId , location , jobId );
// Call the API.
Job job = client . GetJob ( jobName );
// Return the result.
return job . State ;
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
// getJobState gets the state for a previously-created job. See
// https://cloud.google.com/transcoder/docs/how-to/jobs#check_job_status for
// more information.
func getJobState ( w io . Writer , projectID string , location string , jobID string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// jobID := "my-job-id"
ctx := context . Background ()
client , err := transcoder . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & transcoderpb . GetJobRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/jobs/%s" , projectID , location , jobID ),
}
response , err := client . GetJob ( ctx , req )
if err != nil {
return fmt . Errorf ( "GetJob: %w" , err )
}
fmt . Fprintf ( w , "Job state: %v\n----\nJob failure reason:%v\n" , response . State , response . Error )
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
import com.google.cloud.video.transcoder.v1. GetJobRequest ;
import com.google.cloud.video.transcoder.v1. Job ;
import com.google.cloud.video.transcoder.v1. JobName ;
import com.google.cloud.video.transcoder.v1. TranscoderServiceClient ;
import java.io.IOException ;
public class GetJobState {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String jobId = "my-job-id" ;
getJobState ( projectId , location , jobId );
}
// Gets the state of a job.
public static void getJobState ( String projectId , String location , String jobId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient . create ()) {
JobName jobName =
JobName . newBuilder (). setProject ( projectId ). setLocation ( location ). setJob ( jobId ). build ();
GetJobRequest getJobRequest = GetJobRequest . newBuilder (). setName ( jobName . toString ()). build ();
// Send the get job request and process the response.
Job job = transcoderServiceClient . getJob ( getJobRequest );
System . out . println ( "Job state: " + job . getState ());
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
// jobId = 'my-job-id';
// Imports the Transcoder library
const { TranscoderServiceClient } =
require ( ' @google-cloud/video-transcoder ' ). v1 ;
// Instantiates a client
const transcoderServiceClient = new TranscoderServiceClient ();
async function getJob () {
// Construct request
const request = {
name : transcoderServiceClient . jobPath ( projectId , location , jobId ),
};
const [ response ] = await transcoderServiceClient . getJob ( request );
console . log ( `Job state: ${ response . state } ` );
}
getJob ();
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
use Google\Cloud\Video\Transcoder\V1\GetJobRequest;
use Google\Cloud\Video\Transcoder\V1\Job;
/**
* Gets a Transcoder job's state.
*
* @param string $projectId The ID of your Google Cloud Platform project.
* @param string $location The location of the job.
* @param string $jobId The job ID.
*/
function get_job_state($projectId, $location, $jobId)
{
// Instantiate a client.
$transcoderServiceClient = new TranscoderServiceClient();
$formattedName = $transcoderServiceClient->jobName($projectId, $location, $jobId);
$request = (new GetJobRequest())
->setName($formattedName);
$job = $transcoderServiceClient->getJob($request);
// Print job state.
printf('Job state: %s' . PHP_EOL, Job\ProcessingState::name($job->getState()));
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
def get_job_state (
project_id : str ,
location : str ,
job_id : str ,
) - > transcoder_v1 . types . resources . Job :
"""Gets a job's state.
Args:
project_id: The GCP project ID.
location: The location this job is in.
job_id: The job ID.
Returns:
The job resource.
"""
client = TranscoderServiceClient ()
name = f "projects/ { project_id } /locations/ { location } /jobs/ { job_id } "
response = client . get_job ( name = name )
print ( f "Job state: { str ( response . state . name ) } " )
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
# location = "YOUR-JOB-LOCATION" # (e.g. "us-central1")
# job_id = "YOUR-JOB-ID" # (e.g. "c82c295b-3f5a-47df-8562-938a89d40fd0")
# Require the Transcoder client library.
require "google/cloud/video/transcoder"
# Create a Transcoder client.
client = Google :: Cloud :: Video :: Transcoder . transcoder_service
# Build the resource name of the job.
name = client . job_path project : project_id , location : location , job : job_id
# Get the job.
job = client . get_job name : name
# Print the job state.
puts "Job state: #{ job . state } "
If the state is SUCCEEDED , the job is complete and your video outputs are
now available in your Cloud Storage bucket's list of encoded files.
Note: It can take up to 7 minutes for the API service
account to deploy. If you try to create a job and receive a permissions error , try again after
waiting 7 minutes.
Play your video
Note: If you want to create a CDN for the media outputs, see the
Media CDN quickstart .
To play the generated media file in Shaka Player ,
complete the following steps:
Make the Cloud Storage bucket you created publicly readable .
To enable cross-origin resource
sharing (CORS) on a Cloud Storage bucket , do the following:
Create a JSON file that contains the following:
[
{
"origin": ["https://shaka-player-demo.appspot.com/"],
"responseHeader": ["Content-Type", "Range"],
"method": ["GET", "HEAD"],
"maxAgeSeconds": 3600
}
]
Run the following command after replacing JSON_FILE_NAME with
the name of the JSON file you created in the previous step:
gcloud storage buckets update gs:// STORAGE_BUCKET_NAME --cors-file= JSON_FILE_NAME .json
Pick one of the MP4 or manifest files generated by the transcoding job in
the Cloud Storage bucket.
Click Copy URL in the file's Public access column.
Navigate to Shaka Player , an
online live stream player.
Click Custom Content in the top navigation bar.
Click the + button.
Paste the public URL of the file into the Manifest URL box.
Type a name in the Name box.
Click Save .
Click Play .
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the bucket
In the Google Cloud console, go to the Cloud Storage Browser page.
Go to the Cloud Storage Browser page
Select the checkbox next to the bucket that you created.
Click Delete .
In the pop-up window that appears, click Delete to permanently delete
the bucket and its contents.
Delete the job
Note: Jobs will be automatically deleted within 30 days of
completion (by default). To change this time, set the
ttlAfterCompletionDays field in the Job resource.
REST
Before using any of the request data,
make the following replacements:
JOB_ID : The ID of the job you created.
PROJECT_ID : Your Google Cloud project ID.
LOCATION : The location of your job. Use one of the
supported regions .
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobs/ JOB_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://transcoder.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /jobs/ JOB_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{}
gcloud
Make the following replacements for the
gcloud
command:
JOB_ID : The ID of the job you
created.
LOCATION : The location of your
job. Use one of the supported regions .
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
gcloud transcoder jobs delete JOB_ID --location = LOCATION
You should see a response similar to the following:
Deleted job [projects/ PROJECT_ID /locations/ LOCATION /jobs/ JOB_ID ].
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
public class DeleteJobSample
{
public void DeleteJob ( string projectId , string location , string jobId )
{
// Create the client.
TranscoderServiceClient client = TranscoderServiceClient . Create ();
// Build the job name.
JobName jobName = JobName . FromProjectLocationJob ( projectId , location , jobId );
// Call the API.
client . DeleteJob ( jobName );
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
// deleteJob deletes a previously-created job. See
// https://cloud.google.com/transcoder/docs/how-to/jobs#delete_jobs for more
// information.
func deleteJob ( w io . Writer , projectID string , location string , jobID string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// jobID := "my-job-id"
ctx := context . Background ()
client , err := transcoder . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & transcoderpb . DeleteJobRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/jobs/%s" , projectID , location , jobID ),
}
err = client . DeleteJob ( ctx , req )
if err != nil {
return fmt . Errorf ( "DeleteJob: %w" , err )
}
fmt . Fprintf ( w , "Deleted job" )
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
import com.google.cloud.video.transcoder.v1. DeleteJobRequest ;
import com.google.cloud.video.transcoder.v1. JobName ;
import com.google.cloud.video.transcoder.v1. TranscoderServiceClient ;
import java.io.IOException ;
public class DeleteJob {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String jobId = "my-job-id" ;
deleteJob ( projectId , location , jobId );
}
// Deletes a job.
public static void deleteJob ( String projectId , String location , String jobId ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( TranscoderServiceClient transcoderServiceClient = TranscoderServiceClient . create ()) {
JobName jobName =
JobName . newBuilder (). setProject ( projectId ). setLocation ( location ). setJob ( jobId ). build ();
DeleteJobRequest deleteJobRequest = DeleteJobRequest . newBuilder (). setName ( jobName . toString ())
. build ();
// Send the delete job request and process the response.
transcoderServiceClient . deleteJob ( deleteJobRequest );
System . out . println ( "Deleted job" );
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
// jobId = 'my-job-id';
// Imports the Transcoder library
const { TranscoderServiceClient } =
require ( ' @google-cloud/video-transcoder ' ). v1 ;
// Instantiates a client
const transcoderServiceClient = new TranscoderServiceClient ();
async function deleteJob () {
// Construct request
const request = {
name : transcoderServiceClient . jobPath ( projectId , location , jobId ),
};
await transcoderServiceClient . deleteJob ( request );
console . log ( 'Deleted job' );
}
deleteJob ();
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
use Google\Cloud\Video\Transcoder\V1\DeleteJobRequest;
/**
* Deletes a Transcoder job.
*
* @param string $projectId The ID of your Google Cloud Platform project.
* @param string $location The location of the job.
* @param string $jobId The job ID.
*/
function delete_job($projectId, $location, $jobId)
{
// Instantiate a client.
$transcoderServiceClient = new TranscoderServiceClient();
$formattedName = $transcoderServiceClient->jobName($projectId, $location, $jobId);
$request = (new DeleteJobRequest())
->setName($formattedName);
$transcoderServiceClient->deleteJob($request);
print('Deleted job' . PHP_EOL);
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
def delete_job (
project_id : str ,
location : str ,
job_id : str ,
) - > None :
"""Gets a job.
Args:
project_id: The GCP project ID.
location: The location this job is in.
job_id: The job ID."""
client = TranscoderServiceClient ()
name = f "projects/ { project_id } /locations/ { location } /jobs/ { job_id } "
response = client . delete_job ( name = name )
print ( "Deleted job" )
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
# location = "YOUR-JOB-LOCATION" # (e.g. "us-central1")
# job_id = "YOUR-JOB-ID" # (e.g. "c82c295b-3f5a-47df-8562-938a89d40fd0")
# Require the Transcoder client library.
require "google/cloud/video/transcoder"
# Create a Transcoder client.
client = Google :: Cloud :: Video :: Transcoder . transcoder_service
# Build the resource name of the job.
name = client . job_path project : project_id , location : location , job : job_id
# Delete the job.
client . delete_job name : name
# Print a success message.
puts "Deleted job"
Revoke your credentials
Optional: Revoke the authentication credentials that you created, and delete the local
credential file.
gcloud auth application-default revoke
Optional: Revoke credentials from the gcloud CLI.
gcloud auth revoke
What's next
Read the
Transcoder API overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
