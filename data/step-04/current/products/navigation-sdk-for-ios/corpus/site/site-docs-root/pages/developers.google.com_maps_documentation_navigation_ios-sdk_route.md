---
title: "Navigate a route \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/route
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/route
  title: "Navigate a route \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
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
Navigate a route
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how to use the Navigation SDK for iOS to plot a route within your app to a single destination.
Before using the SDK, ensure the user accepts the terms and conditions and authorizes location services and background notifications.
Create a GMSNavigator and add destinations using setDestinations to define the route and initiate guidance by setting isGuidanceActive to true .
Set the travelMode property of the map view to specify the preferred mode of transportation, such as driving, cycling, walking, or taxi.
Optionally, configure route preferences like avoiding highways or tolls using the avoidsHighways and avoidsTolls properties.
Follow this guide to plot a route within your app to a single destination,
using the Navigation SDK for iOS.
Overview
Integrate the Navigation SDK into your app, as described
in the Set up your project section.
Configure a GMSMapView .
Prompt the user to accept the terms and conditions, and authorize location
services and background notifications.
Create an array containing one or more destinations.
Define a GMSNavigator
to control turn-by-turn navigation.
Add destinations using setDestinations .
Set isGuidanceActive
to true to start navigation.
Use simulateLocationsAlongExistingRoute
to simulate the progress of the vehicle along the route, for testing,
debugging, and demonstrating your app.
Note: To prevent the screen from dimming or turning off while navigating, your
app must disable the idle
timer , as the Navigation SDK does
not do this for you. To disable the idle timer, make the following call:
[UIApplication sharedApplication].idleTimerDisabled = YES; .
See the code
Show/Hide the Swift code
for the navigation view controller.
/*
* Copyright 2017 Google Inc . All rights reserved .
*
* Licensed under the Apache License , Version 2.0 ( the "License" );
* you may not use this file except in compliance with the License .
* You may obtain a copy of the License at
*
* http : // www . apache . org / licenses / LICENSE - 2.0
*
* Unless required by applicable law or agreed to in writing , software
* distributed under the License is distributed on an "AS IS" BASIS ,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND , either express or implied .
* See the License for the specific language governing permissions and
* limitations under the License .
*/
import GoogleNavigation
import UIKit
class ViewController : UIViewController {
var mapView : GMSMapView !
var locationManager : CLLocationManager !
override func loadView () {
locationManager = CLLocationManager ()
// Set up the map view .
let camera = GMSCameraPosition . camera ( withLatitude : 47.67 , longitude : - 122.20 , zoom : 14 )
mapView = GMSMapView . map ( withFrame : . zero , camera : camera )
// Show the terms and conditions .
let companyName = "Ride Sharing Co."
GMSNavigationServices . showTermsAndConditionsDialogIfNeeded (
withCompanyName : companyName
) { termsAccepted in
if termsAccepted {
// Enable navigation if the user accepts the terms .
self . mapView . isNavigationEnabled = true
self . mapView . settings . compassButton = true
// Request authorization to use location services .
self . locationManager . requestAlwaysAuthorization ()
// Request authorization for alert notifications which deliver guidance instructions
// in the background .
UNUserNotificationCenter . current () . requestAuthorization ( options : [ . alert ]) {
granted , error in
// Handle denied authorization to display notifications .
if ! granted || error != nil {
print ( "User rejected request to display notifications." )
}
}
} else {
// Handle rejection of terms and conditions .
}
}
view = mapView
makeButton ()
}
// Create a route and start guidance .
func startNav () {
var destinations = [ GMSNavigationWaypoint ]()
destinations . append (
GMSNavigationWaypoint . init (
placeID : "ChIJnUYTpNASkFQR_gSty5kyoUk" ,
title : "PCC Natural Market" ) ! )
destinations . append (
GMSNavigationWaypoint . init (
placeID : "ChIJJ326ROcSkFQRBfUzOL2DSbo" ,
title : "Marina Park" ) ! )
mapView . navigator ? . setDestinations (
destinations
) { routeStatus in
guard routeStatus == . OK else {
print ( "Handle route statuses that are not OK." )
return
}
self . mapView . navigator ? . isGuidanceActive = true
self . mapView . locationSimulator ? . simulateLocationsAlongExistingRoute ()
self . mapView . cameraMode = . following
}
}
// Add a button to the view .
func makeButton () {
// A button to start navigation .
let navButton = UIButton ( frame : CGRect ( x : 5 , y : 150 , width : 200 , height : 35 ))
navButton . backgroundColor = . blue
navButton . alpha = 0.5
navButton . setTitle ( "Start navigation" , for : . normal )
navButton . addTarget ( self , action : #selector(startNav), for: .touchUpInside)
self . mapView . addSubview ( navButton )
}
}
Show/Hide the Objective-C code for the navigation view controller.
/*
* Copyright 2017 Google Inc. All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
#import "ViewController.h"
@import GoogleNavigation ;
@interface ViewController ()
@end
@implementation ViewController {
GMSMapView * _mapView ;
CLLocationManager * _locationManager ;
}
- ( void ) loadView {
_locationManager = [[ CLLocationManager alloc ] init ];
// Set up the map view.
GMSCameraPosition * camera = [ GMSCameraPosition cameraWithLatitude : 47.67
longitude : -122.20
zoom : 14 ];
_mapView = [ GMSMapView mapWithFrame : CGRectZero camera : camera ];
// Show the terms and conditions.
NSString * companyName = @"Ride Sharing Co." ;
[ GMSNavigationServices
showTermsAndConditionsDialogIfNeededWithCompanyName : companyName
callback : ^ ( BOOL termsAccepted ) {
if ( termsAccepted ) {
// Enable navigation if the user accepts the terms.
_mapView . navigationEnabled = YES ;
_mapView . settings . compassButton = YES ;
// Request authorization to use the current device location.
[ _locationManager requestAlwaysAuthorization ];
// Request authorization for alert notifications which deliver guidance instructions
// in the background.
UNUserNotificationCenter * center = [ UNUserNotificationCenter currentNotificationCenter ];
UNAuthorizationOptions options = UNAuthorizationOptionAlert ;
[ center requestAuthorizationWithOptions : options
completionHandler : ^ ( BOOL granted , NSError * _Nullable error ) {
if ( ! error && granted ) {
NSLog ( @"iOS Notification Permission: newly Granted" );
} else {
NSLog ( @"iOS Notification Permission: Failed or Denied" );
}
}];
} else {
// Handle rejection of the terms and conditions.
}
}];
self . view = _mapView ;
[ self makeButton ];
}
// Create a route and initiate navigation.
- ( void ) startNav {
NSArray<GMSNavigationWaypoint * > * destinations =
@[ [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJnUYTpNASkFQR_gSty5kyoUk"
title : @"PCC Natural Market" ],
[[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJJ326ROcSkFQRBfUzOL2DSbo"
title : @"Marina Park" ] ] ;
[ _mapView . navigator setDestinations : destinations
callback : ^ ( GMSRouteStatus routeStatus ){
[ _mapView . locationSimulator simulateLocationsAlongExistingRoute ];
_mapView . navigator . guidanceActive = YES ;
_mapView . navigator . sendsBackgroundNotifications = YES ;
_mapView . cameraMode = GMSNavigationCameraModeFollowing ;
}];
}
// Add a button to the view.
- ( void ) makeButton {
// A button to start navigation.
UIButton * navButton = [ UIButton buttonWithType : UIButtonTypeCustom ];
[ navButton addTarget : self
action : @selector ( startNav )
forControlEvents : UIControlEventTouchUpInside ];
[ navButton setTitle : @"Navigate" forState : UIControlStateNormal ];
[ navButton setBackgroundColor : [ UIColor blueColor ]];
navButton . frame = CGRectMake ( 5.0 , 150.0 , 100.0 , 35.0 );
[ _mapView addSubview : navButton ];
}
@end
Prompt the user for the necessary authorizations
Before using the Navigation SDK, the user must agree to the
terms and conditions, and authorize the use of location services, which is
required for navigation. If your app will run in the background, it must also
prompt the user to authorize guidance alert notifications. This section shows
how to display the required authorization prompts.
Authorize location services
The Navigation SDK uses location services, which requires
user authorization. To enable location services and display the authorization
dialog, take these steps:
Add the NSLocationWhenInUseUsageDescription and NSLocationAlwaysAndWhenInUseUsage keys to Info.plist .
For the value, add a short explanation of why your app requires location
services. For example: "This app needs permission to use location services for
turn-by-turn navigation."
To display the authorization dialog, call the
requestAlwaysAuthorization()
method of the location manager instance.
Swift
self . locationManager . requestAlwaysAuthorization ()
Objective-C
[ _locationManager requestAlwaysAuthorization ];
See the full Apple documentation for location service authorization .
Authorize alert notifications for background guidance
The Navigation SDK needs user permission to provide alert
notifications when the app is running in the background. Add the following code
to prompt the user for permission to display these notifications:
Swift
UNUserNotificationCenter . current (). requestAuthorization ( options : [. alert ]) {
granted , error in
// Handle denied authorization to display notifications.
if ! granted || error != nil {
print ( "User rejected request to display notifications." )
}
}
Objective-C
// Request authorization for alert notifications.
UNUserNotificationCenter * center = [ UNUserNotificationCenter currentNotificationCenter ];
UNAuthorizationOptions options = UNAuthorizationOptionAlert ;
[ center requestAuthorizationWithOptions : options
completionHandler :
^ (
BOOL granted ,
NSError * _Nullable error ) {
if ( ! error && granted ) {
NSLog ( @"iOS Notification Permission: newly Granted" );
} else {
NSLog ( @"iOS Notification Permission: Failed or Denied" );
}
}];
Accept the terms and conditions
Use the following code to show the terms and conditions dialog, and enable
navigation when the user accepts the terms. Note that this example includes
the code for location services and guidance alert notifications (shown
previously).
Swift
let termsAndConditionsOptions = GMSNavigationTermsAndConditionsOptions ( companyName : "Ride Sharing Co." )
GMSNavigationServices . showTermsAndConditionsDialogIfNeeded (
with : termsAndConditionsOptions ) { termsAccepted in
if termsAccepted {
// Enable navigation if the user accepts the terms.
self . mapView . isNavigationEnabled = true
self . mapView . settings . compassButton = true
// Request authorization to use location services.
self . locationManager . requestAlwaysAuthorization ()
// Request authorization for alert notifications which deliver guidance instructions
// in the background.
UNUserNotificationCenter . current (). requestAuthorization ( options : [. alert ]) {
granted , error in
// Handle rejection of notification authorization.
if ! granted || error != nil {
print ( "Authorization to deliver notifications was rejected." )
}
}
} else {
// Handle rejection of terms and conditions.
}
}
Objective-C
GMSNavigationTermsAndConditionsOptions * termsAndConditionsOptions = [[ GMSNavigationTermsAndConditionsOptions alloc ] initWithCompanyName : @"Ride Sharing Co." ];
[ GMSNavigationServices
showTermsAndConditionsDialogIfNeededWithOptions : termsAndConditionsOptions
callback : ^ ( BOOL termsAccepted ) {
if ( termsAccepted ) {
// Enable navigation if the user accepts the terms.
_mapView . navigationEnabled = YES ;
_mapView . settings . compassButton = YES ;
// Request authorization to use the current device location.
[ _locationManager requestAlwaysAuthorization ];
// Request authorization for alert notifications which deliver guidance instructions
// in the background.
UNUserNotificationCenter * center = [ UNUserNotificationCenter currentNotificationCenter ];
UNAuthorizationOptions options = UNAuthorizationOptionAlert ;
[ center requestAuthorizationWithOptions : options
completionHandler :
^ (
BOOL granted ,
NSError * _Nullable error ) {
if ( ! error && granted ) {
NSLog ( @"iOS Notification Permission: newly Granted" );
} else {
NSLog ( @"iOS Notification Permission: Failed or Denied" );
}
}];
} else {
// Handle rejection of the terms and conditions.
}
}];
Create a route and start guidance
To plot a route, call the Navigator’s setDestinations() method with an array
one or more destinations
( GMSNavigationWaypoint )
to visit. If successfully computed, the route is shown on the map. To start
guidance along the route, set isGuidanceActive to true in the callback.
The following example shows:
Creating a new route with one destination.
Starting guidance.
Enabling background guidance notifications.
Simulating travel along the route (optional).
Setting the camera mode to "follow" (optional).
Swift
func startNav () {
var destinations = [ GMSNavigationWaypoint ]()
destinations . append ( GMSNavigationWaypoint . init ( placeID : "ChIJnUYTpNASkFQR_gSty5kyoUk" ,
title : "PCC Natural Market" ) ! )
mapView . navigator ?. setDestinations ( destinations ) { routeStatus in
self . mapView . navigator ?. isGuidanceActive = true
self . mapView . locationSimulator ?. simulateLocationsAlongExistingRoute ()
self . mapView . cameraMode = . following
}
}
Objective-C
- ( void ) startNav {
NSArray<GMSNavigationWaypoint * > * destinations =
@[ [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJnUYTpNASkFQR_gSty5kyoUk"
title : @"PCC Natural Market" ],
[ _mapView . navigator setDestinations : destinations
callback : ^ ( GMSRouteStatus routeStatus ){
[ _mapView . locationSimulator simulateLocationsAlongExistingRoute ];
_mapView . navigator . guidanceActive = YES ;
_mapView . cameraMode = GMSNavigationCameraModeFollowing ;
}];
}
To learn about Place IDs please refer to Place IDs .
Multi-stop scenarios
You can configure a maximum of 25 waypoints.
The setDestinations method does not support multi-stop journeys. Use continueToNextDestination() to advance the waypoint to the next leg of the journey.
Caution: Calling the continueToNextDestination() method can sometimes result in an
incorrect arrival event, where the just-completed destination appears to be
re-selected. Caution: You must implement your own error handling when using the continueToNextDestination() method, such as verifying the presence of a route on the
map or monitoring navigator status in order to detect failures. Then,
provide guidance to the user, such as suggesting they move to an area with
better connectivity.
Set travel mode
Travel mode determines which type of route will be fetched, and the way that
the user's course is determined. You can set one of four travel modes for a
route: driving, cycling, walking, and taxi. In driving and taxi mode, the user's course is
based on the direction of travel; in cycling and walking mode the course is
represented by the direction the device is facing (toward the top of the device in landscape mode).
Important: Taxi mode is an experimental feature. Note: When testing cycling or walking mode with an emulator, neither the chevron direction nor the map orientation will appear to change. However, when using a physical device, the map orientation will change when
the device is rotated, while the chevron continues to point in the direction that the device
is facing.
Set the travelMode
property of the map view, as shown in the following example:
Swift
self . mapView . travelMode = . cycling
Objective-C
_mapView . travelMode = GMSNavigationTravelModeCycling ;
Set roads to avoid
Use the avoidsHighways and avoidsTolls BOOL properties to avoid
highways and/or toll roads along a route.
Swift
self . mapView . navigator ?. avoidsTolls = true
Objective-C
_mapView . navigator . avoidsTolls = YES ;
PlaceID finder
You can use the PlaceID Finder
to find place IDs to use for route destinations. Add a destination from a placeID with GMSNavigationWaypoint .
Floating text
You can add floating text anywhere in your app, as long as the Google
attribution isn't covered. The Navigation SDK doesn't support anchoring the
text to a latitude/longitude on the map, or to a label. For more information,
see Info windows .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To integrate turn-by-turn navigation, first integrate the Navigation SDK and configure a `GMSMapView`. Then, prompt the user to accept terms, authorize location services, and background notifications. Create an array of destinations, using Place IDs if desired, and define a `GMSNavigator` to control navigation. Use `setDestinations` to add destinations, set `isGuidanceActive` to true to start. `simulateLocationsAlongExistingRoute` helps simulate travel along a given route. The user can also set the travel mode and roads to avoid. Finally, remember to disable the device's idle timer.\n"]]
