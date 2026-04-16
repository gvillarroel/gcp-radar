---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSNavigationMutableWaypoint
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSNavigationMutableWaypoint
  title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\
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
iOS
Navigation SDK for iOS
Reference
Send feedback
GoogleNavigation Framework Reference
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GMSNavigationMutableWaypoint allows customization of waypoint behavior for navigation.
It enables setting preferences for arriving on the same side of the road or with a specific heading.
Waypoints can be designated as vehicle stopovers for pickup/drop-off optimization, applicable to DRIVE and TWO_WHEELER travel modes.
By default, preferSameSideOfRoad and vehicleStopover are NO, while preferredHeading is -1 (unset).
GMSNavigationMutableWaypoint
@interface GMSNavigationMutableWaypoint : GMSNavigationWaypoint
A mutable waypoint class.
preferSameSideOfRoad
Whether it is preferred to route the driver to the same side of the road. The route will arrive
on the preferred side of the road unless there is a significant delay caused by a road closure
or slow-moving traffic. Default to NO.
Setting this to true clears any value in preferredHeading .
Declaration
Swift
var preferSameSideOfRoad : Bool { get set }
Objective-C
@property ( nonatomic ) BOOL preferSameSideOfRoad ;
preferredHeading
An angle used to express the direction of traffic on the side of the road that the vehicle
should arrive on. Consequently, it is not useful for one-way streets.
Units expressed in degrees [0, 360], where 0 means North and angles increase clockwise.
Default and unset value is -1.
Setting a valid value will clear the preferSameSideOfRoad .
Declaration
Swift
var preferredHeading : Int32 { get set }
Objective-C
@property ( nonatomic ) int32_t preferredHeading ;
vehicleStopover
Indicates that the waypoint is meant for vehicles to stop at, where the intention is to either
pickup or drop-off. When you set this value, waypoints on roads that are unsuitable for pickup
and drop-off may be adjusted to a more suitable location. This option works only for DRIVE and
TWO_WHEELER travel modes. Default to NO.
Declaration
Swift
var vehicleStopover : Bool { get set }
Objective-C
@property ( nonatomic ) BOOL vehicleStopover ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["GMSNavigationMutableWaypoint allows modifications to route waypoints. Key actions include setting `preferSameSideOfRoad` to guide drivers to the same road side, clearing any `preferredHeading` value. `preferredHeading` defines traffic direction with a 0-360 degree angle, clearing `preferSameSideOfRoad`. `vehicleStopover` indicates a waypoint for vehicle stops, like pickups/drop-offs, adjusting unsuitable locations and operating only in DRIVE and TWO_WHEELER modes. All default to NO except for `preferredHeading` that is -1.\n"]]
