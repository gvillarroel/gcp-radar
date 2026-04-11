---
title: "Place Photos (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/place-photos
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/place-photos
  title: "Place Photos (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
iOS
Places SDK for iOS
Send feedback
Place Photos (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places SDK for iOS allows you to request and display place photos, which are bitmap images up to 4800x4800 pixels, from various sources.
You can request up to 10 photos for a place using GMSPlacesClient methods like lookUpPhotosForPlaceID and fetchPhotoWithRequest , or by including GMSPlacePropertyPhotos in a Place Details request.
Photos retrieved through the SDK are cached by the Foundation URL loading system, and you can configure caching behavior using NSURLCache .
While most place photos don't require attribution, if GMSPlacePhotoMetadata includes attributions or authorAttribution , you must display them with the image.
Sample code in Swift and Objective-C demonstrates how to fetch and display place photos using the Places SDK for iOS.
Select platform:
Android
iOS
Web Service
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
This feature requires that you enable
Places API (New), the next generation of the Places API. For more information, see
Enable APIs .
You can use the Places SDK for iOS (New) to request place photos to
display in your application. Photos returned by the photos service come from a
variety of sources, including business owners and user-contributed photos.
Photos are bitmap images represented by a
UIImage object.
A bitmap image has a maximum size of 4800 by 4800 pixels.
Request an image
You can request up to 10 photos for a place:
Call
[GMSPlacesClient lookUpPhotosForPlaceID] ,
passing a place ID and a
GMSPlacePhotoMetadataResultCallback callback.
This request calls the GMSPlacePhotoMetadataResultCallback callback with a
GMSPlacePhotoMetadataList
object.
From the GMSPlacePhotoMetadataList object in the callback, the
results
array property contains the photos, where each photo is represented by a
GMSPlacePhotoMetadata
object.
Use the GMSPlacePhotoMetadata object to create a
GMSFetchPhotoRequest ,
including the maximum size of the requested image.
For each GMSPlacePhotoMetadata object in the array, call
[GMSPlacesClient
fetchPhotoWithRequest:callback:]
passing the GMSFetchPhotoRequest object. This methods calls the
GMSFetchPhotoResultCallback
callback with a usable bitmap image as a UIImage.
Another way to request photos for a place is to make a
Place Details (New) request,
including GMSPlacePropertyPhotos in the field list. The advantage to making a
Place Details call is that the response
GMSPlace
object can contain the photos and any other data fields that you want for
the place.
Note: Whenever you display a place photo in your app, make sure to follow the
attribution guidelines. See Attributions for more information.
Sample code
The following example method takes a place ID and gets the first photo in the
returned list. You can use this method as a template for the method you will
create in your own app.
Places Swift SDK
// First fetch place details
// A hotel in Saigon with an attribution.
let placeID = "ChIJV4k8_9UodTERU5KXbkYpSYs"
let fetchPlaceRequest = FetchPlaceRequest (
placeID : placeID ,
placeProperties : [ . name , . website ]
)
var fetchedPlace : Place
switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) {
case . success ( let place ):
fetchedPlace = place
case . failure ( let placesError ):
// Handle error
}
// Use the place details to fetch a photo's image.
guard let photo = fetchedPlace . photos ?. first else {
// Handle place without photos.
}
let fetchPhotoRequest =
FetchPhotoRequest ( photo : photo , maxSize : CGSizeMake ( 4800 , 4800 ))
switch await placesClient . fetchPhoto ( with : fetchPhotoRequest ) {
case . success ( let uiImage ):
// Handle image.
case . failure ( let placesError ):
// Handle error
}
Swift
// A hotel in Saigon with an attribution.
let placeID = "ChIJV4k8_9UodTERU5KXbkYpSYs"
// Request list of photos for a place
placesClient . lookUpPhotos ( forPlaceID : placeID ) { ( photos , error ) in
guard let photoMetadata : GMSPlacePhotoMetadata = photos ?. results [ 0 ] else {
return }
// Request individual photos in the response list
let fetchPhotoRequest = GMSFetchPhotoRequest ( photoMetadata : photoMetadata , maxSize : CGSizeMake ( 4800 , 4800 ))
self . client . fetchPhoto ( with : fetchPhotoRequest , callback : {
( photoImage : UIImage ?, error : Error ?) in
guard let photoImage , error == nil else {
print ( "Handle photo error: " )
return }
print ( "Display photo Image: " )
}
)
}
Objective-C
// A hotel in Saigon with an attribution.
NSString * placeID = @"ChIJV4k8_9UodTERU5KXbkYpSYs" ;
[ placesClient lookUpPhotosForPlaceID : placeID callback : ^ ( GMSPlacePhotoMetadataList * list , NSError * error ) {
GMSPlacePhotoMetadata * photoMetadata = [ list results ][ 0 ];
// Request individual photos in the response list
GMSFetchPhotoRequest * fetchPhotoRequest = [[ GMSFetchPhotoRequest alloc ] initWithPhotoMetadata : photoMetadata maxSize : CGSizeMake ( 4800 , 4800 )];
[ placesClient fetchPhotoWithRequest : fetchPhotoRequest callback : ^ ( UIImage * _Nullable photoImage , NSError * _Nullable error ) {
if ( error == nil ) {
// Display photo
}
}];
}];
Caching
Photos loaded using [GMSPlacesClient loadPlacePhoto:callback:]
or [GMSPlacesClient loadPlacePhoto:constrainedToSize:scale:callback:]
are cached both on disk and in-memory by the Foundation URL loading system
in the shared NSURLCache .
To configure the caching behavior you can change the shared URL cache using
[NSURLCache setSharedURLCache:]
in your application delegate's application:didFinishLaunchingWithOptions:
method.
If you do not want your application to share a NSURLCache with the
Places SDK for iOS you can create a new NSURLCache and use this
exclusively within your app without setting it as the shared cache.
Attributions
In most cases, place photos can be used without attribution, or will have the
required attribution included as part of the image. However, if the returned
GMSPlacePhotoMetadata
instance includes any
attributions
or
authorAttribution ,
you must include these attributions in your application wherever you display the
image. See the documentation on
attributions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Places SDK for iOS (New) allows requesting place photos, sourced from business owners and users, for display in apps. To use this feature you first need to Enable the Places API (New). You can request up to ten photos for a place, using `GMSPlacesClient` to look up photos by place ID and receive a `GMSPlacePhotoMetadataList`. Each photo's `GMSPlacePhotoMetadata` is used to create a `GMSFetchPhotoRequest` to retrieve a `UIImage`. Photos can also be requested via Place Details. There are guidelines on attributions that must be followed. Loaded photos are cached using `NSURLCache`.\n"]]
