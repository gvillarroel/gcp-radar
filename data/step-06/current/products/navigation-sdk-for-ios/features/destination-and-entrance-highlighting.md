---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.309Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Destination and entrance highlighting"
feature_slug: "destination-and-entrance-highlighting"
latest_feature_date: "2025-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info"
keywords:
  - "destination"
  - "and"
  - "entrance"
  - "highlighting"
  - "destinations"
  - "created"
  - "with"
  - "place"
---

# Destination and entrance highlighting

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Destinations created with a place ID now highlight the destination building and show an entrance icon when possible.

## Extended Definition

Destinations created with a place ID now highlight the destination building and show an entrance icon when possible.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations](https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info](https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info)

## Supporting Pages

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Destination highlighting and entrances When a destination is created with a placeID , the destination building will be highlighted and an entrance icon will be shown whenever possible.
- For example, the destinations created in the Navigate a route tutorial include destination highlighting and entrance labels when available.
- Swift let routingOptions = GMSNavigationRoutingOptions ( alternateRoutesStrategy : . none ) navigator ?. setDestinations ( destinations , routingOptions : routingOptions ) { routeStatus in ... } Objective-C GMSNavigationRoutingOptions routingOptions = [[ GMSNavigationRoutingOptions alloc ] initWithAlternateRoutesStrategy : GMSNavigationAlternateRoutesStrategyNone ]; [ navigator setDestinations : destinations routingOptions : routingOptions callback : ^ ( GMSRouteStatus routeStatus ){...}]; Warning: This feature is incompatible with the shortest route routing preference.
- Navigation UI elements such as the header, footer, directions list, and trip progress bar can be customized or replaced with custom views for a tailored navigation experience.

### "Route to Navigation points \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Summary of Valid Waypoint Configurations Specification location placeID navigationPointToken Routing behavior Destination highlighting Location coordinates only set absent absent Routes to road segment nearest to the defined coordinates Shown if destination can be inferred with high confidence Place ID only absent set absent Routes to the default navigation point for the Place ID From Place ID Navigation point token only absent absent set Routes to the precise navigation point represented by the token From destination defined in original destinations method of the Geocoding API request Location coordinates and Place ID combined se set absent Routes to road segment nearest to the defined coordinates From Place ID, though not shown if Place ID is too far from the latitude/longitude coordinates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Swift // Create a waypoint using both the latlng and placeID let waypoint = GMSNavigationWaypoint ( location : CLLocationCoordinate2DMake ( - 33.85657945261524 , 151.21535034203333 ), placeID : "ChIJ3S-JXmauEmsRUcIaWtf4MzE" , title : "Sydney Opera House" ) // Route to the waypoint navigator . setDestinations ([ waypoint ]) { [ weak self ] routeStatus in self ?. handleRouteCallback ( status : routeStatus ) } Objective-C CLLocationCoordinate2D location = CLLocationCoordinate2DMake ( 47.67 , -122.20 ); GMSNavigationWaypoint waypoint = [[ GMSNavigationWaypoint alloc ] initWithLocation : placeID : coordinate title : @"waypoint from location and placeiD" ]; Considerations: When you provide both placeID and location : The route primarily targets the specified location .
- Swift // Create a waypoint using a navigation endpoint token let waypointTwo = GMSNavigationWaypoint ( navigationPointToken : "ChIJALijSXPhQkARHmIozCCbXsASEgkFVjYHGH6PgBFrbM7wl3.." title : "Sydney Opera House" ) // Route to the waypoint navigator . setDestinations ([ waypointTwo ]) { [ weak self ] routeStatus in self ?. handleRouteCallback ( status : routeStatus ) } Objective-C GMSNavigationWaypoint waypointTwo = [[ GMSNavigationWaypoint alloc ] initWithNavigationPointToek : @"sampleNavigationPointToken" Combine Place ID and Location Starting with v10.10, you can provide both a Place ID and location coordinates when creating a waypoint.
- The Navigation SDK for iOS offers enhanced ways to specify waypoints, providing more accurate routing and a better arrival experience, especially for destinations with multiple entrances or specific access points.

