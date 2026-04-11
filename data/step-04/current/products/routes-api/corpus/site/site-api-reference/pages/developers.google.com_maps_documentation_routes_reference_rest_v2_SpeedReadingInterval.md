---
title: "SpeedReadingInterval \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/SpeedReadingInterval
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/SpeedReadingInterval
  title: "SpeedReadingInterval \_|\_ Routes API \_|\_ Google for Developers"
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
SpeedReadingInterval
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
SpeedReadingInterval indicates traffic density on a path segment using start and end points.
It classifies traffic speed into categories: NORMAL , SLOW , and TRAFFIC_JAM .
The interval is represented in JSON format including start/end point indexes and speed information.
JSON representation
Speed
Traffic density indicator on a contiguous segment of a polyline or path. Given a path with points P_0, P_1, ... , P_N (zero-based index), the SpeedReadingInterval defines an interval and describes its traffic using the following categories.
JSON representation
{
"startPolylinePointIndex" : integer ,
"endPolylinePointIndex" : integer ,
// Union field speed_type can be only one of the following:
"speed" : enum ( Speed )
// End of list of possible types for union field speed_type .
}
Fields
startPolylinePointIndex
integer
The starting index of this interval in the polyline.
endPolylinePointIndex
integer
The ending index of this interval in the polyline.
Union field speed_type . The type of speed in this interval. speed_type can be only one of the following:
speed
enum ( Speed )
Traffic speed in this interval.
Speed
The classification of polyline speed based on traffic data.
Enums
SPEED_UNSPECIFIED
Default value. This value is unused.
NORMAL
Normal speed, no traffic delays.
SLOW
Slowdown detected, medium amount of traffic.
TRAFFIC_JAM
Traffic delays.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
