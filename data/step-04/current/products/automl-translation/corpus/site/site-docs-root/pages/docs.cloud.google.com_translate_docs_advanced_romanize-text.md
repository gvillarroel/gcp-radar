---
title: "Romanize text \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translate/docs/advanced/romanize-text
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/translate/docs/intro-to-v3
source_metadata:
  url: https://docs.cloud.google.com/translate/docs/advanced/romanize-text
  title: "Romanize text \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
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
Romanize text
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Romanization converts non-Latin script to Latin script. The Latin script is
based on the pronunciation of the source language. For example,
Cloud Translation romanizes the following Japanese characters こんにちは世界
into Kon'nichiwa sekai .
To see which languages can be romanized, see Supported languages .
Before you begin
Before you can start using the Cloud Translation API, you must have a project that has
the Cloud Translation API enabled, and you must have the appropriate credentials. You can
also install client libraries for common programming languages to help you make
calls to the API. For more information, see the Setup page.
Romanize text
REST
Use the
romanizeText
method to convert non-Latin script into Latin script.
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER_OR_ID : the numeric or alphanumeric ID of your Google Cloud project
LOCATION : Region where you want to run this operation. For
example, us-central1 .
SOURCE_LANGUAGE : The language code of the source text.
SOURCE_TEXT : Text in the source language to romanize.
HTTP method and URL:
POST https://translation.googleapis.com/v3/projects/ PROJECT_NUMBER_OR_ID /locations/ LOCATION :romanizeText
Request JSON body:
{
"source_language_code": " SOURCE_LANGUAGE ",
"contents": " SOURCE_TEXT "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_NUMBER_OR_ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://translation.googleapis.com/v3/projects/ PROJECT_NUMBER_OR_ID /locations/ LOCATION :romanizeText"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_NUMBER_OR_ID " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://translation.googleapis.com/v3/projects/ PROJECT_NUMBER_OR_ID /locations/ LOCATION :romanizeText" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"romanizations": [
{
"romanizedText": " ROMANIZED_TEXT "
}
]
}
What's next
Romanization is priced per character sent. For more information, see
Pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
