---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.317Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Traffic lights and stop signs"
feature_slug: "traffic-lights-and-stop-signs"
latest_feature_date: "2022-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations"
keywords:
  - "traffic"
  - "lights"
  - "and"
  - "stop"
  - "signs"
  - "the"
  - "sdk"
  - "can"
---

# Traffic lights and stop signs

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The SDK can display traffic lights and stop signs during navigation.

## Extended Definition

The SDK can display traffic lights and stop signs during navigation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed](https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations](https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations)

## Supporting Pages

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Swift mapView . settings . showsTrafficLights = true mapView . settings . showsStopSigns = true Objective-C mapView . settings . showsTrafficLights = YES ; mapView . settings . showsStopSigns = YES ; Speedometer control When navigation is enabled and the travel mode is set to driving, the Navigation SDK for iOS displays a speed limit control in the lower corner of the map that shows the current speed limit.
- Traffic lights and stop signs You can enable the display of traffic lights and stop signs during active navigation in the mapView , which provides additional context for routes and trip maneuvers.
- By default, traffic lights and stop signs are disabled in the Navigation SDK for iOS.
- To enable this feature, call the GMSMapView settings for each option independently: showsTrafficLights and showsStopSigns .

### "The Google navigation experience \_|\_ Navigation SDK for iOS \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/ios-sdk/intro-google-nav)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Modification Details Modified navigation guidance: show/hide headers, colors and fonts, directions, alternate routes, and trip progress Map UI controls Navigation header and footer Navigation header accessory view Display directions list Hide alternate routes Display trip progress Adjust traffic information and speed limit information Display the speedometer Adjust speedometer alerts Enable traffic lights and stop signs Change the map experience UI and adjust the camera.
- As an alternative, if you need more customization than is available with the Google navigation experience, you can request a turn-by-turn navigation feed from the Navigation SDK and then provide and manage your own UI elements.
- When you use Google navigation experience, your app calls the Navigation SDK to start, run, and stop navigation, using the following flow: Start navigation .
- Developers can initiate, manage, and conclude navigation using the Navigation SDK, controlling aspects like destination setting and event handling.

### "Details about the turn-by-turn data feed \_|\_ Navigation SDK for iOS \_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed](https://developers.google.com/maps/documentation/navigation/ios-sdk/nav-only-feed)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It provides upcoming maneuvers with elements you supply: icons (left, right, U-turn) turn numbers in roundabouts road names estimated distances and time to the next navigation step or final destination You can use the turn-by-turn feed to create experiences where the full Navigation SDK UI is not appropriate, such as for small screen displays.
- The Navigation SDK detects whether a maneuver occurs in left- or right-side traffic and outputs the appropriate maneuver.
- Expand to see examples icons for different maneuvers Sample Icon Turn-By-Turn Maneuvers DEPART UNKNOWN STRAIGHT ON RAMP UNSPECIFIED OFF RAMP UNSPECIFIED NAME CHANGE TURN RIGHT ON RAMP RIGHT TURN LEFT ON RAMP LEFT TURN SLIGHT RIGHT ON RAMP SLIGHT RIGHT OFF RAMP SLIGHT RIGHT TURN SLIGHT LEFT ON RAMP SLIGHT LEFT OFF RAMP SLIGHT LEFT TURN SHARP RIGHT ON RAMP SHARP RIGHT OFF RAMP SHARP RIGHT TURN SHARP LEFT ON RAMP SHARP LEFT OFF RAMP SHARP LEFT TURN U TURN COUNTERCLOCKWISE ON RAMP U TURN COUNTERCLOCKWISE OFF RAMP U TURN COUNTERCLOCKWISE TURN U TURN CLOCKWISE ON RAMP U TURN CLOCKWISE OFF RAMP U TURN CLOCKWISE ROUNDABOUT SHARP RIGHT COUNTERCLOCKWISE ROUNDABOUT SHARP RIGHT CLOCKWISE ROUNDABOUT RIGHT COUNTERCLOCKWISE ROUNDABOUT RIGHT CLOCKWISE ROUNDABOUT SLIGHT RIGHT COUNTERCLOCKWISE ROUNDABOUT SLIGHT RIGHT CLOCKWISE ROUNDABOUT STRAIGHT COUNTERCLOCKWISE ROUNDABOUT STRAIGHT CLOCKWISE ROUNDABOUT SLIGHT LEFT COUNTERCLOCKWISE ROUNDABOUT SLIGHT LEFT CLOCKWISE ROUNDABOUT LEFT COUNTERCLOCKWISE ROUNDABOUT LEFT CLOCKWISE ROUNDABOUT SHARP LEFT COUNTERCLOCKWISE ROUNDABOUT SHARP LEFT CLOCKWISE ROUNDABOUT U TURN COUNTERCLOCKWISE ROUNDABOUT U TURN CLOCKWISE ROUNDABOUT COUNTERCLOCKWISE ROUNDABOUT CLOCKWISE ROUNDABOUT EXIT COUNTERCLOCKWISE ROUNDABOUT EXIT CLOCKWISE MERGE RIGHT OFF RAMP RIGHT MERGE LEFT OFF RAMP LEFT FORK RIGHT TURN KEEP RIGHT ON RAMP KEEP RIGHT OFF RAMP KEEP RIGHT FORK LEFT TURN KEEP LEFT ON RAMP KEEP LEFT OFF RAMP KEEP LEFT MERGE UNSPECIFIED DESTINATION DESTINATION RIGHT DESTINATION LEFT FERRY BOAT FERRY TRAIN Use generated icons The Navigation SDK supports generation of maneuver icons for a given GMSNavigationStepInfo .
- Swift let currentStepInfo = navInfo . currentStep let options = GMSNavigationStepImageOptions () options . maneuverImageSize = . square96 options . screenMetrics = UIScreen . mainScreen let maneuverImage = currentStepinfo . maneuverImage ( options : options ) Objective-C GMSNavigationStepInfo stepInfo = navInfo . currentStep ; GMSNavigationStepImageOptions options = [[ GMSNavigationStepImageOptions alloc ] init ]; options . maneuverImageSize = GMSNavigationManeuverImageSizeSquare96 ; options . screenMetrics = UIScreen . mainScreen ; UIImage maneuverImage = [ stepInfo maneuverImageWithOptions : options ]; Creating icons for maneuvers The GMSNavigationManeuver enum defines each possible maneuver that could occur while navigating, and you can get the maneuver for a given step from the maneuver property of GMSNavigationStepInfo .

