---
title: "Method: projects.locations.blockchainNodes.list \_|\_ Blockchain Node Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/list
  title: "Method: projects.locations.blockchainNodes.list \_|\_ Blockchain Node Engine\
    \ \_|\_ Google Cloud Documentation"
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
Method: projects.locations.blockchainNodes.list
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
Lists blockchain nodes in a given project and location.
HTTP request
GET https://blockchainnodeengine.googleapis.com/v1/{parent=projects/*/locations/*}/blockchainNodes
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent value for ListNodesRequest .
Query parameters
Parameters
pageSize
integer
Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
pageToken
string
A token identifying a page of results the server should return.
filter
string
Filtering results.
orderBy
string
Hint for how to order the results.
Request body
The request body must be empty.
Response body
Message for response to listing blockchain nodes.
If successful, the response body contains data with the following structure:
JSON representation
{
"blockchainNodes" : [
{
object ( BlockchainNode )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
blockchainNodes[]
object ( BlockchainNode )
The list of nodes
nextPageToken
string
A token identifying a page of results the server should return.
unreachable[]
string
Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
blockchainnodeengine.blockchainNodes.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
