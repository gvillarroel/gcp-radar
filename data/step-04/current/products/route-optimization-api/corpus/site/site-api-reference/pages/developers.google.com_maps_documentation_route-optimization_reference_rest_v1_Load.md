---
title: "Load \_|\_ Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/Load
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/Load
  title: "Load \_|\_ Route Optimization API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Route Optimization API
Reference
Send feedback
Load
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Shipment.Load message defines the amount added or subtracted from a vehicle's load during a pickup or delivery.
This amount is represented by the amount field in the JSON representation, which is a string formatted as an int64 .
The amount value must be non-negative and users should choose an appropriate unit to maintain precision.
Refer to loadDemands for how this message is used within the broader context of route optimization.
JSON representation
When performing a visit, a predefined amount may be added to the vehicle load if it's a pickup, or subtracted if it's a delivery. This message defines such amount. See loadDemands .
JSON representation
{
"amount" : string
}
Fields
amount
string ( int64 format)
The amount by which the load of the vehicle performing the corresponding visit will vary. Since it is an integer, users are advised to choose an appropriate unit to avoid loss of precision. Must be ≥ 0.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The provided content describes the \"amount\" field within a JSON representation used for vehicle load adjustments during visits. This \"amount\" is a string representing an integer that modifies a vehicle's load. During a pickup, the amount is added, and during a delivery, it's subtracted. The amount must be greater than or equal to zero. The content advises users to select an appropriate unit of measure for precision, given that this is an integer.\n"]]
