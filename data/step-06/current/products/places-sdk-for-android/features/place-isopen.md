---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.794Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Place.isOpen()"
feature_slug: "place-isopen"
latest_feature_date: "2023-04-13"
deprecation_date: "2023-04-13"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/text-search"
  - "https://developers.google.com/maps/documentation/places/android-sdk/details-place"
  - "https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy"
keywords:
  - "place"
  - "isopen"
  - "deprecated"
  - "method"
  - "for"
  - "checking"
  - "open"
  - "status"
---

# Place.isOpen()

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Deprecated method for checking place open status; use PlacesClient.isOpen() instead; deprecated on 2023-04-13.

## Extended Definition

Deprecated method for checking place open status; use PlacesClient.isOpen() instead; deprecated on 2023-04-13.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/text-search](https://developers.google.com/maps/documentation/places/android-sdk/text-search)
- [https://developers.google.com/maps/documentation/places/android-sdk/details-place](https://developers.google.com/maps/documentation/places/android-sdk/details-place)
- [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)

## Supporting Pages

### Text Search (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/text-search](https://developers.google.com/maps/documentation/places/android-sdk/text-search)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Place.Field.PHOTO METADATAS Place.Field.PLUS CODE Place.Field.PRIMARY TYPE Place.Field.PRIMARY TYPE DISPLAY NAME Place.Field.SHORT FORMATTED ADDRESS Place.Field.SUB DESTINATIONS Place.Field.TYPES Place.Field.UTC OFFSET Place.Field.VIEWPORT The following fields trigger the Text Search Enterprise SKU : Place.Field.CURRENT OPENING HOURS Place.Field.CURRENT SECONDARY OPENING HOURS Place.Field.INTERNATIONAL PHONE NUMBER Use instead of Place.Field.PHONE NUMBER , which is deprecated.
- Place.Field.ADDRESS COMPONENTS Place.Field.ADR FORMAT ADDRESS Place.Field.BUSINESS STATUS Place.Field.FORMATTED ADDRESS Use instead of Place.Field.ADDRESS (deprecated).
- Place.Field.WEBSITE URI The following fields trigger the Text Search Enterprise Plus SKU : Place.Field.ALLOWS DOGS Place.Field.CURBSIDE PICKUP Place.Field.DELIVERY Place.Field.DINE IN Place.Field.EDITORIAL SUMMARY Place.Field.EV CHARGE OPTIONS Place.Field.FUEL OPTIONS Place.Field.GOOD FOR CHILDREN Place.Field.GOOD FOR GROUPS Place.Field.GOOD FOR WATCHING SPORTS Place.Field.LIVE MUSIC Place.Field.MENU FOR CHILDREN Place.Field.OUTDOOR SEATING Place.Field.PARKING OPTIONS Place.Field.PAYMENT OPTIONS Place.Field.RESERVABLE Place.Field.RESTROOM Place.Field.REVIEWS Place.Field.SERVES BEER Place.Field.SERVES BREAKFAST Place.Field.SERVES BRUNCH Place.Field.SERVES COCKTAILS Place.Field.SERVES COFFEE Place.Field.SERVES DESSERT Place.Field.SERVES DINNER Place.Field.SERVES LUNCH Place.Field.SERVES VEGETARIAN FOOD Place.Field.SERVES WINE Place.Field.TAKEOUT To set the field list parameter, call the setPlaceFields() method when building the SearchByTextRequest object.
- NAME )). setMaxResultCount ( 10 ). build (); // using pagination object (Preferred) placesClient . searchByText ( searchByTextRequest ) . addOnSuccessListener (( response ) - > { List<Place> places = response . getPlaces (); Log . i ( TAG , "Places result: " + places ); Pagination pagination = response . getPagination (); if ( pagination . hasNextPage ()) { pagination . setPageSize ( 20 ); // change the page size from 10 to 20 pagination . fetchNextPage () . addOnSuccessListener (( nextPageResponse ) - > { List<Place> nextPagePlaces = nextPageResponse . getPlaces (); Log . i ( TAG , "Next page places result: " + nextPagePlaces ); }); } }) . addOnFailureListener (( exception ) - > { if ( exception instanceof ApiException ) { // Handle error with given status code } }); Required parameters The required parameters for SearchByTextRequest are: Field list Specify which place data fields to return.

### Place Details (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/details-place](https://developers.google.com/maps/documentation/places/android-sdk/details-place)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Place.Field.PRIMARY TYPE Place.Field.PRIMARY TYPE DISPLAY NAME Place.Field.SUB DESTINATIONS Place.Field.UTC OFFSET The following fields trigger the Place Details Enterprise SKU : Place.Field.CURRENT OPENING HOURS Place.Field.CURRENT SECONDARY OPENING HOURS Place.Field.INTERNATIONAL PHONE NUMBER Use instead of Place.Field.PHONE NUMBER , which is deprecated.
- Place.Field.PLUS CODE Place.Field.SHORT FORMATTED ADDRESS Place.Field.TYPES Place.Field.VIEWPORT The following fields trigger the Place Details Pro SKU : Place.Field.ACCESSIBILITY OPTIONS Use instead of Place.Field.WHEELCHAIR ACCESSIBLE ENTRANCE (deprecated).
- Place.Field.NATIONAL PHONE NUMBER Place.Field.OPENING HOURS Place.Field.PRICE LEVEL Place.Field.RATING Place.Field.SECONDARY OPENING HOURS Place.Field.USER RATING COUNT Use instead of Place.Field.USER RATINGS TOTAL , which is deprecated.
- The following fields trigger the Place Details Essentials SKU : Place.Field.ADDRESS COMPONENTS ADR FORMAT ADDRESS Place.Field.FORMATTED ADDRESS Use instead of Place.Field.ADDRESS (deprecated).

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- Migrate to the new APIs To migrate to the new APIs, see the following migration guides: Migrate to Place Details (New) Migrate to Place Photo (New) Migrate to Autocomplete (New) Enhancements in Places SDK for Android (New) This section covers key features added to Places SDK for Android (New).
- Home Products Google Maps Platform Documentation Android Places SDK for Android Legacy Send feedback Places SDK (Legacy) overview Stay organized with collections Save and categorize content based on your preferences.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- Migrate to the new APIs To migrate to the new APIs, see the following migration guides: Migrate to Place Details (New) Migrate to Place Photo (New) Migrate to Autocomplete (New) Enhancements in Places SDK for Android (New) This section covers key features added to Places SDK for Android (New).
- Home Products Google Maps Platform Documentation Android Places SDK for Android Legacy Send feedback Places SDK (Legacy) overview Stay organized with collections Save and categorize content based on your preferences.

