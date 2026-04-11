---
title: "Method: projects.locations.functions.delete \_|\_ Cloud Run functions \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/delete
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/delete
  title: "Method: projects.locations.functions.delete \_|\_ Cloud Run functions \_\
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
Method: projects.locations.functions.delete
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
HTTP request
DELETE https://cloudfunctions.googleapis.com/v1/{name}
Path parameters
Parameters
name
string
Required. The name of the function which should be deleted. It takes the form projects/{project}/locations/{location}/functions/{function} .
Authorization requires the following IAM permission on the specified resource name :
cloudfunctions.functions.delete
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]
