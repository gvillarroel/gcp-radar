---
title: "Collision behavior \_|\_ Maps SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/advanced-markers/collision-behavior
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/advanced-markers/collision-behavior
  title: "Collision behavior \_|\_ Maps SDK for Android \_|\_ Google for Developers"
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
Maps SDK for Android
Guides
Send feedback
Collision behavior
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page explains how to manage marker collision behavior on maps using AdvancedMarkerOptions.collisionBehavior .
Collision behavior dictates how markers are displayed when they overlap, with options including REQUIRED , REQUIRED_AND_HIDES_OPTIONAL , and OPTIONAL_AND_HIDES_LOWER_PRIORITY .
Marker types (bitmap and view) influence collision behavior, with view markers drawn on top of bitmap markers, and zIndex playing a role in determining visibility during overlaps.
For consistent collision handling, it's recommended to use the same marker type (either all bitmap or all view) for all markers on the map.
Select platform:
Android
iOS
JavaScript
This page shows you how to control the collision behavior for a marker.
Set collision behavior for a marker
Collision behavior controls how a marker displays if it collides (overlaps)
with another marker. The way you create an advanced markers
determines how collision behavior works:
Advanced markers created by using
BitmapDescriptorFactory
are referred to as bitmap markers. These markers are drawn by the
core map.
All other advanced markers, including those created by
using the AdvancedMarkerOptions.iconView() method, are referred to as
view markers and are drawn on a layer above the core map.
Note: For optimal collision behavior, you should create all
advanced markers of the same type. That is, if you are using a
view marker for one marker then you should use view markers for all of them.
To set collision behavior, set
AdvancedMarkerOptions.collisionBehavior
to one of the following:
CollisionBehavior.REQUIRED : (default) Always display the marker regardless
of collision.
CollisionBehavior.REQUIRED_AND_HIDES_OPTIONAL Always display the marker
regardless of collision, and hide any OPTIONAL_AND_HIDES_LOWER_PRIORITY
markers or labels that would overlap with the marker.
CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY Display the marker
only if it does not overlap with other markers.
If two bitmap markers overlap, the one with the higher zIndex is
shown.
If they have the same zIndex , the one with the lower vertical screen
position is shown. For more information about the zIndex , see Marker
z-index .
If two view markers overlap, the one with the higher zIndex is
shown. If they have the same zIndex , the last created marker
overlaps any markers created before it.
Because view markers are drawn on a layer above bitmap markers,
view markers overlap bitmap markers. Therefore, you should try
to use markers of the same type for better collision control.
The following example shows setting collision behavior for a marker:
Kotlin
// Collision behavior can only be changed in the AdvancedMarkerOptions object.
// Changes to collision behavior after a marker has been created are not possible
val collisionBehavior : Int = CollisionBehavior . REQUIRED_AND_HIDES_OPTIONAL
val advancedMarkerOptions : AdvancedMarkerOptions = AdvancedMarkerOptions ()
. position ( LatLng ( 10.0 , 10.0 ))
. collisionBehavior ( collisionBehavior )
val marker : Marker = map . addMarker ( advancedMarkerOptions ) ?: error ( "Failed to add marker" )
Java
// Collision behavior can only be changed in the AdvancedMarkerOptions object.
// Changes to collision behavior after a marker has been created are not possible
int collisionBehavior = AdvancedMarkerOptions . CollisionBehavior . REQUIRED_AND_HIDES_OPTIONAL ;
AdvancedMarkerOptions options = new AdvancedMarkerOptions ()
. position ( new LatLng ( 10.0 , 10.0 ))
. collisionBehavior ( collisionBehavior );
Marker marker = map . addMarker ( options );
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
