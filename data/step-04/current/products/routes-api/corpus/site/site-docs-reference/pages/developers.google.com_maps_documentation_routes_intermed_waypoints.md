---
title: "Set intermediate waypoints \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/intermed_waypoints
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/compute-route-over
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/intermed_waypoints
  title: "Set intermediate waypoints \_|\_ Routes API \_|\_ Google for Developers"
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
Set intermediate waypoints
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Intermediate waypoints allow you to specify locations between the origin and destination for a route to pass through or stop at.
You can define up to 25 intermediate waypoints using the intermediates property when computing routes, but requests with 11 or more are billed at a higher rate.
The response provides route details including legs, with each leg representing a segment of the journey between waypoints.
Each leg within the route is further broken down into steps, providing detailed information about each segment of the journey.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Intermediate waypoints are locations in between the origin and destination
that you want the route to go through. An intermediate waypoint can be a stop or
you can specify it as a location to pass through. For an example of a waypoint
for a stop, see Set a stop along a route . For an example of a
waypoint to pass-through,
Set point for a route to pass-through .
Note: Intermediate waypoints are not supported in the
Compute Route Matrix.
Use the intermediates array property of the
computeRoutes method (REST) or the
ComputeRoutes
method (gRPC), to define up to a maximum of 25 intermediate waypoints.
Caution: If you make requests using 11 or more intermediate waypoints
(between 11 and 25), your requests are billed at a higher rate.
Learn more about billing for Routes API.
For each intermediate waypoint in the request, the
Route object (REST) or
Route object (gRPC) in the
response adds an entry to the legs array to provide the details for
that leg of the journey.
Each leg of a route is represented by a
RouteLeg (REST) or
RouteLeg (gRPC) object.
Control which RouteLeg fields to return by using the
response field mask .
Example - Set an intermediate waypoint
The following example uses the intermediates array property to add a single
intermediate waypoint to the POST request body of a route.
This example uses a response field mask in the X-Goog-FieldMask header
that specifies to return the following fields in the response:
routes.duration
routes.distanceMeters
routes.legs corresponding to the entire RouteLeg object.
curl - X POST - d ' {
"origin" :{
"location" :{
"latLng" :{
"latitude" : 37.419734 ,
"longitude" : -122.0827784
}
},
"sideOfRoad" : true
},
"destination" :{
"location" :{
"latLng" :{
"latitude" : 37.417670 ,
"longitude" : -122.079595
}
}
},
"intermediates" : [
{
"location" :{
"latLng" :{
"latitude" : 37.419734 ,
"longitude" : -122.0807784
}
}
}
],
"travelMode" : "DRIVE" ,
"routingPreference" : "TRAFFIC_AWARE" ,
"departureTime" : "2022-10-15T15:01:23.045123456Z" ,
"computeAlternativeRoutes" : false ,
"routeModifiers" : {
"avoidTolls" : false ,
"avoidHighways" : false ,
"avoidFerries" : false
},
"languageCode" : "en-US" ,
"units" : "IMPERIAL"
} '
- H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR_API_KEY '
- H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters , rou tes .legs '
'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes'
The response from this call contains the legs array. Each step of the leg is
represented by a
RouteLegStep (REST) or
RouteLegStep (gRPC) object.
{
"routes" : [
{
"legs" : [
# Firs t leg
{
"distanceMeters" : 207 ,
"duration" : "89s" ,
"staticDuration" : "89s" ,
"polyline" : {
"encodedPolyline" : "ipkcFjgchVd@@@cF]@@oCK?"
},
"startLocation" : {
"latLng" : {
"latitude" : 37.4197318 ,
"longitude" : -122.0826233
}
},
"endLocation" : {
"latLng" : {
"latitude" : 37.419734 ,
"longitude" : -122.08077919999998
}
},
"steps" : [ {
"distanceMeters" : 21 ,
"staticDuration" : "6s" ,
"polyline" : {
"encodedPolyline" : "ipkcFjgchVd@@"
},
"startLocation" : {
"latLng" : {
"latitude" : 37.4197318 ,
"longitude" : -122.0826233
}
},
"endLocation" : {
"latLng" : {
"latitude" : 37.41954 ,
"longitude" : -122.08262750000002
}
}
},
...
},
# Seco n d leg
{
"distanceMeters" : 598 ,
"duration" : "159s" ,
"staticDuration" : "159s" ,
"polyline" : {
"encodedPolyline" : "ipkcFz{bhVh@??{@xPBP?J}E{E?"
},
"startLocation" : {
"latLng" : {
"latitude" : 37.419734 ,
"longitude" : -122.08077919999998
}
},
"endLocation" : {
"latLng" : {
"latitude" : 37.417616599999995 ,
"longitude" : -122.07938820000001
}
},
"steps" : [
{
...
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Intermediate waypoints, placed between the origin and destination, guide the route. Use the `intermediates` array in the `computeRoutes` method to define up to 25 waypoints, with options for stops or pass-throughs. Each waypoint adds a `leg` to the route's details. Requests with 11-25 waypoints are billed at a higher rate. Each route `leg` can be specified with desired fields through a response field mask to return the `duration`, `distanceMeters`, and `legs`.\n"]]
