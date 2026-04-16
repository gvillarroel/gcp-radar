---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.789Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "PhotoMetadata.authorAttributions"
feature_slug: "photometadata-authorattributions"
latest_feature_date: "2023-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AuthorAttributions"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-photos"
  - "https://developers.google.com/maps/documentation/places/android-sdk/attributions"
  - "https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy"
keywords:
  - "photometadata"
  - "authorattributions"
  - "adds"
  - "author"
  - "attributions"
  - "to"
  - "for"
  - "place"
---

# PhotoMetadata.authorAttributions

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Adds author attributions to PhotoMetadata for place photos.

## Extended Definition

Adds author attributions to PhotoMetadata for place photos.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AuthorAttributions](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AuthorAttributions)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-photos](https://developers.google.com/maps/documentation/places/android-sdk/place-photos)
- [https://developers.google.com/maps/documentation/places/android-sdk/attributions](https://developers.google.com/maps/documentation/places/android-sdk/attributions)
- [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)

## Supporting Pages

### AuthorAttributions \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AuthorAttributions](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AuthorAttributions)
- Source ID: `site-docs-reference`
- Final score: 263
- Re-rank relevance: N/A

Evidence snippets:
- AuthorAttributions public abstract class AuthorAttributions implements Parcelable Information about the author(s) for the photo of a Place .
- Inherited Constants From android.os.Parcelable static final int CONTENTS FILE DESCRIPTOR = 1 static final int PARCELABLE STABILITY LOCAL = 0 static final int PARCELABLE STABILITY VINTF = 1 static final int PARCELABLE WRITE RETURN VALUE = 1 Inherited methods From android.os.Parcelable abstract int describeContents () int getStability () abstract void writeToParcel ( Parcel p, int p1) Public constructors AuthorAttributions public AuthorAttributions () Public methods asList public abstract List < AuthorAttribution > asList () The list of AuthorAttribution . newInstance public static AuthorAttributions newInstance ( List < AuthorAttribution > authorAttributions) Creates an AuthorAttributions .
- Summary Public constructors AuthorAttributions () Public methods abstract List < AuthorAttribution > asList () The list of AuthorAttribution . static AuthorAttributions newInstance ( List < AuthorAttribution > authorAttributions) Creates an AuthorAttributions .
- Please enable your API key for the Places API (New) in the Google Cloud Console to access the data.

### Place Photos (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-photos](https://developers.google.com/maps/documentation/places/android-sdk/place-photos)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PHOTO METADATAS ); // Get a Place object final FetchPlaceRequest placeRequest = FetchPlaceRequest . newInstance ( placeId , fields ); placesClient . fetchPlace ( placeRequest ). addOnSuccessListener (( response ) -> { final Place place = response . getPlace (); // Get the photo metadata. final List<PhotoMetadata> metadata = place . getPhotoMetadatas (); if ( metadata == null metadata . isEmpty ()) { Log . w ( TAG , "No photo metadata." ); return ; } final PhotoMetadata photoMetadata = metadata . get ( 0 ); // Get the attribution text and author attributions. final String attributions = photoMetadata . getAttributions (); final AuthorAttributions authorAttributions = photoMetadata . getAuthorAttributions (); // Create a FetchResolvedPhotoUriRequest. final FetchResolvedPhotoUriRequest photoRequest = FetchResolvedPhotoUriRequest . builder ( photoMetadata ) . setMaxWidth ( 500 ) . setMaxHeight ( 300 ) . build (); // Request the photo URI placesClient . fetchResolvedPhotoUri ( photoRequest ). addOnSuccessListener (( fetchResolvedPhotoUriResponse ) -> { Uri uri = fetchResolvedPhotoUriResponse . getUri (); RequestOptions requestOptions = new RequestOptions (). override ( Target .
- AuthorAttributions , an AuthorAttributions object accessed by PhotoMetadata.getAuthorAttributions() .
- In the OnSuccessListener for your FetchPlaceResponse , call Place.getPhotoMetadas() to get the photo metadata object of type PhotoMetadata from the response Place object.
- While most Place Photos can be used without attribution, some may require displaying attributions obtained from the PhotoMetadata object alongside the image.

### Policies and attributions for Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/attributions](https://developers.google.com/maps/documentation/places/android-sdk/attributions)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String attributions = photoMetadata . getAttributions (); To get the author attributions for a photo, call PhotoMetadata.getAuthorAttributions() .
- String reviewAttribution = placeReview . getAttribution (); AuthorAttribution authorAttribution = placeReview . getAuthorAttribution (); // Display the review contents and attributions as necessary. } }). addOnFailureListener (( exception ) - > { if ( exception instanceof ApiException ) { // Handle the error. } }); Displaying third-party attributions Attributions to third-party providers contain content and links in HTML format that you must preserve and display to the user in the format in which they are provided.
- AuthorAttributions authorAttributions = photoMetadata . getAuthorAttributions (); List<AuthorAttribution> authorAttributionList = authorAttributions . asList (); Search results attributions In Europe, when using Google's unadulterated ranking, search products must have explainer text no more than 1 click away that describes the main factors and the weighting of the main factors that determine search results ranking.
- PhotoMetadata photoMetadata = place . getPhotoMetadatas (). get ( 0 ); // Get the author attributions object.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Place Photo (New) adds the AuthorAttributions to the PhotoMetadata class.
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- Migrate to the new APIs To migrate to the new APIs, see the following migration guides: Migrate to Place Details (New) Migrate to Place Photo (New) Migrate to Autocomplete (New) Enhancements in Places SDK for Android (New) This section covers key features added to Places SDK for Android (New).

