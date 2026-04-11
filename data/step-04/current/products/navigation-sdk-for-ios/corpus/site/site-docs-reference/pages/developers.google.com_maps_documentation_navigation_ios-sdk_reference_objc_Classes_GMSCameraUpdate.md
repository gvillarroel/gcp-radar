---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSCameraUpdate
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSCameraUpdate
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
GMSCameraUpdate objects are used to change the viewpoint and properties of a GMSMapView .
They offer methods for zooming, panning, and adjusting the camera target.
You can fit the camera to specific bounds with optional padding or edge insets.
Camera updates are created using factory methods, not direct instantiation.
They encapsulate logic for camera modifications, streamlining map interactions.
GMSCameraUpdate
@interface GMSCameraUpdate : NSObject
GMSCameraUpdate represents an update that may be applied to a GMSMapView .
It encapsulates some logic for modifying the current camera.
It should only be constructed using the factory helper methods below.
+zoomIn
Returns a GMSCameraUpdate that zooms in on the map.
The zoom increment is 1.0.
Declaration
Swift
class func zoomIn () -> GMSCameraUpdate
Objective-C
+ ( nonnull GMSCameraUpdate * ) zoomIn ;
+zoomOut
Returns a GMSCameraUpdate that zooms out on the map.
The zoom increment is -1.0.
Declaration
Swift
class func zoomOut () -> GMSCameraUpdate
Objective-C
+ ( nonnull GMSCameraUpdate * ) zoomOut ;
+zoomBy:
Returns a GMSCameraUpdate that changes the zoom by the specified amount.
Declaration
Swift
class func zoom ( by delta : Float ) -> GMSCameraUpdate
Objective-C
+ ( nonnull GMSCameraUpdate * ) zoomBy :( float ) delta ;
+zoomTo:
Returns a GMSCameraUpdate that sets the zoom to the specified amount.
Declaration
Swift
class func zoom ( to zoom : Float ) -> GMSCameraUpdate
Objective-C
+ ( nonnull GMSCameraUpdate * ) zoomTo :( float ) zoom ;
+setTarget:
Returns a GMSCameraUpdate that sets the camera target to the specified coordinate.
Declaration
Swift
class func setTarget ( _ target : CLLocationCoordinate2D ) -> GMSCameraUpdate
Objective-C
+ ( nonnull GMSCameraUpdate * ) setTarget :( CLLocationCoordinate2D ) target ;
+setTarget:zoom:
Returns a GMSCameraUpdate that sets the camera target and zoom to the specified values.
Declaration
Swift
class func setTarget ( _ target : CLLocationCoordinate2D , zoom : Float ) -> GMSCameraUpdate
Objective-C
+ ( nonnull GMSCameraUpdate * ) setTarget :( CLLocationCoordinate2D ) target
zoom :( float ) zoom ;
+setCamera:
Returns a GMSCameraUpdate that sets the camera to the specified GMSCameraPosition .
Declaration
Swift
class func setCamera ( _ camera : GMSCameraPosition ) -> GMSCameraUpdate
Objective-C
+ ( nonnull GMSCameraUpdate * ) setCamera :( nonnull GMSCameraPosition * ) camera ;
+fitBounds:
Returns a GMSCameraUpdate that transforms the camera such that the specified bounds are
centered on screen at the greatest possible zoom level. The bounds will have a default padding of
64 points.
The returned camera update will set the camera’s bearing and tilt to their default zero values
(i.e., facing north and looking directly at the Earth).
Declaration
Swift
class func fit ( _ bounds : GMSCoordinateBounds ) -> GMSCameraUpdate
Objective-C
+ ( nonnull GMSCameraUpdate * ) fitBounds :( nonnull GMSCoordinateBounds * ) bounds ;
+fitBounds:withPadding:
This is similar to +fitBounds: but allows specifying the padding (in points) in order to inset
the bounding box from the view’s edges.
If the requested padding is larger than the view size in either the vertical or horizontal
direction the map will be maximally zoomed out.
Declaration
Swift
class func fit ( _ bounds : GMSCoordinateBounds , withPadding padding : CGFloat ) -> GMSCameraUpdate
Objective-C
+ ( nonnull GMSCameraUpdate * ) fitBounds :( nonnull GMSCoordinateBounds * ) bounds
withPadding :( CGFloat ) padding ;
+fitBounds:withEdgeInsets:
This is similar to +fitBounds: but allows specifying edge insets in order to inset the bounding
box from the view’s edges.
If the requested edgeInsets are larger than the view size in either the vertical or horizontal
direction the map will be maximally zoomed out.
Declaration
Swift
class func fit ( _ bounds : GMSCoordinateBounds , with edgeInsets : UIEdgeInsets ) -> GMSCameraUpdate
Objective-C
+ ( nonnull GMSCameraUpdate * ) fitBounds :( nonnull GMSCoordinateBounds * ) bounds
withEdgeInsets :( UIEdgeInsets ) edgeInsets ;
+scrollByX:Y:
Returns a GMSCameraUpdate that shifts the center of the view by the specified number of points
in the x and y directions. X grows to the right, Y grows down.
Declaration
Swift
class func scrollBy ( x dX : CGFloat , y dY : CGFloat ) -> GMSCameraUpdate
Objective-C
+ ( nonnull GMSCameraUpdate * ) scrollByX :( CGFloat ) dX Y :( CGFloat ) dY ;
+zoomBy:atPoint:
Returns a GMSCameraUpdate that zooms with a focus point; the focus point stays fixed on screen.
Declaration
Swift
class func zoom ( by zoom : Float , at point : CGPoint ) -> GMSCameraUpdate
Objective-C
+ ( nonnull GMSCameraUpdate * ) zoomBy :( float ) zoom atPoint :( CGPoint ) point ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
