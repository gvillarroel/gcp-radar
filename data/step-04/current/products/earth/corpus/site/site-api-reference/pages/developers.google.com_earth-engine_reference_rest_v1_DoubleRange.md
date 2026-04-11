---
title: "DoubleRange \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/DoubleRange
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/DoubleRange
  title: "DoubleRange \_|\_ Google Earth Engine \_|\_ Google for Developers"
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
DoubleRange
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Describes a range of doubles.
Represented by a JSON object with "min" and "max" fields.
The "min" field indicates the minimum data value.
The "max" field indicates the maximum data value.
A range of doubles.
JSON representation
{
"min" : number ,
"max" : number
}
Fields
min
number
The minimum data value, i.e. the lower bound of the range.
max
number
The maximum data value, i.e. the upper bound of the range.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-06-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-06-05 UTC."],[],["The content defines a data structure representing a range of double values. This structure is represented in JSON format as an object with two key-value pairs: \"min\" and \"max\". \"Min\" specifies the minimum numerical value within the range, while \"max\" defines the maximum numerical value. Both \"min\" and \"max\" hold number type data, defining the lower and upper limits of the described numerical range.\n"]]
