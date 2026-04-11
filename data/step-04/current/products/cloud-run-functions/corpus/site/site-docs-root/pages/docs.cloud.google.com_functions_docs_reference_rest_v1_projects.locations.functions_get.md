---
title: "Method: projects.locations.functions.get \_|\_ Cloud Run functions \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get
  title: "Method: projects.locations.functions.get \_|\_ Cloud Run functions \_|\_\
    \ Google Cloud Documentation"
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
Method: projects.locations.functions.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Returns a function with the given name from the requested project.
HTTP request
GET https://cloudfunctions.googleapis.com/v1/{name}
Path parameters
Parameters
name
string
Required. The name of the function which details should be obtained. It takes the form projects/{project}/locations/{location}/functions/{function} .
Authorization requires the following IAM permission on the specified resource name :
cloudfunctions.functions.get
Query parameters
Parameters
versionId
string ( int64 format)
Optional. The optional version of the function whose details should be obtained. The version of a 1st Gen function is an integer that starts from 1 and gets incremented on redeployments. Each deployment creates a config version of the underlying function. GCF may keep historical configs for old versions. This field can be specified to fetch the historical configs. Leave it blank or set to 0 to get the latest version of the function.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of CloudFunction .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudfunctions
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-01 UTC."],[],[]]
