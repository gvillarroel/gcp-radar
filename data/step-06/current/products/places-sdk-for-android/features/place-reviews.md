---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.790Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Place reviews"
feature_slug: "place-reviews"
latest_feature_date: "2023-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/attributions"
  - "https://developers.google.com/maps/documentation/places/android-sdk/ktx"
keywords:
  - "place"
  - "reviews"
  - "adds"
  - "the"
  - "review"
  - "class"
  - "and"
  - "getreviews"
---

# Place reviews

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Adds the Review class and Place.getReviews() to return up to five reviews for a place.

## Extended Definition

Adds the Review class and Place.getReviews() to return up to five reviews for a place.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/attributions](https://developers.google.com/maps/documentation/places/android-sdk/attributions)
- [https://developers.google.com/maps/documentation/places/android-sdk/ktx](https://developers.google.com/maps/documentation/places/android-sdk/ktx)

## Supporting Pages

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Place class contains the new getReviews() method to support this field.
- New response data added to Placed Details (New) and Place Photos (New) Place Details (New) now includes the new Review class in the response Place object.
- Place Photo (New) adds the AuthorAttributions to the PhotoMetadata class.
- Call getReviews() to return up to five reviews for a place.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Place class contains the new getReviews() method to support this field.
- New response data added to Placed Details (New) and Place Photos (New) Place Details (New) now includes the new Review class in the response Place object.
- Place Photo (New) adds the AuthorAttributions to the PhotoMetadata class.
- Call getReviews() to return up to five reviews for a place.

### Policies and attributions for Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/attributions](https://developers.google.com/maps/documentation/places/android-sdk/attributions)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REVIEWS ); // Construct a request object, passing the place ID and fields array. final FetchPlaceRequest request = FetchPlaceRequest . newInstance ( "INSERT PLACE ID HERE" , placeFields ); placesClient . fetchPlace ( request ). addOnSuccessListener (( response ) - > { Place place = response . getPlace (); List<Review> reviews = place . getReviews (); // For loop for iterating over the List for ( int i = 0 ; i < reviews . size (); i ++ ) { // For each review, get the Review object.
- Applications must display attributions for place details, photos, and reviews, retrieved through specific API calls, preserving HTML formatting and proximity to the content.
- Note: Reviews and photos provided through the Places SDK for Android are subject to Google's content and product policies wherever you are in the world.
- To access the reviews, call Place.getReviews() : // Specify the fields to return. final List<Place .

### "Places Android KTX Overview and Setup \_|\_ Places SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/ktx](https://developers.google.com/maps/documentation/places/android-sdk/ktx)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Places KTX provides Kotlin extensions for the Places SDK for Android, enabling concise Kotlin development.
- Install KTX for the Places SDK To install KTX for the Places SDK for Android, add the following dependencies to your app-level build.gradle.kts file. dependencies { // KTX for the Places SDK for Android library implementation ( "com.google.maps.android:places-ktx:3.5.0" ) } Try the sample application The GitHub repository for this library also contains a demo application that shows how you can use the Places KTX library in your own app.
- A demo app is available on GitHub; to run it, clone the repository, obtain a Places API key, and store it in a secrets.properties file in the root directory.
- These extensions provide Kotlin language features that enable you to write concise and idiomatic Kotlin when developing for the Places SDK for Android.

