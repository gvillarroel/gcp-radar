---
title: "Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/routing-summary
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/routing-summary
  title: "Places SDK for Android \_|\_ Google for Developers"
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
Places SDK for Android
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Calculate routing summary
To use Text Search (New) or Nearby Search (New)
to calculate the travel duration and distance to each place in the response:
Pass the RoutingParameters parameter in the request, using
setOrigin() to specify the latitude and longitude coordinates of the routing
origin. This parameter is required to calculate the duration and distance to each place in the
response.
When building the request object, add .setRoutingSummariesIncluded(true) .
Use Text Search (New)
In the following request, you calculate the travel duration and distance to each
place in the Text Search (New) response:
// Specify the list of fields to return.
final List<Place . Field > placeFields = Arrays . asList ( Place . Field . ID , Place . Field . NAME );
// Define the routing parameters object and pass the routing origin.
RoutingParameters routingParameters = RoutingParameters . builder ()
. setOrigin ( toLatLng ( "-33.8688, 151.1957362" ))
. build ();
// Use the builder to create a SearchByTextRequest object and pass the routing parameters.
// Set setRoutingSummariesIncluded to true.
final SearchByTextRequest searchByTextRequest = SearchByTextRequest . builder ( "Spicy Vegetarian Food in Sydney, Australia" , placeFields )
. setMaxResultCount ( 10 )
. setRoutingParameters ( routingParameters )
. setRoutingSummariesIncluded ( true )
. build ();
// Call PlacesClient.searchByText() to perform the search.
// Define a response handler to process the returned Lists of Place objects, RoutingSummary objects, and Leg objects.
placesClient . searchByText ( searchByTextRequest )
. addOnSuccessListener ( response - > {
List<Place> places = response . getPlaces ();
List<RoutingSummary> routingSummaries = response . getRoutingSummaries ();
List<Leg> legs = routingSummaries . get ( 0 ). getLegs ();
Duration duration = legs . get ( 0 ). getDuration ();
});
The SearchByTextResponse class represents the response from a search request.
You can call SearchByTextResponse.getRoutingSummaries() to return the list of routing summaries.
A SearchByTextResponse object also contains:
A list of Place objects that represent all matching places, with one Place object per matching place.
Each Place object only contains the fields defined by the field list passed in the request.
Note: The response only contains the duration and
distanceMeters to each place. It does not contain the actual route itself. To calculate
the route, use the Routes API, passing to it the origin and location of the destination place.
Use Nearby Search
In this example, you calculate the travel duration and distance to each place in
the Nearby Search response. This example searches for restaurants in Sydney,
Australia and sets the location restriction and the routing origin to the same
latitude and longitude coordinate:
// Specify the list of fields to return.
final List<Place . Field > placeFields = Arrays . asList ( Place . Field . ID , Place . Field . NAME );
// Define the search area as a 500 meter diameter circle in Sydney, Australia.
LatLng center = new LatLng ( - 33.8688 , 151.1957362 );
CircularBounds circle = CircularBounds . newInstance ( center , /* radius = */ 500 );
// Define the routing parameters object and pass the routing origin.
RoutingParameters routingParameters = RoutingParameters . builder ()
. setOrigin ( toLatLng ( "-33.8688, 151.1957362" ))
. build ();
// Use the builder to create a SearchNearbyRequest object and pass the routing parameters.
// Set setRoutingSummariesIncluded to true.
final SearchNearbyRequest searchNearbyRequest =
SearchNearbyRequest . builder ( /* location restriction = */ circle , placeFields )
. setIncludedTypes ( includedTypes )
. setMaxResultCount ( 10 )
. setRoutingParameters ( routingParameters )
. setRoutingSummariesIncluded ( true )
. build ();
// Call PlacesClient.searchNearby() to perform the search.
// Define a response handler to process the returned Lists of Place objects, RoutingSummary objects, and Leg objects.
placesClient . searchNearby ( searchNearbyRequest )
. addOnSuccessListener ( response - > {
List<Place> places = response . getPlaces ();
List<RoutingSummary> routingSummaries = response . getRoutingSummaries ();
List<Leg> legs = routingSummaries . get ( 0 ). getLegs ();
Duration duration = legs . get ( 0 ). getDuration ();
});
The SearchNearbyResponse class represents the response from a search request.
You can call SearchNearbyResponse.getRoutingSummaries() to return the list of routing summaries.
A SearchNearbyResponse object also contains:
A list of Place objects that represent all matching places, with one
Place object per matching place.
Each Place object only contains the fields defined by the field list
passed in the request.
You don't have to use the same coordinates for the location restriction and the
for routing origin. For example, you set the locations restriction to the center
point of Sydney to restrict the search results to that circle. But you then set the
routing origin to the coordinates of your house, meaning to a different location
within the search circle. The request then restricts the search results to the
circle, and calculates the routing summaries based on the location of your
house.
Specify travel options
By default, the duration and distance calculations are for a car. However, you
can control the vehicle type, as well as other options, in the search.
Use routingParameters.setTravelMode() to set the mode of
transportation to DRIVE , BICYCLE , WALK , or TWO_WHEELER . For more
information on these options, see Available vehicle types for
routes .
Note: The Routes API also supports a mode of TRANSIT , but that mode is not
supported by the Places API.
Note: The TWO_WHEELER option is only supported in those countries listed
at Countries and regions supported for two-wheeled
vehicles .
Use routingParameters.setRoutingPreference() to set the routing
preference option to TRAFFIC_UNAWARE (default), TRAFFIC_AWARE , or
TRAFFIC_AWARE_OPTIMAL . Each option has varying levels of data quality and
latency. For more information, see Specify how and if to include traffic
data .
Use routingParameters.setRouteModifiers() to specify to
avoidTolls , avoidHighways , avoidFerries , and avoidIndoor . For more
information on these options, see Specify route features to
avoid .
In the next example, you specify the travel mode as DRIVE and to avoid
highways:
// Specify the list of fields to return.
final List<Place . Field > placeFields = Arrays . asList ( Place . Field . ID , Place . Field . NAME );
// Define the routing modifiers object.
RouteModifiers routeModifiers = RouteModifiers . builder ()
. setAvoidHighways ( true )
. build ();
// Define the routing parameters object and pass the routing origin.
RoutingParameters routingParameters = RoutingParameters . builder ()
. setOrigin ( toLatLng ( "-33.8688, 151.1957362" ))
. setTravelMode ( DRIVE )
. setRouteModifiers ( routeModifiers )
. build ();
// Use the builder to create a SearchByTextRequest object and pass the routing parameters.
// Set setRoutingSummariesIncluded to true.
final SearchByTextRequest searchByTextRequest = SearchByTextRequest . builder ( "Spicy Vegetarian Food in Sydney, Australia" , placeFields )
. setMaxResultCount ( 10 )
. setRoutingParameters ( routingParameters )
. setRoutingSummariesIncluded ( true )
. build ();
// Call PlacesClient.searchByText() to perform the search.
// Define a response handler to process the returned Lists of Place objects, RoutingSummary objects, and Leg objects.
placesClient . searchByText ( searchByTextRequest )
. addOnSuccessListener ( response - > {
List<Place> places = response . getPlaces ();
List<RoutingSummary> routingSummaries = result . getRoutingSummaries ();
List<Leg> legs = routingSummaries . get ( 0 ). getLegs ();
Duration duration = legs . get ( 0 ). getDuration ();
});
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To calculate travel duration and distance to places, use `RoutingParameters` with `setOrigin()`. Include `.setRoutingSummariesIncluded(true)` in the request object. This applies to both `Text Search (New)` and `Nearby Search (New)`. The response provides `duration` and `distanceMeters` via `RoutingSummary` and `Leg` objects. Customize travel by setting the travel mode (e.g., `DRIVE`, `BICYCLE`) with `setTravelMode()` and specify preferences like avoiding highways with `setRouteModifiers()`. Note: the response doesn't include the actual route.\n"]]
