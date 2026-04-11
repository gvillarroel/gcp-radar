---
title: "VehicleLoad \_|\_ Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/VehicleLoad
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/VehicleLoad
  title: "VehicleLoad \_|\_ Route Optimization API \_|\_ Google for Developers"
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
VehicleLoad
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
VehicleLoad objects represent the actual load a vehicle carries at a specific point on its route.
They utilize a JSON representation with an amount field specifying the load quantity, typically formatted as an int64 string.
The unit of measure for the load is usually indicated by the load type, as defined in the vehicle_loads field of the Transition object.
JSON representation
Reports the actual load of the vehicle at some point along the route, for a given type (see Transition.vehicle_loads ).
JSON representation
{
"amount" : string
}
Fields
amount
string ( int64 format)
The amount of load on the vehicle, for the given type. The unit of load is usually indicated by the type. See Transition.vehicle_loads .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The core content describes the vehicle's load at a specific point on its route. This is represented in JSON as an object with a single field: `amount`. The `amount` field, a string representing a 64-bit integer, indicates the quantity of load for a given type. The unit of measurement for this load is determined by the load type, which is further described in `Transition.vehicle_loads`.\n"]]
