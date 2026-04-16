---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.316Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Advanced markers"
feature_slug: "advanced-markers"
latest_feature_date: "2023-11-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/overview"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/events"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference"
keywords:
  - "advanced"
  - "markers"
  - "are"
  - "supported"
  - "for"
  - "navigation"
  - "sdk"
  - "versions"
---

# Advanced markers

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Advanced markers are supported for Navigation SDK versions 5.3.0 and higher.

## Extended Definition

Advanced markers are supported for Navigation SDK versions 5.3.0 and higher.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/overview)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/events](https://developers.google.com/maps/documentation/navigation/ios-sdk/events)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)

## Supporting Pages

### Navigation SDK overview \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How to use the Navigation SDK The steps below cover a typical use case scenario for using the Navigation SDK: 1 Get set up Create a Google Cloud project, add the Maps and Navigation SDKs to your API, and set up your Xcode project.
- The Navigation SDK requires the Maps SDK and allows for either the Google Navigation experience or building a custom navigation experience using its two main components: Map Layer and Navigation Experience.
- Page Summary outlined flag The Navigation SDK enables seamless integration of Google Maps turn-by-turn navigation into your mobile applications, offering UI customization and advanced route configuration.
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Navigation SDK overview Stay organized with collections Save and categorize content based on your preferences.

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, traffic lights and stop signs are disabled in the Navigation SDK for iOS.
- Swift class MyCustomView : UIView , GMSNavigationAccessoryView { … func heightForAccessoryViewConstrained ( to size : CGSize , on mapView : GMSMapView ) - > CGFloat { // viewHeight gets calculated as the height your view needs. return viewHeight } … } let customView = MyCustomView (...) mapView . setHeaderAccessory ( customView ) // At some later point customView changes size. mapView . invalidateLayout ( forAccessoryView : customView ) // Remove the custom header accessory view. mapView . setHeaderAccessory ( nil ) Objective-C @interface MyCustomView : UIView < GMSNavigationAccessoryView > … @end @implementation MyCustomView … - ( CGFloat ) heightForAccessoryViewConstrainedToSize : ( CGSize ) size onMapView : ( GMSMapView ) mapView { // viewHeight gets calculated as the height your view needs. return viewHeight ; } … @end MyCustomView customView = [[ MyCustomView alloc ] init … ]; [ mapView setHeaderAccessoryView : customView ]; // At some later point customView changes size. [ mapView invalidateLayoutForAccessoryView : customView ]; // Remove the custom header accessory view. [ mapView setHeaderAccessoryView : nil ]; Normal and low-light modes The GMSNavigatorListener.didChangeSuggestedLightingMode listener method is triggered when estimated lighting conditions are updated.
- Swift mapView . settings . scrollGestures = false mapView . settings . zoomGestures = false Objective-C mapView . settings . scrollGestures = NO ; mapView . settings . zoomGestures = NO ; Position controls and UI elements You can position controls and other UI elements relative to the position of the navigation header and footer, by using the following properties: navigationHeaderLayoutGuide navigationFooterLayoutGuide bottomTrailingButtonsLayoutGuide Note: To make sure that custom UI elements don't block any prompts that appear in the Navigation SDK, make sure that custom UI elements are implemented in a subview of the mapView , not in the root view.
- Swift mapView . settings . showsTrafficLights = true mapView . settings . showsStopSigns = true Objective-C mapView . settings . showsTrafficLights = YES ; mapView . settings . showsStopSigns = YES ; Speedometer control When navigation is enabled and the travel mode is set to driving, the Navigation SDK for iOS displays a speed limit control in the lower corner of the map that shows the current speed limit.

### "Listen for navigation events \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/events](https://developers.google.com/maps/documentation/navigation/ios-sdk/events)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OK else { print ( "Handle route statuses that are not OK." ) return } self . mapView . navigator ? . isGuidanceActive = true self . mapView . cameraMode = . following self . mapView . locationSimulator ? . simulateLocationsAlongExistingRoute () } mapView . roadSnappedLocationProvider ? . startUpdatingLocation () } // Listener to handle continuous location updates . func locationProvider ( locationProvider : GMSRoadSnappedLocationProvider , didUpdate location : CLLocation ) { print ( "Location: \(location.description)" ) } // Listener to handle speeding events . func navigator ( navigator : GMSNavigator , didUpdateSpeedingPercentage percentageAboveLimit : CGFloat ) { print ( "Speed is \(percentageAboveLimit) above the limit." ) } // Listener to handle arrival events . func navigator ( navigator : GMSNavigator , didArriveAt waypoint : GMSNavigationWaypoint ) { print ( "You have arrived at: \(waypoint.title)" ) mapView . navigator ? . continueToNextDestination () mapView . navigator ? . isGuidanceActive = true } // Listener for route change events . func navigatorDidChangeRoute ( navigator : GMSNavigator ) { print ( "The route has changed." ) } // Listener for time to next destination . func navigator ( navigator : GMSNavigator , didUpdateRemainingTime time : TimeInterval ) { print ( "Time to next destination: \(time)" ) } // Delegate for distance to next destination . func navigator ( navigator : GMSNavigator , didUpdateRemainingDistance distance : CLLocationDistance ) { let miles = distance 0.00062137 print ( "Distance to next destination: \(miles) miles." ) } // Delegate for traffic updates to next destination func navigator ( navigator : GMSNavigator , didUpdate delayCategory : GMSNavigationDelayCategory ) { print ( "Delay category to next destination: \(String(describing: delayCategory))." ) } // Delegate for suggested lighting mode changes . func navigator ( navigator : GMSNavigator , didChangeSuggestedLightingMode lightingMode : GMSNavigationLightingMode ) { print ( "Suggested lighting mode has changed: \(String(describing: lightingMode))" ) // Change to the suggested lighting mode . mapView . lightingMode = lightingMode } // Add a button to the view . func makeButton () { // Start navigation . let navButton = UIButton ( frame : CGRect ( x : 5 , y : 150 , width : 200 , height : 35 )) navButton . backgroundColor = . blue navButton . alpha = 0.5 navButton . setTitle ( "Start navigation" , for : . normal ) navButton . addTarget ( self , action : #selector(startNav), for: .touchUpInside) self . mapView . addSubview ( navButton ) } } Show/Hide the Objective-C code for an event listener. / Copyright 2020 Google Inc.
- Swift // Define a listener for suggested changes to lighting mode. func navigator( navigator : GMSNavigator , didChangeSuggestedLightingMode lightingMode : GMSNavigationLightingMode ) { print ( "Suggested lighting mode has changed: \( String ( describing : lightingMode )) " ) // Make the suggested change. mapView.lightingMode = lightingMode } Objective-C // Define a listener for suggested changes to lighting mode. -( void ) navigator: ( GMSNavigator ) navigator didChangeSuggestedLightingMode: ( GMSNavigationLightingMode ) lightingMode { NSLog ( @"Suggested lighting mode has changed : % ld ", (long)lightingMode); // Make the suggested change. mapView.lightingMode = lightingMode; } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Listen for navigation events Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Navigation SDK for iOS allows you to respond to real-time navigation events like route changes, arrival, and location updates using listeners.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift class GMSNavigationMutableWaypoint : GMSNavigationWaypoint Objective-C @interface GMSNavigationMutableWaypoint : GMSNavigationWaypoint GMSNavigator This is the main class of the Google Navigation SDK for iOS and provides methods for controlling navigation to a destination and accessing route and progress information.
- Declaration Swift class GMSNavigationMutableRoutingOptions : GMSNavigationRoutingOptions Objective-C @interface GMSNavigationMutableRoutingOptions : GMSNavigationRoutingOptions GMSNavigationServices Services enabling control of mobile access to the Google Maps Navigation SDK for iOS.
- Defaults to GMSNavigationManeuverImageSizeSquare96. / @property ( nonatomic ) GMSNavigationManeuverImageSize maneuverImageSize ; - ( instancetype ) init NS DESIGNATED INITIALIZER ; @end GMSNavigationTermsAndConditionsOptions Options for displaying terms and conditions.
- Declaration Swift class GMSAdvancedMarker : GMSMarker Objective-C @interface GMSAdvancedMarker : GMSMarker GMSCALayer GMSCALayer is a superclass used by layers in the Google Maps SDK for iOS, such as GMSMapLayer and GMSPanoramaLayer .

