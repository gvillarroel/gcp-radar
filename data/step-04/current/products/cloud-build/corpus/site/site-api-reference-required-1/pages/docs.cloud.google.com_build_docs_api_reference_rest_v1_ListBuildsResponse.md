---
title: "ListBuildsResponse \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/api/reference/rest/v1/ListBuildsResponse
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/build/docs/api/reference/rest/v1/ListBuildsResponse
  title: "ListBuildsResponse \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Reference
Send feedback
ListBuildsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Response including listed builds.
JSON representation
{
"builds" : [
{
object ( Build )
}
] ,
"nextPageToken" : string
}
Fields
builds[]
object ( Build )
Builds will be sorted by createTime , descending.
nextPageToken
string
Token to receive the next page of results. This will be absent if the end of the response list has been reached.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
