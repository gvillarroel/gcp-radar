---
title: "Location \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/Location
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/Location
  title: "Location \_|\_ Routes API \_|\_ Google for Developers"
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
Location
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Location objects represent a geographic point with latitude and longitude coordinates, optionally including a compass heading.
The heading field, applicable to DRIVE and TWO_WHEELER travel modes, indicates traffic flow direction for pickup/drop-off, ranging from 0 (North) to 360 degrees.
JSON representation
Encapsulates a location (a geographic point, and an optional heading).
JSON representation
{
"latLng" : {
object ( LatLng )
} ,
"heading" : integer
}
Fields
latLng
object ( LatLng )
The waypoint's geographic coordinates.
heading
integer
The compass heading associated with the direction of the flow of traffic. This value specifies the side of the road for pickup and drop-off. Heading values can be from 0 to 360, where 0 specifies a heading of due North, 90 specifies a heading of due East, and so on. You can use this field only for DRIVE and TWO_WHEELER RouteTravelMode .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The provided JSON structure defines a location using latitude and longitude coordinates (`latLng`). It also includes an optional `heading` field, an integer from 0 to 360, representing the compass direction of traffic flow. The `heading` is applicable only for `DRIVE` and `TWO_WHEELER` travel modes and is intended for specifying the road side for pickup or drop-off actions. The `latLng` field itself is a geographic point.\n"]]
