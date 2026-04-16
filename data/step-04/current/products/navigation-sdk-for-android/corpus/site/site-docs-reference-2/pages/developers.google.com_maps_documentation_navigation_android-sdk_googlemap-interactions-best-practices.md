---
title: "GoogleMap interaction best practices \_|\_ Navigation SDK for Android \_|\_\
  \ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/googlemap-interactions-best-practices
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/googlemap-interactions-best-practices
  title: "GoogleMap interaction best practices \_|\_ Navigation SDK for Android \_\
    |\_ Google for Developers"
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
GoogleMap interaction best practices
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Implement GoogleMap features on a separate map instance from navigation experiences to avoid conflicts and optimize performance.
Use getMapAsync to retrieve the GoogleMap object instead of holding onto an instance, ensuring you have the most up-to-date map object and preventing stale data.
Remember to clean up the GoogleMap object after use to prevent memory leaks and maintain optimal app performance, referring to the Instance cleanup best practices for detailed guidance.
This page explains best practices for interacting with the GoogleMap object in
your app.
Implement GoogleMap features on the same maps instance
Maps APIs are also available as part of Navigation SDK, which you can use to
build map specific (non-navigation) experiences. If your app includes both a
non-navigation map experience and a navigation experience, we recommend using
the Maps and Navigation API on the same map instance.
Use getMapAsync to obtain the GoogleMap instance
You can obtain a GoogleMap object using either
SupportNavigationFragment#getMapAsync or NavigationView#getMapAsync . We
recommend this method over holding onto the GoogleMap instance that might
become stale once the NavigationView underneath is recreated.
Also be sure to clean up the GoogleMap retrieved from this method after it is
no longer needed. For more information, see Instance cleanup best
practices .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
