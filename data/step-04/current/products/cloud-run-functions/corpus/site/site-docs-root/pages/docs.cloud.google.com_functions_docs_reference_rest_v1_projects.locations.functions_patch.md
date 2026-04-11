---
title: "Method: projects.locations.functions.patch \_|\_ Cloud Run functions \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/patch
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/patch
  title: "Method: projects.locations.functions.patch \_|\_ Cloud Run functions \_\
    |\_ Google Cloud Documentation"
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
Method: projects.locations.functions.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Updates existing function.
HTTP request
PATCH https://cloudfunctions.googleapis.com/v1/{function.name}
Path parameters
Parameters
function.name
string
A user-defined name of the function. Function names must be unique globally and match pattern projects/*/locations/*/functions/* It takes the form projects/{project}/locations/{location}/functions/{function} .
Query parameters
Parameters
updateMask
string ( FieldMask format)
Required. The list of fields in CloudFunction that have to be updated.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of CloudFunction .
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-01 UTC."],[],[]]
