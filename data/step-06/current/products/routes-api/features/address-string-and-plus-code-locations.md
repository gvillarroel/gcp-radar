---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.514Z"
product_name: "Routes API"
product_slug: "routes-api"
feature_name: "Address string and Plus Code locations"
feature_slug: "address-string-and-plus-code-locations"
latest_feature_date: "2023-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/routes/migrate-routes-preview"
  - "https://developers.google.com/maps/documentation/routes/compute-route-over"
  - "https://developers.google.com/maps/documentation/routes/overview"
  - "https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes"
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
Coverage: MEDIUM

## Step 02 Summary

The Routes API can accept address strings and Plus Codes as location inputs alongside place IDs and latitude/longitude coordinates.

## Extended Definition

The Routes API can accept address strings and Plus Codes as location inputs alongside place IDs and latitude/longitude coordinates.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/routes/migrate-routes-preview](https://developers.google.com/maps/documentation/routes/migrate-routes-preview)
- [https://developers.google.com/maps/documentation/routes/compute-route-over](https://developers.google.com/maps/documentation/routes/compute-route-over)
- [https://developers.google.com/maps/documentation/routes/overview](https://developers.google.com/maps/documentation/routes/overview)
- [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)

## Supporting Pages

### Migrate from the Preview release \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/migrate-routes-preview](https://developers.google.com/maps/documentation/routes/migrate-routes-preview)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Routes API's GA release introduces new location specification options, including address strings and Plus Codes, and includes a geocodingResults array in the response.
- The geocodingResults array has been added to the response, providing place IDs and metadata for locations specified as address strings or Plus Codes.
- You can now specify locations using address strings and Plus Codes in addition to place IDs and coordinates.
- For every location in the request (origin, destination, or intermediate waypoint) that was specified as an address string or as a Plus code , the API performs a place ID lookup.

### Compute Routes Overview \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/compute-route-over](https://developers.google.com/maps/documentation/routes/compute-route-over)
- Source ID: `site-docs-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example curl - X POST - d ' { "origin" : { "address" : "1800 Amphitheatre Parkway, Mountain View, CA 94043" }, "destination" : { "address" : "Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132" }, "travelMode" : "DRIVE" } ' \ - H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR API KEY ' \ - H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters ' \ 'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes' The service then calculates the requested route, and returns the fields you've requested.
- What's next Get a route Available route options Choose what information to return Migrate from Directions API (Legacy) Migrate from the Routes API preview to GA Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Introduction Compute Routes is a method in the Routes API service that accepts an HTTPS request and returns the ideal route between two locations.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

### Compute Routes Overview \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/overview](https://developers.google.com/maps/documentation/routes/overview)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example curl - X POST - d ' { "origin" : { "address" : "1800 Amphitheatre Parkway, Mountain View, CA 94043" }, "destination" : { "address" : "Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132" }, "travelMode" : "DRIVE" } ' \ - H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR API KEY ' \ - H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters ' \ 'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes' The service then calculates the requested route, and returns the fields you've requested.
- What's next Get a route Available route options Choose what information to return Migrate from Directions API (Legacy) Migrate from the Routes API preview to GA Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Introduction Compute Routes is a method in the Routes API service that accepts an HTTPS request and returns the ideal route between two locations.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

### Method: computeRoutes \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- Source ID: `site-api-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP request Request body JSON representation Response body JSON representation PolylineQuality PolylineEncoding ReferenceRoute ExtraComputation Route JSON representation RouteLabel RouteLeg JSON representation Polyline JSON representation RouteLegStep JSON representation NavigationInstruction JSON representation Maneuver RouteLegStepTravelAdvisory JSON representation RouteLegStepLocalizedValues JSON representation RouteLegStepTransitDetails JSON representation TransitStopDetails JSON representation TransitStop JSON representation TransitDetailsLocalizedValues JSON representation LocalizedTime JSON representation TransitLine JSON representation TransitAgency JSON representation TransitVehicle JSON representation TransitVehicleType RouteLegTravelAdvisory JSON representation RouteLegLocalizedValues JSON representation StepsOverview JSON representation MultiModalSegment JSON representation Viewport JSON representation RouteLocalizedValues JSON representation PolylineDetails JSON representation FlyoverInfo JSON representation RoadFeatureState PolylinePointIndex JSON representation NarrowRoadInfo JSON representation GeocodingResults JSON representation GeocodedWaypoint JSON representation Returns the primary route along with optional alternate routes, given a set of terminal and intermediate waypoints.
- Request body The request body contains data with the following structure: JSON representation { "origin" : { object ( Waypoint ) } , "destination" : { object ( Waypoint ) } , "intermediates" : [ { object ( Waypoint ) } ] , "travelMode" : enum ( RouteTravelMode ) , "routingPreference" : enum ( RoutingPreference ) , "polylineQuality" : enum ( PolylineQuality ) , "polylineEncoding" : enum ( PolylineEncoding ) , "departureTime" : string , "arrivalTime" : string , "computeAlternativeRoutes" : boolean , "routeModifiers" : { object ( RouteModifiers ) } , "languageCode" : string , "regionCode" : string , "units" : enum ( Units ) , "optimizeWaypointOrder" : boolean , "requestedReferenceRoutes" : [ enum ( ReferenceRoute ) ] , "extraComputations" : [ enum ( ExtraComputation ) ] , "trafficModel" : enum ( TrafficModel ) , "transitPreferences" : { object ( TransitPreferences ) } } Fields origin object ( Waypoint ) Required.
- For example, in this method: Field mask of all available fields (for manual inspection): X-Goog-FieldMask: Field mask of Route-level duration, distance, and polyline (an example production setup): X-Goog-FieldMask: routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline Google discourage the use of the wildcard ( ) response field mask, or specifying the field mask at the top level ( routes ), because: Selecting only the fields that you need helps our server save computation cycles, allowing us to return the result to you with a lower latency.
- You may wish to examine the original request for misspellings and/or an incomplete address. placeId string The place ID for this result. intermediateWaypointRequestIndex integer The index of the corresponding intermediate waypoint in the request.

