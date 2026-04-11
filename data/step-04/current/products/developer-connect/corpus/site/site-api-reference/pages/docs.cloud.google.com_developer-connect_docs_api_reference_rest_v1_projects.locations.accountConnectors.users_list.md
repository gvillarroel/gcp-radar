---
title: "Method: projects.locations.accountConnectors.users.list \_|\_ Developer Connect\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.accountConnectors.users/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.accountConnectors.users/list
  title: "Method: projects.locations.accountConnectors.users.list \_|\_ Developer\
    \ Connect \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Developer Connect
Reference
Send feedback
Method: projects.locations.accountConnectors.users.list
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
Try it!
Lists Users in a given project, location, and accountConnector.
HTTP request
GET https://developerconnect.googleapis.com/v1/{parent=projects/*/locations/*/accountConnectors/*}/users
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent value for ListUsersRequest
Query parameters
Parameters
pageSize
integer
Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
pageToken
string
Optional. A token identifying a page of results the server should return.
filter
string
Optional. Filtering results
orderBy
string
Optional. Hint for how to order the results
Request body
The request body must be empty.
Response body
Message for response to listing Users
If successful, the response body contains data with the following structure:
JSON representation
{
"users" : [
{
object ( User )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
users[]
object ( User )
The list of Users
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
developerconnect.users.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
