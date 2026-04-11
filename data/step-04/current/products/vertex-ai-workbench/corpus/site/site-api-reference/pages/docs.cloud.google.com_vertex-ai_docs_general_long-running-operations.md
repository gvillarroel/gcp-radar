---
title: "Long-running operations \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/general/long-running-operations
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/general/long-running-operations
  title: "Long-running operations \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Reference
Send feedback
Long-running operations
Stay organized with collections
Save and categorize content based on your preferences.
For some API calls, Vertex AI returns operation names. These API calls
start operations that require time to complete and are known as long-running
operations . For example, creating a dataset, deleting an endpoint, or exporting
a model are all long-running operations. You can use helper methods along with
operation names to get the status of or cancel a long-running operation, as
described in the following sections.
Note: If you are using the Google Cloud console, the console shows the status of the
operation and automatically updates the status when an operation is complete.
Getting the status of an operation
To get the operation status, use the operation name that was in the response
when you requested a long-running operation. For example, when you create a
dataset, Vertex AI returns an operation name such as:
projects/ PROJECT_NUMBER /locations/ LOCATION /datasets/ DATASET_ID /operations/ OPERATION_ID
You can poll the operation at regular intervals so that you know when an
operation completes.
REST
Before using any of the request data,
make the following replacements:
OPERATION_NAME : The operation name that is returned when you
start a long-running operation, such as
projects/ PROJECT_NUMBER /locations/ LOCATION /datasets/ DATASET_ID /operations/ OPERATION_ID
HTTP method and URL:
GET https:// LOCATION -aiplatform.googleapis.com/v1/ OPERATION_NAME
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https:// LOCATION -aiplatform.googleapis.com/v1/ OPERATION_NAME "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/ OPERATION_NAME " | Select-Object -Expand Content
In the output, the metadata object contains information that is
specific to the request type. The done field indicates whether the
operation is complete. If the operation is complete, the response
object contains results from the operation.
{
"name": "projects/123456789012/locations/us-central1/datasets/1234567890123456789/operations/1223344556677889900",
"metadata": {
"@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateDatasetOperationMetadata",
"genericMetadata": {
"createTime": "2020-10-12T16:00:44.686500Z",
"updateTime": "2020-10-12T16:01:06.115081Z"
}
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.aiplatform.v1.Dataset",
"name": "projects/123456789012/locations/us-central1/datasets/1234567890123456789",
"displayName": "image_dataset",
"metadataSchemaUri": "gs://google-cloud-aiplatform/schema/dataset/metadata/image_1.0.0.yaml",
"labels": {
"aiplatform.googleapis.com/dataset_metadata_schema": "IMAGE"
},
"metadata": {
"dataItemSchemaUri": "gs://google-cloud-aiplatform/schema/dataset/dataitem/image_1.0.0.yaml"
}
}
}
Canceling an Operation
You can cancel a long-running operation so that you can stop it before the
operation completes. When you successfully cancel an operation, the operation
isn't deleted; instead, the operation stops with an error code of 1 and
with a CANCELLED message. Note that the cancellation is not guaranteed to
succeed.
REST
Before using any of the request data,
make the following replacements:
OPERATION_NAME : The operation name that is returned when you
start a long-running operation, such as
projects/ PROJECT_NUMBER /locations/ LOCATION /datasets/ DATASET_ID /operations/ OPERATION_ID
HTTP method and URL:
POST https:// LOCATION -aiplatform.googleapis.com/v1/ OPERATION_NAME :cancel
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
Execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https:// LOCATION -aiplatform.googleapis.com/v1/ OPERATION_NAME :cancel"
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/ OPERATION_NAME :cancel" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
