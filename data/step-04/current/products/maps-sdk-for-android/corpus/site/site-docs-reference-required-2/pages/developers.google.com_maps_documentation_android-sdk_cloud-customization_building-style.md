---
title: "Change the style of buildings \_|\_ Maps SDK for Android \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/building-style
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/config
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/building-style
  title: "Change the style of buildings \_|\_ Maps SDK for Android \_|\_ Google for\
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
Android
Maps SDK for Android
Guides
Send feedback
Change the style of buildings
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Cloud-based maps styling requires the latest renderer for the Maps SDK for Android and is supported across Android, iOS, Maps JavaScript API, and Maps Static.
Buildings on vector maps automatically display in 3D at zoom level 17 and higher, but can be customized to a 2D "Footprints" style.
Users can adjust fill and stroke colors for "Footprints" style buildings, while 3D buildings only support fill color customization.
The building style can be changed in the Style Editor under the "Buildings" feature type within "Landscape, Human-made".
Select platform:
Android
iOS
JavaScript
Web Service
To use cloud-based maps styling on Android, you must use the
latest renderer for Maps SDK for Android.
Follow these instructions .
Availability: This feature is visible on
Android, iOS, Maps JavaScript API, and Maps Static.
When you use a vector map in Android, iOS, or JavaScript,
buildings use the 3D style beginning at zoom level 17 and higher by
default. If you want to display only the 2D
outlines of buildings for a cleaner appearance, select the Footprints style.
Experimental: This feature can only be set for light map styles. When you link a
light map style that has custom building styles to a map ID, these styles also
apply to the dark map style.
Set the building style
Zoom in on the map enough to see buildings shown.
In the Map features panel, select the settings
gear icon to open the Map Settings menu.
To display buildings with a 3D outline , select 3D :
Note: Stroke color and stroke width customizations are not available for 3D
style buildings.
To display buildings with a 2D footprint , select Footprints :
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
