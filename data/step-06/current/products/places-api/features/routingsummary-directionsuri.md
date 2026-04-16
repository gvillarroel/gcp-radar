---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.048Z"
product_name: "Places API"
product_slug: "places-api"
feature_name: "RoutingSummary.directionsUri"
feature_slug: "routingsummary-directionsuri"
latest_feature_date: "2024-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/RoutingSummary"
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1"
  - "https://developers.google.com/maps/documentation/places/web-service/routing-summary"
  - "https://developers.google.com/maps/documentation/places/web-service/routing-summary-sar"
keywords:
  - "routingsummary"
  - "directionsuri"
  - "routing"
  - "summary"
  - "field"
  - "that"
  - "provides"
  - "maps"
---

# RoutingSummary.directionsUri

Product: Places API
Coverage: MEDIUM

## Step 02 Summary

A routing summary field that provides a Google Maps directions link for a place.

## Extended Definition

A routing summary field that provides a Google Maps directions link for a place.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/RoutingSummary](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/RoutingSummary)
- [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- [https://developers.google.com/maps/documentation/places/web-service/routing-summary](https://developers.google.com/maps/documentation/places/web-service/routing-summary)
- [https://developers.google.com/maps/documentation/places/web-service/routing-summary-sar](https://developers.google.com/maps/documentation/places/web-service/routing-summary-sar)

## Supporting Pages

### RoutingSummary \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/RoutingSummary](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/RoutingSummary)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- When you do a search along route, legs contains two legs: one from the origin to place, and one from the place to the destination. directionsUri string A link to show directions on Google Maps using the waypoints from the given routing summary.
- Home Products Google Maps Platform Documentation Web Services Places API Reference Send feedback RoutingSummary Stay organized with collections Save and categorize content based on your preferences.
- The directionsUri field provides a Google Maps link for directions.
- Page Summary outlined flag Routing Summary provides the duration and distance between an origin and a destination, or between an origin, a place, and a destination when searching along a route.

### Package google.maps.places.v1 \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- Source ID: `site-api-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Fields places[] Place A list of places that meets user's requirements like places types, number of places and specific location restriction. routing summaries[] RoutingSummary A list of routing summaries where each entry associates to the corresponding place in the same index in the places field.
- Fields places[] Place A list of places that meet the user's text search criteria. routing summaries[] RoutingSummary A list of routing summaries where each entry associates to the corresponding place in the same index in the places field.
- Index Places (interface) AddressDescriptor (message) AddressDescriptor.Area (message) AddressDescriptor.Area.Containment (enum) AddressDescriptor.Landmark (message) AddressDescriptor.Landmark.SpatialRelationship (enum) AuthorAttribution (message) AutocompletePlacesRequest (message) AutocompletePlacesRequest.LocationBias (message) AutocompletePlacesRequest.LocationRestriction (message) AutocompletePlacesResponse (message) AutocompletePlacesResponse.Suggestion (message) AutocompletePlacesResponse.Suggestion.FormattableText (message) AutocompletePlacesResponse.Suggestion.PlacePrediction (message) AutocompletePlacesResponse.Suggestion.QueryPrediction (message) AutocompletePlacesResponse.Suggestion.StringRange (message) AutocompletePlacesResponse.Suggestion.StructuredFormat (message) Circle (message) ContentBlock (message) ContextualContent (message) ContextualContent.Justification (message) ContextualContent.Justification.BusinessAvailabilityAttributesJustification (message) ContextualContent.Justification.ReviewJustification (message) ContextualContent.Justification.ReviewJustification.HighlightedText (message) ContextualContent.Justification.ReviewJustification.HighlightedText.HighlightedTextRange (message) EVChargeOptions (message) EVChargeOptions.ConnectorAggregation (message) EVConnectorType (enum) FuelOptions (message) FuelOptions.FuelPrice (message) FuelOptions.FuelPrice.FuelType (enum) GetPhotoMediaRequest (message) GetPlaceRequest (message) Photo (message) PhotoMedia (message) Place (message) Place.AccessibilityOptions (message) Place.AddressComponent (message) Place.Attribution (message) Place.BusinessStatus (enum) Place.ConsumerAlert (message) Place.ConsumerAlert.Details (message) Place.ConsumerAlert.Details.Link (message) Place.ContainingPlace (message) Place.EvChargeAmenitySummary (message) Place.GenerativeSummary (message) Place.GoogleMapsLinks (message) Place.NeighborhoodSummary (message) Place.OpeningHours (message) Place.OpeningHours.Period (message) Place.OpeningHours.Period.Point (message) Place.OpeningHours.SecondaryHoursType (enum) Place.OpeningHours.SpecialDay (message) Place.ParkingOptions (message) Place.PaymentOptions (message) Place.PlusCode (message) Place.ReviewSummary (message) Place.SubDestination (message) Polyline (message) PriceLevel (enum) PriceRange (message) Review (message) RouteModifiers (message) RoutingParameters (message) RoutingPreference (enum) RoutingSummary (message) RoutingSummary.Leg (message) SearchNearbyRequest (message) SearchNearbyRequest.LocationRestriction (message) SearchNearbyRequest.RankPreference (enum) SearchNearbyResponse (message) SearchTextRequest (message) SearchTextRequest.EVOptions (message) SearchTextRequest.LocationBias (message) SearchTextRequest.LocationRestriction (message) SearchTextRequest.RankPreference (enum) SearchTextRequest.SearchAlongRouteParameters (message) SearchTextResponse (message) TravelMode (enum) Places Service definition for the Places API.
- RoutingSummary The duration and distance from the routing origin to a place in the response, and a second leg from that place to the destination, if requested.

### Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/routing-summary](https://developers.google.com/maps/documentation/places/web-service/routing-summary)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the launch stage descriptions . { "places" : [ { "formattedAddress" : "1, Westfield Sydney Central Plaza, 450 George St, Sydney NSW 2000, Australia" , "displayName" : { "text" : "Gözleme King Sydney" , "languageCode" : "en" } }, { "formattedAddress" : "367 Pitt St, Sydney NSW 2000, Australia" , "priceLevel" : "PRICE LEVEL MODERATE" , "displayName" : { "text" : "Mother Chu's Vegetarian Kitchen" , "languageCode" : "en" } }, … ] "routingSummaries" : [ { "legs" : [ { "duration" : "597s" , "distanceMeters" : 2607 } ], "directionsUri" : "https://www.google.com/maps/dir/-33.8688,151.1957362/''/data=!4m6!4m5!1m0!1m2!1m1!1s0x6b12ae3fa97cd745:0x6aecf365bf497c08!3e0" }, { "legs" : [ { "duration" : "562s" , "distanceMeters" : 2345 } ], "directionsUri" : "https://www.google.com/maps/dir/-33.8688,151.1957362/''/data=!4m6!4m5!1m0!1m2!1m1!1s0x6b12ae3da97f60c1:0x845f3273bd764f6c!3e0" }, … ] } From this example, you can see that the duration and distance from the routing origin to the first place in the results is 597 seconds and 2607 meters.
- Use Text Search (New) In the following request, you calculate the travel duration and distance to each place in the Text Search (New) response: curl -X POST -d '{ "textQuery" : "Spicy Vegetarian Food in Sydney, Australia", "routingParameters": { "origin": { "latitude": -33.8688, "longitude": 151.1957362 } } }' \ -H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API KEY ' \ -H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel, routingSummaries ' \ 'https://places.googleapis.com/v1/places:searchText' The response contains two JSON arrays: the places array contains the matching places, and the routingSummaries array containing the duration and distance to travel to each place: { "places" : [ { object ( Place ) } ] "routingSummaries" : [ { object ( RoutingSummary ) } } Each element in the routingSummaries array is at the corresponding array location as the place in the places array.
- The routingParameters.routingPreference property does affect the directions contained in the Preview (Pre-GA) directionsUri field because Google Maps displays traffic options when it opens the link.
- Note: This response also includes the Preview (pre-GA) directionsUri field in the routing summary for each place.

### Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/routing-summary-sar](https://developers.google.com/maps/documentation/places/web-service/routing-summary-sar)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, Text Search (New) performs the search along the entire route: curl -X POST -d '{ "textQuery" : "Spicy Vegetarian Food", "searchAlongRouteParameters": { "polyline": { "encodedPolyline": " ROUTE POLYLINE " } } }' \ -H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API KEY ' \ -H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel, routingSummaries ' \ 'https://places.googleapis.com/v1/places:searchText' The response contains two arrays: the places array containing the matching places, and the routingSummaries array containing the duration and distance to travel to each place: { "places" : [ { "formattedAddress" : "1199 El Camino Real, San Bruno, CA 94066, USA" , "priceLevel" : "PRICE LEVEL INEXPENSIVE" , "displayName" : { "text" : "Vegan Mob - Vegan BBQ and Soul Food" , "languageCode" : "en" } }, { "formattedAddress" : "839 Kearny St, San Francisco, CA 94108, USA" , "priceLevel" : "PRICE LEVEL MODERATE" , "displayName" : { "text" : "Enjoy Vegetarian" , "languageCode" : "en" } }, … ], "routingSummaries" : [ { "legs" : [ { "duration" : "285s" , "distanceMeters" : 1616 }, { "duration" : "2466s" , "distanceMeters" : 58147 } ], "directionsUri" : "https://www.google.com/maps/dir/37.42268,-122.08473/''/37.77877,-122.38781/data=!4m7!4m6!1m0!1m2!1m1!1s0x808f87f9ede375f5:0xa37171fea1a16b28!1m0!3e0" }, { "legs" : [ { "duration" : "696s" , "distanceMeters" : 4704 }, { "duration" : "2787s" , "distanceMeters" : 58901 } ], "directionsUri" : "https://www.google.com/maps/dir/37.42268,-122.08473/''/37.77877,-122.38781/data=!4m7!4m6!1m0!1m2!1m1!1s0x808580f4cebdb06f:0xd3af09e5742234f2!1m0!3e0" }, … ] } For each entry in the legs array, Text Search (New) returns a two-leg trip time: The first leg contains the travel duration and distance from the origin to the place.
- Note: This response also includes the Preview (pre-GA) directionsUri field in the routing summary for each place.
- In the next example, you specify a routing origin as the coordinates of San Mateo, CA, specify to avoid tolls, and set the number of results to 5: curl -X POST -d '{ "textQuery" : "Spicy Vegetarian Food", "maxResultCount": 5, "searchAlongRouteParameters": { "polyline": { "encodedPolyline": " ROUTE POLYLINE " } }, "routingParameters": { "origin": { "latitude": 37.56617, "longitude": -122.30870 }, "travelMode":"DRIVE", "routeModifiers": { "avoidTolls": true } } }' \ -H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API KEY ' \ -H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel, routingSummaries ' \ 'https://places.googleapis.com/v1/places:searchText' The following image shows a map that contains the route polyline, the new origin (light-blue pin), and the places in the search results (green pins).
- To use Text Search (New) to calculate the routing summary along with search along a route: Use the Routes API to calculate a route that returns a route polyline in the response.

