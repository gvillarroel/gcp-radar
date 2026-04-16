---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.308Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "showsTrafficLights"
feature_slug: "showstrafficlights"
latest_feature_date: "2025-07-14"
deprecation_date: "2025-07-14"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info"
keywords:
  - "showstrafficlights"
  - "controls"
  - "whether"
  - "traffic"
  - "lights"
  - "are"
  - "shown"
  - "during"
---

# showsTrafficLights

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Controls whether traffic lights are shown during navigation; deprecated on 2025-07-14.

## Extended Definition

Controls whether traffic lights are shown during navigation; deprecated on 2025-07-14.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info](https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info)

## Supporting Pages

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Swift mapView . settings . showsTrafficLights = true mapView . settings . showsStopSigns = true Objective-C mapView . settings . showsTrafficLights = YES ; mapView . settings . showsStopSigns = YES ; Speedometer control When navigation is enabled and the travel mode is set to driving, the Navigation SDK for iOS displays a speed limit control in the lower corner of the map that shows the current speed limit.
- Traffic lights and stop signs You can enable the display of traffic lights and stop signs during active navigation in the mapView , which provides additional context for routes and trip maneuvers.
- Note that double tapping or pinching when scrollGestures are enabled may pan the camera to the specified point. tiltGestures — controls whether tilt gestures are enabled or disabled.
- Note that disabling the gesture won't limit programmatic access to the camera settings. scrollGestures — controls whether scroll gestures are enabled or disabled.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift var isTrafficEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isTrafficEnabled ) BOOL trafficEnabled ; transitEnabled Controls whether the map is drawing transit data, if available.
- Declaration Swift var isBuildingsEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isBuildingsEnabled ) BOOL buildingsEnabled ; indoorEnabled Sets whether indoor maps are shown, where available.
- Declaration Swift var selectedMarker : GMSMarker ? { get set } Objective-C @property ( nonatomic , nullable ) GMSMarker selectedMarker ; trafficEnabled Controls whether the map is drawing traffic data, if available.
- Declaration Swift func moveCamera ( update : GMSCameraUpdate ) Objective-C - ( void ) moveCamera :( nonnull GMSCameraUpdate ) update ; -areEqualForRenderingPosition:position: Check whether the given camera positions would practically cause the camera to be rendered the same, taking into account the level of precision and transformations used internally.

### Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- You can control the display and tappability of disruption callouts during active navigation using shouldDisplayPrompts , which also controls the display of callouts along routes and the display of automated alerts when a user approaches a disruption . mapView . navigator . shouldDisplayPrompts = true Automated disruption alerts with voting during active navigation During active navigation, when a user approaches a disruption along a route, a prompt appears with information about the disruption and buttons for voting on whether the disruption is still present.
- You can control the ability of users to tap disruption callouts on route overviews to display more information using showsIncidentCards . mapView . settings . showsIncidentCards = true Callout info cards during active navigation When a disruption callout appears along a route during active navigation, users can tap the callout to display an info card with more information about the disruption, including the disruption type and the time it was last reported, as well as buttons for voting on whether the disruption is still present.
- You can control the display of disruption callouts along routes using shouldDisplayPrompts , which also controls the display of automated alerts when a user approaches a disruption . mapView . navigator . shouldDisplayPrompts = true Display disruption details when a user taps a callout Users can tap a callout to display an info card with more information about the disruption, including the disruption type, the time it was last reported, and in some cases, an option for voting on whether the disruption is still present.
- You can configure the display of alert prompts during active navigation using shouldDisplayPrompts , which also controls the display of callouts along routes . mapView . navigator . shouldDisplayPrompts = true Note: When a user approaches a disruption along a route during active navigation, the disruption is announced with an audio alert.

