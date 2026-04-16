---
title: "Change the style of landmarks \_|\_ Maps SDK for Android \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/landmarks
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/config
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/landmarks
  title: "Change the style of landmarks \_|\_ Maps SDK for Android \_|\_ Google for\
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
Change the style of landmarks
Stay organized with collections
Save and categorize content based on your preferences.
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
Landmarks and prominent places can have their own icons. You can choose from two
different icon types to represent these types of places:
Standard POI icons are similar in appearance to other map place markers;
Illustrated POI icons feature a more distinctive appearance.
Experimental: This feature can only be set for light map styles. When you link a
light map style that has custom landmark styles to a map ID, these styles also
apply to the dark map style.
To change the landmark icon style, perform the following steps:
Zoom in on the map enough to see landmarks shown. For example, zoom in to
Paris with a zoom level of 13.
In Map features , select the settings
gear icon to open the Map Settings menu.
Select the Standard landmark style to display standard POI icons:
Select the Illustrated landmark style to display distinctive POI
icons:
Note: When you enable illustrated icons, landmark POI icons replace the POIs
that have an associated illustrated icon. When you disable illustrated
icons, the illustrated icons revert back to the original feature type of
that POI.
Open the Landmark element pane by using the filter or the map inspector.
For more information, see Find map features .
In the Landmark element pane, you can customize the visibility, icon
color, text fill color, and text stroke color.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
