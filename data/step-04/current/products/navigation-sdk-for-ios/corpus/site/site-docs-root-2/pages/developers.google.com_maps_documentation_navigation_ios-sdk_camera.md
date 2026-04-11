---
title: "Adjust the camera \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/camera
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/camera
  title: "Adjust the camera \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
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
Adjust the camera
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
You can change the user's viewpoint of the map by setting the cameraMode property to following , overview , or free .
Following mode puts the camera behind the current position, overview mode displays the entire route, and free mode allows user interaction.
The map automatically enters free mode when the user pans or zooms, and a Re-center button is available in overview and free modes to return to following mode.
You can automate the return to following mode after a set time interval using a timer to improve user experience.
The camera allows you to change the user's
viewpoint of the map. You can use camera modes to control the behavior of the
map during navigation. To set the camera mode, set the cameraMode property of
the map view, specifying one of the following camera mode constants:
Following — The default camera mode for navigation. Changes the view
angle to 45 degrees and puts the camera behind the current position facing in
the direction of travel. During navigation the camera automatically adjusts
to face in the direction of travel. Pressing the map's Re-center button
will also switch to this mode. The Re-center button is not visible when
this mode is selected.
Overview — Displays an overview of the entire route, zooming as needed
to fit the route into the map view. When this view is selected the
Re-center button is visible.
Free — Lets the user change the map view with gestures .
The camera remains stationary in this view. The map will automatically enter
this view if the user pans or zooms during navigation. When this view is
selected the Re-center button is visible.
To change the camera mode, set the cameraMode property of the map view, as
shown here:
Swift
// Set the mode to "overview":
mapView . cameraMode = . overview
// Set the mode to "free":
mapView . cameraMode = . free
// Set the mode to "following":
mapView . cameraMode = . following
Objective-C
// Set the mode to "overview":
mapView . cameraMode = GMSNavigationCameraModeOverview ;
// Set the mode to "free":
mapView . cameraMode = GMSNavigationCameraModeFree ;
// Set the mode to "following":
mapView . cameraMode = GMSNavigationCameraModeFollowing ;
Automatically recenter the map
When users move the map in Navigation mode, the camera mode for the map
view changes from following mode to free mode. The camera returns to following
mode when the user explicitly presses Re-center . You can automate the
return to following mode by using a timer to set an interval between leaving
following mode, and then automatically returning to it.
Example
The following code example checks to determine whether the map is being moved by
the user while in Navigation mode. If it is, then it sets a timer to switch the
camera mode to following mode, centering the map after five seconds.
Swift
class YourViewController : UIViewController {
@IBOutlet weak var mapView : GMSMapView !
var autoFollowTimer : Timer !
override func viewDidLoad () {
super . viewDidLoad ()
mapView . delegate = self
...
}
...
}
/** Implements the GMSMapViewDelegate protocol. */
extension YourViewController : GMSMapViewDelegate {
func mapView ( _ mapView : GMSMapView , willMove gesture : Bool ) {
if mapView . navigator ?. isGuidanceActive == false { return }
if ! gesture { return }
autoFollowTimer ?. invalidate ()
autoFollowTimer = Timer (
timeInterval : TimeInterval ( 5.0 ),
target : self ,
selector : #selector ( recenterMap ),
userInfo : nil ,
repeats : false )
RunLoop . current . add ( autoFollowTimer , forMode : . default )
}
/** Centers the map in guidance mode. */
@objc private func recenterMap () {
if mapView . navigator ?. isGuidanceActive == true {
mapView . cameraMode = . following
}
autoFollowTimer . invalidate ()
autoFollowTimer = nil
}
}
Objective-C
@interface YourViewController : UIViewController<GMSMapViewDelegate>
...
@end
@implementation YourViewController {
GMSMapView * _mapView ;
NSTimer * _autoFollowTimer ;
...
}
...
- ( void ) viewDidLoad {
[ super viewDidLoad ];
...
_mapView . delegate = self ;
...
}
...
/** Implements the GMSMapViewDelegate protocol. */
- ( void ) mapView : ( GMSMapView * ) mapView willMove : ( BOOL ) gesture {
if ( ! _mapView . navigator . guidanceActive ) return ;
if ( ! gesture ) return ;
[ _autoFollowTimer invalidate ];
_autoFollowTimer = [ NSTimer scheduledTimerWithTimeInterval : 5.0
target : self
selector : @selector ( recenterMap )
userInfo : nil
repeats : NO ];
}
/** Centers the map in guidance mode. */
- ( void ) recenterMap {
if ( _mapView . navigator . guidanceActive ) {
_mapView . cameraMode = GMSNavigationCameraModeFollowing ;
}
[ _autoFollowTimer invalidate ];
_autoFollowTimer = nil ;
}
@end
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
