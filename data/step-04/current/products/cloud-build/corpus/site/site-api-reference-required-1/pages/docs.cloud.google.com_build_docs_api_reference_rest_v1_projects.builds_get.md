---
title: "Method: projects.builds.get \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/api/reference/rest/v1/projects.builds/get
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/build/docs/api/reference/rest/v1/projects.builds/get
  title: "Method: projects.builds.get \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Reference
Send feedback
Method: projects.builds.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Returns information about a previously requested build.
The Build that is returned includes its status (such as SUCCESS , FAILURE , or WORKING ), and timing information.
HTTP request
GET https://cloudbuild.googleapis.com/v1/projects/{projectId}/builds/{id}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
projectId
string
Required. ID of the project.
Authorization requires the following IAM permission on the specified resource projectId :
cloudbuild.builds.get
id
string
Required. ID of the build.
Query parameters
Parameters
name
string
The name of the Build to retrieve. Format: projects/{project}/locations/{location}/builds/{build}
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Build .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
