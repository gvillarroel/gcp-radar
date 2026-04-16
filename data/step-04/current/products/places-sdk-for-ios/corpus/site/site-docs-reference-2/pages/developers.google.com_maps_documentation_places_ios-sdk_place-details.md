---
title: "Place Details \_|\_ Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/place-details
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/place-details
  title: "Place Details \_|\_ Places SDK for iOS \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

This product or feature is in Legacy status. For more information about the Legacy status see Legacy products and features . To migrate to the Places API for iOS(New), see the Migration guide .
Home
Products
Google Maps Platform
Documentation
iOS
Places SDK for iOS
Legacy
Send feedback
Place Details
Stay organized with collections
Save and categorize content based on your preferences.
The Places SDK for iOS provides your app with rich information
about places, including the place's name and address, the geographical
location specified as latitude/longitude coordinates, the type of place (such
as night club, pet store, museum), and more. To access this information for a
specific place, you can use the place ID, a stable identifier that uniquely
identifies a place.
Place details
The
GMSPlace
class provides information about a specific place. You can get hold of a
GMSPlace
object in the following ways:
Call
GMSPlacesClient
findPlaceLikelihoodsFromUserLocationWithPlaceFields: . See the guide to
getting current place .
Call
GMSPlacesClient
fetchPlaceFromPlaceID: , passing a GMSPlaceField , a
place ID, and a callback method. For Place Details requests, if you don't
specify at least one field with a request, or if you omit the fields
parameter from a request, ALL possible fields will be returned, and you
will be billed accordingly. See the guide to getting a
place by ID .
Warning: If you don't specify at
least one field with a request, or if you omit the fields parameter from a request, ALL possible fields will be
returned, and you will be billed accordingly. This applies only to Place
Details requests.
When you request a place, you must specify which types of place data to
return. To do this, pass a GMSPlaceField , specifying the data
types to return. This is an important consideration, since this will affect the
cost for each request.
Because place data results cannot be empty, only place
results with data are returned (for example, if a requested place has no
photos, the photos field won't be present in the result).
The following example passes a list of two field values
to specify the data returned by a request:
Swift
// A hotel in Saigon with an attribution.
let placeID = "ChIJV4k8_9UodTERU5KXbkYpSYs"
// Specify the place data types to return.
let fields : GMSPlaceField = GMSPlaceField ( rawValue : UInt ( GMSPlaceField . name . rawValue ) |
UInt ( GMSPlaceField . placeID . rawValue ))
Objective-C
// A hotel in Saigon with an attribution.
NSString * placeID = @"ChIJV4k8_9UodTERU5KXbkYpSYs" ;
// Specify the place data types to return.
GMSPlaceField fields = ( GMSPlaceFieldName | GMSPlaceFieldPlaceID );
GMSPlaceFieldTakeout , GMSPlaceFieldDelivery , GMSPlaceFieldDineIn , GMSPlaceFieldCurbsidePickup , GMSPlaceFieldPhoneNumber , GMSPlaceFieldWebsite ,
GMSPlaceFieldOpeningHours , and GMSPlaceFieldAddressComponents are not supported for
GMSPlaceLikelihoodList place objects.
Learn more about
place fields . For more
information about how Place data requests are billed, see
Usage and Billing .
The
GMSPlace
class can contain the following place data:
name – The place's name.
editorialSummary – Provides a description of a place.
placeID – The textual identifier for the place. Read
more about place IDs in the rest of this page.
coordinate – The geographical location of the place,
specified as latitude and longitude coordinates.
phoneNumber – The place's phone number, in
international format.
formattedAddress – The human-readable address of this
location.
Often this address is equivalent to the postal address. Note that some
countries, such as the United Kingdom, do not allow distribution of true
postal addresses due to licensing restrictions.
The formatted address is logically composed of one or more address
components . For example, the address "111 8th Avenue, New York, NY"
consists of the following components: "111" (the street number),
"8th Avenue" (the route), "New York" (the city) and "NY" (the US state).
Do not parse the formatted address programmatically. Instead you should use
the individual address components, which the API response includes in addition
to the formatted address field.
openingHours – The opening hours for the place (as
represented by GMSOpeningHours ). Call
GMSOpeningHours.weekdayText to get a list of localized strings
of the daily opening hours for the week. Call GMSOpeningHours.Periods
to return a list of GMSPeriod s with more detailed information
that is equivalent to the data provided by weekdayText .
Note: If a place is always open, the time period is represented as
Sunday at midnight, and the closeEvent is null.
currentOpeningHours and secondaryOpeningHours – Fields that take holiday and temporary changes in schedule for a place.
addressComponents – An array of
GMSAddressComponent objects representing components of the
address for a place. These components are provided for the purpose of
extracting structured information about a place's address, for example
finding the city in which a place is located. Don't use these components
for address formatting; instead, use the formattedAddress
property, which provides a localized formatted address.
Note the following facts about the addressComponents
array:
The array of address components may contain more components than the
formattedAddress .
The array does not necessarily include all the political entities that
contain an address, apart from those included in the
formattedAddress .
The format of the response is not guaranteed to remain the same between
requests. In particular, the number of addressComponents
varies based on the address requested and can change over time for the
same address. A component can change position in the array.
The type of the component can change. A particular component may be
missing in a later response.
userRatingsTotal – Represents how many reviews make up
the place's rating.
The
GMSPlace
class contains the following member functions:
isOpen calculates whether a place is open at the given time,
based on openingHours
and UTCOffsetMinutes ,
and the current date and time.
isOpenAtDate
calculates whether a place is open on a given date, based on
openingHours
and UTCOffsetMinutes ,
and the current date and time.
When using these functions to get opening times and/or dates, the original
fetchPlaceFromPlaceID: or findPlaceLikelihoodsFromUserLocationWithPlaceFields:
request must specify BOTH GMSPlaceFieldOpeningHours and GMSPlaceFieldUTCOffsetMinutes
fields. If either of these fields is missing, the resulting GMSPlace
object won't contain opening times or dates, and the call returns
GMSPlaceOpenStatusUnknown . For accurate results, request
the GMSPlaceFieldBusinessStatus and GMSPlaceFieldUTCOffsetMinutes
fields in your original place request. If not requested, it is assumed that
the business is operational.
For how to use isOpen with Place Details, see the How to get opening hours video .
Get exceptional hours
While regular opening hours are obtained through openingHours , currentOpeningHours and secondaryOpeningHours support holiday and temporary schedule changes.
Exceptional hours for these special days can be filtered and presented if available.
Swift
func examineOpeningHours ( place : GMSPlace ) {
// Check if the current opening hours contains a special day that has exceptional hours
guard let currentOpeningHours = place . currentOpeningHours else { return }
if let specialDays = currentOpeningHours . specialDays {
guard ! specialDays . isEmpty else { return }
if let specialDay = specialDays . filter { $0 . isExceptional }. first {
// Indicate exceptional hours
}
}
// Check if current opening hours contains a truncated time period
let periods = currentOpeningHours . periods
if ! periods . isEmpty {
for period in periods {
let open = period . open
let close = period . close
if let open = open {
let date = open . date
if open . isTruncated {
// Indicate truncated time period
}
}
}
}
// Check if the place's secondary opening hours indicate when delivery is available
let secondaryOpeningHours = place . secondaryOpeningHours
guard let hoursType = secondaryOpeningHours . first ?. hoursType else {
return
}
if ( hoursType == GMSPlaceHoursTypeDelivery ) {
// Indicate hours where delivery is available
}
}
Objective-C
- ( void ) examineOpeningHours: ( GMSPlace * ) place {
// Check if the current opening hours contains a special day that has exceptional hours
GMSOpeningHours * currentOpeningHours = place . currentOpeningHours ;
if ( currentOpeningHours != nil ) {
NSArray<GMSPlaceSpecialDay * > * specialDays = currentOpeningHours . specialDays ;
if ([ specialDays count ] != 0 ) {
for ( GMSPlaceSpecialDay * specialDay in specialDays ) {
NSDate * date = specialDay . date ;
if ([ specialDay isExceptional ]) {
// Indicate exceptional hours
}
}
}
}
// Check if current opening hours contains a truncated time period
NSArray < GMSPeriod * > * periods = currentOpeningHours . periods ;
if ([ periods count ] != 0 ) {
for ( GMSPeriod * period in periods ) {
GMSTimeOfWeek * open = period . open ;
GMSTimeOfWeek * close = period . close ;
if ( open ) {
if ([ open isTruncated ]) {
// Indicate truncated time period
}
}
}
}
// Check if the place's secondary opening hours indicate when delivery is available
GMSOpeningHours * secondaryOpeningHours = place . secondaryOpeningHours ;
GMSPlaceHoursType hoursType = secondaryOpeningHours . getHoursType ;
if ( hoursType == GMSPlaceHoursTypeDelivery ) {
// Indicate hours where delivery is available
}
}
Get a place by ID
A place ID is a textual identifier that uniquely identifies a place. In
the Places SDK for iOS, you can retrieve the ID of a place from a
GMSPlace
object. You can store the place ID and use it to retrieve the
GMSPlace
object again later.
To get a place by ID, call
GMSPlacesClient
fetchPlaceFromPlaceID: , passing the following parameters:
A string containing a Place ID.
One or more GMSPlaceField s, specifying the data types to return.
A session token if the call is made to conclude an autocomplete query.
Otherwise, pass nil.
A GMSPlaceResultCallback to handle the result.
The API invokes the specified callback method, passing in a
GMSPlace
object. If the place is not found, the place object is nil.
Places Swift SDK for iOS
// Initialize Places Swift Client.
let placesClient = PlacesClient . shared
// A hotel in Saigon with an attribution
let placeID = "ChIJV4k8_9UodTERU5KXbkYpSYs"
// Fetch Place Request.
let fetchPlaceRequest = FetchPlaceRequest (
placeID : placeID ,
placeProperties : [. displayName ]
)
Task {
switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) {
case . success ( let place ):
print ( "The selected place is: \( place . displayName ) : \( String ( describing : place . description )) " )
case . failure ( let placesError ):
print ( "Place not found: \( placeID ) ; \( placesError ) " )
}
}
Swift
// A hotel in Saigon with an attribution.
let placeID = "ChIJV4k8_9UodTERU5KXbkYpSYs"
// Specify the place data types to return.
let fields : GMSPlaceField = GMSPlaceField ( rawValue : UInt ( GMSPlaceField . name . rawValue ) |
UInt ( GMSPlaceField . placeID . rawValue )) !
placesClient ?. fetchPlace ( fromPlaceID : placeID , placeFields : fields , sessionToken : nil , callback : {
( place : GMSPlace ?, error : Error ?) in
if let error = error {
print ( "An error occurred: \( error . localizedDescription ) " )
return
}
if let place = place {
self . lblName ?. text = place . name
print ( "The selected place is: \( place . name ) " )
}
})
Objective-C
// A hotel in Saigon with an attribution.
NSString * placeID = @"ChIJV4k8_9UodTERU5KXbkYpSYs" ;
// Specify the place data types to return.
GMSPlaceField fields = ( GMSPlaceFieldName | GMSPlaceFieldPlaceID );
[ _placesClient fetchPlaceFromPlaceID : placeID placeFields : fields sessionToken : nil callback :^ ( GMSPlace * _Nullable place , NSError * _Nullable error ) {
if ( error != nil ) {
NSLog ( @"An error occurred %@" , [ error localizedDescription ]);
return ;
}
if ( place != nil ) {
NSLog ( @"The selected place is: %@" , [ place name ]);
}
}];
Display attributions in your app
When your app displays information obtained from
GMSPlacesClient
lookUpPlaceID:callback: , the app must also display attributions.
See the documentation on
attributions .
More about place IDs
The place ID used in the Places SDK for iOS is the same identifier as
used in the
Places API, Places SDK for Android
and other Google APIs .
Each place ID can refer to only one place, but a single place can have more
than one place ID.
There are circumstances which may cause a place to get a new place ID.
For example, this may happen if a business moves to a new location.
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
