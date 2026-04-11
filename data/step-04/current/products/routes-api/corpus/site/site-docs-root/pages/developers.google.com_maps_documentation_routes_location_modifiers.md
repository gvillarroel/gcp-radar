---
title: "Specify vehicle heading and side of road \_|\_ Routes API \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/routes/location_modifiers
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/location_modifiers
  title: "Specify vehicle heading and side of road \_|\_ Routes API \_|\_ Google for\
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
Specify vehicle heading and side of road
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Waypoints can include heading and sideOfRoad modifiers to influence route calculation, but these options cannot be used together for the same location and incur higher billing rates.
heading specifies the vehicle's direction (0-359 degrees) upon arrival at a waypoint, ensuring it approaches from the desired side of the road, and is applicable to Drive or Two-wheeler travel modes using latitude/longitude coordinates.
sideOfRoad , when set to true , indicates a preference for the vehicle to stop on the same side of the road as the specified location, also applicable to Drive or Two-wheeler travel modes.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Waypoints may include location modifiers to change how routes are calculated,
including settings for heading and sideOfRoad .
Note: heading and sideOfRoad are incompatible. You may not use them for
the same location. Caution: Requests using heading and sideOfRoad are billed at a higher rate.
Learn more about billing for Routes API.
Specify the vehicle heading
To define a waypoint, you specify the geographic
Location (REST) or
Location (gRPC)
as a pair of latitude/longitude coordinates.
Location also lets you specify the direction you want the vehicle to head when
it arrives at each waypoint. You can use this feature to ensures that the
vehicle arrives on the same side of the road as the consumer waiting to be
picked up. When you don't specify a heading, the vehicle can arrive on the
wrong side of the road.
Note: You can set heading only when using either the Drive or
Two-wheeler travel modes, and when specifying the location by using a
latitude and longitude pair.
Heading values are whole numbers that align with the compass directions, and
therefore range from zero to 359. For example, a value of 0 indicates a heading
direction of due North.
The following example demonstrates how to set a
heading for a waypoint.
{
"origin":{
"location":{
"latLng":{
"latitude": 37.419734,
"longitude": -122.0827784
},
"heading": 127
}
},
...
Specify a side of the road preference
You represent a location by creating a Waypoint
(REST) or Waypoint (gRPC)
object. A location defined by a latitude and longitude pair can correspond to a
specific side of a road. However, to support route optimization, a route can
still set a stopover to be on the opposite side of the road from the specified
location.
Waypoints support the sideOfRoad property, which
indicates that the waypoint location has a preference for the vehicle to stop at
the same side of road as specified by the location.
Specify that the route uses the preferred side of the road by setting the
Waypoint sideOfRoad property to true . The route then passes through the
location so that the vehicle can stop at the side of road that the location is
biased towards.
Note: You can set the sideOfRoad only when using either the Drive or
Two-wheeler travel modes.
The following example shows how to set sideOfRoad for a waypoint.
{
"origin":{
"location":{
"latLng":{
"latitude": 37.419734,
"longitude": -122.0827784
}
},
"sideOfRoad": true
},
...
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Waypoints can include location modifiers like `heading` and `sideOfRoad` to influence route calculations. `Heading`, a 0-359 compass direction value, specifies the vehicle's arrival direction. `sideOfRoad` indicates a preference for the vehicle to stop on the same side of the road as the specified location. Both modifiers are only available for `Drive` or `Two-wheeler` modes and when using latitude/longitude pairs. `Heading` and `sideOfRoad` are incompatible. Using these modifiers will result in a higher billing rate.\n"]]
