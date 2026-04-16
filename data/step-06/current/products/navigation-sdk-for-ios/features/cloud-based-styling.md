---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.316Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Cloud-based styling"
feature_slug: "cloud-based-styling"
latest_feature_date: "2023-11-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/overview"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/events"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-map-styles"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
keywords:
  - "based"
  - "styling"
  - "is"
  - "supported"
  - "for"
  - "navigation"
  - "sdk"
  - "versions"
---

# Cloud-based styling

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Cloud-based styling is supported for Navigation SDK versions 5.3.0 and higher.

## Extended Definition

Cloud-based styling is supported for Navigation SDK versions 5.3.0 and higher.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/overview)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/events](https://developers.google.com/maps/documentation/navigation/ios-sdk/events)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-map-styles](https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-map-styles)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)

## Supporting Pages

### Navigation SDK overview \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Navigation SDK overview Stay organized with collections Save and categorize content based on your preferences.
- How to use the Navigation SDK The steps below cover a typical use case scenario for using the Navigation SDK: 1 Get set up Create a Google Cloud project, add the Maps and Navigation SDKs to your API, and set up your Xcode project.
- The Navigation SDK requires the Maps SDK and allows for either the Google Navigation experience or building a custom navigation experience using its two main components: Map Layer and Navigation Experience.
- Leverage the Navigation SDK to support various modes of transportation, including driving, walking, cycling, and two-wheel vehicles, and customize UI elements for a personalized user experience.

### "Listen for navigation events \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/events](https://developers.google.com/maps/documentation/navigation/ios-sdk/events)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Listen for navigation events Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Navigation SDK for iOS allows you to respond to real-time navigation events like route changes, arrival, and location updates using listeners.
- Overview The Navigation SDK for iOS provides you with listeners associated with the location of the user and conditions along the route and important time and distance data.
- Notice: The GMSNavigatorDelegate and GMSRoadSnappedLocationProviderDelegate protocols were decommissioned in Navigation SDK for iOS version 2.0.

### Customize map styles \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-map-styles](https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-map-styles)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use cloud-based map styling to define reusable map styles for the Google navigation experience in the Navigation SDK.
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Customize map styles Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of how you can define and apply map styles, as well as specific implementation details for the Navigation SDK.
- Define map styles The first step in customizing map styles for the Navigation SDK is creating a map style and associating it with a map ID.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Reference Send feedback GoogleNavigation Framework Reference Stay organized with collections Save and categorize content based on your preferences.
- Declaration Swift func setHeaderAccessory ( headerAccessoryView : ( any UIView & GMSNavigationAccessoryView )?) Objective-C - ( void ) setHeaderAccessoryView : ( nullable UIView < GMSNavigationAccessoryView > ) headerAccessoryView ; CarPlay -didBeginPanGesture Preview feature This method should be called from the application’s implementation of the CPMapTemplateDelegate method -mapTemplateDidBeginPanGesture: in order to implement pan gestures for CarPlay map templates.
- Declaration Swift var isNavigationEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isNavigationEnabled ) BOOL navigationEnabled ; navigator The navigator for this GMSMapView which allows routes to be requested and turn-by-turn guidance to be started.
- Declaration Swift @IBOutlet weak var navigationUIDelegate : ( any GMSMapViewNavigationUIDelegate )? { get set } Objective-C @property ( nonatomic , weak , nullable ) id < GMSMapViewNavigationUIDelegate > navigationUIDelegate ; navigationEnabled Whether navigation functionality is enabled for this map.