### Get route information \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info](https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- OK else { print ( "Handle route statuses that are not OK." ) return } self . mapView . navigator ? . isGuidanceActive = true self . mapView . cameraMode = . following self . mapView . locationSimulator ? . simulateLocationsAlongExistingRoute () } mapView . roadSnappedLocationProvider ? . startUpdatingLocation () } func getTimeToNextDestination () { if let navigator = mapView . navigator { let time = navigator . timeToNextDestination let minutes = floor ( time / 60 ) let seconds = round ( time - minutes 60 ) print ( "Time to next destination: \(minutes):\(seconds)" ) } } func getDistanceToNextDestination () { if let navigator = mapView . navigator { let distance = navigator . distanceToNextDestination let miles = distance 0.00062137 print ( "Distance to next destination: \(miles) miles." ) } } func getCurrentRouteLeg () { if let navigator = mapView . navigator { let currentLeg = navigator . currentRouteLeg let nextDestination = currentLeg ? . destinationWaypoint ? . title ?? "Not Available" let lat = currentLeg ? . destinationCoordinate . latitude . description ?? "Not Available" let lng = currentLeg ? . destinationCoordinate . longitude . description ?? "Not Available" print ( "Destination: \(nextDestination) at (\(lat),\(lng)" ) } } func getTraveledPath () { if let navigator = mapView . navigator { let latestPath = navigator . traveledPath if latestPath . count () > 0 { let begin : CLLocationCoordinate2D = latestPath . coordinate ( at : 0 ) let current : CLLocationCoordinate2D = latestPath . coordinate ( at : latestPath . count () - 1 ) print ( "Path from (\(begin.latitude),\(begin.longitude)) to (\(current.latitude),\(current.longitude))" ) } } } // Add some buttons to the view . func makeButtons () { // Start navigation . let navButton = UIButton ( frame : CGRect ( x : 5 , y : 150 , width : 200 , height : 35 )) navButton . backgroundColor = . blue navButton . alpha = 0.5 navButton . setTitle ( "Start navigation" , for : . normal ) navButton . addTarget ( self , action : #selector(startNav), for: .touchUpInside) self . mapView . addSubview ( navButton ) // Get the time to the next destination . let timeButton = UIButton ( frame : CGRect ( x : 5 , y : 190 , width : 200 , height : 35 )) timeButton . backgroundColor = . blue timeButton . alpha = 0.5 timeButton . setTitle ( "Time to next destination" , for : . normal ) timeButton . addTarget ( self , action : #selector(getTimeToNextDestination), for: .touchUpInside) self . mapView . addSubview ( timeButton ) // Get the distance to the next destination . let distanceButton = UIButton ( frame : CGRect ( x : 5 , y : 230 , width : 200 , height : 35 )) distanceButton . backgroundColor = . blue distanceButton . alpha = 0.5 distanceButton . setTitle ( "Distance to next destination" , for : . normal ) distanceButton . addTarget ( self , action : #selector(getDistanceToNextDestination), for: .touchUpInside) self . mapView . addSubview ( distanceButton ) // Get the current route leg . let routeButton = UIButton ( frame : CGRect ( x : 5 , y : 270 , width : 200 , height : 35 )) routeButton . backgroundColor = . blue routeButton . alpha = 0.5 routeButton . setTitle ( "Get current route leg" , for : . normal ) routeButton . addTarget ( self , action : #selector(getCurrentRouteLeg), for: .touchUpInside) self . mapView . addSubview ( routeButton ) // Get the most recently traveled path . let pathButton = UIButton ( frame : CGRect ( x : 5 , y : 310 , width : 200 , height : 35 )) pathButton . backgroundColor = . blue pathButton . alpha = 0.5 pathButton . setTitle ( "Get traveled path" , for : . normal ) pathButton . addTarget ( self , action : #selector(getTraveledPath), for: .touchUpInside) self . mapView . addSubview ( pathButton ) } } Show/Hide the Objective-C code to get route information. / Copyright 2017 Google Inc.
- The following example shows evaluating the result and logging a traffic message: Swift if let navigator = mapView . navigator { // insert sample for evaluating traffic value let delay = navigator . delayCategoryToNextDestination let traffic = "unavailable" switch delay { case . noData : traffic = "unavailable" case . heavy : traffic = "heavy" case . medium : traffic = "moderate" case . light : traffic = "light" default : traffic = "unavailable" } print ( "Traffic is \( traffic ) ." ) } Objective-C GMSNavigationDelayCategory delay = mapView . navigator . delayCategoryToNextDestination ; NSString traffic = @"" ; switch ( delayCategory ) { case GMSNavigationDelayCategoryNoData : traffic = @"No Data" ; break ; case GMSNavigationDelayCategoryHeavy : traffic = @"Heavy" ; break ; case GMSNavigationDelayCategoryMedium : traffic = @"Medium" ; break ; case GMSNavigationDelayCategoryLight : traffic = @"Light" ; break ; default : NSLog ( @"Invalid delay category: %zd" , delayCategory ); } NSLog ( @"%@" , [ NSString stringWithFormat : @"Traffic is %@." , traffic ]); Getting information about the current leg To get information about the current route leg, call currentRouteLeg .
- The following example shows getting the most recently traveled path: Swift if let navigator = mapView . navigator { let latestPath = navigator . traveledPath if latestPath . count () > 0 { let begin : CLLocationCoordinate2D = latestPath . coordinate ( at : 0 ) let current : CLLocationCoordinate2D = latestPath . coordinate ( at : latestPath . count () - 1 ) print ( "Path from ( \( begin . latitude ) , \( begin . longitude ) ) to ( \( current . latitude ) , \( current . longitude ) )" ) } } Objective-C GMSPath latestPath = mapView . navigator . traveledPath ; if ( latestPath . count > 0 ) { CLLocationCoordinate2D begin = [ latestPath coordinateAtIndex : 0 ]; CLLocationCoordinate2D current = [ latestPath coordinateAtIndex : latestPath . count - 1 ]; NSLog ( @"Path from %f/%f to %f/%f" , begin . latitude , begin . longitude , current . latitude , current . longitude ); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Swift if let navigator = mapView . navigator { let distance = navigator . distanceToNextDestination let miles = distance 0.00062137 NSLog ( "Distance to next destination: %.2f miles." , miles ) } Objective-C CLLocationDistance distance = mapView . navigator . distanceToNextDestination ; double miles = distance 0.00062137 ; NSLog ( @"%@" , [ NSString stringWithFormat : @"Distance to next destination: %.2f." , miles ]); Getting traffic conditions to the next destination To get a value indicating the flow of traffic to the next destination, call delayCategoryToNextDestination .

