---
title: "Recognize celebrities \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/celebrity-recognition
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/streaming/docker-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/celebrity-recognition
  title: "Recognize celebrities \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
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
Recognize celebrities
Stay organized with collections
Save and categorize content based on your preferences.
Caution: This feature is deprecated and will no longer be available on Google Cloud after September 16, 2025.
This page describes how to recognize celebrities in a video using the
Video Intelligence API.
The Video Intelligence API can inspect your video content to detect and track
human faces that appear in the input video or video segment. When it
recognizes a face, the Video Intelligence API can compare the face against
a collection of celebrities collated by Google.
If a match is found, the Video Intelligence API provides the
Knowledge Graph Machine ID (MID)
and the name of the celebrity and a bounding box indicating where the
face appears in the video.
Request access to the feature
This feature is intended for use by media & entertainment companies
or approved partners on professionally-produced media content. To
request API access, please submit
this form
with information about your company and use case.
Recognize a celebrity in a video
The following code samples demonstrate how to recognize a celebrity's
face in a video. The sample uses the optional outputUri field
in the request to specify a location for the annotation results.
Note: The outputUri field indicates a Cloud Storage bucket to
store the annotation output. Before sending a request, ensure that
your service account has write access to the output Cloud Storage
bucket.
REST
Send the request
The following shows how to send a POST request to the
annotate method. The example uses the access token for
a service account set up for the project using the Google Cloud CLI. For
instructions on installing the Google Cloud CLI, setting up a project with a service
account, and obtaining an access token, see the
Video Intelligence quickstart .
Before using any of the request data,
make the following replacements:
INPUT_URI : the Cloud Storage location of the
video file you want to annotate.
OUTPUT_URI : the Cloud Storage location where you
want the results saved.
PROJECT_NUMBER : The numeric identifier for your Google Cloud project
HTTP method and URL:
POST https://videointelligence.googleapis.com/v1p3beta1/videos:annotate
Request JSON body:
{
"inputUri": "gs:// INPUT_URI ",
"outputUri": "gs:// OUTPUT_URI ",
"features": ["CELEBRITY_RECOGNITION"]
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_NUMBER " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://videointelligence.googleapis.com/v1p3beta1/videos:annotate"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_NUMBER " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://videointelligence.googleapis.com/v1p3beta1/videos:annotate" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID "
}
If the request is successful, the Video Intelligence returns the name
for your operation.
Get the results
To get the results of your request, you must send a GET request to
the projects.operations
resource. The following shows how to send such a request.
Before using any of the request data,
make the following replacements:
OPERATION_NAME : the name field returned
from the call to Video Intelligence API. This is a value in the format:
projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID ,
where:
PROJECT_NUMBER is the number
of your Google Cloud project,
LOCATION_ID is the cloud region where annotation took place (for
example: us-east1 , us-west1 , europe-west1 ,
asia-east1 ),
OPERATION_ID is the ID of the long-running operation.
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
"@type": "type.googleapis.com/google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress",
"annotationProgress": [
{
"inputUri": " INPUT_URI ",
"progressPercent": 100,
"startTime": "2020-05-12T19:36:09.110351Z",
"updateTime": "2020-05-12T19:36:17.519069Z"
}
]
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse",
"annotationResults": [
{
...
}
]
}
}
The output from annotating the video should look similar to the
following example.
{
"annotationResults": [ {
"inputUri": " INPUT_URI ,
"segment": {
"startTimeOffset": {
},
"endTimeOffset": {
"seconds": 19,
"nanos": 519500000
}
},
"celebrityRecognitionAnnotations": {
"celebrityTracks": [ {
"celebrities": [...],
"faceTrack": {...}
}, {
"celebrities": [ {
"celebrity": {
"name": "video-intelligence/ CELEBRITY_MID ",
"displayName": " CELEBRITY_NAME/var>"
},
"confidence": 0.81873637
} ],
"faceTrack": {
"segment": {
"startTimeOffset": {
"seconds": 1,
"nanos": 459791000
},
"endTimeOffset": {
"seconds": 3,
"nanos": 712041000
}
},
"timestampedObjects": [ {
"normalizedBoundingBox": {...},
"timeOffset": {...}
}, {
"normalizedBoundingBox": {
"left": 0.38046876,
"top": 0.26249999,
"right": 0.60312498,
"bottom": 0.72361112
},
"timeOffset": {
"seconds": 1,
"nanos": 459791000
}
}, {
"normalizedBoundingBox": {...},
"timeOffset": {...}
}]
}
}, {
"celebrities": [...],
"faceTrack": {...}
} ]
}
...
}
Request celebrity opt-out
If you are a celebrity and would like not to be included in this
feature for either the Cloud Vision or Video Intelligence API please
submit
this form .
Report misuse
If you suspect that the Video Intelligence API celebrity recognition feature
is being misused in any way, please let us know using
this form.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
