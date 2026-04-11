---
title: "Place Photos (New) \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/place-photos
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/place-photos
  title: "Place Photos (New) \_|\_ Places SDK for Android \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Places SDK for Android
Guides
Send feedback
Place Photos (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Place Photos (New) allows you to access and display millions of photos from the Google Places database in your application.
To retrieve a place photo, you must first fetch a Place object using Place Details (New) with the PHOTO_METADATAS field, then use this metadata to request the photo URI via the Places SDK.
Photo requests require specifying either a maximum width, maximum height, or both, for the returned image, with the maximum resolution being 4800x4800 pixels.
While most Place Photos can be used without attribution, some may require displaying attributions obtained from the PhotoMetadata object alongside the image.
Select platform:
Android
iOS
Web Service
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Place Photos (New) lets you add high quality photographic content to your
application. Place Photos gives you access to the millions of photos stored in
the Places database. Place Photos returns a URI to a bitmap image. The bitmap
image has a maximum size of 4800 by 4800 pixels.
Note: Place Photos (New) is available in Places SDK for Android version 3.4.0
and later. For more information, see Choose your SDK
version . For more
information about using the Kotlin APIs added in version
4.0.0, see the Reference
Overview .
Place Photos requests
To retrieve an image for a place:
Use Place Details (New) to fetch a Place object using
fetchPlace() .
Be sure to include the Place.Field PHOTO_METADATAS field in the list of fields to
include in the response Place object.
In the
OnSuccessListener
for your
FetchPlaceResponse , call Place.getPhotoMetadas() to get the photo metadata object of type PhotoMetadata
from the response Place object.
Create a FetchResolvedPhotoUriRequest object to make the request and pass the photo metadata object, as well values for maximum height, maximum width, or both.
Use PlacesClient.fetchResolvedPhotoUri()
to request the photo URI.
Add an OnSuccessListener and get the photo URI from the FetchResolvedPhotoUriResponse
object.
Note: For more information on initializing PlacesClient , see
Initialize the Places API client .
You can use a CancellationToken
to attempt to cancel a request to any of the request classes (for example,
FetchPlaceRequest ). Cancellation is done on a best-effort basis.
Once a cancellation request is issued, no response will be returned.
Issuing a cancellation token does NOT guarantee that a particular request
will be cancelled, and you may still be charged for the request even if no
response is returned .
Required parameters
The required parameters for
FetchResolvedPhotoUriRequest
are:
Photo metadata
The metadata object of the photo to return.
Maximum height or maximum width
Specifies the maximum height and width, in pixels, of the image to return. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the maximum height and maximum width properties accept an integer between 1 and 4800. You must specify maximum height, maximum width, or both.
To set the maximum height parameter, call the setMaxHeight() method when building the FetchResolvedPhotoUriRequest object.
To set the maximum width parameter, call the setMaxWidth() method when building the FetchResolvedPhotoUriRequest object.
Place Photos examples
The following example demonstrates getting a place photo URI.
// Define a Place ID.
final String placeId = "INSERT_PLACE_ID_HERE" ;
// Specify fields. Requests for photos must always have the PHOTO_METADATAS field.
final List<Place . Field > fields = Collections . singletonList ( Place . Field . PHOTO_METADATAS );
// Get a Place object
final FetchPlaceRequest placeRequest = FetchPlaceRequest . newInstance ( placeId , fields );
placesClient . fetchPlace ( placeRequest ). addOnSuccessListener (( response ) -> {
final Place place = response . getPlace ();
// Get the photo metadata.
final List<PhotoMetadata> metadata = place . getPhotoMetadatas ();
if ( metadata == null || metadata . isEmpty ()) {
Log . w ( TAG , "No photo metadata." );
return ;
}
final PhotoMetadata photoMetadata = metadata . get ( 0 );
// Get the attribution text and author attributions.
final String attributions = photoMetadata . getAttributions ();
final AuthorAttributions authorAttributions = photoMetadata . getAuthorAttributions ();
// Create a FetchResolvedPhotoUriRequest.
final FetchResolvedPhotoUriRequest photoRequest = FetchResolvedPhotoUriRequest . builder ( photoMetadata )
. setMaxWidth ( 500 )
. setMaxHeight ( 300 )
. build ();
// Request the photo URI
placesClient . fetchResolvedPhotoUri ( photoRequest ). addOnSuccessListener (( fetchResolvedPhotoUriResponse ) -> {
Uri uri = fetchResolvedPhotoUriResponse . getUri ();
RequestOptions requestOptions = new RequestOptions (). override ( Target . SIZE_ORIGINAL );
Glide . with ( this ). load ( uri ). apply ( requestOptions ). into ( imageView );
}). addOnFailureListener (( exception ) -> {
if ( exception instanceof ApiException ) {
final ApiException apiException = ( ApiException ) exception ;
Log . e ( TAG , "Place not found: " + exception . getMessage ());
final int statusCode = apiException . getStatusCode ();
// TODO: Handle error with given status code.
}
});
});
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
