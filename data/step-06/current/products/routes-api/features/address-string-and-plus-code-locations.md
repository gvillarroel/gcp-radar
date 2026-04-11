---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:22:04.476Z"
product_name: "Routes API"
product_slug: "routes-api"
feature_name: "Address string and Plus Code locations"
feature_slug: "address-string-and-plus-code-locations"
latest_feature_date: "2023-03-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/maps/documentation/routes/migrate-routes-preview"
  - "https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes"
  - "https://developers.google.com/maps/documentation/routes/pass-through"
keywords:
  - "address"
  - "string"
  - "and"
  - "plus"
  - "code"
  - "locations"
  - "the"
  - "routes"
---

# Address string and Plus Code locations

Product: Routes API
Coverage: LOW

## Step 02 Summary

The Routes API can accept address strings and Plus Codes as location inputs alongside place IDs and latitude/longitude coordinates.

## Extended Definition

The Routes API can accept address strings and Plus Codes as location inputs alongside place IDs and latitude/longitude coordinates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/maps/documentation/routes/migrate-routes-preview](https://developers.google.com/maps/documentation/routes/migrate-routes-preview)
- [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- [https://developers.google.com/maps/documentation/routes/pass-through](https://developers.google.com/maps/documentation/routes/pass-through)

## Supporting Pages

### Migrate from the Preview release \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/migrate-routes-preview](https://developers.google.com/maps/documentation/routes/migrate-routes-preview)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Routes API's GA release introduces new location specification options, including address strings and Plus Codes, and includes a geocodingResults array in the response.
- The geocodingResults array has been added to the response, providing place IDs and metadata for locations specified as address strings or Plus Codes.
- You can now specify locations using address strings and Plus Codes in addition to place IDs and coordinates.
- For every location in the request (origin, destination, or intermediate waypoint) that was specified as an address string or as a Plus code , the API performs a place ID lookup.

### Method: computeRoutes \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP request Request body JSON representation Response body JSON representation PolylineQuality PolylineEncoding ReferenceRoute ExtraComputation Route JSON representation RouteLabel RouteLeg JSON representation Polyline JSON representation RouteLegStep JSON representation NavigationInstruction JSON representation Maneuver RouteLegStepTravelAdvisory JSON representation RouteLegStepLocalizedValues JSON representation RouteLegStepTransitDetails JSON representation TransitStopDetails JSON representation TransitStop JSON representation TransitDetailsLocalizedValues JSON representation LocalizedTime JSON representation TransitLine JSON representation TransitAgency JSON representation TransitVehicle JSON representation TransitVehicleType RouteLegTravelAdvisory JSON representation RouteLegLocalizedValues JSON representation StepsOverview JSON representation MultiModalSegment JSON representation Viewport JSON representation RouteLocalizedValues JSON representation PolylineDetails JSON representation FlyoverInfo JSON representation RoadFeatureState PolylinePointIndex JSON representation NarrowRoadInfo JSON representation GeocodingResults JSON representation GeocodedWaypoint JSON representation Returns the primary route along with optional alternate routes, given a set of terminal and intermediate waypoints.
- Request body The request body contains data with the following structure: JSON representation { "origin" : { object ( Waypoint ) } , "destination" : { object ( Waypoint ) } , "intermediates" : [ { object ( Waypoint ) } ] , "travelMode" : enum ( RouteTravelMode ) , "routingPreference" : enum ( RoutingPreference ) , "polylineQuality" : enum ( PolylineQuality ) , "polylineEncoding" : enum ( PolylineEncoding ) , "departureTime" : string , "arrivalTime" : string , "computeAlternativeRoutes" : boolean , "routeModifiers" : { object ( RouteModifiers ) } , "languageCode" : string , "regionCode" : string , "units" : enum ( Units ) , "optimizeWaypointOrder" : boolean , "requestedReferenceRoutes" : [ enum ( ReferenceRoute ) ] , "extraComputations" : [ enum ( ExtraComputation ) ] , "trafficModel" : enum ( TrafficModel ) , "transitPreferences" : { object ( TransitPreferences ) } } Fields origin object ( Waypoint ) Required.
- For example, in this method: Field mask of all available fields (for manual inspection): X-Goog-FieldMask: Field mask of Route-level duration, distance, and polyline (an example production setup): X-Goog-FieldMask: routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline Google discourage the use of the wildcard ( ) response field mask, or specifying the field mask at the top level ( routes ), because: Selecting only the fields that you need helps our server save computation cycles, allowing us to return the result to you with a lower latency.
- You may wish to examine the original request for misspellings and/or an incomplete address. placeId string The place ID for this result. intermediateWaypointRequestIndex integer The index of the corresponding intermediate waypoint in the request.

### "Set a point for a route to pass through \_|\_ Routes API \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/routes/pass-through](https://developers.google.com/maps/documentation/routes/pass-through)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When using address strings or Plus codes for waypoints, the API returns place IDs for these locations in the geocodingResults array.
- Because the waypoint at index 1 of the request was specified by using latitude/longitude coordinates, it is omitted from the geocodingResults array in the response. { "routes" : [{ ... }], "geocodingResults" : { "origin" : { "geocoderStatus" : {}, "type" : [ "premise" ], "placeId" : "ChIJj38IfwK6j4ARNcyPDnEGa9g" }, "destination" : { "geocoderStatus" : {}, "type" : [ "premise" ], "placeId" : "ChIJI7ES6tl j4ARVpDZoXbWAiY" }, "intermediates" : [ { "geocoderStatus" : {}, "intermediateWaypointRequestIndex" : 0 , "type" : [ "street address" ], "placeId" : "ChIJvdLMGyq7j4ARScE5tWX C0Y" }, { "geocoderStatus" : {}, "intermediateWaypointRequestIndex" : 2 , "type" : [ "premise" ], "placeId" : "ChIJkTc0GKajj4AR9UMsOSHwGD0" } ] } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following example demonstrates how to mark an intermediate waypoint as a pass-through waypoint. { "location" : { "latLng" : { "latitude" : 37.419734 , "longitude" :- 122.0827784 } }, "via" : true } Access place IDs for intermediate waypoints If you specify the location of an origin, destination, or intermediate waypoint as an address string or as a Plus code , the API attempts to find the most relevant location which has a corresponding place ID.
- You include geocodingResults in the response field mask to specify to return the geocodingResults array in the results. curl - X POST - d ' { "origin" :{ "address" : "1600 Amphitheatre Parkway, Mountain View, CA" }, "destination" :{ "address" : "24 Willie Mays Plaza, San Francisco, CA 94107" }, "intermediates" : [ { "address" : "450 Serra Mall, Stanford, CA 94305, USA" }, { "location" :{ "latLng" :{ "latitude" : 37.419734 , "longitude" : -122.0807784 } } }, { "address" : "1836 El Camino Real, Redwood City, CA 94063" } ], "travelMode" : "DRIVE" , } ' - H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR API KEY ' - H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters , rou tes .legs , geocodi n gResul ts ' 'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes' The response includes the geocodingResults array containing the place ID for the origin, destination, and for two of the three waypoints.

