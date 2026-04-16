---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.315Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Terrain mode during active navigation"
feature_slug: "terrain-mode-during-active-navigation"
latest_feature_date: "2024-05-28"
deprecation_date: "2024-05-28"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/overview"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav"
keywords:
  - "terrain"
  - "mode"
  - "during"
  - "active"
  - "navigation"
  - "in"
  - "the"
  - "sdk"
---

# Terrain mode during active navigation

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Terrain mode during active navigation in the Navigation SDK for iOS is deprecated and will be replaced by normal mode; deprecated on 2024-05-28.

## Extended Definition

Terrain mode during active navigation in the Navigation SDK for iOS is deprecated and will be replaced by normal mode; deprecated on 2024-05-28.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/overview)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav)

## Supporting Pages

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Swift mapView . settings . showsTrafficLights = true mapView . settings . showsStopSigns = true Objective-C mapView . settings . showsTrafficLights = YES ; mapView . settings . showsStopSigns = YES ; Speedometer control When navigation is enabled and the travel mode is set to driving, the Navigation SDK for iOS displays a speed limit control in the lower corner of the map that shows the current speed limit.
- Swift mapView . settings . isRecenterButtonEnabled = true Objective-C mapView . settings . recenterButtonEnabled = YES ; Map UI accessories The Navigation SDK provides UI accessories that appear during navigation similar to those found in the Google Maps for iOS application.
- Traffic lights and stop signs You can enable the display of traffic lights and stop signs during active navigation in the mapView , which provides additional context for routes and trip maneuvers.
- The option to configure the display of traffic lights by using showsTrafficLights only affects traffic lights in active navigation mode.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift var lightingMode : GMSNavigationLightingMode { get set } Objective-C @property ( nonatomic ) GMSNavigationLightingMode lightingMode ; shouldDisplaySpeedLimit Determines whether the speed limit should be displayed when guidance is active and speed limit data is available.
- Setting this value will override the default Navigation SDK zoom level when the camera is following device location (i.e. cameraMode equals GMSNavigationCameraModeFollowing).
- Declaration Swift var followingPerspective : GMSNavigationCameraPerspective { get set } Objective-C @property ( nonatomic ) GMSNavigationCameraPerspective followingPerspective ; travelMode The travel mode which determines what type of routes will be fetched and the way that device course is determined.
- Declaration Swift var locationSimulator : GMSLocationSimulator ? { get } Objective-C @property ( nonatomic , readonly , nullable ) GMSLocationSimulator locationSimulator ; cameraMode The mode of the camera which determines its behavior when the navigationEnabled property is set to YES.

### Navigation SDK overview \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Leverage the Navigation SDK to support various modes of transportation, including driving, walking, cycling, and two-wheel vehicles, and customize UI elements for a personalized user experience.
- Integrating navigation into your app lets you provide a superior experience for your users, while applying your own branding and leveraging trip data: Control the end-to-end experience and increase engagement by keeping users within your app during navigation, eliminating the need to switch between apps.
- How to use the Navigation SDK The steps below cover a typical use case scenario for using the Navigation SDK: 1 Get set up Create a Google Cloud project, add the Maps and Navigation SDKs to your API, and set up your Xcode project.
- The Navigation SDK requires the Maps SDK and allows for either the Google Navigation experience or building a custom navigation experience using its two main components: Map Layer and Navigation Experience.

### "The Google navigation experience \_|\_ Navigation SDK for iOS \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- During active navigation, the Navigation SDK provides UI components, which are similar to those in the Google Maps apps.
- The Google navigation experience refers to using the Navigation SDK to embed a turn-by-turn navigation experience that uses Google-provided UI elements and visuals, which are similar to the navigation experience within the Google Maps apps.
- Page Summary outlined flag The Navigation SDK offers the Google navigation experience, providing a pre-built, customizable turn-by-turn navigation feature similar to Google Maps.
- When you use Google navigation experience, your app calls the Navigation SDK to start, run, and stop navigation, using the following flow: Start navigation .

