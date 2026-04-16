---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.304Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Unpaved road callouts"
feature_slug: "unpaved-road-callouts"
latest_feature_date: "2025-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/route"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav"
keywords:
  - "unpaved"
  - "road"
  - "callouts"
  - "the"
  - "navigation"
  - "route"
  - "can"
  - "display"
---

# Unpaved road callouts

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The navigation route can display callouts for unpaved road segments in supported regions and driving modes.

## Extended Definition

The navigation route can display callouts for unpaved road segments in supported regions and driving modes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/route](https://developers.google.com/maps/documentation/navigation/ios-sdk/route)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed](https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav)

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

### "Route to Navigation points \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Summary of Valid Waypoint Configurations Specification location placeID navigationPointToken Routing behavior Destination highlighting Location coordinates only set absent absent Routes to road segment nearest to the defined coordinates Shown if destination can be inferred with high confidence Place ID only absent set absent Routes to the default navigation point for the Place ID From Place ID Navigation point token only absent absent set Routes to the precise navigation point represented by the token From destination defined in original destinations method of the Geocoding API request Location coordinates and Place ID combined se set absent Routes to road segment nearest to the defined coordinates From Place ID, though not shown if Place ID is too far from the latitude/longitude coordinates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Swift // Create a waypoint using a navigation endpoint token let waypointTwo = GMSNavigationWaypoint ( navigationPointToken : "ChIJALijSXPhQkARHmIozCCbXsASEgkFVjYHGH6PgBFrbM7wl3.." title : "Sydney Opera House" ) // Route to the waypoint navigator . setDestinations ([ waypointTwo ]) { [ weak self ] routeStatus in self ?. handleRouteCallback ( status : routeStatus ) } Objective-C GMSNavigationWaypoint waypointTwo = [[ GMSNavigationWaypoint alloc ] initWithNavigationPointToek : @"sampleNavigationPointToken" Combine Place ID and Location Starting with v10.10, you can provide both a Place ID and location coordinates when creating a waypoint.
- Swift // Create a waypoint using both the latlng and placeID let waypoint = GMSNavigationWaypoint ( location : CLLocationCoordinate2DMake ( - 33.85657945261524 , 151.21535034203333 ), placeID : "ChIJ3S-JXmauEmsRUcIaWtf4MzE" , title : "Sydney Opera House" ) // Route to the waypoint navigator . setDestinations ([ waypoint ]) { [ weak self ] routeStatus in self ?. handleRouteCallback ( status : routeStatus ) } Objective-C CLLocationCoordinate2D location = CLLocationCoordinate2DMake ( 47.67 , -122.20 ); GMSNavigationWaypoint waypoint = [[ GMSNavigationWaypoint alloc ] initWithLocation : placeID : coordinate title : @"waypoint from location and placeiD" ]; Considerations: When you provide both placeID and location : The route primarily targets the specified location .
- Use a Navigation Point token For the most precise routing to specific access points like entrances, loading docks, or designated pick-up areas, you can use a navigationPointToken .

### "The Google navigation experience \_|\_ Navigation SDK for iOS \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Modification Details Modified navigation guidance: show/hide headers, colors and fonts, directions, alternate routes, and trip progress Map UI controls Navigation header and footer Navigation header accessory view Display directions list Hide alternate routes Display trip progress Adjust traffic information and speed limit information Display the speedometer Adjust speedometer alerts Enable traffic lights and stop signs Change the map experience UI and adjust the camera.
- As an alternative, if you need more customization than is available with the Google navigation experience, you can request a turn-by-turn navigation feed from the Navigation SDK and then provide and manage your own UI elements.
- For advanced customization beyond the provided options, developers can opt for a custom navigation experience by requesting a turn-by-turn navigation feed and building their own UI.
- When you embed the Google navigation experience in your app, you don't need to build the navigation experience from scratch, but you can still modify parts of the experience.

