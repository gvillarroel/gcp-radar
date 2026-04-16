---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.304Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Narrow road callouts"
feature_slug: "narrow-road-callouts"
latest_feature_date: "2025-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/route"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes"
keywords:
  - "narrow"
  - "road"
  - "callouts"
  - "the"
  - "navigation"
  - "route"
  - "can"
  - "display"
---

# Narrow road callouts

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The navigation route can display callouts for narrow roads in supported areas and driving modes.

## Extended Definition

The navigation route can display callouts for narrow roads in supported areas and driving modes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/route](https://developers.google.com/maps/documentation/navigation/ios-sdk/route)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed](https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes)

## Supporting Pages

### Navigate a route \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/route](https://developers.google.com/maps/documentation/navigation/ios-sdk/route)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set the travelMode property of the map view, as shown in the following example: Swift self . mapView . travelMode = . cycling Objective-C mapView . travelMode = GMSNavigationTravelModeCycling ; Set roads to avoid Use the avoidsHighways and avoidsTolls BOOL properties to avoid highways and/or toll roads along a route.
- UNUserNotificationCenter center = [ UNUserNotificationCenter currentNotificationCenter ]; UNAuthorizationOptions options = UNAuthorizationOptionAlert ; [ center requestAuthorizationWithOptions : options completionHandler : ^ ( BOOL granted , NSError Nullable error ) { if ( ! error && granted ) { NSLog ( @"iOS Notification Permission: newly Granted" ); } else { NSLog ( @"iOS Notification Permission: Failed or Denied" ); } }]; } else { // Handle rejection of the terms and conditions. } }]; self . view = mapView ; [ self makeButton ]; } // Create a route and initiate navigation. - ( void ) startNav { NSArray<GMSNavigationWaypoint > destinations = @[ [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJnUYTpNASkFQR gSty5kyoUk" title : @"PCC Natural Market" ], [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJJ326ROcSkFQRBfUzOL2DSbo" title : @"Marina Park" ] ] ; [ mapView . navigator setDestinations : destinations callback : ^ ( GMSRouteStatus routeStatus ){ [ mapView . locationSimulator simulateLocationsAlongExistingRoute ]; mapView . navigator . guidanceActive = YES ; mapView . navigator . sendsBackgroundNotifications = YES ; mapView . cameraMode = GMSNavigationCameraModeFollowing ; }]; } // Add a button to the view. - ( void ) makeButton { // A button to start navigation.
- UNUserNotificationCenter . current () . requestAuthorization ( options : [ . alert ]) { granted , error in // Handle denied authorization to display notifications . if ! granted error != nil { print ( "User rejected request to display notifications." ) } } } else { // Handle rejection of terms and conditions . } } view = mapView makeButton () } // Create a route and start guidance . func startNav () { var destinations = GMSNavigationWaypoint destinations . append ( GMSNavigationWaypoint . init ( placeID : "ChIJnUYTpNASkFQR gSty5kyoUk" , title : "PCC Natural Market" ) ! ) destinations . append ( GMSNavigationWaypoint . init ( placeID : "ChIJJ326ROcSkFQRBfUzOL2DSbo" , title : "Marina Park" ) ! ) mapView . navigator ? . setDestinations ( destinations ) { routeStatus in guard routeStatus == .
- OK else { print ( "Handle route statuses that are not OK." ) return } self . mapView . navigator ? . isGuidanceActive = true self . mapView . locationSimulator ? . simulateLocationsAlongExistingRoute () self . mapView . cameraMode = . following } } // Add a button to the view . func makeButton () { // A button to start navigation . let navButton = UIButton ( frame : CGRect ( x : 5 , y : 150 , width : 200 , height : 35 )) navButton . backgroundColor = . blue navButton . alpha = 0.5 navButton . setTitle ( "Start navigation" , for : . normal ) navButton . addTarget ( self , action : #selector(startNav), for: .touchUpInside) self . mapView . addSubview ( navButton ) } } Show/Hide the Objective-C code for the navigation view controller. / Copyright 2017 Google Inc.

