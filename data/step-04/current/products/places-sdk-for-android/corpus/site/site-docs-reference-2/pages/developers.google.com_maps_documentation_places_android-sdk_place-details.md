---
title: "Place Details \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/place-details
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/place-details
  title: "Place Details \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
Place Details
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
The Places SDK for Android provides your app with rich information
about places, including the place's name and address, the geographical
location specified as latitude/longitude coordinates, the type of place (such
as night club, pet store, museum), and more. To access this information for a
specific place, you can use the place ID, a stable identifier that uniquely
identifies a place.
Place details
The
Place
object provides information about a specific place. You can get hold of a
Place
object by calling
PlacesClient.fetchPlace()
– See the guide to
getting a place by ID .
When you request a place, you must specify which place data to return. To do this, pass a list of
Place.Field
values specifying the data to return. This list is an important consideration because it affects the
cost for each request .
Because place data results cannot be empty, only place results with data are
returned. For example, if a requested place has no photos, the photos
field won't be present in the result.
The following example passes a list of three
Place.Field values
to specify the data returned by a request:
Kotlin
// Specify the fields to return.
val placeFields = listOf ( Place . Field . DISPLAY_NAME , Place . Field . RATING )
Java
// Specify the fields to return.
final List<Place . Field > placeFields = Arrays . asList ( Place . Field . DISPLAY_NAME , Place . Field . RATING );
Access Place object data fields
After you obtain the Place object, use methods of the object to access the
data fields specified in the request. If the field is missing from the Place object,
the related method returns null. Shown below are examples of a few of the available methods.
For a complete list of all methods, see the
Place
API reference.
getAddress() – The place's address, in human-readable
format.
getAddressComponents() – A List
of address components for this place. These components are provided for the
purpose of extracting structured information about a place's address, for
example finding the city in which a place is located. Don't use these
components for address formatting; instead, call getAddress() ,
which provides a localized formatted address.
getId() – The textual identifier for the place. Read
more about place IDs in the rest of this page.
getLatLng() – The geographical location of the place,
specified as latitude and longitude coordinates.
getName() – The place's name.
getOpeningHours() – The OpeningHours
of the place. Call OpeningHours.getWeekdayText() to return a
list of strings that represent opening and closing hours for each day of
the week. Call OpeningHours.getPeriods() to return a list of
period objects with more detailed information that is
equivalent to the data provided by getWeekdayText() .
Note: If a place is always open, the time period is
represented as Sunday at midnight, and the closeEvent is null.
The Place object also contains the
getCurrentOpeningHours()
method which returns a place's hours of operation over the next seven days, and
getSecondaryOpeningHours()
which returns a place's secondary hours of operation over the next seven days.
isOpen() – A boolean indicating whether the place is
currently open. If no time is specified, the default is now. isOpen
will only be returned if both Place.Field.UTC_OFFSET and
Place.Field.OPENING_HOURS are available. To ensure accurate
results, request the Place.Field.BUSINESS_STATUS and
Place.Field.UTC_OFFSET fields in your original place request.
If not requested, it is assumed that the business is operational.
See this video for how to use
isOpen with Place Details.
Note: This method is deprecated. Instead use
PlacesClient.isOpen(IsOpenRequest request) . For more, see
Get open status .
Some examples:
Kotlin
val name = place . displayName
val address = place . formattedAddress
val location = place . location
Java
final CharSequence name = place . getDisplayName ();
final CharSequence address = place . getFormattedAddress ();
final LatLng location = place . getLocation ();
Get a place by ID
A place ID is a textual identifier that uniquely identifies a place. In
the Places SDK for Android, you can retrieve the ID of a place by calling
Place.getId() .
The
Place Autocomplete service
also returns a place ID for each place that matches the supplied search query
and filter. You can store the place ID and use it to retrieve the
Place
object again later.
To get a place by ID, call
PlacesClient.fetchPlace() ,
passing a FetchPlaceRequest .
The API returns a
FetchPlaceResponse
in a
Task .
The
FetchPlaceResponse
contains a
Place
object matching the supplied place ID.
The following code example shows calling fetchPlace() to
get details for the specified place.
Kotlin
// Define a Place ID.
val placeId = PlaceIdProvider . getRandomPlaceId ()
// Specify the fields to return.
val placeFields = listOf (
Place . Field . ID ,
Place . Field . DISPLAY_NAME ,
Place . Field . FORMATTED_ADDRESS ,
Place . Field . LOCATION
)
// Construct a request object, passing the place ID and fields array.
val request = FetchPlaceRequest . newInstance ( placeId , placeFields )
placesClient . fetchPlace ( request )
. addOnSuccessListener { response : FetchPlaceResponse - >
val place = response . place
val name = place . displayName
val address = place . formattedAddress
val location = place . location
binding . placeName . text = name
binding . placeAddress . text = address
if ( location != null ) {
binding . placeLocation . text = getString (
R . string . place_location , location . latitude , location . longitude
)
} else {
binding . placeLocation . text = null
}
Log . i ( TAG , "Place found: ${ place . displayName } " )
}. addOnFailureListener { exception : Exception - >
if ( exception is ApiException ) {
val message = getString ( R . string . place_not_found , exception . message )
binding . placeName . text = message
Log . e ( TAG , "Place not found: ${ exception . message } " )
val statusCode = exception . statusCode
TODO ( "Handle error with given status code" )
}
}
Java
// Define a Place ID.
final String placeId = PlaceIdProvider . getRandomPlaceId ();
// Specify the fields to return.
final List<Place . Field > placeFields =
Arrays . asList (
Place . Field . ID ,
Place . Field . DISPLAY_NAME ,
Place . Field . FORMATTED_ADDRESS ,
Place . Field . LOCATION
);
// Construct a request object, passing the place ID and fields array.
final FetchPlaceRequest request = FetchPlaceRequest . newInstance ( placeId , placeFields );
placesClient . fetchPlace ( request ). addOnSuccessListener (( response ) - > {
Place place = response . getPlace ();
final CharSequence name = place . getDisplayName ();
final CharSequence address = place . getFormattedAddress ();
final LatLng location = place . getLocation ();
binding . placeName . setText ( name );
binding . placeAddress . setText ( address );
if ( location != null ) {
binding . placeLocation . setText (
getString ( R . string . place_location , location . latitude , location . longitude )
);
} else {
binding . placeLocation . setText ( null );
}
Log . i ( TAG , "Place found: " + place . getDisplayName ());
}). addOnFailureListener (( exception ) - > {
if ( exception instanceof ApiException apiException ) {
final String message = getString ( R . string . place_not_found , apiException . getMessage ());
binding . placeName . setText ( message );
Log . e ( TAG , "Place not found: " + exception . getMessage ());
final int statusCode = apiException . getStatusCode ();
// TODO: Handle error with given status code.
}
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
Get open status
The PlacesClient.isOpen(IsOpenRequest request)
method returns an IsOpenResponse object indicating whether the place is
currently open based on the time specified in the call.
This method takes a single argument of type IsOpenRequest that contains:
A Place
object, or a string specifying a place ID.
Note: The Place object must contain a valid
place ID.
An optional time value specifying the time in milliseconds from 1970-01-01T00:00:00Z. If no time is specified, the default is now.
This method requires that the following fields exist in the Place object:
Place.Field.BUSINESS_STATUS
Place.Field.CURRENT_OPENING_HOURS
Place.Field.OPENING_HOURS
Place.Field.UTC_OFFSET
If these fields are not provided in the Place object, or if you pass a place ID,
the method uses
PlacesClient.fetchPlace()
to fetch them. For more information on creating the Place object with the necessary fields,
see Place details .
Note: The Places Basic Data SKU
is charged for calls to fetchPlace() for Place.Field.UTC_OFFSET and
Place.Field.BUSINESS_STATUS . The Places Contact Data SKU
is charged for calls to fetchPlace() for Place.Field.CURRENT_OPENING_HOURS
and Place.Field.OPENING_HOURS .
The following example determines if a place is currently open. In this example, you only pass
the place ID to isOpen() :
Kotlin
val isOpenCalendar : Calendar = Calendar . getInstance ()
val placeId = PlaceIdProvider . getRandomPlaceId ()
val request : IsOpenRequest = try {
IsOpenRequest . newInstance ( placeId , isOpenCalendar . timeInMillis )
} catch ( e : IllegalArgumentException ) {
Log . e ( "PlaceIsOpen" , "Error: " + e . message )
return
}
val isOpenTask : Task<IsOpenResponse> = placesClient . isOpen ( request )
isOpenTask . addOnSuccessListener { response - >
val isOpen = response . isOpen ?: false
binding . isOpenByIdResult . text = getString ( R . string . is_open_by_id , isOpen . toString ())
Log . d ( "PlaceIsOpen" , "Is open by ID: $ isOpen " )
}
// ...
Java
@NonNull
Calendar isOpenCalendar = Calendar . getInstance ();
String placeId = PlaceIdProvider . getRandomPlaceId ();
IsOpenRequest isOpenRequest ;
try {
isOpenRequest = IsOpenRequest . newInstance ( placeId , isOpenCalendar . getTimeInMillis ());
} catch ( IllegalArgumentException e ) {
Log . e ( "PlaceIsOpen" , "Error: " + e . getMessage ());
return ;
}
Task<IsOpenResponse> placeTask = placesClient . isOpen ( isOpenRequest );
placeTask . addOnSuccessListener (
( response ) - > {
final boolean isOpen = Boolean . TRUE . equals ( response . isOpen ());
binding . isOpenByIdResult . setText ( getString ( R . string . is_open_by_id , String . valueOf ( isOpen )));
Log . d ( "PlaceIsOpen" , "Is open by ID: " + isOpen );
});
placeTask . addOnFailureListener (( exception ) - > {
binding . isOpenByIdResult . setText ( getString ( R . string . is_open_by_id , "Error: " + exception . getMessage ()));
Log . e ( "PlaceIsOpen" , "Error: " + exception . getMessage ());
});
The next example shows calling isOpen() where you pass a Place object.
The Place object must contain a valid place ID:
Kotlin
val isOpenCalendar : Calendar = Calendar . getInstance ()
var place : Place
val placeId = PlaceIdProvider . getRandomPlaceId ()
// Specify the required fields for an isOpen request.
val placeFields : List<Place . Field > = listOf (
Place . Field . BUSINESS_STATUS ,
Place . Field . CURRENT_OPENING_HOURS ,
Place . Field . ID ,
Place . Field . OPENING_HOURS ,
Place . Field . DISPLAY_NAME
)
val placeRequest : FetchPlaceRequest =
FetchPlaceRequest . newInstance ( placeId , placeFields )
val placeTask : Task<FetchPlaceResponse> = placesClient . fetchPlace ( placeRequest )
placeTask . addOnSuccessListener { placeResponse - >
place = placeResponse . place
val isOpenRequest : IsOpenRequest = try {
IsOpenRequest . newInstance ( place , isOpenCalendar . timeInMillis )
} catch ( e : IllegalArgumentException ) {
Log . e ( "PlaceIsOpen" , "Error: " + e . message )
return @addOnSuccessListener
}
val isOpenTask : Task<IsOpenResponse> = placesClient . isOpen ( isOpenRequest )
isOpenTask . addOnSuccessListener { isOpenResponse - >
val isOpen = when ( isOpenResponse . isOpen ) {
true - > getString ( R . string . is_open )
else - > getString ( R . string . is_closed )
}
binding . isOpenByObjectResult . text = getString (
R . string . is_open_by_object ,
place . displayName ,
isOpen
)
Log . d ( "PlaceIsOpen" , "Is open by object: $ isOpen " )
}
// ...
}
// ...
Java
@NonNull
Calendar isOpenCalendar = Calendar . getInstance ();
String placeId = PlaceIdProvider . getRandomPlaceId ();
// Specify the required fields for an isOpen request.
List<Place . Field > placeFields = new ArrayList <> ( Arrays . asList (
Place . Field . BUSINESS_STATUS ,
Place . Field . CURRENT_OPENING_HOURS ,
Place . Field . ID ,
Place . Field . OPENING_HOURS ,
Place . Field . DISPLAY_NAME
));
FetchPlaceRequest request = FetchPlaceRequest . newInstance ( placeId , placeFields );
Task<FetchPlaceResponse> placeTask = placesClient . fetchPlace ( request );
placeTask . addOnSuccessListener (
( placeResponse ) - > {
Place place = placeResponse . getPlace ();
IsOpenRequest isOpenRequest ;
try {
isOpenRequest = IsOpenRequest . newInstance ( place , isOpenCalendar . getTimeInMillis ());
} catch ( IllegalArgumentException e ) {
Log . e ( "PlaceIsOpen" , "Error: " + e . getMessage ());
return ;
}
Task<IsOpenResponse> isOpenTask = placesClient . isOpen ( isOpenRequest );
isOpenTask . addOnSuccessListener (
( isOpenResponse ) - > {
final boolean isOpen = Boolean . TRUE . equals ( isOpenResponse . isOpen ());
binding . isOpenByObjectResult . setText ( getString ( R . string . is_open_by_object , place . getDisplayName (), String . valueOf ( isOpen )));
Log . d ( "PlaceIsOpen" , "Is open by object: " + isOpen );
});
isOpenTask . addOnFailureListener (
( exception ) - > { // also update the result text field
binding . isOpenByObjectResult . setText ( getString ( R . string . is_open_by_object , place . getDisplayName (), "Error: " + exception . getMessage ()));
Log . e ( "PlaceIsOpen" , "Error: " + exception . getMessage ());
});
});
placeTask . addOnFailureListener (
( exception ) - > {
binding . isOpenByObjectResult . setText ( "Error: " + exception . getMessage ());
Log . e ( "PlaceIsOpen" , "Error: " + exception . getMessage ());
Display attributions in your app
When your app displays place information, including place reviews, the app must also display
any attributions. For more information, see
attributions .
More about place IDs
The place ID used in the Places SDK for Android is the same identifier
as used in the Places API .
Each place ID can refer to only one place, but a single place can have more
than one place ID. There are other circumstances which may cause a place to
get a new place ID. For example, this may happen if a business moves to a new
location.
When you request a place by specifying a place ID, you can be confident that
you will always receive the same place in the response (if the place still
exists). Note, however, that the response may contain a place ID that is
different from the one in your request.
For more information, see the
place ID overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
