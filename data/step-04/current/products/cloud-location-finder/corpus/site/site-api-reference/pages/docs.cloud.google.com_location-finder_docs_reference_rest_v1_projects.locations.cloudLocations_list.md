---
title: "Method: projects.locations.cloudLocations.list \_|\_ Cloud Location Finder\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/location-finder/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations/list
  title: "Method: projects.locations.cloudLocations.list \_|\_ Cloud Location Finder\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Cloud Location Finder
Reference
Send feedback
Method: projects.locations.cloudLocations.list
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
Lists cloud locations under a given project and location.
HTTP request
GET https://cloudlocationfinder.googleapis.com/v1/{parent=projects/*/locations/*}/cloudLocations
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent, which owns this collection of cloud locations. Format: projects/{project}/locations/{location}
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of cloud locations to return per page. The service might return fewer cloud locations than this value. If unspecified, server will pick an appropriate default.
pageToken
string
Optional. A token identifying a page of results the server should return. Provide page token returned by a previous 'cloudLocations.list' call to retrieve the next page of results. When paginating, all other parameters provided to 'cloudLocations.list' must match the call that provided the page token.
filter
string
Optional. A filter expression that filters resources listed in the response. The expression is in the form of field=value. For example, 'cloudLocationType=CLOUD_LOCATION_TYPE_REGION'. Multiple filter queries are space-separated. For example, 'cloudLocationType=CLOUD_LOCATION_TYPE_REGION territoryCode="US"' By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly.
Request body
The request body must be empty.
Response body
Message for response to listing cloud locations.
If successful, the response body contains data with the following structure:
JSON representation
{
"cloudLocations" : [
{
object ( CloudLocation )
}
] ,
"nextPageToken" : string
}
Fields
cloudLocations[]
object ( CloudLocation )
Output only. List of cloud locations.
nextPageToken
string
Output only. The continuation token, used to page through large result sets. Provide this value in a subsequent request as pageToken in subsequent requests to retrieve the next page. If this field is not present, there are no subsequent results.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudlocationfinder.cloudLocations.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-06 UTC."],[],[]]
