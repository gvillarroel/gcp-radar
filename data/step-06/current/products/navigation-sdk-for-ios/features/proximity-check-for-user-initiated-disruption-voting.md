---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.306Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Proximity check for user-initiated disruption voting"
feature_slug: "proximity-check-for-user-initiated-disruption-voting"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/camera"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/try-demo"
keywords:
  - "proximity"
  - "check"
  - "for"
  - "user"
  - "initiated"
  - "disruption"
  - "voting"
  - "the"
---

# Proximity check for user-initiated disruption voting

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The SDK checks whether a user-initiated vote on a real-time disruption was submitted near the incident.

## Extended Definition

The SDK checks whether a user-initiated vote on a real-time disruption was submitted near the incident.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/camera](https://developers.google.com/maps/documentation/navigation/ios-sdk/camera)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/try-demo](https://developers.google.com/maps/documentation/navigation/ios-sdk/try-demo)

## Supporting Pages

### Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can control the display and tappability of disruption callouts during active navigation using shouldDisplayPrompts , which also controls the display of callouts along routes and the display of automated alerts when a user approaches a disruption . mapView . navigator . shouldDisplayPrompts = true Automated disruption alerts with voting during active navigation During active navigation, when a user approaches a disruption along a route, a prompt appears with information about the disruption and buttons for voting on whether the disruption is still present.
- You can control the ability of users to tap disruption callouts on route overviews to display more information using showsIncidentCards . mapView . settings . showsIncidentCards = true Callout info cards during active navigation When a disruption callout appears along a route during active navigation, users can tap the callout to display an info card with more information about the disruption, including the disruption type and the time it was last reported, as well as buttons for voting on whether the disruption is still present.
- You can control the display of disruption callouts along routes using shouldDisplayPrompts , which also controls the display of automated alerts when a user approaches a disruption . mapView . navigator . shouldDisplayPrompts = true Display disruption details when a user taps a callout Users can tap a callout to display an info card with more information about the disruption, including the disruption type, the time it was last reported, and in some cases, an option for voting on whether the disruption is still present.
- Select platform: Android iOS Configure real-time disruptions Real-time disruptions are a collection of features that alert users about disruptions along their route and allow users to report and verify disruptions that they encounter.

### Adjust the camera \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/camera](https://developers.google.com/maps/documentation/navigation/ios-sdk/camera)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Swift class YourViewController : UIViewController { @IBOutlet weak var mapView : GMSMapView ! var autoFollowTimer : Timer ! override func viewDidLoad () { super . viewDidLoad () mapView . delegate = self ... } ... } / Implements the GMSMapViewDelegate protocol. / extension YourViewController : GMSMapViewDelegate { func mapView ( mapView : GMSMapView , willMove gesture : Bool ) { if mapView . navigator ?. isGuidanceActive == false { return } if ! gesture { return } autoFollowTimer ?. invalidate () autoFollowTimer = Timer ( timeInterval : TimeInterval ( 5.0 ), target : self , selector : #selector ( recenterMap ), userInfo : nil , repeats : false ) RunLoop . current . add ( autoFollowTimer , forMode : . default ) } / Centers the map in guidance mode. / @objc private func recenterMap () { if mapView . navigator ?. isGuidanceActive == true { mapView . cameraMode = . following } autoFollowTimer . invalidate () autoFollowTimer = nil } } Objective-C @interface YourViewController : UIViewController<GMSMapViewDelegate> ... @end @implementation YourViewController { GMSMapView mapView ; NSTimer autoFollowTimer ; ... } ... - ( void ) viewDidLoad { [ super viewDidLoad ]; ... mapView . delegate = self ; ... } ... / Implements the GMSMapViewDelegate protocol. / - ( void ) mapView : ( GMSMapView ) mapView willMove : ( BOOL ) gesture { if ( ! mapView . navigator . guidanceActive ) return ; if ( ! gesture ) return ; [ autoFollowTimer invalidate ]; autoFollowTimer = [ NSTimer scheduledTimerWithTimeInterval : 5.0 target : self selector : @selector ( recenterMap ) userInfo : nil repeats : NO ]; } / Centers the map in guidance mode. / - ( void ) recenterMap { if ( mapView . navigator . guidanceActive ) { mapView . cameraMode = GMSNavigationCameraModeFollowing ; } [ autoFollowTimer invalidate ]; autoFollowTimer = nil ; } @end Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To change the camera mode, set the cameraMode property of the map view, as shown here: Swift // Set the mode to "overview": mapView . cameraMode = . overview // Set the mode to "free": mapView . cameraMode = . free // Set the mode to "following": mapView . cameraMode = . following Objective-C // Set the mode to "overview": mapView . cameraMode = GMSNavigationCameraModeOverview ; // Set the mode to "free": mapView . cameraMode = GMSNavigationCameraModeFree ; // Set the mode to "following": mapView . cameraMode = GMSNavigationCameraModeFollowing ; Automatically recenter the map When users move the map in Navigation mode, the camera mode for the map view changes from following mode to free mode.
- Example The following code example checks to determine whether the map is being moved by the user while in Navigation mode.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- The following code example shows using the layout guides to position a pair of labels in the map view: Swift / Add a label to the top left, positioned below the header. / let topLabel = UILabel () topLabel . text = "Top Left" mapView . addSubview ( topLabel ) topLabel . translatesAutoresizingMaskIntoConstraints = false topLabel . topAnchor . constraint ( equalTo : mapView . navigationHeaderLayoutGuide . bottomAnchor ). isActive = true topLabel . leadingAnchor . constraint ( equalTo : mapView . leadingAnchor ). isActive = true / Add a label to the bottom right, positioned above the footer. / let bottomLabel = UILabel () bottomLabel . text = "Bottom Right" mapView . addSubview ( bottomLabel ) bottomLabel . translatesAutoresizingMaskIntoConstraints = false bottomLabel . bottomAnchor . constraint ( equalTo : mapView . navigationFooterLayoutGuide . topAnchor ). isActive = true bottomLabel . trailingAnchor . constraint ( equalTo : mapView . trailingAnchor ). isActive = true Objective-C / Add a label to the top left, positioned below the header. / UILabel topLabel = [[ UILabel alloc ] init ]; topLabel . text = @"Top Left" ; [ view addSubview : topLabel ]; topLabel . translatesAutoresizingMaskIntoConstraints = NO ; [ topLabel . topAnchor constraintEqualToAnchor : mapView . navigationHeaderLayoutGuide . bottomAnchor ]. active = YES ; [ topLabel . leadingAnchor constraintEqualToAnchor : mapView . leadingAnchor ]. active = YES ; / Add a label to the bottom right, positioned above the footer. / UILabel bottomLabel = [[ UILabel alloc ] init ]; bottomLabel . text = @"Bottom Right" ; [ view addSubview : bottomLabel ]; bottomLabel . translatesAutoresizingMaskIntoConstraints = NO ; [ bottomLabel . bottomAnchor constraintEqualToAnchor : mapView . navigationFooterLayoutGuide . topAnchor ]. active = YES ; [ bottomLabel . trailingAnchor constraintEqualToAnchor : mapView . trailingAnchor ]. active = YES ; For an example of how to use a bottomTrailingButtonsLayoutGuide , to position the real-time disruptions reporting button, see Configure real-time disruptions .
- Hide alternate routes When the user interface becomes cluttered with too much information, you can reduce clutter by displaying fewer alternate routes than the default (two), or by displaying no alternate routes at all.
- Using the Navigation SDK for iOS, you can modify the user experience with your map by determining which of the built-in UI controls and elements appear on the map, and which gestures you allow.
- Map experience features The Navigation SDK provides you the ability to make further customizations to the navigation experience for your users.

### Try the demo \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/try-demo](https://developers.google.com/maps/documentation/navigation/ios-sdk/try-demo)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Xcode 12 users might encounter compilation issues for the simulator which can be resolved using steps outlined in the Navigation SDK FAQ.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Navigation SDK requires a Google Cloud account and an API key enabled by sales.
- For troubleshooting, use an iOS device or simulator with iOS 15 or above, enable Rosetta destinations if necessary, and disable User Script Sandboxing if encountering build failures related to rsync.samba().
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Try the demo Stay organized with collections Save and categorize content based on your preferences.

