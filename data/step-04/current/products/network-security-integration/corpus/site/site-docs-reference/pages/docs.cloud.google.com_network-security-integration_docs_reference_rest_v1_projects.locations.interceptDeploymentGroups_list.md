---
title: "Method: projects.locations.interceptDeploymentGroups.list \_|\_ Network Security\
  \ Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/reference/rest/v1/projects.locations.interceptDeploymentGroups/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/reference/rest/v1/projects.locations.interceptDeploymentGroups/list
  title: "Method: projects.locations.interceptDeploymentGroups.list \_|\_ Network\
    \ Security Integration \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Network Security Integration
Reference
Send feedback
Method: projects.locations.interceptDeploymentGroups.list
Stay organized with collections
Save and categorize content based on your preferences.
Lists deployment groups in a given project and location. See https://google.aip.dev/132 .
HTTP request
GET https://networksecurity.googleapis.com/v1/{parent=projects/*/locations/*}/interceptDeploymentGroups
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent, which owns this collection of deployment groups. Example: projects/123456789/locations/global . See https://google.aip.dev/132 for more details.
Query parameters
Parameters
pageSize
integer
Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details.
pageToken
string
Optional. A page token, received from a previous interceptDeploymentGroups.list call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to interceptDeploymentGroups.list must match the call that provided the page token. See https://google.aip.dev/158 for more details.
filter
string
Optional. Filter expression. See https://google.aip.dev/160#filtering for more details.
orderBy
string
Optional. Sort expression. See https://google.aip.dev/132#ordering for more details.
Request body
The request body must be empty.
Response body
Response message for interceptDeploymentGroups.list.
If successful, the response body contains data with the following structure:
JSON representation
{
"interceptDeploymentGroups" : [
{
object ( InterceptDeploymentGroup )
}
] ,
"nextPageToken" : string
}
Fields
interceptDeploymentGroups[]
object ( InterceptDeploymentGroup )
The deployment groups from the specified parent.
nextPageToken
string
A token that can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
networksecurity.interceptDeploymentGroups.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-23 UTC."],[],[]]
