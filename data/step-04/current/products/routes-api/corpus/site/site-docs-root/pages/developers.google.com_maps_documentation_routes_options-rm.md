---
title: "Available route matrix options \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/options-rm
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/options-rm
  title: "Available route matrix options \_|\_ Routes API \_|\_ Google for Developers"
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
Available route matrix options
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Customize route matrices with various options beyond origin and destination, including travel mode, toll fees calculation, and vehicle type.
Choose from travel modes like driving, transit, walking, or two-wheeled vehicles, but note that walking, bicycling, and two-wheeled vehicle routes are in beta and require a user warning.
Request localized text for route matrix responses and specify additional options like departure time within the request body.
Calculate estimated toll fees for routes within your matrix and explore further vehicle type selections for more tailored results.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Along with specifying the origin and destination, you can also use many of the
options available for routes to customize a route matrix. For more details on
how to set these options, see the topics linked in the table:
Option
Description
Travel mode
The mode of travel, such as drive, transit, walk, or
two-wheeled vehicle.
Note: Walking, bicycling, and
two-wheeled vehicle routes are in beta and might sometimes be missing
clear sidewalks, pedestrian paths, or bicycling paths. You must display
this warning to the user for all walking, bicycling, and two-wheel
routes that you display in your app.
Specify how and if to include traffic data
Include traffic data for more accurate results, or exclude it for a faster response.
Calculate toll fees for a route matrix
Include estimated toll fees for routes in a route matrix.
Request localized values
You request localized text for your route matrix response in the same
way as for a route, using a field mask.
Available route matrix vehicle types
Additional options for selecting the type of vehicle for the route
matrix.
Additional options
To specify additional options, such as the departure time, see
Request body .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Customize route matrices by selecting travel modes like driving, transit, walking, or two-wheeled vehicles, noting that walking, bicycling, and two-wheeled options are in beta. You can request estimated toll fees, specify localized text in responses, and select vehicle types. Additional options, such as departure time, are available in the request body. Each option has specific documentation for further details, and the warning must be displayed when walking, bicycling, or two-wheel routes are used.\n"]]