### "Details about the turn-by-turn data feed \_|\_ Navigation SDK for iOS \_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed](https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It provides upcoming maneuvers with elements you supply: icons (left, right, U-turn) turn numbers in roundabouts road names estimated distances and time to the next navigation step or final destination You can use the turn-by-turn feed to create experiences where the full Navigation SDK UI is not appropriate, such as for small screen displays.
- Shown below are example event listeners for the didChangeNavInfo event: Swift // ViewController.swift class SomeViewController : UIViewController { ... mapView . navigator ? . add ( self ); ... } extension SomeViewController : GMSNavigatorListener { func navigator ( navigator : GMSNavigator , didUpdateNavInfo navInfo : GMSNavigationNavInfo ) { // Get the current step information if navInfo . navState == . enroute { if let currentStep = navInfo . currentStep { ... roadNameLabel . text = currentStep . simpleRoadName ... } } } } Objective-C // ViewController.h @ interface SomeViewController () < GMSNavigatorListener > @ end // ViewController.m @ implementation SomeViewController // Some initialization code. ... { ... [ mapView . navigator addListener : self ]; ... } #pragma mark GMSNavigatorListener - ( void ) navigator : ( GMSNavigator ) navigator didUpdateNavInfo : ( GMSNavigationNavInfo ) navInfo { // Get the current step information if ( navInfo . navState == GMSNavigationNavStateEnroute ) { GMSNavigationStepInfo currentStep = navInfo . currentStep ; if ( currentStep ) { ... roadNameLabel . text = currentStep . simpleRoadName ; ... } } ... } Navigation states Use navState property of GMSNavigationNavInfo to get the current state of navigation, which is one of the following: Enroute - The GMSNavigationNavStateEnroute state means that guided navigation is active and the user is on the provided route.
- Essential navigation display elements The primary fields for each navigation step are the full road name, maneuver, and total distance of the step, which are available in GMSNavigationStepInfo .
- Page Summary outlined flag The turn-by-turn data feed provides navigation guidance information (icons, road names, distances, and time) for devices with limited display capabilities.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With style options you can customize the presentation of the standard Google map styles, changing the visual display of features like roads, parks, and other points of interest.
- Declaration Swift class GMSNavigationLicensePlateRestriction : NSObject Objective-C @interface GMSNavigationLicensePlateRestriction : NSObject GMSNavigationNavInfo Contains information about the state of navigation Declaration Swift class GMSNavigationNavInfo : NSObject Objective-C @interface GMSNavigationNavInfo : NSObject GMSNavigationRouteInfo An immutable class that encapsulates ETA and distance information for both the default best route, and the shortest route, to a specific waypoint.
- Declaration Swift class GMSNavigationStepInfo : NSObject Objective-C @interface GMSNavigationStepInfo : NSObject GMSNavigationStepInfoImageOptions Declaration Swift class GMSNavigationStepInfoImageOptions : NSObject Objective-C @interface GMSNavigationStepInfoImageOptions : NSObject / The object which provides screen metrics for the screen the image will be displayed on.
- Declaration Swift class GMSNavigationMutableWaypoint : GMSNavigationWaypoint Objective-C @interface GMSNavigationMutableWaypoint : GMSNavigationWaypoint GMSNavigator This is the main class of the Google Navigation SDK for iOS and provides methods for controlling navigation to a destination and accessing route and progress information.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With style options you can customize the presentation of the standard Google map styles, changing the visual display of features like roads, parks, and other points of interest.
- Declaration Swift class GMSNavigationLicensePlateRestriction : NSObject Objective-C @interface GMSNavigationLicensePlateRestriction : NSObject GMSNavigationNavInfo Contains information about the state of navigation Declaration Swift class GMSNavigationNavInfo : NSObject Objective-C @interface GMSNavigationNavInfo : NSObject GMSNavigationRouteInfo An immutable class that encapsulates ETA and distance information for both the default best route, and the shortest route, to a specific waypoint.
- Declaration Swift class GMSNavigationStepInfo : NSObject Objective-C @interface GMSNavigationStepInfo : NSObject GMSNavigationStepInfoImageOptions Declaration Swift class GMSNavigationStepInfoImageOptions : NSObject Objective-C @interface GMSNavigationStepInfoImageOptions : NSObject / The object which provides screen metrics for the screen the image will be displayed on.
- Declaration Swift class GMSNavigationMutableWaypoint : GMSNavigationWaypoint Objective-C @interface GMSNavigationMutableWaypoint : GMSNavigationWaypoint GMSNavigator This is the main class of the Google Navigation SDK for iOS and provides methods for controlling navigation to a destination and accessing route and progress information.

