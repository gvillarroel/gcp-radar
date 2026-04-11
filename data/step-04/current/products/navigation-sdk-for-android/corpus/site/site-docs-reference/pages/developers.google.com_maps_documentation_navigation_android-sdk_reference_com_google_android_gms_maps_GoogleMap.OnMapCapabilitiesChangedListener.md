---
title: "GoogleMap.OnMapCapabilitiesChangedListener \_|\_ Navigation SDK for Android\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapCapabilitiesChangedListener
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapCapabilitiesChangedListener
  title: "GoogleMap.OnMapCapabilitiesChangedListener \_|\_ Navigation SDK for Android\
    \ \_|\_ Google for Developers"
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
Reference
Send feedback
GoogleMap.OnMapCapabilitiesChangedListener
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GoogleMap.OnMapCapabilitiesChangedListener is an interface used to listen for changes in map capabilities.
This interface is included for compatibility purposes and is not functional within the Navigation SDK.
The onMapCapabilitiesChanged method is called when map capabilities are updated, providing information about the available capabilities.
public static interface
GoogleMap.OnMapCapabilitiesChangedListener
Listener interface for when the map capabilities are changed.
Map capabilities are not available in the Navigation SDK. This interface exists here only
for compile-time compatibility with com.google.android.gms:play-services-maps .
Public Method Summary
abstract
void
onMapCapabilitiesChanged ( MapCapabilities availableCapabilities)
Called when map capabilities are changed.
Public Methods
public
abstract
void
onMapCapabilitiesChanged
( MapCapabilities availableCapabilities)
Called when map capabilities are changed.
Parameters
availableCapabilities
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
