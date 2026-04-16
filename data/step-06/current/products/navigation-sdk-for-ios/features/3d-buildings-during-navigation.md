---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.306Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "3D buildings during navigation"
feature_slug: "3d-buildings-during-navigation"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference"
keywords:
  - "3d"
  - "buildings"
  - "during"
  - "navigation"
  - "the"
  - "map"
  - "can"
  - "display"
---

# 3D buildings during navigation

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The navigation map can display 3D buildings during turn-by-turn navigation.

## Extended Definition

The navigation map can display 3D buildings during turn-by-turn navigation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)

## Supporting Pages

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Traffic lights and stop signs You can enable the display of traffic lights and stop signs during active navigation in the mapView , which provides additional context for routes and trip maneuvers.
- 3D building display during navigation 3D buildings are displayed during navigation by default.
- Swift mapView . settings . isNavigationHeaderEnabled = true mapView . settings . isNavigationFooterEnabled = true mapView . settings . navigationHeaderPrimaryBackgroundColor = . blue mapView . settings . navigationHeaderSecondaryBackgroundColor = . red Objective-C mapView . settings . navigationHeaderEnabled = YES ; mapView . settings . navigationFooterEnabled = YES ; mapView . settings . navigationHeaderPrimaryBackgroundColor = [ UIColor blueColor ]; mapView . settings . navigationHeaderSecondaryBackgroundColor = [ UIColor redColor ]; Navigation accessory header view You can customize your app by replacing the secondary navigation header view with your own customized accessory view.
- Swift mapView . settings . scrollGestures = false mapView . settings . zoomGestures = false Objective-C mapView . settings . scrollGestures = NO ; mapView . settings . zoomGestures = NO ; Position controls and UI elements You can position controls and other UI elements relative to the position of the navigation header and footer, by using the following properties: navigationHeaderLayoutGuide navigationFooterLayoutGuide bottomTrailingButtonsLayoutGuide Note: To make sure that custom UI elements don't block any prompts that appear in the Navigation SDK, make sure that custom UI elements are implemented in a subview of the mapView , not in the root view.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If this is YES, routes and turn-by-turn directions can be displayed on the map, the camera can enter following mode, and the re-center button appears when the camera is not following the device location.
- Developers can customize map styles, zoom levels, 3D buildings, indoor maps, and control UI elements like padding and accessibility.
- Declaration Swift func setHeaderAccessory ( headerAccessoryView : ( any UIView & GMSNavigationAccessoryView )?) Objective-C - ( void ) setHeaderAccessoryView : ( nullable UIView < GMSNavigationAccessoryView > ) headerAccessoryView ; CarPlay -didBeginPanGesture Preview feature This method should be called from the application’s implementation of the CPMapTemplateDelegate method -mapTemplateDidBeginPanGesture: in order to implement pan gestures for CarPlay map templates.
- Declaration Swift var isNavigationEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isNavigationEnabled ) BOOL navigationEnabled ; navigator The navigator for this GMSMapView which allows routes to be requested and turn-by-turn guidance to be started.

### "The Google navigation experience \_|\_ Navigation SDK for iOS \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Modification Details Modified navigation guidance: show/hide headers, colors and fonts, directions, alternate routes, and trip progress Map UI controls Navigation header and footer Navigation header accessory view Display directions list Hide alternate routes Display trip progress Adjust traffic information and speed limit information Display the speedometer Adjust speedometer alerts Enable traffic lights and stop signs Change the map experience UI and adjust the camera.
- During active navigation, the Navigation SDK provides UI components, which are similar to those in the Google Maps apps.
- The Google navigation experience refers to using the Navigation SDK to embed a turn-by-turn navigation experience that uses Google-provided UI elements and visuals, which are similar to the navigation experience within the Google Maps apps.
- As an alternative, if you need more customization than is available with the Google navigation experience, you can request a turn-by-turn navigation feed from the Navigation SDK and then provide and manage your own UI elements.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With style options you can customize the presentation of the standard Google map styles, changing the visual display of features like roads, parks, and other points of interest.
- Declaration Swift class GMSIndoorDisplay : NSObject Objective-C @interface GMSIndoorDisplay : NSObject GMSIndoorLevel Declaration Swift class GMSIndoorLevel : NSObject Objective-C @interface GMSIndoorLevel : NSObject - ( instancetype ) init NS UNAVAILABLE ; / Localized display name for the level, e.g. "Ground floor". / @property ( nonatomic , copy , readonly , nullable ) NSString name ; / Localized short display name for the level, e.g. "1". / @property ( nonatomic , copy , readonly , nullable ) NSString shortName ; @end GMSMapID An opaque identifier for a custom map configuration.
- Declaration Swift class GMSNavigationStepInfo : NSObject Objective-C @interface GMSNavigationStepInfo : NSObject GMSNavigationStepInfoImageOptions Declaration Swift class GMSNavigationStepInfoImageOptions : NSObject Objective-C @interface GMSNavigationStepInfoImageOptions : NSObject / The object which provides screen metrics for the screen the image will be displayed on.
- Declaration Swift class GMSNavigationMutableRoutingOptions : GMSNavigationRoutingOptions Objective-C @interface GMSNavigationMutableRoutingOptions : GMSNavigationRoutingOptions GMSNavigationServices Services enabling control of mobile access to the Google Maps Navigation SDK for iOS.

