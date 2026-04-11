---
title: "GoogleMap.OnCameraChangeListener \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraChangeListener
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraChangeListener
  title: "GoogleMap.OnCameraChangeListener \_|\_ Navigation SDK for Android \_|\_\
    \ Google for Developers"
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
GoogleMap.OnCameraChangeListener
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GoogleMap.OnCameraChangeListener is deprecated and replaced by newer, more specific listeners.
It provided a callback for camera position changes but its interaction with the new listeners is undefined.
The onCameraChange method was called after a camera position change, potentially skipping intermediate positions during animations.
Developers should migrate to GoogleMap.OnCameraMoveStartedListener , GoogleMap.OnCameraMoveListener , and GoogleMap.OnCameraIdleListener for better control over camera events.
public static interface
GoogleMap.OnCameraChangeListener
This interface is deprecated. Replaced by GoogleMap.OnCameraMoveStartedListener , GoogleMap.OnCameraMoveListener and
GoogleMap.OnCameraIdleListener . The order in which the deprecated onCameraChange
method will be called in relation to the methods in the new camera change listeners is
undefined.
Callback interface for when the camera changes position.
Public Method Summary
abstract
void
onCameraChange ( CameraPosition position)
Called after the camera position has changed.
Public Methods
public
abstract
void
onCameraChange
( CameraPosition position)
Called after the camera position has changed. During an animation, this listener may not be
notified of intermediate camera positions. It is always called for the final position in the
animation.
This is called on the Android UI thread.
Parameters
position
The CameraPosition at the end of the last camera change.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
