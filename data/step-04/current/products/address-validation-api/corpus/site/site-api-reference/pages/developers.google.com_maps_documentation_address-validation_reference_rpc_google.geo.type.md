---
title: "Package google.geo.type \_|\_ Address Validation API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/address-validation/reference/rpc/google.geo.type
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/reference/rpc/google.geo.type
  title: "Package google.geo.type \_|\_ Address Validation API \_|\_ Google for Developers"
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
Address Validation API
Reference
Send feedback
Package google.geo.type
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A Viewport is defined by two points, low and high , representing the southwest and northeast corners of a rectangular area on a map.
It's crucial that low latitude is less than high latitude and, generally, low longitude is less than high longitude for the viewport to be valid.
The viewport encompasses all points within its boundaries, including the boundary lines themselves.
Special cases exist where longitude ranges can be inverted or represent the entire globe, but latitude ranges must be logically ordered.
Both low and high points are mandatory, and the resulting viewport cannot be empty, otherwise, an error will occur.
Index
Viewport (message)
Viewport
A latitude-longitude viewport, represented as two diagonally opposite low and high points. A viewport is considered a closed region, i.e. it includes its boundary. The latitude bounds must range between -90 to 90 degrees inclusive, and the longitude bounds must range between -180 to 180 degrees inclusive. Various cases include:
If low = high , the viewport consists of that single point.
If low.longitude > high.longitude , the longitude range is inverted (the viewport crosses the 180 degree longitude line).
If low.longitude = -180 degrees and high.longitude = 180 degrees, the viewport includes all longitudes.
If low.longitude = 180 degrees and high.longitude = -180 degrees, the longitude range is empty.
If low.latitude > high.latitude , the latitude range is empty.
Both low and high must be populated, and the represented box cannot be empty (as specified by the definitions above). An empty viewport will result in an error.
For example, this viewport fully encloses New York City:
{ "low": { "latitude": 40.477398, "longitude": -74.259087 }, "high": { "latitude": 40.91618, "longitude": -73.70018 } }
Fields
low
LatLng
Required. The low point of the viewport.
high
LatLng
Required. The high point of the viewport.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["A Viewport, defined by `low` and `high` latitude-longitude points, represents a closed region. Both `low` and `high` points are mandatory. Longitude ranges can be inverted, crossing the 180-degree line, or encompass all longitudes. Latitude ranges, if `low` is greater than `high` are empty. A viewport can be a single point when `low` equals `high`. An empty viewport, when both are equal, results in an error.\n"]]
