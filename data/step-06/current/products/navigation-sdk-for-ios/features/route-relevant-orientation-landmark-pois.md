---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.309Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Route-relevant orientation landmark POIs"
feature_slug: "route-relevant-orientation-landmark-pois"
latest_feature_date: "2025-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/route"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference"
keywords:
  - "route"
  - "relevant"
  - "orientation"
  - "landmark"
  - "pois"
  - "prominent"
  - "are"
  - "displayed"
---

# Route-relevant orientation landmark POIs

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Prominent landmark POIs are displayed along routes and near key intersections to help users orient themselves.

## Extended Definition

Prominent landmark POIs are displayed along routes and near key intersections to help users orient themselves.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/route](https://developers.google.com/maps/documentation/navigation/ios-sdk/route)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info](https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations](https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)

## Supporting Pages

### Navigate a route \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/route](https://developers.google.com/maps/documentation/navigation/ios-sdk/route)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- OK else { print ( "Handle route statuses that are not OK." ) return } self . mapView . navigator ? . isGuidanceActive = true self . mapView . locationSimulator ? . simulateLocationsAlongExistingRoute () self . mapView . cameraMode = . following } } // Add a button to the view . func makeButton () { // A button to start navigation . let navButton = UIButton ( frame : CGRect ( x : 5 , y : 150 , width : 200 , height : 35 )) navButton . backgroundColor = . blue navButton . alpha = 0.5 navButton . setTitle ( "Start navigation" , for : . normal ) navButton . addTarget ( self , action : #selector(startNav), for: .touchUpInside) self . mapView . addSubview ( navButton ) } } Show/Hide the Objective-C code for the navigation view controller. / Copyright 2017 Google Inc.
- UNUserNotificationCenter center = [ UNUserNotificationCenter currentNotificationCenter ]; UNAuthorizationOptions options = UNAuthorizationOptionAlert ; [ center requestAuthorizationWithOptions : options completionHandler : ^ ( BOOL granted , NSError Nullable error ) { if ( ! error && granted ) { NSLog ( @"iOS Notification Permission: newly Granted" ); } else { NSLog ( @"iOS Notification Permission: Failed or Denied" ); } }]; } else { // Handle rejection of the terms and conditions. } }]; self . view = mapView ; [ self makeButton ]; } // Create a route and initiate navigation. - ( void ) startNav { NSArray<GMSNavigationWaypoint > destinations = @[ [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJnUYTpNASkFQR gSty5kyoUk" title : @"PCC Natural Market" ], [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJJ326ROcSkFQRBfUzOL2DSbo" title : @"Marina Park" ] ] ; [ mapView . navigator setDestinations : destinations callback : ^ ( GMSRouteStatus routeStatus ){ [ mapView . locationSimulator simulateLocationsAlongExistingRoute ]; mapView . navigator . guidanceActive = YES ; mapView . navigator . sendsBackgroundNotifications = YES ; mapView . cameraMode = GMSNavigationCameraModeFollowing ; }]; } // Add a button to the view. - ( void ) makeButton { // A button to start navigation.
- Swift func startNav () { var destinations = GMSNavigationWaypoint destinations . append ( GMSNavigationWaypoint . init ( placeID : "ChIJnUYTpNASkFQR gSty5kyoUk" , title : "PCC Natural Market" ) ! ) mapView . navigator ?. setDestinations ( destinations ) { routeStatus in self . mapView . navigator ?. isGuidanceActive = true self . mapView . locationSimulator ?. simulateLocationsAlongExistingRoute () self . mapView . cameraMode = . following } } Objective-C - ( void ) startNav { NSArray<GMSNavigationWaypoint > destinations = @[ [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJnUYTpNASkFQR gSty5kyoUk" title : @"PCC Natural Market" ], [ mapView . navigator setDestinations : destinations callback : ^ ( GMSRouteStatus routeStatus ){ [ mapView . locationSimulator simulateLocationsAlongExistingRoute ]; mapView . navigator . guidanceActive = YES ; mapView . cameraMode = GMSNavigationCameraModeFollowing ; }]; } To learn about Place IDs please refer to Place IDs .
- UNUserNotificationCenter . current () . requestAuthorization ( options : [ . alert ]) { granted , error in // Handle denied authorization to display notifications . if ! granted error != nil { print ( "User rejected request to display notifications." ) } } } else { // Handle rejection of terms and conditions . } } view = mapView makeButton () } // Create a route and start guidance . func startNav () { var destinations = GMSNavigationWaypoint destinations . append ( GMSNavigationWaypoint . init ( placeID : "ChIJnUYTpNASkFQR gSty5kyoUk" , title : "PCC Natural Market" ) ! ) destinations . append ( GMSNavigationWaypoint . init ( placeID : "ChIJJ326ROcSkFQRBfUzOL2DSbo" , title : "Marina Park" ) ! ) mapView . navigator ? . setDestinations ( destinations ) { routeStatus in guard routeStatus == .

### Get route information \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info](https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- OK else { print ( "Handle route statuses that are not OK." ) return } self . mapView . navigator ? . isGuidanceActive = true self . mapView . cameraMode = . following self . mapView . locationSimulator ? . simulateLocationsAlongExistingRoute () } mapView . roadSnappedLocationProvider ? . startUpdatingLocation () } func getTimeToNextDestination () { if let navigator = mapView . navigator { let time = navigator . timeToNextDestination let minutes = floor ( time / 60 ) let seconds = round ( time - minutes 60 ) print ( "Time to next destination: \(minutes):\(seconds)" ) } } func getDistanceToNextDestination () { if let navigator = mapView . navigator { let distance = navigator . distanceToNextDestination let miles = distance 0.00062137 print ( "Distance to next destination: \(miles) miles." ) } } func getCurrentRouteLeg () { if let navigator = mapView . navigator { let currentLeg = navigator . currentRouteLeg let nextDestination = currentLeg ? . destinationWaypoint ? . title ?? "Not Available" let lat = currentLeg ? . destinationCoordinate . latitude . description ?? "Not Available" let lng = currentLeg ? . destinationCoordinate . longitude . description ?? "Not Available" print ( "Destination: \(nextDestination) at (\(lat),\(lng)" ) } } func getTraveledPath () { if let navigator = mapView . navigator { let latestPath = navigator . traveledPath if latestPath . count () > 0 { let begin : CLLocationCoordinate2D = latestPath . coordinate ( at : 0 ) let current : CLLocationCoordinate2D = latestPath . coordinate ( at : latestPath . count () - 1 ) print ( "Path from (\(begin.latitude),\(begin.longitude)) to (\(current.latitude),\(current.longitude))" ) } } } // Add some buttons to the view . func makeButtons () { // Start navigation . let navButton = UIButton ( frame : CGRect ( x : 5 , y : 150 , width : 200 , height : 35 )) navButton . backgroundColor = . blue navButton . alpha = 0.5 navButton . setTitle ( "Start navigation" , for : . normal ) navButton . addTarget ( self , action : #selector(startNav), for: .touchUpInside) self . mapView . addSubview ( navButton ) // Get the time to the next destination . let timeButton = UIButton ( frame : CGRect ( x : 5 , y : 190 , width : 200 , height : 35 )) timeButton . backgroundColor = . blue timeButton . alpha = 0.5 timeButton . setTitle ( "Time to next destination" , for : . normal ) timeButton . addTarget ( self , action : #selector(getTimeToNextDestination), for: .touchUpInside) self . mapView . addSubview ( timeButton ) // Get the distance to the next destination . let distanceButton = UIButton ( frame : CGRect ( x : 5 , y : 230 , width : 200 , height : 35 )) distanceButton . backgroundColor = . blue distanceButton . alpha = 0.5 distanceButton . setTitle ( "Distance to next destination" , for : . normal ) distanceButton . addTarget ( self , action : #selector(getDistanceToNextDestination), for: .touchUpInside) self . mapView . addSubview ( distanceButton ) // Get the current route leg . let routeButton = UIButton ( frame : CGRect ( x : 5 , y : 270 , width : 200 , height : 35 )) routeButton . backgroundColor = . blue routeButton . alpha = 0.5 routeButton . setTitle ( "Get current route leg" , for : . normal ) routeButton . addTarget ( self , action : #selector(getCurrentRouteLeg), for: .touchUpInside) self . mapView . addSubview ( routeButton ) // Get the most recently traveled path . let pathButton = UIButton ( frame : CGRect ( x : 5 , y : 310 , width : 200 , height : 35 )) pathButton . backgroundColor = . blue pathButton . alpha = 0.5 pathButton . setTitle ( "Get traveled path" , for : . normal ) pathButton . addTarget ( self , action : #selector(getTraveledPath), for: .touchUpInside) self . mapView . addSubview ( pathButton ) } } Show/Hide the Objective-C code to get route information. / Copyright 2017 Google Inc.
- NSString companyName = @"Ride Sharing Co." ; [ GMSNavigationServices showTermsAndConditionsDialogIfNeededWithCompanyName : companyName callback : ^ ( BOOL termsAccepted ) { if ( termsAccepted ) { // Enable navigation if the user accepts the terms. mapView . navigationEnabled = YES ; // Request authorization to use location services. [ locationManager requestAlwaysAuthorization ]; } else { // Handle the case when the user rejects the terms and conditions. } }]; self . view = mapView ; [ self makeButtons ]; } // Create a route and start guidance. - ( void ) startNav { NSArray<GMSNavigationWaypoint > destinations = @[ [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJnUYTpNASkFQR gSty5kyoUk" title : @"PCC Natural Market" ], [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJJ326ROcSkFQRBfUzOL2DSbo" title : @"Marina Park" ] ] ; [ mapView . navigator setDestinations : destinations callback : ^ ( GMSRouteStatus routeStatus ){ mapView . navigator . guidanceActive = YES ; mapView . cameraMode = GMSNavigationCameraModeFollowing ; [ mapView . locationSimulator simulateLocationsAlongExistingRoute ]; }]; [ mapView . roadSnappedLocationProvider startUpdatingLocation ]; } - ( void ) getTimeToNextDestination { NSTimeInterval time = mapView . navigator . timeToNextDestination ; int minutes = floor ( time / 60 ); int seconds = round ( time - minutes 60 ); NSLog ( @"%@" , [ NSString stringWithFormat : @"Time to next destination: %i:%i." , minutes , seconds ]); } - ( void ) getDistanceToNextDestination { CLLocationDistance distance = mapView . navigator . distanceToNextDestination ; double miles = distance 0.00062137 ; NSLog ( @"%@" , [ NSString stringWithFormat : @"Distance to next destination: %.2f." , miles ]); } - ( void ) getCurrentRouteLeg { GMSRouteLeg currentSegment = mapView . navigator . currentRouteLeg ; NSString nextDestination = currentSegment . destinationWaypoint . title ; CLLocationDegrees lat = currentSegment . destinationCoordinate . latitude ; CLLocationDegrees lng = currentSegment . destinationCoordinate . longitude ; NSLog ( @"%@" , [ NSString stringWithFormat : @"%@, %f/%f" , nextDestination , lat , lng ]); } - ( void ) getTraveledPath { GMSPath latestPath = mapView . navigator . traveledPath ; if ( latestPath . count > 0 ) { CLLocationCoordinate2D begin = [ latestPath coordinateAtIndex : 0 ]; CLLocationCoordinate2D current = [ latestPath coordinateAtIndex : latestPath . count - 1 ]; NSLog ( @"Path from %f/%f to %f/%f" , begin . latitude , begin . longitude , current . latitude , current . longitude ); } } #pragma mark - Buttons and things // Add some buttons to the view. - ( void ) makeButtons { // Start navigation.
- See the License for the specific language governing permissions and limitations under the License . / import GoogleNavigation import UIKit class ViewController : UIViewController { var mapView : GMSMapView ! var locationManager : CLLocationManager ! override func loadView () { locationManager = CLLocationManager () let camera = GMSCameraPosition . camera ( withLatitude : 47.67 , longitude : - 122.20 , zoom : 14 ) mapView = GMSMapView . map ( withFrame : CGRect . zero , camera : camera ) // Show the terms and conditions . let companyName = "Ride Sharing Co." GMSNavigationServices . showTermsAndConditionsDialogIfNeeded ( withCompanyName : companyName ) { termsAccepted in guard termsAccepted else { // Handle the case when the user rejects the terms and conditions . return } // Enable navigation after the user accepts the terms . self . mapView . isNavigationEnabled = true // Request authorization to use location services . self . locationManager . requestAlwaysAuthorization () } self . view = mapView makeButtons () } // Create a route and start guidance . func startNav () { var destinations = GMSNavigationWaypoint destinations . append ( GMSNavigationWaypoint . init ( placeID : "ChIJnUYTpNASkFQR gSty5kyoUk" , title : "PCC Natural Market" ) ! ) destinations . append ( GMSNavigationWaypoint . init ( placeID : "ChIJJ326ROcSkFQRBfUzOL2DSbo" , title : "Marina Park" ) ! ) mapView . navigator ? . setDestinations ( destinations ) { routeStatus in guard routeStatus == .
- The following example shows evaluating the result and logging a traffic message: Swift if let navigator = mapView . navigator { // insert sample for evaluating traffic value let delay = navigator . delayCategoryToNextDestination let traffic = "unavailable" switch delay { case . noData : traffic = "unavailable" case . heavy : traffic = "heavy" case . medium : traffic = "moderate" case . light : traffic = "light" default : traffic = "unavailable" } print ( "Traffic is \( traffic ) ." ) } Objective-C GMSNavigationDelayCategory delay = mapView . navigator . delayCategoryToNextDestination ; NSString traffic = @"" ; switch ( delayCategory ) { case GMSNavigationDelayCategoryNoData : traffic = @"No Data" ; break ; case GMSNavigationDelayCategoryHeavy : traffic = @"Heavy" ; break ; case GMSNavigationDelayCategoryMedium : traffic = @"Medium" ; break ; case GMSNavigationDelayCategoryLight : traffic = @"Light" ; break ; default : NSLog ( @"Invalid delay category: %zd" , delayCategory ); } NSLog ( @"%@" , [ NSString stringWithFormat : @"Traffic is %@." , traffic ]); Getting information about the current leg To get information about the current route leg, call currentRouteLeg .

### Plan a route \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations](https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Using a route token from the Routes API, Routes Preferred API, or Route Optimization API can help you specify two things for your planned route: A polyline for the route Your route objectives For example, here are some examples of routing objectives you may have: Minimize time to delivery : A business delivering food might want to minimize the time it takes to deliver the food.
- Set up your Routes API or Routes Preferred API request to meet the requirements for using a route token: Set travel mode to DRIVE or TWO WHEELER Set routing preference to TRAFFIC AWARE or TRAFFIC AWARE OPTIMAL Do NOT use Via waypoints Step 2: Pass the route token to the Navigation SDK Store the route token : In the Navigation SDK, set up a string to store the route token.
- Lower costs and improve safety : A ride-sharing business might want to find a route that costs less for riders and avoids certain areas for safety reasons.
- Why a planned route may not be followed exactly Think of your planned route and route objectives as guidelines to follow: they are not prescriptive.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift class GMSNavigationLicensePlateRestriction : NSObject Objective-C @interface GMSNavigationLicensePlateRestriction : NSObject GMSNavigationNavInfo Contains information about the state of navigation Declaration Swift class GMSNavigationNavInfo : NSObject Objective-C @interface GMSNavigationNavInfo : NSObject GMSNavigationRouteInfo An immutable class that encapsulates ETA and distance information for both the default best route, and the shortest route, to a specific waypoint.
- Declaration Swift class GMSNavigationStepInfo : NSObject Objective-C @interface GMSNavigationStepInfo : NSObject GMSNavigationStepInfoImageOptions Declaration Swift class GMSNavigationStepInfoImageOptions : NSObject Objective-C @interface GMSNavigationStepInfoImageOptions : NSObject / The object which provides screen metrics for the screen the image will be displayed on.
- Declaration Swift class GMSNavigationMutableWaypoint : GMSNavigationWaypoint Objective-C @interface GMSNavigationMutableWaypoint : GMSNavigationWaypoint GMSNavigator This is the main class of the Google Navigation SDK for iOS and provides methods for controlling navigation to a destination and accessing route and progress information.
- Declaration Swift class GMSRoadSnappedLocationProvider : NSObject Objective-C @interface GMSRoadSnappedLocationProvider : NSObject GMSRouteLeg An immutable class which represents a single leg of a journey, either from the device’s current position to the first destination, or from one destination to a subsequent destination.

