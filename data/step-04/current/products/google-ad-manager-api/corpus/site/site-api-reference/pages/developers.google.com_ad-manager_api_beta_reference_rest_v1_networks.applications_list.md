---
title: "Method: networks.applications.list \_|\_ Ad Manager API (Beta) \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications/list
  title: "Method: networks.applications.list \_|\_ Ad Manager API (Beta) \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Reference
Send feedback
Method: networks.applications.list
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The API allows retrieval of a list of Application objects using an HTTP GET request to a specified endpoint.
The request requires a parent path parameter in the format networks/{networkCode} .
Optional query parameters such as pageSize , pageToken , filter , orderBy , and skip can be used to control the response.
The request body must be empty.
The response body contains a list of Application objects, an optional nextPageToken for pagination, and an optional totalSize .
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
API to retrieve a list of Application objects.
HTTP request
GET https://admanager.googleapis.com/v1/{parent}/applications
Path parameters
Parameters
parent
string
Required. The parent, which owns this collection of Applications. Format: networks/{networkCode}
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of Applications to return. The service may return fewer than this value. If unspecified, at most 50 Applications will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000.
pageToken
string
Optional. A page token, received from a previous applications.list call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to applications.list must match the call that provided the page token.
filter
string
Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters
Filterable fields:
displayName
name
orderBy
string
Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order
skip
integer
Optional. Number of individual resources to skip while paginating.
Request body
The request body must be empty.
Response body
Response object for ListApplicationsRequest containing matching Application objects.
If successful, the response body contains data with the following structure:
JSON representation
{
"applications" : [
{
object ( Application )
}
] ,
"nextPageToken" : string ,
"totalSize" : integer
}
Fields
applications[]
object ( Application )
The Application objects from the specified network.
nextPageToken
string
A token, which can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
totalSize
integer
Total number of Application objects. If a filter was included in the request, this reflects the total number after the filtering is applied.
totalSize won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter $fields or fields , or by using the HTTP/gRPC header X-Goog-FieldMask .
For more information, see https://developers.google.com/ad-manager/api/beta/field-masks
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/admanager
https://www.googleapis.com/auth/admanager.readonly
For more information, see the OAuth 2.0 Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
