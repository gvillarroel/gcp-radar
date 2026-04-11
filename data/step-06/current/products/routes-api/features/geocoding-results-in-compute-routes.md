---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:22:04.476Z"
product_name: "Routes API"
product_slug: "routes-api"
feature_name: "Geocoding results in Compute Routes"
feature_slug: "geocoding-results-in-compute-routes"
latest_feature_date: "2023-03-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes"
  - "https://developers.google.com/maps/documentation/routes/intermed_waypoints"
  - "https://developers.google.com/maps/documentation/routes/migrate-routes-preview"
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
Coverage: LOW

## Step 02 Summary

The Compute Routes response can include geocoding results for requested locations specified as address strings or Plus Codes.

## Extended Definition

The Compute Routes response can include geocoding results for requested locations specified as address strings or Plus Codes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- [https://developers.google.com/maps/documentation/routes/intermed_waypoints](https://developers.google.com/maps/documentation/routes/intermed_waypoints)
- [https://developers.google.com/maps/documentation/routes/migrate-routes-preview](https://developers.google.com/maps/documentation/routes/migrate-routes-preview)

## Supporting Pages

### Method: computeRoutes \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "routes" : [ { object ( Route ) } ] , "fallbackInfo" : { object ( FallbackInfo ) } , "geocodingResults" : { object ( GeocodingResults ) } } Fields routes[] object ( Route ) Contains an array of computed routes (up to three) when you specify compute alternatives routes , and contains just one route when you don't.
- HTTP request Request body JSON representation Response body JSON representation PolylineQuality PolylineEncoding ReferenceRoute ExtraComputation Route JSON representation RouteLabel RouteLeg JSON representation Polyline JSON representation RouteLegStep JSON representation NavigationInstruction JSON representation Maneuver RouteLegStepTravelAdvisory JSON representation RouteLegStepLocalizedValues JSON representation RouteLegStepTransitDetails JSON representation TransitStopDetails JSON representation TransitStop JSON representation TransitDetailsLocalizedValues JSON representation LocalizedTime JSON representation TransitLine JSON representation TransitAgency JSON representation TransitVehicle JSON representation TransitVehicleType RouteLegTravelAdvisory JSON representation RouteLegLocalizedValues JSON representation StepsOverview JSON representation MultiModalSegment JSON representation Viewport JSON representation RouteLocalizedValues JSON representation PolylineDetails JSON representation FlyoverInfo JSON representation RoadFeatureState PolylinePointIndex JSON representation NarrowRoadInfo JSON representation GeocodingResults JSON representation GeocodedWaypoint JSON representation Returns the primary route along with optional alternate routes, given a set of terminal and intermediate waypoints.
- Otherwise this field is unset. geocodingResults object ( GeocodingResults ) Contains geocoding response info for waypoints specified as addresses.
- If ComputeRoutesResponseroutes.optimized intermediate waypoint index is not requested in the X-Goog-FieldMask header, the request fails.

### Set intermediate waypoints \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/intermed_waypoints](https://developers.google.com/maps/documentation/routes/intermed_waypoints)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This example uses a response field mask in the X-Goog-FieldMask header that specifies to return the following fields in the response: routes.duration routes.distanceMeters routes.legs corresponding to the entire RouteLeg object. curl - X POST - d ' { "origin" :{ "location" :{ "latLng" :{ "latitude" : 37.419734 , "longitude" : -122.0827784 } }, "sideOfRoad" : true }, "destination" :{ "location" :{ "latLng" :{ "latitude" : 37.417670 , "longitude" : -122.079595 } } }, "intermediates" : [ { "location" :{ "latLng" :{ "latitude" : 37.419734 , "longitude" : -122.0807784 } } } ], "travelMode" : "DRIVE" , "routingPreference" : "TRAFFIC AWARE" , "departureTime" : "2022-10-15T15:01:23.045123456Z" , "computeAlternativeRoutes" : false , "routeModifiers" : { "avoidTolls" : false , "avoidHighways" : false , "avoidFerries" : false }, "languageCode" : "en-US" , "units" : "IMPERIAL" } ' - H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR API KEY ' - H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters , rou tes .legs ' 'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes' The response from this call contains the legs array.
- Use the intermediates array property of the computeRoutes method (REST) or the ComputeRoutes method (gRPC), to define up to a maximum of 25 intermediate waypoints.
- You can define up to 25 intermediate waypoints using the intermediates property when computing routes, but requests with 11 or more are billed at a higher rate.
- Use the intermediates array in the computeRoutes method to define up to 25 waypoints, with options for stops or pass-throughs.

### Migrate from the Preview release \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/migrate-routes-preview](https://developers.google.com/maps/documentation/routes/migrate-routes-preview)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The compute routes response now contains the geocodingResults array.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Routes API's GA release introduces new location specification options, including address strings and Plus Codes, and includes a geocodingResults array in the response.
- The following fields will no longer be included in computeRouteMatrix responses unless explicitly enabled by setting extraComputations : travelAdvisory.tollInfo (Toll info) The following fields will no longer be included in computeRoutes responses unless explicitly enabled by setting extraComputations : routes.legs.travelAdvisory.tollInfo (Toll info) routes.travelAdvisory.tollInfo (Toll info) routes.travelAdvisory.fuelConsumptionMicroliters (Fuel consumption) routes.travelAdvisory.speedReadingIntervals (Traffic on a polyline) routes.legs.travelAdvisory.speedReadingIntervals (Traffic on a polyline) What do I need to do?
- The geocodingResults array has been added to the response, providing place IDs and metadata for locations specified as address strings or Plus Codes.

