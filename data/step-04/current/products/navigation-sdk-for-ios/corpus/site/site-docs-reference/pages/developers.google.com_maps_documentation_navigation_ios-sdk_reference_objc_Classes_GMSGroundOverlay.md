---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSGroundOverlay
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSGroundOverlay
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
GMSGroundOverlay is a non-facing-camera overlay used to display images on the Earth's surface within specified boundaries.
Its position is determined by an anchor point within its bounds and can be rotated using the bearing property.
The overlay's appearance is customizable through properties like icon , opacity , and bounds .
Developers can create ground overlays using convenience constructors specifying either bounds and icon or position, icon, and zoom level.
Unlike markers, ground overlays do not have a default image and will not be visible if the icon property is nil.
GMSGroundOverlay
@interface GMSGroundOverlay : GMSOverlay
GMSGroundOverlay specifies the available options for a ground overlay that exists on the
Earth’s surface. Unlike a marker, the position of a ground overlay is specified explicitly and it
does not face the camera.
position
The position of this GMSGroundOverlay , or more specifically, the physical position of its
anchor. If this is changed, bounds will be moved around the new position.
Declaration
Swift
var position : CLLocationCoordinate2D { get set }
Objective-C
@property ( nonatomic ) CLLocationCoordinate2D position ;
anchor
The anchor specifies where this GMSGroundOverlay is anchored to the Earth in relation to
bounds . If this is modified, position will be set to the corresponding new position within
bounds .
Declaration
Swift
var anchor : CGPoint { get set }
Objective-C
@property ( nonatomic ) CGPoint anchor ;
icon
Icon to render within bounds on the Earth. If this is nil, the overlay will not be visible
(unlike GMSMarker which has a default image).
Declaration
Swift
var icon : UIImage ? { get set }
Objective-C
@property ( nonatomic , nullable ) UIImage * icon ;
opacity
Sets the opacity of the ground overlay, between 0 (completely transparent) and 1 (default)
inclusive.
Declaration
Swift
var opacity : Float { get set }
Objective-C
@property ( nonatomic ) float opacity ;
bearing
Bearing of this ground overlay, in degrees. The default value, zero, points this ground overlay
up/down along the normal Y axis of the earth.
Declaration
Swift
var bearing : CLLocationDirection { get set }
Objective-C
@property ( nonatomic ) CLLocationDirection bearing ;
bounds
The 2D bounds on the Earth in which icon is drawn. Changing this value will adjust position
accordingly.
Declaration
Swift
var bounds : GMSCoordinateBounds ? { get set }
Objective-C
@property ( nonatomic , nullable ) GMSCoordinateBounds * bounds ;
+groundOverlayWithBounds:icon:
Convenience constructor for GMSGroundOverlay for a particular bounds and icon . Will set
position accordingly.
Declaration
Swift
convenience init ( bounds : GMSCoordinateBounds ?, icon : UIImage ?)
Objective-C
+ ( nonnull instancetype ) groundOverlayWithBounds :
( nullable GMSCoordinateBounds * ) bounds
icon :( nullable UIImage * ) icon ;
+groundOverlayWithPosition:icon:zoomLevel:
Constructs a GMSGroundOverlay that renders the given icon at position , as if the image’s
actual size matches camera pixels at zoomLevel .
Declaration
Swift
convenience init ( position : CLLocationCoordinate2D , icon : UIImage ?, zoomLevel : CGFloat )
Objective-C
+ ( nonnull instancetype ) groundOverlayWithPosition :
( CLLocationCoordinate2D ) position
icon :( nullable UIImage * ) icon
zoomLevel :( CGFloat ) zoomLevel ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
