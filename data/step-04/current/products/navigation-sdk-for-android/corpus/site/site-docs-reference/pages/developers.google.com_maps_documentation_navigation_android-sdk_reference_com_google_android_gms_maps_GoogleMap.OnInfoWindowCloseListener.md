---
title: "GoogleMap.OnInfoWindowCloseListener \_|\_ Navigation SDK for Android \_|\_\
  \ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowCloseListener
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowCloseListener
  title: "GoogleMap.OnInfoWindowCloseListener \_|\_ Navigation SDK for Android \_\
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
Reference
Send feedback
GoogleMap.OnInfoWindowCloseListener
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GoogleMap.OnInfoWindowCloseListener is a callback interface used for handling events when a marker's info window is closed on a Google Map.
The onInfoWindowClose() method is triggered when a marker's info window is closed, providing the associated Marker object.
This interface is crucial for responding to info window closures and performing actions based on user interactions with markers on the map.
public static interface
GoogleMap.OnInfoWindowCloseListener
Callback interface for close events on a marker's info window.
Public Method Summary
abstract
void
onInfoWindowClose ( Marker marker)
Called when the marker's info window is closed.
Public Methods
public
abstract
void
onInfoWindowClose
( Marker marker)
Called when the marker's info window is closed.
This is called on the Android UI thread.
Parameters
marker
The marker of the info window that was closed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
