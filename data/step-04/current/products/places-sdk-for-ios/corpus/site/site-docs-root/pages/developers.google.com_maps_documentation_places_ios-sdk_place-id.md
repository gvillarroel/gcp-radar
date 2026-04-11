---
title: "Place IDs \_|\_ Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/place-id
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/place-id
  title: "Place IDs \_|\_ Places SDK for iOS \_|\_ Google for Developers"
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
Place IDs
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Place IDs are unique text identifiers for places in the Google Places database and are used across multiple Google Maps Platform APIs.
You can find a place's ID using the provided Place ID finder tool or by searching for a place using the Places API or Places library.
Place IDs can be stored and reused, but it's recommended to refresh them if they are older than 12 months.
Certain types of place IDs, such as those for inferred addresses or long route segments, might return errors or change over time.
INVALID_REQUEST or NOT_FOUND error codes indicate an invalid or obsolete place ID, respectively.
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
Introduction
Place IDs uniquely identify a place in the Google Places database and on Google Maps. Place IDs
are accepted in requests to the following Maps APIs:
Retrieving an address for a Place ID in the Geocoding API and
Geocoding Service, Maps JavaScript API.
Specifying origin, destination and intermediate waypoints in the
Routes API and Directions API (Legacy)
and Directions Service, Maps JavaScript API (Legacy).
Specifying origins and destinations in the Routes API and
Distance Matrix API (Legacy) and
Distance Matrix Service, Maps JavaScript API (Legacy).
Retrieving Place Details in Places API (New),
Places SDK for Android (New), Places SDK for iOS (New), and
Places Library.
Using Place ID parameters in Maps Embed API.
Retrieving search queries in Maps URLs.
Displaying speed limits in Roads API.
Finding and styling boundary polygons in data-driven styling for boundaries.
Find the ID of a particular place
Are you looking for the place ID of a specific place? Use the place ID
finder below to search for a place and get its ID:
Alternatively, you can
view
the place ID finder with its code in the Maps JavaScript API
documentation.
Overview
A place ID is a textual identifier that uniquely identifies a place. The
length of the identifier may vary (there is no maximum length for place IDs).
Examples:
ChIJgUbEo8cfqokR5lP9_Wh_DaM
GhIJQWDl0CIeQUARxks3icF8U8A
EicxMyBNYXJrZXQgU3QsIFdpbG1pbmd0b24sIE5DIDI4NDAxLCBVU0EiGhIYChQKEgnRTo6ixx-qiRHo_bbmkCm7ZRAN
EicxMyBNYXJrZXQgU3QsIFdpbG1pbmd0b24sIE5DIDI4NDAxLCBVU0E
IhoSGAoUChIJ0U6OoscfqokR6P225pApu2UQDQ
Place IDs are available for most locations, including businesses, landmarks,
parks, and intersections. It is possible for the same place or location to
have multiple different place IDs. Place IDs may change over time.
You can use the same place ID across the Places API and a
number of Google Maps Platform APIs. For example, you can use the same place ID to
reference a place in the
Places API , the
Maps JavaScript API ,
the Geocoding API ,
the Maps Embed API
and the Roads API .
Retrieve place details using the place ID
A common way of using place IDs is to search for a place
(using the Places API
or the Places
library in the Maps JavaScript API, for example) then use the
returned place ID to retrieve place details. You can store the place ID and
use it to retrieve the same place details later. Read about
saving place IDs below.
Example using the Places SDK for iOS
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
Save place IDs for later use
Place IDs are exempt from the caching restrictions stated in
Section 3.2.3(b)
of the Google Maps Platform Terms of Service. You can therefore store place ID values for later
use.
Refresh stored place IDs
Because Place IDs may change due to updates on the Google Maps database, Google recommends
refreshing place IDs if they are more than 12 months old. You can refresh Place IDs at no
charge by making a
Place Details request ,
specifying only the GMSPlaceFieldPlaceID
field in the fields parameter.
This call triggers the
Places Details - ID Refresh
SKU.
Error codes when using place IDs
INVALID_REQUEST
The INVALID_REQUEST status code indicates that the specified
place ID is not valid. INVALID_REQUEST may be returned when the
place ID has been truncated or otherwise modified, and is no longer correct.
NOT_FOUND
The NOT_FOUND status code indicates that the specified place ID
is obsolete. A place ID may become obsolete if a business closes or moves to
a new location. Place IDs may also change due to updates on the Google
Maps database. In such cases, a place may receive a new place ID, and the old
ID returns a NOT_FOUND response.
Note: Place IDs that are obsolete may continue to be returned in
Place Autocomplete (Legacy), Query Autocomplete (Legacy), or Autocomplete (New) responses for a few
days after the place ID has been removed from the Google Maps database.
To refresh results in the event of an obsolete place ID, store the original request that
returned each place ID and re-issue the request as needed. Note that the re-issued request is
billed at the appropriate SKU.
Some types of place IDs may sometimes cause a
NOT_FOUND response, or the API may return a different place ID in
the response. These place ID types include:
Street addresses that don't exist in Google Maps as precise addresses,
but are inferred from a range of addresses.
Segments of a long route, where the request also specifies a city or
locality.
Intersections.
Places with an address component of type subpremise .
These IDs often take the form of a long string (there is no maximum length
for Place IDs). For example:
EpID4LC14LC_4LCo4LCv4LGN4LCo4LCX4LCw4LGNIC0g4LC44LGI4LCm4LGN4LCs4LC-4LCm4LGNIOCwsOCxi-CwoeCxjeCwoeCxgSAmIOCwteCwv-CwqOCwr-CxjSDgsKjgsJfgsLDgsY0g4LCu4LGG4LCv4LC_4LCo4LGNIOCwsOCxi-CwoeCxjeCwoeCxgSwg4LC14LC_4LCo4LCv4LGNIOCwqOCwl-CwsOCxjSDgsJXgsL7gsLLgsKjgsYAsIOCwsuCwleCxjeCwt-CxjeCwruCwv-CwqOCwl-CwsOCxjSDgsJXgsL7gsLLgsKjgsYAsIOCwuOCwsOCxguCwsOCxjSDgsKjgsJfgsLDgsY0g4LC14LGG4LC44LGN4LCf4LGNLCDgsLjgsK_gsYDgsKbgsL7gsKzgsL7gsKbgsY0sIOCwueCxiOCwpuCwsOCwvuCwrOCwvuCwpuCxjSwg4LCk4LGG4LCy4LCC4LCX4LC-4LCjIDUwMDA1OSwg4LCt4LC-4LCw4LCk4LCm4LGH4LC24LCCImYiZAoUChIJ31l5uGWYyzsR9zY2qk9lDiASFAoSCd9ZebhlmMs7Efc2NqpPZQ4gGhQKEglDz61OZpjLOxHgDJCFY-o1qBoUChIJi37TW2-YyzsRr_uv50r7tdEiCg1MwFcKFS_dyy4
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Place IDs are unique textual identifiers for locations in Google's database, usable across various Maps APIs. They're employed to retrieve addresses, specify waypoints in routes, get place details, and more. A place can have multiple IDs, which may change over time. You can find IDs using the place ID finder. Place IDs can be saved and used later, with a recommendation to refresh those older than 12 months using a Place Details request. Errors can occur when the Place ID has been modified or the place is no longer valid.\n"]]
