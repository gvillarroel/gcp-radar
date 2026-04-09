---
title: "Method: projects.locations.keys.create \_|\_ API Keys API Documentation \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys/create
  title: "Method: projects.locations.keys.create \_|\_ API Keys API Documentation\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Keys API Documentation
Reference
Send feedback
Method: projects.locations.keys.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Try it!
Creates a new API key.
NOTE: Key is a global resource; hence the only supported value for location is global .
HTTP request
POST https://apikeys.googleapis.com/v2/{parent=projects/*/locations/*}/keys
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The project in which the API key is created.
Authorization requires the following IAM permission on the specified resource parent :
apikeys.keys.create
Query parameters
Parameters
keyId
string
User specified key id (optional). If specified, it will become the final component of the key resource name.
The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the id must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])? .
The id must NOT be a UUID-like string.
Request body
The request body contains an instance of Key .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
apikeys.keys.create
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-26 UTC."],[],[]]
