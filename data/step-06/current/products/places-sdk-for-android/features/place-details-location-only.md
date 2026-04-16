---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.788Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Place Details (Location Only)"
feature_slug: "place-details-location-only"
latest_feature_date: "2024-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/details-place"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy"
keywords:
  - "place"
  - "details"
  - "location"
  - "only"
  - "preview"
  - "sku"
  - "that"
  - "includes"
---

# Place Details (Location Only)

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Preview Place Details SKU that includes fields previously billed under Place Details (Basic).

## Extended Definition

Preview Place Details SKU that includes fields previously billed under Place Details (Basic).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/details-place](https://developers.google.com/maps/documentation/places/android-sdk/details-place)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)

## Supporting Pages

### Place Details (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/details-place](https://developers.google.com/maps/documentation/places/android-sdk/details-place)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Place Details (New) responses Place Details (New) returns data in the form of a Place object, which includes only the fields that you requested using the field list .
- Specify one or more of the following fields: The following fields trigger the Place Details Essentials IDs Only SKU : Place.Field.ID Place.Field.PHOTO METADATAS Place.Field.RESOURCE NAME Note: The RESOURCE NAME field contains the place resource name in the form: places/PLACE ID .
- Place.Field.WEBSITE URI The following fields trigger the Place Details Enterprise Plus SKU : Place.Field.ALLOWS DOGS Place.Field.CURBSIDE PICKUP Place.Field.DELIVERY Place.Field.DINE IN Place.Field.EDITORIAL SUMMARY Place.Field.EV CHARGE OPTIONS Place.Field.FUEL OPTIONS Place.Field.GOOD FOR CHILDREN Place.Field.GOOD FOR GROUPS Place.Field.GOOD FOR WATCHING SPORTS Place.Field.LIVE MUSIC Place.Field.MENU FOR CHILDREN Place.Field.OUTDOOR SEATING Place.Field.PARKING OPTIONS Place.Field.PAYMENT OPTIONS Place.Field.RESERVABLE Place.Field.RESTROOM Place.Field.REVIEWS Place.Field.SERVES BEER Place.Field.SERVES BREAKFAST Place.Field.SERVES BRUNCH Place.Field.SERVES COCKTAILS Place.Field.SERVES COFFEE Place.Field.SERVES DESSERT Place.Field.SERVES DINNER Place.Field.SERVES LUNCH Place.Field.SERVES VEGETARIAN FOOD Place.Field.SERVES WINE Place.Field.TAKEOUT Optional parameters The optional parameters for FetchPlaceRequest are: Region code The region code used to format the response, specified as a two-character CLDR code value.
- Place.Field.PRIMARY TYPE Place.Field.PRIMARY TYPE DISPLAY NAME Place.Field.SUB DESTINATIONS Place.Field.UTC OFFSET The following fields trigger the Place Details Enterprise SKU : Place.Field.CURRENT OPENING HOURS Place.Field.CURRENT SECONDARY OPENING HOURS Place.Field.INTERNATIONAL PHONE NUMBER Use instead of Place.Field.PHONE NUMBER , which is deprecated.

### Autocomplete (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- When requesting Place Details (New) about the selected prediction, include the following parameters: The place ID from the Autocomplete (New) response The session token used in the Autocomplete (New) request The fields parameter specifying the Autocomplete (New) data fields you need No, needs only address and location Geocoding API could be a more cost-effective option than Place Details (New) for your application, depending on the performance of your Autocomplete (New) usage.
- The following example specifies a query string of "Soccer" and uses the primary types parameter to restrict results to establishments of type "sporting goods store" : Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); final List<Place.Field> primaryTypes = Arrays.asList("sporting goods store"); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Soccer") .setIncludedPrimaryTypes(primaryTypes) .setLocationBias(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); If you omit the primary types parameter, the results can include establishments of a type that you may not want, such as "athletic field" .
- When requesting Place Details (New) about the selected prediction, include the following parameters: The place ID from the Autocomplete (New) response The session token used in the Autocomplete (New) request The fields parameter specifying fields such as address and geometry Consider delaying Autocomplete (New) requests You can employ strategies such as delaying a Autocomplete (New) request until the user has typed in the first three or four characters so that your application makes fewer requests.
- Since your application requires Place Details (New), such as the place name, business status, or opening hours, your implementation of Autocomplete (New) should use a session token (programmatically or built into the JavaScript , Android , or iOS widgets) per session plus applicable Places SKUs, depending on which place data fields you request.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- New response data added to Placed Details (New) and Place Photos (New) Place Details (New) now includes the new Review class in the response Place object.
- Expanded place types The new SDK includes new place types, which are returned as part of the Place Details and Text Search response.
- Simplified pricing Pricing is simplified with Places SDK for Android (New) so that you only pay for the data you use.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- New response data added to Placed Details (New) and Place Photos (New) Place Details (New) now includes the new Review class in the response Place object.
- Expanded place types The new SDK includes new place types, which are returned as part of the Place Details and Text Search response.
- Simplified pricing Pricing is simplified with Places SDK for Android (New) so that you only pay for the data you use.

