---
title: "Detect people \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/people-detection
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/people-detection
  title: "Detect people \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Video Intelligence API
Guides
Send feedback
Detect people
Stay organized with collections
Save and categorize content based on your preferences.
The following code sample demonstrates how to detect people in a
video file using Video Intelligence API.
Video Intelligence can detect the presence of humans in a video
file and track individuals across a video or video segment.
Note: See the Person detection
concept page for more background on this feature.
Person detection from a file in Cloud Storage
The following demonstrates how to send an annotation request to
Video Intelligence with the person detection feature.
REST
Send video annotation request
The following shows how to send a POST request to the
videos:annotate
method. The example uses the Google Cloud CLI to create an access token. For
instructions on installing the gcloud CLI, see the
Video Intelligence API Quickstart .
See also PersonDetectionConfig .
Before using any of the request data,
make the following replacements:
INPUT_URI : a Cloud Storage bucket that contains
the file you want to annotate, including the file name. Must
start with gs:// . For example:
"inputUri": "gs://cloud-samples-data/video/googlework_short.mp4"
PROJECT_NUMBER : The numeric identifier for your Google Cloud project
HTTP method and URL:
POST https://videointelligence.googleapis.com/v1/videos:annotate
Request JSON body:
{
"inputUri": " INPUT_URI ",
"features": ["PERSON_DETECTION"],
"videoContext": {
"personDetectionConfig": {
"includeBoundingBoxes": true,
"includePoseLandmarks": true,
"includeAttributes": true
}
}
}
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
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_NUMBER " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://videointelligence.googleapis.com/v1/videos:annotate"
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
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_NUMBER " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://videointelligence.googleapis.com/v1/videos:annotate" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID "
}
If the response is successful, the Video Intelligence API returns the name for your
operation. The above shows an example of such a response, where:
PROJECT_NUMBER : the number of your project
LOCATION_ID : the Cloud region where annotation should take
place. Supported cloud regions are: us-east1 , us-west1 ,
europe-west1 , asia-east1 . If no region is
specified, a region will be determined based on video file location.
OPERATION_ID : the ID of the long running operation created
for the request and provided in the response when you started the
operation, for example 12345...
Get annotation results
To retrieve the result of the operation, make a GET request, using the
operation name returned from the call to videos:annotate , as shown in
the following example.
Before using any of the request data,
make the following replacements:
OPERATION_NAME : the name of the operation as
returned by Video Intelligence API. The operation name has the format
projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID
PROJECT_NUMBER : The numeric identifier for your Google Cloud project
HTTP method and URL:
GET https://videointelligence.googleapis.com/v1/ OPERATION_NAME
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_NUMBER " \ "https://videointelligence.googleapis.com/v1/ OPERATION_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_NUMBER " } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://videointelligence.googleapis.com/v1/ OPERATION_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"name": "us-west1.10001026834554604237",
"metadata": {
"@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress",
"annotationProgress": [
{
"inputUri": "/cloud-ml-sandbox/video/chicago.mp4",
"progressPercent": 100,
"startTime": "2020-02-08T21:26:56.577807Z",
"updateTime": "2020-02-08T21:28:09.620665Z"
}
]
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse",
"annotationResults": [
{
"inputUri": "/cloud-ml-sandbox/video/chicago.mp4",
"personDetectionAnnotations": [
{
"tracks": [
{
"segment": {
"startTimeOffset": "0s",
"endTimeOffset": "1.507436s"
}
},
...
]
}
]
}
]
}
}
Shot detection annotations are returned as a shotAnnotations list.
Note: The done field is only returned when its value is True .
It's not included in responses for which the operation has not completed.
Download annotation results
Copy the annotation from the source to the destination bucket: (see Copy files and objects )
gcloud storage cp gcs_uri gs://my-bucket
Note: If the output gcs uri is provided by the user, then the annotation is stored in that gcs uri.
Java
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.api.gax.longrunning. OperationFuture ;
import com.google.cloud.videointelligence.v1. AnnotateVideoProgress ;
import com.google.cloud.videointelligence.v1. AnnotateVideoRequest ;
import com.google.cloud.videointelligence.v1. AnnotateVideoResponse ;
import com.google.cloud.videointelligence.v1. DetectedAttribute ;
import com.google.cloud.videointelligence.v1. DetectedLandmark ;
import com.google.cloud.videointelligence.v1. Feature ;
import com.google.cloud.videointelligence.v1. PersonDetectionAnnotation ;
import com.google.cloud.videointelligence.v1. PersonDetectionConfig ;
import com.google.cloud.videointelligence.v1. TimestampedObject ;
import com.google.cloud.videointelligence.v1. Track ;
import com.google.cloud.videointelligence.v1. VideoAnnotationResults ;
import com.google.cloud.videointelligence.v1. VideoContext ;
import com.google.cloud.videointelligence.v1. VideoIntelligenceServiceClient ;
import com.google.cloud.videointelligence.v1. VideoSegment ;
public class DetectPersonGcs {
public static void detectPersonGcs () throws Exception {
// TODO(developer): Replace these variables before running the sample.
String gcsUri = "gs://cloud-samples-data/video/googlework_short.mp4" ;
detectPersonGcs ( gcsUri );
}
// Detects people in a video stored in Google Cloud Storage using
// the Cloud Video Intelligence API.
public static void detectPersonGcs ( String gcsUri ) throws Exception {
try ( VideoIntelligenceServiceClient videoIntelligenceServiceClient =
VideoIntelligenceServiceClient . create ()) {
// Reads a local video file and converts it to base64.
PersonDetectionConfig personDetectionConfig =
PersonDetectionConfig . newBuilder ()
// Must set includeBoundingBoxes to true to get poses and attributes.
. setIncludeBoundingBoxes ( true )
. setIncludePoseLandmarks ( true )
. setIncludeAttributes ( true )
. build ();
VideoContext videoContext =
VideoContext . newBuilder (). setPersonDetectionConfig ( personDetectionConfig ). build ();
AnnotateVideoRequest request =
AnnotateVideoRequest . newBuilder ()
. setInputUri ( gcsUri )
. addFeatures ( Feature . PERSON_DETECTION )
. setVideoContext ( videoContext )
. build ();
// Detects people in a video
OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > future =
videoIntelligenceServiceClient . annotateVideoAsync ( request );
System . out . println ( "Waiting for operation to complete..." );
AnnotateVideoResponse response = future . get ();
// Get the first response, since we sent only one video.
VideoAnnotationResults annotationResult = response . getAnnotationResultsList (). get ( 0 );
// Annotations for list of people detected, tracked and recognized in video.
for ( PersonDetectionAnnotation personDetectionAnnotation :
annotationResult . getPersonDetectionAnnotationsList ()) {
System . out . print ( "Person detected:\n" );
for ( Track track : personDetectionAnnotation . getTracksList ()) {
VideoSegment segment = track . getSegment ();
System . out . printf (
"\tStart: %d.%.0fs\n" ,
segment . getStartTimeOffset (). getSeconds (),
segment . getStartTimeOffset (). getNanos () / 1e6 );
System . out . printf (
"\tEnd: %d.%.0fs\n" ,
segment . getEndTimeOffset (). getSeconds (), segment . getEndTimeOffset (). getNanos () / 1e6 );
// Each segment includes timestamped objects that include characteristic--e.g. clothes,
// posture of the person detected.
TimestampedObject firstTimestampedObject = track . getTimestampedObjects ( 0 );
// Attributes include unique pieces of clothing, poses (i.e., body landmarks)
// of the person detected.
for ( DetectedAttribute attribute : firstTimestampedObject . getAttributesList ()) {
System . out . printf (
"\tAttribute: %s; Value: %s\n" , attribute . getName (), attribute . getValue ());
}
// Landmarks in person detection include body parts.
for ( DetectedLandmark attribute : firstTimestampedObject . getLandmarksList ()) {
System . out . printf (
"\tLandmark: %s; Vertex: %f, %f\n" ,
attribute . getName (), attribute . getPoint (). getX (), attribute . getPoint (). getY ());
}
}
}
}
}
}
Node.js
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// const gcsUri = 'GCS URI of the video to analyze, e.g. gs://my-bucket/my-video.mp4';
// Imports the Google Cloud Video Intelligence library + Node's fs library
const Video = require ( ' @google-cloud/video-intelligence ' ). v1 ;
// Creates a client
const video = new Video . VideoIntelligenceServiceClient ();
async function detectPersonGCS () {
const request = {
inputUri : gcsUri ,
features : [ 'PERSON_DETECTION' ],
videoContext : {
personDetectionConfig : {
// Must set includeBoundingBoxes to true to get poses and attributes.
includeBoundingBoxes : true ,
includePoseLandmarks : true ,
includeAttributes : true ,
},
},
};
// Detects faces in a video
// We get the first result because we only process 1 video
const [ operation ] = await video . annotateVideo ( request );
const results = await operation . promise ();
console . log ( 'Waiting for operation to complete...' );
// Gets annotations for video
const personAnnotations =
results [ 0 ]. annotationResults [ 0 ]. personDetectionAnnotations ;
for ( const { tracks } of personAnnotations ) {
console . log ( 'Person detected:' );
for ( const { segment , timestampedObjects } of tracks ) {
console . log (
`\tStart: ${ segment . startTimeOffset . seconds } ` +
`. ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s`
);
console . log (
`\tEnd: ${ segment . endTimeOffset . seconds } .` +
` ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s`
);
// Each segment includes timestamped objects that
// include characteristic--e.g. clothes, posture
// of the person detected.
const [ firstTimestampedObject ] = timestampedObjects ;
// Attributes include unique pieces of clothing, poses (i.e., body
// landmarks) of the person detected.
for ( const { name , value } of firstTimestampedObject . attributes ) {
console . log ( `\tAttribute: ${ name } ; Value: ${ value } ` );
}
// Landmarks in person detection include body parts.
for ( const { name , point } of firstTimestampedObject . landmarks ) {
console . log ( `\tLandmark: ${ name } ; Vertex: ${ point . x } , ${ point . y } ` );
}
}
}
}
detectPersonGCS ();
Python
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import videointelligence_v1 as videointelligence
def detect_person ( gcs_uri = "gs://YOUR_BUCKET_ID/path/to/your/video.mp4" ):
"""Detects people in a video."""
client = videointelligence . VideoIntelligenceServiceClient ()
# Configure the request
config = videointelligence . types . PersonDetectionConfig (
include_bounding_boxes = True ,
include_attributes = True ,
include_pose_landmarks = True ,
)
context = videointelligence . types . VideoContext ( person_detection_config = config )
# Start the asynchronous request
operation = client . annotate_video (
request = {
"features" : [ videointelligence . Feature . PERSON_DETECTION ],
"input_uri" : gcs_uri ,
"video_context" : context ,
}
)
print ( " \n Processing video for person detection annotations." )
result = operation . result ( timeout = 300 )
print ( " \n Finished processing. \n " )
# Retrieve the first result, because a single video was processed.
annotation_result = result . annotation_results [ 0 ]
for annotation in annotation_result . person_detection_annotations :
print ( "Person detected:" )
for track in annotation . tracks :
print (
"Segment: {} s to {} s" . format (
track . segment . start_time_offset . seconds
+ track . segment . start_time_offset . microseconds / 1e6 ,
track . segment . end_time_offset . seconds
+ track . segment . end_time_offset . microseconds / 1e6 ,
)
)
# Each segment includes timestamped objects that include
# characteristics - -e.g.clothes, posture of the person detected.
# Grab the first timestamped object
timestamped_object = track . timestamped_objects [ 0 ]
box = timestamped_object . normalized_bounding_box
print ( "Bounding box:" )
print ( " \t left : {} " . format ( box . left ))
print ( " \t top : {} " . format ( box . top ))
print ( " \t right : {} " . format ( box . right ))
print ( " \t bottom: {} " . format ( box . bottom ))
# Attributes include unique pieces of clothing,
# poses, or hair color.
print ( "Attributes:" )
for attribute in timestamped_object . attributes :
print (
" \t {} : {} {} " . format (
attribute . name , attribute . value , attribute . confidence
)
)
# Landmarks in person detection include body parts such as
# left_shoulder, right_ear, and right_ankle
print ( "Landmarks:" )
for landmark in timestamped_object . landmarks :
print (
" \t {} : {} (x= {} , y= {} )" . format (
landmark . name ,
landmark . confidence ,
landmark . point . x , # Normalized vertex
landmark . point . y , # Normalized vertex
)
)
Additional languages
C# :
Please follow the
C# setup instructions
on the client libraries page
and then visit the
Video Intelligence reference documentation for .NET.
PHP :
Please follow the
PHP setup instructions
on the client libraries page
and then visit the
Video Intelligence reference documentation for PHP.
Ruby :
Please follow the
Ruby setup instructions
on the client libraries page
and then visit the
Video Intelligence reference documentation for Ruby.
Person detection from a local file
The following example uses person detection to find entities in a video from
a video file uploaded from your local machine.
REST
Send the process request
To perform person detection on a local video file, base64-encode the contents
of the video file. For information on how to base64-encode the contents of a
video file, see Base64 Encoding . Then, make a POST request to the
videos:annotate
method. Include the base64-encoded contents in the inputContent
field of the request and specify the PERSON_DETECTION feature.
The following shows an example of a POST request using curl. The example uses
the Google Cloud CLI to create an access token. For instructions on installing
the gcloud CLI, see the
Video Intelligence API Quickstart
Before using any of the request data,
make the following replacements:
inputContent: Local video file in binary format
For example: 'AAAAGGZ0eXBtcDQyAAAAAGlzb21tcDQyAAGVYW1vb3YAAABsbXZoZAAAAADWvhlR1r4ZUQABX5ABCOxo
AAEAAAEAAAAAAA4...'
PROJECT_NUMBER : The numeric identifier for your Google Cloud project
HTTP method and URL:
POST https://videointelligence.googleapis.com/v1/videos:annotate
Request JSON body:
{
"inputUri": " Local video file in binary format ",
"features": ["PERSON_DETECTION"],
"videoContext": {
"personDetectionConfig": {
"includeBoundingBoxes": true,
"includePoseLandmarks": true,
"includeAttributes": true
}
}
}
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
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_NUMBER " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://videointelligence.googleapis.com/v1/videos:annotate"
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
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_NUMBER " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://videointelligence.googleapis.com/v1/videos:annotate" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID/var>/operations/ OPERATION_ID "
}
If the request is successful, Video Intelligence the name for your operation. The
above shows an example of such a response, where project-number
is the number of your project and operation-id is the ID of the long-running operation created for the request.
{
"name": "us-west1.17122464255125931980"
}
Get the results
To retrieve the result of the operation, make a GET request to the
operations endpoint and specify the name of your operation.
Before using any of the request data,
make the following replacements:
OPERATION_NAME : the name of the operation as
returned by Video Intelligence API. The operation name has the format
projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID
PROJECT_NUMBER : The numeric identifier for your Google Cloud project
HTTP method and URL:
GET https://videointelligence.googleapis.com/v1/ OPERATION_NAME
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_NUMBER " \ "https://videointelligence.googleapis.com/v1/ OPERATION_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_NUMBER " } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://videointelligence.googleapis.com/v1/ OPERATION_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"name": "us-west1.10001026834554604237",
"metadata": {
"@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress",
"annotationProgress": [
{
"progressPercent": 100,
"startTime": "2020-02-08T21:26:56.577807Z",
"updateTime": "2020-02-08T21:28:09.620665Z"
}
]
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse",
"annotationResults": [
{
"personDetectionAnnotations": [
{
"tracks": [
{
"segment": {
"startTimeOffset": "0s",
"endTimeOffset": "1.507436s"
}
},
...
]
}
]
}
]
}
}
Java
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.api.gax.longrunning. OperationFuture ;
import com.google.cloud.videointelligence.v1. AnnotateVideoProgress ;
import com.google.cloud.videointelligence.v1. AnnotateVideoRequest ;
import com.google.cloud.videointelligence.v1. AnnotateVideoResponse ;
import com.google.cloud.videointelligence.v1. DetectedAttribute ;
import com.google.cloud.videointelligence.v1. DetectedLandmark ;
import com.google.cloud.videointelligence.v1. Feature ;
import com.google.cloud.videointelligence.v1. PersonDetectionAnnotation ;
import com.google.cloud.videointelligence.v1. PersonDetectionConfig ;
import com.google.cloud.videointelligence.v1. TimestampedObject ;
import com.google.cloud.videointelligence.v1. Track ;
import com.google.cloud.videointelligence.v1. VideoAnnotationResults ;
import com.google.cloud.videointelligence.v1. VideoContext ;
import com.google.cloud.videointelligence.v1. VideoIntelligenceServiceClient ;
import com.google.cloud.videointelligence.v1. VideoSegment ;
import com.google.protobuf. ByteString ;
import java.nio.file.Files ;
import java.nio.file.Path ;
import java.nio.file.Paths ;
public class DetectPerson {
public static void detectPerson () throws Exception {
// TODO(developer): Replace these variables before running the sample.
String localFilePath = "resources/googlework_short.mp4" ;
detectPerson ( localFilePath );
}
// Detects people in a video stored in a local file using the Cloud Video Intelligence API.
public static void detectPerson ( String localFilePath ) throws Exception {
try ( VideoIntelligenceServiceClient videoIntelligenceServiceClient =
VideoIntelligenceServiceClient . create ()) {
// Reads a local video file and converts it to base64.
Path path = Paths . get ( localFilePath );
byte [] data = Files . readAllBytes ( path );
ByteString inputContent = ByteString . copyFrom ( data );
PersonDetectionConfig personDetectionConfig =
PersonDetectionConfig . newBuilder ()
// Must set includeBoundingBoxes to true to get poses and attributes.
. setIncludeBoundingBoxes ( true )
. setIncludePoseLandmarks ( true )
. setIncludeAttributes ( true )
. build ();
VideoContext videoContext =
VideoContext . newBuilder (). setPersonDetectionConfig ( personDetectionConfig ). build ();
AnnotateVideoRequest request =
AnnotateVideoRequest . newBuilder ()
. setInputContent ( inputContent )
. addFeatures ( Feature . PERSON_DETECTION )
. setVideoContext ( videoContext )
. build ();
// Detects people in a video
// We get the first result because only one video is processed.
OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > future =
videoIntelligenceServiceClient . annotateVideoAsync ( request );
System . out . println ( "Waiting for operation to complete..." );
AnnotateVideoResponse response = future . get ();
// Gets annotations for video
VideoAnnotationResults annotationResult = response . getAnnotationResultsList (). get ( 0 );
// Annotations for list of people detected, tracked and recognized in video.
for ( PersonDetectionAnnotation personDetectionAnnotation :
annotationResult . getPersonDetectionAnnotationsList ()) {
System . out . print ( "Person detected:\n" );
for ( Track track : personDetectionAnnotation . getTracksList ()) {
VideoSegment segment = track . getSegment ();
System . out . printf (
"\tStart: %d.%.0fs\n" ,
segment . getStartTimeOffset (). getSeconds (),
segment . getStartTimeOffset (). getNanos () / 1e6 );
System . out . printf (
"\tEnd: %d.%.0fs\n" ,
segment . getEndTimeOffset (). getSeconds (), segment . getEndTimeOffset (). getNanos () / 1e6 );
// Each segment includes timestamped objects that include characteristic--e.g. clothes,
// posture of the person detected.
TimestampedObject firstTimestampedObject = track . getTimestampedObjects ( 0 );
// Attributes include unique pieces of clothing, poses (i.e., body landmarks)
// of the person detected.
for ( DetectedAttribute attribute : firstTimestampedObject . getAttributesList ()) {
System . out . printf (
"\tAttribute: %s; Value: %s\n" , attribute . getName (), attribute . getValue ());
}
// Landmarks in person detection include body parts.
for ( DetectedLandmark attribute : firstTimestampedObject . getLandmarksList ()) {
System . out . printf (
"\tLandmark: %s; Vertex: %f, %f\n" ,
attribute . getName (), attribute . getPoint (). getX (), attribute . getPoint (). getY ());
}
}
}
}
}
}
Node.js
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// const gcsUri = 'GCS URI of the video to analyze, e.g. gs://my-bucket/my-video.mp4';
// Imports the Google Cloud Video Intelligence library + Node's fs library
const Video = require ( ' @google-cloud/video-intelligence ' ). v1 ;
const fs = require ( 'fs' );
// Creates a client
const video = new Video . VideoIntelligenceServiceClient ();
/**
* TODO(developer): Uncomment the following line before running the sample.
*/
// const path = 'Local file to analyze, e.g. ./my-file.mp4';
// Reads a local video file and converts it to base64
const file = fs . readFileSync ( path );
const inputContent = file . toString ( 'base64' );
async function detectPerson () {
const request = {
inputContent : inputContent ,
features : [ 'PERSON_DETECTION' ],
videoContext : {
personDetectionConfig : {
// Must set includeBoundingBoxes to true to get poses and attributes.
includeBoundingBoxes : true ,
includePoseLandmarks : true ,
includeAttributes : true ,
},
},
};
// Detects faces in a video
// We get the first result because we only process 1 video
const [ operation ] = await video . annotateVideo ( request );
const results = await operation . promise ();
console . log ( 'Waiting for operation to complete...' );
// Gets annotations for video
const personAnnotations =
results [ 0 ]. annotationResults [ 0 ]. personDetectionAnnotations ;
for ( const { tracks } of personAnnotations ) {
console . log ( 'Person detected:' );
for ( const { segment , timestampedObjects } of tracks ) {
console . log (
`\tStart: ${ segment . startTimeOffset . seconds } ` +
`. ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s`
);
console . log (
`\tEnd: ${ segment . endTimeOffset . seconds } .` +
` ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s`
);
// Each segment includes timestamped objects that
// include characteristic--e.g. clothes, posture
// of the person detected.
const [ firstTimestampedObject ] = timestampedObjects ;
// Attributes include unique pieces of clothing, poses (i.e., body
// landmarks) of the person detected.
for ( const { name , value } of firstTimestampedObject . attributes ) {
console . log ( `\tAttribute: ${ name } ; Value: ${ value } ` );
}
// Landmarks in person detection include body parts.
for ( const { name , point } of firstTimestampedObject . landmarks ) {
console . log ( `\tLandmark: ${ name } ; Vertex: ${ point . x } , ${ point . y } ` );
}
}
}
}
detectPerson ();
Python
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import io
from google.cloud import videointelligence_v1 as videointelligence
def detect_person ( local_file_path = "path/to/your/video-file.mp4" ):
"""Detects people in a video from a local file."""
client = videointelligence . VideoIntelligenceServiceClient ()
with io . open ( local_file_path , "rb" ) as f :
input_content = f . read ()
# Configure the request
config = videointelligence . types . PersonDetectionConfig (
include_bounding_boxes = True ,
include_attributes = True ,
include_pose_landmarks = True ,
)
context = videointelligence . types . VideoContext ( person_detection_config = config )
# Start the asynchronous request
operation = client . annotate_video (
request = {
"features" : [ videointelligence . Feature . PERSON_DETECTION ],
"input_content" : input_content ,
"video_context" : context ,
}
)
print ( " \n Processing video for person detection annotations." )
result = operation . result ( timeout = 300 )
print ( " \n Finished processing. \n " )
# Retrieve the first result, because a single video was processed.
annotation_result = result . annotation_results [ 0 ]
for annotation in annotation_result . person_detection_annotations :
print ( "Person detected:" )
for track in annotation . tracks :
print (
"Segment: {} s to {} s" . format (
track . segment . start_time_offset . seconds
+ track . segment . start_time_offset . microseconds / 1e6 ,
track . segment . end_time_offset . seconds
+ track . segment . end_time_offset . microseconds / 1e6 ,
)
)
# Each segment includes timestamped objects that include
# characteristic - -e.g.clothes, posture of the person detected.
# Grab the first timestamped object
timestamped_object = track . timestamped_objects [ 0 ]
box = timestamped_object . normalized_bounding_box
print ( "Bounding box:" )
print ( " \t left : {} " . format ( box . left ))
print ( " \t top : {} " . format ( box . top ))
print ( " \t right : {} " . format ( box . right ))
print ( " \t bottom: {} " . format ( box . bottom ))
# Attributes include unique pieces of clothing,
# poses, or hair color.
print ( "Attributes:" )
for attribute in timestamped_object . attributes :
print (
" \t {} : {} {} " . format (
attribute . name , attribute . value , attribute . confidence
)
)
# Landmarks in person detection include body parts such as
# left_shoulder, right_ear, and right_ankle
print ( "Landmarks:" )
for landmark in timestamped_object . landmarks :
print (
" \t {} : {} (x= {} , y= {} )" . format (
landmark . name ,
landmark . confidence ,
landmark . point . x , # Normalized vertex
landmark . point . y , # Normalized vertex
)
)
Additional languages
C# :
Please follow the
C# setup instructions
on the client libraries page
and then visit the
Video Intelligence reference documentation for .NET.
PHP :
Please follow the
PHP setup instructions
on the client libraries page
and then visit the
Video Intelligence reference documentation for PHP.
Ruby :
Please follow the
Ruby setup instructions
on the client libraries page
and then visit the
Video Intelligence reference documentation for Ruby.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
