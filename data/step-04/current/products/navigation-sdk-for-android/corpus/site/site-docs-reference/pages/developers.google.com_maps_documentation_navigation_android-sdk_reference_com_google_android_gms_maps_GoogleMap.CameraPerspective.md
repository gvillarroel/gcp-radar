---
title: "GoogleMap.CameraPerspective \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.CameraPerspective
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.CameraPerspective
  title: "GoogleMap.CameraPerspective \_|\_ Navigation SDK for Android \_|\_ Google\
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
GoogleMap.CameraPerspective
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GoogleMap.CameraPerspective is used to define the camera's orientation when using GoogleMap.followMyLocation() .
It offers three perspective options: TILTED , TOP_DOWN_HEADING_UP , and TOP_DOWN_NORTH_UP .
TILTED provides a tilted view aligned with the user's direction, commonly used in navigation.
TOP_DOWN_HEADING_UP offers a top-down view oriented with the camera's heading.
TOP_DOWN_NORTH_UP presents a top-down view with north at the top.
public static abstract @interface
GoogleMap.CameraPerspective
implements
Annotation
A CameraPerspective is a parameter given to the GoogleMap.followMyLocation(int) to specify the
orientation of the camera.
Constant Summary
int
TILTED
A tilted perspective facing in the same direction as the user.
int
TOP_DOWN_HEADING_UP
A heading-facing top-down perspective of the camera's target.
int
TOP_DOWN_NORTH_UP
A north-facing top-down perspective of the camera's target.
Inherited Method Summary
From interface
java.lang.annotation.Annotation
abstract
Class<? extends Annotation>
annotationType ()
abstract
boolean
equals (Object arg0)
abstract
int
hashCode ()
abstract
String
toString ()
Constants
public
static
final
int
TILTED
A tilted perspective facing in the same direction as the user. Commonly used during driving
navigation.
Constant Value:
0
public
static
final
int
TOP_DOWN_HEADING_UP
A heading-facing top-down perspective of the camera's target.
Constant Value:
2
public
static
final
int
TOP_DOWN_NORTH_UP
A north-facing top-down perspective of the camera's target.
Constant Value:
1
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
