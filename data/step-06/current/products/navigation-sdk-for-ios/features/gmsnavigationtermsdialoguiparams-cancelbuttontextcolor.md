---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.314Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "GMSNavigationTermsDialogUIParams.cancelButtonTextColor"
feature_slug: "gmsnavigationtermsdialoguiparams-cancelbuttontextcolor"
latest_feature_date: "2024-05-28"
deprecation_date: "2024-05-28"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
keywords:
  - "gmsnavigationtermsdialoguiparams"
  - "cancelbuttontextcolor"
  - "the"
  - "cancel"
  - "button"
  - "text"
  - "color"
  - "property"
---

# GMSNavigationTermsDialogUIParams.cancelButtonTextColor

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The cancel button text color property in GMSNavigationTermsDialogUIParams controls the text color for the dialog's cancel button; deprecated on 2024-05-28.

## Extended Definition

The cancel button text color property in GMSNavigationTermsDialogUIParams controls the text color for the dialog's cancel button; deprecated on 2024-05-28.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)

## Supporting Pages

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- The following code example shows using the layout guides to position a pair of labels in the map view: Swift / Add a label to the top left, positioned below the header. / let topLabel = UILabel () topLabel . text = "Top Left" mapView . addSubview ( topLabel ) topLabel . translatesAutoresizingMaskIntoConstraints = false topLabel . topAnchor . constraint ( equalTo : mapView . navigationHeaderLayoutGuide . bottomAnchor ). isActive = true topLabel . leadingAnchor . constraint ( equalTo : mapView . leadingAnchor ). isActive = true / Add a label to the bottom right, positioned above the footer. / let bottomLabel = UILabel () bottomLabel . text = "Bottom Right" mapView . addSubview ( bottomLabel ) bottomLabel . translatesAutoresizingMaskIntoConstraints = false bottomLabel . bottomAnchor . constraint ( equalTo : mapView . navigationFooterLayoutGuide . topAnchor ). isActive = true bottomLabel . trailingAnchor . constraint ( equalTo : mapView . trailingAnchor ). isActive = true Objective-C / Add a label to the top left, positioned below the header. / UILabel topLabel = [[ UILabel alloc ] init ]; topLabel . text = @"Top Left" ; [ view addSubview : topLabel ]; topLabel . translatesAutoresizingMaskIntoConstraints = NO ; [ topLabel . topAnchor constraintEqualToAnchor : mapView . navigationHeaderLayoutGuide . bottomAnchor ]. active = YES ; [ topLabel . leadingAnchor constraintEqualToAnchor : mapView . leadingAnchor ]. active = YES ; / Add a label to the bottom right, positioned above the footer. / UILabel bottomLabel = [[ UILabel alloc ] init ]; bottomLabel . text = @"Bottom Right" ; [ view addSubview : bottomLabel ]; bottomLabel . translatesAutoresizingMaskIntoConstraints = NO ; [ bottomLabel . bottomAnchor constraintEqualToAnchor : mapView . navigationFooterLayoutGuide . topAnchor ]. active = YES ; [ bottomLabel . trailingAnchor constraintEqualToAnchor : mapView . trailingAnchor ]. active = YES ; For an example of how to use a bottomTrailingButtonsLayoutGuide , to position the real-time disruptions reporting button, see Configure real-time disruptions .
- For example, you can specify that the current speed displays with a red text color when the driver exceeds the speed limit by 5 mph, and with a red background color when the driver exceeds the speed limit by 10 mph.
- To allow the recenter button to appear, set the recenterButtonEnabled property of GMSUISettings to true .
- You can enable the button by setting the myLocationButton property of GMSUISettings to true .

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift class GMSIndoorDisplay : NSObject Objective-C @interface GMSIndoorDisplay : NSObject GMSIndoorLevel Declaration Swift class GMSIndoorLevel : NSObject Objective-C @interface GMSIndoorLevel : NSObject - ( instancetype ) init NS UNAVAILABLE ; / Localized display name for the level, e.g. "Ground floor". / @property ( nonatomic , copy , readonly , nullable ) NSString name ; / Localized short display name for the level, e.g. "1". / @property ( nonatomic , copy , readonly , nullable ) NSString shortName ; @end GMSMapID An opaque identifier for a custom map configuration.
- Declaration Swift class GMSNavigationTermsAndConditionsOptions : NSObject , NSCopying Objective-C @interface GMSNavigationTermsAndConditionsOptions : NSObject < NSCopying > GMSNavigationTermsDialogUIParams Parameters that describe the look and feel of the dialog.
- Declaration Swift class GMSNavigationTermsDialogUIParams : NSObject Objective-C @interface GMSNavigationTermsDialogUIParams : NSObject GMSNavigationTimeAndDistance An immutable class that encapsulates the distance remaining and the ETA for a route.
- This property defaults to UIScreen.mainScreen. / @property ( nonatomic , nullable ) id < GMSNavigationScreenMetrics > screenMetrics ; / The image size for maneuverImage in GMSNavigationStepInfo.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift class GMSIndoorDisplay : NSObject Objective-C @interface GMSIndoorDisplay : NSObject GMSIndoorLevel Declaration Swift class GMSIndoorLevel : NSObject Objective-C @interface GMSIndoorLevel : NSObject - ( instancetype ) init NS UNAVAILABLE ; / Localized display name for the level, e.g. "Ground floor". / @property ( nonatomic , copy , readonly , nullable ) NSString name ; / Localized short display name for the level, e.g. "1". / @property ( nonatomic , copy , readonly , nullable ) NSString shortName ; @end GMSMapID An opaque identifier for a custom map configuration.
- Declaration Swift class GMSNavigationTermsAndConditionsOptions : NSObject , NSCopying Objective-C @interface GMSNavigationTermsAndConditionsOptions : NSObject < NSCopying > GMSNavigationTermsDialogUIParams Parameters that describe the look and feel of the dialog.
- Declaration Swift class GMSNavigationTermsDialogUIParams : NSObject Objective-C @interface GMSNavigationTermsDialogUIParams : NSObject GMSNavigationTimeAndDistance An immutable class that encapsulates the distance remaining and the ETA for a route.
- This property defaults to UIScreen.mainScreen. / @property ( nonatomic , nullable ) id < GMSNavigationScreenMetrics > screenMetrics ; / The image size for maneuverImage in GMSNavigationStepInfo.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift var bottomTrailingButtonsLayoutGuide : UILayoutGuide ! { get set } Objective-C @property ( nonatomic , null resettable ) UILayoutGuide bottomTrailingButtonsLayoutGuide ; bottomTrailingButtonsAlternateLayoutGuide Experimental feature The layout guide that is used to position the bottom trailing buttons when the navigation footer and header do not span the full width of the screen.
- Declaration Swift var travelMode : GMSNavigationTravelMode { get set } Objective-C @property ( nonatomic ) GMSNavigationTravelMode travelMode ; lightingMode The lighting mode determines which color scheme should be used for rendering the map.
- The speedometer icon can have different colors for text and background, depending on the speed alert severity.
- Declaration Swift var mapStyle : GMSMapStyle ? { get set } Objective-C @property ( nonatomic , nullable ) GMSMapStyle mapStyle ; overrideUserInterfaceStyle Declaration Swift var overrideUserInterfaceStyle : UIUserInterfaceStyle { get set } Objective-C @property ( nonatomic ) UIUserInterfaceStyle overrideUserInterfaceStyle minZoom Minimum zoom (the farthest the camera may be zoomed out).