### Plan a route \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations](https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Swift let location = CLLocationCoordinate2D ( latitude : 47.67 , longitude : - 122.20 ) let waypoint1 = GMSNavigationWaypoint ( location : location , title : "waypoint from location" ) ! let waypoint2 = GMSNavigationWaypoint ( placeID : "samplePlaceID" , title : "waypoint from Place ID" ) ! let routeToken = "route token returned by Routes API" mapView . navigator ?. setDestinations ([ waypoint1 , waypoint2 ], routeToken : routeToken , callback : {...}) Objective-C CLLocationCoordinate2D location = CLLocationCoordinate2DMake ( 47.67 , -122.20 ); GMSNavigationWaypoint waypoint1 = [[ GMSNavigationWaypoint alloc ] initWithLocation : coordinate title : @"waypoint from location" ]; GMSNavigationWaypoint waypoint2 = [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"samplePlaceID" title : @"waypoint from Place ID" ]; NSString routeToken = @"route token returned by Routes API" ; [ mapView . navigator continueToNextDestination : @[ waypoint1 , waypoint2 ] routeToken : routeToken callback : ^ ( GMSRouteStatus routeStatus ){...}]; How route tokens and the Navigation SDK interact Here's how the route generated by the Navigation SDK and the planned route in the route token interact: Overrides any previously-set destinations.
- For example: let routeToken = "route token returned by Routes API" Example of a returned route token: { // Other fields "routeToken" : "CqMBCjoKCJQOor5DHcwiEhBon3XpHXFnVvDeWMwd9PpAGgz6wtnFDKIBrAHTARpCApUDSggAAAAACjcrP3gBEAQaTApKChgKDQoCCAERAAAAAACAZkAR3SQGgZUXdUASEggAEAMQBhATEBIYAkIEGgIIBSIYChZ2VEJiWlBPSkk1aU5wUVRzNTV5d0FRKAEiFQBcJuds-Efh-2QZhOMTtUCCxEVL g" , } Pass the route token to the Navigation SDK using the mapView.navigator setDestinations method, specifying the same destination waypoints that you used when creating the route token: mapView . navigator ?. continueToNextDestination ([ waypoint1 , waypoint2 ], routeToken : routeToken , callback : {...}) Note: If you need to travel the same route again, request a new route token.
- Plan a route using a route token You can plan a route by creating a route token and then passing it to the Navigation SDK, as described in the following steps: Step 1: Create a route token using the Routes API, Routes Preferred API, or Route Optimization API Request a route token with one of the following methods: Routes API : computeRoutes .
- You might see a difference between your planned route and the route provided by guided navigation due to differences in the road conditions, starting location, or other parameters that have changed since you created the planned route.

### Get route information \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info](https://developers.google.com/maps/documentation/navigation/ios-sdk/get-route-info)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NSString companyName = @"Ride Sharing Co." ; [ GMSNavigationServices showTermsAndConditionsDialogIfNeededWithCompanyName : companyName callback : ^ ( BOOL termsAccepted ) { if ( termsAccepted ) { // Enable navigation if the user accepts the terms. mapView . navigationEnabled = YES ; // Request authorization to use location services. [ locationManager requestAlwaysAuthorization ]; } else { // Handle the case when the user rejects the terms and conditions. } }]; self . view = mapView ; [ self makeButtons ]; } // Create a route and start guidance. - ( void ) startNav { NSArray<GMSNavigationWaypoint > destinations = @[ [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJnUYTpNASkFQR gSty5kyoUk" title : @"PCC Natural Market" ], [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"ChIJJ326ROcSkFQRBfUzOL2DSbo" title : @"Marina Park" ] ] ; [ mapView . navigator setDestinations : destinations callback : ^ ( GMSRouteStatus routeStatus ){ mapView . navigator . guidanceActive = YES ; mapView . cameraMode = GMSNavigationCameraModeFollowing ; [ mapView . locationSimulator simulateLocationsAlongExistingRoute ]; }]; [ mapView . roadSnappedLocationProvider startUpdatingLocation ]; } - ( void ) getTimeToNextDestination { NSTimeInterval time = mapView . navigator . timeToNextDestination ; int minutes = floor ( time / 60 ); int seconds = round ( time - minutes 60 ); NSLog ( @"%@" , [ NSString stringWithFormat : @"Time to next destination: %i:%i." , minutes , seconds ]); } - ( void ) getDistanceToNextDestination { CLLocationDistance distance = mapView . navigator . distanceToNextDestination ; double miles = distance 0.00062137 ; NSLog ( @"%@" , [ NSString stringWithFormat : @"Distance to next destination: %.2f." , miles ]); } - ( void ) getCurrentRouteLeg { GMSRouteLeg currentSegment = mapView . navigator . currentRouteLeg ; NSString nextDestination = currentSegment . destinationWaypoint . title ; CLLocationDegrees lat = currentSegment . destinationCoordinate . latitude ; CLLocationDegrees lng = currentSegment . destinationCoordinate . longitude ; NSLog ( @"%@" , [ NSString stringWithFormat : @"%@, %f/%f" , nextDestination , lat , lng ]); } - ( void ) getTraveledPath { GMSPath latestPath = mapView . navigator . traveledPath ; if ( latestPath . count > 0 ) { CLLocationCoordinate2D begin = [ latestPath coordinateAtIndex : 0 ]; CLLocationCoordinate2D current = [ latestPath coordinateAtIndex : latestPath . count - 1 ]; NSLog ( @"Path from %f/%f to %f/%f" , begin . latitude , begin . longitude , current . latitude , current . longitude ); } } #pragma mark - Buttons and things // Add some buttons to the view. - ( void ) makeButtons { // Start navigation.
- See the License for the specific language governing permissions and limitations under the License . / import GoogleNavigation import UIKit class ViewController : UIViewController { var mapView : GMSMapView ! var locationManager : CLLocationManager ! override func loadView () { locationManager = CLLocationManager () let camera = GMSCameraPosition . camera ( withLatitude : 47.67 , longitude : - 122.20 , zoom : 14 ) mapView = GMSMapView . map ( withFrame : CGRect . zero , camera : camera ) // Show the terms and conditions . let companyName = "Ride Sharing Co." GMSNavigationServices . showTermsAndConditionsDialogIfNeeded ( withCompanyName : companyName ) { termsAccepted in guard termsAccepted else { // Handle the case when the user rejects the terms and conditions . return } // Enable navigation after the user accepts the terms . self . mapView . isNavigationEnabled = true // Request authorization to use location services . self . locationManager . requestAlwaysAuthorization () } self . view = mapView makeButtons () } // Create a route and start guidance . func startNav () { var destinations = GMSNavigationWaypoint destinations . append ( GMSNavigationWaypoint . init ( placeID : "ChIJnUYTpNASkFQR gSty5kyoUk" , title : "PCC Natural Market" ) ! ) destinations . append ( GMSNavigationWaypoint . init ( placeID : "ChIJJ326ROcSkFQRBfUzOL2DSbo" , title : "Marina Park" ) ! ) mapView . navigator ? . setDestinations ( destinations ) { routeStatus in guard routeStatus == .
- The following example shows evaluating the result and logging a traffic message: Swift if let navigator = mapView . navigator { // insert sample for evaluating traffic value let delay = navigator . delayCategoryToNextDestination let traffic = "unavailable" switch delay { case . noData : traffic = "unavailable" case . heavy : traffic = "heavy" case . medium : traffic = "moderate" case . light : traffic = "light" default : traffic = "unavailable" } print ( "Traffic is \( traffic ) ." ) } Objective-C GMSNavigationDelayCategory delay = mapView . navigator . delayCategoryToNextDestination ; NSString traffic = @"" ; switch ( delayCategory ) { case GMSNavigationDelayCategoryNoData : traffic = @"No Data" ; break ; case GMSNavigationDelayCategoryHeavy : traffic = @"Heavy" ; break ; case GMSNavigationDelayCategoryMedium : traffic = @"Medium" ; break ; case GMSNavigationDelayCategoryLight : traffic = @"Light" ; break ; default : NSLog ( @"Invalid delay category: %zd" , delayCategory ); } NSLog ( @"%@" , [ NSString stringWithFormat : @"Traffic is %@." , traffic ]); Getting information about the current leg To get information about the current route leg, call currentRouteLeg .
- The following example shows logging the title and lat/lng coordinates for the next route leg: Swift if let navigator = mapView . navigator { let currentLeg = navigator . currentRouteLeg let nextDestination = currentLeg ?. destinationWaypoint ?. title let lat = currentLeg ?. destinationCoordinate . latitude . description let lng = currentLeg ?. destinationCoordinate . longitude . description NSLog ( nextDestination ! + ", " + lat ! + "/" + lng !) } Objective-C GMSRouteLeg currentSegment = mapView . navigator . currentRouteLeg ; NSString nextDestination = currentSegment . destinationWaypoint . title ; CLLocationDegrees lat = currentSegment . destinationCoordinate . latitude ; CLLocationDegrees lng = currentSegment . destinationCoordinate . longitude ; NSLog ( @"%@" , [ NSString stringWithFormat : @"%@, %f/%f" , nextDestination , lat , lng ]); Getting the most recently traveled path To get the most recently traveled path, call traveledPath .

