---
title: "Search Batch Video Warehouse data \_|\_ Vertex AI Vision \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-search
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/build-app
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-search
  title: "Search Batch Video Warehouse data \_|\_ Vertex AI Vision \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Vision
Guides
Send feedback
Search Batch Video Warehouse data
Stay organized with collections
Save and categorize content based on your preferences.
Prerequisite: create a Batch Video Warehouse with a deployed index.
Search Batch Video Warehouse data in the console
Console
Open the Warehouses tab of the Vertex AI Vision dashboard.
Go to the Warehouses tab
Find the index endpoint you want to search, and click Search Assets .
You will see a list of videos (each corresponding to an asset), as well
as one search bars at the top. You can either click a video to view it,
or begin to search for videos.
To begin searching, enter a text query or upload an image as the search
query.
You will see a list of video clips on the right side of the search result
page, each of which corresponds to a continuous video clip in the
assets.
The video clips are ranked by relevance to the input query.
You can use the Filters section on the left side of the search result
page to refine your search. Each filter criteria consists of a data
schema key and the annotation value you want to search.
After specifying the filter criteria, click Search to
execute the search.
Search Batch Video Warehouse data using the command line
To search the videos ( assets ) in your
corpus ( corpus ), populate the searchIndexEndpoint
request body with the content that you would
like to find.
This content comes in a few different formats:
text_query or image_query : Query to search with.
Optional criteria : Filter criteria on user provided annotations.
In the following example, consider a corpus that contains natural scenery
videos.
To retrieve all assets that are relevant to "sunset at beach" and tagged with
the annotation "state": "California" , send the following request:
REST & CMD LINE
Before using any of the request data,
make the following replacements:
REGIONALIZED_ENDPOINT : Endpoint might include a prefix matching the LOCATION_ID such
as europe-west4- . See more about
regionalized endpoints .
PROJECT_NUMBER : Your Google Cloud
project number .
LOCATION_ID : The region where you are using
Vertex AI Vision. For example: us-central1 , europe-west4 . See available regions .
INDEX_ENDPOINT_ID : The ID of your target index endpoint.
HTTP method and URL:
POST https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /indexEndpoints/ INDEX_ENDPOINT_ID :searchIndexEndpoint
Request JSON body:
{
"text_query": " sunset at beach ",
"criteria": [
{
"field": " state ",
"text_array": {
"txt_values": [
" California "
]
}
}
]
}
To send your request, choose one of these options:
curl
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /indexEndpoints/ INDEX_ENDPOINT_ID :searchIndexEndpoint "
PowerShell
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /indexEndpoints/ INDEX_ENDPOINT_ID :searchIndexEndpoint " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"searchResultItems": [
{
"asset": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /corpora/ CORPUS_ID /assets/ ASSET_ID_1 "
},
{
"asset": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /corpora/ CORPUS_ID /assets/ ASSET_ID_2 "
}
]
}
If you have an image of a sunset at a beach, you can also use it as a search query by
sending the following request (input image is in base64 encoding format):
REST & CMD LINE
Before using any of the request data,
make the following replacements:
REGIONALIZED_ENDPOINT : Endpoint might include a prefix matching the LOCATION_ID such
as europe-west4- . See more about
regionalized endpoints .
PROJECT_NUMBER : Your Google Cloud
project number .
LOCATION_ID : The region where you are using
Vertex AI Vision. For example: us-central1 , europe-west4 . See available regions .
INDEX_ENDPOINT_ID : The ID of your target index endpoint.
HTTP method and URL:
POST https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /indexEndpoints/ INDEX_ENDPOINT_ID :searchIndexEndpoint
Request JSON body:
{
"image_query": {
"input_image": " IMAGE_BYTES "
},
"criteria": [
{
"field": " state ",
"text_array": {
"txt_values": [
" California "
]
}
}
]
}
To send your request, choose one of these options:
curl
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /indexEndpoints/ INDEX_ENDPOINT_ID :searchIndexEndpoint "
PowerShell
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /indexEndpoints/ INDEX_ENDPOINT_ID :searchIndexEndpoint " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"searchResultItems": [
{
"asset": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /corpora/ CORPUS_ID /assets/ ASSET_ID_1 "
},
{
"asset": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /corpora/ CORPUS_ID /assets/ ASSET_ID_2 "
}
]
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
