---
title: "Waypoint \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/Waypoint
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/Waypoint
  title: "Waypoint \_|\_ Routes API \_|\_ Google for Developers"
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
Reference
Send feedback
Waypoint
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Waypoints define the start, end, and intermediate points of a route.
Waypoints can be specified using geographic coordinates, Place IDs, or addresses.
The via field allows a waypoint to be a pass-through point without stopping.
vehicleStopover is used for pickup/drop-off optimization, while sideOfRoad indicates preferred stopping side.
JSON representation
Encapsulates a waypoint. Waypoints mark both the beginning and end of a route, and include intermediate stops along the route.
JSON representation
{
"via" : boolean ,
"vehicleStopover" : boolean ,
"sideOfRoad" : boolean ,
// Union field location_type can be only one of the following:
"location" : {
object ( Location )
} ,
"placeId" : string ,
"address" : string ,
"navigationPointToken" : string
// End of list of possible types for union field location_type .
}
Fields
via
boolean
Marks this waypoint as a milestone rather a stopping point. For each non-via waypoint in the request, the response appends an entry to the legs array to provide the details for stopovers on that leg of the trip. Set this value to true when you want the route to pass through this waypoint without stopping over. Via waypoints don't cause an entry to be added to the legs array, but they do route the journey through the waypoint. You can only set this value on waypoints that are intermediates. The request fails if you set this field on terminal waypoints. If ComputeRoutesRequest.optimize_waypoint_order is set to true then this field cannot be set to true; otherwise, the request fails.
vehicleStopover
boolean
Indicates that the waypoint is meant for vehicles to stop at, where the intention is to either pickup or drop-off. When you set this value, the calculated route won't include non- via waypoints on roads that are unsuitable for pickup and drop-off. This option works only for DRIVE and TWO_WHEELER travel modes, and when the locationType is Location .
sideOfRoad
boolean
Indicates that the location of this waypoint is meant to have a preference for the vehicle to stop at a particular side of road. When you set this value, the route will pass through the location so that the vehicle can stop at the side of road that the location is biased towards from the center of the road. This option works only for DRIVE and TWO_WHEELER RouteTravelMode .
Union field location_type . Different ways to represent a location. location_type can be only one of the following:
location
object ( Location )
A point specified using geographic coordinates, including an optional heading.
placeId
string
The POI Place ID associated with the waypoint.
address
string
Human readable address or a plus code. See https://plus.codes for details.
navigationPointToken
string
A token that identifies a NavigationPoint , obtained from the SearchDestinations method of the Geocoding API.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-05 UTC."],[],["Waypoints, marking route start, end, and intermediate stops, are defined using a JSON format. Key properties include `via` (boolean) for non-stopping waypoints, `vehicleStopover` (boolean) for pickup/drop-off locations, and `sideOfRoad` (boolean) for preferred stopping side. A waypoint's `location_type` can be specified via geographic coordinates (`location`), a place ID (`placeId`), or a human-readable address (`address`). `via` cannot be true for terminal waypoints or if `optimize_waypoint_order` is true.\n"]]
