---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.317Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "GMSNavigatorSession"
feature_slug: "gmsnavigatorsession"
latest_feature_date: "2023-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/events"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSLocationSimulator"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes"
keywords:
  - "gmsnavigatorsession"
  - "is"
  - "new"
  - "class"
  - "for"
  - "programmatically"
  - "controlling"
  - "navigation"
---

# GMSNavigatorSession

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

GMSNavigatorSession is a new class for programmatically controlling a navigation session.

## Extended Definition

GMSNavigatorSession is a new class for programmatically controlling a navigation session.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/events](https://developers.google.com/maps/documentation/navigation/ios-sdk/events)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSLocationSimulator](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSLocationSimulator)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes)

## Supporting Pages

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Swift class MyCustomView : UIView , GMSNavigationAccessoryView { … func heightForAccessoryViewConstrained ( to size : CGSize , on mapView : GMSMapView ) - > CGFloat { // viewHeight gets calculated as the height your view needs. return viewHeight } … } let customView = MyCustomView (...) mapView . setHeaderAccessory ( customView ) // At some later point customView changes size. mapView . invalidateLayout ( forAccessoryView : customView ) // Remove the custom header accessory view. mapView . setHeaderAccessory ( nil ) Objective-C @interface MyCustomView : UIView < GMSNavigationAccessoryView > … @end @implementation MyCustomView … - ( CGFloat ) heightForAccessoryViewConstrainedToSize : ( CGSize ) size onMapView : ( GMSMapView ) mapView { // viewHeight gets calculated as the height your view needs. return viewHeight ; } … @end MyCustomView customView = [[ MyCustomView alloc ] init … ]; [ mapView setHeaderAccessoryView : customView ]; // At some later point customView changes size. [ mapView invalidateLayoutForAccessoryView : customView ]; // Remove the custom header accessory view. [ mapView setHeaderAccessoryView : nil ]; Normal and low-light modes The GMSNavigatorListener.didChangeSuggestedLightingMode listener method is triggered when estimated lighting conditions are updated.
- You can toggle the visibility of the navigation header and footer and set its colors programmatically using the following properties: navigationHeaderEnabled — controls whether the navigation header is visible (default is true ). navigationFooterEnabled — controls whether the navigation footer is visible (default is true ). navigationHeaderPrimaryBackgroundColor — sets the primary background color for the navigation header. navigationHeaderSecondaryBackgroundColor — sets the secondary background color for the navigation header.
- For indoor maps without navigation, use the indoorEnabled and indoorDisplay methods of the Maps SDK for iOS GMSMapView class.
- The following code example shows using the layout guides to position a pair of labels in the map view: Swift / Add a label to the top left, positioned below the header. / let topLabel = UILabel () topLabel . text = "Top Left" mapView . addSubview ( topLabel ) topLabel . translatesAutoresizingMaskIntoConstraints = false topLabel . topAnchor . constraint ( equalTo : mapView . navigationHeaderLayoutGuide . bottomAnchor ). isActive = true topLabel . leadingAnchor . constraint ( equalTo : mapView . leadingAnchor ). isActive = true / Add a label to the bottom right, positioned above the footer. / let bottomLabel = UILabel () bottomLabel . text = "Bottom Right" mapView . addSubview ( bottomLabel ) bottomLabel . translatesAutoresizingMaskIntoConstraints = false bottomLabel . bottomAnchor . constraint ( equalTo : mapView . navigationFooterLayoutGuide . topAnchor ). isActive = true bottomLabel . trailingAnchor . constraint ( equalTo : mapView . trailingAnchor ). isActive = true Objective-C / Add a label to the top left, positioned below the header. / UILabel topLabel = [[ UILabel alloc ] init ]; topLabel . text = @"Top Left" ; [ view addSubview : topLabel ]; topLabel . translatesAutoresizingMaskIntoConstraints = NO ; [ topLabel . topAnchor constraintEqualToAnchor : mapView . navigationHeaderLayoutGuide . bottomAnchor ]. active = YES ; [ topLabel . leadingAnchor constraintEqualToAnchor : mapView . leadingAnchor ]. active = YES ; / Add a label to the bottom right, positioned above the footer. / UILabel bottomLabel = [[ UILabel alloc ] init ]; bottomLabel . text = @"Bottom Right" ; [ view addSubview : bottomLabel ]; bottomLabel . translatesAutoresizingMaskIntoConstraints = NO ; [ bottomLabel . bottomAnchor constraintEqualToAnchor : mapView . navigationFooterLayoutGuide . topAnchor ]. active = YES ; [ bottomLabel . trailingAnchor constraintEqualToAnchor : mapView . trailingAnchor ]. active = YES ; For an example of how to use a bottomTrailingButtonsLayoutGuide , to position the real-time disruptions reporting button, see Configure real-time disruptions .

### "Listen for navigation events \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/events](https://developers.google.com/maps/documentation/navigation/ios-sdk/events)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License . / import GoogleNavigation import UIKit class ViewController : UIViewController , GMSNavigatorListener , GMSRoadSnappedLocationProviderListener { var mapView : GMSMapView ! var locationManager : CLLocationManager ! override func loadView () { locationManager = CLLocationManager () let camera = GMSCameraPosition . camera ( withLatitude : 47.67 , longitude : - 122.20 , zoom : 14 ) mapView = GMSMapView . map ( withFrame : CGRect . zero , camera : camera ) // Add listeners for GMSNavigator and GMSRoadSnappedLocationProvider . mapView . navigator ? . add ( self ) mapView . roadSnappedLocationProvider ? . add ( self ) // Set the time update threshold ( seconds ) and distance update threshold ( meters ) . mapView . navigator ? . timeUpdateThreshold = 10 mapView . navigator ? . distanceUpdateThreshold = 100 // Show the terms and conditions . let companyName = "Ride Sharing Co." GMSNavigationServices . showTermsAndConditionsDialogIfNeeded ( withCompanyName : companyName ) { termsAccepted in if termsAccepted { // Enable navigation if the user accepts the terms . self . mapView . isNavigationEnabled = true // Request authorization to use location services . self . locationManager . requestAlwaysAuthorization () // Request authorization for alert notifications which deliver guidance instructions // in the background .
- UIButton navButton = [ UIButton buttonWithType : UIButtonTypeCustom ]; [ navButton addTarget : self action : @selector ( startNav ) forControlEvents : UIControlEventTouchUpInside ]; [ navButton setTitle : @"Navigate" forState : UIControlStateNormal ]; [ navButton setBackgroundColor : [ UIColor blueColor ]]; [ navButton setAlpha : 0.5 ]; navButton . frame = CGRectMake ( 5.0 , 150.0 , 100.0 , 35.0 ); [ mapView addSubview : navButton ]; } @end Declaring conformance to the required protocols Before implementing the navigation methods, the view controller must adopt the protocols: Swift class ViewController : UIViewController , GMSNavigatorListener , GMSRoadSnappedLocationProviderListener { Objective-C @interface ViewController () < GMSNavigatorListener , GMSRoadSnappedLocationProviderListener > @end After adopting the navigation protocols, set the listeners to the view controller.
- NSString companyName = @"Ride Sharing Co." ; [ GMSNavigationServices showTermsAndConditionsDialogIfNeededWithCompanyName : companyName callback : ^ ( BOOL termsAccepted ) { if ( termsAccepted ) { // Enable navigation if the user accepts the terms. mapView . navigationEnabled = YES ; // Request authorization to use location services. [ locationManager requestAlwaysAuthorization ]; } else { // Handle the case when the user rejects the terms and conditions. } }]; self . view = mapView ; [ self makeButton ]; } // Create a route and initiate navigation. - ( void ) startNav { NSArray<GMSNavigationWaypoint > destinations = @[ [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJnUYTpNASkFQR gSty5kyoUk" title : @"PCC Natural Market" ], [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJJ326ROcSkFQRBfUzOL2DSbo" title : @"Marina Park" ] ] ; [ mapView . navigator setDestinations : destinations callback : ^ ( GMSRouteStatus routeStatus ){ mapView . navigator . guidanceActive = YES ; mapView . navigator . sendsBackgroundNotifications = YES ; mapView . cameraMode = GMSNavigationCameraModeFollowing ; [ mapView . locationSimulator simulateLocationsAlongExistingRoute ]; }]; [ mapView . roadSnappedLocationProvider startUpdatingLocation ]; } #pragma mark - GMSNavigatorListener // Listener for continuous location updates. - ( void ) locationProvider: ( GMSRoadSnappedLocationProvider ) locationProvider didUpdateLocation :( CLLocation ) location { NSLog ( @"Location: %@" , location . description ); } // Listener to handle speeding events. - ( void ) navigator: ( GMSNavigator ) navigator didUpdateSpeedingPercentage :( CGFloat ) percentageAboveLimit { NSLog ( @"Speed is %f percent above the limit." , percentageAboveLimit ); } // Listener to handle arrival events. - ( void ) navigator: ( GMSNavigator ) navigator didArriveAtWaypoint: ( GMSNavigationWaypoint ) waypoint { NSLog ( @"You have arrived at: %@" , waypoint . title ); [ mapView . navigator continueToNextDestination ]; mapView . navigator . guidanceActive = YES ; } // Listener for route change events. - ( void ) navigatorDidChangeRoute: ( GMSNavigator ) navigator { NSLog ( @"The route has changed." ); } // Listener for time to next destination. - ( void ) navigator: ( GMSNavigator ) navigator didUpdateRemainingTime: ( NSTimeInterval ) time { NSLog ( @"Time to next destination: %f" , time ); } // Listener for distance to next destination. - ( void ) navigator: ( GMSNavigator ) navigator didUpdateRemainingDistance :( CLLocationDistance ) distance { double miles = distance 0.00062137 ; NSLog ( @"%@" , [ NSString stringWithFormat : @"Distance to next destination: %.2f." , miles ]); } // Listener for traffic updates for next destination - ( void ) navigator: ( GMSNavigator ) navigator didUpdateDelayCategory :( GMSNavigationDelayCategory ) delayCategory { NSLog ( @"Delay category to next destination: %ld." , delayCategory ); } // Listener for suggested lighting mode changes. -( void ) navigator: ( GMSNavigator ) navigator didChangeSuggestedLightingMode :( GMSNavigationLightingMode ) lightingMode { NSLog ( @"Suggested lighting mode has changed: %ld" , ( long ) lightingMode ); // Change to the suggested lighting mode. mapView . lightingMode = lightingMode ; } #pragma mark - Programmatic UI elements // Add a button to the view. - ( void ) makeButton { // Start navigation.
- OK else { print ( "Handle route statuses that are not OK." ) return } self . mapView . navigator ? . isGuidanceActive = true self . mapView . cameraMode = . following self . mapView . locationSimulator ? . simulateLocationsAlongExistingRoute () } mapView . roadSnappedLocationProvider ? . startUpdatingLocation () } // Listener to handle continuous location updates . func locationProvider ( locationProvider : GMSRoadSnappedLocationProvider , didUpdate location : CLLocation ) { print ( "Location: \(location.description)" ) } // Listener to handle speeding events . func navigator ( navigator : GMSNavigator , didUpdateSpeedingPercentage percentageAboveLimit : CGFloat ) { print ( "Speed is \(percentageAboveLimit) above the limit." ) } // Listener to handle arrival events . func navigator ( navigator : GMSNavigator , didArriveAt waypoint : GMSNavigationWaypoint ) { print ( "You have arrived at: \(waypoint.title)" ) mapView . navigator ? . continueToNextDestination () mapView . navigator ? . isGuidanceActive = true } // Listener for route change events . func navigatorDidChangeRoute ( navigator : GMSNavigator ) { print ( "The route has changed." ) } // Listener for time to next destination . func navigator ( navigator : GMSNavigator , didUpdateRemainingTime time : TimeInterval ) { print ( "Time to next destination: \(time)" ) } // Delegate for distance to next destination . func navigator ( navigator : GMSNavigator , didUpdateRemainingDistance distance : CLLocationDistance ) { let miles = distance 0.00062137 print ( "Distance to next destination: \(miles) miles." ) } // Delegate for traffic updates to next destination func navigator ( navigator : GMSNavigator , didUpdate delayCategory : GMSNavigationDelayCategory ) { print ( "Delay category to next destination: \(String(describing: delayCategory))." ) } // Delegate for suggested lighting mode changes . func navigator ( navigator : GMSNavigator , didChangeSuggestedLightingMode lightingMode : GMSNavigationLightingMode ) { print ( "Suggested lighting mode has changed: \(String(describing: lightingMode))" ) // Change to the suggested lighting mode . mapView . lightingMode = lightingMode } // Add a button to the view . func makeButton () { // Start navigation . let navButton = UIButton ( frame : CGRect ( x : 5 , y : 150 , width : 200 , height : 35 )) navButton . backgroundColor = . blue navButton . alpha = 0.5 navButton . setTitle ( "Start navigation" , for : . normal ) navButton . addTarget ( self , action : #selector(startNav), for: .touchUpInside) self . mapView . addSubview ( navButton ) } } Show/Hide the Objective-C code for an event listener. / Copyright 2020 Google Inc.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSLocationSimulator](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSLocationSimulator)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift func simulateAlongNewRoute ( toDestinations destinations : [ GMSNavigationWaypoint ], routingOptions : GMSNavigationRoutingOptions , callback : @escaping GMSRouteStatusCallback ) Objective-C - ( void ) simulateAlongNewRouteToDestinations : ( nonnull NSArray < GMSNavigationWaypoint > ) destinations routingOptions : ( nonnull GMSNavigationRoutingOptions ) routingOptions callback : ( nonnull GMSRouteStatusCallback ) callback ; Parameters destinations The list of destinations for the route that will be simulated. routingOptions The routing logic that will determine the returned route. callback A block that will be called when the route becomes available or fails. -simulateLocationAtCoordinate: Starts simulating the device location at a fixed coordinate.
- Declaration Swift func simulateAlongNewRoute ( toDestinations destinations : [ GMSNavigationWaypoint ], callback : @escaping GMSRouteStatusCallback ) Objective-C - ( void ) simulateAlongNewRouteToDestinations : ( nonnull NSArray < GMSNavigationWaypoint > ) destinations callback : ( nonnull GMSRouteStatusCallback ) callback ; Parameters destinations The list of destinations for the route that will be simulated. callback A block that will be called when the route becomes available or fails. -simulateAlongNewRouteToDestinations:routingOptions:callback: Calculates a route to the given waypoints, and simulates travel along this route.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The GMSLocationSimulator class simulates device locations for testing.
- GMSLocationSimulator @interface GMSLocationSimulator : NSObject A class you can use to simulate a device location for testing purposes. -init Unavailable Declaration Objective-C - ( instancetype ) init NS UNAVAILABLE ; -simulateLocationsAlongExistingRoute Starts simulating travel along the route currently set on the GMSNavigator .

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift class GMSNavigationMutableWaypoint : GMSNavigationWaypoint Objective-C @interface GMSNavigationMutableWaypoint : GMSNavigationWaypoint GMSNavigator This is the main class of the Google Navigation SDK for iOS and provides methods for controlling navigation to a destination and accessing route and progress information.
- Declaration Swift class GMSNavigationLicensePlateRestriction : NSObject Objective-C @interface GMSNavigationLicensePlateRestriction : NSObject GMSNavigationNavInfo Contains information about the state of navigation Declaration Swift class GMSNavigationNavInfo : NSObject Objective-C @interface GMSNavigationNavInfo : NSObject GMSNavigationRouteInfo An immutable class that encapsulates ETA and distance information for both the default best route, and the shortest route, to a specific waypoint.
- Declaration Swift class GMSNavigationStepInfo : NSObject Objective-C @interface GMSNavigationStepInfo : NSObject GMSNavigationStepInfoImageOptions Declaration Swift class GMSNavigationStepInfoImageOptions : NSObject Objective-C @interface GMSNavigationStepInfoImageOptions : NSObject / The object which provides screen metrics for the screen the image will be displayed on.
- Declaration Swift class GMSNavigationTermsDialogUIParams : NSObject Objective-C @interface GMSNavigationTermsDialogUIParams : NSObject GMSNavigationTimeAndDistance An immutable class that encapsulates the distance remaining and the ETA for a route.

