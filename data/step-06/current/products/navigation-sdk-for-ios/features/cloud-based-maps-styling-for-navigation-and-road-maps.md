---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.304Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Cloud-based maps styling for navigation and road maps"
feature_slug: "cloud-based-maps-styling-for-navigation-and-road-maps"
latest_feature_date: "2025-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-map-styles"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/overview"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes"
keywords:
  - "based"
  - "maps"
  - "styling"
  - "for"
  - "navigation"
  - "and"
  - "road"
  - "reusable"
---

# Cloud-based maps styling for navigation and road maps

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Reusable styles associated with map IDs can be used to style both the navigation map and the road map.

## Extended Definition

Reusable styles associated with map IDs can be used to style both the navigation map and the road map.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-map-styles](https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-map-styles)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/overview)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes)

## Supporting Pages

### Customize map styles \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-map-styles](https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-map-styles)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Customize map styles Stay organized with collections Save and categorize content based on your preferences.
- You can use cloud-based map styling to define reusable map styles for the Google navigation experience in the Navigation SDK.
- Note: While it is technically possible to define separate styles for the navigation and road map types by associating separate styles with different map IDs, this implementation is not recommended because it requires reloading the map to load the different map ID.
- When you associate styles with maps in the Navigation SDK, the styles apply to both road and navigation maps: Light mode styles in the Cloud Console apply to both light mode road maps and daylight navigation maps.

### Navigation SDK overview \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Navigation SDK overview Stay organized with collections Save and categorize content based on your preferences.
- How to use the Navigation SDK The steps below cover a typical use case scenario for using the Navigation SDK: 1 Get set up Create a Google Cloud project, add the Maps and Navigation SDKs to your API, and set up your Xcode project.
- The Navigation SDK requires the Maps SDK and allows for either the Google Navigation experience or building a custom navigation experience using its two main components: Map Layer and Navigation Experience.
- The two main components of the Navigation SDK are: Map Layer : Begin with a map layer from the Maps SDK, including map view, styling, UI controls, camera, and interaction behavior.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Reference Send feedback GoogleNavigation Framework Reference Stay organized with collections Save and categorize content based on your preferences.
- Declaration Swift class GMSNavigationLicensePlateRestriction : NSObject Objective-C @interface GMSNavigationLicensePlateRestriction : NSObject GMSNavigationNavInfo Contains information about the state of navigation Declaration Swift class GMSNavigationNavInfo : NSObject Objective-C @interface GMSNavigationNavInfo : NSObject GMSNavigationRouteInfo An immutable class that encapsulates ETA and distance information for both the default best route, and the shortest route, to a specific waypoint.
- Declaration Swift class GMSNavigationMutableWaypoint : GMSNavigationWaypoint Objective-C @interface GMSNavigationMutableWaypoint : GMSNavigationWaypoint GMSNavigator This is the main class of the Google Navigation SDK for iOS and provides methods for controlling navigation to a destination and accessing route and progress information.
- Declaration Swift class GMSNavigationMutableRoutingOptions : GMSNavigationRoutingOptions Objective-C @interface GMSNavigationMutableRoutingOptions : GMSNavigationRoutingOptions GMSNavigationServices Services enabling control of mobile access to the Google Maps Navigation SDK for iOS.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Reference Send feedback GoogleNavigation Framework Reference Stay organized with collections Save and categorize content based on your preferences.
- Declaration Swift class GMSNavigationLicensePlateRestriction : NSObject Objective-C @interface GMSNavigationLicensePlateRestriction : NSObject GMSNavigationNavInfo Contains information about the state of navigation Declaration Swift class GMSNavigationNavInfo : NSObject Objective-C @interface GMSNavigationNavInfo : NSObject GMSNavigationRouteInfo An immutable class that encapsulates ETA and distance information for both the default best route, and the shortest route, to a specific waypoint.
- Declaration Swift class GMSNavigationMutableWaypoint : GMSNavigationWaypoint Objective-C @interface GMSNavigationMutableWaypoint : GMSNavigationWaypoint GMSNavigator This is the main class of the Google Navigation SDK for iOS and provides methods for controlling navigation to a destination and accessing route and progress information.
- Declaration Swift class GMSNavigationMutableRoutingOptions : GMSNavigationRoutingOptions Objective-C @interface GMSNavigationMutableRoutingOptions : GMSNavigationRoutingOptions GMSNavigationServices Services enabling control of mobile access to the Google Maps Navigation SDK for iOS.

