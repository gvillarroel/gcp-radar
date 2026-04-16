---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.791Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Text Search"
feature_slug: "text-search"
latest_feature_date: "2023-11-14"
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
  - "adds"
  - "based"
  - "place"
  - "for"
  - "queries"
  - "like"
---

# Text Search

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Adds text-based place search for queries like "pizza in New York".

## Extended Definition

Adds text-based place search for queries like "pizza in New York".

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
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Text Search retrieves place information via a text string, supporting various queries like business names, addresses, and phone numbers.
- Home Products Google Maps Platform Documentation Android Places SDK for Android Guides Send feedback Text Search (New) Stay organized with collections Save and categorize content based on your preferences.
- Text Search (New) returns information about a set of places based on a string (for example, "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street").
- Place.Field.WEBSITE URI The following fields trigger the Text Search Enterprise Plus SKU : Place.Field.ALLOWS DOGS Place.Field.CURBSIDE PICKUP Place.Field.DELIVERY Place.Field.DINE IN Place.Field.EDITORIAL SUMMARY Place.Field.EV CHARGE OPTIONS Place.Field.FUEL OPTIONS Place.Field.GOOD FOR CHILDREN Place.Field.GOOD FOR GROUPS Place.Field.GOOD FOR WATCHING SPORTS Place.Field.LIVE MUSIC Place.Field.MENU FOR CHILDREN Place.Field.OUTDOOR SEATING Place.Field.PARKING OPTIONS Place.Field.PAYMENT OPTIONS Place.Field.RESERVABLE Place.Field.RESTROOM Place.Field.REVIEWS Place.Field.SERVES BEER Place.Field.SERVES BREAKFAST Place.Field.SERVES BRUNCH Place.Field.SERVES COCKTAILS Place.Field.SERVES COFFEE Place.Field.SERVES DESSERT Place.Field.SERVES DINNER Place.Field.SERVES LUNCH Place.Field.SERVES VEGETARIAN FOOD Place.Field.SERVES WINE Place.Field.TAKEOUT To set the field list parameter, call the setPlaceFields() method when building the SearchByTextRequest object.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- Source ID: `site-docs-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- The Places SDK lets you search for and retrieve information for a variety of place types using a text string or by proximity.
- Home Products Google Maps Platform Documentation Android Places SDK for Android Legacy Send feedback Places SDK (Legacy) overview Stay organized with collections Save and categorize content based on your preferences.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- The Places SDK lets you search for and retrieve information for a variety of place types using a text string or by proximity.
- Home Products Google Maps Platform Documentation Android Places SDK for Android Legacy Send feedback Places SDK (Legacy) overview Stay organized with collections Save and categorize content based on your preferences.

### Autocomplete (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Autocomplete (New) provides on-the-fly place predictions based on user input, using text search and geographic bounds for refined results.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Autocomplete feature returns place predictions based on a text query.
- For example: < ? xml version = "1.0" encoding = "utf-8" ? > < resources > < style name = "BrandedTheme" parent = "PlacesMaterialTheme" > < ! -- Color tokens. -- > < item name = "placesColorOnNeutralContainer" > #5300e8 < / item > < item name = "placesColorOnNeutralContainerVariant" > #ee6002 < / item > ... < ! -- Typography tokens. -- > < item name = "placesTextAppearanceTitleLarge" > @style / PlacesTextAppearance < / item > < item name = "placesTextAppearanceBodyMedium" > @style / PlacesTextAppearance < / item > ... < ! -- Spacing tokens. -- > < item name = "placesSpacingSmall" > 6 dp < / item > < item name = "placesSpacingMedium" > 12 dp < / item > ... < ! -- Attribution tokens. -- > < item name = "placesColorAttributionLightTheme" > white < / item > < item name = "placesColorAttributionDarkTheme" > black < / item > < / style > < / resources > Note: For reference on the theme attributes that you can customize, see the UI Kit Custom styling page.
- Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Sicilian piz") .setRegionCode("ES") .setLocationRestriction(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); Note: For more information on initializing PlacesClient , see Initialize the Places API client .

