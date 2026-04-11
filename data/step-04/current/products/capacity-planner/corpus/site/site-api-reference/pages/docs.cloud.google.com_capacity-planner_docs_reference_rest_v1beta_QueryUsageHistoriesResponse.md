---
title: "QueryUsageHistoriesResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/capacity-planner/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse
  title: "QueryUsageHistoriesResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Capacity Planner
Reference
Send feedback
QueryUsageHistoriesResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
UsageHistory
JSON representation
The QueryUsageHistories response.
JSON representation
{
"usageHistories" : [
{
object ( UsageHistory )
}
]
}
Fields
usageHistories[]
object ( UsageHistory )
The usage histories that match the request.
UsageHistory
A collection of data points that describes the historical time-varying values of a resource.
JSON representation
{
"timeSeries" : {
object ( TimeSeries )
} ,
"aggregationMethod" : enum ( AggregationMethod )
}
Fields
timeSeries
object ( TimeSeries )
The collection of data points that represent the historical values.
aggregationMethod
enum ( AggregationMethod )
Method used to convert sampled usage data to time series values.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-29 UTC."],[],[]]
