---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:22:04.474Z"
product_name: "Routes API"
product_slug: "routes-api"
feature_name: "Traffic model selection"
feature_slug: "traffic-model-selection"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes"
  - "https://developers.google.com/maps/documentation/routes/migrate-routes-preview"
  - "https://developers.google.com/maps/documentation/routes/config_trade_offs"
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
Coverage: LOW

## Step 02 Summary

The Routes API can use a specified traffic model when computing routes with traffic.

## Extended Definition

The Routes API can use a specified traffic model when computing routes with traffic.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- [https://developers.google.com/maps/documentation/routes/migrate-routes-preview](https://developers.google.com/maps/documentation/routes/migrate-routes-preview)
- [https://developers.google.com/maps/documentation/routes/config_trade_offs](https://developers.google.com/maps/documentation/routes/config_trade_offs)

## Supporting Pages

### Method: computeRoutes \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Request body The request body contains data with the following structure: JSON representation { "origin" : { object ( Waypoint ) } , "destination" : { object ( Waypoint ) } , "intermediates" : [ { object ( Waypoint ) } ] , "travelMode" : enum ( RouteTravelMode ) , "routingPreference" : enum ( RoutingPreference ) , "polylineQuality" : enum ( PolylineQuality ) , "polylineEncoding" : enum ( PolylineEncoding ) , "departureTime" : string , "arrivalTime" : string , "computeAlternativeRoutes" : boolean , "routeModifiers" : { object ( RouteModifiers ) } , "languageCode" : string , "regionCode" : string , "units" : enum ( Units ) , "optimizeWaypointOrder" : boolean , "requestedReferenceRoutes" : [ enum ( ReferenceRoute ) ] , "extraComputations" : [ enum ( ExtraComputation ) ] , "trafficModel" : enum ( TrafficModel ) , "transitPreferences" : { object ( TransitPreferences ) } } Fields origin object ( Waypoint ) Required.
- HTTP request POST https://routes.googleapis.com/directions/v2:computeRoutes The URL uses gRPC Transcoding syntax.
- Example: "3.5s" . polyline object ( Polyline ) The polyline associated with this step. startLocation object ( Location ) The start location of this step. endLocation object ( Location ) The end location of this step. navigationInstruction object ( NavigationInstruction ) Navigation instructions. travelAdvisory object ( RouteLegStepTravelAdvisory ) Contains the additional information that the user should be informed about, such as possible traffic zone restrictions, on a leg step. localizedValues object ( RouteLegStepLocalizedValues ) Text representations of properties of the RouteLegStep . transitDetails object ( RouteLegStepTransitDetails ) Details pertaining to this step if the travel mode is TRANSIT . travelMode enum ( RouteTravelMode ) The travel mode used for this step.
- For example, in this method: Field mask of all available fields (for manual inspection): X-Goog-FieldMask: Field mask of Route-level duration, distance, and polyline (an example production setup): X-Goog-FieldMask: routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline Google discourage the use of the wildcard ( ) response field mask, or specifying the field mask at the top level ( routes ), because: Selecting only the fields that you need helps our server save computation cycles, allowing us to return the result to you with a lower latency.

### Migrate from the Preview release \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/migrate-routes-preview](https://developers.google.com/maps/documentation/routes/migrate-routes-preview)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Routes API's GA release introduces new location specification options, including address strings and Plus Codes, and includes a geocodingResults array in the response.
- The following fields will no longer be included in computeRouteMatrix responses unless explicitly enabled by setting extraComputations : travelAdvisory.tollInfo (Toll info) The following fields will no longer be included in computeRoutes responses unless explicitly enabled by setting extraComputations : routes.legs.travelAdvisory.tollInfo (Toll info) routes.travelAdvisory.tollInfo (Toll info) routes.travelAdvisory.fuelConsumptionMicroliters (Fuel consumption) routes.travelAdvisory.speedReadingIntervals (Traffic on a polyline) routes.legs.travelAdvisory.speedReadingIntervals (Traffic on a polyline) What do I need to do?
- New features added to the GA release The GA release adds the following new features that were not included in the Preview: Along with place IDs and latitude/longitude coordinates, you can now specify a location in the GA release by using: Address strings ("Chicago, IL" or "Darwin, NT, Australia") Address strings are often how a user inputs an address.
- Changes to existing Preview features You must now explicitly enable the following features in the GA by adding the new array extraComputations field to the request: Toll info Fuel consumption Traffic on a polyline In the Preview release, you used a field mask to specify to return information for these features in the response.

### Set the level of traffic data \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/config_trade_offs](https://developers.google.com/maps/documentation/routes/config_trade_offs)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Example: How to select traffic aware routing The following JSON code demonstrates how to set the TRAFFIC AWARE OPTIMAL routing preference in a request message entity body. { "origin" : { "location" : { "latLng" : { "latitude" : 37.419734 , "longitude" :- 122.0827784 } } }, "destination" : { "location" : { "latLng" : { "latitude" : 37.417670 , "longitude" :- 122.079595 } } }, "travelMode" : "DRIVE" , "routingPreference" : "TRAFFIC AWARE OPTIMAL" } Configure traffic on polylines The Routes API lets you request information about traffic conditions along a traffic-aware polyline .
- Page Summary outlined flag The Routes API offers three traffic preferences: TRAFFIC UNAWARE for fastest response, TRAFFIC AWARE for balanced accuracy and speed, and TRAFFIC AWARE OPTIMAL for the most accurate results with higher latency.
- Home Products Google Maps Platform Documentation Web Services Routes API Send feedback Set the level of traffic data Stay organized with collections Save and categorize content based on your preferences.
- How to set the traffic level The Routes API provides RoutingPreference (REST) and RoutingPreference (gRPC) that let you specify routing preferences for calculating routes.

