---
title: "Listen for navigation events \_|\_ Navigation SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/events
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/events
  title: "Listen for navigation events \_|\_ Navigation SDK for iOS \_|\_ Google for\
    \ Developers"
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
Listen for navigation events
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK for iOS allows you to respond to real-time navigation events like route changes, arrival, and location updates using listeners.
GMSRoadSnappedLocationProviderListener and GMSNavigatorListener protocols handle events like location updates, speeding, and destination arrival.
Location updates can be managed for real-time tracking and background operation, impacting battery life.
The GMSNavigator provides methods to track and respond to waypoint arrivals, route changes, time and distance to destination, traffic flow, speeding percentage, and suggested lighting mode.
GMSNavigatorDelegate and GMSRoadSnappedLocationProviderDelegate are deprecated and replaced by GMSRoadSnappedLocationProviderListener and GMSNavigatorListener .
Notice: The GMSNavigatorDelegate and
GMSRoadSnappedLocationProviderDelegate protocols
were decommissioned in Navigation SDK for iOS version 2.0. See the release notes for replacement details.
Use this guide to enable your app to listen and respond to a variety of events
that change as a user navigates along a route. This guide does not cover
defining a route, only responding to events along a route.
Overview
The Navigation SDK for iOS provides you with listeners
associated with the location of the user and conditions along the route and
important time and distance data. On the view controller of the map, your app
needs to adopt the protocols for these listeners:
GMSRoadSnappedLocationProviderListener
and
GMSNavigatorListener .
This list shows the listener methods available for navigation events:
GMSNavigatorListener.didArriveAtWaypoint ,
triggered when a destination is reached.
GMSNavigatorListener.navigatorDidChangeRoute ,
triggered when the route changes.
GMSNavigatorListener.didUpdateRemainingTime ,
called repeatedly as the time to the next destination changes, while
guidance is active.
GMSNavigatorListener.didUpdateRemainingDistance ,
called repeatedly as the distance to the next destination changes, while
guidance is active.
GMSNavigatorListener.didUpdateDelayCategory ,
called when the delay category to the next destination changes, while
guidance is active.
GMSNavigatorListener.didChangeSuggestedLightingMode ,
triggered when the estimated lighting conditions are updated. For example
when night falls at the user's current location the lighting changes.
GMSNavigatorListener.didUpdateSpeedingPercentage ,
triggered when the driver is exceeding the speed limit.
GMSRoadSnappedLocationProviderListener.didUpdateLocation ,
called repeatedly as the user's location changes.
Note: If your app design requires handling of events outside the scope of this
guide, consider using the GMSMapViewDelegate protocol of the
Maps SDK for iOS. This protocol enables listening to other events,
such as camera changes or proximity to points of interest. See
Events for details.
See the code
Show/Hide the Swift code
for an event listener.
/*
* Copyright 2020 Google Inc . All rights reserved .
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
class ViewController : UIViewController ,
GMSNavigatorListener ,
GMSRoadSnappedLocationProviderListener
{
var mapView : GMSMapView !
var locationManager : CLLocationManager !
override func loadView () {
locationManager = CLLocationManager ()
let camera = GMSCameraPosition . camera ( withLatitude : 47.67 , longitude : - 122.20 , zoom : 14 )
mapView = GMSMapView . map ( withFrame : CGRect . zero , camera : camera )
// Add listeners for GMSNavigator and GMSRoadSnappedLocationProvider .
mapView . navigator ? . add ( self )
mapView . roadSnappedLocationProvider ? . add ( self )
// Set the time update threshold ( seconds ) and distance update threshold ( meters ) .
mapView . navigator ? . timeUpdateThreshold = 10
mapView . navigator ? . distanceUpdateThreshold = 100
// Show the terms and conditions .
let companyName = "Ride Sharing Co."
GMSNavigationServices . showTermsAndConditionsDialogIfNeeded (
withCompanyName : companyName
) { termsAccepted in
if termsAccepted {
// Enable navigation if the user accepts the terms .
self . mapView . isNavigationEnabled = true
// Request authorization to use location services .
self . locationManager . requestAlwaysAuthorization ()
// Request authorization for alert notifications which deliver guidance instructions
// in the background .
UNUserNotificationCenter . current () . requestAuthorization ( options : [ . alert ]) {
granted , error in
// Handle denied authorization to display notifications .
if ! granted || error != nil {
print ( "Authorization to deliver notifications was rejected." )
}
}
} else {
// Handle the case when the user rejects the terms and conditions .
}
}
view = mapView
makeButton ()
}
// Create a route and start guidance .
@objc func startNav () {
var destinations = [ GMSNavigationWaypoint ]()
destinations . append (
GMSNavigationWaypoint . init (
placeID : "ChIJnUYTpNASkFQR_gSty5kyoUk" ,
title : "PCC Natural Market" ) ! )
destinations . append (
GMSNavigationWaypoint . init (
placeID : "ChIJJ326ROcSkFQRBfUzOL2DSbo" ,
title : "Marina Park" ) ! )
mapView . navigator ? . setDestinations ( destinations ) { routeStatus in
guard routeStatus == . OK else {
print ( "Handle route statuses that are not OK." )
return
}
self . mapView . navigator ? . isGuidanceActive = true
self . mapView . cameraMode = . following
self . mapView . locationSimulator ? . simulateLocationsAlongExistingRoute ()
}
mapView . roadSnappedLocationProvider ? . startUpdatingLocation ()
}
// Listener to handle continuous location updates .
func locationProvider (
_ locationProvider : GMSRoadSnappedLocationProvider ,
didUpdate location : CLLocation
) {
print ( "Location: \(location.description)" )
}
// Listener to handle speeding events .
func navigator (
_ navigator : GMSNavigator , didUpdateSpeedingPercentage percentageAboveLimit : CGFloat
) {
print ( "Speed is \(percentageAboveLimit) above the limit." )
}
// Listener to handle arrival events .
func navigator ( _ navigator : GMSNavigator , didArriveAt waypoint : GMSNavigationWaypoint ) {
print ( "You have arrived at: \(waypoint.title)" )
mapView . navigator ? . continueToNextDestination ()
mapView . navigator ? . isGuidanceActive = true
}
// Listener for route change events .
func navigatorDidChangeRoute ( _ navigator : GMSNavigator ) {
print ( "The route has changed." )
}
// Listener for time to next destination .
func navigator ( _ navigator : GMSNavigator , didUpdateRemainingTime time : TimeInterval ) {
print ( "Time to next destination: \(time)" )
}
// Delegate for distance to next destination .
func navigator (
_ navigator : GMSNavigator ,
didUpdateRemainingDistance distance : CLLocationDistance
) {
let miles = distance * 0.00062137
print ( "Distance to next destination: \(miles) miles." )
}
// Delegate for traffic updates to next destination
func navigator (
_ navigator : GMSNavigator ,
didUpdate delayCategory : GMSNavigationDelayCategory
) {
print ( "Delay category to next destination: \(String(describing: delayCategory))." )
}
// Delegate for suggested lighting mode changes .
func navigator (
_ navigator : GMSNavigator ,
didChangeSuggestedLightingMode lightingMode : GMSNavigationLightingMode
) {
print ( "Suggested lighting mode has changed: \(String(describing: lightingMode))" )
// Change to the suggested lighting mode .
mapView . lightingMode = lightingMode
}
// Add a button to the view .
func makeButton () {
// Start navigation .
let navButton = UIButton ( frame : CGRect ( x : 5 , y : 150 , width : 200 , height : 35 ))
navButton . backgroundColor = . blue
navButton . alpha = 0.5
navButton . setTitle ( "Start navigation" , for : . normal )
navButton . addTarget ( self , action : #selector(startNav), for: .touchUpInside)
self . mapView . addSubview ( navButton )
}
}
Show/Hide the Objective-C code for an event listener.
/*
* Copyright 2020 Google Inc. All rights reserved.
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
@interface ViewController () < GMSNavigatorListener , GMSRoadSnappedLocationProviderListener >
@end
@implementation ViewController {
GMSMapView * _mapView ;
CLLocationManager * _locationManager ;
}
- ( void ) loadView {
_locationManager = [[ CLLocationManager alloc ] init ];
GMSCameraPosition * camera = [ GMSCameraPosition cameraWithLatitude : 47.67
longitude : -122.20
zoom : 14 ];
_mapView = [ GMSMapView mapWithFrame : CGRectZero camera : camera ];
// Add listeners for GMSNavigator and GMSRoadSnappedLocationProvider.
[ _mapView . navigator addListener : self ];
[ _mapView . roadSnappedLocationProvider addListener : self ];
// Set the time update threshold (seconds) and distance update threshold (meters).
_mapView . navigator . timeUpdateThreshold = 10 ;
_mapView . navigator . distanceUpdateThreshold = 100 ;
// Show the terms and conditions.
NSString * companyName = @"Ride Sharing Co." ;
[ GMSNavigationServices
showTermsAndConditionsDialogIfNeededWithCompanyName : companyName
callback : ^ ( BOOL termsAccepted ) {
if ( termsAccepted ) {
// Enable navigation if the user accepts the terms.
_mapView . navigationEnabled = YES ;
// Request authorization to use location services.
[ _locationManager requestAlwaysAuthorization ];
} else {
// Handle the case when the user rejects the terms and conditions.
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
_mapView . navigator . guidanceActive = YES ;
_mapView . navigator . sendsBackgroundNotifications = YES ;
_mapView . cameraMode = GMSNavigationCameraModeFollowing ;
[ _mapView . locationSimulator simulateLocationsAlongExistingRoute ];
}];
[ _mapView . roadSnappedLocationProvider startUpdatingLocation ];
}
#pragma mark - GMSNavigatorListener
// Listener for continuous location updates.
- ( void ) locationProvider: ( GMSRoadSnappedLocationProvider * ) locationProvider
didUpdateLocation :( CLLocation * ) location {
NSLog ( @"Location: %@" , location . description );
}
// Listener to handle speeding events.
- ( void ) navigator: ( GMSNavigator * ) navigator
didUpdateSpeedingPercentage :( CGFloat ) percentageAboveLimit {
NSLog ( @"Speed is %f percent above the limit." , percentageAboveLimit );
}
// Listener to handle arrival events.
- ( void ) navigator: ( GMSNavigator * ) navigator didArriveAtWaypoint: ( GMSNavigationWaypoint * ) waypoint {
NSLog ( @"You have arrived at: %@" , waypoint . title );
[ _mapView . navigator continueToNextDestination ];
_mapView . navigator . guidanceActive = YES ;
}
// Listener for route change events.
- ( void ) navigatorDidChangeRoute: ( GMSNavigator * ) navigator {
NSLog ( @"The route has changed." );
}
// Listener for time to next destination.
- ( void ) navigator: ( GMSNavigator * ) navigator didUpdateRemainingTime: ( NSTimeInterval ) time {
NSLog ( @"Time to next destination: %f" , time );
}
// Listener for distance to next destination.
- ( void ) navigator: ( GMSNavigator * ) navigator
didUpdateRemainingDistance :( CLLocationDistance ) distance {
double miles = distance * 0.00062137 ;
NSLog ( @"%@" , [ NSString stringWithFormat : @"Distance to next destination: %.2f." , miles ]);
}
// Listener for traffic updates for next destination
- ( void ) navigator: ( GMSNavigator * ) navigator
didUpdateDelayCategory :( GMSNavigationDelayCategory ) delayCategory {
NSLog ( @"Delay category to next destination: %ld." , delayCategory );
}
// Listener for suggested lighting mode changes.
-( void ) navigator: ( GMSNavigator * ) navigator
didChangeSuggestedLightingMode :( GMSNavigationLightingMode ) lightingMode {
NSLog ( @"Suggested lighting mode has changed: %ld" , ( long ) lightingMode );
// Change to the suggested lighting mode.
_mapView . lightingMode = lightingMode ;
}
#pragma mark - Programmatic UI elements
// Add a button to the view.
- ( void ) makeButton {
// Start navigation.
UIButton * navButton = [ UIButton buttonWithType : UIButtonTypeCustom ];
[ navButton addTarget : self
action : @selector ( startNav )
forControlEvents : UIControlEventTouchUpInside ];
[ navButton setTitle : @"Navigate" forState : UIControlStateNormal ];
[ navButton setBackgroundColor : [ UIColor blueColor ]];
[ navButton setAlpha : 0.5 ];
navButton . frame = CGRectMake ( 5.0 , 150.0 , 100.0 , 35.0 );
[ _mapView addSubview : navButton ];
}
@end
Declaring conformance to the required protocols
Before implementing the navigation methods, the view controller must adopt the
protocols:
Swift
class ViewController : UIViewController , GMSNavigatorListener ,
GMSRoadSnappedLocationProviderListener {
Objective-C
@interface ViewController () < GMSNavigatorListener ,
GMSRoadSnappedLocationProviderListener >
@end
After adopting the navigation protocols, set the listeners to the view
controller. For example, you can add the following code to the viewDidLoad()
method.
Swift
mapView . navigator ?. add ( self ) mapView . roadSnappedLocationProvider ?. add ( self )
Objective-C
[ _mapView . navigator addListener : self ]; [ _mapView . roadSnappedLocationProvider
addListener : self ];
Receiving or stopping location updates
Location updates are required for showing the user's progress on the map.
The location instance exposes the following properties:
Location property
Description
altitude
Current altitude.
coordinate.latitude
Current road-snapped latitude coordinate.
coordinate.longitude
Current road-snapped longitude coordinate.
course
Current bearing in degrees.
speed
Current speed.
timestamp
Date/time of current reading.
Caution: Location updates can impact battery life, so enable updates only when
needed. Call the
stopUpdatingLocation
function.
To receive continuous location updates, call
mapView.roadSnappedLocationProvider.startUpdatingLocation , and use the
GMSRoadSnappedLocationProviderListener to handle the didUpdateLocation
event.
The following example shows calling startUpdatingLocation :
Swift
mapView . roadSnappedLocationProvider . startUpdatingLocation ()
Objective-C
[ _mapView . roadSnappedLocationProvider startUpdatingLocation ];
The following code creates a GMSRoadSnappedLocationProviderListener that
handles the didUpdateLocation event.
Swift
func locationProvider ( _ locationProvider : GMSRoadSnappedLocationProvider ,
didUpdate location : CLLocation ) { print ( "Location: \( location . description ) " ) }
Objective-C
- ( void ) locationProvider: ( GMSRoadSnappedLocationProvider * ) locationProvider
didUpdateLocation :( CLLocation * ) location { NSLog ( @"Location: %@" ,
location . description ); }
To receive location updates when the app is in the background, set
allowsBackgroundLocationUpdates to true:
Swift
mapView . roadSnappedLocationProvider . allowsBackgroundLocationUpdates = true
Objective-C
_mapView . roadSnappedLocationProvider . allowsBackgroundLocationUpdates = YES ;
Detecting arrival events
Your app uses the didArriveAtWaypoint event to detect when a destination has
been reached. You can resume guidance and advance to the next waypoint by
calling continueToNextDestination() , and then re-enabling guidance. Your app
must re-enable guidance after calling continueToNextDestination() .
After the app calls continueToNextDestination , the navigator no longer has
data about the previous destination. If you want to analyze information about a
route leg, you must retrieve this from the navigator prior to calling
continueToNextDestination() .
The following code example shows a method to handle the didArriveAtWaypoint
event:
Swift
func navigator ( _ navigator : GMSNavigator , didArriveAt waypoint :
GMSNavigationWaypoint ) { print ( "You have arrived at: \( waypoint . title ) " )
mapView . navigator ?. continueToNextDestination ()
mapView . navigator ?. isGuidanceActive = true }
Objective-C
- ( void ) navigator: ( GMSNavigator * ) navigator
didArriveAtWaypoint :( GMSNavigationWaypoint * ) waypoint { NSLog ( @"You have
arrived at : % @", waypoint.title); [_mapView.navigator
continueToNextDestination ]; _mapView . navigator . guidanceActive = YES ; }
Receiving route change updates
To receive a notification whenever the route is changed, create a method to
handle the navigatorDidChangeRoute event. You can access the new route by
using the routeLegs and currentRouteLeg properties of GMSNavigator .
Swift
func navigatorDidChangeRoute ( _ navigator : GMSNavigator ) { print ( "The route has
changed." ) }
Objective-C
- ( void ) navigatorDidChangeRoute: ( GMSNavigator * ) navigator { NSLog ( @"The route
has changed . "); }
Receiving time to destination updates
To receive continuous time to destination updates, create a method to handle the
didUpdateRemainingTime event. The time parameter provides the estimated
time, in seconds, until the next destination is reached.
Swift
func navigator ( _ navigator : GMSNavigator , didUpdateRemainingTime time :
TimeInterval ) { print ( "Time to next destination: \( time ) " ) }
Objective-C
- ( void ) navigator: ( GMSNavigator * ) navigator
didUpdateRemainingTime :( NSTimeInterval ) time { NSLog ( @"Time to next
destination : % f ", time); }
To set the minimum change in estimated time to the next destination, set the
timeUpdateThreshold property on GMSNavigator . The value is specified in
seconds. If this property is not set, the services use a default value of one
second.
Swift
navigator ?. timeUpdateThreshold = 10
Objective-C
navigator . timeUpdateThreshold = 10 ;
Receiving distance to destination updates
To receive continuous distance to destination updates, create a method to handle
the didUpdateRemainingDistance event. The distance parameter provides the
estimated distance, in meters, to the next destination.
Swift
func navigator ( _ navigator : GMSNavigator , didUpdateRemainingDistance distance :
CLLocationDistance ) { let miles = distance * 0.00062137 print ( "Distance to next
destination: \( miles ) miles." ) }
Objective-C
- ( void ) navigator: ( GMSNavigator * ) navigator
didUpdateRemainingDistance :( CLLocationDistance ) distance { double miles =
distance * 0.00062137 ; NSLog ( @"%@" , [ NSString stringWithFormat : @"Distance to
next destination : % .2f . ", miles]); }
To set the minimum change in estimated distance to the next destination, set the
distanceUpdateThreshold property on GMSNavigator (value is specified in
meters). If this property is not set, the services use a default value of one
meter.
Swift
navigator ?. distanceUpdateThreshold = 100
Objective-C
navigator . distanceUpdateThreshold = 100 ;
Receiving traffic updates
To receive continuous updates of the traffic flow for the remaining route,
create a method to handle the didUpdateDelayCategory event. A call to
delayCategoryToNextDestination returns GMSNavigationDelayCategory which
provides a value of 0 to 3. Updates to the category are based on the current
position of the app user. If traffic data is unavailable,
GMSNavigationDelayCategory returns 0. The numbers, 1-3, indicate increasing
flow from light to heavy.
Swift
func navigator ( _ navigator : GMSNavigator , didUpdate delayCategory :
GMSNavigationDelayCategory ) { print ( "Traffic flow to next destination:
\( delayCategory ) " ) }
Objective-C
- ( void ) navigator: ( GMSNavigator * ) navigator
didUpdateDelayCategory :( GMSNavigationDelayCategory ) delayCategory {
NSLog ( @"Traffic flow to next destination: %ld" , ( long ) delayCategory ); }
The GMSNavigationDelayCategory property exposes the following delay levels:
Delay category
Description
GMSNavigationDelayCategoryNoData
0 - Unavailable, no data for traffic or :
the route.
GMSNavigationDelayCategoryHeavy
1 - Heavy.
GMSNavigationDelayCategoryMedium
2 - Medium.
GMSNavigationDelayCategoryLight
3 - Light.
Receiving speeding updates
To receive updates when a driver is exceeding the speed limit, create a method
to handle the didUpdateSpeedingPercentage event.
Swift
// Listener to handle speeding events. func navigator( _ navigator:
GMSNavigator , didUpdateSpeedingPercentage percentageAboveLimit : CGFloat ) {
print ( "Speed is \( percentageAboveLimit ) above the limit." ) }
Objective-C
// Listener to handle speeding events. - (void)navigator:(GMSNavigator
* ) navigator didUpdateSpeedingPercentage : ( CGFloat ) percentageAboveLimit {
NSLog ( @"Speed is %f percent above the limit." , percentageAboveLimit ); }
Changing suggested lighting mode
To receive updates for estimated changes in lighting, create a method to handle
the didChangeSuggestedLightingMode event.
Swift
// Define a listener for suggested changes to lighting mode. func navigator(_
navigator : GMSNavigator , didChangeSuggestedLightingMode lightingMode :
GMSNavigationLightingMode ) { print ( "Suggested lighting mode has changed:
\( String ( describing : lightingMode )) " )
// Make the suggested change. mapView.lightingMode = lightingMode }
Objective-C
// Define a listener for suggested changes to lighting mode.
-( void ) navigator: ( GMSNavigator * ) navigator didChangeSuggestedLightingMode:
( GMSNavigationLightingMode ) lightingMode { NSLog ( @"Suggested lighting mode has
changed : % ld ", (long)lightingMode);
// Make the suggested change. _mapView.lightingMode = lightingMode; }
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
