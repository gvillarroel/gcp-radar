---
title: "GoogleMap.OnCameraMoveListener \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveListener
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveListener
  title: "GoogleMap.OnCameraMoveListener \_|\_ Navigation SDK for Android \_|\_ Google\
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
GoogleMap.OnCameraMoveListener
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The GoogleMap.OnCameraMoveListener interface provides a callback mechanism for responding to camera movements on a Google Map.
The onCameraMove() method is called frequently as the camera moves, allowing developers to perform actions based on the current camera position.
Developers should avoid performing resource-intensive tasks within the onCameraMove() method due to its frequent execution.
The onCameraMove() callback is executed on the main Android UI thread, which handles UI updates and user interactions.
public static interface
GoogleMap.OnCameraMoveListener
Callback interface for when the camera changes position.
Public Method Summary
abstract
void
onCameraMove ()
Called repeatedly as the camera continues to move after an onCameraMoveStarted call.
Public Methods
public
abstract
void
onCameraMove
()
Called repeatedly as the camera continues to move after an onCameraMoveStarted call. This may
be called as often as once every frame and should not perform expensive operations.
This is called on the Android UI thread.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
