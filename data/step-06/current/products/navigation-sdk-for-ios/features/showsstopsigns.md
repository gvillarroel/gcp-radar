---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.307Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "showsStopSigns"
feature_slug: "showsstopsigns"
latest_feature_date: "2025-07-14"
deprecation_date: "2025-07-14"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed"
keywords:
  - "showsstopsigns"
  - "controls"
  - "whether"
  - "stop"
  - "signs"
  - "are"
  - "shown"
  - "during"
---

# showsStopSigns

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Controls whether stop signs are shown during navigation; deprecated on 2025-07-14.

## Extended Definition

Controls whether stop signs are shown during navigation; deprecated on 2025-07-14.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed](https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed)

## Supporting Pages

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Swift mapView . settings . showsTrafficLights = true mapView . settings . showsStopSigns = true Objective-C mapView . settings . showsTrafficLights = YES ; mapView . settings . showsStopSigns = YES ; Speedometer control When navigation is enabled and the travel mode is set to driving, the Navigation SDK for iOS displays a speed limit control in the lower corner of the map that shows the current speed limit.
- Traffic lights and stop signs You can enable the display of traffic lights and stop signs during active navigation in the mapView , which provides additional context for routes and trip maneuvers.
- Note that double tapping or pinching when scrollGestures are enabled may pan the camera to the specified point. tiltGestures — controls whether tilt gestures are enabled or disabled.
- Note that disabling the gesture won't limit programmatic access to the camera settings. scrollGestures — controls whether scroll gestures are enabled or disabled.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift var isBuildingsEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isBuildingsEnabled ) BOOL buildingsEnabled ; indoorEnabled Sets whether indoor maps are shown, where available.
- Declaration Swift func moveCamera ( update : GMSCameraUpdate ) Objective-C - ( void ) moveCamera :( nonnull GMSCameraUpdate ) update ; -areEqualForRenderingPosition:position: Check whether the given camera positions would practically cause the camera to be rendered the same, taking into account the level of precision and transformations used internally.
- Declaration Swift var isTrafficEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isTrafficEnabled ) BOOL trafficEnabled ; transitEnabled Controls whether the map is drawing transit data, if available.
- Declaration Swift var projection : GMSProjection { get } Objective-C @property ( nonatomic , readonly ) GMSProjection Nonnull projection ; myLocationEnabled Controls whether the My Location dot and accuracy circle is enabled.

### Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- You can control the display and tappability of disruption callouts during active navigation using shouldDisplayPrompts , which also controls the display of callouts along routes and the display of automated alerts when a user approaches a disruption . mapView . navigator . shouldDisplayPrompts = true Automated disruption alerts with voting during active navigation During active navigation, when a user approaches a disruption along a route, a prompt appears with information about the disruption and buttons for voting on whether the disruption is still present.
- You can control the ability of users to tap disruption callouts on route overviews to display more information using showsIncidentCards . mapView . settings . showsIncidentCards = true Callout info cards during active navigation When a disruption callout appears along a route during active navigation, users can tap the callout to display an info card with more information about the disruption, including the disruption type and the time it was last reported, as well as buttons for voting on whether the disruption is still present.
- You can control the display of disruption callouts along routes using shouldDisplayPrompts , which also controls the display of automated alerts when a user approaches a disruption . mapView . navigator . shouldDisplayPrompts = true Display disruption details when a user taps a callout Users can tap a callout to display an info card with more information about the disruption, including the disruption type, the time it was last reported, and in some cases, an option for voting on whether the disruption is still present.
- You can configure the display of alert prompts during active navigation using shouldDisplayPrompts , which also controls the display of callouts along routes . mapView . navigator . shouldDisplayPrompts = true Note: When a user approaches a disruption along a route during active navigation, the disruption is announced with an audio alert.

### "Details about the turn-by-turn data feed \_|\_ Navigation SDK for iOS \_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed](https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Shown below are example event listeners for the didChangeNavInfo event: Swift // ViewController.swift class SomeViewController : UIViewController { ... mapView . navigator ? . add ( self ); ... } extension SomeViewController : GMSNavigatorListener { func navigator ( navigator : GMSNavigator , didUpdateNavInfo navInfo : GMSNavigationNavInfo ) { // Get the current step information if navInfo . navState == . enroute { if let currentStep = navInfo . currentStep { ... roadNameLabel . text = currentStep . simpleRoadName ... } } } } Objective-C // ViewController.h @ interface SomeViewController () < GMSNavigatorListener > @ end // ViewController.m @ implementation SomeViewController // Some initialization code. ... { ... [ mapView . navigator addListener : self ]; ... } #pragma mark GMSNavigatorListener - ( void ) navigator : ( GMSNavigator ) navigator didUpdateNavInfo : ( GMSNavigationNavInfo ) navInfo { // Get the current step information if ( navInfo . navState == GMSNavigationNavStateEnroute ) { GMSNavigationStepInfo currentStep = navInfo . currentStep ; if ( currentStep ) { ... roadNameLabel . text = currentStep . simpleRoadName ; ... } } ... } Navigation states Use navState property of GMSNavigationNavInfo to get the current state of navigation, which is one of the following: Enroute - The GMSNavigationNavStateEnroute state means that guided navigation is active and the user is on the provided route.
- Swift let currentStepInfo = navInfo . currentStep let options = GMSNavigationStepImageOptions () options . maneuverImageSize = . square96 options . screenMetrics = UIScreen . mainScreen let maneuverImage = currentStepinfo . maneuverImage ( options : options ) Objective-C GMSNavigationStepInfo stepInfo = navInfo . currentStep ; GMSNavigationStepImageOptions options = [[ GMSNavigationStepImageOptions alloc ] init ]; options . maneuverImageSize = GMSNavigationManeuverImageSizeSquare96 ; options . screenMetrics = UIScreen . mainScreen ; UIImage maneuverImage = [ stepInfo maneuverImageWithOptions : options ]; Creating icons for maneuvers The GMSNavigationManeuver enum defines each possible maneuver that could occur while navigating, and you can get the maneuver for a given step from the maneuver property of GMSNavigationStepInfo .
- Swift let currentStepInfo = navInfo . currentStep let options = GMSNavigationStepImageOptions () options . maneuverImageSize = . square96 options . screenMetrics = UIScreen . mainScreen let maneuverImage = currentStepinfo . maneuverImage ( options : options ) Objective-C GMSNavigationStepInfo stepInfo = navInfo . currentStep ; GMSNavigationStepImageOptions options = [[ GMSNavigationStepImageOptions alloc ] init ]; options . maneuverImageSize = GMSNavigationManeuverImageSizeSquare96 ; options . screenMetrics = UIScreen . mainScreen ; UIImage maneuverImage = [ stepInfo maneuverImageWithOptions : options ]; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Essential navigation display elements The primary fields for each navigation step are the full road name, maneuver, and total distance of the step, which are available in GMSNavigationStepInfo .

