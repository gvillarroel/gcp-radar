---
title: "ListRecentQueriesResponse \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse
  title: "ListRecentQueriesResponse \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Reference
Send feedback
ListRecentQueriesResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The response from recentQueries.list.
JSON representation
{
"recentQueries" : [
{
object ( RecentQuery )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
recentQueries[]
object ( RecentQuery )
A list of recent queries.
nextPageToken
string
If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken .
unreachable[]
string
The unreachable resources. Each resource can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachable.
"projects/[PROJECT_ID]/locations/[LOCATION_ID]/recentQueries/[QUERY_ID]"
"projects/[PROJECT_ID]/locations/[LOCATION_ID]"
For example:
"projects/my-project/locations/global/recentQueries/12345678" "projects/my-project/locations/global"
If there are unreachable resources, the response will first return pages that contain recent queries, and then return pages that contain the unreachable resources.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-21 UTC."],[],[]]
