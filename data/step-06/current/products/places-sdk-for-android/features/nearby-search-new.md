---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.788Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Nearby Search (New)"
feature_slug: "nearby-search-new"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/nearby-search"
  - "https://developers.google.com/maps/documentation/places/android-sdk/text-search"
  - "https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy"
keywords:
  - "nearby"
  - "search"
  - "new"
  - "lets"
  - "you"
  - "for"
  - "places"
  - "within"
---

# Nearby Search (New)

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Nearby Search (New) lets you search for places within a circular region defined by a center point and radius.

## Extended Definition

Nearby Search (New) lets you search for places within a circular region defined by a center point and radius.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/nearby-search](https://developers.google.com/maps/documentation/places/android-sdk/nearby-search)
- [https://developers.google.com/maps/documentation/places/android-sdk/text-search](https://developers.google.com/maps/documentation/places/android-sdk/text-search)
- [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)

## Supporting Pages

### Nearby Search (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/nearby-search](https://developers.google.com/maps/documentation/places/android-sdk/nearby-search)
- Source ID: `site-docs-root`
- Final score: 349
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Nearby Search lets you search for places within a specified radius of a central point, returning a list of matching places.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Nearby Search (New) allows searching for places within a defined circular region using latitude, longitude, and radius.
- Home Products Google Maps Platform Documentation Android Places SDK for Android Guides Send feedback Nearby Search (New) Stay organized with collections Save and categorize content based on your preferences.
- LatLng center = new LatLng ( 40.7580 , - 73.9855 ); CircularBounds circle = CircularBounds . newInstance ( center , / radius = / 1000 ); // Define a list of types to include. final List<String> includedTypes = Arrays . asList ( "restaurant" , "cafe" ); // Define a list of types to exclude. final List<String> excludedTypes = Arrays . asList ( "pizza restaurant" , "american restaurant" ); // Use the builder to create a SearchNearbyRequest object. final SearchNearbyRequest searchNearbyRequest = SearchNearbyRequest . builder ( / location restriction = / circle , placeFields ) . setIncludedTypes ( includedTypes ) . setExcludedTypes ( excludedTypes ) . setMaxResultCount ( 10 ) . build ()); // Call placesClient.searchNearby() to perform the search. // Define a response handler to process the returned List of Place objects. placesClient . searchNearby ( searchNearbyRequest ) . addOnSuccessListener ( response - > { List<Place> places = response . getPlaces (); }); Note: For more information on initializing PlacesClient , see Initialize the Places API client .

### Text Search (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/text-search](https://developers.google.com/maps/documentation/places/android-sdk/text-search)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LatLng southWest = new LatLng ( 37.38816277477739 , - 122.08813770258874 ); LatLng northEast = new LatLng ( 37.39580487866437 , - 122.07702325966572 ); // Use the builder to create a SearchByTextRequest object. final SearchByTextRequest searchByTextRequest = SearchByTextRequest . builder ( "Spicy Vegetarian Food" , placeFields ) . setMaxResultCount ( 10 ) . setLocationRestriction ( RectangularBounds . newInstance ( southWest , northEast )). build (); // Call PlacesClient.searchByText() to perform the search. // Define a response handler to process the returned List of Place objects. placesClient . searchByText ( searchByTextRequest ) . addOnSuccessListener ( response -> { List<Place> places = response . getPlaces (); }); In this example, you: Set the field list to include only Place.Field.ID and Place.Field.DISPLAY NAME .
- Home Products Google Maps Platform Documentation Android Places SDK for Android Guides Send feedback Text Search (New) Stay organized with collections Save and categorize content based on your preferences.
- The main difference between the two is that Text Search (New) lets you specify an arbitrary search string while Nearby Search (New) requires a specific area in which to search.
- Android implementation uses SearchByTextRequest and SearchByTextResponse within the Places SDK for Android (New), offering cancellation options.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- Source ID: `site-docs-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- The Places SDK lets you search for and retrieve information for a variety of place types using a text string or by proximity.
- Simplified pricing Pricing is simplified with Places SDK for Android (New) so that you only pay for the data you use.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- Source ID: `site-docs-root-2`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- The Places SDK lets you search for and retrieve information for a variety of place types using a text string or by proximity.
- Simplified pricing Pricing is simplified with Places SDK for Android (New) so that you only pay for the data you use.

