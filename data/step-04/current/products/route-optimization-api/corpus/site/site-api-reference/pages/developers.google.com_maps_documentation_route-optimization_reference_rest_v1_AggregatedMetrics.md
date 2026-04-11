---
title: "AggregatedMetrics \_|\_ Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/AggregatedMetrics
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/AggregatedMetrics
  title: "AggregatedMetrics \_|\_ Route Optimization API \_|\_ Google for Developers"
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
AggregatedMetrics
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document outlines the aggregated metrics for ShipmentRoute and OptimizeToursResponse within Google Maps Route Optimization.
Metrics include shipment count, travel/wait/delay/break/visit/total durations, travel distance, and maximum loads.
All durations are represented in seconds with up to nine fractional digits using the Duration format.
Maximum loads are provided as a map, keyed by quantity and valued by the corresponding VehicleLoad object.
These metrics offer insights into the overall performance and resource utilization of routes and solutions.
JSON representation
Aggregated metrics for ShipmentRoute (resp. for OptimizeToursResponse over all Transition and/or Visit (resp. over all ShipmentRoute ) elements.
JSON representation
{
"performedShipmentCount" : integer ,
"travelDuration" : string ,
"waitDuration" : string ,
"delayDuration" : string ,
"breakDuration" : string ,
"visitDuration" : string ,
"totalDuration" : string ,
"travelDistanceMeters" : number ,
"maxLoads" : {
string : {
object ( VehicleLoad )
} ,
...
} ,
"performedMandatoryShipmentCount" : integer ,
"performedShipmentPenaltyCostSum" : number
}
Fields
performedShipmentCount
integer
Number of shipments performed. Note that a pickup and delivery pair only counts once.
travelDuration
string ( Duration format)
Total travel duration for a route or a solution.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
waitDuration
string ( Duration format)
Total wait duration for a route or a solution.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
delayDuration
string ( Duration format)
Total delay duration for a route or a solution.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
breakDuration
string ( Duration format)
Total break duration for a route or a solution.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
visitDuration
string ( Duration format)
Total visit duration for a route or a solution.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
totalDuration
string ( Duration format)
The total duration should be equal to the sum of all durations above. For routes, it also corresponds to:
[ShipmentRoute.vehicle_end_time][google.maps.routeoptimization.v1.ShipmentRoute.vehicle_end_time] - [ShipmentRoute.vehicle_start_time][google.maps.routeoptimization.v1.ShipmentRoute.vehicle_start_time]
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
travelDistanceMeters
number
Total travel distance for a route or a solution.
maxLoads
map (key: string, value: object ( VehicleLoad ))
Maximum load achieved over the entire route (resp. solution), for each of the quantities on this route (resp. solution), computed as the maximum over all Transition.vehicle_loads (resp. ShipmentRoute.metrics.max_loads .
performedMandatoryShipmentCount
integer
Number of mandatory shipments performed.
Experimental: This field's behavior or existence may change in future.
performedShipmentPenaltyCostSum
number
The sum of the Shipment.penalty_cost of the performed shipments.
Experimental: This field's behavior or existence may change in future.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
