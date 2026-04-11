---
title: "Place Details (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/details-place
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/details-place
  title: "Place Details (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers"
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
Place Details (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places SDK for iOS (New) allows you to retrieve detailed information about places using their unique place IDs, including name, address, location, and more.
You can request specific place data fields using a field mask to optimize data retrieval and billing.
To determine if a place is currently open, use the isOpenWithRequest function, which considers the place's operating hours and current time.
When displaying place information obtained from the SDK, ensure you also display the required attributions, such as for photos and reviews.
You can utilize optional parameters like region code and session token to customize the Place Details request and manage Autocomplete sessions.
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
The Places SDK for iOS (New) provides your app with rich information
about places, including the place's name and address, the geographical
location specified as latitude/longitude coordinates, the type of place (such
as night club, pet store, museum), and more. To access this information for a
specific place, you can use the place ID, a stable identifier that uniquely
identifies a place.
Get place details
The
GMSPlace
class contains information about a specific place, including all of the data fields shown in
Place Data Fields (New) . Get a
GMSPlace
object by calling
GMSPlacesClient
fetchPlaceWithRequest: ,
passing a GMSFetchPlaceRequest object and a
callback method of type
GMSPlaceResultCallback .
The GMSFetchPlaceRequest object specifies:
(Required) The place ID , a unique identifier for a place in the Google Places
database and on Google Maps.
(Required) The list of fields to return in the GMSPlace object, also called the
field mask , as defined by
GMSPlaceProperty .
If you don't specify at least one field in the field list, or if you omit
the field list, then the call returns an error.
(Optional) The region code used to format the response.
(Optional) The session token used to end an Autocomplete (New) session.
Make a Place Details request
This example gets a place by ID, passing the following parameters:
The place ID of ChIJV4k8_9UodTERU5KXbkYpSYs .
A field list specifying to return the place name and website URL.
A GMSPlaceResultCallback
to handle the result.
The API invokes the specified callback method, passing in a
GMSPlace
object. If the place is not found, the place object is nil.
Places Swift SDK
// A hotel in Saigon with an attribution.
let placeID = "ChIJV4k8_9UodTERU5KXbkYpSYs"
let fetchPlaceRequest = FetchPlaceRequest (
placeID : placeID ,
placeProperties : [. name , . website ]
)
switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) {
case . success ( let place ):
// Handle place
case . failure ( let placesError ):
// Handle error
}
Swift
// A hotel in Saigon with an attribution.
let placeID = "ChIJV4k8_9UodTERU5KXbkYpSYs"
// Specify the place data types to return.
let myProperties = [ GMSPlaceProperty . name , GMSPlaceProperty . website ]. map { $0 . rawValue }
// Create the GMSFetchPlaceRequest object.
let fetchPlaceRequest = GMSFetchPlaceRequest ( placeID : placeID , placeProperties : myProperties , sessionToken : nil )
client . fetchPlace ( with : fetchPlaceRequest , callback : {
( place : GMSPlace ?, error : Error ?) in
guard let place , error == nil else { return }
print ( "Place found: \( String ( describing : place . name )) " )
})
Objective-C
// A hotel in Saigon with an attribution.
NSString * placeID = @"ChIJV4k8_9UodTERU5KXbkYpSYs" ;
// Specify the place data types to return.
NSArray<NSString * > * myProperties = @[ GMSPlacePropertyName , GMSPlacePropertyWebsite ] ;
// Create the GMSFetchPlaceRequest object.
GMSFetchPlaceRequest * fetchPlaceRequest = [[ GMSFetchPlaceRequest alloc ] initWithPlaceID : placeID placeProperties : myProperties sessionToken : nil ];
[ placesClient fetchPlaceWithRequest : fetchPlaceRequest callback : ^ ( GMSPlace * _Nullable place , NSError * _Nullable error ) {
if ( error != nil ) {
NSLog ( @"An error occurred %@" , [ error localizedDescription ]);
return ;
} else {
NSLog ( @"Place Found: %@" , place . name );
NSLog ( @"The place URL: %@" , place . website );
}
}];
Place Details response
Place Details returns a
GMSPlace object containing details about the place. Only those fields specified in the field list are populated in the GMSPlace object.
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
Use the GMSFetchPlaceRequest object to specify the required parameters.
Place ID
The place ID used in the Places SDK for iOS is the
same identifier as used in the Places API, Places SDK for Android
and other Google APIs. Each place ID can refer to only one place, but a single place can have more
than one place ID.
There are circumstances which may cause a place to get a new place ID.
For example, this may happen if a business moves to a new location.
When you request a place by specifying a place ID, you can be confident that
you will always receive the same place in the response (if the place still
exists). Note, however, that the response may contain a place ID that is
different from the one in your request.
Field list
When you request place details, you must specify the data to
return in the GMSPlace object for the place as a field mask. To define the field mask
pass an array of values from
GMSPlaceProperty
to the GMSFetchPlaceRequest object.
Field masking is a good design practice to make sure that you don't request unnecessary data, which helps to avoid unnecessary processing time and billing charges.
Specify one or more of the following fields:
The following fields trigger the Place Details Essentials ID Only SKU :
GMSPlacePropertyPlaceID
GMSPlacePropertyPhotos
The following fields trigger the Place Details Essentials SKU :
GMSPlacePropertyAddressComponents
GMSPlacePropertyFormattedAddress
GMSPlacePropertyCoordinate
GMSPlacePropertyPlusCode
GMSPlacePropertyTypes
GMSPlacePropertyViewport
The following fields trigger the Place Details Pro SKU :
GMSPlacePropertyBusinessStatus
GMSPlacePropertyIconBackgroundColor
GMSPlacePropertyIconImageURL
GMSPlacePropertyName
GMSPlacePropertyUTCOffsetMinutes
GMSPlacePropertyWheelchairAccessibleEntrance
The following fields trigger the Place Details Pro SKU :
GMSPlacePropertyCurrentOpeningHours
GMSPlacePropertySecondaryOpeningHours
GMSPlacePropertyPhoneNumber
GMSPlacePropertyPriceLevel
GMSPlacePropertyRating
GMSPlacePropertyOpeningHours
GMSPlacePropertyUserRatingsTotal
GMSPlacePropertyWebsite
The following fields trigger the Place Details Enterprise SKU :
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
Optional parameters
Use the GMSFetchPlaceRequest object to specify the optional parameters.
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
sessionToken
Session tokens are user-generated strings that track Autocomplete
(New) calls as "sessions." Autocomplete (New) uses session tokens to
group the query and place selection phases of a user autocomplete search into a discrete session
for billing purposes. Session tokens are passed into Place Details (New)
calls that follow Autocomplete (New) calls. For more information, see
Session tokens .
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Places SDK for iOS allows apps to retrieve detailed information about places using a place ID. Key actions include: enabling Places API (New), using `GMSPlacesClient` to fetch place details with `GMSFetchPlaceRequest`, and specifying required place ID and data fields. Apps can also check if a place is open using `isOpenWithRequest`. It requires specifying fields like `UTCOffsetMinutes` and `BusinessStatus`. Billing varies by data requested. Required attributions must be displayed when showing information from `GMSPlacesClient`.\n"]]
