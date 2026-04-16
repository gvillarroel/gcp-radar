---
title: "Instance cleanup best practices \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/instance-cleanup-best-practices
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/instance-cleanup-best-practices
  title: "Instance cleanup best practices \_|\_ Navigation SDK for Android \_|\_ Google\
    \ for Developers"
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
Navigation SDK for Android
Resources
Send feedback
Instance cleanup best practices
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Use Navigator#clearDestinations and Navigator#cleanup when navigation sessions are completed to prevent memory leaks.
Clean up GoogleMap elements like Polygons, Polylines, and Markers by calling their respective remove methods when they are no longer needed.
After a GoogleMap instance is no longer in use, call GoogleMap#clear and assign the instance to null to free up resources.
This page explains best practices for cleaning up instances after they are no
longer needed.
Use Navigator#clearDestinations and Navigator#cleanup when navigation sessions are completed
To prevent memory leaks and ensure proper cleanup, use
Navigator#clearDestinations and Navigator#cleanup after the navigation
session is completed and the Navigator instance is no longer needed. This can be
done when the user has navigated away from the map and when onDestroy() of the
associated activity is invoked.
Clean up GoogleMap elements when they are no longer needed
If your app uses a GoogleMap instance for non-navigation maps experiences, be
sure to clean up this instance when it is no longer needed. For example, clean
up the Polygon, Polyline, and Marker elements associated with GoogleMap by
calling the Polygon#remove , Polyline#remove , and Marker#remove methods,
respectively. Then, to free up the GoogleMap instance after it is not longer
needed, call GoogleMap#clear assign the instance to null .
For more information about using a GoogleMap instance in your app, see
GoogleMap interaction best
practices .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
