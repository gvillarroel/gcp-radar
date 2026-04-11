---
title: "TrafficModel \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/TrafficModel
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/TrafficModel
  title: "TrafficModel \_|\_ Routes API \_|\_ Google for Developers"
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
TrafficModel
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The duration field provides estimated travel time influenced by the traffic_model setting.
traffic_model options include BEST_GUESS (default), PESSIMISTIC , and OPTIMISTIC , impacting travel time predictions.
BEST_GUESS considers historical and live traffic data for travel time estimation, with live traffic having more impact closer to departure.
PESSIMISTIC and OPTIMISTIC offer durations longer and shorter than actual travel times on most days, respectively, accounting for traffic variations.
This field specifies one of the following assumptions to use when calculating travel time in traffic conditions, shown in the enums below. Depending on the enum chosen, the duration field of the TrafficModel response will vary. The value contains the predicted time to destination in traffic, based on historical averages. TrafficModel is only available for requests that have set RoutingPreference to TRAFFIC_AWARE_OPTIMAL and RouteTravelMode to DRIVE .
Enums
TRAFFIC_MODEL_UNSPECIFIED
Unused. If specified, will default to BEST_GUESS .
BEST_GUESS
Indicates that the returned duration should be the best estimate of travel time given what is known about both historical traffic conditions and live traffic. Live traffic becomes more important the closer the departureTime is to now.
PESSIMISTIC
Indicates that the returned duration should be longer than the actual travel time on most days, though occasional days with particularly bad traffic conditions may exceed this value.
OPTIMISTIC
Indicates that the returned duration should be shorter than the actual travel time on most days, though occasional days with particularly good traffic conditions may be faster than this value.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The core content outlines how to specify traffic-based time calculations, impacting the `duration` field. The `TRAFFIC_MODEL_UNSPECIFIED` defaults to `BEST_GUESS`, which uses historical and live data to estimate travel time. `PESSIMISTIC` calculates a longer travel time, likely exceeded only in severe conditions. Conversely, `OPTIMISTIC` calculates a shorter time, potentially beaten during favorable conditions. These options modify the estimated duration by factoring in historical traffic data and real-time conditions.\n"]]
