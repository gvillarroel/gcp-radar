---
title: "GoogleMap.OnCameraMoveStartedListener \_|\_ Navigation SDK for Android \_\
  |\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveStartedListener
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveStartedListener
  title: "GoogleMap.OnCameraMoveStartedListener \_|\_ Navigation SDK for Android \_\
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
GoogleMap.OnCameraMoveStartedListener
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GoogleMap.OnCameraMoveStartedListener is a callback interface triggered when camera movement begins on a Google Map.
It provides the reason for the camera movement, categorized as gesture, API animation, or developer animation.
The onCameraMoveStarted method is called when the camera starts moving, providing the reason for the change.
Developers should avoid updating or animating the camera within the onCameraMoveStarted method.
public static interface
GoogleMap.OnCameraMoveStartedListener
Callback interface for when the camera motion starts.
Constant Summary
int
REASON_API_ANIMATION
Non-gesture animation initiated in response to user actions.
int
REASON_DEVELOPER_ANIMATION
Developer initiated animation.
int
REASON_GESTURE
Camera motion initiated in response to user gestures on the map.
Public Method Summary
abstract
void
onCameraMoveStarted (int reason)
Called when the camera starts moving after it has been idle or when the reason for camera
motion has changed.
Constants
public
static
final
int
REASON_API_ANIMATION
Non-gesture animation initiated in response to user actions. For example: zoom buttons, my
location button, or marker clicks.
Constant Value:
2
public
static
final
int
REASON_DEVELOPER_ANIMATION
Developer initiated animation.
Constant Value:
3
public
static
final
int
REASON_GESTURE
Camera motion initiated in response to user gestures on the map. For example: pan, tilt,
pinch to zoom, or rotate.
Constant Value:
1
Public Methods
public
abstract
void
onCameraMoveStarted
(int reason)
Called when the camera starts moving after it has been idle or when the reason for camera
motion has changed. Do not update or animate the camera from within this method.
This is called on the Android UI thread.
Parameters
reason
The reason for the camera change. Possible values:
REASON_GESTURE : User gestures on the map.
REASON_API_ANIMATION : Default animations resulting from user interaction.
REASON_DEVELOPER_ANIMATION : Developer animations.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
