---
title: "Detect explicit content in videos \_|\_ Video Intelligence API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/streaming/docker-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch
  title: "Detect explicit content in videos \_|\_ Video Intelligence API \_|\_ Google\
    \ Cloud Documentation"
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
Detect explicit content in videos
Stay organized with collections
Save and categorize content based on your preferences.
Explicit Content Detection detects adult content in videos. Adult content
is generally inappropriate for those under under 18 years of age and
includes, but is not limited to, nudity, sexual activities, and
pornography. Such content detected in cartoons or anime is also identified.
The response includes a bucketized likelihood
value, from VERY_UNLIKELY to VERY_LIKELY .
When Explicit Content Detection evaluates a video, it does so on a per-frame
basis and considers visual content only . The audio component of the video is
not used to evaluate explicit content level.
Note: Google does not guarantee the accuracy of its Explicit Content Detection
predictions.
Here is an example of performing video analysis for Explicit Content Detection
features on a file located in Cloud Storage.
REST
Send video annotation request
The following shows how to send a POST request to the
videos:annotate
method. The example uses the Google Cloud CLI to create an access token. For
instructions on installing the gcloud CLI, see the
Video Intelligence API Quickstart .
Before using any of the request data,
make the following replacements:
INPUT_URI : a Cloud Storage bucket that contains
the file you want to annotate, including the file name. Must
start with gs:// . For example:
"inputUri": "gs://cloud-videointelligence-demo/assistant.mp4",
PROJECT_NUMBER : The numeric identifier for your Google Cloud project
HTTP method and URL:
POST https://videointelligence.googleapis.com/v1/videos:annotate
Request JSON body:
{
"inputUri": " INPUT_URI ",
"features": ["EXPLICIT_CONTENT_DETECTION"]
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
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID "
}
If the response is successful, the Video Intelligence API returns the name for your
operation. The above shows an example of such a response, where:
PROJECT_NUMBER : the number of your project.
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
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress",
"annotationProgress": [
{
"inputUri": "/demomaker/gbikes_dinosaur.mp4",
"progressPercent": 100,
"startTime": "2020-03-26T00:16:35.112404Z",
"updateTime": "2020-03-26T00:16:55.937889Z"
}
]
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse",
"annotationResults": [
{
"inputUri": "/demomaker/gbikes_dinosaur.mp4",
"explicitAnnotation": {
"frames": [
{
"timeOffset": "0.056149s",
"pornographyLikelihood": "VERY_UNLIKELY"
},
{
"timeOffset": "1.166841s",
"pornographyLikelihood": "VERY_UNLIKELY"
},
...
{
"timeOffset": "41.678209s",
"pornographyLikelihood": "VERY_UNLIKELY"
},
{
"timeOffset": "42.596413s",
"pornographyLikelihood": "VERY_UNLIKELY"
}
]
}
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
Go
func explicitContentURI ( w io . Writer , file string ) error {
ctx := context . Background ()
client , err := video . NewClient ( ctx )
if err != nil {
return err
}
defer client . Close ()
op , err := client . AnnotateVideo ( ctx , & videopb . AnnotateVideoRequest {
Features : [] videopb . Feature {
videopb . Feature_EXPLICIT_CONTENT_DETECTION ,
},
InputUri : file ,
})
if err != nil {
return err
}
resp , err := op . Wait ( ctx )
if err != nil {
return err
}
// A single video was processed. Get the first result.
result := resp . AnnotationResults [ 0 ]. ExplicitAnnotation
for _ , frame := range result . Frames {
offset , _ := ptypes . Duration ( frame . TimeOffset )
fmt . Fprintf ( w , "%s - %s\n" , offset , frame . PornographyLikelihood . String ())
}
return nil
}
Java
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Instantiate a com.google.cloud.videointelligence.v1.VideoIntelligenceServiceClient
try ( VideoIntelligenceServiceClient client = VideoIntelligenceServiceClient . create ()) {
// Create an operation that will contain the response when the operation completes.
AnnotateVideoRequest request =
AnnotateVideoRequest . newBuilder ()
. setInputUri ( gcsUri )
. addFeatures ( Feature . EXPLICIT_CONTENT_DETECTION )
. build ();
OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > response =
client . annotateVideoAsync ( request );
System . out . println ( "Waiting for operation to complete..." );
// Print detected annotations and their positions in the analyzed video.
for ( VideoAnnotationResults result : response . get (). getAnnotationResultsList ()) {
for ( ExplicitContentFrame frame : result . getExplicitAnnotation (). getFramesList ()) {
double frameTime =
frame . getTimeOffset (). getSeconds () + frame . getTimeOffset (). getNanos () / 1e9 ;
System . out . printf ( "Location: %.3fs\n" , frameTime );
System . out . println ( "Adult: " + frame . getPornographyLikelihood ());
}
}
Node.js
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Google Cloud Video Intelligence library
const video = require ( ' @google-cloud/video-intelligence ' ). v1 ;
// Creates a client
const client = new video . VideoIntelligenceServiceClient ();
/**
* TODO(developer): Uncomment the following line before running the sample.
*/
// const gcsUri = 'GCS URI of video to analyze, e.g. gs://my-bucket/my-video.mp4';
const request = {
inputUri : gcsUri ,
features : [ 'EXPLICIT_CONTENT_DETECTION' ],
};
// Human-readable likelihoods
const likelihoods = [
'UNKNOWN' ,
'VERY_UNLIKELY' ,
'UNLIKELY' ,
'POSSIBLE' ,
'LIKELY' ,
'VERY_LIKELY' ,
];
// Detects unsafe content
const [ operation ] = await client . annotateVideo ( request );
console . log ( 'Waiting for operation to complete...' );
const [ operationResult ] = await operation . promise ();
// Gets unsafe content
const explicitContentResults =
operationResult . annotationResults [ 0 ]. explicitAnnotation ;
console . log ( 'Explicit annotation results:' );
explicitContentResults . frames . forEach ( result = > {
if ( result . timeOffset === undefined ) {
result . timeOffset = {};
}
if ( result . timeOffset . seconds === undefined ) {
result . timeOffset . seconds = 0 ;
}
if ( result . timeOffset . nanos === undefined ) {
result . timeOffset . nanos = 0 ;
}
console . log (
`\tTime: ${ result . timeOffset . seconds } ` +
`. ${ ( result . timeOffset . nanos / 1e6 ). toFixed ( 0 ) } s`
);
console . log (
`\t\tPornography likelihood: ${ likelihoods [ result . pornographyLikelihood ] } `
);
});
Python
For more information on installing and using the Cloud Video Intelligence API Client Library
for Python, refer to Cloud Video Intelligence API Client Libraries .
"""Detects explicit content from the GCS path to a video."""
video_client = videointelligence . VideoIntelligenceServiceClient ()
features = [ videointelligence . Feature . EXPLICIT_CONTENT_DETECTION ]
operation = video_client . annotate_video (
request = { "features" : features , "input_uri" : path }
)
print ( " \n Processing video for explicit content annotations:" )
result = operation . result ( timeout = 90 )
print ( " \n Finished processing." )
# Retrieve first result because a single video was processed
for frame in result . annotation_results [ 0 ] . explicit_annotation . frames :
likelihood = videointelligence . Likelihood ( frame . pornography_likelihood )
frame_time = frame . time_offset . seconds + frame . time_offset . microseconds / 1e6
print ( "Time: {} s" . format ( frame_time ))
print ( " \t pornography: {} " . format ( likelihood . name ))
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
