---
title: "Method: projects.locations.appConnections.list \_|\_ Chrome Enterprise Premium\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/reference/rest/v1/projects.locations.appConnections/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chrome-enterprise-premium/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/reference/rest/v1/projects.locations.appConnections/list
  title: "Method: projects.locations.appConnections.list \_|\_ Chrome Enterprise Premium\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Chrome Enterprise Premium
Send feedback
Method: projects.locations.appConnections.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Lists AppConnections in a given project and location.
HTTP request
GET https://beyondcorp.googleapis.com/v1/{parent=projects/*/locations/*}/appConnections
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The resource name of the AppConnection location using the form: projects/{projectId}/locations/{locationId}
Authorization requires the following IAM permission on the specified resource parent :
beyondcorp.appConnections.list
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the pageSize value, the response may include a partial list and a caller should only rely on response's nextPageToken to determine if there are more instances left to be queried.
pageToken
string
Optional. The nextPageToken value returned from a previous ListAppConnectionsRequest, if any.
filter
string
Optional. A filter specifying constraints of a list operation.
orderBy
string
Optional. Specifies the ordering of results. See Sorting order for more information.
Request body
The request body must be empty.
Response body
Response message for BeyondCorp.ListAppConnections.
If successful, the response body contains data with the following structure:
JSON representation
{
"appConnections" : [
{
object ( AppConnection )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
appConnections[]
object ( AppConnection )
A list of BeyondCorp AppConnections in the project.
nextPageToken
string
A token to retrieve the next page of results, or empty if there are no more results in the list.
unreachable[]
string
A list of locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-02 UTC."],[],[]]
