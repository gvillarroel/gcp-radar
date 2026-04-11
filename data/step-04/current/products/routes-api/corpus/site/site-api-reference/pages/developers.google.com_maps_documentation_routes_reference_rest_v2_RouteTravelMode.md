---
title: "RouteTravelMode \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/RouteTravelMode
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/RouteTravelMode
  title: "RouteTravelMode \_|\_ Routes API \_|\_ Google for Developers"
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
RouteTravelMode
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Travel modes include driving, bicycling, walking, two-wheeled vehicles, and transit, with driving as the default if unspecified.
Walking, bicycling, and two-wheeler routes are in beta and may have incomplete pedestrian or cycling paths, requiring a user warning.
TWO_WHEELER refers to motorized two-wheelers like motorcycles, distinct from the human-powered BICYCLE mode.
A set of values used to specify the mode of travel. NOTE: WALK , BICYCLE , and TWO_WHEELER routes are in beta and might sometimes be missing clear sidewalks, pedestrian paths, or bicycling paths. You must display this warning to the user for all walking, bicycling, and two-wheel routes that you display in your app.
Enums
TRAVEL_MODE_UNSPECIFIED
No travel mode specified. Defaults to DRIVE .
DRIVE
Travel by passenger car.
BICYCLE
Travel by bicycle.
WALK
Travel by walking.
TWO_WHEELER
Two-wheeled, motorized vehicle. For example, motorcycle. Note that this differs from the BICYCLE travel mode which covers human-powered mode.
TRANSIT
Travel by public transit routes, where available.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The content defines travel modes, including `DRIVE`, `BICYCLE`, `WALK`, `TWO_WHEELER`, and `TRANSIT`. `WALK`, `BICYCLE`, and `TWO_WHEELER` are in beta and may lack clear paths, requiring a warning display to users. `TRAVEL_MODE_UNSPECIFIED` defaults to `DRIVE`. `TWO_WHEELER` refers to motorized two-wheeled vehicles, distinguishing it from human-powered `BICYCLE` travel. Each mode specifies the means of travel.\n"]]
