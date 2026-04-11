---
title: "Method: projects.locations.assets.list \_|\_ Migration Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/api
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets/list
  title: "Method: projects.locations.assets.list \_|\_ Migration Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Reference
Send feedback
Method: projects.locations.assets.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Lists all the assets in a given project and location.
HTTP request
GET https://migrationcenter.googleapis.com/v1/{parent=projects/*/locations/*}/assets
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent value for ListAssetsRequest .
Query parameters
Parameters
page Size
integer
Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
page Token
string
A token identifying a page of results the server should return.
filter
string
Filtering results.
order By
string
Field to sort by. See https://google.aip.dev/132#ordering for more details.
view
enum ( AssetView )
View of the assets. Defaults to BASIC.
Request body
The request body must be empty.
Response body
Response message for listing assets.
If successful, the response body contains data with the following structure:
JSON representation
{
"assets" : [
{
object ( Asset )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
assets[]
object ( Asset )
A list of assets.
next Page Token
string
A token identifying a page of results the server should return.
unreachable[]
string
Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
