---
title: "Get route information \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info
  title: "Get route information \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
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
Get route information
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how to retrieve real-time route information such as time, distance, and route legs using the Google Maps Navigation SDK for iOS.
You can access properties like timeToNextDestination , distanceToNextDestination , and currentRouteLeg from the navigator instance to get route details.
The traveledPath property provides a simplified path of the route already traveled.
It is crucial to retrieve route leg information before calling continueToNextDestination() , as the navigator discards previous destination data afterward.
Code samples in Swift and Objective-C demonstrate how to implement these functionalities within your application.
Follow this guide to set up your app to retrieve times, distances, and route
legs for the current route.
Warning: After continueToNextDestination() is called, the navigator forgets
about the previous destination entirely. If you intend to store or analyze
information about a route leg, you must retrieve this from the navigator
prior to calling continueToNextDestination() .
Overview
To get information about the current route, get the appropriate property from
the navigator instance:
GMSNavigator.timeToNextDestination
to get the predicted time to the next destination on the current route, in
seconds.
GMSNavigator.distanceToNextDestination
to get the distance to the next destination on the current route, in meters.
GMSNavigationDelayCategory
to get the delay category for the traffic flow.
GMSNavigator.currentRouteLeg
to get information about the current route leg.
GMSNavigator.traveledPath
to get the most recently traveled path.
See the code
Show/Hide the Swift code to get route information.
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
let camera = GMSCameraPosition . camera ( withLatitude : 47.67 , longitude : - 122.20 , zoom : 14 )
mapView = GMSMapView . map ( withFrame : CGRect . zero , camera : camera )
// Show the terms and conditions .
let companyName = "Ride Sharing Co."
GMSNavigationServices . showTermsAndConditionsDialogIfNeeded (
withCompanyName : companyName
) { termsAccepted in
guard termsAccepted else {
// Handle the case when the user rejects the terms and conditions .
return
}
// Enable navigation after the user accepts the terms .
self . mapView . isNavigationEnabled = true
// Request authorization to use location services .
self . locationManager . requestAlwaysAuthorization ()
}
self . view = mapView
makeButtons ()
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
func getTimeToNextDestination () {
if let navigator = mapView . navigator {
let time = navigator . timeToNextDestination
let minutes = floor ( time / 60 )
let seconds = round ( time - minutes * 60 )
print ( "Time to next destination: \(minutes):\(seconds)" )
}
}
func getDistanceToNextDestination () {
if let navigator = mapView . navigator {
let distance = navigator . distanceToNextDestination
let miles = distance * 0.00062137
print ( "Distance to next destination: \(miles) miles." )
}
}
func getCurrentRouteLeg () {
if let navigator = mapView . navigator {
let currentLeg = navigator . currentRouteLeg
let nextDestination = currentLeg ? . destinationWaypoint ? . title ?? "Not Available"
let lat = currentLeg ? . destinationCoordinate . latitude . description ?? "Not Available"
let lng = currentLeg ? . destinationCoordinate . longitude . description ?? "Not Available"
print ( "Destination: \(nextDestination) at (\(lat),\(lng)" )
}
}
func getTraveledPath () {
if let navigator = mapView . navigator {
let latestPath = navigator . traveledPath
if latestPath . count () > 0 {
let begin : CLLocationCoordinate2D = latestPath . coordinate ( at : 0 )
let current : CLLocationCoordinate2D = latestPath . coordinate ( at : latestPath . count () - 1 )
print (
"Path from (\(begin.latitude),\(begin.longitude)) to (\(current.latitude),\(current.longitude))"
)
}
}
}
// Add some buttons to the view .
func makeButtons () {
// Start navigation .
let navButton = UIButton ( frame : CGRect ( x : 5 , y : 150 , width : 200 , height : 35 ))
navButton . backgroundColor = . blue
navButton . alpha = 0.5
navButton . setTitle ( "Start navigation" , for : . normal )
navButton . addTarget ( self , action : #selector(startNav), for: .touchUpInside)
self . mapView . addSubview ( navButton )
// Get the time to the next destination .
let timeButton = UIButton ( frame : CGRect ( x : 5 , y : 190 , width : 200 , height : 35 ))
timeButton . backgroundColor = . blue
timeButton . alpha = 0.5
timeButton . setTitle ( "Time to next destination" , for : . normal )
timeButton . addTarget ( self , action : #selector(getTimeToNextDestination), for: .touchUpInside)
self . mapView . addSubview ( timeButton )
// Get the distance to the next destination .
let distanceButton = UIButton ( frame : CGRect ( x : 5 , y : 230 , width : 200 , height : 35 ))
distanceButton . backgroundColor = . blue
distanceButton . alpha = 0.5
distanceButton . setTitle ( "Distance to next destination" , for : . normal )
distanceButton . addTarget (
self , action : #selector(getDistanceToNextDestination), for: .touchUpInside)
self . mapView . addSubview ( distanceButton )
// Get the current route leg .
let routeButton = UIButton ( frame : CGRect ( x : 5 , y : 270 , width : 200 , height : 35 ))
routeButton . backgroundColor = . blue
routeButton . alpha = 0.5
routeButton . setTitle ( "Get current route leg" , for : . normal )
routeButton . addTarget ( self , action : #selector(getCurrentRouteLeg), for: .touchUpInside)
self . mapView . addSubview ( routeButton )
// Get the most recently traveled path .
let pathButton = UIButton ( frame : CGRect ( x : 5 , y : 310 , width : 200 , height : 35 ))
pathButton . backgroundColor = . blue
pathButton . alpha = 0.5
pathButton . setTitle ( "Get traveled path" , for : . normal )
pathButton . addTarget ( self , action : #selector(getTraveledPath), for: .touchUpInside)
self . mapView . addSubview ( pathButton )
}
}
Show/Hide the Objective-C code to get route information.
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
// Request authorization to use location services.
[ _locationManager requestAlwaysAuthorization ];
} else {
// Handle the case when the user rejects the terms and conditions.
}
}];
self . view = _mapView ;
[ self makeButtons ];
}
// Create a route and start guidance.
- ( void ) startNav {
NSArray<GMSNavigationWaypoint * > * destinations =
@[ [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJnUYTpNASkFQR_gSty5kyoUk"
title : @"PCC Natural Market" ],
[[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJJ326ROcSkFQRBfUzOL2DSbo"
title : @"Marina Park" ] ] ;
[ _mapView . navigator setDestinations : destinations
callback : ^ ( GMSRouteStatus routeStatus ){
_mapView . navigator . guidanceActive = YES ;
_mapView . cameraMode = GMSNavigationCameraModeFollowing ;
[ _mapView . locationSimulator simulateLocationsAlongExistingRoute ];
}];
[ _mapView . roadSnappedLocationProvider startUpdatingLocation ];
}
- ( void ) getTimeToNextDestination {
NSTimeInterval time = _mapView . navigator . timeToNextDestination ;
int minutes = floor ( time / 60 );
int seconds = round ( time - minutes * 60 );
NSLog ( @"%@" , [ NSString stringWithFormat : @"Time to next destination: %i:%i." , minutes , seconds ]);
}
- ( void ) getDistanceToNextDestination {
CLLocationDistance distance = _mapView . navigator . distanceToNextDestination ;
double miles = distance * 0.00062137 ;
NSLog ( @"%@" , [ NSString stringWithFormat : @"Distance to next destination: %.2f." , miles ]);
}
- ( void ) getCurrentRouteLeg {
GMSRouteLeg * currentSegment = _mapView . navigator . currentRouteLeg ;
NSString * nextDestination = currentSegment . destinationWaypoint . title ;
CLLocationDegrees lat = currentSegment . destinationCoordinate . latitude ;
CLLocationDegrees lng = currentSegment . destinationCoordinate . longitude ;
NSLog ( @"%@" , [ NSString stringWithFormat : @"%@, %f/%f" , nextDestination , lat , lng ]);
}
- ( void ) getTraveledPath {
GMSPath * latestPath = _mapView . navigator . traveledPath ;
if ( latestPath . count > 0 ) {
CLLocationCoordinate2D begin = [ latestPath coordinateAtIndex : 0 ];
CLLocationCoordinate2D current = [ latestPath coordinateAtIndex : latestPath . count - 1 ];
NSLog ( @"Path from %f/%f to %f/%f" ,
begin . latitude ,
begin . longitude ,
current . latitude ,
current . longitude );
}
}
#pragma mark - Buttons and things
// Add some buttons to the view.
- ( void ) makeButtons {
// Start navigation.
UIButton * navButton = [ UIButton buttonWithType : UIButtonTypeCustom ];
[ navButton addTarget : self
action : @selector ( startNav )
forControlEvents : UIControlEventTouchUpInside ];
[ navButton setTitle : @"Start navigation" forState : UIControlStateNormal ];
[ navButton setBackgroundColor : [ UIColor blueColor ]];
[ navButton setAlpha : 0.5 ];
navButton . frame = CGRectMake ( 5.0 , 150.0 , 200.0 , 35.0 );
[ _mapView addSubview : navButton ];
// Get the time to the next destination.
UIButton * timeButton = [ UIButton buttonWithType : UIButtonTypeCustom ];
[ timeButton addTarget : self
action : @selector ( getTimeToNextDestination )
forControlEvents : UIControlEventTouchUpInside ];
[ timeButton setTitle : @"Time to next destination" forState : UIControlStateNormal ];
[ timeButton setBackgroundColor : [ UIColor blueColor ]];
[ timeButton setAlpha : 0.5 ];
timeButton . frame = CGRectMake ( 5.0 , 190.0 , 200.0 , 35.0 );
[ _mapView addSubview : timeButton ];
// Get the distance to the next destination.
UIButton * distanceButton = [ UIButton buttonWithType : UIButtonTypeCustom ];
[ distanceButton addTarget : self
action : @selector ( getDistanceToNextDestination )
forControlEvents : UIControlEventTouchUpInside ];
[ distanceButton setTitle : @"Distance to next destination" forState : UIControlStateNormal ];
[ distanceButton setBackgroundColor : [ UIColor blueColor ]];
[ distanceButton setAlpha : 0.5 ];
distanceButton . frame = CGRectMake ( 5.0 , 230.0 , 200.0 , 35.0 );
[ _mapView addSubview : distanceButton ];
// Get the current route leg.
UIButton * routeButton = [ UIButton buttonWithType : UIButtonTypeCustom ];
[ routeButton addTarget : self
action : @selector ( getCurrentRouteLeg )
forControlEvents : UIControlEventTouchUpInside ];
[ routeButton setTitle : @"Get current route leg" forState : UIControlStateNormal ];
[ routeButton setBackgroundColor : [ UIColor blueColor ]];
[ routeButton setAlpha : 0.5 ];
routeButton . frame = CGRectMake ( 5.0 , 270.0 , 200.0 , 35.0 );
[ _mapView addSubview : routeButton ];
// Get the most recently traveled path.
UIButton * pathButton = [ UIButton buttonWithType : UIButtonTypeCustom ];
[ pathButton addTarget : self
action : @selector ( getTraveledPath )
forControlEvents : UIControlEventTouchUpInside ];
[ pathButton setTitle : @"Get current route leg" forState : UIControlStateNormal ];
[ pathButton setBackgroundColor : [ UIColor blueColor ]];
[ pathButton setAlpha : 0.5 ];
pathButton . frame = CGRectMake ( 5.0 , 310.0 , 200.0 , 35.0 );
[ _mapView addSubview : pathButton ];
}
@end
Getting time to the next destination
To get the time to the next destination, call timeToNextDestination() .
This returns an NSTimeInterval value. The following example shows
logging the time to the next destination:
Swift
if let navigator = mapView . navigator {
let time = navigator . timeToNextDestination
let minutes = floor ( time / 60 )
let seconds = round ( time - minutes * 60 )
NSLog ( "Time to next destination: %.0f:%.0f" , minutes , seconds )
}
Objective-C
NSTimeInterval time = _mapView . navigator . timeToNextDestination ;
int minutes = floor ( time / 60 );
int seconds = round ( time - minutes * 60 );
NSLog ( @"%@" , [ NSString stringWithFormat : @"Time to next destination: %i:%i." , minutes , seconds ]);
Getting distance to the next destination
To get the distance to the next destination, call distanceToNextDestination() .
This returns a CLLocationDistance value. Units are specified in meters.
Swift
if let navigator = mapView . navigator {
let distance = navigator . distanceToNextDestination
let miles = distance * 0.00062137
NSLog ( "Distance to next destination: %.2f miles." , miles )
}
Objective-C
CLLocationDistance distance = _mapView . navigator . distanceToNextDestination ;
double miles = distance * 0.00062137 ;
NSLog ( @"%@" , [ NSString stringWithFormat : @"Distance to next destination: %.2f." , miles ]);
Getting traffic conditions to the next destination
To get a value indicating the flow of traffic to the next destination, call
delayCategoryToNextDestination .
This parameter returns GMSNavigationDelayCategory . The following
example shows evaluating the result and logging a traffic message:
Swift
if let navigator = mapView . navigator {
// insert sample for evaluating traffic value
let delay = navigator . delayCategoryToNextDestination
let traffic = "unavailable"
switch delay {
case . noData :
traffic = "unavailable"
case . heavy :
traffic = "heavy"
case . medium :
traffic = "moderate"
case . light :
traffic = "light"
default :
traffic = "unavailable"
}
print ( "Traffic is \( traffic ) ." )
}
Objective-C
GMSNavigationDelayCategory delay = mapView . navigator . delayCategoryToNextDestination ;
NSString * traffic = @"" ;
switch ( delayCategory ) {
case GMSNavigationDelayCategoryNoData :
traffic = @"No Data" ;
break ;
case GMSNavigationDelayCategoryHeavy :
traffic = @"Heavy" ;
break ;
case GMSNavigationDelayCategoryMedium :
traffic = @"Medium" ;
break ;
case GMSNavigationDelayCategoryLight :
traffic = @"Light" ;
break ;
default :
NSLog ( @"Invalid delay category: %zd" , delayCategory );
}
NSLog ( @"%@" , [ NSString stringWithFormat : @"Traffic is %@." , traffic ]);
Getting information about the current leg
To get information about the current route leg, call currentRouteLeg .
This returns a GMSRouteLeg instance, from which you can get:
The destination for the leg.
The final coordinate in the leg.
The path containing the coordinates which make up the route leg.
The following example shows logging the title and lat/lng coordinates for the
next route leg:
Swift
if let navigator = mapView . navigator {
let currentLeg = navigator . currentRouteLeg
let nextDestination = currentLeg ?. destinationWaypoint ?. title
let lat = currentLeg ?. destinationCoordinate . latitude . description
let lng = currentLeg ?. destinationCoordinate . longitude . description
NSLog ( nextDestination ! + ", " + lat ! + "/" + lng !)
}
Objective-C
GMSRouteLeg * currentSegment = _mapView . navigator . currentRouteLeg ;
NSString * nextDestination = currentSegment . destinationWaypoint . title ;
CLLocationDegrees lat = currentSegment . destinationCoordinate . latitude ;
CLLocationDegrees lng = currentSegment . destinationCoordinate . longitude ;
NSLog ( @"%@" , [ NSString stringWithFormat : @"%@, %f/%f" , nextDestination , lat , lng ]);
Getting the most recently traveled path
To get the most recently traveled path, call
traveledPath .
This returns a
GMSPath
instance which has been simplified to remove redundant points (for example
turning consecutive colinear points into a single line segment). This path is
empty until guidance is started. The following example shows getting the most
recently traveled path:
Swift
if let navigator = mapView . navigator {
let latestPath = navigator . traveledPath
if latestPath . count () > 0 {
let begin : CLLocationCoordinate2D = latestPath . coordinate ( at : 0 )
let current : CLLocationCoordinate2D = latestPath . coordinate ( at : latestPath . count () - 1 )
print ( "Path from ( \( begin . latitude ) , \( begin . longitude ) ) to ( \( current . latitude ) , \( current . longitude ) )" )
}
}
Objective-C
GMSPath * latestPath = mapView . navigator . traveledPath ;
if ( latestPath . count > 0 ) {
CLLocationCoordinate2D begin = [ latestPath coordinateAtIndex : 0 ];
CLLocationCoordinate2D current = [ latestPath coordinateAtIndex : latestPath . count - 1 ];
NSLog ( @"Path from %f/%f to %f/%f" ,
begin . latitude ,
begin . longitude ,
current . latitude ,
current . longitude );
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
