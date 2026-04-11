---
title: "Global and multi-regional endpoints \_|\_ Cloud Translation \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/translate/docs/advanced/endpoints
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translate/docs/intro-to-v3
source_metadata:
  url: https://docs.cloud.google.com/translate/docs/advanced/endpoints
  title: "Global and multi-regional endpoints \_|\_ Cloud Translation \_|\_ Google\
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
Stay organized with collections
Save and categorize content based on your preferences.
Global and multi-regional endpoints
Cloud Translation - Advanced offers a global endpoint as well as EU and US
multi-regional endpoints:
translate.googleapis.com (global)
translate-eu.googleapis.com
translate-us.googleapis.com
If you use a multi-regional endpoint, your data at-rest and machine learning
processing stays within the continental boundaries of the EU or US. These
multi-regional endpoints are important if your data's location must be
controlled to comply with local regulatory requirements.
If you don't specify an endpoint, Cloud Translation - Advanced uses the global
endpoint by default.
Global versus multi-regional endpoints
When using a multi-regional endpoint, there are some difference when compared to
using the global endpoint:
Text translations that use custom AutoML models are not supported.
You can use only the pre-trained NMT model.
Features that are not GA (still in Preview ) are not supported.
Calls through the global endpoint cannot access resources that were created by
using a multi-regional endpoint. Similarly, calls through a multi-regional
endpoint cannot access resources that were created by using the global
endpoint.
Restricting resource locations
Organization policy administrators can restrict the regions available for
Cloud Translation - Advanced resources by creating a resource locations
constraint . If
set, Cloud Translation - Advanced users would be able to create resources only in a
particular location.
Restricting global API endpoint usage
To help enforce the use of regional endpoints, organization policy
administrators can use the constraints/gcp.restrictEndpointUsage organization
policy constraint to block requests to the global API endpoint. For more
information, see
Restrict endpoint usage .
Specify an endpoint
The following example shows a text translation that uses a multi-regional
endpoint. If you use the client libraries, set the API endpoint as part of the
client options. For some examples, see Setting the location using client
libraries
in the Cloud Natural Language API guide.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER_OR_ID : the numeric or alphanumeric ID of your Google Cloud project
ENDPOINT : Regional endpoint, which determines where your data
resides. For example, translate-eu.googleapis.com .
LOCATION : Region where you want to run this operation. You must
pick a region inside the continental boundary of the regional endpoint. For
example, if you use the translate-eu.googleapis.com endpoint,
specify a region in Europe such as europe-west1 .
HTTP method and URL:
POST https:// ENDPOINT /v3/projects/ PROJECT_NUMBER_OR_ID /locations/ LOCATION :translateText
Request JSON body:
{
"model": "projects/ PROJECT_NUMBER_OR_ID /locations/ LOCATION /models/general/base",
"sourceLanguageCode": "en",
"targetLanguageCode": "de",
"contents": ["Come here!"]
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_NUMBER_OR_ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// ENDPOINT /v3/projects/ PROJECT_NUMBER_OR_ID /locations/ LOCATION :translateText"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_NUMBER_OR_ID " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// ENDPOINT /v3/projects/ PROJECT_NUMBER_OR_ID /locations/ LOCATION :translateText" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"translations": [
{
"translatedText": "Komm her!",
"model": "projects/ PROJECT_NUMBER_OR_ID /locations/ LOCATION /models/general/base"
}
]
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
