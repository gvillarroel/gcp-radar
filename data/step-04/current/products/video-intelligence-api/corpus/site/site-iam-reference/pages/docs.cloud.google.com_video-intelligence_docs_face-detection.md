---
title: "Detect faces \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/face-detection
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/streaming/docker-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/face-detection
  title: "Detect faces \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
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
Detect faces
Stay organized with collections
Save and categorize content based on your preferences.
The Video Intelligence API Face detection feature looks for faces in a video.
Note: See the Face detection
concept page for more background on this feature.
Face detection from a file in Cloud Storage
The following samples demonstrate face detection on a file located in
Cloud Storage.
REST
Send video annotation request
The following shows how to send a POST request to the
videos:annotate
method. The example uses the Google Cloud CLI to create an access token. For
instructions on installing the gcloud CLI, see the
Video Intelligence API Quickstart .
Before using any of the request data,
make the following replacements:
INPUT_URI : a Cloud Storage bucket that contains the file you want to
annotate, including the file name. Must start with gs://. For example:
`"inputUri": "gs://cloud-samples-data/video/googlework_short.mp4"`
PROJECT_NUMBER : The numeric identifier for your Google Cloud project
HTTP method and URL:
POST https://videointelligence.googleapis.com/v1/videos:annotate
Request JSON body:
{
"inputUri": " INPUT_URI ",
"features": ["FACE_DETECTION"]
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
specified, a region is selected based on video file location.
OPERATION_ID : the ID of the long running operation created
for the request and provided in the response when you started the
operation, for example 12345...
Get annotation results
To retrieve the result of the operation, make a GET request, using the
operation name returned from the call to videos:annotate , as shown in the following example.
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
"name": "us-west1.12992940717210107667",
"metadata": {
"@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress",
"annotationProgress": [
{
"inputUri": "/bucket-name-123/google_gmail.mp4",
"progressPercent": 100,
"startTime": "2020-02-23T22:53:39.272319Z",
"updateTime": "2020-02-23T22:56:52.632435Z"
}
]
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse",
"annotationResults": [
{
"inputUri": "/bucket-name-123/google_gmail.mp4",
"faceDetectionAnnotations": [
{
"tracks": [
{
"segment": {
"startTimeOffset": "3.103100s",
"endTimeOffset": "7.007s"
}
},
"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD..."
}
]
"faceDetectionAnnotations": [
{
"tracks": [
{
"segment": {
"startTimeOffset": "7.107100s",
"endTimeOffset": "15.715700s"
}
},
"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD..."
}
]
......
]
}
}
Face detection annotations are returned as a faceAnnotations list.
Note: The done field is only returned when its value is True .
It's not included in responses for which the operation has not completed.
Java
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.api.gax.longrunning. OperationFuture ;
import com.google.cloud.videointelligence.v1. AnnotateVideoProgress ;
import com.google.cloud.videointelligence.v1. AnnotateVideoRequest ;
import com.google.cloud.videointelligence.v1. AnnotateVideoResponse ;
import com.google.cloud.videointelligence.v1. DetectedAttribute ;
import com.google.cloud.videointelligence.v1. FaceDetectionAnnotation ;
import com.google.cloud.videointelligence.v1. FaceDetectionConfig ;
import com.google.cloud.videointelligence.v1. Feature ;
import com.google.cloud.videointelligence.v1. TimestampedObject ;
import com.google.cloud.videointelligence.v1. Track ;
import com.google.cloud.videointelligence.v1. VideoAnnotationResults ;
import com.google.cloud.videointelligence.v1. VideoContext ;
import com.google.cloud.videointelligence.v1. VideoIntelligenceServiceClient ;
import com.google.cloud.videointelligence.v1. VideoSegment ;
public class DetectFacesGcs {
public static void detectFacesGcs () throws Exception {
// TODO(developer): Replace these variables before running the sample.
String gcsUri = "gs://cloud-samples-data/video/googlework_short.mp4" ;
detectFacesGcs ( gcsUri );
}
// Detects faces in a video stored in Google Cloud Storage using the Cloud Video Intelligence API.
public static void detectFacesGcs ( String gcsUri ) throws Exception {
try ( VideoIntelligenceServiceClient videoIntelligenceServiceClient =
VideoIntelligenceServiceClient . create ()) {
FaceDetectionConfig faceDetectionConfig =
FaceDetectionConfig . newBuilder ()
// Must set includeBoundingBoxes to true to get facial attributes.
. setIncludeBoundingBoxes ( true )
. setIncludeAttributes ( true )
. build ();
VideoContext videoContext =
VideoContext . newBuilder (). setFaceDetectionConfig ( faceDetectionConfig ). build ();
AnnotateVideoRequest request =
AnnotateVideoRequest . newBuilder ()
. setInputUri ( gcsUri )
. addFeatures ( Feature . FACE_DETECTION )
. setVideoContext ( videoContext )
. build ();
// Detects faces in a video
OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > future =
videoIntelligenceServiceClient . annotateVideoAsync ( request );
System . out . println ( "Waiting for operation to complete..." );
AnnotateVideoResponse response = future . get ();
// Gets annotations for video
VideoAnnotationResults annotationResult = response . getAnnotationResultsList (). get ( 0 );
// Annotations for list of people detected, tracked and recognized in video.
for ( FaceDetectionAnnotation faceDetectionAnnotation :
annotationResult . getFaceDetectionAnnotationsList ()) {
System . out . print ( "Face detected:\n" );
for ( Track track : faceDetectionAnnotation . getTracksList ()) {
VideoSegment segment = track . getSegment ();
System . out . printf (
"\tStart: %d.%.0fs\n" ,
segment . getStartTimeOffset (). getSeconds (),
segment . getStartTimeOffset (). getNanos () / 1e6 );
System . out . printf (
"\tEnd: %d.%.0fs\n" ,
segment . getEndTimeOffset (). getSeconds (), segment . getEndTimeOffset (). getNanos () / 1e6 );
// Each segment includes timestamped objects that
// include characteristics of the face detected.
TimestampedObject firstTimestampedObject = track . getTimestampedObjects ( 0 );
for ( DetectedAttribute attribute : firstTimestampedObject . getAttributesList ()) {
// Attributes include glasses, headwear, smiling, direction of gaze
System . out . printf (
"\tAttribute %s: %s %s\n" ,
attribute . getName (), attribute . getValue (), attribute . getConfidence ());
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
async function detectFacesGCS () {
const request = {
inputUri : gcsUri ,
features : [ 'FACE_DETECTION' ],
videoContext : {
faceDetectionConfig : {
// Must set includeBoundingBoxes to true to get facial attributes.
includeBoundingBoxes : true ,
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
const faceAnnotations =
results [ 0 ]. annotationResults [ 0 ]. faceDetectionAnnotations ;
for ( const { tracks } of faceAnnotations ) {
console . log ( 'Face detected:' );
for ( const { segment , timestampedObjects } of tracks ) {
console . log (
`\tStart: ${ segment . startTimeOffset . seconds } .` +
` ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s`
);
console . log (
`\tEnd: ${ segment . endTimeOffset . seconds } .` +
` ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s`
);
// Each segment includes timestamped objects that
// include characteristics of the face detected.
const [ firstTimestapedObject ] = timestampedObjects ;
for ( const { name } of firstTimestapedObject . attributes ) {
// Attributes include 'glasses', 'headwear', 'smiling'.
console . log ( `\tAttribute: ${ name } ; ` );
}
}
}
}
detectFacesGCS ();
Python
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import videointelligence_v1 as videointelligence
def detect_faces ( gcs_uri = "gs://YOUR_BUCKET_ID/path/to/your/video.mp4" ):
"""Detects faces in a video."""
client = videointelligence . VideoIntelligenceServiceClient ()
# Configure the request
config = videointelligence . FaceDetectionConfig (
include_bounding_boxes = True , include_attributes = True
)
context = videointelligence . VideoContext ( face_detection_config = config )
# Start the asynchronous request
operation = client . annotate_video (
request = {
"features" : [ videointelligence . Feature . FACE_DETECTION ],
"input_uri" : gcs_uri ,
"video_context" : context ,
}
)
print ( " \n Processing video for face detection annotations." )
result = operation . result ( timeout = 300 )
print ( " \n Finished processing. \n " )
# Retrieve the first result, because a single video was processed.
annotation_result = result . annotation_results [ 0 ]
for annotation in annotation_result . face_detection_annotations :
print ( "Face detected:" )
for track in annotation . tracks :
print (
"Segment: {} s to {} s" . format (
track . segment . start_time_offset . seconds
+ track . segment . start_time_offset . microseconds / 1e6 ,
track . segment . end_time_offset . seconds
+ track . segment . end_time_offset . microseconds / 1e6 ,
)
)
# Each segment includes timestamped faces that include
# characteristics of the face detected.
# Grab the first timestamped face
timestamped_object = track . timestamped_objects [ 0 ]
box = timestamped_object . normalized_bounding_box
print ( "Bounding box:" )
print ( " \t left : {} " . format ( box . left ))
print ( " \t top : {} " . format ( box . top ))
print ( " \t right : {} " . format ( box . right ))
print ( " \t bottom: {} " . format ( box . bottom ))
# Attributes include glasses, headwear, smiling, direction of gaze
print ( "Attributes:" )
for attribute in timestamped_object . attributes :
print (
" \t {} : {} {} " . format (
attribute . name , attribute . value , attribute . confidence
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
Face detection from a local file
The following example uses face detection to find entities in a video from
a video file uploaded from your local machine.
REST
Send the process request
To perform face detection on a local video file, base64-encode the contents
of the video file. For information on how to base64-encode the contents of a
video file, see Base64 Encoding . Then, make a POST request to the
videos:annotate
method. Include the base64-encoded contents in the inputContent
field of the request and specify the FACE_DETECTION feature.
The following is an example of a POST request using curl. The example uses the
Google Cloud CLI to create an access token. For instructions on installing the
gcloud CLI, see the
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
inputContent: " Local video file in binary format ",
"features": ["FACE_DETECTION"]
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
If the request is successful, Video Intelligence the name for your operation. The
above shows an example of such a response, where project-number
is the number of your project and operation-id is the ID of the long-running operation created for the request.
{
"name": "us-west1.17122464255125931980"
}
Get the results
To retrieve the result of the operation, make a GET request to the
operations
endpoint and specify the name of your operation.
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
"name": "us-west1.12992940717210107667",
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
"faceDetectionAnnotations": [
{
"tracks": [
{
"segment": {
"startTimeOffset": "3.103100s",
"endTimeOffset": "7.007s"
}
},
"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD..."
}
]
"faceDetectionAnnotations": [
{
"tracks": [
{
"segment": {
"startTimeOffset": "7.107100s",
"endTimeOffset": "15.715700s"
}
},
"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD..."
}
]
......
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
import com.google.cloud.videointelligence.v1. FaceDetectionAnnotation ;
import com.google.cloud.videointelligence.v1. FaceDetectionConfig ;
import com.google.cloud.videointelligence.v1. Feature ;
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
public class DetectFaces {
public static void detectFaces () throws Exception {
// TODO(developer): Replace these variables before running the sample.
String localFilePath = "resources/googlework_short.mp4" ;
detectFaces ( localFilePath );
}
// Detects faces in a video stored in a local file using the Cloud Video Intelligence API.
public static void detectFaces ( String localFilePath ) throws Exception {
try ( VideoIntelligenceServiceClient videoIntelligenceServiceClient =
VideoIntelligenceServiceClient . create ()) {
// Reads a local video file and converts it to base64.
Path path = Paths . get ( localFilePath );
byte [] data = Files . readAllBytes ( path );
ByteString inputContent = ByteString . copyFrom ( data );
FaceDetectionConfig faceDetectionConfig =
FaceDetectionConfig . newBuilder ()
// Must set includeBoundingBoxes to true to get facial attributes.
. setIncludeBoundingBoxes ( true )
. setIncludeAttributes ( true )
. build ();
VideoContext videoContext =
VideoContext . newBuilder (). setFaceDetectionConfig ( faceDetectionConfig ). build ();
AnnotateVideoRequest request =
AnnotateVideoRequest . newBuilder ()
. setInputContent ( inputContent )
. addFeatures ( Feature . FACE_DETECTION )
. setVideoContext ( videoContext )
. build ();
// Detects faces in a video
OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > future =
videoIntelligenceServiceClient . annotateVideoAsync ( request );
System . out . println ( "Waiting for operation to complete..." );
AnnotateVideoResponse response = future . get ();
// Gets annotations for video
VideoAnnotationResults annotationResult = response . getAnnotationResultsList (). get ( 0 );
// Annotations for list of faces detected, tracked and recognized in video.
for ( FaceDetectionAnnotation faceDetectionAnnotation :
annotationResult . getFaceDetectionAnnotationsList ()) {
System . out . print ( "Face detected:\n" );
for ( Track track : faceDetectionAnnotation . getTracksList ()) {
VideoSegment segment = track . getSegment ();
System . out . printf (
"\tStart: %d.%.0fs\n" ,
segment . getStartTimeOffset (). getSeconds (),
segment . getStartTimeOffset (). getNanos () / 1e6 );
System . out . printf (
"\tEnd: %d.%.0fs\n" ,
segment . getEndTimeOffset (). getSeconds (), segment . getEndTimeOffset (). getNanos () / 1e6 );
// Each segment includes timestamped objects that
// include characteristics of the face detected.
TimestampedObject firstTimestampedObject = track . getTimestampedObjects ( 0 );
for ( DetectedAttribute attribute : firstTimestampedObject . getAttributesList ()) {
// Attributes include glasses, headwear, smiling, direction of gaze
System . out . printf (
"\tAttribute %s: %s %s\n" ,
attribute . getName (), attribute . getValue (), attribute . getConfidence ());
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
// const path = 'Local file to analyze, e.g. ./my-file.mp4';
// Imports the Google Cloud Video Intelligence library + Node's fs library
const Video = require ( ' @google-cloud/video-intelligence ' ). v1 ;
const fs = require ( 'fs' );
// Creates a client
const video = new Video . VideoIntelligenceServiceClient ();
// Reads a local video file and converts it to base64
const file = fs . readFileSync ( path );
const inputContent = file . toString ( 'base64' );
async function detectFaces () {
const request = {
inputContent : inputContent ,
features : [ 'FACE_DETECTION' ],
videoContext : {
faceDetectionConfig : {
// Must set includeBoundingBoxes to true to get facial attributes.
includeBoundingBoxes : true ,
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
const faceAnnotations =
results [ 0 ]. annotationResults [ 0 ]. faceDetectionAnnotations ;
for ( const { tracks } of faceAnnotations ) {
console . log ( 'Face detected:' );
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
// include characteristics of the face detected.
const [ firstTimestapedObject ] = timestampedObjects ;
for ( const { name } of firstTimestapedObject . attributes ) {
// Attributes include 'glasses', 'headwear', 'smiling'.
console . log ( `\tAttribute: ${ name } ; ` );
}
}
}
}
detectFaces ();
Python
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import io
from google.cloud import videointelligence_v1 as videointelligence
def detect_faces ( local_file_path = "path/to/your/video-file.mp4" ):
"""Detects faces in a video from a local file."""
client = videointelligence . VideoIntelligenceServiceClient ()
with io . open ( local_file_path , "rb" ) as f :
input_content = f . read ()
# Configure the request
config = videointelligence . FaceDetectionConfig (
include_bounding_boxes = True , include_attributes = True
)
context = videointelligence . VideoContext ( face_detection_config = config )
# Start the asynchronous request
operation = client . annotate_video (
request = {
"features" : [ videointelligence . Feature . FACE_DETECTION ],
"input_content" : input_content ,
"video_context" : context ,
}
)
print ( " \n Processing video for face detection annotations." )
result = operation . result ( timeout = 300 )
print ( " \n Finished processing. \n " )
# Retrieve the first result, because a single video was processed.
annotation_result = result . annotation_results [ 0 ]
for annotation in annotation_result . face_detection_annotations :
print ( "Face detected:" )
for track in annotation . tracks :
print (
"Segment: {} s to {} s" . format (
track . segment . start_time_offset . seconds
+ track . segment . start_time_offset . microseconds / 1e6 ,
track . segment . end_time_offset . seconds
+ track . segment . end_time_offset . microseconds / 1e6 ,
)
)
# Each segment includes timestamped faces that include
# characteristics of the face detected.
# Grab the first timestamped face
timestamped_object = track . timestamped_objects [ 0 ]
box = timestamped_object . normalized_bounding_box
print ( "Bounding box:" )
print ( " \t left : {} " . format ( box . left ))
print ( " \t top : {} " . format ( box . top ))
print ( " \t right : {} " . format ( box . right ))
print ( " \t bottom: {} " . format ( box . bottom ))
# Attributes include glasses, headwear, smiling, direction of gaze
print ( "Attributes:" )
for attribute in timestamped_object . attributes :
print (
" \t {} : {} {} " . format (
attribute . name , attribute . value , attribute . confidence
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
