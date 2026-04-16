---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.786Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Search Along Route"
feature_slug: "search-along-route"
latest_feature_date: "2024-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/search-along-route"
  - "https://developers.google.com/maps/documentation/places/android-sdk/sar-overview"
  - "https://developers.google.com/maps/documentation/places/android-sdk/routing-summary-sar"
  - "https://developers.google.com/maps/documentation/places/android-sdk/overview"
keywords:
  - "search"
  - "along"
  - "route"
  - "lets"
  - "you"
  - "for"
  - "places"
  - "predefined"
---

# Search Along Route

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Search Along Route lets you search for places along predefined routes and calculate routing summaries to those places.

## Extended Definition

Search Along Route lets you search for places along predefined routes and calculate routing summaries to those places.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/search-along-route](https://developers.google.com/maps/documentation/places/android-sdk/search-along-route)
- [https://developers.google.com/maps/documentation/places/android-sdk/sar-overview](https://developers.google.com/maps/documentation/places/android-sdk/sar-overview)
- [https://developers.google.com/maps/documentation/places/android-sdk/routing-summary-sar](https://developers.google.com/maps/documentation/places/android-sdk/routing-summary-sar)
- [https://developers.google.com/maps/documentation/places/android-sdk/overview](https://developers.google.com/maps/documentation/places/android-sdk/overview)

## Supporting Pages

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/search-along-route](https://developers.google.com/maps/documentation/places/android-sdk/search-along-route)
- Source ID: `site-docs-root`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SearchAlongRouteParameters searchAlongRouteParameters = SearchAlongRouteParameters . builder () . setPolyline ( encodedPolyline ) . build (); // Use the builder to create a SearchByTextRequest object and pass the search along route and routing parameters. final SearchByTextRequest searchByTextRequest = SearchByTextRequest . builder ( "Spicy Vegetarian Food" , placeFields ) . setMaxResultCount ( 10 ) . setRoutingParameters ( routingParameters ) . setSearchAlongRouteParameters ( searchAlongRouteParameters ) . build (); // Call PlacesClient.searchByText() to perform the search. // Define a response handler to process the returned List of Place objects. placesClient . searchByText ( searchByTextRequest ) . addOnSuccessListener ( response - > { List<Place> places = response . getPlaces (); }); Note: Because search along route returns places with minimal detour times from origin to destination, in cases where the route origin and destination are the same or close to one another, search along route may not return any results.
- SearchAlongRouteParameters searchAlongRouteParameters = SearchAlongRouteParameters . builder () . setPolyline ( encodedPolyline ) . build (); // Use the builder to create a SearchByTextRequest object and pass the search along route parameters. final SearchByTextRequest searchByTextRequest = SearchByTextRequest . builder ( "Spicy Vegetarian Food" , placeFields ) . setMaxResultCount ( 10 ) . setSearchAlongRouteParameters ( searchAlongRouteParameters ) . build (); // Call PlacesClient.searchByText() to perform the search. // Define a response handler to process the returned List of Place objects. placesClient . searchByText ( searchByTextRequest ) . addOnSuccessListener ( response - > { List<Place> places = response . getPlaces (); }); The SearchByTextResponse class represents the response from a search request.
- For example, you might already be halfway along the route before you perform the search.
- In the following example, the polyline defines the route from: Origin : 1600 Amphitheatre Parkway, Mountain View, CA Destination : 24 Willie Mays Plaza, San Francisco, CA The trip's encoded polyline for this route is represented by the string: wblcFptchVIFOd@G@EVw@Ms@dHKR}ApNAAF @Hf@TjAb@bBb@ @n@p@^Rd@ @Vz@HVz@nDLt@?d@Kr@c@ @mDG?@aEfGkCnDuChDm@bb@[@{GhHeEdEciBnnBkCDkC DaClEuKjT Z l@Qb@iR @}EzJ AdB Und@kAfCaOjZkg@vcAqBzD ]rr@iBlEaBxEgArD}AlG}AhHsAIeAnH{@dIq@dJgL iBq@rHu@vGgAtHwArHaBhHkBzG DpJ}Nbc@iBhGkA EgC LcIjb@oAhG AvDgAdDkApC BzCiBpCsFvGii@vn@scAxlAmLjNgSzUeRjT{TzWqExEmG FuNlMmMhLaRvPqOlNmbAl}@mFlF{PlOmJfIoElE}LtMiSbU HI}}@jcAwl@vp@oAbBqA BeAhCm@tBg@fCWrBQ BI DaB rBO D[bEa@Dm@pDaAdE{@vC BbEkB Def@ z@sEzHKJeS ]}KS{\\ l@cXpe@sBpDm@bAuCxDkBrBiC BwCtByBnAcBx@}Bt@{Bn@gh@ LaOpDeFhAoDj@aE^kVrA E^iEr@yD @uBr@gMjF EnAcCh@eFr@ DRsAD}@Jsu@xCWDqIV}BCeCOyDm@cBa@ DmA}JeE CwAsBcBiBoBuAqBmOoX{CuEkB CoDqDkVoUoD{CeE DkEkC FeCqB}@sDuAoDgAeCe@cCW}CK}BDaDTeOlBcuBrYaNlBq@Dyd@rGyFt@yBb@eBf@oCnAoBlAkIpGkAp@wBbAaCt@oFdAwKjBoGxA{FbByIjC HfB @KmNdDuC @uFzBcH C{@\\[?sBv@}@VaBVoA@y@EmAQcA[w@]aBkAeAkA}BuDUKs@uAqBsCwBcCgAiAiN MyKsJsG{GkBaBiBuA{BwAwDkBcOaHiC AiCg@}BQcCAcBHqBVkB@qEjAu@LgCVgAHwG@sG?mABsH^eNr@mBXy@NqBt@uAt@aBlAkAlA}BtCyApBiAdB BxB{AB}@j@oAf@s@PeCVcIf@gAAkAQy@YiAo@ A{@ DgEgJqM DeEaM}PoBiCzAsBw@kAdAGVk@f@q@z@C Note: Search along route only supports an encoded polyline, which can be passed as a string and includes compression with minimal lossiness.

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/sar-overview](https://developers.google.com/maps/documentation/places/android-sdk/sar-overview)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, consider the route from the origin, referred to as a waypoint in the Routes API, to the destination as calculated by the Routes API: When you search along the route, the search is biased to return places near the route with minimal detour times from the origin to the destination.
- Overview of search along route Search along route features are available in the following Places (New) APIs: Text Search (New) only: Search for places along a predefined trip route.
- Text Search (New) lets you use this calculated route to perform a search along a route .
- However, while the locationBias and locationRestriction options let you specify a region to bias the search results, the search along route feature in Text Search also lets you bias the search results to include those with minimal detour times from the route origin to the route destination.

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/routing-summary-sar](https://developers.google.com/maps/documentation/places/android-sdk/routing-summary-sar)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SearchAlongRouteParameters searchAlongRouteParameters = SearchAlongRouteParameters . builder () . setPolyline ( encodedPolyline ) . build (); // Use the builder to create a SearchByTextRequest object and pass the search along route parameters. final SearchByTextRequest searchByTextRequest = SearchByTextRequest . builder ( "Spicy Vegetarian Food" , placeFields ) . setMaxResultCount ( 5 ) . setRoutingParameters ( routingParameters ) . setSearchAlongRouteParameters ( searchAlongRouteParameters ) . setRoutingSummariesIncluded ( true ) . build (); // Call PlacesClient.searchByText() to perform the search. // Define a response handler to process the returned List of Place objects. placesClient . searchByText ( searchByTextRequest ) . addOnSuccessListener ( response - > { List<Place> places = response . getPlaces (); List<RoutingSummary> routingSummaries = result . getRoutingSummaries (); List<Leg> legs = routingSummaries . get ( 0 ). getLegs (); Duration duration = legs . get ( 0 ). getDuration (); }); The following image shows a map that contains the route polyline, the new origin (light-blue pin), and the places in the search results (green pins).
- SearchAlongRouteParameters searchAlongRouteParameters = SearchAlongRouteParameters . builder () . setPolyline ( encodedPolyline ) . build (); // Use the builder to create a SearchByTextRequest object and pass the search along route parameters. final SearchByTextRequest searchByTextRequest = SearchByTextRequest . builder ( "Spicy Vegetarian Food" , placeFields ) . setMaxResultCount ( 10 ) . setSearchAlongRouteParameters ( searchAlongRouteParameters ) . setRoutingSummariesIncluded ( true ) . build (); // Call PlacesClient.searchByText() to perform the search. // Define a response handler to process the returned List of Place objects. placesClient . searchByText ( searchByTextRequest ) . addOnSuccessListener ( response - > { List<Place> places = response . getPlaces (); List<RoutingSummary> routingSummaries = response . getRoutingSummaries (); List<Leg> legs = routingSummaries . get ( 0 ). getLegs (); Duration duration = legs . get ( 0 ). getDuration (); }); The response contains objects that include lists of the requested places fields and routing summaries containing the duration and distance to travel to each place.
- By default, Text Search (New) performs the search along the entire route: // Define the route polyline object using the route string.
- Combine routing summaries with search along route You can combine routing summary calculations with search along a route .

### Overview \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/overview](https://developers.google.com/maps/documentation/places/android-sdk/overview)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Introduction The Places SDK for Android lets you build location-aware apps that respond contextually to the local businesses and other places near the user's device.
- Before using the SDK, you need a project with a billing account and the Places API enabled, along with adhering to Google Maps Platform Terms of Service.
- Home Products Google Maps Platform Documentation Android Places SDK for Android Guides Send feedback Overview Stay organized with collections Save and categorize content based on your preferences.
- This means you can build rich apps based on places that mean something to the user, to complement the straightforward geographic-based services offered by the Android location services .

