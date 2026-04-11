---
title: "LatLng \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/LatLng
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/LatLng
  title: "LatLng \_|\_ Routes API \_|\_ Google for Developers"
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
LatLng
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A latitude/longitude pair is represented as an object with "latitude" and "longitude" keys, both containing number values.
Latitude values must be within the range of -90.0 to +90.0 degrees, while longitude values must be within the range of -180.0 to +180.0 degrees, conforming to the WGS84 standard.
JSON representation
An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard . Values must be within normalized ranges.
JSON representation
{
"latitude" : number ,
"longitude" : number
}
Fields
latitude
number
The latitude in degrees. It must be in the range [-90.0, +90.0].
longitude
number
The longitude in degrees. It must be in the range [-180.0, +180.0].
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The core content describes a JSON object representing a latitude/longitude pair. It requires two numerical fields: `latitude` (ranging from -90.0 to +90.0) and `longitude` (ranging from -180.0 to +180.0), both in degrees. The object must adhere to the WGS84 standard. The JSON representation format is `{ \"latitude\": number, \"longitude\": number }`. These ranges represent normalized value limits.\n"]]
