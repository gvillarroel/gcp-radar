---
title: "Create and update app instances \_|\_ Vertex AI Vision \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/create-app-instances
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/build-app
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/create-app-instances
  title: "Create and update app instances \_|\_ Vertex AI Vision \_|\_ Google Cloud\
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
Create and update app instances
Stay organized with collections
Save and categorize content based on your preferences.
After you build and deploy apps, you can
create and update these app instances using the Google Cloud console or command line.
Create an app instance
REST
To create an app instance, send a POST request by using the
projects.locations.applications.createApplicationInstances
method.
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : Your Google Cloud
project number .
LOCATION_ID : The region where you are using
Vertex AI Vision. For example: us-central1 , europe-west4 . See available regions .
APPLICATION_ID : The ID of your target application.
HTTP method and URL:
POST https://visionai.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /applications/ APPLICATION_ID :createApplicationInstances
Request JSON body:
{
"applicationInstances": [
{
"instance": {
"inputResources": [
{
"consumerNode": " input-stream ",
"inputResource": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /clusters/application-cluster-0/streams/ STREAM_ID "
}
]
},
"instanceId": " INSTANCE_ID "
},
{
"instance": {
[...]
},
[...]
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://visionai.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /applications/ APPLICATION_ID :createApplicationInstances"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://visionai.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /applications/ APPLICATION_ID :createApplicationInstances" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.visionai.v1.OperationMetadata",
"createTime": " [...] ",
"Target": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /applications/ APPLICATION_ID "
"Verb": "update"
"apiVersion": "v1"
},
"done": false
}
Update an app instance
After you create an app and get an app instance ID , you can
modify the following app instance resources:
Input stream * : You can change the input stream asset.
Output warehouse asset : You can update the output asset if you
connected to a warehouse and want to write the output to a different
warehouse ( corpus ) asset.
Output stream * : You can overwrite the output stream if you want
to update the output stream from an auto generated stream to a specific
stream you create.
* The input stream and output stream must be under the same
cluster for the same application instance.
REST
To update an app instance, send a POST request by using the
projects.locations.applications.updateApplicationInstances
method.
The following code sample updates the input stream ( inputResources ), and
all output resources associated with the app instance ( outputResources ).
Before using any of the request data,
make the following replacements:
PROJECT : Your Google Cloud
project ID or
project number .
LOCATION_ID : The region where you are using
Vertex AI Vision. For example: us-central1 , europe-west4 . See available regions .
APPLICATION_ID : The ID of your target application.
INSTANCE_NAME : The full resource name of the app instance. For example:
projects/ PROJECT /locations/ LOCATION_ID /applications/ APPLICATION_ID /instances/ INSTANCE_ID
inputResources : The input resource (or resources) for the current application
instance. This is an array of objects that contain the following fields:
consumerNode : The name of graph node who receives the input resource.
inputResource : The full input resource name.
outputResources : All the output resources associated to one application instance.
This is an array of objects that contain the following fields:
outputResource : The full output resource name.
producerNode : The name of graph node who produces the output resource
name.
HTTP method and URL:
POST https://visionai.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /applications/ APPLICATION_ID :updateApplicationInstances
Request JSON body:
{
"applicationInstances": [
{
"instance": {
"name": " INSTANCE_NAME ",
"inputResources": [
{
"consumerNode": " input-stream ",
"inputResource": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /clusters/application-cluster-0/streams/ STREAM_ID "
}
],
"outputResources":[
{
"outputResource": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /corpora/ CORPUS_ID /assets/ ASSET_ID ",
"producerNode": " warehouse "
},
{
"outputResource": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /clusters/application-cluster-0/streams/ STREAM_ID ",
"producerNode": " occupancy-count "
}
]
},
}
],
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://visionai.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /applications/ APPLICATION_ID :updateApplicationInstances"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://visionai.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /applications/ APPLICATION_ID :updateApplicationInstances" | Select-Object -Expand Content
Manage large scale apps
The deploy and undeploy methods are valid for applications with less than
20 instances. If your app has more than 20 instances you must create and
remove instances incrementally with the API. The recommended workflow is as
follows:
Create your app.
Add 1-20 experimental instances.
Deploy your application.
Verify your app works as expected.
Use the createApplicationInstances method to
incrementally add more inputs to
the deployed application.
Allow app to run.
Use the deleteApplicationInstances method to
incrementally remove inputs from
deployed applications.
Undeploy the application.
Caution: For a single application there can only be one update request
running at a time. You are responsible for queueing these types of requests,
and performing the necessary retries if there is a failure.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
