---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.782Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "PlacesClient.awaitFetchPhoto()"
feature_slug: "placesclient-awaitfetchphoto"
latest_feature_date: "2025-09-25"
deprecation_date: "2025-09-25"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/Places"
  - "https://developers.google.com/maps/documentation/places/android-sdk/support"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/android-sdk/ktx"
keywords:
  - "placesclient"
  - "awaitfetchphoto"
  - "the"
  - "api"
  - "and"
  - "its"
  - "related"
  - "request"
---

# PlacesClient.awaitFetchPhoto()

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The awaitFetchPhoto() API and its related request class are deprecated in favor of the newer photo resolution flow; deprecated on 2025-09-25.

## Extended Definition

The awaitFetchPhoto() API and its related request class are deprecated in favor of the newer photo resolution flow; deprecated on 2025-09-25.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/Places](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/Places)
- [https://developers.google.com/maps/documentation/places/android-sdk/support](https://developers.google.com/maps/documentation/places/android-sdk/support)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/android-sdk/ktx](https://developers.google.com/maps/documentation/places/android-sdk/ktx)

## Supporting Pages

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/Places](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/Places)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Summary Public methods static void addInternalUsageAttributionId ( String internalUsageAttributionId) Adds a usage attribution ID to the initializer, which helps Google understand which libraries and samples are helpful to developers, such as usage of a marker clustering library. synchronized static PlacesClient createClient ( Context context) Gets an instance of PlacesClient for a given Context . synchronized static void deinitialize () Deinitializes Places . static void initialize ( Context applicationContext, String apiKey) This method is deprecated.
- You may call this method again to update the API key and locale used; if you do so, all widgets and instances of PlacesClient will now use these new values.
- You may call this method again to update the API key and locale used; if you do so, all widgets and instances of PlacesClient will now use these new values.
- You may call this method again to update the API key used; if so, all widgets and instances of PlacesClient will now use this new key.

### Support Options for Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/support](https://developers.google.com/maps/documentation/places/android-sdk/support)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Members of the Google Maps and Google Places APIs team monitor several Google Maps and Google Places related tags on Stack Overflow.
- Contact Billing Support as a Billing Admin The Billing Admin role does not grant permissions to create support cases on its billing account, because access to Support (Tech or Billing) is based on project permissions, and is granted to Project Owners , Project Editors , or Tech Support Editors on a project tied to the billing account.
- Ask a new question Report an issue or feature request If you think you may have found a bug, or if you have a feature request that you would like to share with the Google Maps Platform APIs team, please file a bug or feature request in our issue tracker .
- Since you are the Project Owner for this new project, you have access to Google Maps Platform API support case creation from that new project and can make inquiries about the billing account attached to it.

### Autocomplete (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- The following example specifies a query string of "Soccer" and uses the primary types parameter to restrict results to establishments of type "sporting goods store" : Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); final List<Place.Field> primaryTypes = Arrays.asList("sporting goods store"); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Soccer") .setIncludedPrimaryTypes(primaryTypes) .setLocationBias(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); If you omit the primary types parameter, the results can include establishments of a type that you may not want, such as "athletic field" .
- The next example changes the previous request to use location bias: Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Amoeba") .setLocationBias(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); Use primary types Use the primary types parameter to restrict results from a request to be of a certain type as listed in Table A and Table B .
- BrandedTheme ) . build ()) . build ( this ); placeAutocompleteActivityResultLauncher . launch ( placeAutocompleteIntent ); Get place predictions programmatically Your app can get a list of predicted place names and/or addresses from the autocomplete API by calling PlacesClient.findAutocompletePredictions() , passing a FindAutocompletePredictionsRequest object.
- The following example uses location restriction to limit the request to a circular location restriction with a 5000-meter radius centered on San Francisco: Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Amoeba") .setLocationRestriction(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); With location bias, the location serves as a bias which means results around the specified location can be returned, including results outside the specified area.

### "Places Android KTX Overview and Setup \_|\_ Places SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/ktx](https://developers.google.com/maps/documentation/places/android-sdk/ktx)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A demo app is available on GitHub; to run it, clone the repository, obtain a Places API key, and store it in a secrets.properties file in the root directory.
- Note: As of version 4.0.0 , the Places SDK for Android includes native Kotlin APIs that can be used instead of the Places Android KTX extensions.
- Native Kotlin APIs within the Places SDK for Android (version 4.0.0 and later) can be used as an alternative to Places Android KTX extensions.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Places KTX provides Kotlin extensions for the Places SDK for Android, enabling concise Kotlin development.

