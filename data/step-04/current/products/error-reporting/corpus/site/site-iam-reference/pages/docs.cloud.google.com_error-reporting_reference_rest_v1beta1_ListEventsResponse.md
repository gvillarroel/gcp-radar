---
title: "ListEventsResponse \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ListEventsResponse
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/reference
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ListEventsResponse
  title: "ListEventsResponse \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Cloud Observability
Error Reporting
Reference
Send feedback
ListEventsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Contains a set of requested error events.
JSON representation
{
"errorEvents" : [
{
object ( ErrorEvent )
}
] ,
"nextPageToken" : string ,
"timeRangeBegin" : string
}
Fields
errorEvents[]
object ( ErrorEvent )
The error events which match the given request.
nextPageToken
string
If non-empty, more results are available. Pass this token, along with the same query parameters as the first request, to view the next page of results.
timeRangeBegin
string ( Timestamp format)
The timestamp specifies the start time to which the request was restricted.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-12 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-12 UTC."],[],[]]
