---
title: "GoogleMap.OnCameraMoveCanceledListener \_|\_ Navigation SDK for Android \_\
  |\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveCanceledListener
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveCanceledListener
  title: "GoogleMap.OnCameraMoveCanceledListener \_|\_ Navigation SDK for Android\
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
GoogleMap.OnCameraMoveCanceledListener
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GoogleMap.OnCameraMoveCanceledListener is an interface used to receive callbacks when the camera movement is stopped or interrupted.
The onCameraMoveCanceled() method is called when GoogleMap.stopAnimation() is explicitly called or when the camera starts moving for a new reason before the previous animation finishes.
Developers should avoid updating or animating the camera within the onCameraMoveCanceled() method as it's called on the Android UI thread.
public static interface
GoogleMap.OnCameraMoveCanceledListener
Callback interface for when the camera's motion has been stopped or when the camera starts
moving for a new reason.
Public Method Summary
abstract
void
onCameraMoveCanceled ()
Called when the developer explicitly calls the GoogleMap.stopAnimation() method or if
the reason for camera motion has changed before the onCameraIdle had a chance to fire after
the previous animation.
Public Methods
public
abstract
void
onCameraMoveCanceled
()
Called when the developer explicitly calls the GoogleMap.stopAnimation() method or if
the reason for camera motion has changed before the onCameraIdle had a chance to fire after
the previous animation. Do not update or animate the camera from within this method.
This is called on the Android UI thread.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
