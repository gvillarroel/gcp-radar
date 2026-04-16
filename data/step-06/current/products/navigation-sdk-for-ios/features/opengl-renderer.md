---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.314Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "OpenGL renderer"
feature_slug: "opengl-renderer"
latest_feature_date: "2024-05-28"
deprecation_date: "2024-05-28"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSIndoorDisplay"
keywords:
  - "opengl"
  - "renderer"
  - "is"
  - "deprecated"
  - "and"
  - "will"
  - "be"
  - "unsupported"
---

# OpenGL renderer

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

OpenGL renderer support is deprecated and will be unsupported in the next major release; deprecated on 2024-05-28.

## Extended Definition

OpenGL renderer support is deprecated and will be unsupported in the next major release; deprecated on 2024-05-28.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSIndoorDisplay](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSIndoorDisplay)

## Supporting Pages

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift convenience init ( frame : CGRect , mapID : GMSMapID , camera : GMSCameraPosition ) Objective-C - ( nonnull instancetype ) initWithFrame :( CGRect ) frame mapID :( nonnull GMSMapID ) mapID camera :( nonnull GMSCameraPosition ) camera ; -startRendering Deprecated This method is obsolete and will be removed in a future release.
- Declaration Swift func startRendering () Objective-C - ( void ) startRendering ; -stopRendering Deprecated This method is obsolete and will be removed in a future release.
- Declaration Swift var followingPerspective : GMSNavigationCameraPerspective { get set } Objective-C @property ( nonatomic ) GMSNavigationCameraPerspective followingPerspective ; travelMode The travel mode which determines what type of routes will be fetched and the way that device course is determined.
- If an error occurs, the error parameter in the completion block will be non-nil and contain an error from the domain GMSMapViewPresentReportIncidentPanelErrorDomain . bottomTrailingButtonsLayoutGuide Experimental feature The layout guide that is used to position the bottom trailing buttons.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- If GMSStyleSpan is added to a map without Metal being enabled, the stamp will not render and instead the polyline span will attempt to fallback to any set color.
- Declaration Swift class GMSNavigationLicensePlateRestriction : NSObject Objective-C @interface GMSNavigationLicensePlateRestriction : NSObject GMSNavigationNavInfo Contains information about the state of navigation Declaration Swift class GMSNavigationNavInfo : NSObject Objective-C @interface GMSNavigationNavInfo : NSObject GMSNavigationRouteInfo An immutable class that encapsulates ETA and distance information for both the default best route, and the shortest route, to a specific waypoint.
- Declaration Swift class GMSNavigationStepInfo : NSObject Objective-C @interface GMSNavigationStepInfo : NSObject GMSNavigationStepInfoImageOptions Declaration Swift class GMSNavigationStepInfoImageOptions : NSObject Objective-C @interface GMSNavigationStepInfoImageOptions : NSObject / The object which provides screen metrics for the screen the image will be displayed on.
- This class should only be used if you are a Mobility Services customer and are billed by Google on a per-transaction basis.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- If GMSStyleSpan is added to a map without Metal being enabled, the stamp will not render and instead the polyline span will attempt to fallback to any set color.
- Declaration Swift class GMSNavigationLicensePlateRestriction : NSObject Objective-C @interface GMSNavigationLicensePlateRestriction : NSObject GMSNavigationNavInfo Contains information about the state of navigation Declaration Swift class GMSNavigationNavInfo : NSObject Objective-C @interface GMSNavigationNavInfo : NSObject GMSNavigationRouteInfo An immutable class that encapsulates ETA and distance information for both the default best route, and the shortest route, to a specific waypoint.
- Declaration Swift class GMSNavigationStepInfo : NSObject Objective-C @interface GMSNavigationStepInfo : NSObject GMSNavigationStepInfoImageOptions Declaration Swift class GMSNavigationStepInfoImageOptions : NSObject Objective-C @interface GMSNavigationStepInfoImageOptions : NSObject / The object which provides screen metrics for the screen the image will be displayed on.
- This class should only be used if you are a Mobility Services customer and are billed by Google on a per-transaction basis.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSIndoorDisplay](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSIndoorDisplay)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It allows observation and control via a delegate. activeBuilding property provides the currently focused building. activeLevel manages the visible level within the activeBuilding, updating with building changes. activeLevel can be set to a valid building's level or nil to hide the underground building, if no building is focused then it will be nil.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-18 UTC."],[],["GMSIndoorDisplay manages indoor level data display and must be used on the main thread.
- Like GMSMapView , GMSIndoorDisplay may only be used from the main thread. delegate GMSIndoorDisplay delegate Declaration Swift weak var delegate : ( any GMSIndoorDisplayDelegate )? { get set } Objective-C @property ( nonatomic , weak , nullable ) id < GMSIndoorDisplayDelegate > delegate ; activeBuilding Provides the currently focused building, will be nil if there is no building with indoor data currently under focus.
- May also be set to nil if the building is underground, to stop showing the building (the building will remain active).

