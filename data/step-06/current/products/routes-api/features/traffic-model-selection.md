---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.512Z"
product_name: "Routes API"
product_slug: "routes-api"
feature_name: "Traffic model selection"
feature_slug: "traffic-model-selection"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes"
  - "https://developers.google.com/maps/documentation/routes/compute-route-over"
  - "https://developers.google.com/maps/documentation/routes/overview"
  - "https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRouteMatrix"
keywords:
  - "traffic"
  - "model"
  - "selection"
  - "the"
  - "routes"
  - "api"
  - "can"
  - "use"
---

# Traffic model selection

Product: Routes API
Coverage: MEDIUM

## Step 02 Summary

The Routes API can use a specified traffic model when computing routes with traffic.

## Extended Definition

The Routes API can use a specified traffic model when computing routes with traffic.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- [https://developers.google.com/maps/documentation/routes/compute-route-over](https://developers.google.com/maps/documentation/routes/compute-route-over)
- [https://developers.google.com/maps/documentation/routes/overview](https://developers.google.com/maps/documentation/routes/overview)
- [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRouteMatrix](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRouteMatrix)

## Supporting Pages

### Method: computeRoutes \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- Source ID: `site-api-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request body The request body contains data with the following structure: JSON representation { "origin" : { object ( Waypoint ) } , "destination" : { object ( Waypoint ) } , "intermediates" : [ { object ( Waypoint ) } ] , "travelMode" : enum ( RouteTravelMode ) , "routingPreference" : enum ( RoutingPreference ) , "polylineQuality" : enum ( PolylineQuality ) , "polylineEncoding" : enum ( PolylineEncoding ) , "departureTime" : string , "arrivalTime" : string , "computeAlternativeRoutes" : boolean , "routeModifiers" : { object ( RouteModifiers ) } , "languageCode" : string , "regionCode" : string , "units" : enum ( Units ) , "optimizeWaypointOrder" : boolean , "requestedReferenceRoutes" : [ enum ( ReferenceRoute ) ] , "extraComputations" : [ enum ( ExtraComputation ) ] , "trafficModel" : enum ( TrafficModel ) , "transitPreferences" : { object ( TransitPreferences ) } } Fields origin object ( Waypoint ) Required.
- HTTP request POST https://routes.googleapis.com/directions/v2:computeRoutes The URL uses gRPC Transcoding syntax.
- Example: "3.5s" . polyline object ( Polyline ) The polyline associated with this step. startLocation object ( Location ) The start location of this step. endLocation object ( Location ) The end location of this step. navigationInstruction object ( NavigationInstruction ) Navigation instructions. travelAdvisory object ( RouteLegStepTravelAdvisory ) Contains the additional information that the user should be informed about, such as possible traffic zone restrictions, on a leg step. localizedValues object ( RouteLegStepLocalizedValues ) Text representations of properties of the RouteLegStep . transitDetails object ( RouteLegStepTransitDetails ) Details pertaining to this step if the travel mode is TRANSIT . travelMode enum ( RouteTravelMode ) The travel mode used for this step.
- For example, in this method: Field mask of all available fields (for manual inspection): X-Goog-FieldMask: Field mask of Route-level duration, distance, and polyline (an example production setup): X-Goog-FieldMask: routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline Google discourage the use of the wildcard ( ) response field mask, or specifying the field mask at the top level ( routes ), because: Selecting only the fields that you need helps our server save computation cycles, allowing us to return the result to you with a lower latency.

### Compute Routes Overview \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/compute-route-over](https://developers.google.com/maps/documentation/routes/compute-route-over)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With the Routes API Compute Routes method, you can do the following things: Get directions for different ways to travel , and for a single or multiple destinations: Modes of transportation: transit, driving, two-wheel vehicles, walking, or bicycling.
- Example curl - X POST - d ' { "origin" : { "address" : "1800 Amphitheatre Parkway, Mountain View, CA 94043" }, "destination" : { "address" : "Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132" }, "travelMode" : "DRIVE" } ' \ - H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR API KEY ' \ - H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters ' \ 'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes' The service then calculates the requested route, and returns the fields you've requested.
- What's next Get a route Available route options Choose what information to return Migrate from Directions API (Legacy) Migrate from the Routes API preview to GA Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Why use Compute Routes With Compute Routes, with a wide range of route details you can route your vehicles or packages according to your preferences while optimizing for cost and quality.

### Compute Routes Overview \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/overview](https://developers.google.com/maps/documentation/routes/overview)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With the Routes API Compute Routes method, you can do the following things: Get directions for different ways to travel , and for a single or multiple destinations: Modes of transportation: transit, driving, two-wheel vehicles, walking, or bicycling.
- Example curl - X POST - d ' { "origin" : { "address" : "1800 Amphitheatre Parkway, Mountain View, CA 94043" }, "destination" : { "address" : "Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132" }, "travelMode" : "DRIVE" } ' \ - H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR API KEY ' \ - H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters ' \ 'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes' The service then calculates the requested route, and returns the fields you've requested.
- What's next Get a route Available route options Choose what information to return Migrate from Directions API (Legacy) Migrate from the Routes API preview to GA Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Why use Compute Routes With Compute Routes, with a wide range of route details you can route your vehicles or packages according to your preferences while optimizing for cost and quality.

### Method: computeRouteMatrix \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRouteMatrix](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRouteMatrix)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP request POST https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix The URL uses gRPC Transcoding syntax.
- The API supports various travel modes, routing preferences, departure/arrival times, and traffic models.
- Request body The request body contains data with the following structure: JSON representation { "origins" : [ { object ( RouteMatrixOrigin ) } ] , "destinations" : [ { object ( RouteMatrixDestination ) } ] , "travelMode" : enum ( RouteTravelMode ) , "routingPreference" : enum ( RoutingPreference ) , "departureTime" : string , "arrivalTime" : string , "languageCode" : string , "regionCode" : string , "units" : enum ( Units ) , "extraComputations" : [ enum ( ExtraComputation ) ] , "trafficModel" : enum ( TrafficModel ) , "transitPreferences" : { object ( TransitPreferences ) } } Fields origins[] object ( RouteMatrixOrigin ) Required.
- These extra fields must also be specified in the field mask to be returned in the response. trafficModel enum ( TrafficModel ) Optional.

