---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.302Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Cycling chevron direction update"
feature_slug: "cycling-chevron-direction-update"
latest_feature_date: "2026-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/route"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points"
keywords:
  - "cycling"
  - "chevron"
  - "direction"
  - "update"
  - "the"
  - "guidance"
  - "points"
  - "in"
---

# Cycling chevron direction update

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The cycling guidance chevron points in the direction of device movement during active guidance.

## Extended Definition

The cycling guidance chevron points in the direction of device movement during active guidance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/route](https://developers.google.com/maps/documentation/navigation/ios-sdk/route)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints](https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points)

## Supporting Pages

### Navigate a route \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/route](https://developers.google.com/maps/documentation/navigation/ios-sdk/route)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: When testing cycling or walking mode with an emulator, neither the chevron direction nor the map orientation will appear to change.
- In driving and taxi mode, the user's course is based on the direction of travel; in cycling and walking mode the course is represented by the direction the device is facing (toward the top of the device in landscape mode).
- However, when using a physical device, the map orientation will change when the device is rotated, while the chevron continues to point in the direction that the device is facing.
- UNUserNotificationCenter center = [ UNUserNotificationCenter currentNotificationCenter ]; UNAuthorizationOptions options = UNAuthorizationOptionAlert ; [ center requestAuthorizationWithOptions : options completionHandler : ^ ( BOOL granted , NSError Nullable error ) { if ( ! error && granted ) { NSLog ( @"iOS Notification Permission: newly Granted" ); } else { NSLog ( @"iOS Notification Permission: Failed or Denied" ); } }]; } else { // Handle rejection of the terms and conditions. } }]; self . view = mapView ; [ self makeButton ]; } // Create a route and initiate navigation. - ( void ) startNav { NSArray<GMSNavigationWaypoint > destinations = @[ [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJnUYTpNASkFQR gSty5kyoUk" title : @"PCC Natural Market" ], [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJJ326ROcSkFQRBfUzOL2DSbo" title : @"Marina Park" ] ] ; [ mapView . navigator setDestinations : destinations callback : ^ ( GMSRouteStatus routeStatus ){ [ mapView . locationSimulator simulateLocationsAlongExistingRoute ]; mapView . navigator . guidanceActive = YES ; mapView . navigator . sendsBackgroundNotifications = YES ; mapView . cameraMode = GMSNavigationCameraModeFollowing ; }]; } // Add a button to the view. - ( void ) makeButton { // A button to start navigation.

### Manage waypoints \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints](https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set an arrival heading You provide the geographic coordinates of the waypoint, and then provide an arrival heading preferredSegmentHeading that matches the direction of traffic flow on the same side of the road as the destination. ( nullable instancetype ) initWithLocation : ( CLLocationCoordinate2D ) location title :( NSString ) title preferredSegmentHeading :( int32 t ) preferredSegmentHeading ; The Navigation SDK chooses the road segment closest to the waypoint—that has a lane direction that aligns (within +/- 55 degrees) with the side of the road that the waypoint is on.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
- Side of the Road Routing ensures arrival on the correct side of the road using preferSameSideOfRoad or preferredSegmentHeading when creating waypoints. preferSameSideOfRoad snaps the waypoint to the nearest sidewalk, while preferredSegmentHeading aligns the arrival with traffic flow on the desired side of the road.
- The Stopover feature automatically relocates waypoints to safe stopping areas when vehicleStopover is set to YES .

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- The simulated location affects the position of the chevron on the map, the progress of turn-by-turn guidance, and the updates provided by the road-snapped location provider.
- In driving mode, device course is based on the direction of movement, while in cycling or walking mode the course is based on the compass direction the device is facing.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-18 UTC."],[],[]]
- Declaration Swift func didUpdatePanGesture ( withTranslation translation : CGPoint , velocity : CGPoint ) Objective-C - ( void ) didUpdatePanGestureWithTranslation :( CGPoint ) translation velocity :( CGPoint ) velocity ; -didEndPanGestureWithVelocity: Preview feature This method should be called from the application’s implementation of the CPMapTemplateDelegate method -mapTemplate:didEndPanGestureWithVelocity: in order to implement pan gestures for CarPlay map templates.

### "Route to Navigation points \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-26 UTC."],[],[]]
- The Navigation SDK for iOS offers enhanced ways to specify waypoints, providing more accurate routing and a better arrival experience, especially for destinations with multiple entrances or specific access points.
- Use a Navigation Point token For the most precise routing to specific access points like entrances, loading docks, or designated pick-up areas, you can use a navigationPointToken .
- This allows the Navigation SDK to provide a richer arrival experience by highlighting the destination building or showing nearby points of interest related to the Place ID.

