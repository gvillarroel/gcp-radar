---
title: "Normal and low-light modes \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/lighting-modes
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/lighting-modes
  title: "Normal and low-light modes \_|\_ Navigation SDK for iOS \_|\_ Google for\
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
iOS
Navigation SDK for iOS
Send feedback
Normal and low-light modes
Stay organized with collections
Save and categorize content based on your preferences.
The navigation map does not directly follow system dark and light modes.
Instead, the navigation-enabled map supports "normal" and "low light" modes
using
GMSNavigationLightingMode .
Use the suggestedLightingMode property of
GMSNavigator
and set the lighting mode based on the time of day and the device location. Set
this property both at initialization and upon changes. Any time the suggested
lighting mode changes, the
-navigator:didChangeSuggestedLightingMode:
listener method is invoked.
See Modify the navigation
UI to learn how to
customize these modes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
