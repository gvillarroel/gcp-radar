---
title: "Method: projects.locations.keys.undelete \_|\_ API Keys API Documentation\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys/undelete
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys/undelete
  title: "Method: projects.locations.keys.undelete \_|\_ API Keys API Documentation\
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
Method: projects.locations.keys.undelete
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
Try it!
Undeletes an API key which was deleted within 30 days.
NOTE: Key is a global resource; hence the only supported value for location is global .
HTTP request
POST https://apikeys.googleapis.com/v2/{name=projects/*/locations/*/keys/*}:undelete
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource name of the API key to be undeleted.
Authorization requires the following IAM permission on the specified resource name :
apikeys.keys.undelete
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
apikeys.keys.undelete
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-26 UTC."],[],[]]
