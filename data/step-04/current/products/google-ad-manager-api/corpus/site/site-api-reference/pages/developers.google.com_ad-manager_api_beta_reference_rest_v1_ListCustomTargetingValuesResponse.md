---
title: "ListCustomTargetingValuesResponse \_|\_ Ad Manager API (Beta) \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/ListCustomTargetingValuesResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/ListCustomTargetingValuesResponse
  title: "ListCustomTargetingValuesResponse \_|\_ Ad Manager API (Beta) \_|\_ Google\
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
ListCustomTargetingValuesResponse
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The ListCustomTargetingValuesResponse object is the response for ListCustomTargetingValuesRequest and contains matching CustomTargetingValue objects.
The response includes an array customTargetingValues which holds the CustomTargetingValue objects.
A nextPageToken is provided as a string to retrieve subsequent pages if available.
The totalSize field indicates the total number of CustomTargetingValue objects after filtering, if applicable, and is included based on a response field mask.
JSON representation
Response object for ListCustomTargetingValuesRequest containing matching CustomTargetingValue objects.
JSON representation
{
"customTargetingValues" : [
{
object ( CustomTargetingValue )
}
] ,
"nextPageToken" : string ,
"totalSize" : integer
}
Fields
customTargetingValues[]
object ( CustomTargetingValue )
The CustomTargetingValue objects from the specified network.
nextPageToken
string
A token, which can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
totalSize
integer
Total number of CustomTargetingValue objects. If a filter was included in the request, this reflects the total number after the filtering is applied.
totalSize won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter $fields or fields , or by using the HTTP/gRPC header X-Goog-FieldMask .
For more information, see https://developers.google.com/ad-manager/api/beta/field-masks
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-05 UTC."],[],[]]
