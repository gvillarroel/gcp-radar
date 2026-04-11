---
title: "Method: networks.adUnits.list \_|\_ Ad Manager API (Beta) \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/list
  title: "Method: networks.adUnits.list \_|\_ Ad Manager API (Beta) \_|\_ Google for\
    \ Developers"
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
Method: networks.adUnits.list
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This API allows retrieval of a list of AdUnit objects.
The request uses a GET HTTP method with the specified URL structure.
Path parameters are used to identify the parent network for the AdUnits.
Various optional query parameters are available for controlling the number of results, pagination, filtering, sorting, and skipping resources.
The response contains a list of AdUnit objects, a token for the next page, and the total size of the results.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
API to retrieve a list of AdUnit objects.
HTTP request
GET https://admanager.googleapis.com/v1/{parent}/adUnits
Path parameters
Parameters
parent
string
Required. The parent, which owns this collection of AdUnits. Format: networks/{networkCode}
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of AdUnits to return. The service may return fewer than this value. If unspecified, at most 50 ad units will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000.
pageToken
string
Optional. A page token, received from a previous adUnits.list call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to adUnits.list must match the call that provided the page token.
filter
string
Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters
Filterable fields:
adUnitCode
adUnitSizes.canonicalName
displayName
effectiveAdsenseEnabled
explicitlyTargeted
externalSetTopBoxChannelId
hasChildren
name
parentAdUnit
status
teams
updateTime
orderBy
string
Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order
skip
integer
Optional. Number of individual resources to skip while paginating.
Request body
The request body must be empty.
Response body
Response object for ListAdUnitsRequest containing matching AdUnit resources.
If successful, the response body contains data with the following structure:
JSON representation
{
"adUnits" : [
{
object ( AdUnit )
}
] ,
"nextPageToken" : string ,
"totalSize" : integer
}
Fields
adUnits[]
object ( AdUnit )
The AdUnit from the specified network.
nextPageToken
string
A token, which can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
totalSize
integer
Total number of AdUnits. If a filter was included in the request, this reflects the total number after the filtering is applied.
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],["This API retrieves AdUnit objects via a `GET` request to `https://admanager.googleapis.com/v1/{parent}/adUnits`. The `parent` path parameter, formatted as `networks/{networkCode}`, is required. Optional query parameters include `pageSize` (max 1000), `pageToken`, `filter`, `orderBy`, and `skip`. The request body must be empty. The response body contains an array of `adUnits`, `nextPageToken` for pagination, and `totalSize`. The request requires the `https://www.googleapis.com/auth/admanager` OAuth scope.\n"]]