### Plan a route \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations](https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Plan a route using a route token You can plan a route by creating a route token and then passing it to the Navigation SDK, as described in the following steps: Step 1: Create a route token using the Routes API, Routes Preferred API, or Route Optimization API Request a route token with one of the following methods: Routes API : computeRoutes .
- Swift let location = CLLocationCoordinate2D ( latitude : 47.67 , longitude : - 122.20 ) let waypoint1 = GMSNavigationWaypoint ( location : location , title : "waypoint from location" ) ! let waypoint2 = GMSNavigationWaypoint ( placeID : "samplePlaceID" , title : "waypoint from Place ID" ) ! let routeToken = "route token returned by Routes API" mapView . navigator ?. setDestinations ([ waypoint1 , waypoint2 ], routeToken : routeToken , callback : {...}) Objective-C CLLocationCoordinate2D location = CLLocationCoordinate2DMake ( 47.67 , -122.20 ); GMSNavigationWaypoint waypoint1 = [[ GMSNavigationWaypoint alloc ] initWithLocation : coordinate title : @"waypoint from location" ]; GMSNavigationWaypoint waypoint2 = [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"samplePlaceID" title : @"waypoint from Place ID" ]; NSString routeToken = @"route token returned by Routes API" ; [ mapView . navigator continueToNextDestination : @[ waypoint1 , waypoint2 ] routeToken : routeToken callback : ^ ( GMSRouteStatus routeStatus ){...}]; How route tokens and the Navigation SDK interact Here's how the route generated by the Navigation SDK and the planned route in the route token interact: Overrides any previously-set destinations.
- Set up your Routes API or Routes Preferred API request to meet the requirements for using a route token: Set travel mode to DRIVE or TWO WHEELER Set routing preference to TRAFFIC AWARE or TRAFFIC AWARE OPTIMAL Do NOT use Via waypoints Step 2: Pass the route token to the Navigation SDK Store the route token : In the Navigation SDK, set up a string to store the route token.
- Page Summary outlined flag Route tokens let you plan routes in advance, optimizing for factors like time, fuel, or safety, and can be generated using the Routes, Routes Preferred, or Route Optimization API.

