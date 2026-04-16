---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.302Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Enhanced location context for waypoints"
feature_slug: "enhanced-location-context-for-waypoints"
latest_feature_date: "2026-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
keywords:
  - "enhanced"
  - "location"
  - "context"
  - "for"
  - "waypoints"
  - "gmsnavigationwaypoint"
  - "can"
  - "specify"
---

# Enhanced location context for waypoints

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

GMSNavigationWaypoint can specify a location with a Place ID or a navigationPointToken to improve routing accuracy and arrival handling.

## Extended Definition

GMSNavigationWaypoint can specify a location with a Place ID or a navigationPointToken to improve routing accuracy and arrival handling.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations](https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints](https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)

## Supporting Pages

### "Route to Navigation points \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Navigation SDK for iOS offers enhanced ways to specify waypoints, providing more accurate routing and a better arrival experience, especially for destinations with multiple entrances or specific access points.
- You can route to precise locations using a navigationPointToken or by combining location coordinates with a Place ID for added context.
- Summary of Valid Waypoint Configurations Specification location placeID navigationPointToken Routing behavior Destination highlighting Location coordinates only set absent absent Routes to road segment nearest to the defined coordinates Shown if destination can be inferred with high confidence Place ID only absent set absent Routes to the default navigation point for the Place ID From Place ID Navigation point token only absent absent set Routes to the precise navigation point represented by the token From destination defined in original destinations method of the Geocoding API request Location coordinates and Place ID combined se set absent Routes to road segment nearest to the defined coordinates From Place ID, though not shown if Place ID is too far from the latitude/longitude coordinates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Swift // Create a waypoint using a navigation endpoint token let waypointTwo = GMSNavigationWaypoint ( navigationPointToken : "ChIJALijSXPhQkARHmIozCCbXsASEgkFVjYHGH6PgBFrbM7wl3.." title : "Sydney Opera House" ) // Route to the waypoint navigator . setDestinations ([ waypointTwo ]) { [ weak self ] routeStatus in self ?. handleRouteCallback ( status : routeStatus ) } Objective-C GMSNavigationWaypoint waypointTwo = [[ GMSNavigationWaypoint alloc ] initWithNavigationPointToek : @"sampleNavigationPointToken" Combine Place ID and Location Starting with v10.10, you can provide both a Place ID and location coordinates when creating a waypoint.

### Plan a route \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations](https://developers.google.com/maps/documentation/navigation/ios-sdk/route-customizations)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: let routeToken = "route token returned by Routes API" Example of a returned route token: { // Other fields "routeToken" : "CqMBCjoKCJQOor5DHcwiEhBon3XpHXFnVvDeWMwd9PpAGgz6wtnFDKIBrAHTARpCApUDSggAAAAACjcrP3gBEAQaTApKChgKDQoCCAERAAAAAACAZkAR3SQGgZUXdUASEggAEAMQBhATEBIYAkIEGgIIBSIYChZ2VEJiWlBPSkk1aU5wUVRzNTV5d0FRKAEiFQBcJuds-Efh-2QZhOMTtUCCxEVL g" , } Pass the route token to the Navigation SDK using the mapView.navigator setDestinations method, specifying the same destination waypoints that you used when creating the route token: mapView . navigator ?. continueToNextDestination ([ waypoint1 , waypoint2 ], routeToken : routeToken , callback : {...}) Note: If you need to travel the same route again, request a new route token.
- Using a route token from the Routes API, Routes Preferred API, or Route Optimization API can help you specify two things for your planned route: A polyline for the route Your route objectives For example, here are some examples of routing objectives you may have: Minimize time to delivery : A business delivering food might want to minimize the time it takes to deliver the food.
- Swift let location = CLLocationCoordinate2D ( latitude : 47.67 , longitude : - 122.20 ) let waypoint1 = GMSNavigationWaypoint ( location : location , title : "waypoint from location" ) ! let waypoint2 = GMSNavigationWaypoint ( placeID : "samplePlaceID" , title : "waypoint from Place ID" ) ! let routeToken = "route token returned by Routes API" mapView . navigator ?. setDestinations ([ waypoint1 , waypoint2 ], routeToken : routeToken , callback : {...}) Objective-C CLLocationCoordinate2D location = CLLocationCoordinate2DMake ( 47.67 , -122.20 ); GMSNavigationWaypoint waypoint1 = [[ GMSNavigationWaypoint alloc ] initWithLocation : coordinate title : @"waypoint from location" ]; GMSNavigationWaypoint waypoint2 = [[ GMSNavigationWaypoint alloc ] initWithPlaceID : @"samplePlaceID" title : @"waypoint from Place ID" ]; NSString routeToken = @"route token returned by Routes API" ; [ mapView . navigator continueToNextDestination : @[ waypoint1 , waypoint2 ] routeToken : routeToken callback : ^ ( GMSRouteStatus routeStatus ){...}]; How route tokens and the Navigation SDK interact Here's how the route generated by the Navigation SDK and the planned route in the route token interact: Overrides any previously-set destinations.
- Set up your Routes API or Routes Preferred API request to meet the requirements for using a route token: Set travel mode to DRIVE or TWO WHEELER Set routing preference to TRAFFIC AWARE or TRAFFIC AWARE OPTIMAL Do NOT use Via waypoints Step 2: Pass the route token to the Navigation SDK Store the route token : In the Navigation SDK, set up a string to store the route token.

