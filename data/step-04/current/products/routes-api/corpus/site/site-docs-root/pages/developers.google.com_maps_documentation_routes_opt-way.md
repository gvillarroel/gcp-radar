---
title: "Optimize the order of stops on your route \_|\_ Routes API \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/routes/opt-way
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/opt-way
  title: "Optimize the order of stops on your route \_|\_ Routes API \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Routes API
Send feedback
Optimize the order of stops on your route
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Routes API's Compute Routes method can optimize the order of stops (waypoints) for greater efficiency by considering factors like travel time, distance, and turns.
To enable waypoint optimization, ensure no waypoints are marked as via , avoid using TRAFFIC_AWARE_OPTIMAL routing preference, and set optimizeWaypointOrder to true .
The API indexes waypoints based on their order in the request, optimizes the order, and returns the optimized sequence in the optimizedIntermediateWaypointIndex field.
Requests with waypoint optimization are billed at a higher rate on the ComputeRoutes-Advanced SKU.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
By default, the Routes API Compute Routes
method calculates a route through multiple stops, called stopover waypoints, in
the order that you provide them.
You can have the Routes API optimize the provided route by rearranging
stops in a more efficient order. Waypoint optimization optimizes for travel
time but also considers other factors such as distance and number of turns when
deciding which route is the most efficient.
To optimize waypoints
Make sure none of the waypoints in the route have via set to true , for
example: {"address": "Clare,SA", "via": true} . For more information about
intermediate waypoints, see
Specify intermediate waypoints .
Make sure the routing_preference is not set to TRAFFIC_AWARE_OPTIMAL .
Set optimize_waypoint_order to true . For example:
"optimizeWaypointOrder" : "true" ,
Specify the routes.optimizedIntermediateWaypointIndex field in the field
mask:
REST
- H X - Goog - FieldMask : rou tes .op t imizedI nter media te Waypoi nt I n dex
RPC
const ( fieldMask = "routes.optimizedIntermediateWaypointIndex" )
Understand how waypoint order is optimized
Here's how the Routes API optimizes the order of waypoints in a route:
Automatically indexes the waypoints based on the order you provide
them in the request, starting with 0.
Optimizes the order of the waypoints using the index numbers it
assigned to the waypoints in the request.
Returns the optimized waypoint order in the routes object, in the
waypoint_order field, under routes.optimizedIntermediateWaypointIndex .
Example
This request asks for optimization for a route from Adelaide, South Australia,
to each of South Australia's main wine regions, and then returning to Adelaide.
curl - X POST - H 'co ntent - t ype : applica t io n /jso n ' - d ' {
"origin" : {
"address" : "Adelaide,SA"
},
"destination" : {
"address" : "Adelaide,SA"
},
"intermediates" : [
{ "address" : "Barossa+Valley,SA" },
{ "address" : "Clare,SA" },
{ "address" : "Coonawarra,SA" },
{ "address" : "McLaren+Vale,SA" }
],
"travelMode" : "DRIVE" ,
"optimizeWaypointOrder" : "true"
} ' \
- H 'Co ntent - Type : applica t io n /jso n ' \
- H 'X - Goog - Api - Key : YOUR_API_KEY ' \
- H 'X - Goog - FieldMask : rou tes , geocodi n gResul ts .i nter media tes .i nter media te Waypoi nt Reques t I n dex' \
'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes'
The Routes API indexes the intermediate waypoints provided in the
request, starting at 0. For example:
0 { "address" : "Barossa+Valley,SA" },
1 { "address" : "Clare,SA" },
2 { "address" : "Coonawarrav,SA" },
3 { "address" : "McLaren+Vale,SA" }
Using the index numbers for the four waypoints provided in the request, the
service then returns the optimized order:
"optimizedIntermediateWaypointIndex" : [
3 ,
2 ,
0 ,
1
]
Caution: Requests using waypoint optimization are billed at a higher rate on
the SKU for Compute Routes Pro. For more details, see
SKU: Routes: Compute Routes Pro .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Routes API can optimize the order of stopover waypoints to create a more efficient route. To enable this, set `optimize_waypoint_order` to `true`, ensure no waypoints have `via: true` and the `routing_preference` is not `TRAFFIC_AWARE_OPTIMAL`. The API indexes waypoints, optimizes their order based on factors like travel time and distance, and returns the optimized order in `routes.optimizedIntermediateWaypointIndex`. This optimization is billed at a higher rate.\n"]]
