---
title: "Maps SDK for Android Beta Releases \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/beta-releases
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/beta-releases
  title: "Maps SDK for Android Beta Releases \_|\_ Google for Developers"
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
Maps SDK for Android Beta Releases
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Beta SDK is deprecated and will be decommissioned; a future SDK version will offer similar features.
Version 3.1.0 Beta introduced cloud-based styling, marker collision handling, and enhanced polyline styling options.
Version 3.0.0 Beta transitioned to a standalone static library, modernized map rendering, and introduced clickable POI labels.
The minimum Android version is now 4.1 ("Jelly Bean"), with support for Android 4.0-4.0.4 ("Ice Cream Sandwich") dropped in the 3.0.0 Beta.
Beta SDK deprecation notice:
The Beta version of the SDK is deprecated and scheduled for decommissioning, and it's no longer
available for new usage. The features described in this topic are currently accessed via the Beta
SDK. A future version of the SDK will provide similar support for these features.
See the release notes for more information.
Use the Maps V3 BETA
Migration Tool to help with migrating from the deprecated Beta version to a supported version.
v.3.1.0 BETA - June 15, 2020
New Features
Added support for cloud-based styling .
Added support for marker collision handling .
Added more polyline styling options :
multi-color, gradient color and textured styling.
API Changes
Added nullability annotations to InfoWindowAdapter for improved Java-Kotlin
interoperability.
Bug Fixes
Fixed app crash with custom Glide module ( Issue 132323222 ).
Fixed OnCameraMove events not triggered for doubletap-drag scaling.
Improved base map loading time for maps with custom tile overlay.
Allowed map lite click listeners to be invoked in Talkback mode.
Fixed crash for MapView with markers in Talkback mode.
v.3.0.0 BETA - May 07, 2019
The Maps SDK for Android is now distributed via a standalone static library in
addition to its availability through Google Play services. Previously, the
Maps SDK for Android was only available as part of Google Play services.
Android 4.0-4.0.4 ("Ice Cream Sandwich") is no longer supported.
Map rendering has been modernized and improved.
Text labels for POIs are now clickable, rather than just the icon.
Business POIs are now visible in indoor maps.
Added incident reports icons to the traffic layer, such as roadworks,
crashes, and traffic jams. These show in Normal, Hybrid and Terrain mode.
Added support for 3D buildings with full models, e.g. Eiffel Tower.
Increased opacity of 3D buildings to match the Google Maps application.
Resolved an issue where markers were loading slowly ( Issue 35822423 ).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
