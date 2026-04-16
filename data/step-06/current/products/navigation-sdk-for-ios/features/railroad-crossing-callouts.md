---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.305Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Railroad crossing callouts"
feature_slug: "railroad-crossing-callouts"
latest_feature_date: "2025-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/route"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions"
keywords:
  - "railroad"
  - "crossing"
  - "callouts"
  - "the"
  - "navigation"
  - "route"
  - "can"
  - "display"
---

# Railroad crossing callouts

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The navigation route can display railroad crossing callouts.

## Extended Definition

The navigation route can display railroad crossing callouts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/route](https://developers.google.com/maps/documentation/navigation/ios-sdk/route)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)

## Supporting Pages

### "The Google navigation experience \_|\_ Navigation SDK for iOS \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Modification Details Modified navigation guidance: show/hide headers, colors and fonts, directions, alternate routes, and trip progress Map UI controls Navigation header and footer Navigation header accessory view Display directions list Hide alternate routes Display trip progress Adjust traffic information and speed limit information Display the speedometer Adjust speedometer alerts Enable traffic lights and stop signs Change the map experience UI and adjust the camera.
- As an alternative, if you need more customization than is available with the Google navigation experience, you can request a turn-by-turn navigation feed from the Navigation SDK and then provide and manage your own UI elements.
- For advanced customization beyond the provided options, developers can opt for a custom navigation experience by requesting a turn-by-turn navigation feed and building their own UI.
- When you embed the Google navigation experience in your app, you don't need to build the navigation experience from scratch, but you can still modify parts of the experience.

### Navigate a route \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/route](https://developers.google.com/maps/documentation/navigation/ios-sdk/route)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UNUserNotificationCenter center = [ UNUserNotificationCenter currentNotificationCenter ]; UNAuthorizationOptions options = UNAuthorizationOptionAlert ; [ center requestAuthorizationWithOptions : options completionHandler : ^ ( BOOL granted , NSError Nullable error ) { if ( ! error && granted ) { NSLog ( @"iOS Notification Permission: newly Granted" ); } else { NSLog ( @"iOS Notification Permission: Failed or Denied" ); } }]; } else { // Handle rejection of the terms and conditions. } }]; self . view = mapView ; [ self makeButton ]; } // Create a route and initiate navigation. - ( void ) startNav { NSArray<GMSNavigationWaypoint > destinations = @[ [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJnUYTpNASkFQR gSty5kyoUk" title : @"PCC Natural Market" ], [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJJ326ROcSkFQRBfUzOL2DSbo" title : @"Marina Park" ] ] ; [ mapView . navigator setDestinations : destinations callback : ^ ( GMSRouteStatus routeStatus ){ [ mapView . locationSimulator simulateLocationsAlongExistingRoute ]; mapView . navigator . guidanceActive = YES ; mapView . navigator . sendsBackgroundNotifications = YES ; mapView . cameraMode = GMSNavigationCameraModeFollowing ; }]; } // Add a button to the view. - ( void ) makeButton { // A button to start navigation.
- UNUserNotificationCenter . current () . requestAuthorization ( options : [ . alert ]) { granted , error in // Handle denied authorization to display notifications . if ! granted error != nil { print ( "User rejected request to display notifications." ) } } } else { // Handle rejection of terms and conditions . } } view = mapView makeButton () } // Create a route and start guidance . func startNav () { var destinations = GMSNavigationWaypoint destinations . append ( GMSNavigationWaypoint . init ( placeID : "ChIJnUYTpNASkFQR gSty5kyoUk" , title : "PCC Natural Market" ) ! ) destinations . append ( GMSNavigationWaypoint . init ( placeID : "ChIJJ326ROcSkFQRBfUzOL2DSbo" , title : "Marina Park" ) ! ) mapView . navigator ? . setDestinations ( destinations ) { routeStatus in guard routeStatus == .
- OK else { print ( "Handle route statuses that are not OK." ) return } self . mapView . navigator ? . isGuidanceActive = true self . mapView . locationSimulator ? . simulateLocationsAlongExistingRoute () self . mapView . cameraMode = . following } } // Add a button to the view . func makeButton () { // A button to start navigation . let navButton = UIButton ( frame : CGRect ( x : 5 , y : 150 , width : 200 , height : 35 )) navButton . backgroundColor = . blue navButton . alpha = 0.5 navButton . setTitle ( "Start navigation" , for : . normal ) navButton . addTarget ( self , action : #selector(startNav), for: .touchUpInside) self . mapView . addSubview ( navButton ) } } Show/Hide the Objective-C code for the navigation view controller. / Copyright 2017 Google Inc.
- UNUserNotificationCenter center = [ UNUserNotificationCenter currentNotificationCenter ]; UNAuthorizationOptions options = UNAuthorizationOptionAlert ; [ center requestAuthorizationWithOptions : options completionHandler : ^ ( BOOL granted , NSError Nullable error ) { if ( ! error && granted ) { NSLog ( @"iOS Notification Permission: newly Granted" ); } else { NSLog ( @"iOS Notification Permission: Failed or Denied" ); } }]; } else { // Handle rejection of the terms and conditions. } }]; Create a route and start guidance To plot a route, call the Navigator’s setDestinations() method with an array one or more destinations ( GMSNavigationWaypoint ) to visit.

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Traffic lights and stop signs You can enable the display of traffic lights and stop signs during active navigation in the mapView , which provides additional context for routes and trip maneuvers.
- UI elements can be positioned relative to the navigation header and footer using layout guides, and alternate route display can be controlled to manage UI clutter.
- You can configure this option before you fetch the routes by configuring GMSNavigationRoutingOptions , and setting the alternateRoutesStrategy with one of the following enumeration values: Enumeration Value Description GMSNavigationAlternateRoutesStrategyAll Default.
- Hide alternate routes When the user interface becomes cluttered with too much information, you can reduce clutter by displaying fewer alternate routes than the default (two), or by displaying no alternate routes at all.

### Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can control the display and tappability of disruption callouts during active navigation using shouldDisplayPrompts , which also controls the display of callouts along routes and the display of automated alerts when a user approaches a disruption . mapView . navigator . shouldDisplayPrompts = true Automated disruption alerts with voting during active navigation During active navigation, when a user approaches a disruption along a route, a prompt appears with information about the disruption and buttons for voting on whether the disruption is still present.
- You can control the ability of users to tap disruption callouts on route overviews to display more information using showsIncidentCards . mapView . settings . showsIncidentCards = true Callout info cards during active navigation When a disruption callout appears along a route during active navigation, users can tap the callout to display an info card with more information about the disruption, including the disruption type and the time it was last reported, as well as buttons for voting on whether the disruption is still present.
- You can configure the display of alert prompts during active navigation using shouldDisplayPrompts , which also controls the display of callouts along routes . mapView . navigator . shouldDisplayPrompts = true Note: When a user approaches a disruption along a route during active navigation, the disruption is announced with an audio alert.
- You can control the display of disruption callouts along routes using shouldDisplayPrompts , which also controls the display of automated alerts when a user approaches a disruption . mapView . navigator . shouldDisplayPrompts = true Display disruption details when a user taps a callout Users can tap a callout to display an info card with more information about the disruption, including the disruption type, the time it was last reported, and in some cases, an option for voting on whether the disruption is still present.

