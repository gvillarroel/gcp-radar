---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.314Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "setMetalRendererEnabled"
feature_slug: "setmetalrendererenabled"
latest_feature_date: "2024-05-28"
deprecation_date: "2024-05-28"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/camera"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes"
keywords:
  - "setmetalrendererenabled"
  - "the"
  - "flag"
  - "is"
  - "deprecated"
  - "and"
  - "will"
  - "be"
---

# setMetalRendererEnabled

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The setMetalRendererEnabled flag is deprecated and will be unsupported in the next major release; deprecated on 2024-05-28.

## Extended Definition

The setMetalRendererEnabled flag is deprecated and will be unsupported in the next major release; deprecated on 2024-05-28.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/camera](https://developers.google.com/maps/documentation/navigation/ios-sdk/camera)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes)

## Supporting Pages

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift convenience init ( frame : CGRect , mapID : GMSMapID , camera : GMSCameraPosition ) Objective-C - ( nonnull instancetype ) initWithFrame :( CGRect ) frame mapID :( nonnull GMSMapID ) mapID camera :( nonnull GMSCameraPosition ) camera ; -startRendering Deprecated This method is obsolete and will be removed in a future release.
- Declaration Swift var followingPerspective : GMSNavigationCameraPerspective { get set } Objective-C @property ( nonatomic ) GMSNavigationCameraPerspective followingPerspective ; travelMode The travel mode which determines what type of routes will be fetched and the way that device course is determined.
- If an error occurs, the error parameter in the completion block will be non-nil and contain an error from the domain GMSMapViewPresentReportIncidentPanelErrorDomain . bottomTrailingButtonsLayoutGuide Experimental feature The layout guide that is used to position the bottom trailing buttons.
- If a layer of the specified type does not exist on this map, or if data-driven styling is not enabled, or if the Metal rendering framework is not used, the resulting layer’s isAvailable will be NO , and will not respond to any calls.

### Adjust the camera \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/camera](https://developers.google.com/maps/documentation/navigation/ios-sdk/camera)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Swift class YourViewController : UIViewController { @IBOutlet weak var mapView : GMSMapView ! var autoFollowTimer : Timer ! override func viewDidLoad () { super . viewDidLoad () mapView . delegate = self ... } ... } / Implements the GMSMapViewDelegate protocol. / extension YourViewController : GMSMapViewDelegate { func mapView ( mapView : GMSMapView , willMove gesture : Bool ) { if mapView . navigator ?. isGuidanceActive == false { return } if ! gesture { return } autoFollowTimer ?. invalidate () autoFollowTimer = Timer ( timeInterval : TimeInterval ( 5.0 ), target : self , selector : #selector ( recenterMap ), userInfo : nil , repeats : false ) RunLoop . current . add ( autoFollowTimer , forMode : . default ) } / Centers the map in guidance mode. / @objc private func recenterMap () { if mapView . navigator ?. isGuidanceActive == true { mapView . cameraMode = . following } autoFollowTimer . invalidate () autoFollowTimer = nil } } Objective-C @interface YourViewController : UIViewController<GMSMapViewDelegate> ... @end @implementation YourViewController { GMSMapView mapView ; NSTimer autoFollowTimer ; ... } ... - ( void ) viewDidLoad { [ super viewDidLoad ]; ... mapView . delegate = self ; ... } ... / Implements the GMSMapViewDelegate protocol. / - ( void ) mapView : ( GMSMapView ) mapView willMove : ( BOOL ) gesture { if ( ! mapView . navigator . guidanceActive ) return ; if ( ! gesture ) return ; [ autoFollowTimer invalidate ]; autoFollowTimer = [ NSTimer scheduledTimerWithTimeInterval : 5.0 target : self selector : @selector ( recenterMap ) userInfo : nil repeats : NO ]; } / Centers the map in guidance mode. / - ( void ) recenterMap { if ( mapView . navigator . guidanceActive ) { mapView . cameraMode = GMSNavigationCameraModeFollowing ; } [ autoFollowTimer invalidate ]; autoFollowTimer = nil ; } @end Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Following mode puts the camera behind the current position, overview mode displays the entire route, and free mode allows user interaction.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
- The map automatically enters free mode when the user pans or zooms, and a Re-center button is available in overview and free modes to return to following mode.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- If GMSStyleSpan is added to a map without Metal being enabled, the stamp will not render and instead the polyline span will attempt to fallback to any set color.
- Declaration Swift class GMSNavigationLicensePlateRestriction : NSObject Objective-C @interface GMSNavigationLicensePlateRestriction : NSObject GMSNavigationNavInfo Contains information about the state of navigation Declaration Swift class GMSNavigationNavInfo : NSObject Objective-C @interface GMSNavigationNavInfo : NSObject GMSNavigationRouteInfo An immutable class that encapsulates ETA and distance information for both the default best route, and the shortest route, to a specific waypoint.
- Declaration Swift class GMSNavigationStepInfo : NSObject Objective-C @interface GMSNavigationStepInfo : NSObject GMSNavigationStepInfoImageOptions Declaration Swift class GMSNavigationStepInfoImageOptions : NSObject Objective-C @interface GMSNavigationStepInfoImageOptions : NSObject / The object which provides screen metrics for the screen the image will be displayed on.
- Page Summary outlined flag The Google Maps SDK for iOS provides classes for map display, interaction, and customization within iOS apps.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- If GMSStyleSpan is added to a map without Metal being enabled, the stamp will not render and instead the polyline span will attempt to fallback to any set color.
- Declaration Swift class GMSNavigationLicensePlateRestriction : NSObject Objective-C @interface GMSNavigationLicensePlateRestriction : NSObject GMSNavigationNavInfo Contains information about the state of navigation Declaration Swift class GMSNavigationNavInfo : NSObject Objective-C @interface GMSNavigationNavInfo : NSObject GMSNavigationRouteInfo An immutable class that encapsulates ETA and distance information for both the default best route, and the shortest route, to a specific waypoint.
- Declaration Swift class GMSNavigationStepInfo : NSObject Objective-C @interface GMSNavigationStepInfo : NSObject GMSNavigationStepInfoImageOptions Declaration Swift class GMSNavigationStepInfoImageOptions : NSObject Objective-C @interface GMSNavigationStepInfoImageOptions : NSObject / The object which provides screen metrics for the screen the image will be displayed on.
- Page Summary outlined flag The Google Maps SDK for iOS provides classes for map display, interaction, and customization within iOS apps.

