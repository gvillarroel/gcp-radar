---
title: "Method: projects.locations.customTargetTypes.list \_|\_ Cloud Deploy \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/api
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes/list
  title: "Method: projects.locations.customTargetTypes.list \_|\_ Cloud Deploy \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Deploy
Reference
Send feedback
Method: projects.locations.customTargetTypes.list
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
Lists CustomTargetTypes in a given project and location.
HTTP request
GET https://clouddeploy.googleapis.com/v1/{parent=projects/*/locations/*}/customTargetTypes
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent that owns this collection of custom target types. Format must be projects/{projectId}/locations/{location_name} .
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of CustomTargetType objects to return. The service may return fewer than this value. If unspecified, at most 50 CustomTargetType objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
pageToken
string
Optional. A page token, received from a previous customTargetTypes.list call. Provide this to retrieve the subsequent page.
When paginating, all other provided parameters match the call that provided the page token.
filter
string
Optional. Filter custom target types to be returned. See https://google.aip.dev/160 for more details.
orderBy
string
Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
Request body
The request body must be empty.
Response body
The response object from customTargetTypes.list.
If successful, the response body contains data with the following structure:
JSON representation
{
"customTargetTypes" : [
{
object ( CustomTargetType )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
customTargetTypes[]
object ( CustomTargetType )
The CustomTargetType objects.
nextPageToken
string
A token, which can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
unreachable[]
string
Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
clouddeploy.customTargetTypes.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
