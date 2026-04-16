---
title: "Plan a route \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route
  title: "Plan a route \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Navigation SDK for Android
Send feedback
Plan a route
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Plan routes in advance and guide navigation using route tokens from Routes, Routes Preferred, or Route Optimization APIs.
Route tokens allow for specifying objectives like minimizing delivery time, fuel consumption, or travel costs, enhancing route control.
While the Navigation SDK attempts to follow the planned route, real-time conditions may cause deviations, prioritizing objectives over the exact path.
Request new route tokens for each trip as they are specific to origin, destination, and time, ensuring up-to-date navigation.
Route tokens streamline route planning, providing estimations and allowing for advanced objectives like eco-routing while adapting to dynamic conditions.
At times, you might want to plan the route your app provides to users. Using a
route token from the Routes API,
Routes Preferred API, or Route Optimization API can
help you specify two things for your planned route:
A polyline for the route
Your route objectives
For example, here are some examples of routing objectives you may have:
Minimize time to delivery : A business delivering food might want to
minimize the time it takes to deliver the food.
Minimize travel time or fuel consumption : A logistics business might
want to improve the efficiency of their drivers and reduce their fuel costs.
Minimize time to destination : A service dispatch operation might want to
minimize the time it takes to get operators to a job request.
Lower costs and improve safety : A ride-sharing business might want to
find a route that costs less for riders and avoids certain areas for safety
reasons.
Important: The actual route traveled may vary from the planned route provided by
the token. Changing traffic, road conditions, or the vehicle deviating from the
given route can result in route changes. As changes occur, the
Navigation SDK continually attempts to return to the planned route, or
if returning is impractical, follows the route objectives in the route token.
For more information about planning a route using a route token, see Request a
route token in
Routes API and Transition Polylines and Route
Tokens in
Route Optimization API.
Why use a route token for route objectives
With a route token from the Routes API,
Routes Preferred API, or Route Optimization API, you
have more control over the route provided:
Plan a route in advance for the Navigation SDK to use when
possible.
Choose the best route for the Navigation SDK to use . If you
request route tokens when generating routes in the Routes API,
you get a route token for each generated route. You can then choose the
token for the route you want to use when you pass it to the
Navigation SDK.
Estimate the price in advance , including estimations for ETA and
distance. While the actual cost and time might vary, this estimation reduces
the gap between expected and actual route cost.
Specify more advanced route objectives , such as eco routing or the
shortest route.
Tip: A route token is for one specific origin and destination and at a
particular time. You must make a new Routes API,
Routes Preferred API, or Route Optimization API
request for a new route token.
How route tokens work
You can use the Routes API, Routes Preferred API, or
Route Optimization API to plan a route using route objectives. You
can pass a route token returned from any of these APIs to the
Navigation SDK to guide how it routes your vehicle.
Here's what happens when you request and use a route token:
The Routes API, Routes Preferred API, or
Route Optimization API returns an encrypted route token that
includes the route polyline and route objectives.
You pass the route token to the Navigation SDK.
The Navigation SDK retrieves the route, or if the route is not
available due to changing conditions, it retrieves the best matching route.
While driving the route, if traffic or other road conditions change, or if a
vehicle deviates from the planned route, the modified routes continually
attempt to match the best route based on the route objectives in the token.
This process maximizes how close the actual route is to your planned route.
Why a planned route may not be followed exactly
Think of your planned route and route objectives as guidelines to follow: they
are not prescriptive. You might see a difference between your planned route and
the route provided by guided navigation due to differences in the road
conditions, starting location, or other parameters that have changed since you
created the planned route. This difference might result in a mismatch between
your planned and actual goals for distance and ETA, among other important trip
qualities.
Tip: As a best practice, always request a new route token every time you set the
destination in the Navigation SDK, and plan for some variation to
avoid any impact to your business.
Plan a route using a route token
You can plan a route by creating a route token and then passing it to the
Navigation SDK, as described in the following steps:
Step 1: Create a route token using the Routes API, Routes Preferred API, or Route Optimization API
Request a route token with one of the following methods:
Routes API : computeRoutes . For more information
about requesting a route token in the Routes API, see
Compute a route
and Request a route
token .
Routes Preferred API : computeCustomRoutes . For more
information about requesting a route token in the
Routes Preferred API, see Plan a
route .
Route Optimization API : optimizeTours or
batchOptimizeTours . For more information about requesting a route
token in the Route Optimization API, see Transition Polylines and Route
Tokens .
Set up your Routes API or Routes Preferred API
request to meet the requirements for using a route token:
Set travel_mode to DRIVE or TWO_WHEELER
Set routing_preference to TRAFFIC_AWARE or TRAFFIC_AWARE_OPTIMAL
Do NOT use Via waypoints
Step 2: Pass the route token to the Navigation SDK
Store the route token : In the Navigation SDK, set up a string
to store the route token. For example:
String routeToken = "route token returned by Routes API" ;
Example of a returned route token:
{
// Other fields
"routeToken" : "CqMBCjoKCJQOor5DHcwiEhBon3XpHXFnVvDeWMwd9PpAGgz6wtnFDKIBrAHTARpCApUDSggAAAAACjcrP3gBEAQaTApKChgKDQoCCAERAAAAAACAZkAR3SQGgZUXdUASEggAEAMQBhATEBIYAkIEGgIIBSIYChZ2VEJiWlBPSkk1aU5wUVRzNTV5d0FRKAEiFQBcJuds-Efh-2QZhOMTtUCCxEVL_g" ,
}
Pass the route token to the Navigation SDK using the
Navigator.setDestinations method, specifying the same destination
waypoints that you used when creating the route token:
setDestinations ( List destinations , CustomRoutesOptions customRoutesOptions , DisplayOptions displayOptions );
For example:
CustomRoutesOptions customRoutesOptions =
CustomRoutesOptions . builder ()
. setRouteToken ( routeToken )
. setTravelMode ( TravelMode . DRIVING )
. build ();
Note: If you need to travel the same route again, request a new route token.
The Navigator.setDestinations method returns the status of the request. If
it finds a route from the vehicle's location to the given destination,
it returns RouteStatus.OK .
For more information about this method, see
Navigator.setDestinations .
Example
The following code example demonstrates how to specify a planned route using a
route token.
ArrayList < Waypoint > destinations = Lists . newArrayList ();
Waypoint waypoint1 =
Waypoint . builder ()
. setLatLng ( 10 , 20 )
. setTitle ( "title" )
. setVehicleStopover ( true )
. build ();
destinations . add ( waypoint1 );
Waypoint waypoint2 =
Waypoint . builder ()
. setPlaceId ( "ChIJYV-J-ziuEmsRIMyoFaMedU4" )
. setTitle ( "title" )
. setVehicleStopover ( true )
. build ()
destinations . add ( waypoint2 );
String routeToken = "route token returned by Routes API" ;
CustomRoutesOptions customRoutesOptions =
CustomRoutesOptions . builder ()
. setRouteToken ( routeToken )
. setTravelMode ( TravelMode . DRIVING )
. build ();
// Existing flow to get a Navigator.
NavigationApi . getNavigator (...);
// Existing flow for requesting routes.
ListenableResultFuture<RouteStatus> routeStatusFuture =
navigator . setDestinations ( destinations , customRoutesOptions );
// Or with display options.
DisplayOptions displayOptions = new DisplayOptions ();
ListenableResultFuture<RouteStatus> routeStatusFuture =
navigator . setDestinations ( destinations , customRoutesOptions , displayOptions );
Note: You can configure a maximum of 25 waypoints.
How route tokens and the Navigation SDK interact
Here's how the route generated by the Navigation SDK and the planned
route in the route token interact:
Overrides any previously-set destinations.
Uses the vehicle starting location.
Adjusts for road and traffic conditions. See
Why a planned route might not be followed exactly .
Ignores the following routing-related options as unneeded:
avoidsHighways
avoidsTolls
avoidsFerries
licensePlateRestriction
Follows :
Waypoint-related options , such as the side-of-road preference.
Route objectives . If the Navigation SDK has to
adjust the returned route, it uses the route objectives you specified when
requesting the route token. For this reason, you should use the same
waypoint-related options that you specified in Routes API.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
