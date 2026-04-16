---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.514Z"
product_name: "Routes API"
product_slug: "routes-api"
feature_name: "Geocoding results in Compute Routes"
feature_slug: "geocoding-results-in-compute-routes"
latest_feature_date: "2023-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes"
  - "https://developers.google.com/maps/documentation/routes/compute-route-matrix-over"
  - "https://developers.google.com/maps/documentation/routes/compute-route-over"
  - "https://developers.google.com/maps/documentation/routes/intermed_waypoints"
keywords:
  - "geocoding"
  - "results"
  - "in"
  - "compute"
  - "routes"
  - "the"
  - "response"
  - "can"
---

# Geocoding results in Compute Routes

Product: Routes API
Coverage: MEDIUM

## Step 02 Summary

The Compute Routes response can include geocoding results for requested locations specified as address strings or Plus Codes.

## Extended Definition

The Compute Routes response can include geocoding results for requested locations specified as address strings or Plus Codes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- [https://developers.google.com/maps/documentation/routes/compute-route-matrix-over](https://developers.google.com/maps/documentation/routes/compute-route-matrix-over)
- [https://developers.google.com/maps/documentation/routes/compute-route-over](https://developers.google.com/maps/documentation/routes/compute-route-over)
- [https://developers.google.com/maps/documentation/routes/intermed_waypoints](https://developers.google.com/maps/documentation/routes/intermed_waypoints)

## Supporting Pages

### Method: computeRoutes \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- Source ID: `site-api-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "routes" : [ { object ( Route ) } ] , "fallbackInfo" : { object ( FallbackInfo ) } , "geocodingResults" : { object ( GeocodingResults ) } } Fields routes[] object ( Route ) Contains an array of computed routes (up to three) when you specify compute alternatives routes , and contains just one route when you don't.
- HTTP request Request body JSON representation Response body JSON representation PolylineQuality PolylineEncoding ReferenceRoute ExtraComputation Route JSON representation RouteLabel RouteLeg JSON representation Polyline JSON representation RouteLegStep JSON representation NavigationInstruction JSON representation Maneuver RouteLegStepTravelAdvisory JSON representation RouteLegStepLocalizedValues JSON representation RouteLegStepTransitDetails JSON representation TransitStopDetails JSON representation TransitStop JSON representation TransitDetailsLocalizedValues JSON representation LocalizedTime JSON representation TransitLine JSON representation TransitAgency JSON representation TransitVehicle JSON representation TransitVehicleType RouteLegTravelAdvisory JSON representation RouteLegLocalizedValues JSON representation StepsOverview JSON representation MultiModalSegment JSON representation Viewport JSON representation RouteLocalizedValues JSON representation PolylineDetails JSON representation FlyoverInfo JSON representation RoadFeatureState PolylinePointIndex JSON representation NarrowRoadInfo JSON representation GeocodingResults JSON representation GeocodedWaypoint JSON representation Returns the primary route along with optional alternate routes, given a set of terminal and intermediate waypoints.
- Otherwise this field is unset. geocodingResults object ( GeocodingResults ) Contains geocoding response info for waypoints specified as addresses.
- If ComputeRoutesResponseroutes.optimized intermediate waypoint index is not requested in the X-Goog-FieldMask header, the request fails.

### Compute Route Matrix Overview \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/compute-route-matrix-over](https://developers.google.com/maps/documentation/routes/compute-route-matrix-over)
- Source ID: `site-docs-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example curl -X POST -d '{ "origins": [ { "waypoint": { "location": { "latLng": { "latitude": 37.420761, "longitude": -122.081356 } } } }, { "waypoint": { "location": { "latLng": { "latitude": 37.403184, "longitude": -122.097371 } } } } ], "destinations": [ { "waypoint": { "location": { "latLng": { "latitude": 37.420999, "longitude": -122.086894 } } } }, { "waypoint": { "location": { "latLng": { "latitude": 37.383047, "longitude": -122.044651 } } } } ], "travelMode": "DRIVE" }' \ -H 'Content-Type: application/json' -H 'X-Goog-Api-Key: YOUR API KEY ' \ -H 'X-Goog-FieldMask: originIndex,destinationIndex,duration,distanceMeters,status,condition' \ 'https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix' The response contains the possible routes for the combination of all origin and destination waypoints.
- Why use Compute Route Matrix With Compute Route Matrix, you can determine the most efficient routes for dispatch scheduling, such as: How best to assign a set of workers to pick up a series of packages Determine the best warehouse from which to ship packages to their final destination What you can do with Compute Route Matrix?
- 3 Compute matrix of routes and review the response For more information, see Get a route matrix and Review the route matrix response .
- You can request these kinds of route data to determine the most efficient way to route passengers, shipments, or workers between multiple origins and destinations: Distance in kilometers or miles for a selected travel mode Estimated travel time in traffic How Compute Route Matrix works The ComputeRouteMatrix method accepts an HTTP POST request with a JSON request body that contains the request details.

### Compute Routes Overview \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/compute-route-over](https://developers.google.com/maps/documentation/routes/compute-route-over)
- Source ID: `site-docs-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With the Routes API Compute Routes method, you can do the following things: Get directions for different ways to travel , and for a single or multiple destinations: Modes of transportation: transit, driving, two-wheel vehicles, walking, or bicycling.
- Example curl - X POST - d ' { "origin" : { "address" : "1800 Amphitheatre Parkway, Mountain View, CA 94043" }, "destination" : { "address" : "Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132" }, "travelMode" : "DRIVE" } ' \ - H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR API KEY ' \ - H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters ' \ 'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes' The service then calculates the requested route, and returns the fields you've requested.
- Why use Compute Routes With Compute Routes, with a wide range of route details you can route your vehicles or packages according to your preferences while optimizing for cost and quality.
- How Compute Routes works The Routes API ComputeRoutes method accepts an HTTP POST request with a JSON request body that contains the request details.

### Set intermediate waypoints \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/intermed_waypoints](https://developers.google.com/maps/documentation/routes/intermed_waypoints)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This example uses a response field mask in the X-Goog-FieldMask header that specifies to return the following fields in the response: routes.duration routes.distanceMeters routes.legs corresponding to the entire RouteLeg object. curl - X POST - d ' { "origin" :{ "location" :{ "latLng" :{ "latitude" : 37.419734 , "longitude" : -122.0827784 } }, "sideOfRoad" : true }, "destination" :{ "location" :{ "latLng" :{ "latitude" : 37.417670 , "longitude" : -122.079595 } } }, "intermediates" : [ { "location" :{ "latLng" :{ "latitude" : 37.419734 , "longitude" : -122.0807784 } } } ], "travelMode" : "DRIVE" , "routingPreference" : "TRAFFIC AWARE" , "departureTime" : "2022-10-15T15:01:23.045123456Z" , "computeAlternativeRoutes" : false , "routeModifiers" : { "avoidTolls" : false , "avoidHighways" : false , "avoidFerries" : false }, "languageCode" : "en-US" , "units" : "IMPERIAL" } ' - H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR API KEY ' - H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters , rou tes .legs ' 'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes' The response from this call contains the legs array.
- Use the intermediates array property of the computeRoutes method (REST) or the ComputeRoutes method (gRPC), to define up to a maximum of 25 intermediate waypoints.
- You can define up to 25 intermediate waypoints using the intermediates property when computing routes, but requests with 11 or more are billed at a higher rate.
- Use the intermediates array in the computeRoutes method to define up to 25 waypoints, with options for stops or pass-throughs.

