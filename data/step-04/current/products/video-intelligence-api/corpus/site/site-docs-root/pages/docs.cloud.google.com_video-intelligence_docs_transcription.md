---
title: "Get audio track transcription \_|\_ Video Intelligence API \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/transcription
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/transcription
  title: "Get audio track transcription \_|\_ Video Intelligence API \_|\_ Google\
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
Get audio track transcription
Stay organized with collections
Save and categorize content based on your preferences.
The Video Intelligence API transcribes speech to text from supported video
files . There are two
supported models, "default" and "video."
Request Speech Transcription for a Video
REST
Send the process request
The following shows how to send a POST request to the
videos:annotate method.
The example uses the access token for a service account set up for the project
using the Google Cloud CLI. For instructions on installing the Google Cloud CLI,
setting up a project with a service
account, and obtaining an access token, see the
Video Intelligence quickstart .
Before using any of the request data,
make the following replacements:
INPUT_URI : a Cloud Storage bucket that contains
the file you want to annotate, including the file name. Must
start with gs:// . For example:
"inputUri": "gs://cloud-videointelligence-demo/assistant.mp4",
LANGUAGE_CODE : [Optional] See supported languages
PROJECT_NUMBER : The numeric identifier for your Google Cloud project
HTTP method and URL:
POST https://videointelligence.googleapis.com/v1/videos:annotate
Request JSON body:
{
"inputUri": " INPUT_URI ",
"features": ["SPEECH_TRANSCRIPTION"],
"videoContext": {
"speechTranscriptionConfig": {
"languageCode": " LANGUAGE_CODE ",
"enableAutomaticPunctuation": true,
"filterProfanity": true
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
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID "
}
If the request is successful, Video Intelligence returns the name for your operation. The
above shows an example of such a response, where project-number
is the number of your project and operation-id is the ID of the long-running operation created for the request.
Get the results
To get the results of your request, you must send a GET , using the operation name returned from the
call to videos:annotate , as shown in the following example.
Before using any of the request data,
make the following replacements:
OPERATION_NAME : the name of the operation as
returned by Video Intelligence API. The operation name has the format
projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID
Note: The done field is only returned when its value is
True . It's not included in responses for which the operation has not completed.
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
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress",
"annotationProgress": [{
"inputUri": "/bucket-name-123/sample-video-short.mp4",
"progressPercent": 100,
"startTime": "2018-04-09T15:19:38.919779Z",
"updateTime": "2018-04-09T15:21:17.652470Z"
}]
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse",
"annotationResults": [
{
"speechTranscriptions": [
{
"alternatives": [
{
"transcript": "and laughing going to talk about is the video intelligence API how many of you saw it at the keynote yesterday ",
"confidence": 0.8442509,
"words": [
{
"startTime": "0.200s",
"endTime": "0.800s",
"word": "and"
},
{
"startTime": "0.800s",
"endTime": "1.100s",
"word": "laughing"
},
{
"startTime": "1.100s",
"endTime": "1.200s",
"word": "going"
},
...
Download annotation results
Copy the annotation from the source to the destination bucket: (see Copy files and objects )
gcloud storage cp gcs_uri gs://my-bucket
Note: If the output gcs uri is provided by the user, then the annotation is stored in that gcs uri.
Go
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
func speechTranscriptionURI ( w io . Writer , file string ) error {
ctx := context . Background ()
client , err := video . NewClient ( ctx )
if err != nil {
return err
}
defer client . Close ()
op , err := client . AnnotateVideo ( ctx , & videopb . AnnotateVideoRequest {
Features : [] videopb . Feature {
videopb . Feature_SPEECH_TRANSCRIPTION ,
},
VideoContext : & videopb . VideoContext {
SpeechTranscriptionConfig : & videopb . SpeechTranscriptionConfig {
LanguageCode : "en-US" ,
EnableAutomaticPunctuation : true ,
},
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
result := resp . AnnotationResults [ 0 ]
for _ , transcription := range result . SpeechTranscriptions {
// The number of alternatives for each transcription is limited by
// SpeechTranscriptionConfig.MaxAlternatives.
// Each alternative is a different possible transcription
// and has its own confidence score.
for _ , alternative := range transcription . GetAlternatives () {
fmt . Fprintf ( w , "Alternative level information:\n" )
fmt . Fprintf ( w , "\tTranscript: %v\n" , alternative . GetTranscript ())
fmt . Fprintf ( w , "\tConfidence: %v\n" , alternative . GetConfidence ())
fmt . Fprintf ( w , "Word level information:\n" )
for _ , wordInfo := range alternative . GetWords () {
startTime := wordInfo . GetStartTime ()
endTime := wordInfo . GetEndTime ()
fmt . Fprintf ( w , "\t%4.1f - %4.1f: %v (speaker %v)\n" ,
float64 ( startTime . GetSeconds ()) + float64 ( startTime . GetNanos ()) * 1e-9 , // start as seconds
float64 ( endTime . GetSeconds ()) + float64 ( endTime . GetNanos ()) * 1e-9 , // end as seconds
wordInfo . GetWord (),
wordInfo . GetSpeakerTag ())
}
}
}
return nil
}
Java
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Instantiate a com.google.cloud.videointelligence.v1.VideoIntelligenceServiceClient
try ( VideoIntelligenceServiceClient client = VideoIntelligenceServiceClient . create ()) {
// Set the language code
SpeechTranscriptionConfig config =
SpeechTranscriptionConfig . newBuilder ()
. setLanguageCode ( "en-US" )
. setEnableAutomaticPunctuation ( true )
. build ();
// Set the video context with the above configuration
VideoContext context = VideoContext . newBuilder (). setSpeechTranscriptionConfig ( config ). build ();
// Create the request
AnnotateVideoRequest request =
AnnotateVideoRequest . newBuilder ()
. setInputUri ( gcsUri )
. addFeatures ( Feature . SPEECH_TRANSCRIPTION )
. setVideoContext ( context )
. build ();
// asynchronously perform speech transcription on videos
OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > response =
client . annotateVideoAsync ( request );
System . out . println ( "Waiting for operation to complete..." );
// Display the results
for ( VideoAnnotationResults results :
response . get ( 600 , TimeUnit . SECONDS ). getAnnotationResultsList ()) {
for ( SpeechTranscription speechTranscription : results . getSpeechTranscriptionsList ()) {
try {
// Print the transcription
if ( speechTranscription . getAlternativesCount () > 0 ) {
SpeechRecognitionAlternative alternative = speechTranscription . getAlternatives ( 0 );
System . out . printf ( "Transcript: %s\n" , alternative . getTranscript ());
System . out . printf ( "Confidence: %.2f\n" , alternative . getConfidence ());
System . out . println ( "Word level information:" );
for ( WordInfo wordInfo : alternative . getWordsList ()) {
double startTime =
wordInfo . getStartTime (). getSeconds () + wordInfo . getStartTime (). getNanos () / 1e9 ;
double endTime =
wordInfo . getEndTime (). getSeconds () + wordInfo . getEndTime (). getNanos () / 1e9 ;
System . out . printf (
"\t%4.2fs - %4.2fs: %s\n" , startTime , endTime , wordInfo . getWord ());
}
} else {
System . out . println ( "No transcription found" );
}
} catch ( IndexOutOfBoundsException ioe ) {
System . out . println ( "Could not retrieve frame: " + ioe . getMessage ());
}
}
}
}
Node.js
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Google Cloud Video Intelligence library
const videoIntelligence = require ( ' @google-cloud/video-intelligence ' );
// Creates a client
const client = new videoIntelligence . VideoIntelligenceServiceClient ();
/**
* TODO(developer): Uncomment the following line before running the sample.
*/
// const gcsUri = 'GCS URI of video to analyze, e.g. gs://my-bucket/my-video.mp4';
async function analyzeVideoTranscript () {
const videoContext = {
speechTranscriptionConfig : {
languageCode : 'en-US' ,
enableAutomaticPunctuation : true ,
},
};
const request = {
inputUri : gcsUri ,
features : [ 'SPEECH_TRANSCRIPTION' ],
videoContext : videoContext ,
};
const [ operation ] = await client . annotateVideo ( request );
console . log ( 'Waiting for operation to complete...' );
const [ operationResult ] = await operation . promise ();
// There is only one annotation_result since only
// one video is processed.
const annotationResults = operationResult . annotationResults [ 0 ];
for ( const speechTranscription of annotationResults . speechTranscriptions ) {
// The number of alternatives for each transcription is limited by
// SpeechTranscriptionConfig.max_alternatives.
// Each alternative is a different possible transcription
// and has its own confidence score.
for ( const alternative of speechTranscription . alternatives ) {
console . log ( 'Alternative level information:' );
console . log ( `Transcript: ${ alternative . transcript } ` );
console . log ( `Confidence: ${ alternative . confidence } ` );
console . log ( 'Word level information:' );
for ( const wordInfo of alternative . words ) {
const word = wordInfo . word ;
const start_time =
wordInfo . startTime . seconds + wordInfo . startTime . nanos * 1e-9 ;
const end_time =
wordInfo . endTime . seconds + wordInfo . endTime . nanos * 1e-9 ;
console . log ( '\t' + start_time + 's - ' + end_time + 's: ' + word );
}
}
}
}
analyzeVideoTranscript ();
Python
To authenticate to Video Intelligence, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
"""Transcribe speech from a video stored on GCS."""
from google.cloud import videointelligence
video_client = videointelligence . VideoIntelligenceServiceClient ()
features = [ videointelligence . Feature . SPEECH_TRANSCRIPTION ]
config = videointelligence . SpeechTranscriptionConfig (
language_code = "en-US" , enable_automatic_punctuation = True
)
video_context = videointelligence . VideoContext ( speech_transcription_config = config )
operation = video_client . annotate_video (
request = {
"features" : features ,
"input_uri" : path ,
"video_context" : video_context ,
}
)
print ( " \n Processing video for speech transcription." )
result = operation . result ( timeout = 600 )
# There is only one annotation_result since only
# one video is processed.
annotation_results = result . annotation_results [ 0 ]
for speech_transcription in annotation_results . speech_transcriptions :
# The number of alternatives for each transcription is limited by
# SpeechTranscriptionConfig.max_alternatives.
# Each alternative is a different possible transcription
# and has its own confidence score.
for alternative in speech_transcription . alternatives :
print ( "Alternative level information:" )
print ( "Transcript: {} " . format ( alternative . transcript ))
print ( "Confidence: {} \n " . format ( alternative . confidence ))
print ( "Word level information:" )
for word_info in alternative . words :
word = word_info . word
start_time = word_info . start_time
end_time = word_info . end_time
print (
" \t {} s - {} s: {} " . format (
start_time . seconds + start_time . microseconds * 1e-6 ,
end_time . seconds + end_time . microseconds * 1e-6 ,
word ,
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
