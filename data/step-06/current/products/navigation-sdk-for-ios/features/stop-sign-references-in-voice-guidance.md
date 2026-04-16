---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.303Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Stop sign references in voice guidance"
feature_slug: "stop-sign-references-in-voice-guidance"
latest_feature_date: "2025-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/create-customized-guidance"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
keywords:
  - "stop"
  - "sign"
  - "references"
  - "in"
  - "voice"
  - "guidance"
  - "includes"
  - "signs"
---

# Stop sign references in voice guidance

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Voice guidance includes stop signs when describing upcoming maneuvers.

## Extended Definition

Voice guidance includes stop signs when describing upcoming maneuvers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/create-customized-guidance](https://developers.google.com/maps/documentation/navigation/ios-sdk/create-customized-guidance)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)

## Supporting Pages

### "Create customized guidance \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/create-customized-guidance](https://developers.google.com/maps/documentation/navigation/ios-sdk/create-customized-guidance)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The code then adds an overview map configured to show the current road-snapped location. // Create the navigation session. navigationSession = [ GMSNavigationServices createNavigationSession ]; GMSRoadSnappedLocationProvider roadSnappedLocationProvider = navigationSession . roadSnappedLocationProvider ; [ roadSnappedLocationProvider startUpdatingLocation ]; GMSNavigator navigator = navigationSession . navigator ; [ navigator addListener : self ]; navigator . voiceGuidance = GMSNavigationVoiceGuidanceSilent ; navigator . sendsBackgroundNotifications = NO ; navigationSession . started = YES ; ​​ [ navigator setDestinations : @[ destination ] callback : ^ ( GMSRouteStatus routeStatus ) { // …handle changes in route status. }]; // Add an overview map. mapView = [[ GMSMapView alloc ] initWithFrame : CGRectZero ]; [ self . mainStackView addArrangedSubview : mapView ]; [ self . mainStackView setNeedsLayout ]; mapView . settings . compassButton = YES ; mapView . delegate = self ; mapView . myLocationEnabled = YES ; mapView . roadSnappedMyLocationSource = roadSnappedLocationProvider ; Passing navigation from a custom experience to the Google experience This code snippet illustrates how your app can allow the user to enter the Google navigation experience from a custom navigation experience.
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Create customized guidance Stay organized with collections Save and categorize content based on your preferences.
- Implement GMSNavigatorListener to set up turn-by-turn guidance, translating the information into your app's custom navigation UI.
- Implement the GMSNavigatorListener protocol to receive and utilize detailed guidance information for your custom UI elements.

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Swift mapView . settings . showsTrafficLights = true mapView . settings . showsStopSigns = true Objective-C mapView . settings . showsTrafficLights = YES ; mapView . settings . showsStopSigns = YES ; Speedometer control When navigation is enabled and the travel mode is set to driving, the Navigation SDK for iOS displays a speed limit control in the lower corner of the map that shows the current speed limit.
- Traffic lights and stop signs You can enable the display of traffic lights and stop signs during active navigation in the mapView , which provides additional context for routes and trip maneuvers.
- To enable this feature, call the GMSMapView settings for each option independently: showsTrafficLights and showsStopSigns .
- By default, traffic lights and stop signs are disabled in the Navigation SDK for iOS.

### "The Google navigation experience \_|\_ Navigation SDK for iOS \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Modification Details Modified navigation guidance: show/hide headers, colors and fonts, directions, alternate routes, and trip progress Map UI controls Navigation header and footer Navigation header accessory view Display directions list Hide alternate routes Display trip progress Adjust traffic information and speed limit information Display the speedometer Adjust speedometer alerts Enable traffic lights and stop signs Change the map experience UI and adjust the camera.
- While utilizing the Google navigation experience, developers have the flexibility to customize UI elements such as color schemes, camera views, and turn guidance displays.
- When you use Google navigation experience, your app calls the Navigation SDK to start, run, and stop navigation, using the following flow: Start navigation .
- In general, you can modify the Google navigation experience to have different color schemes, camera views, extra turn guidance, and event response triggers.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift var isNavigationEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isNavigationEnabled ) BOOL navigationEnabled ; navigator The navigator for this GMSMapView which allows routes to be requested and turn-by-turn guidance to be started.
- Declaration Swift var isIndoorEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isIndoorEnabled ) BOOL indoorEnabled ; indoorDisplay Gets the GMSIndoorDisplay instance which allows to observe or control aspects of indoor data display.
- Declaration Swift var lightingMode : GMSNavigationLightingMode { get set } Objective-C @property ( nonatomic ) GMSNavigationLightingMode lightingMode ; shouldDisplaySpeedLimit Determines whether the speed limit should be displayed when guidance is active and speed limit data is available.
- Declaration Swift var isMyLocationEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isMyLocationEnabled ) BOOL myLocationEnabled ; myLocation If My Location is enabled, reveals where the device location dot is being drawn.

