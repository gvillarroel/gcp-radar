---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.307Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Real-time disruption callout visibility control"
feature_slug: "real-time-disruption-callout-visibility-control"
latest_feature_date: "2025-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/camera"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
keywords:
  - "real"
  - "time"
  - "disruption"
  - "callout"
  - "visibility"
  - "control"
  - "the"
  - "shoulddisplayprompts"
---

# Real-time disruption callout visibility control

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The shouldDisplayPrompts method controls whether real-time disruption callouts are shown.

## Extended Definition

The shouldDisplayPrompts method controls whether real-time disruption callouts are shown.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/camera](https://developers.google.com/maps/documentation/navigation/ios-sdk/camera)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)

## Supporting Pages

### Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can control the display of disruption callouts along routes using shouldDisplayPrompts , which also controls the display of automated alerts when a user approaches a disruption . mapView . navigator . shouldDisplayPrompts = true Display disruption details when a user taps a callout Users can tap a callout to display an info card with more information about the disruption, including the disruption type, the time it was last reported, and in some cases, an option for voting on whether the disruption is still present.
- You can control the display and tappability of disruption callouts during active navigation using shouldDisplayPrompts , which also controls the display of callouts along routes and the display of automated alerts when a user approaches a disruption . mapView . navigator . shouldDisplayPrompts = true Automated disruption alerts with voting during active navigation During active navigation, when a user approaches a disruption along a route, a prompt appears with information about the disruption and buttons for voting on whether the disruption is still present.
- You can control the ability of users to tap disruption callouts on route overviews to display more information using showsIncidentCards . mapView . settings . showsIncidentCards = true Callout info cards during active navigation When a disruption callout appears along a route during active navigation, users can tap the callout to display an info card with more information about the disruption, including the disruption type and the time it was last reported, as well as buttons for voting on whether the disruption is still present.
- You can configure the display of alert prompts during active navigation using shouldDisplayPrompts , which also controls the display of callouts along routes . mapView . navigator . shouldDisplayPrompts = true Note: When a user approaches a disruption along a route during active navigation, the disruption is announced with an audio alert.

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- For more information, including code samples, see the Prompt Visibility API section of the Configure real-time-disruptions page.
- The following code example shows using the layout guides to position a pair of labels in the map view: Swift / Add a label to the top left, positioned below the header. / let topLabel = UILabel () topLabel . text = "Top Left" mapView . addSubview ( topLabel ) topLabel . translatesAutoresizingMaskIntoConstraints = false topLabel . topAnchor . constraint ( equalTo : mapView . navigationHeaderLayoutGuide . bottomAnchor ). isActive = true topLabel . leadingAnchor . constraint ( equalTo : mapView . leadingAnchor ). isActive = true / Add a label to the bottom right, positioned above the footer. / let bottomLabel = UILabel () bottomLabel . text = "Bottom Right" mapView . addSubview ( bottomLabel ) bottomLabel . translatesAutoresizingMaskIntoConstraints = false bottomLabel . bottomAnchor . constraint ( equalTo : mapView . navigationFooterLayoutGuide . topAnchor ). isActive = true bottomLabel . trailingAnchor . constraint ( equalTo : mapView . trailingAnchor ). isActive = true Objective-C / Add a label to the top left, positioned below the header. / UILabel topLabel = [[ UILabel alloc ] init ]; topLabel . text = @"Top Left" ; [ view addSubview : topLabel ]; topLabel . translatesAutoresizingMaskIntoConstraints = NO ; [ topLabel . topAnchor constraintEqualToAnchor : mapView . navigationHeaderLayoutGuide . bottomAnchor ]. active = YES ; [ topLabel . leadingAnchor constraintEqualToAnchor : mapView . leadingAnchor ]. active = YES ; / Add a label to the bottom right, positioned above the footer. / UILabel bottomLabel = [[ UILabel alloc ] init ]; bottomLabel . text = @"Bottom Right" ; [ view addSubview : bottomLabel ]; bottomLabel . translatesAutoresizingMaskIntoConstraints = NO ; [ bottomLabel . bottomAnchor constraintEqualToAnchor : mapView . navigationFooterLayoutGuide . topAnchor ]. active = YES ; [ bottomLabel . trailingAnchor constraintEqualToAnchor : mapView . trailingAnchor ]. active = YES ; For an example of how to use a bottomTrailingButtonsLayoutGuide , to position the real-time disruptions reporting button, see Configure real-time disruptions .
- You can toggle the visibility of the navigation header and footer and set its colors programmatically using the following properties: navigationHeaderEnabled — controls whether the navigation header is visible (default is true ). navigationFooterEnabled — controls whether the navigation footer is visible (default is true ). navigationHeaderPrimaryBackgroundColor — sets the primary background color for the navigation header. navigationHeaderSecondaryBackgroundColor — sets the secondary background color for the navigation header.
- You can adjust the visibility or visual appearance of these controls as described in this section.

### Adjust the camera \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/camera](https://developers.google.com/maps/documentation/navigation/ios-sdk/camera)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Swift class YourViewController : UIViewController { @IBOutlet weak var mapView : GMSMapView ! var autoFollowTimer : Timer ! override func viewDidLoad () { super . viewDidLoad () mapView . delegate = self ... } ... } / Implements the GMSMapViewDelegate protocol. / extension YourViewController : GMSMapViewDelegate { func mapView ( mapView : GMSMapView , willMove gesture : Bool ) { if mapView . navigator ?. isGuidanceActive == false { return } if ! gesture { return } autoFollowTimer ?. invalidate () autoFollowTimer = Timer ( timeInterval : TimeInterval ( 5.0 ), target : self , selector : #selector ( recenterMap ), userInfo : nil , repeats : false ) RunLoop . current . add ( autoFollowTimer , forMode : . default ) } / Centers the map in guidance mode. / @objc private func recenterMap () { if mapView . navigator ?. isGuidanceActive == true { mapView . cameraMode = . following } autoFollowTimer . invalidate () autoFollowTimer = nil } } Objective-C @interface YourViewController : UIViewController<GMSMapViewDelegate> ... @end @implementation YourViewController { GMSMapView mapView ; NSTimer autoFollowTimer ; ... } ... - ( void ) viewDidLoad { [ super viewDidLoad ]; ... mapView . delegate = self ; ... } ... / Implements the GMSMapViewDelegate protocol. / - ( void ) mapView : ( GMSMapView ) mapView willMove : ( BOOL ) gesture { if ( ! mapView . navigator . guidanceActive ) return ; if ( ! gesture ) return ; [ autoFollowTimer invalidate ]; autoFollowTimer = [ NSTimer scheduledTimerWithTimeInterval : 5.0 target : self selector : @selector ( recenterMap ) userInfo : nil repeats : NO ]; } / Centers the map in guidance mode. / - ( void ) recenterMap { if ( mapView . navigator . guidanceActive ) { mapView . cameraMode = GMSNavigationCameraModeFollowing ; } [ autoFollowTimer invalidate ]; autoFollowTimer = nil ; } @end Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can automate the return to following mode by using a timer to set an interval between leaving following mode, and then automatically returning to it.
- You can automate the return to following mode after a set time interval using a timer to improve user experience.
- If it is, then it sets a timer to switch the camera mode to following mode, centering the map after five seconds.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift func presentReportIncidentsPanel ( presentingViewController : UIViewController ?) async throws Objective-C - ( void ) presentReportIncidentsPanel : ( nullable UIViewController ) presentingViewController completion : ( nullable void ( ^ )( NSError Nullable )) completion ; Parameters presentingViewController The view controller to present the report incident panel from.
- Declaration Swift var cameraTargetBounds : GMSCoordinateBounds ? { get set } Objective-C @property ( nonatomic , nullable ) GMSCoordinateBounds cameraTargetBounds ; mapCapabilities All conditionally-available (dependent on mapID or other map settings) capabilities that are available at the current moment in time.
- Declaration Swift var bottomTrailingButtonsAlternateLayoutGuide : UILayoutGuide ! { get set } Objective-C @property ( nonatomic , null resettable ) UILayoutGuide bottomTrailingButtonsAlternateLayoutGuide ; routeCalloutFormat Specifies which route callout format (default, time, or distance) to use.
- Declaration Swift var isIndoorEnabled : Bool { get set } Objective-C @property ( nonatomic , assign , unsafe unretained , readwrite , getter = isIndoorEnabled ) BOOL indoorEnabled ; indoorDisplay Gets the GMSIndoorDisplay instance which allows to observe or control aspects of indoor data display.

