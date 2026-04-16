---
title: "Current Place \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/current-place
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/current-place
  title: "Current Place \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
Current Place
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Deprecated: The PlacesClient.findCurrentPlace() method is deprecated. Use PlacesClient.searchNearby() instead.
Note that in order to use PlacesClient.searchNearby() , you need to enable the Places API (New) on your API key in the Google Cloud console.
Using the Places SDK for Android, you can discover the place at the
device's currently-reported location. Examples of places include local
businesses, points of interest, and geographic locations.
Note: To work through a guided, hands-on tutorial, see the
Current Place tutorial .
Permissions
To use the library you do not need to declare any additional permissions in your app's manifest,
as the library declares all permissions it uses in its manifest. However, if your app uses
PlacesClient.findCurrentPlace() ,
you must request location permissions
at runtime.
If your app does not use PlacesClient.findCurrentPlace() , explicitly remove the
ACCESS_FINE_LOCATION and ACCESS_COARSE_LOCATION permissions introduced
by the library by adding the following to your manifest:
< manifest ... xmlns : tools = "http://schemas.android.com/tools" >
...
< uses - permission android : name = "android.permission.ACCESS_FINE_LOCATION" tools : node = "remove" / >
< uses - permission android : name = "android.permission.ACCESS_COARSE_LOCATION" tools : node = "remove" / >
...
< / manifest >
Read more about
permissions and consider using
EasyPermissions to get started.
Get the current location
To find the local business or other place where the device is currently
located, follow these steps:
Call ContextCompat.checkSelfPermission
to check whether the user has granted permission to access their device
location. Your app must also include code to prompt the user for permission,
and to handle the result.
See Request App Permissions
for details.
Create a FindCurrentPlaceRequest ,
passing a List of Place.Field s, specifying the
place data types your app should request.
Call PlacesClient.findCurrentPlace() ,
passing the FindCurrentPlaceRequest you created in the previous
step.
Get the list of PlaceLikelihood s from the
FindCurrentPlaceResponse .
Note: While
PlacesClient.fetchPlace()
supports all place details,
PlacesClient.findCurrentPlace()
only supports a subset of place details. For the list of fields NOT
supported by findCurrentPlace() , see
Places SDK for Android fields support .
Fields correspond to Place Search results, and are divided into three billing categories:
Basic, Contact, and Atmosphere. Basic fields are billed at base rate, and incur no additional
charges. Contact and Atmosphere fields are billed at a higher rate. For more information
about how Place data requests are billed, see
Usage and Billing .
The API returns a
FindCurrentPlaceResponse
in a
Task .
The FindCurrentPlaceResponse contains a list of
PlaceLikelihood
objects representing places where the device is likely to be located. For
each place, the result includes an indication of the likelihood that the
place is the right one. The list may be empty, if there is no known place
corresponding to the given device location.
You can call
PlaceLikelihood.getPlace()
to retrieve a
Place
object, and
PlaceLikelihood.getLikelihood()
to get the place's likelihood rating. A higher value means a greater
probability that the place is the best match.
The following code sample retrieves the list of places where the device is
most likely to be located, and logs the name and likelihood for each place.
Kotlin
// Use fields to define the data types to return.
val placeFields = listOf ( Place . Field . DISPLAY_NAME , Place . Field . FORMATTED_ADDRESS , Place . Field . LOCATION )
val request = FindCurrentPlaceRequest . newInstance ( placeFields )
// Call findCurrentPlace and handle the response (first check that the user has granted permission).
if ( ContextCompat . checkSelfPermission ( this , permission . ACCESS_FINE_LOCATION ) ==
PackageManager . PERMISSION_GRANTED
) {
placesClient . findCurrentPlace ( request ). addOnSuccessListener { response - >
binding . progressBar . visibility = View . GONE
adapter . setPlaceLikelihoods ( response . placeLikelihoods )
}. addOnFailureListener { exception - >
binding . progressBar . visibility = View . GONE
if ( exception is ApiException ) {
Log . e ( TAG , "Place not found: ${ exception . statusCode } " )
}
}
} else {
// A local method to request required permissions;
// See https://developer.android.com/training/permissions/requesting
getLocationPermission ()
}
Java
// Use fields to define the data types to return.
List<Place . Field > placeFields = Arrays . asList ( Place . Field . DISPLAY_NAME , Place . Field . FORMATTED_ADDRESS , Place . Field . LOCATION );
// Use the builder to create a FindCurrentPlaceRequest.
FindCurrentPlaceRequest request = FindCurrentPlaceRequest . newInstance ( placeFields );
// Call findCurrentPlace and handle the response (first check that the user has granted permission).
if ( ContextCompat . checkSelfPermission ( this , ACCESS_FINE_LOCATION ) == PackageManager . PERMISSION_GRANTED ) {
Task<FindCurrentPlaceResponse> placeResponse = placesClient . findCurrentPlace ( request );
placeResponse . addOnCompleteListener ( task - > {
binding . progressBar . setVisibility ( View . GONE );
if ( task . isSuccessful ()) {
FindCurrentPlaceResponse response = task . getResult ();
adapter . setPlaceLikelihoods ( response . getPlaceLikelihoods ());
} else {
Exception exception = task . getException ();
if ( exception instanceof ApiException apiException ) {
Log . e ( "CurrentPlace" , "Place not found: " + apiException . getStatusCode ());
}
}
});
} else {
// A local method to request required permissions;
// See https://developer.android.com/training/permissions/requesting
getLocationPermission ();
}
Notes about the likelihood values:
The likelihood provides a relative probability
of the place being the best match within the list of returned places for a
single request. You can't compare likelihoods across different requests.
The value of the likelihood will be between 0.0 and 1.0.
For example, to represent a 55% likelihood that the correct place is Place
A, and a 35% likelihood that it's Place B, the response has two members,
Place A with a likelihood of 0.55 and Place B with a likelihood of 0.35.
Note: For more information on initializing PlacesClient , see
Initialize the Places API client .
You can use a CancellationToken
to attempt to cancel a request to any of the request classes (for example,
FetchPlaceRequest ). Cancellation is done on a best-effort basis.
Once a cancellation request is issued, no response will be returned.
Issuing a cancellation token does NOT guarantee that a particular request
will be cancelled, and you may still be charged for the request even if no
response is returned .
Display attributions in your app
When your app displays information obtained from
PlacesClient.findCurrentPlace() ,
the app must also display attributions. See the documentation on
attributions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
