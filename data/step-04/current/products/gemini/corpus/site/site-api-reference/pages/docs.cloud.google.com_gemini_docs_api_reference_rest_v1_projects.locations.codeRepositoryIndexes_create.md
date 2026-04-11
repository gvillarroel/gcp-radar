---
title: "Method: projects.locations.codeRepositoryIndexes.create \_|\_ Gemini for Google\
  \ Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes/create
  title: "Method: projects.locations.codeRepositoryIndexes.create \_|\_ Gemini for\
    \ Google Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
API and references
Send feedback
Method: projects.locations.codeRepositoryIndexes.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Creates a new CodeRepositoryIndex in a given project and location.
HTTP request
POST https://cloudaicompanion.googleapis.com/v1/{parent=projects/*/locations/*}/codeRepositoryIndexes
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Value for parent.
Query parameters
Parameters
codeRepositoryIndexId
string
Required. Id of the requesting object
requestId
string
Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
Request body
The request body contains an instance of CodeRepositoryIndex .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudaicompanion.codeRepositoryIndexes.create
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
