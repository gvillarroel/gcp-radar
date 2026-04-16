---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.049Z"
product_name: "Places API"
product_slug: "places-api"
feature_name: "Search along route"
feature_slug: "search-along-route"
latest_feature_date: "2024-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1"
  - "https://developers.google.com/maps/documentation/places/web-service/search-along-route"
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/searchText"
  - "https://developers.google.com/maps/documentation/places/web-service/sar-overview"
keywords:
  - "search"
  - "along"
  - "route"
  - "capability"
  - "that"
  - "finds"
  - "places"
  - "predefined"
---

# Search along route

Product: Places API
Coverage: MEDIUM

## Step 02 Summary

A search capability that finds places along a predefined route and can return routing summaries.

## Extended Definition

A search capability that finds places along a predefined route and can return routing summaries.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- [https://developers.google.com/maps/documentation/places/web-service/search-along-route](https://developers.google.com/maps/documentation/places/web-service/search-along-route)
- [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/searchText](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/searchText)
- [https://developers.google.com/maps/documentation/places/web-service/sar-overview](https://developers.google.com/maps/documentation/places/web-service/sar-overview)

## Supporting Pages

### Package google.maps.places.v1 \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- Source ID: `site-api-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Index Places (interface) AddressDescriptor (message) AddressDescriptor.Area (message) AddressDescriptor.Area.Containment (enum) AddressDescriptor.Landmark (message) AddressDescriptor.Landmark.SpatialRelationship (enum) AuthorAttribution (message) AutocompletePlacesRequest (message) AutocompletePlacesRequest.LocationBias (message) AutocompletePlacesRequest.LocationRestriction (message) AutocompletePlacesResponse (message) AutocompletePlacesResponse.Suggestion (message) AutocompletePlacesResponse.Suggestion.FormattableText (message) AutocompletePlacesResponse.Suggestion.PlacePrediction (message) AutocompletePlacesResponse.Suggestion.QueryPrediction (message) AutocompletePlacesResponse.Suggestion.StringRange (message) AutocompletePlacesResponse.Suggestion.StructuredFormat (message) Circle (message) ContentBlock (message) ContextualContent (message) ContextualContent.Justification (message) ContextualContent.Justification.BusinessAvailabilityAttributesJustification (message) ContextualContent.Justification.ReviewJustification (message) ContextualContent.Justification.ReviewJustification.HighlightedText (message) ContextualContent.Justification.ReviewJustification.HighlightedText.HighlightedTextRange (message) EVChargeOptions (message) EVChargeOptions.ConnectorAggregation (message) EVConnectorType (enum) FuelOptions (message) FuelOptions.FuelPrice (message) FuelOptions.FuelPrice.FuelType (enum) GetPhotoMediaRequest (message) GetPlaceRequest (message) Photo (message) PhotoMedia (message) Place (message) Place.AccessibilityOptions (message) Place.AddressComponent (message) Place.Attribution (message) Place.BusinessStatus (enum) Place.ConsumerAlert (message) Place.ConsumerAlert.Details (message) Place.ConsumerAlert.Details.Link (message) Place.ContainingPlace (message) Place.EvChargeAmenitySummary (message) Place.GenerativeSummary (message) Place.GoogleMapsLinks (message) Place.NeighborhoodSummary (message) Place.OpeningHours (message) Place.OpeningHours.Period (message) Place.OpeningHours.Period.Point (message) Place.OpeningHours.SecondaryHoursType (enum) Place.OpeningHours.SpecialDay (message) Place.ParkingOptions (message) Place.PaymentOptions (message) Place.PlusCode (message) Place.ReviewSummary (message) Place.SubDestination (message) Polyline (message) PriceLevel (enum) PriceRange (message) Review (message) RouteModifiers (message) RoutingParameters (message) RoutingPreference (enum) RoutingSummary (message) RoutingSummary.Leg (message) SearchNearbyRequest (message) SearchNearbyRequest.LocationRestriction (message) SearchNearbyRequest.RankPreference (enum) SearchNearbyResponse (message) SearchTextRequest (message) SearchTextRequest.EVOptions (message) SearchTextRequest.LocationBias (message) SearchTextRequest.LocationRestriction (message) SearchTextRequest.RankPreference (enum) SearchTextRequest.SearchAlongRouteParameters (message) SearchTextResponse (message) TravelMode (enum) Places Service definition for the Places API.
- When you do a search along route, legs contains two legs: one from the origin to place, and one from the place to the destination. directions uri string A link to show directions on Google Maps using the waypoints from the given routing summary.
- Results are not guaranteed to be along the route provided, but rather are ranked within the search area defined by the polyline and, optionally, by the locationBias or locationRestriction based on minimal detour times from origin to destination.
- Fields places[] Place A list of places that meet the user's text search criteria. routing summaries[] RoutingSummary A list of routing summaries where each entry associates to the corresponding place in the same index in the places field.

### Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/search-along-route](https://developers.google.com/maps/documentation/places/web-service/search-along-route)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- The following example uses the route's encoded polyline to bias the search results: curl -X POST -d '{ "textQuery" : "Spicy Vegetarian Food", "searchAlongRouteParameters": { "polyline": { "encodedPolyline": " ROUTE POLYLINE " } } }' \ -H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API KEY ' \ -H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel' \ 'https://places.googleapis.com/v1/places:searchText' The response contains the places that match the search criteria, biased to the route: { "places" : [ { "formattedAddress" : "60 Morris St, San Francisco, CA 94107, USA" , "priceLevel" : "PRICE LEVEL MODERATE" , "displayName" : { "text" : "Umami Express" , "languageCode" : "en" } }, { "formattedAddress" : "1130 4th St, San Francisco, CA 94158, USA" , "priceLevel" : "PRICE LEVEL MODERATE" , "displayName" : { "text" : "House of Tadu Ethiopian Kitchen" , "languageCode" : "en" } }, { "formattedAddress" : "1602 El Camino Real Ste A, Belmont, CA 94002, USA" , "priceLevel" : "PRICE LEVEL MODERATE" , "displayName" : { "text" : "Eats Meets West Bowls" , "languageCode" : "en" } }, /.../ ] } You don't have to bias the results to the entire route.
- In the following example, you specify the latitude and longitude coordinates of San Mateo, CA, which is approximately halfway along the route polyline: curl -X POST -d '{ "textQuery" : "Spicy Vegetarian Food", "searchAlongRouteParameters": { "polyline": { "encodedPolyline": " ROUTE POLYLINE " } }, "routingParameters": { "origin": { "latitude": 37.56617, "longitude": -122.30870 } } }' \ -H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API KEY ' \ -H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel' \ 'https://places.googleapis.com/v1/places:searchText' Note: Because search along route returns places with minimal detour times from origin to destination, in cases where the route origin and destination are the same or close to one another, search along route may not return any results.
- To search along a route: Use the Routes API to calculate a route that returns a route's encoded polyline in the response.
- The response then contains places that match the search criteria and are also located near the specified route.

### Method: places.searchText \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/searchText](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/searchText)
- Source ID: `site-api-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request body The request body contains data with the following structure: JSON representation { "textQuery" : string , "languageCode" : string , "regionCode" : string , "rankPreference" : enum ( RankPreference ) , "includedType" : string , "openNow" : boolean , "minRating" : number , "maxResultCount" : integer , "pageSize" : integer , "pageToken" : string , "priceLevels" : [ enum ( PriceLevel ) ] , "strictTypeFiltering" : boolean , "locationBias" : { object ( LocationBias ) } , "locationRestriction" : { object ( LocationRestriction ) } , "evOptions" : { object ( EVOptions ) } , "routingParameters" : { object ( RoutingParameters ) } , "searchAlongRouteParameters" : { object ( SearchAlongRouteParameters ) } , "includePureServiceAreaBusinesses" : boolean , "includeFutureOpeningBusinesses" : boolean } Fields textQuery string Required.
- HTTP request Request body JSON representation Response body JSON representation Authorization scopes RankPreference LocationBias JSON representation LocationRestriction JSON representation EVOptions JSON representation SearchAlongRouteParameters JSON representation Polyline JSON representation ContextualContent JSON representation Justification JSON representation ReviewJustification JSON representation HighlightedText JSON representation HighlightedTextRange JSON representation BusinessAvailabilityAttributesJustification JSON representation Text query based place search.
- If successful, the response body contains data with the following structure: JSON representation { "places" : [ { object ( Place ) } ] , "routingSummaries" : [ { object ( RoutingSummary ) } ] , "contextualContents" : [ { object ( ContextualContent ) } ] , "nextPageToken" : string , "searchUri" : string } Fields places[] object ( Place ) A list of places that meet the user's text search criteria. routingSummaries[] object ( RoutingSummary ) A list of routing summaries where each entry associates to the corresponding place in the same index in the places field.
- Results are not guaranteed to be along the route provided, but rather are ranked within the search area defined by the polyline and, optionally, by the locationBias or locationRestriction based on minimal detour times from origin to destination.

### Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/sar-overview](https://developers.google.com/maps/documentation/places/web-service/sar-overview)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Overview of search along route Search along route features are available in the following Places (New) APIs: Text Search (New) only: Search for places along a predefined trip route.
- For example, consider the route from the origin, referred to as a waypoint in the Routes API, to the destination as calculated by the Routes API: When you search along the route, the search is biased to return places near the route with minimal detour times from the origin to the destination.
- Searching along a route is similar to using the locationRestriction or locationBias request options to bias the search results. locationRestriction returns search results that fall within the viewport bounds, while locationBias may return search results outside of the viewport.
- The response then contains places that match the search criteria and are also located near the specified route.

