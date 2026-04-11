---
title: "Long-running operations (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/translate/docs/advanced/long-running-operation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/translate/docs/intro-to-v3
source_metadata:
  url: https://docs.cloud.google.com/translate/docs/advanced/long-running-operation
  title: "Long-running operations (Advanced) \_|\_ Cloud Translation \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Translation
Guides
Send feedback
Long-running operations (Advanced)
Stay organized with collections
Save and categorize content based on your preferences.
Some methods of the Cloud Translation API return a long-running operation.
These methods are asynchronous, and the operation may not be completed when
the method returns a response. You can check on the status of an operation,
or cancel an operation.
Operation status
The following shows how to poll an operation's status.
REST
Call the get method for the
operation
resource.
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER_OR_ID : the numeric or alphanumeric ID of your Google Cloud project
location-id : the location you chose for your Cloud Storage bucket
operation-id : operation ID you received above
HTTP method and URL:
GET https://translation.googleapis.com/v3/projects/ PROJECT_NUMBER_OR_ID /locations/ location-id /operations/ operation-id
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_NUMBER_OR_ID " \ "https://translation.googleapis.com/v3/projects/ PROJECT_NUMBER_OR_ID /locations/ location-id /operations/ operation-id "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_NUMBER_OR_ID " } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://translation.googleapis.com/v3/projects/ PROJECT_NUMBER_OR_ID /locations/ location-id /operations/ operation-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ project-number /locations/ location-id /operations/ operation-id ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.translation.v3.SomeOperationMetadata",
"state": "SUCCEEDED",
"submitTime": "2019-11-27T22:59:40Z"
}
}
When the operation has completed,
a state value of SUCCEEDED is returned.
Operation cancellation
The following shows how to cancel an operation.
REST
Call the cancel method on the operation
resource.
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER_OR_ID : the numeric or alphanumeric ID of your Google Cloud project.
LOCATION : The location you chose when you started the
operation.
OPERATION_ID : The ID of the operation to cancel.
HTTP method and URL:
POST https://translation.googleapis.com/v3/projects/ PROJECT_NUMBER_OR_ID /locations/ LOCATION_ID /operations/ OPERATION_ID :cancel
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_NUMBER_OR_ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://translation.googleapis.com/v3/projects/ PROJECT_NUMBER_OR_ID /locations/ LOCATION_ID /operations/ OPERATION_ID :cancel"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_NUMBER_OR_ID " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://translation.googleapis.com/v3/projects/ PROJECT_NUMBER_OR_ID /locations/ LOCATION_ID /operations/ OPERATION_ID :cancel" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
Additional resources
For help on resolving common issues or errors, see the
Troubleshooting page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