### Manage waypoints \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints](https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To do this, set the preference for a stopover on a GMSNavigationMutableWaypoint as shown in the following example: Swift let location = CLLocationCoordinate2D ( latitude : 47.67 , longitude : - 122.20 ) let waypoint = GMSNavigationMutableWaypoint ( location : location , title : "waypoint from location" ) ! waypoint . vehicleStopover = true mapView . navigator ?. setDestinations ([ waypoint ], routingOptions : routingOptions , callback : {...}) Objective-C CLLocationCoordinate2D location = CLLocationCoordinate2DMake ( 47.67 , -122.20 ); GMSNavigationMutableWaypoint waypoint = [[ GMSNavigationMutableWaypoint alloc ] initWithLocation : location title : @"waypoint from location" ]; waypoint . vehicleStopover = YES ; [ mapView . navigator setDestinations : @[ waypoint1 ] routingOptions : routingOptions callback : ^ ( GMSRouteStatus routeStatus ){...}]; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This document describes how you can manage waypoint preferences for your app by using two features: Side of the road routing preferences Stopover Set side of the road routing preference By default, the Navigation SDK for iOS finds the quickest route to a waypoint, however this doesn't guarantee that the user will arrive on the desired side of the road, for example, the side of the road that a rideshare driver's customer is waiting on.
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Manage waypoints Stay organized with collections Save and categorize content based on your preferences.
- Set stopover preference In certain places, it's not possible for users to stop safely (for example, elevated areas, ferries, underground locations, and other areas of limited access).

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can specify that the current speed displays with a red text color when the driver exceeds the speed limit by 5 mph, and with a red background color when the driver exceeds the speed limit by 10 mph.
- Traffic lights and stop signs You can enable the display of traffic lights and stop signs during active navigation in the mapView , which provides additional context for routes and trip maneuvers.
- Page Summary outlined flag Developers can customize the appearance and visibility of UI elements like compass, location button, and recenter button within the Google Maps SDK for iOS.
- You can toggle the visibility of the navigation header and footer and set its colors programmatically using the following properties: navigationHeaderEnabled — controls whether the navigation header is visible (default is true ). navigationFooterEnabled — controls whether the navigation footer is visible (default is true ). navigationHeaderPrimaryBackgroundColor — sets the primary background color for the navigation header. navigationHeaderSecondaryBackgroundColor — sets the secondary background color for the navigation header.

