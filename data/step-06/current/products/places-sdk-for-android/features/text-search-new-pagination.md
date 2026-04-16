---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.777Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Text Search (New) pagination"
feature_slug: "text-search-new-pagination"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/text-search"
  - "https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete"
keywords:
  - "text"
  - "search"
  - "new"
  - "pagination"
  - "the"
  - "getpagination"
  - "method"
  - "adds"
---

# Text Search (New) pagination

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The getPagination() method adds pagination support to Text Search (New).

## Extended Definition

The getPagination() method adds pagination support to Text Search (New).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/text-search](https://developers.google.com/maps/documentation/places/android-sdk/text-search)
- [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)

## Supporting Pages

### Text Search (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/text-search](https://developers.google.com/maps/documentation/places/android-sdk/text-search)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NAME )). setMaxResultCount ( 10 ). build (); // using pagination object (Preferred) placesClient . searchByText ( searchByTextRequest ) . addOnSuccessListener (( response ) - > { List<Place> places = response . getPlaces (); Log . i ( TAG , "Places result: " + places ); Pagination pagination = response . getPagination (); if ( pagination . hasNextPage ()) { pagination . setPageSize ( 20 ); // change the page size from 10 to 20 pagination . fetchNextPage () . addOnSuccessListener (( nextPageResponse ) - > { List<Place> nextPagePlaces = nextPageResponse . getPlaces (); Log . i ( TAG , "Next page places result: " + nextPagePlaces ); }); } }) . addOnFailureListener (( exception ) - > { if ( exception instanceof ApiException ) { // Handle error with given status code } }); Required parameters The required parameters for SearchByTextRequest are: Field list Specify which place data fields to return.
- For more examples of accessing data in a Place object, see Access Place object data fields Pagination Text Search's SearchByTextResponse class provides access to text search result pagination through its getPagination() method, which returns a Pagination object.
- Place.Field.WEBSITE URI The following fields trigger the Text Search Enterprise Plus SKU : Place.Field.ALLOWS DOGS Place.Field.CURBSIDE PICKUP Place.Field.DELIVERY Place.Field.DINE IN Place.Field.EDITORIAL SUMMARY Place.Field.EV CHARGE OPTIONS Place.Field.FUEL OPTIONS Place.Field.GOOD FOR CHILDREN Place.Field.GOOD FOR GROUPS Place.Field.GOOD FOR WATCHING SPORTS Place.Field.LIVE MUSIC Place.Field.MENU FOR CHILDREN Place.Field.OUTDOOR SEATING Place.Field.PARKING OPTIONS Place.Field.PAYMENT OPTIONS Place.Field.RESERVABLE Place.Field.RESTROOM Place.Field.REVIEWS Place.Field.SERVES BEER Place.Field.SERVES BREAKFAST Place.Field.SERVES BRUNCH Place.Field.SERVES COCKTAILS Place.Field.SERVES COFFEE Place.Field.SERVES DESSERT Place.Field.SERVES DINNER Place.Field.SERVES LUNCH Place.Field.SERVES VEGETARIAN FOOD Place.Field.SERVES WINE Place.Field.TAKEOUT To set the field list parameter, call the setPlaceFields() method when building the SearchByTextRequest object.
- LatLng southWest = new LatLng ( 37.38816277477739 , - 122.08813770258874 ); LatLng northEast = new LatLng ( 37.39580487866437 , - 122.07702325966572 ); // Use the builder to create a SearchByTextRequest object. final SearchByTextRequest searchByTextRequest = SearchByTextRequest . builder ( "Spicy Vegetarian Food" , placeFields ) . setMaxResultCount ( 10 ) . setLocationRestriction ( RectangularBounds . newInstance ( southWest , northEast )). build (); // Call PlacesClient.searchByText() to perform the search. // Define a response handler to process the returned List of Place objects. placesClient . searchByText ( searchByTextRequest ) . addOnSuccessListener ( response -> { List<Place> places = response . getPlaces (); }); In this example, you: Set the field list to include only Place.Field.ID and Place.Field.DISPLAY NAME .

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- Expanded place types The new SDK includes new place types, which are returned as part of the Place Details and Text Search response.
- You can also use these new types, and the existing types, in a search with Text Search.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- Source ID: `site-docs-root-2`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- Expanded place types The new SDK includes new place types, which are returned as part of the Place Details and Text Search response.
- You can also use these new types, and the existing types, in a search with Text Search.

### Autocomplete (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag Autocomplete (New) provides on-the-fly place predictions based on user input, using text search and geographic bounds for refined results.
- Autocomplete (New) returns place predictions in response to a request that includes a text search string and geographic bounds that control the search area.
- The following example specifies a query string of "Soccer" and uses the primary types parameter to restrict results to establishments of type "sporting goods store" : Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); final List<Place.Field> primaryTypes = Arrays.asList("sporting goods store"); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Soccer") .setIncludedPrimaryTypes(primaryTypes) .setLocationBias(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); If you omit the primary types parameter, the results can include establishments of a type that you may not want, such as "athletic field" .
- The following example uses location restriction to limit the request to a circular location restriction with a 5000-meter radius centered on San Francisco: Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Amoeba") .setLocationRestriction(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); With location bias, the location serves as a bias which means results around the specified location can be returned, including results outside the specified area.

