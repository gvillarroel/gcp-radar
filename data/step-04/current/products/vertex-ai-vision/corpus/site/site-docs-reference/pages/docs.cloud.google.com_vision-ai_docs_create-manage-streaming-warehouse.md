---
title: "Create and update a Streaming video warehouse \_|\_ Vertex AI Vision \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/create-manage-streaming-warehouse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/build-app
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/create-manage-streaming-warehouse
  title: "Create and update a Streaming video warehouse \_|\_ Vertex AI Vision \_\
    |\_ Google Cloud Documentation"
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
Create and update a Streaming video warehouse
Stay organized with collections
Save and categorize content based on your preferences.
A Vision Warehouse is a component you can add to your app to store
model output and streaming data.
Create a streaming video warehouse
To connect other component nodes of your app graph to a warehouse you must
first create a streaming video warehouse.
Caution : Vertex AI Vision doesn't support a
stream's usage in multiple apps connected to a warehouse ; one stream can be associated with
only one warehouse export destination.
Note: You can also create a streaming video warehouse from the application graph builder page.
See Build an application for more details.
Console
Open the Warehouses tab of the Vertex AI Vision dashboard.
Go to the Warehouses tab
Select add Create .
Add a name for the warehouse and choose a
time to live (TTL)
period for assets stored in the warehouse. These values can be modified
later.
After a warehouse is created
you can add the warehouse to an application graph.
REST & CMD LINE
Creates a new corpus resource under the given project with the option to
specify the corpus display name, description and a TTL.
Before using any of the request data,
make the following replacements:
REGIONALIZED_ENDPOINT : Endpoint might include a prefix matching the LOCATION_ID such
as europe-west4- . See more about
regionalized endpoints .
PROJECT_NUMBER : Your Google Cloud
project number .
LOCATION_ID : The region where you are using
Vertex AI Vision. For example: us-central1 , europe-west4 . See available regions .
DISPLAY_NAME : Display name for the warehouse.
WAREHOUSE_DESCRIPTION : The description of the warehouse ( corpus ).
TIME_TO_LIVE : The amount of time to live (TTL) for all assets under a corpus, or
the TTL of a specific asset. For example, for a corpus with assets with a TTL of 100 days,
provide the value 8640000 (seconds).
HTTP method and URL:
POST https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /corpora
Request JSON body:
{
"display_name": " DISPLAY_NAME ",
"description": " WAREHOUSE_DESCRIPTION ",
"type": "STREAM_VIDEO",
"default_ttl": {
"seconds": TIME_TO_LIVE
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /corpora"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /corpora" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /warehouseoperations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.visionai.v1.CreateCorpusMetadata"
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.visionai.v1.Corpus",
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /corpora/ CORPUS_ID ",
"displayName": " DISPLAY_NAME ",
"description": " WAREHOUSE_DESCRIPTION ",
"type": "STREAM_VIDEO",
"defaultTtl": " TIME_TO_LIVE "
}
}
Update a streaming video warehouse
Updates an existing corpus under the given project with the option to update
display name, description, default TTL, or update all available fields.
REST & CMD LINE
Updates an existing corpus resource under the given project. This sample
shows you how to update the corpus display name, but you can also update
description, TTL, or all fields at once using the same URL format and
updated request body.
Before using any of the request data,
make the following replacements:
REGIONALIZED_ENDPOINT : Endpoint might include a prefix matching the LOCATION_ID such
as europe-west4- . See more about
regionalized endpoints .
PROJECT_NUMBER : Your Google Cloud
project number .
LOCATION_ID : The region where you are using
Vertex AI Vision. For example: us-central1 , europe-west4 . See available regions .
CORPUS_ID : The ID of your target corpus.
?updateMask= fieldToUpdate : One of the available fields you can
apply an updateMask to. Specify the corresponding new field value in the request
body. This new value replaces the existing field value. Available fields:
Display name: ?updateMask=display_name
Description: ?updateMask=description
Default time-to-live (TTL): ?updateMask=default_ttl
Update all fields: ?updateMask=*
UPDATED_FIELD_VALUE : A new value for the specified field. In this example, a
new user-provided display name for the warehouse resource.
HTTP method and URL:
PATCH https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /corpora/ CORPUS_ID ?update_mask= display_name
Request JSON body:
{
"displayName": " UPDATED_FIELD_VALUE ",
"description": "Original description",
"defaultTtl": {
"seconds": "7800"
}
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /corpora/ CORPUS_ID ?update_mask= display_name "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// warehouse-visionai.googleapis.com /v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /corpora/ CORPUS_ID ?update_mask= display_name " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION_ID /corpora/ CORPORA_ID ",
"displayName": " UPDATED_FIELD_VALUE ",
"description": "Original description",
"defaultTtl": "7800s"
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
