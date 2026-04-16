---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.789Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Place photo URIs"
feature_slug: "place-photo-uris"
latest_feature_date: "2024-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-photos"
  - "https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken"
  - "https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy"
keywords:
  - "place"
  - "photo"
  - "uris"
  - "adds"
  - "the"
  - "ability"
  - "to"
  - "retrieve"
---

# Place photo URIs

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Adds the ability to retrieve photo URIs for a place in addition to photo bitmaps.

## Extended Definition

Adds the ability to retrieve photo URIs for a place in addition to photo bitmaps.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/place-photos](https://developers.google.com/maps/documentation/places/android-sdk/place-photos)
- [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken)
- [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)

## Supporting Pages

### Place Photos (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-photos](https://developers.google.com/maps/documentation/places/android-sdk/place-photos)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To retrieve a place photo, you must first fetch a Place object using Place Details (New) with the PHOTO METADATAS field, then use this metadata to request the photo URI via the Places SDK.
- PHOTO METADATAS ); // Get a Place object final FetchPlaceRequest placeRequest = FetchPlaceRequest . newInstance ( placeId , fields ); placesClient . fetchPlace ( placeRequest ). addOnSuccessListener (( response ) -> { final Place place = response . getPlace (); // Get the photo metadata. final List<PhotoMetadata> metadata = place . getPhotoMetadatas (); if ( metadata == null metadata . isEmpty ()) { Log . w ( TAG , "No photo metadata." ); return ; } final PhotoMetadata photoMetadata = metadata . get ( 0 ); // Get the attribution text and author attributions. final String attributions = photoMetadata . getAttributions (); final AuthorAttributions authorAttributions = photoMetadata . getAuthorAttributions (); // Create a FetchResolvedPhotoUriRequest. final FetchResolvedPhotoUriRequest photoRequest = FetchResolvedPhotoUriRequest . builder ( photoMetadata ) . setMaxWidth ( 500 ) . setMaxHeight ( 300 ) . build (); // Request the photo URI placesClient . fetchResolvedPhotoUri ( photoRequest ). addOnSuccessListener (( fetchResolvedPhotoUriResponse ) -> { Uri uri = fetchResolvedPhotoUriResponse . getUri (); RequestOptions requestOptions = new RequestOptions (). override ( Target .
- SIZE ORIGINAL ); Glide . with ( this ). load ( uri ). apply ( requestOptions ). into ( imageView ); }). addOnFailureListener (( exception ) -> { if ( exception instanceof ApiException ) { final ApiException apiException = ( ApiException ) exception ; Log . e ( TAG , "Place not found: " + exception . getMessage ()); final int statusCode = apiException . getStatusCode (); // TODO: Handle error with given status code. } }); }); Attributions In most cases, place photos can be used without attribution, or will have the required attribution included as part of the image.
- Place Photos examples The following example demonstrates getting a place photo URI. // Define a Place ID. final String placeId = "INSERT PLACE ID HERE" ; // Specify fields.

### AutocompleteSessionToken \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Summary Public constructors AutocompleteSessionToken () Public methods static AutocompleteSessionToken newInstance () final String toString () Inherited Constants From android.os.Parcelable static final int CONTENTS FILE DESCRIPTOR = 1 static final int PARCELABLE STABILITY LOCAL = 0 static final int PARCELABLE STABILITY VINTF = 1 static final int PARCELABLE WRITE RETURN VALUE = 1 Inherited methods From android.os.Parcelable abstract int describeContents () int getStability () abstract void writeToParcel ( Parcel p, int p1) Public constructors AutocompleteSessionToken public AutocompleteSessionToken () Public methods newInstance public static AutocompleteSessionToken newInstance () toString public final String toString () Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Once that is done, the token can then be used in a subsequent com.google.android.libraries.places.api.net.FetchPlaceRequest to conclude the session.
- Multiple instances of com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest can be created using the same session token.
- After these requests, use the token in a FetchPlaceRequest to conclude the session.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Place Photo (New) adds the AuthorAttributions to the PhotoMetadata class.
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- Migrate to the new APIs To migrate to the new APIs, see the following migration guides: Migrate to Place Details (New) Migrate to Place Photo (New) Migrate to Autocomplete (New) Enhancements in Places SDK for Android (New) This section covers key features added to Places SDK for Android (New).

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Place Photo (New) adds the AuthorAttributions to the PhotoMetadata class.
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- Migrate to the new APIs To migrate to the new APIs, see the following migration guides: Migrate to Place Details (New) Migrate to Place Photo (New) Migrate to Autocomplete (New) Enhancements in Places SDK for Android (New) This section covers key features added to Places SDK for Android (New).

