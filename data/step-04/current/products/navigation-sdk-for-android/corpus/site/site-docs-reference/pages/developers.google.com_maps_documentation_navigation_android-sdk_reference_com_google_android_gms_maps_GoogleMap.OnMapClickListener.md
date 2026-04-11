---
title: "GoogleMap.OnMapClickListener \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapClickListener
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapClickListener
  title: "GoogleMap.OnMapClickListener \_|\_ Navigation SDK for Android \_|\_ Google\
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
Reference
Send feedback
GoogleMap.OnMapClickListener
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GoogleMap.OnMapClickListener is an interface to handle user tap interactions on a Google Map.
onMapClick() method within this interface is triggered when a user taps on the map, provided no overlays have already handled the event.
This method provides the geographical coordinates ( LatLng ) of the tapped point and is executed on the Android UI thread.
public static interface
GoogleMap.OnMapClickListener
Callback interface for when the user taps on the map.
Listeners will be invoked on the Android UI thread.
Public Method Summary
abstract
void
onMapClick ( LatLng point)
Called when the user makes a tap gesture on the map, but only if none of the overlays of the
map handled the gesture.
Public Methods
public
abstract
void
onMapClick
( LatLng point)
Called when the user makes a tap gesture on the map, but only if none of the overlays of the
map handled the gesture. Implementations of this method are always invoked on the Android UI
thread.
Parameters
point
The point on the ground (projected from the screen point) that was tapped.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
