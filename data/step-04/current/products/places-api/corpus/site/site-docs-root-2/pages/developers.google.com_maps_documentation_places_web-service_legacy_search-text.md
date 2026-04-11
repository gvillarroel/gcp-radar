---
title: "Text Search (Legacy) \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/search-text
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/search-text
  title: "Text Search (Legacy) \_|\_ Places API \_|\_ Google for Developers"
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
Web Services
Places API
Legacy
Send feedback
Text Search (Legacy)
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Note: Server-side
and client-side libraries
The Places API is also available with the
Java Client,
Python Client, Go Client and Node.js Client for Google Maps Services .
The Places API and the client libraries are for
use in server applications.
If you're building a client-side
application, take a look at the
Places SDK for Android (New) , the
Places SDK for iOS (New) , and the
Places Library, Maps JavaScript API .
A Text Search (Legacy) returns information about a set of places based on a string — for example
"pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
The service responds with a list of places matching the text string and any
location bias that has been set.
Text Search (Legacy) is not intended for ambiguous queries, including the following:
Query type
Example
Too many concepts or constraints, such as the names of multiple places, roads, or cities in a single query
"Market Street San Francisco San Jose Airport"
Postal address elements not represented on Google Maps
"C/O John Smith 123 Main Street"
"P.O. Box 13 San Francisco"
Names of businesses, chains, or categories combined with locations where these entities are not available
"Tesco near Dallas, Texas"
Ambiguous queries with multiple interpretations
"Charger drop-off"
Historical names no longer in use
"Middlesex United Kingdom"
Non-geospatial elements or intent
"How many boats are in Ventura Harbor?"
Unofficial or vanity names
"The Jenga"
"The Helter Skelter"
Latitude and longitude coordinates
"37.422131,-122.084801"
Note: For best results when searching on a phone number,
include the country code followed by a space, and set the
regionCode parameter to correspond to the country code.
Phone number formats vary by country and the API attempts to return a result for these
different formats. For valid phone numbers, Places API (New) supports the
E.164 format .
Alphabet characters are converted based on the
E.161 keypad mapping .
The search response will include a list of places. You can send a Place Details
request for more information about any of the places in the response.
Nearby Search (Legacy) and Text Search (Legacy) return all of the
available data fields for the selected place (a
subset of the supported fields ),
and you will be
billed accordingly
There is no way to constrain Nearby Search (Legacy) or Text Search (Legacy) to only return specific fields.
To avoid requesting (and paying for) data that you don't need, use a
Find Place (Legacy) request instead.
Text Search (Legacy) requests
A Text Search (Legacy) request is an HTTP URL of the following form:
https://maps.googleapis.com/maps/api/place/textsearch/ output ? parameters
where output may be either of the following values:
json (recommended) indicates output in JavaScript
Object Notation (JSON)
xml indicates output as XML
Certain parameters are required to initiate a search request. As is
standard in URLs, all parameters are separated using the ampersand
( & ) character.
Required parameters
query
The text string on which to search, for example: "restaurant" or "123 Main
Street". This must a place name, address, or category of establishments.
Any other types of input can generate errors and are not guaranteed to
return valid results. The Google Places service will return candidate
matches based on this string and order the results based on their
perceived relevance.
radius
Defines the distance (in meters) within which to return place results. You
may bias results to a specified circle by passing a
location and a radius parameter. Doing so
instructs the Places service to prefer showing results within
that circle; results outside of the defined area may still be displayed.
The radius will automatically be clamped to a maximum value depending on
the type of search and other parameters.
Autocomplete: 50,000 meters
Nearby Search:
with keyword or name : 50,000 meters
without keyword or name
Up to 50,000 meters, adjusted dynamically based on area density,
independent of rankby parameter.
When using rankby=distance , the radius parameter
won't be accepted, and will result in an
INVALID_REQUEST .
Query Autocomplete: 50,000 meters
Text Search: 50,000 meters
Optional parameters
language
The language in which to return results.
See the
list of supported languages . Google often updates the supported languages, so this list may not be
exhaustive.
If language is not supplied, the API attempts to use the
preferred language as specified in the
Accept-Language header.
The API does its best to provide a street address that is readable for
both the user and locals. To achieve that goal, it returns street
addresses in the local language, transliterated to a script readable by
the user if necessary, observing the preferred language. All other
addresses are returned in the preferred language. Address components are
all returned in the same language, which is chosen from the first
component.
If a name is not available in the preferred language, the API uses the
closest match.
The preferred language has a small influence on the set of results that
the API chooses to return, and the order in which they are returned. The
geocoder interprets abbreviations differently depending on language,
such as the abbreviations for street types, or synonyms that may be
valid in one language but not in another. For example, utca and
tér are synonyms for street in Hungarian.
location
The point around which to retrieve place information. This must be
specified as latitude,longitude .
The location parameter may be overridden if the
query contains an explicit location such as
Market in Barcelona . Using quotes around the query may also
influence the weight given to the location and
radius .
maxprice
Restricts results to only those places within the specified range. Valid
values range between 0 (most affordable) to 4 (most expensive), inclusive.
The exact amount indicated by a specific value will vary from region to
region.
minprice
Restricts results to only those places within the specified range. Valid
values range between 0 (most affordable) to 4 (most expensive), inclusive.
The exact amount indicated by a specific value will vary from region to
region.
opennow
Returns only those places that are open for business at the time the query
is sent. Places that don't specify opening hours in the Google Places
database won't be returned if you include this parameter in your query.
pagetoken
Returns up to 20 results from a previously run search. Setting a
pagetoken parameter will execute a search with the same
parameters used previously — all parameters other than pagetoken will be
ignored.
region
The region code, specified as a
ccTLD ("top-level domain")
two-character value. Most ccTLD codes are identical to ISO 3166-1 codes,
with some notable exceptions. For example, the United Kingdom's ccTLD is
"uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the
entity of "The United Kingdom of Great Britain and Northern Ireland").
type
Restricts the results to places matching the specified type. Only one type
may be specified. If more than one type is provided, all types following
the first entry are ignored.
type=hospital|pharmacy|doctor becomes
type=hospital
type=hospital,pharmacy,doctor is ignored entirely
See the list of
supported types .
Note: Adding both keyword and type with the same value
( keyword=cafe&type=cafe or keyword=parking&type=parking ) can yield
ZERO_RESULTS .
Text Search (Legacy) examples
Note: In these examples, you need to replace the key with your
own API key in order for the request to work in your application.
Basic example
The following example shows a search for restaurants near
Sydney.
curl
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&key=YOUR_API_KEY'
HTTP
https://maps.googleapis.com/maps/api/place/textsearch/json
?query=restaurants%20in%20Sydney
&key=YOUR_API_KEY
Incomplete address example
The following example shows a search for an incomplete address, in
this case, a street address that does not include a city or state or country.
curl
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=123%20main%20street&key=YOUR_API_KEY'
HTTP
https://maps.googleapis.com/maps/api/place/textsearch/json
?query=123%20main%20street
&key=YOUR_API_KEY
JSON
{
"html_attributions" : [],
"results" :
[
{
"formatted_address" : "Main St, Denver, CO 80238, USA" ,
"geometry" :
{
"location" : { "lat" : 39.782267 , "lng" : -104.8919341 },
"viewport" :
{
"northeast" :
{ "lat" : 39.78361682989273 , "lng" : -104.8905842701073 },
"southwest" :
{ "lat" : 39.78091717010729 , "lng" : -104.8932839298927 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png" ,
"icon_background_color" : "#7B9EB0" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet" ,
"name" : "Main St" ,
"place_id" : "ChIJIS85_gd7bIcRJIGEPue1cJI" ,
"reference" : "ChIJIS85_gd7bIcRJIGEPue1cJI" ,
"types" : [ "route" ],
},
],
"status" : "OK" ,
}
XML
<?xml version="1.0" encoding="UTF-8"?>
<PlaceSearchResponse>
<status>OK</status>
<result>
<name>Main St</name>
<type>route</type>
<formatted_address>Main St, Denver, CO 80238, USA</formatted_address>
<geometry>
<location>
<lat>39.7822670</lat>
<lng>-104.8919341</lng>
</location>
<viewport>
<southwest>
<lat>39.7809172</lat>
<lng>-104.8932839</lng>
</southwest>
<northeast>
<lat>39.7836168</lat>
<lng>-104.8905843</lng>
</northeast>
</viewport>
</geometry>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png</icon>
<reference>ChIJIS85_gd7bIcRJIGEPue1cJI</reference>
<place_id>ChIJIS85_gd7bIcRJIGEPue1cJI</place_id>
<icon_background_color>#7B9EB0</icon_background_color>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet</icon_mask_base_uri>
</result>
</PlaceSearchResponse>
Location bias example
The following example shows a search for the same
incomplete address in preceding example, and includes location and
radius parameters to bias the results to a region of interest.
curl
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=123%20main%20street&location=42.3675294%2C-71.186966&radius=10000&key=YOUR_API_KEY'
HTTP
https://maps.googleapis.com/maps/api/place/textsearch/json
?location=42.3675294%2C-71.186966
&query=123%20main%20street
&radius=10000
&key=YOUR_API_KEY
JSON
{
"html_attributions" : [],
"results" :
[
{
"formatted_address" : "123 Main St, Boston, MA 02110, USA" ,
"geometry" :
{
"location" : { "lat" : 42.3744917 , "lng" : -71.0634802 },
"viewport" :
{
"northeast" :
{ "lat" : 42.37581642989272 , "lng" : -71.06219107010727 },
"southwest" :
{ "lat" : 42.37311677010727 , "lng" : -71.06489072989272 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png" ,
"icon_background_color" : "#7B9EB0" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet" ,
"name" : "123 Main St" ,
"place_id" : "ChIJd_ueCe1w44kRD_KFuN5w5nA" ,
"plus_code" :
{
"compound_code" : "9WFP+QJ Boston, Massachusetts" ,
"global_code" : "87JC9WFP+QJ" ,
},
"reference" : "ChIJd_ueCe1w44kRD_KFuN5w5nA" ,
"types" : [ "street_address" ],
},
],
"status" : "OK" ,
}
XML
<?xml version="1.0" encoding="UTF-8"?>
<PlaceSearchResponse>
<status>OK</status>
<result>
<name>123 Main St</name>
<type>street_address</type>
<formatted_address>123 Main St, Boston, MA 02110, USA</formatted_address>
<geometry>
<location>
<lat>42.3744917</lat>
<lng>-71.0634802</lng>
</location>
<viewport>
<southwest>
<lat>42.3731168</lat>
<lng>-71.0648907</lng>
</southwest>
<northeast>
<lat>42.3758164</lat>
<lng>-71.0621911</lng>
</northeast>
</viewport>
</geometry>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png</icon>
<reference>ChIJd_ueCe1w44kRD_KFuN5w5nA</reference>
<place_id>ChIJd_ueCe1w44kRD_KFuN5w5nA</place_id>
<plus_code>
<global_code>87JC9WFP+QJ</global_code>
<compound_code>9WFP+QJ Boston, Massachusetts</compound_code>
</plus_code>
<icon_background_color>#7B9EB0</icon_background_color>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet</icon_mask_base_uri>
</result>
</PlaceSearchResponse>
Text Search (Legacy) responses
Search responses are returned in the format indicated by the
output flag within the URL request's path.
The following example shows a Text Search (Legacy) response.
JSON
{
"html_attributions" : [],
"next_page_token" : "Aap_uEAHsgFErpxZrytW1mgKsefD327VCf0OgNF9vpXPwTOG6AGhEZpGgMgofSzgCahevXhneCe9M9H24SOuE4ZcaE0ZR01gVykQZ6EoDnlWEQvXBXe6z0sgF5MQo7qBb6uD4VHKDLhgR59Lb86BzTHJzTzbm61OAPvyInZoaQxK8-oEf2PShZT7XRJKoF5nISbwvU_-RomwGDVi27oj0fToIyV-Vj2ftJw8ZUPbdGGCbcDolQyAwj11Dy2aaeK4SGwg2mO5Akxa7fCze2RJ0GCAvXXp7omTFDy_47OXsFgDPfzluc7mEb5VlzlIMZ0eWQ8VeNigtv-XZZG0f3HSo81Yeq3QhXedJ5oNE1XCwyMly3YVgw_h3amOzAOuDigF1pgFnfGyzxD8vr2bfbPTNvA9l7IJ8Q" ,
"results" :
[
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "1 Macquarie St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8592041 , "lng" : 151.2132635 },
"viewport" :
{
"northeast" :
{ "lat" : -33.85786707010728 , "lng" : 151.2147093298927 },
"southwest" :
{ "lat" : -33.86056672989272 , "lng" : 151.2120096701072 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Aria Restaurant Sydney" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 4032 ,
"html_attributions" :
[
' Dohyu n Kim ' ,
],
"photo_reference" : "Aap_uED7B83PoQ1wNgzYcFZEOw1P2DqNjlaqiXxo-r4F_NaR27uV2OiIvijkI6RYyfiiHYo9UqjnZkRtZaNTk4C6Ickh3k3stsSvBU0KfLtFow-oRujSYYChYwiYhVyP27omLzQQjafhJ2N3LJbjcMxSePKXsQzYCqmOLWg0E9mSExMJ4aM" ,
"width" : 3024 ,
},
],
"place_id" : "ChIJdxxU1WeuEmsR11c4fswX-Io" ,
"plus_code" :
{
"compound_code" : "46R7+88 Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46R7+88" ,
},
"price_level" : 4 ,
"rating" : 4.5 ,
"reference" : "ChIJdxxU1WeuEmsR11c4fswX-Io" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 1681 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "15 Bligh St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8651396 , "lng" : 151.2104533 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86384167010728 , "lng" : 151.2118993298927 },
"southwest" :
{ "lat" : -33.86654132989272 , "lng" : 151.2091996701073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Restaurant Hubert" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 683 ,
"html_attributions" :
[
' Ashley Hughes ' ,
],
"photo_reference" : "Aap_uEB41WOb_Nl8I8py4D6uXoLHzVYtFZZcucYdYAN1FtzXBnAu59xXrxk5tekoktAbklwmHeSFfdnTCWgHRZ1C5Azp9AMCP9GRGV1f2Z1-5kjsVgnYPiq82JoueSUdCSQJFabyL0cagtcGaFKetVi7DmUIHDQknEPCh_cpCbdOMw4Bkq5q" ,
"width" : 1024 ,
},
],
"place_id" : "ChIJF5-RdGquEmsR5rN_H74uSqQ" ,
"plus_code" :
{
"compound_code" : "46M6+W5 Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46M6+W5" ,
},
"price_level" : 3 ,
"rating" : 4.6 ,
"reference" : "ChIJF5-RdGquEmsR5rN_H74uSqQ" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 2393 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "529 Kent St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8751241 , "lng" : 151.2049722 },
"viewport" :
{
"northeast" :
{ "lat" : -33.87375712010727 , "lng" : 151.2065098798927 },
"southwest" :
{ "lat" : -33.87645677989271 , "lng" : 151.2038102201073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Tetsuya's Restaurant" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 1536 ,
"html_attributions" :
[
' A Google User ' ,
],
"photo_reference" : "Aap_uEABxcDNSMAz51CRsIr5ejvKYb61EQ94XxZTVO_mGdB8OcnoywPCx8f9e6xeAJjPzCcW_2ds6GfObP5l1gkq9lily-rVi5z2x2Ue7CvLwKyquIJnrF6offeY79I-jeiL153aXMNcunfpA2ERTkzl8SX9jSh7T5wZ49oSKL-0F8fh8kVF" ,
"width" : 2304 ,
},
],
"place_id" : "ChIJxXSgfDyuEmsR3X5VXGjBkFg" ,
"plus_code" :
{
"compound_code" : "46F3+XX Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46F3+XX" ,
},
"price_level" : 4 ,
"rating" : 4.6 ,
"reference" : "ChIJxXSgfDyuEmsR3X5VXGjBkFg" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 1127 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "98 Clarence St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8679688 , "lng" : 151.2053027 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86662567010728 , "lng" : 151.2065763298927 },
"southwest" :
{ "lat" : -33.86932532989272 , "lng" : 151.2038766701073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Bistro Papillon" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 2880 ,
"html_attributions" :
[
' ka te Kwak ' ,
],
"photo_reference" : "Aap_uEDTgSYN79L90iMhL-g9lZX-52myIvxBj82nYBA2MTVnSNbuqBwnDBkjHuiLHMG_0e4na2UxV8EpxZCHoisxLHRTFkr8ahDCVhgK9cxhnEgSjmqIPAQh7n23JqfHAzSp-2ksgg9FaK2NYNyAfhC_MtSFUXyVd0aNLdEsj95pWuFWlRyi" ,
"width" : 2160 ,
},
],
"place_id" : "ChIJywXDWT-uEmsRxyuZ0Inwi04" ,
"plus_code" :
{
"compound_code" : "46J4+R4 Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46J4+R4" ,
},
"price_level" : 3 ,
"rating" : 4.5 ,
"reference" : "ChIJywXDWT-uEmsRxyuZ0Inwi04" ,
"types" :
[
"meal_takeaway" ,
"restaurant" ,
"point_of_interest" ,
"food" ,
"establishment" ,
],
"user_ratings_total" : 498 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "Ground Floor, 199 George St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8616781 , "lng" : 151.2077174 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86039142010728 , "lng" : 151.2091855798927 },
"southwest" :
{ "lat" : -33.86309107989273 , "lng" : 151.2064859201073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Mode Kitchen & Bar" ,
"opening_hours" : { "open_now" : true },
"photos" :
[
{
"height" : 1536 ,
"html_attributions" :
[
' Mode Ki t che n & Bar ' ,
],
"photo_reference" : "Aap_uECCCAhdFqO1rCWXBXK2Ub1UloT6k5-VfS_J3HSNB_Znw1gEd78ltmokAt_g5kBa2dKrVKt_ob4rSJBvrREXUykDzRWChaXHIacM8KJix6J97T2P2WrzEP5FpNRsnfim8f4biVSNKSwmXGX_ZynFSmgBQOgDt1iVpdZ0IZ1beSPLHPL3" ,
"width" : 2048 ,
},
],
"place_id" : "ChIJL2r6S0KuEmsRxzk0sfWZYnU" ,
"plus_code" :
{
"compound_code" : "46Q5+83 Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46Q5+83" ,
},
"price_level" : 2 ,
"rating" : 4.4 ,
"reference" : "ChIJL2r6S0KuEmsRxzk0sfWZYnU" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 217 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "Colonial Mutual Life Building, Angel Pl, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8671138 , "lng" : 151.2083642 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86574872010727 , "lng" : 151.2097876798927 },
"southwest" :
{ "lat" : -33.86844837989272 , "lng" : 151.2070880201072 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Long Chim Sydney" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 4480 ,
"html_attributions" :
[
' Lo n g Chim Syd ne y ' ,
],
"photo_reference" : "Aap_uECawW_4NulE_MO_wdqh5WwoX9oIMSVnhkjv73J87-xfYE0zYMeUX23RY3F45RPyREWucZeF5KY8Ty_Vir3uQ01EglcwQq_unavJ5wM1CUpLamMyuY4ifMisnNJcbDywnvlKUqcW8WfAD6fPIxeSKxVjsl6E9h9keqyy73DRRm3FuqMd" ,
"width" : 6720 ,
},
],
"place_id" : "ChIJ98SIQkCuEmsRQAStwDCAshw" ,
"plus_code" :
{
"compound_code" : "46M5+58 Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46M5+58" ,
},
"price_level" : 3 ,
"rating" : 4.1 ,
"reference" : "ChIJ98SIQkCuEmsRQAStwDCAshw" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 1234 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "17-19 Alberta St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8777986 , "lng" : 151.2105307 },
"viewport" :
{
"northeast" :
{ "lat" : -33.87646642010727 , "lng" : 151.2119536298927 },
"southwest" :
{ "lat" : -33.87916607989272 , "lng" : 151.2092539701073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Alberto's Lounge" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 4000 ,
"html_attributions" :
[
' Kreeso n Naraidoo ' ,
],
"photo_reference" : "Aap_uEAKwkOCpQ5q8I0mLRMpDLfSe1E6g7umIx6QSy3GrWO-w6Yk533jOo0kCHi1LinjLzbFoSRxNcyvTk0RXj502jGe6VU__UOPjEB6GetV3Dpwgs_xR0Rb52wlx4BFMz8QbsIWOZNzF9Nutk_gLjCPKWk-A_eWjxmQerT7ZWG3OKhDkd_K" ,
"width" : 6000 ,
},
],
"place_id" : "ChIJU_xO9hOvEmsRERZv-itx524" ,
"plus_code" :
{
"compound_code" : "46C6+V6 Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46C6+V6" ,
},
"rating" : 4.6 ,
"reference" : "ChIJU_xO9hOvEmsRERZv-itx524" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 548 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "25 Bligh St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8654401 , "lng" : 151.2101016 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86417187010728 , "lng" : 151.2115775298928 },
"southwest" :
{ "lat" : -33.86687152989273 , "lng" : 151.2088778701073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Chophouse Sydney" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 3550 ,
"html_attributions" :
[
' A Google User ' ,
],
"photo_reference" : "Aap_uEAWMbQLzK8Hf4k2UHZZ9bmXF6U8ghWjT4d3r6a3g6Jj0s4i3mDumwH49NWyAZe_gT6Dzmne8UoMPGYBSXDb8sKCUCGQRyMViMEWJCFDuT4Jvjwa_7JXsyj0_VEm9nmua4Sy39K9uk8ZQEUTMCqEIPlYzxRo3VXUm0KkM4TrPnJ8eDG9" ,
"width" : 5325 ,
},
],
"place_id" : "ChIJZ-VZ30GuEmsRwLVCmEo-B2I" ,
"plus_code" :
{
"compound_code" : "46M6+R2 Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46M6+R2" ,
},
"price_level" : 3 ,
"rating" : 4.3 ,
"reference" : "ChIJZ-VZ30GuEmsRwLVCmEo-B2I" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 1174 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "46-52 Meagher St, Chippendale NSW 2008, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8874605 , "lng" : 151.2008331 },
"viewport" :
{
"northeast" :
{ "lat" : -33.88617642010727 , "lng" : 151.2021869298927 },
"southwest" :
{ "lat" : -33.88887607989272 , "lng" : 151.1994872701073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Ester Restaurant" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 4032 ,
"html_attributions" :
[
' A n gela To n g ' ,
],
"photo_reference" : "Aap_uEDAVR2ZbxrkwY2XIKsAO_K54A3sLZof-Cc8vjyqKVRXhwoOU8OkOpSG8dFFjJqD0EungtPoFuOAVmrZDA5sdUqgekvLTneFEWvQntR4zE0s8fuaVZf6nnl4FUnAalKWOQwEakMlAFT-PvqHzXaXfvuMJ69euepMNMJCWUCUz9HlzSuB" ,
"width" : 3024 ,
},
],
"place_id" : "ChIJ7WdhetixEmsRzIf7Q-q6ocY" ,
"plus_code" :
{
"compound_code" : "4672+28 Chippendale, New South Wales, Australia" ,
"global_code" : "4RRH4672+28" ,
},
"price_level" : 3 ,
"rating" : 4.5 ,
"reference" : "ChIJ7WdhetixEmsRzIf7Q-q6ocY" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 956 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "27 O'Connell St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8652017 , "lng" : 151.2088233 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86401937010727 , "lng" : 151.2103577298927 },
"southwest" :
{ "lat" : -33.86671902989272 , "lng" : 151.2076580701073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Bentley Restaurant + Bar" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 3024 ,
"html_attributions" :
[
' A Google User ' ,
],
"photo_reference" : "Aap_uEC2sk8YPyjk7yBwj6pWLHMjQea6HkLgzw2VTgxaU9GAR4Z7cKZ-XDixUWpcmtpyKPJzYoVlSv92kxGTOgkAGZEyDdXGJWT5RgLZRi_HOGVtWBrwYqD5IusdvQ4fBZj2j3yDOyM5Rw-fZpl-MiiSjhubuvR0Ra_x5PbDjVvYb5lgN_Yp" ,
"width" : 3024 ,
},
],
"place_id" : "ChIJybJExkGuEmsRmpbxj1gH_-U" ,
"plus_code" :
{
"compound_code" : "46M5+WG Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46M5+WG" ,
},
"price_level" : 4 ,
"rating" : 4.3 ,
"reference" : "ChIJybJExkGuEmsRmpbxj1gH_-U" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 606 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "56 Pirrama Rd, Pyrmont NSW 2009, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8668159 , "lng" : 151.1973855 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86555562010727 , "lng" : 151.1990430798927 },
"southwest" :
{ "lat" : -33.86825527989272 , "lng" : 151.1963434201073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "LuMi Dining" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 3456 ,
"html_attributions" :
[
' Qi n g - Li n g Tra n ' ,
],
"photo_reference" : "Aap_uEBWfjS-8EN9i6bl8cflsqTawfHBVe2X7ZZ0BlJC0ri_MMEn-9k7oLhCq5gdozyhx-trWhl_FdrUdUPWerEW_MRa6eLD4cmLL1ZdF418ZtYSOnR3H1aIbmQpGNF7ltXrzaWVFI1MKYzJoat4WnyUyDUPPGx5dynj_rC4ufTTFTLqV2jb" ,
"width" : 4608 ,
},
],
"place_id" : "ChIJDZzo5DeuEmsRsi1wzrIp6HY" ,
"plus_code" :
{
"compound_code" : "45MW+7X Pyrmont, New South Wales, Australia" ,
"global_code" : "4RRH45MW+7X" ,
},
"price_level" : 4 ,
"rating" : 4.6 ,
"reference" : "ChIJDZzo5DeuEmsRsi1wzrIp6HY" ,
"types" :
[ "bar" , "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 648 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "39 Lime St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.867806 , "lng" : 151.2017201 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86646482010728 , "lng" : 151.2031808298927 },
"southwest" :
{ "lat" : -33.86916447989272 , "lng" : 151.2004811701072 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "The Malaya" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 885 ,
"html_attributions" :
[
' The Malaya ' ,
],
"photo_reference" : "Aap_uEALKL4StbrRJxvVFBPP4bFq7exqB3GLs_qDheVF_MQD9mIq4XG2QeXc1WimxybYSkdl2sj1e9xXzR_ZTTaHC13faCQxY4t2BM2HMJ20sCZZoE2TKDRIwuQ4B7AxnMypKBTUXtkHTtsMJPI8nTIIKoa5b8rM9Pf3HnUacPUg0kKmlfqj" ,
"width" : 884 ,
},
],
"place_id" : "ChIJ4U8HhjiuEmsRyevJVTxWbFo" ,
"plus_code" :
{
"compound_code" : "46J2+VM Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46J2+VM" ,
},
"price_level" : 3 ,
"rating" : 4.5 ,
"reference" : "ChIJ4U8HhjiuEmsRyevJVTxWbFo" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 1344 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "60 Carrington St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8668185 , "lng" : 151.2064637 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86546022010727 , "lng" : 151.2076971798927 },
"southwest" :
{ "lat" : -33.86815987989272 , "lng" : 151.2049975201073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Bopp & Tone" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 1179 ,
"html_attributions" :
[
' Md. Kurba n Ali ' ,
],
"photo_reference" : "Aap_uEDb3R6906_imHTfBq-WvDVaUYWYletbwXZ_lk_pUmdZ6e_ldeX-kmVg470dN7kL0V7fmRlLwblKhEHpcwU9ryWE97boU0u021G9IybZSA7dzM07eUfMNbdBYAU9SJzUihkkKYHXRaGjUQah8hsQHRzoMe0fU6SUD5VJgdOiCfAg3jzA" ,
"width" : 1772 ,
},
],
"place_id" : "ChIJfTxskB6vEmsRXPSIwVlleUA" ,
"plus_code" :
{
"compound_code" : "46M4+7H Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46M4+7H" ,
},
"price_level" : 1 ,
"rating" : 4.7 ,
"reference" : "ChIJfTxskB6vEmsRXPSIwVlleUA" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 689 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "17 Bligh St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8653056 , "lng" : 151.2103593 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86401087010728 , "lng" : 151.2117942798927 },
"southwest" :
{ "lat" : -33.86671052989272 , "lng" : 151.2090946201073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Balcón by Tapavino" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 2359 ,
"html_attributions" :
[
' A Google User ' ,
],
"photo_reference" : "Aap_uECptqTTZFSmP9ZQ6gZpwBUHd1oPYdpYimtZu0hPlQYsy2dwEirrOnIvzj-bytjVTXPps_462XYekZHVXtXcd68S4HVKcxGOODVskziJFnxqP-gR7ToqWHusnfVmzjeEip_ofrJwIRC9rIeQNfdDdY5bR3EHHg-RBifLT78Hgy_9AmDR" ,
"width" : 4192 ,
},
],
"place_id" : "ChIJTxj0dGquEmsR-6tLuaGJl_M" ,
"plus_code" :
{
"compound_code" : "46M6+V4 Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46M6+V4" ,
},
"price_level" : 3 ,
"rating" : 4.4 ,
"reference" : "ChIJTxj0dGquEmsR-6tLuaGJl_M" ,
"types" :
[ "bar" , "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 615 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "Shop 100/412/414 George St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8694151 , "lng" : 151.2071166 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86806547010728 , "lng" : 151.2084946798927 },
"southwest" :
{ "lat" : -33.87076512989272 , "lng" : 151.2057950201073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "The Restaurant Pendolino" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 1365 ,
"html_attributions" :
[
' The Res taurant Pe n doli n o ' ,
],
"photo_reference" : "Aap_uEDQIyh5y5AoYrcKQewc9VRhruEl5uP9RoCAvSNblDjgl4_noqxRu533JpHJ05JsHmFFGBstVK6VI3liXUT25hItj4XPWmgt82fAWtho-Ug0Y9L7csf2i2xdb28SK4NsyqHA4Vf-J6o2jxPDRu-UM_lPP_wrkCzHdl4owDtXSFB0Yv4T" ,
"width" : 2048 ,
},
],
"place_id" : "ChIJL1zhdD-uEmsRgDPXKOx1JyU" ,
"plus_code" :
{
"compound_code" : "46J4+6R Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46J4+6R" ,
},
"price_level" : 3 ,
"rating" : 4.6 ,
"reference" : "ChIJL1zhdD-uEmsRgDPXKOx1JyU" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 505 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "4 Ash St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8669418 , "lng" : 151.2075261 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86557222010728 , "lng" : 151.2089249298927 },
"southwest" :
{ "lat" : -33.86827187989272 , "lng" : 151.2062252701072 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Mercado" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 3183 ,
"html_attributions" :
[
' Mercado ' ,
],
"photo_reference" : "Aap_uEA5WUv48wnMuPFig77wsLUcSSckmhgYcvkn3U0C6_VusopaQQYWMpWpi8r_mbwxDST8Y3eKHeqzSOTOy-6Xals5vXGxKM9QG8QloLN9zlk5FpfjCmRiXWFj2hGh5RTXumuBoq2WY5HmKgLXVK3Wa-59thWtv1o6bLJawqM1dad3rPIn" ,
"width" : 4774 ,
},
],
"place_id" : "ChIJCXaGXkCuEmsR_O_xTuWrmT8" ,
"plus_code" :
{
"compound_code" : "46M5+62 Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46M5+62" ,
},
"price_level" : 3 ,
"rating" : 4.4 ,
"reference" : "ChIJCXaGXkCuEmsR_O_xTuWrmT8" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 572 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "1 Angel Pl, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8670308 , "lng" : 151.208067 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86563237010727 , "lng" : 151.2094688798927 },
"southwest" :
{ "lat" : -33.86833202989272 , "lng" : 151.2067692201073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Ragazzi Wine and Pasta" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 1000 ,
"html_attributions" :
[
' A Google User ' ,
],
"photo_reference" : "Aap_uEDfY4kMWk39O1mGg8-nYtl970y3-sr7ex3F5EUu9aL-FL5MGigK4uWf45YFO1a2rF3uaUQ2VTT9W5GjpaTlljko5Brrm5h3XOkS5uPvuYba_mK_K_mx0Byz2WbXh9-7r9jlz075DJMiG7rs42aw26bwffF4aYZpBoQfxipXEMc4_92i" ,
"width" : 1500 ,
},
],
"place_id" : "ChIJTRnbxc6vEmsRnUOl_URYSvs" ,
"plus_code" :
{
"compound_code" : "46M5+56 Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46M5+56" ,
},
"rating" : 4.4 ,
"reference" : "ChIJTRnbxc6vEmsRnUOl_URYSvs" ,
"types" :
[ "restaurant" , "bar" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 433 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "5 Kensington St, Chippendale NSW 2008, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8848073 , "lng" : 151.2015895 },
"viewport" :
{
"northeast" :
{ "lat" : -33.88340327010728 , "lng" : 151.2029597798927 },
"southwest" :
{ "lat" : -33.88610292989272 , "lng" : 151.2002601201073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Automata Restaurant" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 3024 ,
"html_attributions" :
[
' IS L ' ,
],
"photo_reference" : "Aap_uEDo7q_kvvgqOXdvRb0Uu2Fa3V_UYYFeBq7V9xTwn4353OI9jzFxrCoJk63NUbUZPd4BFbK0dPXNjBZ_-5f9b-8Dh6IKkgW0ynExs4rsfjA5YxqkYKc2WKCAElKKrR8N7G0PfV-y4CqdYc9syC3bzC571VFna2ZUudx_ljlrHXL4jnOW" ,
"width" : 4032 ,
},
],
"place_id" : "ChIJhfcGASeuEmsRmj19JwYiqUo" ,
"plus_code" :
{
"compound_code" : "4682+3J Chippendale, New South Wales, Australia" ,
"global_code" : "4RRH4682+3J" ,
},
"price_level" : 3 ,
"rating" : 4.4 ,
"reference" : "ChIJhfcGASeuEmsRmj19JwYiqUo" ,
"types" : [ "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 474 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "Bennelong Point, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8567498 , "lng" : 151.2152535 },
"viewport" :
{
"northeast" : { "lat" : -33.85569109999999 , "lng" : 151.21607855 },
"southwest" : { "lat" : -33.8599259 , "lng" : 151.21277835 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Bennelong" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 3840 ,
"html_attributions" :
[
' A Google User ' ,
],
"photo_reference" : "Aap_uEDHg9QjKCjtzVDOOJtqOEHSp2iQ8rykuMNdHDFuviyfbJP9XfxM6x2TdxZYuu4kfSrn79o5DroGRG6NQR5pa3OVlFBVVfD88uUKBlhxnOlq4GqRbgk8W1xT0TxL7fjlKPPqa3hA0ZrweoOknLRDxv8zCKpPZu0gdlJfoKAG_VAnbUv-" ,
"width" : 5760 ,
},
],
"place_id" : "ChIJQcmNYGauEmsR84D5HAJJUhw" ,
"plus_code" :
{
"compound_code" : "46V8+84 Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46V8+84" ,
},
"price_level" : 4 ,
"rating" : 4.5 ,
"reference" : "ChIJQcmNYGauEmsR84D5HAJJUhw" ,
"types" :
[ "bar" , "restaurant" , "point_of_interest" , "food" , "establishment" ],
"user_ratings_total" : 1230 ,
},
{
"business_status" : "OPERATIONAL" ,
"formatted_address" : "123 Clarence St, Sydney NSW 2000, Australia" ,
"geometry" :
{
"location" : { "lat" : -33.8671505 , "lng" : 151.2049296 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86582657010727 , "lng" : 151.2063577298927 },
"southwest" :
{ "lat" : -33.86852622989272 , "lng" : 151.2036580701073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Machiavelli" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 605 ,
"html_attributions" :
[
' Nikhil Kuchroo ' ,
],
"photo_reference" : "Aap_uEBKwIZhaQQgPdMT72V5LBm4ELL7a9SZOtIObjmvn_mYzY1fFq3lIHrzg8NRas-h4fhWdNfC8QC4qVrPUP6VpnIRheN9jdBteNRjWiFRyCSQFEDsW2JUU3h4kCTnf90Uw0KcWyXPACm9ZXq1Wp-m2Dkx4AbSYpo17chLhDCQlLBmSDjP" ,
"width" : 1280 ,
},
],
"place_id" : "ChIJgVcAr0CuEmsRJjJm03tgFtE" ,
"plus_code" :
{
"compound_code" : "46M3+4X Sydney, New South Wales, Australia" ,
"global_code" : "4RRH46M3+4X" ,
},
"price_level" : 3 ,
"rating" : 4.5 ,
"reference" : "ChIJgVcAr0CuEmsRJjJm03tgFtE" ,
"types" :
[
"meal_takeaway" ,
"restaurant" ,
"point_of_interest" ,
"food" ,
"establishment" ,
],
"user_ratings_total" : 529 ,
},
],
"status" : "OK" ,
}
XML
<?xml version="1.0" encoding="UTF-8"?>
<PlaceSearchResponse>
<status>OK</status>
<result>
<name>Aria Restaurant Sydney</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>1 Macquarie St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8592041</lat>
<lng>151.2132635</lng>
</location>
<viewport>
<southwest>
<lat>-33.8605667</lat>
<lng>151.2120097</lng>
</southwest>
<northeast>
<lat>-33.8578671</lat>
<lng>151.2147093</lng>
</northeast>
</viewport>
</geometry>
<rating>4.5</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJdxxU1WeuEmsR11c4fswX-Io</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEDOK3C-umU4a2um8NR1G_b_MNPEG1ogm0PLp49myXaj0AD2aT60YrNlbrwnvg2VBrCmE2kBsuDmwZgXL8V-vU2ToVhNgp3A8zAjtx15slWyCxm3WCvWFEPE-_eBoj0Dlh83k_oWPN65B0blYM-qXLBY1PJZbq14gOUXabf31PSo1yA</photo_reference>
<width>3024</width>
<height>4032</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/112033760018394328606&quot;&gt;Dohyun Kim&lt;/a&gt;</html_attribution>
</photo>
<price_level>4</price_level>
<user_ratings_total>1681</user_ratings_total>
<place_id>ChIJdxxU1WeuEmsR11c4fswX-Io</place_id>
<plus_code>
<global_code>4RRH46R7+88</global_code>
<compound_code>46R7+88 Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Restaurant Hubert</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>15 Bligh St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8651396</lat>
<lng>151.2104533</lng>
</location>
<viewport>
<southwest>
<lat>-33.8665413</lat>
<lng>151.2091997</lng>
</southwest>
<northeast>
<lat>-33.8638417</lat>
<lng>151.2118993</lng>
</northeast>
</viewport>
</geometry>
<rating>4.6</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJF5-RdGquEmsR5rN_H74uSqQ</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEDhALUBAcrBEprGmkq0_kj9kC4IEWod9h0PZBu-A1mXPN_ZfylpiDXRWxOtuONEFQIqjREf7C28LQDjzqVl4ZD0gZUk4Y0JHPDWaTlfVwijaPfw221p175Sk4po7rB2t7HgjQF2c5O12FYnvNzRiCrkOjr4xroJgzcnp1LV0y8w7gtb</photo_reference>
<width>1024</width>
<height>683</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/113719639442868633401&quot;&gt;Ashley Hughes&lt;/a&gt;</html_attribution>
</photo>
<price_level>3</price_level>
<user_ratings_total>2393</user_ratings_total>
<place_id>ChIJF5-RdGquEmsR5rN_H74uSqQ</place_id>
<plus_code>
<global_code>4RRH46M6+W5</global_code>
<compound_code>46M6+W5 Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Tetsuya's Restaurant</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>529 Kent St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8751241</lat>
<lng>151.2049722</lng>
</location>
<viewport>
<southwest>
<lat>-33.8764568</lat>
<lng>151.2038102</lng>
</southwest>
<northeast>
<lat>-33.8737571</lat>
<lng>151.2065099</lng>
</northeast>
</viewport>
</geometry>
<rating>4.6</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJxXSgfDyuEmsR3X5VXGjBkFg</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEB_575EN5x3iSrUDg7DHG11QRK8rfHuSVXkDZ3pb6AV-YsP5zwykhIe3s7QiFXU_aHsUTrrxr4fk3GCDhebLdA2WYzPLy6jnlCC1VmKempE7auGiFFXpwIif6ZHmMbXjTVZYJEZCAsi_JypzPJCrKsCAB18FT9xHO7OnYXdmucWlX4w</photo_reference>
<width>2304</width>
<height>1536</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/104244205094808346734&quot;&gt;A Google User&lt;/a&gt;</html_attribution>
</photo>
<price_level>4</price_level>
<user_ratings_total>1127</user_ratings_total>
<place_id>ChIJxXSgfDyuEmsR3X5VXGjBkFg</place_id>
<plus_code>
<global_code>4RRH46F3+XX</global_code>
<compound_code>46F3+XX Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Bistro Papillon</name>
<type>meal_takeaway</type>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>98 Clarence St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8679688</lat>
<lng>151.2053027</lng>
</location>
<viewport>
<southwest>
<lat>-33.8693253</lat>
<lng>151.2038767</lng>
</southwest>
<northeast>
<lat>-33.8666257</lat>
<lng>151.2065763</lng>
</northeast>
</viewport>
</geometry>
<rating>4.5</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJywXDWT-uEmsRxyuZ0Inwi04</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEBIYHY3mR7m2duLrbyemmbf-L6H7XDkUMIZSmMyM_zoO26vDSWPjRL-TCnXOMZwRkV9ZTEmTMkfzMm3Jw_W1fx8JiKTZICa5pIPWL_O1yTqyvPemrQFeUBtTgkKUTD7GpDFyuMkYo0yG3MDqTf5YHDGvoHMDND3KK-bDYHoN6pB2TdX</photo_reference>
<width>2160</width>
<height>2880</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/115283784392961129380&quot;&gt;kate Kwak&lt;/a&gt;</html_attribution>
</photo>
<price_level>3</price_level>
<user_ratings_total>498</user_ratings_total>
<place_id>ChIJywXDWT-uEmsRxyuZ0Inwi04</place_id>
<plus_code>
<global_code>4RRH46J4+R4</global_code>
<compound_code>46J4+R4 Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Mode Kitchen &amp; Bar</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>Ground Floor, 199 George St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8616781</lat>
<lng>151.2077174</lng>
</location>
<viewport>
<southwest>
<lat>-33.8630911</lat>
<lng>151.2064859</lng>
</southwest>
<northeast>
<lat>-33.8603914</lat>
<lng>151.2091856</lng>
</northeast>
</viewport>
</geometry>
<rating>4.4</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJL2r6S0KuEmsRxzk0sfWZYnU</reference>
<opening_hours>
<open_now>true</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEASPu-rtJYGv3tQapjyWGceD6yK1nxYroqbfdKjKQhmo9CgUZXFy7XxcKSMz750vOrWpGmM3x01vIOgFbrI1i2k9j_dPzAL448dG7nr2YWTgnDZ9m7BAJ6GiX6VL8M0jDQDdP3pe_0AmFlXaE3Z8ap8Dht421fJd_6aTB8jM8pgGTJ1</photo_reference>
<width>2048</width>
<height>1536</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/104492734984758109746&quot;&gt;Mode Kitchen &amp;amp; Bar&lt;/a&gt;</html_attribution>
</photo>
<price_level>2</price_level>
<user_ratings_total>217</user_ratings_total>
<place_id>ChIJL2r6S0KuEmsRxzk0sfWZYnU</place_id>
<plus_code>
<global_code>4RRH46Q5+83</global_code>
<compound_code>46Q5+83 Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Long Chim Sydney</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>Colonial Mutual Life Building, Angel Pl, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8671138</lat>
<lng>151.2083642</lng>
</location>
<viewport>
<southwest>
<lat>-33.8684484</lat>
<lng>151.2070880</lng>
</southwest>
<northeast>
<lat>-33.8657487</lat>
<lng>151.2097877</lng>
</northeast>
</viewport>
</geometry>
<rating>4.1</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJ98SIQkCuEmsRQAStwDCAshw</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEDYTJ_ClkXilumsKfeHZcY2_hKSzfiC70R7vT_IusY42yfbtOHUdOAMW8v8d0L0AQvUB7826adF_Qa_atQgeCWd6zqzg_Dzg3-_zRLP-2oJhkUfF1-mA1EjGFzT32Pee_JoTfRBM-d5f7UO7nhCIPN614-yz2ypFMzRh6-3EruKpbVo</photo_reference>
<width>6720</width>
<height>4480</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/106160289014902493250&quot;&gt;Long Chim Sydney&lt;/a&gt;</html_attribution>
</photo>
<price_level>3</price_level>
<user_ratings_total>1234</user_ratings_total>
<place_id>ChIJ98SIQkCuEmsRQAStwDCAshw</place_id>
<plus_code>
<global_code>4RRH46M5+58</global_code>
<compound_code>46M5+58 Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Alberto's Lounge</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>17-19 Alberta St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8777986</lat>
<lng>151.2105307</lng>
</location>
<viewport>
<southwest>
<lat>-33.8791661</lat>
<lng>151.2092540</lng>
</southwest>
<northeast>
<lat>-33.8764664</lat>
<lng>151.2119536</lng>
</northeast>
</viewport>
</geometry>
<rating>4.6</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJU_xO9hOvEmsRERZv-itx524</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEBnAfmnxStOZnhEcR3-976dYbszZ_hzsoAIJC9-_vEn0wvChH6zgnRKsZJ_Zjf5WybF9w_nDTf-vAVwXm2bV7Tk2d7hHmpxawrmlTJwKIEzlrpSWmEDR_UkBZCe8dyu7k9eP34cnn-jhJ0DG-Nqna7B1P2szOwNq0vXthSh2OH-Ju0c</photo_reference>
<width>6000</width>
<height>4000</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/117499940191355312122&quot;&gt;Kreeson Naraidoo&lt;/a&gt;</html_attribution>
</photo>
<user_ratings_total>548</user_ratings_total>
<place_id>ChIJU_xO9hOvEmsRERZv-itx524</place_id>
<plus_code>
<global_code>4RRH46C6+V6</global_code>
<compound_code>46C6+V6 Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Chophouse Sydney</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>25 Bligh St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8654401</lat>
<lng>151.2101016</lng>
</location>
<viewport>
<southwest>
<lat>-33.8668715</lat>
<lng>151.2088779</lng>
</southwest>
<northeast>
<lat>-33.8641719</lat>
<lng>151.2115775</lng>
</northeast>
</viewport>
</geometry>
<rating>4.3</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJZ-VZ30GuEmsRwLVCmEo-B2I</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEB6GmfS8qjARra9ElfvZpvskRpJ4Mr-5LcbS-nSgIT32EGudsWPtYEpi_m2tmOho6jLnUaLj8kbHM65wZHtMygWtwqWOb_MLy1Dzjm8dW90PYxiTvIw1Cz_f42PloxOrPwWA0s4gA_psVouwLMHjgStdijRRAhQQG3dUx3hc93CTQu9</photo_reference>
<width>5325</width>
<height>3550</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/106047480665428753229&quot;&gt;A Google User&lt;/a&gt;</html_attribution>
</photo>
<price_level>3</price_level>
<user_ratings_total>1174</user_ratings_total>
<place_id>ChIJZ-VZ30GuEmsRwLVCmEo-B2I</place_id>
<plus_code>
<global_code>4RRH46M6+R2</global_code>
<compound_code>46M6+R2 Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Ester Restaurant</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>46-52 Meagher St, Chippendale NSW 2008, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8874605</lat>
<lng>151.2008331</lng>
</location>
<viewport>
<southwest>
<lat>-33.8888761</lat>
<lng>151.1994873</lng>
</southwest>
<northeast>
<lat>-33.8861764</lat>
<lng>151.2021869</lng>
</northeast>
</viewport>
</geometry>
<rating>4.5</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJ7WdhetixEmsRzIf7Q-q6ocY</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEAoMIMjNyufL4s2Q9OX6WYTJhV6AQwglO9DCeRukUTCglQDQJSiy0GpHswEtMvD-NmX3YUAqkuoqYh9FT-IWtsOzQu_5GL_xoskTuxEHM44cjViAhc8mux0IyMamRYOt-mD_FNgjhG_I-aZLZRNddpOyKTmgGrLMFT9KxgUsaZbom6s</photo_reference>
<width>3024</width>
<height>4032</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/105059859896721262581&quot;&gt;Angela Tong&lt;/a&gt;</html_attribution>
</photo>
<price_level>3</price_level>
<user_ratings_total>956</user_ratings_total>
<place_id>ChIJ7WdhetixEmsRzIf7Q-q6ocY</place_id>
<plus_code>
<global_code>4RRH4672+28</global_code>
<compound_code>4672+28 Chippendale, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Bentley Restaurant + Bar</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>27 O'Connell St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8652017</lat>
<lng>151.2088233</lng>
</location>
<viewport>
<southwest>
<lat>-33.8667190</lat>
<lng>151.2076581</lng>
</southwest>
<northeast>
<lat>-33.8640194</lat>
<lng>151.2103577</lng>
</northeast>
</viewport>
</geometry>
<rating>4.3</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJybJExkGuEmsRmpbxj1gH_-U</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEAI5yU3pPT-zN5-sdEYxOMbm8M8DWd4suLm2rz7QTFoiQzqrCydQDBWXTfURcmzblCVB_9HjrUTZQVdeDf7_rIckOQO_Qi0xKSSWDZeVCy59pCnJbbesPL6d-dbGmJN8_U76e7MeC0toK2PXu6e3pM1jrvWHqivFYn-DrpgnwzvYFa6</photo_reference>
<width>3024</width>
<height>3024</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/110444118100375330898&quot;&gt;A Google User&lt;/a&gt;</html_attribution>
</photo>
<price_level>4</price_level>
<user_ratings_total>606</user_ratings_total>
<place_id>ChIJybJExkGuEmsRmpbxj1gH_-U</place_id>
<plus_code>
<global_code>4RRH46M5+WG</global_code>
<compound_code>46M5+WG Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>LuMi Dining</name>
<type>bar</type>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>56 Pirrama Rd, Pyrmont NSW 2009, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8668159</lat>
<lng>151.1973855</lng>
</location>
<viewport>
<southwest>
<lat>-33.8682553</lat>
<lng>151.1963434</lng>
</southwest>
<northeast>
<lat>-33.8655556</lat>
<lng>151.1990431</lng>
</northeast>
</viewport>
</geometry>
<rating>4.6</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJDZzo5DeuEmsRsi1wzrIp6HY</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEDFfhA9aufUHpBzIKCP4q_DTYX2Yd_wGEJXa2DYC2AQEoyNewXshA6iTnI6LhzxGxmOKs5j7mSHFkWvDhd8nqoUVmLiA9JHsKRyAt-G__GdhTc84HdRE7ieAC66VN0jqbUXX3TmVPI-5cccriWG5BRIRHAU9f90pmNop1Vti6LC8UB5</photo_reference>
<width>4608</width>
<height>3456</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/111354624612472023397&quot;&gt;Qing-Ling Tran&lt;/a&gt;</html_attribution>
</photo>
<price_level>4</price_level>
<user_ratings_total>648</user_ratings_total>
<place_id>ChIJDZzo5DeuEmsRsi1wzrIp6HY</place_id>
<plus_code>
<global_code>4RRH45MW+7X</global_code>
<compound_code>45MW+7X Pyrmont, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>The Malaya</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>39 Lime St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8678060</lat>
<lng>151.2017201</lng>
</location>
<viewport>
<southwest>
<lat>-33.8691645</lat>
<lng>151.2004812</lng>
</southwest>
<northeast>
<lat>-33.8664648</lat>
<lng>151.2031808</lng>
</northeast>
</viewport>
</geometry>
<rating>4.5</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJ4U8HhjiuEmsRyevJVTxWbFo</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEAI2M5mDoKxPckPx8RAZLGSXAorNmy1FTuRpWhq6J9FwEz3O6EgZ6AVBKVBeqdb55BUQbvRwRrPfpwS6gLWnEic3ZyF4yhQweZlvTWeAokaJfB9x46B-0fZabajOseLRvWlion1EfNE5NukSnUlCNdBOFhVzla6J9CRqnL6pDYuXUZE</photo_reference>
<width>884</width>
<height>885</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/112797482079521405927&quot;&gt;The Malaya&lt;/a&gt;</html_attribution>
</photo>
<price_level>3</price_level>
<user_ratings_total>1344</user_ratings_total>
<place_id>ChIJ4U8HhjiuEmsRyevJVTxWbFo</place_id>
<plus_code>
<global_code>4RRH46J2+VM</global_code>
<compound_code>46J2+VM Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Bopp &amp; Tone</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>60 Carrington St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8668185</lat>
<lng>151.2064637</lng>
</location>
<viewport>
<southwest>
<lat>-33.8681599</lat>
<lng>151.2049975</lng>
</southwest>
<northeast>
<lat>-33.8654602</lat>
<lng>151.2076972</lng>
</northeast>
</viewport>
</geometry>
<rating>4.7</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJfTxskB6vEmsRXPSIwVlleUA</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uECFiufSe67B2S0vtMycnD_cmcvnWn3pm-buo7d9Kw3i0m5Q4nfLh5k3AdpDSFpGBstplDqp68gNtIOX5JCT8HkTge285MwXRj1FdJliukKmcgidNJhJ_R_5M-fZPOnf5Nsg8gSxyY4Rtj0p_eF4JRK_asuAlTN1EZu1zoWybD8jCXUa</photo_reference>
<width>1772</width>
<height>1179</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/103398240624630529212&quot;&gt;Md. Kurban Ali&lt;/a&gt;</html_attribution>
</photo>
<price_level>1</price_level>
<user_ratings_total>689</user_ratings_total>
<place_id>ChIJfTxskB6vEmsRXPSIwVlleUA</place_id>
<plus_code>
<global_code>4RRH46M4+7H</global_code>
<compound_code>46M4+7H Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Balcón by Tapavino</name>
<type>bar</type>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>17 Bligh St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8653056</lat>
<lng>151.2103593</lng>
</location>
<viewport>
<southwest>
<lat>-33.8667105</lat>
<lng>151.2090946</lng>
</southwest>
<northeast>
<lat>-33.8640109</lat>
<lng>151.2117943</lng>
</northeast>
</viewport>
</geometry>
<rating>4.4</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJTxj0dGquEmsR-6tLuaGJl_M</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uED5N65Dx0XRtnVbIqs9ZJH_4Fq94LbS5SR3d47yO6_4peX8mranc7iQD5PYsoIMhRj2HoM-douYt8NSbLxffI8OA82DBqRH51Ws-UZ4l8sdlsPO_K_bhBHqcHwAlyoiCogOdiWbIQOnNxPSk9uIoN6iw2BiYVMJ6QHL5blDvwMPuex8</photo_reference>
<width>4192</width>
<height>2359</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/116762976445257331541&quot;&gt;A Google User&lt;/a&gt;</html_attribution>
</photo>
<price_level>3</price_level>
<user_ratings_total>615</user_ratings_total>
<place_id>ChIJTxj0dGquEmsR-6tLuaGJl_M</place_id>
<plus_code>
<global_code>4RRH46M6+V4</global_code>
<compound_code>46M6+V4 Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>The Restaurant Pendolino</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>Shop 100/412/414 George St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8694151</lat>
<lng>151.2071166</lng>
</location>
<viewport>
<southwest>
<lat>-33.8707651</lat>
<lng>151.2057950</lng>
</southwest>
<northeast>
<lat>-33.8680655</lat>
<lng>151.2084947</lng>
</northeast>
</viewport>
</geometry>
<rating>4.6</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJL1zhdD-uEmsRgDPXKOx1JyU</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEDW1_ot96k5VApQcZXBAVHCx1eUQPDWTeH-0sBvTmeApl3t4sEUkt2AtWLq7Wq8IL9CVGFeahXbUtXJAZHzdITnyUCa-5EG1SeNsOEMWfwiTKoJi50_6hl2FJVHG4BldEoy-gjiLPXfQxSPizoJ9smNrHpY9MJOeOQPGoEnQSCbnFNX</photo_reference>
<width>2048</width>
<height>1365</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/115568244243208638832&quot;&gt;The Restaurant Pendolino&lt;/a&gt;</html_attribution>
</photo>
<price_level>3</price_level>
<user_ratings_total>505</user_ratings_total>
<place_id>ChIJL1zhdD-uEmsRgDPXKOx1JyU</place_id>
<plus_code>
<global_code>4RRH46J4+6R</global_code>
<compound_code>46J4+6R Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Mercado</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>4 Ash St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8669418</lat>
<lng>151.2075261</lng>
</location>
<viewport>
<southwest>
<lat>-33.8682719</lat>
<lng>151.2062253</lng>
</southwest>
<northeast>
<lat>-33.8655722</lat>
<lng>151.2089249</lng>
</northeast>
</viewport>
</geometry>
<rating>4.4</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJCXaGXkCuEmsR_O_xTuWrmT8</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uECysyb1M4tFjho7NYo_zXDvRRoncAcjOCTWTRaHDHyvYqz39a51V1jSRnli1aWRZia5Nj9oA0qyEwwo5EL4Lx9XF8lhCqqHxLrW81zjLdpSZJcgTRXCpl_YX8yGmucIc_T7doIQBbaPoszBcXMmsG9E0QtTDgpJIgXC93MX917qT5wm</photo_reference>
<width>4774</width>
<height>3183</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/108000506056576855925&quot;&gt;Mercado&lt;/a&gt;</html_attribution>
</photo>
<price_level>3</price_level>
<user_ratings_total>572</user_ratings_total>
<place_id>ChIJCXaGXkCuEmsR_O_xTuWrmT8</place_id>
<plus_code>
<global_code>4RRH46M5+62</global_code>
<compound_code>46M5+62 Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Ragazzi Wine and Pasta</name>
<type>restaurant</type>
<type>bar</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>1 Angel Pl, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8670308</lat>
<lng>151.2080670</lng>
</location>
<viewport>
<southwest>
<lat>-33.8683320</lat>
<lng>151.2067692</lng>
</southwest>
<northeast>
<lat>-33.8656324</lat>
<lng>151.2094689</lng>
</northeast>
</viewport>
</geometry>
<rating>4.4</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJTRnbxc6vEmsRnUOl_URYSvs</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEAnB9av4dExHGCmokuwLR2HELk1Ax5XzRo9twmtSQWKb4a0pf8uOhyZ4K0m8lqzIiTQxoGGD-va1NFK2gngsNtblRy1A2FW0hjXZ5MqgTwN3GyCJZndEG2eXDmtqzkR1DabMAwH8jVBhrRzF4oXF7y0i9unIYhejDXF1H8a3HZOKsbC</photo_reference>
<width>1500</width>
<height>1000</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/105392127649390940296&quot;&gt;A Google User&lt;/a&gt;</html_attribution>
</photo>
<user_ratings_total>433</user_ratings_total>
<place_id>ChIJTRnbxc6vEmsRnUOl_URYSvs</place_id>
<plus_code>
<global_code>4RRH46M5+56</global_code>
<compound_code>46M5+56 Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Automata Restaurant</name>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>5 Kensington St, Chippendale NSW 2008, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8848073</lat>
<lng>151.2015895</lng>
</location>
<viewport>
<southwest>
<lat>-33.8861029</lat>
<lng>151.2002601</lng>
</southwest>
<northeast>
<lat>-33.8834033</lat>
<lng>151.2029598</lng>
</northeast>
</viewport>
</geometry>
<rating>4.4</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJhfcGASeuEmsRmj19JwYiqUo</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEA1LtCMc_9HbRv6x9paQJzlTKUAxhvco4YHpUktm4GqhHuz_6-HRWNycAjjO1XllSMlUmH5iIr_Qf6ucjchixAF0Q9ioU2y-9fbiffNItlivtnY000LENzESXgSeffpsulTegsbIuQX_JhgpmJVGHaj_n__qNStW--Fi8N9k3ZCYOg2</photo_reference>
<width>4032</width>
<height>3024</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/106155344778912457393&quot;&gt;IS L&lt;/a&gt;</html_attribution>
</photo>
<price_level>3</price_level>
<user_ratings_total>474</user_ratings_total>
<place_id>ChIJhfcGASeuEmsRmj19JwYiqUo</place_id>
<plus_code>
<global_code>4RRH4682+3J</global_code>
<compound_code>4682+3J Chippendale, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Bennelong</name>
<type>bar</type>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>Bennelong Point, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8567498</lat>
<lng>151.2152535</lng>
</location>
<viewport>
<southwest>
<lat>-33.8599259</lat>
<lng>151.2127784</lng>
</southwest>
<northeast>
<lat>-33.8556911</lat>
<lng>151.2160785</lng>
</northeast>
</viewport>
</geometry>
<rating>4.5</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJQcmNYGauEmsR84D5HAJJUhw</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEBN5MfpfIub5bzvSFitY5CC-ES_tPEsSCAXUk80G3sJySzElU5i2mZTJemIQ3RE5pomM-0v14qU5K18Hy8-Rk85OqKwyhuxzwCN12odr4c1QSWeUxQjxaWtPjB1y4smC8ylvvg44WBYdRIsKI-hApZi0H6KL8Q4iqQeYodiCoOntf7u</photo_reference>
<width>5760</width>
<height>3840</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/112111459665476218482&quot;&gt;A Google User&lt;/a&gt;</html_attribution>
</photo>
<price_level>4</price_level>
<user_ratings_total>1230</user_ratings_total>
<place_id>ChIJQcmNYGauEmsR84D5HAJJUhw</place_id>
<plus_code>
<global_code>4RRH46V8+84</global_code>
<compound_code>46V8+84 Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Machiavelli</name>
<type>meal_takeaway</type>
<type>restaurant</type>
<type>point_of_interest</type>
<type>food</type>
<type>establishment</type>
<formatted_address>123 Clarence St, Sydney NSW 2000, Australia</formatted_address>
<geometry>
<location>
<lat>-33.8671505</lat>
<lng>151.2049296</lng>
</location>
<viewport>
<southwest>
<lat>-33.8685262</lat>
<lng>151.2036581</lng>
</southwest>
<northeast>
<lat>-33.8658266</lat>
<lng>151.2063577</lng>
</northeast>
</viewport>
</geometry>
<rating>4.5</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJgVcAr0CuEmsRJjJm03tgFtE</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEAlIr0YADNigunIHOCD0HLmCGbIdYySxTJ9_20JMJrAu1-W1V7fsayi_5og9BCOP7ncnmUJFhsgjipUhCbntAjETKS0BVVyR8Cj12iIMTHgmXcaIH8c87uD8741Duzf49NdouiKyXikvgY7O1cc9LIREW7sGopmKRXdTfbZZpdgMz0X</photo_reference>
<width>1280</width>
<height>605</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/110393729963013157229&quot;&gt;Nikhil Kuchroo&lt;/a&gt;</html_attribution>
</photo>
<price_level>3</price_level>
<user_ratings_total>529</user_ratings_total>
<place_id>ChIJgVcAr0CuEmsRJjJm03tgFtE</place_id>
<plus_code>
<global_code>4RRH46M3+4X</global_code>
<compound_code>46M3+4X Sydney, New South Wales, Australia</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<next_page_token>Aap_uEC8n0Fzu2WsA7IqaEJty09klsnvXEYZe0aL8dIiZx3fOOfo1xYHZR00qrq-obJbYY9YRkftL-Pv__rQ-efJHSxv19gDtol2ARoY9wpi0ENg-vUAkDVt2W0mOqDy4Kjz9rm5-tzk6fhKR6r4wbLkdgXbKLuNM7KEhsjspU0RC5jQZa4FK_cM9qeUPx5IkPdAa11b9EJwKPEy-ixe77eXeRbEzDYhC5rhylkoOGbF1mHVJVxr--u-Ihe0YaFogaWDx50BcCcMN-eDetaUBJwXDnzHxtirIRF5C_yFavCzWcFn5TOC_z9Ltc-U0L5zbv3lQ7Z6kfVuOeKp4u5_lEHwfz-LuHyETKE6QwQypJUPS3AS8BFs2pYm9r_ruao6YVYsFfDGs1-9QPsVUeSjCN3NuRvbkA</next_page_token>
</PlaceSearchResponse>
PlacesTextSearchResponse
Field
Required
Type
Description
html_attributions
required
Array<string>
May contain a set of attributions about this listing which must be
displayed to the user (some listings may not have attribution).
results
required
Array< Place >
Contains an array of places.
Place Search requests return a subset of the fields that are
returned by Place Details requests. If the field you want is not
returned by Place Search, you can use Place Search to get a
place_id , then use that Place ID to make a Place
Details request.
See Place for more information.
status
required
PlacesSearchStatus
Contains the status of the request, and may contain debugging
information to help you track down why the request failed.
See PlacesSearchStatus for more
information.
error_message
optional
string
When the service returns a status code other than
OK< , there may be an additional
error_message field within the response object. This
field contains more detailed information about thereasons behind the
given status code. This field is not always returned, and its
content is subject to change.
info_messages
optional
Array<string>
When the service returns additional information about the request
specification, there may be an additional
info_messages field within the response object. This
field is only returned for successful requests. It may not always be
returned, and its content is subject to change.
next_page_token
optional
string
Contains a token that can be used to return up to 20 additional
results. A next_page_token won't be returned if there are no
additional results to display. The maximum number of results that
can be returned is 60. There is a short delay between when a
next_page_token is issued, and when it will become valid.
PlacesSearchStatus
Status codes returned by service.
OK indicating the API request was successful.
ZERO_RESULTS indicating that the search was successful but
returned no results. This may occur if the search was passed a
latlng in a remote location.
INVALID_REQUEST indicating the API request was malformed,
generally due to missing required query parameter ( location or
radius ).
OVER_QUERY_LIMIT indicating any of the following:
You have exceeded the QPS limits.
Billing has not been enabled on your account.
The monthly $200 credit, or a self-imposed usage cap, has been exceeded.
The provided method of payment is no longer valid (for example, a credit
card has expired).
See the
Maps FAQ
for more information about how to resolve this error.
REQUEST_DENIED indicating that your request was denied,
generally because:
The request is missing an API key.
The key parameter is invalid.
UNKNOWN_ERROR indicating an unknown error.
Place
Attributes describing a place. Not all attributes will be available for all
place types.
Field
Required
Type
Description
address_components
optional
Array< AddressComponent >
An array containing the separate components applicable to this
address.
See AddressComponent for more
information.
adr_address
optional
string
A representation of the place's address in the
adr microformat .
business_status
optional
string
Indicates the operational status of the place, if it is a business.
If no data exists, business_status is not returned.
The allowed values include: OPERATIONAL ,
CLOSED_TEMPORARILY , and CLOSED_PERMANENTLY
curbside_pickup
optional
boolean
Specifies if the business supports curbside pickup.
current_opening_hours
optional
PlaceOpeningHours
Contains the hours of operation for the next seven days (including
today). The time period starts at midnight on the date of the
request and ends at 11:59 pm six days later. This field includes the
special_days subfield of all hours, set for dates that
have exceptional hours.
See PlaceOpeningHours for more
information.
delivery
optional
boolean
Specifies if the business supports delivery.
dine_in
optional
boolean
Specifies if the business supports indoor or outdoor seating
options.
editorial_summary
optional
PlaceEditorialSummary
Contains a summary of the place. A summary is comprised of a textual
overview, and also includes the language code for these if
applicable. Summary text must be presented as-is and can't be
modified or altered.
See PlaceEditorialSummary for
more information.
formatted_address
optional
string
A string containing the human-readable address of this place.
Often this address is equivalent to the postal address. Note that
some countries, such as the United Kingdom, don't allow
distribution of true postal addresses due to licensing restrictions.
The formatted address is logically composed of one or more address
components. For example, the address "111 8th Avenue, New York, NY"
consists of the following components: "111" (the street number),
"8th Avenue" (the route), "New York" (the city) and "NY" (the US
state).
Don't parse the formatted address programmatically. Instead you
should use the individual address components, which the API response
includes in addition to the formatted address field.
formatted_phone_number
optional
string
Contains the place's phone number in its
local format .
geometry
optional
Geometry
Contains the location and viewport for the location.
See Geometry for more information.
icon
optional
string
Contains the URL of a suggested icon which may be displayed to the
user when indicating this result on a map.
icon_background_color
optional
string
Contains the default HEX color code for the place's category.
icon_mask_base_uri
optional
string
Contains the URL of a recommended icon, minus the
.svg or .png file type extension.
international_phone_number
optional
string
Contains the place's phone number in international format.
International format includes the country code, and is prefixed with
the plus, +, sign. For example, the international_phone_number for
Google's Sydney, Australia office is +61 2 9374 4000 .
name
optional
string
Contains the human-readable name for the returned result. For
establishment results, this is usually the
canonicalized business name.
opening_hours
optional
PlaceOpeningHours
Contains the regular hours of operation.
See PlaceOpeningHours for more
information.
permanently_closed
optional
boolean
permanently_closed is deprecated.
Use business_status to get the operational status of
businesses.
photos
optional
Array< PlacePhoto >
An array of photo objects, each containing a reference to an image.
A request may return up to ten photos. More information about place
photos and how you can use the images in your application can be
found in the
Place Photos
documentation.
See PlacePhoto for more information.
place_id
optional
string
A textual identifier that uniquely identifies a place. To retrieve
information about the place, pass this identifier in the
place_id field of a Places API request. For more
information about place IDs, see the
place ID overview .
plus_code
optional
PlusCode
An encoded location reference, derived from latitude and longitude
coordinates, that represents an area: 1/8000th of a degree by
1/8000th of a degree (about 14m x 14m at the equator) or smaller.
Plus codes can be used as a replacement for street addresses in
places where they don't exist (where buildings are not numbered or
streets are not named). See
Open Location Code
and plus codes .
See PlusCode for more information.
price_level
optional
number
The price level of the place, on a scale of 0 to 4. The exact amount
indicated by a specific value will vary from region to region. Price
levels are interpreted as follows:
0 Free
1 Inexpensive
2 Moderate
3 Expensive
4 Very Expensive
rating
optional
number
Contains the place's rating, from 1.0 to 5.0, based on aggregated
user reviews.
reference
optional
string
reference is deprecated.
reservable
optional
boolean
Specifies if the place supports reservations.
reviews
optional
Array< PlaceReview >
A JSON array of up to five reviews. By default, the reviews are
sorted in order of relevance. Use the
reviews_sort request parameter to control sorting.
For most_relevant (default), reviews are sorted by
relevance; the service will bias the results to return reviews
originally written in the preferred language.
For newest , reviews are sorted in chronological
order; the preferred language does not affect the sort order.
Google recommends indicating to users whether results are ordered by
most_relevant or newest .
See PlaceReview for more information.
scope
optional
string
scope is deprecated.
secondary_opening_hours
optional
Array< PlaceOpeningHours >
Contains an array of entries for the next seven days including
information about secondary hours of a business. Secondary hours are
different from a business's main hours. For example, a restaurant
can specify drive through hours or delivery hours as its secondary
hours. This field populates the type subfield, which
draws from a predefined list of opening hours types (such as
DRIVE_THROUGH , PICKUP , or
TAKEOUT ) based on the types of the place. This field
includes the special_days subfield of all hours, set
for dates that have exceptional hours.
See PlaceOpeningHours for more
information.
serves_beer
optional
boolean
Specifies if the place serves beer.
serves_breakfast
optional
boolean
Specifies if the place serves breakfast.
serves_brunch
optional
boolean
Specifies if the place serves brunch.
serves_dinner
optional
boolean
Specifies if the place serves dinner.
serves_lunch
optional
boolean
Specifies if the place serves lunch.
serves_vegetarian_food
optional
boolean
Specifies if the place serves vegetarian food.
serves_wine
optional
boolean
Specifies if the place serves wine.
takeout
optional
boolean
Specifies if the business supports takeout.
types
optional
Array<string>
Contains an array of feature types describing the given result. See
the list of
supported types .
url
optional
string
Contains the URL of the official Google page for this place. This
will be the Google-owned page that contains the best available
information about the place. Applications must link to or embed this
page on any screen that shows detailed results about the place to
the user.
user_ratings_total
optional
number
The total number of reviews, with or without text, for this place.
utc_offset
optional
number
Contains the number of minutes this place's current timezone is
offset from UTC. For example, for places in Sydney, Australia during
daylight saving time this would be 660 (+11 hours from UTC), and for
places in California outside of daylight saving time this would be
-480 (-8 hours from UTC).
vicinity
optional
string
For establishment ( types:["establishment", ...])
results only, the vicinity field contains a simplified
address for the place, including the street name, street number, and
locality, but not the province/state, postal code, or country.
For all other results, the vicinity field contains the
name of the narrowest political ( types:["political", ...] ) feature that is present in the address of the result.
This content is meant to be read as-is. Don't programmatically
parse the formatted address.
website
optional
string
The authoritative website for this place, such as a business'
homepage.
wheelchair_accessible_entrance
optional
boolean
Specifies if the place has an entrance that is
wheelchair-accessible.
PlaceEditorialSummary
Contains a summary of the place. A summary is comprised of a textual overview,
and also includes the language code for these if applicable. Summary text must
be presented as-is and can't be modified or altered.
Field
Required
Type
Description
language
optional
string
The language of the previous fields. May not always be present.
overview
optional
string
A medium-length textual summary of the place.
PlaceOpeningHours
An object describing the opening hours of a place.
Field
Required
Type
Description
open_now
optional
boolean
A boolean value indicating if the place is open at the current time.
periods
optional
Array< PlaceOpeningHoursPeriod >
An array of opening periods covering seven days, starting from
Sunday, in chronological order.
See
PlaceOpeningHoursPeriod for
more information.
special_days
optional
Array< PlaceSpecialDay >
An array of up to seven entries corresponding to the next seven
days.
See PlaceSpecialDay for more
information.
type
optional
string
A type string used to identify the type of secondary hours (for
example, DRIVE_THROUGH , HAPPY_HOUR ,
DELIVERY , TAKEOUT , KITCHEN ,
BREAKFAST , LUNCH , DINNER ,
BRUNCH , PICKUP ,
SENIOR_HOURS ). Set for
secondary_opening_hours only.
weekday_text
optional
Array<string>
An array of strings describing in human-readable text the hours of
the place.
PlaceOpeningHoursPeriod
Field
Required
Type
Description
open
required
PlaceOpeningHoursPeriodDetail
Contains a pair of day and time objects describing when the place
opens.
See
PlaceOpeningHoursPeriodDetail
for more information.
close
optional
PlaceOpeningHoursPeriodDetail
May contain a pair of day and time objects describing when the place
closes. If a place is always open, the close section will be missing
from the response. Clients can rely on always-open being represented
as an open period containing day with value 0 and time
with value 0000 , and no close .
See
PlaceOpeningHoursPeriodDetail
for more information.
PlaceSpecialDay
Field
Required
Type
Description
date
optional
string
A date expressed in RFC3339 format in the local timezone for the
place, for example 2010-12-31.
exceptional_hours
optional
boolean
True if there are exceptional hours for this day. If
true , this means that there is at least one exception
for this day. Exceptions cause different values to occur in the
subfields of current_opening_hours and
secondary_opening_hours such as periods ,
weekday_text , open_now . The exceptions
apply to the hours, and the hours are used to generate the other
fields.
PlaceOpeningHoursPeriodDetail
Field
Required
Type
Description
day
required
number
A number from 0–6, corresponding to the days of the week, starting
on Sunday. For example, 2 means Tuesday.
time
required
string
May contain a time of day in 24-hour hhmm format. Values are in the
range 0000–2359. The time will be reported in the place's time zone.
date
optional
string
A date expressed in RFC3339 format in the local timezone for the
place, for example 2010-12-31.
truncated
optional
boolean
True if a given period was truncated due to a seven-day cutoff,
where the period starts before midnight on the date of the request
and/or ends at or after midnight on the last day. This property
indicates that the period for open or close can extend past this
seven-day cutoff.
PlacePhoto
A photo of a Place. The photo can be accessed using the
Place Photo
API using an url in the following pattern:
https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=photo_reference&key=YOUR_API_KEY
See
Place Photos
for more information.
Field
Required
Type
Description
height
required
number
The height of the photo.
html_attributions
required
Array<string>
The HTML attributions for the photo.
photo_reference
required
string
A string used to identify the photo when you perform a Photo
request.
width
required
number
The width of the photo.
PlaceReview
A review of the place submitted by a user.
Field
Required
Type
Description
author_name
required
string
The name of the user who submitted the review. Anonymous reviews are
attributed to "A Google user".
rating
required
number
The user's overall rating for this place. This is a whole number,
ranging from 1 to 5.
relative_time_description
required
string
The time that the review was submitted in text, relative to the
current time.
time
required
number
The time that the review was submitted, measured in the number of
seconds since since midnight, January 1, 1970 UTC.
author_url
optional
string
The URL to the user's Google Maps Local Guides profile, if
available.
language
optional
string
An IETF language code indicating the language of the returned
review.This field contains the main language tag only, and not the
secondary tag indicating country or region. For example, all the
English reviews are tagged as 'en', and not 'en-AU' or 'en-UK' and
so on.This field is empty if there is only a rating with no review
text.
original_language
optional
string
An IETF language code indicating the original language of the
review. If the review has been translated, then
original_language != language .This field
contains the main language tag only, and not the secondary tag
indicating country or region. For example, all the English reviews
are tagged as 'en', and not 'en-AU' or 'en-UK' and so on.This field
is empty if there is only a rating with no review text.
profile_photo_url
optional
string
The URL to the user's profile photo, if available.
text
optional
string
The user's review. When reviewing a location with Google Places,
text reviews are considered optional. Therefore, this field may be
empty. Note that this field may include basic HTML markup. For
example, the entity reference &amp; may represent
an ampersand character.
translated
optional
boolean
A boolean value indicating if the review was translated from the
original language it was written in.If a review has been translated,
corresponding to a value of true, Google recommends that you
indicate this to your users. For example, you can add the following
string, "Translated by Google", to the review.
Accessing Additional Results
By default, each response returns up to
20 establishment results
per query; however, each search can return as many as 60 results, split
across three pages. If your search will return more than
20, then the search response will include
an additional value — next_page_token . Pass the value of
the next_page_token to the pagetoken parameter of
a new request to see the next set of results.
If the
next_page_token is null, or is not returned, then there are no
further results.
Retrying the request with the same
next_page_token will return the next page of results.
Setting pagetoken will cause any other parameters to be
ignored.
You can request a new page up to two times following
the original query.
Each request, including a request using next_page_token ,
counts as a single request against your usage limits and is charged
separately.
There is a delay of a few seconds between when a
next_page_token is issued, and when it will become
valid. Requesting the next page before it is available will return an
INVALID_REQUEST response. Requests with
next_page_token are always charged.
Note: The correct use of
next_page_token is to request the next page of results only
when requested by the user. We recommend that you either implement either
true paging (showing 20 results at a time) or append additional places to
the bottom of a results page once the user scrolls to the end.
For example, in the query below, we search for restaurants near Darling
Harbour, in Sydney Australia, and rank the results by distance. You can see
that the response contains a next_page_token property.
{
"html_attributions" : [],
"next_page_token" : "CpQCAgEAAFxg8o-eU7_uKn7Yqjana-HQIx1hr5BrT4zBaEko29ANsXtp9mrqN0yrKWhf-y2PUpHRLQb1GT-mtxNcXou8TwkXhi1Jbk-ReY7oulyuvKSQrw1lgJElggGlo0d6indiH1U-tDwquw4tU_UXoQ_sj8OBo8XBUuWjuuFShqmLMP-0W59Vr6CaXdLrF8M3wFR4dUUhSf5UC4QCLaOMVP92lyh0OdtF_m_9Dt7lz-Wniod9zDrHeDsz_by570K3jL1VuDKTl_U1cJ0mzz_zDHGfOUf7VU1kVIs1WnM9SGvnm8YZURLTtMLMWx8-doGUE56Af_VfKjGDYW361OOIj9GmkyCFtaoCmTMIr5kgyeUSnB-IEhDlzujVrV6O9Mt7N4DagR6RGhT3g1viYLS4kO5YindU6dm3GIof1Q",
"results" : [...]
"status" : "OK"
}
To see the next set of results you can submit a new query, passing the
result of the next_page_token to the pagetoken
parameter. For example:
https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=CpQCAgEAAFxg8o-eU7_uKn7Yqjana-HQIx1hr5BrT4zBaEko29ANsXtp9mrqN0yrKWhf-y2PUpHRLQb1GT-mtxNcXou8TwkXhi1Jbk-ReY7oulyuvKSQrw1lgJElggGlo0d6indiH1U-tDwquw4tU_UXoQ_sj8OBo8XBUuWjuuFShqmLMP-0W59Vr6CaXdLrF8M3wFR4dUUhSf5UC4QCLaOMVP92lyh0OdtF_m_9Dt7lz-Wniod9zDrHeDsz_by570K3jL1VuDKTl_U1cJ0mzz_zDHGfOUf7VU1kVIs1WnM9SGvnm8YZURLTtMLMWx8-doGUE56Af_VfKjGDYW361OOIj9GmkyCFtaoCmTMIr5kgyeUSnB-IEhDlzujVrV6O9Mt7N4DagR6RGhT3g1viYLS4kO5YindU6dm3GIof1Q&key= YOUR_API_KEY
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
