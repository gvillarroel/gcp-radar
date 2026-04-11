---
title: "ListInsightsResponse \_|\_ Recommender \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recommender/docs/reference/rest/v1/ListInsightsResponse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recommender/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/recommender/docs/reference/rest/v1/ListInsightsResponse
  title: "ListInsightsResponse \_|\_ Recommender \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Recommender
Reference
Send feedback
ListInsightsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Response to the ListInsights method.
JSON representation
{
"insights" : [
{
object ( Insight )
}
] ,
"nextPageToken" : string
}
Fields
insights[]
object ( Insight )
The set of insights for the parent resource.
nextPageToken
string
A token that can be used to request the next page of results. This field is empty if there are no additional results.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
