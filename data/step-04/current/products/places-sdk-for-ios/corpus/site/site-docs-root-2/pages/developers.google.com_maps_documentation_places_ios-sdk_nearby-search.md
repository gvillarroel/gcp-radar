---
title: "Nearby Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search
  title: "Nearby Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers"
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
Nearby Search (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Nearby Search feature in the Google Places API for iOS allows you to find places within a specified radius of a location, filtering by place types and returning detailed information about each place.
Developers can customize their search requests to define the search area, specify the data fields to return (impacting billing), and filter results based on place types and other criteria.
Responses include an array of GMSPlace objects containing place details, and you can further request the open status of a place using GMSPlacesClient isOpenWithRequest: .
When displaying data from the Places API, be sure to follow attribution requirements to properly credit Google and other data providers.
You can refine search results using parameters like includedTypes , excludedTypes , includedPrimaryTypes , excludedPrimaryTypes , maxResultCount , rankPreference , and regionCode .
Select platform:
Android
iOS
JavaScript
Web Service
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
This feature requires that you enable
Places API (New), the next generation of the Places API. For more information, see
Enable APIs .
A Nearby Search (New) request takes as input the region to search
specified as a circle, defined by the latitude and longitude coordinates of the center point of the
circle and the radius in meters. The request returns a list of matching places, each represented by a
GMSPlace
object, within the specified search area.
By default, the response contains places of all types within the search area. You can optionally
filter the response by specifying a list of place types to explicitly include in or exclude from the
response. For example, you can specify to include only those places in the response that are of type
"restaurant", "bakery", and "cafe", or exclude all places of type "school".
Nearby Search (New) requests
Make a Nearby Search request by calling
GMSPlacesClient searchNearbyWithRequest: ,
passing a
GMSPlaceSearchNearbyRequest
object that defines the request parameters and a callback method, of type
GMSPlaceSearchNearbyResultCallback ,
to handle the response.
The GMSPlaceSearchNearbyRequest object specifies all of the
required and optional
parameters for the request. The required parameters include:
The list of fields to return in the GMSPlace object, also called the
field mask , as defined by
GMSPlaceProperty .
If you don't specify at least one field in the field list, or if you omit
the field list, then the call returns an error.
The location restriction , meaning the circle defining the search area.
This example nearby search request specifies that the response GMSPlace objects
contain the place name ( GMSPlacePropertyName ) and place coordinates
( GMSPlacePropertyCoordinate ) for each GMSPlace object in the search
results. It also filters the response to only return places of type "restaurant" and "cafe".
Places Swift SDK
let restriction = CircularCoordinateRegion ( center : CLLocationCoordinate2DMake ( 37.7937 , - 122.3965 ), radius : 500 )
let searchNearbyRequest = SearchNearbyRequest (
locationRestriction : restriction ,
placeProperties : [ . name , . coordinate ],
includedTypes : [ . restaurant , . cafe ],
)
switch await placesClient . searchNearby ( with : searchNearbyRequest ) {
case . success ( let places ):
// Handle places
case . failure ( let placesError ):
// Handle error
}
Swift
// Array to hold the places in the response
var placeResults : [ GMSPlace ] = []
// Define the search area as a 500 meter diameter circle in San Francisco, CA.
let circularLocationRestriction = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 37.7937 , - 122.3965 ), 500 )
// Specify the fields to return in the GMSPlace object for each place in the response.
let placeProperties = [ GMSPlaceProperty . name , GMSPlaceProperty . coordinate ]. map { $0 . rawValue }
// Create the GMSPlaceSearchNearbyRequest, specifying the search area and GMSPlace fields to return.
var request = GMSPlaceSearchNearbyRequest ( locationRestriction : circularLocationRestriction , placeProperties : placeProperties )
let includedTypes = [ "restaurant" , "cafe" ]
request . includedTypes = includedTypes
let callback : GMSPlaceSearchNearbyResultCallback = { [ weak self ] results , error in
guard let self , error == nil else {
if let error {
print ( error . localizedDescription )
}
return
}
guard let results = results as ? [ GMSPlace ] else {
return
}
placeResults = results
}
GMSPlacesClient . shared (). searchNearby ( with : request , callback : callback )
Objective-C
// Array to hold the places in the response
_placeResults = [ NSArray array ];
// Define the search area as a 500 meter diameter circle in San Francisco, CA.
id<GMSPlaceLocationRestriction> circularLocation = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 37.7937 , -122.3965 ), 500 );
// Create the GMSPlaceSearchNearbyRequest, specifying the search area and GMSPlace fields to return.
GMSPlaceSearchNearbyRequest * request = [[ GMSPlaceSearchNearbyRequest alloc ]
initWithLocationRestriction : circularLocation
placeProperties : @[ GMSPlacePropertyName , GMSPlacePropertyCoordinate ] ];
// Set the place types to filter on.
NSArray<NSString * > * includedTypes = @[ @"restaurant" , @"cafe" ] ;
request . includedTypes = [[ NSMutableArray alloc ] initWithArray : includedTypes ];
[ _placesClient searchNearbyWithRequest : request
callback : ^ ( NSArray<GMSPlace * > * _Nullable places , NSError * _Nullable error ) {
if ( error != nil ) {
NSLog ( @"An error occurred %@" , [ error localizedDescription ]);
return ;
} else {
// Get list of places.
_placeResults = places ;
}
}
];
Nearby Search responses
The Nearby Search API returns an array of matches in the form of
GMSPlace
objects, with one GMSPlace object per matching place.
Note: Fields of the response GMSPlace object
cannot be empty. For example, if the field list includes GMSPlacePropertyPhotos to
request the photos field in response, and the photos field in the response
is empty, it is omitted from the response GMSPlace object.
Get open status
The GMSPlacesClient object contains a member function called isOpenWithRequest ( isOpenRequest in Swift and isPlaceOpenRequest in GooglePlacesSwift) that returns a response indicating whether the place is currently open, based on the time specified in the call.
Note: The deprecated GMSPlace isOpen: and GMSPlace isOpenAtDate: functions may be inaccurate and are not meant to be used with Places API (New).
This method takes a single argument of type GMSPlaceIsOpenWithRequest that contains:
A GMSPlace object , or a string specifying a place ID. For more information on creating the Place object with the necessary fields, see Place details .
Note: The Place object must contain a valid place ID.
An optional NSDate (Obj-C) or Date (Swift) object specifying the time you would like to check. If no time is specified, the default is now.
A GMSPlaceOpenStatusResponseCallback method to handle the response.
>
The GMSPlaceIsOpenWithRequest method requires the following fields to be set in the GMSPlace object:
GMSPlacePropertyUTCOffsetMinutes
GMSPlacePropertyBusinessStatus
GMSPlacePropertyOpeningHours
GMSPlacePropertyCurrentOpeningHours
GMSPlacePropertySecondaryOpeningHours
If these fields are not provided in the Place object, or if you pass a place ID, the method uses GMSPlacesClient GMSFetchPlaceRequest: to fetch them.
isOpenWithRequest response
isOpenWithRequest returns a GMSPlaceIsOpenResponse object containing a boolean value named status that indicates whether the business is open, closed, or if the status is unknown.
Language
Value if open
Value if closed
Value if status unknown
Places Swift
true
false
nil
Swift
.open
.closed
.unknown
Objective-C
GMSPlaceOpenStatusOpen
GMSPlaceOpenStatusClosed
GMSPlaceOpenStatusUnknown
Billing for isOpenWithRequest
The GMSPlacePropertyUTCOffsetMinutes and GMSPlacePropertyBusinessStatus fields are charged under the Basic Data SKU . The rest of the Opening Hours are charged under the Place Details Enterprise SKU.
If your GMSPlace object already has these fields from a previous request, you won't be charged again.
Warning If your GMSPlace object does not have these fields, you will be charged again for the Basic Data SKU . The rest of the Opening Hours are charged under the Place Details Enterprise SKU. If your project will use isOpenWithRequest , we recommend ensuring you fetch the necessary place details.
Example: Make a GMSPlaceIsOpenWithRequest request
The following example shows how to initialize a GMSPlaceIsOpenWithRequest within an existing GMSPlace object.
Places Swift SDK
let isOpenRequest = IsPlaceOpenRequest ( place : place )
switch await placesClient . isPlaceOpen ( with : isOpenRequest ) {
case . success ( let isOpenResponse ):
switch isOpenResponse . status {
case true :
// Handle open
case false :
// Handle closed
case nil :
// Handle unknown
case . failure ( let placesError ):
// Handle error
}
Swift
let isOpenRequest = GMSPlaceIsOpenRequest ( place : place , date : nil )
GMSPlacesClient . shared (). isOpen ( with : isOpenRequest ) { response , error in
if let error = error {
// Handle Error
}
switch response . status {
case . open :
// Handle open
case . closed :
// Handle closed
case . unknown :
// Handle unknown
}
}
Objective-C
GMSPlaceIsOpenRequest * isOpenRequest = [[ GMSPlaceIsOpenRequest alloc ] initWithPlace : place date : nil ];
[[ GMSPlacesClient sharedClient ] isOpenWithRequest : isOpenRequest callback :^ ( GMSPlaceIsOpenResponse response , NSError * _Nullable error ) {
if ( error ) {
// Handle error
}
switch ( response . status ) {
case GMSPlaceOpenStatusOpen :
// Handle open
case GMSPlaceOpenStatusClosed :
// Handle closed
case GMSPlaceOpenStatusUnknown :
// Handle unknown
}
}];
Required parameters
Use the GMSPlaceSearchNearbyRequest object to specify the required parameters for
the search.
Field list
When you request place details, you must specify the data to
return in the GMSPlace object for the place as a field mask. To define the
field mask, pass an array of values from
GMSPlaceProperty
to the GMSPlaceSearchNearbyRequest object.
Field masking is a good design practice to ensure that you don't request unnecessary data,
which helps to avoid unnecessary processing time and billing charges.
Specify one or more of the following fields:
The following fields trigger the
Nearby Search Pro SKU :
GMSPlacePropertyAddressComponents
GMSPlacePropertyBusinessStatus
GMSPlacePropertyCoordinate
GMSPlacePropertyFormattedAddress
GMSPlacePropertyName
GMSPlacePropertyIconBackgroundColor
GMSPlacePropertyIconImageURL
GMSPlacePropertyPhotos
GMSPlacePropertyPlaceID
GMSPlacePropertyPlusCode
GMSPlacePropertyTypes
GMSPlacePropertyUTCOffsetMinutes
GMSPlacePropertyViewport
GMSPlacePropertyWheelchairAccessibleEntrance
The following fields trigger the
Nearby Search Enterprise SKU :
GMSPlacePropertyCurrentOpeningHours
GMSPlacePropertySecondaryOpeningHours
GMSPlacePropertyPhoneNumber
GMSPlacePropertyPriceLevel
GMSPlacePropertyRating
GMSPlacePropertyOpeningHours
GMSPlacePropertyUserRatingsTotal
GMSPlacePropertyWebsite
The following fields trigger the
Nearby Search Enterprise Plus SKU :
GMSPlacePropertyCurbsidePickup
GMSPlacePropertyDelivery
GMSPlacePropertyDineIn
GMSPlacePropertyEditorialSummary
GMSPlacePropertyReservable
GMSPlacePropertyReviews
GMSPlacePropertyServesBeer
GMSPlacePropertyServesBreakfast
GMSPlacePropertyServesBrunch
GMSPlacePropertyServesDinner
GMSPlacePropertyServesLunch
GMSPlacePropertyServesVegetarianFood
GMSPlacePropertyServesWine
GMSPlacePropertyTakeout
The following example passes a list of two
field values
to specify that the GMSPlace object returned by a request contains the
name and placeID fields:
Places Swift SDK
// Specify the place data types to return.
let fields : [ PlaceProperty ] = [. placeID , . displayName ]
Swift
// Specify the place data types to return.
let fields : [ GMSPlaceProperty ] = [. placeID , . name ]
Objective-C
// Specify the place data types to return.
NSArray<GMSPlaceProperty * > * fields = @[ GMSPlacePropertyPlaceID , GMSPlacePropertyName ] ;
locationRestriction
A GMSPlaceLocationRestriction
object that defines the region to search specified as a circle, defined by center point and
radius in meters. The radius must be between 0.0 and 50000.0, inclusive. The default radius is
0.0. You must set it in your request to a value greater than 0.0.
Optional parameters
Use the GMSPlaceSearchNearbyRequest object to specify the optional parameters for
the search.
includedTypes/excludedTypes, includedPrimaryTypes/excludedPrimaryTypes
Lets you specify a list of types from types
Table A used to filter
the search results. Up to 50 types can be specified in each type restriction category.
Note: The values in
Table B
are only returned in the response. You cannot use values in
Table B as a filter.
A place can only have a single primary type from types
Table A associated with
it. For example, the primary type might be
"mexican_restaurant" or "steak_house" . Use
includedPrimaryTypes and excludedPrimaryTypes to filter the results on
a place's primary type.
A place can also have multiple type values from types
Table A
associated with it. For example a restaurant might have the following types:
"seafood_restaurant" , "restaurant" , "food" ,
"point_of_interest" , "establishment" . Use includedTypes
and excludedTypes to filter the results on the list of types associated with
a place.
When you specify a general primary type, such as "restaurant" or
"hotel" , the response can contain places with a more specific primary type than
the one specified. For example, you specify to include a primary type of
"restaurant" . The response can then contain places with a primary type of
"restaurant" , but the response can also contain places with a more specific
primary type, such as "chinese_restaurant" or "seafood_restaurant" .
If a search is specified with multiple type restrictions, only places
that satisfy all of the restrictions are returned. For example, if you specify
{"includedTypes": ["restaurant"], "excludedPrimaryTypes": ["steak_house"]} , the
returned places provide "restaurant" related services but don't operate primarily
as a "steak_house" .
If you omit includedTypes , excludedTypes ,
includedPrimaryTypes , and excludedPrimaryTypes from the request,
the search returns places for all types from within the location restriction bounds.
includedTypes
A list of the place types from
Table A to search for.
If this parameter is omitted, places of all types are returned.
excludedTypes
A list of place types from
Table A to exclude from a
search.
If you specify both the includedTypes (such as "school" ) and the
excludedTypes (such as "primary_school" ) in the request, then the
response includes places that are categorized as "school" but not as
"primary_school" . The response includes places that match at least one of
the includedTypes and none of the excludedTypes .
If there are any conflicting types, such as a type appearing in both includedTypes
and excludedTypes , an INVALID_REQUEST error is returned.
includedPrimaryTypes
A list of primary place types from
Table A to include
in a search.
excludedPrimaryTypes
A list of primary place types from
Table A to exclude
from a search.
If there are any conflicting primary types, such as a type appearing in both
includedPrimaryTypes and excludedPrimaryTypes , an
INVALID_ARGUMENT error is returned.
maxResultCount
Specifies the maximum number of place results to return. Must be between
1 and 20 (default) inclusive.
rankPreference
The type of ranking to use. If this parameter is omitted, results are ranked by popularity.
May be one of the following:
.popularity (default) Sorts results based on their popularity.
.distance Sorts results in ascending order by their distance from the
specified location.
regionCode
The region code used to format the response, specified as a
two-character CLDR code value. There is no default value.
If the country name of the formattedAddress field in the response matches the
regionCode , the country code is omitted from formattedAddress .
This parameter has no effect on adrFormatAddress , which always includes the country
name, or on shortFormattedAddress , which never includes it.
Most CLDR codes are identical to
ISO 3166-1 codes,
with some notable exceptions. For example, the United Kingdom's ccTLD is
"uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the
entity of "The United Kingdom of Great Britain and Northern Ireland").
The parameter can affect results based on applicable law.
Display attributions in your app
When your app displays information obtained from
GMSPlacesClient ,
such as photos and reviews, the app must also display the required attributions.
For example, the reviews property of the GMSPlacesClient object
contains an array of up to five
GMSPlaceReview
objects. Each GMSPlaceReview object can contain attributions and author attributions.
If you display the review in your app, then you must also display any attribution or author
attribution.
For more information, see the documentation on
attributions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Nearby Search (New) API, available on multiple platforms, finds places within a circular region using a center point and radius. It requires the Places API (New) to be enabled. Results are returned as `GMSPlace` objects, filterable by place types. The `GMSPlacesClient searchNearbyWithRequest:` method, along with a `GMSPlaceSearchNearbyRequest` object and callback, are used for this. The field list, defining return data, and a circular location restriction are mandatory. Additionally, the API can check a place's open status via `GMSPlacesClient isOpenWithRequest:` and charges different billing SKUs based on the requested data.\n"]]
