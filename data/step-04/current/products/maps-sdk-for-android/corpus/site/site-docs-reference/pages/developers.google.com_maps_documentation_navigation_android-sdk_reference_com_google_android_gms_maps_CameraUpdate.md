---
title: "CameraUpdate \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/CameraUpdate
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/CameraUpdate
  title: "CameraUpdate \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
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
CameraUpdate
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
CameraUpdate objects define camera movements for Google Maps on Android.
You create CameraUpdate objects using the CameraUpdateFactory class.
CameraUpdate objects are used with GoogleMap methods like animateCamera and moveCamera to change the map's view.
Refer to the "Camera and View" developer guide for more detailed information and usage examples.
public final class
CameraUpdate
extends Object
Defines a camera move. An object of this type can be used to modify a map's camera by calling
GoogleMap.animateCamera(CameraUpdate) , GoogleMap.animateCamera(CameraUpdate, GoogleMap.CancelableCallback) or GoogleMap.moveCamera(CameraUpdate) .
To obtain a CameraUpdate use the factory class CameraUpdateFactory .
For example, to zoom in on a map, you can use the following code:
GoogleMap map = ...;
map.animateCamera(CameraUpdateFactory.zoomIn());
Developer Guide
For more information, read the Camera and View
developer guide.
Inherited Method Summary
From class
java.lang.Object
boolean
equals (Object arg0)
final
Class<?>
getClass ()
int
hashCode ()
final
void
notify ()
final
void
notifyAll ()
String
toString ()
final
void
wait (long arg0, int arg1)
final
void
wait (long arg0)
final
void
wait ()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
