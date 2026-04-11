---
title: "Method: projects.locations.functions.generateDownloadUrl \_|\_ Cloud Run functions\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl
  title: "Method: projects.locations.functions.generateDownloadUrl \_|\_ Cloud Run\
    \ functions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Reference
Send feedback
Method: projects.locations.functions.generateDownloadUrl
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
Try it!
Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within minutes after generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
HTTP request
POST https://cloudfunctions.googleapis.com/v1/{name}:generateDownloadUrl
Path parameters
Parameters
name
string
The name of function for which source code Google Cloud Storage signed URL should be generated. It takes the form projects/{project}/locations/{location}/functions/{function} .
Authorization requires the following IAM permission on the specified resource name :
cloudfunctions.functions.sourceCodeGet
Request body
The request body contains data with the following structure:
JSON representation
{
"versionId" : string
}
Fields
versionId
string
The optional version of function. If not set, default, current version is used.
Response body
Response of functions.generateDownloadUrl method.
If successful, the response body contains data with the following structure:
JSON representation
{
"downloadUrl" : string
}
Fields
downloadUrl
string
The generated Google Cloud Storage signed URL that should be used for function source code download.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-01 UTC."],[],[]]
