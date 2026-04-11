---
title: "Manage waypoints \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/manage-waypoints
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/manage-waypoints
  title: "Manage waypoints \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
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
Send feedback
Manage waypoints
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK for Android now uses Waypoint.Builder to create waypoints with options for side-of-road routing and stopover preferences.
You can ensure arrival on the desired side of the road by setting setPreferSameSideOfRoad or providing an arrival heading using setPreferredHeading when building a waypoint.
The setVehicleStopover preference within Waypoint.Builder relocates waypoints to safer nearby locations if the initial location isn't suitable for stopping.
Notice: fromLatLng() and fromPlaceId()
are deprecated, but will remain available with no further updates. We
recommend migrating to the new Waypoint.Builder .
By default, the Navigation SDK for Android finds the quickest route to a
waypoint, however this doesn't guarantee that the vehicle will arrive on the
side of the road that the consumer is waiting on or that the arrival place is
safe for the driver to stop at. This guide describes two feature you can use for
these situations:
Side of the road routing preference
Stopover feature
Side of the road routing preference
You can set a preference for arriving on a particular side of the
road when you create a waypoint for a stop. You can specify the preference
in one of two ways: prefer the same side of the road, or provide an arrival
heading.
Prefer the same side of the road
You provide the geographic coordinates of the waypoint, and then set a flag
( setPreferSameSideOfRoad ) that indicates that you prefer to arrive on the same
side of the road as the waypoint—snapped to the nearest sidewalk.
Waypoint waypoint =
Waypoint.builder()
.setLatLng(latitude, longitude)
.setTitle("Somewhere in Sydney")
.setPreferSameSideOfRoad(true)
.build()
Key Point: In some situations, when the waypoint is snapped to the side of the
nearest road, the nearest road might not be the right one. For example, it might
be a road around the corner from the waiting consumer. You can prevent this from
occurring by using setPreferredHeading instead of setPreferSameSideOfRoad
(see the next section for details).
Set an arrival heading
You provide the geographic coordinates of the waypoint, and then provide an
arrival heading ( setPreferredHeading ) that matches the direction of
traffic flow on the same side of the road as the waiting consumer.
Waypoint waypoint =
Waypoint.builder()
.setLatLng(latitude, longitude)
.setTitle("Somewhere in Sydney")
.setPreferredHeading(preferredHeading)
.build()
The Navigation SDK chooses the road segment closest to the
waypoint—that has a lane direction that aligns (within +/- 55 degrees) with the
side of the road that the waypoint is on.
Set stopover preference
In certain places, it's not possible for drivers to stop safely (for example,
elevated areas, ferries, underground locations, and other areas of limited
access). The Stopover feature relocates the waypoint to a nearby place if
its location is not suitable for a vehicle to make a stop. When you set
setVehicleStopover to true , the waypoint is automatically relocated when
the route is calculated, if an alternate location is available.
How it works
You set the preference for a stopover when creating the waypoint for that stop.
To do this, specify the setVehicleStopover preference as shown in the
following example:
Waypoint waypoint =
Waypoint.builder()
.setLatLng(latitude, longitude)
.setTitle("Somewhere in Sydney")
.setVehicleStopover(true)
.build()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
