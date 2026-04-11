---
title: "MetricRule \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/MetricRule
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/MetricRule
  title: "MetricRule \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Service Usage
Reference
Send feedback
MetricRule
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Bind API methods to metrics. Binding a method to a metric causes that metric's configured quota behaviors to apply to the method call.
JSON representation
{
"selector" : string ,
"metricCosts" : {
string : string ,
...
}
}
Fields
selector
string
Selects the methods to which this rule applies.
Refer to selector for syntax details.
metricCosts
map (key: string, value: string ( int64 format))
Metrics to update when the selected methods are called, and the associated cost applied to each metric.
The key of the map is the metric name, and the values are the amount increased for the metric against which the quota limits are defined. The value must not be negative.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-11 UTC."],[],[]]
