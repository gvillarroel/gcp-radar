---
title: "Text Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/text-search
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/text-search
  title: "Text Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers"
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
Text Search (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Maps Platform's Text Search functionality enables finding places using text queries, like "pizza in New York", and is useful for ambiguous addresses and business searches.
Text Search uses the Places API (New) and requires a text query, with optional location bias and filters, returning an array of GMSPlace objects.
iOS implementation involves creating a GMSPlaceSearchByTextRequest and executing the search using GMSPlacesClient searchByTextWithRequest:callback: .
You can determine if a place is open using the GMSPlacesClient isOpenWithRequest:callback: method with a GMSPlaceIsOpenWithRequest object.
When displaying information from GMSPlacesClient , ensure your app displays necessary attributions as outlined in the documentation.
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
Text Search (New)
returns information about a set of places based on a string (for example, "pizza
in New York" or "shoe stores near Ottawa" or "123 Main Street"). The service
responds with a list of places matching the text string and any location bias
that has been set.
In addition to required parameters ,
Text Search (New) supports refining queries using optional
parameters for better results.
Get a list of places by text search
Make a Text Search request by calling GMSPlacesClient
searchByTextWithRequest: ,
passing a
GMSPlaceSearchByTextRequest
object that defines the request parameters and a callback method, of type
GMSPlaceSearchByTextResultCallback ,
to handle the response.
The GMSPlaceSearchByTextRequest object specifies all of the
required and optional parameters
for the request. The required parameters include:
The list of fields to return in the GMSPlace object, also
called the field mask , as defined by
GMSPlaceProperty .
If you don't specify at least one field in the field list, or if you omit
the field list, then the call returns an error.
The text query .
This example text search request specifies that the response GMSPlace objects
contain the place name and place ID for each GMSPlace object in the search
results. It also filters the response to only return places of type
"restaurant".
Places Swift SDK
let restriction = GMSPlaceRectangularLocationOption (
northEast : CLLocationCoordinate2D ( latitude : 20 , longitude : 30 ),
southWest : CLLocationCoordinate2D ( latitude : 40 , longitude : 50 )
)
let searchByTextRequest = SearchByTextRequest (
textQuery : "pizza in New York" ,
placeProperties : [ . name , . placeID ],
locationRestriction : restriction ,
includedType : . restaurant ,
maxResultCount : 5 ,
minRating : 3.5 ,
priceLevels : [ . moderate , . inexpensive ],
isStrictTypeFiltering : true
)
switch await placesClient . searchByText ( with : searchByTextRequest ) {
case . success ( let places ):
// Handle places
case . failure ( let placesError ):
// Handle error
}
Swift
// Create the GMSPlaceSearchByTextRequest object.
let myProperties = [ GMSPlaceProperty . name , GMSPlaceProperty . placeID ]. map { $0 . rawValue }
let request = GMSPlaceSearchByTextRequest ( textQuery : "pizza in New York" , placeProperties : myProperties )
request . isOpenNow = true
request . includedType = "restaurant"
request . maxResultCount = 5
request . minRating = 3.5
request . rankPreference = . distance
request . isStrictTypeFiltering = true
request . locationBias = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 40.7 , - 74.0 ), 200.0 )
// Array to hold the places in the response
var placeResults : [ GMSPlace ] = []
let callback : GMSPlaceSearchByTextResultCallback = { [ weak self ] results , error in
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
GMSPlacesClient . shared (). searchByText ( with : request , callback : callback )
Objective-C
// Create the GMSPlaceSearchByTextRequest object.
GMSPlaceSearchByTextRequest * request =
[[ GMSPlaceSearchByTextRequest alloc ] initWithTextQuery : @"pizza in New York" placeProperties : @[ GMSPlacePropertyName , GMSPlacePropertyPlaceID ] ];
request . isOpenNow = YES ;
request . includedType = @"restaurant" ;
request . maxResultCount = 5 ;
request . minRating = 3.5 ;
request . rankPreference = GMSPlaceSearchByTextRankPreferenceDistance ;
request . isStrictTypeFiltering = YES ;
request . priceLevels = @[ @( kGMSPlacesPriceLevelFree ) , @( kGMSPlacesPriceLevelCheap ) ] ;
request . locationBias = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 40.7 , -74.0 ), 200.0 );
// Array to hold the places in the response
_placeResults = [ NSArray array ];
// Create the GMSPlaceSearchByTextRequest object.
[ _placesClient searchByTextWithRequest : request
callback : ^ ( NSArray<GMSPlace * > * _Nullable placeResults , NSError * _Nullable error ) {
if ( error != nil ) {
NSLog ( @"An error occurred %@" , [ error localizedDescription ]);
return ;
} else {
if ( placeResults . count > 0 ) {
// Get list of places.
_placeResults = placeResults ;
}
}
}
];
Text Search responses
The Text Search API returns an array of matches in the
form of
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
Pagination
Text Search provides a pagination object , the
hasNextPage boolean, that is returned in the first response to a Text Search
call. If a next page is available, you can use the fetchNextPage() function to
load it.
The following example shows how to check if a next page is available, and then
load the page.
Swift
public struct PlaceSearchPagination {
public var pageSize : Int
public var hasNextPage : Bool
public func fetchNextPage () async - > SearchByTextResponse
}
public struct SearchByTextResponse {
public var pagination : PlaceSearchPagination ?
public var places : [ Place ]?
public var error : PlaceError ?
}
PlacesClient . swift
public func searchByText ( with request : SearchByTextRequest ) async - > SearchByTextResponse
let searchByTextRequest = SearchByTextRequest ( textQuery : "restaurants" ,
placeProperties : [ PlaceProperty . displayName ],
locationBias : CircularCoordinateRegion ( center : CLLocationCoordinate2D ( latitude : 0 , longitude : 0 ), radius : 100 ))
searchByTextRequest . maxResultCount = 10
var searchByTextResponse = await PlacesClient . shared . searchByText ( with : searchByTextRequest )
print ( "Found \( searchByTextResponse . places . count ) places" )
searchByTextResponse . pagination . pageSize = 20
// Continue making requests until no more results are found in pagination object
while searchByTextResponse . pagination . hasNextPage {
searchByTextResponse = await searchByTextResponse . pagination . fetchNextPage ()
print ( "Found \( searchByTextResponse . places . count ) places" )
}
Objective-C
GMSPlaceSearchByTextRequest * searchByTextRequest = [[ GMSPlaceSearchByTextRequest alloc ]
initWithTextQuery : @"restaurants"
placeProperties : @[ GMSPlacePropertyAll ] ];
searchByTextRequest . maxResultCount = 10 ;
__block void ( ^ recursiveCallback )( GMSPlaceSearchByTextResponse * , NSError * );
recursiveCallback = ^ ( GMSPlaceSearchByTextResponse * response , NSError * error ) {
NSLog ( @"Found %d places" , response . places . count );
if ( response . pagination . hasNextPage ) {
[ response . pagination fetchNextPageWithCompletion : recursiveCallback ];
}
};
[ GMSPlacesClient . sharedClient searchByTextWithRequest : searchByTextRequest
completion : recursiveCallback ];
Required parameters
Use the GMSPlaceSearchByTextRequest object to specify the required parameters
for the search.
Field list
Specify which place data properties to return. Pass a list of
GMSPlace
properties specifying the data fields to return. If you omit the field
mask, the request will return an error.
Field lists are a good design practice to ensure that you don't request
unnecessary data, which helps to avoid unnecessary processing time and
billing charges.
Specify one or more of the following fields:
The following fields trigger the Text Search Essentials ID Only SKU :
GMSPlacePropertyPlaceID
The following fields trigger the Text Search Pro SKU :
GMSPlacePropertyAddressComponents
GMSPlacePropertyBusinessStatus
GMSPlacePropertyCoordinate
GMSPlacePropertyFormattedAddress
GMSPlacePropertyIconBackgroundColor
GMSPlacePropertyIconImageURL
GMSPlacePropertyName
GMSPlacePropertyPhotos
GMSPlacePropertyPlusCode
GMSPlacePropertyTypes
GMSPlacePropertyUTCOffsetMinutes
GMSPlacePropertyViewport
GMSPlacePropertyWheelchairAccessibleEntrance
The following fields trigger the Text Search Enterprise SKU :
GMSPlacePropertyCurrentOpeningHours
GMSPlacePropertySecondaryOpeningHours
GMSPlacePropertyPhoneNumber
GMSPlacePropertyPriceLevel
GMSPlacePropertyRating
GMSPlacePropertyOpeningHours
GMSPlacePropertyUserRatingsTotal
GMSPlacePropertyWebsite
The following fields trigger the Text Search Enterprise Plus SKU :
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
textQuery
The text string on which to search, for example: "restaurant", "123 Main
Street", or "best place to visit in San Francisco".
Note: For best results when searching on a phone number,
include the country code followed by a space, and set the
regionCode parameter to correspond to the country code.
Phone number formats vary by country and the API attempts to return a result for these
different formats. For valid phone numbers, Places API (New) supports the
E.164 format .
Alphabet characters are converted based on the
E.161 keypad mapping .
Optional parameters
Use the GMSPlaceSearchByTextRequest object to specify the optional parameters
for the search.
includedType
Restricts the results to places matching the specified type defined by
Table A .
Only one type may be specified. For example:
let request = SearchByTextRequest()
request.includedType = "bar"
let request = SearchByTextRequest()
request.includedType = "pharmacy"
Note: The values in
Table B
are only returned in the response. You cannot use values in
Table B
as a filter.
isOpenNow
If true , return only those places that are open for business
at the time the query is sent. If false , return all businesses
regardless of open status.
Places that don't specify opening hours in the Google Places database are
returned if you set this parameter to false .
isStrictTypeFiltering
Used with the includeType parameter. When set to
true , only places that match the specified types specified by
includeType are returned.
When false, the default, the response can contain places that don't match
the specified types.
locationBias
Specifies an area to search. This location serves as a bias which means
results around the specified location can be returned, including results
outside the specified area.
You can specify locationRestriction or locationBias ,
but not both. Think of locationRestriction as specifying the
region which the results must be within, and locationBias as
specifying the region that the results must be near but can be outside of
the area.
Note: If you omit both
locationBias and locationRestriction , then the API
uses IP biasing by default. With IP biasing, the API uses the device's
IP address to bias the results.
Note:
The locationBias parameter can
be overridden if the textQuery contains
an explicit location such as Market in Barcelona .
In this case, locationBias is ignored.
Specify the region as a rectangular Viewport or as a circle.
A circle is defined by center point and radius in meters. The radius
must be between 0.0 and 50000.0, inclusive. The default radius is 0.0.
For example:
let request = SearchByTextRequest ()
request . locationBias = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 40.7 , - 74.0 ), 200.0 )
A rectangle is a latitude-longitude viewport, represented as two
diagonally opposite low and high points. The low point marks the southwest
corner of the rectangle, and the high point represents the northeast
corner of the rectangle.
A viewport is considered a
closed region, meaning it includes its boundary. The latitude bounds
must range between -90 to 90 degrees inclusive, and the longitude bounds
must range between -180 to 180 degrees inclusive:
If low = high , the viewport consists of
that single point.
If low.longitude > high.longitude , the
longitude range is inverted (the viewport crosses the 180 degree
longitude line).
If low.longitude = -180 degrees and
high.longitude = 180 degrees, the viewport includes all
longitudes.
If low.longitude = 180 degrees and
high.longitude = -180 degrees, the longitude range is
empty.
If low.latitude > high.latitude , the
latitude range is empty.
locationRestriction
Specifies an area to search. Results outside the specified area are not
returned. Specify the region as a rectangular Viewport. See the description
of locationBias
for information on defining the Viewport.
You can specify locationRestriction or locationBias ,
but not both. Think of locationRestriction as specifying the
region which the results must be within, and locationBias as
specifying the region that the results must be near but can be outside of
the area.
Note: If you omit both
locationBias and locationRestriction , then the API
uses IP biasing by default. With IP biasing, the API uses the IP address of
the device to bias the results.
maxResultCount
Specifies the maximum number of place results to return. Must be between
1 and 20 (default) inclusive.
minRating
Restricts results to only those whose average user rating is greater than
or equal to this limit. Values must be between 0.0 and 5.0 (inclusive) in
increments of 0.5. For example: 0, 0.5, 1.0, ... , 5.0 inclusive. Values are
rounded up to the nearest 0.5. For example, a value of 0.6 eliminates all
results with a rating less than 1.0.
priceLevels
Restrict the search to places that are marked at certain price levels.
The default is to select all price levels.
Specify an array of one or more of values defined by
PriceLevel .
Note: PRICE_LEVEL_FREE is
not allowed in a request. It is only used to populate the response.
For example:
let request = SearchByTextRequest ()
request . priceLevels = [ GMSPlacesPriceLevel . moderate . rawValue , GMSPlacesPriceLevel . cheap . rawValue ]
rankPreference
Specifies how the results are ranked in the response based on the type of
query:
For a categorical query such as "Restaurants in New York City",
.relevance (rank results by search relevance) is the default.
You can set rankPreference to .relevance or
.distance (rank results by distance).
For a non-categorical query such as "Mountain View, CA", we recommend
that you leave rankPreference unset.
regionCode
The region code used to format the response, specified as a
two-character CLDR code value. This parameter can also have a bias effect
on the search results. There is no default value.
If the country name of the address field in the response matches the
region code, the country code is omitted from address.
Most CLDR codes are identical to ISO 3166-1 codes,
with some notable exceptions. For example, the United Kingdom's ccTLD is
"uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the
entity of "The United Kingdom of Great Britain and Northern Ireland").
The parameter can affect results based on applicable law.
shouldIncludePureServiceAreaBusinesses
If true , returns pure service area businesses in the search results. A pure service area business is a business that visits or delivers to customers directly, but does not serve customers at their business address.
For example:
Places Swift SDK
let request = SearchByTextRequest ()
request . shouldIncludePureServiceAreaBusinesses = true
Swift
let request = SearchByTextRequest ()
request . shouldIncludePureServiceAreaBusinesses : true
Objective-C
GMSPlaceSearchByTextRequest * request =
[[ GMSPlaceSearchByTextRequest alloc ] initWithTextQuery : @"pizza in New York" placeProperties : @[ GMSPlacePropertyAll ] ];
request . shouldIncludePureServiceAreaBusinesses = YES ;
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Text Search API retrieves place information using text strings. It supports location biasing/restriction, open status checks, and various filters like type, rating, and price. Requests use `GMSPlaceSearchByTextRequest` with required parameters (field mask, text query) and optional ones like `includedType` and `locationBias`. Responses return an array of `GMSPlace` objects. Billing depends on requested fields, and attributions are required when displaying results. Location biasing uses a radius or rectangle, and `locationRestriction` limits the results to a specified area, while `locationBias` prioritizes places within the area, but can include results outside.\n"]]
