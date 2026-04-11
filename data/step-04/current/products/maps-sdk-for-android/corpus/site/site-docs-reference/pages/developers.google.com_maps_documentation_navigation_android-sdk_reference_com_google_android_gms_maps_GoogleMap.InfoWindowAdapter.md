---
title: "GoogleMap.InfoWindowAdapter \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.InfoWindowAdapter
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.InfoWindowAdapter
  title: "GoogleMap.InfoWindowAdapter \_|\_ Navigation SDK for Android \_|\_ Google\
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
GoogleMap.InfoWindowAdapter
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GoogleMap.InfoWindowAdapter allows customization of info windows displayed for markers on a Google Map.
It offers two methods: getInfoWindow() to customize the entire info window and getInfoContents() to customize only the content within the default frame.
If getInfoWindow() returns a view, it's used for the whole info window; if it returns null , the default frame is used with content from getInfoContents() .
Changes to views returned by these methods after they're called might not be reflected in the displayed info window.
public static interface
GoogleMap.InfoWindowAdapter
Provides views for customized rendering of info windows.
Methods on this provider are called when it is time to show an info window for a marker,
regardless of the cause (either a user gesture or a programmatic call to Marker.showInfoWindow() . Since there is only one info window shown at any one time, this
provider may choose to reuse views, or it may choose to create new views on each method
invocation.
When constructing an info window, methods in this class are called in a defined order. To
replace the default info window, override getInfoWindow(Marker) with your custom rendering and
return null for getInfoContents(Marker) . To replace only the info window contents
inside the default info window frame (the callout bubble), return null in getInfoWindow(Marker) and override getInfoContents(Marker) instead.
Developer Guide
For more information, read the Info
Windows developer guide.
Public Method Summary
abstract
View
getInfoContents ( Marker marker)
Provides custom contents for the default info window frame of a marker.
abstract
View
getInfoWindow ( Marker marker)
Provides a custom info window for a marker.
Public Methods
public
abstract
View
getInfoContents
( Marker marker)
Provides custom contents for the default info window frame of a marker. This method is only
called if getInfoWindow(Marker) first returns null . If this method returns a view,
it will be placed inside the default info window frame. If you change this view after this
method is called, those changes will not necessarily be reflected in the rendered info
window. If this method returns null , the default rendering will be used instead.
Parameters
marker
The marker for which an info window is being populated.
Returns
A custom view to display as contents in the info window for marker , or null
to use the default content rendering instead.
public
abstract
View
getInfoWindow
( Marker marker)
Provides a custom info window for a marker. If this method returns a view, it is used for the
entire info window. If you change this view after this method is called, those changes will
not necessarily be reflected in the rendered info window. If this method returns null
, the default info window frame will be used, with contents provided by getInfoContents(Marker) .
Parameters
marker
The marker for which an info window is being populated.
Returns
A custom info window for marker , or null to use the default info
window frame with custom contents .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
