---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSCameraPosition
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSCameraPosition
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
GMSCameraPosition is an immutable class that defines the camera's position and orientation on a map, including target location, zoom level, bearing, and viewing angle.
It provides various initializers and constructors to create a GMSCameraPosition instance with desired properties, handling the clamping of camera values automatically.
Developers can specify the camera's target using latitude/longitude or a CLLocationCoordinate2D object.
The zoom level determines the magnification, bearing indicates the camera's direction in degrees clockwise from north, and viewing angle represents the camera's tilt from the nadir.
A helper method allows calculating the zoom level needed to display a specific distance on the map based on screen points.
GMSCameraPosition
@interface GMSCameraPosition : NSObject < NSCopying , NSMutableCopying >
An immutable class that aggregates all camera position parameters.
target
Location on the Earth towards which the camera points.
Declaration
Swift
var target : CLLocationCoordinate2D { get }
Objective-C
@property ( nonatomic , readonly ) CLLocationCoordinate2D target ;
zoom
Zoom level. Zoom uses an exponentional scale, where zoom 0 represents the entire world as a
256 x 256 square. Each successive zoom level increases magnification by a factor of 2. So at
zoom level 1, the world is 512x512, and at zoom level 2, the entire world is 1024x1024.
Declaration
Swift
var zoom : Float { get }
Objective-C
@property ( nonatomic , readonly ) float zoom ;
bearing
Bearing of the camera, in degrees clockwise from true north.
Declaration
Swift
var bearing : CLLocationDirection { get }
Objective-C
@property ( nonatomic , readonly ) CLLocationDirection bearing ;
viewingAngle
The angle, in degrees, of the camera from the nadir (directly facing the Earth). 0 is
straight down, 90 is parallel to the ground. Note that the maximum angle allowed is dependent
on the zoom. You can think of it as a series of line segments as a function of zoom, rather
than a step function. For zoom 16 and above, the maximum angle is 65 degrees. For zoom 10 and
below, the maximum angle is 30 degrees.
Declaration
Swift
var viewingAngle : Double { get }
Objective-C
@property ( nonatomic , readonly ) double viewingAngle ;
-initWithTarget:zoom:bearing:viewingAngle:
Designated initializer. Configures this GMSCameraPosition with all available camera properties.
Building a GMSCameraPosition via this initializer (or by the following convenience
constructors) will implicitly clamp camera values.
Declaration
Swift
init ( target : CLLocationCoordinate2D , zoom : Float , bearing : CLLocationDirection , viewingAngle : Double )
Objective-C
- ( nonnull instancetype ) initWithTarget :( CLLocationCoordinate2D ) target
zoom :( float ) zoom
bearing :( CLLocationDirection ) bearing
viewingAngle :( double ) viewingAngle ;
Parameters
target
Location on the earth towards which the camera points.
zoom
The zoom level near the center of the screen.
bearing
Bearing of the camera in degrees clockwise from true north.
viewingAngle
The angle, in degrees, of the camera angle from the nadir (directly facing
the Earth)
-initWithTarget:zoom:
Convenience initializer for GMSCameraPosition for a particular target and zoom level. This will
set the bearing and viewingAngle properties of this camera to zero defaults (i.e., directly
facing the Earth’s surface, with the top of the screen pointing north).
Declaration
Swift
init ( target : CLLocationCoordinate2D , zoom : Float )
Objective-C
- ( nonnull instancetype ) initWithTarget :( CLLocationCoordinate2D ) target
zoom :( float ) zoom ;
Parameters
target
Location on the earth towards which the camera points.
zoom
The zoom level near the center of the screen.
-initWithLatitude:longitude:zoom:
Convenience initializer for GMSCameraPosition for a particular latitidue, longitude and zoom
level. This will set the bearing and viewingAngle properties of this camera to zero defaults
(i.e., directly facing the Earth’s surface, with the top of the screen pointing north).
Declaration
Swift
init ( latitude : CLLocationDegrees , longitude : CLLocationDegrees , zoom : Float )
Objective-C
- ( nonnull instancetype ) initWithLatitude :( CLLocationDegrees ) latitude
longitude :( CLLocationDegrees ) longitude
zoom :( float ) zoom ;
Parameters
latitude
The latitude component of the location towards which the camera points.
longitude
The latitude component of the location towards which the camera points.
zoom
The zoom level near the center of the screen.
-initWithLatitude:longitude:zoom:bearing:viewingAngle:
Convenience initializer for GMSCameraPosition , with latitude/longitude and all other camera
properties as per -initWithTarget:zoom:bearing:viewingAngle:.
Declaration
Swift
init ( latitude : CLLocationDegrees , longitude : CLLocationDegrees , zoom : Float , bearing : CLLocationDirection , viewingAngle : Double )
Objective-C
- ( nonnull instancetype ) initWithLatitude :( CLLocationDegrees ) latitude
longitude :( CLLocationDegrees ) longitude
zoom :( float ) zoom
bearing :( CLLocationDirection ) bearing
viewingAngle :( double ) viewingAngle ;
Parameters
latitude
The latitude component of the location towards which the camera points.
longitude
The latitude component of the location towards which the camera points.
zoom
The zoom level near the center of the screen.
bearing
Bearing of the camera in degrees clockwise from true north.
viewingAngle
The angle, in degrees, of the camera angle from the nadir (directly facing
the Earth)
+cameraWithTarget:zoom:
Convenience constructor for GMSCameraPosition for a particular target and zoom level. This will
set the bearing and viewingAngle properties of this camera to zero defaults (i.e., directly
facing the Earth’s surface, with the top of the screen pointing north).
Declaration
Swift
class func camera ( withTarget target : CLLocationCoordinate2D , zoom : Float ) -> Self
Objective-C
+ ( nonnull instancetype ) cameraWithTarget :( CLLocationCoordinate2D ) target
zoom :( float ) zoom ;
+cameraWithLatitude:longitude:zoom:
Convenience constructor for GMSCameraPosition , as per +cameraWithTarget:zoom: .
Declaration
Swift
class func camera ( withLatitude latitude : CLLocationDegrees , longitude : CLLocationDegrees , zoom : Float ) -> Self
Objective-C
+ ( nonnull instancetype ) cameraWithLatitude :( CLLocationDegrees ) latitude
longitude :( CLLocationDegrees ) longitude
zoom :( float ) zoom ;
+cameraWithTarget:zoom:bearing:viewingAngle:
Convenience constructor for GMSCameraPosition , with all camera properties as per
+initWithTarget:zoom:bearing:viewingAngle: .
Declaration
Swift
class func camera ( withTarget target : CLLocationCoordinate2D , zoom : Float , bearing : CLLocationDirection , viewingAngle : Double ) -> Self
Objective-C
+ ( nonnull instancetype ) cameraWithTarget :( CLLocationCoordinate2D ) target
zoom :( float ) zoom
bearing :( CLLocationDirection ) bearing
viewingAngle :( double ) viewingAngle ;
+cameraWithLatitude:longitude:zoom:bearing:viewingAngle:
Convenience constructor for GMSCameraPosition , with latitude/longitude and all other camera
properties as per +initWithTarget:zoom:bearing:viewingAngle: .
Declaration
Swift
class func camera ( withLatitude latitude : CLLocationDegrees , longitude : CLLocationDegrees , zoom : Float , bearing : CLLocationDirection , viewingAngle : Double ) -> Self
Objective-C
+ ( nonnull instancetype ) cameraWithLatitude :( CLLocationDegrees ) latitude
longitude :( CLLocationDegrees ) longitude
zoom :( float ) zoom
bearing :( CLLocationDirection ) bearing
viewingAngle :( double ) viewingAngle ;
+zoomAtCoordinate:forMeters:perPoints:
Get the zoom level at which meters distance, at given coord on Earth, correspond to the
specified number of screen points .
For extremely large or small distances the returned zoom level may be smaller or larger than the
minimum or maximum zoom level allowed on the camera.
This helper method is useful for building camera positions that contain specific physical areas
on Earth.
Declaration
Swift
class func zoom ( at coordinate : CLLocationCoordinate2D , forMeters meters : CLLocationDistance , perPoints points : CGFloat ) -> Float
Objective-C
+ ( float ) zoomAtCoordinate :( CLLocationCoordinate2D ) coordinate
forMeters :( CLLocationDistance ) meters
perPoints :( CGFloat ) points ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
