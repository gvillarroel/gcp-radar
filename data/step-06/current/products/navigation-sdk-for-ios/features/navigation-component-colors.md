---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.311Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Navigation component colors"
feature_slug: "navigation-component-colors"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/overview"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/create-customized-guidance"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-custom-nav"
keywords:
  - "navigation"
  - "component"
  - "colors"
  - "ui"
  - "were"
  - "updated"
  - "to"
  - "match"
---

# Navigation component colors

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Navigation UI colors were updated to match the current Google Maps app style.

## Extended Definition

Navigation UI colors were updated to match the current Google Maps app style.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/overview)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/create-customized-guidance](https://developers.google.com/maps/documentation/navigation/ios-sdk/create-customized-guidance)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-custom-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-custom-nav)

## Supporting Pages

### Navigation SDK overview \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Navigation SDK requires the Maps SDK and allows for either the Google Navigation experience or building a custom navigation experience using its two main components: Map Layer and Navigation Experience.
- Implement custom markers, overlays, and UI elements to highlight key navigation information and to personalize the navigation experience to match your brand.
- Personalize the navigation experience to match your brand's look and feel with customizable UI elements.
- Page Summary outlined flag The Navigation SDK enables seamless integration of Google Maps turn-by-turn navigation into your mobile applications, offering UI customization and advanced route configuration.

### "Create customized guidance \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/create-customized-guidance](https://developers.google.com/maps/documentation/navigation/ios-sdk/create-customized-guidance)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The code then adds an overview map configured to show the current road-snapped location. // Create the navigation session. navigationSession = [ GMSNavigationServices createNavigationSession ]; GMSRoadSnappedLocationProvider roadSnappedLocationProvider = navigationSession . roadSnappedLocationProvider ; [ roadSnappedLocationProvider startUpdatingLocation ]; GMSNavigator navigator = navigationSession . navigator ; [ navigator addListener : self ]; navigator . voiceGuidance = GMSNavigationVoiceGuidanceSilent ; navigator . sendsBackgroundNotifications = NO ; navigationSession . started = YES ; ​​ [ navigator setDestinations : @[ destination ] callback : ^ ( GMSRouteStatus routeStatus ) { // …handle changes in route status. }]; // Add an overview map. mapView = [[ GMSMapView alloc ] initWithFrame : CGRectZero ]; [ self . mainStackView addArrangedSubview : mapView ]; [ self . mainStackView setNeedsLayout ]; mapView . settings . compassButton = YES ; mapView . delegate = self ; mapView . myLocationEnabled = YES ; mapView . roadSnappedMyLocationSource = roadSnappedLocationProvider ; Passing navigation from a custom experience to the Google experience This code snippet illustrates how your app can allow the user to enter the Google navigation experience from a custom navigation experience.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The core process involves creating a navigation session independently using GMSNavigationService.createNavigationSession, distinct from route navigation.
- UIButton button = [ UIButton buttonWithType : UIButtonTypePlain ]; [ button addTarget : self action : @selector ( didTapEnterGoogleNavigationButton : ) forControlState :[ directionsButton addTarget : self ]; … [ mapView enableNavigationWithSession : navigationSession ]; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Where the Google navigation experience invokes the navigator through the navigation map view, the GMSNavigationServices controls and receives a stream of events from a navigation session independently from a UI instance.

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Swift class MyCustomView : UIView , GMSNavigationAccessoryView { … func heightForAccessoryViewConstrained ( to size : CGSize , on mapView : GMSMapView ) - > CGFloat { // viewHeight gets calculated as the height your view needs. return viewHeight } … } let customView = MyCustomView (...) mapView . setHeaderAccessory ( customView ) // At some later point customView changes size. mapView . invalidateLayout ( forAccessoryView : customView ) // Remove the custom header accessory view. mapView . setHeaderAccessory ( nil ) Objective-C @interface MyCustomView : UIView < GMSNavigationAccessoryView > … @end @implementation MyCustomView … - ( CGFloat ) heightForAccessoryViewConstrainedToSize : ( CGSize ) size onMapView : ( GMSMapView ) mapView { // viewHeight gets calculated as the height your view needs. return viewHeight ; } … @end MyCustomView customView = [[ MyCustomView alloc ] init … ]; [ mapView setHeaderAccessoryView : customView ]; // At some later point customView changes size. [ mapView invalidateLayoutForAccessoryView : customView ]; // Remove the custom header accessory view. [ mapView setHeaderAccessoryView : nil ]; Normal and low-light modes The GMSNavigatorListener.didChangeSuggestedLightingMode listener method is triggered when estimated lighting conditions are updated.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The content details UI controls and accessories for map navigation.
- The following code example shows using the layout guides to position a pair of labels in the map view: Swift / Add a label to the top left, positioned below the header. / let topLabel = UILabel () topLabel . text = "Top Left" mapView . addSubview ( topLabel ) topLabel . translatesAutoresizingMaskIntoConstraints = false topLabel . topAnchor . constraint ( equalTo : mapView . navigationHeaderLayoutGuide . bottomAnchor ). isActive = true topLabel . leadingAnchor . constraint ( equalTo : mapView . leadingAnchor ). isActive = true / Add a label to the bottom right, positioned above the footer. / let bottomLabel = UILabel () bottomLabel . text = "Bottom Right" mapView . addSubview ( bottomLabel ) bottomLabel . translatesAutoresizingMaskIntoConstraints = false bottomLabel . bottomAnchor . constraint ( equalTo : mapView . navigationFooterLayoutGuide . topAnchor ). isActive = true bottomLabel . trailingAnchor . constraint ( equalTo : mapView . trailingAnchor ). isActive = true Objective-C / Add a label to the top left, positioned below the header. / UILabel topLabel = [[ UILabel alloc ] init ]; topLabel . text = @"Top Left" ; [ view addSubview : topLabel ]; topLabel . translatesAutoresizingMaskIntoConstraints = NO ; [ topLabel . topAnchor constraintEqualToAnchor : mapView . navigationHeaderLayoutGuide . bottomAnchor ]. active = YES ; [ topLabel . leadingAnchor constraintEqualToAnchor : mapView . leadingAnchor ]. active = YES ; / Add a label to the bottom right, positioned above the footer. / UILabel bottomLabel = [[ UILabel alloc ] init ]; bottomLabel . text = @"Bottom Right" ; [ view addSubview : bottomLabel ]; bottomLabel . translatesAutoresizingMaskIntoConstraints = NO ; [ bottomLabel . bottomAnchor constraintEqualToAnchor : mapView . navigationFooterLayoutGuide . topAnchor ]. active = YES ; [ bottomLabel . trailingAnchor constraintEqualToAnchor : mapView . trailingAnchor ]. active = YES ; For an example of how to use a bottomTrailingButtonsLayoutGuide , to position the real-time disruptions reporting button, see Configure real-time disruptions .
- Swift mapView . settings . isNavigationHeaderEnabled = true mapView . settings . isNavigationFooterEnabled = true mapView . settings . navigationHeaderPrimaryBackgroundColor = . blue mapView . settings . navigationHeaderSecondaryBackgroundColor = . red Objective-C mapView . settings . navigationHeaderEnabled = YES ; mapView . settings . navigationFooterEnabled = YES ; mapView . settings . navigationHeaderPrimaryBackgroundColor = [ UIColor blueColor ]; mapView . settings . navigationHeaderSecondaryBackgroundColor = [ UIColor redColor ]; Navigation accessory header view You can customize your app by replacing the secondary navigation header view with your own customized accessory view.

### "Custom navigation experience \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-custom-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-custom-nav)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the demo: The download of the Navigation SDK contains a demo you can run to see an example of a navigation experience that switches between turn-by-turn guidance through standard navigation to a navigation experience that shows only the device location moving along a road polyline.
- The primary way to implement the Navigation SDK is to use the Google navigation experience , which lets you embed a turn-by-turn navigation experience that uses Google-provided UI elements and visuals — similar to the navigation experience within the Google Maps apps.
- However, with a customized navigation experience, you achieve this by first establishing a navigation session using GMSNavigationService.createNavigationSession , which is a state-bearing non-UI object that can operate either with a view controller, or without one.
- A custom navigation experience refers to anything from eliminating turn guidance entirely with and running navigation only as a background process, to projecting a highly customized guidance experience to a screen separate from the device that runs the navigation.

