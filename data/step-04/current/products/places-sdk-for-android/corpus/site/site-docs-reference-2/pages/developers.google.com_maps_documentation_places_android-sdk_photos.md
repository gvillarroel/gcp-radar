---
title: "Place Photos \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/photos
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/photos
  title: "Place Photos \_|\_ Places SDK for Android \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

This product or feature is in Legacy status. For more information about the Legacy status see Legacy products and features . To migrate to the Places API (New), see the Migration guide .
Home
Products
Google Maps Platform
Documentation
Android
Places SDK for Android
Legacy
Send feedback
Place Photos
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
You can use the Places SDK for Android to request a place photo to
display in your application. Photos returned by the photos service come from a
variety of sources, including business owners and user-contributed photos.
Places SDK for Android returns a bitmap image with a maximum
size of 1600 by 1600 pixels.
Photo retrieval process
To retrieve an image for a place:
Use Place Details to fetch a Place object (using
fetchPlace() ).
Be sure to include the Place.Field PHOTO_METADATAS field in the list of fields to
include in the response Place object.
In the
OnSuccessListener
for your
FetchPlaceResponse ,
use Place.getPhotoMetadas() to get the photo metadata object, of type
PhotoMetadata
from the response Place object.
Create a FetchPhotoRequest object,
optionally specifying maximum height and width (in pixels). Photos can have
a maximum width or height of 1600px.
Use PlacesClient.fetchPhoto()
to request the photo bitmap.
Add an OnSuccessListener and get the photo from the
FetchPhotoResponse .
Get a photo
The following example demonstrates getting a place photo:
Kotlin
// Define a Place ID.
val placeId = PlaceIdProvider . getRandomPlaceId ()
// Specify fields. Requests for photos must always have the PHOTO_METADATAS field.
val fields = listOf ( Place . Field . PHOTO_METADATAS )
// Get a Place object (this example uses fetchPlace(), but you can also use findCurrentPlace())
val placeRequest = FetchPlaceRequest . newInstance ( placeId , fields )
placesClient . fetchPlace ( placeRequest )
. addOnSuccessListener { response : FetchPlaceResponse - >
val place = response . place
// Get the photo metadata.
val metadata = place . photoMetadatas
if ( metadata == null || metadata . isEmpty ()) {
Log . w ( TAG , "No photo metadata." )
return @addOnSuccessListener
}
val photoMetadata = metadata . first ()
// Get the attribution text.
val attributions = photoMetadata ?. attributions
binding . placePhotosAttributions . text = attributions
// Create a FetchResolvedPhotoUriRequest.
val photoRequest = FetchResolvedPhotoUriRequest . builder ( photoMetadata )
. setMaxWidth ( 500 ) // Optional.
. setMaxHeight ( 300 ) // Optional.
. build ()
placesClient . fetchResolvedPhotoUri ( photoRequest )
. addOnSuccessListener { fetchPhotoResponse - >
val photoUri = fetchPhotoResponse . uri
Glide . with ( this )
. load ( photoUri )
. into ( binding . placePhotosResult )
}. addOnFailureListener { exception : Exception - >
if ( exception is ApiException ) {
Log . e ( TAG , "Place not found: " + exception . message )
val statusCode = exception . statusCode
// TODO: Handle error with given status code.
}
}
}
Java
// Define a Place ID.
final String placeId = PlaceIdProvider . getRandomPlaceId ();
// Specify fields. Requests for photos must always have the PHOTO_METADATAS field.
final List<Place . Field > fields = Collections . singletonList ( Place . Field . PHOTO_METADATAS );
// Get a Place object (this example uses fetchPlace(), but you can also use findCurrentPlace())
final FetchPlaceRequest placeRequest = FetchPlaceRequest . newInstance ( placeId , fields );
placesClient . fetchPlace ( placeRequest ). addOnSuccessListener (( response ) - > {
final Place place = response . getPlace ();
// Get the photo metadata.
final List<PhotoMetadata> metadata = place . getPhotoMetadatas ();
if ( metadata == null || metadata . isEmpty ()) {
Log . w ( TAG , "No photo metadata." );
return ;
}
final PhotoMetadata photoMetadata = metadata . get ( 0 );
// Get the attribution text.
final String attributions = photoMetadata . getAttributions ();
binding . placePhotosAttributions . setText ( attributions );
// Create a FetchResolvedPhotoUriRequest.
final FetchResolvedPhotoUriRequest photoRequest = FetchResolvedPhotoUriRequest . builder ( photoMetadata )
. setMaxWidth ( 500 ) // Optional.
. setMaxHeight ( 300 ) // Optional.
. build ();
placesClient . fetchResolvedPhotoUri ( photoRequest ). addOnSuccessListener (( fetchPhotoResponse ) - > {
Glide . with ( this )
. load ( fetchPhotoResponse . getUri ())
. into ( binding . placePhotosResult );
}). addOnFailureListener (( exception ) - > {
if ( exception instanceof ApiException ) {
ApiException apiException = ( ApiException ) exception ;
Log . e ( TAG , "Place not found: " + exception . getMessage ());
final int statusCode = apiException . getStatusCode ();
// TODO: Handle error with given status code.
}
});
});
Note: For more information on initializing PlacesClient , see
Initialize the Places API client .
You can use a CancellationToken
to attempt to cancel a request to any of the request classes (for example,
FetchPlaceRequest ). Cancellation is done on a best-effort basis.
Once a cancellation request is issued, no response will be returned.
Issuing a cancellation token does NOT guarantee that a particular request
will be cancelled, and you may still be charged for the request even if no
response is returned .
Attributions
In most cases, place photos can be used without attribution, or will have
the required attribution included as part of the image. However, the photo metadata object, of type
PhotoMetadata ,
can contain either of two types of additional attributions:
Attributions , an attribution string accessed by
PhotoMetadata.getAttributions() .
AuthorAttributions , an
AuthorAttributions
object accessed by
PhotoMetadata.getAuthorAttributions() .
If the returned PhotoMetadata object includes either type of attribution, you must
include the attribution in your application wherever you display the image. For more information,
see Displaying Attributions .
Usage and billing
A Places Photo SKU is charged for calls to fetchPhoto() .
See the Usage and Billing page for details.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
