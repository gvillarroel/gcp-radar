---
title: "ListLocationsRequest \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/Shared.Types/ListLocationsRequest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/admin-api/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/Shared.Types/ListLocationsRequest
  title: "ListLocationsRequest \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
App Engine
Admin API
Reference
Send feedback
ListLocationsRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The request message for Locations.ListLocations .
JSON representation
{
"name" : string ,
"filter" : string ,
"pageSize" : integer ,
"pageToken" : string
}
Fields
name
string
The resource that owns the locations collection, if applicable.
filter
string
A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo" , and is documented in more detail in AIP-160 .
pageSize
integer
The maximum number of results to return. If not set, the service selects a default.
pageToken
string
A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]
