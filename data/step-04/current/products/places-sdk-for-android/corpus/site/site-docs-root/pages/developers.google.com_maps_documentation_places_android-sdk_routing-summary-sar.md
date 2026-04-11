---
title: "Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/routing-summary-sar
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/routing-summary-sar
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
Combine routing summaries with search along route
You can combine routing summary calculations with search along a route .
In this case, Text Search (New) returns the travel duration and distance to each
place in the response, and then from each place to the final destination of the
route.
To use Text Search (New) to calculate the routing summary along with search
along a route:
Use the Routes API to calculate a route that returns a route polyline
in the response.
Use searchAlongRouteParameters.setPolyline() to
pass the route polyline to Text Search (New) to bias the search results to
the route. The response then contains places that match the search criteria
and are also located near the specified route.
When building the request object, add .setRoutingSummariesIncluded(true) .
By default, Text Search (New) performs the search along the entire route:
// Define the route polyline object using the route string.
EncodedPolyline encodedPolyline = EncodedPolyline . newInstance ( "wblcFptchVIFOd@G@EVw@Ms@dHKR}ApNA`AF~@Hf@TjAb@bBb@~@n@p@^Rd@~@Vz@HVz@nDLt@?d@Kr@c@~@mD`G?`@aEfGkCnDuChDm`@bb@[`@{GhHeEdEciBnnBkC`DkC~DaClEuKjT_Z|l@Qb@iR~_@}EzJ_AdB_Und@kAfCaOjZkg@vcAqBzD_]rr@iBlEaBxEgArD}AlG}AhHsA`IeAnH{@dIq@dJgL~iBq@rHu@vGgAtHwArHaBhHkBzG_DpJ}Nbc@iBhGkA|EgC|LcIjb@oAhG_AvDgAdDkApC_BzCiBpCsFvGii@vn@scAxlAmLjNgSzUeRjT{TzWqExEmG|FuNlMmMhLaRvPqOlNmbAl}@mFlF{PlOmJfIoElE}LtMiSbU_H`I}}@jcAwl@vp@oAbBqA~BeAhCm@tBg@fCWrBQ~BI|DaB~rBO~D[bEa@`Dm@pDaAdE{@vC_BbEkB~Def@|z@sEzHKJeS~]}K`S{\\~l@cXpe@sBpDm@bAuCxDkBrBiC~BwCtByBnAcBx@}Bt@{Bn@gh@|LaOpDeFhAoDj@aE^kVrA_E^iEr@yD~@uBr@gMjF_EnAcCh@eFr@_DRsAD}@Jsu@xCWDqIV}BCeCOyDm@cBa@_DmA}JeE_CwAsBcBiBoBuAqBmOoX{CuEkB_CoDqDkVoUoD{CeE_DkEkC_FeCqB}@sDuAoDgAeCe@cCW}CK}BDaDTeOlBcuBrYaNlBq@Dyd@rGyFt@yBb@eBf@oCnAoBlAkIpGkAp@wBbAaCt@oFdAwKjBoGxA{FbByIjC_HfB_@KmNdDuC|@uFzBcH|C{@\\[?sBv@}@VaBVoA@y@EmAQcA[w@]aBkAeAkA}BuDUKs@uAqBsCwBcCgAiAiN_MyKsJsG{GkBaBiBuA{BwAwDkBcOaHiC_AiCg@}BQcCAcBHqBVkB`@qEjAu@LgCVgAHwG@sG?mABsH^eNr@mBXy@NqBt@uAt@aBlAkAlA}BtCyApBiAdB_BxB{A`B}@j@oAf@s@PeCVcIf@gAAkAQy@YiAo@_A{@_DgEgJqM_DeEaM}PoBiCzAsBw@kAdAGVk@f@q@z@C
" );
// Specify the list of fields to return.
final List<Place . Field > placeFields = Arrays . asList ( Place . Field . ID , Place . Field . NAME );
// Define the search along route parameters object and pass the polyline object.
SearchAlongRouteParameters searchAlongRouteParameters = SearchAlongRouteParameters . builder ()
. setPolyline ( encodedPolyline )
. build ();
// Use the builder to create a SearchByTextRequest object and pass the search along route parameters.
final SearchByTextRequest searchByTextRequest = SearchByTextRequest . builder ( "Spicy Vegetarian Food" , placeFields )
. setMaxResultCount ( 10 )
. setSearchAlongRouteParameters ( searchAlongRouteParameters )
. setRoutingSummariesIncluded ( true )
. build ();
// Call PlacesClient.searchByText() to perform the search.
// Define a response handler to process the returned List of Place objects.
placesClient . searchByText ( searchByTextRequest )
. addOnSuccessListener ( response - > {
List<Place> places = response . getPlaces ();
List<RoutingSummary> routingSummaries = response . getRoutingSummaries ();
List<Leg> legs = routingSummaries . get ( 0 ). getLegs ();
Duration duration = legs . get ( 0 ). getDuration ();
});
The response contains objects that include lists of the requested places fields and routing
summaries containing the duration and distance to travel to each place.
You can call SearchByTextResponse.getRoutingSummaries() to return the list of routing summaries.
For each entry in the legs array, Text Search (New) returns a two-leg trip
time:
The first leg contains the travel duration and distance from the origin to
the place.
The second leg contains the travel duration and distance from the place to
the route destination.
Note: The response only contains the travel duration and
duration for each leg. It does not contain the actual route itself. To calculate the route, pass
the origin, location of the place as an intermediate waypoint, and the destination into the
Routes API.
Specify the routing origin, travel mode, and route modifiers
You can modify the search and routing summary calculation by specifying the
routing origin, travel mode, route modifiers, and routing preferences. The
travel mode and route modifiers work the same as for calculating routing
summaries without specifying a route as shown in the Specify travel
options topic.
By default, the first leg of each result contains the distance from the origin
defined by the polyline to each place. However, you can override that default by
explicitly specifying a routing origin in the request. If specified, the first
leg of all responses specifies the distances and duration from the specified
routing origin, overriding the origin from the polyline.
In the next example, you specify a routing origin as the coordinates of San
Mateo, CA, specify to avoid tolls, and set the number of results to 5:
// Define the route polyline object using the route string.
EncodedPolyline encodedPolyline = EncodedPolyline . newInstance ( "wblcFptchVIFOd@G@EVw@Ms@dHKR}ApNA`AF~@Hf@TjAb@bBb@~@n@p@^Rd@~@Vz@HVz@nDLt@?d@Kr@c@~@mD`G?`@aEfGkCnDuChDm`@bb@[`@{GhHeEdEciBnnBkC`DkC~DaClEuKjT_Z|l@Qb@iR~_@}EzJ_AdB_Und@kAfCaOjZkg@vcAqBzD_]rr@iBlEaBxEgArD}AlG}AhHsA`IeAnH{@dIq@dJgL~iBq@rHu@vGgAtHwArHaBhHkBzG_DpJ}Nbc@iBhGkA|EgC|LcIjb@oAhG_AvDgAdDkApC_BzCiBpCsFvGii@vn@scAxlAmLjNgSzUeRjT{TzWqExEmG|FuNlMmMhLaRvPqOlNmbAl}@mFlF{PlOmJfIoElE}LtMiSbU_H`I}}@jcAwl@vp@oAbBqA~BeAhCm@tBg@fCWrBQ~BI|DaB~rBO~D[bEa@`Dm@pDaAdE{@vC_BbEkB~Def@|z@sEzHKJeS~]}K`S{\\~l@cXpe@sBpDm@bAuCxDkBrBiC~BwCtByBnAcBx@}Bt@{Bn@gh@|LaOpDeFhAoDj@aE^kVrA_E^iEr@yD~@uBr@gMjF_EnAcCh@eFr@_DRsAD}@Jsu@xCWDqIV}BCeCOyDm@cBa@_DmA}JeE_CwAsBcBiBoBuAqBmOoX{CuEkB_CoDqDkVoUoD{CeE_DkEkC_FeCqB}@sDuAoDgAeCe@cCW}CK}BDaDTeOlBcuBrYaNlBq@Dyd@rGyFt@yBb@eBf@oCnAoBlAkIpGkAp@wBbAaCt@oFdAwKjBoGxA{FbByIjC_HfB_@KmNdDuC|@uFzBcH|C{@\\[?sBv@}@VaBVoA@y@EmAQcA[w@]aBkAeAkA}BuDUKs@uAqBsCwBcCgAiAiN_MyKsJsG{GkBaBiBuA{BwAwDkBcOaHiC_AiCg@}BQcCAcBHqBVkB`@qEjAu@LgCVgAHwG@sG?mABsH^eNr@mBXy@NqBt@uAt@aBlAkAlA}BtCyApBiAdB_BxB{A`B}@j@oAf@s@PeCVcIf@gAAkAQy@YiAo@_A{@_DgEgJqM_DeEaM}PoBiCzAsBw@kAdAGVk@f@q@z@C
" );
// Specify the list of fields to return.
final List<Place . Field > placeFields = Arrays . asList ( Place . Field . ID , Place . Field . NAME );
// Define the routing modifiers object.
RouteModifiers routeModifiers = RouteModifiers . builder ()
. setAvoidTolls ( true )
. build ();
// Define the routing parameters object and pass the routing origin.
// Set the travel mode to DRIVE.
// Pass the routeModifiers object.
RoutingParameters routingParameters = RoutingParameters . builder ()
. setOrigin ( toLatLng ( "37.56617, -122.30870" ))
. setTravelMode ( DRIVE )
. setRouteModifiers ( routeModifiers )
. build ();
// Define the search along route parameters object and pass the polyline object.
SearchAlongRouteParameters searchAlongRouteParameters = SearchAlongRouteParameters . builder ()
. setPolyline ( encodedPolyline )
. build ();
// Use the builder to create a SearchByTextRequest object and pass the search along route parameters.
final SearchByTextRequest searchByTextRequest = SearchByTextRequest . builder ( "Spicy Vegetarian Food" , placeFields )
. setMaxResultCount ( 5 )
. setRoutingParameters ( routingParameters )
. setSearchAlongRouteParameters ( searchAlongRouteParameters )
. setRoutingSummariesIncluded ( true )
. build ();
// Call PlacesClient.searchByText() to perform the search.
// Define a response handler to process the returned List of Place objects.
placesClient . searchByText ( searchByTextRequest )
. addOnSuccessListener ( response - > {
List<Place> places = response . getPlaces ();
List<RoutingSummary> routingSummaries = result . getRoutingSummaries ();
List<Leg> legs = routingSummaries . get ( 0 ). getLegs ();
Duration duration = legs . get ( 0 ). getDuration ();
});
The following image shows a map that contains the route polyline, the new origin
(light-blue pin), and the places in the search results (green pins). Notice how
all the results are along the route but past San Mateo:
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
