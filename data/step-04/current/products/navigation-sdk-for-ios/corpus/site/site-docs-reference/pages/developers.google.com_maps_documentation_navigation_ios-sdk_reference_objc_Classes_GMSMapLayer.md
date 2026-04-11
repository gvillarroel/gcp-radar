---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapLayer
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapLayer
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
GMSMapLayer is a custom subclass of CALayer used as the layer class for GMSMapView and should not be directly instantiated.
It provides access to the camera properties like latitude, longitude, bearing, zoom level, and viewing angle, usually controlled through GMSMapView .
Modifying or animating these properties might interrupt ongoing user gestures on the map, and user gestures during animations will halt the animation.
GMSMapLayer
@interface GMSMapLayer : GMSCALayer
GMSMapLayer is a custom subclass of CALayer , provided as the layer class on GMSMapView .
This layer should not be instantiated directly. It provides model access to the camera normally
defined on GMSMapView .
Modifying or animating these properties will typically interrupt any current gesture on
GMSMapView , e.g., a user’s pan or rotation. Similarly, if a user performs an enabled gesture
during an animation, the animation will stop ‘in-place’ (at the current presentation value).
cameraLatitude
Declaration
Swift
var cameraLatitude : CLLocationDegrees { get set }
Objective-C
@property ( nonatomic ) CLLocationDegrees cameraLatitude
cameraLongitude
Declaration
Swift
var cameraLongitude : CLLocationDegrees { get set }
Objective-C
@property ( nonatomic ) CLLocationDegrees cameraLongitude
cameraBearing
Declaration
Swift
var cameraBearing : CLLocationDirection { get set }
Objective-C
@property ( nonatomic ) CLLocationDirection cameraBearing
cameraZoomLevel
Declaration
Swift
var cameraZoomLevel : Float { get set }
Objective-C
@property ( nonatomic ) float cameraZoomLevel
cameraViewingAngle
Declaration
Swift
var cameraViewingAngle : Double { get set }
Objective-C
@property ( nonatomic ) double cameraViewingAngle
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["`GMSMapLayer`, a subclass of `CALayer`, is the layer class on `GMSMapView`. It provides model access to the map's camera and should not be directly instantiated. Key properties include `cameraLatitude`, `cameraLongitude`, `cameraBearing`, `cameraZoomLevel`, and `cameraViewingAngle`, all of which can be modified or animated. Modifying these camera properties may interrupt gestures, and user gestures during animations will halt them. These properties are settable in both Swift and Objective-C.\n"]]
