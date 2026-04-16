---
title: "Method: projects.locations.operations.list \_|\_ Compute Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/licensemanager/rest/v1/projects.locations.operations/list
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/reference/mcp
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/licensemanager/rest/v1/projects.locations.operations/list
  title: "Method: projects.locations.operations.list \_|\_ Compute Engine \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
Method: projects.locations.operations.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
IAM Permissions
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED .
HTTP request
GET https://licensemanager.googleapis.com/v1/{name=projects/*/locations/*}/operations
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
The name of the operation's parent resource.
Query parameters
Parameters
filter
string
The standard list filter.
pageSize
integer
The standard list page size.
pageToken
string
The standard list page token.
Request body
The request body must be empty.
Response body
The response message for Operations.ListOperations .
If successful, the response body contains data with the following structure:
JSON representation
{
"operations" : [
{
object ( Operation )
}
] ,
"nextPageToken" : string
}
Fields
operations[]
object ( Operation )
A list of operations that matches the specified filter in the request.
nextPageToken
string
The standard List next-page token.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
licensemanager.operations.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
