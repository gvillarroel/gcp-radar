---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.306Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Custom real-time disruption reporting buttons"
feature_slug: "custom-real-time-disruption-reporting-buttons"
latest_feature_date: "2025-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info"
keywords:
  - "custom"
  - "real"
  - "time"
  - "disruption"
  - "reporting"
  - "buttons"
  - "the"
  - "incident"
---

# Custom real-time disruption reporting buttons

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The incident reporting flow can be checked and launched programmatically using the new reporting APIs.

## Extended Definition

The incident reporting flow can be checked and launched programmatically using the new reporting APIs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info](https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info)

## Supporting Pages

### Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/ios-sdk/real-time-disruptions)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Swift // Create a new layout guide let topRightLayoutGuide = UILayoutGuide () self . view . addLayoutGuide ( topRightLayoutGuide ) // Activate constraints using fixed constants here as an example // assuming the current reporting button is of fixed height topRightLayoutGuide . topAnchor . constraint ( equalTo : mapView . navigationHeaderLayoutGuide . bottomAnchor , constant : 50 ). isActive = true topRightLayoutGuide . trailingAnchor . constraint ( equalTo : self . view . safeAreaLayoutGuide . trailingAnchor , constant : - 14 ). isActive = true // Assign the layout guide mapView . bottomTrailingButtonsLayoutGuide = topRightLayoutGuide // Create an alternate layout guide to use when the header and the footer are not full width let topRightAlternateLayoutGuide = UILayoutGuide () self . view . addLayoutGuide ( topRightAlternateLayoutGuide ) // Activate constraints using fixed constants here as an example // assuming the current RTD button is of fixed height topRightAlternateLayoutGuide . topAnchor . constraint ( equalTo : mapView . navigationHeaderLayoutGuide . bottomAnchor , constant : 20 ). isActive = true topRightAlternateLayoutGuide . trailingAnchor . constraint ( equalTo : self . view . safeAreaLayoutGuide . trailingAnchor , constant : - 10 ). isActive = true // Assign the layout guide mapView . bottomTrailingButtonsAlternateLayoutGuide = topRightAlternateLayoutGuide Objective-C // Create a new layout guide UILayoutGuide topRightLayoutGuide = [[ UILayoutGuide alloc ] init ]; [ self . view addLayoutGuide : topRightLayoutGuide ]; // Activate constraints using fixed constants here as an example // assuming the current RTD button is of fixed height [[ topRightLayoutGuide . topAnchor constraintEqualToAnchor : mapView . navigationHeaderLayoutGuide . bottomAnchor constant : 50 ] setActive : YES ]; [[ topRightLayoutGuide . trailingAnchor constraintEqualToAnchor : self . view . safeAreaLayoutGuide . trailingAnchor constant : -14 ] setActive : YES ]; // Assign the layout guide mapView . bottomTrailingButtonsLayoutGuide = topRightLayoutGuide ; // Create an alternate layout guide to use when the header and the footer are not full width UILayoutGuide topRightAlternateLayoutGuide = [[ UILayoutGuide alloc ] init ]; [ self . view addLayoutGuide : topRightAlternateLayoutGuide ]; // Activate constraints using fixed constants here as an example // assuming the current RTD button is of fixed height [[ topRightAlternateLayoutGuide . topAnchor constraintEqualToAnchor : mapView . navigationHeaderLayoutGuide . bottomAnchor constant : 50 ] setActive : YES ]; [[ topRightAlternateLayoutGuide . trailingAnchor constraintEqualToAnchor : self . view . safeAreaLayoutGuide . trailingAnchor constant : -14 ] setActive : YES ]; // Assign the layout guide mapView . bottomTrailingButtonsAlternateLayoutGuide = topRightAlternateLayoutGuide ; Prompt Visibility API (Experimental) The Prompt Visibility API helps you avoid conflicts between UI elements generated by the Navigation SDK and your own custom UI elements by adding a listener to receive a callback before a Navigation SDK UI element is about to appear and as soon as the element is removed.
- You can control the ability of users to tap disruption callouts on route overviews to display more information using showsIncidentCards . mapView . settings . showsIncidentCards = true Callout info cards during active navigation When a disruption callout appears along a route during active navigation, users can tap the callout to display an info card with more information about the disruption, including the disruption type and the time it was last reported, as well as buttons for voting on whether the disruption is still present.
- Show or hide the standard reporting button You can configure the visibility of the standard reporting button during active navigation using navigationReportIncidentButtonEnabled . // Enables the incident reporting FAB to show in situations where incident // reporting is possible. mapView . settings . navigationReportIncidentButtonEnabled = true Add a custom reporting button In place of the standard disruption reporting button, you can add a custom reporting button to the navigation UI.
- You can add any extra logic here. } } Work with custom navigation UIs If your implementation of the Navigation SDK includes custom UI elements, you need to consider the real-time disruption elements in order to avoid conflicts.

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- The following code example shows using the layout guides to position a pair of labels in the map view: Swift / Add a label to the top left, positioned below the header. / let topLabel = UILabel () topLabel . text = "Top Left" mapView . addSubview ( topLabel ) topLabel . translatesAutoresizingMaskIntoConstraints = false topLabel . topAnchor . constraint ( equalTo : mapView . navigationHeaderLayoutGuide . bottomAnchor ). isActive = true topLabel . leadingAnchor . constraint ( equalTo : mapView . leadingAnchor ). isActive = true / Add a label to the bottom right, positioned above the footer. / let bottomLabel = UILabel () bottomLabel . text = "Bottom Right" mapView . addSubview ( bottomLabel ) bottomLabel . translatesAutoresizingMaskIntoConstraints = false bottomLabel . bottomAnchor . constraint ( equalTo : mapView . navigationFooterLayoutGuide . topAnchor ). isActive = true bottomLabel . trailingAnchor . constraint ( equalTo : mapView . trailingAnchor ). isActive = true Objective-C / Add a label to the top left, positioned below the header. / UILabel topLabel = [[ UILabel alloc ] init ]; topLabel . text = @"Top Left" ; [ view addSubview : topLabel ]; topLabel . translatesAutoresizingMaskIntoConstraints = NO ; [ topLabel . topAnchor constraintEqualToAnchor : mapView . navigationHeaderLayoutGuide . bottomAnchor ]. active = YES ; [ topLabel . leadingAnchor constraintEqualToAnchor : mapView . leadingAnchor ]. active = YES ; / Add a label to the bottom right, positioned above the footer. / UILabel bottomLabel = [[ UILabel alloc ] init ]; bottomLabel . text = @"Bottom Right" ; [ view addSubview : bottomLabel ]; bottomLabel . translatesAutoresizingMaskIntoConstraints = NO ; [ bottomLabel . bottomAnchor constraintEqualToAnchor : mapView . navigationFooterLayoutGuide . topAnchor ]. active = YES ; [ bottomLabel . trailingAnchor constraintEqualToAnchor : mapView . trailingAnchor ]. active = YES ; For an example of how to use a bottomTrailingButtonsLayoutGuide , to position the real-time disruptions reporting button, see Configure real-time disruptions .
- For more information, including code samples, see the Prompt Visibility API section of the Configure real-time-disruptions page.
- Swift mapView . settings . scrollGestures = false mapView . settings . zoomGestures = false Objective-C mapView . settings . scrollGestures = NO ; mapView . settings . zoomGestures = NO ; Position controls and UI elements You can position controls and other UI elements relative to the position of the navigation header and footer, by using the following properties: navigationHeaderLayoutGuide navigationFooterLayoutGuide bottomTrailingButtonsLayoutGuide Note: To make sure that custom UI elements don't block any prompts that appear in the Navigation SDK, make sure that custom UI elements are implemented in a subview of the mapView , not in the root view.
- Swift class MyCustomView : UIView , GMSNavigationAccessoryView { … func heightForAccessoryViewConstrained ( to size : CGSize , on mapView : GMSMapView ) - > CGFloat { // viewHeight gets calculated as the height your view needs. return viewHeight } … } let customView = MyCustomView (...) mapView . setHeaderAccessory ( customView ) // At some later point customView changes size. mapView . invalidateLayout ( forAccessoryView : customView ) // Remove the custom header accessory view. mapView . setHeaderAccessory ( nil ) Objective-C @interface MyCustomView : UIView < GMSNavigationAccessoryView > … @end @implementation MyCustomView … - ( CGFloat ) heightForAccessoryViewConstrainedToSize : ( CGSize ) size onMapView : ( GMSMapView ) mapView { // viewHeight gets calculated as the height your view needs. return viewHeight ; } … @end MyCustomView customView = [[ MyCustomView alloc ] init … ]; [ mapView setHeaderAccessoryView : customView ]; // At some later point customView changes size. [ mapView invalidateLayoutForAccessoryView : customView ]; // Remove the custom header accessory view. [ mapView setHeaderAccessoryView : nil ]; Normal and low-light modes The GMSNavigatorListener.didChangeSuggestedLightingMode listener method is triggered when estimated lighting conditions are updated.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- If an error occurs, the error parameter in the completion block will be non-nil and contain an error from the domain GMSMapViewPresentReportIncidentPanelErrorDomain . bottomTrailingButtonsLayoutGuide Experimental feature The layout guide that is used to position the bottom trailing buttons.
- Declaration Swift var navigationFooterLayoutGuide : UILayoutGuide { get } Objective-C @property ( nonatomic , readonly ) UILayoutGuide Nonnull navigationFooterLayoutGuide ; reportIncidentsAvailable Experimental feature Returns whether incident reporting is available.
- Ensure that reporting is available by checking the reportIncidentsAvailable property before calling this method.
- Declaration Swift var bottomTrailingButtonsLayoutGuide : UILayoutGuide ! { get set } Objective-C @property ( nonatomic , null resettable ) UILayoutGuide bottomTrailingButtonsLayoutGuide ; bottomTrailingButtonsAlternateLayoutGuide Experimental feature The layout guide that is used to position the bottom trailing buttons when the navigation footer and header do not span the full width of the screen.

### Get route information \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info](https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- OK else { print ( "Handle route statuses that are not OK." ) return } self . mapView . navigator ? . isGuidanceActive = true self . mapView . cameraMode = . following self . mapView . locationSimulator ? . simulateLocationsAlongExistingRoute () } mapView . roadSnappedLocationProvider ? . startUpdatingLocation () } func getTimeToNextDestination () { if let navigator = mapView . navigator { let time = navigator . timeToNextDestination let minutes = floor ( time / 60 ) let seconds = round ( time - minutes 60 ) print ( "Time to next destination: \(minutes):\(seconds)" ) } } func getDistanceToNextDestination () { if let navigator = mapView . navigator { let distance = navigator . distanceToNextDestination let miles = distance 0.00062137 print ( "Distance to next destination: \(miles) miles." ) } } func getCurrentRouteLeg () { if let navigator = mapView . navigator { let currentLeg = navigator . currentRouteLeg let nextDestination = currentLeg ? . destinationWaypoint ? . title ?? "Not Available" let lat = currentLeg ? . destinationCoordinate . latitude . description ?? "Not Available" let lng = currentLeg ? . destinationCoordinate . longitude . description ?? "Not Available" print ( "Destination: \(nextDestination) at (\(lat),\(lng)" ) } } func getTraveledPath () { if let navigator = mapView . navigator { let latestPath = navigator . traveledPath if latestPath . count () > 0 { let begin : CLLocationCoordinate2D = latestPath . coordinate ( at : 0 ) let current : CLLocationCoordinate2D = latestPath . coordinate ( at : latestPath . count () - 1 ) print ( "Path from (\(begin.latitude),\(begin.longitude)) to (\(current.latitude),\(current.longitude))" ) } } } // Add some buttons to the view . func makeButtons () { // Start navigation . let navButton = UIButton ( frame : CGRect ( x : 5 , y : 150 , width : 200 , height : 35 )) navButton . backgroundColor = . blue navButton . alpha = 0.5 navButton . setTitle ( "Start navigation" , for : . normal ) navButton . addTarget ( self , action : #selector(startNav), for: .touchUpInside) self . mapView . addSubview ( navButton ) // Get the time to the next destination . let timeButton = UIButton ( frame : CGRect ( x : 5 , y : 190 , width : 200 , height : 35 )) timeButton . backgroundColor = . blue timeButton . alpha = 0.5 timeButton . setTitle ( "Time to next destination" , for : . normal ) timeButton . addTarget ( self , action : #selector(getTimeToNextDestination), for: .touchUpInside) self . mapView . addSubview ( timeButton ) // Get the distance to the next destination . let distanceButton = UIButton ( frame : CGRect ( x : 5 , y : 230 , width : 200 , height : 35 )) distanceButton . backgroundColor = . blue distanceButton . alpha = 0.5 distanceButton . setTitle ( "Distance to next destination" , for : . normal ) distanceButton . addTarget ( self , action : #selector(getDistanceToNextDestination), for: .touchUpInside) self . mapView . addSubview ( distanceButton ) // Get the current route leg . let routeButton = UIButton ( frame : CGRect ( x : 5 , y : 270 , width : 200 , height : 35 )) routeButton . backgroundColor = . blue routeButton . alpha = 0.5 routeButton . setTitle ( "Get current route leg" , for : . normal ) routeButton . addTarget ( self , action : #selector(getCurrentRouteLeg), for: .touchUpInside) self . mapView . addSubview ( routeButton ) // Get the most recently traveled path . let pathButton = UIButton ( frame : CGRect ( x : 5 , y : 310 , width : 200 , height : 35 )) pathButton . backgroundColor = . blue pathButton . alpha = 0.5 pathButton . setTitle ( "Get traveled path" , for : . normal ) pathButton . addTarget ( self , action : #selector(getTraveledPath), for: .touchUpInside) self . mapView . addSubview ( pathButton ) } } Show/Hide the Objective-C code to get route information. / Copyright 2017 Google Inc.
- NSString companyName = @"Ride Sharing Co." ; [ GMSNavigationServices showTermsAndConditionsDialogIfNeededWithCompanyName : companyName callback : ^ ( BOOL termsAccepted ) { if ( termsAccepted ) { // Enable navigation if the user accepts the terms. mapView . navigationEnabled = YES ; // Request authorization to use location services. [ locationManager requestAlwaysAuthorization ]; } else { // Handle the case when the user rejects the terms and conditions. } }]; self . view = mapView ; [ self makeButtons ]; } // Create a route and start guidance. - ( void ) startNav { NSArray<GMSNavigationWaypoint > destinations = @[ [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJnUYTpNASkFQR gSty5kyoUk" title : @"PCC Natural Market" ], [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJJ326ROcSkFQRBfUzOL2DSbo" title : @"Marina Park" ] ] ; [ mapView . navigator setDestinations : destinations callback : ^ ( GMSRouteStatus routeStatus ){ mapView . navigator . guidanceActive = YES ; mapView . cameraMode = GMSNavigationCameraModeFollowing ; [ mapView . locationSimulator simulateLocationsAlongExistingRoute ]; }]; [ mapView . roadSnappedLocationProvider startUpdatingLocation ]; } - ( void ) getTimeToNextDestination { NSTimeInterval time = mapView . navigator . timeToNextDestination ; int minutes = floor ( time / 60 ); int seconds = round ( time - minutes 60 ); NSLog ( @"%@" , [ NSString stringWithFormat : @"Time to next destination: %i:%i." , minutes , seconds ]); } - ( void ) getDistanceToNextDestination { CLLocationDistance distance = mapView . navigator . distanceToNextDestination ; double miles = distance 0.00062137 ; NSLog ( @"%@" , [ NSString stringWithFormat : @"Distance to next destination: %.2f." , miles ]); } - ( void ) getCurrentRouteLeg { GMSRouteLeg currentSegment = mapView . navigator . currentRouteLeg ; NSString nextDestination = currentSegment . destinationWaypoint . title ; CLLocationDegrees lat = currentSegment . destinationCoordinate . latitude ; CLLocationDegrees lng = currentSegment . destinationCoordinate . longitude ; NSLog ( @"%@" , [ NSString stringWithFormat : @"%@, %f/%f" , nextDestination , lat , lng ]); } - ( void ) getTraveledPath { GMSPath latestPath = mapView . navigator . traveledPath ; if ( latestPath . count > 0 ) { CLLocationCoordinate2D begin = [ latestPath coordinateAtIndex : 0 ]; CLLocationCoordinate2D current = [ latestPath coordinateAtIndex : latestPath . count - 1 ]; NSLog ( @"Path from %f/%f to %f/%f" , begin . latitude , begin . longitude , current . latitude , current . longitude ); } } #pragma mark - Buttons and things // Add some buttons to the view. - ( void ) makeButtons { // Start navigation.
- UIButton pathButton = [ UIButton buttonWithType : UIButtonTypeCustom ]; [ pathButton addTarget : self action : @selector ( getTraveledPath ) forControlEvents : UIControlEventTouchUpInside ]; [ pathButton setTitle : @"Get current route leg" forState : UIControlStateNormal ]; [ pathButton setBackgroundColor : [ UIColor blueColor ]]; [ pathButton setAlpha : 0.5 ]; pathButton . frame = CGRectMake ( 5.0 , 310.0 , 200.0 , 35.0 ); [ mapView addSubview : pathButton ]; } @end Getting time to the next destination To get the time to the next destination, call timeToNextDestination() .
- UIButton timeButton = [ UIButton buttonWithType : UIButtonTypeCustom ]; [ timeButton addTarget : self action : @selector ( getTimeToNextDestination ) forControlEvents : UIControlEventTouchUpInside ]; [ timeButton setTitle : @"Time to next destination" forState : UIControlStateNormal ]; [ timeButton setBackgroundColor : [ UIColor blueColor ]]; [ timeButton setAlpha : 0.5 ]; timeButton . frame = CGRectMake ( 5.0 , 190.0 , 200.0 , 35.0 ); [ mapView addSubview : timeButton ]; // Get the distance to the next destination.

