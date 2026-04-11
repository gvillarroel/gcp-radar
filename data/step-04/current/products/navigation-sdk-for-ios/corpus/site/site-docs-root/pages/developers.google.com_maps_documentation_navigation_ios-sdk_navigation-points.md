---
title: "Route to Navigation points \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/navigation-points
  title: "Route to Navigation points \_|\_ Navigation SDK for iOS \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
iOS
Navigation SDK for iOS
Send feedback
Route to Navigation points
Stay organized with collections
Save and categorize content based on your preferences.
The Navigation SDK for iOS offers enhanced ways to specify waypoints, providing
more accurate routing and a better arrival experience, especially for
destinations with multiple entrances or specific access points. You can route to
precise locations using a navigationPointToken or by combining location
coordinates with a Place ID for added context.
The destination highlighting feature will continue to be performed if
applicable.
Background
Prior to v10.10, you could define a Waypoint using either location coordinates
or a Place ID. While sometimes effective, routing solely to a
latitude and longitude can sometimes lead to suboptimal drop-off or pick-up
points, particularly for large venues, parks, or buildings with multiple
entrances. The result might snap to the nearest road segment, which may not be
the most convenient or correct access point.
The enhanced waypoint options address this by allowing you to provide more
context.
Use a Navigation Point token
For the most precise routing to specific access points like entrances, loading
docks, or designated pick-up areas, you can use a navigationPointToken .
This token is obtained by calling the Destinations method of the Geocoding
API . It represents a
specific, routable navigation point associated with a place.
To specify a Navigation Point token:
Obtain a navigationPointToken from the Destinations method of the Geocoding API response.
Specify that navigationPointToken when you create a GMSNavigationWaypoint .
Note: You cannot simultaneously specify a Navigation point token along with
a location and PlaceID.
Swift
// Create a waypoint using a navigation endpoint token
let waypointTwo = GMSNavigationWaypoint (
navigationPointToken : "ChIJALijSXPhQkARHmIozCCbXsASEgkFVjYHGH6PgBFrbM7wl3.."
title : "Sydney Opera House" )
// Route to the waypoint
navigator . setDestinations ([ waypointTwo ]) { [ weak self ] routeStatus in
self ?. handleRouteCallback ( status : routeStatus )
}
Objective-C
GMSNavigationWaypoint * waypointTwo = [[ GMSNavigationWaypoint alloc ] initWithNavigationPointToek : @"sampleNavigationPointToken"
Combine Place ID and Location
Starting with v10.10, you can provide both a Place ID and location coordinates
when creating a waypoint. This method is useful when you want to specify a
precise point (the location) while still providing the context of the overall
place (the Place ID). This allows the Navigation SDK to provide a richer arrival
experience by highlighting the destination building or showing nearby points of
interest related to the Place ID.
Swift
// Create a waypoint using both the latlng and placeID
let waypoint = GMSNavigationWaypoint (
location : CLLocationCoordinate2DMake ( - 33.85657945261524 , 151.21535034203333 ),
placeID : "ChIJ3S-JXmauEmsRUcIaWtf4MzE" ,
title : "Sydney Opera House" )
// Route to the waypoint
navigator . setDestinations ([ waypoint ]) { [ weak self ] routeStatus in
self ?. handleRouteCallback ( status : routeStatus )
}
Objective-C
CLLocationCoordinate2D location = CLLocationCoordinate2DMake ( 47.67 , -122.20 );
GMSNavigationWaypoint * waypoint = [[ GMSNavigationWaypoint alloc ] initWithLocation : placeID : coordinate title : @"waypoint from location and placeiD" ];
Considerations:
When you provide both placeID and location :
The route primarily targets the specified location .
The placeId is used as context to enhance the arrival experience.
Fallback: If the SDK determines that the provided placeId corresponds
to a feature that is too far from the given location , the placeId will
be ignored. In this scenario, routing will proceed to the location only,
and the place-specific arrival experience enhancements won't be available.
Summary of Valid Waypoint Configurations
Specification
location
placeID
navigationPointToken
Routing behavior
Destination highlighting
Location coordinates only
set
absent
absent
Routes to road segment nearest to the defined coordinates
Shown if destination can be inferred with high confidence
Place ID only
absent
set
absent
Routes to the default navigation point for the Place ID
From Place ID
Navigation point token only
absent
absent
set
Routes to the precise navigation point represented by the token
From destination defined in original destinations method of the Geocoding API request
Location coordinates and Place ID combined
se
set
absent
Routes to road segment nearest to the defined coordinates
From Place ID, though not shown if Place ID is too far from the latitude/longitude coordinates
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-26 UTC."],[],[]]
