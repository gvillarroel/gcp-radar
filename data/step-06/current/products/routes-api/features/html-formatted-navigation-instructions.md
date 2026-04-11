---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:22:04.472Z"
product_name: "Routes API"
product_slug: "routes-api"
feature_name: "HTML-formatted navigation instructions"
feature_slug: "html-formatted-navigation-instructions"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes"
  - "https://developers.google.com/maps/documentation/routes/migrate-routes-why"
  - "https://developers.google.com/maps/documentation/routes/alternative-routes"
keywords:
  - "html"
  - "formatted"
  - "navigation"
  - "instructions"
  - "the"
  - "routes"
  - "api"
  - "can"
---

# HTML-formatted navigation instructions

Product: Routes API
Coverage: LOW

## Step 02 Summary

The Routes API can return navigation instructions in HTML format.

## Extended Definition

The Routes API can return navigation instructions in HTML format.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- [https://developers.google.com/maps/documentation/routes/migrate-routes-why](https://developers.google.com/maps/documentation/routes/migrate-routes-why)
- [https://developers.google.com/maps/documentation/routes/alternative-routes](https://developers.google.com/maps/documentation/routes/alternative-routes)

## Supporting Pages

### Method: computeRoutes \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTML FORMATTED NAVIGATION INSTRUCTIONS NavigationInstructions presented as a formatted HTML text string.
- HTTP request Request body JSON representation Response body JSON representation PolylineQuality PolylineEncoding ReferenceRoute ExtraComputation Route JSON representation RouteLabel RouteLeg JSON representation Polyline JSON representation RouteLegStep JSON representation NavigationInstruction JSON representation Maneuver RouteLegStepTravelAdvisory JSON representation RouteLegStepLocalizedValues JSON representation RouteLegStepTransitDetails JSON representation TransitStopDetails JSON representation TransitStop JSON representation TransitDetailsLocalizedValues JSON representation LocalizedTime JSON representation TransitLine JSON representation TransitAgency JSON representation TransitVehicle JSON representation TransitVehicleType RouteLegTravelAdvisory JSON representation RouteLegLocalizedValues JSON representation StepsOverview JSON representation MultiModalSegment JSON representation Viewport JSON representation RouteLocalizedValues JSON representation PolylineDetails JSON representation FlyoverInfo JSON representation RoadFeatureState PolylinePointIndex JSON representation NarrowRoadInfo JSON representation GeocodingResults JSON representation GeocodedWaypoint JSON representation Returns the primary route along with optional alternate routes, given a set of terminal and intermediate waypoints.
- Example: "3.5s" . polyline object ( Polyline ) The polyline associated with this step. startLocation object ( Location ) The start location of this step. endLocation object ( Location ) The end location of this step. navigationInstruction object ( NavigationInstruction ) Navigation instructions. travelAdvisory object ( RouteLegStepTravelAdvisory ) Contains the additional information that the user should be informed about, such as possible traffic zone restrictions, on a leg step. localizedValues object ( RouteLegStepLocalizedValues ) Text representations of properties of the RouteLegStep . transitDetails object ( RouteLegStepTransitDetails ) Details pertaining to this step if the travel mode is TRANSIT . travelMode enum ( RouteTravelMode ) The travel mode used for this step.
- The index starts with 0 for the first intermediate waypoint provided in the input. localizedValues object ( RouteLocalizedValues ) Text representations of properties of the Route . routeToken string An opaque token that can be passed to Navigation SDK to reconstruct the route during navigation, and, in the event of rerouting, honor the original intention when the route was created.

### Why migrate to Routes API? \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/migrate-routes-why](https://developers.google.com/maps/documentation/routes/migrate-routes-why)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key differences This section covers key differences between Routes API and the services it replaces, along with ways you can address these differences when migrating from these services in your existing apps.
- Enhanced route computations for traffic The Routes API supports three routing preferences that you can use to balance between response latency and data quality when requesting traffic information.
- Key improvements This section covers some of the enhancements you can expect when using Routes API in your apps.
- Formatted addresses (reverse geocode) The Routes API does not provide formatted addresses in the response.

### Get alternative routes \_|\_ Routes API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/routes/alternative-routes](https://developers.google.com/maps/documentation/routes/alternative-routes)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Routes API can compute alternative routes by setting computeAlternativeRoutes to true.
- Page Summary outlined flag The Routes API can return up to three alternative routes in addition to the default route, allowing users to choose the best option for their needs.
- The following example shows how to request alternative routes in a computeRoutes method (REST) request. curl - X POST - d ' { "origin" :{ "location" :{ "latLng" :{ "latitude" : 42.340173523716736 , "longitude" : -71.05997968330408 } } }, "destination" :{ "location" :{ "latLng" :{ "latitude" : 42.075698891472804 , "longitude" : -72.59806562080408 } } }, "travelMode" : "DRIVE" , "routingPreference" : "TRAFFIC AWARE" , "computeAlternativeRoutes" : true } ' \ - H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR API KEY ' \ - H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters , rou tes .rou te Labels' \ 'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes' In this example, you specify a field mask so that the response contains only the duration , distanceMeters, and routeLabels properties for each route.
- Because of the additional processing required to calculate alternative routes, requesting alternative routes might increase the response time of the API.

