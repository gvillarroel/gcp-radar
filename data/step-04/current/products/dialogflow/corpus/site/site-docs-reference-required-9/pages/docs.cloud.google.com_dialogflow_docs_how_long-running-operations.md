---
title: "Long-running operations \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/how/long-running-operations
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/how/long-running-operations
  title: "Long-running operations \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Dialogflow
Dialogflow ES
Send feedback
Long-running operations
Stay organized with collections
Save and categorize content based on your preferences.
Some methods of the Dialogflow API return a long-running operation.
These methods are asynchronous,
and the operation may not be completed when the method returns a response.
You can check on the status or cancel operations.
Get an operation status
The following shows how to poll an operation's status.
If you have many operations to check,
you should rate limit your calls or
use the list method instead.
REST
Call the get method for the
Operations
type.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your GCP project ID
OPERATION_ID : your operation ID
API_VERSION : either v2 or v2beta1
HTTP method and URL:
GET https://dialogflow.googleapis.com/ API_VERSION /projects/ my-gcp-project /operations/ OPERATION_ID
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_ID " \ "https://dialogflow.googleapis.com/ API_VERSION /projects/ my-gcp-project /operations/ OPERATION_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_ID " } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://dialogflow.googleapis.com/ API_VERSION /projects/ my-gcp-project /operations/ OPERATION_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /operations/some-operation-name- OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.dialogflow. API_VERSION .SomeOperationType",
"state": "DONE"
},
"done": true,
...
}
When the operation has completed,
a state value of SUCCESSFUL is returned.
List and cancel operations
In addition to getting a specific operation,
you can list and cancel operations.
See the list and cancel methods for the
Operations
type.
The list results may contain operations unrelated to your current task,
so be sure to filter the results.
Previous
arrow_back
Detect intent with sentiment analysis
Next
Regionalization and data residency
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
