---
title: "Places Library \_|\_ Maps JavaScript API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/javascript/legacy/places
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/javascript/legacy/places
  title: "Places Library \_|\_ Maps JavaScript API \_|\_ Google for Developers"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Places Library | Maps JavaScript API | Google for Developers
Skip to main content
Google
Maps Platform
Overview
Products
Pricing
Documentation
Get Started
Get Started with Google Maps Platform
Capabilities Explorer
Pricing & Billing
Security & Compliance
Reporting & Monitoring
FAQ
Support and Resources
Customer Care
Incident Management
Maps
Maps JavaScript API
Maps SDK for Android
Maps SDK for iOS
Google Maps for Flutter
Maps Embed API
Maps Static API
Street View Insights
Street View Static API
Maps URLs
Aerial View API
Elevation API
Map Tiles API
Maps Datasets API
Web Components
Routes
Routes API
Navigation SDK for Android
Navigation SDK for iOS
Navigation for Flutter
Navigation for React Native
Roads API
Route Optimization API
Analytics
Google Earth
Places Insights
Imagery Insights
Roads Management Insights
Places
Places API
Places SDK for Android
Places SDK for iOS
Places Library, Maps JavaScript API
Geocoding API
Geolocation API
Address Validation API
Time Zone API
Places Aggregate API
Environment
Air Quality API
Pollen API
Solar API
Weather API
Solutions
Maps Builder agent
Industry solutions
Mobility services
Additional Resources
API Security Best Practices
Digital Signature Guide
Map Coverage Details
Optimization Guide
Mobile OS and software support
Launch stages
Legacy products
Deprecations
URL Encoding
WordPress Users
Blog
More
Community
GitHub
YouTube
LinkedIn
Discord
Innovators
Issue Tracker
/
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Polski
Português – Brasil
Tiếng Việt
Türkçe
Русский
עברית
العربيّة
فارسی
हिंदी
বাংলা
ภาษาไทย
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Web
Maps JavaScript API
Get Started
Contact sales
Guides
Reference
Samples
Resources
Legacy
More
Google
Maps Platform
Overview
Products
Pricing
Documentation
More
Guides
Reference
Samples
Resources
Legacy
Blog
Community
More
Places Service (Legacy)
Place Search and Details
Place Autocomplete
Place Data Fields
Place Types
Directions and Distance Matrix (Legacy)
Directions
Distance Matrix
Migrate to Places (New)
Migration Overview
Migrate to the new Place Details
Migrate to the new Place Search
Migrate to the new Nearby Search
Migrate to the new Place Photos
Migrate to the new Place Reviews
Migrate to the new Place Autocomplete
Migrate to the new Autocomplete Widget
Migrate to the Routes Library, Maps Java Script API
Migrate to the new Route class
Migrate to the new Route Matrix class
Migrate to the new rendering methods
Get Started
Get Started with Google Maps Platform
Capabilities Explorer
Pricing & Billing
Security & Compliance
Reporting & Monitoring
FAQ
Support and Resources
Customer Care
Incident Management
Maps
Maps JavaScript API
Maps SDK for Android
Maps SDK for iOS
Google Maps for Flutter
Maps Embed API
Maps Static API
Street View Insights
Street View Static API
Maps URLs
Aerial View API
Elevation API
Map Tiles API
Maps Datasets API
Web Components
Routes
Routes API
Navigation SDK for Android
Navigation SDK for iOS
Navigation for Flutter
Navigation for React Native
Roads API
Route Optimization API
Analytics
Google Earth
Places Insights
Imagery Insights
Roads Management Insights
Places
Places API
Places SDK for Android
Places SDK for iOS
Places Library, Maps JavaScript API
Geocoding API
Geolocation API
Address Validation API
Time Zone API
Places Aggregate API
Environment
Air Quality API
Pollen API
Solar API
Weather API
Solutions
Maps Builder agent
Industry solutions
Mobility services
Additional Resources
API Security Best Practices
Digital Signature Guide
Map Coverage Details
Optimization Guide
Mobile OS and software support
Launch stages
Legacy products
Deprecations
URL Encoding
WordPress Users
GitHub
YouTube
LinkedIn
Discord
Innovators
Issue Tracker
On this page
Overview
Getting started
Usage limits and policies Quotas
Policies
Place Searches Find Place requests
Nearby Search Requests
Text Search Requests
Search Responses
Try Sample
Place Details Place Details Requests
Place Details Responses
Reference a Place with a Place ID
Place Photos
reviews Get a Maps Demo Key : Try out select Maps JavaScript API and Places UI Kit features at no cost with a Maps Demo Key—no billing information required.
Home
Products
Google Maps Platform
Documentation
Web
Maps JavaScript API
Legacy
Was this helpful?
Send feedback
Places Library
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Overview
Getting started
Usage limits and policies Quotas
Policies
Place Searches Find Place requests
Nearby Search Requests
Text Search Requests
Search Responses
Try Sample
Place Details Place Details Requests
Place Details Responses
Reference a Place with a Place ID
Place Photos
This product or feature is in Legacy status. For more information about
the Legacy stage and how to migrate from Legacy to newer services,
see Legacy products and features .
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Overview
The functions in the Places Library, Maps JavaScript API enable your application
to search for places (defined in this API as establishments, geographic
locations, or prominent points of interest) contained within a defined area,
such as the bounds of a map, or around a fixed point.
The Places API offers an autocomplete feature which you can use
to give your applications the type-ahead-search behavior of the Google Maps
search field. When a user starts typing an address, autocomplete will
fill in the rest. For more information, see the
autocomplete
documentation .
Getting started
If you are unfamiliar with the Maps JavaScript API or with
JavaScript, we recommend reviewing JavaScript and
Get an API Key prior
to getting started.
Load the library
The Places service is a self-contained library, separate from the main
Maps JavaScript API code. To use the functionality contained
within this library, you must first load it using the libraries
parameter in the Maps API bootstrap URL:
<script async
src="https://maps.googleapis.com/maps/api/js?key= YOUR_API_KEY &loading=async &libraries=places &callback=initMap">
</script>
See the
Libraries Overview for more information.
Add Places API to the API key's API restrictions list
Applying API restrictions to your keys limits usage of the API key to one or
more APIs or SDKs. Requests to an API or SDK associated with the API key will
be processed. Requests to an API or SDK not associated with the API key will
fail.
To restrict an API key for use with the Places Library, Maps JavaScript API:
Go to the Google Cloud console .
Click the project drop-down and select the project that contains the
API key you want to secure.
Click the menu button
and select Google Maps Platform > Credentials .
On the Credentials page, click the name of the API
key that you want to secure.
On the Restrict and rename API key page, set the restrictions:
API restrictions
Select Restrict key .
Click Select APIs and select both Maps JavaScript API and Places API .
(If either of the APIs is not listed, you need to enable it.)
Click SAVE .
Usage limits and policies
Quotas
The Places Library shares a usage quota with
Places API as described in the Usage Limits documentation for
Places API.
Policies
Use of the Places Library, Maps JavaScript API must be in accordance with the
policies described
for the Places API .
Place Searches
With the Places service you can perform the following kinds of searches:
Find Place from Query
returns a place based on a text query (for example, the name or address of
a place).
Find Place from Phone
Number returns a place based on a phone number.
Nearby Search
returns a list of nearby places based on a user's location.
Text Search
returns a list of nearby places based on a search string, eg. "Pizza".
Place Details requests
return more detailed information about a specific place, including
user reviews.
The information returned can include establishments — such as
restaurants, stores, and offices — as well as 'geocode' results, which
indicate addresses, political areas such as towns and cities, and other
points of interest.
Find Place requests
A Find Place request lets you search for a place either by text query or
phone number. There are two types of Find Place request:
Find Place from Query
Find Place from Phone Number
Find Place from Query
Find Place from Query takes a text input and returns a place. The input can
be any kind of Place data, for example a business name or address. To make a
Find Place from Query request, call the PlacesService 's
findPlaceFromQuery()
method, which takes the following parameters:
query (required) The text string on which to search, for
example: "restaurant" or "123 Main Street". This must be a place name,
address, or category of establishments. Any other types of input can generate
errors and are not guaranteed to return valid results. The Places API
will return candidate matches based on this string and order the results
based on their perceived relevance.
fields (required) One or more fields
specifying the types of Place data to return.
locationBias
(optional) Coordinates defining the area to search. This can be one of the
following:
A set of lat/lng coordinates specified as
LatLngLiteral
or LatLng object
Rectangular bounds (two lat/lng pairs, or a LatLngBounds object )
Radius (in meters) centered on a lat/lng
You must also pass a callback method to findPlaceFromQuery() ,
to handle the results object and google.maps.places.PlacesServiceStatus
response.
The following example shows a call to findPlaceFromQuery() ,
searching for "Museum of Contemporary Art Australia", and including the
name and geometry fields.
var map ;
var service ;
var infowindow ;
function initMap () {
var sydney = new google . maps . LatLng ( - 33.867 , 151.195 );
infowindow = new google . maps . InfoWindow ();
map = new google . maps . Map (
document . getElementById ( 'map' ), { center : sydney , zoom : 15 });
var request = {
query : 'Museum of Contemporary Art Australia' ,
fields : [ 'name' , 'geometry' ],
};
var service = new google . maps . places . PlacesService ( map );
service . findPlaceFromQuery ( request , function ( results , status ) {
if ( status === google . maps . places . PlacesServiceStatus . OK ) {
for ( var i = 0 ; i < results . length ; i ++ ) {
createMarker ( results [ i ]);
}
map . setCenter ( results [ 0 ]. geometry . location );
}
});
}
View example
Find Place from Phone Number
Find Place from Phone Number takes a phone number and returns a place. To
make a Find Place from Phone Number request, call the
PlacesService 's findPlaceFromPhoneNumber()
method, which takes the following parameters:
phoneNumber (required) A phone number, in E.164 format.
fields (required) One or more fields
specifying the types of Place data to return.
locationBias (optional) Coordinates defining the area to
search. This can be one of the following:
A set of lat/lng coordinates specified as
LatLngLiteral
or LatLng object
Rectangular bounds (four lat/lng points, or a LatLngBounds object )
Radius (in meters) centered on a lat/lng
You must also pass a callback method to findPlaceFromPhoneNumber() ,
to handle the results object and google.maps.places.PlacesServiceStatus
response.
Fields (Find Place methods)
The Places fields opening_hours.open_now and utc_offset
in the Places SDK for iOS are deprecated as of November 20, 2019,
and will be turned off on February 20, 2021.
Learn more.
Use the fields parameter to specify an array of place data types to return.
For example: fields: ['formatted_address', 'opening_hours', 'geometry'] .
Use a dot when specifying compound values. For example: opening_hours.weekday_text .
Fields correspond to Place Search results , and are divided
into three billing categories: Basic, Contact, and Atmosphere. Basic fields are
billed at base rate, and incur no additional charges. Contact and Atmosphere
fields are billed at a higher rate. See the pricing sheet
for more information. Attributions ( html_attributions ) are always
returned with every call, regardless of whether the field has been
requested.
Caution: Place Search requests and Place Details
requests do not return the same fields. Place Search requests return a subset
of the fields that are returned by Place Details requests. If the field you
want is not returned by Place Search, you can use Place Search to get a
place_id , then use that Place ID to make a Place Details
request.
Basic
The Basic category includes the following fields:
business_status , formatted_address , geometry ,
icon , icon_mask_base_uri , icon_background_color ,
name , permanently_closed ( deprecated ),
photos , place_id , plus_code , types
Contact
The Contact category includes the following field:
opening_hours ( deprecated
in the Places Library, Maps JavaScript API. Use a Place Details request to get the
opening_hours results).
Atmosphere
The Atmosphere category includes the following fields:
price_level , rating , user_ratings_total
The findPlaceFromQuery() and
findPlaceFromPhoneNumber() methods each take the same set of
fields, and can return the same fields in their respective responses.
Set location bias (Find Place methods)
Use the locationBias parameter to make Find Place favor results
in a particular area. You can set locationBias in the following
ways:
Bias results to a specific area:
locationBias : { lat : 37.402105 , lng : - 122.081974 }
Define a rectangular area to search:
locationBias : { north : 37.41 , south : 37.40 , east : - 122.08 , west : - 122.09 }
You can also use a LatLngBounds .
Define a radius to search (in meters), centered on a particular area:
locationBias : { radius : 100 , center : { lat : 37.402105 , lng : - 122.081974 }}
Nearby Search Requests
Nearby Search (Legacy) and Text Search (Legacy) return all of the
available data fields for the selected place (a
subset of the supported fields ),
and you will be
billed accordingly
There is no way to constrain Nearby Search (Legacy) or Text Search (Legacy) to only return specific fields.
To avoid requesting (and paying for) data that you don't need, use a
Find Place (Legacy) request instead.
A Nearby Search lets you search for places within a specified area by
keyword or type. A Nearby Search must always include a location, which can
be specified in one of two ways:
a
LatLngBounds .
a circular area defined as the combination of the location
property — specifying the center of the circle as a
LatLng object — and a radius, measured in meters.
A Places Nearby search is initiated with a call to the
PlacesService 's nearbySearch() method, which will
return an array of
PlaceResult objects. Note that the nearbySearch()
method replaces the search() method as of version 3.9.
service = new google . maps . places . PlacesService ( map );
service . nearbySearch ( request , callback );
This method takes a request with the following fields:
Either of:
bounds , which must be a
google.maps.LatLngBounds object defining the rectangular
search area. The maximum supported diagonal distance for the bounds
area is approximately 100,000 meters.
a location and a radius ; the former takes a
google.maps.LatLng object, and the latter takes a simple
integer, representing the circle's radius in meters. The maximum
allowed radius is 50,000 meters. Note that when
rankBy is set to DISTANCE, you must specify a
location but you cannot specify a radius
or bounds .
keyword ( optional ) — A term to be matched
against all available fields, including but not limited to name, type, and
address, as well as customer reviews and other third-party content.
minPriceLevel and maxPriceLevel
( optional ) — Restricts results to only those places within
the specified range. Valid values range between 0
(most affordable) to 4 (most expensive), inclusive.
name Deprecated. Equivalent to keyword . Values
in this field are combined with values in the keyword field
and passed as part of the same search string.
openNow ( optional ) — A boolean value,
indicating that the Places service should only return those places that
are open for business at the time the query is sent. Places that don't
specify opening hours in the Google Places database won't be
returned if you include this parameter in your query. Setting
openNow to false has no effect.
rankBy ( optional ) — Specifies the order in
which results are listed. Possible values are:
google.maps.places.RankBy.PROMINENCE (default). This
option sorts results based on their importance. Ranking will
favor prominent places within the set radius over nearby
places that match but that are less prominent. Prominence can be
affected by a place's ranking in Google's index, global popularity,
and other factors. When
google.maps.places.RankBy.PROMINENCE is
specified, the radius parameter is required.
google.maps.places.RankBy.DISTANCE . This option
sorts results in ascending order by their distance from the specified
location (required). Note that you cannot specify a
custom bounds and/or radius if you
specify RankBy.DISTANCE . When you specify
RankBy.DISTANCE , one or more of
keyword , name , or type is
required.
type — Restricts the
results to places matching the specified type. Only one type may be
specified (if more than one type is provided, all types following the first
entry are ignored). See the list of
supported types .
You must also pass a callback method to nearbySearch() , to
handle the results object and
google.maps.places.PlacesServiceStatus response.
var map ;
var service ;
var infowindow ;
function initialize () {
var pyrmont = new google . maps . LatLng ( - 33.8665433 , 151.1956316 );
map = new google . maps . Map ( document . getElementById ( 'map' ), {
center : pyrmont ,
zoom : 15
});
var request = {
location : pyrmont ,
radius : 500 ,
type : 'restaurant'
};
service = new google . maps . places . PlacesService ( map );
service . nearbySearch ( request , callback );
}
function callback ( results , status ) {
if ( status == google . maps . places . PlacesServiceStatus . OK ) {
for ( var i = 0 ; i < results . length ; i ++ ) {
createMarker ( results [ i ]);
}
}
}
View example
Text Search Requests
Nearby Search (Legacy) and Text Search (Legacy) return all of the
available data fields for the selected place (a
subset of the supported fields ),
and you will be
billed accordingly
There is no way to constrain Nearby Search (Legacy) or Text Search (Legacy) to only return specific fields.
To avoid requesting (and paying for) data that you don't need, use a
Find Place (Legacy) request instead.
The Google Places Text Search service is a web service that returns
information about a set of places based on a string — for example
"pizza in New York" or "shoe stores near Ottawa". The service responds with
a list of places matching the text string and any location bias that has
been set. The search response will include a list of places. You can send a
Place Details request for more information about any of the places in the
response.
Text Searches are initiated with a call to the
PlacesService 's textSearch() method.
service = new google . maps . places . PlacesService ( map );
service . textSearch ( request , callback );
This method takes a request with the following fields:
query ( required ) The text string on which to
search, for example: "restaurant" or "123 Main Street". This must be a place
name, address, or category of establishments. Any other types of input can
generate errors and are not guaranteed to return valid results. The Places
service will return candidate matches based on this string and order the
results based on their perceived relevance. This parameter becomes optional
if the type parameter is also used in the search request.
Optionally:
openNow — A boolean value,
indicating that the Places service should only return those places that
are open for business at the time the query is sent. Places that don't
specify opening hours in the Google Places database won't be
returned if you include this parameter in your query. Setting
openNow to false has no effect.
minPriceLevel and maxPriceLevel
— Restricts results to only those places within
the specified price level. Valid values are in the range from 0
(most affordable) to 4 (most expensive), inclusive.
Either of:
bounds , which must be a
google.maps.LatLngBounds object defining the rectangular
search area. The maximum supported diagonal distance for the bounds
area is approximately 100,000 meters.
a location and a radius — You may
bias results to a specified circle by passing a
location and a radius parameter. This will
instruct the Places service to prefer showing results within that
circle. Results outside the defined area may still be displayed.
The location takes a google.maps.LatLng object, and
the radius takes a simple integer, representing the circle's radius
in meters. The maximum allowed radius is 50,000 meters.
type — Restricts the results to places matching
the specified type. Only one type may be specified (if more than one
type is provided, all types following the first entry are ignored). See
the list of supported types .
You must also pass a callback method to textSearch() , to
handle the results object and a
google.maps.places.PlacesServiceStatus response.
var map ;
var service ;
var infowindow ;
function initialize () {
var pyrmont = new google . maps . LatLng ( - 33.8665433 , 151.1956316 );
map = new google . maps . Map ( document . getElementById ( 'map' ), {
center : pyrmont ,
zoom : 15
});
var request = {
location : pyrmont ,
radius : 500 ,
query : 'restaurant'
};
service = new google . maps . places . PlacesService ( map );
service . textSearch ( request , callback );
}
function callback ( results , status ) {
if ( status == google . maps . places . PlacesServiceStatus . OK ) {
for ( var i = 0 ; i < results . length ; i ++ ) {
var place = results [ i ];
createMarker ( results [ i ]);
}
}
}
Search Responses
Status Codes
The PlacesServiceStatus response object contains the status of
the request, and may contain debugging information to help you track down
why the place request failed. Possible status values are:
INVALID_REQUEST : This request was invalid.
OK : The response contains a valid result.
OVER_QUERY_LIMIT : The webpage has gone over its request
quota.
REQUEST_DENIED : The webpage is not allowed to use the
PlacesService.
UNKNOWN_ERROR : The PlacesService request couldn't be
processed due to a server error. The request may succeed if you try again.
ZERO_RESULTS : No result was found for this request.
Place Search Results
The findPlace() , nearbySearch() and
textSearch() functions return an array of
PlaceResult objects.
Each PlaceResult object may include the following properties:
business_status indicates the operational
status of the place, if it is a business. It can contain one of the
following values:
OPERATIONAL
CLOSED_TEMPORARILY
CLOSED_PERMANENTLY
If no data exists, business_status is not returned.
formatted_address is a string containing the human-readable
address of this place. The formatted_address property is only
returned for a Text Search .
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
geometry : The place's geometry-related information. This
includes:
location provides the latitude and longitude of the
place.
viewport defines the preferred viewport on the map when
viewing this place.
permanently_closed ( deprecated )
is a boolean flag indicating whether the place has shut down either
permanently or temporarily (value true ). Don't use
permanently_closed . Instead, use business_status
to get the operational status of businesses.
plus_code (see
Open Location Code
and plus codes )
is an encoded location reference, derived from latitude and longitude coordinates, that
represents an area: 1/8000th of a degree by 1/8000th of a degree
(about 14m x 14m at the equator) or smaller. Plus codes can be used as a replacement for
street addresses in places where they don't exist (where buildings are not numbered or
streets are not named).
The plus code is formatted as a global code and a compound code:
global_code is a 4 character area code and 6 character or longer local code
(849VCWC8+R9).
compound_code is a 6 character or longer local code with an explicit location
(CWC8+R9, Mountain View, CA, USA). Don't programmatically parse this content.
Typically, both the global code and compound code are returned. However, if the result is in
a remote location (for example, an ocean or desert) only the global code may be returned.
html_attributions : An array of attributions that you should
display when displaying the search results. Each entry in the array contains
the HTML text for a single attribution. Note: This is an
aggregation of all the attributions for the entire search response. All
PlaceResult objects in the response therefore contain
identical attribution lists.
icon returns the URL for a colored 71px x 71px PNG icon.
icon_mask_base_uri returns the base URL for a non-colored
icon, minus the .svg or .png extension.
icon_background_color returns the default HEX color code for
the place's category.
name : The place's name.
opening_hours may contain the following information:
open_now is a boolean value indicating if the place is
open at the current time ( Deprecated
in the Places Library, Maps JavaScript API, use utc_offset_minutes
instead).
place_id is a textual identifier that uniquely identifies a
place. To retrieve information about the place, pass this identifier in the
Place Details
request . Learn more about how to reference a place
with a place ID .
rating contains the place's rating, from 0.0 to 5.0, based
on aggregated user reviews.
types An array of
types for this place (e.g., ["political", "locality"] or
["restaurant", "lodging"] ). This array may contain multiple values, or may be
empty. New values may be introduced without prior notice. See the list of
supported types .
vicinity : A simplified address for the place, including
the street name, street number, and locality, but not the
province/state, postal code, or country. For example, Google's Sydney,
Australia office has a vicinity value of 5/48 Pirrama
Road, Pyrmont .
Access Additional Results
By default, each place search returns up to 20 results per query. However,
each search can return as many as 60 results, split across three pages.
Additional pages are available using the PlaceSearchPagination
object. In order to access additional pages you must capture the
PlaceSearchPagination object using a callback function. The
PlaceSearchPagination object is defined as:
hasNextPage a boolean property that indicates if further
results are available. true when there is an additional
results page.
nextPage() a function that will return the next set of
results. After executing a search, you must wait two
seconds before the next page of results will be available.
To see the next set of results, call nextPage .
Each page of results must be displayed before displaying the next page of
results. Note that each search counts as a single request against your
usage limits.
The example below demonstrates how to alter your callback function to
capture the PlaceSearchPagination object, so that you can issue
multiple search requests.
TypeScript JavaScript
More
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initMap () : void {
// Create the map.
const pyrmont = { lat : - 33.866 , lng : 151.196 };
const map = new google . maps . Map (
document . getElementById ( "map" ) as HTMLElement ,
{
center : pyrmont ,
zoom : 17 ,
mapId : "8d193001f940fde3" ,
} as google . maps . MapOptions
);
// Create the places service.
const service = new google . maps . places . PlacesService ( map );
let getNextPage : () = > void | false ;
const moreButton = document . getElementById ( "more" ) as HTMLButtonElement ;
moreButton . onclick = function () {
moreButton . disabled = true ;
if ( getNextPage ) {
getNextPage ();
}
};
// Perform a nearby search.
service . nearbySearch (
{ location : pyrmont , radius : 500 , type : "store" },
(
results : google.maps.places.PlaceResult [] | null ,
status : google.maps.places.PlacesServiceStatus ,
pagination : google.maps.places.PlaceSearchPagination | null
) = > {
if ( status !== "OK" || ! results ) return ;
addPlaces ( results , map );
moreButton . disabled = ! pagination || ! pagination . hasNextPage ;
if ( pagination && pagination . hasNextPage ) {
getNextPage = () = > {
// Note: nextPage will call the same handler function as the initial call
pagination . nextPage ();
};
}
}
);
}
function addPlaces (
places : google.maps.places.PlaceResult [],
map : google.maps.Map
) {
const placesList = document . getElementById ( "places" ) as HTMLElement ;
for ( const place of places ) {
if ( place . geometry && place . geometry . location ) {
const image = {
url : place.icon ! ,
size : new google . maps . Size ( 71 , 71 ),
origin : new google . maps . Point ( 0 , 0 ),
anchor : new google . maps . Point ( 17 , 34 ),
scaledSize : new google . maps . Size ( 25 , 25 ),
};
new google . maps . Marker ({
map ,
icon : image ,
title : place.name ! ,
position : place.geometry.location ,
});
const li = document . createElement ( "li" );
li . textContent = place . name ! ;
placesList . appendChild ( li );
li . addEventListener ( "click" , () = > {
map . setCenter ( place . geometry ! . location ! );
});
}
}
}
declare global {
interface Window {
initMap : () = > void ;
}
}
window . initMap = initMap ; index . ts
Note: Read the guide on using TypeScript and Google Maps.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initMap () {
// Create the map.
const pyrmont = { lat : - 33.866 , lng : 151.196 };
const map = new google . maps . Map ( document . getElementById ( "map" ), {
center : pyrmont ,
zoom : 17 ,
mapId : "8d193001f940fde3" ,
});
// Create the places service.
const service = new google . maps . places . PlacesService ( map );
let getNextPage ;
const moreButton = document . getElementById ( "more" );
moreButton . onclick = function () {
moreButton . disabled = true ;
if ( getNextPage ) {
getNextPage ();
}
};
// Perform a nearby search.
service . nearbySearch (
{ location : pyrmont , radius : 500 , type : "store" },
( results , status , pagination ) = > {
if ( status !== "OK" || ! results ) return ;
addPlaces ( results , map );
moreButton . disabled = ! pagination || ! pagination . hasNextPage ;
if ( pagination && pagination . hasNextPage ) {
getNextPage = () = > {
// Note: nextPage will call the same handler function as the initial call
pagination . nextPage ();
};
}
},
);
}
function addPlaces ( places , map ) {
const placesList = document . getElementById ( "places" );
for ( const place of places ) {
if ( place . geometry && place . geometry . location ) {
const image = {
url : place . icon ,
size : new google . maps . Size ( 71 , 71 ),
origin : new google . maps . Point ( 0 , 0 ),
anchor : new google . maps . Point ( 17 , 34 ),
scaledSize : new google . maps . Size ( 25 , 25 ),
};
new google . maps . Marker ({
map ,
icon : image ,
title : place . name ,
position : place . geometry . location ,
});
const li = document . createElement ( "li" );
li . textContent = place . name ;
placesList . appendChild ( li );
li . addEventListener ( "click" , () = > {
map . setCenter ( place . geometry . location );
});
}
}
}
window . initMap = initMap ; index . js
Note: The JavaScript is compiled from the TypeScript snippet.
View example
Try Sample
JSFiddle.net
Google Cloud Shell
Place Details
In addition to providing a list of places within an area, the Places
service can also return detailed information about a specific place. Once
a place has been returned in a place search response, its
place ID can be used to request additional details
about that place, such as its complete address, phone number, user rating
and reviews, etc.
Place Details Requests
Place Details are requested with a call to the service's
getDetails() method.
service = new google . maps . places . PlacesService ( map );
service . getDetails ( request , callback );
This method takes a request, containing a place's
placeId , and fields indicating which types of Places data
to return. Learn more about
how to reference a place with a place ID .
It also takes a callback method, which needs to handle the status code passed
in the google.maps.places.PlacesServiceStatus response, as well
as the google.maps.places.PlaceResult object.
var request = {
placeId : 'ChIJN1t_tDeuEmsRUsoyG83frY4' ,
fields : [ 'name' , 'rating' , 'formatted_phone_number' , 'geometry' ]
};
service = new google . maps . places . PlacesService ( map );
service . getDetails ( request , callback );
function callback ( place , status ) {
if ( status == google . maps . places . PlacesServiceStatus . OK ) {
createMarker ( place );
}
}
View example
You can request the place_id for a place,
with no charge .
To do this, call getDetails() , and specify only the place_id
field.
Fields (Place details)
The fields parameter takes an array of strings (field names).
The Places fields opening_hours.open_now and utc_offset
in the Places SDK for iOS are deprecated as of November 20, 2019,
and will be turned off on February 20, 2021.
Learn more.
Use the fields parameter to specify an array of place data types to return.
For example: fields: ['address_components', 'opening_hours', 'geometry'] .
Use a dot when specifying compound values. For example: opening_hours.weekday_text .
Fields correspond to Place Details
results , and are divided into three billing categories: Basic, Contact, and
Atmosphere. Basic fields are billed at base rate, and incur no additional
charges. Contact and Atmosphere fields are billed at a higher rate. See the pricing sheet
for more information. Attributions ( html_attributions ) are always
returned with every call, regardless of whether it has been requested.
Basic
The Basic category includes the following fields:
address_components , adr_address , business_status ,
formatted_address , geometry , icon ,
icon_mask_base_uri , icon_background_color , name ,
permanently_closed ( deprecated ),
photo , place_id , plus_code , type ,
url , utc_offset ( deprecated
in the Places Library, Maps JavaScript API), utc_offset_minutes ,
vicinity
Contact
The Contact category includes the following fields:
formatted_phone_number , international_phone_number ,
opening_hours , website
Atmosphere
The Atmosphere category includes the following fields:
price_level , rating , reviews ,
user_ratings_total
Caution: Place Search requests and Place Details
requests do not return the same fields. Place Search requests return a subset
of the fields that are returned by Place Details requests. If the field you
want is not returned by Place Search, you can use Place Search to get a
place_id , then use that Place ID to make a Place Details
request.
Learn more about
place fields . For more
information about how Place data requests are billed, see
Usage and Billing .
Warning: If you don't specify at least one field
with a request, or if you omit the fields parameter from a
request, ALL possible fields will be returned, and you will be billed
accordingly. This applies only to Place Details requests (including Place
Details requests made from the
Place Autocomplete widget ).
Place Details Responses
Status Codes
The PlacesServiceStatus response object contains the status of
the request, and may contain debugging information to help you track down
why the Place Details request failed. Possible status values are:
INVALID_REQUEST : This request was invalid.
OK : The response contains a valid result.
OVER_QUERY_LIMIT : The webpage has gone over its request
quota.
NOT_FOUND The referenced location was not
found in the Places database.
REQUEST_DENIED : The webpage is not allowed to use the
PlacesService.
UNKNOWN_ERROR : The PlacesService request couldn't be
processed due to a server error. The request may succeed if you try again.
ZERO_RESULTS : No result was found for this request.
Place Details Results
A successful getDetails() call returns a
PlaceResult object with the following properties:
address_components : An array containing the separate
components applicable to this address.
Each address component typically contains the following fields:
types[] is an array indicating the type of the
address component. The address component might have an empty types array
when there are no known types for that address component. The API might add
new type values as needed. For more information, see
Address types and address component types .
long_name is the full text description or name of the
address component as returned by the Geocoder.
short_name is an abbreviated textual name for the address
component, if available. For example, an address component for the state
of Alaska may have a long_name of "Alaska" and a
short_name of "AK" using the 2-letter postal abbreviation.
Note the following facts about the address_components[]
array:
The array of address components may contain more components than the
formatted_address .
The array does not necessarily include all the political entities that
contain an address, apart from those included in the
formatted_address . To retrieve all the political entities
that contain a specific address, you should use reverse geocoding, passing
the latitude/longitude of the address as a parameter to the request.
The format of the response is not guaranteed to remain the same between
requests. In particular, the number of address_components
varies based on the address requested and can change over time for the
same address. A component can change position in the array.
The type of the component can change. A particular component may be
missing in a later response.
business_status indicates the operational
status of the place, if it is a business. It can contain one of the
following values:
OPERATIONAL
CLOSED_TEMPORARILY
CLOSED_PERMANENTLY
If no data exists, business_status is not returned.
formatted_address : The human-readable address of this place.
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
formatted_phone_number : The place's phone number, formatted
according to the
number's regional convention .
geometry : The place's geometry-related information. This
includes:
location provides the latitude and longitude of the
place.
viewport defines the preferred viewport on the map when
viewing this place.
permanently_closed ( deprecated )
is a boolean flag indicating whether the place has shut down either
permanently or temporarily (value true ). Don't use
permanently_closed . Instead, use business_status
to get the operational status of businesses.
plus_code (see
Open Location Code
and plus codes )
is an encoded location reference, derived from latitude and longitude coordinates, that
represents an area: 1/8000th of a degree by 1/8000th of a degree
(about 14m x 14m at the equator) or smaller. Plus codes can be used as a replacement for
street addresses in places where they don't exist (where buildings are not numbered or
streets are not named).
The plus code is formatted as a global code and a compound code:
global_code is a 4 character area code and 6 character or longer local code
(849VCWC8+R9).
compound_code is a 6 character or longer local code with an explicit location
(CWC8+R9, Mountain View, CA, USA). Don't programmatically parse this content.
Typically, both the global code and compound code are returned. However, if the result is in
a remote location (for example, an ocean or desert) only the global code may be returned.
html_attributions : Attribution text to be displayed for
this place result.
icon : URL to an image resource that can be used to
represent this place's type.
international_phone_number contains the place's phone
number in international format. International format includes the country
code, and is prefixed with the plus (+) sign. For example, the
international_phone_number for Google's Sydney, Australia
office is +61 2 9374 4000 .
name : The place's name.
utc_offset Deprecated
in the Places Library, Maps JavaScript API, use utc_offset_minutes instead.
utc_offset_minutes contains the number of minutes this
place's current timezone is offset from UTC. For example, for places in
Sydney, Australia during daylight saving time this would be 660 (+11 hours
from UTC), and for places in California outside of daylight saving time
this would be -480 (-8 hours from UTC).
opening_hours contains the following information:
open_now ( Deprecated
in the Places Library, Maps JavaScript API; use
opening_hours.isOpen() instead. For how to use isOpen with Place Details, see the
How to get opening hours in the Places API video .)
`open_now` is a boolean value indicating whether the place is open at the current
time.
periods[] is an array of opening periods covering seven
days, starting from Sunday, in chronological order. Each period
contains:
open contains a pair of day and time objects
describing when the place opens:
day a number from 0–6, corresponding to the days
of the week, starting on Sunday. For example, 2 means
Tuesday.
time may contain a time of day in 24-hour hhmm
format (values are in the range 0000–2359). The
time will be reported in the place's timezone.
close may contain a pair of day and time objects
describing when the place closes. Note: If a place
is always open , the close section will
be missing from the response. Applications can rely on always-open
being represented as an open period containing
day with value 0 and time with value 0000,
and no close .
weekday_text is an array of seven strings representing
the formatted opening hours for each day of the week. If a
language parameter was specified in the Place Details
request, the Places Service will format and localize the opening hours
appropriately for that language. The ordering of the elements in this
array depends on the language parameter. Some languages
start the week on Monday while others start on Sunday.
permanently_closed ( deprecated )
is a boolean flag indicating whether the place has shut down either
permanently or temporarily (value true ). Don't use
permanently_closed . Instead, use business_status
to get the operational status of businesses.
photos[] : an array of PlacePhoto objects.
A PlacePhoto can be used to obtain a photo with the
getUrl() method, or you can inspect the object for the
following values:
height : the maximum height of the image, in pixels.
width : the maximum width of the image, in pixels.
html_attributions : Attribution text to be displayed
with this place photo.
place_id : A textual identifier that uniquely identifies a
place and can be used to retrieve information about the place using a
Place Details
request . Learn more about how to reference a place
with a place ID .
rating : The place's rating, from 0.0 to 5.0, based on
aggregated user reviews.
reviews an array of up to five reviews. Each review
consists of several components:
aspects[] contains an array of
PlaceAspectRating objects, each of which provides a
rating of a single attribute of the establishment. The first object
in the array is considered the primary aspect. Each
PlaceAspectRating is defined as:
type the name of the aspect that is being rated.
The following types are supported: appeal ,
atmosphere , decor ,
facilities , food , overall ,
quality and service .
rating the user's rating for this particular
aspect, from 0 to 3.
author_name the name of the user who submitted the
review. Anonymous reviews are attributed to "A Google user". If a
language parameter was set, then the phrase "A Google user" will
return a localized string.
author_url the URL to the users Google+ profile, if
available.
language an IETF language code indicating the language
used in the user's review. This field contains the main language tag
only, and not the secondary tag indicating country or region. For
example, all the English reviews are tagged as 'en', and not 'en-AU' or
'en-UK'.
rating the user's overall rating for this place. This
is a whole number, ranging from 1 to 5.
text the user's review. When reviewing a
location with Google Places, text reviews are considered optional;
therefore, this field may by empty.
types An array of
types for this place (e.g., ["political", "locality"] or
["restaurant", "lodging"] ). This array may contain multiple values, or may be
empty. New values may be introduced without prior notice. See the list of
supported types .
url : URL of the official Google page for this
place. This is the Google-owned page that contains the best
available information about the place. Applications must link to or embed
this page on any screen that shows detailed results about the place to the
user.
vicinity : A simplified address for the place, including
the street name, street number, and locality, but not the
province/state, postal code, or country. For example, Google's Sydney,
Australia office has a vicinity value of 5/48 Pirrama
Road, Pyrmont . The vicinity property is only returned
for a Nearby Search .
website lists the authoritative website for this place, such
as a business' homepage.
Note: Multidimensional ratings may not be available for
all locations. If there are too few reviews then the details response will
either include a legacy rating on a 0.0 to 5.0 scale (if available) or no
rating at all.
Reference a Place with a Place ID
A place ID is a unique reference to a place on a Google Map. Place IDs
are available for most locations, including businesses, landmarks, parks,
and intersections.
To use a place ID in your app you must first look up the ID, which is
available in PlaceResult of a Place Search or Details request.
You can then use this place ID to look up
Place
Details .
Note: Place IDs are also available through
the Places API .
A single place ID refers to only one place, but a place can have multiple
place IDs. For more information, see the
place ID overview .
Place IDs are exempt from the caching restrictions stated
in Section 3.2.3(b) of the
Google Maps Platform Terms of Service. You can therefore store place ID values for later use. For
best practises when storing place IDs, see the
place ID overview .
var map ;
function initialize () {
// Create a map centered in Pyrmont, Sydney (Australia).
map = new google . maps . Map ( document . getElementById ( 'map' ), {
center : { lat : - 33.8666 , lng : 151.1958 },
zoom : 15
});
// Search for Google's office in Australia.
var request = {
location : map . getCenter (),
radius : '500' ,
query : 'Google Sydney'
};
var service = new google . maps . places . PlacesService ( map );
service . textSearch ( request , callback );
}
// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
function callback ( results , status ) {
if ( status == google . maps . places . PlacesServiceStatus . OK ) {
var marker = new google . maps . Marker ({
map : map ,
place : {
placeId : results [ 0 ]. place_id ,
location : results [ 0 ]. geometry . location
}
});
}
}
google . maps . event . addDomListener ( window , 'load' , initialize );
Place Photos
Use the Place Photo feature to add high quality photographic
content to your site. The Photo service gives you access to the millions of
photos stored in the Places and Google+ Local database. When you get place
information using a Place Details request, photo
references will be returned for relevant photographic content. The Nearby Search
and Text Search requests also return a single photo reference per place, when
relevant. Using the Photo service you can then access the referenced photos and
resize the image to the optimal size for your application.
An array of PlacePhoto objects will be returned as part of the
PlaceResult object for any getDetails() ,
textSearch() or
nearbySearch() request made against a PlacesService .
Note: The number of photos returned varies by request.
A Nearby Search or a Text Search will return at most one
PlacePhoto object.
A Details request will return up to ten PlacePhoto objects.
You can request the URL for the associated image by calling the
PlacePhoto.getUrl() method, and passing a valid
PhotoOptions object. Use the PhotoOptions object to specify the maximum height and width of the image. If you
specify a value for both maxHeight and a maxWidth ,
the photo service will resize the image to the smaller of the two sizes, while
maintaining the original aspect ratio.
The following code snippet accepts a place object, and adds a marker
to the map if a photo exists. The default marker image is replaced
by a small version of the photo.
function createPhotoMarker ( place ) {
var photos = place . photos ;
if ( ! photos ) {
return ;
}
var marker = new google . maps . Marker ({
map : map ,
position : place . geometry . location ,
title : place . name ,
icon : photos [ 0 ]. getUrl ({ maxWidth : 35 , maxHeight : 35 })
});
}
Photos returned by the Photo service are sourced from a variety of
locations, including business owners and user contributed photos. In most
cases, these photos can be used without attribution, or will have the required
attribution included as a part of the image. However, if the returned
photo element includes a value in the
html_attributions field, you must include the additional
attribution in your application wherever you display the image.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
Stack Overflow
Ask a question under the google-maps tag.
GitHub
Fork our samples and try them yourself.
Discord
Chat with fellow developers about Google Maps Platform.
Issue Tracker
Something wrong? Send us a bug report!
Learn More
FAQ
Capabilities Explorer
Tutorials
Platforms
Android
iOS
Web
Web Services
Product Info
Pricing and Plans
Contact Sales
Support
Terms of Service
Android
Chrome
Firebase
Google Cloud Platform
Google AI
All products
Terms
Privacy
Manage cookies
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Polski
Português – Brasil
Tiếng Việt
Türkçe
Русский
עברית
العربيّة
فارسی
हिंदी
বাংলা
ภาษาไทย
中文 – 简体
中文 – 繁體
日本語
한국어
Info
Chat
API
Page info
bug_report fullscreen close_fullscreen close
On this page
On this page
Overview
Getting started
Usage limits and policies Quotas
Policies
Place Searches Find Place requests
Nearby Search Requests
Text Search Requests
Search Responses
Try Sample
Place Details Place Details Requests
Place Details Responses
Reference a Place with a Place ID
Place Photos
Insert API key
Loading projects...
Cancel Insert
