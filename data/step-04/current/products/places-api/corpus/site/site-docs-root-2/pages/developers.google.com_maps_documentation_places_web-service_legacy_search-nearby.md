---
title: "Nearby Search (Legacy) \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/search-nearby
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/search-nearby
  title: "Nearby Search (Legacy) \_|\_ Places API \_|\_ Google for Developers"
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
Nearby Search (Legacy)
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
Nearby Search (Legacy) lets you search for places within a specified area. You can
refine your search request by supplying keywords or specifying the type of
place you are searching for.
Nearby Search (Legacy) and Text Search (Legacy) return all of the
available data fields for the selected place (a
subset of the supported fields ),
and you will be
billed accordingly
There is no way to constrain Nearby Search (Legacy) or Text Search (Legacy) to only return specific fields.
To avoid requesting (and paying for) data that you don't need, use a
Find Place (Legacy) request instead.
Nearby Search (Legacy) requests
A Nearby Search (Legacy) request is an HTTP URL of the following form:
https://maps.googleapis.com/maps/api/place/nearbysearch/ output ? parameters
where output may be either of the following values:
json (recommended) indicates output in JavaScript
Object Notation (JSON)
xml indicates output as XML
Certain parameters are required to initiate a Nearby Search (Legacy) request. As is
standard in URLs, all parameters are separated using the ampersand
( & ) character.
Required parameters
location
The point around which to retrieve place information. This must be
specified as latitude,longitude .
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
keyword
The text string on which to search, for example: "restaurant" or "123 Main
Street". This must be a place name, address, or category of
establishments. Any other types of input can generate errors and are not
guaranteed to return valid results. The Google Places service will return
candidate matches based on this string and order the results based on
their perceived relevance.
Explicitly including location information using this parameter may
conflict with the location, radius, and rankby parameters, causing
unexpected results.
If this parameter is omitted, places with a business_status of
CLOSED_TEMPORARILY or CLOSED_PERMANENTLY won't be returned.
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
name
name is deprecated.
Equivalent to keyword . Values in this field are combined with
values in the keyword field and passed as part of the same
search string.
opennow
Returns only those places that are open for business at the time the query
is sent. Places that don't specify opening hours in the Google Places
database won't be returned if you include this parameter in your query.
pagetoken
Returns up to 20 results from a previously run search. Setting a
pagetoken parameter will execute a search with the same
parameters used previously — all parameters other than pagetoken will be
ignored.
rankby
Specifies the order in which results are listed. Possible values are:
prominence (default). This option sorts results based on
their importance. Ranking will favor prominent places within the set
radius over nearby places that match but that are less prominent.
Prominence can be affected by a place's ranking in Google's index,
global popularity, and other factors. When prominence is specified, the
radius parameter is required.
distance . This option biases search results in ascending
order by their distance from the specified location. When
distance is specified, one or more of keyword ,
name , or type is required and
radius is disallowed.
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
Nearby Search (Legacy) example
curl
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY'
HTTP
https://maps.googleapis.com/maps/api/place/nearbysearch/json
?keyword=cruise
&location=-33.8670522%2C151.1957362
&radius=1500
&type=restaurant
&key=YOUR_API_KEY
Note: In this example, you need to replace the key
with your own API key in order for the request to work in your application.
Nearby Search (Legacy) responses
The following example shows a Nearby Search (Legacy) response.
JSON
{
"html_attributions" : [],
"results" :
[
{
"business_status" : "OPERATIONAL" ,
"geometry" :
{
"location" : { "lat" : -33.8587323 , "lng" : 151.2100055 },
"viewport" :
{
"northeast" :
{ "lat" : -33.85739847010727 , "lng" : 151.2112436298927 },
"southwest" :
{ "lat" : -33.86009812989271 , "lng" : 151.2085439701072 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet" ,
"name" : "Cruise Bar" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 608 ,
"html_attributions" :
[
' A Google User ' ,
],
"photo_reference" : "Aap_uECvJIZuXT-uLDYm4DPbrV7gXVPeplbTWUgcOJ6rnfc4bUYCEAwPU_AmXGIaj0PDhWPbmrjQC8hhuXRJQjnA1-iREGEn7I0ZneHg5OP1mDT7lYVpa1hUPoz7cn8iCGBN9MynjOPSUe-UooRrFw2XEXOLgRJ-uKr6tGQUp77CWVocpcoG" ,
"width" : 1080 ,
},
],
"place_id" : "ChIJi6C1MxquEmsR9-c-3O48ykI" ,
"plus_code" :
{
"compound_code" : "46R6+G2 The Rocks, New South Wales" ,
"global_code" : "4RRH46R6+G2" ,
},
"price_level" : 2 ,
"rating" : 4 ,
"reference" : "ChIJi6C1MxquEmsR9-c-3O48ykI" ,
"scope" : "GOOGLE" ,
"types" :
[ "bar" , "restaurant" , "food" , "point_of_interest" , "establishment" ],
"user_ratings_total" : 1269 ,
"vicinity" : "Level 1, 2 and 3, Overseas Passenger Terminal, Circular Quay W, The Rocks" ,
},
{
"business_status" : "OPERATIONAL" ,
"geometry" :
{
"location" : { "lat" : -33.8675219 , "lng" : 151.2016502 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86614532010728 , "lng" : 151.2031259298927 },
"southwest" :
{ "lat" : -33.86884497989272 , "lng" : 151.2004262701072 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png" ,
"icon_background_color" : "#7B9EB0" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet" ,
"name" : "Sydney Harbour Dinner Cruises" ,
"opening_hours" : { "open_now" : true },
"photos" :
[
{
"height" : 835 ,
"html_attributions" :
[
' A Google User ' ,
],
"photo_reference" : "Aap_uEBVsYnNcrpRixtrlHBztigZh70CwYkNWZzQnqJ39SjeBo_wvgKf-kXc6tgaMLBdQrRKmxmSKjOezoZrv-sHKVbTX0OI48HBqYYVnQiZQ-WGeuQDsLEPwX7LaVPa68nUAxX114Zpqt7bryoO9wL4qXdgEnopbOp5WWLALhKEHoIEH7f7" ,
"width" : 1200 ,
},
],
"place_id" : "ChIJM1mOVTS6EmsRKaDzrTsgids" ,
"plus_code" :
{
"compound_code" : "46J2+XM Sydney, New South Wales" ,
"global_code" : "4RRH46J2+XM" ,
},
"rating" : 4.8 ,
"reference" : "ChIJM1mOVTS6EmsRKaDzrTsgids" ,
"scope" : "GOOGLE" ,
"types" :
[
"tourist_attraction" ,
"travel_agency" ,
"restaurant" ,
"food" ,
"point_of_interest" ,
"establishment" ,
],
"user_ratings_total" : 9 ,
"vicinity" : "32 The Promenade, Sydney" ,
},
{
"business_status" : "OPERATIONAL" ,
"geometry" :
{
"location" : { "lat" : -33.8676569 , "lng" : 151.2017213 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86629922010728 , "lng" : 151.2031712798927 },
"southwest" :
{ "lat" : -33.86899887989272 , "lng" : 151.2004716201073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png" ,
"icon_background_color" : "#7B9EB0" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet" ,
"name" : "Clearview Sydney Harbour Cruises" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 685 ,
"html_attributions" :
[
' Clearview Glass Boa t Cruises ' ,
],
"photo_reference" : "Aap_uEAlExjnXA0VWyb_oYwCJ8utWG_Ennhwmn_xadpgenMNUgTuxrvgf1Xdw4bsbL6kFSWH7bhbpVHK1esdNY37ancJvbL_Gnsc7EZ5KEBNPvYZ_ZEyLco4a5v34LFkodxfFZbJ-ejO3zN4W_0C37P5jAmTnLWMNFYUPvoU3UMi70qHRNF5" ,
"width" : 1024 ,
},
],
"place_id" : "ChIJNQfwZTiuEmsR1m1x9w0E2V0" ,
"plus_code" :
{
"compound_code" : "46J2+WM Sydney, New South Wales" ,
"global_code" : "4RRH46J2+WM" ,
},
"rating" : 3.8 ,
"reference" : "ChIJNQfwZTiuEmsR1m1x9w0E2V0" ,
"scope" : "GOOGLE" ,
"types" :
[
"travel_agency" ,
"restaurant" ,
"food" ,
"point_of_interest" ,
"establishment" ,
],
"user_ratings_total" : 49 ,
"vicinity" : "32 The Promenade King Street Wharf 5, Sydney" ,
},
{
"business_status" : "OPERATIONAL" ,
"geometry" :
{
"location" : { "lat" : -33.8677035 , "lng" : 151.2017297 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86634597010728 , "lng" : 151.2031781298927 },
"southwest" :
{ "lat" : -33.86904562989272 , "lng" : 151.2004784701072 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png" ,
"icon_background_color" : "#7B9EB0" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet" ,
"name" : "Sydney Harbour Lunch Cruise" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 545 ,
"html_attributions" :
[
' Syd ne y Harbour Lu n ch Cruise ' ,
],
"photo_reference" : "Aap_uEBFyQ2xDzHk7dGF_FTvNeJ01NQD6GROq89rufdGQl5Gi0zVfpnETBjPK2v7UEDl_6F-m8aR5FcEWJMqPaH4Oh_CQh2jaUAUAesUInucpCe7OFdleSYJ_8kgunhsIvGf1D1s_pes6Rk2JMVEs8rEs6ZHSTmUQXX2Yh-Gt9MuPQdYNuNv" ,
"width" : 969 ,
},
],
"place_id" : "ChIJUbf3iDiuEmsROJxXbhYO7cM" ,
"plus_code" :
{
"compound_code" : "46J2+WM Sydney, New South Wales" ,
"global_code" : "4RRH46J2+WM" ,
},
"rating" : 3.9 ,
"reference" : "ChIJUbf3iDiuEmsROJxXbhYO7cM" ,
"scope" : "GOOGLE" ,
"types" :
[
"travel_agency" ,
"restaurant" ,
"food" ,
"point_of_interest" ,
"establishment" ,
],
"user_ratings_total" : 23 ,
"vicinity" : "5/32 The Promenade, Sydney" ,
},
{
"business_status" : "OPERATIONAL" ,
"geometry" :
{
"location" : { "lat" : -33.8675883 , "lng" : 151.2016452 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86623847010728 , "lng" : 151.2029950298927 },
"southwest" :
{ "lat" : -33.86893812989273 , "lng" : 151.2002953701073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png" ,
"icon_background_color" : "#7B9EB0" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet" ,
"name" : "Sydney Showboats - Dinner Cruise With Show" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 4912 ,
"html_attributions" :
[
' A Google User ' ,
],
"photo_reference" : "Aap_uED1aGaMs8xYfiuzeBqVcFsk3yguUujdE4S3rNThMpLtoU0RukF40KCt0CAxgHP1HoY8Z7NYcWvax6qmMMVPBbmzGhoaiwiAAyv2GGA9vhcgsJ5w0LweT0y1lgRGZxU3nZIdNLiYAp9JHM171UkN04H6UqYSxKVZ8N_f2aslkqOaBF_e" ,
"width" : 7360 ,
},
],
"place_id" : "ChIJjRuIiTiuEmsRCHhYnrWiSok" ,
"plus_code" :
{
"compound_code" : "46J2+XM Sydney, New South Wales" ,
"global_code" : "4RRH46J2+XM" ,
},
"rating" : 4.1 ,
"reference" : "ChIJjRuIiTiuEmsRCHhYnrWiSok" ,
"scope" : "GOOGLE" ,
"types" :
[
"travel_agency" ,
"restaurant" ,
"food" ,
"point_of_interest" ,
"establishment" ,
],
"user_ratings_total" : 119 ,
"vicinity" : "32 The Promenade, King Street Wharf, 5, Sydney" ,
},
{
"business_status" : "OPERATIONAL" ,
"geometry" :
{
"location" : { "lat" : -33.8677035 , "lng" : 151.2017297 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86634597010728 , "lng" : 151.2031781298927 },
"southwest" :
{ "lat" : -33.86904562989272 , "lng" : 151.2004784701072 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png" ,
"icon_background_color" : "#7B9EB0" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet" ,
"name" : "Magistic Cruises" ,
"opening_hours" : { "open_now" : true },
"photos" :
[
{
"height" : 1536 ,
"html_attributions" :
[
' A Google User ' ,
],
"photo_reference" : "Aap_uEC8bq-YphfIDcdxANBfgGMBIX2B0ggNep9ddVoePj6sfdcdusIn07x8biaxevZ_6BpzDDRsUL8No5P3ftI4on_pqbAbIEUL5gFGgezpVZ3M9GWvKdJm3njO_aJaghWl4_aQb75c0WGYDRFPhn6fWsLkD7KxodviJeCX4OCGt1eRJnlK" ,
"width" : 2048 ,
},
],
"place_id" : "ChIJxRjqYTiuEmsRGebAA_chDLE" ,
"plus_code" :
{
"compound_code" : "46J2+WM Sydney, New South Wales" ,
"global_code" : "4RRH46J2+WM" ,
},
"rating" : 3.9 ,
"reference" : "ChIJxRjqYTiuEmsRGebAA_chDLE" ,
"scope" : "GOOGLE" ,
"types" :
[
"tourist_attraction" ,
"travel_agency" ,
"restaurant" ,
"food" ,
"point_of_interest" ,
"establishment" ,
],
"user_ratings_total" : 99 ,
"vicinity" : "King Street Wharf, 32 The Promenade, Sydney" ,
},
{
"business_status" : "OPERATIONAL" ,
"geometry" :
{
"location" : { "lat" : -33.8609391 , "lng" : 151.2098735 },
"viewport" :
{
"northeast" :
{ "lat" : -33.85958927010727 , "lng" : 151.2112233298927 },
"southwest" :
{ "lat" : -33.86228892989272 , "lng" : 151.2085236701072 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png" ,
"icon_background_color" : "#7B9EB0" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet" ,
"name" : "Australian Cruise Group" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 1536 ,
"html_attributions" :
[
' Kei t h Bauma n ' ,
],
"photo_reference" : "Aap_uED7aBwIbN6iuoZi8e9xCrt6F_EhppGCBfzYCgypetw8cGn4Ui0Y3JZe3QJ0buf0zc54BtPz-SWXxecPd6kDvNNZD5Eu_ZzTP13rXMzSDJa6UcwFiXU4y3qYrWAyJ6mtYrd2PJgw0KzvYaZoPze7Ka6zG6k3IOjeSICDYH6YOzkXhelj" ,
"width" : 2048 ,
},
],
"place_id" : "ChIJpU8KgUKuEmsRKErVGEaa11w" ,
"plus_code" :
{
"compound_code" : "46Q5+JW Sydney, New South Wales" ,
"global_code" : "4RRH46Q5+JW" ,
},
"rating" : 4.4 ,
"reference" : "ChIJpU8KgUKuEmsRKErVGEaa11w" ,
"scope" : "GOOGLE" ,
"types" :
[
"travel_agency" ,
"restaurant" ,
"food" ,
"point_of_interest" ,
"establishment" ,
],
"user_ratings_total" : 5 ,
"vicinity" : "6 Cirular Quay, Sydney" ,
},
{
"business_status" : "OPERATIONAL" ,
"geometry" :
{
"location" : { "lat" : -33.8686058 , "lng" : 151.2018206 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86730002010728 , "lng" : 151.2032717798927 },
"southwest" :
{ "lat" : -33.86999967989272 , "lng" : 151.2005721201073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png" ,
"icon_background_color" : "#7B9EB0" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet" ,
"name" : "Rhythmboat Cruises" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 2269 ,
"html_attributions" :
[
' Rhy t hmboa t Syd ne y Harbour Cruises ' ,
],
"photo_reference" : "Aap_uEAT8eop-IsfSAQ3KP6YXRNRsFkESXDecsaPnaVhq5bZzny5guvhS4smciianRGbZgDtFtAcU-ZXTaBfuh80CFw8vpJyKaB4grgW_CW64rU1JF9FDy_M8HtEk3rOrMhPDiF8ns-mc16E4rWSuAQIc76Du_eCd63ofoErESOtSWAQVcew" ,
"width" : 4032 ,
},
],
"place_id" : "ChIJyWEHuEmuEmsRm9hTkapTCrk" ,
"plus_code" :
{
"compound_code" : "46J2+HP Sydney, New South Wales" ,
"global_code" : "4RRH46J2+HP" ,
},
"rating" : 3.9 ,
"reference" : "ChIJyWEHuEmuEmsRm9hTkapTCrk" ,
"scope" : "GOOGLE" ,
"types" :
[
"travel_agency" ,
"restaurant" ,
"food" ,
"point_of_interest" ,
"establishment" ,
],
"user_ratings_total" : 30 ,
"vicinity" : "King Street Wharf, King St, Sydney" ,
},
{
"business_status" : "OPERATIONAL" ,
"geometry" :
{
"location" : { "lat" : -33.8712692 , "lng" : 151.1898651 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86952792010727 , "lng" : 151.1914560298927 },
"southwest" :
{ "lat" : -33.87222757989272 , "lng" : 151.1887563701073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png" ,
"icon_background_color" : "#7B9EB0" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet" ,
"name" : "Glass Island" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 4480 ,
"html_attributions" :
[
' A Google User ' ,
],
"photo_reference" : "Aap_uEAaToCBaHP7Gfdjc740gwIkQcjeUD97NO0TKXJ5IXB0CLGQA6slEpHn4k9LwyhoAzzbSTXJduYyFIkHVmQWGp34NggRxrtOWp7sJf5N6j0ASYlJPmAtWUaaCWnbx_pxdndsopeJ7PYn9kTiMgFcSs-GeipI8hDZgAJswMBnfsO0xWQ-" ,
"width" : 6720 ,
},
],
"place_id" : "ChIJnScuboavEmsRyh-FGxhc3pw" ,
"plus_code" :
{
"compound_code" : "45HQ+FW Pyrmont, New South Wales" ,
"global_code" : "4RRH45HQ+FW" ,
},
"rating" : 4.1 ,
"reference" : "ChIJnScuboavEmsRyh-FGxhc3pw" ,
"scope" : "GOOGLE" ,
"types" :
[ "bar" , "restaurant" , "food" , "point_of_interest" , "establishment" ],
"user_ratings_total" : 90 ,
"vicinity" : "37 Bank St, Pyrmont" ,
},
{
"business_status" : "OPERATIONAL" ,
"geometry" :
{
"location" : { "lat" : -33.85876140000001 , "lng" : 151.2100004 },
"viewport" :
{
"northeast" :
{ "lat" : -33.85737742010728 , "lng" : 151.2111319298927 },
"southwest" :
{ "lat" : -33.86007707989272 , "lng" : 151.2084322701072 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "Junk Lounge" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 608 ,
"html_attributions" :
[
' A Google User ' ,
],
"photo_reference" : "Aap_uEDaHF9VZFV88tQqFyIgmPlcbCsK-ScCGuUVGh0mTAP4OzWh_0q0T5rPbeC7bas7vD5vC9oS95jtdr4oOnQmhGDAIbHkv4E6UHrQIl0f3XZ-3-RRDjn293w4qQb_BfhbPPO3nokU7npfMfVvCcelWf9WHiWNHT4EEHrFtvuhAWKobTnC" ,
"width" : 1080 ,
},
],
"place_id" : "ChIJq9W3HZOvEmsRYtKNTRmq34M" ,
"plus_code" :
{
"compound_code" : "46R6+F2 The Rocks, New South Wales" ,
"global_code" : "4RRH46R6+F2" ,
},
"price_level" : 2 ,
"rating" : 4.1 ,
"reference" : "ChIJq9W3HZOvEmsRYtKNTRmq34M" ,
"scope" : "GOOGLE" ,
"types" : [ "restaurant" , "food" , "point_of_interest" , "establishment" ],
"user_ratings_total" : 63 ,
"vicinity" : "Level 2, Overseas Passenger Terminal, Circular Quay W, The Rocks" ,
},
{
"business_status" : "OPERATIONAL" ,
"geometry" :
{
"location" : { "lat" : -33.8677035 , "lng" : 151.2017297 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86634597010728 , "lng" : 151.2031781298927 },
"southwest" :
{ "lat" : -33.86904562989272 , "lng" : 151.2004784701072 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png" ,
"icon_background_color" : "#7B9EB0" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet" ,
"name" : "Sydney New Year's Eve Cruises" ,
"opening_hours" : { "open_now" : true },
"photos" :
[
{
"height" : 1600 ,
"html_attributions" :
[
' A Google User ' ,
],
"photo_reference" : "Aap_uEDceKHtQ9Hf2eHwnQYXLqrwZ1X2LYVhsfXbqrpIm3_lXZ9apURjAXtVgRVTGxJPD7BtaqR8C7bwaSTakmi0Pazn7g3suj8ZaQRBqheT3KVJDhZ9_GwVInLkWbxqnhivEXs1a-MC_J8XF1SL_5AQ3mAETgiLRQ04116IAEV5vHyIGRsa" ,
"width" : 2400 ,
},
],
"place_id" : "ChIJ__8_hziuEmsR27ucFXECfOg" ,
"plus_code" :
{
"compound_code" : "46J2+WM Sydney, New South Wales" ,
"global_code" : "4RRH46J2+WM" ,
},
"rating" : 5 ,
"reference" : "ChIJ__8_hziuEmsR27ucFXECfOg" ,
"scope" : "GOOGLE" ,
"types" :
[
"travel_agency" ,
"restaurant" ,
"food" ,
"point_of_interest" ,
"establishment" ,
],
"user_ratings_total" : 5 ,
"vicinity" : "King Street Wharf 5, 32 The Promenade, Sydney" ,
},
{
"business_status" : "OPERATIONAL" ,
"geometry" :
{
"location" : { "lat" : -33.8669866 , "lng" : 151.2017231 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86563197010727 , "lng" : 151.2031347298927 },
"southwest" :
{ "lat" : -33.86833162989272 , "lng" : 151.2004350701073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png" ,
"icon_background_color" : "#13B5C7" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet" ,
"name" : "King Street Wharf Darling Harbour" ,
"opening_hours" : { "open_now" : true },
"photos" :
[
{
"height" : 3024 ,
"html_attributions" :
[
' 朱品貞 ' ,
],
"photo_reference" : "Aap_uEDwKXVOjIaCj3LptOdd86B5umsdG7Z3jcvqcpUVLwHS6w8VGEkphgC8-shAx95CrsuXpnKz-XVIixVmgagQHKPH3vSLLqJ6LOAR7Q-_jiyx3ELXD0pm7AARiAtQAMBN9A-oqbtvGbE27yDpvBS1lKe9PCm-dMfrHIIcsS91Qeq2E4b6" ,
"width" : 4032 ,
},
],
"place_id" : "ChIJkfDzJ72vEmsR8xtYbk5f0p0" ,
"plus_code" :
{
"compound_code" : "46M2+6M Sydney, New South Wales" ,
"global_code" : "4RRH46M2+6M" ,
},
"rating" : 4.4 ,
"reference" : "ChIJkfDzJ72vEmsR8xtYbk5f0p0" ,
"scope" : "GOOGLE" ,
"types" :
[
"tourist_attraction" ,
"convenience_store" ,
"bowling_alley" ,
"travel_agency" ,
"bar" ,
"restaurant" ,
"food" ,
"point_of_interest" ,
"store" ,
"establishment" ,
],
"user_ratings_total" : 3213 ,
"vicinity" : "The Promenade, Lime St, Sydney" ,
},
{
"business_status" : "OPERATIONAL" ,
"geometry" :
{
"location" : { "lat" : -33.870383 , "lng" : 151.1979245 },
"viewport" :
{
"northeast" :
{ "lat" : -33.86901092010727 , "lng" : 151.1991702798927 },
"southwest" :
{ "lat" : -33.87171057989271 , "lng" : 151.1964706201073 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" ,
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet" ,
"name" : "The Little Snail Restaurant" ,
"opening_hours" : { "open_now" : false },
"photos" :
[
{
"height" : 900 ,
"html_attributions" :
[
' The Li ttle S na il ' ,
],
"photo_reference" : "Aap_uEA9aHKkB_6VoFx4VHRSp19PCwnTOuGfpmDYw1NdYNbzncfdjjfEmiiFz-E4tIJ6iGVZjR_bejX6wNr5thJjqlcdQ2PvPyTTo1jGtxk31JG9b6Vd0vu_v4Ep7yutzf3KTzBjYFBIGsYPf3Pj0DptMWPLP7fn33SBT7YmRqDEoGcUsBzw" ,
"width" : 1350 ,
},
],
"place_id" : "ChIJtwapWjeuEmsRcxV5JARHpSk" ,
"plus_code" :
{
"compound_code" : "45HX+R5 Pyrmont, New South Wales" ,
"global_code" : "4RRH45HX+R5" ,
},
"price_level" : 2 ,
"rating" : 4.5 ,
"reference" : "ChIJtwapWjeuEmsRcxV5JARHpSk" ,
"scope" : "GOOGLE" ,
"types" : [ "restaurant" , "food" , "point_of_interest" , "establishment" ],
"user_ratings_total" : 1916 ,
"vicinity" : "3/50 Murray St, Pyrmont" ,
},
],
"status" : "OK" ,
}
XML
<?xml version="1.0" encoding="UTF-8"?>
<PlaceSearchResponse>
<status>OK</status>
<result>
<name>Cruise Bar</name>
<vicinity>Level 1, 2 and 3, Overseas Passenger Terminal, Circular Quay W, The Rocks</vicinity>
<type>bar</type>
<type>restaurant</type>
<type>food</type>
<type>point_of_interest</type>
<type>establishment</type>
<geometry>
<location>
<lat>-33.8587323</lat>
<lng>151.2100055</lng>
</location>
<viewport>
<southwest>
<lat>-33.8600981</lat>
<lng>151.2085440</lng>
</southwest>
<northeast>
<lat>-33.8573985</lat>
<lng>151.2112436</lng>
</northeast>
</viewport>
</geometry>
<rating>4.0</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png</icon>
<reference>ChIJi6C1MxquEmsR9-c-3O48ykI</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEALIq4sgBHhIYWWapOH2NV1T2I7YdOiLzEH7z-483I764cId1sZkbzSq-hVYTk1PQeaHuZzlRfA7-ilwJ3QWon4b37ePd-PBwZbOwFZHxhYs0Cs7jRSgMHWfOzGivp6ZFG4iupyz50qS5pBZT1WbA2ufacTq_U21TtgffQD31wKRPQk</photo_reference>
<width>1080</width>
<height>608</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/112582655193348962755&quot;&gt;A Google User&lt;/a&gt;</html_attribution>
</photo>
<price_level>2</price_level>
<user_ratings_total>1269</user_ratings_total>
<place_id>ChIJi6C1MxquEmsR9-c-3O48ykI</place_id>
<scope>GOOGLE</scope>
<plus_code>
<global_code>4RRH46R6+G2</global_code>
<compound_code>46R6+G2 The Rocks, New South Wales</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Sydney Harbour Dinner Cruises</name>
<vicinity>32 The Promenade, Sydney</vicinity>
<type>tourist_attraction</type>
<type>restaurant</type>
<type>food</type>
<type>travel_agency</type>
<type>point_of_interest</type>
<type>establishment</type>
<geometry>
<location>
<lat>-33.8675219</lat>
<lng>151.2016502</lng>
</location>
<viewport>
<southwest>
<lat>-33.8688450</lat>
<lng>151.2004263</lng>
</southwest>
<northeast>
<lat>-33.8661453</lat>
<lng>151.2031259</lng>
</northeast>
</viewport>
</geometry>
<rating>4.8</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png</icon>
<reference>ChIJM1mOVTS6EmsRKaDzrTsgids</reference>
<opening_hours>
<open_now>true</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEB5jH7GXdcozv1Y5HX18syo4f128S58NVUnqBbLJMpWbC39K49wp-wzsLOsUT8QKDaag6ISFL8hl1vVuig4jkc5fMMkWKiqw5PY-ebcWZ5tI3gEXEYGGoG_mDAulaMLudUpSwgBx2_RLnA0SSiugqqQUTYlkGyCZSe8HSyngVczy6XN</photo_reference>
<width>1200</width>
<height>835</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/109764923610545394994&quot;&gt;A Google User&lt;/a&gt;</html_attribution>
</photo>
<user_ratings_total>9</user_ratings_total>
<place_id>ChIJM1mOVTS6EmsRKaDzrTsgids</place_id>
<scope>GOOGLE</scope>
<plus_code>
<global_code>4RRH46J2+XM</global_code>
<compound_code>46J2+XM Sydney, New South Wales</compound_code>
</plus_code>
<icon_background_color>#7B9EB0</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Clearview Sydney Harbour Cruises</name>
<vicinity>32 The Promenade King Street Wharf 5, Sydney</vicinity>
<type>restaurant</type>
<type>food</type>
<type>travel_agency</type>
<type>point_of_interest</type>
<type>establishment</type>
<geometry>
<location>
<lat>-33.8676569</lat>
<lng>151.2017213</lng>
</location>
<viewport>
<southwest>
<lat>-33.8689989</lat>
<lng>151.2004716</lng>
</southwest>
<northeast>
<lat>-33.8662992</lat>
<lng>151.2031713</lng>
</northeast>
</viewport>
</geometry>
<rating>3.8</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png</icon>
<reference>ChIJNQfwZTiuEmsR1m1x9w0E2V0</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uED7hBZqIUaBgFu5q8_xoLMrkWIXUau5D7J2T2fS3HAk4j3aoOp5MQKiujaS8ByzfU9zshp37EMMW6tZe67qLYku2AW-QOVeTbJlyxQ7bqgtSZ_YTo_ES1Xw1bBx8wv8BJYTJZFRzh8enBdH0kLy-oICBpm2fDexARp4CG8Dsxz5bqGA</photo_reference>
<width>1024</width>
<height>685</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/114394575270272775071&quot;&gt;Clearview Glass Boat Cruises&lt;/a&gt;</html_attribution>
</photo>
<user_ratings_total>49</user_ratings_total>
<place_id>ChIJNQfwZTiuEmsR1m1x9w0E2V0</place_id>
<scope>GOOGLE</scope>
<plus_code>
<global_code>4RRH46J2+WM</global_code>
<compound_code>46J2+WM Sydney, New South Wales</compound_code>
</plus_code>
<icon_background_color>#7B9EB0</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Sydney Harbour Lunch Cruise</name>
<vicinity>5/32 The Promenade, Sydney</vicinity>
<type>restaurant</type>
<type>food</type>
<type>travel_agency</type>
<type>point_of_interest</type>
<type>establishment</type>
<geometry>
<location>
<lat>-33.8677035</lat>
<lng>151.2017297</lng>
</location>
<viewport>
<southwest>
<lat>-33.8690456</lat>
<lng>151.2004785</lng>
</southwest>
<northeast>
<lat>-33.8663460</lat>
<lng>151.2031781</lng>
</northeast>
</viewport>
</geometry>
<rating>3.9</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png</icon>
<reference>ChIJUbf3iDiuEmsROJxXbhYO7cM</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uED1kwFA2W4XWHpSNZBxiE10JfyZEJrOz8aAPXpR2GbOg0Pc-yPHJYjt6m007fRdSG2PzvsWdZIFE-lny_NRBGUrSzpk9eNVzDp3GLUeV9G0HXcQv7IhEK6vtm_Updlv66bi8S07h3e_lFiHIzFw0TLVfWXjc63Pm94NN1kug7RPJa-6</photo_reference>
<width>969</width>
<height>545</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/102428257696490257922&quot;&gt;Sydney Harbour Lunch Cruise&lt;/a&gt;</html_attribution>
</photo>
<user_ratings_total>23</user_ratings_total>
<place_id>ChIJUbf3iDiuEmsROJxXbhYO7cM</place_id>
<scope>GOOGLE</scope>
<plus_code>
<global_code>4RRH46J2+WM</global_code>
<compound_code>46J2+WM Sydney, New South Wales</compound_code>
</plus_code>
<icon_background_color>#7B9EB0</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Sydney Showboats - Dinner Cruise With Show</name>
<vicinity>32 The Promenade, King Street Wharf, 5, Sydney</vicinity>
<type>restaurant</type>
<type>food</type>
<type>travel_agency</type>
<type>point_of_interest</type>
<type>establishment</type>
<geometry>
<location>
<lat>-33.8675883</lat>
<lng>151.2016452</lng>
</location>
<viewport>
<southwest>
<lat>-33.8689381</lat>
<lng>151.2002954</lng>
</southwest>
<northeast>
<lat>-33.8662385</lat>
<lng>151.2029950</lng>
</northeast>
</viewport>
</geometry>
<rating>4.1</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png</icon>
<reference>ChIJjRuIiTiuEmsRCHhYnrWiSok</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEAGYIvNdkpJvsbVLPNaMlKukR9jvX48rKMo_TPqbSBRYqvYGExwQM8YvHrz83U7UOJosNI0kay5wV9vZdr9fR12ElFlK5fY3xdoS9N9T08ejq2gLABJJK-Bwl4W2IPw9imoWef1BYMVP07WhXhVOs05a-2A3Qm5fKCRILgUis5pMeCg</photo_reference>
<width>7360</width>
<height>4912</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/105311284660389698992&quot;&gt;A Google User&lt;/a&gt;</html_attribution>
</photo>
<user_ratings_total>119</user_ratings_total>
<place_id>ChIJjRuIiTiuEmsRCHhYnrWiSok</place_id>
<scope>GOOGLE</scope>
<plus_code>
<global_code>4RRH46J2+XM</global_code>
<compound_code>46J2+XM Sydney, New South Wales</compound_code>
</plus_code>
<icon_background_color>#7B9EB0</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Magistic Cruises</name>
<vicinity>King Street Wharf, 32 The Promenade, Sydney</vicinity>
<type>tourist_attraction</type>
<type>restaurant</type>
<type>food</type>
<type>travel_agency</type>
<type>point_of_interest</type>
<type>establishment</type>
<geometry>
<location>
<lat>-33.8677035</lat>
<lng>151.2017297</lng>
</location>
<viewport>
<southwest>
<lat>-33.8690456</lat>
<lng>151.2004785</lng>
</southwest>
<northeast>
<lat>-33.8663460</lat>
<lng>151.2031781</lng>
</northeast>
</viewport>
</geometry>
<rating>3.9</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png</icon>
<reference>ChIJxRjqYTiuEmsRGebAA_chDLE</reference>
<opening_hours>
<open_now>true</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEDbALKhgsD-bIG6fWxrermkmKtpIKDHthAySc9EjPEpWDQQtYsSgB4AqLVMArTFCWd04Vb9U51st96ONjtDmWf8KsjKwYtkWxYDFzaY9ZmO2UQpV3rnqjmNHXtIsCdjjwADQbumAkjn5WzBJ-DqlVZs9NmlpLvAY6Jg4DGhduWdewv4</photo_reference>
<width>2048</width>
<height>1536</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/103073818292552522030&quot;&gt;A Google User&lt;/a&gt;</html_attribution>
</photo>
<user_ratings_total>99</user_ratings_total>
<place_id>ChIJxRjqYTiuEmsRGebAA_chDLE</place_id>
<scope>GOOGLE</scope>
<plus_code>
<global_code>4RRH46J2+WM</global_code>
<compound_code>46J2+WM Sydney, New South Wales</compound_code>
</plus_code>
<icon_background_color>#7B9EB0</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Australian Cruise Group</name>
<vicinity>6 Cirular Quay, Sydney</vicinity>
<type>restaurant</type>
<type>food</type>
<type>travel_agency</type>
<type>point_of_interest</type>
<type>establishment</type>
<geometry>
<location>
<lat>-33.8609391</lat>
<lng>151.2098735</lng>
</location>
<viewport>
<southwest>
<lat>-33.8622889</lat>
<lng>151.2085237</lng>
</southwest>
<northeast>
<lat>-33.8595893</lat>
<lng>151.2112233</lng>
</northeast>
</viewport>
</geometry>
<rating>4.4</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png</icon>
<reference>ChIJpU8KgUKuEmsRKErVGEaa11w</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uECGcpPB2lEO6gIB3QzHeviDhXcG-RV3TXuJPiBHGWbDxnflOhymebF45afUMBIW9r3xC2_gHfiqicV4VnooMJ2-Kwy0YocFXk1_0kkmR1HPV2D9kN9h-yPVK5d6oSPMdmY4MjCut3n8Tv9vt6iu44DDnafb2j78R34EcLQ4iFl0sots</photo_reference>
<width>2048</width>
<height>1536</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/113088009011192061895&quot;&gt;Keith Bauman&lt;/a&gt;</html_attribution>
</photo>
<user_ratings_total>5</user_ratings_total>
<place_id>ChIJpU8KgUKuEmsRKErVGEaa11w</place_id>
<scope>GOOGLE</scope>
<plus_code>
<global_code>4RRH46Q5+JW</global_code>
<compound_code>46Q5+JW Sydney, New South Wales</compound_code>
</plus_code>
<icon_background_color>#7B9EB0</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Rhythmboat Cruises</name>
<vicinity>King Street Wharf, King St, Sydney</vicinity>
<type>restaurant</type>
<type>food</type>
<type>travel_agency</type>
<type>point_of_interest</type>
<type>establishment</type>
<geometry>
<location>
<lat>-33.8686058</lat>
<lng>151.2018206</lng>
</location>
<viewport>
<southwest>
<lat>-33.8699997</lat>
<lng>151.2005721</lng>
</southwest>
<northeast>
<lat>-33.8673000</lat>
<lng>151.2032718</lng>
</northeast>
</viewport>
</geometry>
<rating>3.9</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png</icon>
<reference>ChIJyWEHuEmuEmsRm9hTkapTCrk</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEAP5i23uwF3dotBD71Tr0YcEXCHnPOem0CKzKev5YX5dvp63wX7rbLZ3bHNNshIf9P0v3z6GKdF8yJkX3wxXWvzv7EfLwWbwGXYkA-vrXm72ek66P1FlNtNHcbIIyF9HQ1MDXZAhwLcnNJObbk8z9lKmCkBQJCQnkLsGHshZ_ZZCM6L</photo_reference>
<width>4032</width>
<height>2269</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/104066891898402903288&quot;&gt;Rhythmboat Sydney Harbour Cruises&lt;/a&gt;</html_attribution>
</photo>
<user_ratings_total>30</user_ratings_total>
<place_id>ChIJyWEHuEmuEmsRm9hTkapTCrk</place_id>
<scope>GOOGLE</scope>
<plus_code>
<global_code>4RRH46J2+HP</global_code>
<compound_code>46J2+HP Sydney, New South Wales</compound_code>
</plus_code>
<icon_background_color>#7B9EB0</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Glass Island</name>
<vicinity>37 Bank St, Pyrmont</vicinity>
<type>bar</type>
<type>restaurant</type>
<type>food</type>
<type>point_of_interest</type>
<type>establishment</type>
<geometry>
<location>
<lat>-33.8712692</lat>
<lng>151.1898651</lng>
</location>
<viewport>
<southwest>
<lat>-33.8722276</lat>
<lng>151.1887564</lng>
</southwest>
<northeast>
<lat>-33.8695279</lat>
<lng>151.1914560</lng>
</northeast>
</viewport>
</geometry>
<rating>4.1</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png</icon>
<reference>ChIJnScuboavEmsRyh-FGxhc3pw</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uECzZC-aNaQunm_EMgTFeFyR5-u7E19MSZNuRbK14Tq-GxK-glsLoeqtmdOkA307MesbO6Xqau_7bGM4w5vwxMnPPkc8tEQniNQjgC1M1g9OpMwdd4_8nhmBwOMkzUZk1KU0R9CFYxx7YY5a-HywQSK8kTr1FLXX3y23bSkaDvsgenBr</photo_reference>
<width>6720</width>
<height>4480</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/117745044320706972021&quot;&gt;A Google User&lt;/a&gt;</html_attribution>
</photo>
<user_ratings_total>90</user_ratings_total>
<place_id>ChIJnScuboavEmsRyh-FGxhc3pw</place_id>
<scope>GOOGLE</scope>
<plus_code>
<global_code>4RRH45HQ+FW</global_code>
<compound_code>45HQ+FW Pyrmont, New South Wales</compound_code>
</plus_code>
<icon_background_color>#7B9EB0</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Junk Lounge</name>
<vicinity>Level 2, Overseas Passenger Terminal, Circular Quay W, The Rocks</vicinity>
<type>restaurant</type>
<type>food</type>
<type>point_of_interest</type>
<type>establishment</type>
<geometry>
<location>
<lat>-33.8587614</lat>
<lng>151.2100004</lng>
</location>
<viewport>
<southwest>
<lat>-33.8600771</lat>
<lng>151.2084323</lng>
</southwest>
<northeast>
<lat>-33.8573774</lat>
<lng>151.2111319</lng>
</northeast>
</viewport>
</geometry>
<rating>4.1</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJq9W3HZOvEmsRYtKNTRmq34M</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEBNQHy0vHfeUWJid28kkZIf4EcgMp50UmkpvhoYPwZJBYImlASnKV4fHlaXTlNQI8H_jUqDpToiMwFOE2XsDpHBdLeZGxpoMq5ThL1gSEMo1zp9U_Pd5jhamilQbpkEeZN_CVeHLAnOX5CG21IF8pda1Zj8IuuENzaKi2BLNQ5TCyYq</photo_reference>
<width>1080</width>
<height>608</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/104473997089847488714&quot;&gt;A Google User&lt;/a&gt;</html_attribution>
</photo>
<price_level>2</price_level>
<user_ratings_total>63</user_ratings_total>
<place_id>ChIJq9W3HZOvEmsRYtKNTRmq34M</place_id>
<scope>GOOGLE</scope>
<plus_code>
<global_code>4RRH46R6+F2</global_code>
<compound_code>46R6+F2 The Rocks, New South Wales</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
<result>
<name>Sydney New Year's Eve Cruises</name>
<vicinity>King Street Wharf 5, 32 The Promenade, Sydney</vicinity>
<type>restaurant</type>
<type>food</type>
<type>travel_agency</type>
<type>point_of_interest</type>
<type>establishment</type>
<geometry>
<location>
<lat>-33.8677035</lat>
<lng>151.2017297</lng>
</location>
<viewport>
<southwest>
<lat>-33.8690456</lat>
<lng>151.2004785</lng>
</southwest>
<northeast>
<lat>-33.8663460</lat>
<lng>151.2031781</lng>
</northeast>
</viewport>
</geometry>
<rating>5.0</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png</icon>
<reference>ChIJ__8_hziuEmsR27ucFXECfOg</reference>
<opening_hours>
<open_now>true</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEB3hrLc-p5rV8oczY8fo4vdDdw1c0ZXLzbcgek15WzOon1Qd3WbMfmx994E05fFb5Tt1E60Iux0jaEwGkoy477ru-ZYRD1KUZrfMNw46ciZhnHRD2ZX_nWVYkw2VG_AdEDw1DJ3YQEuDP4EJ5IpsoKianbWyIlmaeuy63TfjdvuFs18</photo_reference>
<width>2400</width>
<height>1600</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/115281801304517408477&quot;&gt;A Google User&lt;/a&gt;</html_attribution>
</photo>
<user_ratings_total>5</user_ratings_total>
<place_id>ChIJ__8_hziuEmsR27ucFXECfOg</place_id>
<scope>GOOGLE</scope>
<plus_code>
<global_code>4RRH46J2+WM</global_code>
<compound_code>46J2+WM Sydney, New South Wales</compound_code>
</plus_code>
<icon_background_color>#7B9EB0</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet</icon_mask_base_uri>
</result>
<result>
<name>King Street Wharf Darling Harbour</name>
<vicinity>The Promenade, Lime St, Sydney</vicinity>
<type>tourist_attraction</type>
<type>bowling_alley</type>
<type>convenience_store</type>
<type>bar</type>
<type>restaurant</type>
<type>food</type>
<type>travel_agency</type>
<type>point_of_interest</type>
<type>store</type>
<type>establishment</type>
<geometry>
<location>
<lat>-33.8669866</lat>
<lng>151.2017231</lng>
</location>
<viewport>
<southwest>
<lat>-33.8683316</lat>
<lng>151.2004351</lng>
</southwest>
<northeast>
<lat>-33.8656320</lat>
<lng>151.2031347</lng>
</northeast>
</viewport>
</geometry>
<rating>4.4</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png</icon>
<reference>ChIJkfDzJ72vEmsR8xtYbk5f0p0</reference>
<opening_hours>
<open_now>true</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEACFUVsoIAR-DdQfFF-95EUG-vLZ4rE0twMHUMam4JM7qPjrfmrVpC80g8CHtMEcimKBxtiGYaEVp7dw12FhfkJw8hZI-bK4Ls9BY3AnvdoUbfVkBvLC7yqT5ly-gMW2ZT8rLc5-mKaZHbWZyZEPgWs84Qd6KPnEKRx6dGNEevYaUlL</photo_reference>
<width>4032</width>
<height>3024</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/101920674986627213698&quot;&gt;朱品貞&lt;/a&gt;</html_attribution>
</photo>
<user_ratings_total>3213</user_ratings_total>
<place_id>ChIJkfDzJ72vEmsR8xtYbk5f0p0</place_id>
<scope>GOOGLE</scope>
<plus_code>
<global_code>4RRH46M2+6M</global_code>
<compound_code>46M2+6M Sydney, New South Wales</compound_code>
</plus_code>
<icon_background_color>#13B5C7</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet</icon_mask_base_uri>
</result>
<result>
<name>The Little Snail Restaurant</name>
<vicinity>3/50 Murray St, Pyrmont</vicinity>
<type>restaurant</type>
<type>food</type>
<type>point_of_interest</type>
<type>establishment</type>
<geometry>
<location>
<lat>-33.8703830</lat>
<lng>151.1979245</lng>
</location>
<viewport>
<southwest>
<lat>-33.8717106</lat>
<lng>151.1964706</lng>
</southwest>
<northeast>
<lat>-33.8690109</lat>
<lng>151.1991703</lng>
</northeast>
</viewport>
</geometry>
<rating>4.5</rating>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png</icon>
<reference>ChIJtwapWjeuEmsRcxV5JARHpSk</reference>
<opening_hours>
<open_now>false</open_now>
</opening_hours>
<photo>
<photo_reference>Aap_uEB9EuRqd4be_9HrlUI7lbC5aDokS8UASO_ogA9OFQwEZsFD_jXDwK2Xc2kQm_wDE9TBI_20Na4TcRkgZoers93pw9cJ5RAbedKbUYAvAJz9c-zWKdqRd7pWaOlInQmbJVohI4ZsqbtlhynDqmfgX1SIccGuh066nlxyX7oFvYoLSbNb</photo_reference>
<width>1350</width>
<height>900</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/114727320476039103791&quot;&gt;The Little Snail&lt;/a&gt;</html_attribution>
</photo>
<price_level>2</price_level>
<user_ratings_total>1916</user_ratings_total>
<place_id>ChIJtwapWjeuEmsRcxV5JARHpSk</place_id>
<scope>GOOGLE</scope>
<plus_code>
<global_code>4RRH45HX+R5</global_code>
<compound_code>45HX+R5 Pyrmont, New South Wales</compound_code>
</plus_code>
<icon_background_color>#FF9E67</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet</icon_mask_base_uri>
</result>
</PlaceSearchResponse>
PlacesNearbySearchResponse
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
results. A next_page_token will not be returned if there are no
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
applicable. Summary text must be presented as-is and can not be
modified or altered.
See PlaceEditorialSummary for
more information.
formatted_address
optional
string
A string containing the human-readable address of this place.
Often this address is equivalent to the postal address. Note that
some countries, such as the United Kingdom, do not allow
distribution of true postal addresses due to licensing restrictions.
The formatted address is logically composed of one or more address
components. For example, the address "111 8th Avenue, New York, NY"
consists of the following components: "111" (the street number),
"8th Avenue" (the route), "New York" (the city) and "NY" (the US
state).
Do not parse the formatted address programmatically. Instead you
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
places where they do not exist (where buildings are not numbered or
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
Contains the number of minutes this place’s current timezone is
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
This content is meant to be read as-is. Do not programmatically
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
be presented as-is and can not be modified or altered.
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
range 0000–2359. The time will be reported in the place’s time zone.
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
A photo of a Place. The photo can be accesed via the
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
empty. Note that this field may include simple HTML markup. For
example, the entity reference &amp; may represent
an ampersand character.
translated
optional
boolean
A boolean value indicating if the review was translated from the
original language it was written in.If a review has been translated,
corresponding to a value of true, Google recommends that you
indicate this to your users. For example, you can add the following
string, “Translated by Google”, to the review.
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
