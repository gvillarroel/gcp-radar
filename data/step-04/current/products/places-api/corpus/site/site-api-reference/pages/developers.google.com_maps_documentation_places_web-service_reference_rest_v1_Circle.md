---
title: "Circle \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/Circle
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/Circle
  title: "Circle \_|\_ Places API \_|\_ Google for Developers"
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
Places API
Reference
Send feedback
Circle
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Defines a circular area using a central point (LatLng) and a radius.
Requires specifying the center's latitude and longitude within valid ranges.
Requires a radius in meters, with a maximum limit.
center and radius fields are mandatory for defining the circle.
JSON representation
Circle with a LatLng as center and radius.
JSON representation
{
"center" : {
object ( LatLng )
} ,
"radius" : number
}
Fields
center
object ( LatLng )
Required. Center latitude and longitude.
The range of latitude must be within [-90.0, 90.0]. The range of the longitude must be within [-180.0, 180.0].
radius
number
Required. Radius measured in meters. The radius must be within [0.0, 50000.0].
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The JSON represents a circle defined by a `center` and `radius`. The `center` is a LatLng object, with latitude ranging from -90.0 to 90.0 and longitude from -180.0 to 180.0. The `radius`, a number representing meters, must be within the range of 0.0 to 50000.0. Both `center` and `radius` are required fields to represent the circle.\n"]]
