---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSLocationSimulator
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSLocationSimulator
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
GMSLocationSimulator is a class used for simulating device location for testing purposes in iOS applications.
It provides methods to simulate movement along existing or new routes, set location at a fixed coordinate, and control simulation speed and behavior.
Developers can use this class to test location-based features and functionalities within their apps without needing actual device movement.
The simulator allows for pausing the simulation, avoiding certain road types like highways or tolls, and introducing random location jittering for realistic testing scenarios.
It also includes methods to simulate navigation prompts and traffic incident reports for a more comprehensive testing environment.
GMSLocationSimulator
@interface GMSLocationSimulator : NSObject
A class you can use to simulate a device location for testing purposes.
-init
Unavailable
Declaration
Objective-C
- ( instancetype ) init NS_UNAVAILABLE ;
-simulateLocationsAlongExistingRoute
Starts simulating travel along the route currently set on the GMSNavigator . If the
GMSNavigator does not have a route, this does nothing.
Declaration
Swift
func simulateLocationsAlongExistingRoute ()
Objective-C
- ( void ) simulateLocationsAlongExistingRoute ;
-simulateAlongNewRouteToDestinations:callback:
Calculates a route to the given waypoints and simulates travel along this route. The new route
will use the travel mode that is set on the GMSMapView .
Travel will be started just before the callback is called with GMSRouteStatusOK . If the
callback returns any value other than GMSRouteStatusOK , no simulation will start. If any other
simulator methods are called before the route is generated, route generation will be canceled and
the callback will be called with GMSRouteStatusCanceled .
Declaration
Swift
func simulateAlongNewRoute ( toDestinations destinations : [ GMSNavigationWaypoint ], callback : @escaping GMSRouteStatusCallback )
Objective-C
- ( void ) simulateAlongNewRouteToDestinations :
( nonnull NSArray < GMSNavigationWaypoint *> * ) destinations
callback :
( nonnull GMSRouteStatusCallback ) callback ;
Parameters
destinations
The list of destinations for the route that will be simulated.
callback
A block that will be called when the route becomes available or fails.
-simulateAlongNewRouteToDestinations:routingOptions:callback:
Calculates a route to the given waypoints, and simulates travel along this route. The new route
will use the travel mode which is set on the GMSMapView .
Travel starts right before the callback is invoked with GMSRouteStatusOK . If the callback
returns a value other than GMSRouteStatusOK , then no simulation starts. If any other simulator
methods are called before the route is generated, then route generation will be canceled, and the
callback will be called with GMSRouteStatusCanceled .
Declaration
Swift
func simulateAlongNewRoute ( toDestinations destinations : [ GMSNavigationWaypoint ], routingOptions : GMSNavigationRoutingOptions , callback : @escaping GMSRouteStatusCallback )
Objective-C
- ( void ) simulateAlongNewRouteToDestinations :
( nonnull NSArray < GMSNavigationWaypoint *> * ) destinations
routingOptions :
( nonnull GMSNavigationRoutingOptions * )
routingOptions
callback :
( nonnull GMSRouteStatusCallback ) callback ;
Parameters
destinations
The list of destinations for the route that will be simulated.
routingOptions
The routing logic that will determine the returned route.
callback
A block that will be called when the route becomes available or fails.
-simulateLocationAtCoordinate:
Starts simulating the device location at a fixed coordinate.
Declaration
Swift
func simulateLocation ( at coordinate : CLLocationCoordinate2D )
Objective-C
- ( void ) simulateLocationAtCoordinate :( CLLocationCoordinate2D ) coordinate ;
-stopSimulation
Stops simulating the device location if it is currently being simulated.
Declaration
Swift
func stopSimulation ()
Objective-C
- ( void ) stopSimulation ;
-simulateNavigationPrompt
Diplays a navigation prompt with fake data for testing purposes.
Declaration
Swift
func simulateNavigationPrompt ()
Objective-C
- ( void ) simulateNavigationPrompt ;
-simulateTrafficIncidentReport
Displays a dummy traffic prompt for testing purposes.
Declaration
Swift
func simulateTrafficIncidentReport ()
Objective-C
- ( void ) simulateTrafficIncidentReport ;
paused
Whether the simulation is currently paused. If this is set to YES whilst simulating along a
route, then location updates will still be sent periodically, but the location will stop
advancing along the route.
Declaration
Swift
var isPaused : Bool { get set }
Objective-C
@property ( nonatomic , getter = isPaused ) BOOL paused ;
avoidsHighways
Whether to avoid highways when simulating travel to destinations with the
-simulateAlongNewRouteToDestinations:callback: method. Defaults to NO.
Declaration
Swift
var avoidsHighways : Bool { get set }
Objective-C
@property ( nonatomic ) BOOL avoidsHighways ;
avoidsTolls
Whether to avoid toll roads when simulating travel to destinations with the
-simulateAlongNewRouteToDestinations:callback: method. Defaults to NO.
Declaration
Swift
var avoidsTolls : Bool { get set }
Objective-C
@property ( nonatomic ) BOOL avoidsTolls ;
avoidsFerries
Whether to avoid ferries when simulating travel to destinations with the
-simulateAlongNewRouteToDestinations:callback: method. Defaults to YES.
Declaration
Swift
var avoidsFerries : Bool { get set }
Objective-C
@property ( nonatomic ) BOOL avoidsFerries ;
speedMultiplier
The speed multiplier to use when simulating travel along a route. The value of this property must
be positive. Attempting to set a non-positive value will have no effect. The default value is
1.0.
Declaration
Swift
var speedMultiplier : Float { get set }
Objective-C
@property ( nonatomic ) float speedMultiplier ;
locationJitteringEnabled
Whether the simulated location should jitter randomly.
Declaration
Swift
var isLocationJitteringEnabled : Bool { get set }
Objective-C
@property ( nonatomic , assign , unsafe_unretained , readwrite ,
getter = isLocationJitteringEnabled ) BOOL locationJitteringEnabled ;
licensePlateRestriction
Set license plate restriction with current vehicle’s last digit of license plate and country
code. This allows us to route around certain types of road restrictions which are based on
license plate number. This will only apply to -simulateAlongNewRouteToDestinations calls made
after this value is set.
Set to nil if there is no license plate restriction. Default to nil.
Declaration
Swift
var licensePlateRestriction : GMSNavigationLicensePlateRestriction ? { get set }
Objective-C
@property ( nonatomic , nullable ) GMSNavigationLicensePlateRestriction * licensePlateRestriction ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The `GMSLocationSimulator` class simulates device locations for testing. Key actions include: simulating travel along existing routes or new routes to specified destinations using various routing options, simulating a fixed location, stopping the simulation, and displaying dummy navigation/traffic prompts. It allows pausing simulations, adjusting speed, avoiding tolls/highways/ferries, and setting license plate restrictions. The simulator can be set to randomly \"jitter\" the simulated location. Route simulations require a callback to handle the status of the route.\n"]]
