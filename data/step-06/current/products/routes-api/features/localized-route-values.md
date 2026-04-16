---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.512Z"
product_name: "Routes API"
product_slug: "routes-api"
feature_name: "Localized route values"
feature_slug: "localized-route-values"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes"
  - "https://developers.google.com/maps/documentation/routes/localized-values"
  - "https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRouteMatrix"
  - "https://developers.google.com/maps/documentation/routes/compute-route-over"
keywords:
  - "localized"
  - "route"
  - "values"
  - "the"
  - "routes"
  - "api"
  - "can"
  - "return"
---

# Localized route values

Product: Routes API
Coverage: MEDIUM

## Step 02 Summary

The Routes API can return localized text for time, distance, duration, and transit fares.

## Extended Definition

The Routes API can return localized text for time, distance, duration, and transit fares.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- [https://developers.google.com/maps/documentation/routes/localized-values](https://developers.google.com/maps/documentation/routes/localized-values)
- [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRouteMatrix](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRouteMatrix)
- [https://developers.google.com/maps/documentation/routes/compute-route-over](https://developers.google.com/maps/documentation/routes/compute-route-over)

## Supporting Pages

### Method: computeRoutes \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- Source ID: `site-api-reference`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP request Request body JSON representation Response body JSON representation PolylineQuality PolylineEncoding ReferenceRoute ExtraComputation Route JSON representation RouteLabel RouteLeg JSON representation Polyline JSON representation RouteLegStep JSON representation NavigationInstruction JSON representation Maneuver RouteLegStepTravelAdvisory JSON representation RouteLegStepLocalizedValues JSON representation RouteLegStepTransitDetails JSON representation TransitStopDetails JSON representation TransitStop JSON representation TransitDetailsLocalizedValues JSON representation LocalizedTime JSON representation TransitLine JSON representation TransitAgency JSON representation TransitVehicle JSON representation TransitVehicleType RouteLegTravelAdvisory JSON representation RouteLegLocalizedValues JSON representation StepsOverview JSON representation MultiModalSegment JSON representation Viewport JSON representation RouteLocalizedValues JSON representation PolylineDetails JSON representation FlyoverInfo JSON representation RoadFeatureState PolylinePointIndex JSON representation NarrowRoadInfo JSON representation GeocodingResults JSON representation GeocodedWaypoint JSON representation Returns the primary route along with optional alternate routes, given a set of terminal and intermediate waypoints.
- The index starts with 0 for the first intermediate waypoint provided in the input. localizedValues object ( RouteLocalizedValues ) Text representations of properties of the Route . routeToken string An opaque token that can be passed to Navigation SDK to reconstruct the route during navigation, and, in the event of rerouting, honor the original intention when the route was created.
- JSON representation { "routeLabels" : [ enum ( RouteLabel ) ] , "legs" : [ { object ( RouteLeg ) } ] , "distanceMeters" : integer , "duration" : string , "staticDuration" : string , "polyline" : { object ( Polyline ) } , "description" : string , "warnings" : [ string ] , "viewport" : { object ( Viewport ) } , "travelAdvisory" : { object ( RouteTravelAdvisory ) } , "optimizedIntermediateWaypointIndex" : [ integer ] , "localizedValues" : { object ( RouteLocalizedValues ) } , "routeToken" : string , "polylineDetails" : { object ( PolylineDetails ) } } Fields routeLabels[] enum ( RouteLabel ) Labels for the Route that are useful to identify specific properties of the route to compare against others. legs[] object ( RouteLeg ) A collection of legs (path segments between waypoints) that make up the route.
- Example: "3.5s" . polyline object ( Polyline ) The polyline associated with this step. startLocation object ( Location ) The start location of this step. endLocation object ( Location ) The end location of this step. navigationInstruction object ( NavigationInstruction ) Navigation instructions. travelAdvisory object ( RouteLegStepTravelAdvisory ) Contains the additional information that the user should be informed about, such as possible traffic zone restrictions, on a leg step. localizedValues object ( RouteLegStepLocalizedValues ) Text representations of properties of the RouteLegStep . transitDetails object ( RouteLegStepTransitDetails ) Details pertaining to this step if the travel mode is TRANSIT . travelMode enum ( RouteTravelMode ) The travel mode used for this step.

### Request localized values \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/localized-values](https://developers.google.com/maps/documentation/routes/localized-values)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: N/A

Evidence snippets:
- Example request curl -X POST -d '{ "origin": { "location": { "latLng": { "latitude": 37.7873146, "longitude": -122.4159327 } } }, "destination": { "location": { "latLng": { "latitude": 37.7621008, "longitude": -122.4382503 } } }, "travelMode": "DRIVE", "computeAlternativeRoutes": true, "languageCode": "de", "units": "METRIC" }' \ -H 'Content-Type: application/json' \ -H 'X-Goog-Api-Key: YOUR API KEY ' \ -H 'X-Goog-FieldMask: routes.localizedValues' \ 'https://routes.googleapis.com/directions/v2:computeRoutes' Example response The response returns localized values for the distance , duration , and staticDuration fields: { "localizedValues": { "distance": { "text": "15,5 km" }, "duration": { "text": "16 Minuten" }, "staticDuration": { "text": "16 Minuten" } } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example: REST -H X-Goog-FieldMask: routes.localizedValues RPC const ( fieldMask = "routes.localizedValues" ) If you want the localized values in a specific language or unit system, specify the language code and unit system: "languageCode": "language code", "units": "METRIC IMPERIAL", For example, this code snippet specifies the language as German (de), and METRIC units: "languageCode": "de", "units": "METRIC", For more information, see Language Support .
- Home Products Google Maps Platform Documentation Web Services Routes API Send feedback Request localized values Stay organized with collections Save and categorize content based on your preferences.
- You request localized values using a field mask, and can either specify the language and unit system or use the values inferred by the API.

### Method: computeRouteMatrix \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRouteMatrix](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRouteMatrix)
- Source ID: `site-api-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It returns a stream of route details in the response body, including status, condition, distanceMeters, duration, and localized values.
- If successful, the response body contains data with the following structure: JSON representation { "status" : { object ( Status ) } , "condition" : enum ( RouteMatrixElementCondition ) , "distanceMeters" : integer , "duration" : string , "staticDuration" : string , "travelAdvisory" : { object ( RouteTravelAdvisory ) } , "fallbackInfo" : { object ( FallbackInfo ) } , "localizedValues" : { object ( LocalizedValues ) } , "originIndex" : integer , "destinationIndex" : integer } Fields status object ( Status ) Error status code for this element. condition enum ( RouteMatrixElementCondition ) Indicates whether the route was found or not.
- HTTP request Request body JSON representation Response body JSON representation RouteMatrixOrigin JSON representation RouteMatrixDestination JSON representation ExtraComputation RouteMatrixElementCondition LocalizedValues JSON representation Takes in a list of origins and destinations and returns a stream containing route information for each combination of origin and destination.
- Otherwise this field is unset. localizedValues object ( LocalizedValues ) Text representations of properties of the RouteMatrixElement . originIndex integer Zero-based index of the origin in the request. destinationIndex integer Zero-based index of the destination in the request.

### Compute Routes Overview \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/compute-route-over](https://developers.google.com/maps/documentation/routes/compute-route-over)
- Source ID: `site-docs-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example curl - X POST - d ' { "origin" : { "address" : "1800 Amphitheatre Parkway, Mountain View, CA 94043" }, "destination" : { "address" : "Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132" }, "travelMode" : "DRIVE" } ' \ - H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR API KEY ' \ - H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters ' \ 'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes' The service then calculates the requested route, and returns the fields you've requested.
- What's next Get a route Available route options Choose what information to return Migrate from Directions API (Legacy) Migrate from the Routes API preview to GA Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- With the Routes API Compute Routes method, you can do the following things: Get directions for different ways to travel , and for a single or multiple destinations: Modes of transportation: transit, driving, two-wheel vehicles, walking, or bicycling.
- Introduction Compute Routes is a method in the Routes API service that accepts an HTTPS request and returns the ideal route between two locations.

