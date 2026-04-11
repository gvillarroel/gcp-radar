---
title: "ListLogsResponse \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogsResponse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogsResponse
  title: "ListLogsResponse \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
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
ListLogsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Result returned from logs.list.
JSON representation
{
"logNames" : [
string
] ,
"nextPageToken" : string
}
Fields
logNames[]
string
A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity" .
nextPageToken
string
If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-21 UTC."],[],[]]
