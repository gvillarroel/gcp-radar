---
title: "GoogleMap.OnIndoorStateChangeListener \_|\_ Navigation SDK for Android \_\
  |\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener
  title: "GoogleMap.OnIndoorStateChangeListener \_|\_ Navigation SDK for Android \_\
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
GoogleMap.OnIndoorStateChangeListener
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GoogleMap.OnIndoorStateChangeListener is a listener that monitors changes in indoor states within a Google Map and notifies events on the Android UI thread.
It provides two methods: onIndoorBuildingFocused() which is triggered when the focused building on the map changes, and onIndoorLevelActivated() which is called when the active level within a building changes.
The focused building is determined by the building centered in the viewport or selected by the user, while the active level is the selected or visited level within a building.
These methods are only called after the relevant building data becomes available, ensuring accurate information is provided to the listener.
public static interface
GoogleMap.OnIndoorStateChangeListener
A listener for when the indoor state changes. Events are notified on the Android UI thread.
Public Method Summary
abstract
void
onIndoorBuildingFocused ()
The map maintains a notion of focused building , which is the building currently
centered in the viewport or otherwise selected by the user through the UI or the location
provider.
abstract
void
onIndoorLevelActivated ( IndoorBuilding building)
The map keeps track of the active level for each building which has been visited or
otherwise had a level selected.
Public Methods
public
abstract
void
onIndoorBuildingFocused
()
The map maintains a notion of focused building , which is the building currently
centered in the viewport or otherwise selected by the user through the UI or the location
provider. This callback is called when the focused building changes.
This method will only be called after the building data has become available.
The focused building is not referenced as a parameter of this method due to
synchronization issues: if multiple focus requests are handled, listeners may be notified
out-of-order, so should rely on getFocusedBuilding() itself to provide the most up-to-date
information. It is possible that more than one onIndoorBuildingFocused call will be made
without the focused building actually changing.
public
abstract
void
onIndoorLevelActivated
( IndoorBuilding building)
The map keeps track of the active level for each building which has been visited or
otherwise had a level selected. When that level changes, this callback will be triggered
regardless of whether the building is focused or not. This callback is also called when the
default level first becomes available.
This method will only be called after the building data has become available.
Parameters
building
the building for which the active level has changed, never null.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
