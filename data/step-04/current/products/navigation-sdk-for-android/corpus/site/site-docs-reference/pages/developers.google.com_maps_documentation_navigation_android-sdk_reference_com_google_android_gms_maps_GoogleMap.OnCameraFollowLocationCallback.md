---
title: "GoogleMap.OnCameraFollowLocationCallback \_|\_ Navigation SDK for Android\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraFollowLocationCallback
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraFollowLocationCallback
  title: "GoogleMap.OnCameraFollowLocationCallback \_|\_ Navigation SDK for Android\
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
GoogleMap.OnCameraFollowLocationCallback
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GoogleMap.OnCameraFollowLocationCallback provides updates when the map's camera enters or exits the "follow location" mode.
onCameraStartedFollowingLocation() is called when the camera begins following the user's location, typically triggered by GoogleMap.followMyLocation() .
onCameraStoppedFollowingLocation() is called when the camera stops following the user's location, which can happen due to user interaction or API calls that move the camera.
public static interface
GoogleMap.OnCameraFollowLocationCallback
Callback interface to get updates related to camera entering or exiting follow mode.
Public Method Summary
abstract
void
onCameraStartedFollowingLocation ()
Called when the camera starts following current location, typically will get called in
response to GoogleMap.followMyLocation(int) .
abstract
void
onCameraStoppedFollowingLocation ()
Called when the camera stops following current location.
Public Methods
public
abstract
void
onCameraStartedFollowingLocation
()
Called when the camera starts following current location, typically will get called in
response to GoogleMap.followMyLocation(int) .
public
abstract
void
onCameraStoppedFollowingLocation
()
Called when the camera stops following current location. A camera already following location
will exit the follow mode if the camera is moved via user gesture or an api call GoogleMap.moveCamera(CameraUpdate) , GoogleMap.animateCamera(CameraUpdate) etc.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
