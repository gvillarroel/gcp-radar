---
title: "Method: projects.locations.list \_|\_ Blockchain Node Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations/list
  title: "Method: projects.locations.list \_|\_ Blockchain Node Engine \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Blockchain Node Engine
Reference
Send feedback
Method: projects.locations.list
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
Lists information about the supported locations for this service.
HTTP request
GET https://blockchainnodeengine.googleapis.com/v1/{name=projects/*}/locations
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
The resource that owns the locations collection, if applicable.
Query parameters
Parameters
filter
string
A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo" , and is documented in more detail in AIP-160 .
pageSize
integer
The maximum number of results to return. If not set, the service selects a default.
pageToken
string
A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
Request body
The request body must be empty.
Response body
The response message for Locations.ListLocations .
If successful, the response body contains data with the following structure:
JSON representation
{
"locations" : [
{
object ( Location )
}
] ,
"nextPageToken" : string
}
Fields
locations[]
object ( Location )
A list of locations that matches the specified filter in the request.
nextPageToken
string
The standard List next-page token.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
blockchainnodeengine.locations.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
