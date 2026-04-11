---
title: "Manage waypoints \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints
  title: "Manage waypoints \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
iOS
Navigation SDK for iOS
Send feedback
Manage waypoints
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document explains how to manage waypoint preferences for your app using Side of the Road Routing and Stopover features.
Side of the Road Routing ensures arrival on the correct side of the road using preferSameSideOfRoad or preferredSegmentHeading when creating waypoints.
preferSameSideOfRoad snaps the waypoint to the nearest sidewalk, while preferredSegmentHeading aligns the arrival with traffic flow on the desired side of the road.
The Stopover feature automatically relocates waypoints to safe stopping areas when vehicleStopover is set to YES .
This document describes how you can manage waypoint preferences for your app
by using two features:
Side of the road routing preferences
Stopover
Set side of the road routing preference
By default, the Navigation SDK for iOS finds the quickest route to a
waypoint, however this doesn't guarantee that the user will arrive on the
desired side of the road, for example, the side of the road that a rideshare
driver's customer is waiting on. The Side of the Road Routing Preference
feature lets you ensure that the vehicle arrives on the correct side of the
road.
How it works
You set the preference for arriving on a particular side of the road when you
create the waypoint for that stop. You can specify the preference in one of two
ways.
Prefer the same side of the road
You provide the geographic coordinates of the waypoint, and then set a flag
preferSameSideOfRoad
that indicates that you prefer to arrive on the same side of the road as the
waypoint—snapped to the nearest sidewalk.
( nullable instancetype ) initWithLocation : ( CLLocationCoordinate2D ) location
title :( NSString * ) title
preferSameSideOfRoad :( BOOL ) preferSameSideOfRoad ;
Key Point: In some situations, when the waypoint is snapped to the side of the
nearest road, the nearest road might not be the right one. For example, it might
be a road around the corner from a waiting rideshare customer. You can prevent
this from occurring by using preferredSegmentHeading instead of
preferSameSideOfRoad (see the next section for details).
Set an arrival heading
You provide the geographic coordinates of the waypoint, and then provide an
arrival heading
preferredSegmentHeading
that matches the direction of traffic flow on the same side of the road as the
destination.
( nullable instancetype ) initWithLocation : ( CLLocationCoordinate2D ) location
title :( NSString * ) title
preferredSegmentHeading :( int32_t ) preferredSegmentHeading ;
The Navigation SDK chooses the road segment closest to the
waypoint—that has a lane direction that aligns (within +/- 55 degrees) with the
side of the road that the waypoint is on.
Set stopover preference
In certain places, it's not possible for users to stop safely (for example,
elevated areas, ferries, underground locations, and other areas of limited
access). The Stopover feature relocates the waypoint to a nearby place if
its location is not suitable for a user to make a stop. When you set
vehicleStopover to YES , the waypoint is automatically relocated when
the route is calculated, if an alternate location is available.
How it works
You set the preference for a stopover when creating the waypoint for that stop.
To do this, set the preference for a stopover on a
GMSNavigationMutableWaypoint as shown in the following example:
Swift
let location = CLLocationCoordinate2D ( latitude : 47.67 , longitude : - 122.20 )
let waypoint = GMSNavigationMutableWaypoint ( location : location , title : "waypoint from location" ) !
waypoint . vehicleStopover = true
mapView . navigator ?. setDestinations ([ waypoint ], routingOptions : routingOptions , callback : {...})
Objective-C
CLLocationCoordinate2D location = CLLocationCoordinate2DMake ( 47.67 , -122.20 );
GMSNavigationMutableWaypoint * waypoint =
[[ GMSNavigationMutableWaypoint alloc ] initWithLocation : location
title : @"waypoint from location" ];
waypoint . vehicleStopover = YES ;
[ _mapView . navigator setDestinations : @[ waypoint1 ]
routingOptions : routingOptions
callback : ^ ( GMSRouteStatus routeStatus ){...}];
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
