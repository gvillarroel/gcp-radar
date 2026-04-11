---
title: "Expression \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/Expression
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/Expression
  title: "Expression \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
Expression
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This content defines an arbitrary expression of an arbitrary type, where the response type is determined by its usage context.
The JSON representation includes values , a map of intermediate computation values, and result , indicating the final computed value among the values .
The values field in the JSON representation is a map of key-value pairs, where keys are strings and values are ValueNode objects forming an acyclic directed graph.
The result field in the JSON representation is a string that identifies the final result of the computation from the specified values .
Specifies an arbitrary expression, of an arbitrary type. The context in which it is used determines the type of the response.
JSON representation
{
"values" : {
string : {
object ( ValueNode )
} ,
...
} ,
"result" : string
}
Fields
values
map (key: string, value: object ( ValueNode ))
All intermediate values in the computation. The directed graph these form must be acyclic.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
result
string
Which of the ValueNodes in "values" is the final result of the computation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-06-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-06-05 UTC."],[],["The core content describes a structure for representing arbitrary expressions and their computations. It uses a JSON format with two main components: `values` and `result`. `values` is a map of intermediate computations, where each key-value pair represents a step, and the graph formed by these computations must be acyclic. `result` specifies the `string` key within `values` that represents the final outcome of the computation. The type of the response is determined by the context.\n"]]
