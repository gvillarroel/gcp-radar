---
title: "Set a point for a route to pass through \_|\_ Routes API \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/routes/pass-through
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/pass-through
  title: "Set a point for a route to pass through \_|\_ Routes API \_|\_ Google for\
    \ Developers"
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
Set a point for a route to pass through
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Intermediate waypoints can be designated as pass-through points using the via property to avoid unnecessary stops.
Setting via to true allows for a more direct route, but may result in detours or route calculation failures if the waypoint is inaccessible.
When using address strings or Plus codes for waypoints, the API returns place IDs for these locations in the geocodingResults array.
The geocodingResults array helps identify the place IDs of waypoints, which can be useful for subsequent requests or analysis.
Waypoints specified using latitude/longitude coordinates or place IDs are excluded from the geocodingResults array.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
By default, intermediate waypoints are used for stopping for pickups and
dropoffs, but you can also specify that an intermediate waypoint is meant just
to pass through.
A route that contains an origin waypoint, a pass-through intermediate
waypoint, and a destination waypoint contains just one route leg that
connects the origin and the destination, while passing through the intermediate
(called a via ) waypoint.
Configure an intermediate waypoint to be a pass-through waypoint by
setting the via property of the waypoint to true using either
Waypoint (REST) or
Waypoint (gRPC).
The via property is most effective when creating routes in response to
the user dragging the waypoints on the map. Doing so allows the user to see how
the final route may look in real-time and helps ensure that waypoints are placed
in locations that are accessible to the Compute Routes.
Caution: Using the via: prefix to avoid stopovers results in routes that are
strict in their interpretation of the waypoint. This interpretation may result
in severe detours on the route or ZERO_RESULTS in the response status code if
the Routes API is unable to create a route through that point.
The following example demonstrates how to mark an intermediate waypoint as a
pass-through waypoint.
{
"location" : {
"latLng" : {
"latitude" : 37.419734 ,
"longitude" :- 122.0827784
}
},
"via" : true
}
Access place IDs for intermediate waypoints
If you specify the location of an origin, destination, or intermediate waypoint
as an address string or as a Plus code , the API attempts to find the
most relevant location which has a corresponding place ID. The
geocodingResults.intermediates
array in the results contains the place ID corresponding to the location of the
waypoints, along with additional data about the location.
Note: If a waypoint is specified as a place ID or as
latitude/longitude coordinates, it is omitted from the place ID lookup results.
For each element of the intermediates array, use the
intermediateWaypointRequestIndex property to determine which intermediate
waypoint in the request corresponds to the place ID in the response.
For example:
You specify three intermediate waypoints in a request. Two of these
waypoints are specified by address strings and one by latitude/longitude
coordinates.
You include geocodingResults in the response field mask to specify to
return the geocodingResults array in the results.
curl - X POST - d ' {
"origin" :{
"address" : "1600 Amphitheatre Parkway, Mountain View, CA"
},
"destination" :{
"address" : "24 Willie Mays Plaza, San Francisco, CA 94107"
},
"intermediates" : [
{
"address" : "450 Serra Mall, Stanford, CA 94305, USA"
},
{
"location" :{
"latLng" :{
"latitude" : 37.419734 ,
"longitude" : -122.0807784
}
}
},
{
"address" : "1836 El Camino Real, Redwood City, CA 94063"
}
],
"travelMode" : "DRIVE" ,
} '
- H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR_API_KEY '
- H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters , rou tes .legs , geocodi n gResul ts '
'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes'
The response includes the geocodingResults array containing the place ID for
the origin, destination, and for two of the three waypoints. These are the
waypoints at index 0 and 2 of the request. Because the waypoint at index 1 of
the request was specified by using latitude/longitude coordinates, it is
omitted from the geocodingResults array in the response.
{
"routes" : [{ ... }],
"geocodingResults" : {
"origin" : {
"geocoderStatus" : {},
"type" : [
"premise"
],
"placeId" : "ChIJj38IfwK6j4ARNcyPDnEGa9g"
},
"destination" : {
"geocoderStatus" : {},
"type" : [
"premise"
],
"placeId" : "ChIJI7ES6tl_j4ARVpDZoXbWAiY"
},
"intermediates" : [
{
"geocoderStatus" : {},
"intermediateWaypointRequestIndex" : 0 ,
"type" : [
"street_address"
],
"placeId" : "ChIJvdLMGyq7j4ARScE5tWX_C0Y"
},
{
"geocoderStatus" : {},
"intermediateWaypointRequestIndex" : 2 ,
"type" : [
"premise"
],
"placeId" : "ChIJkTc0GKajj4AR9UMsOSHwGD0"
}
]
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
